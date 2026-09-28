# Desi Foods — website (Next.js)

Next.js (App Router, TypeScript) site for **Desi Foods (دیسی فوڈز)**, Abdullah Centre, FB Area Block 16,
Karachi (opposite Lucky One Mall). The page is statically prerendered.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
npm run lint     # type-check
```

## Features
- Hero with logo, Urdu + English branding, call / WhatsApp buttons
- Signature dumba dishes, tabbed full menu, family / dawat platters
- Order cart: add dishes, then send the full order to WhatsApp (0300-2926900)
- Table booking form (sends to WhatsApp), Google Map, timings, gallery, reviews
- Mobile responsive, scroll animations, Restaurant JSON-LD for SEO

## Project structure

```
app/layout.tsx       fonts, metadata, JSON-LD, header, cart provider
app/page.tsx         all page sections
app/globals.css      design system and responsive rules
components/          Header, Cart (context + drawer + AddButton), ClientBits
                     (Photo, MenuTabs, BookingForm, RevealObserver), Icons
lib/data.ts          business info, specials, menu, platters, gallery, reviews: edit here
public/images/       logo
```

## Replace before going live (placeholders)
- **Prices and timings**: sample values, confirm with the owner (`lib/data.ts`)
- **Reviews**: sample text, replace with real Google reviews
- **Photos**: stock Unsplash dish photos with a gradient fallback. Put the restaurant's own photos
  in `public/images/` and point the `img` fields in `lib/data.ts` at `/images/<file>.jpg`
- Instagram / TikTok links in the footer

## Deploy
Push to GitHub and import the repo on [Vercel](https://vercel.com/new). No configuration needed.
