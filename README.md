# Tanvir Sublok · Portfolio

My personal site, built with **React + TypeScript + Tailwind CSS** (Vite).

## Run it locally

```bash
npm install     # first time only
npm run dev     # open http://localhost:5173
```

## Update content

Everything (bio, jobs, projects, skills, links) lives in `src/data/profile.ts`.

## Project layout

```
src/
  data/profile.ts     ← your content
  components/         ← one file per page section (Hero, Story, Experience, …)
  App.tsx             ← puts the sections in order
  index.css           ← Tailwind import + theme colors
public/images/        ← photos
```

The original plain HTML/CSS version (2023) is saved as the git tag `v1-html`.
