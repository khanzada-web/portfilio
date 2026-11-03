# Project notes

## Commands
- Dev: `npm run dev`
- Build (also runs TypeScript check): `npm run build`
- Lint: `npm run lint`

## CRM integration
- Contact leads: `POST /api/contact` forwards to `$CRM_API_URL` with `Bearer $CRM_API_KEY` (server key, never `NEXT_PUBLIC_`).
- Newsletter: `app/api/subscribe/route.ts` forwards `{ email }` to `$CRM_NEWSLETTER_API_URL` with `Bearer $CRM_NEWSLETTER_API_KEY` (`sub_…` key). Exact upstream path is unconfirmed — verify against the CRM's "Newsletter Subscribe API" docs if subscribes fail.
- Webhooks: `app/api/crm/route.ts` verifies `X-CRM-Signature` (HMAC-SHA256 of `<timestamp>.<rawBody>`) using `$CRM_WEBHOOK_SECRET`, rejects >5 min old deliveries, dedupes on `X-CRM-Event-Id`. Set the secret after adding the endpoint in the CRM.
- Visitor tracking: gated on `NEXT_PUBLIC_CRM_TRACKING_SRC`/`NEXT_PUBLIC_CRM_TRACKING_KEY` in `app/layout.tsx`; renders nothing until both are set (key must be generated in the CRM first).

## Gotchas
- Stop `npm run dev` before running `npm install` / `npm i`. Installing while the dev server runs leaves `node_modules` half-updated (e.g. `Cannot find module '../lib/verify-typescript-setup'`, wrong Next version in the banner).
- `experimental.optimizeCss` in `next.config.ts` requires the `critters` dev dependency.
- Blog posts in `app/blog/content/*.ts` export `content` as a template literal. Inside it, escape backticks as `` \` ``, `${` as `\${`, and a literal backslash as `\\` (e.g. shell line continuations in code samples). One malformed post breaks `/blog`, `/feed.xml` and the whole build.
