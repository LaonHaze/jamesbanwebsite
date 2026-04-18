# CLAUDE.md

## Project

Personal portfolio website — VS Code-style single-page React app hosted on GitHub Pages.

Live: `https://jban0811.github.io/jamesbanwebsite`  
Deploy: `npm run deploy` (builds then publishes via `gh-pages -d dist`)

## Stack

- React 18 + Vite
- Tailwind CSS v3 with custom `terminal-*` color theme (defined in `tailwind.config.js`)
- No routing — single Layout component manages all state

## Architecture

`Layout.jsx` is the shell. It owns:
- `activeFile` / `openTabs` — which panel is shown in the editor
- `sidebarOpen` — collapsible on mobile
- `terminalWidth` / `terminalHeight` — resizable via drag handle
- `isMobile` — `window.innerWidth < 1024`, used to switch between horizontal/vertical layout

File panels are mapped in `COMPONENTS` in `Layout.jsx`. Adding a new panel means adding a component and registering it there plus in `Sidebar.jsx`.

## Terminal

`Terminal.jsx` streams output character-by-character using a single `setInterval` at 18ms per tick. One `setHistory` call per tick — this is intentional to avoid React 18 auto-batching.

`getStreamText(line)` returns the virtual stream string for timing purposes.  
`progressReveal(parts, charLimit)` slices an array of strings by a flat character position.

Commands are defined in `src/data/commands.js`. Each command has an `output()` function returning an array of typed line objects (`title`, `text`, `job`, `section`, `achievement`, `link`, etc.).

## Key Conventions

- Tailwind custom colors: `terminal-bg`, `terminal-surface`, `terminal-border`, `terminal-text`, `terminal-muted`, `terminal-cyan`, `terminal-green`, `terminal-yellow`, `terminal-purple`, `terminal-red`
- Mobile breakpoint: `1024px` (Tailwind `lg`)
- Sidebar width: `w-52` (208px)
- Terminal default width: 420px (desktop), height: 224px (mobile)
- Tab bar is only rendered when `openTabs.length > 0`
- `dist/` and `node_modules/` are gitignored; deploy pushes only the built output
