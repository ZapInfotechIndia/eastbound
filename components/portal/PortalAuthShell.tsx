import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import type { PortalConfig } from "@/lib/auth/portals";

type PortalAuthShellProps = {
  portal: PortalConfig;
  children: ReactNode;
  footer?: ReactNode;
  /** Optional override for the left-column copy */
  title?: string;
  description?: ReactNode;
  /** Wider right column for two-column forms */
  wideForm?: boolean;
};

export default function PortalAuthShell({
  portal,
  children,
  footer,
  title = portal.title,
  description = portal.description,
  wideForm = false,
}: PortalAuthShellProps) {
  return (
    <main className="bg-blue-dark relative isolate flex min-h-screen items-end overflow-hidden text-white sm:items-center">
      <Image
        src={portal.imageUrl}
        alt="Eastbound travel landscape"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
        style={
          portal.imagePosition
            ? { objectPosition: portal.imagePosition }
            : undefined
        }
      />
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-[#0d2031]/90 via-[#0d2031]/30 to-[#0d2031]/55" />

      <header className="absolute inset-x-0 top-0">
        <div className="container flex items-center justify-between py-5 sm:py-7">
          <Link href="/" aria-label="Return to Eastbound home">
            <Image
              src="/logo/logo-white.png"
              alt="Eastbound"
              width={140}
              height={100}
              priority
              className="h-auto w-24 sm:w-28"
            />
          </Link>
          <Link
            href="/"
            className="hover:text-blue-light text-[10px] font-medium tracking-[0.22em] text-white/80 uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Back to Eastbound
          </Link>
        </div>
      </header>

      <div className="container w-full py-8 sm:py-16 lg:py-20">
        <div
          className={
            wideForm
              ? "grid gap-10 lg:grid-cols-[1fr_minmax(28rem,40rem)] lg:items-center lg:gap-16"
              : "grid gap-10 lg:grid-cols-[1fr_24rem] lg:items-center lg:gap-20"
          }
        >
          <div className="max-w-xl">
            {portal.eyebrow ? (
              <p className="eyebrow text-blue-light">{portal.eyebrow}</p>
            ) : null}
            <h1 className="mt-5 font-serif text-5xl leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              {title}
            </h1>
            <p className="mt-6 max-w-md text-sm leading-6 text-white/80 sm:text-sm sm:leading-7">
              {description}
            </p>
          </div>

          {children}
        </div>
      </div>

      {footer}
    </main>
  );
}
