import { createHash } from "node:crypto";

import { and, count, eq, gte } from "drizzle-orm";
import { headers } from "next/headers";

import { db } from "@/lib/db";
import { enquiries } from "@/lib/db/schema";

import { RATE_LIMIT_MAX, RATE_LIMIT_WINDOW_MS } from "./constants";

function rateLimitSalt() {
  return process.env.ENQUIRY_RATE_LIMIT_SALT ?? "eastbound-enquiry-dev-salt";
}

export async function getSubmitterIpHash(): Promise<string | null> {
  const headerStore = await headers();
  const forwarded = headerStore.get("x-forwarded-for");
  const ip =
    forwarded?.split(",")[0]?.trim() ??
    headerStore.get("x-real-ip")?.trim() ??
    null;

  if (!ip) {
    return null;
  }

  return createHash("sha256")
    .update(`${ip}:${rateLimitSalt()}`)
    .digest("hex");
}

export async function isRateLimited(ipHash: string | null): Promise<boolean> {
  if (!ipHash) {
    return false;
  }

  const windowStart = new Date(Date.now() - RATE_LIMIT_WINDOW_MS);

  try {
    const [row] = await db
      .select({ total: count() })
      .from(enquiries)
      .where(
        and(
          eq(enquiries.submitterIpHash, ipHash),
          gte(enquiries.createdAt, windowStart),
        ),
      );

    return (row?.total ?? 0) >= RATE_LIMIT_MAX;
  } catch (error) {
    console.error("[enquiry] rate limit check failed:", error);
    return false;
  }
}
