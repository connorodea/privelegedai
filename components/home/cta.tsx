import { Button, Container, SectionHeading } from "@/components/ui";

export function Cta() {
  return (
    <section id="access" className="section py-[130px] text-center">
      <Container>
        <SectionHeading
          kicker="Early access"
          title="Run privileged inference."
          align="center"
        />
        <p className="mx-auto mt-[22px] max-w-[46ch] text-[17px] text-muted">
          Early access is open to a limited set of law firms and
          legal-engineering teams building on specialized models and premium
          data.
        </p>
        <div className="mt-[34px] flex flex-wrap justify-center gap-[14px]">
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
