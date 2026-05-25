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

To preview the exported site after a build:

```bash
npm run build
npm start
```

## GitHub Pages Deployment

The website is configured as a static Next.js export for GitHub Pages. Builds deployed from this repository are published under:

`https://ravikiranburugu.github.io/sri-panchamukhi-hanuman-temple/`

One-time repository setup:

1. Open **Settings > Pages** in GitHub.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Push the deployment configuration to `main`.

The workflow in `.github/workflows/deploy-pages.yml` builds the static `out/` artifact with the GitHub Pages base path and deploys it on each push to `main`.

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
