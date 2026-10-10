import type { EnquirySource } from "@/lib/db/schema";

/** Human-readable labels for `enquiry_source` (DB stores snake_case values). */
export const enquirySourceLabels: Record<EnquirySource, string> = {
  footer: "Footer",
  contact_page: "Contact page",
};

export const HONEYPOT_FIELD = "company_website";

/** Max successful submissions per IP hash within the window. */
export const RATE_LIMIT_MAX = 5;

/** Rate limit window in milliseconds (1 hour). */
export const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
