import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="border-t border-line py-12 pb-16">
      <div className="wrap flex flex-wrap items-center justify-between gap-6">
        <div className="font-serif text-[19px] font-medium">
          <Logo />
        </div>
        <div className="text-[13px] text-muted">
          AI infrastructure for law &nbsp;·&nbsp;{" "}
          <a
            href="mailto:hello@privilegedinfra.com?subject=Privileged%20—%20Contact"
            className="text-muted hover:text-ink"
          >
            hello@privilegedinfra.com
          </a>
          <br />© 2026 Privileged Infra. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
