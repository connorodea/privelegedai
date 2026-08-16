import Link from "next/link";
import { Logo } from "./logo";
import { Button } from "./ui";

const LINKS = [
  { href: "/#product", label: "Product" },
  { href: "/#security", label: "Security" },
  { href: "/#architecture", label: "Architecture" },
  { href: "/pricing", label: "Pricing" },
  { href: "/docs", label: "Docs" },
];

export function Nav() {
  return (
    <nav
      aria-label="Main"
      className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-xl"
    >
      <div className="wrap flex h-16 items-center justify-between">
        <Link
          href="/"
          aria-label="Privileged home"
          className="flex items-center gap-2"
        >
          <Logo className="text-[19px] tracking-[-0.01em]" />
        </Link>
        <div className="hidden items-center gap-7 sm:flex">
          {LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-[13px] text-muted transition-colors hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
        </div>
        <Button
          href="mailto:hello@privilegedinfra.com?subject=Privileged%20—%20Early%20Access"
          className="px-4 py-1.5 text-[12.5px]"
        >
          Request access
        </Button>
      </div>
    </nav>
  );
}
