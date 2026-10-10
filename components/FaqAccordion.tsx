"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs, type FaqItem } from "@/data/faqs";
import { Reveal } from "@/components/Reveal";

type FaqAccordionProps = {
  compact?: boolean;
  alignRight?: boolean;
  items?: FaqItem[];
};

export function FaqAccordion({
  compact = false,
  alignRight = false,
  items,
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqItems = items ?? faqs;

  return (
    <section className={compact ? "py-4 md:py-6" : "bg-cream py-24 md:py-32"}>
      <div className="container">
        {!compact && (
          <Reveal className="mx-auto mb-12 max-w-3xl text-center" delay={80}>
            <p className="eyebrow mb-6">Frequently asked questions</p>
            <h2 className="font-serif text-4xl leading-[1.05] md:text-5xl">
              Everything you need to know about travelling with{" "}
              <span className="text-primary">Eastbound</span>
            </h2>
          </Reveal>
        )}

        <div
          className={`mx-auto ${compact ? "max-w-2xl" : "max-w-4xl"} ${
            alignRight ? "ml-auto text-left" : ""
          }`}
        >
          {(compact ? faqItems.slice(0, 2) : faqItems).map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className="border-border/70 border-b last:border-b-0"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-5 md:py-6"
                >
                  <span
                    className={`text-blue-dark w-full font-serif leading-tight font-medium ${
                      compact ? "text-lg md:text-2xl" : "text-xl md:text-3xl"
                    } text-left`}
                  >
                    {item.question}
                  </span>
                  <span className="text-primary flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-current md:h-9 md:w-9">
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p
                      className={`pb-5 text-left leading-relaxed text-neutral-700 ${
                        compact
                          ? "text-sm md:text-base"
                          : "text-base md:text-lg"
                      }`}
                    >
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
