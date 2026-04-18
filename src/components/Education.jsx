const EDUCATION = [
  {
    institution: 'University of Auckland',
    degree: 'Bachelor of Science (Computer Science)',
    period: '2014 – 2016',
    location: 'Auckland, NZ',
  },
]

const ACHIEVEMENTS = [
  {
    icon: '🏆',
    title: '1st Place — AWS NZ Community DeepRacer (2022)',
    desc: 'Won the national AWS DeepRacer competition in New Zealand as team "Sandfield Skidders".',
  },
  {
    icon: '🥇',
    title: '1st Place — Techweek NZ Amazon Alexa Games Hackathon (2019)',
    desc: 'Built a voice-powered Taboo game for Amazon Alexa and won first place.',
  },
]

export default function Education() {
  return (
    <div className="p-8 max-w-3xl">
      <p className="font-mono text-terminal-cyan text-sm mb-2">$ cat education.md</p>
      <h2 className="text-2xl font-bold text-terminal-text mb-8">Education</h2>

      <div className="relative mb-10">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-terminal-border ml-1" />
        {EDUCATION.map((edu, i) => (
          <div key={i} className="relative pl-8">
            <div className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-terminal-cyan border-2 border-terminal-bg" />
            <div className="bg-terminal-surface border border-terminal-border rounded-lg p-5">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="text-terminal-green font-semibold text-lg">{edu.institution}</h3>
                  <p className="text-terminal-text/80 font-sans">{edu.degree}</p>
                </div>
                <div className="text-right">
                  <p className="text-terminal-muted text-sm font-mono">{edu.period}</p>
                  <p className="text-terminal-muted text-xs font-sans">{edu.location}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-lg font-semibold text-terminal-text mt-10 mb-4">Achievements</h3>
      <div className="space-y-3">
        {ACHIEVEMENTS.map((a) => (
          <div key={a.title} className="bg-terminal-surface border border-terminal-border rounded-lg p-4 flex gap-3">
            <span className="text-2xl shrink-0">{a.icon}</span>
            <div>
              <p className="text-terminal-text font-medium text-sm font-sans">{a.title}</p>
              <p className="text-terminal-muted text-xs mt-0.5 font-sans">{a.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
