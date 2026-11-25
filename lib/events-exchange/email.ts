import { Resend } from "resend";

import { site } from "@/data/site";
import type { EventPortalRequestSource } from "@/lib/db/schema";
import {
  getEnquiryFromAddress,
  getEnquiryNotifyAddress,
} from "@/lib/enquiry/email";

import { eventPortalRequestSourceLabels } from "./constants";

function getResendClient(): Resend | null {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    return null;
  }
  return new Resend(apiKey);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function formatValue(value: string | null | undefined) {
  if (!value) {
    return '<span style="color:#6b7280;">—</span>';
  }
  return escapeHtml(value);
}

type EmailRow = { label: string; value: string | null | undefined };

function buildNotificationHtml(
  headline: string,
  rows: EmailRow[],
  replyHint: boolean,
) {
  const tableRows = rows
    .map(
      (row) => `
        <tr>
          <td style="padding:10px 16px 10px 0;vertical-align:top;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:#6b7280;width:160px;">
            ${escapeHtml(row.label)}
          </td>
          <td style="padding:10px 0;vertical-align:top;font-size:15px;line-height:1.5;color:#111827;white-space:pre-wrap;">
            ${formatValue(row.value)}
          </td>
        </tr>`,
    )
    .join("");

  const replyNote = replyHint
    ? `<p style="margin:24px 0 0;font-size:13px;line-height:1.6;color:#6b7280;">
            Reply to this email to reach the guest directly (Reply-To is set to their address).
          </p>`
    : "";

  return `<!DOCTYPE html>
<html lang="en">
  <body style="margin:0;padding:24px;background:#f4f4f5;font-family:Georgia,'Times New Roman',serif;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;margin:0 auto;">
      <tr>
        <td style="background:#0f2744;color:#ffffff;padding:28px 32px;">
          <p style="margin:0 0 8px;font-size:11px;letter-spacing:0.28em;text-transform:uppercase;color:#c9a227;">${escapeHtml(site.name)} · Events Exchange</p>
          <h1 style="margin:0;font-size:28px;font-weight:400;line-height:1.2;">${escapeHtml(headline)}</h1>
        </td>
      </tr>
      <tr>
        <td style="background:#ffffff;padding:28px 32px;border:1px solid #e5e7eb;border-top:0;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
            ${tableRows}
          </table>
          ${replyNote}
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

async function sendEventsExchangeEmail(options: {
  subject: string;
  headline: string;
  rows: EmailRow[];
  replyTo?: string;
}): Promise<{ ok: true } | { ok: false; message: string }> {
  const resend = getResendClient();
  if (!resend) {
    return {
      ok: false,
      message: "Email service is not configured (missing RESEND_API_KEY).",
    };
  }

  const fromAddress = getEnquiryFromAddress();

  const { error } = await resend.emails.send({
    from: `Eastbound Events Exchange <${fromAddress}>`,
    to: [getEnquiryNotifyAddress()],
    replyTo: options.replyTo,
    subject: options.subject,
    html: buildNotificationHtml(
      options.headline,
      options.rows,
      Boolean(options.replyTo),
    ),
  });

  if (error) {
    console.error("[events-exchange] Resend send failed:", error);
    return {
      ok: false,
      message: error.message || "The notification email could not be sent.",
    };
  }

  return { ok: true };
}

export type EventPortalRequestEmailPayload = {
  source: EventPortalRequestSource;
  name: string;
  email: string;
  note: string;
  portalUserName: string;
};

export async function sendEventPortalRequestNotification(
  payload: EventPortalRequestEmailPayload,
) {
  const sourceLabel = eventPortalRequestSourceLabels[payload.source];
  return sendEventsExchangeEmail({
    subject: `Request for ${sourceLabel} | Events Exchange`,
    headline: "New venue or experience request",
    replyTo: payload.email,
    rows: [
      { label: "Portal user", value: payload.portalUserName },
      { label: "Name", value: payload.name },
      { label: "Email", value: payload.email },
      { label: "Request", value: payload.note },
      { label: "Source", value: sourceLabel },
    ],
  });
}

export type EventProposalEmailPayload = {
  name: string;
  company: string | null;
  email: string;
  eventType: string | null;
  destinations: string | null;
  groupSize: string | null;
  dates: string | null;
  datesFlexible: string | null;
  budget: string | null;
  interests: string | null;
  details: string | null;
  portalUserName: string;
};

export async function sendEventProposalNotification(
  payload: EventProposalEmailPayload,
) {
  return sendEventsExchangeEmail({
    subject: "New Proposal Request | Events Exchange",
    headline: "New proposal request",
    replyTo: payload.email,
    rows: [
      { label: "Portal user", value: payload.portalUserName },
      { label: "Name", value: payload.name },
      { label: "Email", value: payload.email },
      { label: "Company", value: payload.company },
      { label: "Event type", value: payload.eventType },
      { label: "Destinations", value: payload.destinations },
      { label: "Group size", value: payload.groupSize },
      { label: "Dates", value: payload.dates },
      { label: "Dates flexible", value: payload.datesFlexible },
      { label: "Budget", value: payload.budget },
      { label: "Interests", value: payload.interests },
      { label: "Details", value: payload.details },
    ],
  });
}

export type EventUpdatesSubscribeEmailPayload = {
  name: string;
  email: string;
  portalUserName: string;
  isResubscribe: boolean;
};

export async function sendEventUpdatesSubscribeNotification(
  payload: EventUpdatesSubscribeEmailPayload,
) {
  const action = payload.isResubscribe ? "updated subscription" : "new subscriber";
  return sendEventsExchangeEmail({
    subject: `Event updates ${action} | Events Exchange`,
    headline: payload.isResubscribe
      ? "Event updates subscription updated"
      : "New event updates subscriber",
    rows: [
      { label: "Portal user", value: payload.portalUserName },
      { label: "Name", value: payload.name },
      { label: "Email", value: payload.email },
    ],
  });
}
