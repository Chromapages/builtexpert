# Tech Stack

## Purpose
This document defines the recommended technical stack for the BuiltExpert marketing website, including framework choices, supporting libraries, hosting, and the rationale behind each decision.

The goal is to keep the project modern, maintainable, fast, and scalable without introducing unnecessary complexity.

---

## Stack Summary

### Core Application Stack
- **Framework:** Next.js
- **UI Library:** React
- **Language:** TypeScript
- **Styling:** Tailwind CSS

### Content Layer
- **CMS:** Headless CMS recommended if structured content is needed
- **Static Content Option:** Local MD/MDX or JSON/YAML for early-stage builds if CMS is deferred

### Hosting / Deployment
- **Primary Recommendation:** Vercel
- **Alternative:** Hostinger or comparable provider if needed

### Analytics
- **Baseline:** GA4
- **Tag Management:** GTM
- **Optional:** Meta Pixel and ad-platform pixels

### Forms / Lead Capture
- **Option A:** Managed form endpoint
- **Option B:** Custom API route with spam protection and webhook delivery

---

## Core Framework Choices

### Next.js
Best fit because it supports:
- fast page performance
- SEO-friendly rendering
- dynamic service/case-study routes
- API routes when lightweight backend logic is needed
- clean preview deployment workflows

### React
Strong fit for reusable marketing sections and long-term maintainability.

### TypeScript
Needed for safer content models, forms, API handling, and scalability.

### Tailwind CSS
Practical fit for a conversion-focused marketing site with reusable sections and rapid implementation.

---

## Content Layer

### Recommendation: Headless CMS
Use a structured CMS if BuiltExpert needs easy updates for:
- services
- case studies
- FAQs
- testimonials
- audit pages
- trade pages
- blog content

### Recommended CMS Option
**Sanity** is a strong fit because it offers flexible schemas, structured content, and solid Next.js integration.

### If CMS Is Deferred
The site can launch with:
- Markdown / MDX
- JSON
- TypeScript content objects

---

## Hosting And Deployment

### Primary Recommendation: Vercel
Why:
- seamless Git-based deployment
- preview deployments
- good environment variable management
- clean Next.js workflow
- strong default performance

---

## Recommended Libraries

### Core Utilities
- **Zod** — schema validation
- **React Hook Form** — form state management
- **clsx** — conditional class handling
- **date-fns** — date formatting where needed

### CMS / Data Layer
If using Sanity:
- `next-sanity`
- `sanity`
- `groq`

### Quality / Tooling
- **ESLint**
- **Prettier**
- optional **Husky** + lint-staged

---

## Forms And Lead Capture

### Recommendation
Start simple, but use an architecture that can later support:
- webhook forwarding
- email notifications
- CRM integration
- analytics consistency

---

## SEO And Metadata
The stack should support:
- page-level metadata
- open graph data
- canonical tags
- robots directives
- sitemap generation
- schema markup

---

## Final Recommendation

### Best-Fit Stack For Launch
- Next.js
- React
- TypeScript
- Tailwind CSS
- Sanity if structured editing is needed immediately
- Vercel
- GA4 + GTM
- React Hook Form + Zod
- simple booking integration

### Philosophy
Use the simplest modern stack that:
- launches fast
- stays maintainable
- supports future content growth
- does not trap the project in unnecessary custom infrastructure
