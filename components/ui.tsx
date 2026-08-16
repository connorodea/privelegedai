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
}: {
  href: string;
  variant?: "primary" | "ghost";
  children: ReactNode;
  className?: string;
}) {
  const cls = variant === "primary" ? "btn-primary" : "btn-ghost";
  return (
    <a href={href} className={`${cls} ${className}`}>
      {children}
    </a>
  );
}

export function Card({
  icon,
  title,
  children,
  className = "",
}: {
  icon?: ReactNode;
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`card ${className}`}>
      {icon ? <div className="card-icon">{icon}</div> : null}
      {title ? (
        <h3 className="text-[15px] font-semibold tracking-[-0.01em]">{title}</h3>
      ) : null}
      <div className="mt-2.5 text-[13.5px] leading-[1.65] text-muted">
        {children}
      </div>
    </div>
  );
}

export function Kicker({ children }: { children: ReactNode }) {
  return <div className="kicker">{children}</div>;
}

export function SectionHeading({
  kicker,
  title,
  lede,
  id,
  align = "left",
}: {
  kicker: string;
  title: ReactNode;
  lede?: string;
  id?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <Kicker>{kicker}</Kicker>
      <h2
        id={id}
        className="max-w-[26ch] text-[clamp(26px,3.6vw,40px)] leading-[1.1] font-semibold tracking-[-0.03em]"
        style={align === "center" ? { marginInline: "auto" } : undefined}
      >
        {title}
      </h2>
      {lede ? (
        <p
          className="mt-4 max-w-[60ch] text-[15px] leading-[1.7] text-muted"
          style={align === "center" ? { marginInline: "auto" } : undefined}
        >
          {lede}
        </p>
      ) : null}
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-accent/25 bg-accent/5 px-3.5 py-1.5 font-mono text-[11px] tracking-[0.14em] uppercase text-accent">
      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
      {children}
    </span>
  );
}
