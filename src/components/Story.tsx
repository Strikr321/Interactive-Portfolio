import { GraduationCap } from 'lucide-react'
import { profile } from '../data/profile'
import Section from './Section'

export default function Story() {
  return (
    <Section id="story" eyebrow="01 · story" title="How I got here">
      <div className="grid gap-12 md:grid-cols-[3fr_2fr]">
        <div className="space-y-5 text-lg leading-relaxed">
          {profile.story.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <div className="space-y-4">
          {profile.education.map((ed) => (
            <div key={ed.school} className="rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800">
              <GraduationCap className="size-5 text-accent" />
              <h3 className="mt-3 font-semibold text-zinc-900 dark:text-white">{ed.degree}</h3>
              <p className="text-sm">{ed.school}</p>
              <p className="mt-1 font-mono text-xs text-zinc-500">{ed.period}</p>
              <p className="mt-3 text-sm text-zinc-500">{ed.details}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
