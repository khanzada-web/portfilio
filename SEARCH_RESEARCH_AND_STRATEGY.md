# SEARCH RESEARCH AND STRATEGY
## Mussawar Hayat Portfolio — https://mussawarhayat.site
### Phase 1: Research Baseline (November 2026)

## 1. Official Research Sources

### Google Search Central
- **JavaScript SEO Basics** (updated March 2026): Google processes JS in crawl → render → index. Prefer content, titles, canonicals, and links in initial HTML. Use real `<a href>` links. SSR/SSG preferred for critical content. Source: developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics
- **AI Features and Your Website** (updated ~Dec 2025): To appear in AI Overviews or AI Mode, a page must be indexed and eligible to show a snippet. **No additional technical requirements** or special markup. Same Search Essentials apply. Query fan-out used. Source: developers.google.com/search/docs/appearance/ai-features
- **Optimizing for Generative AI Features**: Existing SEO best practices remain relevant. RAG and query fan-out draw from the main Search index. llms.txt and special AI files are not used by Google Search. Source: developers.google.com/search/docs/fundamentals/ai-optimization-guide
- Helpful content, people-first, Core Web Vitals, structured data consistency with visible content remain foundational.

### Microsoft Bing
- Bing Webmaster Guidelines: Submit sitemaps, use IndexNow for faster notification of new/updated/deleted URLs. IndexNow is recommended over legacy URL Submission API. Source: bing.com/webmasters
- IndexNow protocol: Host key file at root, POST to api.indexnow.org. Shared across participating engines (Bing, Yandex, etc.). Does not guarantee indexing. Google does not participate. Source: bing.com/indexnow

### AI Search Crawlers (Official)
- **OpenAI**: OAI-SearchBot for ChatGPT search results (allow for visibility). GPTBot for training (separate control). ChatGPT-User for user-initiated fetches. Source: developers.openai.com/api/docs/bots
- **Perplexity**: PerplexityBot for search results (allow). Perplexity-User for user actions. Source: docs.perplexity.ai/docs/resources/perplexity-crawlers
- **Anthropic**: Claude-SearchBot for search quality/indexing. ClaudeBot for training. Claude-User for user requests. Source: support.claude.com (crawler documentation)

### Schema.org
- Person + ProfessionalService appropriate for independent freelancers. Maintain consistent @id, sameAs, and visible content alignment. Do not invent reviews, awards, or addresses.

**Classification**: All above are verified official guidance or requirements. No experimental GEO hacks assumed.

## 2. Keyword & Market Intelligence (Hypotheses Only)

No invented volumes or difficulty scores. Real data requires Search Console / Bing Webmaster access.

### Priority Markets
1. United States / Canada / UK (highest commercial intent for remote Next.js / full-stack hires)
2. Germany / Netherlands / broader EU (English-speaking startup teams)

### Commercial Intent Clusters (to validate in GSC)
- Hire Next.js developer / freelance Next.js developer
- Remote full-stack developer / Next.js SaaS developer
- Web3 developer for hire / Solidity developer
- AI application / AI agent developer

### Technical Authority Clusters
- Next.js production architecture / Next.js 16 performance / Core Web Vitals
- Server Actions security / VPS deployment
- AI agent production security / Bitcoin Ordinals marketplace

### Problem-Oriented
- How to build scalable SaaS / secure Next.js app / production AI agents

**Action**: Map clusters to existing URLs (/services, /portfolio, relevant blog posts). Prevent cannibalization. Prioritize commercial pages for high-intent terms.

## 3. Competitive Positioning

Genuine advantage: End-to-end ownership (frontend → backend → DevOps → Web3) by a single engineer. Verified production work and technical blog depth.

Gaps: Limited external brand mentions and backlinks relative to established agencies or high-profile freelancers. Indexing lag on some pages (observed in prior GSC data).

## 4. Strategic Priorities

**P0**: Ensure all commercial and high-value content is in initial HTML, correctly canonicalized, and in sitemap. Fix any remaining indexing blockers.

**P1**: Strengthen commercial pages (homepage, services, about, portfolio) for clear identity + proof. Improve internal linking from blog to commercial destinations.

**P2**: Topical clusters around Next.js production, AI systems, Web3. Entity consistency.

**P3**: External authority (GitHub, technical publishing, genuine mentions). IndexNow implementation for Bing.

## 5. Measurement

Baseline from Search Console (organic clicks, impressions, indexing status, Core Web Vitals field data) and manual AI search tests. No claimed rankings without evidence.

*Document created November 2026 from primary official sources. Update with live GSC/Bing data when available.*
