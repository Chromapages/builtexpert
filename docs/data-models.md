# Data Models

## Purpose
This document defines the content schemas and data structures needed for the BuiltExpert marketing website.

The focus is on content models, not a large application database. This is a marketing site, so the primary data layer should support:
- structured page content
- reusable service, audit, and case study entries
- testimonials and FAQs
- optional lead capture storage if needed

---

## Recommended Content Types

### Global Types
- Site Settings
- Navigation
- Footer
- SEO Defaults
- CTA Block

### Core Content Types
- Page
- Service
- Audit Offer
- Case Study
- FAQ Item
- Testimonial

### Future Content Types
- Trade Page
- Blog Post
- Landing Page
- Resource / Lead Magnet

### Optional Operational Types
- Lead Submission
- Form Configuration

---

# 1. Site Settings

| Field | Type | Required | Notes |
|---|---|---:|---|
| `siteName` | string | Yes | Example: BuiltExpert |
| `siteUrl` | string | Yes | Canonical base URL |
| `tagline` | string | No | Brand tagline |
| `defaultTitle` | string | Yes | SEO fallback |
| `defaultDescription` | string | Yes | SEO fallback |
| `defaultOgImage` | image/url | No | Default social image |
| `contactEmail` | string | No | Public contact email |
| `bookingUrl` | string | No | Scheduler link |
| `phone` | string | No | Optional |
| `socialLinks` | array | No | Social profiles |

---

# 2. Page

| Field | Type | Required | Notes |
|---|---|---:|---|
| `title` | string | Yes | Internal/content title |
| `slug` | string | Yes | URL slug |
| `pageType` | string | Yes | Example: `home`, `about`, `pricing` |
| `seoTitle` | string | No | Optional override |
| `seoDescription` | string | No | Optional override |
| `hero` | object | No | Structured hero content |
| `sections` | array | No | Modular page sections |
| `published` | boolean | Yes | Publish state |

---

# 3. Service

| Field | Type | Required | Notes |
|---|---|---:|---|
| `title` | string | Yes | Service name |
| `slug` | string | Yes | URL slug |
| `summary` | string | Yes | Short summary |
| `promise` | string | No | One-line promise |
| `audienceFit` | array[string] | No | Who it is for |
| `outcomes` | array[string] | No | Benefits/outcomes |
| `includedItems` | array[string] | No | Scope summary |
| `faqRefs` | references | No | Related FAQs |
| `featuredCaseStudyRefs` | references | No | Related proof |
| `seoTitle` | string | No | SEO override |
| `seoDescription` | string | No | SEO override |
| `published` | boolean | Yes | Publish state |

---

# 4. Audit Offer

| Field | Type | Required | Notes |
|---|---|---:|---|
| `title` | string | Yes | Offer title |
| `slug` | string | Yes | URL slug |
| `summary` | string | Yes | Short summary |
| `whatItIncludes` | array[string] | No | Audit inclusions |
| `whoItsFor` | array[string] | No | Audience fit |
| `deliverable` | string | No | What user gets |
| `faqRefs` | references | No | Related FAQs |
| `seoTitle` | string | No | SEO override |
| `seoDescription` | string | No | SEO override |
| `published` | boolean | Yes | Publish state |

---

# 5. Case Study

| Field | Type | Required | Notes |
|---|---|---:|---|
| `title` | string | Yes | Project title |
| `slug` | string | Yes | URL slug |
| `clientName` | string | No | Optional public client name |
| `trade` | string | No | Trade/category |
| `serviceTypes` | array[string] | No | Related service tags |
| `summary` | string | Yes | Short overview |
| `problem` | rich text/string | No | Problem statement |
| `approach` | rich text/string | No | Strategic approach |
| `build` | rich text/string | No | Execution summary |
| `results` | rich text/string | No | Outcomes |
| `featuredImage` | image/url | No | Card/hero image |
| `resultMetrics` | array[object] | No | Quant or qual results |
| `testimonialRef` | reference | No | Linked testimonial |
| `published` | boolean | Yes | Publish state |

---

# 6. FAQ Item

| Field | Type | Required | Notes |
|---|---|---:|---|
| `question` | string | Yes | FAQ question |
| `answer` | rich text/string | Yes | FAQ answer |
| `category` | string | No | Example: `pricing`, `audit`, `services` |
| `published` | boolean | Yes | Publish state |

---

# 7. Testimonial

| Field | Type | Required | Notes |
|---|---|---:|---|
| `name` | string | Yes | Person name |
| `role` | string | No | Job title |
| `company` | string | No | Company name |
| `quote` | text | Yes | Testimonial content |
| `relatedService` | reference | No | Optional service link |
| `published` | boolean | Yes | Publish state |

---

# 8. Trade Page (Future)

| Field | Type | Required | Notes |
|---|---|---:|---|
| `title` | string | Yes | Example: HVAC Marketing |
| `slug` | string | Yes | URL slug |
| `summary` | string | Yes | Short overview |
| `painPoints` | array[string] | No | Trade-specific pain points |
| `servicesOffered` | references | No | Related service refs |
| `faqRefs` | references | No | Related FAQs |
| `seoTitle` | string | No | SEO override |
| `seoDescription` | string | No | SEO override |
| `published` | boolean | Yes | Publish state |

---

# 9. Lead Submission (Optional)

| Field | Type | Required | Notes |
|---|---|---:|---|
| `name` | string | Yes | Lead name |
| `email` | string | Yes | Lead email |
| `company` | string | No | Company |
| `website` | string | No | Existing site |
| `trade` | string | No | Trade type |
| `projectType` | string | Yes | Requested service |
| `budgetRange` | string | No | Qualification data |
| `timeline` | string | No | Qualification data |
| `message` | text | Yes | Inquiry details |
| `source` | string | No | Attribution source |
| `createdAt` | datetime | Yes | Submission timestamp |
| `status` | string | No | Optional lead status |

---

## Final Recommendation
For launch, the minimum useful models are:
- Site Settings
- Navigation
- Footer
- Page
- Service
- Audit Offer
- Case Study
- FAQ Item
- Testimonial
- CTA Block
