import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth/server";
import { portalByRole } from "@/lib/auth/portals";
import { db } from "@/lib/db";
import {
  profiles,
  type NewProfile,
  type PortalRole,
  type Profile,
} from "@/lib/db/schema";

export async function getProfileByUserId(
  userId: string,
): Promise<Profile | null> {
  const [profile] = await db
    .select()
    .from(profiles)
    .where(eq(profiles.userId, userId))
    .limit(1);

  return profile ?? null;
}

export async function getProfileByEmail(
  email: string,
): Promise<Profile | null> {
  const [profile] = await db
    .select()
    .from(profiles)
    .where(eq(profiles.email, email.toLowerCase()))
    .limit(1);

  return profile ?? null;
}

export async function createProfile(
  data: Omit<NewProfile, "id" | "createdAt" | "updatedAt" | "status"> & {
    status?: NewProfile["status"];
  },
): Promise<Profile> {
  const [profile] = await db
    .insert(profiles)
    .values({
      ...data,
      email: data.email.toLowerCase(),
      status: data.status ?? "pending",
    })
    .returning();

  return profile;
}

export async function getSessionProfile(): Promise<{
  user: NonNullable<
    Awaited<ReturnType<typeof auth.getSession>>["data"]
  >["user"];
  profile: Profile;
} | null> {
  const { data: session } = await auth.getSession();
  const user = session?.user;

  if (!user) {
    return null;
  }

  const profile = await getProfileByUserId(user.id);
  if (!profile) {
    return null;
  }

  return { user, profile };
}

/**
 * Ensures the current session belongs to the expected portal role.
 * Status (pending/approved/rejected) is intentionally not checked yet.
 */
export async function requirePortalAccess(role: PortalRole): Promise<{
  user: NonNullable<
    Awaited<ReturnType<typeof auth.getSession>>["data"]
  >["user"];
  profile: Profile;
}> {
  const { data: session } = await auth.getSession();
  const user = session?.user;

  if (!user) {
    redirect(portalByRole(role).homePath);
  }

  const profile = await getProfileByUserId(user.id);

  if (!profile) {
    await auth.signOut();
    redirect(`${portalByRole(role).homePath}?error=missing_profile`);
  }

  if (profile.role !== role) {
    redirect(`${portalByRole(role).homePath}?error=wrong_portal`);
  }

  // Future: gate on profile.status === "approved"

  return { user, profile };
}
