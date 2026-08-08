import { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/app/components/layout/Header'
import { Footer } from '@/app/components/layout/Footer'
import { BreadcrumbSchema } from '@/app/components/seo/BreadcrumbSchema'
import { FAQSchema } from '@/app/components/seo/FAQSchema'
import { notFound } from 'next/navigation'

import * as secureServerActions from '../content/secure-server-actions-nextjs-16-auth-validation-dal'
import * as prismaConnection from '../content/prisma-connection-exhaustion-nextjs-16-accelerate'
import * as stopUseClient from '../content/nextjs-16-stop-overusing-use-client-server-components'
import * as julySecurityPatch from '../content/nextjs-july-2026-security-patch-server-actions'
import * as saasTutorial from '../content/nextjs-16-saas-tutorial-prisma-typescript-2026'
import * as aiAgents from '../content/ai-agents-blockchain-web3-2026'
import * as accountAbstraction from '../content/account-abstraction-smart-wallets-guide'
import * as rwaGuide from '../content/real-world-asset-tokenization-rwa-guide'
import * as modularL2 from '../content/modular-blockchains-l2-developer-guide'
import * as multiSiteVps from '../content/deploying-multi-site-nextjs-vps-nginx'
import * as ordinalsMarketplace from '../content/building-bitcoin-ordinals-marketplace'
import * as metamaskWc from '../content/metamask-vs-walletconnect-dapp'
import * as spfDkim from '../content/spf-dkim-dmarc-multi-domain-vps'
import * as gdprChecklist from '../content/gdpr-compliant-web-apps-checklist'
import * as dexPerformance from '../content/multi-chain-dex-interface-performance'
import * as dockerMultiStage from '../content/docker-multi-stage-nextjs-16-standalone-production'
import * as agentRouterGuide from '../content/agentrouter-free-claude-code-api-guide-2026'
import * as howToGet500kViews from '../content/how-to-get-500k-views-on-x-2026'

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

function toPost(mod: {
  title: string
  excerpt: string
  content: string
  date: string
  readTime: string
  category: string
  author: string
  keywords: string[]
}): BlogPost {
  return {
    title: mod.title,
    excerpt: mod.excerpt,
    content: mod.content,
    date: mod.date,
    readTime: mod.readTime,
    category: mod.category,
    author: mod.author,
    keywords: mod.keywords,
  }
}

const blogPosts: Record<string, BlogPost> = {
  'how-to-get-500k-views-on-x-2026': toPost(howToGet500kViews),
  'agentrouter-free-claude-code-api-guide-2026': toPost(agentRouterGuide),
  'docker-multi-stage-nextjs-16-standalone-production': toPost(dockerMultiStage),
  'secure-server-actions-nextjs-16-auth-validation-dal': toPost(secureServerActions),
  'prisma-connection-exhaustion-nextjs-16-accelerate': toPost(prismaConnection),
  'nextjs-16-stop-overusing-use-client-server-components': toPost(stopUseClient),
  'nextjs-july-2026-security-patch-server-actions': toPost(julySecurityPatch),
  'nextjs-16-saas-tutorial-prisma-typescript-2026': toPost(saasTutorial),
  'ai-agents-blockchain-web3-2026': toPost(aiAgents),
  'account-abstraction-smart-wallets-guide': toPost(accountAbstraction),
  'real-world-asset-tokenization-rwa-guide': toPost(rwaGuide),
  'modular-blockchains-l2-developer-guide': toPost(modularL2),
  'deploying-multi-site-nextjs-vps-nginx': toPost(multiSiteVps),
  'building-bitcoin-ordinals-marketplace': toPost(ordinalsMarketplace),
  'metamask-vs-walletconnect-dapp': toPost(metamaskWc),
  'spf-dkim-dmarc-multi-domain-vps': toPost(spfDkim),
  'gdpr-compliant-web-apps-checklist': toPost(gdprChecklist),
  'multi-chain-dex-interface-performance': toPost(dexPerformance),
}

const postFaqs: Record<string, { question: string; answer: string }[]> = {
  'how-to-get-500k-views-on-x-2026': [
    {
      question: 'Is 500K views the same as 500K verified Home Timeline impressions?',
      answer: 'No. Public views count every time the post is rendered. Monetization focuses on verified users seeing the post in their Home Timeline. Track both numbers in Creator Studio.',
    },
    {
      question: 'Can a small account really hit 500K views on X?',
      answer: 'Yes. One strong original post with early engagement velocity and Premium user engagement can clear 500K even from a modest following. It is uncommon but achievable.',
    },
    {
      question: 'Do replies count toward the 500K monetization threshold?',
      answer: 'Original posts are the primary path. Reply farming alone is no longer the reliable route the algorithm favors for large verified Home Timeline impression totals.',
    },
    {
      question: 'How important is native video for reaching 500K views?',
      answer: 'Very important. Native video with solid watch-through and replay rates receives one of the strongest format boosts on X in 2026.',
    },
    {
      question: 'What is the single most important factor in the first 30 minutes?',
      answer: 'Early engagement velocity — fast replies, likes, reposts and quotes from real accounts. This is the main gate from follower-only distribution into the For You feed.',
    },
  ],
  'prisma-connection-exhaustion-nextjs-16-accelerate': [
    {
      question: 'Why does Prisma open so many connections on Vercel?',
      answer: 'Each serverless invocation can create its own PrismaClient if you do not use a singleton. Concurrent requests multiply pools until Postgres hits max_connections.',
    },
    {
      question: 'Should I use connection_limit=1 with Prisma Accelerate?',
      answer: 'Yes for pure serverless. Accelerate (or PgBouncer) handles the real pooling; the app-side limit should stay low so each isolate does not open a large private pool.',
    },
    {
      question: 'Does the singleton work with Next.js 16 Server Actions?',
      answer: 'Yes. Import the shared prisma instance from your server-only module inside Server Actions and Route Handlers. Never instantiate a new client per action.',
    },
    {
      question: 'Prisma Accelerate vs PgBouncer — which should I choose?',
      answer: 'Choose Accelerate for zero-ops managed pooling and optional cache on serverless. Choose PgBouncer when you already run a VPS or want full control over the pooler configuration.',
    },
  ],
  'agentrouter-free-claude-code-api-guide-2026': [
    {
      question: 'Is AgentRouter really free?',
      answer: 'Yes. It is a public-benefit AI coding gateway that gives free credits on signup. Credits are limited, so use them for learning and prototypes rather than heavy production traffic.',
    },
    {
      question: 'What is the correct base URL for Claude Code?',
      answer: 'Use https://agentrouter.org (without /v1) together with ANTHROPIC_AUTH_TOKEN and ANTHROPIC_MODEL. Do not mix it with the OpenAI-compatible /v1 endpoint.',
    },
    {
      question: 'Do I need a credit card to start?',
      answer: 'No. Sign up, get your free API key from the console, set the three environment variables, and start using Claude Code.',
    },
    {
      question: 'Will this override my official Claude Pro login?',
      answer: 'Yes, the environment variables take priority in that terminal. To return to the official account, unset ANTHROPIC_AUTH_TOKEN, ANTHROPIC_BASE_URL and ANTHROPIC_MODEL, then restart Claude.',
    },
  ],
}

function getRelatedPosts(currentSlug: string, limit = 3): { slug: string; post: BlogPost }[] {
  const entries = Object.entries(blogPosts)
  const current = blogPosts[currentSlug]
  if (!current) return []

  const sameCategory = entries
    .filter(([slug, post]) => slug !== currentSlug && post.category === current.category)
    .sort((a, b) => b[1].date.localeCompare(a[1].date))

  const others = entries
    .filter(([slug, post]) => slug !== currentSlug && post.category !== current.category)
    .sort((a, b) => b[1].date.localeCompare(a[1].date))

  return [...sameCategory, ...others]
    .slice(0, limit)
    .map(([slug, post]) => ({ slug, post }))
}

export function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts[slug]
  if (!post) return { title: 'Post Not Found' }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://mussawarhayat.site/blog/${slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: '/my-pic.jpeg',
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
      images: ['/my-pic.jpeg'],
    },
    alternates: {
      canonical: `/blog/${slug}`,
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = blogPosts[slug]
  if (!post) notFound()

  const faqs = postFaqs[slug] || []
  const related = getRelatedPosts(slug)
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: post.title, url: `/blog/${slug}` },
  ]

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      {faqs.length > 0 && <FAQSchema faqs={faqs} />}

      <div className="min-h-screen bg-[#060B16] font-sans">
        <Header />

        <main id="main-content" className="pt-32 sm:pt-36 md:pt-40 pb-24">
          <article className="max-w-7xl mx-auto px-4 sm:px-6">
            {/* Header card */}
            <header className="mb-6 sm:mb-8 bg-[#0A1221] border border-[#39FF14]/20 rounded-2xl p-6 sm:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.25)]">
              <div className="flex flex-wrap items-center gap-3 text-sm text-white/50 mb-5">
                <span className="px-3 py-1 bg-[#39FF14]/10 text-[#39FF14] text-xs font-semibold rounded-md border border-[#39FF14]/25 tracking-wide uppercase">
                  {post.category}
                </span>
                <time dateTime={post.date} className="text-white/45">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <span className="text-white/35">·</span>
                <span className="text-white/45">{post.readTime}</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-orbitron leading-tight mb-4 tracking-tight">
                {post.title}
              </h1>
              <p className="text-base sm:text-lg text-white/65 leading-relaxed font-sans border-t border-white/5 pt-4">
                {post.excerpt}
              </p>
              <p className="mt-4 text-sm text-white/40 font-sans">
                By <span className="text-white/70">{post.author}</span>
              </p>
            </header>

            {/* Body — each section is a card via CSS */}
            <div
              className="prose prose-invert prose-headings:font-orbitron prose-a:text-[#39FF14] max-w-none blog-content blog-content-stack"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* FAQ cards */}
            {faqs.length > 0 && (
              <section className="mt-2 mb-6 sm:mb-8">
                <div className="bg-[#0A1221] border border-[#39FF14]/20 rounded-2xl p-6 sm:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.25)]">
                  <h2 className="text-xl sm:text-2xl font-bold text-white font-orbitron mb-6">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    {faqs.map((faq) => (
                      <div
                        key={faq.question}
                        className="bg-[#060B16] border border-white/10 rounded-xl p-4 sm:p-5 hover:border-[#39FF14]/30 transition-colors"
                      >
                        <h3 className="text-base sm:text-lg font-semibold text-[#39FF14] mb-2 font-orbitron">
                          {faq.question}
                        </h3>
                        <p className="text-sm sm:text-base text-white/70 leading-relaxed font-sans">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* Related guides cards */}
            {related.length > 0 && (
              <section className="mb-8">
                <div className="bg-[#0A1221] border border-[#39FF14]/20 rounded-2xl p-6 sm:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.25)]">
                  <h2 className="text-xl font-bold text-white font-orbitron mb-5">
                    Related guides
                  </h2>
                  <div className="grid gap-3 sm:gap-4">
                    {related.map(({ slug: rslug, post: rpost }) => (
                      <Link
                        key={rslug}
                        href={`/blog/${rslug}`}
                        className="block bg-[#060B16] border border-white/10 rounded-xl p-4 sm:p-5 hover:border-[#39FF14]/40 transition-all group"
                      >
                        <span className="text-white font-medium group-hover:text-[#39FF14] transition-colors font-orbitron text-sm sm:text-base">
                          {rpost.title}
                        </span>
                        <p className="text-sm text-white/50 mt-2 line-clamp-2 font-sans leading-relaxed">
                          {rpost.excerpt}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </section>
            )}

            <div className="text-center pt-2">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A1221] border border-[#39FF14]/25 rounded-xl text-[#39FF14] hover:border-[#39FF14] hover:bg-[#39FF14]/5 transition-all text-sm font-orbitron tracking-wide"
              >
                ← Back to all posts
              </Link>
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </>
  )
}
