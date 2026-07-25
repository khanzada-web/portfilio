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
    title: 'Building a Production-Ready Full-Stack SaaS with Next.js 16, TypeScript, Prisma & Tailwind (2026)',
    excerpt: 'Complete step-by-step guide to building a scalable SaaS using Next.js 16 App Router, Prisma Postgres, Auth.js, and Tailwind CSS. Production patterns, Server Actions, and deployment.',
    content: `
      <div class="intro-section">
        <h2>Why This Stack Wins in 2026</h2>
        <p class="lead-paragraph">Next.js 16 with the App Router, TypeScript, Prisma, and Tailwind CSS has become the default choice for serious full-stack SaaS products. It delivers end-to-end type safety, excellent performance, Server Components by default, and a developer experience that scales cleanly from MVP to production.</p>
        
        <div class="key-highlights">
          <h4>What You Will Build</h4>
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

        <pre><code class="language-bash">npx create-next-app@latest my-saas-app \\
  --typescript \\
  --tailwind \\
  --eslint \\
  --app \\
  --yes

cd my-saas-app

npm install @prisma/client prisma @auth/prisma-adapter next-auth@beta
npx prisma init --db postgresql</code></pre>

        <p>This gives you a clean foundation with Turbopack support and modern defaults out of the box.</p>
      </div>

      <div class="onpage-section">
        <h3>2. Prisma Schema & Singleton Client</h3>
        <p>Always use a singleton Prisma Client. Creating a new instance on every request is the most common cause of connection exhaustion on serverless platforms.</p>

        <pre><code class="language-typescript">// lib/prisma.ts
import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  })

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma
}</code></pre>

        <blockquote>
          Keep a single Prisma Client instance across the entire application lifecycle. This pattern is essential for Vercel, Railway, and other serverless environments.
        </blockquote>
      </div>

      <div class="content-strategy-section">
        <h2>3. Authentication with Auth.js</h2>
        <p>Auth.js pairs cleanly with Prisma. Use the official Prisma adapter so users, sessions, and accounts live in your database. Protect routes with middleware and fetch the session inside Server Components using the <code>auth()</code> helper.</p>
      </div>

      <div class="local-seo-section">
        <h3>4. Server Actions for Mutations</h3>
        <p>Prefer Server Actions over API routes for most mutations. They run on the server, have direct access to Prisma, and can revalidate paths automatically.</p>

        <pre><code class="language-typescript">// actions/project.ts
'use server'

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
      ownerId: 'current-user-id', // replace with real session user id
    },
  })

  revalidatePath('/dashboard')
  return { success: true, project }
}</code></pre>
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
          <h4>Key Takeaway</h4>
          <p><em>Start with Server Components, keep Prisma as a singleton, validate with Zod, use Server Actions for mutations, and ship. Everything else is iteration.</em></p>
        </div>

        <hr>

        <div class="cta-section">
          <h4>Need help building your SaaS?</h4>
          <p>I design and build production-grade full-stack applications with this exact stack. <a href="/contact" style="color: #39FF14;">Get in touch</a> if you want to move faster.</p>
        </div>
      </div>
    `,
    date: '2026-07-26',
    readTime: '14 min read',
    category: 'Full-Stack',
    author: 'Mussawar Hayat',
    keywords: ['Next.js 16', 'SaaS tutorial', 'Prisma', 'TypeScript', 'App Router', 'Server Actions', 'Tailwind CSS', 'Auth.js', 'full-stack development']
  },
  'strait-of-hormuz-standoff-2026': {
    title: 'The Strait of Hormuz Standoff: Global Markets Braced as Naval Blockade Tightens',
    excerpt: 'Tensions in the Middle East reached a fever pitch as U.S. naval forces officially established a "security perimeter" around key Iranian shipping lanes. What the Pentagon describes as a move to ensure maritime safety, Tehran has branded as an act of "blatant piracy."',
    content: `
      <div class="intro-section">
        <h2>Global Markets on Edge as Naval Blockade Intensifies</h2>
        <p class="lead-paragraph">The Strait of Hormuz, one of the world's most critical maritime chokepoints, has become the center of escalating geopolitical tensions. U.S. naval forces have established what they call a "security perimeter" around key Iranian shipping lanes, a move that has sent shockwaves through global markets and diplomatic circles.</p>
        
        <div class="key-highlights">
          <h4>Immediate Market Impact:</h4>
          <ul>
            <li><strong>Oil Prices Surge</strong> - 8% spike in pre-market trading</li>
            <li><strong>Shipping Reroutes</strong> - Vessels diverted around Cape of Good Hope</li>
            <li><strong>Insurance Premiums</strong> - Commercial tanker rates skyrocketing</li>
            <li><strong>Diplomatic Response</strong> - Emergency summits scheduled in European capitals</li>
          </ul>
        </div>
      </div>
      
      <div class="technical-section">
        <h2>Strategic Implications for Global Trade</h2>
        <p>The Strait of Hormuz handles approximately 21 million barrels of oil per day, representing about 20% of global oil consumption. Any disruption to this critical maritime route has immediate and far-reaching consequences for the global economy.</p>
        
        <div class="checklist-box">
          <h4>Key Economic Concerns:</h4>
          <ul>
            <li>Energy supply chain disruptions worldwide</li>
            <li>Increased transportation costs for consumer goods</li>
            <li>Potential for broader regional conflict escalation</li>
            <li>Impact on global inflation and economic growth</li>
          </ul>
        </div>
      </div>
      
      <div class="onpage-section">
        <h3>Military and Diplomatic Dimensions</h3>
        <p>The Pentagon's characterization of the operation as a "maritime safety" measure contrasts sharply with Iran's denunciation of "blatant piracy." This semantic battle reflects deeper geopolitical tensions and competing narratives in international relations.</p>
        
        <blockquote>
          "The Strait of Hormuz is not just a waterway - it's the world's economic jugular vein. Any disruption here sends tremors through every market on Earth."
        </blockquote>
      </div>
      
      <div class="conclusion-section">
        <h2>Looking Ahead: What to Watch For</h2>
        <p>As this situation develops, several key indicators will signal the trajectory of this crisis. The response from international bodies and the behavior of market participants will determine whether this remains a regional issue or escalates into a broader economic confrontation.</p>
        
        <div class="final-takeaway">
          <h4>Key Takeaway:</h4>
          <p><em>The Strait of Hormuz standoff represents a critical moment in global geopolitics. Whether through diplomatic resolution or further escalation, the outcomes will shape economic conditions for months to come. Stay informed and consider the broader implications for your financial decisions.</em></p>
        </div>
      </div>
    `,
    date: '2026-04-13',
    readTime: '5 min read',
    category: 'World News',
    author: 'Global News Desk',
    keywords: ['Strait of Hormuz', 'geopolitics', 'oil prices', 'naval blockade', 'Middle East', 'global markets']
  },
  'bieberchella-justin-coachella-2026': {
    title: 'Bieberchella: Justin\'s Surprise Set Defines a New Era for Coachella',
    excerpt: 'Last night, the Indio desert belonged to one man. Justin Bieber\'s unannounced headline set has become the single most-watched live-streamed event of the year.',
    content: `
      <div class="intro-section">
        <h2>The Musical Phenomenon That Stopped the Internet</h2>
        <p class="lead-paragraph">In a move that no one saw coming, Justin Bieber transformed Coachella 2026 into his personal stage with an unannounced headline performance now dubbed "Bieberchella" across social media platforms.</p>
        
        <div class="key-highlights">
          <h4>What Made Bieberchella Special:</h4>
          <ul>
            <li><strong>Stripped-Back Performance</strong> - Away from high-production pop roots</li>
            <li><strong>R&B Influence</strong> - Heavy soul and rhythm and blues elements</li>
            <li><strong>Acoustic Arrangements</strong> - Intimate, raw musical delivery</li>
            <li><strong>Digital Dominance</strong> - Social media explosion across platforms</li>
          </ul>
        </div>
      </div>
      
      <div class="conclusion-section">
        <h2>The Broader Cultural Significance</h2>
        <p>This surprise performance signals a shift in how artists approach major festivals.</p>
        
        <div class="final-takeaway">
          <h4>Key Takeaway:</h4>
          <p><em>Bieberchella isn't just about one artist's performance - it's about the changing landscape of live entertainment.</em></p>
        </div>
      </div>
    `,
    date: '2026-04-13',
    readTime: '4 min read',
    category: 'Entertainment',
    author: 'Entertainment Desk',
    keywords: ['Justin Bieber', 'Coachella', 'Bieberchella', 'live music', 'fashion trends', 'social media']
  },
  'artemis-ii-crew-final-simulation-2026': {
    title: 'Artemis II: The Crew Prepares for History in Final Simulation Phases',
    excerpt: 'NASA has released new footage of the Artemis II crew undergoing rigorous centrifuge training as they approach the final months before their lunar flyby.',
    content: `
      <div class="intro-section">
        <h2>Humanity's Return to the Moon</h2>
        <p class="lead-paragraph">NASA has released compelling new footage showing the Artemis II crew undergoing intense centrifuge training as they approach the final months before their historic lunar flyby mission.</p>
      </div>
      
      <div class="conclusion-section">
        <h2>The Future of Lunar Exploration</h2>
        <p>The Artemis program represents not just a return to the Moon, but the beginning of humanity's expansion into the solar system.</p>
      </div>
    `,
    date: '2026-04-13',
    readTime: '6 min read',
    category: 'Science & Space',
    author: 'Science Desk',
    keywords: ['NASA', 'Artemis II', 'Moon mission', 'space exploration']
  },
  'gaslighting-yoga-challenge-tiktok-2026': {
    title: 'Why Your For You Page is Full of the "Gaslighting" Yoga Pose',
    excerpt: 'If you\'ve opened TikTok or Instagram today, you\'ve likely seen someone face-planting while trying the "Gaslighting" Yoga Pose.',
    content: `
      <div class="intro-section">
        <h2>The Viral Challenge That's Taking Over Social Media</h2>
        <p class="lead-paragraph">This seemingly simple yet surprisingly difficult challenge has exploded across social platforms.</p>
      </div>
    `,
    date: '2026-04-13',
    readTime: '3 min read',
    category: 'Digital Culture',
    author: 'Culture Desk',
    keywords: ['TikTok', 'Instagram', 'viral challenges']
  },
  'ai-agents-blockchain-web3-2026': {
    title: 'AI Agents on Blockchain: The Biggest Web3 Trend of 2026',
    excerpt: 'Autonomous AI agents are executing smart contracts, managing DeFi portfolios, and governing DAOs without human input.',
    content: `
      <div class="intro-section">
        <h2>The AI Agent Revolution in Web3</h2>
        <p class="lead-paragraph">2026 marks the pivotal moment when artificial intelligence and blockchain technology converge to create autonomous digital agents.</p>
      </div>
    `,
    date: '2026-03-10',
    readTime: '11 min read',
    category: 'Web3 & AI',
    author: 'Mussawar Hayat',
    keywords: ['AI agents', 'blockchain', 'Web3']
  },
  'account-abstraction-smart-wallets-guide': {
    title: 'Account Abstraction in 2026: The End of Seed Phrases',
    excerpt: 'ERC-4337 and smart wallets are killing the biggest UX barrier in Web3.',
    content: `
      <div class="intro-section">
        <h2>The UX Revolution</h2>
        <p class="lead-paragraph">Account Abstraction has matured into a production-ready solution.</p>
      </div>
    `,
    date: '2026-03-05',
    readTime: '10 min read',
    category: 'Web3 Development',
    author: 'Mussawar Hayat',
    keywords: ['Account Abstraction', 'ERC-4337']
  },
  'real-world-asset-tokenization-rwa-guide': {
    title: 'RWA Tokenization: How Blockchain Is Eating Real-World Finance',
    excerpt: 'Real-world asset tokenization crossed $24 billion in 2025 and is accelerating fast.',
    content: `
      <div class="intro-section">
        <h2>The $24 Billion Revolution</h2>
        <p class="lead-paragraph">RWA tokenization is creating entirely new financial markets.</p>
      </div>
    `,
    date: '2026-02-28',
    readTime: '12 min read',
    category: 'Blockchain & DeFi',
    author: 'Mussawar Hayat',
    keywords: ['RWA', 'tokenization']
  },
  'modular-blockchains-l2-developer-guide': {
    title: 'Modular Blockchains & L2s: The Infrastructure Stack Every Web3 Dev Must Know',
    excerpt: 'The monolithic blockchain era is over.',
    content: `
      <div class="intro-section">
        <h2>The Modular Revolution</h2>
        <p class="lead-paragraph">Modular architecture is how the next billion users get on-chain.</p>
      </div>
    `,
    date: '2026-02-20',
    readTime: '13 min read',
    category: 'Blockchain',
    author: 'Mussawar Hayat',
    keywords: ['modular blockchains', 'L2']
  },
  'deploying-multi-site-nextjs-vps-nginx': {
    title: 'Deploying a Multi-Site Next.js App on a Single VPS with Nginx',
    excerpt: 'Running multiple Next.js apps on one VPS with Nginx reverse proxy, PM2, and SSL.',
    content: `
      <div class="intro-section">
        <h2>One VPS, Multiple Next.js Apps</h2>
        <p class="lead-paragraph">Here's the architecture I use for production multi-site deployments.</p>
      </div>
    `,
    date: '2026-05-15',
    readTime: '9 min read',
    category: 'DevOps',
    author: 'Mussawar Hayat',
    keywords: ['VPS', 'Nginx', 'PM2']
  },
  'building-bitcoin-ordinals-marketplace': {
    title: 'Building a Bitcoin Ordinals Marketplace: Architecture Breakdown',
    excerpt: 'How I built Ordwin — a Bitcoin NFT marketplace for Ordinal inscriptions.',
    content: `
      <div class="intro-section">
        <h2>Building Ordwin</h2>
        <p class="lead-paragraph">The core challenge was indexing inscription data at chain speed.</p>
      </div>
    `,
    date: '2026-05-10',
    readTime: '11 min read',
    category: 'Web3',
    author: 'Mussawar Hayat',
    keywords: ['Bitcoin Ordinals']
  },
  'metamask-vs-walletconnect-dapp': {
    title: 'MetaMask vs WalletConnect: Choosing Wallet Integration for Your DApp',
    excerpt: 'Both work. Both have edge cases.',
    content: `
      <div class="intro-section">
        <h2>Wallet Integration</h2>
        <p class="lead-paragraph">Here's what I learned integrating multiple wallets.</p>
      </div>
    `,
    date: '2026-05-05',
    readTime: '8 min read',
    category: 'Web3',
    author: 'Mussawar Hayat',
    keywords: ['MetaMask', 'WalletConnect']
  },
  'spf-dkim-dmarc-multi-domain-vps': {
    title: 'Setting Up SPF, DKIM, and DMARC for a Multi-Domain VPS',
    excerpt: 'Email deliverability is silent until it breaks.',
    content: `
      <div class="intro-section">
        <h2>Email Deliverability</h2>
        <p class="lead-paragraph">The exact DNS setup I use across multiple domains.</p>
      </div>
    `,
    date: '2026-04-28',
    readTime: '7 min read',
    category: 'DevOps',
    author: 'Mussawar Hayat',
    keywords: ['SPF', 'DKIM', 'DMARC']
  },
  'gdpr-compliant-web-apps-checklist': {
    title: 'Building GDPR-Compliant Web Apps: A Developer\'s Checklist',
    excerpt: 'Cookie consent, secure data storage, data subject rights.',
    content: `
      <div class="intro-section">
        <h2>GDPR for Developers</h2>
        <p class="lead-paragraph">A practical engineering checklist.</p>
      </div>
    `,
    date: '2026-04-20',
    readTime: '10 min read',
    category: 'Full-Stack',
    author: 'Mussawar Hayat',
    keywords: ['GDPR']
  },
  'multi-chain-dex-interface-performance': {
    title: 'Building a Multi-Chain DEX Interface Without Killing Performance',
    excerpt: 'Real-time price feeds, chart rendering, and websocket management.',
    content: `
      <div class="intro-section">
        <h2>Demotrionn DEX</h2>
        <p class="lead-paragraph">How I built a high-performance multi-chain trading interface.</p>
      </div>
    `,
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

  if (!post) {
    return {
      title: 'Blog Post Not Found',
    }
  }

  return {
    title: `${post.title} | Mussawar Hayat Blog`,
    description: post.excerpt,
    keywords: post.keywords.join(', '),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://mussawarhayat.site/blog/${slug}`,
      type: 'article',
      images: [
        {
          url: 'https://mussawarhayat.site/_next/static/media/logo.2deab1c7.png',
          width: 640,
          height: 640,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: ['https://mussawarhayat.site/_next/static/media/logo.2deab1c7.png'],
    },
  }
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
                  prose-pre:bg-gradient-to-br prose-pre:from-black/50 prose-pre:to-white/5 prose-pre:border prose-pre:border-white/20 prose-pre:rounded-2xl prose-pre:p-8 prose-pre:my-16 prose-pre:shadow-2xl prose-pre:backdrop-blur-sm
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
                  Let's discuss how we can transform your digital presence with cutting-edge solutions.
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
