"use client";

import { useEffect, useState } from "react";

// Canonical operational model from the product spec:
// Request → Authenticate → Authorize → Provision → Isolate → Execute → Stream → Audit → Destroy
export type LifecyclePhase =
  | "idle"
  | "authenticate"
  | "authorize"
  | "provision"
  | "isolate"
  | "execute"
  | "stream"
  | "audit"
  | "destroy";

export interface PhaseInfo {
  key: LifecyclePhase;
  step: string; // 00..
  label: string;
  status: string; // short state word
  tone: "muted" | "accent" | "signal";
  ms: number; // dwell time
  lines: [string, string][]; // [key, value] telemetry rows
}

export const PHASES: PhaseInfo[] = [
  {
    key: "idle",
    step: "—",
    label: "Awaiting request",
    status: "IDLE",
    tone: "muted",
    ms: 1600,
    lines: [
      ["gateway", "api.privilegedinfra.com"],
      ["endpoint", "/v1/chat/completions"],
      ["runtime", "none"],
    ],
  },
  {
    key: "authenticate",
    step: "01",
    label: "Authenticate",
    status: "VERIFYING",
    tone: "accent",
    ms: 1300,
    lines: [
      ["key", "pi_live_••••7a3f"],
      ["org", "org_01JR…"],
      ["tls", "1.3"],
    ],
  },
  {
    key: "authorize",
    step: "02",
    label: "Authorize · policy",
    status: "EVALUATING",
    tone: "accent",
    ms: 1300,
    lines: [
      ["scope", "runtime.execute"],
      ["policy", "privileged-default"],
      ["egress", "DENY unless allowed"],
    ],
  },
  {
    key: "provision",
    step: "03",
    label: "Provision runtime",
    status: "SCHEDULING",
    tone: "accent",
    ms: 1500,
    lines: [
      ["region", "us-east"],
      ["provider", "neutral · scheduled"],
      ["disk", "DISABLED"],
    ],
  },
  {
    key: "isolate",
    step: "04",
    label: "Isolate environment",
    status: "ISOLATED",
    tone: "accent",
    ms: 1400,
    lines: [
      ["tenant", "single · dedicated"],
      ["root fs", "read-only"],
      ["scratch", "tmpfs · RAM"],
    ],
  },
  {
    key: "execute",
    step: "05",
    label: "Execute inference",
    status: "ACTIVE",
    tone: "signal",
    ms: 1500,
    lines: [
      ["model", "privileged/legal-large"],
      ["context", "in-memory only"],
      ["state", "EXECUTING"],
    ],
  },
  {
    key: "stream",
    step: "06",
    label: "Stream · controlled egress",
    status: "STREAMING",
    tone: "signal",
    ms: 1700,
    lines: [
      ["tokens", "streaming →"],
      ["egress", "static IP · fixed"],
      ["persisted", "0 B"],
    ],
  },
  {
    key: "audit",
    step: "07",
    label: "Audit · metadata only",
    status: "RECORDED",
    tone: "accent",
    ms: 1300,
    lines: [
      ["record", "request_id · tokens · latency"],
      ["payload", "not captured"],
      ["log", "append-only"],
    ],
  },
  {
    key: "destroy",
    step: "08",
    label: "Destroy runtime",
    status: "TERMINATED",
    tone: "signal",
    ms: 1900,
    lines: [
      ["runtime", "destroyed"],
      ["memory", "released"],
      ["retained", "0 B"],
    ],
  },
];

export function useLifecycle(active = true) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (!active) return;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // On reduced motion, settle on the signature "execute" frame and don't loop.
    if (reduce) {
      setI(PHASES.findIndex((p) => p.key === "execute"));
      return;
    }
    const t = setTimeout(
      () => setI((v) => (v + 1) % PHASES.length),
      PHASES[i].ms,
    );
    return () => clearTimeout(t);
  }, [i, active]);

  return { phase: PHASES[i], index: i, phases: PHASES };
}
