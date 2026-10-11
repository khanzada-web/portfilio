# Project notes

## Commands
- Dev: `npm run dev`
- Build (also runs TypeScript check): `npm run build`
- Lint: `npm run lint`

## Gotchas
- Stop `npm run dev` before running `npm install` / `npm i`. Installing while the dev server runs leaves `node_modules` half-updated (e.g. `Cannot find module '../lib/verify-typescript-setup'`, wrong Next version in the banner).
- `experimental.optimizeCss` in `next.config.ts` requires the `critters` dev dependency.
- Blog posts in `app/blog/content/*.ts` export `content` as a template literal. Inside it, escape backticks as `` \` ``, `${` as `\${`, and a literal backslash as `\\` (e.g. shell line continuations in code samples). One malformed post breaks `/blog`, `/feed.xml` and the whole build.
