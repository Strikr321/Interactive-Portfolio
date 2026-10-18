/*
  ============================================================
  THIS IS THE ONLY FILE YOU NEED TO EDIT TO UPDATE YOUR SITE.
  ============================================================
  Every section of the page reads from the objects below.
  Anything marked TODO is placeholder text. Replace it with your own.

  TypeScript tip: the `type` definitions describe the shape of the data.
  If you misspell a field or forget a required one, VS Code underlines it red.
*/

export type Job = {
  role: string
  company: string
  period: string // e.g. "Jun 2024 – Aug 2024"
  points: string[]
}

export type Project = {
  name: string
  tagline: string
  description: string
  tech: string[]
  github?: string // the "?" means optional
  live?: string
}

export const profile = {
  name: 'Tanvir Sublok',
  initials: 'TS',
  title: 'Software Developer',
  location: 'New York, NY', // TODO: confirm
  headline: ['Building things', 'one commit at a time.'],
  pitch:
    'TODO: one or two sentences about what you build and what you are looking for. Example: "I\'m a developer who likes turning messy problems into clean, simple tools. Currently looking for my first full-time software role."',
  photo: '/images/profile.jpg',
  resume: '', // TODO: drop your PDF in /public (e.g. public/resume.pdf) and set this to '/resume.pdf'

  links: {
    github: 'https://github.com/Strikr321',
    linkedin: '', // TODO: 'https://www.linkedin.com/in/your-handle'
    email: '', // TODO: the address you want shown publicly
  },

  // The small numbers under the headline. Change or remove them.
  stats: [
    { value: '3+', label: 'Years coding' },
    { value: '5', label: 'Languages' },
    { value: '∞', label: 'Curiosity' },
  ],

  // Your story. Each string is its own paragraph.
  story: [
    'TODO: How did you get into computer science? A class, a game you wanted to mod, a problem at work you wanted to automate?',
    'TODO: What have you been doing since: school, jobs, self-teaching, side projects?',
    "TODO: Where are you headed? The kind of team, product or problems you want to work on next.",
  ],

  education: [
    {
      school: 'TODO: Your University',
      degree: 'B.S. Computer Science',
      period: '20XX – 20XX',
      details: 'Relevant coursework: Data Structures, Algorithms, Databases, Operating Systems',
    },
  ],

  experience: [
    {
      role: 'TODO: Your Role',
      company: 'Company Name',
      period: 'Month 20XX – Present',
      points: [
        'What you did, with a result if you can: "Automated X, saving the team ~5 hours a week."',
        'Tools or technologies you used.',
      ],
    },
    {
      role: 'TODO: Earlier Role',
      company: 'Company Name',
      period: 'Month 20XX – Month 20XX',
      points: ['Non-tech jobs count too. Focus on responsibility, teamwork and problem solving.'],
    },
  ] as Job[],

  projects: [
    {
      name: 'This Portfolio',
      tagline: 'Personal site & resume',
      description:
        'The site you are looking at. Built from scratch with React and TypeScript, styled with Tailwind CSS, animated with Motion, and deployed on Vercel.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      github: 'https://github.com/Strikr321/Interactive-Portfolio',
    },
    {
      name: 'TODO: Project Two',
      tagline: 'One-line summary',
      description:
        'What problem does it solve, what did you build, and what was the hardest part? Class projects count.',
      tech: ['Python', 'Flask', 'SQLite'],
    },
    {
      name: 'TODO: Project Three',
      tagline: 'One-line summary',
      description: 'Placeholder. Delete this object if you only have two projects for now.',
      tech: ['Java'],
    },
  ] as Project[],

  // Group your skills however you like
  skills: {
    Languages: ['JavaScript', 'TypeScript', 'Python', 'Java', 'HTML/CSS', 'SQL'],
    Frameworks: ['React', 'Tailwind CSS', 'Node.js'],
    Tools: ['Git', 'GitHub', 'VS Code', 'Vercel'],
  } as Record<string, string[]>,
}
