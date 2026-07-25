import { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/app/components/layout/Header'
import { Footer } from '@/app/components/layout/Footer'
import { BreadcrumbSchema } from '@/app/components/seo/BreadcrumbSchema'
import { SubscriptionModal } from '@/app/components/SubscriptionModal'

export const metadata: Metadata = {
  title: 'Mussawar Hayat Blog | Web3, Blockchain & Full-Stack Dev Insights',
  description: 'Expert insights on Web3 development, blockchain, AI agents, smart contracts, DeFi, and full-stack engineering. Stay updated with the latest strategies in decentralized technology.',
  keywords: 'Web3 blog, blockchain development, AI agents blockchain, account abstraction, RWA tokenization, modular blockchains, smart contracts, DeFi, full-stack developer blog, Next.js, React',
  openGraph: {
    title: 'Mussawar Hayat Blog | Web3, Blockchain & Full-Stack Dev Insights',
    description: 'Expert insights on Web3 development, blockchain, AI agents, smart contracts, DeFi, and full-stack engineering.',
    url: 'https://www.mussawarhayat.site/blog',
    type: 'website',
    images: [
      {
        url: 'https://www.mussawarhayat.site/_next/static/media/logo.2deab1c7.png',
        width: 640,
        height: 640,
        alt: 'Mussawar Hayat Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mussawar Hayat Blog | Web3 & Full-Stack Dev Insights',
    description: 'Expert insights on Web3 development, blockchain, AI agents, smart contracts, DeFi, and full-stack engineering.',
    images: ['https://www.mussawarhayat.site/_next/static/media/logo.2deab1c7.png'],
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
  // ── NEW HOT POSTS ──────────────────────────────────────────
  {
    title: 'The Strait of Hormuz Standoff: Global Markets Braced as Naval Blockade Tightens',
    excerpt: 'Tensions in the Middle East reached a fever pitch as U.S. naval forces established a "security perimeter" around Iranian shipping lanes. Oil prices spiked 8% as shipping giants reroute vessels around the Cape of Good Hope.',
    slug: 'strait-of-hormuz-standoff-2026',
    date: '2026-04-13',
    readTime: '5 min read',
    category: 'World News',
    isNew: true,
  },
  {
    title: 'Bieberchella: Justin\'s Surprise Set Defines a New Era for Coachella',
    excerpt: 'Justin Bieber\'s unannounced headline set has become the single most-watched live-streamed event of the year. Moving away from high-production pop roots, the performance featured stripped-back acoustic arrangements and heavy R&B influence.',
    slug: 'bieberchella-justin-coachella-2026',
    date: '2026-04-13',
    readTime: '4 min read',
    category: 'Entertainment',
    isNew: true,
  },
  {
    title: 'Artemis II: The Crew Prepares for History in Final Simulation Phases',
    excerpt: 'NASA has released new footage of the Artemis II crew undergoing rigorous centrifuge training as they approach the final months before their lunar flyby. This mission marks the first time humans will return to the vicinity of the Moon in over half a century.',
    slug: 'artemis-ii-crew-final-simulation-2026',
    date: '2026-04-13',
    readTime: '6 min read',
    category: 'Science & Space',
    isNew: true,
  },
  {
    title: 'Why Your For You Page is Full of the "Gaslighting" Yoga Challenge',
    excerpt: 'If you\'ve opened TikTok or Instagram today, you\'ve likely seen someone face-planting while trying the "Gaslighting" Yoga Pose. The challenge has become the ultimate viral "fail" trend mocking unrealistic fitness influencer culture.',
    slug: 'gaslighting-yoga-challenge-tiktok-2026',
    date: '2026-04-13',
    readTime: '3 min read',
    category: 'Digital Culture',
    isNew: true,
  },
  {
    title: 'AI Agents on Blockchain: The Biggest Web3 Trend of 2026',
    excerpt: 'Autonomous AI agents are executing smart contracts, managing DeFi portfolios, and governing DAOs without human input. Here\'s what every Web3 developer needs to know right now.',
    slug: 'ai-agents-blockchain-web3-2026',
    date: '2026-03-10',
    readTime: '11 min read',
    category: 'Web3 & AI',
    isNew: true,
  },
  {
    title: 'Account Abstraction in 2026: The End of Seed Phrases',
    excerpt: 'ERC-4337 and smart wallets are killing the biggest UX barrier in Web3. Here\'s a complete developer guide to building with Account Abstraction today.',
    slug: 'account-abstraction-smart-wallets-guide',
    date: '2026-03-05',
    readTime: '10 min read',
    category: 'Web3 Development',
    isNew: true,
  },
  {
    title: 'RWA Tokenization: How Blockchain Is Eating Real-World Finance',
    excerpt: 'Real-world asset tokenization crossed $24 billion in 2025 and is accelerating fast. Here\'s the full developer and investor breakdown of the biggest infrastructure shift in Web3.',
    slug: 'real-world-asset-tokenization-rwa-guide',
    date: '2026-02-28',
    readTime: '12 min read',
    category: 'Blockchain & DeFi',
    isNew: true,
  },
  {
    title: 'Modular Blockchains & L2s: The Infrastructure Stack Every Web3 Dev Must Know',
    excerpt: 'The monolithic blockchain era is over. Modular architecture — separating execution, consensus, and data availability — is how the next billion users get on-chain.',
    slug: 'modular-blockchains-l2-developer-guide',
    date: '2026-02-20',
    readTime: '13 min read',
    category: 'Blockchain',
    isNew: true,
  },
  // ── ENGINEERING POSTS ─────────────────────────────────────
  {
    title: 'Deploying a Multi-Site Next.js App on a Single VPS with Nginx',
    excerpt: 'Running multiple Next.js apps on one VPS with Nginx reverse proxy, PM2, and SSL — the exact setup I use for production deployments.',
    slug: 'deploying-multi-site-nextjs-vps-nginx',
    date: '2026-05-15',
    readTime: '9 min read',
    category: 'DevOps',
    isNew: false,
  },
  {
    title: 'Building a Bitcoin Ordinals Marketplace: Architecture Breakdown',
    excerpt: 'How I built Ordwin — a Bitcoin NFT marketplace for Ordinal inscriptions. Indexing, ownership tracking, and the real performance challenges.',
    slug: 'building-bitcoin-ordinals-marketplace',
    date: '2026-05-10',
    readTime: '11 min read',
    category: 'Web3',
    isNew: false,
  },
  {
    title: 'MetaMask vs WalletConnect: Choosing Wallet Integration for Your DApp',
    excerpt: 'Both work. Both have edge cases. Here\'s what I learned integrating MetaMask, WalletConnect, and Coinbase Wallet across multiple DApps.',
    slug: 'metamask-vs-walletconnect-dapp',
    date: '2026-05-05',
    readTime: '8 min read',
    category: 'Web3',
    isNew: false,
  },
  {
    title: 'Setting Up SPF, DKIM, and DMARC for a Multi-Domain VPS',
    excerpt: 'Email deliverability is silent until it breaks. Here\'s the exact DNS setup I use to keep transactional email out of spam across multiple domains.',
    slug: 'spf-dkim-dmarc-multi-domain-vps',
    date: '2026-04-28',
    readTime: '7 min read',
    category: 'DevOps',
    isNew: false,
  },
  {
    title: 'Building GDPR-Compliant Web Apps: A Developer\'s Checklist',
    excerpt: 'Cookie consent, secure data storage, data subject rights — a practical checklist for full-stack developers building for EU clients.',
    slug: 'gdpr-compliant-web-apps-checklist',
    date: '2026-04-20',
    readTime: '10 min read',
    category: 'Full-Stack',
    isNew: false,
  },
  {
    title: 'Building a Multi-Chain DEX Interface Without Killing Performance',
    excerpt: 'Real-time price feeds, chart rendering, and websocket management — how I built Demotrionn DEX without melting the browser.',
    slug: 'multi-chain-dex-interface-performance',
    date: '2026-04-15',
    readTime: '12 min read',
    category: 'Web3',
    isNew: false,
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
              <div className="inline-block border border-[#39FF14] px-4 py-1 mb-6 text-xs tracking-[0.3em] uppercase opacity-80">
                Tech_Blog.v2
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter uppercase leading-none mb-8">
                <span className="text-[#39FF14]">Mussawar</span> Tech Blog
              </h1>
              <p className="text-lg text-white/60 max-w-3xl mx-auto leading-relaxed font-sans">
                Expert insights on Web3 development, blockchain, AI agents, smart contracts,
                DeFi, and full-stack engineering.
              </p>
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
              {blogPosts.map((post) => (
                <article
                  key={post.slug}
                  className="group bg-[#0A1221] border border-[#39FF14]/20 p-8 hover:border-[#39FF14] transition-all duration-500 flex flex-col"
                >
                  {/* Category + Read Time */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs sm:text-sm font-medium text-[#39FF14] bg-[#39FF14]/10 px-2 sm:px-3 py-1 rounded-md">
                          {post.category}
                        </span>
                      </div>
                      <span className="text-xs sm:text-sm text-white/50">{post.readTime}</span>
                    </div>

                    {/* Title */}
                    <h2 className="text-lg sm:text-xl font-semibold text-white font-orbitron mb-3 overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:text-[#39FF14] transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h2>

                    {/* Excerpt */}
                    <p className="text-sm sm:text-base text-white/60 mb-4 flex-1 overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
                      {post.excerpt}
                    </p>

                    {/* Footer */}
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
                  Stay Updated with <span className="text-[#39FF14]">Web3 Trends</span>
                </h2>
                <p className="text-sm md:text-base text-white/60 mb-6 px-2">
                  Get the latest insights on Web3 development, blockchain, AI agents, smart
                  contracts, and full-stack engineering delivered straight to your inbox.
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