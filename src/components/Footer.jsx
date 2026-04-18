export default function Footer() {
  return (
    <footer className="border-t border-terminal-border/30 py-6 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <p className="font-mono text-terminal-muted text-xs">
          © {new Date().getFullYear()} Jaeyoung Ban
        </p>
        <p className="font-mono text-terminal-muted text-xs">
          Built with React · Hosted on GitHub Pages
        </p>
      </div>
    </footer>
  )
}
