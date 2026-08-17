"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "./logo";
import { Button } from "./ui";

const LINKS = [
  { href: "/#product", label: "Product" },
  { href: "/#architecture", label: "Architecture" },
  { href: "/#security", label: "Security" },
  { href: "/#use-cases", label: "Use cases" },
  { href: "/docs", label: "Docs" },
];

export function Nav() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      if (!open) setHidden(y > last && y > 160);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  return (
    <>
      <div className="bg-bg2 py-2 text-center font-mono text-[11px] tracking-[0.04em] text-muted">
        On-demand ephemeral inference is in early access{" "}
        <a
          href="mailto:hello@privilegedinfra.com?subject=Privileged%20—%20Request%20access"
          className="text-accent underline decoration-accent/40 underline-offset-2 transition-colors hover:text-ink"
        >
          Request access →
        </a>
      </div>

      <nav
        aria-label="Main"
        className={`sticky top-0 z-50 border-b transition-transform duration-300 ${
          hidden ? "-translate-y-full" : "translate-y-0"
        } ${
          scrolled
            ? "border-line bg-bg/80 backdrop-blur-xl"
            : "border-transparent bg-bg/40 backdrop-blur-md"
        }`}
      >
        <div className="wrap flex h-16 items-center justify-between">
          <Link href="/" aria-label="Privileged home" className="flex items-center">
            <Logo className="text-[18px] tracking-[-0.01em] text-ink" />
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {LINKS.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-[13.5px] text-muted transition-colors hover:text-ink"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button
              href="mailto:hello@privilegedinfra.com?subject=Privileged%20—%20Request%20access"
              className="hidden px-4 py-2 text-[12.5px] sm:inline-flex"
            >
              Request access
            </Button>
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="grid h-9 w-9 place-items-center rounded-md border border-line2 text-ink md:hidden"
            >
              <span className="sr-only">Menu</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                {open ? <path d="M3 3l10 10M13 3L3 13" /> : <path d="M2 4h12M2 8h12M2 12h12" />}
              </svg>
            </button>
          </div>
        </div>

        {open ? (
          <div className="border-t border-line bg-bg px-5 py-4 md:hidden">
            <div className="grid gap-1">
              {LINKS.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-2.5 text-[15px] text-muted hover:bg-white/[0.03] hover:text-ink"
                >
                  {l.label}
                </Link>
              ))}
              <Button
                href="mailto:hello@privilegedinfra.com?subject=Privileged%20—%20Request%20access"
                className="mt-2 w-full"
                arrow
              >
                Request access
              </Button>
            </div>
          </div>
        ) : null}
      </nav>
    </>
  );
}
