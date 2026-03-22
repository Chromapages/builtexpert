# Implementation Plan — Services Page Redesign
**Version:** 1.0 · **Date:** March 2026
**Page:** `/services` · **File:** [src/pages/Services.tsx](file:///Volumes/MiDRIVE/CHROMA/web/chromaweb2026/src/pages/Services.tsx)
**Before Score:** 48/100 overall · **CRO:** 48/100 · **DESIGN.md Alignment:** 18/100
**Target Score:** 80/100 overall · **CRO:** 80/100 · **DESIGN.md Alignment:** 95/100

---

## Key References
- [UX/UI Specification](./services_ux_ui_spec.md) — section audit, wireframes, a11y
- [Technical Design Doc](./services_technical_design_doc.md) — token map, data types, component strategy
- [Service Blueprint](./services_service_blueprint.md) — journey map, 6 critical gaps
- [API/Data Spec](./services_api_data_spec.md) — data contracts, schema, analytics events
- [DESIGN.md](file:///Volumes/MiDRIVE/CHROMA/web/chromaweb2026/DESIGN.md) — The Architectural Blueprint (no-line rule, MD3 tokens, typography)
- [src/index.css](file:///Volumes/MiDRIVE/CHROMA/web/chromaweb2026/src/index.css) — MD3 canonical token source of truth

---

## P0 — Critical (Do First, ~8–10h)

> These are blocking issues: broken token rendering + zero visual content + DESIGN.md violations

### P0.1 — Full MD3 Token Migration

**Problem:** Services.tsx uses 22+ undefined orphaned Swiss/Editorial tokens that produce no CSS.
**Fix:** Rewrite all class names using the MD3 token map.

```diff
// Service section background (per index)
- className="bg-bg border-b border-border"
+ className={index % 2 === 0 ? "bg-md3-surface" : "bg-md3-surface-container-low"}

// Featured card section
- className="bg-accent text-white"
+ className="bg-md3-inverse-surface text-md3-inverse-on-surface"

// Deliverables card
- className="border p-8 md:p-10 border-border bg-surface"
+ className="rounded-2xl p-8 md:p-10 bg-md3-surface-container"

// Eyebrow labels
- className="text-muted"
+ className="text-md3-on-surface-variant"

// Body text + headings
- className="text-ink"
+ className="text-md3-on-surface"

// "text-accent" (check mark icon)
- className="text-accent"
+ className="text-md3-primary"

// H1 typography
- className="text-5xl md:text-7xl font-display font-light text-ink uppercase"
+ className="font-headline text-5xl font-extrabold tracking-tight text-md3-on-background lg:text-7xl text-balance"

// CTA closer section
- className="py-32 text-center bg-dark text-white"
+ className="py-32 text-center bg-md3-inverse-surface"
```

**Files:** [src/pages/Services.tsx](file:///Volumes/MiDRIVE/CHROMA/web/chromaweb2026/src/pages/Services.tsx)
**Effort:** 2h

---

### P0.2 — Remove ALL Border Violations (DESIGN.md No-Line Rule)

**Problem:** 8 explicit border usages violate DESIGN.md §2.
**Fix:** Remove all divider borders. Use spacing increases and tonal background shifts.

```diff
// Sticky nav strip
- className="sticky top-20 z-30 border-y border-border bg-bg/95 backdrop-blur"
+ className="sticky top-20 z-30 bg-md3-surface-container/90 backdrop-blur-xl"

// Service section separator (remove border-b, use tonal alt bg instead)
- className={`${service.featured ? "bg-accent text-white" : "bg-bg border-b border-border"}`}
+ className={service.featured ? "bg-md3-inverse-surface text-md3-inverse-on-surface" : alternatingBg}

// Deliverables card — no border
- className="border p-8 border-border bg-surface"
+ className="rounded-2xl p-8 bg-md3-surface-container"

// Internal card dividers (Ideal For, Starting At)
- className="mt-8 border-t pt-8 border-border"
+ className="mt-8 pt-8"  // Increase mt for visual separation (no border)

- className="mt-6 border-t pt-6 border-border"
+ className="mt-6 pt-6"
```

**Files:** [src/pages/Services.tsx](file:///Volumes/MiDRIVE/CHROMA/web/chromaweb2026/src/pages/Services.tsx)
**Effort:** 0.5h

---

### P0.3 — Add Hero Section with Badge Pill + Social Proof Strip

**Problem:** Services page hero is plain text on white background. No visual hook, no social proof.
**Fix:** Redesign hero to match Home.tsx pattern.

```tsx
// New hero section — replaces current <Section className="pt-32 pb-16">
<section className="relative overflow-hidden bg-md3-surface py-32 lg:py-40">
  <div className="absolute inset-0 bg-gradient-to-br from-md3-surface via-md3-surface/95 to-md3-surface-container-low pointer-events-none" />
  <div className="relative mx-auto max-w-7xl px-6">
    <div className="grid items-center gap-16 lg:grid-cols-2">
      <AnimateIn>
        {/* Badge pill */}
        <span className="mb-6 inline-block rounded-full bg-md3-secondary-container px-3 py-1 text-xs font-bold uppercase tracking-wider text-md3-on-secondary-container">
          Built for Contractors
        </span>
        {/* H1 */}
        <h1 className="font-headline text-5xl font-extrabold tracking-tight text-md3-on-background lg:text-7xl text-balance mb-6">
          Four Precision Services.<br />Zero Wasted Budget.
        </h1>
        <p className="mb-10 max-w-lg text-lg font-medium leading-relaxed text-md3-on-surface-variant">
          Every engagement is scoped to convert. Whether it's your first site or your tenth, we build for measurable results.
        </p>
        {/* CTAs — inline MD3 links, not Button component */}
        <div className="flex flex-col gap-4 sm:flex-row mb-8">
          <Link to="/contact" className="rounded-xl bg-md3-primary px-8 py-4 text-center text-lg font-bold text-md3-on-primary shadow-lg shadow-md3-primary/10 transition-all hover:bg-md3-primary-container">
            Book A Growth Call
          </Link>
          <Link to="/contact" className="rounded-xl bg-md3-surface-container-highest/80 px-8 py-4 text-center text-lg font-bold text-md3-on-surface backdrop-blur-sm transition-all hover:bg-md3-surface-container-high">
            Get A Free Audit
          </Link>
        </div>
        {/* Social proof strip */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-md3-on-surface-variant">
          {/* 5 stars */}
          <span className="font-medium">4.9 on Google</span>
          <span>·</span><span>47 contractors served</span>
          <span>·</span><span>Avg 3.2× more leads</span>
        </div>
      </AnimateIn>
      {/* Right: 2×2 service card grid */}
      <AnimateIn delay={0.15} stagger staggerChildren={0.08} className="grid grid-cols-2 gap-4">
        {SERVICE_SECTIONS.map((s) => (
          <a key={s.id} href={`#${s.id}`} className="group rounded-2xl bg-md3-surface-container-low p-6 transition-all hover:bg-md3-surface-container cursor-pointer">
            <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.25em] text-md3-on-surface-variant">{s.number}</p>
            <h3 className="font-headline text-lg font-bold text-md3-on-surface mb-2">{s.name}</h3>
            <p className="text-2xl font-bold text-md3-primary">{s.stat.value}</p>
            <p className="text-xs text-md3-on-surface-variant">{s.stat.label}</p>
          </a>
        ))}
      </AnimateIn>
    </div>
  </div>
</section>
```

**Files:** [src/pages/Services.tsx](file:///Volumes/MiDRIVE/CHROMA/web/chromaweb2026/src/pages/Services.tsx)
**Effort:** 2h

---

### P0.4 — Add Mockup Images to Each Service Card

**Problem:** Services page has zero images — purely text + lists. No visual depth per DESIGN.md.
**Fix:** Add service-specific mockup image in the deliverables column, below the checklist.

```diff
// In deliverables card (right column), after the checklist ul:
+ {service.image && (
+   <div className="mt-6 overflow-hidden rounded-xl aspect-video bg-md3-surface-container-high">
+     <img
+       src={service.image.src}
+       alt={service.image.alt}
+       className="h-full w-full object-cover object-top"
+       loading="lazy"
+     />
+   </div>
+ )}
```

Add image field to `SERVICE_SECTIONS` data (see TDD §3.2 for full data).
**Also:** Create `/public/images/services/` directory and add 4 WebP mockup images.

**Files:** [src/pages/Services.tsx](file:///Volumes/MiDRIVE/CHROMA/web/chromaweb2026/src/pages/Services.tsx), `public/images/services/`
**Effort:** 2h (images + code)

---

### P0.5 — Fix Sticky Nav: Remove Border + Add Active Pill State

**Problem:** `border-y border-border` violation. No active section indicator.
**Fix:** Tonal bg + IntersectionObserver active state (see TDD §5 for full hook).

```tsx
// Before nav strip: add hook
const activeSection = useActiveSectionObserver(SERVICE_SECTIONS.map(s => s.id));

// Sticky nav: no border, tonal glass, active pill
<div className="sticky top-20 z-30 bg-md3-surface-container/90 backdrop-blur-xl">
  <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3 sm:px-6 lg:px-8">
    {SERVICE_SECTIONS.map((service) => (
      <a
        key={service.id}
        href={`#${service.id}`}
        className={cn(
          "shrink-0 rounded-full px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] transition-all duration-200",
          activeSection === service.id
            ? "bg-md3-primary text-md3-on-primary"
            : "text-md3-on-surface-variant hover:text-md3-on-surface"
        )}
      >
        {service.name}
      </a>
    ))}
  </div>
</div>
```

**Files:** [src/pages/Services.tsx](file:///Volumes/MiDRIVE/CHROMA/web/chromaweb2026/src/pages/Services.tsx)
**Effort:** 1h

---

### P0.6 — Fix SEO Meta

```diff
// In Services() component:
<SEO
-  title="Web Design & Development Services"
-  description="Explore our premium web design and development packages. From high-converting marketing sites to scalable web applications."
+  title="Contractor Web Design Services & Pricing | Chromapages"
+  description="Marketing sites · E-commerce · Web apps · Ongoing support. Engineered for electricians and HVAC contractors. Starting at $7,500."
   canonical="/services"
/>
```

**Files:** [src/pages/Services.tsx](file:///Volumes/MiDRIVE/CHROMA/web/chromaweb2026/src/pages/Services.tsx)
**Effort:** 5 min

---

## P1 — High Impact (Week 2, ~5–7h)

### P1.1 — Service-Specific CTA Labels

```diff
// Add ctaLabel to SERVICE_SECTIONS data, replace generic buttons
-  <Button variant="primary" size="md">Book A Call</Button>
+  <Link to={`/contact?service=${service.id}`}
+    className="rounded-xl bg-md3-primary px-6 py-3 text-sm font-bold text-md3-on-primary transition-all hover:bg-md3-primary-container"
+  >
+    {service.ctaLabel}
+  </Link>
```

**Effort:** 0.5h

---

### P1.2 — Add Testimonials Section

```tsx
// After last service section, before FAQ:
<section className="bg-md3-surface-container-low py-24">
  <div className="mx-auto max-w-7xl px-6">
    <AnimateIn className="mb-12">
      <h2 className="font-headline text-3xl font-extrabold tracking-tight text-md3-on-surface">
        What contractors say
      </h2>
    </AnimateIn>
    <AnimateIn stagger staggerChildren={0.1} className="grid md:grid-cols-3 gap-8">
      {TESTIMONIALS.map((t) => (
        // Inline testimonial card with MD3 tokens — no border, tonal card
        <div key={t.name} className="rounded-2xl bg-md3-surface-container-high p-8 flex flex-col">
          {/* Stars */}
          {/* Quote */}
          {/* Attribution: initial circle + name + trade + location */}
          {/* Result highlight badge */}
        </div>
      ))}
    </AnimateIn>
  </div>
</section>
```

**Note:** Import `TESTIMONIALS` from new `/src/data/testimonials.ts` (see API Spec §2).
**Effort:** 1.5h

---

### P1.3 — Add Service FAQ Section

```tsx
// After testimonials section:
<section className="bg-md3-surface py-24">
  <div className="mx-auto max-w-7xl px-6">
    <div className="grid lg:grid-cols-2 gap-16 items-start">
      {/* Left: header */}
      <AnimateIn>
        <h2 className="font-headline text-3xl font-extrabold tracking-tight text-md3-on-surface mb-4">
          Common questions
        </h2>
        <p className="text-md3-on-surface-variant mb-8">
          Not sure which service fits your stage? <Link to="/contact" className="text-md3-primary font-medium">Book a free 30-min call</Link> and we'll map the right path.
        </p>
      </AnimateIn>
      {/* Right: accordion */}
      <AnimateIn delay={0.1}>
        {SERVICE_FAQS.map((faq, i) => (
          <Accordion key={i} question={faq.q} answer={faq.a} />
        ))}
      </AnimateIn>
    </div>
  </div>
</section>
```

**Audit Accordion.tsx for border violations before use.**
**Effort:** 1.5h

---

### P1.4 — Add Lead Magnet CTA Section

```tsx
// Before final CTA section — mirrors homepage lead magnet:
<section className="bg-md3-primary py-24">
  <div className="mx-auto max-w-7xl px-6">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <AnimateIn>
        <h2 className="font-headline text-4xl font-extrabold text-md3-on-primary mb-6">
          Free Website Growth Audit
        </h2>
        <ul className="space-y-3 text-md3-on-primary/80 mb-8">
          <li>✓ Page speed and Core Web Vitals check</li>
          <li>✓ Local SEO gap analysis for your trade</li>
          <li>✓ Lead capture and conversion bottleneck review</li>
          <li>✓ No obligation. 100% free.</li>
        </ul>
        <Link to="/contact?service=audit" className="rounded-xl bg-md3-on-primary px-8 py-4 text-lg font-bold text-md3-primary transition-all hover:bg-md3-surface-container-highest">
          Claim Your Free Audit →
        </Link>
      </AnimateIn>
    </div>
  </div>
</section>
```

**Effort:** 0.75h

---

### P1.5 — Replace "Ideal For" Prose with Tag Pills

```diff
// In deliverables card:
-  <p>{service.idealFor}</p>
+  <div className="flex flex-wrap gap-2">
+    {service.idealFor.map((tag) => (
+      <span key={tag} className="rounded-full bg-md3-secondary-container px-3 py-1 text-xs font-bold text-md3-on-secondary-container">
+        {tag}
+      </span>
+    ))}
+  </div>
```

**Data change:** `idealFor` becomes `string[]` (see TDD §3.1).
**Effort:** 0.5h

---

### P1.6 — Update Final CTA Section

```diff
- <Section className="py-32 text-center bg-dark text-white">
+ <section className="bg-md3-inverse-surface py-32">
  <div className="mx-auto max-w-3xl px-6 text-center">
    <AnimateIn>
-     <h2 className="text-4xl md:text-6xl font-display font-light uppercase text-white">
+     <h2 className="font-headline text-4xl font-extrabold tracking-tight text-md3-inverse-on-surface lg:text-6xl text-balance">
-       Need Help Choosing The Right Path?
+       Ready to Start? Let's Map the Right Path.
      </h2>
-     <p className="text-white/70">...</p>
+     <p className="text-md3-inverse-on-surface/70 text-lg leading-relaxed mt-6 mb-10">
        We scope every engagement to your goals, timeline, and current stage. No fluff.
      </p>
      {/* 2 MD3 inline link buttons */}
    </AnimateIn>
  </div>
```

**Effort:** 0.5h

---

## P2 — Next Sprint (~6–8h)

| # | Task | File(s) | Effort |
|---|------|---------|--------|
| P2.1 | Migrate [Button.tsx](file:///Volumes/MiDRIVE/CHROMA/web/chromaweb2026/src/components/ui/Button.tsx) to MD3 tokens | [Button.tsx](file:///Volumes/MiDRIVE/CHROMA/web/chromaweb2026/src/components/ui/Button.tsx) | 1h |
| P2.2 | Migrate [Section.tsx](file:///Volumes/MiDRIVE/CHROMA/web/chromaweb2026/src/components/ui/Section.tsx) to MD3 variants | [Section.tsx](file:///Volumes/MiDRIVE/CHROMA/web/chromaweb2026/src/components/ui/Section.tsx) | 0.5h |
| P2.3 | Migrate [TestimonialCard.tsx](file:///Volumes/MiDRIVE/CHROMA/web/chromaweb2026/src/components/ui/TestimonialCard.tsx) to MD3 | [TestimonialCard.tsx](file:///Volumes/MiDRIVE/CHROMA/web/chromaweb2026/src/components/ui/TestimonialCard.tsx) | 1h |
| P2.4 | Audit & fix [Accordion.tsx](file:///Volumes/MiDRIVE/CHROMA/web/chromaweb2026/src/components/ui/Accordion.tsx) tokens | [Accordion.tsx](file:///Volumes/MiDRIVE/CHROMA/web/chromaweb2026/src/components/ui/Accordion.tsx) | 0.5h |
| P2.5 | Add Service JSON-LD schema (4× Service + FAQPage) | [Services.tsx](file:///Volumes/MiDRIVE/CHROMA/web/chromaweb2026/src/pages/Services.tsx) or [SEO.tsx](file:///Volumes/MiDRIVE/CHROMA/web/chromaweb2026/src/components/SEO.tsx) | 2h |
| P2.6 | Add case study teasers below each service | [Services.tsx](file:///Volumes/MiDRIVE/CHROMA/web/chromaweb2026/src/pages/Services.tsx), `/src/data/case-studies.ts` | 3h |
| P2.7 | Mobile sticky nav → `<select>` dropdown | [Services.tsx](file:///Volumes/MiDRIVE/CHROMA/web/chromaweb2026/src/pages/Services.tsx) | 1h |
| P2.8 | Extract testimonials to `/src/data/testimonials.ts` | data module | 0.5h |

---

## P3 — Backlog

| # | Task | Notes |
|---|------|-------|
| P3.1 | Pricing calculator widget | For "Ongoing Support" card |
| P3.2 | Service comparison section (vs DIY / competitors) | After FAQ |
| P3.3 | Scrollytelling service deep-dive | Scroll-driven reveal per service |
| P3.4 | Animated stat counters on scroll | `useInView` + counter hook |

---

## Verification Plan

### Step 1 — Token Audit
```bash
# Check no Swiss tokens remain in Services.tsx
grep -n "bg-bg\|text-ink\|text-muted\|border-border\|bg-accent\|bg-dark\|bg-surface" src/pages/Services.tsx
# Expected: 0 matches
```

### Step 2 — Border Audit
```bash
grep -n "border-\|border " src/pages/Services.tsx
# Expected: 0 matches for separator/divider borders
# Acceptable: focus-ring borders only
```

### Step 3 — Visual Rendering Check
Navigate to `http://localhost:5174/services` and verify:
- [ ] Hero section renders with teal badge pill, dark H1, and social proof strip
- [ ] Right column of hero shows 2×2 service card grid
- [ ] Sticky nav: no visible top/bottom borders, frosted glass effect present
- [ ] Sticky nav: clicking a service anchor smooth-scrolls to section
- [ ] Each service section alternates tonal backgrounds (light → slightly darker → light → dark featured)
- [ ] Deliverables cards: no border, visually "lifted" from section bg (tonal)
- [ ] Each service card shows a mockup image in the deliverables column
- [ ] Featured (Ongoing Support) card: dark-mode section with glassmorphic tonal card
- [ ] "Ideal For" rendered as pill badges, not prose
- [ ] Service CTAs show service-specific labels (not "Book A Call" × 4)

### Step 4 — CRO Check
- [ ] Above fold: badge + H1 + social proof strip all visible without scroll
- [ ] At least 1 CTA visible at all times (sticky nav or hero)
- [ ] Testimonials section renders with 3 cards
- [ ] FAQ accordion opens/closes correctly

### Step 5 — Accessibility Audit
```bash
# Run axe-core scan (if Playwright setup exists)
# Otherwise: Chrome DevTools Lighthouse → Accessibility
```
- [ ] Focus rings visible on all interactive elements
- [ ] Sticky nav has `role="navigation"` + `aria-label`
- [ ] CheckIcon `<li>` items have readable text (not just icon)
- [ ] FAQ accordion keyboard navigable
- [ ] Service card anchor links have descriptive text (not just service name)

### Step 6 — SEO Audit
- [ ] `<title>` = "Contractor Web Design Services & Pricing | Chromapages"
- [ ] `<meta description>` present and ≤ 160 chars
- [ ] H1 renders once per page
- [ ] All 4 service sections have anchor `id` attributes
- [ ] No duplicate heading text

### Step 7 — Mobile Check (375px)
- [ ] Hero stacks to single column
- [ ] CTAs are full-width stacked (min-height 48px)
- [ ] Sticky nav scrolls horizontally (or collapses to select)
- [ ] Service cards stack correctly
- [ ] Images display correctly in mobile service cards

### Step 8 — Console Check
```
# Open DevTools > Console. Expected:
# 0 errors
# 0 "bg-bg", "text-ink" class references (empty CSS classes)
```
