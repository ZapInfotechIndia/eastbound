"use client";

import { useEffect, useState } from "react";

type Item = { id: string; index: string; name: string };

export function ChapterRail({ items }: { items: Item[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const els = items
      .map((i) => document.getElementById(i.id))
      .filter((e): e is HTMLElement => Boolean(e));
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          )[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: 0 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [items]);

  return (
    <nav className="sticky top-32 hidden self-start lg:block">
      <p className="eyebrow mb-6">The collection</p>
      <ul className="space-y-4">
        {items.map((i) => {
          const isActive = active === i.id;
          return (
            <li key={i.id}>
              <a
                href={`#${i.id}`}
                className="group flex items-baseline gap-4"
                aria-current={isActive ? "true" : undefined}
              >
                <span
                  className={`text-[0.68rem] tracking-[0.28em] transition-colors ${
                    isActive ? "text-accent" : "text-muted-foreground"
                  }`}
                >
                  {i.index}
                </span>
                <span className="flex-1">
                  <span
                    className={`block font-serif text-lg leading-tight transition-colors ${
                      isActive
                        ? "text-accent"
                        : "text-muted-foreground group-hover:text-primary"
                    }`}
                  >
                    {i.name}
                  </span>
                  <span
                    className={`bg-accent mt-2 block h-px origin-left transition-transform duration-500 ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
