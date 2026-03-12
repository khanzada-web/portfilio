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
  // ── EXISTING POSTS ─────────────────────────────────────────
  {
    title: 'AI Business Automation: Transform Your Operations in 2025',
    excerpt: 'Discover how AI automation can revolutionize Canadian businesses with practical implementation strategies, cost savings, and competitive advantages.',
    slug: 'ai-business-automation-2025',
    date: '2024-12-15',
    readTime: '10 min read',
    category: 'AI & Automation',
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
          <div className="max-w-6xl mx-auto px-4 py-16">

            {/* Page Header */}
            <div className="text-center mb-12 md:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-orbitron mb-4 md:mb-6">
                <span className="text-[#39FF14]">Mussawar</span> Tech Blog
              </h1>
              <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
                Expert insights on Web3 development, blockchain, AI agents, smart contracts,
                DeFi, and full-stack engineering.
              </p>
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-gray-900/20 border border-white/10 rounded-lg overflow-hidden hover:shadow-lg hover:border-[#39FF14]/30 transition-all duration-300 flex flex-col group"
                >
                  <div className="p-4 sm:p-6 flex flex-col flex-1">
                    {/* Category + Read Time */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs sm:text-sm font-medium text-[#39FF14] bg-[#39FF14]/10 px-2 sm:px-3 py-1 rounded-md">
                          {post.category}
                        </span>
                      </div>
                      <span className="text-xs sm:text-sm text-gray-400">{post.readTime}</span>
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
                    <p className="text-sm sm:text-base text-gray-400 mb-4 flex-1 overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
                      {post.excerpt}
                    </p>

                    {/* Footer */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-auto pt-4 border-t border-white/5 gap-2">
                      <time dateTime={post.date} className="text-xs sm:text-sm text-gray-500">
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
                  </div>
                </article>
              ))}
            </div>

            {/* Newsletter CTA */}
            <div className="mt-12 md:mt-16 text-center">
              <div className="bg-gray-900/20 rounded-lg p-6 md:p-8 border border-white/10">
                <h2 className="text-xl md:text-2xl font-bold text-white font-orbitron mb-4">
                  Stay Updated with <span className="text-[#39FF14]">Web3 Trends</span>
                </h2>
                <p className="text-sm md:text-base text-gray-400 mb-6 px-2">
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