# Mussawar Hayat — Portfolio & Technical Blog

Production Next.js 16 App Router site for [mussawarhayat.site](https://mussawarhayat.site): full-stack & Web3 developer portfolio, case studies, and engineering blog.

## Stack

- **Framework:** Next.js 16 (App Router), React 19, TypeScript
- **Styling:** Tailwind CSS 4, Framer Motion
- **SEO / AEO:** Schema.org entity graph, BlogPosting, FAQPage, breadcrumbs, `llms.txt`, AI-crawler-friendly `robots.txt`
- **Deploy target:** VPS (Nginx + PM2) or Docker multi-stage with `output: "standalone"`

## Scripts

```bash
npm install
npm run dev      # local development
npm run build    # production build (standalone)
npm run start    # serve production build
npm run lint     # ESLint
```

## Project structure (high level)

- `app/` — routes, layout, blog content modules, portfolio pages
- `app/lib/projects.ts` — portfolio data and case-study fields
- `app/blog/content/` — blog post modules (title, excerpt, HTML content, metadata)
- `app/components/` — layout, sections, SEO schema components
- `public/` — static assets, `robots.txt`, `llms.txt`, icons

## Content & SEO notes

- Blog posts are TypeScript modules under `app/blog/content/` and registered in `app/blog/page.tsx`, `app/blog/[slug]/page.tsx`, and `app/sitemap.ts`.
- Portfolio flagship case studies live in `app/lib/projects.ts` (`problem`, `architecture`, `results`).
- Keep entity and person descriptions consistent across metadata, schema, and `llms.txt` for EEAT and answer-engine clarity.

## License

Private portfolio project. All rights reserved.
