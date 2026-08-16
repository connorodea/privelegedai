import { Button, Container, Eyebrow } from "@/components/ui";
import { Terminal } from "./terminal";

const STATS = [
  { num: "Days", label: "to sign a DPA — not months" },
  { num: "Zero", label: "data persisted to disk, ever" },
  { num: "Static IP", label: "firewall whitelisting for BigLaw" },
];

export function Hero() {
  return (
    <header className="relative overflow-hidden pb-[60px] pt-24">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute top-[-20%] right-[-10%] h-[500px] w-[900px] bg-[radial-gradient(ellipse,rgba(46,230,166,0.10)_0%,transparent_65%)]" />
        <div className="absolute bottom-[-30%] left-[-15%] h-[600px] w-[800px] bg-[radial-gradient(ellipse,rgba(99,102,241,0.07)_0%,transparent_60%)]" />
        <div className="absolute top-[60px] right-0 h-[500px] w-[600px] opacity-85">
          <img
            src="/assets/hero-shapes-1.svg"
            alt=""
            className="h-full w-full"
          />
        </div>
        <div className="absolute top-[180px] left-[55%] h-[400px] w-[400px] opacity-70">
          <img
            src="/assets/hero-shapes-2.svg"
            alt=""
            className="h-full w-full"
          />
        </div>
        <div className="absolute bottom-[40px] right-[25%] h-[300px] w-[300px] opacity-60">
          <img
            src="/assets/hero-shapes-3.svg"
            alt=""
            className="h-full w-full"
          />
        </div>
      </div>
      <Container className="relative">
        <Eyebrow>Ephemeral inference for law</Eyebrow>
        <h1 className="max-w-[18ch] font-serif text-[clamp(38px,6.5vw,72px)] leading-[1.04] font-normal tracking-[-0.02em]">
          Ephemeral by default.
          <br />
          <em className="text-accent italic">Privileged by design.</em>
        </h1>
        <p className="mt-6 max-w-[54ch] text-[clamp(15px,1.8vw,18px)] leading-[1.65] text-muted">
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

        <div className="mt-16 flex flex-wrap gap-12 border-y border-line py-7">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="font-serif text-[28px] font-medium text-accent">
                {s.num}
              </div>
              <div className="mt-0.5 text-[13px] text-muted">{s.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </header>
  );
}
