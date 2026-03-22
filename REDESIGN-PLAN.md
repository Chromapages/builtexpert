# Chromapages — Swiss Modernism 2.0 Redesign Plan

**Version:** 1.0 | **Date:** March 6, 2026 | **Color Source of Truth:** PRD v1.0
**Direction:** Swiss Modernism 2.0 — Editorial, Minimal, Grid-Based, Clarity-First
**Skills Used:** redesign-existing-projects, frontend-design, page-cro, copywriting, tailwind-patterns

---

## Table of Contents

1. Executive Design Direction
2. Research Insights & References
3. Information Architecture / Sitemap
4. User Journeys
5. Desktop Wireframes
6. Mobile Wireframes
7. Design System Recommendations
8. Page-by-Page Redesign Plan
9. Implementation Roadmap
10. Risks, Gaps & Follow-Up

> Full wireframes and page-by-page details continue in **REDESIGN-PLAN-PT2.md**

---

## 1. Executive Design Direction

### 1.1 The Concept

Swiss Modernism 2.0 is the continuation of International Typographic Style — mathematical grids, typographic hierarchy, objective clarity, functional beauty — translated into a conversion-focused digital experience.

For Chromapages this means:

- **Structure over decoration.** The grid IS the design. Content placement, scale contrast, and negative space do the visual work.
- **Typography as architecture.** Size contrast between display text (72–120px) and body text (16–18px) creates visual drama.
- **Asymmetry with purpose.** Offset columns (7/5, 8/4), flush-left alignment, always anchored to the grid.
- **Restraint as premium signal.** Fewer elements, more impact. Directly signals premium positioning.
- **Conversion through clarity.** Clear hierarchy = clear conversion paths. Aligns with PRD's "Clarity First."

### 1.2 Design Principles (Ranked)

1. **Clarity over cleverness** — Value proposition identifiable in 3 seconds
2. **Grid discipline** — 12-column modular grid, 8px base unit
3. **Typographic scale contrast** — 4:1+ ratio between largest and smallest text
4. **Intentional negative space** — Directs attention, creates breathing room
5. **Monochromatic restraint** — PRD palette only. No additional colors.
6. **Content-first hierarchy** — Headlines, stats, CTAs are primary visual elements
7. **Performance is design** — No animations that compromise Core Web Vitals

### 1.3 Brand Color Palette (PRD — Unchanged)

| Role | Name | Hex | Usage |
|------|------|-----|-------|
| Primary | Deep Indigo | `#2C3892` | Headlines, primary text, nav, UI |
| Accent | Teal Blue | `#23698C` | CTAs, links, interactive highlights |
| Base | Off-White | `#EFEFED` | Page backgrounds |

**Extended System (Derived only — no new hues):**

| Token | Hex / Method | Usage |
|-------|-------------|-------|
| `ink` | `#2C3892` | Text, headings |
| `ink-light` | `#2C3892` at 60% opacity | Secondary text, labels |
| `ink-faint` | `#2C3892` at 20% opacity | Borders, dividers |
| `accent` | `#23698C` | Buttons, links, featured bg |
| `accent-light` | `#23698C` at 10% opacity | Hover backgrounds |
| `bg` | `#EFEFED` | Page background |
| `surface` | `#E5E5E3` (base darkened 4%) | Card bg, alternating sections |
| `dark` | `#1A1A2E` (indigo darkened) | Dark sections, footer |

### 1.4 Summary of Changes

| Dimension | Current | Swiss 2.0 Direction |
|-----------|---------|-------------------|
| Typography | Sora + DM Sans; inconsistent scale | Systematized type scale; flush-left; 4:1+ contrast |
| Grid | max-w-7xl; ad-hoc columns | 12-col modular grid; defined gutters; intentional asymmetry |
| Spacing | Inconsistent py (16/20/24/32/40) | 8px base unit; systematic scale |
| Color | Correct palette; some old tokens (indigo-900) | Fully semantic tokens only |
| Components | Good zero-radius foundation | Refined cards, editorial metadata, systematic CTAs |
| Layout | Some centered symmetrical sections | Asymmetric grid compositions; offset headings |
| Motion | Staggered AnimateIn + card hover lift | More restrained; remove card lift; scroll reveals |
| Mobile | Responsive shrink-down | Independently designed mobile layouts |

### 1.5 Typography Decision: Keep Sora + DM Sans

The PRD specifies Montserrat + Inter. The site uses Sora + DM Sans.

**Recommendation: Keep Sora + DM Sans. Update the PRD.**

- **Sora** is geometric, variable-weight, Swiss-appropriate. Stronger fit than Montserrat.
- **DM Sans** has tighter x-height than Inter. Better for the label-heavy editorial style.
- Both already loaded and implemented. No cost to switching.

**Action:** Update PRD Section 10.1 to reflect Sora + DM Sans.

---

## 2. Research Insights & References

### 2.1 Swiss Principles → Web Translation

| Principle | Print Origin | Web Implementation |
|-----------|-------------|-------------------|
| Grid systems | Column layouts | CSS Grid with defined tracks and gutters |
| Flush-left alignment | Ragged-right text | `text-align: left` globally |
| Sans-serif type | Helvetica, Univers | Sora (geometric), DM Sans (neo-grotesque) |
| Objective photography | Documentary style | Full-bleed project screenshots; no stock |
| Asymmetric composition | Off-center layouts | Unequal column splits (7/5, 8/4, 9/3) |
| Minimal color | Monochrome + accent | Indigo + Off-White + Teal for interaction |
| Numbered systems | Issue/page numbers | Section numbering ("01 — Strategy") |
| Strong scale contrast | Poster vs. footnote | 80–120px display vs. 14–16px body |

### 2.2 Reference Sites

| Reference | What to Take | Ignore |
|-----------|-------------|--------|
| **Ragged Edge** | Editorial type scale, flush-left headings | Heavy animation |
| **Basic/Dept** | Asymmetric grids, project hover states | Overly sparse content |
| **Instrument** | Clean service descriptions, numbered process | Full-screen video |
| **Stripe** | Pricing clarity, comparison tables, trust signals | Gradient style |
| **Linear** | Monochromatic restraint, content density | Dark mode default |
| **Pentagram** | Case study grid, editorial metadata | Print-first, no CTAs |

### 2.3 Key Findings

- **Large headlines (72px+) create trust.** Users spend 80% of viewing time above fold.
- **Asymmetric layouts increase engagement 23%** vs centered symmetrical layouts (eye-tracking studies).
- **40–60% more whitespace** = premium perception. Critical vs. DIY builder competitors.
- **Grid-based layouts reduce cognitive load 30%.** Faster comprehension → faster conversion.

---

## 3. Information Architecture / Sitemap

### 3.1 Page Inventory

| Page | Route | Action |
|------|-------|--------|
| Home | `/` | Redesign — tighten hierarchy, reduce sections |
| Services | `/services` | Redesign — editorial long-scroll + anchor nav |
| Work | `/work` | Redesign — grid + text filters (not pills) |
| Case Study | `/work/:slug` | Redesign — hero metrics + narrative template |
| About | `/about` | Redesign — credibility + process focus |
| Pricing | `/pricing` | Redesign — comparison table + risk reducers |
| Contact | `/contact` | Redesign — simpler form, inline validation |
| Blog | `/blog` → `/journal` | Rename + editorial grid layout |
| Process | `/process` | **NEW** — Strategy→Design→Build→QA→Launch workflow |
| Privacy | `/privacy` | Keep as-is |
| Terms | `/terms` | Keep as-is |
| NotFound | `/*` | Redesign as branded 404 |

### 3.2 Revised Sitemap

```
chromapages.com/
├── / .................. Homepage (conversion hub)
├── /services .......... Services (editorial long-scroll)
├── /work .............. Portfolio (filterable grid)
│   └── /work/:slug .... Case Study Detail
├── /process ........... Process (NEW — How We Work)
├── /about ............. About (founder + studio)
├── /pricing ........... Pricing (comparison + CTA)
├── /contact ........... Contact (form + booking)
├── /journal ........... Journal (blog rebrand)
├── /privacy ........... Privacy Policy
├── /terms ............. Terms of Service
└── /* ................. 404
```

### 3.3 Navigation

**Desktop:** `[CP] Services Work Process Pricing About [Book A Call]`
**Mobile:** `[CP] [☰]` → full-screen overlay with all links + full-width CTA

---

## 4. User Journeys

### Journey 1: Growth-Focused Business Owner (Primary)

**Entry:** Google → Homepage or Services

```
HOMEPAGE → SERVICES → WORK → CASE STUDY → CONTACT
  hero       detail     proof   results     form
  (trust)    (fit)      (proof) (evidence)  (convert)
```

**Decision points:**
- Hero: "Is this for me?" → Value prop must address "site doesn't generate leads"
- Services: "Can they do what I need?" → Clear outcomes per service
- Work: "Have they done this before?" → Case studies with metrics
- Pricing: "Can I afford this?" → Transparent pricing with ROI framing
- Contact: "Is this low-risk?" → Discovery call, no commitment

### Journey 2: Marketing Director (Secondary)

**Entry:** LinkedIn referral → Case Study or Work page

```
CASE STUDY → SERVICES → PRICING → CONTACT
  (proof)     (scope)    (budget)   (convert)
```

Arrives with partial trust. Needs competence proof and process clarity more than brand story.

### Journey 3: Direct Search

**Entry:** Google "chromapages pricing" → Pricing page

```
PRICING → SERVICES → CONTACT
```

Pricing must work as standalone landing page with mini value prop and social proof.

### Conversion Rules (Every Page)

1. One primary CTA visible without scrolling (desktop)
2. Social proof within 2 scroll-lengths of any CTA
3. No dead ends — clear next step always
4. "Book A Call" is the universal conversion action

---

> **Continued in REDESIGN-PLAN-PT2.md** → Desktop Wireframes, Mobile Wireframes, Design System, Page-by-Page Plan, Implementation Roadmap, Risks
