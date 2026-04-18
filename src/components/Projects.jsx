const PROJECTS = [
  {
    name: 'The Big Shift — SEEC Datacube',
    period: 'May 2019 – Present',
    description:
      'Sustainability dashboard featuring data upload to Azure Blob Storage, and viewing/downloading functionality for environmental datasets.',
    tech: ['Python', 'Azure', 'React'],
    highlight: true,
  },
  {
    name: 'Naked Brix',
    period: 'May – Jun 2019',
    description:
      'React Native mobile app guiding vineyard field workers to precise GPS sampling points for measuring fruit variability across large vineyard estates.',
    tech: ['React Native', 'JavaScript', 'GPS / Maps'],
    highlight: false,
  },
]

const ACHIEVEMENTS = [
  { icon: '🥇', title: '1st Place — Techweek NZ Amazon Alexa Games Hackathon', desc: 'Built a voice-powered game with Amazon Alexa.' },
  { icon: '🥈', title: '2nd Place — DEVS 48-Hour Hackathon (2024)', desc: 'Team competed in the Developers Society annual 48-hour hackathon.' },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 border-t border-terminal-border/30">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-terminal-cyan text-sm mb-2">$ ls ./projects/</p>
        <h2 className="text-3xl font-bold text-terminal-text mb-10">Projects & Achievements</h2>

        <div className="grid sm:grid-cols-2 gap-5 mb-10">
          {PROJECTS.map((p) => (
            <div
              key={p.name}
              className={`bg-terminal-surface border rounded-lg p-5 flex flex-col ${p.highlight ? 'border-terminal-cyan/40' : 'border-terminal-border'}`}
            >
              <div className="flex justify-between items-start gap-2 mb-2">
                <h3 className="text-terminal-yellow font-semibold">{p.name}</h3>
                <span className="text-terminal-muted text-xs font-mono shrink-0">{p.period}</span>
              </div>
              <p className="text-terminal-text/70 text-sm flex-1 mb-4">{p.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-0.5 rounded border border-terminal-border text-terminal-cyan">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-lg font-semibold text-terminal-text mb-4">Achievements</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {ACHIEVEMENTS.map((a) => (
            <div key={a.title} className="bg-terminal-surface border border-terminal-border rounded-lg p-4 flex gap-3">
              <span className="text-2xl shrink-0">{a.icon}</span>
              <div>
                <p className="text-terminal-text font-medium text-sm">{a.title}</p>
                <p className="text-terminal-muted text-xs mt-0.5">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
