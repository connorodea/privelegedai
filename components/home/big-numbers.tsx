import { Container, SectionHeading } from "@/components/ui";
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
          title={<>The numbers that <span className="text-accent">actually</span> matter.</>}
          lede="Not throughput benchmarks — the architectural facts a security team verifies."
        />
        <div className="mt-16 grid grid-cols-2 border-t border-line lg:grid-cols-4 lg:divide-x lg:divide-line">
          {STATS.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 80}
              className="py-9 pr-6 lg:px-9 lg:first:pl-0"
            >
              <div className={`text-[clamp(48px,6vw,80px)] leading-[0.9] font-semibold tracking-[-0.045em] ${tone(s.tone)}`}>
                {s.value}
              </div>
              <div className="mt-5 max-w-[22ch] text-[13.5px] leading-[1.5] text-muted">
                {s.label}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
