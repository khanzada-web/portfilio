# GEO / AEO / LLM VISIBILITY STRATEGY
## Mussawar Hayat Portfolio — https://mussawarhayat.site
### November 2026

## Core Principle (Official Guidance)

Do not confuse crawler access with guaranteed citations.

- **Google AI Overviews & AI Mode**: Eligibility = page is indexed + eligible for snippet. No special schema, llms.txt, or AI markup required. Same technical and content quality standards as regular Search. (Google Search Central, AI features and your website, Dec 2025)
- **ChatGPT Search**: Allow OAI-SearchBot. Blocking it removes the site from search answers (navigational links may still appear). GPTBot is separate (training).
- **Perplexity**: Allow PerplexityBot.
- **Claude**: Allow Claude-SearchBot for search visibility.
- **llms.txt**: Community proposal (Jeremy Howard / llmstxt.org). Not used by Google Search. Useful for some agents and documentation sites but not a ranking mechanism. Current site already publishes one — keep accurate and minimal.

## Entity Consistency

Maintain stable Person entity:
- Name: Mussawar Hayat
- Role: Full-Stack Developer, Web3 Engineer, AI Systems Builder
- Expertise: Next.js, React, TypeScript, Node.js, Solidity, AI agents, Bitcoin Ordinals, production DevOps
- Location: Remote (Pakistan-based), serving North America & Europe
- sameAs: GitHub, LinkedIn, X

ProfessionalService schema (where appropriate) nested or linked to the Person. Visible content must match schema. No fabricated credentials.

## Answer Extraction Readiness

On commercial and key technical pages:
- Clear H1 and opening definition of identity/services
- Concise, factual answer blocks for high-intent questions (e.g., "Who is Mussawar Hayat?", "Can he build production Next.js SaaS?")
- Descriptive headings
- Internal links to proof (portfolio, case studies, blog)

Do not reduce deep technical articles to shallow snippets.

## AI Visibility Benchmark (Fixed Questions)

Test periodically (manual, no scraping):
1. Who is Mussawar Hayat?
2. Is Mussawar Hayat a Next.js developer?
3. Which technologies does Mussawar Hayat specialize in?
4. Can Mussawar Hayat build production SaaS applications?
5. Does Mussawar Hayat work on Web3 projects?
6. Who develops Bitcoin Ordinals marketplaces?
7. How do I hire a remote full-stack developer for a startup?

Record: Date, platform (ChatGPT Search, Perplexity, Google AI Mode, etc.), mentioned?, cited URL?, accuracy, competitors mentioned.

## robots.txt Policy (Current & Recommended)

Allow search-oriented crawlers:
- Googlebot, Bingbot
- OAI-SearchBot
- PerplexityBot
- Claude-SearchBot

Optionally control training bots (GPTBot, ClaudeBot, Google-Extended) separately based on preference. Current configuration already allows major search bots.

## Implementation Priorities

1. Confirm all important pages return full content in initial HTML (Next.js SSR/SSG).
2. Keep entity graph consistent across layout, about, services, and llms.txt.
3. Strengthen answer-oriented sections on commercial pages without keyword stuffing.
4. Monitor indexing status in Search Console — AI features draw from the same index.
5. Implement IndexNow for faster Bing discovery of updates.

*No claims of AI dominance. Visibility depends on indexing, content quality, and relevance. Measure with comparative tests.*
