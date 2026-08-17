import { Container, SectionHeading, MonoLabel } from "@/components/ui";
import { Button } from "@/components/ui";
import { Reveal } from "@/components/reveal";

type Tone = "signal" | "accent" | "muted";

const ROWS: { control: string; state: string; tone: Tone }[] = [
  { control: "Session persistence", state: "NONE BY DEFAULT", tone: "signal" },
  { control: "Training on customer data", state: "DISABLED", tone: "signal" },
  { control: "Ephemeral execution", state: "ENABLED", tone: "accent" },
  { control: "Static, controlled egress", state: "ENABLED", tone: "accent" },
  { control: "Tenant isolation", state: "ENFORCED", tone: "accent" },
  { control: "Isolation classes", state: "GRADUATED", tone: "muted" },
  { control: "TLS in transit", state: "1.3", tone: "accent" },
  { control: "Customer-managed keys", state: "AVAILABLE", tone: "muted" },
  { control: "Environment teardown", state: "VERIFIED", tone: "signal" },
  { control: "Audit log", state: "APPEND-ONLY", tone: "accent" },
];

function dot(tone: Tone) {
  return tone === "signal" ? "bg-signal" : tone === "accent" ? "bg-accent" : "bg-faint";
}
function text(tone: Tone) {
  return tone === "signal" ? "text-signal" : tone === "accent" ? "text-accent" : "text-muted";
}

export function Security() {
  return (
    <section id="security" className="section">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <SectionHeading
              kicker="Security posture"
              kickerTone="accent"
              title="Security is a property of the architecture, not a marketing promise."
              lede="Each control is engineered at the infrastructure layer and enforced in code — not retrofitted through policy language."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#architecture" variant="ghost">
                View security architecture
              </Button>
              <Button
                href="mailto:hello@privilegedinfra.com?subject=Privileged%20—%20Security%20review"
                variant="ghost"
              >
                Start security review
              </Button>
            </div>
            <p className="mt-6 max-w-[44ch] font-mono text-[11px] leading-[1.7] text-faint">
              Zero-retention applies within the boundaries Privileged controls.
              Persistent workflows are opt-in and customer-configured. No
              certification is claimed on this page.
            </p>
          </div>

          <Reveal className="border-t border-line">
            <div className="flex items-center justify-between border-b border-line py-3">
              <MonoLabel>Control</MonoLabel>
              <MonoLabel>Status</MonoLabel>
            </div>
            <div className="divide-y divide-line">
              {ROWS.map((r) => (
                <div
                  key={r.control}
                  className="flex items-center justify-between py-4"
                >
                  <span className="text-[15px] text-ink">{r.control}</span>
                  <span className={`inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.1em] ${text(r.tone)}`}>
                    <span className={`h-1.5 w-1.5 rounded-full ${dot(r.tone)}`} />
                    {r.state}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
