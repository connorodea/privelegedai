import { Container, SectionHeading, MonoLabel } from "@/components/ui";
import { Reveal } from "@/components/reveal";

const COLUMNS = [
  {
    role: "Security",
    items: ["Static network boundary", "Tenant isolation", "Encryption in transit", "Controlled egress", "Auditability"],
  },
  {
    role: "Legal",
    items: ["Data processing agreement", "Retention controls", "Subprocessor transparency", "Defined security boundary", "Policy enforcement"],
  },
  {
    role: "Engineering",
    items: ["OpenAI-compatible API", "Model flexibility", "Custom deployments", "SDKs & CLI", "Observability"],
  },
];

export function Convergence() {
  return (
    <section className="section">
      <Container>
        <SectionHeading
          kicker="Alignment"
          title="Infrastructure your lawyers and engineers can agree on."
          lede="Privileged sits between technical and legal requirements — so neither team has to compromise to trust the other."
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-3 lg:gap-5">
          {COLUMNS.map((col, i) => (
            <Reveal key={col.role} delay={i * 80} className="surface-card p-6">
              <MonoLabel>{col.role}</MonoLabel>
              <ul className="mt-5 space-y-2.5">
                {col.items.map((it) => (
                  <li key={it} className="flex items-center gap-3 text-[14px] text-muted">
                    <span className="h-1 w-1 flex-none rounded-full bg-faint" />
                    {it}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        {/* converge */}
        <div className="mt-5 flex flex-col items-center" aria-hidden="true">
          <svg width="100%" height="40" viewBox="0 0 600 40" preserveAspectRatio="none" className="max-w-[600px]">
            <path d="M100 0 C100 24 300 16 300 40" fill="none" stroke="var(--color-line3)" strokeWidth="1" />
            <path d="M300 0 L300 40" fill="none" stroke="var(--color-line3)" strokeWidth="1" />
            <path d="M500 0 C500 24 300 16 300 40" fill="none" stroke="var(--color-line3)" strokeWidth="1" />
            <path d="M100 0 C100 24 300 16 300 40" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" className="flow-line" />
            <path d="M500 0 C500 24 300 16 300 40" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" className="flow-line" />
          </svg>
        </div>
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2.5 rounded-xl border border-accent/40 bg-accent/[0.06] px-5 py-3 text-[15px] font-medium text-ink rim-glow">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Privileged
          </span>
        </div>
      </Container>
    </section>
  );
}
