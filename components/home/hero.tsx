"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Button, Container, Eyebrow, StatusDot, Serif } from "@/components/ui";
import { useLifecycle } from "@/lib/lifecycle";

const RuntimeOrb = dynamic(() => import("@/components/three/runtime-orb"), {
  ssr: false,
  loading: () => <OrbFallback />,
});

function OrbFallback() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 grid place-items-center"
    >
      <div className="h-[62%] w-[62%] rounded-full bg-[radial-gradient(circle_at_50%_40%,rgba(79,195,255,0.35),rgba(12,20,32,0.6)_45%,transparent_70%)] blur-[2px] breathe" />
      <div className="absolute h-[26%] w-[26%] rounded-full bg-[radial-gradient(circle,rgba(143,227,255,0.9),rgba(79,195,255,0.2)_70%)]" />
    </div>
  );
}

const CHIPS = [
  "ZERO RETENTION BY DEFAULT",
  "STATIC EGRESS",
  "PRIVATE MODELS",
  "ONE SECURITY BOUNDARY",
];

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const on = () => setReduced(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return reduced;
}

export function Hero() {
  const { phase } = useLifecycle(true);
  const reduced = useReducedMotion();

  const toneClass =
    phase.tone === "signal"
      ? "text-signal"
      : phase.tone === "accent"
        ? "text-accent"
        : "text-faint";

  return (
    <header className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      {/* ambient depth */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="fluting absolute inset-0 opacity-70" />
        <div className="absolute top-[-15%] right-[-5%] h-[560px] w-[880px] bg-[radial-gradient(ellipse,rgba(79,195,255,0.10)_0%,transparent_62%)]" />
        <div className="absolute bottom-[-25%] left-[-15%] h-[560px] w-[760px] bg-[radial-gradient(ellipse,rgba(27,110,168,0.10)_0%,transparent_60%)]" />
      </div>

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          {/* left: copy */}
          <div>
            <Eyebrow>Private AI infrastructure for legal</Eyebrow>
            <h1 className="max-w-[16ch] text-[clamp(42px,6.4vw,82px)] leading-[0.98] font-semibold tracking-[-0.04em] text-ink">
              Ephemeral by default.
              <br />
              <Serif className="text-muted">Privileged by design.</Serif>
            </h1>
            <p className="mt-7 max-w-[54ch] text-[17px] leading-[1.6] text-muted">
              Run AI over privileged data in isolated, ephemeral compute.
              Requests execute in protected environments, exit through
              controlled static egress, and leave no persistent session state
              behind.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button
                href="mailto:hello@privilegedinfra.com?subject=Privileged%20—%20Request%20access"
                arrow
              >
                Request access
              </Button>
              <Button href="#architecture" variant="ghost">
                Explore architecture
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-5 gap-y-2">
              {CHIPS.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center gap-2 font-mono text-[10.5px] tracking-[0.14em] text-faint"
                >
                  <StatusDot tone="accent" />
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* right: signature runtime enclosure + telemetry */}
          <div className="relative">
            <div className="surface-card rim-glow relative overflow-hidden rounded-[20px] bg-[#0a0e14]">
              <div className="flex items-center justify-between border-b border-line px-5 py-3">
                <span className="font-mono text-[11px] tracking-[0.14em] text-faint">
                  PRIVILEGED RUNTIME
                </span>
                <span className="inline-flex items-center gap-2 font-mono text-[11px]">
                  <StatusDot tone={phase.tone} />
                  <span className={toneClass}>{phase.status}</span>
                </span>
              </div>

              {/* 3D canvas */}
              <div className="relative aspect-[4/3.1] w-full">
                <div className="grid-bg absolute inset-0 opacity-40" aria-hidden="true" />
                {reduced ? <OrbFallback /> : <RuntimeOrb phase={phase.key} />}
                {/* phase caption */}
                <div className="pointer-events-none absolute bottom-4 left-5">
                  <div className="font-mono text-[10.5px] tracking-[0.14em] text-faint">
                    {phase.step === "—" ? "" : `${phase.step} ·`} {phase.label.toUpperCase()}
                  </div>
                </div>
              </div>

              {/* telemetry rows */}
              <div className="grid grid-cols-3 divide-x divide-line border-t border-line font-mono text-[11px]">
                {phase.lines.map(([k, v]) => (
                  <div key={k} className="px-4 py-3">
                    <div className="text-[10px] tracking-[0.12em] text-faint uppercase">
                      {k}
                    </div>
                    <div className="mt-1 truncate text-ink" title={v}>
                      {v}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-3 text-center font-mono text-[10px] tracking-[0.12em] text-faint">
              PRODUCT VISUALIZATION · ILLUSTRATIVE VALUES
            </p>
          </div>
        </div>
      </Container>
    </header>
  );
}
