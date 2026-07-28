import { projects } from "../data";
import { SectionHeading } from "./Skills";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-ink-600 bg-ink-950/40">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading eyebrow="Records" title="Projects" />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group flex flex-col rounded-md border border-ink-600 bg-ink-900 p-6 transition-colors hover:border-sync/60"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-wider text-amber">
                  {project.doctype}
                </span>
                <span className="font-mono text-[11px] text-mist-400 opacity-0 transition-opacity group-hover:opacity-100">
                  #{project.name.toLowerCase().replace(/\s+/g, "-")}
                </span>
              </div>

              <h3 className="mt-3 font-display text-lg font-semibold text-mist-100">
                {project.name}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-mist-300">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-sm border border-ink-600 px-2 py-0.5 font-mono text-[11px] text-mist-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
