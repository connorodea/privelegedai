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
}: {
  icon?: ReactNode;
  title?: string;
  children: ReactNode;
}) {
  return (
    <div className="card">
      {icon ? <div className="card-icon">{icon}</div> : null}
      {title ? (
        <h3 className="font-serif text-[19px] font-medium">{title}</h3>
      ) : null}
      <div className="mt-[10px] text-sm leading-[1.65] text-muted">{children}</div>
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
        className="max-w-[22ch] font-serif text-[clamp(28px,4.2vw,46px)] leading-[1.1] font-normal tracking-[-0.015em]"
        style={align === "center" ? { marginInline: "auto" } : undefined}
      >
        {title}
      </h2>
      {lede ? (
        <p
          className="mt-5 max-w-[56ch] text-[16.5px] leading-[1.7] text-muted"
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
    <span className="mb-[30px] inline-flex items-center gap-[9px] rounded-full border border-accent/25 px-[15px] py-[7px] font-mono text-xs tracking-[0.14em] uppercase text-accent">
      <span className="h-[5px] w-[5px] animate-pulse rounded-full bg-accent" />
      {children}
    </span>
  );
}
