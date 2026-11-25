import { NextResponse, type NextRequest } from "next/server";

import { isPublicPortalPath } from "@/lib/auth/portals";
import { auth } from "@/lib/auth/server";

const protectAgent = auth.middleware({ loginUrl: "/agent" });
const protectEvents = auth.middleware({ loginUrl: "/events" });

/**
 * Session gate for portal pages. Role isolation is enforced in
 * `app/{agent,events}/(portal)/layout.tsx` after a session exists.
 */
export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (isPublicPortalPath(pathname)) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/agent")) {
    return protectAgent(request);
  }

  if (pathname.startsWith("/events")) {
    return protectEvents(request);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/agent/:path*", "/events/:path*"],
};
