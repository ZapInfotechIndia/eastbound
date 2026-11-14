"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Download } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { eventProposalRequestPath } from "@/components/events/EventProposalForm";
import EventRequestForm, {
  eventRequestSources,
  type EventRequestSource,
} from "@/components/events/EventRequestForm";
import EventUpdatesSubscribeForm, {
  eventUpdatesSubscribeSources,
  type EventUpdatesSubscribeSource,
} from "@/components/events/EventUpdatesSubscribeForm";
import { Button } from "@/components/ui/Button";
import {
  eventBoardSections,
  type EventBoardDetail,
} from "@/data/eventsBoard";
import { site } from "@/data/site";

const navItems = [
  { label: "Explore Event Venues", href: "#explore-event-venues" },
  { label: "Browse Experiences", href: "#browse-experiences" },
  { label: "Request a Proposal", href: "#request-a-proposal" },
  { label: "Event Updates", href: "#event-updates" },
  { label: "Download Resources", href: "#download-resources" },
];

const sections = eventBoardSections;

const bodyTextClass =
  "text-sm leading-6 text-[#0d2031]/52 sm:leading-[1.65]";
const detailHeadingClass =
  "font-serif text-xl tracking-[-0.03em] text-[#0d2031] sm:text-2xl";
const closingTextClass = "text-sm leading-6 text-[#0d2031]/55 sm:max-w-2xl";
const introTextClass = `mt-5 max-w-3xl ${bodyTextClass}`;
const cardTitleClass =
  "font-serif text-lg leading-snug tracking-[-0.02em] text-[#0d2031] sm:text-xl";
const boardBoxClass =
  "rounded-xl border border-[#0d2031]/10 bg-[#f4f7f9] p-5 shadow-[0_1px_0_rgba(13,32,49,0.04)] sm:p-6";

const splitListItem = (item: string) => {
  const separator = " — ";
  const index = item.indexOf(separator);
  if (index === -1) {
    return { title: item, description: null };
  }

  return {
    title: item.slice(0, index),
    description: item.slice(index + separator.length),
  };
};

const BoardListItemContent = ({
  title,
  description,
}: {
  title: string;
  description: string | null;
}) => {
  if (!description) {
    return <>{title}</>;
  }

  return (
    <>
      <span className="font-medium text-[#0d2031]">{title}</span>
      <span className="text-[#0d2031]/45"> — </span>
      <span>{description}</span>
    </>
  );
};

const BoardList = ({
  items,
  variant = "divided",
}: {
  items: string[];
  variant?: "divided" | "compact";
}) => {
  if (variant === "compact") {
    return (
      <ul className={`mt-4 list-disc space-y-2 pl-5 marker:text-[#0d2031]/35 ${bodyTextClass}`}>
        {items.map((item) => {
          const { title, description } = splitListItem(item);

          return (
            <li key={item}>
              <BoardListItemContent title={title} description={description} />
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <ul className="mt-4 divide-y divide-[#e8ebed]">
      {items.map((item) => {
        const { title, description } = splitListItem(item);

        return (
          <li key={item} className="py-4 first:pt-0 last:pb-0">
            <p className={bodyTextClass}>
              <BoardListItemContent title={title} description={description} />
            </p>
          </li>
        );
      })}
    </ul>
  );
};

const ExperienceGrid = ({ details }: { details: EventBoardDetail[] }) => (
  <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
    {details.map((detail) => (
      <article key={detail.heading} className={`${boardBoxClass} h-full`}>
        <h3 className={cardTitleClass}>{detail.heading}</h3>
        {detail.description ? (
          <p className={`mt-2.5 ${bodyTextClass}`}>{detail.description}</p>
        ) : null}
      </article>
    ))}
  </div>
);

const ResourceCard = ({ detail }: { detail: EventBoardDetail }) => (
  <article className={`${boardBoxClass} h-full`}>
    <h3 className={cardTitleClass}>{detail.heading}</h3>
    {detail.description ? (
      <p className={`mt-2.5 max-w-prose ${bodyTextClass}`}>{detail.description}</p>
    ) : null}
    {detail.list ? (
      <BoardList items={detail.list} variant="compact" />
    ) : null}
    {detail.download ? (
      <div className="mt-6">
        <Button asChild size="sm">
          <a
            href={detail.download.href}
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            {detail.download.label}
            <Download className="h-4 w-4" />
          </a>
        </Button>
      </div>
    ) : null}
  </article>
);

const renderFormBlock = (section: (typeof sections)[number]) => {
  if (!section.form) return null;

  return (
    <div className="mt-8 rounded-xl border border-[#d9d9d9] bg-[#f7f8f8] p-5 sm:p-6">
      <div className="mb-5">
        <p className="text-[10px] font-medium tracking-[0.26em] text-[#0c8dd8] uppercase">
          Request form
        </p>
        <h3 className="mt-2 font-serif text-2xl tracking-[-0.03em] text-[#0d2031]">
          {section.form.title}
        </h3>
        <p className="mt-2 text-sm leading-6 text-[#0d2031]/70 sm:text-base">
          {section.form.description}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {section.form.fields.map((field) => (
          <div
            key={field.label}
            className={field.type === "textarea" ? "sm:col-span-2" : ""}
          >
            <label className="mb-2 block text-xs font-medium tracking-[0.12em] text-[#0d2031]/75 uppercase">
              {field.label}
            </label>
            {field.type === "textarea" ? (
              <div className="min-h-24 rounded-md border border-[#d9d9d9] bg-white px-3 py-2 text-sm text-[#0d2031]/60">
                {field.label}
              </div>
            ) : field.type === "select" ? (
              <div className="rounded-md border border-[#d9d9d9] bg-white px-3 py-2 text-sm text-[#0d2031]/60">
                {field.label}
              </div>
            ) : (
              <div className="rounded-md border border-[#d9d9d9] bg-white px-3 py-2 text-sm text-[#0d2031]/60">
                {field.label}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <Button asChild>
          <Link href={section.cta.href}>{section.form.submitButton}</Link>
        </Button>
        <p className="text-xs tracking-[0.18em] text-[#0d2031]/55 uppercase">
          {section.form.email}
        </p>
      </div>
    </div>
  );
};

const renderSectionContent = (section: (typeof sections)[number]) => {
  switch (section.id) {
    case "explore-event-venues":
      return (
        <>
          <p className={introTextClass}>{section.intro}</p>

          {section.details?.map((detail) => (
            <div key={detail.heading} className="mt-8 max-w-3xl">
              <h3 className={detailHeadingClass}>{detail.heading}</h3>
              {detail.list ? <BoardList items={detail.list} /> : null}
            </div>
          ))}
        </>
      );

    case "browse-experiences":
      return (
        <>
          <p className={introTextClass}>{section.intro}</p>
          {section.details ? <ExperienceGrid details={section.details} /> : null}
        </>
      );

    case "request-a-proposal":
      return (
        <>
          <p className={introTextClass}>{section.intro}</p>

          {section.details?.map((detail) => (
            <div key={detail.heading} className="mt-8">
              <h3 className={detailHeadingClass}>{detail.heading}</h3>
              {detail.list ? (
                <div className="mt-5 grid gap-4 lg:grid-cols-3">
                  {detail.list.map((item, idx) => (
                    <div key={item} className={boardBoxClass}>
                      <p className="text-[10px] font-medium tracking-[0.24em] text-[#0c8dd8] uppercase">
                        Step {idx + 1}
                      </p>
                      <p className={`mt-3 ${bodyTextClass}`}>{item}</p>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </>
      );

    case "event-updates":
      return (
        <>
          <p className={introTextClass}>{section.intro}</p>

          {section.details?.map((detail) => (
            <div key={detail.heading} className="mt-8 max-w-3xl">
              <h3 className={detailHeadingClass}>{detail.heading}</h3>
              {detail.list ? <BoardList items={detail.list} /> : null}
            </div>
          ))}
        </>
      );

    case "download-resources":
      return (
        <>
          <p className={introTextClass}>{section.intro}</p>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {section.details?.map((detail) => (
              <ResourceCard key={detail.heading} detail={detail} />
            ))}
          </div>
        </>
      );

    default:
      return (
        <>
          <p className={introTextClass}>{section.intro}</p>

          {section.details?.map((detail) => (
            <div key={detail.heading} className="mt-8 max-w-3xl">
              {detail.heading ? (
                <h3 className={detailHeadingClass}>{detail.heading}</h3>
              ) : null}

              {detail.description && (
                <p className={`mt-3 ${bodyTextClass}`}>{detail.description}</p>
              )}

              {detail.list ? <BoardList items={detail.list} /> : null}
            </div>
          ))}

          {renderFormBlock(section)}
        </>
      );
  }
};

const EventsBoardContent = () => {
  const [active, setActive] = useState<string>(
    navItems[0]?.href.replace("#", "") ?? "",
  );
  const [requestSource, setRequestSource] = useState<EventRequestSource | null>(
    null,
  );
  const [updatesSubscribeSource, setUpdatesSubscribeSource] =
    useState<EventUpdatesSubscribeSource | null>(null);
  const sectionsRef = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: "-35% 0px -40% 0px", threshold: 0 },
    );

    navItems.forEach((item) => {
      const id = item.href.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        sectionsRef.current[id] = el;
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleClick =
    (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const el = sectionsRef.current[id] || document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        setActive(id);
      }
    };

  const renderSectionCta = (section: (typeof sections)[number]) => {
    if (eventRequestSources.includes(section.id as EventRequestSource)) {
      return (
        <Button
          type="button"
          className="shrink-0"
          onClick={() => setRequestSource(section.id as EventRequestSource)}
        >
          {section.cta.label}
          <ArrowRight className="h-4 w-4" />
        </Button>
      );
    }

    if (section.id === "request-a-proposal") {
      return (
        <Button asChild className="shrink-0">
          <Link href={eventProposalRequestPath}>
            {section.cta.label}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      );
    }

    if (
      eventUpdatesSubscribeSources.includes(
        section.id as EventUpdatesSubscribeSource,
      )
    ) {
      return (
        <Button
          type="button"
          className="shrink-0"
          onClick={() =>
            setUpdatesSubscribeSource(section.id as EventUpdatesSubscribeSource)
          }
        >
          {section.cta.label}
          <ArrowRight className="h-4 w-4" />
        </Button>
      );
    }

    return (
      <Button asChild className="shrink-0">
        <Link href={section.cta.href}>
          {section.cta.label}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Button>
    );
  };

  return (
    <>
      <section className="relative overflow-hidden border-b border-[#d9d9d9] bg-[#0d2031] text-white">
        <Image
          src="/images/events/events-bg.jpg"
          alt="Eastbound event venues and experiences"
          fill
          priority
          className="-z-20 object-cover opacity-80"
          style={{ objectPosition: "center" }}
        />
        <div className="absolute inset-0 -z-10 bg-linear-to-t from-[#0d2031]/90 via-[#0d2031]/35 to-[#0d2031]/60" />

        <div className="relative container mx-auto px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="eyebrow text-blue-light">Eastbound events portal</p>
            <h1 className="mt-5 font-serif text-5xl leading-[0.92] tracking-[-0.04em] sm:text-6xl">
              Events that feel distinctly local, deeply considered and
              beautifully delivered.
            </h1>
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
              Discover venue ideas, bespoke experiences, destination insight and
              event planning support curated for groups, incentives,
              celebrations and private occasions across South Asia.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild>
                <Link href="#explore-event-venues">
                  Explore Venues
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href={eventProposalRequestPath}>
                  Request a Proposal
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div className="sticky top-4 z-40 mb-6">
          <nav className="rounded-md border border-[#d9d9d9] bg-white/80 px-3 py-2 shadow-[0_8px_24px_rgba(13,32,49,0.06)] backdrop-blur-sm">
            <ul className="flex gap-2 overflow-auto">
              {navItems.map((item) => {
                const id = item.href.replace("#", "");

                return (
                  <li key={item.href} className="shrink-0">
                    <a
                      href={item.href}
                      onClick={handleClick(id)}
                      className={`inline-flex rounded-md px-3 py-2 text-sm font-medium whitespace-nowrap transition-colors ${
                        active === id
                          ? "bg-[#0d2031] text-white"
                          : "text-[#0d2031] hover:bg-[#0d2031]/8"
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="grid gap-6">
          {sections.map((section) => (
            <article
              key={section.id}
              id={section.id}
              className="border border-[#d9d9d9] bg-white p-5 shadow-[0_12px_40px_rgba(13,32,49,0.04)] sm:p-8 lg:p-10"
            >
              <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-4 sm:gap-x-5">
                <p
                  className="row-start-1 self-center text-[10px] font-medium tracking-[0.28em] text-[#0c8dd8] uppercase"
                  aria-hidden
                >
                  {section.number}
                </p>
                <div className="row-start-1 flex min-w-0 flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                  <h2 className="min-w-0 max-w-3xl font-serif text-3xl leading-tight tracking-[-0.035em] sm:text-4xl lg:text-5xl">
                    {section.title}
                  </h2>
                  <div className="shrink-0">{renderSectionCta(section)}</div>
                </div>
                {section.subtitle ? (
                  <p
                    className="col-start-2 mt-3 max-w-2xl font-serif text-lg leading-snug text-[#0d2031]/85 sm:text-xl sm:leading-snug"
                  >
                    {section.subtitle}
                  </p>
                ) : null}
                <div
                  className={`col-start-2 min-w-0 ${section.subtitle ? "mt-0" : "mt-3"}`}
                >
                  {renderSectionContent(section)}

                  <p className={`mt-8 max-w-3xl ${closingTextClass}`}>
                    {section.closingLine}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 border border-[#d9d9d9] bg-[#f8fafb] px-5 py-6 text-sm leading-7 text-[#0d2031]/75 sm:px-8 sm:text-base">
          Can&apos;t find what you need? Let us know and we&apos;ll point you to
          the right material.{" "}
          <span className="text-[#0d2031]">
            Email{" "}
            <a
              href={`mailto:${site.email}`}
              className="text-[#0c8dd8] underline decoration-[#0c8dd8]/40 underline-offset-2 transition-colors hover:text-[#0d2031] hover:decoration-[#0d2031]/40"
            >
              {site.email}
            </a>
          </span>
        </p>
      </div>

      {requestSource ? (
        <EventRequestForm
          source={requestSource}
          onClose={() => setRequestSource(null)}
        />
      ) : null}

      {updatesSubscribeSource ? (
        <EventUpdatesSubscribeForm
          source={updatesSubscribeSource}
          onClose={() => setUpdatesSubscribeSource(null)}
        />
      ) : null}
    </>
  );
};

export default EventsBoardContent;
