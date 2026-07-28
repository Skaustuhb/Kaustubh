import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Menu, X, ArrowUpRight } from "lucide-react";
import { Github, Linkedin } from "./SocialIcons";
import { profile } from "../data";

const LINKS = [
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Log & Career" },
  { href: "#projects", label: "Projects" },
  { href: "#focus", label: "Focus" },
  { href: "#contact", label: "Contact" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section scrollSpy
      const sections = LINKS.map((link) => link.href.substring(1));
      const current = sections.find((sec) => {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) setActiveSection(`#${current}`);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-ink-600/80 bg-ink-950/85 backdrop-blur-md shadow-lg shadow-black/40 py-3"
          : "border-b border-ink-800/50 bg-ink-950/40 backdrop-blur-sm py-4"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        {/* Brand logo */}
        <a
          href="#top"
          className="group flex items-center gap-2.5 font-mono text-sm tracking-tight text-mist-100 focus-ring"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-md border border-sync/30 bg-sync/10 text-sync transition-colors group-hover:border-sync group-hover:bg-sync/20">
            <Terminal className="h-4 w-4" />
          </div>
          <span className="font-semibold">
            kaustubh<span className="text-sync">.sharma</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 font-mono text-xs uppercase tracking-wider text-mist-300 md:flex">
          {LINKS.map((l) => {
            const isActive = activeSection === l.href;
            return (
              <a
                key={l.href}
                href={l.href}
                className={`relative py-1 transition-colors hover:text-sync focus-ring ${
                  isActive ? "text-sync font-medium" : "text-mist-300"
                }`}
              >
                {l.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-sync"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action button & Social links */}
        <div className="hidden items-center gap-4 md:flex">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="text-mist-400 hover:text-sync transition-colors p-1"
            aria-label="GitHub Profile"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-mist-400 hover:text-sync transition-colors p-1"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="focus-ring flex items-center gap-1.5 rounded-md border border-sync/40 bg-sync/10 px-4 py-2 font-mono text-xs font-medium text-sync transition-all hover:bg-sync hover:text-ink-950 hover:shadow-[0_0_15px_rgba(61,217,179,0.3)]"
          >
            <span>Get In Touch</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="flex h-9 w-9 items-center justify-center rounded-md border border-ink-600 bg-ink-900 text-mist-100 md:hidden focus-ring"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5 text-sync" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-b border-ink-600 bg-ink-950/95 px-6 py-5 md:hidden backdrop-blur-xl"
          >
            <nav className="flex flex-col gap-3 font-mono text-sm uppercase tracking-wider text-mist-300">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="flex items-center justify-between rounded-md px-3 py-2 transition-colors hover:bg-ink-800 hover:text-sync"
                  onClick={() => setOpen(false)}
                >
                  <span>{l.label}</span>
                  <ArrowUpRight className="h-4 w-4 text-mist-400" />
                </a>
              ))}
              <div className="mt-4 pt-4 border-t border-ink-800 flex items-center justify-between">
                <div className="flex gap-4">
                  <a href={profile.github} target="_blank" rel="noreferrer" className="text-mist-300 hover:text-sync">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-mist-300 hover:text-sync">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
                <a
                  href={`mailto:${profile.email}`}
                  className="rounded bg-sync px-4 py-2 text-xs font-semibold text-ink-950"
                  onClick={() => setOpen(false)}
                >
                  Hire / Consult
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
