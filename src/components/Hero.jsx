import { profile } from "../data";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-6 pb-20 pt-16 md:pt-24">
      <div className="grid gap-12 md:grid-cols-[1.3fr_1fr] md:items-start">
        {/* Left: identity */}
        <div className="rise">
          <h1 className="font-display text-5xl font-semibold leading-[1.05] text-mist-100 sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-4 font-display text-xl text-mist-300 sm:text-2xl">
            {profile.role}
            <span className="cursor-blink text-sync">_</span>
          </p>
          <p className="mt-1 font-mono text-sm text-mist-400">{profile.subrole}</p>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-mist-300">
            {profile.summary}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="focus-ring rounded-sm bg-sync px-5 py-2.5 font-mono text-sm font-medium text-ink-950 transition-colors hover:bg-sync/90"
            >
              Get in touch
            </a>
            <a
              href="#projects"
              className="focus-ring rounded-sm border border-ink-600 px-5 py-2.5 font-mono text-sm text-mist-100 transition-colors hover:border-sync hover:text-sync"
            >
              View projects
            </a>
          </div>
        </div>

        {/* Right: record card — the signature element */}
        <div className="rise rounded-md border border-ink-600 bg-ink-800/70 p-5 font-mono text-sm shadow-[0_0_0_1px_rgba(61,217,179,0.05)]" style={{ animationDelay: "120ms" }}>
          <div className="mb-4 flex items-center justify-between border-b border-ink-600 pb-3">
            <span className="text-xs uppercase tracking-wider text-mist-400">Record</span>
            <span className="flex items-center gap-1.5 text-xs text-sync">
              <span className="h-1.5 w-1.5 rounded-full bg-sync" />
            </span>
          </div>

          <dl className="space-y-3">
            <Field label="name" value={profile.name} />
            <Field label="role" value={profile.role} />
            <Field label="location" value={profile.location} />
            <Field label="email" value={profile.email} link={`mailto:${profile.email}`} />
            <Field label="phone" value={profile.phone} link={`tel:${profile.phone.replace(/\s/g, "")}`} />
          </dl>
        </div>
      </div>
    </section>
  );
}

function Field({ label, value, accent, link }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <dt className="shrink-0 text-mist-400">{label}</dt>
      {link ? (
        <a href={link} className="focus-ring truncate text-right text-mist-100 hover:text-sync">
          {value}
        </a>
      ) : (
        <dd className={`truncate text-right ${accent ? "text-amber" : "text-mist-100"}`}>{value}</dd>
      )}
    </div>
  );
}
