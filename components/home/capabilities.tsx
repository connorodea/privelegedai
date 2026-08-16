import type { ReactNode } from "react";
import { Card, Container, SectionHeading } from "@/components/ui";

function CardIcon({ children }: { children: ReactNode }) {
  return (
    <svg
      className="h-full w-full"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const FEATURES = [
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
    body: "All traffic exits through a fixed high-availability gateway. Your security team whitelists us once.",
  },
  {
    icon: (
      <CardIcon>
        <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z" />
        <path d="M9 12l2 2 4-4" />
      </CardIcon>
    ),
    title: "Zero-data retention",
    body: "Prompt, context, and generated tokens live only in volatile memory (RAM). Guaranteed.",
  },
  {
    icon: (
      <CardIcon>
        <path d="M4 6h16M4 12h16M4 18h10" />
      </CardIcon>
    ),
    title: "Custom model hosting",
    body: "Fine-tuned legal models and private firm vaults, hot-swapped via LoRA adapters in milliseconds.",
  },
  {
    icon: (
      <CardIcon>
        <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
      </CardIcon>
    ),
    title: "White-label data",
    body: "Bundle premium case-law, docket, and regulatory feeds under one interface and one brand.",
  },
  {
    icon: (
      <CardIcon>
        <path d="M13 2L4 14h6l-1 8 9-12h-6z" />
      </CardIcon>
    ),
    title: "Partner compute",
    body: "Whitelabel data-center and inference-provider capacity at near-zero cost — and we pass the margin on.",
  },
];

export function Capabilities() {
  return (
    <section className="section">
      <Container>
        <SectionHeading
          kicker="Capabilities"
          title="Everything a firm's IT auditor asks for."
        />
        <div className="mt-11 grid grid-cols-1 gap-4 min-[900px]:grid-cols-3">
          {FEATURES.map((f) => (
            <Card key={f.title} icon={f.icon} title={f.title}>
              {f.body}
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
