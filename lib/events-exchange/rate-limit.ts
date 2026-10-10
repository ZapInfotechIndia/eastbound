import { and, count, eq, gte } from "drizzle-orm";

import { db } from "@/lib/db";
import {
  eventPortalRequests,
  eventProposals,
  eventUpdateSubscribers,
} from "@/lib/db/schema";

import { getSubmitterIpHash } from "@/lib/enquiry/rate-limit";

import { RATE_LIMIT_MAX, RATE_LIMIT_WINDOW_MS } from "./constants";

export { getSubmitterIpHash };

export async function isEventPortalRateLimited(
  ipHash: string | null,
): Promise<boolean> {
  if (!ipHash) {
    return false;
  }

  const windowStart = new Date(Date.now() - RATE_LIMIT_WINDOW_MS);

  try {
    const [requestsRow] = await db
      .select({ total: count() })
      .from(eventPortalRequests)
      .where(
        and(
          eq(eventPortalRequests.submitterIpHash, ipHash),
          gte(eventPortalRequests.createdAt, windowStart),
        ),
      );

    const [proposalsRow] = await db
      .select({ total: count() })
      .from(eventProposals)
      .where(
        and(
          eq(eventProposals.submitterIpHash, ipHash),
          gte(eventProposals.createdAt, windowStart),
        ),
      );

    const [subscribersRow] = await db
      .select({ total: count() })
      .from(eventUpdateSubscribers)
      .where(
        and(
          eq(eventUpdateSubscribers.submitterIpHash, ipHash),
          gte(eventUpdateSubscribers.createdAt, windowStart),
        ),
      );

    const total =
      (requestsRow?.total ?? 0) +
      (proposalsRow?.total ?? 0) +
      (subscribersRow?.total ?? 0);

    return total >= RATE_LIMIT_MAX;
  } catch (error) {
    console.error("[events-exchange] rate limit check failed:", error);
    return false;
  }
}
