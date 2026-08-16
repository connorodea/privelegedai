import { Container, SectionHeading } from "@/components/ui";

const ROWS = [
  {
    domain: "Data persistence",
    impl: "Ephemeral storage destroyed immediately on container termination",
    value: "Absolute zero-data retention — no negotiation",
  },
  {
    domain: "Network boundary",
    impl: "All outbound traffic flows through a fixed, high-availability NAT gateway",
    value: "Static-IP firewall whitelists for BigLaw",
  },
  {
    domain: "Encryption",
    impl: "TLS 1.3 in transit; AES-256 at rest with customer-managed keys",
    value: "Federal and state privilege mandates",
  },
  {
    domain: "Model isolation",
    impl: "Custom LoRA adapters injected into temporary shared-memory volumes",
    value: "No cross-client leakage on shared infra",
  },
];

export function Security() {
  return (
    <section id="security" className="section">
      <Container>
        <SectionHeading
          kicker="Security & compliance"
          title="The checklist your IT auditor will run."
          lede="Every domain is engineered in from the infrastructure layer — not retrofitted via policy."
        />
        <div className="mt-10 overflow-hidden rounded-[14px] border border-line">
          <div className="grid grid-cols-[1.1fr_1.5fr_1.4fr] border-b border-line bg-bg3 max-[750px]:hidden">
            <div className="px-5 py-4 font-mono text-[10.5px] tracking-[0.08em] uppercase text-muted">
              Domain
            </div>
            <div className="px-5 py-4 font-mono text-[10.5px] tracking-[0.08em] uppercase text-muted">
              Implementation
            </div>
            <div className="px-5 py-4 font-mono text-[10.5px] tracking-[0.08em] uppercase text-muted">
              Legal / compliance value
            </div>
          </div>
          {ROWS.map((row) => (
            <div
              key={row.domain}
              className="grid grid-cols-[1.1fr_1.5fr_1.4fr] border-b border-line text-[13.5px] last:border-b-0 max-[750px]:grid-cols-1"
            >
              <div className="px-5 py-4 max-[750px]:px-[18px] max-[750px]:py-[14px]">
                <span className="hidden font-mono text-[10.5px] tracking-[0.06em] uppercase text-muted max-[750px]:inline">
                  {row.domain}:{" "}
                </span>
                <span className="font-semibold text-ink">{row.domain}</span>
              </div>
              <div className="px-5 py-4 text-muted max-[750px]:px-[18px] max-[750px]:py-[14px]">
                {row.impl}
              </div>
              <div className="px-5 py-4 text-[13px] text-accent max-[750px]:px-[18px] max-[750px]:py-[14px]">
                {row.value}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
