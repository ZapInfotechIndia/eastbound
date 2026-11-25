import { redirect } from "next/navigation";

import PortalAuthShell from "@/components/portal/PortalAuthShell";
import PortalSignUpForm from "@/components/portal/PortalSignUpForm";
import { resolvePortalHomeRedirect } from "@/lib/auth/actions";
import { portals } from "@/lib/auth/portals";

export const dynamic = "force-dynamic";

export default async function AgentSignUpPage() {
  const redirectTo = await resolvePortalHomeRedirect("agent");
  if (redirectTo) {
    redirect(redirectTo);
  }

  const portal = portals.agent;

  return (
    <PortalAuthShell
      portal={portal}
      title="Join Agent Collective"
      description="Create your Agent Collective account. Access is limited to this portal only."
      wideForm
    >
      <PortalSignUpForm portalId="agent" />
    </PortalAuthShell>
  );
}
