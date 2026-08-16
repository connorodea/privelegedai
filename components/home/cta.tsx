import { Button, Container, Kicker } from "@/components/ui";

export function Cta() {
  return (
    <section id="access" className="section relative overflow-hidden text-center">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse,rgba(92,230,143,0.08)_0%,transparent_60%)]" />
      </div>
      <Container className="relative">
        <Kicker>Early access</Kicker>
        <h2 className="mx-auto max-w-[24ch] text-[clamp(28px,4vw,40px)] leading-[1.1] font-semibold tracking-[-0.03em]">
          Run privileged inference.
        </h2>
        <p className="mx-auto mt-4 max-w-[46ch] text-[15px] leading-[1.7] text-muted">
          Early access is open to a limited set of law firms and
          legal-engineering teams building on specialized models and premium
          data.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-[14px]">
          <Button href="mailto:hello@privilegedinfra.com?subject=Privileged%20—%20Early%20Access">
            Request early access
          </Button>
          <Button
            href="mailto:hello@privilegedinfra.com?subject=Privileged%20—%20Partnership"
            variant="ghost"
          >
            Partner with us
          </Button>
        </div>
      </Container>
    </section>
  );
}
