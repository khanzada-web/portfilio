import { Metadata } from 'next'
import Link from 'next/link'
import { FiArrowLeft } from 'react-icons/fi'
import { BreadcrumbSchema } from '@/app/components/seo/BreadcrumbSchema'
import { PageShell } from '@/app/components/ui/PageShell'
import { SectionLabel } from '@/app/components/ui/SectionLabel'
import { FAQSchema } from '@/app/components/seo/FAQSchema'
import { ArticleSchema } from '@/app/components/seo/ArticleSchema'
import { notFound } from 'next/navigation'
import {
  getAllSlugs,
  getPostBySlug,
  getRelatedPosts,
} from '../lib/posts'
import { clampDescription, pageTitle } from '@/app/lib/seo'
import { AuthorBox } from '../components/AuthorBox'
import './article.css'
import { SHARE_IMAGE } from '@/app/lib/site'

const postFaqs: Record<string, { question: string; answer: string }[]> = {
  'claude-code-mods-typescript-production-guardrails-2026': [
    {
      question: 'Do I need Claude Code 2.1.287?',
      answer:
        'Yes. Mods load on v2.1.287 or later, in the CLI and the desktop app. Check with claude --version. They are on by default; --safe-mode, --bare, and disableAllHooks stop them.',
    },
    {
      question: 'Is a mod the same as a settings hook?',
      answer:
        'No. Settings hooks can observe and block. Mods can also rewrite the event, replace the result, draw UI, and register commands. Managed settings hooks still run before a mod tool hook, and their block is final.',
    },
    {
      question: 'Can I write the mod in TypeScript?',
      answer:
        'Yes. Claude Code loads .ts and .tsx modules directly. The official tutorial uses JavaScript; the same register export works in TypeScript. You do not bundle it.',
    },
    {
      question: 'Will this stop every dangerous command?',
      answer:
        'No. Matchers and regexes miss wrapped shells, aliases, and tools you did not list. Use the mod with branch protection, a sandbox, and human review of the diff.',
    },
    {
      question: 'Where should the plugin live?',
      answer:
        'In the repo, loaded with claude --plugin-dir, or installed from a marketplace you trust. Session mods under ~/.claude/dev-mods are temporary.',
    },
  ],
  'agent-skills-typescript-nextjs-2026': [
    {
      question: 'Do Agent Skills work only with Claude?',
      answer:
        'No. The format is an open standard published at agentskills.io. The same SKILL.md is discovered by Claude Code, Cursor, Codex CLI, Gemini CLI, and other tools that implement the specification.',
    },
    {
      question: 'Where should I put skills — personal or project?',
      answer:
        'Project skills under .agents/skills/ or .claude/skills/ inside the repo travel with the codebase and are ideal for team conventions. Personal skills under ~/.claude/skills/ (or equivalent) suit your own cross-project workflows.',
    },
    {
      question: 'How is a skill different from CLAUDE.md or AGENTS.md?',
      answer:
        'CLAUDE.md / AGENTS.md is always loaded and should stay short. Skills use progressive disclosure: only name and description load at session start; full instructions load only when the task matches the description.',
    },
    {
      question: 'What if the agent ignores my skill?',
      answer:
        'Almost always a description problem. Expand the description with the exact phrases users type when the skill should fire, then restart the agent.',
    },
    {
      question: 'Are third-party skills safe to install?',
      answer:
        'Treat them like npm packages. Review SKILL.md and any scripts before install. Prefer known authors (Anthropic, Matt Pocock, Addy Osmani, your own team) and avoid untrusted marketplaces on machines that hold secrets.',
    },
  ],
  'secure-agent-skills-skill-md-ai-install-commands-2026': [
    {
      question: 'Is a Markdown skill really executable?',
      answer:
        'The file is text. The agent is the interpreter. Once the skill body is in context, the agent follows it with whatever tools you enabled — including a terminal. Bundled scripts in scripts/ are ordinary executables.',
    },
    {
      question: 'Are official Matt Pocock or Anthropic skills safe by default?',
      answer:
        'They are a better starting point than anonymous zips, and they should still be pinned and reviewed when they change. Trust the commit you read, not the brand in the abstract.',
    },
    {
      question: 'Does sandboxing make skills safe?',
      answer:
        'Sandboxing shrinks blast radius. It does not stop a skill from leaking whatever the sandbox can still read, or from asking you to disable the sandbox.',
    },
    {
      question: 'Should skills live in the repo or in the home directory?',
      answer:
        'Team conventions belong in the repo so they go through pull request. Personal cross-project skills can live in the home directory, but inspect them first after any incident.',
    },
    {
      question: 'What should I do after a bad install command?',
      answer:
        'Disconnect the machine from secrets first. Rotate tokens that lived on it. Do not restore agent config until every skill, hook, and MCP entry is read.',
    },
  ],
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
        'No. Cache Components requires the Node.js runtime. Migrate routes that still set runtime = \"edge\" before enabling the flag.',
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
  'ai-agent-postgres-write-guardrails-nextjs-2026': [
    {
      question: 'Can I give the agent a read-write Prisma client and just be careful?',
      answer:
        'No. Care is not an access-control mechanism. Split Postgres roles and allowlisted tools so the model never sees DATABASE_URL or chooses a tenant id.',
    },
    {
      question: 'Should every agent write wait for a human?',
      answer:
        'No. Low-risk, reversible, tenant-scoped creates can persist immediately. Irreversible or cross-account writes should require approval.',
    },
    {
      question: 'Is MCP required for a write gateway?',
      answer:
        'No. MCP is one way to expose tools. The same Next.js Route Handler works behind an HTTP tool call from any host.',
    },
  ],
  'nextjs-16-api-rate-limiting-upstash-redis-production-2026': [
    {
      question: 'Is Next.js middleware enough for rate limiting?',
      answer:
        'Middleware is a good first filter for anonymous routes. Authenticated and agent routes should still check inside the Route Handler or Server Action where the session exists.',
    },
    {
      question: 'Should I use Redis or an in-memory Map?',
      answer:
        'Use an in-memory Map only on a single Node process. Use Redis (local or hosted) as soon as you have multiple instances, serverless isolates, or an agent gateway.',
    },
    {
      question: 'What status should agents receive when limited?',
      answer:
        'HTTP 429 with a Retry-After header and a small JSON body. Document that contract in the tool description so the model backs off instead of retrying immediately.',
    },
    {
      question: 'Do Server Actions need the same limiter?',
      answer:
        'Yes. A Server Action is still an HTTP endpoint. Apply the same identity key and budget after you resolve the session.',
    },
  ],
  'cursor-live-apps-postgres-internal-tools-production-guide-2026': [
    {
      question: 'Can Cursor safely modify production Postgres?',
      answer: 'No. Cursor (or any coding agent) should only operate against local or staging databases with non-production credentials. Production changes go through reviewed migrations and code.',
    },
    {
      question: 'Do I still need a human for internal tools?',
      answer: 'Yes. The agent accelerates writing, but architecture, security review, and ownership remain with the engineer. Internal tools still handle real business data.',
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

  const description = clampDescription(post.excerpt)

  return {
    title: pageTitle(post.title),
    description,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    openGraph: {
      images: SHARE_IMAGE,
      title: post.title,
      description,
      url: `https://mussawarhayat.site/blog/${slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      images: SHARE_IMAGE,
      card: 'summary_large_image',
      title: post.title,
      description,
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
  const published = new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  const LABEL = 'font-mono text-xs uppercase tracking-[0.3em] text-white/55'

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      {faqs.length > 0 && <FAQSchema faqs={faqs} />}
      <ArticleSchema
        title={post.title}
        description={post.excerpt}
        url={`https://mussawarhayat.site/blog/${slug}`}
        datePublished={post.date}
        author={post.author}
        authorUrl="https://mussawarhayat.site"
        category={post.category}
        keywords={post.keywords}
        featuredImage="https://mussawarhayat.site/my-pic.jpeg"
      />

      <PageShell>
        <article>
          {/* Article header */}
          <header className="max-w-5xl">
            <div className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs uppercase tracking-[0.3em] text-white/65 md:mb-10">
              <Link href="/blog" className="text-neon underline decoration-neon/50 underline-offset-4 hover:decoration-neon">
                [/blog]
              </Link>
              <span className="text-neon/80">{post.category}</span>
              <span className="h-px w-8 bg-white/20" aria-hidden="true" />
              <time dateTime={post.date}>{published}</time>
              <span aria-hidden="true">·</span>
              <span>{post.readTime}</span>
            </div>
            <h1 className="animate-focus-in text-[clamp(1.75rem,3.6vw,3.1rem)] font-black uppercase leading-[1.04] tracking-[-0.02em] text-white">
              {post.title}
            </h1>
            <p className="mt-6 max-w-3xl font-sans text-lg leading-relaxed text-white/70">{post.excerpt}</p>
            <p className="mt-5 font-mono text-xs uppercase tracking-[0.25em] text-white/55">
              By <span className="text-white/85">{post.author}</span>
            </p>
          </header>

          <div className="mt-14 grid grid-cols-1 gap-14 border-t border-white/10 pt-14 lg:grid-cols-12 lg:gap-16">
            {/* Body */}
            <div className="min-w-0 lg:col-span-8">
              <div
                className="prose prose-invert prose-headings:font-orbitron prose-a:text-neon max-w-[46rem] font-sans blog-content blog-content-stack"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              <AuthorBox />

              {faqs.length > 0 && (
                <section className="mt-16">
                  <SectionLabel index="FAQ" className="mb-6">
                    Frequently Asked Questions
                  </SectionLabel>
                  <ol className="border-b border-white/10">
                    {faqs.map((faq, i) => (
                      <li key={faq.question} className="grid grid-cols-[2.5rem_1fr] gap-x-4 border-t border-white/10 py-6 md:grid-cols-[3rem_1fr]">
                        <span className="pt-1 font-mono text-xs text-neon">{String(i + 1).padStart(2, '0')}</span>
                        <div>
                          <h3 className="text-base font-bold tracking-wide text-white md:text-lg">{faq.question}</h3>
                          <p className="mt-2 font-sans text-sm leading-relaxed text-white/70 md:text-base">{faq.answer}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </section>
              )}
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="space-y-12 lg:sticky lg:top-32">
                <dl className="border-t border-white/10">
                  {[
                    ['Published', published],
                    ['Reading time', post.readTime],
                    ['Category', post.category],
                    ['Author', post.author],
                  ].map(([label, value]) => (
                    <div key={label} className="flex items-baseline justify-between gap-4 border-b border-white/10 py-3.5">
                      <dt className={LABEL}>{label}</dt>
                      <dd className="text-right font-sans text-sm text-white/85">{value}</dd>
                    </div>
                  ))}
                </dl>

                {related.length > 0 && (
                  <div>
                    <p className={LABEL}>
                      <span className="text-neon">Related</span> guides
                    </p>
                    <ul className="mt-4 border-t border-white/10">
                      {related.map((rpost) => (
                        <li key={rpost.slug} className="border-b border-white/10">
                          <Link href={`/blog/${rpost.slug}`} className="group/rel block py-4">
                            <span className="text-sm font-bold leading-snug tracking-wide text-white transition-colors group-hover/rel:text-neon">
                              {rpost.title}
                            </span>
                            <span className="mt-1.5 line-clamp-2 block font-sans text-xs leading-relaxed text-white/50">{rpost.excerpt}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="border-l-2 border-neon pl-6">
                  <p className="text-base font-black uppercase tracking-tight text-white">Need this built?</p>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-white/70">
                    I take on Next.js, SaaS and Web3 builds for remote teams. Tell me what you need and I&apos;ll reply within 24 hours.
                  </p>
                  <Link href="/contact" className="link-underline mt-4 inline-block font-mono text-xs uppercase tracking-[0.2em] text-neon">
                    Start a project
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </article>

        <div className="mt-20 border-t border-white/10 pt-8">
          <Link href="/blog" className="group/back inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-white/75 transition-colors hover:text-neon">
            <FiArrowLeft className="transition-transform duration-300 group-hover/back:-translate-x-1" aria-hidden="true" />
            <span className="link-underline">All posts</span>
          </Link>
        </div>
      </PageShell>
    </>
  )
}
