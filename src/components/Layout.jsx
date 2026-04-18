import { useState, useEffect, useRef } from 'react'
import Sidebar from './Sidebar'
import TabBar from './TabBar'
import StatusBar from './StatusBar'
import Terminal from './Terminal'
import About from './About'
import Skills from './Skills'
import Experience from './Experience'
import Contact from './Contact'
import Education from './Education'
import Welcome from './Welcome'

const COMPONENTS = {
  'about.md': About,
  'skills.json': Skills,
  'experience.ts': Experience,
  'education.md': Education,
  'contact.yml': Contact,
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 1024)
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 1024)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])
  return isMobile
}

function ResizeHandle({ direction, onDragStart }) {
  return (
    <div
      onMouseDown={onDragStart}
      onTouchStart={onDragStart}
      className={`shrink-0 group relative flex items-center justify-center z-10
        ${direction === 'horizontal'
          ? 'w-1 cursor-col-resize hover:w-1'
          : 'h-1 cursor-row-resize hover:h-1'
        }`}
    >
      <div className={`bg-terminal-border group-hover:bg-terminal-cyan/60 transition-colors
        ${direction === 'horizontal' ? 'w-px h-full' : 'h-px w-full'}`}
      />
    </div>
  )
}

const MenuIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
)

const GithubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
)

const LinkedInIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

export default function Layout() {
  const [activeFile, setActiveFile] = useState(null)
  const [openTabs, setOpenTabs] = useState([])
  const [sidebarOpen, setSidebarOpen] = useState(() => window.innerWidth >= 1024)
  const [terminalWidth, setTerminalWidth] = useState(340)
  const [terminalHeight, setTerminalHeight] = useState(300)
  const isMobile = useIsMobile()

  const dragStart = useRef(0)
  const sizeAtDragStart = useRef(0)

  const openFile = (name) => {
    setActiveFile(name)
    setOpenTabs((prev) => [name, ...prev.filter((t) => t !== name)])
    if (isMobile) setSidebarOpen(false)
  }

  const closeTab = (name) => {
    const remaining = openTabs.filter((t) => t !== name)
    setOpenTabs(remaining)
    if (activeFile === name) setActiveFile(remaining[remaining.length - 1] ?? null)
  }

  const startResize = (e, direction) => {
    e.preventDefault()
    const isTouch = e.type === 'touchstart'
    const clientX = isTouch ? e.touches[0].clientX : e.clientX
    const clientY = isTouch ? e.touches[0].clientY : e.clientY

    dragStart.current = direction === 'horizontal' ? clientX : clientY
    sizeAtDragStart.current = direction === 'horizontal' ? terminalWidth : terminalHeight

    document.body.style.cursor = direction === 'horizontal' ? 'col-resize' : 'row-resize'
    document.body.style.userSelect = 'none'

    const onMove = (e) => {
      const cx = e.touches ? e.touches[0].clientX : e.clientX
      const cy = e.touches ? e.touches[0].clientY : e.clientY
      const pos = direction === 'horizontal' ? cx : cy
      const delta = dragStart.current - pos

      if (direction === 'horizontal') {
        setTerminalWidth(Math.max(200, Math.min(sizeAtDragStart.current + delta, window.innerWidth - 400)))
      } else {
        setTerminalHeight(Math.max(120, Math.min(sizeAtDragStart.current + delta, window.innerHeight * 0.75)))
      }
    }

    const onUp = () => {
      document.body.style.cursor = ''
      document.body.style.userSelect = ''
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseup', onUp)
      document.removeEventListener('touchmove', onMove)
      document.removeEventListener('touchend', onUp)
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseup', onUp)
    document.addEventListener('touchmove', onMove, { passive: false })
    document.addEventListener('touchend', onUp)
  }

  const ActiveComponent = activeFile ? COMPONENTS[activeFile] : null

  const terminalPanel = (
    <div
      style={isMobile ? { height: terminalHeight } : { width: terminalWidth }}
      className="shrink-0 flex flex-col bg-terminal-surface border-terminal-border"
    >
      <div className="px-3 text-xs text-terminal-muted font-mono border-b border-terminal-border flex items-center gap-2 shrink-0 h-9">
        <span className="w-2 h-2 rounded-full bg-terminal-green opacity-70" />
        <span>TERMINAL — jban@portfolio</span>
      </div>
      <div className="flex-1 overflow-hidden">
        <Terminal />
      </div>
    </div>
  )

  return (
    <div className="h-screen flex flex-col bg-terminal-bg text-terminal-text overflow-hidden">
      {/* Title bar */}
      <div className="h-8 bg-terminal-surface border-b border-terminal-border flex items-center px-3 shrink-0">
        <button
          onClick={() => setSidebarOpen((o) => !o)}
          className="lg:hidden text-terminal-muted hover:text-terminal-text transition-colors p-0.5 mr-2"
          aria-label="Toggle sidebar"
        >
          <MenuIcon />
        </button>
        <span className="text-xs text-terminal-muted font-mono flex-1 text-center">jban.dev</span>
        <div className="flex items-center gap-1">
          <a href="https://github.com/LaonHaze" target="_blank" rel="noopener noreferrer"
            className="p-1 text-terminal-muted hover:text-terminal-text transition-colors" aria-label="GitHub">
            <GithubIcon />
          </a>
          <a href="https://www.linkedin.com/in/jaeyoungban" target="_blank" rel="noopener noreferrer"
            className="p-1 text-terminal-muted hover:text-terminal-text transition-colors" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
        </div>
      </div>

      {/* Main area */}
      <div className={`flex flex-1 overflow-hidden ${isMobile ? 'flex-col' : 'flex-row'}`}>

        <div className="flex flex-1 overflow-hidden min-h-0 relative">

          {/* Mobile backdrop */}
          {isMobile && sidebarOpen && (
            <div className="absolute inset-0 z-10 bg-black/50" onClick={() => setSidebarOpen(false)} />
          )}

          {/* Sidebar */}
          <div className={`
            shrink-0 overflow-hidden transition-[width] duration-200 border-r border-terminal-border
            ${isMobile ? 'absolute top-0 left-0 h-full z-20' : 'relative'}
            ${isMobile ? (sidebarOpen ? 'w-52' : 'w-0') : 'w-52'}
          `}>
            <div className="w-52 h-full">
              <Sidebar activeFile={activeFile} onFileClick={openFile} />
            </div>
          </div>

          {/* Editor */}
          <div className="flex flex-col flex-1 overflow-hidden min-w-0">
            {openTabs.length > 0 && <TabBar tabs={openTabs} activeTab={activeFile} onTabClick={setActiveFile} onTabClose={closeTab} />}
            <div className="flex-1 overflow-y-auto bg-terminal-bg">
              {ActiveComponent ? <ActiveComponent /> : <Welcome onOpenFile={openFile} onOpenSidebar={() => setSidebarOpen(true)} />}
            </div>
          </div>

          {/* Desktop: resize handle + terminal */}
          {!isMobile && (
            <>
              <ResizeHandle direction="horizontal" onDragStart={(e) => startResize(e, 'horizontal')} />
              {terminalPanel}
            </>
          )}
        </div>

        {/* Mobile: resize handle + terminal at bottom */}
        {isMobile && (
          <>
            <ResizeHandle direction="vertical" onDragStart={(e) => startResize(e, 'vertical')} />
            {terminalPanel}
          </>
        )}
      </div>

      <StatusBar activeFile={activeFile} />
    </div>
  )
}
