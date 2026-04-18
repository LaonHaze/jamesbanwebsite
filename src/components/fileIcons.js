const ICONS = {
  md:   { icon: 'M↓', color: 'text-blue-400' },
  json: { icon: '{ }', color: 'text-terminal-yellow' },
  ts:   { icon: 'TS', color: 'text-blue-500' },
  yml:  { icon: '≡', color: 'text-orange-400' },
  txt:  { icon: 'TXT', color: 'text-terminal-muted' },
}

export function getFileIcon(filename) {
  const ext = filename.split('.').pop()
  return ICONS[ext] ?? { icon: '·', color: 'text-terminal-muted' }
}

export function getFileColor(filename) {
  return getFileIcon(filename).color
}
