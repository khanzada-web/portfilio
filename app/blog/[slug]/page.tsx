import { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/app/components/layout/Header'
import { Footer } from '@/app/components/layout/Footer'
import { BreadcrumbSchema } from '@/app/components/seo/BreadcrumbSchema'
import { notFound } from 'next/navigation'

interface BlogPost {
  title: string
  excerpt: string
  content: string
  date: string
  readTime: string
  category: string
  author: string
  keywords: string[]
}

const blogPosts: Record<string, BlogPost> = {
  'prisma-connection-exhaustion-nextjs-16-accelerate': {
    title: 'Fix Prisma Connection Exhaustion in Next.js 16',
    excerpt: 'Serverless Next.js apps hit "too many connections" under load because every function opens its own Prisma pool. Learn the production singleton pattern, Prisma Accelerate setup, and PgBouncer alternative that keep Postgres stable.',
    content: `\n<div class=\"intro-section\">\n<h2>Why Your Database Keeps Timing Out Under Load</h2>\n<p class=\"lead-paragraph\">In a Next.js 16 App Router app deployed to Vercel, AWS Lambda, or any serverless platform, each concurrent function invocation can open its own Prisma Client and its own set of database connections. A traffic spike that spins up dozens of containers quickly exhausts the Postgres connection limit. Queries start failing with \"too many connections\" or pool timeout errors, and the app becomes unresponsive.</p>\n<p>This is not a Prisma bug. It is the natural result of how serverless runtimes work. The fix is a combination of the global singleton pattern (for development and long-running processes) and an external connection pooler such as Prisma Accelerate or PgBouncer (for production serverless traffic).</p>\n<div class=\"key-highlights\"><h3>What You Will Learn</h3>\n<ul>\n<li>Why the classic singleton alone is not enough on serverless</li>\n<li>The exact global Prisma Client pattern for Next.js 16</li>\n<li>How to configure Prisma Accelerate for connection pooling and optional caching</li>\n<li>How to set up PgBouncer as a self-hosted alternative</li>\n<li>Production checklist for Server Actions, Route Handlers, and Server Components</li>\n<li>Common mistakes that still appear in production codebases</li>\n</ul></div>\n</div>\n\n<div class=\"technical-section\">\n<h2>1. The Serverless Connection Problem</h2>\n<p>Postgres hard-limits concurrent connections. Each connection consumes memory. A typical small instance allows about 100 connections; many free tiers allow far fewer.</p>\n<p>In a long-running Node process you create one PrismaClient and reuse it. In serverless:</p>\n<ul>\n<li>Every cold start can create a new PrismaClient instance.</li>\n<li>Each instance opens its own pool (often 5–10 connections).</li>\n<li>Paused containers keep connections open, blocking capacity.</li>\n<li>Under load, total connections = concurrent functions × pool size.</li>\n</ul>\n<p>Official Prisma documentation recommends an external connection pooler for serverless workloads.</p>\n</div>\n\n<div class=\"onpage-section\">\n<h2>2. The Global Singleton Pattern (Required Baseline)</h2>\n<p>Even when you later add Accelerate or PgBouncer, you still need a single shared PrismaClient per process. Without it, hot reloads in development and repeated imports in production create extra clients.</p>\n<p>Create <code>lib/prisma.ts</code>:</p>\n<div style=\"background:#0A1221;border:1px solid rgba(57,255,20,0.25);border-radius:12px;overflow:hidden;margin:2rem 0;box-shadow:0 8px 32px rgba(0,0,0,0.4);\"><div style=\"display:flex;align-items:center;justify-content:space-between;padding:10px 18px;background:rgba(0,0,0,0.45);border-bottom:1px solid rgba(255,255,255,0.08);\"><span style=\"font-size:12px;color:#39FF14;font-family:ui-monospace,monospace;letter-spacing:0.05em;\">TypeScript</span><span style=\"font-size:11px;color:rgba(255,255,255,0.35);font-family:ui-monospace,monospace;\">lib/prisma.ts</span></div><pre style=\"margin:0;padding:1.25rem 1.5rem;background:transparent;border:none;overflow-x:auto;\"><code style=\"font-family:ui-monospace,monospace;font-size:14px;line-height:1.7;color:#e2e8f0;white-space:pre;\">import { PrismaClient } from '@prisma/client'\nimport { withAccelerate } from '@prisma/extension-accelerate'\n\nconst globalForPrisma = globalThis as unknown as {\n  prisma: ReturnType&lt;typeof createPrismaClient&gt; | undefined\n}\n\nfunction createPrismaClient() {\n  const client = new PrismaClient({\n    log: process.env.NODE_ENV === 'development'\n      ? ['query', 'error', 'warn']\n      : ['error'],\n  })\n  if (process.env.DATABASE_URL?.startsWith('prisma://')) {\n    return client.$extends(withAccelerate())\n  }\n  return client\n}\n\nexport const prisma = globalForPrisma.prisma ?? createPrismaClient()\n\nif (process.env.NODE_ENV !== 'production') {\n  globalForPrisma.prisma = prisma\n}</code></pre></div>\n<p>Import this module from Server Components, Server Actions, and Route Handlers. Never instantiate <code>new PrismaClient()</code> inside a request handler or action. Do not call <code>$disconnect()</code> after every request — in warm serverless containers the connection is reused.</p>\n</div>\n\n<div class=\"content-strategy-section\">\n<h2>3. Prisma Accelerate: Managed Pooling + Optional Cache</h2>\n<p>Prisma Accelerate sits between your application and the database. It maintains a connection pool in the region you choose and optionally caches query results globally. Your serverless functions talk to Accelerate over a single <code>prisma://</code> URL; Accelerate talks to Postgres with a controlled number of real connections.</p>\n<h3>3.1 Environment variables</h3>\n<div style=\"background:#0A1221;border:1px solid rgba(57,255,20,0.25);border-radius:12px;overflow:hidden;margin:2rem 0;box-shadow:0 8px 32px rgba(0,0,0,0.4);\"><div style=\"display:flex;align-items:center;justify-content:space-between;padding:10px 18px;background:rgba(0,0,0,0.45);border-bottom:1px solid rgba(255,255,255,0.08);\"><span style=\"font-size:12px;color:#39FF14;font-family:ui-monospace,monospace;letter-spacing:0.05em;\">.env</span><span style=\"font-size:11px;color:rgba(255,255,255,0.35);font-family:ui-monospace,monospace;\">.env</span></div><pre style=\"margin:0;padding:1.25rem 1.5rem;background:transparent;border:none;overflow-x:auto;\"><code style=\"font-family:ui-monospace,monospace;font-size:14px;line-height:1.7;color:#e2e8f0;white-space:pre;\"># Runtime (Accelerate)\nDATABASE_URL=\"prisma://accelerate.prisma-data.net/?api_key=YOUR_API_KEY\"\n\n# CLI (migrate, db push, introspect)\nDIRECT_DATABASE_URL=\"postgresql://user:password@host:5432/dbname?schema=public\"</code></pre></div>\n<h3>3.2 prisma.config.ts</h3>\n<p>Point the CLI at the direct URL so migrations never try to run through the Accelerate proxy:</p>\n<div style=\"background:#0A1221;border:1px solid rgba(57,255,20,0.25);border-radius:12px;overflow:hidden;margin:2rem 0;box-shadow:0 8px 32px rgba(0,0,0,0.4);\"><div style=\"display:flex;align-items:center;justify-content:space-between;padding:10px 18px;background:rgba(0,0,0,0.45);border-bottom:1px solid rgba(255,255,255,0.08);\"><span style=\"font-size:12px;color:#39FF14;font-family:ui-monospace,monospace;letter-spacing:0.05em;\">TypeScript</span><span style=\"font-size:11px;color:rgba(255,255,255,0.35);font-family:ui-monospace,monospace;\">prisma.config.ts</span></div><pre style=\"margin:0;padding:1.25rem 1.5rem;background:transparent;border:none;overflow-x:auto;\"><code style=\"font-family:ui-monospace,monospace;font-size:14px;line-height:1.7;color:#e2e8f0;white-space:pre;\">import \"dotenv/config\"\nimport { defineConfig, env } from \"prisma/config\"\n\nexport default defineConfig({\n  schema: \"prisma/schema.prisma\",\n  datasource: {\n    url: env(\"DIRECT_DATABASE_URL\"),\n  },\n})</code></pre></div>\n<h3>3.3 Generate client for serverless</h3>\n<div style=\"background:#0A1221;border:1px solid rgba(57,255,20,0.25);border-radius:12px;overflow:hidden;margin:2rem 0;box-shadow:0 8px 32px rgba(0,0,0,0.4);\"><div style=\"display:flex;align-items:center;justify-content:space-between;padding:10px 18px;background:rgba(0,0,0,0.45);border-bottom:1px solid rgba(255,255,255,0.08);\"><span style=\"font-size:12px;color:#39FF14;font-family:ui-monospace,monospace;letter-spacing:0.05em;\">Terminal</span><span style=\"font-size:11px;color:rgba(255,255,255,0.35);font-family:ui-monospace,monospace;\">shell</span></div><pre style=\"margin:0;padding:1.25rem 1.5rem;background:transparent;border:none;overflow-x:auto;\"><code style=\"font-family:ui-monospace,monospace;font-size:14px;line-height:1.7;color:#e2e8f0;white-space:pre;\">npx prisma generate --no-engine</code></pre></div>\n<p>The <code>--no-engine</code> flag keeps the bundle small. For long-running servers (VPS, Docker, EC2) a normal <code>prisma generate</code> is fine.</p>\n<h3>3.4 Optional per-query caching</h3>\n<div style=\"background:#0A1221;border:1px solid rgba(57,255,20,0.25);border-radius:12px;overflow:hidden;margin:2rem 0;box-shadow:0 8px 32px rgba(0,0,0,0.4);\"><div style=\"display:flex;align-items:center;justify-content:space-between;padding:10px 18px;background:rgba(0,0,0,0.45);border-bottom:1px solid rgba(255,255,255,0.08);\"><span style=\"font-size:12px;color:#39FF14;font-family:ui-monospace,monospace;letter-spacing:0.05em;\">TypeScript</span><span style=\"font-size:11px;color:rgba(255,255,255,0.35);font-family:ui-monospace,monospace;\">app/posts/page.tsx</span></div><pre style=\"margin:0;padding:1.25rem 1.5rem;background:transparent;border:none;overflow-x:auto;\"><code style=\"font-family:ui-monospace,monospace;font-size:14px;line-height:1.7;color:#e2e8f0;white-space:pre;\">const posts = await prisma.post.findMany({\n  where: { published: true },\n  cacheStrategy: {\n    ttl: 60,\n    swr: 30,\n    tags: ['published-posts'],\n  },\n})</code></pre></div>\n<p>Invalidate when data changes inside a Server Action:</p>\n<div style=\"background:#0A1221;border:1px solid rgba(57,255,20,0.25);border-radius:12px;overflow:hidden;margin:2rem 0;box-shadow:0 8px 32px rgba(0,0,0,0.4);\"><div style=\"display:flex;align-items:center;justify-content:space-between;padding:10px 18px;background:rgba(0,0,0,0.45);border-bottom:1px solid rgba(255,255,255,0.08);\"><span style=\"font-size:12px;color:#39FF14;font-family:ui-monospace,monospace;letter-spacing:0.05em;\">TypeScript</span><span style=\"font-size:11px;color:rgba(255,255,255,0.35);font-family:ui-monospace,monospace;\">app/actions/posts.ts</span></div><pre style=\"margin:0;padding:1.25rem 1.5rem;background:transparent;border:none;overflow-x:auto;\"><code style=\"font-family:ui-monospace,monospace;font-size:14px;line-height:1.7;color:#e2e8f0;white-space:pre;\">await prisma.post.update({ where: { id }, data: { title } })\nawait prisma.$accelerate.invalidate({ tags: ['published-posts'] })</code></pre></div>\n</div>\n\n<div class=\"local-seo-section\">\n<h2>4. Self-Hosted Alternative: PgBouncer</h2>\n<p>If you prefer not to use a managed service, run PgBouncer in front of Postgres (or use a managed pooler from Neon, Supabase, Railway, etc.).</p>\n<div style=\"background:#0A1221;border:1px solid rgba(57,255,20,0.25);border-radius:12px;overflow:hidden;margin:2rem 0;box-shadow:0 8px 32px rgba(0,0,0,0.4);\"><div style=\"display:flex;align-items:center;justify-content:space-between;padding:10px 18px;background:rgba(0,0,0,0.45);border-bottom:1px solid rgba(255,255,255,0.08);\"><span style=\"font-size:12px;color:#39FF14;font-family:ui-monospace,monospace;letter-spacing:0.05em;\">.env</span><span style=\"font-size:11px;color:rgba(255,255,255,0.35);font-family:ui-monospace,monospace;\">.env</span></div><pre style=\"margin:0;padding:1.25rem 1.5rem;background:transparent;border:none;overflow-x:auto;\"><code style=\"font-family:ui-monospace,monospace;font-size:14px;line-height:1.7;color:#e2e8f0;white-space:pre;\">DATABASE_URL=\"postgresql://user:password@pgbouncer-host:6432/dbname?pgbouncer=true\"\nDIRECT_DATABASE_URL=\"postgresql://user:password@db-host:5432/dbname\"</code></pre></div>\n<p>Keep the same singleton module. Prisma will open fewer real connections because PgBouncer multiplexes them. Use transaction mode for most web workloads.</p>\n</div>\n\n<div class=\"linkbuilding-section\">\n<h2>5. Using Prisma Safely in Server Actions</h2>\n<p>Server Actions are reachable via POST. Always authenticate and authorize inside the action before touching the database.</p>\n<div style=\"background:#0A1221;border:1px solid rgba(57,255,20,0.25);border-radius:12px;overflow:hidden;margin:2rem 0;box-shadow:0 8px 32px rgba(0,0,0,0.4);\"><div style=\"display:flex;align-items:center;justify-content:space-between;padding:10px 18px;background:rgba(0,0,0,0.45);border-bottom:1px solid rgba(255,255,255,0.08);\"><span style=\"font-size:12px;color:#39FF14;font-family:ui-monospace,monospace;letter-spacing:0.05em;\">TypeScript</span><span style=\"font-size:11px;color:rgba(255,255,255,0.35);font-family:ui-monospace,monospace;\">app/actions/posts.ts</span></div><pre style=\"margin:0;padding:1.25rem 1.5rem;background:transparent;border:none;overflow-x:auto;\"><code style=\"font-family:ui-monospace,monospace;font-size:14px;line-height:1.7;color:#e2e8f0;white-space:pre;\">'use server'\n\nimport { auth } from '@/lib/auth'\nimport { prisma } from '@/lib/prisma'\nimport { revalidatePath } from 'next/cache'\nimport { z } from 'zod'\n\nconst createPostSchema = z.object({\n  title: z.string().min(1).max(200),\n  body: z.string().min(1),\n})\n\nexport async function createPost(formData: FormData) {\n  const session = await auth()\n  if (!session?.user?.id) {\n    throw new Error('Unauthorized')\n  }\n\n  const parsed = createPostSchema.safeParse({\n    title: formData.get('title'),\n    body: formData.get('body'),\n  })\n  if (!parsed.success) {\n    return { error: 'Invalid input' }\n  }\n\n  const post = await prisma.post.create({\n    data: {\n      title: parsed.data.title,\n      body: parsed.data.body,\n      authorId: session.user.id,\n    },\n  })\n\n  revalidatePath('/dashboard')\n  return { id: post.id }\n}</code></pre></div>\n<p>In Server Components simply import the shared client and query. Because the component runs on the server, secrets and the Prisma client never reach the browser.</p>\n</div>\n\n<div class=\"analytics-section\">\n<h2>6. Production Checklist</h2>\n<ul>\n<li>One shared PrismaClient module; never <code>new PrismaClient()</code> inside handlers.</li>\n<li><code>DATABASE_URL</code> points at the pooler (Accelerate or PgBouncer); <code>DIRECT_DATABASE_URL</code> points at the database for CLI.</li>\n<li>Serverless builds use <code>prisma generate --no-engine</code> when using Accelerate.</li>\n<li>Authenticate and validate inside every Server Action before any write.</li>\n<li>Avoid <code>Promise.all</code> of many independent Server Actions from the client; Next.js dispatches them sequentially per client.</li>\n<li>Monitor connection counts on the database side after deploying.</li>\n<li>Never pass the Prisma client or raw database credentials into Client Components.</li>\n</ul>\n</div>\n\n<div class=\"conclusion-section\">\n<h2>7. Common Mistakes</h2>\n<ul>\n<li>Creating a new PrismaClient on every request \"to be safe\" — this multiplies connections.</li>\n<li>Calling <code>$disconnect()</code> at the end of every Server Action — forces reconnects and adds latency.</li>\n<li>Running migrations against the Accelerate URL — migrations need the direct connection.</li>\n<li>Importing Prisma into a Client Component or a file marked <code>'use client'</code>.</li>\n<li>Relying only on the singleton without a pooler on high-concurrency serverless deployments.</li>\n<li>Setting an extremely large connection pool size per function — that defeats the purpose of pooling.</li>\n</ul>\n<h2>Summary</h2>\n<p>Connection exhaustion is a capacity problem, not a syntax problem. Use a global singleton so each process opens only one client, then put a real connection pooler (Prisma Accelerate or PgBouncer) in front of Postgres so hundreds of serverless invocations share a small, controlled set of database connections. Add authentication and validation inside every Server Action, keep Prisma on the server, and your Next.js 16 app will stay stable under traffic spikes.</p>\n<div class=\"final-takeaway\"><h3>Key Takeaway</h3>\n<p><em>Singleton + external pooler is the production baseline for Prisma on Next.js serverless. Everything else (caching, query tuning, concurrency limits) builds on that foundation.</em></p></div>\n<hr>\n<div class=\"cta-section\">\n<h3>Need a production data-layer review?</h3>\n<p>I help teams harden Next.js + Prisma architectures for serverless and VPS deployments — connection strategy, Server Action security, and deploy pipelines. <a href=\"/contact\" style=\"color: #39FF14;\">Get in touch</a> if you want a focused pass on your stack.</p>\n</div>\n<div style=\"margin-top:4rem;padding-top:2.5rem;border-top:1px solid rgba(255,255,255,0.1);\">\n<h3 style=\"margin-bottom:1.75rem;\">Related Posts</h3>\n<div style=\"display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1.25rem;\">\n<a href=\"/blog/nextjs-16-saas-tutorial-prisma-typescript-2026\" style=\"display:block;text-decoration:none;background:#0A1221;border:1px solid rgba(57,255,20,0.2);border-radius:12px;padding:1.5rem;\">\n<span style=\"display:inline-block;font-size:11px;color:#39FF14;background:rgba(57,255,20,0.1);padding:4px 10px;border-radius:6px;margin-bottom:12px;\">Full-Stack</span>\n<div style=\"font-size:16px;font-weight:600;color:#ffffff;margin-bottom:8px;\">Next.js 16 + Prisma SaaS Tutorial</div>\n<div style=\"font-size:13px;color:rgba(255,255,255,0.5);\">App Router, Prisma, Auth.js, and Server Actions.</div>\n</a>\n<a href=\"/blog/nextjs-16-stop-overusing-use-client-server-components\" style=\"display:block;text-decoration:none;background:#0A1221;border:1px solid rgba(57,255,20,0.2);border-radius:12px;padding:1.5rem;\">\n<span style=\"display:inline-block;font-size:11px;color:#39FF14;background:rgba(57,255,20,0.1);padding:4px 10px;border-radius:6px;margin-bottom:12px;\">Full-Stack</span>\n<div style=\"font-size:16px;font-weight:600;color:#ffffff;margin-bottom:8px;\">Stop Overusing 'use client' in Next.js 16</div>\n<div style=\"font-size:13px;color:rgba(255,255,255,0.5);\">Server Components and minimal client boundaries.</div>\n</a>\n<a href=\"/blog/nextjs-july-2026-security-patch-server-actions\" style=\"display:block;text-decoration:none;background:#0A1221;border:1px solid rgba(57,255,20,0.2);border-radius:12px;padding:1.5rem;\">\n<span style=\"display:inline-block;font-size:11px;color:#39FF14;background:rgba(57,255,20,0.1);padding:4px 10px;border-radius:6px;margin-bottom:12px;\">Security</span>\n<div style=\"font-size:16px;font-weight:600;color:#ffffff;margin-bottom:8px;\">Next.js July 2026 Security Patch</div>\n<div style=\"font-size:13px;color:rgba(255,255,255,0.5);\">Server Action hardening and official patches.</div>\n</a>\n</div></div>\n</div>\n    `,
    date: '2026-07-27',
    readTime: '12 min read',
    category: 'Full-Stack',
    author: 'Mussawar Hayat',
    keywords: ['Prisma', 'Next.js 16', 'connection pooling', 'Prisma Accelerate', 'PgBouncer', 'serverless', 'Server Actions', 'Postgres', 'hire Next.js developer']
  },
  'nextjs-16-stop-overusing-use-client-server-components': {
    title: "Stop Overusing 'use client' in Next.js 16",
    excerpt: 'The most common App Router mistake is marking entire trees with use client. Learn the production patterns for Server Components, children slots, and minimal client boundaries that keep your bundles small and your data secure.',
    content: `<div class=\"intro-section\"><h2>The Default Is Already Correct</h2><p class=\"lead-paragraph\">In Next.js 16 every layout and page in the app directory is a Server Component by default. Treat 'use client' as a precision tool, not a default. Keep Server Components high and push Client Components to the leaves.</p></div>`,
    date: '2026-07-26',
    readTime: '13 min read',
    category: 'Full-Stack',
    author: 'Mussawar Hayat',
    keywords: ['Next.js 16', 'use client', 'Server Components', 'App Router']
  },
  'nextjs-july-2026-security-patch-server-actions': {
    title: 'Next.js July 2026 Security Patch',
    excerpt: 'Complete guide to the July 2026 Next.js security release (CVE-2026-64641 and related issues).',
    content: `<div class=\"intro-section\"><h2>Why This Matters Right Now</h2><p class=\"lead-paragraph\">On 20 July 2026 Next.js published a coordinated security release. Patch first, then harden every Server Action.</p></div>`,
    date: '2026-07-26',
    readTime: '12 min read',
    category: 'Security',
    author: 'Mussawar Hayat',
    keywords: ['Next.js security', 'Server Actions security', 'CVE-2026-64641']
  },
  'nextjs-16-saas-tutorial-prisma-typescript-2026': {
    title: 'Next.js 16 + Prisma SaaS Tutorial',
    excerpt: 'Step-by-step guide to building a scalable SaaS with Next.js 16 App Router, Prisma, Auth.js, and Tailwind CSS.',
    content: `<div class=\"intro-section\"><h2>Why This Stack Wins in 2026</h2><p class=\"lead-paragraph\">Next.js 16 with the App Router, TypeScript, Prisma, and Tailwind CSS has become the default choice for serious full-stack SaaS products.</p></div>`,
    date: '2026-07-26',
    readTime: '14 min read',
    category: 'Full-Stack',
    author: 'Mussawar Hayat',
    keywords: ['Next.js 16', 'SaaS tutorial', 'Prisma']
  },
  'ai-agents-blockchain-web3-2026': {
    title: 'AI Agents on Blockchain: Web3 2026',
    excerpt: 'Autonomous AI agents are executing smart contracts, managing DeFi portfolios, and governing DAOs without human input.',
    content: `<div class=\"intro-section\"><h2>The AI Agent Revolution</h2><p class=\"lead-paragraph\">AI and blockchain are converging into autonomous digital agents.</p></div>`,
    date: '2026-03-10',
    readTime: '11 min read',
    category: 'Web3 & AI',
    author: 'Mussawar Hayat',
    keywords: ['AI agents', 'blockchain', 'Web3']
  },
  'account-abstraction-smart-wallets-guide': {
    title: 'Account Abstraction 2026: No More Seeds',
    excerpt: 'ERC-4337 and smart wallets are killing the biggest UX barrier in Web3.',
    content: `<div class=\"intro-section\"><h2>The UX Revolution</h2><p class=\"lead-paragraph\">Account Abstraction has matured into a production-ready solution.</p></div>`,
    date: '2026-03-05',
    readTime: '10 min read',
    category: 'Web3 Development',
    author: 'Mussawar Hayat',
    keywords: ['Account Abstraction', 'ERC-4337']
  },
  'real-world-asset-tokenization-rwa-guide': {
    title: 'RWA Tokenization: Blockchain Meets Finance',
    excerpt: 'Real-world asset tokenization crossed $24 billion in 2025 and is accelerating fast.',
    content: `<div class=\"intro-section\"><h2>The $24 Billion Revolution</h2><p class=\"lead-paragraph\">RWA tokenization is creating new financial markets.</p></div>`,
    date: '2026-02-28',
    readTime: '12 min read',
    category: 'Blockchain & DeFi',
    author: 'Mussawar Hayat',
    keywords: ['RWA', 'tokenization']
  },
  'modular-blockchains-l2-developer-guide': {
    title: 'Modular Blockchains & L2s: Dev Guide',
    excerpt: 'The monolithic blockchain era is over. Modular architecture is how the next billion users get on-chain.',
    content: `<div class=\"intro-section\"><h2>The Modular Revolution</h2><p class=\"lead-paragraph\">Modular architecture is how the next billion users get on-chain.</p></div>`,
    date: '2026-02-20',
    readTime: '13 min read',
    category: 'Blockchain',
    author: 'Mussawar Hayat',
    keywords: ['modular blockchains', 'L2']
  },
  'deploying-multi-site-nextjs-vps-nginx': {
    title: 'Multi-Site Next.js on VPS with Nginx',
    excerpt: 'Running multiple Next.js apps on one VPS with Nginx reverse proxy, PM2, and SSL.',
    content: `<div class=\"intro-section\"><h2>One VPS, Multiple Next.js Apps</h2><p class=\"lead-paragraph\">The exact production architecture for cost-efficient multi-site hosting.</p></div>`,
    date: '2026-05-15',
    readTime: '9 min read',
    category: 'DevOps',
    author: 'Mussawar Hayat',
    keywords: ['VPS', 'Nginx', 'PM2']
  },
  'building-bitcoin-ordinals-marketplace': {
    title: 'Bitcoin Ordinals Marketplace Architecture',
    excerpt: 'How I built Ordwin — a Bitcoin NFT marketplace for Ordinal inscriptions.',
    content: `<div class=\"intro-section\"><h2>Building Ordwin</h2><p class=\"lead-paragraph\">The core challenge was indexing inscriptions at chain speed.</p></div>`,
    date: '2026-05-10',
    readTime: '11 min read',
    category: 'Web3',
    author: 'Mussawar Hayat',
    keywords: ['Bitcoin Ordinals', 'NFT marketplace']
  },
  'metamask-vs-walletconnect-dapp': {
    title: 'MetaMask vs WalletConnect for DApps',
    excerpt: 'Both work. Both have edge cases. Here is what I learned integrating multiple wallets.',
    content: `<div class=\"intro-section\"><h2>Wallet Integration</h2><p class=\"lead-paragraph\">Trade-offs around UX, mobile support, and session management.</p></div>`,
    date: '2026-05-05',
    readTime: '8 min read',
    category: 'Web3',
    author: 'Mussawar Hayat',
    keywords: ['MetaMask', 'WalletConnect']
  },
  'spf-dkim-dmarc-multi-domain-vps': {
    title: 'SPF, DKIM & DMARC for Multi-Domain VPS',
    excerpt: 'Email deliverability is silent until it breaks. The exact DNS setup for multiple domains.',
    content: `<div class=\"intro-section\"><h2>Email Deliverability</h2><p class=\"lead-paragraph\">The exact DNS and server setup so transactional email lands in the inbox.</p></div>`,
    date: '2026-04-28',
    readTime: '7 min read',
    category: 'DevOps',
    author: 'Mussawar Hayat',
    keywords: ['SPF', 'DKIM', 'DMARC']
  },
  'gdpr-compliant-web-apps-checklist': {
    title: 'GDPR-Compliant Web Apps Checklist',
    excerpt: 'Cookie consent, secure data storage, data subject rights — a practical checklist for full-stack developers.',
    content: `<div class=\"intro-section\"><h2>GDPR for Developers</h2><p class=\"lead-paragraph\">A practical engineering checklist covering consent, data minimization, and technical safeguards.</p></div>`,
    date: '2026-04-20',
    readTime: '10 min read',
    category: 'Full-Stack',
    author: 'Mussawar Hayat',
    keywords: ['GDPR', 'privacy']
  },
  'multi-chain-dex-interface-performance': {
    title: 'Multi-Chain DEX Interface Performance',
    excerpt: 'Real-time price feeds, chart rendering, and websocket management without melting the browser.',
    content: `<div class=\"intro-section\"><h2>Demotrionn DEX</h2><p class=\"lead-paragraph\">How I built a high-performance multi-chain trading interface.</p></div>`,
    date: '2026-04-15',
    readTime: '12 min read',
    category: 'Web3',
    author: 'Mussawar Hayat',
    keywords: ['DEX', 'performance']
  },
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts[slug]
  if (!post) return { title: 'Blog Post Not Found' }
  const pageUrl = `https://mussawarhayat.site/blog/${slug}`
  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords.join(', '),
    authors: [{ name: post.author }],
    alternates: { canonical: pageUrl },
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: pageUrl,
      type: 'article',
      siteName: 'Mussawar Hayat',
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: 'https://mussawarhayat.site/my-pic.jpeg', width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: ['https://mussawarhayat.site/my-pic.jpeg'],
    },
  }
}

function BlogPostingSchema({ post, slug }: { post: BlogPost; slug: string }) {
  const pageUrl = `https://mussawarhayat.site/blog/${slug}`
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: 'https://mussawarhayat.site/my-pic.jpeg',
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Person', name: post.author, url: 'https://mussawarhayat.site' },
    publisher: {
      '@type': 'Organization',
      name: 'Mussawar Hayat',
      logo: { '@type': 'ImageObject', url: 'https://mussawarhayat.site/my-pic.jpeg', width: 192, height: 192 },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
    keywords: post.keywords.join(', '),
    articleSection: post.category,
    inLanguage: 'en-US',
  }
  return (
    <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  )
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = blogPosts[slug]
  if (!post) notFound()
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: post.title, url: `/blog/${slug}` },
  ]
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <BlogPostingSchema post={post} slug={slug} />
      <div className="min-h-screen bg-[#060B16] font-orbitron">
        <Header />
        <main role="main" id="main-content" className="pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#39FF14]/10 border border-[#39FF14]/20 mb-8">
                <span className="w-2 h-2 bg-[#39FF14] rounded-full animate-pulse" />
                <span className="text-xs font-orbitron text-[#39FF14] tracking-widest uppercase">{post.category}</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter uppercase leading-none mb-8">{post.title}</h1>
              <div className="flex flex-wrap items-center justify-center gap-4 mb-16 text-[11px] font-orbitron uppercase tracking-[0.2em] text-white/50">
                <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                <span>{post.readTime}</span>
                <span>{post.author}</span>
              </div>
            </div>
            <div>
              <div className="relative mb-16 p-8 bg-[#0A1221] border border-[#39FF14]/20">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#39FF14] to-[#39FF14]/30" />
                <p className="text-xl text-white/80 font-light leading-relaxed pl-8 italic">{post.excerpt}</p>
              </div>
              <article
                className="prose prose-xl max-w-none prose-invert prose-headings:font-orbitron prose-h2:text-[#39FF14] prose-p:text-white/80 prose-a:text-[#39FF14] prose-code:text-[#39FF14]"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              <div className="mt-24 p-8 md:p-12 bg-[#0A1221] border border-[#39FF14]/20 text-center">
                <h3 className="text-2xl font-bold text-white font-orbitron mb-4">Ready to start your project?</h3>
                <p className="text-white/80 mb-8 max-w-2xl mx-auto">Let us discuss how we can transform your digital presence with cutting-edge solutions.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-[#39FF14] text-[#060B16] font-bold font-orbitron text-sm uppercase tracking-[0.2em] rounded-xl">Get Started</Link>
                  <Link href="/services" className="inline-flex items-center gap-3 px-8 py-4 border border-white/10 text-white/70 font-orbitron text-sm uppercase tracking-[0.2em] rounded-xl">View Services</Link>
                </div>
              </div>
            </div>
            <div className="border-t border-white/10 mt-24 pt-12">
              <Link href="/blog" className="text-sm font-orbitron uppercase tracking-[0.2em] text-white/60 hover:text-white">Back to Blog</Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
