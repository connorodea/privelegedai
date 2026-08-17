"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Container, MonoLabel, Serif } from "@/components/ui";

const Crystal = dynamic(() => import("@/components/three/crystal"), {
  ssr: false,
  loading: () => <CrystalFallback />,
});

function CrystalFallback() {
  return (
    <div aria-hidden="true" className="absolute inset-0 grid place-items-center">
      <div className="h-[46%] w-[46%] rounded-[38%] bg-[radial-gradient(circle_at_40%_35%,rgba(159,224,255,0.5),rgba(27,110,168,0.15)_55%,transparent_72%)] blur-[2px] breathe" />
    </div>
  );
}

function useReducedMotion() {
  const [r, setR] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setR(mq.matches);
    const on = () => setR(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return r;
}

export function CrystalSection() {
  const reduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-t border-line">
      {/* full-bleed 3D backdrop */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="fluting absolute inset-0 opacity-40" />
        <div className="absolute inset-0">
          {reduced ? <CrystalFallback /> : <Crystal />}
        </div>
        {/* vignette so text stays legible over the 3D */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(7,8,9,0.75)_100%)]" />
      </div>

      <Container className="relative py-28 md:py-40">
        <div className="mx-auto max-w-[46ch] text-center">
          <MonoLabel>The execution boundary</MonoLabel>
          <h2 className="mt-6 text-[clamp(32px,5vw,64px)] leading-[1.02] font-semibold tracking-[-0.035em] text-ink">
            A protected space that <Serif>appears</Serif>, does the work, and{" "}
            <Serif>disappears.</Serif>
          </h2>
          <p className="mx-auto mt-6 max-w-[52ch] text-[16px] leading-[1.6] text-muted">
            Every privileged request runs inside a boundary that exists only for
            the length of the work. When the session ends, the environment and
            everything in it are gone.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-2 font-mono text-[10.5px] tracking-[0.14em] text-faint">
            <span>APPEAR</span>
            <span className="text-accent">·</span>
            <span>EXECUTE</span>
            <span className="text-accent">·</span>
            <span>PROVE</span>
            <span className="text-accent">·</span>
            <span className="text-signal">DESTROY</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
