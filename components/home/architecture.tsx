import type { ReactNode } from "react";
import { Container, SectionHeading } from "@/components/ui";

function NodeIcon({ children }: { children: ReactNode }) {
  return (
    <svg
      className="h-4 w-4 text-accent"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const NODES = [
  {
    tag: "Client",
    name: "Legal app",
    sub: "Tokenized requests over TLS",
    highlight: false,
    icon: (
      <NodeIcon>
        <rect x="1" y="1" width="14" height="12" rx="2" />
        <path d="M5 13l2 2 4-5" />
      </NodeIcon>
    ),
  },
  {
    tag: "Gateway",
    name: "Router",
    sub: "Spawns ephemeral container",
    highlight: false,
    icon: (
      <NodeIcon>
        <circle cx="8" cy="8" r="3" />
        <path d="M8 1v4m0 6v4M1 8h4m6 0h4" />
      </NodeIcon>
    ),
  },
  {
    tag: "Compute",
    name: "Ephemeral inference",
    sub: "LoRA weights hot-swapped in ms",
    highlight: true,
    icon: (
      <NodeIcon>
        <path d="M4 5h8M4 8h6M4 11h4" />
      </NodeIcon>
    ),
  },
  {
    tag: "Egress",
    name: "Static-IP NAT",
    sub: "Fixed, whitelisted addresses",
    highlight: false,
    icon: (
      <NodeIcon>
        <path d="M12 12l4-4-4-4m4 4H0" />
      </NodeIcon>
    ),
  },
];

export function Architecture() {
  return (
    <section id="architecture" className="section">
      <Container>
        <SectionHeading
          kicker="Architecture"
          title="Short-lived, static-egress, and gone on stream close."
          lede="Every request runs in an ephemeral container that exits through a fixed, high-availability NAT gateway. Decommissioned the instant the token stream closes."
        />
        <div className="mt-12 rounded-[14px] border border-line bg-surface px-8 py-10">
          <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-[14px] max-[900px]:grid-cols-1">
            {NODES.map((node, i) => (
              <div key={node.name} className="contents">
                {i > 0 ? (
                  <div className="font-mono text-base text-faint max-[900px]:rotate-90 max-[900px]:text-center">
                    →
                  </div>
                ) : null}
                <div
                  className={`rounded-[10px] border p-[18px_16px] ${
                    node.highlight
                      ? "border-accent/35 bg-accent/[0.03]"
                      : "border-line bg-bg2"
                  }`}
                >
                  <div className="font-mono text-[10.5px] tracking-[0.08em] uppercase text-muted">
                    {node.tag}
                  </div>
                  <div
                    className={`mt-[6px] flex items-center gap-2 font-serif text-[17px] font-medium ${
                      node.highlight ? "text-accent" : ""
                    }`}
                  >
                    {node.icon}
                    {node.name}
                  </div>
                  <div className="mt-1 text-xs leading-[1.5] text-muted">
                    {node.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3 max-[900px]:grid-cols-1">
            <div className="rounded-[10px] border border-dashed border-line p-[15px_16px] text-center text-[13.5px] text-muted">
              <b className="font-medium text-ink">Partner legal data</b> — case
              law, dockets, regulatory feeds
            </div>
            <div className="rounded-[10px] border border-dashed border-line p-[15px_16px] text-center text-[13.5px] text-muted">
              <b className="font-medium text-ink">Client private VPC</b> — your
              network, your firewall rules
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
