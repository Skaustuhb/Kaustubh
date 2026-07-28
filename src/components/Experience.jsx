import { experience } from "../data";
import { SectionHeading } from "./Skills";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-ink-600">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading eyebrow="Sync Log" title="Experience" />

        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-ink-600" aria-hidden="true" />
          <ol className="space-y-10">
            {experience.map((job, i) => (
              <li key={i} className="relative pl-9">
                <span
                  className={`absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 ${
                    job.status === "active"
                      ? "border-sync bg-ink-900"
                      : "border-mist-400 bg-ink-900"
                  }`}
                  aria-hidden="true"
                >
                  {job.status === "active" && (
                    <span className="absolute inset-[3px] rounded-full bg-sync" />
                  )}
                </span>

                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 font-mono text-xs text-mist-400">
                  <span>{job.period}</span>
                  <span
                    className={`rounded-sm px-1.5 py-0.5 uppercase tracking-wider ${
                      job.status === "active"
                        ? "bg-sync/10 text-sync"
                        : "bg-ink-700 text-mist-300"
                    }`}
                  >
                    {job.status === "active" ? "status: active" : "status: synced"}
                  </span>
                </div>

                <h3 className="mt-2 font-display text-xl font-semibold text-mist-100">
                  {job.role} <span className="text-mist-400">&middot; {job.company}</span>
                </h3>
                <p className="mt-0.5 font-mono text-xs text-mist-400">{job.place}</p>

                <ul className="mt-3 space-y-2">
                  {job.points.map((point, j) => (
                    <li key={j} className="flex gap-2.5 text-sm leading-relaxed text-mist-300">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ink-500" />
                      {point}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
