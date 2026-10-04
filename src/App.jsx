import { useState } from 'react'
import Header, { Logo } from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Lightbox from './components/Lightbox.jsx'
import { Ornament } from './components/Icons.jsx'
import {
  artists,
  documents,
  gallery,
  hours,
  navLinks,
  pricing,
  services,
  studio,
} from './data.js'

const GALLERY_PREVIEW = 16
const YEAR = new Date().getFullYear()

function SectionHead({ kicker, title, children }) {
  return (
    <div className="section-head reveal">
      <p className="kicker">{kicker}</p>
      <h2>{title}</h2>
      {children && <p className="lead">{children}</p>}
    </div>
  )
}

function Services() {
  return (
    <section id="services" className="section services">
      <div className="container services-grid">
        {services.map((s) => (
          <article key={s.title} className="service reveal">
            <Ornament name={s.icon} className="service-icon" />
            <h3>{s.title}</h3>
            <p>{s.text}</p>
            <a href="#info" className="link">
              Read more
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

function Gallery({ onOpen }) {
  const [showAll, setShowAll] = useState(false)
  const items = showAll ? gallery : gallery.slice(0, GALLERY_PREVIEW)

  return (
    <section id="gallery" className="section gallery">
      <SectionHead kicker="Check out our" title="Art Showcase">
        A look at recent work from the studio. Tap any piece to see it up close.
      </SectionHead>
      <div className="masonry">
        {items.map((img, i) => (
          <button key={img.src} className="tile reveal" onClick={() => onOpen(i)}>
            <img src={img.src} alt={img.alt} loading="lazy" decoding="async" />
            <span className="tile-label">View</span>
          </button>
        ))}
      </div>
      {!showAll && (
        <div className="center">
          <button className="btn" onClick={() => setShowAll(true)}>
            Load more work
          </button>
        </div>
      )}
    </section>
  )
}

function Artists() {
  return (
    <section id="artists" className="section artists">
      <SectionHead kicker="Meet the" title="Artists" />
      <div className="container artists-grid">
        {artists.map((a) => (
          <article key={a.name} className="artist reveal">
            <div className="artist-photo">
              {a.image ? (
                <img src={a.image} alt="" loading="lazy" />
              ) : (
                <div className="artist-placeholder">
                  <img src="/images/logo-ctc.png" alt="" loading="lazy" />
                  <span>Portfolio coming soon</span>
                </div>
              )}
            </div>
            <div className="artist-body">
              <p className="kicker">{a.role}</p>
              <h3>{a.name}</h3>
              <p>{a.text}</p>
              <a href={a.cta.href} className="link">
                {a.cta.label}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Info({ onOpenDoc }) {
  return (
    <section id="info" className="section info">
      <SectionHead kicker="Before you book" title="Studio Info" />
      <div className="container info-grid">
        <div className="pricing reveal">
          {pricing.map((p) => (
            <div key={p.label} className="price">
              <span className="price-value">{p.value}</span>
              <span className="price-label">{p.label}</span>
              <span className="price-note">{p.note}</span>
            </div>
          ))}
        </div>

        <div className="info-side reveal">
          <h3>Studio Hours</h3>
          <dl className="hours">
            {hours.map((h) => (
              <div key={h.day}>
                <dt>{h.day}</dt>
                <dd>{h.time}</dd>
              </div>
            ))}
          </dl>
          <p className="note">
            All appointments require a non-refundable deposit. We are always adding new
            photos, so check back often for updates.
          </p>

          <h3>Rates &amp; Requirements</h3>
          <div className="docs">
            {documents.map((d, i) => (
              <button key={d.src} className="doc" onClick={() => onOpenDoc(i)}>
                <img src={d.src} alt="" loading="lazy" />
                <span>{d.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [sent, setSent] = useState(false)

  // Static site: hand the message to the visitor's email app.
  // Swap this for a form service or API when the client wants a backend.
  const onSubmit = (e) => {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const subject = `Booking enquiry from ${f.get('name')}`
    const body = `${f.get('message')}\n\nName: ${f.get('name')}\nPhone: ${f.get('phone') || '-'}\nInterested in: ${f.get('service')}`
    window.location.href = `mailto:${studio.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <section id="contact" className="section contact">
      <SectionHead kicker="Ready for new ink?" title="Get in Touch">
        Call, email or drop by the studio. Have an idea in mind? Send us the details and we
        will get back to you.
      </SectionHead>
      <div className="container contact-grid">
        <div className="contact-details reveal">
          <div>
            <h3>Visit</h3>
            <a href={studio.mapsUrl} target="_blank" rel="noreferrer">
              {studio.address[0]}
              <br />
              {studio.address[1]}
            </a>
          </div>
          <div>
            <h3>Call</h3>
            <a href={studio.phoneHref}>{studio.phone}</a>
          </div>
          <div>
            <h3>Email</h3>
            <a href={`mailto:${studio.email}`}>{studio.email}</a>
          </div>
          <div className="map">
            <iframe
              title="Map to Classy Tattoo Company"
              src={studio.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <form className="form reveal" onSubmit={onSubmit}>
          <label>
            Name
            <input name="name" required autoComplete="name" />
          </label>
          <label>
            Phone
            <input name="phone" type="tel" autoComplete="tel" />
          </label>
          <label>
            Interested in
            <select name="service" defaultValue="Tattoo">
              <option>Tattoo</option>
              <option>Piercing</option>
              <option>Body jewellery</option>
              <option>Something else</option>
            </select>
          </label>
          <label className="full">
            Tell us about your idea
            <textarea name="message" rows="5" required />
          </label>
          <button className="btn btn-solid full" type="submit">
            Send enquiry
          </button>
          {sent && (
            <p className="form-note full" role="status">
              Your email app should open with your message ready to send. If it doesn’t,
              email us at {studio.email}.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <Logo />
        <nav className="footer-nav" aria-label="Footer">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <p>
          {studio.address.join(', ')} · <a href={studio.phoneHref}>{studio.phone}</a>
        </p>
        <p className="copy">
          © {YEAR} {studio.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default function App() {
  const [box, setBox] = useState({ items: [], index: null })
  const docItems = documents.map((d) => ({ src: d.src, alt: d.label }))

  return (
    <>
      <a href="#main" className="skip">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <Gallery onOpen={(i) => setBox({ items: gallery, index: i })} />
        <Artists />
        <Info onOpenDoc={(i) => setBox({ items: docItems, index: i })} />
        <Contact />
      </main>
      <Footer />
      <Lightbox
        items={box.items}
        index={box.index}
        onChange={(i) => setBox((b) => ({ ...b, index: i }))}
        onClose={() => setBox((b) => ({ ...b, index: null }))}
      />
    </>
  )
}
