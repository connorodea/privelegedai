import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Kicker } from "@/components/ui";

export const metadata: Metadata = {
  title: "FAQ — Privileged",
  description:
    "Answers for IT and security teams on ephemeral inference, zero-data retention, static-IP egress, encryption, the DPA, and early access.",
  alternates: { canonical: "/faq/" },
  openGraph: {
    title: "FAQ — Privileged",
    description:
      "Answers for IT and security teams on ephemeral inference, zero-data retention, static-IP egress, encryption, the DPA, and early access.",
    type: "website",
    url: "https://privilegedinfra.com/faq/",
  },
};

const FAQS: { q: string; a: ReactNode }[] = [
  {
    q: "What is ephemeral inference?",
    a: "Each session runs in its own short-lived container: the model loads, serves your request, and is destroyed the instant the token stream closes. Prompts, context, and generated tokens live only in volatile memory — nothing touches disk.",
  },
  {
    q: "How is zero-data retention actually enforced?",
    a: "It is built into the runtime, not negotiated. User Data never enters non-volatile storage, and session memory is discarded and rendered unrecoverable at termination — Privileged certifies the wipe in writing on request (DPA §§3–4).",
  },
  {
    q: "Do you train on our data?",
    a: "No — both contractually and technically. The DPA prohibits using User Data to train, fine-tune, or evaluate any model (DPA §5), and because nothing persists after a session, there is nothing to train on.",
  },
  {
    q: "Can we whitelist a static IP?",
    a: "Yes. All outbound traffic egresses through a fixed, high-availability static-IP gateway. You receive the IP ranges up front, whitelist them once, and get advance notice of any change (DPA §8).",
  },
  {
    q: "How long does the DPA take?",
    a: "Days, not months. You sign one pre-audited DPA with Privileged instead of separate zero-data-retention agreements with every cloud and model vendor.",
  },
  {
    q: "How are custom models isolated?",
    a: "Your models and LoRA adapters — hot-swapped in milliseconds — are injected into temporary shared-memory volumes scoped to your session. No model, adapter, or weight from one firm is exposed to another firm's session, and isolation controls are tested and evidenced on request (DPA §7).",
  },
  {
    q: "What encryption do you support?",
    a: "TLS 1.3 in transit and AES-256 at rest for any stored configuration, credentials, or model data. Stored data sits behind customer-managed keys: Privileged holds no keys and cannot decrypt without your key release (DPA §6).",
  },
  {
    q: "Which data feeds can we bundle?",
    a: "Premium case-law, docket, and regulatory feeds, delivered white-label under your brand. Bundle what your practice needs and present it as your own.",
  },
  {
    q: "Who is Privileged for?",
    a: "BigLaw firms with privileged client matter, corporate legal and GC offices running sensitive internal and regulatory data, and legal-engineering teams integrating specialized models into products.",
  },
  {
    q: "Is early access available?",
    a: (
      <>
        Yes — for a limited set of firms, with no minimum spend. Request
        access at{" "}
        <a
          href="mailto:hello@privilegedinfra.com?subject=Privileged%20—%20Early%20Access"
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
        <section className="wrap pt-[110px] pb-[100px]">
          <Kicker>FAQ</Kicker>
          <h1 className="max-w-[20ch] font-sans text-[clamp(34px,5vw,52px)] leading-[1.08] font-semibold tracking-[-0.03em] text-ink">
            Answers for your IT auditor.
          </h1>
          <p className="mt-5 max-w-[54ch] text-[15px] leading-[1.7] text-muted">
            The questions your IT and security reviewers will raise — answered
            from the DPA and the runtime, not from marketing.
          </p>

          <div className="mx-auto mt-14 max-w-[780px] space-y-3">
            {FAQS.map((item) => (
              <details
                key={item.q}
                className="group rounded-lg border border-line bg-white shadow-[0_1px_2px_rgba(1,1,30,0.03)] open:border-accent/30"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-[14px] font-medium text-ink [&::-webkit-details-marker]:hidden">
                  <span className="flex-1">{item.q}</span>
                  <span
                    aria-hidden="true"
                    className="shrink-0 font-mono text-[16px] leading-none text-accent group-open:hidden"
                  >
                    +
                  </span>
                  <span
                    aria-hidden="true"
                    className="hidden shrink-0 font-mono text-[16px] leading-none text-accent group-open:inline"
                  >
                    −
                  </span>
                </summary>
                <p className="px-5 pb-5 text-[13.5px] leading-[1.7] text-muted">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
