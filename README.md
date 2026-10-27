# Estimating Software Directory

A fast static directory (Astro 5) of takeoff & estimating software for small contractors, organized by trade.

## Develop

```sh
nvm use        # Node 20
npm ci
npm run dev
npm run build  # outputs dist/
```

## Configure the site URL

`astro.config.mjs` reads two env vars:

- `SITE_URL` – production origin (default `https://example.com`). Used for canonical URLs, Open Graph, JSON-LD, sitemap, and robots.txt.
- `BASE_PATH` – path prefix for GitHub Pages *project* sites (e.g. `/estimating-directory`). Default `/`.

The GitHub Actions workflow (`.github/workflows/deploy.yml`) fills these from `actions/configure-pages`, or from the `SITE_URL` repo variable if you set one (e.g. for a custom domain).

## Add a listing

Create `src/content/listings/<slug>.md`. The schema lives in `src/content.config.ts`. Rules:

- Take every fact from the vendor's own pages, and link them under **Sources** in the body.
- `startingPrice` is the lowest verified *paid* price in USD (use `null` if it isn't published). Set `startingPricePeriod` to `month`, `year`, or `one-time`.
- Never invent prices or ratings. Put anything you couldn't verify under "What we couldn't verify".
- Update `lastVerified` every time you re-check a page.
- `affiliateUrl` stays empty until there's a real program. When set, the outbound button uses it with `rel="sponsored"`.

Trades are defined in `src/data/trades.ts`.

## Deploy

Push to `main` with GitHub Pages set to the "GitHub Actions" source.
