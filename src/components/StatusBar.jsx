import { getFileColor } from './fileIcons'

export default function StatusBar({ activeFile }) {
  const color = activeFile ? getFileColor(activeFile) : 'text-terminal-muted'
  const lang = activeFile ? activeFile.split('.').pop().toUpperCase() : ''

  return (
    <div className="h-6 bg-terminal-surface border-t border-terminal-border flex items-center px-3 gap-4 text-xs font-mono text-terminal-muted shrink-0">
      <span className="text-terminal-cyan">⎇ main</span>
      <span className="flex-1" />
      {activeFile && (
        <>
          <span>{activeFile}</span>
          <span className={color}>{lang}</span>
        </>
      )}
      <span>UTF-8</span>
      <span>Auckland, NZ</span>
    </div>
  )
}
