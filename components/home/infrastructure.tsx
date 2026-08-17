import { Container, SectionHeading, MonoLabel, StatusDot } from "@/components/ui";
import { Reveal } from "@/components/reveal";

const CELLS = [
  { label: "Region", value: "US-EAST", state: "OPERATIONAL", tone: "signal" as const },
  { label: "Runtime model", value: "Ephemeral", state: "RAM-ONLY", tone: "accent" as const },
  { label: "Egress", value: "Static IP", state: "FIXED", tone: "accent" as const },
  { label: "Disk persistence", value: "Disabled", state: "0 B", tone: "signal" as const },
  { label: "Tenant isolation", value: "Single-tenant", state: "ENFORCED", tone: "accent" as const },
  { label: "Session retention", value: "None by default", state: "0 B", tone: "signal" as const },
  { label: "Teardown", value: "Verified", state: "AUTOMATIC", tone: "signal" as const },
  { label: "Gateway", value: "OpenAI-compatible", state: "READY", tone: "accent" as const },
];

function toneText(t: "signal" | "accent") {
  return t === "signal" ? "text-signal" : "text-accent";
}
function toneDot(t: "signal" | "accent") {
  return t === "signal" ? "signal" : "accent";
}

export function Infrastructure() {
  return (
    <section className="section relative overflow-hidden">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-25" aria-hidden="true" />
      <Container className="relative">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            kicker="Infrastructure surface"
            title="Privileged cloud, at a glance."
            lede="Architecture states describe how a privileged workload runs — not live production telemetry."
          />
          <span className="mb-1 inline-flex items-center gap-2 rounded-full border border-warn/40 bg-warn/[0.06] px-3 py-1.5 font-mono text-[10.5px] tracking-[0.14em] text-warn">
            <span className="h-1.5 w-1.5 rounded-full bg-warn" />
            DEMONSTRATION ENVIRONMENT
          </span>
        </div>

        <Reveal className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-lg)] border border-line bg-line md:grid-cols-4">
          {CELLS.map((c) => (
            <div key={c.label} className="bg-surface p-5">
              <MonoLabel>{c.label}</MonoLabel>
              <div className="mt-3 text-[18px] font-medium tracking-[-0.01em] text-ink">
                {c.value}
              </div>
              <div className={`mt-2 inline-flex items-center gap-2 font-mono text-[10.5px] tracking-[0.1em] ${toneText(c.tone)}`}>
                <StatusDot tone={toneDot(c.tone)} />
                {c.state}
              </div>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
