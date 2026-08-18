"use client";

import { useState, type FormEvent } from "react";

const ENDPOINT = "https://privileged-inquiry.connorodea.workers.dev";

type Status = "idle" | "submitting" | "ok" | "error";

const FIELDS = [
  { name: "name", label: "Name", type: "text", required: true, autoComplete: "name", half: true },
  { name: "email", label: "Work email", type: "email", required: true, autoComplete: "email", half: true },
  { name: "org", label: "Organization", type: "text", required: true, autoComplete: "organization", half: true },
  { name: "role", label: "Role", type: "text", required: false, autoComplete: "organization-title", half: true },
] as const;

export function RequestAccessForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (res.ok && body.ok) {
        setStatus("ok");
        form.reset();
      } else {
        setStatus("error");
        setError(body.error || "Something went wrong. Email us at hello@privilegedinfra.com.");
      }
    } catch {
      setStatus("error");
      setError("Network error. Email us at hello@privilegedinfra.com.");
    }
  }

  if (status === "ok") {
    return (
      <div className="surface-card p-8 md:p-10">
        <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] text-signal">
          <span className="h-1.5 w-1.5 rounded-full bg-signal" />
          RECEIVED
        </div>
        <h2 className="mt-5 text-[26px] font-semibold tracking-[-0.02em] text-ink">
          Thanks — we&apos;ll be in touch.
        </h2>
        <p className="mt-3 max-w-[46ch] text-[15px] leading-[1.6] text-muted">
          We read every request. Expect a reply from a person, not a
          sequence — usually within a couple of business days.
        </p>
      </div>
    );
  }

  const inputCls =
    "w-full rounded-[3px] border border-line2 bg-[#0b0e13] px-3.5 py-2.5 text-[15px] text-ink placeholder-faint outline-none transition-colors focus:border-accent";
  const labelCls = "mb-2 block font-mono text-[10.5px] uppercase tracking-[0.16em] text-faint";

  return (
    <form onSubmit={onSubmit} className="surface-card p-6 md:p-8" noValidate>
      {/* honeypot */}
      <div aria-hidden="true" className="absolute -left-[9999px]">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {FIELDS.map((f) => (
          <div key={f.name} className={f.half ? "" : "sm:col-span-2"}>
            <label htmlFor={f.name} className={labelCls}>
              {f.label} {f.required ? <span className="text-accent">*</span> : null}
            </label>
            <input
              id={f.name}
              name={f.name}
              type={f.type}
              required={f.required}
              autoComplete={f.autoComplete}
              className={inputCls}
            />
          </div>
        ))}

        <div className="sm:col-span-2">
          <label htmlFor="useCase" className={labelCls}>
            What are you trying to run?
          </label>
          <input
            id="useCase"
            name="useCase"
            type="text"
            placeholder="e.g. private inference over privileged matter data"
            className={inputCls}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="workload" className={labelCls}>
            Estimated workload <span className="text-faint">(optional)</span>
          </label>
          <input
            id="workload"
            name="workload"
            type="text"
            placeholder="e.g. tokens/month, concurrency, models"
            className={inputCls}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelCls}>
            Anything else <span className="text-faint">(optional)</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className={`${inputCls} resize-y`}
          />
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-primary disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Request access"}
          <span
            aria-hidden="true"
            className="grid h-4 w-4 place-items-center rounded-full bg-[#0a0c0f] text-[10px] text-white"
          >
            →
          </span>
        </button>
        <p className="font-mono text-[10.5px] tracking-[0.12em] text-faint">
          NO MINIMUM SPEND · ONE DPA
        </p>
      </div>

      {status === "error" ? (
        <p role="alert" className="mt-4 text-[13.5px] text-critical">
          {error}
        </p>
      ) : null}
    </form>
  );
}
