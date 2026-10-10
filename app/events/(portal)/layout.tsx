import { requirePortalAccess } from "@/lib/auth/profile";

export const dynamic = "force-dynamic";

export default async function EventsPortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await requirePortalAccess("event");
  return children;
}
