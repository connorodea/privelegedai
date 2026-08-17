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
        <div className="mt-12 rounded-lg border border-line bg-surface px-6 py-8">
          <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-3 max-[900px]:grid-cols-1">
            {NODES.map((node, i) => (
              <div key={node.name} className="contents">
                {i > 0 ? (
                  <div className="text-center font-mono text-faint max-[900px]:rotate-90">
                    →
                  </div>
                ) : null}
                <div
                  className={`rounded-lg border p-4 shadow-[0_1px_2px_rgba(1,1,30,0.03)] ${
                    node.highlight
                      ? "border-accent/40 bg-accent/5"
                      : "border-line bg-white"
                  }`}
                >
                  <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-faint">
                    {node.tag}
                  </div>
                  <div className="mt-1.5 flex items-center gap-2 text-[14px] font-medium text-ink">
                    {node.icon}
                    {node.name}
                  </div>
                  <div className="mt-1 text-[11.5px] leading-[1.5] text-muted">
                    {node.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 grid grid-cols-2 gap-3 max-[900px]:grid-cols-1">
            <div className="rounded-lg border border-dashed border-line2 p-3 text-center text-[12.5px] text-muted">
              <b className="font-medium text-ink">Partner legal data</b> — case
              law, dockets, regulatory feeds
            </div>
            <div className="rounded-lg border border-dashed border-line2 p-3 text-center text-[12.5px] text-muted">
              <b className="font-medium text-ink">Client private VPC</b> — your
              network, your firewall rules
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
