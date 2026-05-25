# Sri Panchamukha Hanuman Devalayam Website

Static-first Next.js website implementation based on the approved Paper.design screens and the structural scope in `requriments.md`.

## Routes

- `/` - homepage and today's visit links
- `/about` - temple introduction and deity placements
- `/timeline` - recent temple milestone track
- `/darshan-pooja` - darshan and pooja schedules
- `/events` - upcoming festivals and programmes
- `/gallery` - tabbed gallery with lightbox interaction
- `/donate` - official donation-information layout

## Run Locally

```bash
npm install
npm run dev
```

## Verify

```bash
npm run lint
npm run typecheck
npm run build
npm audit --audit-level=moderate
```

## Content Dependencies

The current build deliberately uses placeholders for deity/gallery media, official bank credentials, UPI QR code, map details, and tax-exemption wording. Replace them only with officially approved temple content before deployment.

Donation is informational only. No payment processing or credential storage has been implemented.
