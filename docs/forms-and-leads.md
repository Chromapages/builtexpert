# Forms And Leads

## Purpose
This document defines how forms, lead routing, notifications, spam protection, and post-submission handling should work for the BuiltExpert marketing website.

This is the operational spec for lead capture.

---

## 1. Lead Capture Goals
The form system should:
- make it easy for qualified contractors to reach out
- collect enough data to qualify inquiries
- avoid unnecessary friction
- prevent spam and junk submissions
- route submissions reliably
- support analytics and future CRM integration

---

## 2. Primary Lead Capture Paths
1. Contact form submission
2. Audit inquiry form
3. Booking link / scheduler
4. Optional phone click

---

## 3. Contact Form Spec

### Required Fields
- Name
- Email
- Project Type
- Message

### Optional Qualification Fields
- Company
- Website
- Trade
- Budget Range
- Timeline

---

## 4. Audit Form Spec

### Required Fields
- Name
- Email
- Company
- Website
- Message

### Optional Fields
- Trade
- Biggest Lead Problem
- Budget Range

---

## 5. Project Type Options
- Contractor Website
- Landing Page
- Local SEO
- Lead System Audit
- Ongoing Growth Support
- Not Sure Yet

---

## 6. Timeline Options
- ASAP
- Within 30 Days
- 1–3 Months
- 3+ Months
- Just Exploring

---

## 7. Lead Routing

### Primary Destination
- owner email notification and/or workflow inbox

### Optional Secondary Destinations
- webhook automation
- CRM intake
- spreadsheet/log

Recommendation:
1. notification email
2. optional webhook logging

---

## 8. Spam Protection
At minimum, implement:
- honeypot
- server-side validation

Recommended if needed:
- rate limiting
- lightweight bot checks
- CAPTCHA only if spam volume demands it

---

## 9. Thank-You Behavior
Required success content:
- confirmation
- what happens next
- optional booking prompt
- optional link back to Work or Home

---

## Recommendation
For launch, the lead capture system only needs to be:
- clear
- low-friction
- spam-resistant
- reliable
- measurable
