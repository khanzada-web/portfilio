# TECHNICAL SEO AUDIT
## Mussawar Hayat Portfolio — https://mussawarhayat.site
### November 2026 Baseline

## Summary

Site uses Next.js 16 App Router with SSR/SSG. Dynamic sitemap.ts, robots.txt allowing major search and AI search bots, JSON-LD Person + ProfessionalService, llms.txt present. Prior work has addressed metadata, canonicals, and basic schema consistency.

No critical crawl blockers identified in public documentation review. Main risks are standard JS rendering dependencies and indexing lag on some URLs (previously observed in Search Console as "Discovered – currently not indexed").

## Crawlability & Indexability

- **robots.txt**: Allows Googlebot, Bingbot, OAI-SearchBot, PerplexityBot, Claude-SearchBot. Sitemap referenced. Correct for visibility goals.
- **Sitemap**: Dynamic, includes blog posts and project pages (previously confirmed ~78 URLs). Freshness depends on build.
- **Canonicals**: Should be self-referencing on all indexable pages. Verify in rendered HTML.
- **HTTP status**: Production responses expected 200 for valid routes, 404 for invalid.
- **Internal links**: Real `<a href>` required (Next.js Link component satisfies this when used correctly).

## Rendering

Google can render modern JS, but AI crawlers often prefer initial HTML. Recommendation (Google JS SEO basics, Mar 2026): Keep important text, headings, and links in server-rendered HTML.

Action: Spot-check key commercial pages (/, /services, /about, /portfolio) via view-source and URL Inspection for content parity.

## Performance

Core Web Vitals are ranking signals. Lab scores (Lighthouse) ≠ field data (CrUX / Search Console). Prioritize real-user LCP, INP, CLS.

No current field data in this document — pull from Search Console.

## Structured Data

Person + ProfessionalService graph in root layout. Must match visible content. Validate with official Rich Results Test or Schema Markup Validator.

## Issues Log (Prioritized)

| Priority | Issue | Evidence | Action |
|----------|-------|----------|--------|
| P1 | Possible indexing lag on some blog/project URLs | Prior GSC reports | Ensure internal links + sitemap freshness; request indexing where appropriate |
| P1 | Confirm initial HTML contains full commercial content | JS SEO guidance | Spot-check view-source on key pages |
| P2 | IndexNow not yet implemented | Bing recommendation | Add key file + submission on publish |
| P2 | Schema validation | Best practice | Run official validators |

## Validation Checklist

- [ ] robots.txt live and correct
- [ ] sitemap.xml complete and valid
- [ ] All important pages have unique title + meta description
- [ ] Canonicals present and correct
- [ ] JSON-LD valid and consistent
- [ ] No soft 404s
- [ ] Internal links crawlable

*This is a research-informed baseline. Live crawl and Search Console data will refine it.*
