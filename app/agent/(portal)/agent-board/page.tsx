import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";

import AgentBoardNav from "@/components/agent/AgentBoardNav";
import AgentResources from "@/components/agent/AgentResources";
import { Button } from "@/components/ui/Button";
import { getSessionProfile } from "@/lib/auth/profile";

const AgentBoard = async () => {
  const session = await getSessionProfile();
  const fullName = session?.profile.name ?? "";

  return (
    <main className="min-h-screen bg-white p-4 text-white">
      <AgentBoardNav fullName={fullName} />
      <div className="grid min-h-[calc(100vh-6.5rem)] overflow-hidden border border-[#d9d9d9] bg-white lg:grid-cols-2">
        <div className="group relative block min-h-[50vh] overflow-hidden border-b border-[#d9d9d9] lg:border-r lg:border-b-0 lg:border-[#d9d9d9]">
          <Image
            src="/images/agent/ag-bg-1.jpg"
            alt="Eastbound Agent Collective"
            fill
            priority
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-[#0d2031]/65" />
          <div className="absolute inset-0 bg-linear-to-t from-[#0d2031]/90 via-[#0d2031]/20 to-transparent" />

          <div className="relative flex h-full items-end p-6 sm:p-10 lg:p-14">
            <div className="max-w-md">
              <p className="text-blue-light text-[10px] font-medium tracking-[0.28em] uppercase">
                Eastbound Agent Collective
              </p>
              <h2 className="mt-4 font-serif text-4xl leading-[0.92] tracking-[-0.04em] sm:text-5xl">
                White-labelled travel experiences by Eastbound.
              </h2>
              <p className="mt-5 max-w-sm text-sm leading-6 text-white/80 sm:text-base">
                Access the latest itineraries, market insights, destination
                notes, and expert guidance to shape exceptional journeys.
              </p>
              <Button asChild>
                <Link
                  href="/eastbound-agent-collective.html"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open Eastbound Agent Collective on Travolgo"
                  className="mt-6"
                >
                  Visit platform
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="relative min-h-[50vh] overflow-hidden">
          <Image
            src="/images/agent/ag-bg-2.jpg"
            alt="Eastbound Agent Resources"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#0d2031]/70" />
          <div className="absolute inset-0 bg-linear-to-t from-[#0d2031]/90 via-[#0d2031]/20 to-transparent" />

          <div className="relative flex h-full items-end p-6 sm:p-10 lg:p-14">
            <div className="max-w-md">
              <p className="text-blue-light text-[10px] font-medium tracking-[0.28em] uppercase">
                Eastbound Agent Resources
              </p>
              <h2 className="mt-4 font-serif text-4xl leading-[0.92] tracking-[-0.04em] sm:text-5xl">
                Destination intelligence, tools and inspiration.
              </h2>
              <p className="mt-5 max-w-sm text-sm leading-6 text-white/80 sm:text-base">
                Access the latest itineraries, market insights, destination
                notes, and expert guidance to shape exceptional journeys.
              </p>
              <Button asChild variant="secondary">
                <Link
                  href="#agent-resources"
                  aria-label="Scroll to Eastbound agent resources"
                  className="mt-6"
                >
                  View Resources
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <AgentResources />
    </main>
  );
};

export default AgentBoard;
