# Deployment

## Purpose
This document defines the deployment approach for the BuiltExpert marketing website.

## Recommended Hosting
**Vercel**

## Recommended CI/CD Flow
1. feature branch
2. local build/test
3. push branch
4. preview deployment
5. review
6. merge to `main`
7. production deploy
8. post-deploy QA

## Environment Variables
```env
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_GTM_ID=
NEXT_PUBLIC_META_PIXEL_ID=
BOOKING_URL=
CMS_PROJECT_ID=
CMS_DATASET=
CMS_API_TOKEN=
CMS_PREVIEW_SECRET=
REVALIDATE_SECRET=
FORM_WEBHOOK_URL=
FORM_NOTIFICATION_EMAIL=
```

## Domain Setup
Recommended:
- primary domain: `builtexpert.com` or final production domain
- choose canonical host: apex or `www`
- redirect all alternatives consistently

## Post-Deployment Smoke Test
- homepage loads
- key pages render
- forms work
- booking link works
- metadata is present
- analytics events fire
- canonical URLs are correct

## Recommendation
Use a simple GitHub -> Vercel deployment flow with preview deployments, environment-based config, and a short post-release smoke test.
