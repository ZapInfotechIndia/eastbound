"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "figure" | "article" | "header" | "footer";
  delay?: number;
  variant?: "fade" | "image";
};

export function Reveal({
  children,
  className = "",
  as = "div",
  delay = 0,
  variant = "fade",
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => setVisible(true), delay);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  const Tag = as as "div";
  const base = variant === "image" ? "image-reveal" : "reveal";
  return (
    <Tag
      ref={ref as never}
      className={`${base} ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}
