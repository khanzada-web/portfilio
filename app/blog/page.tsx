import { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/app/components/layout/Header'
import { Footer } from '@/app/components/layout/Footer'
import { BreadcrumbSchema } from '@/app/components/seo/BreadcrumbSchema'
import { SubscriptionModal } from '@/app/components/SubscriptionModal'

export const metadata: Metadata = {
  title: 'Blog | Web3 & Full-Stack Insights',
  description: 'Practical guides on Next.js 16, React, TypeScript, Web3, Solidity, DeFi, Bitcoin Ordinals, DevOps, AI coding tools, and full-stack engineering by Mussawar Hayat.',
  keywords: [
    'Web3 developer blog',
    'Next.js 16 tutorial',
    'full-stack developer blog',
    'blockchain development guide',
    'Solidity tutorial',
    'Account Abstraction guide',
    'RWA tokenization',
    'Bitcoin Ordinals marketplace',
    'Next.js VPS deployment',
    'DevOps for developers',
    'hire Next.js developer',
    'Mussawar Hayat',
    'Prisma connection pooling',
    'Prisma too many connections',
    'Prisma Accelerate Next.js',
    'Server Actions security',
    'Docker multi-stage Next.js',
    'Stop overusing use client',
    'Server Components Next.js 16',
    'Secure Server Actions Next.js 16',
    'Multi-site Next.js VPS Nginx',
    'GDPR compliance checklist for web developers',
    'cookie consent GDPR implementation',
    'AgentRouter',
    'free Claude Code',
    'free AI coding API',
    'Claude Code free alternative',
    'how to get 500k views on X',
    'how to get 500000 impressions on X',
    'X algorithm 2026',
    'go viral on X 2026',
    'X monetization 500k impressions',
    'Next.js 16.3 Instant Navigations',
    'cacheComponents',
    'partialPrefetching',
  ],
  openGraph: {
    title: 'Mussawar Hayat Blog | Web3 & Full-Stack Developer Insights',
    description: 'Practical architecture guides and production patterns for Next.js, Web3, Solidity, and full-stack engineering.',
    url: 'https://mussawarhayat.site/blog',
    type: 'website',
    images: [
      {
        url: '/my-pic.jpeg',
        width: 1200,
        height: 630,
        alt: 'Mussawar Hayat — Full-Stack & Web3 Developer Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mussawar Hayat Blog | Web3 & Full-Stack Insights',
    description: 'Production-grade guides on Next.js, Web3, Solidity, DeFi, and full-stack systems.',
    images: ['/my-pic.jpeg'],
  },
  alternates: {
    canonical: '/blog',
  },
}

const breadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'Blog', url: '/blog' },
]

const blogPosts = [
  {
    title: 'Next.js 16.3 Instant Navigations: Production Guide for SPA-Like Server Components',
    excerpt: 'Next.js 16.3 Instant Navigations make Server Components feel as responsive as SPAs. Enable cacheComponents + partialPrefetching, use Suspense streaming or use cache, inspect shells, and ship instant first-click navigations without giving up the server model.',
    slug: 'nextjs-16-3-instant-navigations-production-guide',
    date: '2026-08-09',
    readTime: '13 min read',
    category: 'Full-Stack',
  },
  {
    title: 'How to Get 500K Views on X in 2026: Complete Algorithm & Monetization Guide',
    excerpt: 'X lowered the monetization bar to 500K verified Home Timeline impressions. Here is the exact 2026 playbook: early engagement velocity, original content, native video, Premium signals, and the daily system that turns small accounts into high-reach creators.',
    slug: 'how-to-get-500k-views-on-x-2026',
    date: '2026-08-09',
    readTime: '14 min read',
    category: 'Growth & X Strategy',
  },
  {
    title: 'AgentRouter Free AI Coding API: Use Claude Code Without Paying (2026 Guide)',
    excerpt: 'Need Claude Code, Codex, or other AI coding tools but do not want to pay subscriptions? AgentRouter gives developers free credits and a simple API gateway. Here is the complete beginner-friendly setup guide.',
    slug: 'agentrouter-free-claude-code-api-guide-2026',
    date: '2026-08-03',
    readTime: '9 min read',
    category: 'AI & Full-Stack',
  },
  {
    title: 'Docker Multi-Stage Builds for Next.js 16 Production',
    excerpt: 'Ship a minimal, secure Next.js 16 App Router image with output: "standalone", multi-stage builds, non-root user, and only the files the runtime needs. Production Dockerfile, .dockerignore, and checklist.',
    slug: 'docker-multi-stage-nextjs-16-standalone-production',
    date: '2026-08-02',
    readTime: '11 min read',
    category: 'DevOps',
  },
  {
    title: 'Secure Server Actions in Next.js 16: Auth, Validation & Data Access Layer',
    excerpt: 'Every Server Action is a public POST endpoint. Production pattern for Next.js 16: validate inputs with Zod, authenticate from session, authorize ownership, keep a thin action layer on a server-only Data Access Layer, constrain return values, and revalidate safely.',
    slug: 'secure-server-actions-nextjs-16-auth-validation-dal',
    date: '2026-07-30',
    readTime: '15 min read',
    category: 'Security',
  },
  {
    title: 'Prisma Connection Exhaustion in Next.js 16: Fix Too Many Connections with Accelerate',
    excerpt: 'Prisma "too many connections" errors crash serverless Next.js 16 apps under load. Production fix: global PrismaClient singleton, connection_limit=1, Prisma Accelerate pooling, or PgBouncer. Complete guide with code and checklist.',
    slug: 'prisma-connection-exhaustion-nextjs-16-accelerate',
    date: '2026-07-27',
    readTime: '14 min read',
    category: 'Full-Stack',
  },
  {
    title: "Stop Overusing 'use client' in Next.js 16: Server Components by Default",
    excerpt: 'The most common App Router mistake is marking entire trees with use client. Production patterns for Server Components, children slots, and minimal client islands that shrink bundles, protect server data, and improve Core Web Vitals in Next.js 16.',
    slug: 'nextjs-16-stop-overusing-use-client-server-components',
    date: '2026-07-26',
    readTime: '14 min read',
    category: 'Full-Stack',
  },
  {
    title: 'Next.js July 2026 Security Patch',
    excerpt: 'Complete guide to the July 2026 Next.js security release (CVE-2026-64641 and related issues). Patch steps, Server Action hardening, middleware protection, and production checklist for App Router apps.',
    slug: 'nextjs-july-2026-security-patch-server-actions',
    date: '2026-07-26',
    readTime: '12 min read',
    category: 'Security',
  },
  {
    title: 'Next.js 16 + Prisma SaaS Tutorial',
    excerpt: 'Complete step-by-step guide to building a scalable SaaS using Next.js 16 App Router, Prisma Postgres, Auth.js, and Tailwind CSS. Production patterns, Server Actions, and deployment.',
    slug: 'nextjs-16-saas-tutorial-prisma-typescript-2026',
    date: '2026-07-26',
    readTime: '14 min read',
    category: 'Full-Stack',
  },
  {
    title: 'AI Agents on Blockchain: Web3 2026',
    excerpt: "Autonomous AI agents are executing smart contracts, managing DeFi portfolios, and governing DAOs without human input. Here's what every Web3 developer needs to know right now.",
    slug: 'ai-agents-blockchain-web3-2026',
    date: '2026-03-10',
    readTime: '11 min read',
    category: 'Web3 & AI',
  },
  {
    title: 'Account Abstraction 2026: No More Seeds',
    excerpt: "ERC-4337 and smart wallets are killing the biggest UX barrier in Web3. Here's a complete developer guide to building with Account Abstraction today.",
    slug: 'account-abstraction-smart-wallets-guide',
    date: '2026-03-05',
    readTime: '10 min read',
    category: 'Web3 Development',
  },
  {
    title: 'RWA Tokenization: Blockchain Meets Finance',
    excerpt: "Real-world asset tokenization crossed $24 billion in 2025 and is accelerating fast. Here's the full developer and investor breakdown of the biggest infrastructure shift in Web3.",
    slug: 'real-world-asset-tokenization-rwa-guide',
    date: '2026-02-28',
    readTime: '12 min read',
    category: 'Blockchain & DeFi',
  },
  {
    title: 'Modular Blockchains & L2s: Dev Guide',
    excerpt: 'The monolithic blockchain era is over. Modular architecture — separating execution, consensus, and data availability — is how the next billion users get on-chain.',
    slug: 'modular-blockchains-l2-developer-guide',
    date: '2026-02-20',
    readTime: '13 min read',
    category: 'Blockchain',
  },
  {
    title: 'Deploy Multi-Site Next.js on VPS with Nginx, PM2 & SSL',
    excerpt: "Run multiple Next.js 16 apps on one VPS with Nginx reverse proxy, PM2 process management, Let's Encrypt SSL, and zero-downtime symlink deploys. Production directory layout, server blocks, ecosystem config, and checklist.",
    slug: 'deploying-multi-site-nextjs-vps-nginx',
    date: '2026-05-15',
    readTime: '12 min read',
    category: 'DevOps',
  },
  {
    title: 'Bitcoin Ordinals Marketplace Architecture',
    excerpt: 'How I built Ordwin — a Bitcoin NFT marketplace for Ordinal inscriptions. Indexing, ownership tracking, and the real performance challenges.',
    slug: 'building-bitcoin-ordinals-marketplace',
    date: '2026-05-10',
    readTime: '11 min read',
    category: 'Web3',
  },
  {
    title: 'MetaMask vs WalletConnect for DApps',
    excerpt: 'Both work. Both have edge cases. Here is what I learned integrating MetaMask, WalletConnect, and Coinbase Wallet across multiple DApps.',
    slug: 'metamask-vs-walletconnect-dapp',
    date: '2026-05-05',
    readTime: '8 min read',
    category: 'Web3',
  },
  {
    title: 'SPF, DKIM & DMARC for Multi-Domain VPS',
    excerpt: 'Email deliverability for multiple domains on one VPS: SPF, DKIM, DMARC records, common mistakes, and a production checklist.',
    slug: 'spf-dkim-dmarc-multi-domain-vps',
    date: '2026-04-28',
    readTime: '7 min read',
    category: 'DevOps',
  },
  {
    title: 'GDPR Compliance Checklist for Web Developers 2026',
    excerpt: 'Complete GDPR compliance checklist for web developers: cookie consent implementation, data subject rights APIs, privacy by design, retention jobs, and production controls for Next.js and full-stack apps serving EU clients.',
    slug: 'gdpr-compliant-web-apps-checklist',
    date: '2026-04-20',
    readTime: '12 min read',
    category: 'Full-Stack',
  },
  {
    title: 'Multi-Chain DEX Interface Performance',
    excerpt: 'Real-time price feeds, chart rendering, and websocket management — how I built Demotrionn DEX without melting the browser.',
    slug: 'multi-chain-dex-interface-performance',
    date: '2026-04-15',
    readTime: '12 min read',
    category: 'Web3',
  },
]

export default function BlogPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />

      <div className="min-h-screen bg-[#060B16] font-orbitron">
        <Header />
        <main role="main" id="main-content" className="pt-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">

            <div className="text-center mb-20">
              <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter uppercase leading-none mb-8">
                <span className="text-[#39FF14]">Mussawar</span> Tech Blog
              </h1>
              <p className="text-lg text-white/60 max-w-3xl mx-auto leading-relaxed font-sans">
                Practical architecture guides and production patterns for Next.js, React, TypeScript,
                Web3, Solidity, DeFi, Bitcoin Ordinals, and full-stack engineering.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
              {blogPosts.map((post) => (
                <article
                  key={post.slug}
                  className="group bg-[#0A1221] border border-[#39FF14]/20 p-8 hover:border-[#39FF14] transition-all duration-500 flex flex-col"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs sm:text-sm font-medium text-[#39FF14] bg-[#39FF14]/10 px-2 sm:px-3 py-1 rounded-md">
                        {post.category}
                      </span>
                    </div>
                    <span className="text-xs sm:text-sm text-white/50">{post.readTime}</span>
                  </div>

                  <h2 className="text-lg sm:text-xl font-semibold text-white font-orbitron mb-3 overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-[#39FF14] transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-sm sm:text-base text-white/60 mb-4 flex-1 overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
                    {post.excerpt}
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-auto pt-4 border-t border-white/5 gap-2">
                    <time dateTime={post.date} className="text-xs sm:text-sm text-white/40">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-white hover:text-[#39FF14] transition-colors text-sm flex items-center gap-1 group"
                    >
                      Read more
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center">
              <div className="bg-[#0A1221] border border-[#39FF14]/20 p-8 md:p-12">
                <h2 className="text-xl md:text-2xl font-bold text-white font-orbitron mb-4">
                  Stay Updated with <span className="text-[#39FF14]">Web3 & Full-Stack</span> Insights
                </h2>
                <p className="text-sm md:text-base text-white/60 mb-6 px-2">
                  Get practical architecture guides on Next.js, Web3, Solidity, DeFi, and production
                  full-stack systems delivered to your inbox.
                </p>
                <SubscriptionModal />
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/services"
                  className="px-8 py-4 border border-white/10 hover:border-[#39FF14]/30 text-white/70 hover:text-white font-orbitron text-sm uppercase tracking-[0.2em] rounded-xl transition-all duration-300"
                >
                  Explore Services
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 border border-white/10 hover:border-[#39FF14]/30 text-white/70 hover:text-white font-orbitron text-sm uppercase tracking-[0.2em] rounded-xl transition-all duration-300"
                >
                  Hire Me
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
