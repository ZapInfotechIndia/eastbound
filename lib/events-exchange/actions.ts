"use server";

import { eq } from "drizzle-orm";

import { site } from "@/data/site";
import { requirePortalAccess } from "@/lib/auth/profile";
import { db } from "@/lib/db";
import {
  eventPortalRequests,
  eventProposals,
  eventUpdateSubscribers,
  type EventPortalRequestSource,
} from "@/lib/db/schema";

import {
  eventRequestSourceToDb,
  HONEYPOT_FIELD,
  type EventRequestSource,
} from "./constants";
import {
  sendEventPortalRequestNotification,
  sendEventProposalNotification,
  sendEventUpdatesSubscribeNotification,
} from "./email";
import { getSubmitterIpHash, isEventPortalRateLimited } from "./rate-limit";

export type EventsExchangeActionState = {
  error?: string;
  success?: string;
} | null;

function readString(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function getPortalContext() {
  const { profile } = await requirePortalAccess("event");
  return {
    profileId: profile.id,
    portalUserName: profile.name,
  };
}

function honeypotSuccessMessage(kind: "request" | "proposal" | "subscribe") {
  const messages = {
    request:
      "Thank you — we've received your request. A member of our team will be in touch within 24 hours.",
    proposal:
      "Thank you — we've received your request. A member of our team will be in touch within 8 hours.",
    subscribe:
      "Thank you for subscribing. We'll share new updates as they're published.",
  };
  return messages[kind];
}

function emailFailureMessage(emailResultMessage: string) {
  return `We saved your submission, but could not notify our team by email (${emailResultMessage}). Please contact us at ${site.email} so we can follow up — avoid resubmitting unless you are unsure we received it.`;
}

export async function submitEventPortalRequest(
  expectedSource: EventRequestSource,
  _prevState: EventsExchangeActionState,
  formData: FormData,
): Promise<EventsExchangeActionState> {
  const honeypot = readString(formData, HONEYPOT_FIELD);
  if (honeypot) {
    return { success: honeypotSuccessMessage("request") };
  }

  const sourceRaw = readString(formData, "source");
  if (sourceRaw !== expectedSource) {
    return {
      error: "This form could not be verified. Please refresh and try again.",
    };
  }

  const dbSource: EventPortalRequestSource =
    eventRequestSourceToDb[expectedSource];

  const ipHash = await getSubmitterIpHash();
  if (await isEventPortalRateLimited(ipHash)) {
    return {
      error:
        "You've sent several requests recently. Please wait about an hour before trying again, or email us directly.",
    };
  }

  const name = readString(formData, "name");
  const email = readString(formData, "email").toLowerCase();
  const note = readString(formData, "note");

  if (!name) {
    return { error: "Please enter your name." };
  }

  if (!email) {
    return { error: "Please enter your email address." };
  }

  if (!isValidEmail(email)) {
    return { error: "Please enter a valid email address." };
  }

  if (!note) {
    return { error: "Please add a short note about what you need." };
  }

  const { profileId, portalUserName } = await getPortalContext();

  try {
    await db.insert(eventPortalRequests).values({
      source: dbSource,
      name,
      email,
      note,
      profileId,
      portalUserName,
      submitterIpHash: ipHash,
    });
  } catch {
    return {
      error:
        "We couldn't save your request right now. Please try again in a few minutes or contact us by email.",
    };
  }

  const emailResult = await sendEventPortalRequestNotification({
    source: dbSource,
    name,
    email,
    note,
    portalUserName,
  });

  if (!emailResult.ok) {
    return { error: emailFailureMessage(emailResult.message) };
  }

  return {
    success: honeypotSuccessMessage("request"),
  };
}

export async function submitEventProposal(
  _prevState: EventsExchangeActionState,
  formData: FormData,
): Promise<EventsExchangeActionState> {
  const honeypot = readString(formData, HONEYPOT_FIELD);
  if (honeypot) {
    return { success: honeypotSuccessMessage("proposal") };
  }

  const sourceRaw = readString(formData, "source");
  if (sourceRaw !== "request-a-proposal") {
    return {
      error: "This form could not be verified. Please refresh and try again.",
    };
  }

  const ipHash = await getSubmitterIpHash();
  if (await isEventPortalRateLimited(ipHash)) {
    return {
      error:
        "You've sent several requests recently. Please wait about an hour before trying again, or email us directly.",
    };
  }

  const name = readString(formData, "name");
  const email = readString(formData, "email").toLowerCase();
  const company = readString(formData, "company") || null;
  const eventType = readString(formData, "eventType") || null;
  const destinations = readString(formData, "destinations") || null;
  const groupSize = readString(formData, "groupSize") || null;
  const dates = readString(formData, "dates") || null;
  const datesFlexible = readString(formData, "datesFlexible") || null;
  const budget = readString(formData, "budget") || null;
  const interests = readString(formData, "interests") || null;
  const details = readString(formData, "details") || null;

  if (!name) {
    return { error: "Please enter your name." };
  }

  if (!email) {
    return { error: "Please enter your email address." };
  }

  if (!isValidEmail(email)) {
    return { error: "Please enter a valid email address." };
  }

  const { profileId, portalUserName } = await getPortalContext();

  try {
    await db.insert(eventProposals).values({
      name,
      email,
      company,
      eventType,
      destinations,
      groupSize,
      dates,
      datesFlexible,
      budget,
      interests,
      details,
      profileId,
      portalUserName,
      submitterIpHash: ipHash,
    });
  } catch {
    return {
      error:
        "We couldn't save your request right now. Please try again in a few minutes or contact us by email.",
    };
  }

  const emailResult = await sendEventProposalNotification({
    name,
    email,
    company,
    eventType,
    destinations,
    groupSize,
    dates,
    datesFlexible,
    budget,
    interests,
    details,
    portalUserName,
  });

  if (!emailResult.ok) {
    return { error: emailFailureMessage(emailResult.message) };
  }

  return {
    success: honeypotSuccessMessage("proposal"),
  };
}

export async function subscribeEventUpdates(
  _prevState: EventsExchangeActionState,
  formData: FormData,
): Promise<EventsExchangeActionState> {
  const honeypot = readString(formData, HONEYPOT_FIELD);
  if (honeypot) {
    return { success: honeypotSuccessMessage("subscribe") };
  }

  const sourceRaw = readString(formData, "source");
  if (sourceRaw !== "event-updates") {
    return {
      error: "This form could not be verified. Please refresh and try again.",
    };
  }

  const ipHash = await getSubmitterIpHash();
  if (await isEventPortalRateLimited(ipHash)) {
    return {
      error:
        "You've sent several requests recently. Please wait about an hour before trying again, or email us directly.",
    };
  }

  const name = readString(formData, "name");
  const email = readString(formData, "email").toLowerCase();

  if (!name) {
    return { error: "Please enter your name." };
  }

  if (!email) {
    return { error: "Please enter your email address." };
  }

  if (!isValidEmail(email)) {
    return { error: "Please enter a valid email address." };
  }

  const { profileId, portalUserName } = await getPortalContext();

  let isResubscribe = false;

  try {
    const [existing] = await db
      .select({ id: eventUpdateSubscribers.id })
      .from(eventUpdateSubscribers)
      .where(eq(eventUpdateSubscribers.email, email))
      .limit(1);

    isResubscribe = Boolean(existing);

    await db
      .insert(eventUpdateSubscribers)
      .values({
        name,
        email,
        profileId,
        portalUserName,
        submitterIpHash: ipHash,
      })
      .onConflictDoUpdate({
        target: eventUpdateSubscribers.email,
        set: {
          name,
          profileId,
          portalUserName,
          updatedAt: new Date(),
        },
      });
  } catch {
    return {
      error:
        "We couldn't save your subscription right now. Please try again in a few minutes or contact us by email.",
    };
  }

  const emailResult = await sendEventUpdatesSubscribeNotification({
    name,
    email,
    portalUserName,
    isResubscribe,
  });

  if (!emailResult.ok) {
    return { error: emailFailureMessage(emailResult.message) };
  }

  return {
    success: honeypotSuccessMessage("subscribe"),
  };
}
