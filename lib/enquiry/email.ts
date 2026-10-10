import { Resend } from "resend";

import { site } from "@/data/site";
import type { EnquirySource } from "@/lib/db/schema";

import { enquirySourceLabels } from "./constants";

export type EnquiryNotificationPayload = {
  source: EnquirySource;
  name: string;
  email: string;
  phone: string | null;
  destination: string | null;
  message: string | null;
  company: string | null;
  programmeType: string | null;
  travelDates: string | null;
};

const DEFAULT_PROD_FROM = "info@eastboundgroup.com";
const DEFAULT_PROD_NOTIFY = "info@eastboundgroup.com";
const RESEND_DEV_FROM = "onboarding@resend.dev";

export function getEnquiryFromAddress(): string {
  const configured = process.env.ENQUIRY_FROM_EMAIL?.trim();
  if (configured) {
    return configured;
  }
  if (process.env.NODE_ENV === "development") {
    return RESEND_DEV_FROM;
  }
  return DEFAULT_PROD_FROM;
}

export function getEnquiryNotifyAddress(): string {
  const configured = process.env.ENQUIRY_NOTIFY_EMAIL?.trim();
  if (configured) {
    return configured;
  }
  return DEFAULT_PROD_NOTIFY;
}

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

function buildEnquiryNotificationHtml(
  payload: EnquiryNotificationPayload,
  sourceLabel: string,
) {
  const rows: { label: string; value: string | null | undefined }[] = [
    { label: "Name", value: payload.name },
    { label: "Email", value: payload.email },
    { label: "Phone", value: payload.phone },
    { label: "Destination", value: payload.destination },
    { label: "Company", value: payload.company },
    { label: "Programme type", value: payload.programmeType },
    { label: "Travel dates", value: payload.travelDates },
    { label: "Message", value: payload.message },
    { label: "Source", value: sourceLabel },
  ];

  const tableRows = rows
    .map(
      (row) => `
        <tr>
          <td style="padding:10px 16px 10px 0;vertical-align:top;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:#6b7280;width:140px;">
            ${escapeHtml(row.label)}
          </td>
          <td style="padding:10px 0;vertical-align:top;font-size:15px;line-height:1.5;color:#111827;white-space:pre-wrap;">
            ${formatValue(row.value)}
          </td>
        </tr>`,
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="en">
  <body style="margin:0;padding:24px;background:#f4f4f5;font-family:Georgia,'Times New Roman',serif;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;margin:0 auto;">
      <tr>
        <td style="background:#0f2744;color:#ffffff;padding:28px 32px;">
          <p style="margin:0 0 8px;font-size:11px;letter-spacing:0.28em;text-transform:uppercase;color:#c9a227;">${escapeHtml(site.name)}</p>
          <h1 style="margin:0;font-size:28px;font-weight:400;line-height:1.2;">New website enquiry</h1>
        </td>
      </tr>
      <tr>
        <td style="background:#ffffff;padding:28px 32px;border:1px solid #e5e7eb;border-top:0;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
            ${tableRows}
          </table>
          <p style="margin:24px 0 0;font-size:13px;line-height:1.6;color:#6b7280;">
            Reply to this email to reach the guest directly (Reply-To is set to their address).
          </p>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export async function sendEnquiryNotification(
  payload: EnquiryNotificationPayload,
): Promise<{ ok: true } | { ok: false; message: string }> {
  const resend = getResendClient();
  if (!resend) {
    return {
      ok: false,
      message: "Email service is not configured (missing RESEND_API_KEY).",
    };
  }

  const sourceLabel = enquirySourceLabels[payload.source];
  const fromAddress = getEnquiryFromAddress();

  const { error } = await resend.emails.send({
    from: `Eastbound Enquiries <${fromAddress}>`,
    to: [getEnquiryNotifyAddress()],
    replyTo: payload.email,
    subject: `New enquiry — ${sourceLabel}`,
    html: buildEnquiryNotificationHtml(payload, sourceLabel),
  });

  if (error) {
    console.error("[enquiry] Resend send failed:", error);
    return {
      ok: false,
      message: error.message || "The notification email could not be sent.",
    };
  }

  return { ok: true };
}
