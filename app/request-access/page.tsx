import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Container, Kicker } from "@/components/ui";
import { RequestAccessForm } from "@/components/request-access-form";

export const metadata: Metadata = {
  title: "Request access — Privileged",
  description:
    "Tell us what you're trying to run. We'll help determine the appropriate private inference architecture for your legal workloads.",
  alternates: { canonical: "/request-access/" },
  openGraph: {
    title: "Request access — Privileged",
    description:
      "Tell us what you're trying to run. We'll help determine the appropriate private inference architecture.",
    type: "website",
    url: "https://privilegedinfra.com/request-access/",
  },
};

export default function RequestAccess() {
  return (
    <>
      <Nav />
      <main id="main">
        <Container className="pt-24 pb-24">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div>
              <Kicker>Request access</Kicker>
              <h1 className="max-w-[14ch] text-[clamp(34px,5vw,60px)] leading-[0.98] font-semibold tracking-[-0.04em] text-ink">
                Tell us what you&apos;re trying to{" "}
                <span className="text-accent">run.</span>
              </h1>
              <p className="mt-6 max-w-[46ch] text-[16.5px] leading-[1.6] text-muted">
                Early access is open to a limited set of law firms and
                legal-engineering teams. We&apos;ll help determine the
                appropriate private inference architecture — no minimum spend,
                one DPA.
              </p>
              <div className="mt-10 space-y-3 border-t border-line pt-8">
                {[
                  "Ephemeral, isolated execution",
                  "Static, controlled egress",
                  "Private & open models",
                  "Zero retention by default",
                ].map((t) => (
                  <div key={t} className="flex items-center gap-3 text-[14.5px] text-muted">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {t}
                  </div>
                ))}
              </div>
              <p className="mt-8 font-mono text-[11px] leading-[1.7] text-faint">
                Prefer email?{" "}
                <a
                  href="mailto:hello@privilegedinfra.com?subject=Privileged%20—%20Request%20access"
                  className="text-accent hover:underline"
                >
                  hello@privilegedinfra.com
                </a>
              </p>
            </div>

            <RequestAccessForm />
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
