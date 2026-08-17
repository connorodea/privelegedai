import type { ReactNode } from "react";
import { Container, SectionHeading, MonoLabel, StatusDot } from "@/components/ui";
import { Reveal } from "@/components/reveal";

function StateTag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-line2 bg-surface px-3 py-1.5 font-mono text-[10.5px] tracking-[0.12em] text-muted">
      {children}
    </span>
  );
}

function Row({
  index,
  eyebrow,
  title,
  body,
  states,
  visual,
  flip,
}: {
  index: string;
  eyebrow: string;
  title: string;
  body: string;
  states: ReactNode;
  visual: ReactNode;
  flip?: boolean;
}) {
  return (
    <Reveal className="grid items-center gap-8 border-t border-line py-14 first:border-t-0 lg:grid-cols-2 lg:gap-16 lg:py-20">
      <div className={flip ? "lg:order-2" : ""}>
        <div className="flex items-center gap-3">
          <span className="font-mono text-[12px] text-accent">{index}</span>
          <MonoLabel>{eyebrow}</MonoLabel>
        </div>
        <h3 className="mt-5 max-w-[18ch] text-[clamp(24px,3vw,36px)] leading-[1.06] font-semibold tracking-[-0.03em] text-ink">
          {title}
        </h3>
        <p className="mt-4 max-w-[46ch] text-[15.5px] leading-[1.6] text-muted">
          {body}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">{states}</div>
      </div>
      <div className={flip ? "lg:order-1" : ""}>{visual}</div>
    </Reveal>
  );
}

/* ---- bespoke visuals ---- */

function RuntimeVisual() {
  return (
    <div className="surface-card rim-glow relative overflow-hidden p-6">
      <div className="grid-bg absolute inset-0 opacity-30" aria-hidden="true" />
      <div className="relative flex items-center justify-between font-mono text-[11px] text-faint">
        <span>eph-runtime</span>
        <span className="inline-flex items-center gap-2 text-signal">
          <StatusDot tone="signal" /> EPHEMERAL
        </span>
      </div>
      <div className="relative mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line font-mono text-[12px]">
        {[
          ["memory", "RAM only"],
          ["disk", "DISABLED"],
          ["scope", "SESSION"],
          ["on close", "DESTROY"],
        ].map(([k, v]) => (
          <div key={k} className="bg-surface px-4 py-4">
            <div className="text-[10px] tracking-[0.12em] text-faint uppercase">{k}</div>
            <div className="mt-1 text-ink">{v}</div>
          </div>
        ))}
      </div>
      <div className="relative mt-4 h-1.5 overflow-hidden rounded-full bg-surface2">
        <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-accent/30 via-accent to-signal" />
      </div>
      <div className="relative mt-2 flex justify-between font-mono text-[10px] text-faint">
        <span>provision</span>
        <span>execute</span>
        <span>teardown</span>
      </div>
    </div>
  );
}

function NetworkVisual() {
  const nodes = [
    ["Firm network", "controlled ingress"],
    ["Static egress", "fixed identity"],
    ["Privileged gateway", "policy + routing"],
    ["Ephemeral compute", "isolated"],
  ];
  return (
    <div className="surface-card relative overflow-hidden p-6">
      <MonoLabel>Network boundary</MonoLabel>
      <div className="mt-5 space-y-0">
        {nodes.map(([label, sub], i) => (
          <div key={label}>
            <div className="flex items-center justify-between rounded-lg border border-line bg-surface px-4 py-3">
              <span className="text-[13.5px] text-ink">{label}</span>
              <span className="font-mono text-[10.5px] text-faint">{sub}</span>
            </div>
            {i < nodes.length - 1 ? (
              <div className="ml-6 flex h-5 items-center" aria-hidden="true">
                <svg width="10" height="20" viewBox="0 0 10 20">
                  <line x1="5" y1="0" x2="5" y2="20" stroke="var(--color-accent)" strokeWidth="1" className="flow-line" />
                </svg>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function ModelsVisual() {
  const models = ["privileged/legal-large", "customer/acme-litigation-v7", "open/llama-4"];
  return (
    <div className="surface-card relative overflow-hidden p-6">
      <div className="flex items-center justify-between">
        <MonoLabel>Private model registry</MonoLabel>
        <span className="font-mono text-[10.5px] text-signal">ISOLATED</span>
      </div>
      <div className="mt-5 space-y-2">
        {models.map((m) => (
          <div
            key={m}
            className="flex items-center justify-between rounded-lg border border-line bg-surface px-4 py-3 font-mono text-[12.5px]"
          >
            <span className="text-ink">{m}</span>
            <span className="text-faint">v•</span>
          </div>
        ))}
      </div>
      <div className="mt-5 grid grid-cols-3 gap-px overflow-hidden rounded-lg border border-line bg-line font-mono text-[11px]">
        {[
          ["access", "private"],
          ["training", "disabled"],
          ["deployment", "isolated"],
        ].map(([k, v]) => (
          <div key={k} className="bg-surface px-3 py-3 text-center">
            <div className="text-[9.5px] tracking-[0.1em] text-faint uppercase">{k}</div>
            <div className="mt-1 text-ink">{v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DataVisual() {
  const sources = ["Case law", "Court dockets", "Regulations & statutes", "Customer knowledge", "Proprietary datasets"];
  return (
    <div className="surface-card relative overflow-hidden p-6">
      <MonoLabel>Legal data fabric</MonoLabel>
      <div className="mt-5 flex flex-wrap gap-2">
        {sources.map((s) => (
          <span key={s} className="rounded-md border border-line2 bg-surface px-3 py-1.5 text-[12.5px] text-muted">
            {s}
          </span>
        ))}
      </div>
      <div className="mt-5 flex flex-col items-center" aria-hidden="true">
        <svg width="100%" height="26" viewBox="0 0 200 26" preserveAspectRatio="none">
          <line x1="100" y1="0" x2="100" y2="26" stroke="var(--color-accent)" strokeWidth="1" className="flow-line" />
        </svg>
      </div>
      <div className="flex justify-center">
        <span className="inline-flex items-center gap-2 rounded-lg border border-accent/40 bg-accent/[0.06] px-4 py-2.5 font-mono text-[12px] text-ink">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          One controlled interface
        </span>
      </div>
    </div>
  );
}

export function Primitives() {
  return (
    <section id="product" className="section">
      <Container>
        <SectionHeading
          kicker="Product"
          title="Four primitives. One security boundary."
          lede="Compute, network, models, and data — each engineered as a product surface, not a feature checkbox."
        />
        <div className="mt-8">
          <Row
            index="A"
            eyebrow="Ephemeral runtime"
            title="Compute that exists only when the workload does."
            body="Environments provision on demand, run your model in RAM, and are destroyed when the session closes. No persistent disk is ever attached to a privileged workload."
            states={
              <>
                <StateTag>RAM ONLY</StateTag>
                <StateTag>SESSION SCOPED</StateTag>
                <StateTag>DESTROY ON CLOSE</StateTag>
              </>
            }
            visual={<RuntimeVisual />}
          />
          <Row
            index="B"
            eyebrow="Network boundary"
            title="Private AI without unpredictable network behavior."
            body="Every request enters and exits through controlled, static egress with a fixed infrastructure identity your firewall can whitelist once. Default posture is deny unless explicitly allowed."
            states={
              <>
                <StateTag>STATIC EGRESS</StateTag>
                <StateTag>FIXED IDENTITY</StateTag>
                <StateTag>DENY BY DEFAULT</StateTag>
              </>
            }
            visual={<NetworkVisual />}
            flip
          />
          <Row
            index="C"
            eyebrow="Private models"
            title="Bring the model you actually want to run."
            body="Host private and fine-tuned models in isolated environments, or run open and Privileged-hosted models through one logical identifier. Weights stay yours and are never used for training."
            states={
              <>
                <StateTag>PRIVATE HOSTING</StateTag>
                <StateTag>LoRA / ADAPTERS</StateTag>
                <StateTag>NO TRAINING</StateTag>
              </>
            }
            visual={<ModelsVisual />}
          />
          <Row
            index="D"
            eyebrow="Legal data fabric"
            title="Legal data through one controlled interface."
            body="Reach case law, dockets, regulations, and your own sources through a single provider abstraction — governed by the same policy and audit layer as everything else."
            states={
              <>
                <StateTag>ONE API</StateTag>
                <StateTag>POLICY GOVERNED</StateTag>
                <StateTag>AUDITED ACCESS</StateTag>
              </>
            }
            visual={<DataVisual />}
            flip
          />
        </div>
      </Container>
    </section>
  );
}
