import { useEffect, useState } from 'react'
import { navLinks } from '../data.js'

export function Logo() {
  return (
    <a href="#home" className="logo" aria-label="Classy Tattoo Company, home">
      <img src="/images/logo-ctc.png" alt="" width="400" height="372" />
    </a>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const left = navLinks.slice(0, 3)
  const right = navLinks.slice(3)
  const link = (l) => (
    <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
      {l.label}
    </a>
  )

  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <nav className="nav container" aria-label="Main">
        <div className="nav-group">{left.map(link)}</div>
        <Logo />
        <div className="nav-group">{right.map(link)}</div>
        <button
          className="burger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </nav>
      <div className="mobile-menu" hidden={!open}>
        {navLinks.map(link)}
      </div>
    </header>
  )
}
