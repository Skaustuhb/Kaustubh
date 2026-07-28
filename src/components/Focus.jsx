import { focusAreas } from "../data";
import { SectionHeading } from "./Skills";
import { FadeIn, HoverCard } from "./MotionWrapper";
import { Layers, RefreshCw, Globe, ArrowRight } from "lucide-react";

const ICON_MAP = {
  Layers,
  RefreshCw,
  Globe,
};

export default function Focus() {
  return (
    <section id="focus" className="border-t border-ink-700/60 relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Core Competencies"
          title="Areas of Architecture Focus"
          subtitle="Specialized domain expertise designed to transform complex enterprise operations into streamlined ERP automation."
        />

        <div className="grid gap-8 sm:grid-cols-3 mt-12">
          {focusAreas.map((area, i) => {
            const IconComp = ICON_MAP[area.icon] || Layers;

            return (
              <FadeIn key={area.title} direction="up" delay={i * 0.15}>
                <HoverCard className="group flex h-full flex-col rounded-xl border border-ink-700 bg-ink-900/90 p-7 shadow-lg backdrop-blur-sm transition-all hover:border-sync/60 hover:shadow-sync/5">
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-sync/30 bg-sync/10 text-sync">
                      <IconComp className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xl font-bold text-sync/40 group-hover:text-sync transition-colors">
                      0{i + 1}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-xl font-bold text-mist-100 group-hover:text-sync transition-colors">
                    {area.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-mist-300">
                    {area.detail}
                  </p>

                  <div className="mt-6 flex items-center gap-1.5 font-mono text-xs font-semibold text-sync">
                    <span>Executive Focus</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </HoverCard>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
