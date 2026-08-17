import { Container, SectionHeading, MonoLabel } from "@/components/ui";
import { Reveal } from "@/components/reveal";

const WITHOUT = [
  "Model provider",
  "GPU / compute provider",
  "Cloud provider",
  "Legal data provider",
  "Model-customization vendor",
];

const WITH = ["Compute", "Models", "Legal data"];

export function Procurement() {
  return (
    <section className="section">
      <Container>
        <SectionHeading
          kicker="Procurement"
          title={
            <>
              One infrastructure boundary
              <br className="hidden md:block" /> instead of an AI supply chain.
            </>
          }
          lede="Your lawyers shouldn't need to understand your AI supply chain to trust it. Privileged collapses five vendor relationships into one security boundary."
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-2 lg:gap-5">
          {/* without */}
          <Reveal className="surface-card p-7">
            <MonoLabel>Without Privileged</MonoLabel>
            <div className="mt-6">
              <div className="inline-flex items-center rounded-md border border-line2 bg-surface2 px-3 py-2 text-[13px] text-ink">
                Legal team
              </div>
              <div className="mt-4 space-y-2 border-l border-line2 pl-5">
                {WITHOUT.map((v) => (
                  <div
                    key={v}
                    className="relative flex items-center gap-3 text-[13.5px] text-muted"
                  >
                    <span className="absolute -left-5 h-px w-4 bg-line2" />
                    <span className="h-1.5 w-1.5 rounded-full bg-critical/70" />
                    {v}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-7 grid grid-cols-2 gap-2 font-mono text-[11px] text-faint">
              <span>× multiple contracts</span>
              <span>× multiple DPAs</span>
              <span>× multiple security reviews</span>
              <span>× multiple trust boundaries</span>
            </div>
          </Reveal>

          {/* with */}
          <Reveal delay={90} className="surface-card rim-glow relative overflow-hidden p-7">
            <div className="absolute top-[-30%] right-[-10%] h-[320px] w-[420px] bg-[radial-gradient(ellipse,rgba(79,195,255,0.10),transparent_65%)]" />
            <MonoLabel>With Privileged</MonoLabel>
            <div className="relative mt-6">
              <div className="inline-flex items-center rounded-md border border-line2 bg-surface2 px-3 py-2 text-[13px] text-ink">
                Legal team
              </div>
              <div className="mt-3 ml-3 h-5 w-px bg-accent/50" />
              <div className="inline-flex items-center gap-2 rounded-md border border-accent/40 bg-accent/[0.07] px-3.5 py-2.5 text-[14px] font-medium text-ink">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Privileged
              </div>
              <div className="mt-4 flex flex-wrap gap-2 border-l border-accent/30 pl-5">
                {WITH.map((v) => (
                  <span
                    key={v}
                    className="rounded-md border border-line2 bg-surface px-3 py-1.5 text-[13px] text-ink"
                  >
                    {v}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative mt-7 grid grid-cols-2 gap-2 font-mono text-[11px] text-signal">
              <span>✓ one API</span>
              <span>✓ one infrastructure layer</span>
              <span>✓ one security boundary</span>
              <span>✓ simplified procurement</span>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
