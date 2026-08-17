import Link from "next/link";
import { Logo } from "./logo";

const COLS = [
  {
    title: "Product",
    links: [
      { href: "/", label: "Overview" },
      { href: "/pricing", label: "Pricing" },
      { href: "/docs", label: "Docs" },
      { href: "/use-cases", label: "Use cases" },
      { href: "/faq", label: "FAQ" },
    ],
  },
  {
    title: "Company",
    links: [
      {
        href: "mailto:hello@privilegedinfra.com?subject=Privileged%20—%20Early%20Access",
        label: "Early access",
      },
      {
        href: "mailto:hello@privilegedinfra.com?subject=Privileged%20—%20Partnership",
        label: "Partner with us",
      },
      {
        href: "mailto:hello@privilegedinfra.com?subject=Privileged%20—%20Contact",
        label: "Contact",
      },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/docs", label: "DPA overview" },
      { href: "/faq", label: "Security FAQ" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-ink py-16 text-white">
      <div className="wrap">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2">
            <Logo className="text-[17px] text-white" />
            <p className="mt-4 max-w-[30ch] text-[13px] leading-relaxed text-white/60">
              The ephemeral inference layer for legal AI. Nothing persists.
            </p>
            <p className="mt-6 font-mono text-[11px] tracking-[0.08em] text-white/40">
              privilegedinfra.com
            </p>
          </div>
          {COLS.map((col) => (
            <div key={col.title}>
              <div className="mb-4 font-mono text-[11px] tracking-[0.14em] uppercase text-white/40">
                {col.title}
              </div>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-[13px] text-white/70 transition-colors hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-[12px] text-white/50">
          <span>© 2026 Privileged Infra. All rights reserved.</span>
          <span>
            Ephemeral inference · Static-IP egress · Zero-data retention
          </span>
        </div>
      </div>
    </footer>
  );
}
