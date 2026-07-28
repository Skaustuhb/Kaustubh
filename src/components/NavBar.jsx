import { useEffect, useState } from "react";

const LINKS = [
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Log" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-ink-600 bg-ink-900/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm text-mist-100 focus-ring">
          <span className="text-sync">$</span> kaustubh<span className="text-mist-400">.sharma</span>
        </a>

        <nav className="hidden gap-8 font-mono text-xs uppercase tracking-wider text-mist-300 md:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-sync focus-ring">
              {l.label}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden font-mono text-xs uppercase tracking-wider text-mist-100 focus-ring"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          {open ? "close" : "menu"}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-ink-600 bg-ink-900 px-6 py-4 font-mono text-sm uppercase tracking-wider text-mist-300 md:hidden">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="py-2 hover:text-sync focus-ring"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
