import { Button, Container, Kicker } from "@/components/ui";

export function Cta() {
  return (
    <section
      id="access"
      className="section relative overflow-hidden text-center"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="fluting absolute inset-0 opacity-40" />
        <div className="absolute top-1/2 left-1/2 h-[520px] w-[900px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse,rgba(79,195,255,0.10)_0%,transparent_62%)]" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-[46ch]">
          <Kicker tone="accent">Request access</Kicker>
        </div>
        <h2 className="mx-auto max-w-[18ch] text-[clamp(34px,5.4vw,68px)] leading-[0.98] font-semibold tracking-[-0.035em] text-ink">
          Private AI shouldn&apos;t require a <span className="text-accent">private cloud.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-[52ch] text-[16px] leading-[1.6] text-muted">
          Run privileged inference without carrying the operational burden of
          building the entire stack yourself. Tell us what you&apos;re trying to
          run — we&apos;ll help determine the appropriate private inference
          architecture.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Button
            href="/request-access"
            arrow
          >
            Request access
          </Button>
          <Button
            href="mailto:hello@privilegedinfra.com?subject=Privileged%20—%20Talk%20to%20an%20engineer"
            variant="ghost"
          >
            Talk to an engineer
          </Button>
        </div>
        <div className="mt-12 font-mono text-[10.5px] tracking-[0.16em] text-faint">
          EPHEMERAL INFERENCE · STATIC EGRESS · PRIVATE MODELS · LEGAL
          INFRASTRUCTURE
        </div>
      </Container>
    </section>
  );
}
