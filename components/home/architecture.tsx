import type { ReactNode } from "react";
import { Container, SectionHeading, MonoLabel, StatusDot } from "@/components/ui";
import { Reveal } from "@/components/reveal";

function FlowConnector({ label }: { label?: string }) {
  return (
    <div className="relative flex flex-col items-center py-2" aria-hidden="true">
      <svg width="14" height="34" viewBox="0 0 14 34" className="overflow-visible">
        <line x1="7" y1="0" x2="7" y2="34" stroke="var(--color-line3)" strokeWidth="1" />
        <line x1="7" y1="0" x2="7" y2="34" stroke="var(--color-accent)" strokeWidth="1.5" className="flow-line" />
        <path d="M3 27 L7 33 L11 27" fill="none" stroke="var(--color-accent)" strokeWidth="1" />
      </svg>
      {label ? (
        <span className="absolute left-[calc(50%+14px)] font-mono text-[10px] whitespace-nowrap text-faint">
          {label}
        </span>
      ) : null}
    </div>
  );
}

function Node({
  tag,
  title,
  sub,
  chips,
  highlight,
  danger,
}: {
  tag: string;
  title: string;
  sub?: string;
  chips?: string[];
  highlight?: boolean;
  danger?: boolean;
}) {
  return (
    <div
      className={`w-full rounded-[14px] border p-4 ${
        highlight
          ? "border-accent/45 bg-accent/[0.06] rim-glow"
          : danger
            ? "border-critical/35 bg-critical/[0.04]"
            : "border-line bg-surface"
      }`}
    >
      <div className="flex items-center justify-between">
        <MonoLabel>{tag}</MonoLabel>
        {highlight ? (
          <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-signal">
            <StatusDot tone="signal" /> EPHEMERAL
          </span>
        ) : null}
      </div>
      <div className="mt-2 text-[15px] font-medium text-ink">{title}</div>
      {sub ? <div className="mt-1 text-[12.5px] text-muted">{sub}</div> : null}
      {chips ? (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {chips.map((c) => (
            <span
              key={c}
              className="rounded border border-line2 bg-bg px-2 py-1 font-mono text-[10.5px] text-faint"
            >
              {c}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function Architecture() {
  return (
    <section id="architecture" className="section relative overflow-hidden">
      <div className="fluting pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
      <Container className="relative">
        <SectionHeading
          kicker="Architecture"
          kickerTone="accent"
          title={<>Simple API outside. <span className="text-accent">Sophisticated</span> infrastructure underneath.</>}
          lede="One OpenAI-compatible endpoint fronts a control plane, an ephemeral runtime, and controlled egress — each separated by an explicit security boundary."
        />

        <Reveal className="surface-card mt-14 overflow-hidden">
          {/* control plane band */}
          <div className="border-b border-line bg-surface2/60 px-6 py-5">
            <div className="flex items-center justify-between">
              <MonoLabel>Privileged control plane</MonoLabel>
              <span className="font-mono text-[10.5px] text-faint">
                persists metadata · never payloads
              </span>
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {["Identity", "Organizations", "Projects", "Policy", "Models", "Deployments", "Runtime scheduler", "Audit"].map(
                (c) => (
                  <span
                    key={c}
                    className="rounded-md border border-line2 bg-surface px-2.5 py-1 font-mono text-[11px] text-muted"
                  >
                    {c}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* data plane spine */}
          <div className="px-6 py-8">
            <div className="mx-auto max-w-[440px]">
              <Node
                tag="Client"
                title="Law-firm application"
                sub="OpenAI-compatible request over TLS 1.3"
                chips={["POST /v1/chat/completions", "Bearer pi_…"]}
              />
              <FlowConnector label="authenticate" />
              <Node
                tag="Gateway"
                title="Privileged gateway"
                sub="Identity · authorization · policy · routing · audit"
                chips={["thin", "deterministic"]}
              />
              <FlowConnector label="schedule" />
              <Node
                tag="Scheduler"
                title="Runtime scheduler"
                sub="Policy · capacity · provider & region selection"
                chips={["provider-neutral"]}
              />
              <FlowConnector label="provision · isolate" />
              <Node
                tag="Runtime"
                title="Ephemeral GPU environment"
                sub="Model · temporary context · RAM scratch"
                chips={["read-only root", "tmpfs", "no persistent disk"]}
                highlight
              />
              <FlowConnector label="controlled egress" />
              <Node
                tag="Egress"
                title="Static, controlled egress"
                sub="Fixed identity · deny unless allowed"
                chips={["Models", "Legal data"]}
              />
              <FlowConnector label="stream · then destroy" />
              <Node
                tag="Teardown"
                title="Runtime destroyed"
                sub="Memory released · teardown verified · 0 B retained"
                danger
              />
            </div>
          </div>

          {/* infra plane footer */}
          <div className="border-t border-line bg-surface2/60 px-6 py-5">
            <MonoLabel>Infrastructure plane</MonoLabel>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {["Kubernetes", "GPU pools", "Network policy", "Secrets", "Terraform", "Helm", "Providers", "Regions", "Observability"].map(
                (c) => (
                  <span
                    key={c}
                    className="rounded-md border border-line2 bg-surface px-2.5 py-1 font-mono text-[11px] text-muted"
                  >
                    {c}
                  </span>
                ),
              )}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
