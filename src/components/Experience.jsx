const EXPERIENCE = [
  {
    company: 'Sandfield',
    role: 'Solution Developer',
    period: 'Nov 2021 – Present',
    duration: '4yrs 6mos',
    location: 'Auckland, NZ',
    bullets: [
      'Led end-to-end migration of the NZTR portal from legacy MS Access to a modern React and .NET platform, defining system architecture and transforming a tightly coupled system into a scalable, organisation-wide platform',
      'Architected a reusable portal framework (layouts and theming), standardising UI patterns and enabling consistent delivery across multiple client projects using MUI',
      'Designed and implemented CI/CD pipelines to replace manual deployment processes, enabling reliable, repeatable releases and reducing operational risk across multiple projects',
      'Built a Crossfire Cloud EDI integration between MYOB EXO and Salesforce, automating high-volume data synchronisation and removing manual processing from business-critical workflows',
      'Integrated Zaui and Narnoo APIs into a legacy booking platform, consolidating external data sources and streamlining booking operations',
    ],
    tech: ['React', 'TypeScript', '.NET', 'MUI', 'CI/CD', 'Azure DevOps', 'Salesforce'],
  },
  {
    company: 'Datacom',
    role: 'Software Developer',
    period: 'Nov 2019 – Nov 2021',
    duration: '2yrs 1mo',
    location: 'Auckland, NZ',
    bullets: [
      'Contributed to decomposing a monolithic payroll application into microservices, improving scalability, deployment flexibility, and reducing release coupling across domains',
      'Led frontend modernisation from .NET MVC to React, establishing a more scalable and maintainable UI architecture for ongoing product development',
      'Modernised legacy backend by refactoring tightly coupled systems and replacing Windows Services with a Hangfire-based job scheduler, improving maintainability and observability of asynchronous processing',
      'Partnered with customer service teams via CRM to triage and resolve production issues, improving system stability and reducing recurring operational incidents',
    ],
    tech: ['React', '.NET Core', '.NET Framework', 'MSSQL', 'Hangfire', 'Microservices'],
  },
]

export default function Experience() {
  return (
    <div className="p-8 max-w-3xl">
      <p className="font-mono text-terminal-cyan text-sm mb-2">$ git log --work-history</p>
      <h2 className="text-2xl font-bold text-terminal-text mb-8">Experience</h2>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-terminal-border ml-1" />
        {EXPERIENCE.map((job, i) => (
          <div key={i} className="relative pl-8 mb-8 last:mb-0">
            <div className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-terminal-cyan border-2 border-terminal-bg" />
            <div className="bg-terminal-surface border border-terminal-border rounded-lg p-5">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-terminal-green font-semibold text-lg">{job.company}</h3>
                  <p className="text-terminal-text/80 font-sans">{job.role}</p>
                </div>
                <div className="text-right">
                  <p className="text-terminal-muted text-sm font-mono">{job.period}</p>
                  <p className="text-terminal-muted text-xs font-sans">{job.location}</p>
                </div>
              </div>
              <ul className="space-y-2 mb-4">
                {job.bullets.map((b, j) => (
                  <li key={j} className="flex gap-3 text-terminal-text/70 text-sm font-sans">
                    <span className="text-terminal-cyan shrink-0 mt-0.5">›</span>
                    {b}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5">
                {job.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-0.5 rounded border border-terminal-border text-terminal-muted font-mono">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
