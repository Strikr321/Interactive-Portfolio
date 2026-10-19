# Tanvir's portfolio site

Personal portfolio for Tanvir Sublok, live at **https://tanvir.sublok.dev**.

## Where things live
- **Local folder:** `~/Documents/Projects/my-portfolio` (the only working copy)
- **GitHub:** https://github.com/Strikr321/Interactive-Portfolio (branch `main`)
- **Hosting:** Vercel project `interactive-portfolio`. Every push to `main` auto-deploys in about a minute.
- **Domain:** `tanvir.sublok.dev` is a CNAME in Cloudflare (DNS only, not proxied) on `sublok.dev`, which is owned by Tanvir's dad (Psublok's Cloudflare account; Tanvir is a member). Only touch the `tanvir` record. Never change nameservers or other records.

## Stack
React 19 + TypeScript + Vite, Tailwind CSS v4 (`@tailwindcss/vite`), Motion (`motion/react`) for animation, `lucide-react` icons (GitHub/LinkedIn logos are custom SVGs in `BrandIcons.tsx`).

## Layout
- `src/data/profile.ts`: **all site content** (bio, story, jobs, projects, skills, links). Content edits go here, not in components.
- `src/components/`: one file per section (Navbar, Hero, Story, Experience, Projects, Skills, Contact) plus `Section.tsx` (shared wrapper/animation), `ThemeToggle.tsx`, `BrandIcons.tsx`.
- `src/index.css`: Tailwind import, theme tokens (`--color-accent`), class-based dark mode.
- `public/images/profile.jpg`: headshot. `public/favicon.svg`: "TS" icon.

## Commands
- `npm run dev`: local preview at http://localhost:5173
- `npm run build`: type-check + production build (run before pushing)
- `npm run lint`: oxlint

## Working with Tanvir
- Tanvir is learning this stack (React, TypeScript, Tailwind) to get hired. Keep code readable and keep the short teaching comments in components; explain new concepts briefly when introducing them.
- Tanvir uses VS Code to edit and GitHub Desktop to commit/push; Claude may also commit and push to `main` directly. Run `npm run build` first.
- Privacy: never publish Tanvir's phone number or street address. A resume PDF, if added, goes in `public/resume.pdf` with those removed, and `profile.resume` is set to `'/resume.pdf'`.
- Keep light-mode accent text at WCAG AA contrast (accent is `#0e7490` light / `#22d3ee` dark).
