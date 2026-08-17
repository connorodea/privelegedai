import Link from "next/link";
import { Logo } from "./logo";
import { StatusDot } from "./ui";

const COLS = [
  {
    title: "Product",
    links: [
      { href: "/#product", label: "Runtime" },
      { href: "/#architecture", label: "Network" },
      { href: "/#product", label: "Models" },
      { href: "/#product", label: "Data" },
    ],
  },
  {
    title: "Security",
    links: [
      { href: "/#architecture", label: "Architecture" },
      { href: "/#security", label: "Trust" },
      { href: "/docs", label: "DPA" },
      { href: "/docs", label: "Documentation" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/#use-cases", label: "Use cases" },
      { href: "/pricing", label: "Pricing" },
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
    <footer className="border-t border-line bg-bg2 py-16">
      <div className="wrap">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          <div className="col-span-2">
            <Logo className="text-[17px] text-ink" />
            <p className="mt-4 max-w-[32ch] text-[13.5px] leading-[1.6] text-muted">
              Private AI infrastructure for legal and other highly sensitive
              workloads. Ephemeral by default. Privileged by design.
            </p>
            <p className="mt-6 font-mono text-[11px] tracking-[0.08em] text-faint">
              privilegedinfra.com
            </p>
          </div>
          {COLS.map((col) => (
            <div key={col.title}>
              <div className="mb-4 font-mono text-[11px] tracking-[0.16em] text-faint uppercase">
                {col.title}
              </div>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-[13.5px] text-muted transition-colors hover:text-ink"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6 text-[12px] text-faint">
          <span>© 2026 Privileged Infra</span>
          <span className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em]">
            <StatusDot tone="signal" />
            EPHEMERAL INFERENCE · STATIC EGRESS · PRIVATE MODELS
          </span>
        </div>
      </div>
    </footer>
  );
}
