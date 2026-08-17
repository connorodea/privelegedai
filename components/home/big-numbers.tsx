import { Container, SectionHeading, MonoLabel, Serif } from "@/components/ui";
import { Reveal } from "@/components/reveal";

const STATS = [
  { value: "0 B", label: "Session data retained by default", tone: "signal" as const },
  { value: "1", label: "Security boundary instead of a supply chain", tone: "accent" as const },
  { value: "RAM", label: "Only scratch — no persistent disk attached", tone: "accent" as const },
  { value: "Static", label: "Egress identity your firewall whitelists once", tone: "accent" as const },
];

function tone(t: "signal" | "accent") {
  return t === "signal" ? "text-signal" : "text-ink";
}

export function BigNumbers() {
  return (
    <section className="section relative overflow-hidden">
      <div className="fluting pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      <Container className="relative">
        <SectionHeading
          kicker="By design"
          title={<>The numbers that <Serif>actually</Serif> matter.</>}
          lede="Not throughput benchmarks — the architectural facts a security team verifies."
        />
        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-[var(--radius-lg)] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="bg-surface p-8">
              <div className={`text-[clamp(40px,5vw,64px)] leading-none font-semibold tracking-[-0.04em] ${tone(s.tone)}`}>
                {s.value}
              </div>
              <MonoLabel className="mt-5 block max-w-[22ch] leading-[1.5] normal-case tracking-[0.04em] text-muted">
                {s.label}
              </MonoLabel>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
