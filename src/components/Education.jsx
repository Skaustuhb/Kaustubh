import { education, certifications } from "../data";
import { SectionHeading } from "./Skills";

export default function Education() {
  return (
    <section className="border-t border-ink-600 bg-ink-950/40">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading eyebrow="Reference" title="Education & certifications" />

        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-5">
            {education.map((e) => (
              <div key={e.degree} className="flex justify-between gap-4 border-b border-ink-700 pb-4">
                <div>
                  <p className="font-display text-base font-medium text-mist-100">{e.degree}</p>
                  <p className="mt-1 text-sm text-mist-400">{e.school}</p>
                </div>
                <span className="shrink-0 font-mono text-xs text-mist-400">{e.period}</span>
              </div>
            ))}
          </div>

          <div>
            <ul className="space-y-3">
              {certifications.map((cert) => (
                <li
                  key={cert}
                  className="flex items-center gap-3 rounded-sm border border-ink-600 px-4 py-3 text-sm text-mist-200"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
