import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Button, Card, Kicker, SectionHeading } from "@/components/ui";

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
      className="mt-[3px] h-[15px] w-[15px] shrink-0 text-accent"
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
        <section className="wrap pb-[64px] pt-[110px]">
          <Kicker>Pricing</Kicker>
          <h1 className="max-w-[18ch] font-serif text-[clamp(34px,5vw,54px)] leading-[1.08] font-normal tracking-[-0.015em]">
            Simple by design.
          </h1>
          <p className="mt-5 max-w-[54ch] text-[16.5px] leading-[1.7] text-muted">
            Early access is limited to a small set of firms. No minimum spend.
            One DPA covers everything — every model, every feed, every tier.
          </p>
        </section>

        <section className="wrap pb-[100px]">
          <div className="grid grid-cols-1 gap-4 min-[900px]:grid-cols-3">
            {TIERS.map((t) => (
              <div key={t.name} className="card flex flex-col">
                <h3 className="font-serif text-[19px] font-medium">{t.name}</h3>
                <div className="mt-3">
                  <span className="font-serif text-[26px] leading-[1.1] text-ink">
                    {t.price}
                  </span>
                  <span className="ml-2 text-sm text-muted">{t.priceNote}</span>
                </div>
                <p className="mt-3 text-sm leading-[1.65] text-muted">
                  {t.blurb}
                </p>
                <ul className="mt-6 flex-1 space-y-[10px] border-t border-line pt-6">
                  {[...t.features, ...(t.extra ?? [])].map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-sm text-muted"
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
                  className="mt-8 w-full justify-center"
                >
                  {t.cta}
                </Button>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <SectionHeading
              kicker="Included everywhere"
              title="What's included in every tier"
              lede="The guarantees that matter to procurement and IT hold across the board — no tier gates on security."
            />
            <div className="mt-12 grid grid-cols-1 gap-4 min-[560px]:grid-cols-2 min-[900px]:grid-cols-3">
              {INCLUDED.map((c) => (
                <Card key={c.title} icon={c.icon} title={c.title}>
                  {c.body}
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap text-center">
            <p className="font-serif text-[24px] text-ink">Questions?</p>
            <p className="mt-3 text-[15px] text-muted">
              <a
                href="mailto:hello@privilegedinfra.com?subject=Privileged%20—%20Contact"
                className="text-accent hover:underline"
              >
                hello@privilegedinfra.com
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
