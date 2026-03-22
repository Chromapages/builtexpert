# Chromapages — Swiss Modernism 2.0 Redesign Plan (Part 2)

> Continuation of **REDESIGN-PLAN.md** — Sections 5–10

---

## 5. Desktop Wireframes

Reference: **1440px viewport**, 12-column grid, 24px gutters, max-w-7xl (1280px) content area.

### 5.1 Homepage — Desktop

```
┌──────────────────────────────────────────────────────────────┐
│ NAV: [CP]  Services  Work  Process  Pricing  About  [Book A Call] │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  HERO (min-h-[85vh])                                         │
│                                                              │
│  Col 1-7 (flush-left):              Col 8-12:                │
│  ┌────────────────────────────┐     ┌───────────────────┐    │
│  │ [10px label]               │     │                   │    │
│  │ DIGITAL STUDIO             │     │ [subtle dot-grid  │    │
│  │                            │     │  or geometric     │    │
│  │ WEBSITES                   │     │  element]         │    │
│  │ THAT CONVERT               │     │                   │    │
│  │ VISITORS INTO              │     └───────────────────┘    │
│  │ CUSTOMERS.                 │                              │
│  │                            │                              │
│  │ [16px] We engineer high-   │                              │
│  │ performance sites that     │                              │
│  │ lead with clarity and end  │                              │
│  │ with conversion.           │                              │
│  │                            │                              │
│  │ [■ Book A Call]            │                              │
│  │ View our work →            │                              │
│  └────────────────────────────┘                              │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│  POSITIONING STRIP (py-6, border-y)                          │
│  Premium Design  ·  Performance  ·  Conversion  ·  Support   │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  SERVICES GRID (py-32)                                       │
│                                                              │
│  Col 1-4:                  Col 5-12:                         │
│  ┌───────────────┐         ┌──────────────────────────┐      │
│  │ [label]       │         │ ┌──────────┬──────────┐  │      │
│  │ What We       │         │ │01        │02        │  │      │
│  │ Engineer      │         │ │Strategy  │Commerce  │  │      │
│  │               │         │ │[desc]    │[desc]    │  │      │
│  │ [body text]   │         │ │→         │→         │  │      │
│  └───────────────┘         │ ├──────────┼──────────┤  │      │
│                            │ │03        │04 (accent│  │      │
│                            │ │Web Apps  │bg)       │  │      │
│                            │ │[desc]    │Support   │  │      │
│                            │ │→         │→         │  │      │
│                            │ └──────────┴──────────┘  │      │
│                            └──────────────────────────┘      │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│  STATS BAR (bg-ink, py-20)                                   │
│  ┌─────────────────┬─────────────────┬─────────────────┐     │
│  │ 50+             │ 10yr            │ 98%             │     │
│  │ Projects        │ Experience      │ Client Retention│     │
│  └─────────────────┴─────────────────┴─────────────────┘     │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  WORK SHOWCASE (py-32)                                       │
│                                                              │
│  Col 1-5:                  Col 6-12:                         │
│  ┌───────────────┐         ┌──────────────────────────┐      │
│  │ [label]       │         │ ┌──────────────────────┐ │      │
│  │ Recent        │         │ │ [Project image]      │ │      │
│  │ Output        │         │ │ 16:10, grayscale     │ │      │
│  │               │         │ ├──────────────────────┤ │      │
│  │ [View all →]  │         │ │ Category · Client    │ │      │
│  └───────────────┘         │ │ +47% conversion      │ │      │
│                            │ └──────────────────────┘ │      │
│                            │ ┌──────────────────────┐ │      │
│                            │ │ [Project image]      │ │      │
│                            │ ├──────────────────────┤ │      │
│                            │ │ Category · Client    │ │      │
│                            │ │ +120% leads          │ │      │
│                            │ └──────────────────────┘ │      │
│                            └──────────────────────────┘      │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│  TESTIMONIALS (bg-surface, py-32)                            │
│  ┌───────────────┬───────────────┬───────────────┐           │
│  │ "Quote..."    │ "Quote..."    │ "Quote..."    │           │
│  │               │               │               │           │
│  │ — Name        │ — Name        │ — Name        │           │
│  │   Title, Co.  │   Title, Co.  │   Title, Co.  │           │
│  └───────────────┴───────────────┴───────────────┘           │
├──────────────────────────────────────────────────────────────┤
│  FINAL CTA (bg-dark, py-40, text-center)                     │
│                                                              │
│  READY TO BUILD                                              │
│  SOMETHING THAT                                              │
│  ACTUALLY WORKS?                                             │
│                                                              │
│  [■ Book A Call]  [□ View Archive]                            │
├──────────────────────────────────────────────────────────────┤
│  FOOTER                                                      │
└──────────────────────────────────────────────────────────────┘
```

**Annotations:**
- Hero: 7/5 asymmetric split. Headline flush-left. No centering.
- Positioning strip replaces old manifesto. Scannable horizontal bar.
- Services: heading left (1-4), cards right (5-12). Numbered labels.
- Work: heading left (1-5), stacked cards right (6-12). Grayscale→color hover.
- Testimonials: 3-column. No carousel. No dots. No slide mechanic.
- Total sections: 7 (reduced from current 9).

### 5.2 Services Page — Desktop

```
┌──────────────────────────────────────────────────────────────┐
│ NAV                                                          │
├──────────────────────────────────────────────────────────────┤
│  HERO (py-32)                                                │
│  Col 1-8:                                                    │
│  ┌─────────────────────────────────────┐                     │
│  │ [label] SERVICES                     │                    │
│  │ ENGINEERING DIGITAL                  │                    │
│  │ EXPERIENCES THAT PERFORM.            │                    │
│  │ [body] Four focus areas. One goal.   │                    │
│  └─────────────────────────────────────┘                     │
│                                                              │
│  ANCHOR NAV (sticky on scroll, border-y)                     │
│  Marketing Sites · E-Commerce · Web Apps · Ongoing Support   │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  SERVICE 01 — MARKETING SITES (py-32)                        │
│                                                              │
│  Col 1-5:                    Col 7-12:                       │
│  ┌──────────────────┐        ┌────────────────────┐          │
│  │ 01               │        │ What's included:   │          │
│  │ Marketing Sites  │        │ · Strategy         │          │
│  │                  │        │ · IA + Wireframes  │          │
│  │ Convert visitors │        │ · Visual design    │          │
│  │ into leads.      │        │ · Development      │          │
│  │                  │        │ · Tracking setup   │          │
│  │ [body with       │        │ · QA + Launch      │          │
│  │  specific        │        │                    │          │
│  │  outcomes]       │        │ Ideal for:         │          │
│  │                  │        │ B2B, professional  │          │
│  │ [■ Book A Call]  │        │ services           │          │
│  └──────────────────┘        │ [Case study →]     │          │
│                              └────────────────────┘          │
│  ─── divider ────────────────────────────────────────        │
│                                                              │
│  SERVICE 02 — E-COMMERCE (py-32, MIRRORED layout)            │
│  Col 1-6: deliverables        Col 8-12: description          │
│  ─── divider ────────────────────────────────────────        │
│                                                              │
│  SERVICE 03 — WEB APPS (py-32, same as 01)                   │
│  ─── divider ────────────────────────────────────────        │
│                                                              │
│  SERVICE 04 — ONGOING SUPPORT (bg-accent, py-32)             │
│  Full-width. White text. Highlights subscription model.      │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│  FINAL CTA + FOOTER                                          │
└──────────────────────────────────────────────────────────────┘
```

**Annotations:**
- Alternating left/right layouts prevent monotony while keeping grid discipline.
- Sticky anchor nav allows jumping between services.
- Each service: number, name, value statement, body, CTA, deliverables checklist.
- Service 04 uses accent background to highlight subscription.

### 5.3 Work Page — Desktop

```
┌──────────────────────────────────────────────────────────────┐
│ NAV                                                          │
├──────────────────────────────────────────────────────────────┤
│  HERO (py-32) Col 1-7:                                       │
│  [label] PORTFOLIO                                           │
│  WORK THAT CONVERTS                                          │
│  [body]                                                      │
│                                                              │
│  FILTER BAR (flush-left text toggles, NOT pills)             │
│  All   Marketing Sites   E-Commerce   Web Apps   Redesigns   │
│  ───   (active = underline, not rounded-full pill)           │
├──────────────────────────────────────────────────────────────┤
│  PROJECT GRID (2 columns, gap-12)                            │
│                                                              │
│  ┌────────────────────────┐  ┌────────────────────────┐      │
│  │ ┌────────────────────┐ │  │ ┌────────────────────┐ │      │
│  │ │ [project image]    │ │  │ │ [project image]    │ │      │
│  │ │ aspect-[16/10]     │ │  │ │ grayscale→color    │ │      │
│  │ └────────────────────┘ │  │ └────────────────────┘ │      │
│  │ [10px] E-COMMERCE      │  │ [10px] MARKETING       │      │
│  │ Client Name            │  │ Client Name            │      │
│  │ +47% conversion rate   │  │ +120% qualified leads  │      │
│  └────────────────────────┘  └────────────────────────┘      │
│                                                              │
│  [more rows same pattern]                                    │
├──────────────────────────────────────────────────────────────┤
│  FINAL CTA + FOOTER                                          │
└──────────────────────────────────────────────────────────────┘
```

**Key change:** Replace rounded pill filters with text toggles + underline. Aligns with zero-radius Swiss system.

### 5.4 Case Study Page — Desktop

```
┌──────────────────────────────────────────────────────────────┐
│ NAV                                                          │
├──────────────────────────────────────────────────────────────┤
│  HERO (py-32)                                                │
│  Col 1-7:                           Col 8-12:               │
│  ┌──────────────────────────┐       ┌──────────────────┐     │
│  │ [10px] E-COMMERCE         │       │ KEY METRICS      │     │
│  │ CLIENT NAME               │       │ +47% Conv.       │     │
│  │ [one-line description]    │       │ 94 PageSpeed     │     │
│  │ Industry: Retail          │       │ 2.1s LCP         │     │
│  │ Timeline: 8 weeks         │       └──────────────────┘     │
│  │ Stack: Next.js, Shopify   │                               │
│  └──────────────────────────┘                                │
├──────────────────────────────────────────────────────────────┤
│  FULL-WIDTH IMAGE (aspect-[21/9])                            │
│  ┌──────────────────────────────────────────────────────┐    │
│  │              [Hero project screenshot]                │    │
│  └──────────────────────────────────────────────────────┘    │
├──────────────────────────────────────────────────────────────┤
│  NARRATIVE (py-32)                                           │
│  Col 1-3:           Col 5-10:                                │
│  ┌──────────┐       ┌──────────────────────────────────┐     │
│  │ THE      │       │ [problem description, 2-3 para]  │     │
│  │ CHALLENGE│       └──────────────────────────────────┘     │
│  └──────────┘                                                │
│  Col 1-3:           Col 5-10:                                │
│  ┌──────────┐       ┌──────────────────────────────────┐     │
│  │ THE      │       │ [solution description, 2-3 para] │     │
│  │ APPROACH │       └──────────────────────────────────┘     │
│  └──────────┘                                                │
├──────────────────────────────────────────────────────────────┤
│  RESULTS GRID (bg-ink, py-20, white text)                    │
│  ┌──────────┬──────────┬──────────┬──────────┐               │
│  │ +47%     │ 94       │ 2.1s     │ 3x       │               │
│  │ Conv.    │ Speed    │ LCP      │ Leads    │               │
│  └──────────┴──────────┴──────────┴──────────┘               │
├──────────────────────────────────────────────────────────────┤
│  TESTIMONIAL (py-24, centered, max-w-2xl)                    │
│  "Client quote about this project..."                        │
│  — Name, Title, Company                                      │
├──────────────────────────────────────────────────────────────┤
│  NEXT/PREV (py-16)                                           │
│  ← Previous Project              Next Project →              │
├──────────────────────────────────────────────────────────────┤
│  FINAL CTA + FOOTER                                          │
└──────────────────────────────────────────────────────────────┘
```

### 5.5 Process Page (NEW) — Desktop

```
┌──────────────────────────────────────────────────────────────┐
│ NAV                                                          │
├──────────────────────────────────────────────────────────────┤
│  HERO (py-32) Col 1-8:                                       │
│  [label] HOW WE WORK                                         │
│  STRATEGY FIRST. THEN EXECUTION.                             │
│  [body] Every project follows a five-phase gated workflow.   │
├──────────────────────────────────────────────────────────────┤
│  PHASE TIMELINE (py-32)                                      │
│                                                              │
│  Col 1-2:   Col 3-4:          Col 5-12:                      │
│  ┌────────┐ ┌──────────────┐  ┌──────────────────────────┐   │
│  │ 01     │ │ STRATEGY     │  │ [description]            │   │
│  │        │ │ Week 1-2     │  │ Deliverables:             │   │
│  │        │ │              │  │ · Scope doc · IA · Flows │   │
│  └────────┘ └──────────────┘  └──────────────────────────┘   │
│  ─── divider ─────────────────────────────────────────       │
│  [02 DESIGN — same pattern]                                  │
│  ─── divider ─────────────────────────────────────────       │
│  [03 BUILD — same pattern]                                   │
│  ─── divider ─────────────────────────────────────────       │
│  [04 QA — same pattern]                                      │
│  ─── divider ─────────────────────────────────────────       │
│  [05 LAUNCH — same pattern]                                  │
├──────────────────────────────────────────────────────────────┤
│  POST-LAUNCH (bg-accent, py-24)                              │
│  "Your site launches, but the work doesn't stop."            │
│  [Subscription model description]                            │
│  [■ Book A Call]                                             │
├──────────────────────────────────────────────────────────────┤
│  FOOTER                                                      │
└──────────────────────────────────────────────────────────────┘
```

### 5.6 Pricing Page — Desktop

```
┌──────────────────────────────────────────────────────────────┐
│ NAV                                                          │
├──────────────────────────────────────────────────────────────┤
│  HERO (py-32) Col 1-8:                                       │
│  [label] PRICING                                             │
│  TRANSPARENT INVESTMENT. PREDICTABLE VALUE.                  │
│  [body] Investment fee + monthly subscription model.         │
├──────────────────────────────────────────────────────────────┤
│  PRICING TABLE (py-32, 3-column)                             │
│  ┌───────────────┬───────────────┬───────────────┐           │
│  │ WEB LAUNCH    │ WEB GROWTH    │ WEB SCALE     │           │
│  │               │ (RECOMMENDED) │               │           │
│  │               │ [accent bg]   │               │           │
│  ├───────────────┼───────────────┼───────────────┤           │
│  │ Investment:   │ Investment:   │ Investment:   │           │
│  │ $X,XXX        │ $XX,XXX       │ $XX,XXX       │           │
│  │ Monthly: $XXX │ Monthly: $X,XXX│ Monthly: $X,XXX│          │
│  │ Term: 3 mo    │ Term: 3 mo    │ Term: 4 mo    │           │
│  ├───────────────┼───────────────┼───────────────┤           │
│  │ ✓ Feature     │ ✓ Feature     │ ✓ Feature     │           │
│  │ ✓ Feature     │ ✓ Feature     │ ✓ Feature     │           │
│  │ ✓ Feature     │ ✓ Feature     │ ✓ Feature     │           │
│  │               │ ✓ Feature     │ ✓ Feature     │           │
│  ├───────────────┼───────────────┼───────────────┤           │
│  │ [□ Book Call] │ [■ Book Call] │ [□ Book Call] │           │
│  └───────────────┴───────────────┴───────────────┘           │
├──────────────────────────────────────────────────────────────┤
│  FAQ (py-32)                                                 │
│  Col 1-5:                Col 7-12:                           │
│  ┌──────────────────┐    ┌────────────────────────────┐      │
│  │ Common Questions │    │ Q: What's the investment   │      │
│  │                  │    │    fee for?                │      │
│  │                  │    │ A: Strategy foundation...  │      │
│  │                  │    │                            │      │
│  │                  │    │ Q: Can I cancel monthly?   │      │
│  │                  │    │ A: After minimum term...   │      │
│  └──────────────────┘    └────────────────────────────┘      │
├──────────────────────────────────────────────────────────────┤
│  SOCIAL PROOF + CTA + FOOTER                                 │
└──────────────────────────────────────────────────────────────┘
```

### 5.7 About Page — Desktop

```
┌──────────────────────────────────────────────────────────────┐
│ NAV                                                          │
├──────────────────────────────────────────────────────────────┤
│  HERO (py-32)                                                │
│  Col 1-7:                         Col 9-12:                  │
│  ┌────────────────────────┐       ┌─────────────────┐        │
│  │ [label] ABOUT           │       │ [Founder        │        │
│  │ BUILT BY ERIC BLACK.    │       │  portrait, B&W  │        │
│  │                         │       │  or duotone]    │        │
│  │ [body] Solo studio      │       └─────────────────┘        │
│  │ focused on performance  │                                  │
│  │ and conversion. 10+yr.  │                                  │
│  └────────────────────────┘                                   │
├──────────────────────────────────────────────────────────────┤
│  VALUES (py-32, 3-column grid)                               │
│  01 Clarity First  ·  02 Performance  ·  03 Partnership      │
├──────────────────────────────────────────────────────────────┤
│  TECH STACK (bg-surface, py-24)                              │
│  Grid of tech: Next.js · React · Tailwind · Sanity · Vercel │
├──────────────────────────────────────────────────────────────┤
│  CTA + FOOTER                                                │
└──────────────────────────────────────────────────────────────┘
```

### 5.8 Contact Page — Desktop

```
┌──────────────────────────────────────────────────────────────┐
│ NAV                                                          │
├──────────────────────────────────────────────────────────────┤
│  HERO (py-32, min-h-[80vh])                                  │
│                                                              │
│  Col 1-5:                    Col 7-12:                       │
│  ┌──────────────────┐        ┌────────────────────┐          │
│  │ LET'S TALK.      │        │ [FORM]             │          │
│  │                  │        │                    │          │
│  │ 30-min discovery │        │ Name *             │          │
│  │ call. No         │        │ __________________ │          │
│  │ pressure.        │        │ Email *            │          │
│  │                  │        │ __________________ │          │
│  │ What to prepare: │        │ Company            │          │
│  │ · Goals          │        │ __________________ │          │
│  │ · Current site   │        │ Goals *            │          │
│  │ · Timeline       │        │ __________________ │          │
│  │                  │        │ __________________│          │
│  │                  │        │                    │          │
│  │                  │        │ [■ Submit Request] │          │
│  └──────────────────┘        └────────────────────┘          │
├──────────────────────────────────────────────────────────────┤
│  FOOTER                                                      │
└──────────────────────────────────────────────────────────────┘
```

**Changes from current:**
- Remove form mode toggle. Always show discovery form.
- Reduce to 4 fields: Name, Email, Company (optional), Goals.
- Replace `alert()` with inline validation.
- Success state renders inline, not new page.

---

## 6. Mobile Wireframes

Reference: **375px viewport**. Independently designed — not desktop shrink-downs.

### 6.1 Homepage — Mobile

```
┌───────────────────────┐
│ [CP]             [☰]  │
├───────────────────────┤
│                       │
│ HERO (full-screen)    │
│                       │
│ [10px] DIGITAL STUDIO │
│                       │
│ WEBSITES              │
│ THAT                  │
│ CONVERT               │
│ VISITORS              │
│ INTO                  │
│ CUSTOMERS.            │
│                       │
│ We engineer high-     │
│ performance sites     │
│ that lead with        │
│ clarity and end       │
│ with conversion.      │
│                       │
│ [■ Book A Call ─ full]│
│ View our work →       │
│                       │
├───────────────────────┤
│ POSITIONING (vertical)│
│ Premium Design        │
│ ───                   │
│ Performance           │
│ ───                   │
│ Conversion Focus      │
│ ───                   │
│ Ongoing Support       │
├───────────────────────┤
│                       │
│ SERVICES (py-24)      │
│ [label] WHAT WE       │
│ ENGINEER              │
│ [body]                │
│                       │
│ ┌───────────────────┐ │
│ │ 01 — Strategy     │ │
│ │ Marketing Sites   │ │
│ │ [desc] → Explore  │ │
│ └───────────────────┘ │
│ ┌───────────────────┐ │
│ │ 02 — Commerce     │ │
│ │ [desc] → Explore  │ │
│ └───────────────────┘ │
│ ┌───────────────────┐ │
│ │ 03 — Platforms    │ │
│ │ [desc] → Explore  │ │
│ └───────────────────┘ │
│ ┌───────────────────┐ │
│ │ 04 — Growth       │ │
│ │ (accent bg)       │ │
│ │ [desc] → Explore  │ │
│ └───────────────────┘ │
│                       │
├───────────────────────┤
│ STATS (bg-ink, 2x2)  │
│ ┌──────────┬────────┐ │
│ │ 50+      │ 10yr   │ │
│ │ Projects │ Exp.   │ │
│ ├──────────┼────────┤ │
│ │ 98%      │        │ │
│ │ Retention│        │ │
│ └──────────┴────────┘ │
├───────────────────────┤
│                       │
│ WORK (py-24)          │
│ Recent Output         │
│                       │
│ ┌───────────────────┐ │
│ │ [project image]   │ │
│ │ Category          │ │
│ │ Client · Result   │ │
│ └───────────────────┘ │
│ ┌───────────────────┐ │
│ │ [project image]   │ │
│ │ Category          │ │
│ │ Client · Result   │ │
│ └───────────────────┘ │
│ [View all work →]     │
│                       │
├───────────────────────┤
│ TESTIMONIALS          │
│ (stacked, no carousel)│
│ ┌───────────────────┐ │
│ │ "Quote..."        │ │
│ │ — Name, Company   │ │
│ └───────────────────┘ │
│ ┌───────────────────┐ │
│ │ "Quote..."        │ │
│ │ — Name, Company   │ │
│ └───────────────────┘ │
├───────────────────────┤
│ CTA (bg-dark)         │
│ READY TO BUILD        │
│ SOMETHING             │
│ THAT WORKS?           │
│                       │
│ [■ Book A Call ─ full]│
│ [□ View Archive]      │
├───────────────────────┤
│ FOOTER (stacked)      │
└───────────────────────┘
```

**Mobile-specific decisions:**
- Hero headline ~48px (from 96px desktop). Still large for mobile context.
- Positioning strip → vertical stack with dividers.
- Stats: 2×2 grid (not 3-col).
- Projects: single column stack.
- Testimonials: vertical stack (no carousel).
- All CTAs: full-width.
- Section padding: py-24 (reduced from py-32).

### 6.2 Services — Mobile

```
┌───────────────────────┐
│ [CP]             [☰]  │
├───────────────────────┤
│ [label] SERVICES      │
│ ENGINEERING DIGITAL   │
│ EXPERIENCES           │
│ THAT PERFORM.         │
│ [body]                │
├───────────────────────┤
│ ANCHOR NAV            │
│ (horiz. scroll)       │
│ Marketing · E-Comm ▶  │
├───────────────────────┤
│ 01 — MARKETING SITES  │
│ Convert visitors      │
│ into leads.           │
│ [body]                │
│                       │
│ What's included:      │
│ · Strategy            │
│ · IA + Wireframes     │
│ · Visual design       │
│ · Development         │
│ · QA + Launch         │
│                       │
│ [■ Book A Call ─ full]│
│ [See case study →]    │
│ ─── divider ────────  │
│ 02 — E-COMMERCE       │
│ [same vertical stack] │
│ ─── divider ────────  │
│ 03 — WEB APPS         │
│ [same]                │
│ ─── divider ────────  │
│ 04 — ONGOING SUPPORT  │
│ (bg-accent, white txt)│
│ [same]                │
├───────────────────────┤
│ CTA + FOOTER          │
└───────────────────────┘
```

### 6.3 Contact — Mobile

```
┌───────────────────────┐
│ [CP]             [☰]  │
├───────────────────────┤
│ LET'S TALK.           │
│                       │
│ 30-min discovery      │
│ call. No pressure.    │
│                       │
│ What to prepare:      │
│ · Goals               │
│ · Current site        │
│ · Timeline            │
├───────────────────────┤
│ [FORM]                │
│ Name *                │
│ _____________________ │
│ Email *               │
│ _____________________ │
│ Company               │
│ _____________________ │
│ Goals *               │
│ _____________________ │
│ _____________________ │
│                       │
│ [■ Submit ─ full]     │
├───────────────────────┤
│ FOOTER                │
└───────────────────────┘
```

### 6.4 Pricing — Mobile

```
┌───────────────────────┐
│ [CP]             [☰]  │
├───────────────────────┤
│ [label] PRICING       │
│ TRANSPARENT           │
│ INVESTMENT.           │
│ [body]                │
├───────────────────────┤
│ PRICING CARDS         │
│ (vertical stack,      │
│  not side-by-side)    │
│                       │
│ ┌───────────────────┐ │
│ │ WEB LAUNCH        │ │
│ │ Investment: $X,XXX│ │
│ │ Monthly: $XXX     │ │
│ │ ✓ Feature list    │ │
│ │ [□ Book A Call]   │ │
│ └───────────────────┘ │
│                       │
│ ┌───────────────────┐ │
│ │ WEB GROWTH        │ │
│ │ (accent bg)       │ │
│ │ RECOMMENDED       │ │
│ │ Investment: $XX,XXX│ │
│ │ Monthly: $X,XXX   │ │
│ │ ✓ Feature list    │ │
│ │ [■ Book A Call]   │ │
│ └───────────────────┘ │
│                       │
│ ┌───────────────────┐ │
│ │ WEB SCALE         │ │
│ │ Investment: $XX,XXX│ │
│ │ Monthly: $X,XXX   │ │
│ │ ✓ Feature list    │ │
│ │ [□ Book A Call]   │ │
│ └───────────────────┘ │
│                       │
├───────────────────────┤
│ FAQ (full-width       │
│  accordion)           │
├───────────────────────┤
│ CTA + FOOTER          │
└───────────────────────┘
```

**Mobile-specific:** Pricing cards stack vertically. Recommended tier appears second (middle position in stack for visual prominence). FAQ switches to accordion format on mobile.

---

## 7. Design System Recommendations

### 7.1 Typography Scale

Sora (display) + DM Sans (body), **1.25 major third scale** anchored at 16px.

| Token | Size | Weight | Font | Usage |
|-------|------|--------|------|-------|
| `display-xl` | 96px / 6rem | Light 300 | Sora | Homepage hero |
| `display-lg` | 72px / 4.5rem | Light 300 | Sora | Page heroes |
| `display-md` | 56px / 3.5rem | Normal 400 | Sora | Section headings |
| `display-sm` | 40px / 2.5rem | Medium 500 | Sora | Sub-section headings |
| `heading-lg` | 32px / 2rem | Medium 500 | Sora | Card headings |
| `heading-md` | 24px / 1.5rem | Medium 500 | Sora | Component headings |
| `heading-sm` | 20px / 1.25rem | SemiBold 600 | Sora | Small headings |
| `body-lg` | 18px / 1.125rem | Regular 400 | DM Sans | Lead paragraphs |
| `body` | 16px / 1rem | Regular 400 | DM Sans | Body text |
| `body-sm` | 14px / 0.875rem | Regular 400 | DM Sans | Secondary, captions |
| `label` | 10px / 0.625rem | Bold 700 | DM Sans | Section labels |
| `stat` | 64px / 4rem | Light 300 | Sora | Statistics |

**Rules:**
- Headings: `uppercase`, `tracking-tight`, `leading-none`
- Labels: `uppercase`, `tracking-[0.25em]` to `tracking-[0.35em]`
- Body: `leading-relaxed` (1.625) or `leading-loose` (2.0)
- Max body width: `max-w-prose` (65ch)
- Alignment: flush-left everywhere except centered stats and final CTA

**Mobile reductions:**

| Token | Desktop | Mobile |
|-------|---------|--------|
| `display-xl` | 96px | 56px |
| `display-lg` | 72px | 48px |
| `display-md` | 56px | 36px |
| `display-sm` | 40px | 28px |
| `stat` | 64px | 48px |

### 7.2 Spacing System (8px base)

| Token | Value | Usage |
|-------|-------|-------|
| `space-1` | 4px | Micro gaps (icon-text) |
| `space-2` | 8px | Tight spacing |
| `space-3` | 12px | Label→heading gap |
| `space-4` | 16px | Default element spacing |
| `space-6` | 24px | Component padding |
| `space-8` | 32px | Card padding, column gaps |
| `space-12` | 48px | Section heading→content |
| `space-16` | 64px | Between content blocks |
| `space-20` | 80px | Section padding (mobile) |
| `space-24` | 96px | Section padding (desktop) |
| `space-32` | 128px | Hero, major separations |

### 7.3 Grid System

| Breakpoint | Columns | Gutters | Side Padding |
|-----------|---------|---------|-------------|
| Desktop ≥1024px | 12 | 24px | 32px (px-8) |
| Tablet 768–1023px | 8 | 20px | 24px (px-6) |
| Mobile <768px | 4 | 16px | 16px (px-4) |

**Common asymmetric patterns:**

| Pattern | Columns | Usage |
|---------|---------|-------|
| Wide-left | 1-7, 8-12 | Hero, narrative |
| Wide-right | 1-4, 5-12 | Services grid, FAQ |
| Half | 1-6, 7-12 | Contact, pricing |
| Third | 1-4, 5-8, 9-12 | Testimonials, features |
| Offset narrative | 1-3, 5-10 | Case study content |

### 7.4 Component Specifications

**Navigation:**
- Fixed, transparent → bg-bg/80 + backdrop-blur on scroll
- Logo: Sora Black, 30px→20px on scroll (keep existing spring behavior)
- Links: DM Sans 10px, uppercase, tracking-[0.25em], muted→ink hover
- Active page indicator: text-ink (not muted)
- CTA: accent bg, white text, h-8

**Buttons:**

| Variant | Bg | Text | Border | Hover |
|---------|-----|------|--------|-------|
| `primary` | accent | white | none | opacity-80 |
| `secondary` | transparent | ink | 1px ink | bg-ink/5 |
| `accent` | ink | white | none | opacity-90 |
| `ghost` | transparent | ink | none | bg-ink/5 |

All: `rounded-none`, `uppercase`, `tracking-widest`, `active:scale-[0.98]`

**Cards:**

| Variant | Bg | Border | Change |
|---------|-----|--------|--------|
| `default` | surface | 1px | **Remove whileHover y:-4 lift**. Replace with border-color transition. |
| `featured` | accent | none | Keep as-is |
| `bordered` | bg | 1px | Keep as-is |
| `editorial` | transparent | border-top only | **NEW** — for service descriptions |

**Section Labels (keep and systematize):**

```
Pattern: [NUMBER] — [CATEGORY]
Style: text-[10px] font-bold uppercase tracking-[0.35em] text-muted
```

**Form Inputs (redesign):**
- Border-bottom only (no box border)
- Focus: border-accent, no ring
- Error: border-red-500 + inline message below field
- Label: 10px uppercase tracking-widest above input
- Zero border-radius

**Image Treatment:**
- Project screenshots: `aspect-[16/10]`, `grayscale` → `grayscale-0` on hover
- Founder portrait: B&W or duotone (brand indigo)
- No stock photography. Only real screenshots or geometric patterns.

### 7.5 Motion Direction

**Philosophy:** Restrained, purposeful, modern. Not flashy.

**Keep:**
- Navbar scroll-responsive shrink (spring physics)
- Staggered AnimateIn on scroll for content sections
- Grayscale→color image hover transition

**Remove:**
- Card `whileHover={{ y: -4 }}` lift (overused, breaks Swiss restraint)
- Any bounce or spring animations on cards

**Add:**
- Scroll-driven fade-in for section headings (opacity + translateY(16px))
- Subtle border-color transition on card hover
- Form input focus: bottom-border color transition (200ms)

**Rules:**
- No animation on elements already in viewport on load
- Max animation duration: 500ms for reveals, 200ms for interactions
- Easing: `ease-out` for entrances, `ease-in-out` for state changes
- No parallax. No scroll hijacking. No decorative particle effects.

---

## 8. Page-by-Page Redesign Plan

### 8.1 Homepage

| Attribute | Value |
|-----------|-------|
| **Goal** | Establish trust, communicate value, drive "Book A Call" |
| **Intent** | "Who is Chromapages and can they help me?" |
| **Primary CTA** | Book A Call (above fold + end of page) |
| **Secondary CTA** | View our work |

**Sections (7 total, reduced from 9):**

1. **Hero** — 7/5 split. Flush-left display-xl headline. Body text + dual CTA. Right: geometric pattern or empty (negative space).
2. **Positioning Strip** — Border-y horizontal bar. Four differentiators. Replaces manifesto.
3. **Services Grid** — 4/8 split. Heading+intro left, 2×2 card grid right. Numbered labels.
4. **Stats Bar** — bg-ink. 3 metrics. White text.
5. **Work Showcase** — 5/7 split. Heading left, 2 stacked project cards right.
6. **Testimonials** — bg-surface. 3-column grid. No carousel.
7. **Final CTA** — bg-dark. Centered headline. Dual buttons.

**Remove:** Manifesto/philosophy section (redundant with positioning strip).
**Change:** Consistent py-32 for content sections. py-20 for stats bar.

### 8.2 Services

| Attribute | Value |
|-----------|-------|
| **Goal** | Detail offerings, qualify needs, drive CTA per service |
| **Intent** | "What specifically do they offer?" |
| **CTA** | Book A Call (per service section) |

**Structure:**
- Hero with headline + body
- Sticky anchor nav (scrolls between services)
- 4 full editorial service sections with alternating left/right layouts
- Each section: number, name, value statement, body, deliverables list, CTA, case study link
- Service 04 (Support) uses accent background

**Change from current:** Replace the 7/5 + 5/7 card grid with full editorial sections. More room for detail.

### 8.3 Work

| Attribute | Value |
|-----------|-------|
| **Goal** | Prove competence with measurable results |
| **Intent** | "Have they done this before?" |
| **CTA** | View case study → Book A Call |

**Changes:**
- Replace rounded-full filter pills with flush-left text toggles + underline
- Keep 2-column grid on desktop
- Add result metrics below each project card
- Grayscale→color hover (keep)

### 8.4 Case Study

| Attribute | Value |
|-----------|-------|
| **Goal** | Prove results for a specific project |
| **Intent** | "Did this actually work?" |
| **CTA** | Book A Call (after results section) |

**Template:**
1. Hero with metadata (category, client, timeline, stack) + key metrics sidebar
2. Full-width project screenshot
3. Narrative: Challenge (offset cols 1-3, 5-10), Approach (same pattern)
4. Results grid (bg-ink, 4 metrics)
5. Client testimonial
6. Prev/Next navigation
7. Final CTA

### 8.5 Process (NEW)

| Attribute | Value |
|-----------|-------|
| **Goal** | Show structured process, build confidence |
| **Intent** | "How do they work? What's the timeline?" |
| **CTA** | Book A Call |

**Structure:**
- Hero with headline
- 5-phase timeline: Strategy → Design → Build → QA → Launch
- Each phase: number, name, timeframe, description, deliverables
- Post-launch section (accent bg) explaining subscription model
- CTA

### 8.6 Pricing

| Attribute | Value |
|-----------|-------|
| **Goal** | Transparent pricing, drive qualified leads |
| **Intent** | "Can I afford this? What do I get?" |
| **CTA** | Book A Call (per tier) |

**Structure:**
- Hero explaining model (investment fee + subscription)
- 3-column comparison table with recommended tier highlighted (accent bg)
- Add-ons row (if applicable)
- FAQ section (asymmetric: heading left, questions right)
- Social proof (1-2 testimonials)
- Final CTA

**Risk reducers near CTA:** "No long-term lock-in", "Cancel after minimum term", "Discovery call is free"

### 8.7 About

| Attribute | Value |
|-----------|-------|
| **Goal** | Build personal credibility and trust |
| **Intent** | "Who is behind this?" |
| **CTA** | Book A Call |

**Structure:**
- Hero with founder intro (7/5 split, portrait right)
- Values/approach (3-column numbered grid)
- Tech stack display (bg-surface)
- Final CTA

### 8.8 Contact

| Attribute | Value |
|-----------|-------|
| **Goal** | Convert visitor to discovery call lead |
| **Intent** | "I want to talk to someone" |
| **CTA** | Submit form |

**Changes:**
- Remove form mode toggle
- Reduce to 4 fields: Name*, Email*, Company, Goals*
- Bottom-border-only inputs (no box border)
- Inline validation (no `alert()`)
- Inline success state

### 8.9 Journal (Blog Rebrand)

| Attribute | Value |
|-----------|-------|
| **Goal** | Thought leadership, SEO, organic traffic |
| **Intent** | "What do they know about web performance/design?" |
| **CTA** | Read → Explore services → Book A Call |

**Structure:**
- Editorial grid layout (2 columns, featured post larger)
- Category filtering
- Each post: date, category label, headline, excerpt
- Positions Chromapages as authority on web performance + conversion

### 8.10 404 Page

**Redesign:** Branded 404 with large "404" in display-xl, helpful message, links to Homepage, Work, and Contact.

---

## 9. Implementation Roadmap

### Phase 1: Foundation (Week 1) — Highest Impact

| Task | Impact | Effort | Files |
|------|--------|--------|-------|
| Systematize CSS tokens (remove indigo-900, neutral-600 references) | High | Low | index.css, all pages |
| Implement typography scale in Tailwind config | High | Low | index.css |
| Replace card hover lift with border transition | Medium | Low | Card.tsx |
| Replace Work page pill filters with text toggles | Medium | Low | Work.tsx |
| Fix Contact form: remove alert(), add inline validation | High | Medium | Contact.tsx |
| Standardize section padding to py-32 | Medium | Low | All pages |

### Phase 2: Layout Refinements (Week 2)

| Task | Impact | Effort | Files |
|------|--------|--------|-------|
| Homepage: replace manifesto with positioning strip | High | Medium | Home.tsx |
| Homepage: tighten to 7 sections | High | Medium | Home.tsx |
| Services: add sticky anchor nav | High | Medium | Services.tsx |
| Services: restructure as editorial long-scroll | High | High | Services.tsx |
| Contact: reduce to 4 fields, bottom-border inputs | Medium | Medium | Contact.tsx |

### Phase 3: New Content & Pages (Week 3)

| Task | Impact | Effort | Files |
|------|--------|--------|-------|
| Create Process page (`/process`) | High | High | New: Process.tsx |
| Redesign Case Study template (hero metrics, narrative) | High | High | CaseStudy.tsx |
| Rename Blog → Journal | Low | Low | App.tsx, Blog.tsx, nav |
| Redesign 404 page | Low | Low | NotFound.tsx |

### Phase 4: Mobile Optimization (Week 4)

| Task | Impact | Effort | Files |
|------|--------|--------|-------|
| Homepage mobile: independent layout (2×2 stats, stacked cards) | High | Medium | Home.tsx |
| Services mobile: horizontal scroll anchor nav | Medium | Medium | Services.tsx |
| Pricing mobile: stacked cards with recommended second | Medium | Medium | Pricing.tsx |
| Full mobile audit: padding, typography scale, touch targets | High | Medium | All |

### Phase 5: Polish (Week 5)

| Task | Impact | Effort | Files |
|------|--------|--------|-------|
| Motion refinement: scroll-driven reveals, remove bounces | Medium | Medium | AnimateIn.tsx |
| Pricing page: FAQ section, risk reducers, comparison table | High | High | Pricing.tsx |
| About page: values grid, tech stack, portrait treatment | Medium | Medium | About.tsx |
| SEO: meta tags, Open Graph, structured data per page | High | Medium | SEO.tsx, all pages |
| Accessibility audit: focus rings, skip-link, contrast | High | Medium | All |

### Quick Win Summary (Do First)

1. **CSS token cleanup** — 30 min, removes inconsistency
2. **Card hover: lift → border** — 10 min, instant refinement
3. **Work filters: pills → text** — 20 min, aligns with system
4. **Contact: alert() → inline** — 1 hr, critical UX fix
5. **Typography scale** — 1 hr, biggest visual improvement

---

## 10. Risks, Gaps & Follow-Up

### 10.1 Risks

| Risk | Severity | Mitigation |
|------|----------|-----------|
| Typography change (PRD says Montserrat/Inter, site uses Sora/DM Sans) | Low | Update PRD. Sora/DM Sans are better Swiss fits. |
| Content quality — current copy has some generic AI language | Medium | Review all headlines against "Clear. Confident. Human." brand voice. Remove "elevate", "seamless", "next-gen". |
| Case study depth — current studies may lack real metrics | High | Prioritize 3-4 case studies with actual measured results. Fake metrics destroy trust. |
| Process page content — new page needs real deliverable descriptions | Medium | Write from actual project workflow. Don't generalize. |
| Mobile performance — motion library (framer-motion) adds bundle weight | Medium | Audit bundle. Consider CSS-only animations where possible. |

### 10.2 Gaps (Not Covered in This Plan)

| Gap | Recommendation |
|-----|---------------|
| **Content writing** | This plan covers structure and direction. Actual headlines and body copy need a dedicated copywriting pass. |
| **Image assets** | Real project screenshots needed. No stock photography. |
| **Sanity CMS integration** | Current site is React + Vite. PRD mentions Sanity. CMS integration is a separate workstream. |
| **Analytics setup** | GA4 tracking exists. Needs event tracking on CTAs, form submissions, and scroll depth. |
| **A/B testing infrastructure** | Not implemented. Recommend after baseline metrics are established. |
| **Next.js migration** | PRD specifies Next.js. Current site is Vite + React Router. Migration is a separate project. |

### 10.3 Follow-Up Recommendations

1. **Copywriting pass** — Hire or dedicate time to rewrite all headlines and body copy using "Clear. Confident. Human." voice. Remove all generic filler.
2. **Real case study data** — Gather actual metrics from past projects. Even 3 strong case studies with real numbers outperform 10 with fake data.
3. **Founder photography** — Professional B&W portrait for About page. Critical for solo studio trust.
4. **CMS evaluation** — Decide whether to keep static content or integrate Sanity now. Blog/Journal content especially benefits from CMS.
5. **Performance baseline** — Run Lighthouse audit before and after redesign. Track LCP, CLS, FID improvements.
6. **Conversion tracking** — Set up GA4 events for: Book A Call clicks, form submissions, case study views, pricing page visits.
7. **Next.js migration roadmap** — Plan the Vite → Next.js migration as a separate project after visual redesign is complete.

### 10.4 PRD Updates Required

| Section | Current | Recommended Update |
|---------|---------|-------------------|
| 10.1 Typography | Montserrat + Inter | Sora + DM Sans |
| Sitemap | No Process page | Add /process route |
| Blog | /blog | Rename to /journal |

---

## Appendix: Implementation Notes for Tailwind v4

The project uses **Tailwind CSS v4** with `@theme` directive in `index.css`. Key implementation details:

**Adding typography tokens:**
```css
@theme {
  --font-size-display-xl: 6rem;
  --font-size-display-lg: 4.5rem;
  --font-size-display-md: 3.5rem;
  --font-size-display-sm: 2.5rem;
  --font-size-stat: 4rem;
}
```

**Adding spacing tokens (already native in Tailwind, but custom if needed):**
```css
@theme {
  --spacing-section: 8rem; /* py-32 equivalent */
  --spacing-section-mobile: 6rem; /* py-24 equivalent */
}
```

**Semantic color tokens are already defined.** Ensure all pages use these tokens:
- `text-ink` not `text-indigo-900`
- `text-muted` not `text-neutral-600`
- `bg-bg` not `bg-off-white`
- `bg-accent` not `bg-teal-600`

**Filter toggles (replacing rounded pills):**
```tsx
<button
  className={cn(
    "pb-2 text-sm font-medium uppercase tracking-widest transition-colors border-b-2",
    isActive
      ? "border-ink text-ink"
      : "border-transparent text-muted hover:text-ink"
  )}
>
  {category}
</button>
```

**Bottom-border form inputs:**
```tsx
<input
  className="w-full border-0 border-b border-border bg-transparent py-3 text-ink placeholder:text-muted focus:border-accent focus:outline-none focus:ring-0"
/>
```

---

**End of Redesign Plan**

Document: REDESIGN-PLAN.md + REDESIGN-PLAN-PT2.md
Total sections: 10
Wireframes: 8 desktop + 4 mobile (independently designed)
Pages covered: 12 (including 1 new)
Implementation phases: 5 weeks
