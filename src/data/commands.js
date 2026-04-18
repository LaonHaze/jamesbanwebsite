import { getYearsExperience } from '../utils/experience'

export const COMMANDS = {
  help: {
    description: 'List all available commands',
    output: () => [
      { type: 'title', text: 'Available commands:' },
      { type: 'cmd', name: 'about',        desc: 'Who am I' },
      { type: 'cmd', name: 'skills',       desc: 'Technical skills & stack' },
      { type: 'cmd', name: 'experience',   desc: 'Work history' },
      { type: 'cmd', name: 'education',    desc: 'Academic background' },
      { type: 'cmd', name: 'achievements', desc: 'Awards & recognition' },
      { type: 'cmd', name: 'contact',      desc: 'Get in touch' },
      { type: 'cmd', name: 'clear',        desc: 'Clear the terminal' },
    ],
  },

  about: {
    description: 'Who am I',
    output: () => [
      { type: 'title', text: 'Jaeyoung (James) Ban — Full Stack Developer' },
      { type: 'text', text: 'Based in Auckland, New Zealand.' },
      { type: 'spacer' },
      { type: 'text', text: `Full stack developer with ${getYearsExperience()}+ years of experience delivering production-grade web applications. I've led system migrations, microservices adoption, and integration of business-critical platforms across frontend and backend.` },
      { type: 'spacer' },
      { type: 'text', text: 'I drive architectural decisions to improve scalability, maintainability, and deployment reliability — and leverage AI-assisted tools to support development workflows where appropriate.' },
    ],
  },

  skills: {
    description: 'Technical skills & stack',
    output: () => [
      { type: 'title', text: 'Technical Skills' },
      { type: 'section', label: 'Frontend',      items: ['React', 'TypeScript', 'JavaScript', 'MUI', 'HTML / CSS'] },
      { type: 'section', label: 'Backend',       items: ['.NET Core', '.NET Framework', 'MSSQL', 'REST APIs', 'Hangfire'] },
      { type: 'section', label: 'DevOps',        items: ['Azure DevOps', 'CI/CD Pipelines', 'Azure App Services', 'Docker'] },
      { type: 'section', label: 'Integrations',  items: ['Salesforce', 'MYOB EXO', 'EDI / Crossfire', 'Zaui', 'Narnoo'] },
      { type: 'section', label: 'Other',         items: ['Python', 'Git', 'Microservices', 'System Architecture'] },
    ],
  },

  experience: {
    description: 'Work history',
    output: () => [
      { type: 'title', text: 'Work Experience' },
      {
        type: 'job',
        company: 'Sandfield',
        role: 'Solution Developer',
        period: 'Nov 2021 – Present',
        bullets: [
          'Led end-to-end migration of the NZTR portal from legacy MS Access to React and .NET, defining system architecture across core components',
          'Architected a reusable portal framework standardising UI patterns across client projects using MUI',
          'Designed and implemented CI/CD pipelines to replace manual deployment processes',
          'Built a Crossfire Cloud EDI integration between MYOB EXO and Salesforce',
          'Integrated Zaui and Narnoo APIs into a legacy booking platform',
        ],
      },
      { type: 'spacer' },
      {
        type: 'job',
        company: 'Datacom',
        role: 'Software Developer',
        period: 'Nov 2019 – Nov 2021',
        bullets: [
          'Contributed to decomposing a monolithic payroll application into microservices',
          'Led frontend modernisation from .NET MVC to React',
          'Modernised legacy backend by replacing Windows Services with a Hangfire-based job scheduler',
          'Partnered with customer service teams via CRM to triage and resolve production issues',
        ],
      },
    ],
  },

  education: {
    description: 'Academic background',
    output: () => [
      { type: 'title', text: 'Education' },
      {
        type: 'edu',
        institution: 'University of Auckland',
        degree: 'Bachelor of Science (Computer Science)',
        period: '2014 – 2016',
      },
    ],
  },

  achievements: {
    description: 'Hackathons & awards',
    output: () => [
      { type: 'title', text: 'Achievements' },
      {
        type: 'achievement',
        icon: '🏆',
        title: '1st Place — AWS NZ Community DeepRacer (2022)',
        description: 'Won the national AWS DeepRacer competition in New Zealand as team "Sandfield Skidders".',
      },
      {
        type: 'achievement',
        icon: '🥇',
        title: '1st Place — Techweek NZ Amazon Alexa Games Hackathon (2019)',
        description: 'Built a voice-powered Taboo game for Amazon Alexa and won first place.',
      },
    ],
  },

  contact: {
    description: 'Get in touch',
    output: () => [
      { type: 'title', text: 'Contact' },
      { type: 'link', label: 'LinkedIn', value: 'linkedin.com/in/jaeyoungban',  href: 'https://www.linkedin.com/in/jaeyoungban' },
      { type: 'link', label: 'Email',    value: 'jban0811@gmail.com',           href: 'mailto:jban0811@gmail.com' },
      { type: 'link', label: 'GitHub',   value: 'github.com/LaonHaze',          href: 'https://github.com/LaonHaze' },
    ],
  },
}
