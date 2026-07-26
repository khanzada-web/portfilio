import { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/app/components/layout/Header'
import { Footer } from '@/app/components/layout/Footer'
import { BreadcrumbSchema } from '@/app/components/seo/BreadcrumbSchema'
import { SubscriptionModal } from '@/app/components/SubscriptionModal'

export const metadata: Metadata = {
  title: 'Blog | Web3 & Full-Stack Insights',
  description: 'Practical guides and architecture deep-dives on Next.js 16, React, TypeScript, Web3, Solidity, DeFi, Bitcoin Ordinals, Account Abstraction, DevOps, and production full-stack engineering by Mussawar Hayat.',
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
  ],
  openGraph: {
    title: 'Mussawar Hayat Blog | Web3 & Full-Stack Developer Insights',
    description: 'Practical architecture guides and production patterns for Next.js, Web3, Solidity, and full-stack engineering.',
    url: 'https://www.mussawarhayat.site/blog',
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
    excerpt: 'Autonomous AI agents are executing smart contracts, managing DeFi portfolios, and governing DAOs without human input. Here\'s what every Web3 developer needs to know right now.',
    slug: 'ai-agents-blockchain-web3-2026',
    date: '2026-03-10',
    readTime: '11 min read',
    category: 'Web3 & AI',
  },
  {
    title: 'Account Abstraction 2026: No More Seeds',
    excerpt: 'ERC-4337 and smart wallets are killing the biggest UX barrier in Web3. Here\'s a complete developer guide to building with Account Abstraction today.',
    slug: 'account-abstraction-smart-wallets-guide',
    date: '2026-03-05',
    readTime: '10 min read',
    category: 'Web3 Development',
  },
  {
    title: 'RWA Tokenization: Blockchain Meets Finance',
    excerpt: 'Real-world asset tokenization crossed $24 billion in 2025 and is accelerating fast. Here\'s the full developer and investor breakdown of the biggest infrastructure shift in Web3.',
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
    title: 'Multi-Site Next.js on VPS with Nginx',
    excerpt: 'Running multiple Next.js apps on one VPS with Nginx reverse proxy, PM2, and SSL — the exact setup I use for production deployments.',
    slug: 'deploying-multi-site-nextjs-vps-nginx',
    date: '2026-05-15',
    readTime: '9 min read',
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
    excerpt: 'Both work. Both have edge cases. Here\'s what I learned integrating MetaMask, WalletConnect, and Coinbase Wallet across multiple DApps.',
    slug: 'metamask-vs-walletconnect-dapp',
    date: '2026-05-05',
    readTime: '8 min read',
    category: 'Web3',
  },
  {
    title: 'SPF, DKIM & DMARC for Multi-Domain VPS',
    excerpt: 'Email deliverability is silent until it breaks. Here\'s the exact DNS setup I use to keep transactional email out of spam across multiple domains.',
    slug: 'spf-dkim-dmarc-multi-domain-vps',
    date: '2026-04-28',
    readTime: '7 min read',
    category: 'DevOps',
  },
  {
    title: 'GDPR-Compliant Web Apps Checklist',
    excerpt: 'Cookie consent, secure data storage, data subject rights — a practical checklist for full-stack developers building for EU clients.',
    slug: 'gdpr-compliant-web-apps-checklist',
    date: '2026-04-20',
    readTime: '10 min read',
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

            {/* Page Header */}
            <div className="text-center mb-20">
              <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter uppercase leading-none mb-8">
                <span className="text-[#39FF14]">Mussawar</span> Tech Blog
              </h1>
              <p className="text-lg text-white/60 max-w-3xl mx-auto leading-relaxed font-sans">
                Practical architecture guides and production patterns for Next.js, React, TypeScript,
                Web3, Solidity, DeFi, Bitcoin Ordinals, and full-stack engineering.
              </p>
            </div>

            {/* Blog Grid */}
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

            {/* Newsletter CTA */}
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
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
