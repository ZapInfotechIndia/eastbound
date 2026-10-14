"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { FeatureBlock } from "../../data/experiencePages";

export function HorizontalServices({ items }: { items: FeatureBlock[] }) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const [progress, setProgress] = useState(0);
  const [distance, setDistance] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const measure = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const viewport = window.innerWidth;
    const height = window.innerHeight;
    const maxDistance = Math.max(0, track.scrollWidth - viewport);

    setDistance(maxDistance);
    setViewportHeight(height);
  }, []);

  useEffect(() => {
    measure();

    const observer = new ResizeObserver(measure);
    if (trackRef.current) observer.observe(trackRef.current);

    window.addEventListener("resize", measure);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [measure, items]);

  useEffect(() => {
    const updateProgress = () => {
      const section = wrapRef.current;
      if (!section) return;

      const maxScroll = section.offsetHeight - window.innerHeight;
      const sectionTop = section.getBoundingClientRect().top;

      const nextProgress =
        maxScroll > 0
          ? Math.min(1, Math.max(0, -sectionTop / maxScroll))
          : 0;

      setProgress(nextProgress);

      const track = trackRef.current;
      if (track && items.length > 0) {
        const cards = track.querySelectorAll("article");
        const firstCard = cards[0] as HTMLElement | undefined;

        if (firstCard) {
          const cardStep =
            firstCard.getBoundingClientRect().width + 24;

          const offset = nextProgress * distance;
          const index =
            cardStep > 0 ? Math.round(offset / cardStep) : 0;

          setActiveIndex(Math.min(items.length - 1, index));
        }
      }
    };

    updateProgress();

    window.addEventListener("scroll", updateProgress, {
      passive: true,
    });

    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, [distance, items.length, viewportHeight]);

  const navigate = useCallback(
    (direction: "prev" | "next") => {
      const section = wrapRef.current;
      const track = trackRef.current;

      if (!section || !track || distance <= 0) return;

      const cards = track.querySelectorAll("article");
      const firstCard = cards[0] as HTMLElement | undefined;

      if (!firstCard) return;

      const cardStep = firstCard.getBoundingClientRect().width + 24;
      const sectionTop = section.getBoundingClientRect().top;
      const maxScroll = section.offsetHeight - window.innerHeight;

      const currentOffset = Math.min(
        distance,
        Math.max(0, (-sectionTop / Math.max(1, maxScroll)) * distance),
      );

      const nextOffset =
        direction === "next"
          ? Math.min(distance, currentOffset + cardStep)
          : Math.max(0, currentOffset - cardStep);

      const targetY =
        window.scrollY +
        sectionTop +
        (nextOffset / distance) * maxScroll;

      window.scrollTo({
        top: Math.max(0, targetY),
        behavior: "smooth",
      });
    },
    [distance],
  );

  return (
    <section id="all-services" className="bg-secondary/60">
      {/* Mobile: normal vertical scrolling */}
      <div className="container-x space-y-6 py-20 lg:hidden">
        {items.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>

      {/* Desktop: scroll-controlled horizontal cards */}
      <div
        ref={wrapRef}
        className="relative hidden lg:block"
        style={{
          height: `${viewportHeight + distance}px`,
        }}
      >
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
          <div className="container mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow mb-3 text-blue-light">
                Our services
              </p>

              <h2 className="font-serif text-4xl leading-[1.05] text-blue-dark xl:text-5xl">
                Scroll to explore.
              </h2>
            </div>

            <div className="flex shrink-0 gap-3">
              <button
                type="button"
                onClick={() => navigate("prev")}
                disabled={progress <= 0.001}
                aria-label="Previous service"
                className="flex h-12 w-12 items-center justify-center border border-blue-dark/25 text-blue-dark transition hover:bg-blue-dark hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                type="button"
                onClick={() => navigate("next")}
                disabled={progress >= 0.999}
                aria-label="Next service"
                className="flex h-12 w-12 items-center justify-center border border-blue-dark/25 text-blue-dark transition hover:bg-blue-dark hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <div
            ref={trackRef}
            className="flex w-max gap-6 pl-6 pr-6 will-change-transform md:pl-12 xl:pl-20"
            style={{
              transform: `translate3d(-${progress * distance}px, 0, 0)`,
            }}
          >
            {items.map((item) => (
              <Card
                key={item.id}
                item={item}
                className="w-[26rem] shrink-0"
              />
            ))}
          </div>

          <div className="container-x mt-8">
            <div className="relative h-px w-full bg-border/70">
              <span
                className="absolute inset-y-0 left-0 bg-accent"
                style={{
                  width: `${Math.max(0, progress * 100)}%`,
                }}
              />
            </div>

            <p className="mt-3 text-right text-xs tracking-widest text-blue-dark/60">
              {String(
                Math.min(items.length, activeIndex + 1),
              ).padStart(2, "0")}
              {" / "}
              {String(items.length).padStart(2, "0")}
            </p>
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

      <div className="absolute inset-0 bg-gradient-to-t from-blue-dark/95 via-blue-dark/45 to-blue-dark/5" />

      <span className="absolute left-5 top-5 rounded-full bg-background/85 px-4 py-1.5 text-[0.62rem] uppercase tracking-[0.24em] text-primary">
        {item.index} – Service
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
