"use client";

import { useState, type KeyboardEvent } from "react";
import { Container, SectionHeading } from "@/components/ui";

const GROUPS = [
  {
    id: "firms",
    tab: "Law firms",
    title:
      "Run AI against privileged matter data without creating another uncontrolled data silo.",
    points: [
      "Litigation & discovery analysis",
      "Document review & drafting",
      "Matter and precedent search",
      "Internal knowledge retrieval",
      "Private inference over sensitive files",
    ],
  },
  {
    id: "gc",
    tab: "General counsel",
    title: "Bring controlled AI infrastructure to internal legal workflows.",
    points: [
      "Contract analysis & review",
      "Investigations & compliance",
      "Internal document intelligence",
      "Legal operations automation",
      "Policy-governed access",
    ],
  },
  {
    id: "legaltech",
    tab: "Legal technology",
    title:
      "Build specialized legal AI without making every customer inherit your infrastructure complexity.",
    points: [
      "Private inference per customer",
      "Tenant isolation by construction",
      "Model choice & custom deployments",
      "White-label infrastructure",
      "One API, one security boundary",
    ],
  },
];

export function UseCases() {
  const [active, setActive] = useState(0);

  const onKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const d = e.key === "ArrowRight" ? 1 : -1;
    setActive((i + d + GROUPS.length) % GROUPS.length);
  };

  const g = GROUPS[active];

  return (
    <section id="use-cases" className="section">
      <Container>
        <SectionHeading
          kicker="Use cases"
          title="Built for the people accountable for the data."
        />

        <div
          className="mt-10 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Audiences"
        >
          {GROUPS.map((group, i) => (
            <button
              key={group.id}
              role="tab"
              type="button"
              aria-selected={active === i}
              tabIndex={active === i ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={(e) => onKey(e, i)}
              className={`cursor-pointer rounded-full border px-4 py-2 font-mono text-[12px] tracking-[0.06em] transition-colors ${
                active === i
                  ? "border-accent/50 bg-accent/[0.08] text-ink"
                  : "border-line2 text-muted hover:border-line3 hover:text-ink"
              }`}
            >
              {group.tab}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-8 border-t border-line pt-10 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
          <h3 className="max-w-[20ch] text-[clamp(24px,3.4vw,40px)] leading-[1.06] font-semibold tracking-[-0.03em] text-ink">
            {g.title}
          </h3>
          <ul className="grid content-center gap-2.5">
            {g.points.map((p) => (
              <li
                key={p}
                className="flex items-center gap-3 text-[14.5px] text-muted"
              >
                <span className="h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
