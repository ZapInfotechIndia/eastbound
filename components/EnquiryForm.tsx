"use client";

import { useActionState, useEffect, useRef, useState, type ReactNode } from "react";

import { destinationOptions, programmeTypes } from "@/data/contact";
import {
  submitEnquiry,
  type EnquiryActionState,
} from "@/lib/enquiry/actions";
import { HONEYPOT_FIELD } from "@/lib/enquiry/constants";
import type { EnquirySource } from "@/lib/db/schema";

type EnquiryFormProps = {
  source: EnquirySource;
  className?: string;
};

const submitLabels: Record<EnquirySource, string> = {
  footer: "Submit enquiry",
  contact_page: "Send enquiry",
};

const successCopy = {
  title: "Thank you — we've received your enquiry",
  body: "A consultant will review what you've shared and be in touch within one working day.",
};

export function EnquiryForm({ source, className = "" }: EnquiryFormProps) {
  const formAction = submitEnquiry.bind(null, source);
  const [state, action, isPending] = useActionState<
    EnquiryActionState,
    FormData
  >(formAction, null);
  const [showSuccess, setShowSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const theme = source === "footer" ? "dark" : "light";
  const isDetailed = source === "contact_page";
  const inputClass =
    theme === "dark"
      ? "enquiry-input enquiry-input--dark"
      : "enquiry-input enquiry-input--light";
  const formClass = isDetailed
    ? `grid gap-x-8 gap-y-7 sm:grid-cols-2 ${className}`
    : `space-y-6 ${className}`;

  useEffect(() => {
    if (state?.success) {
      formRef.current?.reset();
      setShowSuccess(true);
    }
    if (state?.error) {
      setShowSuccess(false);
    }
  }, [state]);

  return (
    <>
      <form ref={formRef} action={action} className={formClass}>
        <input type="hidden" name="source" value={source} />
        <EnquiryHoneypot />

        {state?.error ? (
          <EnquiryErrorNotice
            theme={theme}
            message={state.error}
            className={isDetailed ? "sm:col-span-2" : undefined}
          />
        ) : null}

        {showSuccess && state?.success ? (
          <EnquirySuccessNotice
            theme={theme}
            className={isDetailed ? "sm:col-span-2" : undefined}
            onDismiss={() => setShowSuccess(false)}
          />
        ) : null}

        {isDetailed ? (
          <DetailedEnquiryFields inputClass={inputClass} theme={theme} />
        ) : (
          <ShortEnquiryFields inputClass={inputClass} theme={theme} />
        )}

        <div className={isDetailed ? "sm:col-span-2" : undefined}>
          <EnquirySubmitButton
            label={submitLabels[source]}
            pending={isPending}
            className={source === "footer" ? "hover:font-semibold" : ""}
          />
        </div>
      </form>
      <EnquiryFormStyles />
    </>
  );
}

function EnquiryHoneypot() {
  return (
    <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden>
      <label htmlFor={HONEYPOT_FIELD}>Company website</label>
      <input
        id={HONEYPOT_FIELD}
        name={HONEYPOT_FIELD}
        type="text"
        tabIndex={-1}
        autoComplete="off"
      />
    </div>
  );
}

function ShortEnquiryFields({
  inputClass,
  theme,
}: {
  inputClass: string;
  theme: "dark" | "light";
}) {
  return (
    <>
      <EnquiryField label="Name" theme={theme}>
        <input
          name="name"
          required
          type="text"
          className={inputClass}
          placeholder="Your name"
          autoComplete="name"
        />
      </EnquiryField>
      <div className="grid gap-6 sm:grid-cols-2">
        <EnquiryField label="Email" theme={theme}>
          <input
            name="email"
            required
            type="email"
            className={inputClass}
            placeholder="you@example.com"
            autoComplete="email"
          />
        </EnquiryField>
        <EnquiryField label="Phone" theme={theme}>
          <input
            name="phone"
            type="tel"
            className={inputClass}
            placeholder="+1 555 000 0000"
            autoComplete="tel"
          />
        </EnquiryField>
      </div>
      <EnquiryField label="Destination" theme={theme}>
        <select name="destination" className={inputClass} defaultValue="">
          <option value="" disabled>
            Where would you like to go?
          </option>
          {destinationOptions.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
      </EnquiryField>
      <EnquiryField label="A little about your trip" theme={theme}>
        <textarea
          name="message"
          rows={4}
          className={`${inputClass} resize-none`}
          placeholder="Dates, party size, anything you already dream of..."
        />
      </EnquiryField>
    </>
  );
}

function DetailedEnquiryFields({
  inputClass,
  theme,
}: {
  inputClass: string;
  theme: "dark" | "light";
}) {
  return (
    <>
      <EnquiryField label="Name *" htmlFor="c-name" theme={theme}>
        <input
          id="c-name"
          name="name"
          required
          type="text"
          className={inputClass}
          placeholder="Your name"
          autoComplete="name"
        />
      </EnquiryField>
      <EnquiryField label="Company" htmlFor="c-company" theme={theme}>
        <input
          id="c-company"
          name="company"
          type="text"
          className={inputClass}
          placeholder="Company / agency"
          autoComplete="organization"
        />
      </EnquiryField>
      <EnquiryField label="Email *" htmlFor="c-email" theme={theme}>
        <input
          id="c-email"
          name="email"
          required
          type="email"
          className={inputClass}
          placeholder="you@example.com"
          autoComplete="email"
        />
      </EnquiryField>
      <EnquiryField label="Phone" htmlFor="c-phone" theme={theme}>
        <input
          id="c-phone"
          name="phone"
          type="tel"
          className={inputClass}
          placeholder="+1 555 000 0000"
          autoComplete="tel"
        />
      </EnquiryField>
      <EnquiryField
        label="Destination(s) of interest"
        htmlFor="c-dest"
        theme={theme}
      >
        <select id="c-dest" name="destination" className={inputClass} defaultValue="">
          <option value="" disabled>
            Select a destination
          </option>
          {destinationOptions.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
      </EnquiryField>
      <EnquiryField label="Type of programme" htmlFor="c-type" theme={theme}>
        <select id="c-type" name="programme_type" className={inputClass} defaultValue="">
          <option value="" disabled>
            Select a programme type
          </option>
          {programmeTypes.map((p) => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
      </EnquiryField>
      <EnquiryField
        label="Travel dates"
        htmlFor="c-dates"
        theme={theme}
        className="sm:col-span-2"
      >
        <input
          id="c-dates"
          name="travel_dates"
          type="text"
          className={inputClass}
          placeholder="e.g. Late February 2027, 11 nights"
        />
      </EnquiryField>
      <EnquiryField
        label="Message"
        htmlFor="c-message"
        theme={theme}
        className="sm:col-span-2"
      >
        <textarea
          id="c-message"
          name="message"
          rows={5}
          className={`${inputClass} resize-none`}
          placeholder="Party size, interests, budget guidance, anything already decided..."
        />
      </EnquiryField>
    </>
  );
}

function EnquiryErrorNotice({
  theme,
  message,
  className = "",
}: {
  theme: "dark" | "light";
  message: string;
  className?: string;
}) {
  const surfaceClass =
    theme === "dark"
      ? "border-red-400/40 bg-red-500/10 text-red-50"
      : "border-red-500/35 bg-red-500/5 text-red-900";

  return (
    <div
      role="alert"
      className={`border px-4 py-3 text-sm leading-relaxed ${surfaceClass} ${className}`}
    >
      {message}
    </div>
  );
}

function EnquirySuccessNotice({
  theme,
  className = "",
  onDismiss,
}: {
  theme: "dark" | "light";
  className?: string;
  onDismiss: () => void;
}) {
  const surfaceClass =
    theme === "dark"
      ? "bg-white/5 text-primary-foreground"
      : "bg-accent/5 text-primary";
  const bodyClass =
    theme === "dark" ? "text-primary-foreground/75" : "text-muted-foreground";
  const dismissClass =
    theme === "dark"
      ? "text-blue-light hover:text-accent"
      : "text-accent hover:text-primary";

  return (
    <div
      role="status"
      aria-live="polite"
      className={`border-accent space-y-3 border-l-2 py-2 pl-5 ${surfaceClass} ${className}`}
    >
      <p className="font-serif text-xl leading-snug md:text-2xl">
        {successCopy.title}
      </p>
      <p className={`text-sm leading-relaxed font-light ${bodyClass}`}>
        {successCopy.body}
      </p>
      <button
        type="button"
        onClick={onDismiss}
        className={`text-[0.68rem] tracking-[0.22em] uppercase transition-colors ${dismissClass}`}
      >
        Send another enquiry
      </button>
    </div>
  );
}

function EnquirySubmitButton({
  label,
  pending,
  className = "",
}: {
  label: string;
  pending: boolean;
  className?: string;
}) {
  return (
    <button
      type="submit"
      disabled={pending}
      className={`group bg-accent text-accent-foreground inline-flex items-center gap-3 px-8 py-4 text-[0.72rem] tracking-[0.28em] uppercase transition-transform duration-300 hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-60 ${className}`}
    >
      {pending ? "Sending…" : label}
      <span className="transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </button>
  );
}

function EnquiryField({
  label,
  htmlFor,
  className = "",
  theme,
  children,
}: {
  label: string;
  htmlFor?: string;
  className?: string;
  theme: "dark" | "light";
  children: ReactNode;
}) {
  const labelClass =
    theme === "dark"
      ? "text-primary-foreground/50 mb-2 block text-[0.65rem] tracking-[0.3em] uppercase"
      : "text-muted-foreground mb-2 block text-[0.65rem] tracking-[0.3em] uppercase";

  if (htmlFor) {
    return (
      <div className={className}>
        <label htmlFor={htmlFor} className={labelClass}>
          {label}
        </label>
        {children}
      </div>
    );
  }

  return (
    <label className={`block ${className}`}>
      <span className={labelClass}>{label}</span>
      {children}
    </label>
  );
}

function EnquiryFormStyles() {
  return (
    <style>{`
        .enquiry-input {
          width: 100%;
          background: transparent;
          border: 0;
          padding: 0.75rem 0;
          font-family: var(--font-sans);
          font-weight: 300;
          font-size: 0.95rem;
          outline: none;
          transition: border-color 300ms;
        }
        .enquiry-input--dark {
          border-bottom: 1px solid rgba(255,255,255,0.2);
          color: white;
        }
        .enquiry-input--dark::placeholder { color: rgba(255,255,255,0.4); }
        .enquiry-input--dark:focus { border-color: var(--color-accent); }
        .enquiry-input--dark option { color: var(--color-primary); }
        .enquiry-input--light {
          border-bottom: 1px solid var(--input);
          color: var(--color-primary);
        }
        .enquiry-input--light::placeholder { color: var(--color-muted-foreground); }
        .enquiry-input--light:focus { border-color: var(--color-accent); }
      `}</style>
  );
}
