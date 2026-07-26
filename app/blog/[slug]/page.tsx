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
  'nextjs-16-saas-tutorial-prisma-typescript-2026': {
    title: 'Next.js 16 + Prisma SaaS Tutorial (2026) | Full-Stack Guide',
    excerpt: 'Step-by-step guide to building a scalable SaaS with Next.js 16 App Router, Prisma, Auth.js, and Tailwind CSS. Includes Server Actions, production patterns, and deployment.',
    content: `
      <div class="intro-section">
        <h2>Why This Stack Wins in 2026</h2>
        <p class="lead-paragraph">Next.js 16 with the App Router, TypeScript, Prisma, and Tailwind CSS has become the default choice for serious full-stack SaaS products. It delivers end-to-end type safety, excellent performance, Server Components by default, and a developer experience that scales cleanly from MVP to production.</p>
        
        <div class="key-highlights">
          <h3>What You Will Build</h3>
          <ul>
            <li><strong>Next.js 16 App Router</strong> — Server Components, nested layouts, streaming</li>
            <li><strong>Prisma + PostgreSQL</strong> — Fully type-safe database layer</li>
            <li><strong>Auth.js</strong> — Flexible, production-ready authentication</li>
            <li><strong>Tailwind CSS + shadcn/ui</strong> — Fast and consistent UI</li>
            <li><strong>Server Actions</strong> — Mutations without boilerplate API routes</li>
          </ul>
        </div>
      </div>

      <div class="technical-section">
        <h2>1. Project Setup</h2>
        <p>Start with the official <code>create-next-app</code> and enable TypeScript, Tailwind, ESLint, and the App Router:</p>

        <div style="background:#0A1221;border:1px solid rgba(57,255,20,0.25);border-radius:12px;overflow:hidden;margin:2rem 0;box-shadow:0 8px 32px rgba(0,0,0,0.4);">
          <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 18px;background:rgba(0,0,0,0.45);border-bottom:1px solid rgba(255,255,255,0.08);">
            <span style="font-size:12px;color:#39FF14;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;letter-spacing:0.05em;">bash</span>
            <span style="font-size:11px;color:rgba(255,255,255,0.35);font-family:ui-monospace,monospace;">terminal</span>
          </div>
          <pre style="margin:0;padding:1.25rem 1.5rem;background:transparent;border:none;border-radius:0;"><code style="font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;font-size:14px;line-height:1.7;color:#e2e8f0;">npx create-next-app@latest my-saas-app \\
  --typescript \\
  --tailwind \\
  --eslint \\
  --app \\
  --yes

cd my-saas-app

npm install @prisma/client prisma @auth/prisma-adapter next-auth@beta
npx prisma init --db postgresql</code></pre>
        </div>

        <p>This gives you a clean foundation with Turbopack support and modern defaults out of the box.</p>
      </div>

      <div class="onpage-section">
        <h2>2. Prisma Schema & Singleton Client</h2>
        <p>Always use a singleton Prisma Client. Creating a new instance on every request is the most common cause of connection exhaustion on serverless platforms.</p>

        <div style="background:#0A1221;border:1px solid rgba(57,255,20,0.25);border-radius:12px;overflow:hidden;margin:2rem 0;box-shadow:0 8px 32px rgba(0,0,0,0.4);">
          <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 18px;background:rgba(0,0,0,0.45);border-bottom:1px solid rgba(255,255,255,0.08);">
            <span style="font-size:12px;color:#39FF14;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;letter-spacing:0.05em;">TypeScript</span>
            <span style="font-size:11px;color:rgba(255,255,255,0.35);font-family:ui-monospace,monospace;">lib/prisma.ts</span>
          </div>
          <pre style="margin:0;padding:1.25rem 1.5rem;background:transparent;border:none;border-radius:0;"><code style="font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;font-size:14px;line-height:1.7;color:#e2e8f0;">import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log:
      process.env.NODE_ENV === 'development'
        ? ['query', 'error', 'warn']
        : ['error'],
  })

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma
}</code></pre>
        </div>

        <blockquote>
          Keep a single Prisma Client instance across the entire application lifecycle. This pattern is essential for Vercel, Railway, and other serverless environments.
        </blockquote>
      </div>

      <div class="content-strategy-section">
        <h2>3. Authentication with Auth.js</h2>
        <p>Auth.js pairs cleanly with Prisma. Use the official Prisma adapter so users, sessions, and accounts live in your database. Protect routes with middleware and fetch the session inside Server Components using the <code>auth()</code> helper.</p>
      </div>

      <div class="local-seo-section">
        <h2>4. Server Actions for Mutations</h2>
        <p>Prefer Server Actions over API routes for most mutations. They run on the server, have direct access to Prisma, and can revalidate paths automatically.</p>

        <div style="background:#0A1221;border:1px solid rgba(57,255,20,0.25);border-radius:12px;overflow:hidden;margin:2rem 0;box-shadow:0 8px 32px rgba(0,0,0,0.4);">
          <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 18px;background:rgba(0,0,0,0.45);border-bottom:1px solid rgba(255,255,255,0.08);">
            <span style="font-size:12px;color:#39FF14;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;letter-spacing:0.05em;">TypeScript</span>
            <span style="font-size:11px;color:rgba(255,255,255,0.35);font-family:ui-monospace,monospace;">actions/project.ts</span>
          </div>
          <pre style="margin:0;padding:1.25rem 1.5rem;background:transparent;border:none;border-radius:0;"><code style="font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;font-size:14px;line-height:1.7;color:#e2e8f0;">'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'

const createProjectSchema = z.object({
  name: z.string().min(2).max(100),
})

export async function createProject(formData: FormData) {
  const raw = {
    name: formData.get('name'),
  }

  const parsed = createProjectSchema.safeParse(raw)
  if (!parsed.success) {
    return { error: 'Invalid project name' }
  }

  const project = await prisma.project.create({
    data: {
      name: parsed.data.name,
      ownerId: 'current-user-id',
    },
  })

  revalidatePath('/dashboard')
  return { success: true, project }
}</code></pre>
        </div>
      </div>

      <div class="linkbuilding-section">
        <h2>5. Performance & Best Practices</h2>
        <ul>
          <li>Default to <strong>Server Components</strong>. Only add <code>"use client"</code> when you need browser APIs or interactivity.</li>
          <li>Use <code>revalidatePath</code> and <code>revalidateTag</code> after mutations instead of full page reloads.</li>
          <li>Wrap slow data sections in <code><Suspense></code> to enable streaming.</li>
          <li>Validate all inputs with <strong>Zod</strong> before they touch the database.</li>
          <li>Never expose secrets to the client. Keep <code>DATABASE_URL</code>, auth secrets, and API keys server-only.</li>
        </ul>
      </div>

      <div class="analytics-section">
        <h2>6. Deployment</h2>
        <p>Push to GitHub and connect the repository to Vercel. Add your environment variables (<code>DATABASE_URL</code>, <code>AUTH_SECRET</code>, etc.) in the Vercel project settings. With the singleton Prisma pattern, the app works reliably in serverless environments.</p>
      </div>

      <div class="conclusion-section">
        <h2>Summary</h2>
        <p>This stack — Next.js 16 App Router + TypeScript + Prisma + Tailwind + Auth.js — gives you a production-ready foundation that is fast to build on and easy to scale. Focus on Server Components, type safety, and clean data access patterns, and you will avoid most of the technical debt that older full-stack setups create.</p>

        <div class="final-takeaway">
          <h3>Key Takeaway</h3>
          <p><em>Start with Server Components, keep Prisma as a singleton, validate with Zod, use Server Actions for mutations, and ship. Everything else is iteration.</em></p>
        </div>

        <hr>

        <div class="cta-section">
          <h3>Need help building your SaaS?</h3>
          <p>I design and build production-grade full-stack applications with this exact stack. <a href="/contact" style="color: #39FF14;">Get in touch</a> if you want to move faster.</p>
        </div>

        <div style="margin-top:4rem;padding-top:2.5rem;border-top:1px solid rgba(255,255,255,0.1);">
          <h3 style="margin-bottom:1.75rem;">Related Posts</h3>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1.25rem;">

            <a href="/blog/deploying-multi-site-nextjs-vps-nginx" style="display:block;text-decoration:none;background:#0A1221;border:1px solid rgba(57,255,20,0.2);border-radius:12px;padding:1.5rem;transition:border-color 0.3s ease;">
              <span style="display:inline-block;font-size:11px;color:#39FF14;background:rgba(57,255,20,0.1);padding:4px 10px;border-radius:6px;margin-bottom:12px;letter-spacing:0.05em;">DevOps</span>
              <div style="font-size:16px;font-weight:600;color:#ffffff;line-height:1.4;margin-bottom:8px;">Deploying a Multi-Site Next.js App on a Single VPS with Nginx</div>
              <div style="font-size:13px;color:rgba(255,255,255,0.5);line-height:1.5;">Nginx reverse proxy, PM2, and SSL — the exact production setup.</div>
              <div style="font-size:12px;color:rgba(255,255,255,0.35);margin-top:12px;">9 min read</div>
            </a>

            <a href="/blog/gdpr-compliant-web-apps-checklist" style="display:block;text-decoration:none;background:#0A1221;border:1px solid rgba(57,255,20,0.2);border-radius:12px;padding:1.5rem;transition:border-color 0.3s ease;">
              <span style="display:inline-block;font-size:11px;color:#39FF14;background:rgba(57,255,20,0.1);padding:4px 10px;border-radius:6px;margin-bottom:12px;letter-spacing:0.05em;">Full-Stack</span>
              <div style="font-size:16px;font-weight:600;color:#ffffff;line-height:1.4;margin-bottom:8px;">Building GDPR-Compliant Web Apps: A Developer\'s Checklist</div>
              <div style="font-size:13px;color:rgba(255,255,255,0.5);line-height:1.5;">Cookie consent, data rights, and secure storage for EU clients.</div>
              <div style="font-size:12px;color:rgba(255,255,255,0.35);margin-top:12px;">10 min read</div>
            </a>

            <a href="/blog/account-abstraction-smart-wallets-guide" style="display:block;text-decoration:none;background:#0A1221;border:1px solid rgba(57,255,20,0.2);border-radius:12px;padding:1.5rem;transition:border-color 0.3s ease;">
              <span style="display:inline-block;font-size:11px;color:#39FF14;background:rgba(57,255,20,0.1);padding:4px 10px;border-radius:6px;margin-bottom:12px;letter-spacing:0.05em;">Web3</span>
              <div style="font-size:16px;font-weight:600;color:#ffffff;line-height:1.4;margin-bottom:8px;">Account Abstraction in 2026: The End of Seed Phrases</div>
              <div style="font-size:13px;color:rgba(255,255,255,0.5);line-height:1.5;">ERC-4337 and smart wallets — the biggest UX upgrade in Web3.</div>
              <div style="font-size:12px;color:rgba(255,255,255,0.35);margin-top:12px;">10 min read</div>
            </a>

          </div>
        </div>
      </div>
    `,
    date: '2026-07-26',
    readTime: '14 min read',
    category: 'Full-Stack',
    author: 'Mussawar Hayat',
    keywords: ['Next.js 16', 'SaaS tutorial', 'Prisma', 'TypeScript', 'App Router', 'Server Actions', 'Tailwind CSS', 'Auth.js', 'full-stack development', 'hire Next.js developer', 'freelance Next.js developer']
  },
  'ai-agents-blockchain-web3-2026': {
    title: 'AI Agents on Blockchain: The Biggest Web3 Trend of 2026',
    excerpt: 'Autonomous AI agents are executing smart contracts, managing DeFi portfolios, and governing DAOs without human input. Here\'s what every Web3 developer needs to know right now.',
    content: `<div class="intro-section"><h2>The AI Agent Revolution</h2><p class="lead-paragraph">AI and blockchain are converging into autonomous digital agents that can hold keys, sign transactions, and execute complex DeFi strategies. For developers this means new architecture patterns around agent wallets, permissionless execution, and on-chain verification of AI decisions.</p><h2>Core Building Blocks</h2><ul><li>Smart accounts / Account Abstraction for agent-controlled wallets</li><li>Secure key management and policy engines</li><li>Oracle and off-chain compute bridges</li><li>Audit trails and dispute resolution</li></ul><p>I build these systems end-to-end when clients need production-ready agent infrastructure. <a href="/contact" style="color:#39FF14">Hire me</a> for AI + Web3 agent projects.</p></div>`,
    date: '2026-03-10',
    readTime: '11 min read',
    category: 'Web3 & AI',
    author: 'Mussawar Hayat',
    keywords: ['AI agents', 'blockchain', 'Web3', 'DeFi agents', 'autonomous agents', 'hire Web3 developer']
  },
  'account-abstraction-smart-wallets-guide': {
    title: 'Account Abstraction in 2026: The End of Seed Phrases',
    excerpt: 'ERC-4337 and smart wallets are killing the biggest UX barrier in Web3. Here\'s a complete developer guide to building with Account Abstraction today.',
    content: `<div class="intro-section"><h2>The UX Revolution</h2><p class="lead-paragraph">Account Abstraction (ERC-4337) has matured into a production-ready solution. Users no longer need to manage seed phrases. Gas sponsorship, social recovery, session keys, and batched transactions are now standard.</p><h2>What Developers Should Implement</h2><ul><li>EntryPoint and UserOperation flow</li><li>Paymasters for gasless experiences</li><li>Session keys for dApp convenience</li><li>Recovery modules</li></ul><p>I have shipped multiple production smart-wallet integrations across EVM chains. <a href="/contact" style="color:#39FF14">Get in touch</a> if you need Account Abstraction on your dApp.</p></div>`,
    date: '2026-03-05',
    readTime: '10 min read',
    category: 'Web3 Development',
    author: 'Mussawar Hayat',
    keywords: ['Account Abstraction', 'ERC-4337', 'smart wallets', 'Web3 UX', 'gasless transactions', 'hire Solidity developer']
  },
  'real-world-asset-tokenization-rwa-guide': {
    title: 'RWA Tokenization: How Blockchain Is Eating Real-World Finance',
    excerpt: 'Real-world asset tokenization crossed $24 billion in 2025 and is accelerating fast. Here\'s the full developer and investor breakdown of the biggest infrastructure shift in Web3.',
    content: `<div class="intro-section"><h2>The $24 Billion Revolution</h2><p class="lead-paragraph">RWA tokenization is creating new financial markets for real estate, treasuries, private credit, and more. Developers need to understand compliance layers, oracle design, and legal wrappers around on-chain assets.</p><p>I help teams design and build the on-chain infrastructure for RWA platforms. <a href="/contact" style="color:#39FF14">Contact me</a> for RWA development.</p></div>`,
    date: '2026-02-28',
    readTime: '12 min read',
    category: 'Blockchain & DeFi',
    author: 'Mussawar Hayat',
    keywords: ['RWA', 'tokenization', 'real world assets', 'DeFi', 'blockchain finance', 'hire blockchain developer']
  },
  'modular-blockchains-l2-developer-guide': {
    title: 'Modular Blockchains & L2s: The Infrastructure Stack Every Web3 Dev Must Know',
    excerpt: 'The monolithic blockchain era is over. Modular architecture — separating execution, consensus, and data availability — is how the next billion users get on-chain.',
    content: `<div class="intro-section"><h2>The Modular Revolution</h2><p class="lead-paragraph">Modular architecture is how the next billion users get on-chain. Understanding Celestia, EigenLayer, OP Stack, Arbitrum Orbit, and shared sequencers is now table stakes for serious Web3 builders.</p></div>`,
    date: '2026-02-20',
    readTime: '13 min read',
    category: 'Blockchain',
    author: 'Mussawar Hayat',
    keywords: ['modular blockchains', 'L2', 'data availability', 'OP Stack', 'Celestia']
  },
  'deploying-multi-site-nextjs-vps-nginx': {
    title: 'Deploying a Multi-Site Next.js App on a Single VPS with Nginx',
    excerpt: 'Running multiple Next.js apps on one VPS with Nginx reverse proxy, PM2, and SSL — the exact setup I use for production deployments.',
    content: `<div class="intro-section"><h2>One VPS, Multiple Next.js Apps</h2><p class="lead-paragraph">The exact production architecture I use for cost-efficient multi-site hosting. Nginx as reverse proxy, PM2 for process management, Certbot for SSL, and proper domain routing.</p><p>This is the same setup I use for client projects. <a href="/contact" style="color:#39FF14">Hire me</a> for VPS and DevOps setup.</p></div>`,
    date: '2026-05-15',
    readTime: '9 min read',
    category: 'DevOps',
    author: 'Mussawar Hayat',
    keywords: ['VPS', 'Nginx', 'PM2', 'Next.js deployment', 'multi-site hosting', 'DevOps for hire']
  },
  'building-bitcoin-ordinals-marketplace': {
    title: 'Building a Bitcoin Ordinals Marketplace: Architecture Breakdown',
    excerpt: 'How I built Ordwin — a Bitcoin NFT marketplace for Ordinal inscriptions. Indexing, ownership tracking, and the real performance challenges.',
    content: `<div class="intro-section"><h2>Building Ordwin</h2><p class="lead-paragraph">The core challenge was indexing inscriptions at chain speed and keeping ownership state consistent. This post covers the architecture decisions behind a production Bitcoin Ordinals marketplace.</p></div>`,
    date: '2026-05-10',
    readTime: '11 min read',
    category: 'Web3',
    author: 'Mussawar Hayat',
    keywords: ['Bitcoin Ordinals', 'NFT marketplace', 'inscriptions', 'Bitcoin development']
  },
  'metamask-vs-walletconnect-dapp': {
    title: 'MetaMask vs WalletConnect: Choosing Wallet Integration for Your DApp',
    excerpt: 'Both work. Both have edge cases. Here\'s what I learned integrating MetaMask, WalletConnect, and Coinbase Wallet across multiple DApps.',
    content: `<div class="intro-section"><h2>Wallet Integration</h2><p class="lead-paragraph">What I learned integrating multiple wallets in production dApps. Trade-offs around UX, mobile support, session management, and error handling.</p></div>`,
    date: '2026-05-05',
    readTime: '8 min read',
    category: 'Web3',
    author: 'Mussawar Hayat',
    keywords: ['MetaMask', 'WalletConnect', 'dApp wallet integration', 'Web3 wallet']
  },
  'spf-dkim-dmarc-multi-domain-vps': {
    title: 'Setting Up SPF, DKIM, and DMARC for a Multi-Domain VPS',
    excerpt: 'Email deliverability is silent until it breaks. Here\'s the exact DNS setup I use to keep transactional email out of spam across multiple domains.',
    content: `<div class="intro-section"><h2>Email Deliverability</h2><p class="lead-paragraph">The exact DNS and server setup I use so transactional and marketing email from multiple domains lands in the inbox instead of spam.</p></div>`,
    date: '2026-04-28',
    readTime: '7 min read',
    category: 'DevOps',
    author: 'Mussawar Hayat',
    keywords: ['SPF', 'DKIM', 'DMARC', 'email deliverability', 'VPS email']
  },
  'gdpr-compliant-web-apps-checklist': {
    title: 'Building GDPR-Compliant Web Apps: A Developer\'s Checklist',
    excerpt: 'Cookie consent, secure data storage, data subject rights — a practical checklist for full-stack developers building for EU clients.',
    content: `<div class="intro-section"><h2>GDPR for Developers</h2><p class="lead-paragraph">A practical engineering checklist covering consent, data minimization, subject access requests, breach notification, and technical safeguards.</p></div>`,
    date: '2026-04-20',
    readTime: '10 min read',
    category: 'Full-Stack',
    author: 'Mussawar Hayat',
    keywords: ['GDPR', 'privacy', 'cookie consent', 'EU compliance', 'full-stack']
  },
  'multi-chain-dex-interface-performance': {
    title: 'Building a Multi-Chain DEX Interface Without Killing Performance',
    excerpt: 'Real-time price feeds, chart rendering, and websocket management — how I built Demotrionn DEX without melting the browser.',
    content: `<div class="intro-section"><h2>Demotrionn DEX</h2><p class="lead-paragraph">How I built a high-performance multi-chain trading interface. Managing dozens of websockets, efficient chart libraries, and keeping the main thread responsive under heavy data load.</p></div>`,
    date: '2026-04-15',
    readTime: '12 min read',
    category: 'Web3',
    author: 'Mussawar Hayat',
    keywords: ['DEX', 'performance', 'multi-chain', 'Web3 frontend', 'websocket']
  },
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts[slug]

  if (!post) {
    return { title: 'Blog Post Not Found' }
  }

  const pageUrl = `https://www.mussawarhayat.site/blog/${slug}`

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords.join(', '),
    authors: [{ name: post.author }],
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: pageUrl,
      type: 'article',
      siteName: 'Mussawar Hayat',
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: 'https://www.mussawarhayat.site/my-pic.jpeg',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: ['https://www.mussawarhayat.site/my-pic.jpeg'],
    },
  }
}

function BlogPostingSchema({ post, slug }: { post: BlogPost; slug: string }) {
  const pageUrl = `https://www.mussawarhayat.site/blog/${slug}`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: 'https://www.mussawarhayat.site/my-pic.jpeg',
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
      url: 'https://www.mussawarhayat.site',
    },
    publisher: {
      '@type': 'Person',
      name: 'Mussawar Hayat',
      url: 'https://www.mussawarhayat.site',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': pageUrl,
    },
    keywords: post.keywords.join(', '),
    articleSection: post.category,
    inLanguage: 'en-US',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = blogPosts[slug]

  if (!post) {
    notFound()
  }

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
                <span className="text-xs font-orbitron text-[#39FF14] tracking-widest uppercase">
                  {post.category}
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter uppercase leading-none mb-8">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center justify-center gap-y-4 gap-x-8 mb-16">
                <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 px-8 py-3 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-sm shadow-2xl shadow-black/20">
                  <div className="flex items-center gap-3 group">
                    <div className="p-1.5 rounded-md bg-white/5 border border-white/5 group-hover:border-[#39FF14]/30 transition-colors">
                      <svg className="w-3.5 h-3.5 text-[#39FF14]/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <time dateTime={post.date} className="text-[11px] font-orbitron font-medium uppercase tracking-[0.2em] text-white/50 group-hover:text-white transition-colors">
                      {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </time>
                  </div>

                  <div className="hidden md:block w-1 h-1 bg-white/10 rounded-full" />

                  <div className="flex items-center gap-3 group">
                    <div className="p-1.5 rounded-md bg-white/5 border border-white/5 group-hover:border-[#39FF14]/30 transition-colors">
                      <svg className="w-3.5 h-3.5 text-[#39FF14]/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-[11px] font-orbitron font-medium uppercase tracking-[0.2em] text-white/50 group-hover:text-white transition-colors">
                      {post.readTime}
                    </span>
                  </div>

                  <div className="hidden md:block w-1 h-1 bg-white/10 rounded-full" />

                  <div className="flex items-center gap-3 group">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-[#39FF14]/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative w-7 h-7 rounded-full bg-gradient-to-br from-[#39FF14] to-[#1a7a0a] flex items-center justify-center border border-white/10 shadow-lg">
                        <span className="text-[9px] font-black text-[#060B16] font-orbitron tracking-tighter">MH</span>
                      </div>
                    </div>
                    <span className="text-[11px] font-orbitron font-medium uppercase tracking-[0.2em] text-white/50 group-hover:text-white transition-colors">
                      {post.author}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="relative mb-16 p-8 bg-[#0A1221] border border-[#39FF14]/20">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#39FF14] to-[#39FF14]/30" />
                <p className="text-xl text-white/80 font-light leading-relaxed pl-8 italic">
                  {post.excerpt}
                </p>
              </div>

              <article
                className="prose prose-xl max-w-none prose-invert
                  prose-headings:font-orbitron prose-headings:tracking-wider prose-headings:uppercase
                  prose-h2:text-[#39FF14] prose-h2:text-4xl prose-h2:mt-20 prose-h2:mb-12 prose-h2:font-bold prose-h2:border-b prose-h2:border-b-white/10 prose-h2:pb-6 prose-h2:leading-tight
                  prose-h3:text-white prose-h3:text-3xl prose-h3:mt-16 prose-h3:mb-10 prose-h3:font-semibold prose-h3:leading-tight
                  prose-h4:text-white/90 prose-h4:text-2xl prose-h4:mt-12 prose-h4:mb-8 prose-h4:font-medium prose-h4:leading-tight
                  prose-p:text-white/80 prose-p:leading-relaxed prose-p:font-sans prose-p:text-xl prose-p:mb-8 prose-p:tracking-wide prose-p:font-light
                  prose-strong:text-white prose-strong:font-bold prose-strong:text-[#39FF14]
                  prose-em:text-white/70 prose-em:italic
                  prose-ul:text-white/80 prose-ul:space-y-6 prose-ul:mt-12 prose-ul:mb-12 prose-ul:list-disc prose-ul:pl-6
                  prose-ol:text-white/80 prose-ol:space-y-6 prose-ol:mt-12 prose-ol:mb-12
                  prose-li:text-white/80 prose-li:leading-relaxed prose-li:text-lg prose-li:marker:text-[#39FF14] prose-li:marker:font-bold
                  prose-blockquote:border-l-4 prose-blockquote:border-[#39FF14] prose-blockquote:bg-gradient-to-r prose-blockquote:from-white/8 prose-blockquote:to-transparent prose-blockquote:p-12 prose-blockquote:rounded-r-2xl prose-blockquote:my-16 prose-blockquote:shadow-xl
                  prose-blockquote:p:text-white/90 prose-blockquote:p:italic prose-blockquote:p:text-2xl prose-blockquote:p:font-light prose-blockquote:p:leading-relaxed
                  prose-code:text-[#39FF14] prose-code:bg-white/12 prose-code:px-4 prose-code:py-2 prose-code:rounded-lg prose-code:font-mono prose-code:text-sm prose-code:border prose-code:border-white/10
                  prose-pre:bg-transparent prose-pre:border-0 prose-pre:p-0 prose-pre:m-0 prose-pre:shadow-none
                  prose-hr:border-white/10 prose-hr:my-24 prose-hr:border-dashed
                  prose-a:text-[#39FF14] prose-a:no-underline prose-a:font-medium prose-a:text-lg hover:prose-a:text-white hover:prose-a:underline transition-all prose-a:font-semibold
                  [&>*]:first-child:mt-0 [&>*]:last-child:mb-0"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              <div className="mt-24 p-8 md:p-12 bg-[#0A1221] border border-[#39FF14]/20 text-center">
                <h3 className="text-2xl font-bold text-white font-orbitron mb-4">
                  Ready to start your project?
                </h3>
                <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                  Let\'s discuss how we can transform your digital presence with cutting-edge solutions.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#39FF14] hover:bg-[#39FF14]/90 text-[#060B16] font-bold font-orbitron text-sm uppercase tracking-[0.2em] rounded-xl transition-all duration-300 shadow-lg shadow-[#39FF14]/25 hover:shadow-xl hover:shadow-[#39FF14]/35"
                >
                  Get Started
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="border-t border-white/10 mt-24 pt-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <Link
                  href="/blog"
                  className="group inline-flex items-center gap-3 px-6 py-3 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/5 hover:border-[#39FF14]/30 transition-all duration-300"
                >
                  <svg className="w-5 h-5 text-white/60 group-hover:text-[#39FF14] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  <span className="text-sm font-orbitron uppercase tracking-[0.2em] text-white/60 group-hover:text-white transition-colors">
                    Back to Blog
                  </span>
                </Link>
              </div>
            </div>

          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}
