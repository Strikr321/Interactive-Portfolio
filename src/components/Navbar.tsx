import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { profile } from '../data/profile'
import ThemeToggle from './ThemeToggle'

// Each link scrolls to the section with the matching id
const links = [
  { href: '#story', label: 'Story' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false) // is the mobile menu open?

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/60 bg-white/70 backdrop-blur-md dark:border-zinc-800/60 dark:bg-zinc-950/70">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="flex items-center gap-2 font-mono text-sm font-semibold text-zinc-900 dark:text-white">
          <span className="grid size-8 place-items-center rounded-lg bg-accent text-xs text-white dark:text-zinc-950">
            {profile.initials}
          </span>
          tanvir.sublok.dev
        </a>

        {/* Desktop links: hidden on small screens (hidden), shown from the md breakpoint up (md:flex) */}
        <div className="hidden items-center gap-1 md:flex">
          {/* .map() turns each item in the array into a JSX element. React needs a unique `key` for each. */}
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3 py-1.5 text-sm text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile: theme toggle and hamburger button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open} className="p-2 text-zinc-700 dark:text-zinc-300">
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Conditional rendering: `open && <div/>` only renders the div when open is true */}
      {open && (
        <div className="border-t border-zinc-200 px-4 py-3 md:hidden dark:border-zinc-800">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2 text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
