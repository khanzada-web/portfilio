import { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/app/components/layout/Header'
import { Footer } from '@/app/components/layout/Footer'
import { BreadcrumbSchema } from '@/app/components/seo/BreadcrumbSchema'
import { FAQSchema } from '@/app/components/seo/FAQSchema'
import { notFound } from 'next/navigation'
import {
  getAllSlugs,
  getPostBySlug,
  getRelatedPosts,
} from '../lib/posts'

// Optional per-post FAQs. Add an entry when a post needs structured FAQ schema.
// Key = slug (filename without .ts)
const postFaqs: Record<string, { question: string; answer: string }[]> = {
  'meta-muse-code-typescript-nextjs-guide-2026': [
    {
      question: 'Is Muse Code free?',
      answer:
        'No. It is a paid token-based service. Meta offers different tiers; one may allow training on your code in exchange for lower rates. Check the current Meta Model API pricing.',
    },
    {
      question: 'Does it work on Windows?',
      answer: 'Native Windows is not supported. Use WSL2.',
    },
    {
      question: 'How does it compare to Claude Code?',
      answer:
        'Both are terminal agents aimed at long-horizon repository work. Muse Code emphasizes persistent background agents and worktree isolation; Claude Code has a larger existing ecosystem of skills and community tools. Choose based on model quality on your codebase, pricing, and team familiarity.',
    },
    {
      question: 'Can I use it with MCP?',
      answer:
        "MCP (Model Context Protocol) is the open standard for connecting agents to tools and data. Muse Code can be used alongside MCP servers if you expose the tools through the supported interface, but the core Muse Code harness is Meta's proprietary stack.",
    },
    {
      question: 'Should I let it write to main?',
      answer:
        'No. Always work on a branch or in isolated worktrees and require human review before merge.',
    },
  ],
  'nextjs-16-3-instant-navigations-production-guide': [
    {
      question: 'Do I need both cacheComponents and partialPrefetching?',
      answer:
        'Yes. cacheComponents enables the new caching model, Instant Insights, and related behaviors. partialPrefetching switches prefetching to reusable shells per route. Both are required for the full Instant Navigations experience.',
    },
    {
      question: 'Will Instant Navigations become the default?',
      answer:
        'Yes. The Next.js team has stated that the behaviors behind Instant Navigations are expected to become the default in a future major version.',
    },
    {
      question: 'Can I still intentionally block a navigation?',
      answer:
        'Yes. Export export const instant = false on the page or layout.',
    },
    {
      question: 'Is the Edge runtime supported with cacheComponents?',
      answer:
        'No. Cache Components requires the Node.js runtime. Migrate routes that still set runtime = "edge" before enabling the flag.',
    },
  ],
  'how-to-get-500k-views-on-x-2026': [
    {
      question:
        'Is 500K views the same as 500K verified Home Timeline impressions?',
      answer:
        'No. Public views count every time the post is rendered. Monetization focuses on verified users seeing the post in their Home Timeline.',
    },
    {
      question: 'Can a small account really hit 500K views on X?',
      answer:
        'Yes. One strong original post with early engagement velocity and Premium user engagement can clear 500K even from a modest following.',
    },
    {
      question: 'How important is native video for reaching 500K views?',
      answer:
        'Very important. Native video with solid watch-through and replay rates receives one of the strongest format boosts on X in 2026.',
    },
  ],
  'agentrouter-free-claude-code-api-guide-2026': [
    {
      question: 'Is AgentRouter really free?',
      answer:
        'Yes. It is a public-benefit AI coding gateway that gives free credits on signup. Credits are limited, so use them for learning and prototypes rather than heavy production traffic.',
    },
    {
      question: 'What is the correct base URL for Claude Code?',
      answer:
        'Use https://agentrouter.org (without /v1) together with ANTHROPIC_AUTH_TOKEN and ANTHROPIC_MODEL.',
    },
    {
      question: 'Do I need a credit card to start?',
      answer:
        'No. Sign up, get your free API key from the console, set the three environment variables, and start using Claude Code.',
    },
  ],
  'prisma-connection-exhaustion-nextjs-16-accelerate': [
    {
      question: 'Why does Prisma open so many connections on Vercel?',
      answer:
        'Each serverless invocation can create its own PrismaClient if you do not use a singleton. Concurrent requests multiply pools until Postgres hits max_connections.',
    },
    {
      question: 'Should I use connection_limit=1 with Prisma Accelerate?',
      answer:
        'Yes for pure serverless. Accelerate (or PgBouncer) handles the real pooling; the app-side limit should stay low.',
    },
  ],
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
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
  const post = await getPostBySlug(slug)
  if (!post) notFound()

  const faqs = postFaqs[slug] || []
  const related = await getRelatedPosts(slug)
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

            <div
              className="prose prose-invert prose-headings:font-orbitron prose-a:text-[#39FF14] max-w-none blog-content blog-content-stack"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

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

            {related.length > 0 && (
              <section className="mb-8">
                <div className="bg-[#0A1221] border border-[#39FF14]/20 rounded-2xl p-6 sm:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.25)]">
                  <h2 className="text-xl font-bold text-white font-orbitron mb-5">
                    Related guides
                  </h2>
                  <div className="grid gap-3 sm:gap-4">
                    {related.map((rpost) => (
                      <Link
                        key={rpost.slug}
                        href={`/blog/${rpost.slug}`}
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
