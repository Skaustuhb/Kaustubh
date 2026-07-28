import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data";
import { SectionHeading } from "./Skills";
import { FadeIn, HoverCard } from "./MotionWrapper";
import { 
  ArrowUpRight, 
  Layers, 
  RefreshCw, 
  Globe, 
  BarChart3, 
  X, 
  CheckCircle2, 
  Activity 
} from "lucide-react";

const CATEGORIES = [
  "All",
  "Custom Doctypes",
  "Integrations & Sync",
  "React & Portals",
  "Reporting & Analytics",
];

const CATEGORY_ICONS = {
  "Custom Doctypes": Layers,
  "Integrations & Sync": RefreshCw,
  "React & Portals": Globe,
  "Reporting & Analytics": BarChart3,
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="border-t border-ink-700/60 bg-ink-950/60 relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Architectural Records"
          title="Enterprise Projects & Case Studies"
          subtitle="Full-cycle ERPNext modules, cross-site integration engines, and React web portals engineered for scale."
        />

        {/* Filter Category Tabs */}
        <FadeIn direction="up" delay={0.2}>
          <div className="mb-10 flex flex-wrap gap-2 border-b border-ink-800 pb-4">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative rounded-md px-4 py-2 font-mono text-xs font-medium uppercase tracking-wider transition-all focus-ring ${
                    isActive
                      ? "bg-sync text-ink-950 shadow-[0_0_12px_rgba(61,217,179,0.25)]"
                      : "border border-ink-700 bg-ink-900 text-mist-300 hover:border-sync/50 hover:text-mist-100"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </FadeIn>

        {/* Projects Grid */}
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredProjects.map((project) => {
              const IconComp = CATEGORY_ICONS[project.category] || Layers;

              return (
                <motion.div
                  key={project.name}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                >
                  <HoverCard
                    onClick={() => setSelectedProject(project)}
                    className="group relative flex h-full cursor-pointer flex-col rounded-lg border border-ink-700 bg-ink-900/90 p-6 transition-all hover:border-sync/70 hover:shadow-xl hover:shadow-sync/5"
                  >
                    {/* Card Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex h-7 w-7 items-center justify-center rounded border border-sync/20 bg-sync/10 text-sync">
                          <IconComp className="h-3.5 w-3.5" />
                        </div>
                        <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-amber">
                          {project.doctype}
                        </span>
                      </div>
                      <span className="flex items-center gap-1 font-mono text-[11px] text-mist-400 opacity-80 group-hover:text-sync group-hover:opacity-100">
                        <span>Details</span>
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="mt-4 font-display text-xl font-bold text-mist-100 group-hover:text-sync transition-colors">
                      {project.name}
                    </h3>

                    {/* Short Description */}
                    <p className="mt-2.5 flex-1 text-sm leading-relaxed text-mist-300">
                      {project.description}
                    </p>

                    {/* Impact Metrics Badges */}
                    {project.metrics && (
                      <div className="mt-4 flex flex-wrap gap-1.5 border-t border-ink-800/80 pt-3">
                        {project.metrics.map((metric, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1 rounded bg-sync/10 px-2 py-0.5 font-mono text-[11px] font-medium text-sync border border-sync/20"
                          >
                            <Activity className="h-3 w-3" />
                            {metric}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5 pt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded border border-ink-700 bg-ink-950 px-2 py-0.5 font-mono text-[11px] text-mist-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </HoverCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Detailed Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.35 }}
              className="relative z-10 w-full max-w-2xl overflow-hidden rounded-xl border border-ink-600 bg-ink-900 p-6 sm:p-8 shadow-2xl"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between">
                <div>
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-amber bg-amber/10 px-2.5 py-1 rounded border border-amber/20">
                    {selectedProject.doctype} &middot; {selectedProject.category}
                  </span>
                  <h3 className="mt-3 font-display text-2xl sm:text-3xl font-bold text-mist-100">
                    {selectedProject.name}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="rounded-lg border border-ink-700 bg-ink-800 p-2 text-mist-300 hover:border-sync hover:text-sync focus-ring"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Full Description */}
              <div className="mt-6">
                <h4 className="font-mono text-xs uppercase tracking-wider text-mist-400">Architectural Overview</h4>
                <p className="mt-2 text-sm sm:text-base leading-relaxed text-mist-200">
                  {selectedProject.fullDescription}
                </p>
              </div>

              {/* Impact Metrics */}
              {selectedProject.metrics && (
                <div className="mt-6 border-t border-ink-800 pt-5">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-mist-400 mb-3">Key Operational Impact</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.metrics.map((metric, i) => (
                      <span key={i} className="inline-flex items-center gap-1.5 rounded-md bg-sync/10 px-3 py-1.5 font-mono text-xs font-semibold text-sync border border-sync/30">
                        <CheckCircle2 className="h-4 w-4" />
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Architectural Features */}
              {selectedProject.keyFeatures && (
                <div className="mt-6 border-t border-ink-800 pt-5">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-mist-400 mb-3">Technical Highlights</h4>
                  <ul className="space-y-2">
                    {selectedProject.keyFeatures.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-mist-300">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-sync" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Modal Footer / Tags */}
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-ink-800 pt-5">
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tags.map((t) => (
                    <span key={t} className="rounded bg-ink-950 px-2.5 py-1 font-mono text-xs text-mist-400 border border-ink-800">
                      {t}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="rounded-md bg-sync px-5 py-2 font-mono text-xs font-semibold text-ink-950 hover:bg-sync/90 focus-ring"
                >
                  Close Window
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
