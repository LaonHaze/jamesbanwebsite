import Terminal from './Terminal'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-14 pb-16 px-6">
      <div className="max-w-5xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in">
          <p className="font-mono text-terminal-cyan text-sm mb-3">Hello, world. I'm</p>
          <h1 className="text-4xl md:text-5xl font-bold text-terminal-text mb-2">
            Jaeyoung Ban
          </h1>
          <h2 className="text-xl md:text-2xl font-light text-terminal-muted mb-6">
            Software Developer
          </h2>
          <p className="text-terminal-text/70 leading-relaxed mb-8 max-w-md">
            I build full-stack applications with Python, C#, and JavaScript. Based in Auckland, NZ — open to new opportunities.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href="#experience"
              className="px-5 py-2.5 bg-terminal-cyan/10 border border-terminal-cyan/40 text-terminal-cyan rounded-lg hover:bg-terminal-cyan/20 transition-colors text-sm font-medium"
            >
              View Experience
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 border border-terminal-border text-terminal-muted rounded-lg hover:text-terminal-text hover:border-terminal-text/40 transition-colors text-sm"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="animate-slide-up">
          <Terminal />
          <p className="text-terminal-muted text-xs text-center mt-2">
            Try: <span className="font-mono text-terminal-yellow">about</span>,{' '}
            <span className="font-mono text-terminal-yellow">skills</span>,{' '}
            <span className="font-mono text-terminal-yellow">experience</span>
          </p>
        </div>
      </div>
    </section>
  )
}
