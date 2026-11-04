# SEO / GEO / AEO Monitoring Guide

**Site:** https://mussawarhayat.site  
**Last updated:** 2026-11-04

## 1. Google Search Console (Primary)

**Frequency:** Weekly for the first 90 days, then bi-weekly.

Track:
- Indexing coverage (Valid / Excluded / Errors)
- Core Web Vitals (mobile and desktop) — field data only
- Performance report: impressions, clicks, average position, CTR
- Queries containing “Next.js developer”, “Web3 developer”, “Mussawar Hayat”, and service-related terms
- Sitemap status (https://mussawarhayat.site/sitemap.xml)
- Manual actions and security issues (should remain empty)

**Baseline to establish now:**
- Number of indexed pages
- Top 20 queries by impressions
- Current CWV status (Good / Needs Improvement / Poor) for LCP, INP, CLS

## 2. Bing Webmaster Tools

**Frequency:** Monthly.

- Confirm sitemap submission
- Review crawl stats and index coverage
- Check for any crawl errors

## 3. Core Web Vitals

- Prefer CrUX field data in Search Console over lab Lighthouse scores.
- Re-check after any major image, font, or client-bundle change.
- Target: LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1 (75th percentile).

## 4. Indexing Checks

Monthly:
- site:mussawarhayat.site (approximate indexed count)
- Spot-check important URLs: /, /services, /portfolio, /about, 3–5 key blog posts, 2–3 case studies
- Confirm canonicals in rendered HTML match intended URLs

## 5. AI Visibility Monitoring

**Frequency:** Every 2–4 weeks.

Fixed query set (examples):
- “Who is Mussawar Hayat?”
- “Next.js 16 full-stack developer for hire”
- “Bitcoin Ordinals marketplace developer”
- “Next.js Core Web Vitals optimization guide”
- “hire Web3 developer Next.js remote”

Record:
- Whether the site or brand is mentioned
- Whether a link or citation appears
- Accuracy of the description (does it match site claims?)
- Which platforms (ChatGPT Search, Perplexity, Gemini, etc.)

Do not treat absence of a citation as a ranking failure; treat it as a signal for content or authority work.

## 6. Technical Health

Quarterly or after major deploys:
- robots.txt still allows intended crawlers
- sitemap.xml returns 200 and lists expected URLs
- llms.txt remains accurate
- No new soft-404 or redirect issues
- JSON-LD still validates (Rich Results Test / Schema Validator)

## 7. Content & Authority

- Track new blog posts and ensure they appear in sitemap and RSS
- Note any new external mentions or backlinks (manual or tool-assisted)
- Review top-performing posts in Search Console and add internal links to services / relevant case studies if missing

## 8. Success Criteria (Non-Guaranteed)

- Stable or growing impressions on commercial queries
- No critical indexing errors
- CWV field data in “Good” or improving
- Accurate brand descriptions when the site is cited by AI systems
- Steady publishing of original technical content

**Do not expect guaranteed rankings or AI citations.** Measurement is for learning and prioritization.
