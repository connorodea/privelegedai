"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Progressive-enhancement scroll reveal. Content is fully visible without JS
 * and for reduced-motion users; when supported it fades/rises into view once.
 */
export function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  as?: "div" | "section" | "li";
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setShown(true);
      return;
    }
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -5% 0px" },
    );
    io.observe(el);
    // Safety net: never leave content permanently hidden.
    const t = setTimeout(() => setShown(true), 1600);
    return () => {
      io.disconnect();
      clearTimeout(t);
    };
  }, []);

  const style = shown
    ? { opacity: 1, transform: "none", transition: `opacity .7s cubic-bezier(.22,1,.36,1) ${delay}ms, transform .7s cubic-bezier(.22,1,.36,1) ${delay}ms` }
    : { opacity: 0, transform: "translateY(16px)" };

  const Comp = Tag as "div";
  return (
    <Comp ref={ref} className={className} style={style}>
      {children}
    </Comp>
  );
}
