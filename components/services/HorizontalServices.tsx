"use client";

import { useEffect, useRef, useState } from "react";
import type { FeatureBlock } from "../../data/experiencePages";

export function HorizontalServices({ items }: { items: FeatureBlock[] }) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      setDistance(Math.max(0, track.scrollWidth - window.innerWidth + 48));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [items]);

  useEffect(() => {
    const onScroll = () => {
      const el = wrapRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const p = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0;
      setProgress(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="all-services" className="bg-secondary/60">
      {/* Mobile: simple stacked scroll */}
      <div className="container-x space-y-6 py-20 lg:hidden">
        {items.map((s) => (
          <Card key={s.id} item={s} />
        ))}
      </div>

      {/* Desktop: pinned horizontal scroll */}
      <div
        ref={wrapRef}
        className="relative hidden lg:block"
        style={{ height: `${100 + items.length * 60}vh` }}
      >
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
          <div className="container mb-10">
            <p className="eyebrow text-blue-light mb-3">Our services</p>
            <h2 className="text-blue-dark font-serif text-4xl leading-[1.05] xl:text-5xl">
              Scroll to explore.{" "}
              {/* <span className="text-accent">every service.</span> */}
            </h2>
          </div>
          <div
            ref={trackRef}
            className="flex gap-6 pl-6 will-change-transform md:pl-12 xl:pl-20"
            style={{ transform: `translate3d(-${progress * distance}px,0,0)` }}
          >
            {items.map((s) => (
              <Card key={s.id} item={s} className="w-[26rem] shrink-0" />
            ))}
          </div>
          <div className="container-x mt-10">
            <div className="bg-border/70 relative h-px w-full">
              <span
                className="bg-accent absolute inset-y-0 left-0"
                style={{
                  width: `${Math.max(6, progress * 100)}%`,
                  height: "1px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({
  item,
  className = "",
}: {
  item: FeatureBlock;
  className?: string;
}) {
  return (
    <article
      className={`card-frame group relative h-[26rem] overflow-hidden ${className}`}
    >
      <img
        src={item.image}
        alt={item.name}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
      />
      <div className="from-blue-dark/95 via-blue-dark/45 to-blue-dark/5 absolute inset-0 bg-gradient-to-t" />
      <span className="bg-background/85 text-primary absolute top-5 left-5 rounded-full px-4 py-1.5 text-[0.62rem] tracking-[0.24em] uppercase">
        {item.index} — Service
      </span>
      <div className="absolute inset-x-0 bottom-0 p-7">
        <h3 className="font-serif text-3xl leading-tight text-white">
          {item.name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed font-light text-white/75">
          {item.tagline}
        </p>
      </div>
    </article>
  );
}
