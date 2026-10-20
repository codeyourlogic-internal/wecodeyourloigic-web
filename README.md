# CodeYourLogic

Official marketing website for **CodeYourLogic Pvt Ltd** (brand: **CodeYourLogic**) — a software engineering company specializing in custom web, mobile, desktop, cloud & DevOps, AI, and blockchain solutions. HQ at 4th floor Qno3/2-3, Opposite Durian Furniture, Adityapur Main Road, Akashwani, 831013; remote-first delivery worldwide.

**Live site:** [https://codeyourlogic.com](https://codeyourlogic.com)

---

## Stack

| Layer | Technology |
| --- | --- |
| Framework | Next.js 15 (App Router) |
| UI | React 19, Tailwind CSS 4, Framer Motion |
| i18n | i18next + react-i18next (en, hi, de, fr, es) |
| Theme | next-themes (dark mode default) |
| Forms | Web3Forms (free tier — JSON submit) |
| Hosting | Netlify (OpenNext SSR adapter) |

---

## Prerequisites

- **Node.js** 20+ (Netlify builds use Node 22)
- **npm** 10+

---

## Getting started

```bash
# Install dependencies
npm install

# Create local env file
cp .env.example .env   # or create .env manually — see Environment below

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Development server with HMR |
| `npm run build` | Production build |
| `npm run start` | Serve the production build locally |
| `npm run lint` | Run ESLint |

---

## Environment

Create a `.env` file in the project root:

```env
NEXT_PUBLIC_FORM_ACCESS_KEY=your-web3forms-access-key
```

| Variable | Required | Description |
| --- | --- | --- |
| `NEXT_PUBLIC_FORM_ACCESS_KEY` | Yes (for forms) | [Web3Forms](https://web3forms.com) access key. Submissions are emailed to the address used when the key was created. |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | No | Google Search Console verification token |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | No | GA4 ID when not loading GA via GTM |
| `NEXT_PUBLIC_GTM_ID` | No | Google Tag Manager container ID |
| `NEXT_PUBLIC_META_PIXEL_ID` | No | Meta Pixel (loaded after marketing consent) |

**Notes**

- Restart `npm run dev` after changing any `NEXT_PUBLIC_*` variable.
- On Netlify, set the same variables under **Site settings → Environment variables**.
- Web3Forms free tier delivers to **email** (not a dashboard). File attachments require Pro — careers uses LinkedIn / resume URL instead.

---

## Project structure

```
src/
  app/                 # App Router pages (/, /services, /careers, /contact, /privacy, /terms, …)
  components/          # UI, layout, home sections, forms
  data/site.ts         # Company info, nav, services, contact details
  lib/                 # i18n, SEO, contact/Web3Forms, validation
  hooks/
  types/
public/
  locales/{en,hi,de,fr,es}/common.json
  light/ dark/         # Theme-aware icons
netlify.toml           # Netlify build + redirects + headers
```

### Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/services`, `/services/[slug]` | Services |
| `/technologies` | Technology approach |
| `/careers` | Careers / applications |
| `/contact` | Contact |
| `/privacy`, `/terms` | Legal |
| `/sitemap.xml`, `/robots.txt` | SEO — all crawlers allowed (incl. AI bots) |
| `/llms.txt`, `/llms-full.txt` | AI agent context (site map + full summary) |

Language is selected in the UI and stored in `localStorage` (`wecyl-locale`). Legacy locale URL prefixes (`/en/...`, `/hi/...`, etc.) **301** to unprefixed paths.

---

## Deployment (Netlify)

1. Connect the Git repository in the Netlify dashboard.
2. Build settings are defined in `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next` (required so the Next.js plugin does not treat the repo root as publish)
   - **Node:** 22
3. In the Netlify UI, leave Base/Package empty. If Publish directory is set in the UI, use `.next` (not blank and not `/`).
4. Add environment variables (especially `NEXT_PUBLIC_FORM_ACCESS_KEY`).
5. Deploy.

Do **not** pin `@netlify/plugin-nextjs` unless you intentionally want to freeze the adapter version — Netlify auto-updates it.

---

## Brand & content

Site copy, contact details, and services live in:

- `src/data/site.ts` — structured data (email, phones, social, services)
- `public/locales/*/common.json` — UI strings and SEO metadata per language

---

## License & copyright

Copyright © 2026 CodeYourLogic Pvt Ltd. All rights reserved.

This repository and its contents are proprietary. Unauthorized copying, modification, distribution, or use of this software or its source code, in whole or in part, is strictly prohibited without prior written permission from CodeYourLogic Pvt Ltd.

For business inquiries: [contact@codeyourlogic.com](mailto:contact@codeyourlogic.com)
