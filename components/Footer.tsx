"use client";

import Link from "next/link";
import { site } from "@/data/site";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Reveal } from "./Reveal";

export function Footer() {
  return (
    <footer id="contact" className="bg-blue-dark text-white">
      {/* Enquiry band */}
      <div className="border-b border-white/10">
        <div className="container grid gap-14 py-20 md:py-28 lg:grid-cols-[1.1fr_1fr] lg:gap-24">
          <Reveal>
            <p className="eyebrow text-blue-light mb-8">Begin your journey</p>
            <h2 className="mb-6 font-serif text-4xl leading-[1.05] md:text-6xl">
              Tell us where your{" "}
              <span className="text-accent">imagination</span> is drifting.
            </h2>
            <p className="text-primary-foreground/70 mb-10 max-w-md leading-relaxed font-light">
              Send a few lines about the journey you have in mind. A senior
              consultant will be in touch within one working day.
            </p>
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="text-primary-foreground/50 text-[0.65rem] tracking-[0.3em] uppercase">
                  Concierge
                </dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${site.email}`}
                    className="hover:text-accent transition-colors"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-primary-foreground/50 text-[0.65rem] tracking-[0.3em] uppercase">
                  Speak with us
                </dt>
                <dd className="mt-1">{site.phone}</dd>
              </div>
              <div>
                <dt className="text-primary-foreground/50 text-[0.65rem] tracking-[0.3em] uppercase">
                  Studio
                </dt>
                <dd className="mt-1">{site.address}</dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={120}>
            <EnquiryForm source="footer" />
          </Reveal>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container grid items-center gap-8 py-12 md:grid-cols-[1fr_auto_auto]">
        <img
          src={"/logo/logo-white.png"}
          alt="Eastbound"
          className="h-9 w-auto"
        />
        <nav className="flex flex-wrap gap-8">
          {site.nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-primary-foreground/70 hover:text-blue-light text-[0.7rem] tracking-[0.28em] uppercase transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="text-primary-foreground/70 flex gap-6 text-[0.7rem] tracking-[0.28em] uppercase">
          <a
            href={site.social.instagram}
            target="_blank"
            className="hover:text-accent transition-colors"
          >
            Instagram
          </a>
          <a
            href={site.social.linkedin}
            target="_blank"
            className="hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 py-6">
        <div className="text-primary-foreground/50 container flex flex-wrap justify-between gap-4 text-[0.68rem] tracking-[0.22em] uppercase">
          <span>
            © {new Date().getFullYear()} Eastbound Travel. All rights reserved.
          </span>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/privacy"
              className="hover:text-accent transition-colors"
            >
              Privacy Policy
            </Link>
            <span>·</span>
            <Link href="/terms" className="hover:text-accent transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
