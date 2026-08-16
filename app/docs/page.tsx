import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Button, Card, Container, Kicker, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Docs — Privileged",
  description:
    "Privileged in five minutes: sign the DPA, whitelist our static IP, and run your first model with ephemeral containers and zero-data retention.",
  alternates: { canonical: "/docs/" },
  openGraph: {
    title: "Docs — Privileged",
    description:
      "Privileged in five minutes: sign the DPA, whitelist our static IP, and run your first model with ephemeral containers and zero-data retention.",
    type: "website",
    url: "https://privilegedinfra.com/docs/",
  },
};

const STEPS = [
  {
    title: "Sign the DPA",
    body: "One pre-audited Data Processing Agreement — zero retention, no training, hardware-level isolation. Signed in days, not months.",
  },
  {
    title: "Whitelist our static IP",
    body: "All egress flows through a fixed, high-availability gateway. Add it to your firewall once, and you're done — forever.",
  },
  {
    title: "Run your first model",
    body: "One command. The container spins up, streams tokens, and is decommissioned the instant the stream closes.",
    code: "privileged run --model client-vault:latest",
  },
];

const CONCEPTS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <path d="M4 17l6-6-6-6" />
        <path d="M12 19h8" />
      </svg>
    ),
    title: "Ephemeral containers",
    body: "Containers spin up, load your model, and vanish the instant the token stream closes. Nothing touches disk.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18" />
      </svg>
    ),
    title: "Static-IP egress",
    body: "All traffic exits through a fixed, high-availability gateway your firm's firewall can whitelist once, forever.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v4m0 12v4M2 12h4m12 0h4" />
      </svg>
    ),
    title: "LoRA hot-swap",
    body: "Hot-swap LoRA adapters in milliseconds — one base model, infinite firm-specific customizations.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <path d="M12 20h8M12 4h8M4 12l4 4 4-8" />
      </svg>
    ),
    title: "White-label data",
    body: "Bundle premium case-law, docket, and regulatory feeds under one brand — with revenue-share for data partners.",
  },
];

const SECURITY = [
  {
    control: "Zero retention",
    impl: "User Data is processed strictly in temporary, volatile memory (RAM). On Session termination, no copy, snapshot, or reconstruction survives.",
    dpa: "§3 – §4",
  },
  {
    control: "No training",
    impl: "User Data is never used to train, fine-tune, evaluate, or develop any model — public or private, for Privileged or any third party.",
    dpa: "§5",
  },
  {
    control: "Encryption",
    impl: "TLS 1.3 in transit; AES-256 at rest with customer-managed keys. Privileged cannot decrypt stored data without the Firm's key release.",
    dpa: "§6",
  },
  {
    control: "Hardware-level isolation",
    impl: "Each Session runs in an isolated compute environment. Memory assigned to a Session is discarded and rendered unrecoverable at termination.",
    dpa: "§3.3 · §7",
  },
];

export default function Docs() {
  return (
    <>
      <Nav />
      <main id="main">
        <Container className="pt-24 pb-16">
          <Kicker>Docs</Kicker>
          <h1 className="max-w-[18ch] font-serif text-[clamp(38px,6.5vw,64px)] leading-[1.04] font-normal tracking-[-0.02em]">
            Privileged in five minutes.
          </h1>
          <p className="mt-6 max-w-[56ch] text-[16.5px] leading-[1.7] text-muted">
            One DPA, one firewall rule, one CLI command. Everything below ships
            as engineered defaults — nothing to negotiate, nothing persists.
          </p>
        </Container>

        <section className="section">
          <Container>
            <SectionHeading
              kicker="Quickstart"
              title="Run privileged inference in three steps."
            />
            <div className="mt-12 grid items-start gap-12 min-[900px]:grid-cols-[1.2fr_1fr]">
              <div className="max-w-[620px] overflow-hidden rounded-xl border border-line2 bg-bg3">
                <div
                  aria-hidden
                  className="flex items-center gap-[7px] border-b border-line bg-white/[0.02] px-4 py-3"
                >
                  <span className="h-[9px] w-[9px] rounded-full bg-[#FF5F57]" />
                  <span className="h-[9px] w-[9px] rounded-full bg-[#FFBD2E]" />
                  <span className="h-[9px] w-[9px] rounded-full bg-[#27CA40]" />
                  <span className="ml-2 font-mono text-[11px] text-faint">
                    privileged run — ephemeral container lifecycle
                  </span>
                </div>
                <div className="px-4 py-4 font-mono text-[13px] leading-[1.8] text-muted">
                  <span className="text-indigo">$</span>{" "}
                  <span className="text-accent">
                    privileged run --model client-vault:latest
                  </span>
                  <br />
                  <span className="text-muted">container:</span>{" "}
                  <span className="text-accent">eph-a3f2b1c</span>{"  "}
                  <span className="text-muted">ip:</span>{" "}
                  <span className="text-gold">5.161.239.237</span>{"  "}
                  <span className="text-muted">status:</span>{" "}
                  <span className="text-accent">ready</span>
                  <br />
                  <span className="text-muted">stream:</span>{" "}
                  token-0 → token-1 → ... → token-n
                  <br />
                  <span className="text-muted">stream closed</span> —{" "}
                  <span className="text-accent">container decommissioned</span>
                  <br />
                  <span className="text-muted">persistence:</span> none
                  &nbsp;|&nbsp;{" "}
                  <span className="text-muted">data written to disk:</span> 0
                  bytes
                  <br />
                </div>
              </div>
              <ol className="grid gap-7">
                {STEPS.map((s, i) => (
                  <li key={s.title} className="flex gap-4">
                    <span className="flex-none font-mono text-sm text-accent">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="font-serif text-[17px] font-medium">
                        {s.title}
                      </h3>
                      <p className="mt-1 text-sm leading-[1.65] text-muted">
                        {s.body}
                      </p>
                      {s.code ? (
                        <code className="mt-2 block font-mono text-[12.5px] text-accent">
                          {s.code}
                        </code>
                      ) : null}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Container>
        </section>

        <section className="section">
          <Container>
            <SectionHeading
              kicker="Concepts"
              title="Four primitives, one platform."
              lede="Every capability is engineered into the runtime — not retrofitted via policy."
            />
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {CONCEPTS.map((c) => (
                <Card key={c.title} icon={c.icon} title={c.title}>
                  {c.body}
                </Card>
              ))}
            </div>
          </Container>
        </section>

        <section className="section">
          <Container>
            <SectionHeading
              kicker="Security & compliance"
              title="The checklist your counsel will read."
              lede="Highlights from the Privileged Data Processing Agreement, with the section references your outside counsel can cite."
            />
            <div className="mt-10 overflow-hidden rounded-[14px] border border-line">
              <div className="hidden grid-cols-[1.1fr_1.5fr_1.4fr] border-b border-line bg-bg3 max-[750px]:hidden">
                <div className="px-5 py-4 font-mono text-[10.5px] tracking-[0.08em] uppercase text-muted">
                  Control
                </div>
                <div className="px-5 py-4 font-mono text-[10.5px] tracking-[0.08em] uppercase text-muted">
                  Implementation
                </div>
                <div className="px-5 py-4 font-mono text-[10.5px] tracking-[0.08em] uppercase text-muted">
                  In the DPA
                </div>
              </div>
              {SECURITY.map((r) => (
                <div
                  key={r.control}
                  className="grid grid-cols-[1.1fr_1.5fr_1.4fr] border-b border-line last:border-b-0 max-[750px]:grid-cols-1"
                >
                  <div className="px-5 py-4 text-[13.5px] font-semibold text-ink max-[750px]:px-[18px] max-[750px]:py-[14px]">
                    <span className="hidden font-mono text-[10.5px] tracking-[0.06em] uppercase text-muted max-[750px]:inline">
                      Control:{" "}
                    </span>
                    {r.control}
                  </div>
                  <div className="px-5 py-4 text-[13.5px] leading-[1.65] text-muted max-[750px]:px-[18px] max-[750px]:py-[14px]">
                    <span className="hidden font-mono text-[10.5px] tracking-[0.06em] uppercase text-muted max-[750px]:inline">
                      Implementation:{" "}
                    </span>
                    {r.impl}
                  </div>
                  <div className="px-5 py-4 font-mono text-[13px] text-accent max-[750px]:px-[18px] max-[750px]:py-[14px]">
                    <span className="hidden font-mono text-[10.5px] tracking-[0.06em] uppercase text-muted max-[750px]:inline">
                      In the DPA:{" "}
                    </span>
                    {r.dpa}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="section">
          <Container className="text-center">
            <Kicker>Support</Kicker>
            <h2 className="mx-auto max-w-[22ch] font-serif text-[clamp(28px,4.2vw,46px)] leading-[1.1] font-normal tracking-[-0.015em]">
              Questions for your counsel?
            </h2>
            <p className="mx-auto mt-5 max-w-[46ch] text-[16.5px] leading-[1.7] text-muted">
              The full DPA template is available for review by counsel on both
              sides. Email us and we'll send it over.
            </p>
            <div className="mt-8 flex justify-center">
              <Button
                variant="ghost"
                href="mailto:hello@privilegedinfra.com?subject=Privileged%20—%20Docs%20Support"
              >
                Email the team
              </Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
