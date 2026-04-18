import { useState, useRef, useEffect, useCallback } from 'react'
import { COMMANDS } from '../data/commands'

// Returns the virtual "stream text" for a line — used to compute how long streaming takes.
// Text lines stream their own text; structural lines stream their combined content.
function getStreamText(line) {
  switch (line.type) {
    case 'text':
    case 'title':
    case 'green':
    case 'muted':
    case 'error':
      return line.text ?? ''
    case 'cmd':
      return line.name + line.desc
    case 'section':
      return line.label + line.items.join('')
    case 'job':
      return line.company + line.role + line.period + line.bullets.join('')
    case 'project':
      return line.name + line.description
    case 'edu':
      return line.institution + line.degree
    case 'achievement':
      return line.title + line.description
    case 'link':
      return line.label + line.value
    case 'spacer':
      return ' ' // tiny pause
    default:
      return ''
  }
}

// Progressively slice an array of strings based on a flat character position.
function progressReveal(parts, charLimit) {
  if (charLimit === undefined) return parts
  let pos = charLimit
  return parts.map((p) => {
    if (pos <= 0) return ''
    const revealed = p.slice(0, pos)
    pos -= p.length
    return revealed
  })
}

function OutputLine({ line, charLimit }) {
  switch (line.type) {
    case 'title':
      return <p className="text-terminal-cyan font-semibold mt-1 mb-0.5">
        {charLimit !== undefined ? line.text.slice(0, charLimit) : line.text}
      </p>
    case 'text':
      return <p className="text-terminal-text/80">
        {charLimit !== undefined ? line.text.slice(0, charLimit) : line.text}
      </p>
    case 'green':
      return <p className="text-terminal-green font-semibold">
        {charLimit !== undefined ? line.text.slice(0, charLimit) : line.text}
      </p>
    case 'muted':
      return <p className="text-terminal-muted text-sm">
        {charLimit !== undefined ? line.text.slice(0, charLimit) : line.text}
      </p>
    case 'error':
      return <p className="text-terminal-red">
        {charLimit !== undefined ? line.text.slice(0, charLimit) : line.text}
      </p>
    case 'spacer':
      return <div className="h-1" />

    case 'cmd': {
      const [name, desc] = progressReveal([line.name, line.desc], charLimit)
      return (
        <div className="flex gap-4 ml-2">
          <span className="text-terminal-yellow font-mono w-24 shrink-0">{name}</span>
          {desc && <span className="text-terminal-muted text-sm">{desc}</span>}
        </div>
      )
    }

    case 'section': {
      const [label, items] = progressReveal([line.label, line.items.join('  ·  ')], charLimit)
      return (
        <div className="flex gap-4 ml-2 mb-1.5">
          <span className="text-terminal-purple font-mono w-32 shrink-0 text-sm">{label}</span>
          {items && <span className="text-terminal-text/80 text-sm">{items}</span>}
        </div>
      )
    }

    case 'job': {
      const parts = [line.company, line.role, line.period, ...line.bullets]
      const [company, role, period, ...bullets] = progressReveal(parts, charLimit)
      return (
        <div className="ml-2 mb-3">
          <div className="flex items-baseline gap-3 flex-wrap">
            {company && <span className="text-terminal-green font-semibold">{company}</span>}
            {role && (
              <>
                <span className="text-terminal-muted text-sm">—</span>
                <span className="text-terminal-text/80">{role}</span>
              </>
            )}
            {period && <span className="text-terminal-muted text-xs ml-auto">{period}</span>}
          </div>
          {bullets.some(Boolean) && (
            <ul className="mt-1 space-y-0.5">
              {bullets.map((b, i) => b ? (
                <li key={i} className="text-terminal-text/70 text-sm flex gap-2">
                  <span className="text-terminal-cyan shrink-0">›</span>
                  {b}
                </li>
              ) : null)}
            </ul>
          )}
        </div>
      )
    }

    case 'project': {
      const [name, description] = progressReveal([line.name, line.description], charLimit)
      const done = charLimit === undefined
      return (
        <div className="ml-2 mb-3">
          <div className="flex items-baseline gap-3 flex-wrap">
            {name && <span className="text-terminal-yellow font-semibold">{name}</span>}
            {done && <span className="text-terminal-muted text-xs ml-auto">{line.period}</span>}
          </div>
          {description && <p className="text-terminal-text/70 text-sm mt-0.5">{description}</p>}
          {done && (
            <div className="flex gap-1.5 mt-1 flex-wrap">
              {line.tech.map((t) => (
                <span key={t} className="text-xs px-2 py-0.5 rounded border border-terminal-border text-terminal-cyan">{t}</span>
              ))}
            </div>
          )}
        </div>
      )
    }

    case 'edu': {
      const [institution, degree] = progressReveal([line.institution, line.degree], charLimit)
      const done = charLimit === undefined
      return (
        <div className="ml-2">
          <div className="flex items-baseline gap-3 flex-wrap">
            {institution && <span className="text-terminal-green font-semibold">{institution}</span>}
            {done && <span className="text-terminal-muted text-xs ml-auto">{line.period}</span>}
          </div>
          {degree && <p className="text-terminal-text/70 text-sm">{degree}</p>}
        </div>
      )
    }

    case 'achievement': {
      const [title, description] = progressReveal([line.title, line.description], charLimit)
      return (
        <div className="ml-2 mb-2">
          {title && <p className="text-terminal-yellow font-semibold">{line.icon} {title}</p>}
          {description && <p className="text-terminal-text/70 text-sm">{description}</p>}
        </div>
      )
    }

    case 'link': {
      const [label, value] = progressReveal([line.label, line.value], charLimit)
      const done = charLimit === undefined
      return (
        <div className="flex gap-4 ml-2">
          <span className="text-terminal-purple font-mono w-16 shrink-0 text-sm">{label}</span>
          {done ? (
            <a
              href={line.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-terminal-cyan hover:text-terminal-green transition-colors text-sm underline underline-offset-2"
            >
              {line.value}
            </a>
          ) : (
            value && <span className="text-terminal-cyan text-sm">{value}</span>
          )}
        </div>
      )
    }

    default:
      return <p className="text-terminal-text/80">{line.text ?? ''}</p>
  }
}

function WelcomeBanner() {
  return (
    <div className="mb-4">
      <pre className="text-terminal-cyan text-xs leading-tight font-mono select-none">
{`   |\\      _,,,---,,_
   /,\`.-'\`'    -.  ;-;;,_
  |,4-  ) )-,_..;\\ (  \`'-'
 '---''(_/--'  \`-'\\_)`}
      </pre>
      <p className="text-terminal-green font-semibold mt-1">Jaeyoung (James) Ban — Full Stack Developer</p>
      <p className="text-terminal-muted text-sm">Auckland, New Zealand</p>
      <p className="text-terminal-text/80 mt-2">
        Type <span className="text-terminal-yellow font-mono">help</span> to see available commands.
      </p>
      <p className="text-terminal-muted text-sm mt-1">
        Try:{' '}
        <span className="text-terminal-yellow font-mono">about</span>,{' '}
        <span className="text-terminal-yellow font-mono">skills</span>,{' '}
        <span className="text-terminal-yellow font-mono">experience</span>
      </p>
    </div>
  )
}

export default function Terminal() {
  const [history, setHistory] = useState([])
  const [input, setInput] = useState('')
  const [cmdHistory, setCmdHistory] = useState([])
  const [historyIdx, setHistoryIdx] = useState(-1)
  const inputRef = useRef(null)
  const outputRef = useRef(null)
  const intervalsRef = useRef({})

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight
    }
  }, [history])

  useEffect(() => {
    return () => Object.values(intervalsRef.current).forEach(clearInterval)
  }, [])

  const focusInput = useCallback(() => {
    inputRef.current?.focus()
  }, [])

  const runCommand = useCallback((raw) => {
    const cmd = raw.trim().toLowerCase()
    if (!cmd) return

    if (cmd === 'clear') {
      Object.values(intervalsRef.current).forEach(clearInterval)
      intervalsRef.current = {}
      setHistory([])
      setCmdHistory((h) => [raw, ...h])
      setHistoryIdx(-1)
      return
    }

    let output = []
    if (COMMANDS[cmd]) {
      output = COMMANDS[cmd].output()
    } else {
      output = [
        { type: 'error', text: `Command not found: ${cmd}` },
        { type: 'text', text: 'Type help for a list of commands.' },
      ]
    }

    const id = Date.now()
    setHistory((h) => [...h, { id, input: raw, output, streamPos: { lineIdx: 0, charIdx: 0 } }])
    setCmdHistory((h) => [raw, ...h])
    setHistoryIdx(-1)

    let lineIdx = 0
    let charIdx = 0

    intervalsRef.current[id] = setInterval(() => {
      const line = output[lineIdx]
      const text = getStreamText(line)

      if (charIdx < text.length) {
        charIdx++
      } else {
        lineIdx++
        charIdx = 0
        if (lineIdx >= output.length) {
          clearInterval(intervalsRef.current[id])
          delete intervalsRef.current[id]
          setHistory((h) =>
            h.map((entry) =>
              entry.id === id ? { ...entry, streamPos: { lineIdx: output.length, charIdx: 0 } } : entry
            )
          )
          return
        }
      }

      setHistory((h) =>
        h.map((entry) =>
          entry.id === id ? { ...entry, streamPos: { lineIdx, charIdx } } : entry
        )
      )
    }, 18)
  }, [])

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      runCommand(input)
      setInput('')
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      const next = Math.min(historyIdx + 1, cmdHistory.length - 1)
      setHistoryIdx(next)
      setInput(cmdHistory[next] ?? '')
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      const next = Math.max(historyIdx - 1, -1)
      setHistoryIdx(next)
      setInput(next === -1 ? '' : (cmdHistory[next] ?? ''))
    } else if (e.key === 'Tab') {
      e.preventDefault()
      const matches = Object.keys(COMMANDS).filter((c) => c.startsWith(input.toLowerCase()))
      if (matches.length === 1) setInput(matches[0])
    }
  }

  return (
    <div
      className="bg-terminal-surface font-mono text-sm w-full h-full flex flex-col"
      onClick={focusInput}
    >

      <div ref={outputRef} className="p-4 flex-1 overflow-y-auto" onClick={focusInput}>
        <WelcomeBanner />

        {history.map((entry) => {
          const { lineIdx, charIdx } = entry.streamPos
          return (
            <div key={entry.id} className="mb-3">
              <div className="flex items-center gap-2 text-terminal-muted mb-1">
                <span className="text-terminal-green">›</span>
                <span className="text-terminal-text">{entry.input}</span>
              </div>
              <div className="pl-4 space-y-0.5">
                {entry.output.map((line, j) => {
                  if (j > lineIdx) return null
                  if (j < lineIdx) return <OutputLine key={j} line={line} />
                  return <OutputLine key={j} line={line} charLimit={charIdx} />
                })}
              </div>
            </div>
          )
        })}
      </div>

      <div className="flex items-center gap-2 px-4 py-3 border-t border-terminal-border bg-terminal-bg/50">
        <span className="text-terminal-green shrink-0">›</span>
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
          placeholder="type a command..."
          className="flex-1 bg-transparent outline-none text-terminal-text placeholder:text-terminal-muted/50 caret-terminal-green"
        />
      </div>
    </div>
  )
}
