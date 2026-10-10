import type { PortalRole } from "@/lib/db/schema";

export type PortalId = "agent" | "events";

export type PortalConfig = {
  id: PortalId;
  role: PortalRole;
  title: string;
  eyebrow: string;
  description: string;
  supportCopy: string;
  imageUrl: string;
  imagePosition?: string;
  homePath: string;
  boardPath: string;
  signUpPath: string;
  forgotPasswordPath: string;
  resetPasswordPath: string;
};

export const portals: Record<PortalId, PortalConfig> = {
  agent: {
    id: "agent",
    role: "agent",
    title: "Agent Collective",
    eyebrow: "",
    description:
      "The Eastbound Agent Collective is the dedicated platform for travel advisors and partners looking to create exceptional journeys across South Asia.",
    supportCopy: "Agent details will be provided by the Eastbound team.",
    imageUrl: "/images/agent/ag-bg-2.jpg",
    homePath: "/agent",
    boardPath: "/agent/agent-board",
    signUpPath: "/agent/sign-up",
    forgotPasswordPath: "/agent/forgot-password",
    resetPasswordPath: "/agent/reset-password",
  },
  events: {
    id: "events",
    role: "event",
    title: "Events Exchange",
    eyebrow: "Eastbound events portal",
    description:
      "Everything you need to create an exceptional event across India & the UAE.",
    supportCopy: "Contact your Eastbound event lead to request access.",
    imageUrl: "/images/events/events-bg.jpg",
    imagePosition: "center",
    homePath: "/events",
    boardPath: "/events/events-board",
    signUpPath: "/events/sign-up",
    forgotPasswordPath: "/events/forgot-password",
    resetPasswordPath: "/events/reset-password",
  },
};

export function portalByRole(role: PortalRole): PortalConfig {
  return role === "agent" ? portals.agent : portals.events;
}

export function portalById(id: PortalId): PortalConfig {
  return portals[id];
}

const publicPathSuffixes = [
  "",
  "/sign-up",
  "/forgot-password",
  "/reset-password",
] as const;

/** Sign-in, sign-up, and recovery routes that must stay reachable without a session. */
export function isPublicPortalPath(pathname: string): boolean {
  const normalized =
    pathname.length > 1 && pathname.endsWith("/")
      ? pathname.slice(0, -1)
      : pathname;

  for (const portal of Object.values(portals)) {
    for (const suffix of publicPathSuffixes) {
      if (normalized === `${portal.homePath}${suffix}`) {
        return true;
      }
    }
  }

  return false;
}
