# API Spec

## Purpose
This document defines the expected API surface for the BuiltExpert marketing website.

Because this is a marketing site, the API layer should stay intentionally small. The API should only support what the site actually needs: lead capture, optional booking tracking, preview helpers, and lightweight integrations.

---

## API Philosophy
- keep the surface area small
- do not invent a large backend
- use APIs only where they create real value

## Base Path
```txt
/api
```

## Endpoint Summary

| Endpoint | Method | Purpose | Auth |
|---|---|---|---|
| `/api/contact` | POST | Submit contact form | Public |
| `/api/audit-request` | POST | Submit audit inquiry form | Public |
| `/api/booking-event` | POST | Optional booking completion relay | Public or signed |
| `/api/preview/enable` | GET or POST | Enable CMS preview mode | Protected |
| `/api/preview/disable` | GET or POST | Disable CMS preview mode | Protected |
| `/api/health` | GET | Basic health check | Public |
| `/api/webhooks/cms-revalidate` | POST | Revalidate pages after CMS changes | Signed webhook |

## Contact Form Request Example
```json
{
  "name": "Mike Davis",
  "email": "mike@example.com",
  "company": "Davis HVAC",
  "website": "https://davishvac.com",
  "trade": "HVAC",
  "projectType": "Contractor Website",
  "budgetRange": "$5k-$10k",
  "timeline": "Within 30 days",
  "message": "We need a stronger lead generation website."
}
```

## Audit Request Request Example
```json
{
  "name": "Sarah Lee",
  "email": "sarah@example.com",
  "company": "Lee Roofing",
  "website": "https://leeroofing.com",
  "trade": "Roofing",
  "message": "Interested in a lead system audit."
}
```

## Standard Response Shape

### Success
```json
{
  "success": true,
  "message": "Inquiry received successfully."
}
```

### Error
```json
{
  "success": false,
  "message": "Invalid form submission.",
  "errors": {}
}
```

## Final Recommendation
For launch, the endpoints most likely required are:
- `POST /api/contact`
- `POST /api/audit-request`
