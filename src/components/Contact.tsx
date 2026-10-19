import { Mail } from 'lucide-react'
import { profile } from '../data/profile'
import { GitHubIcon, LinkedInIcon } from './BrandIcons'
import Section from './Section'

const YEAR = new Date().getFullYear()

export default function Contact() {
  const { email, github, linkedin } = profile.links // "destructuring": pulls fields out into variables

  const socials = [
    { href: github, label: 'GitHub', icon: <GitHubIcon /> },
    { href: linkedin, label: 'LinkedIn', icon: <LinkedInIcon /> },
  ].filter((s) => s.href) // hide any link you haven't filled in yet

  return (
    <Section id="contact" eyebrow="05 · contact" title="Let's talk">
      <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-8 sm:p-12 dark:border-zinc-800 dark:bg-zinc-900/40">
        <p className="max-w-xl text-lg">
          I'm currently looking for software engineering roles and internships. Whether you have a question, an
          opportunity, or just want to say hi, my inbox is open.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          {email && (
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90 dark:text-zinc-950"
            >
              <Mail className="size-4" /> {email}
            </a>
          )}
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-2.5 text-sm text-zinc-800 hover:border-accent hover:text-accent dark:border-zinc-700 dark:text-zinc-200"
            >
              {s.icon} {s.label}
            </a>
          ))}
        </div>
      </div>

      <footer className="mt-16 text-center font-mono text-xs text-zinc-500 dark:text-zinc-400">
        © {YEAR} {profile.name} · Built with React, TypeScript & Tailwind
      </footer>
    </Section>
  )
}
