import { getYearsExperience } from '../utils/experience'

export default function About() {
  return (
    <div className="p-8 max-w-3xl">
      <p className="font-mono text-terminal-cyan text-sm mb-2">$ cat about.md</p>
      <h2 className="text-2xl font-bold text-terminal-text mb-8">About Me</h2>

      <div className="grid md:grid-cols-5 gap-8">
        <div className="md:col-span-3 space-y-4 text-terminal-text/75 leading-relaxed font-sans">
          <p>
            Full stack developer with {getYearsExperience()}+ years of experience delivering production-grade web applications. I've led system migrations, microservices adoption, and integration of business-critical platforms across frontend and backend.
          </p>
          <p>
            I drive architectural decisions to improve scalability, maintainability, and deployment reliability — from defining system architecture on greenfield projects to modernising legacy platforms under real constraints.
          </p>
          <p>
            I also leverage AI-assisted tools to support development workflows where appropriate, and enjoy pushing the boundaries of what's possible in a modern stack.
          </p>
        </div>

        <div className="md:col-span-2">
          <div className="bg-terminal-surface border border-terminal-border rounded-lg p-4">
            <p className="text-terminal-muted text-xs font-mono mb-3">quick_facts.json</p>
            <div className="text-xs font-mono leading-relaxed space-y-0.5">
              <div className="text-terminal-text">{"{"}</div>
              {[
                { key: 'location',   value: 'Auckland, NZ' },
                { key: 'role',       value: 'Full Stack Developer' },
                { key: 'experience', value: `${getYearsExperience()} years` },
                { key: 'education',  value: 'BSc CS, UoA' },
                { key: 'stack',      value: ['.NET', 'React', 'VBA', 'Python'] },
                { key: 'languages',  value: ['English', 'Korean'] },
                { key: 'timezone',   value: 'NZST (UTC+12)' },
              ].map(({ key, value }, i, arr) => (
                <div key={key} className="pl-4">
                  <span className="text-terminal-purple">"{key}"</span>
                  <span className="text-terminal-text">: </span>
                  {Array.isArray(value) ? (
                    <>
                      <span className="text-terminal-text">{"["}</span>
                      {value.map((v, j) => (
                        <span key={v}>
                          <span className="text-terminal-green">"{v}"</span>
                          {j < value.length - 1 && <span className="text-terminal-text">, </span>}
                        </span>
                      ))}
                      <span className="text-terminal-text">{"]"}</span>
                    </>
                  ) : (
                    <span className="text-terminal-green">"{value}"</span>
                  )}
                  {i < arr.length - 1 && <span className="text-terminal-text">,</span>}
                </div>
              ))}
              <div className="text-terminal-text">{"}"}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
