import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Button, Container, Kicker } from "@/components/ui";

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
          <h1 className="max-w-[18ch] font-sans text-[clamp(34px,5vw,52px)] leading-[1.1] font-semibold tracking-[-0.03em] text-ink">
            Built for the legal stack.
          </h1>
          <p className="mt-6 max-w-[56ch] text-[15px] leading-[1.7] text-muted">
            Three audiences, one pre-audited guarantee. BigLaw needs ZDR and
            static-IP egress; GC offices need RAM-only inference on regulatory
            data; legal-engineering teams need hot-swappable models and premium
            feeds. Privileged is the ephemeral inference layer under all of
            them.
          </p>
        </Container>

        {PERSONAS.map((p, i) => (
          <section key={p.kicker} className="border-t border-line py-14">
            <Container>
              <div className="grid gap-8 min-[900px]:grid-cols-[72px_1fr]">
                <div className="pt-1 font-mono text-[12px] text-faint">
                  0{i + 1}
                </div>
                <div className="max-w-[64ch]">
                  <div className="font-mono text-[11px] tracking-[0.14em] text-faint">
                    {p.kicker.split(" — ")[1]}
                  </div>
                  <h2 className="mt-2 font-sans text-[clamp(20px,2.6vw,28px)] leading-[1.2] font-semibold tracking-[-0.02em] text-ink">
                    {p.title}
                  </h2>
                  <p className="mt-4 text-[14px] leading-[1.7] text-muted">
                    {p.problem}
                  </p>
                  <div className="mt-5 font-mono text-[11px] tracking-[0.14em] uppercase text-accent">
                    How Privileged solves it
                  </div>
                  <ul className="mt-4 grid gap-2.5">
                    {p.solves.map((s) => (
                      <li
                        key={s}
                        className="flex items-start gap-2.5 text-[13.5px] leading-[1.6] text-muted"
                      >
                        <svg
                          aria-hidden
                          className="mt-[3px] h-4 w-4 flex-none text-accent"
                          viewBox="0 0 16 16"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M2.5 8.5l3.5 3.5 7.5-8" />
                        </svg>
                        {s}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.chips.map((c) => (
                      <span
                        key={c}
                        className="inline-flex rounded-full border border-line2 bg-white px-3 py-1 font-mono text-[11px] text-muted"
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

        <section className="border-t border-line py-14">
          <Container className="text-center">
            <Kicker>Early access</Kicker>
            <h2 className="mx-auto max-w-[22ch] text-[clamp(22px,3vw,32px)] leading-[1.15] font-semibold tracking-[-0.03em]">
              Your workload, one DPA.
            </h2>
            <p className="mx-auto mt-5 max-w-[46ch] text-[15px] leading-[1.7] text-muted">
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
