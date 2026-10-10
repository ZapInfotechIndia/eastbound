import { redirect } from "next/navigation";

import PortalAuthShell from "@/components/portal/PortalAuthShell";
import PortalLoginForm from "@/components/portal/PortalLoginForm";
import { resolvePortalHomeRedirect } from "@/lib/auth/actions";
import { portals } from "@/lib/auth/portals";

function bannerFromParams(error?: string, reset?: string) {
  if (reset === "success") {
    return "Password updated. You can sign in with your new password.";
  }

  switch (error) {
    case "wrong_portal":
      return "You do not have an account in this portal.";
    case "missing_profile":
      return "Your account has no portal profile. Please create an account for this portal.";
    default:
      return null;
  }
}

type PageProps = {
  searchParams: Promise<{ error?: string; reset?: string }>;
};

export const dynamic = "force-dynamic";

export default async function EventsSignInPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const redirectTo = await resolvePortalHomeRedirect("events");
  if (redirectTo) {
    redirect(redirectTo);
  }

  const portal = portals.events;

  return (
    <PortalAuthShell portal={portal}>
      <PortalLoginForm
        portalId="events"
        banner={bannerFromParams(params.error, params.reset)}
      />
    </PortalAuthShell>
  );
}
