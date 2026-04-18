import { getFileIcon } from './fileIcons'

export default function TabBar({ tabs, activeTab, onTabClick, onTabClose }) {
  return (
    <div className="tab-bar flex items-center bg-terminal-bg border-b border-terminal-border shrink-0 h-9 overflow-x-auto overflow-y-hidden">
      {tabs.map((name) => {
        const { icon, color } = getFileIcon(name)
        const isActive = name === activeTab
        return (
          <div
            key={name}
            onClick={() => onTabClick(name)}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-mono cursor-pointer shrink-0 border-r border-terminal-border transition-colors group ${
              isActive
                ? 'bg-terminal-surface text-terminal-text border-t border-t-terminal-cyan'
                : 'text-terminal-muted hover:text-terminal-text bg-terminal-bg'
            }`}
          >
            <span className={`text-xs ${color}`}>{icon}</span>
            <span>{name}</span>
            <button
              onClick={(e) => { e.stopPropagation(); onTabClose(name) }}
              className="ml-1 opacity-0 group-hover:opacity-100 hover:text-terminal-text transition-opacity text-xs leading-none"
              aria-label={`Close ${name}`}
            >
              ×
            </button>
          </div>
        )
      })}
    </div>
  )
}
