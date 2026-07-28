import { experience } from "../data";
import { SectionHeading } from "./Skills";
import { StaggerContainer, StaggerItem } from "./MotionWrapper";
import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-ink-700/60 relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="System Log"
          title="Career Execution & Impact"
          subtitle="Track record in enterprise ERPNext implementations, custom Frappe modules, and full-stack software development."
        />

        <div className="relative mt-12">
          {/* Vertical timeline spine */}
          <div
            className="absolute left-3.5 sm:left-[19px] top-3 bottom-3 w-0.5 bg-gradient-to-b from-sync via-ink-600 to-ink-800"
            aria-hidden="true"
          />

          <StaggerContainer className="space-y-12">
            {experience.map((job, i) => (
              <StaggerItem key={i} className="relative pl-10 sm:pl-14">
                {/* Node indicator dot */}
                <span
                  className={`absolute left-0 sm:left-2 top-1.5 flex h-7 w-7 items-center justify-center rounded-full border-2 bg-ink-950 shadow-lg ${
                    job.status === "active"
                      ? "border-sync shadow-sync/20"
                      : "border-ink-600"
                  }`}
                  aria-hidden="true"
                >
                  {job.status === "active" ? (
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sync opacity-75"></span>
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-sync"></span>
                    </span>
                  ) : (
                    <span className="h-2 w-2 rounded-full bg-mist-400" />
                  )}
                </span>

                {/* Job Card */}
                <div className="rounded-xl border border-ink-700/80 bg-ink-900/80 p-6 sm:p-7 shadow-lg backdrop-blur-sm transition-all hover:border-sync/40">
                  {/* Status & Period Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-ink-800 pb-3 font-mono text-xs text-mist-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-3.5 w-3.5 text-sync" />
                      <span>{job.period}</span>
                    </div>
                    <span
                      className={`rounded px-2 py-0.5 font-semibold uppercase tracking-wider ${
                        job.status === "active"
                          ? "bg-sync/10 text-sync border border-sync/30"
                          : "bg-ink-800 text-mist-400 border border-ink-700"
                      }`}
                    >
                      {job.status === "active" ? "STATUS: ACTIVE" : "STATUS: SYNCED"}
                    </span>
                  </div>

                  {/* Title & Company */}
                  <div className="mt-4 flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-mist-100">
                      {job.role}
                    </h3>
                    <div className="flex items-center gap-1.5 font-mono text-xs font-semibold text-sync">
                      <Briefcase className="h-3.5 w-3.5" />
                      <span>{job.company}</span>
                    </div>
                  </div>

                  <p className="mt-1 flex items-center gap-1.5 font-mono text-xs text-mist-400">
                    <MapPin className="h-3 w-3 text-mist-400" />
                    <span>{job.place}</span>
                  </p>

                  {/* Highlights List */}
                  <ul className="mt-5 space-y-3">
                    {job.highlights.map((point, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm leading-relaxed text-mist-200">
                        <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-sync" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
