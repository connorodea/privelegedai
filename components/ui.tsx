import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`wrap ${className}`}>{children}</div>;
}

export function Button({
  href,
  variant = "primary",
  children,
  className = "",
  arrow = false,
}: {
  href: string;
  variant?: "primary" | "ghost";
  children: ReactNode;
  className?: string;
  arrow?: boolean;
}) {
  const cls = variant === "primary" ? "btn-primary" : "btn-ghost";
  return (
    <a href={href} className={`${cls} ${className}`}>
      {children}
      {arrow ? (
        <span
          aria-hidden="true"
          className={`grid h-4 w-4 place-items-center rounded-full text-[10px] ${
            variant === "primary" ? "bg-[#0a0c0f] text-white" : "bg-white/10"
          }`}
        >
          →
        </span>
      ) : null}
    </a>
  );
}

export function StatusDot({
  tone = "signal",
  className = "",
}: {
  tone?: "signal" | "accent" | "warn" | "critical" | "muted";
  className?: string;
}) {
  const color =
    tone === "signal"
      ? "bg-signal"
      : tone === "accent"
        ? "bg-accent"
        : tone === "warn"
          ? "bg-warn"
          : tone === "critical"
            ? "bg-critical"
            : "bg-faint";
  return (
    <span className={`relative inline-flex h-1.5 w-1.5 ${className}`}>
      <span
        className={`absolute inline-flex h-full w-full rounded-full ${color} opacity-60 animate-pulse-dot`}
      />
      <span className={`relative inline-flex h-1.5 w-1.5 rounded-full ${color}`} />
    </span>
  );
}

export function MonoLabel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`font-mono text-[10.5px] uppercase tracking-[0.16em] text-faint ${className}`}
    >
      {children}
    </span>
  );
}

export function Kicker({
  children,
  tone = "muted",
}: {
  children: ReactNode;
  tone?: "muted" | "accent";
}) {
  return (
    <div className="kicker">
      <StatusDot tone={tone === "accent" ? "accent" : "muted"} />
      {children}
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-line2 bg-white/[0.03] px-3.5 py-1.5 font-mono text-[11px] tracking-[0.16em] uppercase text-muted">
      <StatusDot tone="accent" />
      {children}
    </span>
  );
}

export function SectionHeading({
  kicker,
  title,
  lede,
  id,
  align = "left",
  kickerTone = "muted",
}: {
  kicker: string;
  title: ReactNode;
  lede?: ReactNode;
  id?: string;
  align?: "left" | "center";
  kickerTone?: "muted" | "accent";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-[52ch] text-center" : ""}>
      <Kicker tone={kickerTone}>{kicker}</Kicker>
      <h2
        id={id}
        className="max-w-[24ch] text-[clamp(30px,4.6vw,54px)] leading-[1.04] font-semibold tracking-[-0.03em] text-ink"
        style={align === "center" ? { marginInline: "auto" } : undefined}
      >
        {title}
      </h2>
      {lede ? (
        <p
          className="mt-5 max-w-[62ch] text-[16px] leading-[1.6] text-muted"
          style={align === "center" ? { marginInline: "auto" } : undefined}
        >
          {lede}
        </p>
      ) : null}
    </div>
  );
}
