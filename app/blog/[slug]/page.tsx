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
  'nextjs-16-stop-overusing-use-client-server-components': [
    {
      question: 'Does every interactive component need its own file with use client?',
      answer: 'Yes for clarity and minimal boundaries. Group tightly related interactive pieces in one client file if they share state, but never mark a large page or layout just because one button needs a click handler.',
    },
    {
      question: 'Can I pass Server Components as children to a Client Component?',
      answer: 'Yes. That is the recommended pattern. The children remain Server Components; only the client wrapper hydrates. Do not pass non-serializable props or functions from server to client except through the children slot or supported serialization.',
    },
    {
      question: 'What happens if I put use client in a layout.tsx?',
      answer: 'Every page and nested layout under that segment becomes part of the client boundary. Prefer client islands inside the layout or pass interactive chrome as client children while keeping the layout itself a Server Component.',
    },
    {
      question: 'How does this relate to Server Actions?',
      answer: 'Server Actions run on the server and can be called from Client Components. Keep the action thin, validate and authorize on the server, and let the client island only handle UI state.',
    },
    {
      question: 'Will removing use client break my third-party libraries?',
      answer: 'Only libraries that require browser APIs or hooks need a client boundary. Many UI libraries now support Server Components or provide separate server-safe entry points. Import the client parts into small islands and keep the rest of the tree server-side.',
    },
  ],
  'secure-server-actions-nextjs-16-auth-validation-dal': [
    {
      question: 'Are Server Actions automatically protected because they run on the server?',
      answer: 'No. The implementation runs on the server, but the endpoint is publicly reachable via POST. You must still validate, authenticate, and authorize on every call.',
    },
    {
      question: 'Is it safe to rely on the form only being rendered for logged-in users?',
      answer: 'No. Render-time gating is not a security boundary. Anyone can craft the same POST request. Always re-check the session inside the action.',
    },
    {
      question: 'Should I put Prisma calls directly in the use server file?',
      answer: 'Prefer a server-only Data Access Layer. Thin actions stay easy to audit; the DAL owns auth, ownership, and database access and cannot be imported into Client Components.',
    },
    {
      question: 'How do Server Actions relate to use client?',
      answer: 'Client Components call Server Actions for mutations. Keep the client boundary small (islands) and the action thin.',
    },
    {
      question: 'What about rate limiting and allowedOrigins?',
      answer: 'Configure serverActions.allowedOrigins when you sit behind proxies or CDNs. Add application-level rate limiting for sensitive mutations (login, password reset, payment-related actions).',
    },
  ],
  'deploying-multi-site-nextjs-vps-nginx': [
    {
      question: 'How many Next.js apps can one VPS run?',
      answer: 'It depends on traffic and memory. Each Node process needs RAM for the app and peak concurrency. Start with one or two apps on a 2–4 GB VPS, monitor RSS and CPU, then scale vertically or split hosts.',
    },
    {
      question: 'Should I use PM2 cluster mode with Next.js?',
      answer: 'For most sites, a single fork instance per app behind Nginx is simpler and sufficient. Next.js already handles concurrent requests inside one process. Use multiple instances only when you have measured CPU-bound load.',
    },
    {
      question: 'Is Nginx required or can I expose Next.js directly?',
      answer: 'Do not expose Node publicly. Nginx (or another reverse proxy) should terminate TLS, handle HTTP→HTTPS redirects, and forward only to localhost ports.',
    },
    {
      question: 'How does this relate to Prisma and connection pooling?',
      answer: 'On a long-lived VPS process you can use a higher Prisma connection_limit than pure serverless. Still prefer a pooler (PgBouncer or Prisma Accelerate) under concurrent load.',
    },
    {
      question: 'When should I move from PM2 to Docker?',
      answer: 'When you need reproducible images, stricter isolation, or the same deploy path across multiple servers. Multi-stage standalone builds are the next step after a stable PM2 + Nginx setup.',
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
    keywords: post.keywords,
    authors: [{ name: post.author, url: 'https://mussawarhayat.site' }],
    alternates: { canonical: pageUrl },
    robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
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
    author: { '@id': 'https://mussawarhayat.site/#person' },
    publisher: {
      '@type': 'Organization',
      name: 'Mussawar Hayat',
      logo: { '@type': 'ImageObject', url: 'https://mussawarhayat.site/logo.webp', width: 192, height: 192 },
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

  const related = getRelatedPosts(slug, 3)
  const faqs = postFaqs[slug]
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: post.title, url: `/blog/${slug}` },
  ]

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <BlogPostingSchema post={post} slug={slug} />
      {faqs && faqs.length > 0 && <FAQSchema faqs={faqs} />}
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

              {related.length > 0 && (
                <nav aria-label="Related articles" className="mt-24">
                  <h2 className="text-2xl font-bold text-white font-orbitron mb-8 tracking-tight">
                    Related <span className="text-[#39FF14]">Articles</span>
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {related.map(({ slug: relatedSlug, post: relatedPost }) => (
                      <article
                        key={relatedSlug}
                        className="group bg-[#0A1221] border border-[#39FF14]/20 p-6 hover:border-[#39FF14] transition-all duration-300 flex flex-col"
                      >
                        <span className="text-xs font-medium text-[#39FF14] bg-[#39FF14]/10 px-2 py-1 rounded-md w-fit mb-3">
                          {relatedPost.category}
                        </span>
                        <h3 className="text-lg font-semibold text-white font-orbitron mb-2 line-clamp-2">
                          <Link
                            href={`/blog/${relatedSlug}`}
                            className="hover:text-[#39FF14] transition-colors"
                          >
                            {relatedPost.title}
                          </Link>
                        </h3>
                        <p className="text-sm text-white/60 mb-4 line-clamp-2 flex-1">
                          {relatedPost.excerpt}
                        </p>
                        <Link
                          href={`/blog/${relatedSlug}`}
                          className="text-sm text-white/70 hover:text-[#39FF14] transition-colors font-orbitron uppercase tracking-wider mt-auto"
                        >
                          Read more →
                        </Link>
                      </article>
                    ))}
                  </div>
                </nav>
              )}

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
