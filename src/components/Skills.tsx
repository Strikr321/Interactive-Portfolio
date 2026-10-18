import { profile } from '../data/profile'
import Section from './Section'

export default function Skills() {
  return (
    <Section id="skills" eyebrow="04 · skills" title="What I work with">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {/* Object.entries turns { Languages: [...], Tools: [...] } into [["Languages", [...]], ["Tools", [...]]] */}
        {Object.entries(profile.skills).map(([group, items]) => (
          <div key={group}>
            <h3 className="font-mono text-sm tracking-wider text-zinc-500 uppercase">{group}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {items.map((skill) => (
                <li
                  key={skill}
                  className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm text-zinc-800 dark:border-zinc-800 dark:text-zinc-200"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
