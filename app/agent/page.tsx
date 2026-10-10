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

export default async function AgentSignInPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const redirectTo = await resolvePortalHomeRedirect("agent");
  if (redirectTo) {
    redirect(redirectTo);
  }

  const portal = portals.agent;

  return (
    <PortalAuthShell
      portal={portal}
      description={
        <>
          The Eastbound Agent Collective is the dedicated platform for travel
          advisors and partners looking to create exceptional journeys across
          South Asia.
          <br />
          It brings together Eastbound’s local knowledge, trusted relationships
          and curated travel expertise in one place - giving you the tools and
          inspiration to design journeys that go beyond the expected.
        </>
      }
      footer={
        <div className="absolute inset-x-0 bottom-6 flex justify-center">
          <p className="text-blue-light max-w-4xl px-4 text-center text-xs">
            Explore original hand-crafted itineraries, unusual experiences,
            destination intelligence, travel resources and more. Access our
            expertise, discover what&apos;s new across our destinations, and
            connect with a team that understands the importance of detail,
            access and seamless execution.
          </p>
        </div>
      }
    >
      <PortalLoginForm
        portalId="agent"
        banner={bannerFromParams(params.error, params.reset)}
      />
    </PortalAuthShell>
  );
}
