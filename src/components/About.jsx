export default function About() {
  return (
    <div className="p-8 max-w-3xl">
      <p className="font-mono text-terminal-cyan text-sm mb-2">$ cat about.md</p>
      <h2 className="text-2xl font-bold text-terminal-text mb-8">About Me</h2>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-4 text-terminal-text/75 leading-relaxed font-sans">
          <p>
            Senior full stack developer with 6+ years of experience delivering production-grade web applications. I've led system migrations, microservices adoption, and integration of business-critical platforms across frontend and backend.
          </p>
          <p>
            I drive architectural decisions to improve scalability, maintainability, and deployment reliability — from defining system architecture on greenfield projects to modernising legacy platforms under real constraints.
          </p>
          <p>
            I also leverage AI-assisted tools to support development workflows where appropriate, and enjoy pushing the boundaries of what's possible in a modern stack.
          </p>
        </div>

        <div>
          <div className="bg-terminal-surface border border-terminal-border rounded-lg p-4">
            <p className="text-terminal-muted text-xs font-mono mb-3">quick_facts.json</p>
            <div className="space-y-2 text-sm font-sans">
              <div className="flex justify-between">
                <span className="text-terminal-muted">location</span>
                <span className="text-terminal-cyan">Auckland, NZ</span>
              </div>
              <div className="flex justify-between">
                <span className="text-terminal-muted">company</span>
                <span className="text-terminal-cyan">Sandfield</span>
              </div>
              <div className="flex justify-between">
                <span className="text-terminal-muted">role</span>
                <span className="text-terminal-cyan">Solution Developer</span>
              </div>
              <div className="flex justify-between">
                <span className="text-terminal-muted">experience</span>
                <span className="text-terminal-cyan">6+ years</span>
              </div>
              <div className="flex justify-between">
                <span className="text-terminal-muted">status</span>
                <span className="text-terminal-green">Open to work</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
