import { profile } from "../data";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-ink-600">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-mist-400">Contact</p>
        <h2 className="mt-2 max-w-2xl font-display text-3xl font-semibold leading-tight text-mist-100 sm:text-4xl">
          Building on Frappe, or need it done right? Let's talk.
        </h2>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="focus-ring rounded-sm bg-sync px-5 py-2.5 font-mono text-sm font-medium text-ink-950 transition-colors hover:bg-sync/90"
          >
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            className="focus-ring rounded-sm border border-ink-600 px-5 py-2.5 font-mono text-sm text-mist-100 transition-colors hover:border-sync hover:text-sync"
          >
            {profile.phone}
          </a>
        </div>

        <div className="mt-8 flex flex-wrap gap-6 font-mono text-xs uppercase tracking-wider text-mist-400">
          <a href={profile.github} className="hover:text-sync focus-ring">GitHub ↗</a>
          <a href={profile.linkedin} className="hover:text-sync focus-ring">LinkedIn ↗</a>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-ink-700 pt-6 font-mono text-xs text-mist-400 sm:flex-row sm:items-center sm:justify-between">
          <span>{profile.name} &middot; {profile.location}</span>
          <span>&copy; {new Date().getFullYear()} — built with React &amp; Tailwind</span>
        </div>
      </div>
    </footer>
  );
}
