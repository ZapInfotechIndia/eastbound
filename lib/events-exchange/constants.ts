import type { EventPortalRequestSource } from "@/lib/db/schema";

export const eventRequestSources = [
  "explore-event-venues",
  "browse-experiences",
] as const;

export type EventRequestSource = (typeof eventRequestSources)[number];

/** Maps form `source` values to DB enum values. */
export const eventRequestSourceToDb: Record<
  EventRequestSource,
  EventPortalRequestSource
> = {
  "explore-event-venues": "explore_event_venues",
  "browse-experiences": "browse_experiences",
};

export const eventPortalRequestSourceLabels: Record<
  EventPortalRequestSource,
  string
> = {
  explore_event_venues: "Explore event venues",
  browse_experiences: "Browse experiences",
};

export { HONEYPOT_FIELD, RATE_LIMIT_MAX, RATE_LIMIT_WINDOW_MS } from "@/lib/enquiry/constants";
