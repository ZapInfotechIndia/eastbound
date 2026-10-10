import { requirePortalAccess } from "@/lib/auth/profile";

export const dynamic = "force-dynamic";

export default async function AgentPortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await requirePortalAccess("agent");
  return children;
}
