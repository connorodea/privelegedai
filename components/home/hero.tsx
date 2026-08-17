import { Button, Container, Eyebrow } from "@/components/ui";
import { Terminal } from "./terminal";

const STATS = [
  { num: "Days", label: "to sign a DPA — not months" },
  { num: "Zero", label: "data persisted to disk, ever" },
  { num: "Static IP", label: "firewall whitelisting for BigLaw" },
  { num: "One DPA", label: "covers every model and feed" },
];

export function Hero() {
  return (
    <header className="relative overflow-hidden pb-[60px] pt-24">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(1,1,30,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(1,1,30,0.035) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
          }}
        />
        <div className="absolute top-[-20%] right-[-10%] h-[500px] w-[900px] bg-[radial-gradient(ellipse,rgba(11,143,94,0.12)_0%,transparent_65%)]" />
        <div className="absolute bottom-[-30%] left-[-15%] h-[600px] w-[800px] bg-[radial-gradient(ellipse,rgba(47,111,228,0.10)_0%,transparent_60%)]" />
      </div>
      <Container className="relative">
        <Eyebrow>Ephemeral inference for law</Eyebrow>
        <h1 className="max-w-[22ch] font-sans text-[clamp(40px,6vw,64px)] leading-[1.05] font-semibold tracking-[-0.035em] text-ink">
          Ephemeral by default.
          <br />
          <span className="bg-gradient-to-r from-accent to-blue bg-clip-text text-transparent">
            Privileged by design.
          </span>
        </h1>
        <p className="mt-6 max-w-[56ch] text-[15px] leading-[1.7] text-muted">
          Containers that spin up, run your model, and vanish the instant the
          token stream closes. Static-IP egress your firm&apos;s firewall can
          whitelist once. Zero-data retention engineered in — not negotiated
          for months.
        </p>
        <div className="mt-[34px] flex flex-wrap gap-[14px]">
          <Button href="mailto:hello@privilegedinfra.com?subject=Privileged%20—%20Early%20Access">
            Request early access
          </Button>
          <Button href="#product" variant="ghost">
            See the product
          </Button>
        </div>

        <Terminal />

        <div className="mt-16 grid grid-cols-2 border-t border-line md:grid-cols-4 md:divide-x md:divide-line">
          {STATS.map((s) => (
            <div key={s.label} className="py-6">
              <div className="font-mono text-[20px] text-ink">{s.num}</div>
              <div className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-faint">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </header>
  );
}
