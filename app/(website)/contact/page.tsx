"use client";

import { Reveal } from "@/components/Reveal";
import { EnquiryForm } from "@/components/EnquiryForm";
import {
  contactHero,
  offices,
  financialRiskAssurance,
  financialRiskAssuranceStatement,
} from "@/data/contact";
import { site } from "@/data/site";
import BrandLogos from "@/components/BrandLogos";

const ContactPage = () => {
  return (
    <div>
      <main className="bg-blue-dark text-foreground">
        {/* Asymmetric intro: oversized headline left, quick contact rail right */}
        {/* subhero */}
        <section className="bg-blue-dark pt-36 pb-20 text-white md:pt-44 md:pb-28">
          <div className="container grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-7">
              <div className="mb-7 flex items-center gap-4">
                <span className="bg-accent h-px w-12" />
                <span className="text-primary-foreground/70 text-[0.72rem] tracking-[0.32em] uppercase">
                  {contactHero.eyebrow}
                </span>
              </div>
              <h1 className="font-serif text-4xl leading-[1.04] tracking-tight md:text-5xl lg:text-[3.9rem]">
                Let's Create <span className="text-accent">Remarkable</span>{" "}
                Journeys Together
              </h1>
              <p className="text-primary-foreground/70 mt-8 max-w-xl leading-relaxed font-light">
                {contactHero.copy}
              </p>
            </Reveal>

            <Reveal
              delay={120}
              className="self-end lg:col-span-4 lg:col-start-9"
            >
              <dl className="space-y-8 border-l border-white/15 pl-8">
                <div>
                  <dt className="text-primary-foreground/50 text-[0.65rem] tracking-[0.3em] uppercase">
                    Email
                  </dt>
                  <dd className="mt-2 font-serif text-xl">
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
                    Telephone
                  </dt>
                  <dd className="mt-2 font-serif text-xl">
                    <a
                      href={`tel:${site.phone.replace(/[\s()]/g, "")}`}
                      className="hover:text-accent transition-colors"
                    >
                      {site.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-primary-foreground/50 text-[0.65rem] tracking-[0.3em] uppercase">
                    Hours
                  </dt>
                  <dd className="text-primary-foreground/70 mt-2 text-sm font-light">
                    Enquiries answered within one working day. 24/7 support
                    while your guests are travelling.
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </section>

        {/* Enquiry form — wide form, narrow sticky note column */}
        <section id="enquiry" className="bg-background py-24 md:py-32">
          <div className="container grid gap-12 lg:grid-cols-12 lg:gap-20">
            <Reveal className="lg:col-span-4">
              <p className="eyebrow text-blue-light mb-4">Get in Touch</p>
              <h2 className="text-primary font-serif text-3xl leading-[1.08] md:text-4xl">
                Tell us about the programme you have in mind.
              </h2>
              <p className="text-muted-foreground mt-6 leading-relaxed font-light">
                The more you share — dates, party size, the brand this needs to
                reflect — the sharper our first proposal will be.
              </p>
              <p className="text-accent mt-10 font-serif text-xl italic">
                One point of contact, from first brief to homecoming.
              </p>
            </Reveal>

            <div className="lg:col-span-8">
              <EnquiryForm source="contact_page" />
            </div>
          </div>
        </section>

        {/* Offices — asymmetric stagger */}
        <section
          className="relative overflow-hidden bg-neutral-100 bg-cover bg-center bg-no-repeat py-24 md:py-32"
          style={{ backgroundImage: `url('/images/offices.jpg')` }}
        >
          <div className="container">
            <Reveal className="mb-16 max-w-xl lg:ml-[42%]">
              <p className="eyebrow text-blue-light mb-4">Our Offices</p>
              <h2 className="font-serif text-3xl leading-[1.05] text-white md:text-5xl">
                Three offices,{" "}
                <span className="text-accent">five countries.</span>
              </h2>
            </Reveal>

            <div className="grid gap-6 md:grid-cols-12">
              {offices.map((o, i) => (
                <Reveal
                  key={o.label}
                  delay={i * 110}
                  className={
                    i === 0
                      ? "md:col-span-6"
                      : i === 1
                        ? "md:col-span-6"
                        : "md:col-span-6"
                  }
                >
                  <div className="card-frame group bg-background border-border/70 h-full border p-8 md:p-10">
                    <p className="text-blue-light text-[0.65rem] tracking-[0.3em] uppercase">
                      {o.country}
                    </p>
                    <h3 className="text-primary group-hover:text-accent mt-4 font-serif text-2xl transition-colors md:text-3xl">
                      {o.label}
                    </h3>
                    <address className="text-muted-foreground mt-5 leading-relaxed font-light not-italic">
                      {o.lines.map((l) => (
                        <span key={l} className="block">
                          {l}
                        </span>
                      ))}
                    </address>
                    <dl className="mt-7 space-y-2 text-sm">
                      <div className="flex gap-3">
                        <dt className="text-muted-foreground w-6">P</dt>
                        <dd className="text-primary/85">{o.phone}</dd>
                      </div>
                      <div className="flex gap-3">
                        <dt className="text-muted-foreground w-6">E</dt>
                        <dd>
                          <a
                            href={`mailto:${o.email}`}
                            className="text-primary/85 hover:text-accent transition-colors"
                          >
                            {o.email}
                          </a>
                        </dd>
                      </div>
                    </dl>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Payment policy */}
        <section className="bg-blue-light py-24 text-white md:py-32">
          <div className="container grid gap-12 lg:grid-cols-12 lg:gap-20">
            <Reveal className="lg:col-span-5">
              <p className="eyebrow text-blue-dark mb-4">
                {financialRiskAssurance.eyebrow}
              </p>
              <h2 className="font-serif text-3xl leading-[1.08] md:text-4xl">
                {financialRiskAssurance.title}
              </h2>
            </Reveal>
            <div className="lg:col-span-6 lg:col-start-7">
              <ul className="border-t border-white/15">
                {financialRiskAssurance.points.map((p, i) => (
                  <Reveal key={p.slice(0, 20)} delay={i * 80} as="div">
                    <li className="group flex items-baseline gap-6 border-b border-white/15 py-6">
                      <span className="text-blue-dark font-serif">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-blue-dark leading-relaxed font-medium">
                        {p}
                      </span>
                    </li>
                  </Reveal>
                ))}
              </ul>
              <p className="text-primary-foreground/90 mt-12 font-serif text-xl italic md:text-2xl">
                {financialRiskAssuranceStatement}
              </p>
            </div>
          </div>
        </section>

        <BrandLogos />
      </main>
    </div>
  );
};

export default ContactPage;
