# Deploy LION Company directly to Cloudflare Workers

This repository already uses Vinext with the Cloudflare Vite plugin. Do not
run `@opennextjs/cloudflare migrate`, `wrangler setup`, or install a different
Wrangler during deployment. The committed lockfile pins compatible versions.

## One-time setup

1. In your Cloudflare account create a D1 database for inquiries, or select an
   existing database dedicated to this website. Copy its Database ID.
2. Connect this repository's `main` branch to Workers Builds, with root `/`.
3. Set build variables:
   - `D1_DATABASE_ID`: the actual UUID from step 1 (required).
   - `D1_DATABASE_NAME`: your database name (default `lion-company-inquiries`).
   - `CLOUDFLARE_WORKER_NAME`: the exact Worker name in the dashboard
     (default `lioncompany-sk`).
4. Set **Build command** to `npm run build:cloudflare` and **Deploy command**
   to `npm run deploy`. Deploy rebuilds deliberately so it cannot publish an
   old artifact. Dependency installation should use the committed lockfile
   (`npm ci`). Use Node 22.13 or newer.
5. The build API token needs permission to deploy Workers and edit D1 in the
   selected account. Keep API tokens in Cloudflare settings, never in Git.

`npm run deploy` builds the Worker, applies pending SQL migrations from
`drizzle/`, then deploys `dist/server/wrangler.json`. Existing inquiry rows are
preserved; migrations are recorded by Wrangler and only pending ones run.

The root `wrangler.json` prevents framework auto-detection and OpenNext
migration. Use the deploy command above to ensure D1 migrations also run.

## Validation

After deployment submit a test inquiry and verify it appears in the
`inquiries` table in D1. The previous Sites deployment uses a separate database;
its rows are not automatically copied into your Cloudflare account.

The site contains telephone/email links. Automatic email notifications are
not yet connected to an email sending service.

## Reported ERESOLVE failure

The log shows automatic OpenNext migration requesting Wrangler `4.131.1`,
whose optional Workers types peer requires `^5.20260911.1`, while this project's
locked types are `4.20260515.1`. Avoiding the unintended migration preserves
the tested `wrangler@4.92.0` dependency set; `--force` and `--legacy-peer-deps`
are not needed.
