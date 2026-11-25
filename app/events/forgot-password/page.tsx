import PortalAuthShell from "@/components/portal/PortalAuthShell";
import PortalForgotPasswordForm from "@/components/portal/PortalForgotPasswordForm";
import { portals } from "@/lib/auth/portals";

export default function EventsForgotPasswordPage() {
  const portal = portals.events;

  return (
    <PortalAuthShell
      portal={portal}
      title="Reset password"
      description="Enter the email for your Events Exchange account and we will send a reset link."
    >
      <PortalForgotPasswordForm portalId="events" />
    </PortalAuthShell>
  );
}
