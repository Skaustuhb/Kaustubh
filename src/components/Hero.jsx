import { useState } from "react";
import { profile } from "../data";
import { FadeIn } from "./MotionWrapper";
import { Github, Linkedin } from "./SocialIcons";
import {
  MapPin,
  Mail,
  Phone,
  ArrowRight,
  Copy,
  Check,
  Activity,
  ShieldCheck
} from "lucide-react";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="top" className="relative overflow-hidden mx-auto max-w-6xl px-6 pb-24 pt-16 md:pt-24">
      {/* Ambient background glow accents */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-sync/10 blur-[100px] pulse-glow" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-amber/5 blur-[120px]" />

      <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
        {/* Left: Identity & Executive Brief */}
        <div>
          <FadeIn direction="up" delay={0.1}>
            <div className="inline-flex items-center gap-2 rounded-full border border-sync/30 bg-sync/10 px-3.5 py-1.5 font-mono text-xs font-medium text-sync">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sync opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-sync"></span>
              </span>
              <span>{profile.status}</span>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-mist-100 sm:text-6xl lg:text-6xl leading-[1.1]">
              {profile.name}
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <p className="mt-3 font-display text-xl text-mist-300 sm:text-2xl flex items-center gap-2">
              <span className="text-mist-100 font-semibold">{profile.role}</span>
              <span className="cursor-blink text-sync font-mono font-bold">_</span>
            </p>
            <p className="mt-1.5 font-mono text-xs text-mist-400 tracking-wide uppercase">
              {profile.subrole}
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-mist-300">
              {profile.summary}
            </p>
          </FadeIn>

          {/* Quick Metrics Bar */}
          <FadeIn direction="up" delay={0.5}>
            <div className="mt-8 grid grid-cols-3 gap-3 border-y border-ink-700/80 py-4 max-w-xl">
              {profile.stats.map((stat, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="font-display text-xl sm:text-2xl font-bold text-mist-100">{stat.value}</div>
                  <div className="font-mono text-[11px] text-mist-400 uppercase tracking-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* CTA Buttons */}
          <FadeIn direction="up" delay={0.6}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="focus-ring group flex items-center gap-2 rounded-md bg-sync px-6 py-3 font-mono text-sm font-semibold text-ink-950 transition-all hover:bg-sync/90 hover:shadow-[0_0_20px_rgba(61,217,179,0.35)]"
              >
                <span>Initiate Contact</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#projects"
                className="focus-ring flex items-center gap-2 rounded-md border border-ink-600 bg-ink-900/80 px-6 py-3 font-mono text-sm font-medium text-mist-100 transition-colors hover:border-sync hover:text-sync"
              >
                <span>Explore Architecture</span>
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Right: Interactive Terminal & Record Card */}
        <FadeIn direction="left" delay={0.3}>
          <div className="relative rounded-lg border border-ink-600/90 bg-ink-900/90 p-6 font-mono text-sm shadow-2xl backdrop-blur-xl shadow-black/60">
            {/* Terminal Window Header Bar */}
            <div className="mb-5 flex items-center justify-between border-b border-ink-700 pb-3">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500/80" />
                <span className="h-3 w-3 rounded-full bg-amber/80" />
                <span className="h-3 w-3 rounded-full bg-sync/80" />
              </div>
              <div className="flex items-center gap-1.5 text-xs text-sync bg-sync/10 px-2 py-0.5 rounded border border-sync/20">
                <Activity className="h-3.5 w-3.5 animate-pulse" />
                <span>ONLINE</span>
              </div>
            </div>

            {/* Record Fields */}
            <div className="space-y-3.5">

              <div className="flex items-start justify-between gap-4 border-b border-ink-800 pb-2.5">
                <span className="shrink-0 text-xs text-mist-400 flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-sync" /> LOCATION
                </span>
                <span className="text-right text-xs text-mist-100">{profile.location}</span>
              </div>

              <div className="flex items-start justify-between gap-4 border-b border-ink-800 pb-2.5">
                <span className="shrink-0 text-xs text-mist-400 flex items-center gap-1.5">
                  <Mail className="h-3.5 w-3.5 text-sync" /> EMAIL
                </span>
                <div className="flex items-center gap-2">
                  <a href={`mailto:${profile.email}`} className="text-xs text-mist-100 hover:text-sync transition-colors truncate max-w-[180px]">
                    {profile.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="text-mist-400 hover:text-sync p-1 rounded transition-colors"
                    title="Copy Email"
                  >
                    {copied ? <Check className="h-3.5 w-3.5 text-sync" /> : <Copy className="h-3.5 w-3.5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-start justify-between gap-4 border-b border-ink-800 pb-2.5">
                <span className="shrink-0 text-xs text-mist-400 flex items-center gap-1.5">
                  <Phone className="h-3.5 w-3.5 text-sync" /> DIRECT
                </span>
                <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="text-xs text-mist-100 hover:text-sync transition-colors">
                  {profile.phone}
                </a>
              </div>

              <div className="flex items-start justify-between gap-4">
                <span className="shrink-0 text-xs text-mist-400 flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-amber" /> NETWORKS
                </span>
                <div className="flex items-center gap-3 text-xs">
                  <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-mist-300 hover:text-sync">
                    <Github className="h-3.5 w-3.5" /> GitHub
                  </a>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-mist-300 hover:text-sync">
                    <Linkedin className="h-3.5 w-3.5" /> LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Terminal Bottom Indicator */}
            <div className="mt-5 rounded bg-ink-950 p-3 text-xs font-mono text-mist-300 border border-ink-800">
              <div className="flex items-center justify-between text-[11px] text-mist-400 mb-1">
                <span>SYSTEM READINESS</span>
                <span className="text-sync">READY</span>
              </div>
              <p className="text-[11px] text-mist-400 leading-tight">
                Core: Frappe 15.x | ERPNext v15 | Python 3.11 | React 19
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
