import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-terminal-bg/95 backdrop-blur border-b border-terminal-border' : ''}`}>
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-14">
        <a href="#hero" className="font-mono text-terminal-cyan font-semibold hover:text-terminal-green transition-colors">
          jban<span className="text-terminal-muted">.dev</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-terminal-muted text-sm hover:text-terminal-text transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href="https://www.linkedin.com/in/jaeyoungban"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-3 py-1.5 border border-terminal-cyan/50 text-terminal-cyan rounded hover:bg-terminal-cyan/10 transition-colors"
          >
            LinkedIn
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-terminal-muted hover:text-terminal-text p-1"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <div className={`w-5 h-0.5 bg-current mb-1 transition-transform ${open ? 'rotate-45 translate-y-1.5' : ''}`} />
          <div className={`w-5 h-0.5 bg-current mb-1 transition-opacity ${open ? 'opacity-0' : ''}`} />
          <div className={`w-5 h-0.5 bg-current transition-transform ${open ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-terminal-surface border-b border-terminal-border px-6 pb-4">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="block py-2 text-terminal-muted hover:text-terminal-text transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
