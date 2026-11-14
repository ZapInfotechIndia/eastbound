"use client";

import { useState } from "react";
import type { EventBoardSection } from "@/types/eventsBoard";
// Import path ko apne actual types file ke path ke according adjust karein.

interface VenueGalleryProps {
  section: EventBoardSection;
}

export default function VenueGallery({
  section,
}: VenueGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className="w-full">
      {/* Intro */}
      <p className="max-w-3xl text-[15px] leading-7 text-slate-500">
        {section.intro}
      </p>

      {/* Venue Categories */}
      <div className="mt-8 border-t border-slate-200">
        {section.details?.map((detail, index) => {
          const isOpen = activeIndex === index;

          return (
            <div key={detail.heading} className="border-b border-slate-200">
              {/* Accordion Header */}
              <button
                type="button"
                onClick={() => setActiveIndex(isOpen ? -1 : index)}
                aria-expanded={isOpen}
                className="group flex w-full items-center justify-between gap-4 py-5 text-left"
              >
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-[11px] tracking-[2px] text-[#a18a65]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="text-[16px] font-medium text-[#15263b] transition-colors group-hover:text-[#a18a65]">
                      {detail.heading}
                    </h3>

                    <span className="text-[11px] text-slate-400">
                      ({detail.images?.length ?? 0} Venues)
                    </span>
                  </div>

                  {detail.description && (
                    <p className="mt-1.5 max-w-3xl text-[13px] leading-6 text-slate-500">
                      {detail.description}
                    </p>
                  )}
                </div>

                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-all duration-300 ${
                    isOpen
                      ? "rotate-180 bg-[#15263b] text-white"
                      : ""
                  }`}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </span>
              </button>

              {/* Gallery */}
              <div
                className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="pb-6 pt-1">
                    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
                    {detail.images?.map((image) => (
                        <div key={image.src}>
                            <img
                            src={image.src}
                            alt={detail.heading}
                            loading="lazy"
                            className="h-full w-full object-cover"
                            />
                        </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Closing */}
      <div className="mt-8 border-l-2 border-[#a18a65] bg-[#f7f6f3] px-5 py-5">
        <p className="text-sm leading-7 text-slate-600">
          {section.closingLine}
        </p>
      </div>
    </div>
  );
}