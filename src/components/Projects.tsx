import { ExternalLink } from 'lucide-react'
import { motion } from 'motion/react'
import { profile } from '../data/profile'
import { GitHubIcon } from './BrandIcons'
import Section from './Section'

export default function Projects() {
  return (
    <Section id="projects" eyebrow="03 · projects" title="Things I've built">
      <div className="grid gap-6 md:grid-cols-2">
        {profile.projects.map((p, i) => (
          <motion.article
            key={p.name}
            whileHover={{ y: -4 }} // lifts the card slightly on hover
            className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 transition-colors hover:border-accent dark:border-zinc-800 dark:bg-zinc-900/40"
          >
            <div className="flex items-start justify-between">
              {/* padStart turns 1 into "01" */}
              <span className="font-mono text-sm text-zinc-400">{String(i + 1).padStart(2, '0')}</span>
              <div className="flex gap-3 text-zinc-500">
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer" aria-label={`${p.name} on GitHub`} className="hover:text-accent">
                    <GitHubIcon />
                  </a>
                )}
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer" aria-label={`${p.name} live site`} className="hover:text-accent">
                    <ExternalLink className="size-5" />
                  </a>
                )}
              </div>
            </div>

            <h3 className="mt-4 text-xl font-bold text-zinc-900 dark:text-white">{p.name}</h3>
            <p className="text-sm text-accent">{p.tagline}</p>
            <p className="mt-3 flex-1 leading-relaxed">{p.description}</p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <li key={t} className="rounded-full bg-zinc-100 px-2.5 py-1 font-mono text-xs dark:bg-zinc-800">
                  {t}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
