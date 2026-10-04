import { useEffect } from 'react'
import { Arrow } from './Icons.jsx'

export default function Lightbox({ items, index, onChange, onClose }) {
  const open = index !== null
  const count = items.length

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onChange((index + 1) % count)
      if (e.key === 'ArrowLeft') onChange((index - 1 + count) % count)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, index, count, onChange, onClose])

  if (!open) return null
  const item = items[index]

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={item.alt} onClick={onClose}>
      <img src={item.src} alt={item.alt} onClick={(e) => e.stopPropagation()} />
      <button className="lightbox-close" aria-label="Close" onClick={onClose}>
        ×
      </button>
      {count > 1 && (
        <>
          <button
            className="hero-arrow prev"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation()
              onChange((index - 1 + count) % count)
            }}
          >
            <Arrow dir="left" />
          </button>
          <button
            className="hero-arrow next"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation()
              onChange((index + 1) % count)
            }}
          >
            <Arrow />
          </button>
          <p className="lightbox-count">
            {index + 1} / {count}
          </p>
        </>
      )}
    </div>
  )
}
