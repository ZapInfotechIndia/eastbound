import PortalAuthShell from "@/components/portal/PortalAuthShell";
import PortalResetPasswordForm from "@/components/portal/PortalResetPasswordForm";
import { portals } from "@/lib/auth/portals";

type PageProps = {
  searchParams: Promise<{ token?: string; error?: string }>;
};

export default async function EventsResetPasswordPage({
  searchParams,
}: PageProps) {
  const params = await searchParams;
  const portal = portals.events;
  const token = params.token ?? null;
  const tokenError =
    params.error === "INVALID_TOKEN"
      ? "This reset link is invalid or has expired."
      : null;

  return (
    <PortalAuthShell
      portal={portal}
      title="Choose a new password"
      description="Set a new password for your Events Exchange account."
    >
      <PortalResetPasswordForm
        portalId="events"
        token={token}
        tokenError={tokenError}
      />
    </PortalAuthShell>
  );
}
