const LINKS = [
  { label: 'LinkedIn', value: 'linkedin.com/in/jaeyoungban', href: 'https://www.linkedin.com/in/jaeyoungban', labelClass: 'text-terminal-cyan', hoverClass: 'hover:border-terminal-cyan/50' },
  { label: 'Email', value: 'jban0811@gmail.com', href: 'mailto:jban0811@gmail.com', labelClass: 'text-terminal-green', hoverClass: 'hover:border-terminal-green/50' },
  { label: 'GitHub', value: 'github.com/LaonHaze', href: 'https://github.com/LaonHaze', labelClass: 'text-terminal-purple', hoverClass: 'hover:border-terminal-purple/50' },
]

export default function Contact() {
  return (
    <div className="p-8 max-w-2xl">
      <p className="font-mono text-terminal-cyan text-sm mb-2">$ cat contact.yml</p>
      <h2 className="text-2xl font-bold text-terminal-text mb-4">Get In Touch</h2>
      <p className="text-terminal-text/60 font-sans mb-8">
        Whether you want to discuss a project or just connect — my inbox is open.
      </p>

      <div className="flex flex-col gap-3">
        {LINKS.map(({ label, value, href, labelClass, hoverClass }) => (
          <a
            key={label}
            href={href}
            target={label !== 'Email' ? '_blank' : undefined}
            rel="noopener noreferrer"
            className={`flex items-center gap-4 px-5 py-3 bg-terminal-surface border border-terminal-border rounded-lg ${hoverClass} transition-colors group`}
          >
            <span className={`${labelClass} text-sm font-mono w-16 shrink-0`}>{label}</span>
            <span className="text-terminal-muted text-sm font-sans group-hover:text-terminal-text transition-colors">{value}</span>
          </a>
        ))}
      </div>
    </div>
  )
}
