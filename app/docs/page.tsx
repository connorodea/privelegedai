import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Button, Container, Kicker } from "@/components/ui";

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
          <h1 className="max-w-[18ch] font-sans text-[clamp(34px,5vw,52px)] leading-[1.1] font-semibold tracking-[-0.03em] text-ink">
            Privileged in five minutes.
          </h1>
          <p className="mt-6 max-w-[56ch] text-[15px] leading-[1.7] text-muted">
            One DPA, one firewall rule, one CLI command. Everything below ships
            as engineered defaults — nothing to negotiate, nothing persists.
          </p>
        </Container>

        <section className="section">
          <Container>
            <Kicker>Quickstart</Kicker>
            <h2 className="text-[clamp(22px,3vw,32px)] leading-[1.15] font-semibold tracking-[-0.03em]">
              Run privileged inference in three steps.
            </h2>
            <div className="mt-12 grid items-start gap-12 min-[900px]:grid-cols-[1.2fr_1fr]">
              <div className="term-window max-w-[620px] border-navy2">
                <div
                  aria-hidden
                  className="flex items-center gap-[7px] border-b border-line bg-white/[0.02] px-4 py-3"
                >
                  <span className="h-[9px] w-[9px] rounded-full bg-[#FF5F57]" />
                  <span className="h-[9px] w-[9px] rounded-full bg-[#FFBD2E]" />
                  <span className="h-[9px] w-[9px] rounded-full bg-[#27CA40]" />
                  <span className="ml-2 font-mono text-[11px] text-[#5C6378]">
                    privileged run — ephemeral container lifecycle
                  </span>
                </div>
                <div className="term-body">
                  <span className="text-[#5C6378]">$</span>{" "}
                  <span className="text-green-bright">
                    privileged run --model client-vault:latest
                  </span>
                  <br />
                  <span className="text-[#5C6378]">container:</span>{" "}
                  <span className="text-blue-bright">eph-a3f2b1c</span>{"  "}
                  <span className="text-[#5C6378]">ip:</span>{" "}
                  <span className="text-amber-bright">5.161.239.237</span>{"  "}
                  <span className="text-[#5C6378]">status:</span>{" "}
                  <span className="text-blue-bright">ready</span>
                  <br />
                  <span className="text-[#5C6378]">stream:</span>{" "}
                  token-0 → token-1 → ... → token-n
                  <br />
                  <span className="text-[#5C6378]">stream closed</span> —{" "}
                  <span className="text-blue-bright">container decommissioned</span>
                  <br />
                  <span className="text-[#5C6378]">persistence:</span> none
                  &nbsp;|&nbsp;{" "}
                  <span className="text-[#5C6378]">data written to disk:</span> 0
                  bytes
                  <br />
                </div>
              </div>
              <ol className="grid gap-7">
                {STEPS.map((s, i) => (
                  <li key={s.title} className="flex gap-4">
                    <span className="grid h-7 w-7 flex-none place-items-center rounded-md border border-line bg-bg3 font-mono text-[12px] text-faint">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="text-[14px] font-medium text-ink">
                        {s.title}
                      </h3>
                      <p className="mt-1 text-[13.5px] leading-[1.65] text-muted">
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
            <Kicker>Concepts</Kicker>
            <h2 className="text-[clamp(22px,3vw,32px)] leading-[1.15] font-semibold tracking-[-0.03em]">
              Four primitives, one platform.
            </h2>
            <p className="mt-4 max-w-[60ch] text-[15px] leading-[1.7] text-muted">
              Every capability is engineered into the runtime — not retrofitted
              via policy.
            </p>
            <div className="mt-12 grid gap-3 md:grid-cols-2">
              {CONCEPTS.map((c) => (
                <div
                  key={c.title}
                  className="card p-5"
                >
                  <div className="mb-4 h-5 w-5 text-accent">{c.icon}</div>
                  <h3 className="text-[14.5px] font-medium text-ink">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-[1.65] text-muted">
                    {c.body}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="section">
          <Container>
            <Kicker>Security & compliance</Kicker>
            <h2 className="text-[clamp(22px,3vw,32px)] leading-[1.15] font-semibold tracking-[-0.03em]">
              The checklist your counsel will read.
            </h2>
            <p className="mt-4 max-w-[60ch] text-[15px] leading-[1.7] text-muted">
              Highlights from the Privileged Data Processing Agreement, with
              the section references your outside counsel can cite.
            </p>
            <div className="mt-10 overflow-hidden rounded-lg border border-line bg-white">
              <div className="grid max-[750px]:hidden grid-cols-[1.1fr_1.5fr_1.4fr] border-b border-line bg-bg3">
                <div className="px-5 py-4 font-mono text-[10.5px] tracking-[0.12em] uppercase text-faint">
                  Control
                </div>
                <div className="px-5 py-4 font-mono text-[10.5px] tracking-[0.12em] uppercase text-faint">
                  Implementation
                </div>
                <div className="px-5 py-4 font-mono text-[10.5px] tracking-[0.12em] uppercase text-faint">
                  In the DPA
                </div>
              </div>
              {SECURITY.map((r) => (
                <div
                  key={r.control}
                  className="grid grid-cols-[1.1fr_1.5fr_1.4fr] border-b border-line last:border-b-0 max-[750px]:grid-cols-1"
                >
                  <div className="px-5 py-4 text-[13px] font-semibold text-ink max-[750px]:px-[18px] max-[750px]:py-[14px]">
                    <span className="hidden font-mono text-[10.5px] tracking-[0.06em] uppercase text-muted max-[750px]:inline">
                      Control:{" "}
                    </span>
                    {r.control}
                  </div>
                  <div className="px-5 py-4 text-[13px] leading-[1.65] text-muted max-[750px]:px-[18px] max-[750px]:py-[14px]">
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

        <section className="border-t border-line py-14">
          <Container className="text-center">
            <Kicker>Support</Kicker>
            <h2 className="mx-auto max-w-[22ch] text-[clamp(22px,3vw,32px)] leading-[1.15] font-semibold tracking-[-0.03em]">
              Questions for your counsel?
            </h2>
            <p className="mx-auto mt-5 max-w-[46ch] text-[15px] leading-[1.7] text-muted">
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
