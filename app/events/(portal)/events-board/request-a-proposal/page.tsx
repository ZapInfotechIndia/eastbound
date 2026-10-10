import Link from "next/link";
import { ChevronLeft } from "lucide-react";

import EventProposalForm from "@/components/events/EventProposalForm";
import EventsBoardNav from "@/components/events/EventsBoardNav";
import { eventBoardSections } from "@/data/eventsBoard";
import { getSessionProfile } from "@/lib/auth/profile";

const eventsBoardPath = "/events/events-board";

const proposalSection = eventBoardSections.find(
  (section) => section.id === "request-a-proposal",
);

const RequestProposalPage = async () => {
  const session = await getSessionProfile();
  const fullName = session?.profile.name ?? "";

  return (
    <main className="min-h-screen bg-white p-4 text-[#0d2031]">
      <EventsBoardNav fullName={fullName} />

      <div className="mx-auto max-w-3xl px-0 py-6 sm:px-2 lg:py-10">
        <Link
          href={`${eventsBoardPath}#request-a-proposal`}
          className="inline-flex items-center gap-1 font-sans text-[10px] font-medium tracking-[0.18em] text-[#0d2031]/70 uppercase transition-colors hover:text-[#0d2031]"
        >
          <ChevronLeft className="h-3.5 w-3.5" aria-hidden />
          Back to events board
        </Link>

        {/* <header className="mt-8 border-b border-[#d9d9d9] pb-8">
          <p className="text-[10px] font-medium tracking-[0.28em] text-[#0c8dd8] uppercase">
            {proposalSection?.number ?? "03"}
          </p>
          <h1 className="mt-3 font-serif text-4xl leading-tight tracking-[-0.035em] sm:text-5xl">
            {proposalSection?.title ?? "Request a Proposal"}
          </h1>
          {proposalSection?.subtitle ? (
            <p className="mt-4 text-base leading-7 text-[#0d2031]/80 sm:text-lg">
              {proposalSection.subtitle}
            </p>
          ) : null}
          {proposalSection?.intro ? (
            <p className="mt-4 text-sm leading-7 text-[#0d2031]/75 sm:text-base">
              {proposalSection.intro}
            </p>
          ) : null}
        </header> */}

        <section className="mt-10" aria-labelledby="proposal-form-heading">
          <p className="text-[10px] font-medium tracking-[0.26em] text-[#0c8dd8] uppercase">
            Request form
          </p>
          <h2
            id="proposal-form-heading"
            className="mt-2 font-serif text-2xl tracking-[-0.03em] text-[#0d2031]"
          >
            Tell us about your event
          </h2>
          <p className="mt-2 text-sm leading-6 text-[#0d2031]/70 sm:text-base">
            Name and email are all we need to get started. Add any other details
            you have and we&apos;ll design a response around your group,
            destination and objectives. We typically respond within{" "}
            {proposalSection?.cta.responseTime ?? "8 hours"}.
          </p>

          <div className="mt-6">
            <EventProposalForm />
          </div>
        </section>
      </div>
    </main>
  );
};

export default RequestProposalPage;
