import PortalAuthShell from "@/components/portal/PortalAuthShell";
import PortalForgotPasswordForm from "@/components/portal/PortalForgotPasswordForm";
import { portals } from "@/lib/auth/portals";

export default function AgentForgotPasswordPage() {
  const portal = portals.agent;

  return (
    <PortalAuthShell
      portal={portal}
      title="Reset password"
      description="Enter the email for your Agent Collective account and we will send a reset link."
    >
      <PortalForgotPasswordForm portalId="agent" />
    </PortalAuthShell>
  );
}
