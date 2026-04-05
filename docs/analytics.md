# Analytics

## Purpose
This document defines the analytics strategy for the BuiltExpert marketing website, including GA4/GTM event tracking and conversion goals.

## Recommended Stack
- GA4
- GTM
- optional Meta Pixel

## Primary Conversions
- discovery call booking
- contact form submission
- audit inquiry submission

## Secondary Conversions
- CTA clicks
- pricing page views
- service page views
- audit page views
- booking clicks
- phone clicks

## Event Tracking Plan

| Event Name | Trigger | Priority |
|---|---|---:|
| `view_page` | page view | High |
| `click_cta` | CTA click | High |
| `view_service` | service page view | Medium |
| `view_case_study` | case study page view | Medium |
| `view_pricing` | pricing page view | High |
| `view_audit` | audit page view | High |
| `form_start` | form interaction starts | High |
| `form_submit` | contact form success | High |
| `audit_submit` | audit form success | High |
| `booking_click` | booking CTA click | High |
| `booking_complete` | booking confirmation | High |
| `phone_click` | tel click | Medium |

## Conversion Marking
Mark these as conversions in GA4:
- `form_submit`
- `audit_submit`
- `booking_complete`

Optional:
- `booking_click`
- `phone_click`

## Recommendation
For launch, track:
- CTA clicks
- form starts
- form submissions
- audit submissions
- booking clicks
- booking completion if possible
