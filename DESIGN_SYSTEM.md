# BuiltExpert Design System

**Design language: Industrial Capital Editorial**
High-contrast, hairline-border precision design with a dot-grid texture, dual-weight typography, and a near-black / teal / white palette. Targets premium B2B trades businesses.

---

## Quick Reference

| Token | Value | Tailwind class |
|---|---|---|
| Primary accent | `#006565` | `text-md3-primary` / `bg-md3-primary` |
| Charcoal (headings/text) | `#1a1a1a` | `text-[#1a1a1a]` or `style={{ color: INDUSTRIAL.charcoal }}` |
| Muted (body copy) | `#6b7280` | `text-[#6b7280]` or `style={{ color: INDUSTRIAL.muted }}` |
| Border | `#e5e7eb` | `border-[#e5e7eb]` |
| Border width | 0.5px | `[border-width:0.5px]` |
| Surface / background | `#fcf9f8` | `bg-md3-surface` |
| Dark section | `#0f1010` | `bg-[#0f1010]` |
| Near-black CTA bg | `#1a1a1a` | `bg-[#1a1a1a]` |
| Headline font | Plus Jakarta Sans | `font-headline` |
| Body font | Manrope | `font-body` |

---

## Color System

### Primary Tokens (MD3 — `src/index.css`)

```css
--color-md3-primary: #006565             /* teal — brand accent */
--color-md3-on-primary: #ffffff
--color-md3-primary-container: #008080
--color-md3-on-primary-container: #e3fffe
--color-md3-primary-fixed: #93f2f2
--color-md3-primary-fixed-dim: #76d6d5
--color-md3-inverse-primary: #76d6d5
--color-md3-secondary-container: #cfe7ee
--color-md3-on-secondary-container: #52686e
--color-md3-surface: #fcf9f8             /* page background */
--color-md3-on-surface: #1c1b1b
--color-md3-on-surface-variant: #3e4949
--color-md3-background: #fcf9f8
--color-md3-outline: #6f7979
--color-md3-outline-variant: #bdc9c8
--color-md3-error: #ba1a1a
```

### INDUSTRIAL Tokens (`src/lib/industrialStyle.ts`)

```ts
INDUSTRIAL.charcoal  = "#1a1a1a"   // primary text, headings
INDUSTRIAL.muted     = "#6b7280"   // body copy, captions
INDUSTRIAL.outline   = "#e5e7eb"   // borders (same value, use Tailwind class)
INDUSTRIAL.primary   = "#006A6A"   // accent (≈ md3-primary)
INDUSTRIAL.secondary = "#4a6363"
```

### Usage Rule

- **Borders** → always use Tailwind class `border-[#e5e7eb]`, never `INDUSTRIAL.outline` in `style={}`.
- **Text colors** → use `style={{ color: INDUSTRIAL.charcoal }}` or `style={{ color: INDUSTRIAL.muted }}` where Tailwind classes are unavailable; prefer `text-[#1a1a1a]` / `text-[#6b7280]` otherwise.
- **Accent** → use `text-md3-primary`, `bg-md3-primary` Tailwind classes.

---

## Typography

### Fonts

| Role | Font | Tailwind class |
|---|---|---|
| Headings / display | Plus Jakarta Sans | `font-headline` |
| Body / UI | Manrope | `font-body` (default body) |

### Scale Conventions

#### Display / Hero headline
```
text-4xl font-light leading-[1.02] tracking-tighter
sm:text-5xl md:text-6xl lg:text-7xl
```

#### Section headline (H2)
```
font-headline text-3xl font-light tracking-tight
md:text-4xl
```

#### Sub-section headline (H3)
```
font-headline text-2xl font-light tracking-tight
sm:text-3xl
```

#### Card headline (H3 in cards)
```
font-headline text-xl font-bold leading-tight
```

#### Body copy
```
text-base font-light leading-relaxed  /* standard paragraph */
text-sm font-light leading-relaxed    /* secondary paragraph */
text-lg font-light leading-relaxed    /* intro / hero subheadline */
```

#### Eyebrow / section label
```
text-[10px] font-bold uppercase tracking-[0.3em] text-md3-primary
```
This is the single most important typographic pattern on the site. Every major section opens with this above its headline.

#### UI label (badge, stat, meta)
```
text-[9px] font-bold uppercase tracking-[0.2em]
text-[11px] font-bold uppercase tracking-[0.25em]
```

#### CTA button text
```
text-[11px] font-bold uppercase tracking-[0.3em]
text-[12px] font-bold uppercase tracking-[0.3em]
```

---

## Layout System

### Container

Always use the `.site-container` utility class for page-width containers:

```tsx
<div className="site-container">
  {/* content */}
</div>
```

Definition (`src/index.css`):
```css
.site-container {
  width: 100%;
  max-width: 90rem;           /* 1440px */
  margin-inline: auto;
  padding-inline: clamp(1rem, calc(1.5vw + 0.5rem), 4rem);  /* 16px → 64px fluid */
}
/* 1920px+ → max-width: 96rem */
/* 2560px+ → max-width: 108rem */
```

**Exception:** Full-bleed grid sections (e.g. 2-col dark/light split) use `site-container px-0` to preserve edge-to-edge columns within the max-width cap.

### Section Spacing

```tsx
<section className="site-container py-16 sm:py-20 lg:py-24">
```

Standard vertical rhythm: `py-16 sm:py-20 lg:py-24`
Hero sections: `min-h-[90vh]` with `pt-24` (nav offset)

### Section with full-bleed border

When a section needs a border that spans the full viewport (not just the container):

```tsx
<section className="border-t border-[#e5e7eb] [border-top-width:0.5px]">
  <div className="site-container py-16 sm:py-20 lg:py-24">
    {/* content */}
  </div>
</section>
```

Never put `border-t` and `site-container` on the same element — the border will be clipped to the container width.

---

## Borders

Every border uses hairline weight. This is a signature of the design system.

```
border-[#e5e7eb] [border-width:0.5px]      /* full border */
border-t border-[#e5e7eb] [border-top-width:0.5px]   /* top only */
border-b border-[#e5e7eb] [border-bottom-width:0.5px] /* bottom only */
divide-y divide-[#e5e7eb] [divide-width:0.5px]        /* between children */
```

**Dark section borders** (on `#0f1010` or `#1a1a1a` backgrounds):
```
border-zinc-800
divide-zinc-800
h-px bg-zinc-700   /* decorative rule */
```

---

## Background Patterns

### Page root mesh texture

Applied to the homepage root `<div>` via `industrialMeshStyle`:
```ts
{
  backgroundColor: "#ffffff",
  backgroundImage: "radial-gradient(#e5e7eb 0.5px, transparent 0.5px)",
  backgroundSize: "24px 24px",
}
```

### Section background alternation

| Section type | Background |
|---|---|
| Default content | white or `bg-md3-surface (#fcf9f8)` |
| Subtle lift | `bg-white/60 backdrop-blur-sm` |
| Brand accent | `bg-md3-primary` (teal) + `text-md3-on-primary` |
| Dark split column | `bg-[#0f1010]` |
| Dark CTA | `bg-[#1a1a1a]` |

---

## Buttons

All buttons are **sharp-cornered** (`rounded-none`). No rounded buttons anywhere on the site.

### Primary CTA — filled dark
```tsx
<Link
  to="/contact"
  className="bg-[#1a1a1a] px-10 py-5 text-[11px] font-bold uppercase tracking-[0.3em] text-white transition-all hover:bg-md3-primary"
>
  Get My Free Audit
</Link>
```

### Primary CTA — filled teal
```tsx
<Link
  to="/audit"
  className="bg-md3-primary px-8 py-5 text-[11px] font-bold uppercase tracking-[0.25em] text-white transition-all hover:bg-[#1a1a1a]"
>
  Start With A Free Audit
</Link>
```

### Secondary CTA — ghost (dark bg)
```tsx
<Link
  to="/contact"
  className="border border-white/30 bg-white/5 px-8 py-5 text-[12px] font-bold uppercase tracking-[0.3em] text-white backdrop-blur-md [border-width:0.5px] transition-all hover:bg-white hover:text-zinc-950"
>
  Book A Growth Call
</Link>
```

### Ghost on light bg — underline only
```tsx
<Link
  to="/pricing"
  className="border-b border-[#e5e7eb] [border-bottom-width:0.5px] py-5 text-[11px] font-bold uppercase tracking-[0.3em] text-[#1a1a1a] transition-all hover:border-md3-primary hover:text-md3-primary"
>
  View Pricing
</Link>
```

### Inline CTA — arrow link
```tsx
<p className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-md3-primary">
  See Results
  <ArrowRight className="size-3.5 shrink-0" aria-hidden />
</p>
```

---

## Cards

### Standard content card (services, testimonials, FAQ)
```tsx
<div className="rounded-2xl border border-[#e5e7eb] bg-white p-6 shadow-sm [border-width:0.5px] transition-all hover:border-md3-primary/40 hover:shadow-xl hover:shadow-md3-primary/5">
```

### Who We Help / trade cards
```tsx
<div className="group relative flex flex-col overflow-hidden rounded-2xl bg-white border border-[#e5e7eb] shadow-sm [border-width:0.5px] transition-all hover:shadow-md">
  {/* Teal top accent bar */}
  <div className="h-1.5 w-full bg-md3-primary" />
  <div className="p-8 flex flex-col h-full">
    ...
  </div>
</div>
```

Note: `overflow-hidden` on the card clips the accent bar's corners to the `rounded-2xl` radius.

### Pricing / feature card — dark
```tsx
<div className="rounded-2xl bg-[#1a1a1a] p-8 text-white">
```

### Card with image header
```tsx
<div className="group flex flex-col overflow-hidden rounded-2xl border border-[#e5e7eb] bg-white [border-width:0.5px] hover:border-md3-primary/40 hover:shadow-xl hover:shadow-md3-primary/5">
  <div className="relative aspect-[16/11] overflow-hidden bg-zinc-100">
    <img
      src={imgSrc}
      alt={imgAlt}
      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
  </div>
  <div className="flex flex-1 flex-col p-6 lg:p-8">
    ...
  </div>
</div>
```

### Eyebrow + headline pattern (used in every card and section)
```tsx
<span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.3em] text-md3-primary">
  Section Label
</span>
<h2 className="font-headline text-3xl font-light tracking-tight md:text-4xl" style={{ color: INDUSTRIAL.charcoal }}>
  Section Headline
</h2>
<div className="mx-auto mt-4 h-px w-24 bg-md3-primary" />
```

---

## Section Patterns

### Standard section
```tsx
<section className="site-container py-16 sm:py-20 lg:py-24">
  <div className="mb-12 text-center">
    <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.3em] text-md3-primary">
      Eyebrow
    </span>
    <h2 className="font-headline text-3xl font-light tracking-tight md:text-4xl" style={{ color: INDUSTRIAL.charcoal }}>
      Section Headline
    </h2>
    <div className="mx-auto mt-4 h-px w-24 bg-md3-primary" />
  </div>
  {/* content */}
</section>
```

### Full-bleed 2-column dark/light split
```tsx
<section className="overflow-hidden border-b border-[#e5e7eb] [border-width:0.5px]">
  <div className="site-container px-0">
    <div className="grid lg:grid-cols-[5fr_7fr]">

      {/* Left: dark pull-quote */}
      <div className="flex flex-col justify-between px-8 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20 xl:px-20 bg-[#0f1010]">
        <span className="mb-10 block text-[10px] font-bold uppercase tracking-[0.3em] text-md3-primary">
          Section Label
        </span>
        <p className="font-headline text-4xl font-light leading-[1.05] tracking-tight text-white sm:text-5xl xl:text-6xl">
          Pull quote<br />
          <span className="font-bold text-md3-primary">emphasis.</span>
        </p>
        <div className="mt-8 grid grid-cols-2 gap-6 border-t border-zinc-800 pt-8">
          <div>
            <span className="font-headline text-3xl font-black text-white">47+</span>
            <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-500">Stat Label</p>
          </div>
        </div>
      </div>

      {/* Right: white content, optionally divided */}
      <div className="divide-y divide-[#e5e7eb] bg-white [divide-width:0.5px]">
        <div className="px-8 py-10 sm:px-12 sm:py-14 lg:px-16 lg:py-16 xl:px-20">
          <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.3em] text-md3-primary">
            Sub Label
          </span>
          <h3 className="mb-5 font-headline text-2xl font-light tracking-tight sm:text-3xl" style={{ color: INDUSTRIAL.charcoal }}>
            Block Heading
          </h3>
          <p className="text-base font-light leading-relaxed" style={{ color: INDUSTRIAL.muted }}>
            Body copy.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>
```

### Brand accent section (teal background)
```tsx
<section className="border-y border-[#e5e7eb] bg-md3-primary py-16 sm:py-20 lg:py-24 text-md3-on-primary [border-width:0.5px]">
  <div className="site-container">
    {/* content — text uses text-md3-on-primary (white) */}
  </div>
</section>
```

### Final CTA section (white card with geometric decoration)
```tsx
<section className="site-container pb-20 sm:pb-28 lg:pb-32 pt-6 sm:pt-8">
  <div className="relative w-full overflow-hidden bg-white border border-[#e5e7eb] [border-width:0.5px] p-8 sm:p-10 md:p-16 lg:p-20 text-left">
    <div className="relative z-10 max-w-2xl">
      <h2 className="mb-8 font-headline text-3xl sm:text-4xl font-light leading-tight tracking-tight md:text-5xl" style={{ color: INDUSTRIAL.charcoal }}>
        Headline with{" "}
        <span className="font-bold text-md3-primary">accented phrase.</span>
      </h2>
      <p className="mb-12 max-w-xl text-lg font-light leading-relaxed" style={{ color: INDUSTRIAL.muted }}>
        Supporting copy.
      </p>
      <div className="flex flex-wrap gap-8">
        {/* Primary CTA — dark */}
        {/* Ghost CTA — underline */}
      </div>
    </div>
    {/* Optional: decorative geometric SVG, right side, opacity-[0.03] */}
  </div>
</section>
```

---

## Badges & Pills

### Stat/metric badge (on dark bg)
```tsx
<span className="rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider bg-zinc-800 text-zinc-400">
  PANEL FOCUS: <span className="text-md3-primary">94%</span>
</span>
```

### Metric pill (on light bg)
```tsx
<span className="flex items-center gap-2 rounded-full border border-[#e5e7eb] bg-zinc-50 px-4 py-1.5 text-xs font-semibold text-zinc-700 [border-width:0.5px]">
  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-md3-primary" />
  Metric Name
</span>
```

### Result highlight badge (testimonials)
```tsx
<div className="inline-flex self-start rounded-full bg-md3-primary/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-md3-primary">
  19 calls/month vs. 2–3 before
</div>
```

### Audience badge (hero)
```tsx
<span className="inline-block rounded-full bg-md3-secondary-container px-3 py-1 text-[10px] font-bold uppercase tracking-[0.3em] text-md3-on-secondary-container">
  For Electricians &amp; HVAC Contractors
</span>
```

---

## Hero Pattern

```tsx
<section
  className="relative -mt-24 flex min-h-[90vh] items-center overflow-hidden bg-cover bg-center bg-no-repeat pt-24"
  style={{ backgroundImage: `url(${heroBgImage})` }}
>
  {/* Overlay */}
  <div className="absolute inset-0 z-0">
    <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/60 to-zinc-900/30" />
    <div className="absolute inset-0 bg-zinc-950/20 backdrop-blur-[1px]" />
  </div>

  <div className="relative z-10 site-container pb-16 sm:pb-20 lg:pb-32 pt-0">
    {/* Audience badge */}
    <span className="mb-6 inline-block rounded-full bg-md3-secondary-container px-3 py-1 text-[10px] font-bold uppercase tracking-[0.3em] text-md3-on-secondary-container">
      For [Audience]
    </span>

    {/* H1 — light weight + gradient line + bold accent */}
    <h1 className="mb-6 font-headline text-4xl font-light leading-[1.02] tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
      <span className="block" style={industrialTextGradientStyle}>
        First line of headline
      </span>
      <span className="mt-1 block">
        <span className="font-bold text-md3-primary">Bold accent</span>
        <span className="font-light text-zinc-100"> rest of line</span>
      </span>
    </h1>

    {/* Subheadline */}
    <p className="mb-6 max-w-lg text-base font-light leading-relaxed text-zinc-300 sm:text-lg sm:mb-10">
      Subheadline copy.
    </p>

    {/* CTA pair */}
    <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
      {/* Primary */}
      <Link to="/audit" className="rounded-none bg-md3-primary px-6 py-4 sm:px-10 sm:py-5 text-center text-[12px] font-bold uppercase tracking-[0.3em] text-white shadow-xl transition-all hover:bg-[#1a1a1a] hover:shadow-2xl">
        Primary CTA
      </Link>
      {/* Secondary ghost */}
      <Link to="/contact" className="border border-white/30 bg-white/5 px-6 py-4 sm:px-10 sm:py-5 text-center text-[12px] font-bold uppercase tracking-[0.3em] text-white backdrop-blur-md [border-width:0.5px] transition-all hover:bg-white hover:text-zinc-950">
        Secondary CTA
      </Link>
    </div>

    {/* Social proof strip */}
    <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">
      {/* Star rating, stats, separators */}
    </div>
  </div>
</section>
```

### Headline gradient text style (`industrialTextGradientStyle`)
```ts
{
  background: "linear-gradient(135deg, #ffffff 0%, #94a3b8 100%)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
}
```

---

## Process Steps Pattern

```tsx
<div className="relative grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
  {/* Horizontal connector line */}
  <div className="absolute left-0 top-8 -z-10 hidden h-px w-full md:block bg-[#e5e7eb]" />

  {steps.map((step) => (
    <div key={step.n} className="space-y-3">
      {/* Step number circle */}
      <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#e5e7eb] bg-white font-headline text-xl font-light text-md3-primary shadow-md">
        {step.n}
      </div>
      <p className="text-xs font-bold uppercase tracking-wider text-md3-primary">{step.timeframe}</p>
      <h4 className="font-semibold" style={{ color: INDUSTRIAL.charcoal }}>{step.title}</h4>
      <p className="text-sm font-light" style={{ color: INDUSTRIAL.muted }}>{step.desc}</p>
    </div>
  ))}
</div>
```

---

## FAQ Accordion Pattern

```tsx
<section className="border-t border-[#e5e7eb] py-16 sm:py-20 lg:py-24 [border-top-width:0.5px]">
  <div className="site-container">
    <div className="mx-auto max-w-3xl">
      {/* heading + divider */}
      <div className="space-y-4">
        {faqItems.map((item, index) => {
          const open = openFaq === index;
          return (
            <div
              key={item.q}
              className="rounded-2xl border border-[#e5e7eb] bg-white p-6 shadow-sm [border-width:0.5px]"
            >
              <button
                type="button"
                className="flex w-full cursor-pointer items-center justify-between gap-4 text-left"
                onClick={() => setOpenFaq(open ? null : index)}
                aria-expanded={open}
              >
                <span className="font-semibold text-base sm:text-lg" style={{ color: INDUSTRIAL.charcoal }}>
                  {item.q}
                </span>
                <span
                  className={cn("material-symbols-outlined shrink-0 transition-transform", open && "rotate-180")}
                  aria-hidden="true"
                >
                  expand_more
                </span>
              </button>
              {open && (
                <p className="mt-4 font-light leading-relaxed" style={{ color: INDUSTRIAL.muted }}>
                  {item.a}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  </div>
</section>
```

---

## Testimonial Cards Pattern

```tsx
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
  {testimonials.map((t) => (
    <div
      key={t.name}
      className="group flex flex-col gap-6 rounded-2xl border border-[#e5e7eb] bg-white p-8 shadow-sm [border-width:0.5px] transition-all hover:border-md3-primary/40 hover:shadow-xl hover:shadow-md3-primary/5"
    >
      {/* Stars */}
      <div className="flex gap-1.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="size-3.5 fill-yellow-400 text-yellow-400" aria-hidden />
        ))}
      </div>
      {/* Quote */}
      <blockquote className="flex-1 text-[15px] font-light leading-relaxed italic" style={{ color: INDUSTRIAL.charcoal }}>
        &ldquo;{t.quote}&rdquo;
      </blockquote>
      {/* Result badge */}
      <div className="inline-flex self-start rounded-full bg-md3-primary/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-md3-primary">
        {t.resultHighlight}
      </div>
      {/* Attribution */}
      <div className="border-t border-[#e5e7eb] pt-6 [border-top-width:0.5px]">
        <p className="font-bold leading-none mb-1" style={{ color: INDUSTRIAL.charcoal }}>{t.name}</p>
        <p className="text-[13px] font-light leading-none" style={{ color: INDUSTRIAL.muted }}>
          {t.trade} · {t.location}
        </p>
      </div>
    </div>
  ))}
</div>
```

---

## Grid Layouts

| Use case | Classes |
|---|---|
| 2-col feature | `grid gap-6 sm:grid-cols-2` |
| 3-col cards | `grid gap-6 sm:grid-cols-2 md:grid-cols-3` |
| 4-col services | `grid gap-6 sm:grid-cols-2 lg:grid-cols-4` |
| 5-col process | `grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-5` |
| 2-col 50/50 hero | `grid items-center gap-8 lg:grid-cols-2` |
| 2-col asymmetric | `grid lg:grid-cols-[5fr_7fr]` |

---

## Page-Level Conventions

### Page that uses `<Layout>` (nav + footer)
```tsx
export function MyPage() {
  return (
    <>
      <SEO titleFull="Page Title | BuiltExpert" description="..." />
      <div style={industrialMeshStyle}>
        {/* sections */}
      </div>
    </>
  );
}
```

### Standalone landing page (no nav/footer)
```tsx
export function MyLandingPage() {
  return (
    <>
      <SEO titleFull="..." description="..." />
      <div className="min-h-screen bg-[#fcf9f8]">
        {/* minimal header */}
        <header className="border-b border-[#e5e7eb] bg-white [border-bottom-width:0.5px]">
          <div className="site-container flex items-center justify-between py-4">
            {/* logo + contact */}
          </div>
        </header>
        {/* sections */}
        {/* minimal footer */}
      </div>
    </>
  );
}
```

### Inner page hero (no full-screen bg image)
```tsx
<section className="site-container py-16 sm:py-20 lg:py-28">
  <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.3em] text-md3-primary">
    Page label
  </span>
  <h1 className="font-headline text-4xl font-light tracking-tight sm:text-5xl md:text-6xl" style={{ color: INDUSTRIAL.charcoal }}>
    Page Headline
  </h1>
  <div className="mt-6 h-px w-24 bg-md3-primary" />
  <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed" style={{ color: INDUSTRIAL.muted }}>
    Page description.
  </p>
</section>
```

---

## Interaction States

| Element | Hover |
|---|---|
| Dark filled button | `hover:bg-md3-primary` |
| Teal filled button | `hover:bg-[#1a1a1a]` |
| Ghost dark-bg button | `hover:bg-white hover:text-zinc-950` |
| Ghost light-bg underline | `hover:border-md3-primary hover:text-md3-primary` |
| Content card | `hover:border-md3-primary/40 hover:shadow-xl hover:shadow-md3-primary/5` |
| Image inside card | `group-hover:scale-105` (duration-500) |
| Arrow icon in CTA | `group-hover:translate-x-1` |

All transitions use `transition-all` unless targeting a single property.

---

## Accessibility Checklist

- All `<section>` elements have meaningful content (no empty wrappers)
- Interactive `<div>` elements have `role`, `tabIndex={0}`, `onKeyDown`, `aria-label`
- Icon-only elements get `aria-hidden="true"`
- Star rating groups get `role="img" aria-label="X out of 5 stars"`
- FAQ toggles have `aria-expanded`
- Skip-to-content link in `<Navbar>`
- Color contrast: teal `#006565` on white meets AA at large sizes; body copy `#1a1a1a` / `#6b7280` meet AA

---

## What Not To Do

- ❌ `rounded-lg` / `rounded-xl` on buttons — all buttons are `rounded-none`
- ❌ `border-zinc-100` / `border-zinc-200` / `border-gray-200` for layout borders — use `border-[#e5e7eb]`
- ❌ `border` at default 1px weight for section/card borders — always add `[border-width:0.5px]`
- ❌ Padding on the `<section>` when it also needs a full-bleed `border-t` — padding goes on inner container
- ❌ Hardcoded `mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12 2xl:px-16` — use `.site-container`
- ❌ `rounded-none` on cards — cards are `rounded-2xl`
- ❌ `INDUSTRIAL.outline` in `style={{ borderColor: ... }}` — use `border-[#e5e7eb]` className
- ❌ Generic sans-serif or system fonts — always `font-headline` for headings, `font-body` for text

---

## File References

| File | Purpose |
|---|---|
| `src/index.css` | MD3 tokens, `@theme`, `.site-container`, `.section-py`, `.prose-region` |
| `src/lib/industrialStyle.ts` | `INDUSTRIAL` color map, `industrialMeshStyle`, `industrialTextGradientStyle` |
| `src/components/ui/Section.tsx` | Generic `<Section>` wrapper (legacy; prefer direct `site-container` pattern) |
| `src/components/ui/Navbar.tsx` | Fixed nav, scroll state, mobile menu |
| `src/pages/Home.tsx` | Canonical reference for all patterns |
