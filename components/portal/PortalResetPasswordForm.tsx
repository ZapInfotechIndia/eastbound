"use client";

import Link from "next/link";
import { useActionState } from "react";

import {
  resetPasswordForPortal,
  type AuthActionState,
} from "@/lib/auth/actions";
import type { PortalId } from "@/lib/auth/portals";
import { portals } from "@/lib/auth/portals";

type PortalResetPasswordFormProps = {
  portalId: PortalId;
  token: string | null;
  tokenError?: string | null;
};

const fieldClass =
  "focus:border-primary mt-2 w-full border-b border-white/40 bg-transparent px-0 py-3 text-base text-white transition-colors outline-none placeholder:text-white/45";
const labelClass =
  "text-[10px] font-medium tracking-[0.2em] text-white/75 uppercase";

export default function PortalResetPasswordForm({
  portalId,
  token,
  tokenError,
}: PortalResetPasswordFormProps) {
  const portal = portals[portalId];
  const action = resetPasswordForPortal.bind(null, portalId);
  const [state, formAction, isPending] = useActionState<
    AuthActionState,
    FormData
  >(action, null);

  if (!token) {
    return (
      <div className="bg-blue-dark/80 border border-white/20 p-6 backdrop-blur-sm sm:p-8">
        <p className="border border-red-400/40 bg-red-500/10 px-3 py-2 text-xs leading-5 text-red-100">
          {tokenError ||
            "This reset link is invalid or has expired. Request a new one."}
        </p>
        <p className="mt-5 text-center text-xs text-white/70">
          <Link
            href={portal.forgotPasswordPath}
            className="hover:text-primary text-white underline-offset-2 transition-colors hover:underline"
          >
            Request a new reset link
          </Link>
        </p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      className="bg-blue-dark/80 border border-white/20 p-6 backdrop-blur-sm sm:p-8"
    >
      <input type="hidden" name="token" value={token} />

      {state?.error ? (
        <p className="mb-5 border border-red-400/40 bg-red-500/10 px-3 py-2 text-xs leading-5 text-red-100">
          {state.error}
        </p>
      ) : null}

      <div className="space-y-5">
        <div>
          <label htmlFor="password" className={labelClass}>
            New password
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
          <label htmlFor="confirmPassword" className={labelClass}>
            Confirm password
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            autoComplete="new-password"
            required
            minLength={8}
            className={fieldClass}
            placeholder="Re-enter password"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="bg-primary hover:text-blue-dark mt-8 inline-flex w-full items-center justify-center gap-3 px-5 py-3 text-[11px] font-semibold tracking-[0.22em] uppercase transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white disabled:opacity-60"
      >
        {isPending ? "Updating…" : "Update password"}{" "}
        <span aria-hidden="true">→</span>
      </button>

      <p className="mt-5 text-center text-xs text-white/70">
        <Link
          href={portal.homePath}
          className="hover:text-primary text-white underline-offset-2 transition-colors hover:underline"
        >
          Back to sign in
        </Link>
      </p>
    </form>
  );
}
