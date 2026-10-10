"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth/server";
import {
  createProfile,
  getProfileByEmail,
  getProfileByUserId,
} from "@/lib/auth/profile";
import { portalById, portalByRole, type PortalId } from "@/lib/auth/portals";
import type { PortalRole } from "@/lib/db/schema";

export type AuthActionState = {
  error?: string;
  success?: string;
} | null;

function readString(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

async function absoluteUrl(path: string) {
  const headerStore = await headers();
  const host =
    headerStore.get("x-forwarded-host") ?? headerStore.get("host") ?? "localhost:3000";
  const proto = headerStore.get("x-forwarded-proto") ?? "http";
  return `${proto}://${host}${path}`;
}

export async function signInForPortal(
  portalId: PortalId,
  _prevState: AuthActionState,
  formData: FormData,
): Promise<AuthActionState> {
  const portal = portalById(portalId);
  const email = readString(formData, "email").toLowerCase();
  const password = readString(formData, "password");

  if (!email || !password) {
    return { error: "Email and password are required." };
  }

  const existingProfile = await getProfileByEmail(email);
  if (existingProfile && existingProfile.role !== portal.role) {
    return { error: "You do not have an account in this portal." };
  }

  const { data, error } = await auth.signIn.email({ email, password });

  if (error) {
    return { error: error.message || "Unable to sign in. Check your details." };
  }

  // signIn writes the session cookie onto the response. getSession() in this
  // same action only sees the incoming request cookies, which sign-out just
  // cleared, so it would report that no session exists.
  const user = data?.user;

  if (!user) {
    return { error: "Signed in, but no session was created. Try again." };
  }

  const profile = await getProfileByUserId(user.id);

  if (!profile) {
    await auth.signOut();
    return {
      error:
        "No portal profile is linked to this account. Please sign up for the correct portal.",
    };
  }

  if (profile.role !== portal.role) {
    await auth.signOut();
    return { error: "You do not have an account in this portal." };
  }

  // Future: block when profile.status !== "approved"

  redirect(portal.boardPath);
}

export async function signUpForPortal(
  portalId: PortalId,
  _prevState: AuthActionState,
  formData: FormData,
): Promise<AuthActionState> {
  const portal = portalById(portalId);
  const name = readString(formData, "name");
  const email = readString(formData, "email").toLowerCase();
  const password = readString(formData, "password");
  const company = readString(formData, "company") || null;
  const country = readString(formData, "country");
  const phone = readString(formData, "phone") || null;

  if (!name || !email || !password || !country) {
    return { error: "Full name, email, password, and country are required." };
  }

  if (password.length < 8) {
    return { error: "Password must be at least 8 characters." };
  }

  const existing = await getProfileByEmail(email);
  if (existing) {
    const correct = portalByRole(existing.role);
    return {
      error: `This email is already registered for ${correct.title}. Sign in there instead.`,
    };
  }

  const { data, error } = await auth.signUp.email({
    email,
    password,
    name,
  });

  if (error) {
    return { error: error.message || "Unable to create account." };
  }

  const userId = data?.user?.id;
  if (!userId) {
    return { error: "Account created, but user id was missing. Contact support." };
  }

  try {
    await createProfile({
      userId,
      email,
      role: portal.role,
      name,
      company,
      country,
      phone,
      application: null,
    });
  } catch {
    await auth.signOut();
    return {
      error:
        "Account was created in Auth, but saving your profile failed. Please contact support.",
    };
  }

  redirect(portal.boardPath);
}

export async function requestPasswordResetForPortal(
  portalId: PortalId,
  _prevState: AuthActionState,
  formData: FormData,
): Promise<AuthActionState> {
  const portal = portalById(portalId);
  const email = readString(formData, "email").toLowerCase();

  if (!email) {
    return { error: "Email is required." };
  }

  const redirectTo = await absoluteUrl(portal.resetPasswordPath);

  const { error } = await auth.requestPasswordReset({
    email,
    redirectTo,
  });

  if (error) {
    return {
      error: error.message || "Unable to send a reset email. Try again shortly.",
    };
  }

  return {
    success:
      "If an account exists for that email, a password reset link has been sent.",
  };
}

export async function resetPasswordForPortal(
  portalId: PortalId,
  _prevState: AuthActionState,
  formData: FormData,
): Promise<AuthActionState> {
  const portal = portalById(portalId);
  const token = readString(formData, "token");
  const password = readString(formData, "password");
  const confirmPassword = readString(formData, "confirmPassword");

  if (!token) {
    return {
      error:
        "This reset link is invalid or incomplete. Request a new password reset.",
    };
  }

  if (!password || password.length < 8) {
    return { error: "Password must be at least 8 characters." };
  }

  if (password !== confirmPassword) {
    return { error: "Passwords do not match." };
  }

  const { error } = await auth.resetPassword({
    newPassword: password,
    token,
  });

  if (error) {
    return {
      error:
        error.message ||
        "Unable to reset password. The link may have expired — request a new one.",
    };
  }

  redirect(`${portal.homePath}?reset=success`);
}

export async function signOutFromPortal(portalId: PortalId) {
  const portal = portalById(portalId);
  await auth.signOut();
  redirect(portal.homePath);
}

export async function resolvePortalHomeRedirect(
  portalId: PortalId,
): Promise<string | null> {
  const portal = portalById(portalId);
  const { data: session } = await auth.getSession();
  const user = session?.user;
  if (!user) return null;

  const profile = await getProfileByUserId(user.id);
  if (!profile) return null;

  if (profile.role !== portal.role) {
    return null;
  }

  return portal.boardPath;
}

export type { PortalRole };
