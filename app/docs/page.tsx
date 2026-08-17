import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Button, Container, Kicker, MonoLabel } from "@/components/ui";

export const metadata: Metadata = {
  title: "Docs — Privileged",
  description:
    "Privileged in five minutes: sign the DPA, whitelist static egress, and run your first model through an OpenAI-compatible API with ephemeral, zero-retention execution.",
  alternates: { canonical: "/docs/" },
  openGraph: {
    title: "Docs — Privileged",
    description:
      "Sign the DPA, whitelist static egress, and run your first model with ephemeral, zero-retention execution.",
    type: "website",
    url: "https://privilegedinfra.com/docs/",
  },
};

const STEPS = [
  {
    n: "01",
    title: "Sign the DPA",
    body: "One Data Processing Agreement covering zero retention by default, no training on your data, and tenant isolation. Signed in days, not months.",
  },
  {
    n: "02",
    title: "Whitelist static egress",
    body: "Traffic exits through a fixed infrastructure identity. Add it to your firewall once. Default egress posture is deny unless explicitly allowed.",
  },
  {
    n: "03",
    title: "Call the API",
    body: "Point your existing OpenAI-compatible client at the Privileged gateway. The runtime provisions, streams, and is destroyed when the session closes.",
  },
];

const CONCEPTS = [
  ["Ephemeral runtime", "Environments provision on demand, run in RAM, and are destroyed on session close. No persistent disk is attached to a privileged workload."],
  ["Static egress", "All traffic exits through controlled, static egress with a fixed identity your firewall can whitelist. Deny by default."],
  ["Private models", "Host private and fine-tuned models in isolated environments, or run open models — all through one logical identifier. LoRA adapters supported."],
  ["Zero retention by default", "Prompts, responses, and documents are not written to durable storage in the paths Privileged controls. Persistent workflows are opt-in."],
];

const SECURITY = [
  ["Zero retention", "Execution data is processed in RAM-only scratch. Only payload-free metadata is retained by default.", "DPA §3–4"],
  ["No training", "Customer data is never used to train, fine-tune, or evaluate any model — for Privileged or any third party.", "DPA §5"],
  ["Encryption", "TLS 1.3 in transit; encryption at rest with customer-managed keys available for stored data.", "DPA §6"],
  ["Tenant isolation", "Org/project scoping, row-level security, and single-tenant runtimes. Graduated isolation classes.", "DPA §7"],
];

export default function Docs() {
  return (
    <>
      <Nav />
      <main id="main">
        <Container className="pt-24 pb-16">
          <Kicker tone="accent">Docs</Kicker>
          <h1 className="max-w-[18ch] text-[clamp(34px,5vw,58px)] leading-[1.04] font-semibold tracking-[-0.03em] text-ink">
            Privileged in five minutes.
          </h1>
          <p className="mt-5 max-w-[56ch] text-[16px] leading-[1.6] text-muted">
            One DPA, one firewall rule, one API. Everything below ships as an
            engineered default — nothing to negotiate, nothing persists by
            default.
          </p>
        </Container>

        {/* quickstart */}
        <section className="section">
          <Container>
            <Kicker>Quickstart</Kicker>
            <div className="mt-10 grid gap-4 md:grid-cols-3 md:gap-5">
              {STEPS.map((s) => (
                <div key={s.n} className="surface-card p-6">
                  <span className="grid h-8 w-8 place-items-center rounded-full border border-accent/40 font-mono text-[12px] text-accent">
                    {s.n}
                  </span>
                  <h3 className="mt-5 text-[16px] font-medium text-ink">{s.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-[1.6] text-muted">{s.body}</p>
                </div>
              ))}
            </div>

            <div className="term-window mt-6">
              <div className="flex items-center gap-2 border-b border-line px-4 py-3">
                <span className="font-mono text-[11px] text-faint">example · chat completion</span>
              </div>
              <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-[1.8] text-muted">
                <span className="text-signal">curl</span> https://api.privilegedinfra.com/v1/chat/completions \{"\n"}
                {"  "}-H <span className="text-accent">&quot;Authorization: Bearer pi_live_•••&quot;</span> \{"\n"}
                {"  "}-H <span className="text-accent">&quot;Content-Type: application/json&quot;</span> \{"\n"}
                {"  "}-d <span className="text-accent">&apos;&#123;&quot;model&quot;:&quot;privileged/legal-large&quot;,&quot;messages&quot;:[…],&quot;stream&quot;:true&#125;&apos;</span>
              </pre>
            </div>
          </Container>
        </section>

        {/* concepts */}
        <section className="section">
          <Container>
            <Kicker>Concepts</Kicker>
            <div className="mt-10 grid gap-px overflow-hidden rounded-[var(--radius-lg)] border border-line bg-line sm:grid-cols-2">
              {CONCEPTS.map(([title, body]) => (
                <div key={title} className="bg-surface p-6">
                  <h3 className="text-[15px] font-medium text-ink">{title}</h3>
                  <p className="mt-2 text-[13.5px] leading-[1.6] text-muted">{body}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* security table */}
        <section className="section">
          <Container>
            <Kicker>Security controls</Kicker>
            <div className="surface-card mt-10 overflow-hidden">
              <div className="grid grid-cols-[1fr_1.8fr_auto] border-b border-line max-[700px]:hidden">
                <div className="px-5 py-3"><MonoLabel>Control</MonoLabel></div>
                <div className="px-5 py-3"><MonoLabel>Implementation</MonoLabel></div>
                <div className="px-5 py-3"><MonoLabel>DPA</MonoLabel></div>
              </div>
              {SECURITY.map(([c, impl, dpa]) => (
                <div
                  key={c}
                  className="grid grid-cols-[1fr_1.8fr_auto] border-b border-line text-[13.5px] last:border-b-0 max-[700px]:grid-cols-1 max-[700px]:gap-1 max-[700px]:py-3"
                >
                  <div className="px-5 py-4 font-medium text-ink max-[700px]:py-1">{c}</div>
                  <div className="px-5 py-4 text-muted max-[700px]:py-1">{impl}</div>
                  <div className="px-5 py-4 font-mono text-[11px] text-accent max-[700px]:py-1">{dpa}</div>
                </div>
              ))}
            </div>
            <p className="mt-5 font-mono text-[11px] text-faint">
              Zero retention applies within the boundaries Privileged controls. Persistent workflows are opt-in. No certification is claimed.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="mailto:hello@privilegedinfra.com?subject=Privileged%20—%20Request%20access" arrow>
                Request access
              </Button>
              <Button href="mailto:hello@privilegedinfra.com?subject=Privileged%20—%20Security%20review" variant="ghost">
                Start security review
              </Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
