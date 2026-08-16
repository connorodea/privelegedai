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
            <h2 className="max-w-[22ch] font-sans text-[clamp(28px,4.2vw,46px)] leading-[1.1] font-semibold tracking-[-0.03em]">
              Enterprise legal AI is stuck in a paperwork bottleneck.
            </h2>
            <ul className="mt-8 grid list-none gap-3">
              {PAINS.map((pain, i) => (
                <li
                  key={pain}
                  className="flex gap-3 text-[13.5px] leading-[1.65] text-muted"
                >
                  <span className="flex-none font-mono text-[11px] leading-[1.95] text-faint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {pain}
                </li>
              ))}
            </ul>
          </div>
          <div className="border-l-2 border-accent pl-6">
            <div className="font-sans text-[24px] leading-tight font-semibold text-ink">
              One DPA.
              <br />
              <b className="text-accent">Signed in days, not months.</b>
            </div>
            <p className="mt-3.5 text-[13.5px] leading-[1.7] text-muted">
              Privileged is the pre-audited intermediary. Firms sign a single
              ironclad agreement with us — not five vendors.
            </p>
            <ul className="mt-5 grid list-none gap-2.5">
              {CHECKS.map((check) => (
                <li
                  key={check}
                  className="flex items-start gap-2.5 text-[13.5px] text-ink"
                >
                  <span className="mt-px flex h-5 w-5 flex-none items-center justify-center rounded-full border border-accent/40 bg-accent/15">
                    <svg
                      className="h-3 w-3 text-accent"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M3 8.5l3.5 3.5L13 5" />
                    </svg>
                  </span>
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
