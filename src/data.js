// All studio content lives here so it can be edited without touching layout code.
// Source: classytattoo.com (original site).

export const studio = {
  name: 'Classy Tattoo Company',
  shortName: 'Classy Tattoo',
  tagline: 'Here for all your tattoo, body piercing and body jewellery needs.',
  address: ['251 Water St, McNeill Mall', 'Summerside, PEI C1N 1B5'],
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=251+Water+St+Summerside+PEI+C1N+1B5',
  mapEmbed:
    'https://www.google.com/maps?q=251+Water+St,+Summerside,+PE+C1N+1B5&output=embed',
  phone: '902-436-8527',
  phoneHref: 'tel:+19024368527',
  email: 'classytattoo@bellaliant.com',
}

export const hours = [
  { day: 'Tuesday – Saturday', time: '11am – 6pm' },
  { day: 'Sunday & Monday', time: 'Closed' },
]

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#gallery', label: 'Portfolio' },
  { href: '#artists', label: 'Artists' },
  { href: '#info', label: 'Studio Info' },
  { href: '#contact', label: 'Contact' },
]

export const heroSlides = [
  {
    kicker: 'Tattoo studio',
    title: 'Classy Tattoo',
    text: 'Custom tattoo work, professional body piercing and quality body jewellery in the heart of Summerside, PEI.',
    image: '/images/gallery/tattoo-12.jpg',
  },
  {
    kicker: 'Custom artwork',
    title: 'Your Story',
    text: 'Bring us an idea, a sketch or a feeling. We will turn it into a piece you are proud to wear for life.',
    image: '/images/gallery/tattoo-33.jpg',
  },
  {
    kicker: 'Piercing & jewellery',
    title: 'Body Art',
    text: 'Body piercings start at $90, with a wide selection of jewellery to choose from in studio.',
    image: '/images/gallery/tattoo-32.jpg',
  },
]

export const services = [
  {
    icon: 'burst',
    title: 'Tattoos',
    text: 'Custom tattoo work, done with care in a professional studio. $150/hr plus tax, one hour minimum.',
  },
  {
    icon: 'prism',
    title: 'Piercing',
    text: 'Professional body piercing, starting at $90 and up depending on the jewellery you choose.',
  },
  {
    icon: 'eclipse',
    title: 'Jewellery',
    text: 'Visit our retail store for body jewellery to upgrade, swap or complete your look.',
  },
]

// Al Ferrish portfolio, downloaded from the original site.
export const gallery = Array.from({ length: 36 }, (_, i) => {
  const n = String(i + 1).padStart(2, '0')
  return { src: `/images/gallery/tattoo-${n}.jpg`, alt: `Tattoo by Al Ferrish, piece ${i + 1}` }
})

export const artists = [
  {
    name: 'Al Ferrish',
    role: 'Tattoo Artist',
    image: '/images/gallery/tattoo-03.jpg',
    text: 'Browse a selection of Al’s recent work in the portfolio above, then call or stop by the studio to talk about your next piece.',
    cta: { href: '#gallery', label: 'View portfolio' },
  },
  {
    name: 'Amanda Ferrish',
    role: 'Artist',
    image: null, // no portfolio on the original site yet
    text: 'Amanda’s portfolio is being updated. Check back soon, or contact the studio to book with her directly.',
    cta: { href: '#contact', label: 'Get in touch' },
  },
]

export const pricing = [
  { label: 'Tattoo hourly rate', value: '$150', note: 'plus tax · 1 hour minimum' },
  { label: 'Body piercing', value: '$90+', note: 'depending on jewellery choice' },
  { label: 'Tattoo deposit', value: '$60', note: 'non-refundable' },
  { label: 'Piercing deposit', value: '$40', note: 'non-refundable' },
]

export const documents = [
  { src: '/images/info/tattoo-rates.jpg', label: 'Tattoo Rates' },
  { src: '/images/info/piercing-prices.jpg', label: 'Piercing Prices' },
  { src: '/images/info/age-1.jpg', label: 'Age Requirements (1/2)' },
  { src: '/images/info/age-2.jpg', label: 'Age Requirements (2/2)' },
]
