// Central profile content — edit this file to update the site.
// Central profile content — edit this file to update the site.
export const profile = {
  name: "Nafiu Rosyid",
  title: "Full-Stack Software Engineer",
  tagline:
    "Building reliable web, mobile, and backend systems that solve real business problems.",
  email: "nafiumndrr@gmail.com",
  avatar: "/avatar.svg",
} as const;

export const about = {
  paragraphs: [
    "I am a Full-Stack Software Engineer with 5+ years of experience building business applications across web, mobile, desktop, and backend platforms. My experience ranges from mobile banking and CRM systems to healthcare, loyalty, and internal business applications.",
    "I enjoy understanding how systems work, solving real-world problems, and turning business requirements into reliable software. Recently, I have also been exploring Golang, Docker, self-hosted services, and practical AI applications.",
  ],
} as const;

export interface SkillGroup {
  category: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["PHP", "TypeScript", "JavaScript", "Go", "SQL"],
  },
  {
    category: "Frameworks",
    items: ["Laravel", "Yii2", "React Native", "Lumen", "Electron.js", "Node.js", "Gin"],
  },
  {
    category: 'Infrastructure & DevOps',
    items: [
      'Docker',
      'Linux',
      'Nginx',
      'Git',
      'VPS Deployment',
      'Self-Hosting',
      'REST API',
    ],
  }
];

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

export const experience: ExperienceItem[] = [
  {
    role: "Software Engineer Supervisor",
    company: "ASRI",
    period: "2024 — Present",
    description:
      "Developing CRM platforms, backend services, and business integrations. Working with Golang, Yii2, PostgreSQL, Docker, and data reporting systems to support customer engagement and operational processes.",
  },
  {
    role: "Software Engineer",
    company: "PT Catur Digital Abadi",
    period: "2023 — 2024",
    description:
      "Built CMS platforms and desktop applications for shopping mall loyalty ecosystems. Developed scalable business features using Yii2, PostgreSQL, Docker, and Electron.js.",
  },
  {
    role: "Programmer",
    company: "PT Lawang Sewu Teknologi",
    period: "2020 — 2023",
    description:
      "Developed mobile banking, POS, and internal business applications using Laravel and React Native. Worked closely with clients to understand requirements and deliver production-ready solutions.",
  },
];

export interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  repo?: string;
}

export const projects: ProjectItem[] = [
  {
    title: "Mobile Banking Application",
    description:
      "Contributed to a mobile banking platform featuring QRIS payments, cardless transactions, and digital banking services.",
    tags: ["React Native", "TypeScript", "Laravel", "API"],
  },
  {
    title: "Customer Relationship Management (CRM)",
    description:
      "Developed and maintained a CRM platform used for customer engagement, loyalty programs, and operational workflows.",
    tags: ["Yii2", "PHP", "PostgreSQL", "Docker"],
    link: "https://crm.asriliving.com",
  },
  {
    title: "Healthcare & Business Applications",
    description:
      "Built multiple Android and web applications including healthcare reporting, POS systems, online elections, and internal business tools.",
    tags: ["Laravel", "React Native", "PostgreSQL"],
  },
];

export interface SocialLink {
  label: string;
  href: string;
}

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/mnafiudrr" },
  { label: "LinkedIn", href: "https://linkedin.com/in/muqsithu-nafiu" },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;


// export const profile = {
//   name: 'Your Name',
//   title: 'Full-Stack Developer',
//   tagline: 'I build clean, performant web experiences.',
//   email: 'you@example.com',
//   avatar: '/avatar.svg',
// } as const

// export const about = {
//   paragraphs: [
//     'Hi! I am a software developer who loves turning ideas into reliable, well-crafted products. I care deeply about clean architecture, thoughtful UX, and shipping things that actually work.',
//     'When I am not coding, you will find me exploring new tools, reading about systems design, or contributing to open source.',
//   ],
// } as const

// export interface SkillGroup {
//   category: string
//   items: string[]
// }

// export const skills: SkillGroup[] = [
//   {
//     category: 'Languages',
//     items: ['TypeScript', 'JavaScript', 'Python', 'Go', 'SQL'],
//   },
//   {
//     category: 'Frameworks',
//     items: ['React', 'Node.js', 'Express', 'Next.js', 'FastAPI'],
//   },
//   {
//     category: 'Tools & DevOps',
//     items: ['Docker', 'Git', 'Nginx', 'PostgreSQL', 'Redis'],
//   },
// ]

// export interface ExperienceItem {
//   role: string
//   company: string
//   period: string
//   description: string
// }

// export const experience: ExperienceItem[] = [
//   {
//     role: 'Senior Software Engineer',
//     company: 'Company A',
//     period: '2024 — Present',
//     description:
//       'Leading frontend architecture and mentoring engineers. Shipped a redesign that improved load time by 40%.',
//   },
//   {
//     role: 'Software Engineer',
//     company: 'Company B',
//     period: '2022 — 2024',
//     description:
//       'Built and maintained full-stack features across the platform. Introduced automated testing that reduced regressions.',
//   },
//   {
//     role: 'Junior Developer',
//     company: 'Company C',
//     period: '2020 — 2022',
//     description:
//       'Developed customer-facing UI components and internal tools. Collaborated closely with design and product teams.',
//   },
// ]

// export interface ProjectItem {
//   title: string
//   description: string
//   tags: string[]
//   link?: string
//   repo?: string
// }

// export const projects: ProjectItem[] = [
//   {
//     title: 'Project One',
//     description:
//       'A real-time collaboration app with offline support and conflict resolution.',
//     tags: ['React', 'TypeScript', 'WebSocket'],
//     link: 'https://example.com',
//     repo: 'https://github.com/you/project-one',
//   },
//   {
//     title: 'Project Two',
//     description:
//       'A developer CLI tool that automates repetitive deployment workflows.',
//     tags: ['Go', 'Docker'],
//     link: 'https://example.com',
//     repo: 'https://github.com/you/project-two',
//   },
//   {
//     title: 'Project Three',
//     description:
//       'An analytics dashboard with customizable widgets and exportable reports.',
//     tags: ['Next.js', 'PostgreSQL'],
//     link: 'https://example.com',
//     repo: 'https://github.com/you/project-three',
//   },
// ]

// export interface SocialLink {
//   label: string
//   href: string
// }

// export const socials: SocialLink[] = [
//   { label: 'GitHub', href: 'https://github.com/mnafiudrr' },
//   { label: 'LinkedIn', href: 'https://linkedin.com/in/yourname' },
//   { label: 'X', href: 'https://x.com/yourname' },
// ]

// export const navLinks = [
//   { label: 'About', href: '#about' },
//   { label: 'Skills', href: '#skills' },
//   { label: 'Experience', href: '#experience' },
//   { label: 'Projects', href: '#projects' },
//   { label: 'Contact', href: '#contact' },
// ] as const
