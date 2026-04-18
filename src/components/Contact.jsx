import { useState } from 'react'

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
)

const LINKS = [
  { label: 'LinkedIn', icon: LinkedInIcon, value: 'linkedin.com/in/jaeyoungban', href: 'https://www.linkedin.com/in/jaeyoungban', iconClass: 'text-terminal-cyan',   hoverClass: 'hover:border-terminal-cyan/50' },
  { label: 'GitHub',   icon: GithubIcon,   value: 'github.com/LaonHaze',          href: 'https://github.com/LaonHaze',              iconClass: 'text-terminal-purple', hoverClass: 'hover:border-terminal-purple/50' },
]

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mpqkdvwl'

const inputClass = 'w-full bg-terminal-surface border border-terminal-text/20 rounded-lg px-4 py-2.5 text-sm text-terminal-text font-sans placeholder:text-terminal-muted/50 focus:outline-none focus:border-terminal-cyan/60 transition-colors'

export default function Contact() {
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: new FormData(e.target),
        headers: { Accept: 'application/json' },
      })
      setStatus(res.ok ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="p-8 max-w-2xl">
      <p className="font-mono text-terminal-cyan text-sm mb-2">$ cat contact.yml</p>
      <h2 className="text-2xl font-bold text-terminal-text mb-4">Get In Touch</h2>
      <p className="text-terminal-text/60 font-sans mb-5">
        Whether you want to discuss a project or just connect — my inbox is open.
      </p>

      <div className="flex gap-3 mb-5">
        {LINKS.map(({ label, icon: Icon, value, href, iconClass, hoverClass }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={`flex items-center justify-center w-11 h-11 rounded-full border border-terminal-border bg-terminal-surface ${iconClass} ${hoverClass} hover:bg-terminal-surface/80 transition-colors`}
          >
            <Icon />
          </a>
        ))}
      </div>

      {status === 'sent' ? (
        <div className="bg-terminal-surface border border-terminal-border rounded-lg p-6 text-center">
          <p className="text-terminal-green font-mono text-sm mb-1">Message sent.</p>
          <p className="text-terminal-muted text-xs font-sans">I'll get back to you soon.</p>
          <button onClick={() => setStatus('idle')} className="mt-4 text-xs text-terminal-muted hover:text-terminal-text transition-colors font-mono">
            Send another
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="name" required placeholder="Name" className={inputClass} />
            <input name="email" type="email" required placeholder="Email" className={inputClass} />
          </div>
          <input name="subject" placeholder="Subject" className={inputClass} />
          <textarea name="message" required rows={5} placeholder="Message" className={`${inputClass} resize-none`} />
          <div className="flex items-center gap-4">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="px-6 py-2.5 bg-terminal-cyan/10 border border-terminal-cyan/40 text-terminal-cyan rounded-lg hover:bg-terminal-cyan/20 transition-colors text-sm font-medium disabled:opacity-50"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'error' && <p className="text-terminal-red text-xs font-sans">Something went wrong. Please try again.</p>}
          </div>
        </form>
      )}
    </div>
  )
}
