import { Moon, Sun } from 'lucide-react'
import { useState } from 'react'

/*
  Your first piece of React "state".
  useState gives back [currentValue, functionToChangeIt].
  When you call setDark(...), React re-renders this component with the new value.
*/
export default function ThemeToggle() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))

  function toggle() {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light')
    } catch {
      // storage can be blocked (private browsing). The toggle still works for this visit.
    }
  }

  return (
    <button
      onClick={toggle}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="rounded-full border border-zinc-200 p-2 text-zinc-600 transition hover:border-accent hover:text-accent dark:border-zinc-800 dark:text-zinc-400"
    >
      {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </button>
  )
}
