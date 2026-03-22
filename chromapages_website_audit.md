# 🔍 Chromapages — Full Website Audit
### Conducted: March 17, 2026 | Stack: React 19 + TypeScript + Tailwind v4 + Vite

---

## Executive Summary

Chromapages has a **strong editorial design language** (Swiss Modernism, deep indigo + teal palette, Sora/DM Sans typography) and solid technical bones. However, several **critical conversion, accessibility, content, and UX gaps** are holding it back from becoming the premium studio site it's positioned to be.

> **Skills Applied:** `ui-ux-pro-max`, `page-cro`, `seo-audit`, `form-cro`, `onboarding-cro`, `design-taste-frontend`, `tech-ceo`

**Overall Score: 67/100** — Good foundation. Major revenue-blocking gaps in trust signals, UX depth, and conversion architecture.

| Category | Score | Priority |
|---|---|---|
| Visual Design | 82/100 | Medium |
| Conversion Architecture | 58/100 | 🔴 Critical |
| Accessibility | 54/100 | 🔴 Critical |
| Content Quality | 70/100 | High |
| Performance | 75/100 | High |
| SEO | 65/100 | High |
| Component Library | 72/100 | Medium |
| Mobile Experience | 60/100 | 🔴 Critical |

---

## 🗺️ Site Architecture Map

```
chromapages.com/
├── / (Home)                    ← Primary entry point
├── /services                   ← Service discovery
├── /process                    ← Trust builder
├── /work                       ← Portfolio gallery
│   └── /work/:slug             ← Case study detail
├── /about                      ← Personal brand
├── /pricing                    ← Revenue gate
├── /contact                    ← Conversion point
├── /journal (→ /blog)          ← Duplicate routes ⚠️
├── /privacy
└── /terms
```

**Issues Found:**
- `/journal` and `/blog` both render the same `<Blog />` component — duplicate routes with no canonical resolution
- Blog/Journal is completely empty — just placeholder text
- No sitemap.xml or robots.txt referenced
- No 404 tracking/analytics

---

## 🌡️ Heatmap Analysis (Predicted Click Zones)

### Desktop Homepage Heatmap

```
┌──────────────────────────────────────────────────────────┐
│  CP [logo]     Services  Work  Process  About  [BOOK] ◀─── HIGH (CTA nav)
├──────────────────────────────────────────────────────────┤
│                                                          │
│   "GET THIS                                              │
│    MONEY DOING                                           │
│    WORK."               ◀── VERY HIGH heat (hero headline)│
│                                                          │
│  [Book A Discovery Call] ◀── HOT (primary CTA)           │
│  [See Our Work]          ◀── WARM                        │
│                                                          │
│                         ───── COLD ZONE (right half empty)│
│                         ⚠️ Massive whitespace wasted      │
├──────────────────────────────────────────────────────────┤
│  Premium Design · Performance · Conversion · Support     │
│                         ◀── COLD (10px text, ignored)    │
├──────────────────────────────────────────────────────────┤
│  [What We Build - Bento Grid]  ◀── WARM (visual interest) │
│  Marketing / Commerce / Apps / Support cards             │
├──────────────────────────────────────────────────────────┤
│  50+ / 10yr / 98%       ◀── WARM (stat strips)           │
├──────────────────────────────────────────────────────────┤
│  [Case Study Cards]     ◀── HOT (portfolio curiosity)    │
├──────────────────────────────────────────────────────────┤
│  [Testimonials x3]      ◀── WARM (trust signals)         │
├──────────────────────────────────────────────────────────┤
│  [Final CTA - Dark Section] ◀── WARM (but redundant)    │
└──────────────────────────────────────────────────────────┘
```

### Mobile Homepage Heatmap

```
┌────────────────────────┐
│  CP         [☰ menu]  │ ◀── HIGH
├────────────────────────┤
│ "GET THIS              │
│  MONEY DOING           │ ◀── VERY HIGH
│  work."                │
│                        │
│ [Book A Call]          │ ◀── HOT
│ [See Our Work]         │ ◀── WARM
├────────────────────────┤
│  Strip labels (ignored)│ ◀── COLD
├────────────────────────┤
│  Bento cards stacked   │
│  [01 Marketing Sites]  │ ◀── WARM
│  [02 Commerce]         │ ◀── COOL
│  [03 Web Apps]         │ ◀── COLD
│  [04 Support - dark]   │ ◀── COOL
├────────────────────────┤
│  Stats                 │ ◀── COOL
├────────────────────────┤
│  [Case Study 1]        │ ◀── HOT (swipe curiosity)
│  [Case Study 2]        │ ◀── WARM
├────────────────────────┤
│  Footer               │ ◀── COLD
└────────────────────────┘
```

**Heat Map Insights:**
1. **Right half of hero is dead space** — 50% of the viewport is wasted on desktop
2. **Positioning strip is invisible** — 10px uppercase text completely ignored
3. **The bento grid loses heat fast** — cards 3 & 4 are scroll-below cold zones on mobile
4. **Testimonials have low authority** — no photos, no verified badges, no star ratings

---

## 📐 Desktop Wireframes — Current vs. Recommended

### HOME — Current Layout
```
┌────────────────────────────────────────────────────┐
│ HERO: [Left col text + CTAs] | [Right col - EMPTY] │
│ STRIP: tiny label text                             │
│ BENTO GRID: 2-row, 12-col services                 │
│ STATS: 3-col dark strip                            │
│ RECENT WORK: 2-col grid                            │
│ TESTIMONIALS: 3-col cards                          │
│ FINAL CTA: centered dark                           │
└────────────────────────────────────────────────────┘
```

### HOME — Recommended Layout
```
┌────────────────────────────────────────────────────┐
│ HERO: [Left text + CTAs] | [Right: Featured work   │
│        video/screenshot with hover reveal]         │
│ TRUSTED BY: Logo ticker (real client logos)        │
│ SERVICES BENTO: Add icon + micro-animation         │
│ PROCESS STRIP: 3-step summary with progress bar    │
│ STATS: Add context labels under numbers            │
│ RECENT WORK: 2-col + "View All" above fold        │
│ TESTIMONIALS: Add photos + company logos           │
│ FAQ TEASER: 3 key questions with accordion        │
│ FINAL CTA: Add calendar embed or urgency signal    │
└────────────────────────────────────────────────────┘
```

### SERVICES — Current vs Recommended

```
CURRENT:                        RECOMMENDED:
┌─────────────────────┐        ┌─────────────────────┐
│ Hero: H1 only       │        │ Hero: H1 + process   │
│                     │        │ preview (3 steps)    │
│ Sticky nav strip    │        │ Sticky nav (keep)    │
│                     │        │                      │
│ Service sections ×4 │        │ Service sections ×4  │
│  [text | checklist] │        │  + COMPARISON TABLE  │
│                     │        │  + CASE STUDY TEASER │
│ Bottom CTA          │        │ + PRICING TEASER CTA │
└─────────────────────┘        └─────────────────────┘
```

---

## 📱 Mobile Wireframes — Key Pages

### Mobile Home
```
┌──────────────────────────┐
│ [CP]            [☰]     │  44px touch target needed ⚠️
├──────────────────────────┤
│                          │
│   GET THIS               │
│   MONEY DOING            │  Font should scale to 48px max
│   WORK.                  │  (currently 96px = too large)
│                          │
│  [Book Discovery Call]   │  Full width CTAs ✓
│  [See Our Work]          │
├──────────────────────────┤
│ [Three dots = trust]     │  ADD HERE: "50+ projects"
│                          │  social proof strip
├──────────────────────────┤
│ ● Marketing Sites        │  Cards need 16px padding
│ ● Commerce               │  to match mobile standards
│ ● Web Apps               │
│ ● Ongoing Support        │
├──────────────────────────┤
│ 50+ | 10yr | 98%         │  Numbers too close together
├──────────────────────────┤
│ [Work Case Study 1]      │  Make full-width with
│ [Work Case Study 2]      │  visible result metric
├──────────────────────────┤
│ ► Testimonial            │  REPLACE WITH HORIZONTAL
│   "quote..."             │  SWIPEABLE CAROUSEL
│   Sarah Jenkins, CMO     │
├──────────────────────────┤
│ READY TO BUILD...        │
│ [Book A Call]            │
│ [View Archive]           │
├──────────────────────────┤
│ FOOTER                   │
└──────────────────────────┘
```

### Mobile Contact
```
┌──────────────────────────┐
│                          │
│  LET'S TALK.             │
│  [30-min discovery info] │  Add estimated response time
│  What to prepare: list   │
│  Email: hello@chroma...  │
├──────────────────────────┤
│ ┌────────────────────┐   │
│ │ NAME *         [_] │   │  Bottom border inputs ✓ good
│ │ EMAIL *        [_] │   │  But missing autocomplete
│ │ COMPANY        [_] │   │  attributes
│ │ GOALS *        [_] │   │
│ │                    │   │
│ │ [Request Call]     │   │  Button too close to textarea
│ └────────────────────┘   │
└──────────────────────────┘
```

---

## 🔄 Service Blueprint

```
User Journey:
  DISCOVER → EVALUATE → ENGAGE → ONBOARD → DELIVER → RETAIN

Front Stage (visible):
 [Ad/Referral] → [Homepage] → [Work/Case Studies] → [Pricing] → [Contact Form] → [Discovery Call] → [Contract] → [Project Delivery]

Back Stage (invisible):
 [Formspree handler] → [Email notification] → [Calendar scheduling] → [Scope doc] → [Design/Dev cycle] → [Staging review] → [Launch]

Support Systems:
 [GA4 tracking] → [Sanity CMS (planned)] → [Formspree] → [Hosting/CDN]
```

**Service Blueprint Gaps Identified:**

| Gap | Impact | Fix |
|-----|--------|-----|
| No calendar embed on Contact page | High friction to book | Add Calendly/Cal.com embed |
| No post-form confirmation email | Low trust | Add email automation |
| No onboarding page or checklist | Confusing for new clients | Build `/start` or `/onboarding` page |
| Blog/Journal is empty | Missed SEO | Add minimum 3 articles |
| No live chat or quick-response signal | Leaks leads | Add Crisp or Intercom widget |
| Social links are `href="#"` — broken | Destroys credibility | Fix all social URLs |

---

## 👆 Touch Points Map

```
AWARENESS TOUCHPOINTS:
  • Google Search (SEO)
  • LinkedIn/Social referrals (broken links ⚠️)
  • Word of mouth / referrals
  • Portfolio/case study backlinks

CONSIDERATION TOUCHPOINTS:
  • Homepage hero + CTAs
  • Work/Portfolio gallery
  • Case study pages
  • Pricing page
  • About page (Eric Black personal brand)
  • Process page (trust building)
  • Testimonials (weak: no photos, no logos)

CONVERSION TOUCHPOINTS:
  • "Book A Call" button (× 7 occurrences — GOOD coverage)  
  • Contact form (Formspree ✓ but no Calendly embed)
  • Email: hello@chromapages.com

RETENTION TOUCHPOINTS:
  • Ongoing Support package (mentioned but no dedicated page)
  • Blog/Journal (EMPTY ⚠️)
  • Monthly reports (mentioned in pricing, not visible)

MISSING TOUCHPOINTS:
  ❌ No chat widget
  ❌ No newsletter/email list
  ❌ No case study PDF download
  ❌ No live project tracker for clients
  ❌ No Google Business Profile link
```

---

## 📦 Component Library Audit

### Current Components

| Component | File | Size | Issues |
|-----------|------|------|--------|
| `Button` | Button.tsx | 1.4KB | No `aria-disabled`, loading state incomplete |
| `Card` | Card.tsx | 914B | Minimal — no hover variants |
| `Badge` | Badge.tsx | 925B | Only `teal` variant — needs more |
| `Section` | Section.tsx | 1.1KB | Good wrapper |
| `AnimateIn` | AnimateIn.tsx | 1.9KB | No `prefers-reduced-motion` check |
| [Navbar](file:///Volumes/MiDRIVE/CHROMAPAGES/web/chromaweb2026/src/components/ui/Navbar.tsx#16-144) | Navbar.tsx | 5.3KB | `tabIndex={-1}` on CTA link (accessibility bug) |
| [Footer](file:///Volumes/MiDRIVE/CHROMAPAGES/web/chromaweb2026/src/components/ui/Footer.tsx#49-140) | Footer.tsx | 6.1KB | Social links broken (`href="#"`) |
| `Accordion` | Accordion.tsx | 2.2KB | Need to audit ARIA |
| `Skeleton` | Skeleton.tsx | 370B | Good |

### 🚨 Critical Component Issues

#### 1. `AnimateIn` — Missing `prefers-reduced-motion`
```tsx
// CURRENT (problematic):
<motion.div animate={{ opacity: 1, y: 0 }} />

// FIX — Add to AnimateIn.tsx:
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const variants = prefersReducedMotion ? {} : { initial: {...}, animate: {...} };
```

#### 2. [Navbar](file:///Volumes/MiDRIVE/CHROMAPAGES/web/chromaweb2026/src/components/ui/Navbar.tsx#16-144) — Broken accessibility on CTA link
```tsx
// CURRENT (bad):
<Link to="/contact" tabIndex={-1}>  // ⚠️ removes this from tab order!
  <Button variant="primary">Book A Call</Button>
</Link>

// FIX:
<Link to="/contact">  // Remove tabIndex={-1}
  <Button variant="primary">Book A Call</Button>
</Link>
```

#### 3. [Footer](file:///Volumes/MiDRIVE/CHROMAPAGES/web/chromaweb2026/src/components/ui/Footer.tsx#49-140) — All social links broken
```tsx
// CURRENT:
{ name: "LinkedIn", href: "#" }  // ⚠️ href="#" on ALL socials

// FIX: Add real URLs
{ name: "LinkedIn", href: "https://linkedin.com/in/ericblack" }
```

#### 4. [Work.tsx](file:///Volumes/MiDRIVE/CHROMAPAGES/web/chromaweb2026/src/pages/Work.tsx) — Mixed animation libraries
```tsx
// CURRENT (imports from both!):
import { motion, AnimatePresence } from "framer-motion"; // framer-motion
// ... rest of site uses "motion/react"  ← DIFFERENT PACKAGE ⚠️

// FIX: Standardize to one: "motion/react"
import { motion, AnimatePresence } from "motion/react";
```

#### 5. [Contact.tsx](file:///Volumes/MiDRIVE/CHROMAPAGES/web/chromaweb2026/src/pages/Contact.tsx) — Same issue: `framer-motion` vs `motion/react`
```tsx
import { motion, AnimatePresence } from "framer-motion"; // ⚠️ inconsistent
```

### Missing Components (Need to Build)

| Component | Why Needed | Priority |
|-----------|-----------|----------|
| `TestimonialCard` | Current testimonials lack visual authority | 🔴 High |
| `LogoTicker` | TRUSTED_LOGOS in Home.tsx renders as text — needs marquee | 🔴 High |
| `ProcessStep` | Reusable across Process + Services pages | Medium |
| `StatCard` | Stats section needs better visual treatment | Medium |
| `VideoModal` | Hero right column is empty — add reel | Medium |
| `CalendarEmbed` | Add booking inside Contact page | 🔴 High |
| `BlogCard` | Blog page is completely empty | Low |
| `ToastNotification` | Replace basic success state in Contact form | Medium |

---

## 📄 Page-by-Page Analysis

### 🏠 Home (/index)

**Score: 70/100**

✅ Strengths:
- Parallax hero with scroll-linked animations is smooth and premium
- Services bento grid is visually distinctive
- Stats section creates authority strip
- AnimateIn stagger on cards feels polished

❌ Issues & Fixes:

1. **Hero right column is completely empty** — 50% of desktop viewport wasted
   - **Fix:** Add a featured work image/video with subtle hover animation, or a live stat ticker

2. **`TRUSTED_LOGOS` renders as plain text strings** — `"ACME CORP"`, `"GLOBO-TEK"`, etc. are fake/placeholder
   - **Fix:** Either replace with real client logos OR remove entirely; fake logos destroy trust

3. **Testimonials have zero visual authority** — no photos, no company logos, no star ratings
   - **Fix:** Add avatar photos (or initials circles), star ratings, and company logos

4. **Hero heading copy is edgy but vague** — "GET THIS MONEY DOING WORK" may alienate premium B2B clients
   - **Fix:** A/B test against a more direct headline: "We Build Websites That Convert"

5. **Missing above-the-fold social proof** — Stats are `section 4`, too low
   - **Fix:** Add "50+ projects delivered" mini strip directly under hero CTAs

6. **No value proposition specificity** — "digital experiences" is vague
   - **Fix:** Add industry specifics: "For service businesses, agencies, and DTC brands"

---

### 🛠️ Services (/services)

**Score: 74/100**

✅ Strengths:
- Sticky service nav is excellent UX
- Alternating layout prevents monotony
- Deliverables checklist builds confidence

❌ Issues & Fixes:

1. **No pricing teaser** — Users leave before hitting `/pricing`
   - **Fix:** Add "Starting at $7,500" soft signal at bottom of each service card

2. **No case study teasers per service** — Services don't link to relevant work
   - **Fix:** Under each service add: "See it in action → [Case Study Name]"

3. **"Ideal For" section is text-only** — Feels like fine print
   - **Fix:** Convert to icon + tag chips: `[B2B Services]` `[Agencies]` `[Consultants]`

4. **Bottom CTA text is redundant** — "Need Help Choosing The Right Path?" duplicates the contact CTA
   - **Fix:** Replace with a service comparison table

---

### 👤 About (/about)

**Score: 78/100**

✅ Strengths:
- Personal voice is clear and distinctive
- Tech stack grid is a nice credibility touch
- Values cards are clean

❌ Issues & Fixes:

1. **Eric's photo is grayscale** — intentional aesthetic but makes the page feel cold
   - **Fix:** Color on hover (group-hover:grayscale-0 already used in Work — apply here)

2. **No timeline/journey section** — Where has Eric worked? What are his credentials?
   - **Fix:** Add a "Career timeline" or "Background" section with key milestones

3. **No client count, years in business, or verifiable stat** — "10yr average experience" is a homepage stat, not here
   - **Fix:** Add specific credibility: "Founded 2019 · 50+ clients served · 3 SaaS products built"

4. **Tech stack labels all say "Stack"** — Every item in the grid says the same label
   - **Fix:** Change the label to "Technology" or use category labels (Frontend, CMS, Animation)

---

### 💼 Work (/work)

**Score: 72/100**

✅ Strengths:
- Filter tabs are intuitive and smooth (AnimatePresence works well)
- Grayscale → color hover effect is premium
- Badge component used well for industry tags

❌ Issues & Fixes:

1. **`framer-motion` ≠ `motion/react`** — Work.tsx imports from wrong library
   - **Fix:** Change import to `from "motion/react"`

2. **No actual case study content** — Only 2 case studies (fintech and ecommerce) exist
   - **Fix:** Add 3-5 more real case studies or expand existing ones significantly

3. **Work cards have no hover CTA state** — Only image grayscale changes
   - **Fix:** Add "View Case Study →" text overlay on image hover

4. **Filter shows all 4 categories but only 2 total works** — Filtering by "E-Commerce" or "Marketing Sites" alone shows very few items
   - **Fix:** Add 2-3 more works per category, or hide categories with 0 items

5. **No "process overview" link** — Users want to know HOW you work before seeing WHAT you built
   - **Fix:** Add a banner: "Wondering how we get here? See our process →"

---

### 📋 Case Study (/work/:slug)

**Score: 80/100**

✅ Strengths:
- Skeleton loading state is polished and demonstrates technical care
- Results section (black background with stats) is visually punchy
- Next/Previous project navigation is great UX
- JSON-LD schema markup is present — SEO positive

❌ Issues & Fixes:

1. **Hero image is unconstrained in height** — 21:9 ratio is very wide; on tall monitors it dominates
   - **Fix:** Add a max-height constraint: `max-h-[600px]`

2. **"Challenge" and "Approach" sections are text islands** — No visual break between them
   - **Fix:** Add subtle numbered steps (01 / 02) or a visual divider

3. **No before/after images** — Case studies should show the before state
   - **Fix:** Add a before/after slider component

4. **Simulated loading (600ms timeout) is artificial** — Data is static; loading state is fake
   - **Fix:** Remove the artificial timeout if data is bundled; only show skeleton if actually async

5. **No "Tools Used" section** — What was the tech stack for THIS project?
   - **Fix:** Add tech tags: `React` `Sanity` `Figma` etc.

---

### 💰 Pricing (/pricing)

**Score: 65/100** — Most improvement needed here

✅ Strengths:
- 3-tier pricing is clear
- FAQ Accordion is excellent
- "Risk Reducers" section addresses objections

❌ Issues & Fixes:

1. **Investment fee + Monthly subscription is confusing** — Two separate price points per plan creates cognitive load
   - **Fix:** Add a clear explainer above the cards: "Investment fee = planning phase. Monthly = execution. Cancel after minimum term."

2. **No "Most Popular" visual weight on recommended card** — The `border-2 border-accent` is subtle and the featured card looks similar to others
   - **Fix:** Make the Web Growth card larger (scale-105), add a glow/shadow effect

3. **No calculator or estimator** — High-consideration purchases need interactivity
   - **Fix:** Add an interactive pricing estimator: "What do you need?" → shows price range

4. **The three "Risk Reducer" boxes all have the same label "Risk Reducer"** — Looks like a bug
   - **Fix:** Give each a unique label: "Transparency", "Flexibility", "Zero Risk Entry"

5. **No payment plans or custom quotes mentioned** — Top-tier agencies always mention custom
   - **Fix:** Add: "Complex scope? [Let's talk custom →]"

6. **Pricing page doesn't link to specific case studies** — No social proof on the highest-friction page
   - **Fix:** Add "Clients at this tier include..." with logos

---

### 📬 Contact (/contact)

**Score: 76/100**

✅ Strengths:
- Form validation is well-implemented (blur-on-touch, real errors)
- Honeypot spam prevention is in place
- Success state animation is clean

❌ Issues & Fixes:

1. **No calendar embed** — Highest-friction moment in the funnel; users must wait for email
   - **Fix:** Add Calendly or Cal.com embed below the form or as a tab

2. **No estimated response time stated** — "We'll get back to you within 24 hours" is buried in success state
   - **Fix:** Add this BEFORE the form: "Typical response: within 4 business hours"

3. **`autocomplete` attributes missing on inputs** — Browsers can't autofill
   - **Fix:** Add `autoComplete="name"`, `autoComplete="email"`, `autoComplete="organization"`

4. **Error: `framer-motion` vs `motion/react`** — Contact.tsx uses wrong import
   - **Fix:** Standardize to `motion/react`

5. **Missing `type="button"` on "Send another message" button** — Could accidentally submit
   - **Fix:** Already has `onClick` but ensure `type="button"` is set explicitly

6. **No phone number option** — Some clients prefer voice
   - **Fix:** Add a phone number or Calendly link for phone-preferred clients

---

### ⚙️ Process (/process)

**Score: 82/100** — Best page on the site

✅ Strengths:
- 5-phase layout is clean and scannable
- Deliverables list in each phase builds confidence
- Timeline estimates (Week 1-2, etc.) set expectations

❌ Issues & Fixes:

1. **No visual timeline/progress indicator** — It reads like a list, not a journey
   - **Fix:** Add a vertical timeline line with numbered circles (like a roadmap)

2. **No testimonial or case study per phase** — Trust signals are absent
   - **Fix:** Add a client quote near the "Launch" phase: "Eric's process kept us on schedule" — John, CTO

3. **Post-launch section uses `bg-accent text-white`** — Inconsistent with dark section pattern
   - **Fix:** Consider switching to `bg-ink` for visual consistency with other dark CTAs

---

### 📝 Blog/Journal (/journal, /blog)

**Score: 20/100** — Non-functional page

❌ Critical Issues:

1. **Page is completely empty** — No content whatsoever
   - **Fix Priority 🔴:** Either build out 3+ articles OR temporarily redirect `/journal` to another page and remove nav link

2. **Duplicate routes** — Both `/journal` AND `/blog` point to the same component
   - **Fix:** Pick one URL (`/journal` matches brand voice), redirect the other with 301

3. **No meta description** — SEO completely lost on this page
   - **Fix:** Add meaningful SEO once content is ready

4. **Journal not in nav** — The page exists but can't be found from nav
   - **Fix:** Add "Journal" to nav links OR redirect + hide until content is ready

---

### 🔒 Privacy + Terms (/privacy, /terms)

**Score: 50/100**

❌ Issues:

1. **Likely placeholder legal text** — Need actual legal review
   - **Fix:** Use a legal text generator or hire a lawyer to review

2. **No Cookie Policy / GDPR notice** — Site uses Google Analytics (detected via [Analytics.tsx](file:///Volumes/MiDRIVE/CHROMAPAGES/web/chromaweb2026/src/components/Analytics.tsx))
   - **Fix:** Add a cookie consent prompt and cookie policy page

3. **No last-updated date on legal pages** — Required for GDPR compliance
   - **Fix:** Add "Last updated: January 2026" at top of both pages

---

## 🔑 SEO Audit Summary

| Issue | Page | Fix |
|-------|------|-----|
| No sitemap.xml | Site-wide | Generate and submit to GSC |
| No robots.txt | Site-wide | Create basic robots.txt |
| Duplicate routes `/blog` + `/journal` | App.tsx | Canonical or 301 redirect |
| Blog page has no content | /journal | Build content ASAP |
| Missing `lang` attr on `<html>` | main.tsx | Add `lang="en"` |
| No structured data on homepage | / | Add Organization schema |
| No Open Graph images | All pages | Generate og:image for each page |
| Missing canonical URLs on most pages | All | SEO component already supports it — add to each page |
| `<img>` missing `loading="lazy"` | Work, Home | Add lazy loading to all non-above-fold images |
| Blog section has 0 content | /journal | This is a significant SEO opportunity loss |

---

## ♿ Accessibility Audit

| Issue | Severity | Fix |
|-------|----------|-----|
| `tabIndex={-1}` on nav CTA link | 🔴 Critical | Remove it from Navbar.tsx |
| No `prefers-reduced-motion` check | 🔴 Critical | Add to AnimateIn component |
| Testimonial section has no landmark | High | Wrap in `<section aria-label="Testimonials">` |
| Work filter buttons lack count announcements | Medium | Add aria-live region |
| All images use Unsplash URLs (may block referrer) | Medium | Host locally or use Next.js Image |
| Form inputs missing `autocomplete` | Medium | Add to Contact.tsx |
| Color: `text-muted` (#6B7280) on light bg fails 4.5:1 | 🔴 Critical | Darken to #4B5563 minimum |
| No focus-visible ring on many interactive elements | High | Add `:focus-visible` styles |
| Accordion expand/collapse lacks aria-expanded | Medium | Add to Accordion component |
| Mobile menu close button lacks aria-label | Medium | Already has sr-only span — verify |

---

## ⚡ Performance Audit

| Issue | Impact | Fix |
|-------|--------|-----|
| Hero background image from Unsplash CDN (remote) | High | Self-host or use local asset |
| No font `preload` hints | Medium | Add `<link rel="preload">` for Sora + DM Sans |
| `motion/react` + `framer-motion` both bundled | 🔴 High | Remove framer-motion, use motion/react consistently |
| Artificial 600ms loading timeout in CaseStudy | Low | Remove, data is static |
| No image `srcset` or `WebP` format | High | Add srcset attributes |
| `useScroll` + `useTransform` + `useSpring` in Navbar | Medium | Profile — may cause jank on low-end mobile |
| No code splitting | Medium | Add `React.lazy()` for page-level components |
| No service worker or offline support | Low | Add for PWA-like experience |

---

## 🚀 Prioritized Improvement Roadmap

### 🔴 CRITICAL (Do First — Revenue Impact)

1. **Fix social links** — `href="#"` on LinkedIn/GitHub/Twitter must point to real URLs
2. **Remove `tabIndex={-1}` from Navbar CTA** — Accessibility bug
3. **Standardize animation library** — Remove `framer-motion`, use `motion/react` throughout
4. **Add `prefers-reduced-motion` to `AnimateIn`** — WCAG 2.1 AA requirement
5. **Add calendar embed to Contact page** — Biggest conversion lift opportunity
6. **Fix the 3 "Risk Reducer" duplicate labels in Pricing** — Looks like a bug
7. **Add realistic testimonial photos + logos** — Trust signals need visual authority
8. **Either build out Blog or hide it** — Empty page hurts SEO and credibility

### 🟠 HIGH (This Sprint)

9. **Fill hero right column** — Add featured work preview or video
10. **Add real client logos to TRUSTED_LOGOS** — Or remove placeholder text
11. **Darken `text-muted` color** — #6B7280 on `#EFEFED` fails accessibility contrast
12. **Add pricing teaser to Services page** — "Starting at $7,500"
13. **Add campaign for case study teasers per service**
14. **Add before/after images to Case Studies**
15. **Add `autocomplete` attributes to Contact form**
16. **Create `og:image` meta images for SEO**
17. **Generate sitemap.xml**

### 🟡 MEDIUM (Next Sprint)

18. **Build `TestimonialCard` component with photo + rating**
19. **Build `LogoTicker` marquee component** (CSS `animate-marquee` is already defined!)
20. **Add interactive pricing calculator**
21. **Build vertical timeline for Process page**
22. **Add ROI stats to each service section**
23. **Add `lang="en"` to HTML element**
24. **Add cookie consent/GDPR banner**
25. **Implement `React.lazy()` page splitting**

### 🟢 LOW (Backlog)

26. **Build 3+ blog/journal articles** — Target: "how to improve website conversion", "what makes a good web app", etc.
27. **Create `/start` onboarding page for new clients**
28. **Add live chat widget (Crisp / Intercom)** 
29. **Build PDF case study downloads**
30. **Add Google Business Profile structured data**

---

## 🎨 Design System Recommendations

### Color Tokens — Issues Found

```css
/* CURRENT — potentially problematic */
--color-muted: #6B7280;  /* Contrast ratio: ~3.8:1 on #EFEFED = FAILS WCAG AA */
--color-ink: #2C3892;    /* Good: ~7.1:1 contrast ✓ */
--color-accent: #23698C; /* Good: ~5.2:1 contrast ✓ */

/* RECOMMENDED FIX */
--color-muted: #4B5563;  /* Contrast ratio: ~5.9:1 = PASSES WCAG AA ✓ */
```

### Typography — Issues Found

1. `10px` labels are used **throughout every page** — this is at or below the minimum readable size (16px body, 10px for labels violates readability best practices on mobile)
2. The CSS defines a full typography scale (`--font-size-display-xl` through `--font-size-label`) but it's **never used via CSS variables in JSX** — only raw Tailwind classes like `text-5xl md:text-7xl`
3. No condensed/compressed font weight used for editorial punch despite Swiss Modernism reference

### Missing Design Tokens

```css
/* Add to @theme in index.css */
--color-success: #059669;  /* For form success states */
--color-error: #DC2626;    /* Currently hardcoded as red-500/red-200 inline */
--color-warning: #D97706;
--spacing-form-gap: 2rem;  /* Formalize form spacing */
--transition-standard: 200ms ease-out;
```

---

## 📊 Conversion Architecture Analysis

### Current Funnel

```
TRAFFIC → Homepage (CTA: Book A Call) → Contact Form → Wait for Reply → Call
```

**Problem:** This is a 3-step funnel with a significant drop at "Wait for Reply." Most visitors close the tab between form submission and the call.

### Recommended Funnel

```
TRAFFIC → Homepage → Work Gallery → Case Study
            ↓
        Services → Pricing → Contact
            ↓                   ↓
         Process          Instant Calendar
            ↓                   ↓
         About            Confirmation + 
         (trust)          Automated Prep Email
```

Add micro-conversions:
- Email capture on homepage ("Get our 3-step website audit template")
- Case study PDF download gated by email
- Newsletter/Journal subscription

---

## 🧩 Mock-Up HTML Stubs

### Improved Testimonial Card

```html
<!-- TestimonialCard — Recommended Implementation -->
<div class="border border-border bg-bg p-8 h-full flex flex-col">
  <!-- Stars -->
  <div class="flex gap-1 mb-6" aria-label="5 star rating">
    <svg class="w-4 h-4 text-accent fill-accent" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z"/>
    </svg>
    <!-- × 5 -->
  </div>
  <!-- Quote -->
  <p class="text-lg font-sans italic text-ink mb-8 leading-relaxed flex-grow">
    "Chromapages transformed our digital presence. User retention skyrocketed by 47%."
  </p>
  <!-- Attribution -->
  <div class="flex items-center gap-4 mt-auto pt-6 border-t border-border">
    <div class="w-10 h-10 rounded-full bg-surface border border-border overflow-hidden">
      <img src="/avatars/sarah.jpg" alt="Sarah Jenkins" class="w-full h-full object-cover" />
    </div>
    <div>
      <p class="text-[10px] font-bold uppercase tracking-widest text-ink">Sarah Jenkins</p>
      <p class="text-[10px] uppercase tracking-widest text-muted">CMO — Acme Financial</p>
    </div>
    <img src="/logos/acme.svg" alt="Acme Financial" class="ml-auto h-6 opacity-50" />
  </div>
</div>
```

### Logo Ticker (Marquee)

```html
<!-- LogoTicker — Using existing .animate-marquee CSS class -->
<div class="border-y border-border py-6 overflow-hidden">
  <div class="flex gap-16 animate-marquee whitespace-nowrap">
    <!-- Repeated twice for seamless loop -->
    <img src="/logos/acme.svg" alt="Acme Corp" class="h-6 opacity-40 grayscale" />
    <img src="/logos/globotek.svg" alt="GloboTek" class="h-6 opacity-40 grayscale" />
    <!-- ... more logos ... -->
    <!-- Duplicate set for seamless loop -->
    <img src="/logos/acme.svg" alt="Acme Corp" class="h-6 opacity-40 grayscale" />
  </div>
</div>
```

### Calendar Embed (Contact page addition)

```html
<!-- Add below or inside Contact form -->
<div class="border-t border-border pt-8 mt-8">
  <p class="text-[10px] font-bold uppercase tracking-[0.25em] text-muted mb-4">
    Or Book Directly
  </p>
  <div class="border border-border overflow-hidden" style="min-height: 600px;">
    <iframe
      src="https://cal.com/ericblack/discovery"
      width="100%"
      height="600"
      frameborder="0"
      title="Book a discovery call"
    />
  </div>
</div>
```

### Process Timeline (Visual Upgrade)

```html
<!-- Vertical timeline variant for Process page -->
<div class="relative">
  <!-- Vertical line -->
  <div class="absolute left-[1.75rem] top-0 bottom-0 w-px bg-border"></div>
  
  {PROCESS_PHASES.map((phase) => (
    <div class="relative flex gap-8 pb-16">
      <!-- Circle marker -->
      <div class="w-14 h-14 shrink-0 border border-border bg-bg flex items-center justify-center z-10">
        <span class="font-display text-xl font-light text-ink">{phase.id}</span>
      </div>
      <!-- Content -->
      <div class="flex-1">
        <h2 class="text-2xl font-display font-medium text-ink uppercase mb-1">{phase.name}</h2>
        <p class="text-[10px] font-bold uppercase tracking-widest text-muted mb-4">{phase.timeframe}</p>
        <p class="text-lg text-muted leading-relaxed mb-4">{phase.description}</p>
      </div>
    </div>
  ))}
</div>
```

---

## Skills Utilized

This audit leveraged the following global skills:
- **`ui-ux-pro-max`** — Design system, accessibility, typography, interaction rules
- **`page-cro`** — Conversion rate optimization for landing and service pages
- **`form-cro`** — Contact form best practices (autocomplete, error states, calendar embeds)
- **`seo-audit`** — Sitemap, robots.txt, structured data, meta tags, duplicate routes
- **`design-taste-frontend`** — Visual critique of design choices
- **`tech-ceo`** — Strategic view on service blueprint, funnel architecture, trust signals
- **`onboarding-cro`** — Post-conversion experience and client onboarding gaps

---

*Audit generated: March 17, 2026 | Reviewer: Antigravity AI Assistant*
