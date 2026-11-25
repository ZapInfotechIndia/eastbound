"use client";

import { useActionState, useRef, useState, type ReactNode } from "react";

import EventsExchangeFormError from "@/components/events/EventsExchangeFormError";
import EventsExchangeHoneypot from "@/components/events/EventsExchangeHoneypot";
import { Button } from "@/components/ui/Button";
import {
  submitEventProposal,
  type EventsExchangeActionState,
} from "@/lib/events-exchange/actions";

export const eventProposalRequestPath =
  "/events/events-board/request-a-proposal";

const eventTypes = [
  "Incentive",
  "Conference",
  "Celebration",
  "Private event",
  "Other",
];

const formCopy = {
  submitButton: "Send My Request",
  successTitle: "Thank you — we've received your request",
  successBody: "A member of our team will be in touch within 8 hours.",
};

const inputClassName =
  "w-full rounded-md border border-[#d9d9d9] bg-white px-3 py-2 text-sm text-[#0d2031] outline-none placeholder:text-[#0d2031]/25 focus-visible:ring-2 focus-visible:ring-[#0c8dd8]";

const labelClassName =
  "mb-2 flex flex-wrap items-baseline gap-x-1.5 text-xs font-medium tracking-[0.12em] text-[#0d2031]/75 uppercase";

function ProposalFieldLabel({
  htmlFor,
  children,
  required = false,
}: {
  htmlFor: string;
  children: ReactNode;
  required?: boolean;
}) {
  return (
    <label htmlFor={htmlFor} className={labelClassName}>
      <span>{children}</span>
      {required ? (
        <span
          className="font-sans text-[0.65rem] font-semibold tracking-[0.14em] text-[#0c8dd8] normal-case"
          aria-hidden
        >
          Required
        </span>
      ) : (
        <span className="font-sans text-[0.65rem] font-normal tracking-[0.08em] text-[#0d2031]/45 normal-case">
          Optional
        </span>
      )}
    </label>
  );
}

export default function EventProposalForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, action, isPending] = useActionState<
    EventsExchangeActionState,
    FormData
  >(submitEventProposal, null);
  const [composeAgain, setComposeAgain] = useState(false);

  if (Boolean(state?.success) && !composeAgain) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="border-primary bg-blue-dark space-y-3 border-l-2 py-5 pr-5 pl-5 text-white"
      >
        <p className="font-serif text-xl leading-snug md:text-2xl">
          {formCopy.successTitle}
        </p>
        <p className="text-sm leading-relaxed font-light text-white/75">
          {formCopy.successBody}
        </p>
        <button
          type="button"
          onClick={() => {
            formRef.current?.reset();
            setComposeAgain(true);
          }}
          className="text-blue-light text-[0.68rem] tracking-[0.22em] uppercase transition-colors hover:text-white"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      action={action}
      className="relative rounded-xl border border-[#d9d9d9] bg-[#f7f8f8] p-5 sm:p-6"
      onSubmit={() => setComposeAgain(false)}
    >
      <EventsExchangeHoneypot />
      <input type="hidden" name="source" value="request-a-proposal" />

      {state?.error ? (
        <EventsExchangeFormError message={state.error} className="mb-5" />
      ) : null}

      {/* <p className="mb-5 text-sm leading-6 text-[#0d2031]/70">
        Only name and email are required. You can skip any other field and still
        send your request.
      </p> */}

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <ProposalFieldLabel htmlFor="proposal-name" required>
            Name
          </ProposalFieldLabel>
          <input
            id="proposal-name"
            name="name"
            type="text"
            required
            aria-required="true"
            autoComplete="name"
            placeholder="Your name"
            className={inputClassName}
          />
        </div>

        <div>
          <ProposalFieldLabel htmlFor="proposal-company">
            Company or organisation
          </ProposalFieldLabel>
          <input
            id="proposal-company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Company or organisation name"
            className={inputClassName}
          />
        </div>

        <div>
          <ProposalFieldLabel htmlFor="proposal-email" required>
            Email address
          </ProposalFieldLabel>
          <input
            id="proposal-email"
            name="email"
            type="email"
            required
            aria-required="true"
            autoComplete="email"
            placeholder="you@company.com"
            className={inputClassName}
          />
        </div>

        <div>
          <ProposalFieldLabel htmlFor="proposal-event-type">
            Type of event
          </ProposalFieldLabel>
          <select
            id="proposal-event-type"
            name="eventType"
            defaultValue=""
            className={inputClassName}
          >
            <option value="">Choose event type</option>
            {eventTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <ProposalFieldLabel htmlFor="proposal-destinations">
            Preferred destination(s), or &quot;Open to suggestions&quot;
          </ProposalFieldLabel>
          <input
            id="proposal-destinations"
            name="destinations"
            type="text"
            placeholder="India, UAE, or open to suggestions"
            className={inputClassName}
          />
        </div>

        <div>
          <ProposalFieldLabel htmlFor="proposal-group-size">
            Approximate group size
          </ProposalFieldLabel>
          <input
            id="proposal-group-size"
            name="groupSize"
            type="text"
            placeholder="30–50 guests"
            className={inputClassName}
          />
        </div>

        <div>
          <ProposalFieldLabel htmlFor="proposal-dates">
            Preferred dates or season
          </ProposalFieldLabel>
          <input
            id="proposal-dates"
            name="dates"
            type="text"
            placeholder="12–18 June 2027 or autumn 2027"
            className={inputClassName}
          />
        </div>

        <div>
          <ProposalFieldLabel htmlFor="proposal-dates-flexible">
            Are your dates flexible?
          </ProposalFieldLabel>
          <select
            id="proposal-dates-flexible"
            name="datesFlexible"
            defaultValue=""
            className={inputClassName}
          >
            <option value="">Choose one</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div>
          <ProposalFieldLabel htmlFor="proposal-budget">
            Estimated budget
          </ProposalFieldLabel>
          <input
            id="proposal-budget"
            name="budget"
            type="text"
            placeholder="Overall budget or range per guest"
            className={inputClassName}
          />
        </div>

        <div className="sm:col-span-2">
          <ProposalFieldLabel htmlFor="proposal-interests">
            Experiences or venues that interest you
          </ProposalFieldLabel>
          <textarea
            id="proposal-interests"
            name="interests"
            rows={3}
            placeholder="Heritage venues, culinary experiences, wellness retreats…"
            className={`${inputClassName} min-h-20 resize-y`}
          />
        </div>

        <div className="sm:col-span-2">
          <ProposalFieldLabel htmlFor="proposal-details">
            Tell us more about what you&apos;re planning
          </ProposalFieldLabel>
          <textarea
            id="proposal-details"
            name="details"
            rows={4}
            placeholder="Objectives, format, special requirements, or anything else we should know"
            className={`${inputClassName} min-h-24 resize-y`}
          />
        </div>
      </div>

      <div className="mt-5">
        <Button type="submit" disabled={isPending}>
          {isPending ? "Sending…" : formCopy.submitButton}
        </Button>
      </div>
    </form>
  );
}
