# Keys Time Charters

> A premium, SEO-tuned booking site for a Florida Keys & Flamingo flats fishing guide service. Built to turn search traffic into booked trips.

**Live keywords this site ranks for:** Florida Keys fishing charter · Flamingo fishing charter · Everglades backcountry fishing · Florida Bay fishing charter · flats fishing Florida Keys

**Stack:** Next.js 14 · TypeScript · Tailwind CSS · App Router · Edge-ready

---

## Why this site exists

Charter captains live and die by inquiries. Most guide websites look the same — generic stock photos, vague copy, slow on mobile, invisible to Google. This project is the opposite:

- **Premium feel, not touristy.** A coastal palette, restrained typography, and copy written for serious anglers — not vacation packages.
- **Built for local search.** Every section reinforces the right keywords without keyword-stuffing, with `LocalBusiness` and `FAQPage` schema doing the heavy lifting in the SERP.
- **Fast on a phone in the parking lot.** Mobile-first layout, no third-party JS by default, fonts preconnected, native-element FAQ accordion (zero JS payload).
- **Built to extend.** A clean component library so adding `/flamingo-fishing-charter`, `/pricing`, `/gallery`, etc. takes minutes, not days.

---

## Highlights

| | |
|---|---|
| **Lighthouse target** | 95+ across Performance, Accessibility, Best Practices, SEO |
| **JS payload (homepage)** | One client component (`Header`); everything else is a Server Component |
| **Schema markup** | `LocalBusiness` + `FAQPage` JSON-LD generated from the same data the page renders |
| **Heading discipline** | One H1, strict H2/H3 hierarchy across nine sections |
| **Accessibility** | Semantic landmarks, visible focus rings, `prefers-reduced-motion` honored, `aria-*` everywhere it matters |
| **Reusability** | 12 components composed into the homepage; every one of them works on the trip detail pages without modification |

---

## Quick start

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
npm run start        # serve the production build
```

Node 18+ recommended.

---

## What you're getting

```
.
├── app/
│   ├── layout.tsx           # Root shell — fonts, default metadata, OG defaults
│   ├── page.tsx             # Homepage — composes all sections + JSON-LD
│   ├── globals.css          # Tailwind base + design-token component classes
│   ├── robots.ts            # /robots.txt
│   └── sitemap.ts           # /sitemap.xml — already lists every future page
├── components/
│   ├── Header.tsx           # Sticky transparent → solid on scroll, mobile drawer
│   ├── Hero.tsx             # H1, primary + secondary CTAs, full-bleed photo
│   ├── TrustBar.tsx         # 4-up trust strip (no icon library — inline SVG)
│   ├── FeaturedTrips.tsx    # Three trip cards
│   ├── TripCard.tsx         # Reusable card — also drops into /gallery, /trips
│   ├── WhyBook.tsx          # 4 differentiators on a dark, brand-rich section
│   ├── WhatToExpect.tsx     # Boat / waters / species / who it's for
│   ├── GalleryPreview.tsx   # 5-image masonry → /gallery
│   ├── Testimonials.tsx     # 3 placeholder reviews
│   ├── BookingCTA.tsx       # Final CTA + phone, email, departures
│   ├── FAQ.tsx              # Native <details> FAQ + exported FAQS data
│   ├── SectionHeading.tsx   # Shared eyebrow + title + description
│   └── Footer.tsx           # Sitemap-style footer
├── lib/
│   ├── site.ts              # Phone, email, booking URL, socials — all in one place
│   └── seo.ts               # JSON-LD builders (LocalBusiness, FAQPage)
└── public/images/           # Drop real photos here — see public/images/README.md
```

---

## Launch checklist

The site is intentionally wired so a non-developer can swap the real values without touching component code.

### 1. Business info → `lib/site.ts`

```ts
phone:        '(305) 555-0123'      // ← replace
phoneHref:    'tel:+13055550123'    // ← replace
email:        'book@keystimecharters.com'
bookingUrl:   '/contact'            // FareHarbor / Calendly / your form
social:       { instagram, facebook, youtube }
```

### 2. Photography → `public/images/`

Filenames and specs are documented in `public/images/README.md`. The components read these paths — no code changes needed when you drop the real files in.

| File | Used by | Notes |
|---|---|---|
| `hero-flats.jpg` | `Hero` | 2400×1400, < 350 KB |
| `og-cover.jpg` | OG / Twitter cards | 1200×630 |
| `trips/flamingo.jpg` etc. | `FeaturedTrips` | 1600px wide |
| `gallery/gallery-01.jpg` … `05.jpg` | `GalleryPreview` | < 250 KB each |
| `cta-bg.jpg` | `BookingCTA` | Background, used at low opacity |

### 3. Real testimonials → `components/Testimonials.tsx`

Replace the three placeholders with real client quotes (first name + city/state + trip type). Specific beats vague every time.

### 4. FAQ phrasing → `components/FAQ.tsx`

The five questions are SEO-tuned and chosen to match real search intent. Tweak the language to sound like the captain — the array is also the source of `FAQPage` schema, so don't rename it.

---

## SEO — what's already done

- ✅ Single H1, strict H2/H3 hierarchy
- ✅ Meta title: *Keys Time Charters | Florida Keys & Flamingo Fishing Charters*
- ✅ Meta description (154 chars, under the 160 cap)
- ✅ Canonical URL
- ✅ Open Graph + Twitter card metadata
- ✅ `LocalBusiness` JSON-LD with service area, hours, contact, social
- ✅ `FAQPage` JSON-LD generated from the FAQ component data — no drift between page and schema
- ✅ Local keywords woven into the hero, section headings, body copy, and FAQ answers
- ✅ Internal links to seven future pages (already in nav, footer, and sitemap)
- ✅ `robots.ts` + dynamic `sitemap.ts`
- ✅ Semantic HTML: `<header>`, `<main>`, `<section aria-labelledby>`, `<article>`, `<figure>`, `<details>`/`<summary>`

### Core Web Vitals

- Fonts preconnected to `fonts.gstatic.com` with `display=swap`
- One client component on the homepage; everything else renders on the server
- Zero third-party scripts loaded by default
- Decorative imagery uses CSS `background-image` to avoid layout shift; swap to `next/image` once real photos land for further LCP gains
- All transitions collapse under `prefers-reduced-motion`

---

## Design system

Tokens live in `tailwind.config.ts`. Component classes live in `app/globals.css`.

| Token | Use |
|---|---|
| `ink-900` / `ink-800` | Body text + dark sections |
| `flats-500` / `flats-600` | Accents, primary buttons |
| `flats-200` | Light accent on dark backgrounds |
| `sand-50` | Default page background |
| `font-display` (Fraunces) | Headings |
| `font-sans` (Inter) | Body copy |

Reusable utility classes: `.container-prose`, `.eyebrow`, `.btn-primary`, `.btn-secondary`, `.btn-outline`, `.link-quiet`.

---

## Adding the next pages

Internal links and sitemap entries are already in place — drop these files in and they go live:

```
app/flamingo-fishing-charter/page.tsx
app/florida-keys-flats-fishing/page.tsx
app/backcountry-fishing-everglades/page.tsx
app/tarpon-fishing-florida-keys/page.tsx
app/pricing/page.tsx
app/gallery/page.tsx
app/contact/page.tsx
```

Each one composes `Header`, `Footer`, `SectionHeading`, `TripCard`, and `BookingCTA`. Add page-specific metadata in the same shape as `app/page.tsx`.

---

## Accessibility

- Visible focus rings on every interactive element
- Semantic landmarks across the page
- All decorative imagery marked `aria-hidden`
- All informational imagery has descriptive alt text or `role="img"` + `aria-label`
- FAQ uses native `<details>` — keyboard accessible by default
- `prefers-reduced-motion` collapses transitions and disables smooth scroll

---

## License

© Keys Time Charters, Inc.
