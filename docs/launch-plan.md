# Launch Plan

## Purpose
This document defines the practical launch sequence for the BuiltExpert marketing website.

`deployment.md` covers infrastructure. This document covers execution.

---

## 1. Launch Objective
Launch the site cleanly with:
- working pages
- working forms
- working analytics
- correct domain behavior
- minimal downtime or confusion
- a clear rollback option

---

## 2. Roles

| Role | Responsibility |
|---|---|
| Owner | final approval, content sign-off, launch go/no-go |
| Builder / Dev | deploy, technical validation, fixes |
| Content Owner | final copy and metadata validation |
| QA Owner | final checklist completion |

For a solo build, one person may hold all roles, but the responsibilities still need to be covered.

---

## 3. Pre-Launch Checklist

### Content
- [ ] homepage copy approved
- [ ] core pages approved
- [ ] audit page approved
- [ ] service content approved
- [ ] proof summaries approved
- [ ] legal page(s) present

### Technical
- [ ] production environment variables set
- [ ] domain connected
- [ ] forms point to live services
- [ ] analytics IDs set
- [ ] scheduler link set

### QA
- [ ] QA checklist completed
- [ ] CTA paths tested
- [ ] contact form tested
- [ ] audit form tested
- [ ] metadata validated

---

## 4. Launch Sequence
1. Final preview review
2. Production deployment
3. Domain validation
4. Conversion path validation
5. Analytics validation
6. Post-launch smoke test

---

## 5. Day-Of Launch Checklist
- [ ] production deploy completed
- [ ] homepage loads
- [ ] Services page loads
- [ ] Audit page loads
- [ ] Contact page loads
- [ ] Book A Call CTA works
- [ ] Contact form works
- [ ] Audit form works
- [ ] analytics receiving data
- [ ] legal page accessible

---

## 6. Post-Launch Monitoring

### First 24 Hours
- monitor form submissions
- monitor booking clicks
- watch for broken links or asset issues
- check if users report issues

### First 7 Days
- review top entry pages
- review CTA click behavior
- validate conversion tracking accuracy
- note confusing content areas
- collect first round of optimization ideas

---

## 7. Rollback Plan
If launch issue is severe:
1. identify impact
2. decide if hotfix or rollback is faster
3. revert to last known good deployment if needed
4. confirm site functionality restored

### Rollback Triggers
- broken homepage
- broken contact form
- broken audit form
- broken nav
- severe mobile failure
- domain/canonical mistakes affecting core business outcomes

---

## 8. Recommendation
Treat launch like a controlled release. The site does not need to be perfect. It does need to be trustworthy, functional, and measurable on day one.
