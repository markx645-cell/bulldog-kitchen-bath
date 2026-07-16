# Bulldog Kitchen & Bath

Kitchen and bath remodeling site for Greater Cincinnati & Northern Kentucky.
Next.js 15 static export — same architecture as the Bulldog Windows and
Cincy Degree of Comfort builds.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000 (picks next free port)
```

## Build

```bash
npm run build    # static export to /out
npx serve out    # preview the production build
```

## Deploy

Pushes to `main` deploy automatically to Vercel (project `bulldog-kitchen-bath`,
scope `mark2026x`). Live at https://bulldog-kitchen-bath.vercel.app

Manual deploy:

```bash
npx vercel deploy --prod --scope mark2026x
```

## Structure

| Path | What's in it |
| --- | --- |
| `content/` | Single source of truth — business facts, services, locations, reviews, projects |
| `components/` | Shared UI (Header, Footer, ServicePage template, QuoteForm, etc.) |
| `app/` | Routes. 8 service pages, 30 city pages under `kitchen-bath-remodeling/[location]`, plus supporting pages |
| `public/photos/` | Licensed kitchen/bath photography |

Editing `content/site.ts` updates business facts (phone, hours, address, nav)
across every page at once.

## Before going live

1. **Lead form webhook** — `components/QuoteForm.tsx` has an empty `WEBHOOK_URL`.
   Add the CRM webhook to start capturing leads.
2. **Walkthrough video** — the CTA section has a placeholder where the video goes.
   Compress before committing (`ffmpeg -i in.mp4 -c:v libx264 -crf 26 -preset slow
   -movflags +faststart -c:a aac -b:a 96k public/videos/remodel.mp4`). Note the
   source footage is portrait (9:16), so the CTA slot needs a portrait container.
3. **Domain** — point `bulldogkitchenbath.com` at the Vercel project.
