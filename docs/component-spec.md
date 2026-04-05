# Component Spec

## Purpose
This document defines the functional behavior and content requirements of reusable components for the BuiltExpert marketing website.

This is not a visual design doc. It defines what each component does, what content it accepts, how it behaves, and what implementation rules apply.

---

## 1. Global Principles
- components should be reusable
- each component should have a clear purpose
- content inputs should be predictable
- accessibility requirements apply to every interactive component
- components should support content changes without code rewrites

---

## 2. Header
### Required Elements
- logo
- primary nav items
- primary CTA
- mobile menu toggle

### Behavior
- visible on all core pages
- sticky on scroll
- current page state identifiable
- mobile menu opens/closes predictably

---

## 3. Footer
### Required Elements
- logo or short brand label
- footer nav groups
- legal links
- contact details if available

---

## 4. Hero
### Required
- headline
- supporting subheadline
- primary CTA

### Optional
- secondary CTA
- proof strip
- contractor pain/value callout

---

## 5. CTA Block
### Required
- headline
- primary CTA

### Optional
- support text
- secondary CTA

---

## 6. Service Card
### Required
- service title
- short summary
- CTA link

### Optional
- outcome bullets
- service category

---

## 7. Project Card
### Required
- project title
- short summary
- link to work page or case study

### Optional
- trade label
- result snippet

---

## 8. Audit Offer Block
### Required
- audit title
- short summary
- CTA

### Optional
- what’s included bullets
- fit note

---

## 9. FAQ Accordion
- trigger must be a button
- state should be accessible
- behavior should remain consistent

---

## 10. Process Steps Block
- support fixed sequence
- easy to reorder if process changes

---

## 11. Pricing / Offer Block
### Required
- offer name
- summary
- CTA

### Optional
- fit explanation
- key inclusions
- price range or investment framing

---

## 12. Contact / Audit Form
### Required
- validation
- error states
- success state or redirect
- analytics tracking
- spam protection
- future webhook/CRM support

---

## Recommendation
Build the site from a small set of well-defined blocks:
- Header
- Footer
- Hero
- CTA Block
- Service Card
- Project Card
- Audit Offer Block
- FAQ Accordion
- Process Steps Block
- Pricing Block
- Contact Form
