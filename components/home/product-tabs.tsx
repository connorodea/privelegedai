"use client";

import { useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { Container, SectionHeading } from "@/components/ui";

function CardIcon({ children }: { children: ReactNode }) {
  return (
    <svg
      className="h-full w-full"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

type TabCard = { icon: ReactNode; title: string; body: string };

const TABS: { label: string; cards: TabCard[] }[] = [
  {
    label: "Ephemeral Inference",
    cards: [
      {
        icon: (
          <CardIcon>
            <path d="M4 17l6-6-6-6" />
            <path d="M12 19h8" />
          </CardIcon>
        ),
        title: "Ephemeral inference",
        body: "Containers spin up, load your model, and are destroyed the moment the token stream closes. Nothing touches disk.",
      },
      {
        icon: (
          <CardIcon>
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18" />
            <path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18" />
          </CardIcon>
        ),
        title: "Static-IP egress",
        body: "All traffic exits through a fixed high-availability gateway. Your security team whitelists us once — forever.",
      },
      {
        icon: (
          <CardIcon>
            <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z" />
            <path d="M9 12l2 2 4-4" />
          </CardIcon>
        ),
        title: "Zero-data retention",
        body: "Prompt, context, and generated tokens live only in volatile memory. No non-volatile writes. Ever.",
      },
      {
        icon: (
          <CardIcon>
            <path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3" />
          </CardIcon>
        ),
        title: "Multi-provider routing",
        body: "Route inference requests across whitelabel partner compute — data centers, inference providers, and GPU clusters — with automatic failover.",
      },
      {
        icon: (
          <CardIcon>
            <path d="M13 2L4 14h6l-1 8 9-12h-6z" />
          </CardIcon>
        ),
        title: "Partner compute",
        body: "Whitelabel data-center and inference-provider capacity at near-zero cost. We pass the margin on.",
      },
      {
        icon: (
          <CardIcon>
            <rect x="3" y="11" width="18" height="11" rx="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </CardIcon>
        ),
        title: "Enterprise DPA ready",
        body: "One pre-audited Data Processing Agreement. No negotiating with five vendors. Sign and run in days.",
      },
    ],
  },
  {
    label: "Custom Models",
    cards: [
      {
        icon: (
          <CardIcon>
            <path d="M4 6h16M4 12h16M4 18h10" />
          </CardIcon>
        ),
        title: "Custom model hosting",
        body: "Host fine-tuned legal models in isolated environments. Your weights stay yours, never shared across tenants.",
      },
      {
        icon: (
          <CardIcon>
            <circle cx="12" cy="12" r="3" />
            <path d="M12 2v4m0 12v4M2 12h4m12 0h4" />
          </CardIcon>
        ),
        title: "LoRA hot-swap",
        body: "Inject client-specific LoRA adapters in milliseconds. A single base model, infinite firm-specific customizations.",
      },
      {
        icon: (
          <CardIcon>
            <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
          </CardIcon>
        ),
        title: "Private model vaults",
        body: "Law firms upload proprietary models trained on internal precedents. Isolated, ephemeral, and never co-mingled.",
      },
    ],
  },
  {
    label: "White-Label Data",
    cards: [
      {
        icon: (
          <CardIcon>
            <circle cx="12" cy="12" r="9" />
            <path d="M12 2a15 15 0 0 1 0 20" />
          </CardIcon>
        ),
        title: "Premium legal feeds",
        body: "Bundle case law, docket registries, and regulatory feeds under one API — and one brand.",
      },
      {
        icon: (
          <CardIcon>
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="M6 8h4v4H6zm8 0h4v4h-4z" />
          </CardIcon>
        ),
        title: "Unified interface",
        body: "One SDK to query law, dockets, and regulations alongside your custom models. No tab-switching.",
      },
      {
        icon: (
          <CardIcon>
            <path d="M12 20h8M12 4h8M4 12l4 4 4-8" />
          </CardIcon>
        ),
        title: "Revenue-share model",
        body: "Data partners earn when their feeds are consumed. Your margin is the bundled inference and security layer.",
      },
    ],
  },
];

export function ProductTabs() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const delta = e.key === "ArrowRight" ? 1 : -1;
    const next = (i + delta + TABS.length) % TABS.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section id="product" className="section">
      <Container>
        <SectionHeading
          kicker="Product"
          title="One platform. Every workload."
          lede="Run custom legal models, bundle premium data feeds, and white-label partner compute — all through a single DPA, signed in days."
        />
        <div
          className="mt-12 inline-flex rounded-full border border-line bg-white p-1 shadow-[0_1px_2px_rgba(1,1,30,0.04)]"
          role="tablist"
          aria-label="Product capabilities"
        >
          {TABS.map((tab, i) => (
            <button
              key={tab.label}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              id={`product-tab-${i}`}
              role="tab"
              type="button"
              aria-selected={active === i}
              aria-controls={`product-panel-${i}`}
              tabIndex={active === i ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
              className={`cursor-pointer rounded-full px-4 py-1.5 font-mono text-[12px] transition-colors duration-150 ${
                active === i
                  ? "bg-ink text-white"
                  : "text-muted hover:text-ink"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {TABS.map((tab, i) => (
          <div
            key={tab.label}
            id={`product-panel-${i}`}
            role="tabpanel"
            aria-labelledby={`product-tab-${i}`}
            tabIndex={0}
            className={`mt-6 grid grid-cols-1 gap-3 min-[900px]:grid-cols-3 ${
              active === i ? "" : "hidden"
            }`}
          >
            {tab.cards.map((c) => (
              <div key={c.title} className="card p-5">
                <div className="mb-4 h-5 w-5 text-accent">{c.icon}</div>
                <h3 className="text-[14.5px] font-medium text-ink">{c.title}</h3>
                <p className="mt-2 text-[13px] leading-[1.6] text-muted">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        ))}
      </Container>
    </section>
  );
}
