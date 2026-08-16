import Link from "next/link";
import { Logo } from "./logo";
import { Button } from "./ui";

const LINKS = [
  { href: "/#product", label: "Product", hideBelow: "min-[800px]" },
  { href: "/#security", label: "Security", hideBelow: "min-[800px]" },
  { href: "/#architecture", label: "Architecture", hideBelow: "min-[800px]" },
  { href: "/pricing", label: "Pricing", hideBelow: "min-[480px]" },
  { href: "/docs", label: "Docs", hideBelow: "min-[480px]" },
];

export function Nav() {
  return (
    <nav
      aria-label="Main"
      className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md"
    >
      <div className="wrap flex h-[66px] items-center justify-between">
        <Link
          href="/"
          aria-label="Privileged home"
          className="font-serif text-xl font-medium tracking-[-0.01em]"
        >
          <Logo className="text-[22px]" />
        </Link>
        <div className="flex items-center gap-4 min-[480px]:gap-5 min-[800px]:gap-7">
          {LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className={`hidden ${l.hideBelow}:inline text-[13.5px] text-muted transition-colors hover:text-ink`}
            >
              {l.label}
            </Link>
          ))}
          <Button
            href="mailto:hello@privilegedinfra.com?subject=Privileged%20—%20Early%20Access"
            className="px-[18px] py-2 text-[13px]"
          >
            Request access
          </Button>
        </div>
      </div>
    </nav>
  );
}
