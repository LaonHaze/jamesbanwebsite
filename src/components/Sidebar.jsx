import { getFileIcon } from './fileIcons'

const FILES = [
  { name: 'about.md' },
  { name: 'experience.ts' },
  { name: 'education.txt' },
  { name: 'skills.json' },
  { name: 'contact.yml' },
]


export default function Sidebar({ activeFile, onFileClick }) {
  return (
    <div className="w-52 h-full shrink-0 bg-terminal-bg border-r border-terminal-border flex flex-col overflow-hidden">
      <div className="px-3 py-2 text-xs text-terminal-muted font-sans tracking-widest uppercase">
        Explorer
      </div>
      <div className="mt-1 flex-1">
        {FILES.map(({ name }) => {
          const { icon, color } = getFileIcon(name)
          const isActive = activeFile === name
          return (
            <button
              key={name}
              onClick={() => onFileClick(name)}
              className={`w-full flex items-center gap-2 px-4 py-1 text-sm text-left transition-colors font-mono ${
                isActive
                  ? 'bg-terminal-surface text-terminal-text'
                  : 'text-terminal-muted hover:text-terminal-text hover:bg-terminal-surface/50'
              }`}
            >
              <span className={`text-xs shrink-0 w-6 text-center ${color}`}>{icon}</span>
              <span>{name}</span>
            </button>
          )
        })}
      </div>

    </div>
  )
}
