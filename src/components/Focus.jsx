import { focusAreas } from "../data";
import { SectionHeading } from "./Skills";

export default function Focus() {
  return (
    <section className="border-t border-ink-600">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading eyebrow="Where I lean in" title="Areas of interest" />

        <div className="grid gap-8 sm:grid-cols-3">
          {focusAreas.map((area, i) => (
            <div key={area.title}>
              <span className="font-mono text-xs text-sync">0{i + 1}</span>
              <h3 className="mt-2 font-display text-lg font-semibold text-mist-100">
                {area.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-mist-300">{area.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
