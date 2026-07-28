import { education, certifications } from "../data";
import { SectionHeading } from "./Skills";
import { FadeIn } from "./MotionWrapper";
import { GraduationCap, Award, CheckCircle2 } from "lucide-react";

export default function Education() {
  return (
    <section className="border-t border-ink-700/60 bg-ink-950/60 relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Qualifications & Credentials"
          title="Education & Industry Certifications"
          subtitle="Formal academic groundwork and specialized continuous technical credentials."
        />

        <div className="grid gap-8 lg:grid-cols-2 mt-12">
          {/* Education Column */}
          <FadeIn direction="right" delay={0.2}>
            <div className="rounded-xl border border-ink-700 bg-ink-900/90 p-7 shadow-lg backdrop-blur-sm">
              <div className="flex items-center gap-3 border-b border-ink-800 pb-4 mb-6">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-sync/30 bg-sync/10 text-sync">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-mist-100">
                  Academic Credentials
                </h3>
              </div>

              <div className="space-y-6">
                {education.map((e) => (
                  <div key={e.degree} className="border-b border-ink-800/80 pb-5 last:border-0 last:pb-0">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-display text-base font-bold text-mist-100">{e.degree}</h4>
                        <p className="mt-1 text-sm font-medium text-sync">{e.school}</p>
                      </div>
                      <span className="shrink-0 rounded bg-ink-950 px-2.5 py-1 font-mono text-xs font-semibold text-mist-400 border border-ink-800">
                        {e.period}
                      </span>
                    </div>
                    {e.detail && (
                      <p className="mt-2 text-xs text-mist-400 leading-relaxed">{e.detail}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Certifications Column */}
          <FadeIn direction="left" delay={0.3}>
            <div className="rounded-xl border border-ink-700 bg-ink-900/90 p-7 shadow-lg backdrop-blur-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 border-b border-ink-800 pb-4 mb-6">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-amber/30 bg-amber/10 text-amber">
                    <Award className="h-5 w-5" />
                  </div>
                  <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-mist-100">
                    Certifications & Specializations
                  </h3>
                </div>

                <div className="space-y-4">
                  {certifications.map((cert, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between rounded-lg border border-ink-800 bg-ink-950/80 p-4 transition-all hover:border-amber/50"
                    >
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-4 w-4 text-amber shrink-0" />
                        <div>
                          <p className="text-sm font-semibold text-mist-100">{cert.name}</p>
                          <p className="text-xs text-mist-400">{cert.issuer}</p>
                        </div>
                      </div>
                      <span className="font-mono text-[10px] font-bold text-amber uppercase tracking-wide bg-amber/10 px-2 py-0.5 rounded">
                        VERIFIED
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 rounded-lg border border-sync/20 bg-sync/5 p-4 text-xs font-mono text-mist-300">
                <p className="text-sync font-semibold mb-1">CONTINUOUS ARCHITECTURE EVOLUTION</p>
                <p className="text-mist-400">Regularly updating skills with latest Frappe v15+ API patterns and microservice architectures.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
