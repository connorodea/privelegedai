import { Container, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/reveal";

const STAGES = [
  {
    n: "01",
    key: "RECEIVE",
    title: "Receive",
    body: "An authenticated request enters through the Privileged gateway. Identity, scope, and policy are resolved before any compute is provisioned.",
    state: "AUTHENTICATED",
  },
  {
    n: "02",
    key: "ISOLATE",
    title: "Isolate",
    body: "An ephemeral environment is provisioned for the workload — single-tenant, read-only root, RAM-only scratch. No persistent disk is attached.",
    state: "ISOLATED",
  },
  {
    n: "03",
    key: "EXECUTE",
    title: "Execute",
    body: "The model and temporary context exist only for the active execution. Output streams out through controlled, static egress as it is produced.",
    state: "ACTIVE",
  },
  {
    n: "04",
    key: "DESTROY",
    title: "Destroy",
    body: "On completion the environment is torn down and memory released. Only payload-free metadata is retained. Teardown is verified, not assumed.",
    state: "TERMINATED",
  },
];

export function ExecutionLifecycle() {
  return (
    <section className="section relative overflow-hidden">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />
      <Container className="relative">
        <SectionHeading
          kicker="Execution model"
          kickerTone="accent"
          title="Nothing persists, because persistence is not part of the execution model."
          lede="Request → Authenticate → Authorize → Provision → Isolate → Execute → Stream → Audit → Destroy. The full lifecycle of a privileged request, by design."
        />

        <div className="relative mt-16">
          {/* through-line */}
          <div
            className="pointer-events-none absolute top-[46px] right-0 left-0 hidden h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent lg:block"
            aria-hidden="true"
          />
          <div className="grid gap-8 lg:grid-cols-4 lg:gap-5">
            {STAGES.map((s, i) => (
              <Reveal key={s.key} delay={i * 90} as="div" className="relative">
                <div className="flex items-center gap-3">
                  <span className="grid h-[30px] w-[30px] place-items-center rounded-full border border-accent/40 bg-bg font-mono text-[12px] text-accent">
                    {s.n}
                  </span>
                  <span className="h-px flex-1 bg-line lg:hidden" />
                </div>
                <div className="mt-6 font-mono text-[11px] tracking-[0.16em] text-faint">
                  {s.key}
                </div>
                <h3 className="mt-2 text-[22px] font-semibold tracking-[-0.02em] text-ink">
                  {s.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.6] text-muted">
                  {s.body}
                </p>
                <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-line2 px-3 py-1 font-mono text-[10.5px] tracking-[0.12em] text-signal">
                  <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                  {s.state}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
