import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Container, Kicker, MonoLabel, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Use cases — Privileged",
  description:
    "How law firms, general counsel, and legal technology teams run private, ephemeral AI over sensitive data through one security boundary.",
  alternates: { canonical: "/use-cases/" },
  openGraph: {
    title: "Use cases — Privileged",
    description:
      "Private, ephemeral AI for law firms, general counsel, and legal technology teams.",
    type: "website",
    url: "https://privilegedinfra.com/use-cases/",
  },
};

const GROUPS = [
  {
    tag: "Law firms",
    title:
      "Run AI against privileged matter data without creating another uncontrolled data silo.",
    body: "Litigation and discovery teams get private inference over sensitive files, with execution that leaves no persistent session state behind.",
    points: [
      "Litigation & discovery analysis",
      "Document review & drafting",
      "Matter and precedent search",
      "Internal knowledge retrieval",
    ],
  },
  {
    tag: "General counsel",
    title: "Bring controlled AI infrastructure to internal legal workflows.",
    body: "Corporate legal and GC offices apply AI to contracts, investigations, and compliance under policy-governed, audited access.",
    points: [
      "Contract analysis & review",
      "Investigations & compliance",
      "Internal document intelligence",
      "Legal operations automation",
    ],
  },
  {
    tag: "Legal technology",
    title:
      "Build specialized legal AI without making every customer inherit your infrastructure complexity.",
    body: "Ship private inference with tenant isolation by construction, model choice, and one security boundary — behind an OpenAI-compatible API.",
    points: [
      "Private inference per customer",
      "Tenant isolation by construction",
      "Model choice & custom deployments",
      "White-label infrastructure",
    ],
  },
];

export default function UseCases() {
  return (
    <>
      <Nav />
      <main id="main">
        <Container className="pt-24 pb-12">
          <Kicker tone="accent">Use cases</Kicker>
          <h1 className="max-w-[22ch] text-[clamp(34px,5vw,58px)] leading-[1.04] font-semibold tracking-[-0.03em] text-ink">
            Built for the people accountable for the data.
          </h1>
          <p className="mt-5 max-w-[58ch] text-[16px] leading-[1.6] text-muted">
            Three audiences, one security boundary: ephemeral execution, static
            egress, private models, and zero-retention by default.
          </p>
        </Container>

        <Container className="pb-24">
          <div className="grid gap-4 lg:gap-5">
            {GROUPS.map((g, i) => (
              <div
                key={g.tag}
                className="surface-card grid gap-8 p-8 md:grid-cols-[0.9fr_1.1fr] md:p-10"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[12px] text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <MonoLabel>{g.tag}</MonoLabel>
                  </div>
                  <h2 className="mt-5 max-w-[20ch] text-[clamp(22px,2.6vw,32px)] leading-[1.08] font-semibold tracking-[-0.02em] text-ink">
                    {g.title}
                  </h2>
                  <p className="mt-4 max-w-[46ch] text-[14.5px] leading-[1.6] text-muted">
                    {g.body}
                  </p>
                </div>
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
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <Button
              href="mailto:hello@privilegedinfra.com?subject=Privileged%20—%20Request%20access"
              arrow
            >
              Request access
            </Button>
            <Button href="/#architecture" variant="ghost">
              Explore architecture
            </Button>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
