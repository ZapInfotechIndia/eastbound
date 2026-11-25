"use client";

import Link from "next/link";
import { useActionState } from "react";

import {
  signInForPortal,
  type AuthActionState,
} from "@/lib/auth/actions";
import type { PortalId } from "@/lib/auth/portals";
import { portals } from "@/lib/auth/portals";

type PortalLoginFormProps = {
  portalId: PortalId;
  banner?: string | null;
};

const fieldClass =
  "focus:border-primary mt-2 w-full border-b border-white/40 bg-transparent px-0 py-3 text-base text-white transition-colors outline-none placeholder:text-white/45";
const labelClass =
  "text-[10px] font-medium tracking-[0.2em] text-white/75 uppercase";

export default function PortalLoginForm({
  portalId,
  banner,
}: PortalLoginFormProps) {
  const portal = portals[portalId];
  const action = signInForPortal.bind(null, portalId);
  const [state, formAction, isPending] = useActionState<
    AuthActionState,
    FormData
  >(action, null);

  return (
    <form
      action={formAction}
      className="bg-blue-dark/80 border border-white/20 p-6 backdrop-blur-sm sm:p-8"
    >
      {banner ? (
        <p className="mb-5 border border-white/20 bg-white/5 px-3 py-2 text-xs leading-5 text-white/85">
          {banner}
        </p>
      ) : null}

      {state?.error ? (
        <p className="mb-5 border border-red-400/40 bg-red-500/10 px-3 py-2 text-xs leading-5 text-red-100">
          {state.error}
        </p>
      ) : null}

      <div className="space-y-5">
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
          <div className="flex items-center justify-between gap-4">
            <label htmlFor="password" className={labelClass}>
              Password
            </label>
            <Link
              href={portal.forgotPasswordPath}
              className="hover:text-primary text-[10px] tracking-[0.12em] text-white/70 uppercase transition-colors"
            >
              Forgot password?
            </Link>
          </div>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className={fieldClass}
            placeholder="Enter your password"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="bg-primary hover:text-blue-dark mt-8 inline-flex w-full items-center justify-center gap-3 px-5 py-3 text-[11px] font-semibold tracking-[0.22em] uppercase transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white disabled:opacity-60"
      >
        {isPending ? "Signing in…" : "Sign in"}{" "}
        <span aria-hidden="true">→</span>
      </button>

      <p className="mt-5 text-center text-xs leading-5 text-white/65">
        {portal.supportCopy}
      </p>
      <p className="mt-3 text-center text-xs text-white/70">
        New here?{" "}
        <Link
          href={portal.signUpPath}
          className="hover:text-primary text-white underline-offset-2 transition-colors hover:underline"
        >
          Create an account
        </Link>
      </p>
    </form>
  );
}
