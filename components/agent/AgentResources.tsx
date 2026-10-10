"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import {
  agentResourceSections,
  agentResourceTabs,
  type AgentResourceExperience,
  type AgentResourceFestival,
  type AgentResourceItinerary,
  type AgentResourceMapGuide,
} from "@/data/agentResources";

const AgentResources = () => {
  const [active, setActive] = useState<string>(agentResourceTabs[0].id);
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
      { root: null, rootMargin: "-40% 0px -40% 0px", threshold: 0 },
    );

    agentResourceTabs.forEach((t) => {
      const el = document.getElementById(t.id);
      if (el) {
        sectionsRef.current[t.id] = el;
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = sectionsRef.current[id] || document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActive(id);
    }
  };

  return (
    <section
      id="agent-resources"
      className="bg-[#f5f3ee] px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="sticky top-4 z-40 mx-0 mb-4">
          <nav className="rounded-md bg-white/60 px-3 py-2 shadow-sm backdrop-blur-sm">
            <ul className="flex gap-3 overflow-auto">
              {agentResourceTabs.map((t) => (
                <li key={t.id}>
                  <a
                    href={`#${t.id}`}
                    onClick={handleClick(t.id)}
                    className={`inline-block rounded-md px-3 py-2 text-sm font-medium whitespace-normal transition-colors ${
                      active === t.id
                        ? "bg-[#0d2031] text-white"
                        : "text-[#0d2031] hover:bg-[#0d2031]/10"
                    }`}
                  >
                    {t.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="space-y-16">
          {agentResourceSections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="rounded-md bg-white p-6"
              aria-label={section.label}
            >
              <h3 className="font-serif text-2xl">{section.title}</h3>

              {section.id === "itineraries" && section.items ? (
                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  {section.items.map((itinerary) => {
                    const item = itinerary as AgentResourceItinerary;

                    return (
                      <article
                        key={item.id}
                        className="flex h-full flex-col rounded-lg border border-[#0d2031]/10 p-5"
                      >
                        <div className="mb-3 flex items-center justify-between">
                          <span className="text-xs font-semibold tracking-[0.2em] text-[#0d2031]/60 uppercase">
                            Itinerary {item.number}
                          </span>
                        </div>

                        <div className="mb-4 overflow-hidden rounded-lg">
                          <Image
                            src={item.image ?? "/images/experiences/photo.jpg"}
                            alt={item.title}
                            width={600}
                            height={400}
                            className="h-52 w-full object-cover"
                          />
                        </div>

                        <h4 className="font-serif text-2xl leading-tight text-[#0d2031]">
                          {item.title}
                        </h4>

                        <div className="mt-3 space-y-2 text-sm text-[#0d2031]/70">
                          <p>
                            <span className="font-semibold text-[#0d2031]">
                              Duration:
                            </span>{" "}
                            {item.duration}
                          </p>
                          <p>
                            <span className="font-semibold text-[#0d2031]">
                              Route:
                            </span>{" "}
                            {item.route}
                          </p>
                        </div>

                        <p className="mt-4 text-sm leading-6 text-[#0d2031]/75">
                          {item.story}
                        </p>

                        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[#0d2031]/75">
                          {item.highlights?.map((highlight) => (
                            <li key={highlight}>{highlight}</li>
                          ))}
                        </ul>
                      </article>
                    );
                  })}
                </div>
              ) : section.id === "signature-experiences" && section.items ? (
                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  {section.items.map((experience) => {
                    const item = experience as AgentResourceExperience;

                    return (
                      <article
                        key={item.id}
                        className="flex h-full flex-col rounded-lg border border-[#0d2031]/10 p-5"
                      >
                        <div className="mb-3 flex items-center justify-between">
                          <span className="text-xs font-semibold tracking-[0.2em] text-[#0d2031]/60 uppercase">
                            Experience {item.number}
                          </span>
                        </div>

                        <div className="mb-4 overflow-hidden rounded-lg">
                          <Image
                            src={item.image ?? "/images/experiences/photo.jpg"}
                            alt={item.title}
                            width={600}
                            height={400}
                            className="h-52 w-full object-cover"
                          />
                        </div>

                        <h4 className="font-serif text-2xl leading-tight text-[#0d2031]">
                          {item.title}
                        </h4>

                        <p className="mt-4 text-sm leading-6 text-[#0d2031]/75">
                          {item.description}
                        </p>

                        <p className="mt-4 text-sm font-medium text-[#0d2031]">
                          <span className="font-semibold">Destination:</span>{" "}
                          {item.destination}
                        </p>
                      </article>
                    );
                  })}
                </div>
              ) : section.id === "festival-calendar" && section.items ? (
                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  {section.items.map((festival) => {
                    const item = festival as AgentResourceFestival;

                    return (
                      <article
                        key={item.id}
                        className="flex h-full flex-col overflow-hidden rounded-lg border border-[#0d2031]/10 md:flex-row"
                      >
                        <div className="md:w-2/5">
                          <div className="h-full w-full overflow-hidden">
                            <Image
                              src={
                                item.image ?? "/images/experiences/photo.jpg"
                              }
                              alt={item.title}
                              width={600}
                              height={400}
                              className="h-36 min-h-52 w-full object-cover"
                            />
                          </div>
                        </div>

                        <div className="flex flex-1 flex-col p-5 md:p-6">
                          <div className="mb-3 flex items-center justify-between">
                            <span className="text-xs font-semibold tracking-[0.2em] text-[#0d2031]/60 uppercase">
                              Festival {item.number}
                            </span>
                          </div>

                          <h4 className="font-serif text-2xl leading-tight text-[#0d2031]">
                            {item.title}
                          </h4>

                          <p className="mt-3 text-sm font-medium text-[#0d2031]">
                            {item.location}
                          </p>

                          <p className="mt-4 text-sm leading-6 text-[#0d2031]/75">
                            {item.description}
                          </p>

                          <div className="mt-4 space-y-2 text-sm text-[#0d2031]/80">
                            <p>
                              <span className="font-semibold">Best for:</span>{" "}
                              {item.bestFor}
                            </p>
                            <p>
                              <span className="font-semibold">When:</span>{" "}
                              {item.when}
                            </p>
                          </div>

                          {/* <button
                            type="button"
                            className="mt-6 inline-flex w-fit items-center rounded-md bg-[#0d2031] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#17314a]"
                          >
                            {item.cta}
                          </button> */}
                        </div>
                      </article>
                    );
                  })}
                </div>
              ) : section.id === "maps-guidelines" && section.items ? (
                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  {section.items.map((guide) => {
                    const item = guide as AgentResourceMapGuide;

                    const introLines = (item.intro ?? "").split("\n");

                    return (
                      <article
                        key={item.id}
                        className="overflow-hidden rounded-lg border border-[#0d2031]/10 bg-[#f8f5f1]"
                      >
                        <div className="overflow-hidden">
                          <Image
                            src={item.image ?? "/images/experiences/photo.jpg"}
                            alt={item.title}
                            width={800}
                            height={500}
                            className="h-44 w-full object-cover md:h-52"
                          />
                        </div>

                        <div className="p-5">
                          <h4 className="font-serif text-3xl leading-tight text-[#0d2031]">
                            {item.title}
                          </h4>

                          <div className="mt-4 space-y-3 text-sm leading-6 text-[#0d2031]/75">
                            {introLines.map((line, index) => (
                              <p key={`${item.id}-intro-${index}`}>{line}</p>
                            ))}
                          </div>

                          <p className="mt-5 text-xs font-semibold tracking-[0.2em] text-[#0d2031]/60 uppercase">
                            {item.guideLabel}
                          </p>

                          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-[#0d2031]/75">
                            {item.items?.map((entry) => (
                              <li key={`${item.id}-${entry}`}>{entry}</li>
                            ))}
                          </ul>
                        </div>
                      </article>
                    );
                  })}
                </div>
              ) : (
                <p className="mt-4 text-sm text-[#0d2031]/70">
                  {section.description}
                </p>
              )}
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgentResources;
