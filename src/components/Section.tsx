import { motion } from 'motion/react'
import type { ReactNode } from 'react'

/*
  A reusable wrapper every section uses, so they all share the same
  spacing, heading style and fade-in animation.

  `props` are a component's inputs, like function arguments.
  `children` is whatever you put between <Section> and </Section>.
*/
type SectionProps = {
  id: string
  eyebrow: string // the small "01 · story" label above the heading
  title: string
  children: ReactNode
}

export default function Section({ id, eyebrow, title, children }: SectionProps) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
      {/* motion.div is a <div> that can animate. It fades and slides up once it scrolls into view. */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <p className="font-mono text-sm text-accent">{eyebrow}</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
          {title}
        </h2>
        <div className="mt-10">{children}</div>
      </motion.div>
    </section>
  )
}
