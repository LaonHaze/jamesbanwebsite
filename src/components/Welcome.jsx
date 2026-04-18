export default function Welcome({ onOpenFile }) {
  return (
    <div className="h-full flex flex-col items-center justify-center px-12 relative">
      <div className="max-w-lg w-full">
        <p className="font-mono text-terminal-cyan text-sm mb-3">Hello, world. I'm</p>
        <h1 className="text-4xl md:text-5xl font-bold text-terminal-text mb-2">
          Jaeyoung (James) Ban
        </h1>
        <h2 className="text-xl md:text-2xl font-light text-terminal-muted mb-6">
          Senior Full Stack Developer
        </h2>
        <p className="text-terminal-text/70 leading-relaxed mb-8">
          6+ years delivering production-grade web applications. I lead system migrations, architect scalable platforms, and drive CI/CD adoption — across both frontend and backend. Based in Auckland, NZ.
        </p>
        <div className="flex gap-4 flex-wrap mb-16">
          <button
            onClick={() => onOpenFile('contact.yml')}
            className="px-5 py-2.5 bg-terminal-cyan/10 border border-terminal-cyan/40 text-terminal-cyan rounded-lg hover:bg-terminal-cyan/20 transition-colors text-sm font-medium"
          >
            Contact Me
          </button>
          <button
            onClick={() => onOpenFile('experience.ts')}
            className="px-5 py-2.5 border border-terminal-border text-terminal-muted rounded-lg hover:text-terminal-text hover:border-terminal-text/40 transition-colors text-sm"
          >
            View Experience
          </button>
        </div>

        <div className="hidden lg:flex gap-8 text-xs font-mono text-terminal-muted/50">
          <span>← select a file to explore</span>
          <span className="ml-auto">try typing in the terminal →</span>
        </div>
      </div>
    </div>
  )
}
