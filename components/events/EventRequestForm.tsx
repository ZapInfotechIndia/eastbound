"use client";

import { useActionState, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

import { Button } from "@/components/ui/Button";
import EventsExchangeFormError from "@/components/events/EventsExchangeFormError";
import EventsExchangeHoneypot from "@/components/events/EventsExchangeHoneypot";
import {
  submitEventPortalRequest,
  type EventsExchangeActionState,
} from "@/lib/events-exchange/actions";
import {
  eventRequestSources,
  type EventRequestSource,
} from "@/lib/events-exchange/constants";

export { eventRequestSources, type EventRequestSource };

const formCopy = {
  title: "Tell us what you need",
  description:
    "Share a few details and we’ll recommend the right venue options for your group.",
  submitButton: "Send My Request",
  successTitle: "Thank you — we've received your request",
  successBody: "A member of our team will be in touch within 24 hours.",
};

type EventRequestFormProps = {
  source: EventRequestSource;
  onClose: () => void;
};

const inputClassName =
  "w-full rounded-md border border-[#d9d9d9] bg-white px-3 py-2 text-sm text-[#0d2031] outline-none placeholder:text-[#0d2031]/40 focus-visible:ring-2 focus-visible:ring-[#0c8dd8]";

export default function EventRequestForm({
  source,
  onClose,
}: EventRequestFormProps) {
  const titleId = useId();
  const descriptionId = useId();
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const onCloseRef = useRef(onClose);
  const formRef = useRef<HTMLFormElement>(null);
  const formAction = submitEventPortalRequest.bind(null, source);
  const [state, action, isPending] = useActionState<
    EventsExchangeActionState,
    FormData
  >(formAction, null);
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
        aria-label="Close request form"
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
          Request form
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
              Send another request
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
                <label
                  htmlFor="event-request-name"
                  className="mb-2 block text-xs font-medium tracking-[0.12em] text-[#0d2031]/75 uppercase"
                >
                  Name
                </label>
                <input
                  ref={firstFieldRef}
                  id="event-request-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className={inputClassName}
                />
              </div>

              <div>
                <label
                  htmlFor="event-request-email"
                  className="mb-2 block text-xs font-medium tracking-[0.12em] text-[#0d2031]/75 uppercase"
                >
                  Email
                </label>
                <input
                  id="event-request-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className={inputClassName}
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="event-request-note"
                  className="mb-2 block text-xs font-medium tracking-[0.12em] text-[#0d2031]/75 uppercase"
                >
                  Short Note on what you need
                </label>
                <textarea
                  id="event-request-note"
                  name="note"
                  required
                  rows={4}
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
        )}
      </div>
    </div>,
    document.body,
  );
}
