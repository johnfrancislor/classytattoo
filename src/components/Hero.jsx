import { useCallback, useEffect, useState } from 'react'
import { heroSlides } from '../data.js'
import { Arrow } from './Icons.jsx'

const INTERVAL = 7000

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const count = heroSlides.length

  const go = useCallback((step) => setIndex((i) => (i + step + count) % count), [count])

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setTimeout(() => go(1), INTERVAL)
    return () => clearTimeout(id)
  }, [index, paused, go])

  return (
    <section
      id="home"
      className="hero"
      aria-roledescription="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {heroSlides.map((s, i) => (
        <div
          key={s.title}
          className={`hero-slide ${i === index ? 'is-active' : ''}`}
          aria-hidden={i !== index}
        >
          <div className="hero-bg" style={{ backgroundImage: `url(${s.image})` }} />
          <div className="hero-content container">
            <p className="kicker">{s.kicker}</p>
            {i === 0 ? <h1>{s.title}</h1> : <h2 className="h1">{s.title}</h2>}
            <p className="hero-text">{s.text}</p>
            <a href="#gallery" className="btn" tabIndex={i === index ? 0 : -1}>
              View our work
            </a>
          </div>
        </div>
      ))}

      <button className="hero-arrow prev" aria-label="Previous slide" onClick={() => go(-1)}>
        <Arrow dir="left" />
      </button>
      <button className="hero-arrow next" aria-label="Next slide" onClick={() => go(1)}>
        <Arrow />
      </button>

      <div className="hero-dots">
        {heroSlides.map((s, i) => (
          <button
            key={s.title}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  )
}
