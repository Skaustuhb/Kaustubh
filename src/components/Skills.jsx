import { skills } from "../data";
import { FadeIn, HoverCard } from "./MotionWrapper";
import { Cpu, Layout, Database, ShieldCheck, CheckCircle2 } from "lucide-react";

const ICON_MAP = {
  Cpu,
  Layout,
  Database,
  ShieldCheck,
};

export default function Skills() {
  return (
    <section id="skills" className="border-t border-ink-700/60 bg-ink-950/60 relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Architectural Schema"
          title="Technical Capabilities & Stack"
          subtitle="Enterprise ERPNext customization, Frappe framework internals, custom integrations, and React frontends."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-12">
          {skills.map((group, idx) => {
            const IconComp = ICON_MAP[group.icon] || Cpu;

            return (
              <FadeIn key={group.group} direction="up" delay={idx * 0.1}>
                <HoverCard className="flex h-full flex-col rounded-xl border border-ink-700 bg-ink-900/90 p-6 shadow-lg backdrop-blur-sm transition-all hover:border-sync/60 hover:shadow-sync/5">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 border-b border-ink-800 pb-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-sync/30 bg-sync/10 text-sync">
                      <IconComp className="h-5 w-5" />
                    </div>
                    <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-sync">
                      {group.group}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <ul className="mt-5 space-y-3 flex-1">
                    {group.fields.map((field) => (
                      <li key={field.name} className="flex items-center justify-between gap-2 text-xs sm:text-sm text-mist-200">
                        <span className="flex items-center gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-sync shrink-0" />
                          <span>{field.name}</span>
                        </span>
                        <span className="rounded bg-ink-950 px-2 py-0.5 font-mono text-[10px] font-medium text-mist-400 border border-ink-800 shrink-0">
                          {field.level}
                        </span>
                      </li>
                    ))}
                  </ul>
                </HoverCard>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <FadeIn direction="up" delay={0.1} className="max-w-3xl">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-sync font-semibold flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-sync" />
        {eyebrow}
      </p>
      <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-mist-100 sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base text-mist-300 leading-relaxed">
          {subtitle}
        </p>
      )}
    </FadeIn>
  );
}
