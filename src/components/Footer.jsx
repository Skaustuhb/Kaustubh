import { useState } from "react";
import { profile } from "../data";
import { FadeIn } from "./MotionWrapper";
import { Github, Linkedin } from "./SocialIcons";
import { Mail, Phone, Copy, Check, ArrowUpRight, Terminal } from "lucide-react";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="border-t border-ink-700/80 bg-ink-950 relative pt-20 pb-12">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn direction="up">
          <div className="rounded-2xl border border-sync/30 bg-gradient-to-br from-ink-900 via-ink-900 to-ink-950 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            {/* Ambient background glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-sync/10 blur-[80px]" />

            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-sync flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-sync animate-pulse" />
              Direct Engagement
            </p>

            <h2 className="mt-4 max-w-3xl font-display text-3xl sm:text-5xl font-bold leading-tight text-mist-100">
              Ready to elevate your ERPNext architecture & multi-site pipeline?
            </h2>

            <p className="mt-4 max-w-xl text-base text-mist-300">
              Available for full-time roles, solution architecture consulting, and enterprise ERPNext implementations.
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="focus-ring flex items-center gap-2 rounded-md bg-sync px-6 py-3 font-mono text-sm font-bold text-ink-950 transition-all hover:bg-sync/90 hover:shadow-[0_0_20px_rgba(61,217,179,0.3)]"
              >
                <Mail className="h-4 w-4" />
                <span>{profile.email}</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="focus-ring flex items-center gap-2 rounded-md border border-ink-600 bg-ink-900 px-5 py-3 font-mono text-sm text-mist-100 transition-colors hover:border-sync hover:text-sync"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-sync" />
                    <span className="text-sync">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>

              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="focus-ring flex items-center gap-2 rounded-md border border-ink-700 bg-ink-950 px-5 py-3 font-mono text-sm text-mist-300 transition-colors hover:border-sync hover:text-sync"
              >
                <Phone className="h-4 w-4 text-sync" />
                <span>{profile.phone}</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-ink-800/80 pt-6 font-mono text-xs uppercase tracking-wider text-mist-400">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-sync transition-colors focus-ring"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
                <ArrowUpRight className="h-3 w-3" />
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-sync transition-colors focus-ring"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
                <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>
          </div>
        </FadeIn>

        {/* Bottom copyright */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-ink-800/80 pt-8 font-mono text-xs text-mist-400 sm:flex-row">
          <div className="flex items-center gap-2">
            <Terminal className="h-4 w-4 text-sync" />
            <span>{profile.name} &middot; {profile.location}</span>
          </div>
          <span>&copy; {new Date().getFullYear()} — Executive Portfolio &middot; React 19 &amp; Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
}
