import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Button, Container, Kicker, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Use Cases — Privileged",
  description:
    "BigLaw, corporate legal, and legal-engineering teams run privileged inference on the same pre-audited guarantee: ephemeral containers, static-IP egress, and zero-data retention.",
  alternates: { canonical: "/use-cases/" },
  openGraph: {
    title: "Use Cases — Privileged",
    description:
      "BigLaw, corporate legal, and legal-engineering teams run privileged inference on the same pre-audited guarantee: ephemeral containers, static-IP egress, and zero-data retention.",
    type: "website",
    url: "https://privilegedinfra.com/use-cases/",
  },
};

const PERSONAS = [
  {
    kicker: "01 — BigLaw",
    title: "National firms on privileged matters.",
    problem:
      "Your associates need specialized models over privileged client matter, but every cloud and model vendor wants its own zero-data-retention agreement — months of audits, minimum-spend commitments, and enterprise sales theater before a single query runs. And your security team needs fixed, whitelisted egress addresses that standard serverless can't provide.",
    solves: [
      "One pre-audited DPA, signed in days — not months of audits",
      "Fixed, static-IP egress your firewall whitelists once, forever",
      "Ephemeral containers that vanish the instant the token stream closes",
    ],
    chips: ["One DPA", "Static-IP egress", "Zero retention", "ZDR-ready"],
  },
  {
    kicker: "02 — Corporate legal / GC offices",
    title: "General counsel on internal and regulatory data.",
    problem:
      "Your team holds sensitive internal and regulatory data that can never be exposed to model training. Off-the-shelf AI vendors won't guarantee that contractually or technically — and a single training incident on privileged material is a board-level problem.",
    solves: [
      "RAM-only inference — prompt, context, and tokens live in volatile memory only",
      "No training on your data — contractual and technical, not a policy promise",
      "Customer-managed encryption keys — Privileged cannot decrypt without your key release",
    ],
    chips: ["RAM-only inference", "No training", "CMK encryption", "TLS 1.3"],
  },
  {
    kicker: "03 — Legal-engineering teams",
    title: "Builders shipping specialized models.",
    problem:
      "You're integrating specialized models and premium legal data feeds into products. Today that means separate vendors, SDKs, and procurement stacks for law, dockets, and regulation — and no clean way to compensate the data partners you bundle.",
    solves: [
      "LoRA adapters hot-swapped in milliseconds — one base model, infinite client customizations",
      "One SDK and one API across law, dockets, and regulation",
      "White-label bundling of premium feeds under your brand",
      "Revenue-share for data partners when their feeds are consumed",
    ],
    chips: ["LoRA hot-swap", "One SDK", "White-label", "Revenue-share"],
  },
];

export default function UseCases() {
  return (
    <>
      <Nav />
      <main id="main">
        <Container className="pt-24 pb-16">
          <Kicker>Use cases</Kicker>
          <h1 className="max-w-[18ch] font-serif text-[clamp(38px,6.5vw,64px)] leading-[1.04] font-normal tracking-[-0.02em]">
            Built for the legal stack.
          </h1>
          <p className="mt-6 max-w-[56ch] text-[16.5px] leading-[1.7] text-muted">
            Three audiences, one pre-audited guarantee. BigLaw needs ZDR and
            static-IP egress; GC offices need RAM-only inference on regulatory
            data; legal-engineering teams need hot-swappable models and premium
            feeds. Privileged is the ephemeral inference layer under all of
            them.
          </p>
        </Container>

        {PERSONAS.map((p) => (
          <section key={p.kicker} className="section">
            <Container>
              <div className="grid gap-12 min-[900px]:grid-cols-2">
                <SectionHeading
                  kicker={p.kicker}
                  title={p.title}
                  lede={p.problem}
                />
                <div className="rounded-[14px] border border-line bg-surface p-7">
                  <h3 className="font-mono text-[10.5px] tracking-[0.08em] uppercase text-muted">
                    How Privileged solves it
                  </h3>
                  <ul className="mt-5 grid gap-3.5">
                    {p.solves.map((s) => (
                      <li
                        key={s}
                        className="flex items-start gap-3 text-[14.5px] leading-[1.6] text-ink"
                      >
                        <span className="mt-[2px] flex h-[18px] w-[18px] flex-none items-center justify-center rounded-full bg-accent font-mono text-[10px] text-accent-ink">
                          ✓
                        </span>
                        {s}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2 border-t border-line pt-6">
                    {p.chips.map((c) => (
                      <span
                        key={c}
                        className="rounded-full border border-line px-3 py-1.5 font-mono text-[10.5px] tracking-[0.08em] uppercase text-muted"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Container>
          </section>
        ))}

        <section className="section">
          <Container className="text-center">
            <Kicker>Early access</Kicker>
            <h2 className="mx-auto max-w-[22ch] font-serif text-[clamp(28px,4.2vw,46px)] leading-[1.1] font-normal tracking-[-0.015em]">
              Your workload, one DPA.
            </h2>
            <p className="mx-auto mt-5 max-w-[46ch] text-[16.5px] leading-[1.7] text-muted">
              Early access is open to a limited set of law firms and
              legal-engineering teams building on specialized models and
              premium data.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="mailto:hello@privilegedinfra.com?subject=Privileged%20—%20Use%20Cases">
                Talk to us
              </Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
