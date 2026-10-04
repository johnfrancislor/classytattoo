# Classy Tattoo Company — site revamp

Static redesign of [classytattoo.com](http://www.classytattoo.com/) built with Vite + React.

```bash
npm install
npm run dev      # local dev server
npm run build    # static output in dist/ — host anywhere (Netlify, Vercel, Cloudflare Pages, S3)
```

## Where things are

- `src/data.js`: all content (hours, prices, contact info, hero slides, artists, gallery list). Edit this file to change the copy.
- `src/App.jsx`: page sections. `src/components/` holds the header, hero slider, lightbox and icons.
- `src/index.css`: all styles. Theme colours and fonts are CSS variables at the top.
- `public/images/gallery/`: portfolio photos taken from the original site, resized and with the old bevelled frames cropped off.
- `public/images/info/`: the original price sheets and age requirement pages.
- `public/images/logo-ctc.png`: the CTC monogram, extracted from the original banner as white on transparent.

## Backend-ready spots (not wired yet)

- **Contact form** (`Contact` in `src/App.jsx`): currently opens the visitor's email app with the message filled in. Swap `onSubmit` for a form service (Formspree, Netlify Forms) or an API.
- **Booking / deposits**: the site shows deposit amounts only. Online booking or payments would replace the form.
- **Gallery**: a static list in `data.js`. It could move to a CMS so the studio can upload photos themselves.
