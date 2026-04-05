# CMS Schema Map

## Purpose
This document translates the high-level data models into practical CMS implementation guidance for a system like Sanity.

---

## Recommended Document Types

### Global Documents
- `siteSettings`
- `navigation`
- `footer`
- `seoDefaults`

### Content Documents
- `page`
- `service`
- `auditOffer`
- `caseStudy`
- `faqItem`
- `testimonial`
- `ctaBlock`

### Future Documents
- `tradePage`
- `blogPost`
- `landingPage`

---

## `siteSettings`
Suggested fields:
- `siteName`
- `siteUrl`
- `tagline`
- `defaultTitle`
- `defaultDescription`
- `defaultOgImage`
- `contactEmail`
- `bookingUrl`
- `phone`
- `socialLinks`

---

## `page`
Suggested fields:
- `title`
- `slug`
- `pageType`
- `seoTitle`
- `seoDescription`
- `hero`
- `sections`
- `published`

Recommended `pageType` values:
- `home`
- `about`
- `process`
- `pricing`
- `contact`
- `thank-you`
- `privacy-policy`
- `faq`

---

## `service`
Suggested fields:
- `title`
- `slug`
- `summary`
- `promise`
- `audienceFit`
- `outcomes`
- `includedItems`
- `faqRefs`
- `featuredCaseStudyRefs`
- `seoTitle`
- `seoDescription`
- `published`

Slug base:
`/services/[slug]`

---

## `auditOffer`
Suggested fields:
- `title`
- `slug`
- `summary`
- `whatItIncludes`
- `whoItsFor`
- `deliverable`
- `faqRefs`
- `seoTitle`
- `seoDescription`
- `published`

Slug base:
`/offers/[slug]` or `/audit` for main offer page

---

## `caseStudy`
Suggested fields:
- `title`
- `slug`
- `clientName`
- `trade`
- `serviceTypes`
- `summary`
- `problem`
- `approach`
- `build`
- `results`
- `featuredImage`
- `resultMetrics`
- `testimonialRef`
- `published`

Slug base:
`/work/[slug]`

---

## `faqItem`
Suggested fields:
- `question`
- `answer`
- `category`
- `published`

Suggested categories:
- `services`
- `pricing`
- `audit`
- `process`
- `contact`
- `general`

---

## `testimonial`
Suggested fields:
- `name`
- `role`
- `company`
- `quote`
- `relatedService`
- `published`

---

## Recommendation
For launch, implement only:
- siteSettings
- navigation
- footer
- page
- service
- auditOffer
- caseStudy
- faqItem
- testimonial
- ctaBlock
