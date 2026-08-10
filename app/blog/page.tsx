import { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/app/components/layout/Header'
import { Footer } from '@/app/components/layout/Footer'
import { BreadcrumbSchema } from '@/app/components/seo/BreadcrumbSchema'
import { SubscriptionModal } from '@/app/components/SubscriptionModal'
import { getAllPosts } from './lib/posts'

export const metadata: Metadata = {
  title: 'Blog | Web3 & Full-Stack Insights',
  description:
    'Practical guides on Next.js 16, React, TypeScript, Web3, Solidity, DeFi, Bitcoin Ordinals, DevOps, AI coding tools, and full-stack engineering by Mussawar Hayat.',
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
    'Server Actions security',
    'Docker multi-stage Next.js',
    'Server Components Next.js 16',
    'AgentRouter',
    'free Claude Code',
    'Meta Muse Code',
    'AI coding agent',
    'how to get 500k views on X',
    'Next.js 16.3 Instant Navigations',
  ],
  openGraph: {
    title: 'Mussawar Hayat Blog | Web3 & Full-Stack Developer Insights',
    description:
      'Practical architecture guides and production patterns for Next.js, Web3, Solidity, and full-stack engineering.',
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
    description:
      'Production-grade guides on Next.js, Web3, Solidity, DeFi, and full-stack systems.',
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

export default async function BlogPage() {
  const blogPosts = await getAllPosts()

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
                Practical architecture guides and production patterns for Next.js,
                React, TypeScript, Web3, Solidity, DeFi, Bitcoin Ordinals, and
                full-stack engineering.
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
                    <span className="text-xs sm:text-sm text-white/50">
                      {post.readTime}
                    </span>
                  </div>

                  <h2
                    className="text-lg sm:text-xl font-semibold text-white font-orbitron mb-3 overflow-hidden"
                    style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                    }}
                  >
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-[#39FF14] transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  <p
                    className="text-sm sm:text-base text-white/60 mb-4 flex-1 overflow-hidden"
                    style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                    }}
                  >
                    {post.excerpt}
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-auto pt-4 border-t border-white/5 gap-2">
                    <time
                      dateTime={post.date}
                      className="text-xs sm:text-sm text-white/40"
                    >
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
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center">
              <div className="bg-[#0A1221] border border-[#39FF14]/20 p-8 md:p-12">
                <h2 className="text-xl md:text-2xl font-bold text-white font-orbitron mb-4">
                  Stay Updated with{' '}
                  <span className="text-[#39FF14]">Web3 & Full-Stack</span>{' '}
                  Insights
                </h2>
                <p className="text-sm md:text-base text-white/60 mb-6 px-2">
                  Get practical architecture guides on Next.js, Web3, Solidity,
                  DeFi, and production full-stack systems delivered to your
                  inbox.
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
