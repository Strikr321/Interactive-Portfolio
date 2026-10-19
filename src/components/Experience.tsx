import { profile } from '../data/profile'
import Section from './Section'

export default function Experience() {
  return (
    <Section id="experience" eyebrow="02 · work" title="Experience">
      {/* A vertical timeline: the left border is the line, each job gets a dot */}
      <ol className="relative space-y-10 border-l border-zinc-200 pl-8 dark:border-zinc-800">
        {profile.experience.map((job) => (
          <li key={job.role + job.company} className="relative">
            <span className="absolute top-1.5 -left-[37px] size-2.5 rounded-full bg-accent ring-4 ring-white dark:ring-zinc-950" />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                {job.role} <span className="text-accent">@ {job.company}</span>
              </h3>
              <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">{job.period}</span>
            </div>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-zinc-400">
              {job.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  )
}
