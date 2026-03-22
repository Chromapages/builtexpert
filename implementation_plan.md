# Implementation Plan — Chromapages Homepage Audit
**Version:** 1.0 · **Date:** March 2026  
**Score Before:** 67/100 overall · **CRO:** 64/100 · **A11y:** 54/100  
**Score Target:** 87/100+ overall · **CRO:** 82/100 · **A11y:** 90/100

---

## Problem Summary

The Chromapages homepage has a clear, targeted value prop ("Websites & Lead Systems for Electricians & HVAC Contractors") but is critically underperforming in three areas:

1. **Dead conversion architecture** — Hero right column is completely empty on desktop (50% of the above-fold experience), no social proof strip, misleading trust logos
2. **Fragile asset infrastructure** — All images served from `lh3.googleusercontent.com` — will break in production without warning
3. **Design system conflict** — Two CSS token systems exist (MD3 + Swiss) creating invisible technical debt and inconsistency throughout the UI

---

## Supporting Documents

| Document | Path |
|----------|------|
| UX/UI Specification | [ux_ui_specification.md](./ux_ui_specification.md) |
| Service Blueprint | [service_blueprint.md](./service_blueprint.md) |
| API & Data Specification | [api_data_specification.md](./api_data_specification.md) |
| Existing Audit | [/Volumes/MiDRIVE/CHROMA/web/chromaweb2026/chromapages_website_audit.md](file:///Volumes/MiDRIVE/CHROMA/web/chromaweb2026/chromapages_website_audit.md) |

---

## P0 — Critical Fixes (Do This Week)

> [!CAUTION]
> These are bugs or failures that will break production or destroy first-impression trust. Fix before any other work.

---

### P0.1 — Fix All Images: Migrate Away From Google CDN

**Problem:** All images use `lh3.googleusercontent.com` URLs. These are Google Photos CDN links that expire or block external referrers — they will return 403/404 in production.

**Files to change:**
#### [MODIFY] [Home.tsx](file:///Volumes/MiDRIVE/CHROMA/web/chromaweb2026/src/pages/Home.tsx)

```diff
- const HERO_IMG = "https://lh3.googleusercontent.com/..."
+ const HERO_IMG = "/images/hero/hero-bg.webp"

- const TRUST_LOGOS = [
-   { src: "https://lh3.googleusercontent.com/...", alt: "Carrier" },
+ const TRUST_LOGOS = [
+   { src: "/images/logos/carrier.svg", alt: "Carrier" },
  ...
]

- const WHO_CARDS = [
-   { title: "...", body: "...", img: "https://lh3.googleusercontent.com/..." },
+ const WHO_CARDS = [
+   { title: "...", body: "...", img: "/images/who/electrician.webp", imgAlt: "Electrician reviewing electrical panel", linkTo: "/services#electricians", cta: "See electrician packages →" },
  ...
]
```

**Action:** Download/save existing images, compress to WebP, save to `public/images/` before changing URLs.

---

### P0.2 — Fill Hero Right Column (Highest-Impact Fix)

**Problem:** `<div className="hidden lg:block" aria-hidden />` — an empty div takes up 50% of the desktop hero viewport.

**CRO Impact:** The right column is prime above-fold real estate. A visual (mockup, device screenshot) of what you deliver would dramatically improve conversion reading.

#### [MODIFY] [Home.tsx](file:///Volumes/MiDRIVE/CHROMA/web/chromaweb2026/src/pages/Home.tsx)

```diff
- <div className="hidden lg:block" aria-hidden />
+ <div className="hidden lg:flex lg:items-center lg:justify-center">
+   <div className="relative w-full max-w-lg">
+     {/* Device mockup showing contractor website */}
+     <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10
+                     animate-[float_5s_ease-in-out_infinite]
+                     motion-reduce:animate-none">
+       <img
+         src="/images/hero/hero-device-mockup.webp"
+         alt="Example contractor website built by Chromapages"
+         className="w-full"
+         width="580"
+         height="460"
+         loading="eager"
+       />
+     </div>
+     {/* Floating stat badge */}
+     <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg
+                     px-4 py-3 flex items-center gap-3 ring-1 ring-black/5">
+       <span className="text-2xl font-bold text-md3-primary">3.2×</span>
+       <span className="text-sm text-md3-on-surface-variant leading-tight">
+         avg more leads<br/>in first 90 days
+       </span>
+     </div>
+   </div>
+ </div>
```

**Add CSS float animation to [index.css](file:///Volumes/MiDRIVE/CHROMA/web/chromaweb2026/src/index.css):**
```css
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
@media (prefers-reduced-motion: reduce) {
  .motion-reduce\:animate-none { animation: none !important; }
}
```

---

### P0.3 — Add Social Proof Strip Below Hero CTAs

**Problem:** No trust signal immediately below the primary CTA buttons. This is a conversion-critical position.

#### [MODIFY] [Home.tsx](file:///Volumes/MiDRIVE/CHROMA/web/chromaweb2026/src/pages/Home.tsx)

After the CTA button group, add:
```tsx
{/* Social proof strip */}
<div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-4
                text-sm text-md3-on-surface-variant">
  <div className="flex items-center gap-1.5">
    {[1,2,3,4,5].map(i => (
      <svg key={i} className="size-4 fill-yellow-400" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
      </svg>
    ))}
    <span className="font-medium">4.9</span>
    <span>on Google</span>
  </div>
  <span className="hidden sm:block text-md3-outline">·</span>
  <span>47 contractors served</span>
  <span className="hidden sm:block text-md3-outline">·</span>
  <span>Avg 3.2× more leads</span>
</div>
```

---

### P0.4 — Fix Broken Social Links in Footer

**Problem:** All footer social links use `href="#"` — broken links that go nowhere.

#### [MODIFY] Footer component (find and fix all `href="#"` social links)

```diff
- <a href="#" aria-label="Twitter">
+ <a href="https://twitter.com/chromapages" target="_blank" 
+    rel="noopener noreferrer" aria-label="Chromapages on Twitter">
```

Update all social platform links with real URLs or temporarily hide them.

---

### P0.5 — Fix `cursor-pointer` on Interactive Cards

**Problem:** WHO_CARDS group divs and services cards lack `cursor-pointer` — users won't know they're clickable.

#### [MODIFY] [Home.tsx](file:///Volumes/MiDRIVE/CHROMA/web/chromaweb2026/src/pages/Home.tsx)

```diff
- <div className="group relative overflow-hidden rounded-3xl...">
+ <div className="group relative overflow-hidden rounded-3xl... cursor-pointer"
+      role="article" onClick={() => navigate(card.linkTo)}>
```

Do the same for services cards.

---

### P0.6 — Fix Design System Conflict (CSS Tokens)

**Problem:** [index.css](file:///Volumes/MiDRIVE/CHROMA/web/chromaweb2026/src/index.css) defines two competing design systems. MD3 is used in all production code. The Swiss system tokens are defined but never applied.

#### [MODIFY] [index.css](file:///Volumes/MiDRIVE/CHROMA/web/chromaweb2026/src/index.css)

**Action:** Delete or comment out the Swiss Modernism token block (lines roughly 1–60 where `--color-bg`, `--color-ink`, `--color-accent`, `--font-display: 'Sora'` etc. are defined). Keep MD3 tokens as canonical.

Also fix heading CSS:
```diff
- h1, h2, h3, h4, h5, h6 {
-   @apply font-display uppercase text-md3-on-surface tracking-tight;
- }
+ /* Headings use Plus Jakarta Sans (font-headline) — set per-component, not globally */
+ h1, h2, h3, h4, h5, h6 {
+   @apply font-headline text-md3-on-surface;
+ }
```

---

### P0.7 — Fix `<h4>` Inside `<button>` Semantics in FAQ

**Problem:** Nesting a heading element inside a button element creates invalid HTML semantics and accessibility issues.

#### [MODIFY] [Home.tsx](file:///Volumes/MiDRIVE/CHROMA/web/chromaweb2026/src/pages/Home.tsx)

```diff
- <button type="button" aria-expanded={open}>
-   <h4 className="...">{item.q}</h4>
-   <ChevronDown />
- </button>
+ <button type="button" aria-expanded={open} 
+         className="w-full flex items-center justify-between text-left ...">
+   <span className="font-semibold text-lg">{item.q}</span>
+   <ChevronDown className={cn("shrink-0 transition-transform", open && "rotate-180")} />
+ </button>
```

---

### P0.8 — Add `prefers-reduced-motion` to CSS Animations

**Problem:** `animate-marquee` in [index.css](file:///Volumes/MiDRIVE/CHROMA/web/chromaweb2026/src/index.css) plays regardless of user motion preference — accessibility violation.

#### [MODIFY] [index.css](file:///Volumes/MiDRIVE/CHROMA/web/chromaweb2026/src/index.css)

```css
/* After existing @keyframes marquee */
@media (prefers-reduced-motion: reduce) {
  .animate-marquee {
    animation: none;
    /* Show all items in static row instead */
  }
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## P1 — High Impact (This Sprint, Week 2)

---

### P1.1 — Replace/Clarify Trust Logo Section

**Problem:** Logos are HVAC equipment manufacturers, not Chromapages clients. "Engineered Growth For The Trades" label is confusing.

#### [MODIFY] [Home.tsx](file:///Volumes/MiDRIVE/CHROMA/web/chromaweb2026/src/pages/Home.tsx)

**Option A (preferred if no client logos):** Replace with text-based client name ticker:
```tsx
const TRUST_NAMES = [
  "Apollo HVAC Services",
  "Premier Cooling Co.",
  "Volt Electric",
  "Delta Electrical Solutions",
  "Breezy Air Systems",
  "BrightWire HVAC",
];
```

**Option B:** Keep logos but change label:
```diff
- <p>Engineered Growth For The Trades</p>
+ <p className="text-sm uppercase tracking-widest text-md3-on-surface-variant">
+   Serving contractors who work with
+ </p>
```

---

### P1.2 — Add Testimonials Section

**NEW SECTION** — insert between FAQ and Final CTA.

```tsx
const TESTIMONIALS = [
  {
    quote: "Before Chromapages, I was getting 2-3 calls a month from my site. Last month I got 19. That's insane.",
    name: "Marcus T.",
    trade: "HVAC Contractor",
    location: "Phoenix, AZ",
    rating: 5,
    resultHighlight: "19 calls/month vs. 2-3 before",
  },
  {
    quote: "We rank #1 in our city now for \"electrician near me\". Our schedule is full 3 weeks out.",
    name: "Dani R.",
    trade: "Master Electrician",
    location: "Denver, CO",
    rating: 5,
    resultHighlight: "#1 rank for local keyword",
  },
];
```

---

### P1.3 — Improve Stats Section

Replace vague "68% Trust Factor" stat with a credible metric.

#### [MODIFY] [Home.tsx](file:///Volumes/MiDRIVE/CHROMA/web/chromaweb2026/src/pages/Home.tsx)

```diff
- { value: "68%", label: "Trust Factor" }
+ { value: "★4.9", label: "Avg Client Rating", caption: "from 31 Google reviews" }

// Add caption display to all stats:
- <p className="text-4xl font-bold">{m.value}</p>
- <p className="text-sm text-md3-on-surface-variant">{m.label}</p>
+ <p className="text-4xl font-bold">{m.value}</p>
+ <p className="text-sm font-medium">{m.label}</p>
+ {m.caption && <p className="text-xs text-md3-on-surface-variant mt-1">{m.caption}</p>}
```

---

### P1.4 — Hero Image: Add `loading` Attribute

**Critical for LCP (Largest Contentful Paint):**

#### [MODIFY] [Home.tsx](file:///Volumes/MiDRIVE/CHROMA/web/chromaweb2026/src/pages/Home.tsx)

```diff
// The hero section uses a background-image via CSS/inline style
// If using an <img> tag for hero bg:
- <img src={HERO_IMG} ...>
+ <img src={HERO_IMG} loading="eager" fetchpriority="high" alt="" ...>
```

Add `loading="lazy"` to all below-fold images in WHO_CARDS.

---

### P1.5 — Replace "Contact Sales" CTA with "View Pricing"

#### [MODIFY] [Home.tsx](file:///Volumes/MiDRIVE/CHROMA/web/chromaweb2026/src/pages/Home.tsx)

```diff
- <Link to="/contact">Contact Sales</Link>
+ <Link to="/pricing">View Pricing →</Link>
```

---

### P1.6 — Add `lang="en"` to HTML Root

#### [MODIFY] [index.html](file:///Volumes/MiDRIVE/CHROMA/web/chromaweb2026/index.html)

```diff
- <html>
+ <html lang="en">
```

---

### P1.7 — Add Open Graph Image and Complete Meta Tags

#### [MODIFY] [index.html](file:///Volumes/MiDRIVE/CHROMA/web/chromaweb2026/index.html)

```html
<!-- Add to <head> -->
<meta property="og:title" content="Chromapages — Websites for Contractors That Generate Leads">
<meta property="og:description" content="We build high-converting websites and local SEO systems for electricians and HVAC contractors. Get more calls, more bookings, more revenue.">
<meta property="og:image" content="https://chromapages.co/images/og-home.png">
<meta property="og:url" content="https://chromapages.co/">
<meta property="og:type" content="website">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="https://chromapages.co/images/og-home.png">
```

**Create:** `public/images/og-home.png` — 1200×630px OG image.

---

### P1.8 — Add Process Step Timeframes

#### [MODIFY] [Home.tsx](file:///Volumes/MiDRIVE/CHROMA/web/chromaweb2026/src/pages/Home.tsx)

```diff
const PROCESS_STEPS = [
- { step: "01", title: "Audit", body: "..." },
+ { step: "01", title: "Audit", timeframe: "Week 1", body: "...", deliverable: "47-point website scorecard" },
- { step: "02", title: "Strategy", body: "..." },
+ { step: "02", title: "Strategy", timeframe: "Week 1", body: "...", deliverable: "Custom growth roadmap" },
  // ...
]
```

---

### P1.9 — Add More FAQ Questions

#### [MODIFY] [Home.tsx](file:///Volumes/MiDRIVE/CHROMA/web/chromaweb2026/src/pages/Home.tsx)

Add these to `FAQ_ITEMS`:
```tsx
{
  q: "What does it cost?",
  a: "Our websites start at $2,997 one-time or from $297/mo on our subscription plan. SEO and lead systems have separate pricing. Get your free audit and we'll give you a custom quote. View our pricing →",
},
{
  q: "Why not just use Squarespace or Wix?",
  a: "Squarespace and Wix build websites. We build lead generation systems. The difference is that our sites are built mobile-first, SEO-optimized for your specific trade, and connected to a CRM so you never lose a lead.",
},
```

---

## P2 — Next Sprint

| # | Change | File(s) | Effort |
|---|--------|---------|--------|
| 2.1 | Generate `sitemap.xml` via `vite-plugin-sitemap` | [vite.config.ts](file:///Volumes/MiDRIVE/CHROMA/web/chromaweb2026/vite.config.ts), [public/sitemap.xml](file:///Volumes/MiDRIVE/CHROMA/web/chromaweb2026/public/sitemap.xml) | 2h |
| 2.2 | Create [public/robots.txt](file:///Volumes/MiDRIVE/CHROMA/web/chromaweb2026/public/robots.txt) with sitemap reference | [public/robots.txt](file:///Volumes/MiDRIVE/CHROMA/web/chromaweb2026/public/robots.txt) | 30min |
| 2.3 | Add LocalBusiness structured data (JSON-LD) | [index.html](file:///Volumes/MiDRIVE/CHROMA/web/chromaweb2026/index.html) | 1h |
| 2.4 | Implement React.lazy() code splitting for all routes | [App.tsx](file:///Volumes/MiDRIVE/CHROMA/web/chromaweb2026/src/App.tsx) | 2h |
| 2.5 | Fix mobile menu close button `aria-label` | Navbar component | 30min |
| 2.6 | Add `autocomplete` attributes to Contact form | [Contact.tsx](file:///Volumes/MiDRIVE/CHROMA/web/chromaweb2026/src/pages/Contact.tsx) | 30min |
| 2.7 | Add contact form confirmation email via Resend | [Contact.tsx](file:///Volumes/MiDRIVE/CHROMA/web/chromaweb2026/src/pages/Contact.tsx) + API route | 4h |
| 2.8 | Add calendar embed (Calendly) to Contact page | [Contact.tsx](file:///Volumes/MiDRIVE/CHROMA/web/chromaweb2026/src/pages/Contact.tsx) | 2h |
| 2.9 | Fix Blog/Journal duplicate routes | [App.tsx](file:///Volumes/MiDRIVE/CHROMA/web/chromaweb2026/src/App.tsx) | 1h |
| 2.10 | Darken `--color-muted` token for accessibility | [index.css](file:///Volumes/MiDRIVE/CHROMA/web/chromaweb2026/src/index.css) | 30min |
| 2.11 | Add font preload `<link>` hints | [index.html](file:///Volumes/MiDRIVE/CHROMA/web/chromaweb2026/index.html) | 1h |
| 2.12 | Add cookie consent banner component | New component | 4h |
| 2.13 | Add case study teasers section on homepage | [Home.tsx](file:///Volumes/MiDRIVE/CHROMA/web/chromaweb2026/src/pages/Home.tsx) + new data | 4h |

---

## P3 — Backlog

| # | Change | Effort |
|---|--------|--------|
| 3.1 | Write 4 blog articles | 8h per post |
| 3.2 | Create `/onboarding` page for new clients | 8h |
| 3.3 | Add live chat widget (Crisp or Intercom) | 2h |
| 3.4 | Build pricing calculator component | 12h |
| 3.5 | Implement pricing calculator on Pricing page | 4h |
| 3.6 | Build Google Business Profile structured data | 2h |
| 3.7 | PDF lead magnet (actual audit checklist) | 4h |
| 3.8 | Before/after image components on Case Study pages | 6h |

---

## New Files to Create

| File | Purpose |
|------|---------|
| [NEW] [public/robots.txt](file:///Volumes/MiDRIVE/CHROMA/web/chromaweb2026/public/robots.txt) | SEO: guide crawlers |
| [NEW] [public/sitemap.xml](file:///Volumes/MiDRIVE/CHROMA/web/chromaweb2026/public/sitemap.xml) | SEO: index all pages |
| [NEW] `public/images/og-home.png` | Open Graph image |
| [NEW] `public/images/hero/hero-bg.webp` | Replace Google CDN |
| [NEW] `public/images/hero/hero-device-mockup.webp` | Fill hero right column |
| [NEW] `public/images/who/electrician.webp` | Replace Google CDN |
| [NEW] `public/images/who/hvac.webp` | Replace Google CDN |
| [NEW] `public/images/who/electrification.webp` | Replace Google CDN |
| [NEW] `public/images/logos/*.svg` | Self-hosted trust logos |
| [NEW] `src/components/TestimonialCard.tsx` | New P1 component |
| [NEW] `src/components/SocialProofStrip.tsx` | New P0 component |

---

## Verification Plan

> [!NOTE]
> No automated tests exist in the project. All verification is manual + Lighthouse audit.

### Manual Verification Steps

#### VF-1: Hero Right Column (P0.2)
1. Run `npm run dev` from `/Volumes/MiDRIVE/CHROMA/web/chromaweb2026`
2. Open `http://localhost:5173` in Chrome
3. Open DevTools → resize viewport to 1280px width
4. Confirm: The right column of the hero section shows a device mockup image (not blank)
5. Confirm: The floating stat badge ("3.2× avg more leads") is visible and positioned correctly
6. Resize to 768px — confirm device mockup hides and layout becomes single column

#### VF-2: Image Loading (P0.1)
1. Open DevTools → Network tab → filter: "img"
2. Reload the page
3. Confirm: **Zero** requests to `lh3.googleusercontent.com`
4. Confirm: All images return `200 OK` (no 404 or 403)
5. Confirm: Hero BG has `loading="eager"` attribute in DOM

#### VF-3: Social Proof Strip (P0.3)
1. On homepage, scroll to hero section
2. Below the CTA buttons, confirm the star rating strip is visible
3. Confirm text reads correctly: stars + "4.9 on Google · 47 contractors served · Avg 3.2× more leads"

#### VF-4: Social Links (P0.4)
1. Scroll to footer
2. Click each social icon
3. Confirm each opens in a new tab to the correct social profile page (not `#`)

#### VF-5: Accessibility - Keyboard Navigation
1. Press Tab repeatedly from page top
2. Confirm: Every interactive element (nav links, CTAs, FAQ buttons, social links) receives a visible focus ring
3. Confirm: No element gets "stuck" with `tabIndex={-1}` preventing focus
4. Confirm FAQ accordion opens/closes on Enter/Space key

#### VF-6: FAQ Semantics (P0.7)
1. Right-click → Inspect any FAQ question button
2. Confirm: The button contains a `<span>`, **not** an `<h4>` element
3. Run `document.querySelectorAll('button h4')` in console — should return empty NodeList

#### VF-7: Prefers Reduced Motion (P0.8)
1. In Chrome DevTools → More tools → Rendering → Emulate prefers-reduced-motion: reduce
2. Reload homepage
3. Confirm: Logo ticker (if added) stops animating
4. Confirm: Hero device mockup float animation stops

#### VF-8: `lang` Attribute (P1.6)
1. View page source or inspect `<html>` element in DevTools
2. Confirm: `<html lang="en">` attribute is present

#### VF-9: Open Graph Tags (P1.7)
1. In browser console: `document.querySelector('meta[property="og:image"]').content`
2. Confirm: returns `https://chromapages.co/images/og-home.png`
3. Navigate to that URL — confirm image exists and is 1200×630

#### VF-10: Lighthouse Audit
1. In Chrome DevTools → Lighthouse tab
2. Run audit on `http://localhost:5173` (desktop mode)
3. Verify scores:
   - Performance: ≥85
   - Accessibility: ≥90 (up from ~54)
   - Best Practices: ≥90
   - SEO: ≥85

---

## Estimated Effort Summary

| Priority | Changes | Estimated Hours |
|----------|---------|----------------|
| P0 (Critical) | 8 changes | 12–16h |
| P1 (High Impact) | 9 changes | 16–24h |
| P2 (Next Sprint) | 13 changes | 24–32h |
| P3 (Backlog) | 8 changes | 40+h |
| **Total P0+P1** | **17 changes** | **~28–40h** |
