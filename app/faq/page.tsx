import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Container, Kicker } from "@/components/ui";

export const metadata: Metadata = {
  title: "FAQ — Privileged",
  description:
    "Answers for IT and security teams on ephemeral execution, zero-retention by default, static egress, tenant isolation, encryption, and the DPA.",
  alternates: { canonical: "/faq/" },
  openGraph: {
    title: "FAQ — Privileged",
    description:
      "Answers for IT and security teams on ephemeral execution, zero-retention by default, static egress, tenant isolation, and the DPA.",
    type: "website",
    url: "https://privilegedinfra.com/faq/",
  },
};

const FAQS: { q: string; a: ReactNode }[] = [
  {
    q: "What is ephemeral execution?",
    a: "Each request runs in its own short-lived environment: the model loads, serves the request, and the environment is destroyed when the session closes. Prompt, context, and generated tokens live in RAM-only scratch — no persistent disk is attached.",
  },
  {
    q: "How is zero retention enforced?",
    a: "Execution paths are engineered so that prompts, responses, and uploaded document contents are not written to durable storage within the boundaries Privileged controls. Only payload-free metadata (request ID, token counts, latency, status) is retained. Persistent workflows are opt-in and customer-configured.",
  },
  {
    q: "Do you train on our data?",
    a: "No — contractually and by construction. The DPA prohibits using customer data to train, fine-tune, or evaluate any model, and because execution data does not persist by default, there is nothing to train on.",
  },
  {
    q: "Can we whitelist a static egress IP?",
    a: "Yes. Outbound traffic exits through controlled, static egress with a fixed infrastructure identity your firewall can whitelist. Default egress posture is deny unless a destination is explicitly allowed.",
  },
  {
    q: "How is tenant isolation handled?",
    a: "Isolation is enforced at multiple layers: org and project scoping on every record, database row-level security, and single-tenant runtime environments. Privileged offers graduated isolation classes; we describe the class actually provisioned rather than advertising a stronger level than is implemented.",
  },
  {
    q: "How long does the DPA take?",
    a: "The goal is days, not months — one agreement with Privileged instead of separate zero-retention negotiations with every cloud and model vendor.",
  },
  {
    q: "What about custom and private models?",
    a: "Host private and fine-tuned models in isolated environments, or run open and Privileged-hosted models through one logical identifier. Weights stay yours and are never used for training. LoRA adapters are supported.",
  },
  {
    q: "What encryption do you support?",
    a: "TLS 1.3 in transit, and encryption at rest for stored configuration and model artifacts. Customer-managed keys are available for stored data.",
  },
  {
    q: "Are you SOC 2 or ISO 27001 certified?",
    a: "Not at this time. The architecture is built to make those controls achievable, and we can walk security teams through the current posture — but Privileged does not claim certifications it has not completed.",
  },
  {
    q: "Is access available now?",
    a: (
      <>
        Early access is open to a limited set of firms and legal-engineering
        teams. Request access at{" "}
        <a
          href="/request-access"
          className="text-accent hover:underline"
        >
          hello@privilegedinfra.com
        </a>
        .
      </>
    ),
  },
];

export default function Faq() {
  return (
    <>
      <Nav />
      <main id="main">
        <Container className="pt-24 pb-24">
          <Kicker>FAQ</Kicker>
          <h1 className="max-w-[20ch] text-[clamp(34px,5vw,58px)] leading-[1.04] font-semibold tracking-[-0.03em] text-ink">
            Answers for your security reviewer.
          </h1>
          <p className="mt-5 max-w-[54ch] text-[16px] leading-[1.6] text-muted">
            The questions IT and security teams raise — answered from the
            architecture and the DPA, not from marketing.
          </p>

          <div className="mt-14 max-w-[820px] space-y-3">
            {FAQS.map((item) => (
              <details
                key={item.q}
                className="surface-card group open:border-accent/30"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-[15px] font-medium text-ink [&::-webkit-details-marker]:hidden">
                  <span className="flex-1">{item.q}</span>
                  <span
                    aria-hidden="true"
                    className="shrink-0 font-mono text-[16px] leading-none text-accent transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="px-5 pb-5 text-[14px] leading-[1.7] text-muted">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
