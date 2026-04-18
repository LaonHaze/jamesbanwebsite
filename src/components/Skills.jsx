const SKILL_GROUPS = [
  {
    category: 'Frontend',
    color: 'cyan',
    skills: ['React', 'TypeScript', 'JavaScript', 'MUI', 'HTML / CSS'],
  },
  {
    category: 'Backend',
    color: 'green',
    skills: ['.NET Core', '.NET Framework', 'MSSQL', 'REST APIs', 'Hangfire'],
  },
  {
    category: 'DevOps',
    color: 'purple',
    skills: ['Azure DevOps', 'CI/CD Pipelines', 'Azure App Services', 'Docker'],
  },
  {
    category: 'Integrations',
    color: 'yellow',
    skills: ['Salesforce', 'MYOB EXO', 'EDI / Crossfire', 'Zaui', 'Narnoo'],
  },
  {
    category: 'Other',
    color: 'cyan',
    skills: ['Python', 'Git', 'Microservices', 'System Architecture'],
  },
]

const colorMap = {
  cyan:   { heading: 'text-terminal-cyan',   badge: 'border-terminal-cyan/30 text-terminal-cyan bg-terminal-cyan/5' },
  purple: { heading: 'text-terminal-purple', badge: 'border-terminal-purple/30 text-terminal-purple bg-terminal-purple/5' },
  green:  { heading: 'text-terminal-green',  badge: 'border-terminal-green/30 text-terminal-green bg-terminal-green/5' },
  yellow: { heading: 'text-terminal-yellow', badge: 'border-terminal-yellow/30 text-terminal-yellow bg-terminal-yellow/5' },
}

export default function Skills() {
  return (
    <div className="p-8 max-w-3xl">
      <p className="font-mono text-terminal-cyan text-sm mb-2">$ cat skills.json</p>
      <h2 className="text-2xl font-bold text-terminal-text mb-8">Skills</h2>

      <div className="grid sm:grid-cols-2 gap-4">
        {SKILL_GROUPS.map(({ category, color, skills }) => (
          <div key={category} className="bg-terminal-surface border border-terminal-border rounded-lg p-4">
            <h3 className={`text-sm font-mono font-semibold mb-3 ${colorMap[color].heading}`}>
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className={`text-xs px-2.5 py-1 rounded border ${colorMap[color].badge}`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
