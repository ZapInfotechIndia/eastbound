"use client";

import { useActionState, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

import EventsExchangeFormError from "@/components/events/EventsExchangeFormError";
import EventsExchangeHoneypot from "@/components/events/EventsExchangeHoneypot";
import { Button } from "@/components/ui/Button";
import {
  subscribeEventUpdates,
  type EventsExchangeActionState,
} from "@/lib/events-exchange/actions";

export const eventUpdatesSubscribeSources = ["event-updates"] as const;

export type EventUpdatesSubscribeSource =
  (typeof eventUpdatesSubscribeSources)[number];

const formCopy = {
  title: "Subscribe for updates",
  description:
    "Enter your name and email and we’ll add you to our database and send curated event newsletters.",
  submitButton: "Subscribe for Updates",
  successTitle: "Thank you for subscribing",
  successBody: "We’ll share new updates as they’re published.",
};

type EventUpdatesSubscribeFormProps = {
  source: EventUpdatesSubscribeSource;
  onClose: () => void;
};

const inputClassName =
  "w-full rounded-md border border-[#d9d9d9] bg-white px-3 py-2 text-sm text-[#0d2031] outline-none placeholder:text-[#0d2031]/25 focus-visible:ring-2 focus-visible:ring-[#0c8dd8]";

const labelClassName =
  "mb-2 block text-xs font-medium tracking-[0.12em] text-[#0d2031]/75 uppercase";

export default function EventUpdatesSubscribeForm({
  source,
  onClose,
}: EventUpdatesSubscribeFormProps) {
  const titleId = useId();
  const descriptionId = useId();
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const onCloseRef = useRef(onClose);
  const formRef = useRef<HTMLFormElement>(null);
  const [state, action, isPending] = useActionState<
    EventsExchangeActionState,
    FormData
  >(subscribeEventUpdates, null);
  const [composeAgain, setComposeAgain] = useState(false);

  const submitted = Boolean(state?.success) && !composeAgain;

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstFieldRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onCloseRef.current();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return createPortal(
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
      <button
        type="button"
        aria-label="Close subscribe form"
        className="absolute inset-0 bg-[#0d2031]/60"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        className="relative max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-xl border border-[#d9d9d9] bg-[#f7f8f8] p-5 shadow-[0_24px_80px_rgba(13,32,49,0.28)] sm:p-6"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 inline-flex h-9 w-9 items-center justify-center rounded-md text-[#0d2031]/70 transition-colors hover:bg-white hover:text-[#0d2031]"
        >
          <X className="h-4 w-4" />
        </button>

        <p className="text-[10px] font-medium tracking-[0.26em] text-[#0c8dd8] uppercase">
          Newsletter
        </p>
        <h2
          id={titleId}
          className="mt-2 pr-10 font-serif text-2xl tracking-[-0.03em] text-[#0d2031]"
        >
          {formCopy.title}
        </h2>
        <p
          id={descriptionId}
          className="mt-2 text-sm leading-6 text-[#0d2031]/70 sm:text-base"
        >
          {formCopy.description}
        </p>

        {submitted ? (
          <div
            role="status"
            aria-live="polite"
            className="border-primary bg-blue-dark mt-6 space-y-3 border-l-2 py-5 pr-5 pl-5 text-white"
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
              Subscribe another email
            </button>
          </div>
        ) : (
          <form
            ref={formRef}
            action={action}
            className="relative mt-6"
            onSubmit={() => setComposeAgain(false)}
          >
            <EventsExchangeHoneypot />
            <input type="hidden" name="source" value={source} />

            {state?.error ? (
              <EventsExchangeFormError message={state.error} />
            ) : null}

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="event-updates-name" className={labelClassName}>
                  Name
                </label>
                <input
                  ref={firstFieldRef}
                  id="event-updates-name"
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
                <label htmlFor="event-updates-email" className={labelClassName}>
                  Email
                </label>
                <input
                  id="event-updates-email"
                  name="email"
                  type="email"
                  required
                  aria-required="true"
                  autoComplete="email"
                  placeholder="you@company.com"
                  className={inputClassName}
                />
              </div>
            </div>

            <div className="mt-5">
              <Button type="submit" disabled={isPending}>
                {isPending ? "Sending…" : formCopy.submitButton}
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>,
    document.body,
  );
}
