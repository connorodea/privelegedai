import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Button, Kicker } from "@/components/ui";

export const metadata: Metadata = {
  title: "Pricing — Privileged",
  description:
    "Simple pricing for ephemeral legal AI inference. Free during early access, per-inference for firms, annual for enterprise — one DPA, no minimum spend.",
  alternates: { canonical: "/pricing/" },
  openGraph: {
    title: "Pricing — Privileged",
    description:
      "Simple pricing for ephemeral legal AI inference — one DPA, no minimum spend.",
    type: "website",
    url: "https://privilegedinfra.com/pricing/",
  },
};

type Tier = {
  name: string;
  price: string;
  priceNote: string;
  blurb: string;
  features: string[];
  extra?: string[];
  cta: string;
  subject: string;
  variant: "primary" | "ghost";
};

const TIERS: Tier[] = [
  {
    name: "Developer",
    price: "Free",
    priceNote: "during early access",
    blurb:
      "The full ephemeral runtime for pilots and evaluation builds — same zero-retention guarantees from day one.",
    features: [
      "Ephemeral inference containers",
      "Zero-data retention",
      "Static-IP egress",
      "LoRA hot-swap",
      "White-label data feeds",
    ],
    cta: "Start building",
    subject: "Privileged — Developer tier",
    variant: "ghost",
  },
  {
    name: "Firm",
    price: "Custom",
    priceNote: "per-inference pricing",
    blurb:
      "Production inference over privileged matter data. No minimum spend, no vendor-by-vendor audits.",
    features: [
      "Everything in Developer",
      "No training on your data",
      "Hardware-level isolation",
      "One pre-audited DPA",
    ],
    cta: "Talk to us",
    subject: "Privileged — Firm tier",
    variant: "primary",
  },
  {
    name: "Enterprise",
    price: "Custom",
    priceNote: "annual",
    blurb:
      "Firm-wide deployment with dedicated infrastructure, audit support, and custom egress configuration.",
    features: ["Everything in Firm"],
    extra: [
      "Dedicated gateway",
      "SOC2 / custom audit support",
      "Priority support",
      "Custom egress IPs",
    ],
    cta: "Talk to sales",
    subject: "Privileged — Enterprise tier",
    variant: "ghost",
  },
];

function Check() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="mt-[2px] h-4 w-4 shrink-0 text-accent"
    >
      <path
        d="M2.75 8.5l3.25 3.25L13.25 4.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const INCLUDED: {
  title: string;
  body: string;
  icon: ReactNode;
}[] = [
  {
    title: "Zero-data retention",
    body: "Prompts, context, and generated tokens live only in RAM. Nothing touches disk, and session memory is wiped at termination.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="h-5 w-5"
      >
        <path d="M20 12a8 8 0 1 1-2.34-5.66" />
        <path d="M20 3v5h-5" />
      </svg>
    ),
  },
  {
    title: "No training on your data",
    body: "Your data is never used to train, fine-tune, or evaluate any model — contractual and architectural.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="h-5 w-5"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="m5.6 5.6 12.8 12.8" />
      </svg>
    ),
  },
  {
    title: "Static-IP egress",
    body: "All traffic exits through a fixed, high-availability gateway. Whitelist it once, forever.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="h-5 w-5"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: "TLS 1.3 + AES-256",
    body: "Encryption in transit and at rest, with customer-managed keys for any stored model data.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="h-5 w-5"
      >
        <rect x="4.5" y="10.5" width="15" height="10" rx="2" />
        <path d="M8 10.5V7a4 4 0 0 1 8 0v3.5" />
      </svg>
    ),
  },
  {
    title: "One DPA",
    body: "A single pre-audited agreement, signed in days — not five vendor negotiations in months.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="h-5 w-5"
      >
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path d="m9 13 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Hardware-level isolation",
    body: "Each session runs in isolated compute. Memory is discarded and rendered unrecoverable on termination.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="h-5 w-5"
      >
        <rect x="6" y="6" width="12" height="12" rx="2" />
        <rect x="9.5" y="9.5" width="5" height="5" />
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
      </svg>
    ),
  },
];

export default function Pricing() {
  return (
    <>
      <Nav />
      <main id="main">
        <section className="wrap pb-16 pt-[110px]">
          <Kicker>Pricing</Kicker>
          <h1 className="max-w-[18ch] font-sans text-[clamp(34px,5vw,52px)] leading-[1.08] font-semibold tracking-[-0.03em]">
            Simple by design.
          </h1>
          <p className="mt-5 max-w-[54ch] text-[15px] leading-[1.7] text-muted">
            Early access is limited to a small set of firms. No minimum spend.
            One DPA covers everything — every model, every feed, every tier.
          </p>
        </section>

        <section className="wrap pb-[100px]">
          <div className="grid grid-cols-1 gap-3 min-[900px]:grid-cols-3">
            {TIERS.map((t) => (
              <div
                key={t.name}
                className={`flex flex-col rounded-lg border bg-surface p-6 transition-colors duration-150 hover:bg-surface2 ${
                  t.name === "Firm"
                    ? "border-accent/40 hover:border-accent/60"
                    : "border-line hover:border-line2"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-mono text-[11px] tracking-[0.14em] text-faint uppercase">
                    {t.name}
                  </h3>
                  {t.name === "Firm" ? (
                    <span className="font-mono text-[10px] tracking-[0.14em] text-accent uppercase">
                      Built for firms
                    </span>
                  ) : null}
                </div>
                <div className="mt-3 flex items-baseline">
                  <span className="font-mono text-[22px] leading-none text-ink">
                    {t.price}
                  </span>
                  <span className="ml-2.5 text-[12px] text-muted">
                    {t.priceNote}
                  </span>
                </div>
                <p className="mt-2 text-[13px] leading-[1.6] text-muted">
                  {t.blurb}
                </p>
                <ul className="mt-5 flex-1 space-y-2.5">
                  {[...t.features, ...(t.extra ?? [])].map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-[13px] text-muted"
                    >
                      <Check />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  href={`mailto:hello@privilegedinfra.com?subject=${encodeURIComponent(
                    t.subject,
                  )}`}
                  variant={t.variant}
                  className="mt-6 w-full justify-center"
                >
                  {t.cta}
                </Button>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-line py-20 md:py-24">
          <div className="wrap">
            <Kicker>Included everywhere</Kicker>
            <h2 className="max-w-[26ch] text-[clamp(24px,3.4vw,36px)] leading-[1.15] font-semibold tracking-[-0.03em]">
              What's included in every tier
            </h2>
            <p className="mt-4 max-w-[60ch] text-[15px] leading-[1.7] text-muted">
              The guarantees that matter to procurement and IT hold across the
              board — no tier gates on security.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-3 min-[560px]:grid-cols-2 min-[900px]:grid-cols-3">
              {INCLUDED.map((c) => (
                <div
                  key={c.title}
                  className="rounded-lg border border-line bg-surface p-5 transition-colors duration-150 hover:border-line2 hover:bg-surface2"
                >
                  <div className="mb-3 text-accent">{c.icon}</div>
                  <h3 className="text-[14.5px] font-medium text-ink">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-[1.6] text-muted">
                    {c.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-line py-16">
          <div className="wrap text-center">
            <Kicker>Questions?</Kicker>
            <p className="text-[13.5px] text-muted">
              hello@privilegedinfra.com
            </p>
            <Button
              href="mailto:hello@privilegedinfra.com?subject=Privileged%20—%20Contact"
              variant="ghost"
              className="mt-6"
            >
              Email us
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
