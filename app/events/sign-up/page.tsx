import { redirect } from "next/navigation";

import PortalAuthShell from "@/components/portal/PortalAuthShell";
import PortalSignUpForm from "@/components/portal/PortalSignUpForm";
import { resolvePortalHomeRedirect } from "@/lib/auth/actions";
import { portals } from "@/lib/auth/portals";

export const dynamic = "force-dynamic";

export default async function EventsSignUpPage() {
  const redirectTo = await resolvePortalHomeRedirect("events");
  if (redirectTo) {
    redirect(redirectTo);
  }

  const portal = portals.events;

  return (
    <PortalAuthShell
      portal={portal}
      title="Join Events Exchange"
      description="Create your Events Exchange account. Access is limited to this portal only."
      wideForm
    >
      <PortalSignUpForm portalId="events" />
    </PortalAuthShell>
  );
}
