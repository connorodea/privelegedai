import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Button, Container, Kicker, MonoLabel } from "@/components/ui";

export const metadata: Metadata = {
  title: "Pricing — Privileged",
  description:
    "Pricing for private, ephemeral legal AI inference. Free during early access, usage-based for firms, annual for enterprise — one DPA, no minimum spend.",
  alternates: { canonical: "/pricing/" },
  openGraph: {
    title: "Pricing — Privileged",
    description:
      "Pricing for private, ephemeral legal AI inference — one DPA, no minimum spend.",
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
  cta: string;
  subject: string;
  variant: "primary" | "ghost";
  featured?: boolean;
};

const TIERS: Tier[] = [
  {
    name: "Developer",
    price: "Free",
    priceNote: "during early access",
    blurb:
      "The full ephemeral runtime for pilots and evaluation builds — same zero-retention defaults from day one.",
    features: [
      "Ephemeral execution",
      "Zero retention by default",
      "Static egress",
      "OpenAI-compatible API",
      "Private & open models",
    ],
    cta: "Start building",
    subject: "Privileged — Developer tier",
    variant: "ghost",
  },
  {
    name: "Firm",
    price: "Usage-based",
    priceNote: "per inference",
    blurb:
      "Production inference over privileged matter data. No minimum spend, no vendor-by-vendor audits.",
    features: [
      "Everything in Developer",
      "No training on your data",
      "Graduated isolation classes",
      "One DPA",
      "Audit log & usage export",
    ],
    cta: "Talk to us",
    subject: "Privileged — Firm tier",
    variant: "primary",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    priceNote: "annual",
    blurb:
      "Firm-wide deployment with dedicated infrastructure, security-review support, and custom egress.",
    features: [
      "Everything in Firm",
      "Dedicated gateway",
      "Security-review support",
      "Customer-managed keys",
      "Custom egress IPs",
    ],
    cta: "Talk to sales",
    subject: "Privileged — Enterprise tier",
    variant: "ghost",
  },
];

const INCLUDED = [
  ["Zero retention by default", "Prompts, responses, and documents are not written to durable storage in the paths Privileged controls."],
  ["No training on your data", "Customer data is never used to train, fine-tune, or evaluate any model — by contract and construction."],
  ["Static, controlled egress", "Traffic exits through a fixed infrastructure identity your firewall can whitelist. Deny by default."],
  ["Encryption", "TLS 1.3 in transit; encryption at rest with customer-managed keys available for stored data."],
  ["One DPA", "A single agreement, signed in days — not five vendor negotiations across months."],
  ["Tenant isolation", "Org/project scoping, row-level security, and single-tenant runtimes with graduated isolation classes."],
];

function Check() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="mt-[3px] h-3.5 w-3.5 shrink-0 text-accent">
      <path d="M2.75 8.5l3.25 3.25L13.25 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Pricing() {
  return (
    <>
      <Nav />
      <main id="main">
        <Container className="pt-24 pb-14">
          <Kicker>Pricing</Kicker>
          <h1 className="max-w-[16ch] text-[clamp(34px,5vw,58px)] leading-[1.04] font-semibold tracking-[-0.03em] text-ink">
            Simple by design.
          </h1>
          <p className="mt-5 max-w-[54ch] text-[16px] leading-[1.6] text-muted">
            Early access is limited to a small set of firms. No minimum spend.
            One DPA covers everything — every model, every feed, every tier.
          </p>
        </Container>

        <Container className="pb-24">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-5">
            {TIERS.map((t) => (
              <div
                key={t.name}
                className={`flex flex-col rounded-[var(--radius-lg)] border p-7 ${
                  t.featured
                    ? "border-accent/45 bg-accent/[0.05] rim-glow"
                    : "border-line bg-surface"
                }`}
              >
                <div className="flex items-center justify-between">
                  <MonoLabel>{t.name}</MonoLabel>
                  {t.featured ? (
                    <span className="font-mono text-[10px] tracking-[0.14em] text-accent uppercase">
                      Built for firms
                    </span>
                  ) : null}
                </div>
                <div className="mt-4 flex items-baseline gap-2.5">
                  <span className="text-[24px] leading-none font-semibold tracking-[-0.02em] text-ink">
                    {t.price}
                  </span>
                  <span className="text-[12px] text-faint">{t.priceNote}</span>
                </div>
                <p className="mt-3 text-[13.5px] leading-[1.6] text-muted">
                  {t.blurb}
                </p>
                <ul className="mt-6 flex-1 space-y-2.5">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[13.5px] text-muted">
                      <Check />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  href={`mailto:hello@privilegedinfra.com?subject=${encodeURIComponent(t.subject)}`}
                  variant={t.variant}
                  className="mt-7 w-full"
                >
                  {t.cta}
                </Button>
              </div>
            ))}
          </div>
        </Container>

        <section className="section">
          <Container>
            <Kicker>Included everywhere</Kicker>
            <h2 className="max-w-[24ch] text-[clamp(26px,3.4vw,40px)] leading-[1.08] font-semibold tracking-[-0.03em] text-ink">
              Security is not a pricing tier.
            </h2>
            <p className="mt-4 max-w-[58ch] text-[15px] leading-[1.6] text-muted">
              The controls procurement and IT care about hold across every tier.
              No plan gates the security posture.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-[var(--radius-lg)] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
              {INCLUDED.map(([title, body]) => (
                <div key={title} className="bg-surface p-6">
                  <h3 className="text-[14.5px] font-medium text-ink">{title}</h3>
                  <p className="mt-2 text-[13px] leading-[1.6] text-muted">{body}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 font-mono text-[11px] text-faint">
              No certification is claimed. Privileged builds toward SOC 2 / ISO 27001 readiness; ask for the current security posture.
            </p>
          </Container>
        </section>

        <section className="section text-center">
          <Container>
            <Kicker>Questions?</Kicker>
            <p className="text-[14px] text-muted">hello@privilegedinfra.com</p>
            <Button
              href="mailto:hello@privilegedinfra.com?subject=Privileged%20—%20Contact"
              variant="ghost"
              className="mt-6"
            >
              Email us
            </Button>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
