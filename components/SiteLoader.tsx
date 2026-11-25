"use client";

import { useEffect, useState } from "react";

export default function SiteLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [count, setCount] = useState(0);
  const [pageLoaded, setPageLoaded] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    const handleLoad = () => setPageLoaded(true);

    if (document.readyState === "complete") {
      handleLoad();
      return;
    }

    window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  useEffect(() => {
    if (!pageLoaded || isLeaving) {
      return;
    }

    if (count >= 20) {
      const timeoutId = window.setTimeout(() => {
        setIsLeaving(true);
      }, 250);

      return () => window.clearTimeout(timeoutId);
    }
  }, [count, isLeaving, pageLoaded]);

  useEffect(() => {
    if (isLeaving) {
      return;
    }

    let frameId = 0;
    const startTime = performance.now();

    const animate = (timestamp: number) => {
      const elapsed = timestamp - startTime;
      const nextValue = Math.min(20, Math.round((elapsed / 1800) * 20));

      setCount((currentValue) => Math.max(currentValue, nextValue));

      if (nextValue < 20) {
        frameId = window.requestAnimationFrame(animate);
      }
    };

    frameId = window.requestAnimationFrame(animate);

    return () => window.cancelAnimationFrame(frameId);
  }, [isLeaving]);

  return (
    <>
      <div
        className={`site-loader ${isLeaving ? "site-loader--hidden" : ""}`}
        aria-live="polite"
        aria-busy={!isLeaving}
      >
        <div className="site-loader__content">
          {/* <span className="site-loader__eyebrow">Eastbound</span> */}
          <div className="site-loader__number">{count}</div>
          <p className="site-loader__text">years of experience</p>
        </div>
      </div>

      {children}
    </>
  );
}
