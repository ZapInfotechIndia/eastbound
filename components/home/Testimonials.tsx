"use client";

import { useEffect, useState } from "react";
import { testimonials } from "@/data/testimonials";
import { Reveal } from "../Reveal";

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setI((current) => (current + 1) % testimonials.length);
    }, 6000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="bg-blue-dark py-24 md:py-36">
      <div className="container">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="eyebrow text-blue-light mb-16">Success stories</p>
          <blockquote className="min-h-[240px] md:min-h-[200px]">
            <p
              key={`${t.author}-${t.role}`}
              className="reveal is-visible font-serif text-2xl leading-[1.25] text-white italic"
            >
              &ldquo;{t.quote}&rdquo;
            </p>
            <footer className="mt-10">
              s{" "}
              <p className="text-blue-light text-sm tracking-[0.2em] uppercase">
                {t.author}
              </p>
              <p className="text-blue-light mt-1 text-xs tracking-[0.25em] uppercase">
                {t.role}
              </p>
            </footer>
          </blockquote>

          <div className="mt-12 flex items-center justify-center gap-3">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setI(idx)}
                aria-label={`Testimonial ${idx + 1}`}
                aria-pressed={idx === i}
                className={`h-px transition-all duration-500 ${
                  idx === i ? "bg-accent w-14" : "w-6 bg-white/40"
                }`}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
