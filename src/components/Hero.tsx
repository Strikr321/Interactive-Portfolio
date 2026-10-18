import { ArrowRight, FileText } from 'lucide-react'
import { motion } from 'motion/react'
import { profile } from '../data/profile'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Decorative glow and grid in the background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--color-accent-soft),transparent_60%)] opacity-60 dark:opacity-40"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#8881_1px,transparent_1px),linear-gradient(to_bottom,#8881_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
      />

      <div className="relative mx-auto grid max-w-5xl items-center gap-12 px-4 pt-20 pb-24 sm:px-6 md:grid-cols-[1fr_auto] md:pt-28">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/60 px-3 py-1 font-mono text-xs text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-400">
            <span className="size-2 animate-pulse rounded-full bg-emerald-500" />
            Open to opportunities · {profile.location}
          </p>

          <h1 className="mt-6 text-4xl leading-tight font-bold tracking-tight text-zinc-900 sm:text-6xl dark:text-white">
            {profile.headline[0]}
            <br />
            <span className="text-accent">{profile.headline[1]}</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg">
            I'm <span className="font-semibold text-zinc-900 dark:text-white">{profile.name}</span>, a{' '}
            {profile.title.toLowerCase()}. {profile.pitch}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90 dark:text-zinc-950"
            >
              See my work <ArrowRight className="size-4" />
            </a>
            {/* Only show the resume button once you've set profile.resume */}
            {profile.resume && (
              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-semibold text-zinc-900 transition hover:border-accent hover:text-accent dark:border-zinc-700 dark:text-white"
              >
                <FileText className="size-4" /> Resume
              </a>
            )}
          </div>

          <dl className="mt-12 flex gap-10">
            {profile.stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-mono text-3xl font-bold text-zinc-900 dark:text-white">{s.value}</dd>
                <dd className="mt-1 text-xs tracking-wider text-zinc-500 uppercase">{s.label}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.img
          src={profile.photo}
          alt={profile.name}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="order-first mx-auto size-40 rounded-3xl object-cover shadow-2xl ring-1 ring-zinc-200 sm:size-56 md:order-none md:mx-0 md:size-72 dark:ring-zinc-800"
        />
      </div>
    </section>
  )
}
