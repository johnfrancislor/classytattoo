// Geometric line ornaments in the spirit of classic tattoo flash.

const rays = (count, inner, outer, cx = 50, cy = 50) =>
  Array.from({ length: count }, (_, i) => {
    const a = (i / count) * Math.PI * 2
    return (
      <line
        key={i}
        x1={cx + Math.cos(a) * inner}
        y1={cy + Math.sin(a) * inner}
        x2={cx + Math.cos(a) * outer}
        y2={cy + Math.sin(a) * outer}
      />
    )
  })

export function Ornament({ name, className }) {
  const common = {
    className,
    viewBox: '0 0 100 100',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.2,
    'aria-hidden': true,
  }

  if (name === 'burst') {
    const points = Array.from({ length: 16 }, (_, i) => {
      const a = (i / 16) * Math.PI * 2 - Math.PI / 2
      const r = i % 2 ? 22 : 46
      return `${50 + Math.cos(a) * r},${50 + Math.sin(a) * r}`
    }).join(' ')
    return (
      <svg {...common}>
        <polygon points={points} />
        <circle cx="50" cy="50" r="14" />
        <path d="M38 50 Q50 40 62 50 Q50 60 38 50Z" />
        <circle cx="50" cy="50" r="3.5" fill="currentColor" />
      </svg>
    )
  }

  if (name === 'prism') {
    return (
      <svg {...common}>
        <polygon points="50,8 90,78 10,78" />
        <polygon points="50,92 10,22 90,22" />
        <polygon points="50,36 62,57 38,57" fill="currentColor" />
        <line x1="50" y1="8" x2="50" y2="92" opacity="0.5" />
      </svg>
    )
  }

  // eclipse
  return (
    <svg {...common}>
      <g opacity="0.85">{rays(72, 20, 46)}</g>
      <circle cx="50" cy="50" r="13" fill="currentColor" />
    </svg>
  )
}

export function Arrow({ dir = 'right' }) {
  return (
    <svg
      viewBox="0 0 48 12"
      width="48"
      height="12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
      style={dir === 'left' ? { transform: 'scaleX(-1)' } : undefined}
    >
      <path d="M0 6h44M38 1l6 5-6 5M4 2v8M8 2v8" />
    </svg>
  )
}
