import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-ink-600 bg-ink-950/40">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading eyebrow="Schema" title="Skills" />

        <div className="grid gap-px overflow-hidden rounded-md border border-ink-600 bg-ink-600 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group) => (
            <div key={group.group} className="bg-ink-900 p-6">
              <h3 className="font-mono text-xs uppercase tracking-wider text-sync">
                {group.group}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {group.fields.map((field) => (
                  <li key={field} className="flex items-start gap-2 text-sm text-mist-200">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-mist-400" />
                    {field}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title }) {
  return (
    <div className="mb-10">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-mist-400">{eyebrow}</p>
      <h2 className="mt-2 font-display text-3xl font-semibold text-mist-100 sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}
