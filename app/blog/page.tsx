import { Metadata } from 'next'
import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'
import { Reveal } from '@/app/components/motion/Reveal'
import { BreadcrumbSchema } from '@/app/components/seo/BreadcrumbSchema'
import { SubscriptionModal } from '@/app/components/SubscriptionModal'
import { EditorialHeadline } from '@/app/components/ui/EditorialHeadline'
import { PageShell } from '@/app/components/ui/PageShell'
import { SectionLabel } from '@/app/components/ui/SectionLabel'
import { getAllPosts } from './lib/posts'
import { SHARE_IMAGE } from '@/app/lib/site'

export const metadata: Metadata = {
  title: 'Next.js 16, Web3 & AI Engineering Blog 2026 | Production Guides by Mussawar Hayat',
  description:
    'Production Next.js 16, React, TypeScript, Web3, Solidity, Core Web Vitals, security, and AI agent engineering guides from full-stack developer Mussawar Hayat. Hire a Next.js expert.',
  keywords: [
    'Next.js 16 tutorial 2026',
    'Web3 developer blog',
    'hire Next.js developer',
    'full-stack developer blog',
    'Solidity tutorial 2026',
    'Account Abstraction guide',
    'Core Web Vitals Next.js',
    'Bitcoin Ordinals marketplace',
    'Server Components Next.js 16',
    'AI coding agent production',
  ],
  openGraph: {
    images: SHARE_IMAGE,
    title: 'Next.js 16, Web3 & AI Engineering Blog 2026 | Mussawar Hayat',
    description:
      'Practical architecture guides and production patterns for Next.js 16, Web3, Solidity, and full-stack engineering.',
    url: 'https://mussawarhayat.site/blog',
    type: 'website',
  },
  twitter: {
    images: SHARE_IMAGE,
    card: 'summary_large_image',
    title: 'Next.js 16, Web3 & AI Blog | Mussawar Hayat',
    description:
      'Production-grade guides on Next.js 16, Web3, Solidity, DeFi, and full-stack systems.',
  },
  alternates: {
    canonical: '/blog',
    types: {
      'application/rss+xml': 'https://mussawarhayat.site/feed.xml',
    },
  },
}

const breadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'Blog', url: '/blog' },
]

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })

export default async function BlogPage() {
  const blogPosts = await getAllPosts()
  const [latest, ...rest] = blogPosts

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <PageShell>
        <EditorialHeadline as="h1" index="/blog" eyebrow="Writing" aside={`${blogPosts.length} guides`} solid="Mussawar" accent="Tech Blog">
          <p>
            Production Next.js 16, React, TypeScript, Web3, Solidity, DeFi, Bitcoin Ordinals, Docker, and AI-agent engineering guides
            from full-stack developer Mussawar Hayat.
          </p>
          <p className="mt-4">
            <a href="/feed.xml" className="link-underline font-mono text-xs uppercase tracking-[0.2em] text-neon">
              Subscribe via RSS
            </a>
          </p>
        </EditorialHeadline>

        {latest && (
          <section className="mt-16 md:mt-24">
            <SectionLabel index="01">Latest</SectionLabel>
            <Reveal>
              <article className="group relative grid grid-cols-1 gap-6 border-y border-white/10 py-10 md:grid-cols-12 md:gap-10 md:py-14">
                <div className="flex gap-4 font-mono text-xs uppercase tracking-[0.25em] text-white/55 md:col-span-3 md:flex-col md:gap-2">
                  <time dateTime={latest.date}>{formatDate(latest.date)}</time>
                  <span className="text-neon">{latest.category}</span>
                  <span>{latest.readTime}</span>
                </div>
                <div className="md:col-span-9">
                  <h2 className="text-[clamp(1.5rem,3vw,2.6rem)] font-black uppercase leading-[1.02] tracking-[-0.02em] text-white transition-colors group-hover:text-neon">
                    <Link href={`/blog/${latest.slug}`} className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none">
                      {latest.title}
                    </Link>
                  </h2>
                  <p className="mt-5 max-w-3xl font-sans text-base leading-relaxed text-white/70">{latest.excerpt}</p>
                  <span className="mt-6 inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-neon">
                    Read the guide
                    <FiArrowUpRight className="transition-transform duration-300 group-hover:rotate-45" aria-hidden="true" />
                  </span>
                </div>
              </article>
            </Reveal>
          </section>
        )}

        <section className="mt-20 md:mt-28">
          <SectionLabel index="02">{`All guides (${rest.length})`}</SectionLabel>
          <ol className="border-b border-white/10">
            {rest.map((post) => (
              <li key={post.slug} className="group relative border-t border-white/10">
                <article className="grid grid-cols-1 gap-2 py-7 md:grid-cols-12 md:gap-10 md:py-8">
                  <time dateTime={post.date} className="font-mono text-xs uppercase tracking-[0.25em] text-white/50 md:col-span-2 md:pt-1">
                    {formatDate(post.date)}
                  </time>
                  <div className="md:col-span-7">
                    <h2 className="text-base font-bold leading-snug tracking-wide text-white transition-colors group-hover:text-neon md:text-lg">
                      <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="mt-2 line-clamp-2 font-sans text-sm leading-relaxed text-white/55">{post.excerpt}</p>
                  </div>
                  <div className="flex gap-4 font-mono text-xs uppercase tracking-[0.25em] text-white/50 md:col-span-3 md:flex-col md:items-end md:gap-2 md:pt-1">
                    <span className="text-neon/80">{post.category}</span>
                    <span>{post.readTime}</span>
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-24 border-t border-white/10 pt-16 md:mt-32 md:pt-20">
          <Reveal className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
            <div className="lg:col-span-7">
              <h2 className="text-[clamp(1.6rem,3vw,2.5rem)] font-black uppercase leading-[1] tracking-[-0.02em] text-white">
                Stay updated with <span className="text-neon">Web3 &amp; Full-Stack</span> insights
              </h2>
              <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-white/70">
                Get practical architecture guides on Next.js 16, Web3, Solidity, DeFi, and production full-stack systems delivered to your
                inbox.
              </p>
            </div>
            <div className="flex flex-col items-start gap-6 lg:col-span-5 lg:items-end">
              <SubscriptionModal />
              <div className="flex gap-6 font-mono text-xs uppercase tracking-[0.2em]">
                <Link href="/services" className="link-underline text-white/75 hover:text-neon">
                  Explore services
                </Link>
                <Link href="/contact" className="link-underline text-white/75 hover:text-neon">
                  Hire me
                </Link>
              </div>
            </div>
          </Reveal>
        </section>
      </PageShell>
    </>
  )
}
