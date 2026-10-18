/*
  ============================================================
  THIS IS THE ONLY FILE YOU NEED TO EDIT TO UPDATE YOUR SITE.
  ============================================================
  Every section of the page reads from the objects below.

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
  inProgress?: boolean
}

export const profile = {
  name: 'Tanvir Sublok',
  initials: 'TS',
  title: 'Full Stack Developer',
  location: 'Chantilly, VA',
  headline: ['From balance sheets', 'to full stack.'],
  pitch:
    'I build web apps end to end, from Spring Boot APIs to Angular and Vue frontends, and I bring a project manager’s eye (CAPM, CSM) to every team I join. Currently looking for full stack, frontend and business IT roles.',
  photo: '/images/profile.jpg',
  resume: '', // Put a PDF in /public (e.g. public/resume.pdf) and set this to '/resume.pdf'. Leave out your phone and street address!

  links: {
    github: 'https://github.com/Strikr321',
    linkedin: 'https://www.linkedin.com/in/tanvir-sublok-692911137',
    email: 'tanvirsublok@gmail.com',
  },

  // The small numbers under the headline
  stats: [
    { value: '178', label: 'Tests passing' },
    { value: '15', label: 'Week Java bootcamp' },
    { value: '2', label: 'Certifications' },
  ],

  // Your story. Each string is its own paragraph.
  story: [
    'I studied Management Information Systems at George Mason, where I got hooked on code through data structures and object-oriented programming. In 2021 I landed a front-end internship at Blue Ridge Dynamics and shipped real features: moving a satellite-tracking app for a government contractor from Backbone.js to Vue.js, and building goal tracking for a fitness platform.',
    'After graduating I spent four years as a staff accountant at Joe Singh and Associates. I ended up being the person who moved the firm from paper to digital workflows and set up remote desktops so the team could work from anywhere. That’s where I learned that the best software solves boring, real problems for real people.',
    'In 2026 I went all in on engineering with Revature’s 15-week full stack Java program, building three tested full stack projects with Java, Spring Boot, SQL and Angular. Now I’m looking for a team where I can write solid code and help keep projects on track.',
  ],

  education: [
    {
      school: 'George Mason University',
      degree: 'B.S. Management Information Systems',
      period: '2016 – 2022',
      details: 'Coursework: Data Structures & Algorithms, Object-Oriented Programming, Low-Level Programming, Supply Chain Management',
    },
  ],

  certifications: [
    { name: 'CAPM', issuer: 'Project Management Institute' },
    { name: 'Certified ScrumMaster (CSM)', issuer: 'Scrum Alliance' },
    { name: 'AWS Solutions Architect', issuer: 'In progress' },
  ],

  experience: [
    {
      role: 'Full Stack Java Developer Trainee',
      company: 'Revature',
      period: 'Feb 2026 – Jun 2026',
      points: [
        'Completed an intensive 15-week full stack program covering Java, SQL, JDBC, REST APIs, Spring Boot, Angular and TypeScript.',
        'Built three full stack projects with 23/23, 28/28 and 127/127 automated tests passing, including a RESTful social media API and a recipe management app.',
        'Worked in Agile/Scrum throughout: sprint planning, daily standups and retrospectives.',
      ],
    },
    {
      role: 'Staff Accountant',
      company: 'Joe Singh and Associates',
      period: 'May 2022 – May 2026',
      points: [
        'Helped move the firm from paper-based workflows to digital systems.',
        'Set up remote desktops on the firm’s computers, cutting the need for on-site visits.',
      ],
    },
    {
      role: 'Front-End Web Developer',
      company: 'Blue Ridge Dynamics',
      period: 'May 2021 – Aug 2021',
      points: [
        'Refactored Anvil, a satellite-tracking app for a government contractor, from Backbone.js to Vue.js and used the Google Maps API to show real-time satellite positions worldwide.',
        'Built scheduling UI that let operators set hourly and daily satellite check-in timers tied to ground bases around the world.',
        'Developed goal management, weight tracking and exercise logging features for Brize, a fitness platform, in Vue.js.',
      ],
    },
  ] as Job[],

  projects: [
    {
      name: 'RecipeHub',
      tagline: 'Full stack recipe manager',
      description:
        'Recipe app with role-based access control, a Javalin REST backend and a four-page vanilla JavaScript frontend using the Fetch API. 127/127 automated tests passing.',
      tech: ['Java', 'Javalin', 'JavaScript', 'HTML', 'CSS'],
      github: 'https://github.com/Strikr321/Strikr321-PEP-GP-WebDevProject-Recipe',
    },
    {
      name: 'Spring Social Media API',
      tagline: 'Spring Boot REST backend',
      description:
        'A Spring Boot rebuild of my social media API using dependency injection, ResponseEntity and Spring Data JPA with Hibernate-generated SQL. 28/28 tests passing.',
      tech: ['Java', 'Spring Boot', 'Spring Data JPA', 'Hibernate'],
      github: 'https://github.com/Strikr321/Strikr321-PEP-SpringSocialMediaBlogAPI-Project',
    },
    {
      name: 'Social Media Blog API',
      tagline: 'RESTful backend from scratch',
      description:
        'A social media backend with 8 endpoints, a three-layer architecture (controller, service, DAO) and business rule validation. 23/23 tests passing.',
      tech: ['Java', 'Javalin', 'JDBC', 'SQL'],
      github: 'https://github.com/Strikr321/Strikr321-PEP-SocialMediaBlogAPI-Project',
    },
    {
      name: 'Warframe Fashionframe',
      tagline: 'Custom poster card generator',
      description:
        'Turns Warframe character screenshots and in-game customization data into shareable poster cards.',
      tech: ['Angular', 'TypeScript'],
      github: 'https://github.com/Strikr321/warframe-runway',
      inProgress: true,
    },
    {
      name: 'sublok.dev',
      tagline: 'This portfolio',
      description:
        'The site you’re on. Built with React and TypeScript, styled with Tailwind CSS, animated with Motion, and deployed on Vercel.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      github: 'https://github.com/Strikr321/Interactive-Portfolio',
    },
  ] as Project[],

  // Group your skills however you like
  skills: {
    Languages: ['Java', 'TypeScript', 'JavaScript', 'SQL', 'Python', 'HTML', 'CSS'],
    Frameworks: ['Spring Boot', 'Angular', 'Vue.js', 'React', 'Javalin', 'Tailwind CSS'],
    'Data & APIs': ['PostgreSQL', 'MySQL', 'JDBC', 'Spring Data JPA', 'REST APIs', 'Google Maps API'],
    'Tools & Process': ['Git', 'Maven', 'Agile / Scrum', 'Project Management'],
  } as Record<string, string[]>,
}
