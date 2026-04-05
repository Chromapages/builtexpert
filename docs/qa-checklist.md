# QA Checklist

## Purpose
This document is the pre-launch and post-update QA checklist for the BuiltExpert marketing website.

The goal is to catch functional, content, SEO, analytics, and accessibility issues before they go live.

---

## 1. Global Functional Checks
- [ ] site loads without major console/runtime errors
- [ ] primary navigation works
- [ ] footer links work
- [ ] internal links resolve correctly
- [ ] external links open correctly
- [ ] no obvious broken components
- [ ] thank-you flow works

---

## 2. Responsive Checks
- [ ] homepage works on mobile
- [ ] homepage works on tablet
- [ ] homepage works on desktop
- [ ] forms are usable on mobile
- [ ] no content clipping or overlap
- [ ] no unexpected horizontal scrolling

---

## 3. Core Pages
- [ ] Home
- [ ] Services
- [ ] Audit
- [ ] Work
- [ ] Process
- [ ] Pricing
- [ ] About
- [ ] Contact
- [ ] Thank You
- [ ] Privacy Policy

For each:
- [ ] H1 is correct
- [ ] CTA is present and logical
- [ ] copy is final or approved placeholder
- [ ] no obvious typos
- [ ] metadata exists

---

## 4. Form Checks
- [ ] required fields validate
- [ ] invalid email is caught
- [ ] success state works
- [ ] error state works
- [ ] spam protection is active
- [ ] form_submit fires only on success
- [ ] audit_submit fires only on success
- [ ] notification delivery works

---

## 5. Booking Flow Checks
- [ ] booking CTA links to correct destination
- [ ] booking link works from key pages
- [ ] booking_click tracking fires
- [ ] booking_complete tracking works if supported

---

## 6. SEO Checks
- [ ] title tag exists on each important page
- [ ] meta description exists on each important page
- [ ] canonical URL is correct
- [ ] heading hierarchy is logical
- [ ] schema markup is present where intended
- [ ] thank-you page noindex checked if intended

---

## 7. Analytics Checks
- [ ] GA4 installed
- [ ] GTM installed
- [ ] CTA clicks tracked
- [ ] form_start tracked
- [ ] form_submit tracked
- [ ] audit_submit tracked
- [ ] booking_click tracked

---

## 8. Accessibility Checks
- [ ] skip link works
- [ ] navigation is keyboard accessible
- [ ] focus states are visible
- [ ] heading order is logical
- [ ] form labels are programmatically associated
- [ ] no obvious keyboard traps

---

## 9. Browser / Device Checks
Test at minimum in:
- [ ] Chrome
- [ ] Safari
- [ ] Firefox

If available, also verify:
- [ ] iPhone Safari
- [ ] Android Chrome

---

## 10. Launch Blockers
- broken contact or audit form
- broken booking CTA
- missing primary page content
- obvious mobile breakage
- analytics not firing on primary conversions
- legal/privacy page missing if required for public launch
