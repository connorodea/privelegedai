import { Container, Kicker } from "@/components/ui";

const PAINS = [
  "Zero-data-retention agreements with the major clouds take months of audits, minimum-spend commitments, and enterprise sales theater",
  "Firms can't verify where data flows, how it's encrypted, or when it's shredded inside a third-party API",
  "BigLaw firewalls need fixed, whitelisted addresses — standard serverless functions can't provide them",
];

const CHECKS = [
  "Absolute zero retention — volatile memory only",
  "No training on your data — contractual and technical",
  "Hardware-level model isolation",
  "TLS 1.3 + AES-256 with customer-managed keys",
];

export function Problem() {
  return (
    <section className="section">
      <Container>
        <div className="grid grid-cols-1 items-start gap-8 min-[900px]:grid-cols-2 min-[900px]:gap-14">
          <div>
            <Kicker>The problem</Kicker>
            <h2 className="max-w-[22ch] font-serif text-[clamp(28px,4.2vw,46px)] leading-[1.1] font-normal tracking-[-0.015em]">
              Enterprise legal AI is stuck in a paperwork bottleneck.
            </h2>
            <ul className="mt-8 grid list-none gap-[14px]">
              {PAINS.map((pain) => (
                <li
                  key={pain}
                  className="flex items-start gap-[14px] text-[15px] text-muted"
                >
                  <span className="mt-[9px] h-[5px] w-[5px] flex-none rounded-full bg-indigo" />
                  {pain}
                </li>
              ))}
            </ul>
          </div>
          <div className="border-l-2 border-accent pl-[26px]">
            <div className="font-serif text-[30px] leading-[1.2]">
              One DPA.
              <br />
              <b className="font-medium text-accent">
                Signed in days, not months.
              </b>
            </div>
            <p className="mt-[14px] text-[15px] text-muted">
              Privileged is the pre-audited intermediary. Firms sign a single
              ironclad agreement with us — not five vendors.
            </p>
            <ul className="mt-[22px] grid list-none gap-3">
              {CHECKS.map((check) => (
                <li
                  key={check}
                  className="flex items-start gap-3 text-[14.5px] text-ink"
                >
                  <span className="mt-0.5 h-[18px] w-[18px] flex-none rounded-full bg-accent" />
                  {check}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
