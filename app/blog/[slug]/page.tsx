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
    content: `
<div class="intro-section">
<h2>Why Your Database Keeps Timing Out Under Load</h2>
<p class="lead-paragraph">In a Next.js 16 App Router app deployed to Vercel, AWS Lambda, or any serverless platform, each concurrent function invocation can open its own Prisma Client and its own set of database connections. A traffic spike that spins up dozens of containers quickly exhausts the Postgres connection limit. Queries start failing with "too many connections" or pool timeout errors, and the app becomes unresponsive.</p>
<p>This is not a Prisma bug. It is the natural result of how serverless runtimes work. The fix is a combination of the global singleton pattern (for development and long-running processes) and an external connection pooler such as Prisma Accelerate or PgBouncer (for production serverless traffic).</p>
<div class="key-highlights"><h3>What You Will Learn</h3>
<ul>
<li>Why the classic singleton alone is not enough on serverless</li>
<li>The exact global Prisma Client pattern for Next.js 16</li>
<li>How to configure Prisma Accelerate for connection pooling and optional caching</li>
<li>How to set up PgBouncer as a self-hosted alternative</li>
<li>Production checklist for Server Actions, Route Handlers, and Server Components</li>
<li>Common mistakes that still appear in production codebases</li>
</ul></div>
</div>

<div class="technical-section">
<h2>1. The Serverless Connection Problem</h2>
<p>Postgres (and most relational databases) hard-limits the number of concurrent connections. Each connection consumes memory on the database server. A typical small Postgres instance allows 100 connections; many managed free tiers allow far fewer.</p>
<p>In a traditional long-running Node process you create one PrismaClient, configure a modest pool, and reuse it. In serverless:</p>
<ul>
<li>Every cold start can create a new PrismaClient instance.</li>
<li>Each instance opens its own pool (default size is often 5–10 connections depending on the driver).</li>
<li>Paused (warm but idle) containers keep their connections open, blocking capacity for new invocations.</li>
<li>Under load the total open connections equals concurrent functions times pool size. That number grows faster than the database can accept.</li>
</ul>
<p>Official Prisma documentation explicitly recommends an external connection pooler for serverless workloads.</p>
</div>

<div class="onpage-section">
<h2>2. The Global Singleton Pattern (Required Baseline)</h2>
<p>Even when you later add Accelerate or PgBouncer, you still need a single shared PrismaClient per process. Without it, hot reloads in development and repeated imports in production create extra clients.</p>
<p>Create <code>lib/prisma.ts</code>:</p>
<pre><code>import { PrismaClient } from '@prisma/client'
import { withAccelerate } from '@prisma/extension-accelerate'

const globalForPrisma = globalThis as unknown as {
  prisma: ReturnType&lt;typeof createPrismaClient&gt; | undefined
}

function createPrismaClient() {
  const client = new PrismaClient({
    log: process.env.NODE_ENV === 'development'
      ? ['query', 'error', 'warn']
      : ['error'],
  })
  if (process.env.DATABASE_URL?.startsWith('prisma://')) {
    return client.$extends(withAccelerate())
  }
  return client
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient()

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma
}</code></pre>
<p>Import this module from Server Components, Server Actions, and Route Handlers. Never instantiate <code>new PrismaClient()</code> inside a request handler or action. Do not call <code>$disconnect()</code> after every request — in warm serverless containers the connection is reused.</p>
</div>

<div class="content-strategy-section">
<h2>3. Prisma Accelerate: Managed Pooling + Optional Cache</h2>
<p>Prisma Accelerate sits between your application and the database. It maintains a connection pool in the region you choose and optionally caches query results globally. Your serverless functions talk to Accelerate over a single <code>prisma://</code> URL; Accelerate talks to Postgres with a controlled number of real connections.</p>
<h3>3.1 Environment variables</h3>
<pre><code># Used at runtime by Prisma Client (Accelerate)
DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=YOUR_API_KEY"

# Used by Prisma CLI (migrate, db push, introspect)
DIRECT_DATABASE_URL="postgresql://user:password@host:5432/dbname?schema=public"</code></pre>
<h3>3.2 prisma.config.ts</h3>
<p>Point the CLI at the direct URL so migrations never try to run through the Accelerate proxy:</p>
<pre><code>import "dotenv/config"
import { defineConfig, env } from "prisma/config"

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    url: env("DIRECT_DATABASE_URL"),
  },
})</code></pre>
<h3>3.3 Generate client for serverless</h3>
<pre><code>npx prisma generate --no-engine</code></pre>
<p>The <code>--no-engine</code> flag keeps the bundle small. For long-running servers (VPS, Docker, EC2) a normal <code>prisma generate</code> is fine.</p>
<h3>3.4 Optional per-query caching</h3>
<pre><code>const posts = await prisma.post.findMany({
  where: { published: true },
  cacheStrategy: {
    ttl: 60,
    swr: 30,
    tags: ['published-posts'],
  },
})</code></pre>
<p>Invalidate when data changes inside a Server Action:</p>
<pre><code>await prisma.post.update({ where: { id }, data: { title } })
await prisma.$accelerate.invalidate({ tags: ['published-posts'] })</code></pre>
</div>

<div class="local-seo-section">
<h2>4. Self-Hosted Alternative: PgBouncer</h2>
<p>If you prefer not to use a managed service, run PgBouncer in front of Postgres (or use a managed pooler from Neon, Supabase, Railway, etc.).</p>
<pre><code>DATABASE_URL="postgresql://user:password@pgbouncer-host:6432/dbname?pgbouncer=true"
DIRECT_DATABASE_URL="postgresql://user:password@db-host:5432/dbname"</code></pre>
<p>Keep the same singleton module. Prisma will open fewer real connections because PgBouncer multiplexes them. Use transaction mode for most web workloads.</p>
</div>

<div class="linkbuilding-section">
<h2>5. Using Prisma Safely in Server Actions</h2>
<p>Server Actions are reachable via POST. Always authenticate and authorize inside the action before touching the database.</p>
<pre><code>'use server'

import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'

const createPostSchema = z.object({
  title: z.string().min(1).max(200),
  body: z.string().min(1),
})

export async function createPost(formData: FormData) {
  const session = await auth()
  if (!session?.user?.id) {
    throw new Error('Unauthorized')
  }

  const parsed = createPostSchema.safeParse({
    title: formData.get('title'),
    body: formData.get('body'),
  })
  if (!parsed.success) {
    return { error: 'Invalid input' }
  }

  const post = await prisma.post.create({
    data: {
      title: parsed.data.title,
      body: parsed.data.body,
      authorId: session.user.id,
    },
  })

  revalidatePath('/dashboard')
  return { id: post.id }
}</code></pre>
<p>In Server Components simply import the shared client and query. Because the component runs on the server, secrets and the Prisma client never reach the browser.</p>
</div>

<div class="analytics-section">
<h2>6. Production Checklist</h2>
<ul>
<li>One shared PrismaClient module; never <code>new PrismaClient()</code> inside handlers.</li>
<li><code>DATABASE_URL</code> points at the pooler (Accelerate or PgBouncer); <code>DIRECT_DATABASE_URL</code> points at the database for CLI.</li>
<li>Serverless builds use <code>prisma generate --no-engine</code> when using Accelerate.</li>
<li>Authenticate and validate inside every Server Action before any write.</li>
<li>Avoid <code>Promise.all</code> of many independent Server Actions from the client; Next.js dispatches them sequentially per client.</li>
<li>Monitor connection counts on the database side after deploying.</li>
<li>Never pass the Prisma client or raw database credentials into Client Components.</li>
</ul>
</div>

<div class="conclusion-section">
<h2>7. Common Mistakes</h2>
<ul>
<li>Creating a new PrismaClient on every request "to be safe" — this multiplies connections.</li>
<li>Calling <code>$disconnect()</code> at the end of every Server Action — forces reconnects and adds latency.</li>
<li>Running migrations against the Accelerate URL — migrations need the direct connection.</li>
<li>Importing Prisma into a Client Component or a file marked <code>'use client'</code>.</li>
<li>Relying only on the singleton without a pooler on high-concurrency serverless deployments.</li>
<li>Setting an extremely large connection pool size per function — that defeats the purpose of pooling.</li>
</ul>

<h2>Summary</h2>
<p>Connection exhaustion is a capacity problem, not a syntax problem. Use a global singleton so each process opens only one client, then put a real connection pooler (Prisma Accelerate or PgBouncer) in front of Postgres so hundreds of serverless invocations share a small, controlled set of database connections. Add authentication and validation inside every Server Action, keep Prisma on the server, and your Next.js 16 app will stay stable under traffic spikes.</p>

<div class="final-takeaway">
<h3>Key Takeaway</h3>
<p><em>Singleton + external pooler is the production baseline for Prisma on Next.js serverless. Everything else (caching, query tuning, concurrency limits) builds on that foundation.</em></p>
</div>

<hr>

<div class="cta-section">
<h3>Need a production data-layer review?</h3>
<p>I help teams harden Next.js + Prisma architectures for serverless and VPS deployments — connection strategy, Server Action security, and deploy pipelines. <a href="/contact" style="color: #39FF14;">Get in touch</a> if you want a focused pass on your stack.</p>
</div>

<div style="margin-top:4rem;padding-top:2.5rem;border-top:1px solid rgba(255,255,255,0.1);">
<h3 style="margin-bottom:1.75rem;">Related Posts</h3>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1.25rem;">
<a href="/blog/nextjs-16-saas-tutorial-prisma-typescript-2026" style="display:block;text-decoration:none;background:#0A1221;border:1px solid rgba(57,255,20,0.2);border-radius:12px;padding:1.5rem;">
<span style="display:inline-block;font-size:11px;color:#39FF14;background:rgba(57,255,20,0.1);padding:4px 10px;border-radius:6px;margin-bottom:12px;">Full-Stack</span>
<div style="font-size:16px;font-weight:600;color:#ffffff;margin-bottom:8px;">Next.js 16 + Prisma SaaS Tutorial</div>
<div style="font-size:13px;color:rgba(255,255,255,0.5);">App Router, Prisma, Auth.js, and Server Actions.</div>
</a>
<a href="/blog/nextjs-16-stop-overusing-use-client-server-components" style="display:block;text-decoration:none;background:#0A1221;border:1px solid rgba(57,255,20,0.2);border-radius:12px;padding:1.5rem;">
<span style="display:inline-block;font-size:11px;color:#39FF14;background:rgba(57,255,20,0.1);padding:4px 10px;border-radius:6px;margin-bottom:12px;">Full-Stack</span>
<div style="font-size:16px;font-weight:600;color:#ffffff;margin-bottom:8px;">Stop Overusing 'use client' in Next.js 16</div>
<div style="font-size:13px;color:rgba(255,255,255,0.5);">Server Components and minimal client boundaries.</div>
</a>
<a href="/blog/nextjs-july-2026-security-patch-server-actions" style="display:block;text-decoration:none;background:#0A1221;border:1px solid rgba(57,255,20,0.2);border-radius:12px;padding:1.5rem;">
<span style="display:inline-block;font-size:11px;color:#39FF14;background:rgba(57,255,20,0.1);padding:4px 10px;border-radius:6px;margin-bottom:12px;">Security</span>
<div style="font-size:16px;font-weight:600;color:#ffffff;margin-bottom:8px;">Next.js July 2026 Security Patch</div>
<div style="font-size:13px;color:rgba(255,255,255,0.5);">Server Action hardening and official patches.</div>
</a>
</div>
</div>
</div>
    `,
    date: '2026-07-27',
    readTime: '12 min read',
    category: 'Full-Stack',
    author: 'Mussawar Hayat',
    keywords: ['Prisma', 'Next.js 16', 'connection pooling', 'Prisma Accelerate', 'PgBouncer', 'serverless', 'Server Actions', 'Postgres', 'hire Next.js developer']
  },
  'nextjs-16-stop-overusing-use-client-server-components': {
    title: "Stop Overusing 'use client' in Next.js 16",
    excerpt: 'The most common App Router mistake is marking entire trees with use client. Learn the production patterns for Server Components, children slots, and minimal client boundaries that keep your bundles small and your data secure.',
    content: `<div class="intro-section"><h2>The Default Is Already Correct</h2><p class="lead-paragraph">In Next.js 16 every layout and page in the app directory is a Server Component by default. Treat 'use client' as a precision tool, not a default. Keep Server Components high and push Client Components to the leaves.</p></div>`,
    date: '2026-07-26',
    readTime: '13 min read',
    category: 'Full-Stack',
    author: 'Mussawar Hayat',
    keywords: ['Next.js 16', 'use client', 'Server Components', 'App Router']
  },
  'nextjs-july-2026-security-patch-server-actions': {
    title: 'Next.js July 2026 Security Patch',
    excerpt: 'Complete guide to the July 2026 Next.js security release (CVE-2026-64641 and related issues).',
    content: `<div class="intro-section"><h2>Why This Matters Right Now</h2><p class="lead-paragraph">On 20 July 2026 Next.js published a coordinated security release. Patch first, then harden every Server Action.</p></div>`,
    date: '2026-07-26',
    readTime: '12 min read',
    category: 'Security',
    author: 'Mussawar Hayat',
    keywords: ['Next.js security', 'Server Actions security', 'CVE-2026-64641']
  },
  'nextjs-16-saas-tutorial-prisma-typescript-2026': {
    title: 'Next.js 16 + Prisma SaaS Tutorial',
    excerpt: 'Step-by-step guide to building a scalable SaaS with Next.js 16 App Router, Prisma, Auth.js, and Tailwind CSS.',
    content: `<div class="intro-section"><h2>Why This Stack Wins in 2026</h2><p class="lead-paragraph">Next.js 16 with the App Router, TypeScript, Prisma, and Tailwind CSS has become the default choice for serious full-stack SaaS products.</p></div>`,
    date: '2026-07-26',
    readTime: '14 min read',
    category: 'Full-Stack',
    author: 'Mussawar Hayat',
    keywords: ['Next.js 16', 'SaaS tutorial', 'Prisma']
  },
  'ai-agents-blockchain-web3-2026': {
    title: 'AI Agents on Blockchain: Web3 2026',
    excerpt: 'Autonomous AI agents are executing smart contracts, managing DeFi portfolios, and governing DAOs without human input.',
    content: `<div class="intro-section"><h2>The AI Agent Revolution</h2><p class="lead-paragraph">AI and blockchain are converging into autonomous digital agents.</p></div>`,
    date: '2026-03-10',
    readTime: '11 min read',
    category: 'Web3 & AI',
    author: 'Mussawar Hayat',
    keywords: ['AI agents', 'blockchain', 'Web3']
  },
  'account-abstraction-smart-wallets-guide': {
    title: 'Account Abstraction 2026: No More Seeds',
    excerpt: 'ERC-4337 and smart wallets are killing the biggest UX barrier in Web3.',
    content: `<div class="intro-section"><h2>The UX Revolution</h2><p class="lead-paragraph">Account Abstraction has matured into a production-ready solution.</p></div>`,
    date: '2026-03-05',
    readTime: '10 min read',
    category: 'Web3 Development',
    author: 'Mussawar Hayat',
    keywords: ['Account Abstraction', 'ERC-4337']
  },
  'real-world-asset-tokenization-rwa-guide': {
    title: 'RWA Tokenization: Blockchain Meets Finance',
    excerpt: 'Real-world asset tokenization crossed $24 billion in 2025 and is accelerating fast.',
    content: `<div class="intro-section"><h2>The $24 Billion Revolution</h2><p class="lead-paragraph">RWA tokenization is creating new financial markets.</p></div>`,
    date: '2026-02-28',
    readTime: '12 min read',
    category: 'Blockchain & DeFi',
    author: 'Mussawar Hayat',
    keywords: ['RWA', 'tokenization']
  },
  'modular-blockchains-l2-developer-guide': {
    title: 'Modular Blockchains & L2s: Dev Guide',
    excerpt: 'The monolithic blockchain era is over. Modular architecture is how the next billion users get on-chain.',
    content: `<div class="intro-section"><h2>The Modular Revolution</h2><p class="lead-paragraph">Modular architecture is how the next billion users get on-chain.</p></div>`,
    date: '2026-02-20',
    readTime: '13 min read',
    category: 'Blockchain',
    author: 'Mussawar Hayat',
    keywords: ['modular blockchains', 'L2']
  },
  'deploying-multi-site-nextjs-vps-nginx': {
    title: 'Multi-Site Next.js on VPS with Nginx',
    excerpt: 'Running multiple Next.js apps on one VPS with Nginx reverse proxy, PM2, and SSL.',
    content: `<div class="intro-section"><h2>One VPS, Multiple Next.js Apps</h2><p class="lead-paragraph">The exact production architecture for cost-efficient multi-site hosting.</p></div>`,
    date: '2026-05-15',
    readTime: '9 min read',
    category: 'DevOps',
    author: 'Mussawar Hayat',
    keywords: ['VPS', 'Nginx', 'PM2']
  },
  'building-bitcoin-ordinals-marketplace': {
    title: 'Bitcoin Ordinals Marketplace Architecture',
    excerpt: 'How I built Ordwin — a Bitcoin NFT marketplace for Ordinal inscriptions.',
    content: `<div class="intro-section"><h2>Building Ordwin</h2><p class="lead-paragraph">The core challenge was indexing inscriptions at chain speed.</p></div>`,
    date: '2026-05-10',
    readTime: '11 min read',
    category: 'Web3',
    author: 'Mussawar Hayat',
    keywords: ['Bitcoin Ordinals', 'NFT marketplace']
  },
  'metamask-vs-walletconnect-dapp': {
    title: 'MetaMask vs WalletConnect for DApps',
    excerpt: 'Both work. Both have edge cases. Here is what I learned integrating multiple wallets.',
    content: `<div class="intro-section"><h2>Wallet Integration</h2><p class="lead-paragraph">Trade-offs around UX, mobile support, and session management.</p></div>`,
    date: '2026-05-05',
    readTime: '8 min read',
    category: 'Web3',
    author: 'Mussawar Hayat',
    keywords: ['MetaMask', 'WalletConnect']
  },
  'spf-dkim-dmarc-multi-domain-vps': {
    title: 'SPF, DKIM & DMARC for Multi-Domain VPS',
    excerpt: 'Email deliverability is silent until it breaks. The exact DNS setup for multiple domains.',
    content: `<div class="intro-section"><h2>Email Deliverability</h2><p class="lead-paragraph">The exact DNS and server setup so transactional email lands in the inbox.</p></div>`,
    date: '2026-04-28',
    readTime: '7 min read',
    category: 'DevOps',
    author: 'Mussawar Hayat',
    keywords: ['SPF', 'DKIM', 'DMARC']
  },
  'gdpr-compliant-web-apps-checklist': {
    title: 'GDPR-Compliant Web Apps Checklist',
    excerpt: 'Cookie consent, secure data storage, data subject rights — a practical checklist for full-stack developers.',
    content: `<div class="intro-section"><h2>GDPR for Developers</h2><p class="lead-paragraph">A practical engineering checklist covering consent, data minimization, and technical safeguards.</p></div>`,
    date: '2026-04-20',
    readTime: '10 min read',
    category: 'Full-Stack',
    author: 'Mussawar Hayat',
    keywords: ['GDPR', 'privacy']
  },
  'multi-chain-dex-interface-performance': {
    title: 'Multi-Chain DEX Interface Performance',
    excerpt: 'Real-time price feeds, chart rendering, and websocket management without melting the browser.',
    content: `<div class="intro-section"><h2>Demotrionn DEX</h2><p class="lead-paragraph">How I built a high-performance multi-chain trading interface.</p></div>`,
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
