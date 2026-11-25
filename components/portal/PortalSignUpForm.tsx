"use client";

import Link from "next/link";
import { useActionState } from "react";

import {
  signUpForPortal,
  type AuthActionState,
} from "@/lib/auth/actions";
import type { PortalId } from "@/lib/auth/portals";
import { portals } from "@/lib/auth/portals";

type PortalSignUpFormProps = {
  portalId: PortalId;
};

const fieldClass =
  "focus:border-primary mt-2 w-full border-b border-white/40 bg-transparent px-0 py-3 text-base text-white transition-colors outline-none placeholder:text-white/45";
const labelClass =
  "text-[10px] font-medium tracking-[0.2em] text-white/75 uppercase";

export default function PortalSignUpForm({ portalId }: PortalSignUpFormProps) {
  const portal = portals[portalId];
  const action = signUpForPortal.bind(null, portalId);
  const [state, formAction, isPending] = useActionState<
    AuthActionState,
    FormData
  >(action, null);

  return (
    <form
      action={formAction}
      className="bg-blue-dark/80 border border-white/20 p-6 backdrop-blur-sm sm:p-8"
    >
      {state?.error ? (
        <p className="mb-5 border border-red-400/40 bg-red-500/10 px-3 py-2 text-xs leading-5 text-red-100">
          {state.error}
        </p>
      ) : null}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className={fieldClass}
            placeholder="John Smith"
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className={fieldClass}
            placeholder="name@company.com"
          />
        </div>
        <div>
          <label htmlFor="password" className={labelClass}>
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
            minLength={8}
            className={fieldClass}
            placeholder="At least 8 characters"
          />
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>
            Company <span className="normal-case tracking-normal">(optional)</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            className={fieldClass}
            placeholder="ABC Travel"
          />
        </div>
        <div>
          <label htmlFor="country" className={labelClass}>
            Country
          </label>
          <input
            id="country"
            name="country"
            type="text"
            autoComplete="country-name"
            required
            className={fieldClass}
            placeholder="United Kingdom"
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone <span className="normal-case tracking-normal">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={fieldClass}
            placeholder="+44 7700 900000"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="bg-primary hover:text-blue-dark mt-8 inline-flex w-full items-center justify-center gap-3 px-5 py-3 text-[11px] font-semibold tracking-[0.22em] uppercase transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white disabled:opacity-60"
      >
        {isPending ? "Creating account…" : "Create account"}{" "}
        <span aria-hidden="true">→</span>
      </button>

      <p className="mt-5 text-center text-xs leading-5 text-white/65">
        Access is limited to {portal.title}. One account cannot access both
        portals.
      </p>
      <p className="mt-3 text-center text-xs text-white/70">
        Already registered?{" "}
        <Link
          href={portal.homePath}
          className="hover:text-primary text-white underline-offset-2 transition-colors hover:underline"
        >
          Sign in
        </Link>
      </p>
    </form>
  );
}
