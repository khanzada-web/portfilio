import { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/app/components/layout/Header'
import { Footer } from '@/app/components/layout/Footer'
import { BreadcrumbSchema } from '@/app/components/seo/BreadcrumbSchema'
import { notFound } from 'next/navigation'

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

const blogPosts: Record<string, BlogPost> = {
  'secure-server-actions-nextjs-16-auth-validation-dal': {
    title: 'Secure Server Actions in Next.js 16',
    excerpt: 'Every Server Action is a public POST endpoint. Learn the production pattern: validate inputs, authenticate from the session, authorize ownership, keep a thin action layer on a server-only Data Access Layer, and constrain return values.',
    content: `<div class="intro-section"><h2>Every Server Action Is a Public Endpoint</h2><p class="lead-paragraph">In Next.js 16, a Server Action is a React Server Function invoked through a form action, button formAction, or client transition. The compiler replaces the function body in client bundles with an encrypted action ID and a dispatcher that POSTs back to the server. The implementation never leaves the server, but the route is reachable by anyone who can craft the same POST.</p><p>Framework-level protections (Origin/Host CSRF check, body size limit, encrypted action IDs, closure encryption) reduce risk. They do not replace application-level authentication, authorization, and input validation. Render-time gating is not a security boundary.</p><div class="key-highlights"><h3>What You Will Learn</h3><ul><li>Why Server Actions must be treated as untrusted public endpoints</li><li>The three mandatory checks: validate, authenticate, authorize</li><li>Thin Server Action layer on a server-only Data Access Layer (DAL)</li><li>Ownership checks, constrained return values, and revalidation</li><li>Production checklist and common mistakes</li></ul></div></div><div class="technical-section"><h2>1. What Next.js Already Protects</h2><p>Official documentation lists four framework guarantees: CSRF check (Origin vs Host), body size limit (default 1MB), encrypted action IDs with dead-code elimination, and closure variable encryption. These are baseline defenses. They do not check who the caller is or whether the caller owns the resource.</p></div><div class="onpage-section"><h2>2. The Three Checks Inside Every Action</h2><p>Treat every exported Server Action as an untrusted entry point. Inside the function, in this order:</p><ol><li><strong>Validate inputs</strong> with Zod or Valibot. FormData and headers are untrusted.</li><li><strong>Authenticate</strong> from the session (cookies/headers). Never accept identity from the client.</li><li><strong>Authorize</strong> ownership or role against the specific resource.</li></ol><p>Only after those three steps perform the mutation and revalidate.</p></div><div class="content-strategy-section"><h2>3. Thin Actions + Server-Only Data Access Layer</h2><p>Keep <code>use server</code> files thin. Put auth and database logic in a module marked with <code>import 'server-only'</code>.</p><p><strong>data/posts.ts</strong> (server-only):</p><pre><code>import 'server-only'\nimport { auth } from '@/lib/auth'\nimport { prisma } from '@/lib/prisma'\nimport { z } from 'zod'\n\nconst createPostSchema = z.object({\n  title: z.string().min(1).max(200),\n  body: z.string().min(1).max(50000),\n})\n\nexport async function createPost(input: unknown) {\n  const session = await auth()\n  if (!session?.user?.id) throw new Error('Unauthorized')\n  const data = createPostSchema.parse(input)\n  return prisma.post.create({\n    data: { title: data.title, body: data.body, authorId: session.user.id },\n    select: { id: true, title: true },\n  })\n}\n\nexport async function deletePost(postId: string) {\n  const session = await auth()\n  if (!session?.user?.id) throw new Error('Unauthorized')\n  const post = await prisma.post.findFirst({\n    where: { id: postId, authorId: session.user.id },\n    select: { id: true },\n  })\n  if (!post) throw new Error('Forbidden')\n  await prisma.post.delete({ where: { id: post.id } })\n}</code></pre><p><strong>app/actions/posts.ts</strong> (thin action layer):</p><pre><code>'use server'\nimport { createPost, deletePost } from '@/data/posts'\nimport { revalidatePath } from 'next/cache'\n\nexport async function createPostAction(formData: FormData) {\n  const post = await createPost({\n    title: formData.get('title'),\n    body: formData.get('body'),\n  })\n  revalidatePath('/posts')\n  return { id: post.id }\n}\n\nexport async function deletePostAction(postId: string) {\n  await deletePost(postId)\n  revalidatePath('/posts')\n}</code></pre></div><div class="local-seo-section"><h2>4. Ownership Checks, Not Client-Supplied Rows</h2><p>Never accept a full resource from the client and write it back. Accept an ID plus the change, then re-read under the session ownership constraint.</p><pre><code>// Unsafe\nexport async function completeItemUnsafe(item: { id: string }) {\n  await prisma.item.update({ where: { id: item.id }, data: { completed: true } })\n}\n\n// Safe\nexport async function completeItem(itemId: string) {\n  const session = await auth()\n  if (!session?.user?.id) throw new Error('Unauthorized')\n  const item = await prisma.item.findFirst({\n    where: { id: itemId, ownerId: session.user.id },\n  })\n  if (!item) throw new Error('Forbidden')\n  await prisma.item.update({ where: { id: item.id }, data: { completed: true } })\n}</code></pre></div><div class="linkbuilding-section"><h2>5. Constrain Return Values</h2><p>Action returns are serialized to the client. Return DTOs with explicit <code>select</code>, never raw ORM records or sensitive columns.</p></div><div class="analytics-section"><h2>6. Revalidation After Mutation</h2><ul><li><code>updateTag</code> — immediate; action response waits for fresh data</li><li><code>revalidateTag</code> — stale-while-revalidate</li><li><code>revalidatePath</code> — by URL</li><li><code>refresh</code> — refetch current route RSC payload</li></ul><p>Call revalidation before <code>redirect</code>. Redirect throws; code after it does not run.</p></div><div class="conclusion-section"><h2>7. Production Checklist</h2><ul><li>Validate input with a schema before business logic</li><li>Authenticate from session, never from client identity</li><li>Authorize ownership or role on the specific resource</li><li>Keep DB and auth in server-only modules; actions stay thin</li><li>Return DTOs only</li><li>Set serverActions.allowedOrigins behind proxies/CDNs</li><li>Do not parallelize Server Actions from the client with Promise.all</li></ul><h2>8. Common Mistakes</h2><ul><li>Assuming a form only rendered for logged-in users is enough</li><li>Accepting a full object from the client without ownership query</li><li>Importing Prisma into Client Components</li><li>Returning entire records or internal errors to the client</li><li>Skipping schema validation because the form constrains fields</li></ul><h2>Summary</h2><p>Server Actions are a convenient mutation surface, not a trust boundary. Production safety comes from validate, authenticate, authorize on every path, a server-only DAL, constrained return values, and deliberate revalidation.</p><div class="final-takeaway"><h3>Key Takeaway</h3><p><em>Treat every Server Action as a public POST endpoint. Thin actions, a server-only DAL, and ownership-scoped queries are the production baseline.</em></p></div><hr><div class="cta-section"><h3>Need a security pass on your Server Actions?</h3><p>I review Next.js App Router codebases for auth gaps, missing ownership checks, and unsafe return values. <a href="/contact" style="color: #39FF14;">Get in touch</a> for a focused audit.</p></div><div style="margin-top:4rem;padding-top:2.5rem;border-top:1px solid rgba(255,255,255,0.1);"><h3 style="margin-bottom:1.75rem;">Related Posts</h3><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1.25rem;"><a href="/blog/nextjs-july-2026-security-patch-server-actions" style="display:block;text-decoration:none;background:#0A1221;border:1px solid rgba(57,255,20,0.2);border-radius:12px;padding:1.5rem;"><span style="display:inline-block;font-size:11px;color:#39FF14;background:rgba(57,255,20,0.1);padding:4px 10px;border-radius:6px;margin-bottom:12px;">Security</span><div style="font-size:16px;font-weight:600;color:#ffffff;margin-bottom:8px;">Next.js July 2026 Security Patch</div></a><a href="/blog/nextjs-16-stop-overusing-use-client-server-components" style="display:block;text-decoration:none;background:#0A1221;border:1px solid rgba(57,255,20,0.2);border-radius:12px;padding:1.5rem;"><span style="display:inline-block;font-size:11px;color:#39FF14;background:rgba(57,255,20,0.1);padding:4px 10px;border-radius:6px;margin-bottom:12px;">Full-Stack</span><div style="font-size:16px;font-weight:600;color:#ffffff;margin-bottom:8px;">Stop Overusing use client in Next.js 16</div></a><a href="/blog/prisma-connection-exhaustion-nextjs-16-accelerate" style="display:block;text-decoration:none;background:#0A1221;border:1px solid rgba(57,255,20,0.2);border-radius:12px;padding:1.5rem;"><span style="display:inline-block;font-size:11px;color:#39FF14;background:rgba(57,255,20,0.1);padding:4px 10px;border-radius:6px;margin-bottom:12px;">Full-Stack</span><div style="font-size:16px;font-weight:600;color:#ffffff;margin-bottom:8px;">Fix Prisma Connection Exhaustion</div></a></div></div></div>`,
    date: '2026-07-30',
    readTime: '14 min read',
    category: 'Security',
    author: 'Mussawar Hayat',
    keywords: ['Server Actions', 'Next.js 16', 'authentication', 'authorization', 'Data Access Layer', 'Zod', 'security', 'App Router']
  },
  'prisma-connection-exhaustion-nextjs-16-accelerate': {
    title: 'Fix Prisma Connection Exhaustion in Next.js 16',
    excerpt: 'Serverless Next.js apps hit too many connections under load. Production singleton, Prisma Accelerate, and PgBouncer.',
    content: `<div class="intro-section"><h2>Fix Prisma Connection Exhaustion in Next.js 16</h2><p class="lead-paragraph">Serverless Next.js apps hit too many connections under load. Production singleton, Prisma Accelerate, and PgBouncer.</p></div>`,
    date: '2026-07-27',
    readTime: '12 min read',
    category: 'Full-Stack',
    author: 'Mussawar Hayat',
    keywords: ['Prisma', 'Next.js 16']
  },
  'nextjs-16-stop-overusing-use-client-server-components': {
    title: "Stop Overusing 'use client' in Next.js 16",
    excerpt: 'Production patterns for Server Components and minimal client boundaries.',
    content: `<div class="intro-section"><h2>Stop Overusing use client in Next.js 16</h2><p class="lead-paragraph">Production patterns for Server Components and minimal client boundaries.</p></div>`,
    date: '2026-07-26',
    readTime: '13 min read',
    category: 'Full-Stack',
    author: 'Mussawar Hayat',
    keywords: ['Next.js 16', 'Server Components']
  },
  'nextjs-july-2026-security-patch-server-actions': {
    title: 'Next.js July 2026 Security Patch',
    excerpt: 'Complete guide to the July 2026 Next.js security release.',
    content: `<div class="intro-section"><h2>Next.js July 2026 Security Patch</h2><p class="lead-paragraph">Complete guide to the July 2026 Next.js security release.</p></div>`,
    date: '2026-07-26',
    readTime: '12 min read',
    category: 'Security',
    author: 'Mussawar Hayat',
    keywords: ['Next.js security']
  },
  'nextjs-16-saas-tutorial-prisma-typescript-2026': {
    title: 'Next.js 16 + Prisma SaaS Tutorial',
    excerpt: 'Build a scalable SaaS with Next.js 16, Prisma, Auth.js, and Tailwind.',
    content: `<div class="intro-section"><h2>Next.js 16 + Prisma SaaS Tutorial</h2><p class="lead-paragraph">Build a scalable SaaS with Next.js 16, Prisma, Auth.js, and Tailwind.</p></div>`,
    date: '2026-07-26',
    readTime: '14 min read',
    category: 'Full-Stack',
    author: 'Mussawar Hayat',
    keywords: ['Next.js 16', 'SaaS']
  },
  'ai-agents-blockchain-web3-2026': {
    title: 'AI Agents on Blockchain: Web3 2026',
    excerpt: 'Autonomous AI agents executing smart contracts and managing DeFi.',
    content: `<div class="intro-section"><h2>AI Agents on Blockchain: Web3 2026</h2><p class="lead-paragraph">Autonomous AI agents executing smart contracts and managing DeFi.</p></div>`,
    date: '2026-03-10',
    readTime: '11 min read',
    category: 'Web3 & AI',
    author: 'Mussawar Hayat',
    keywords: ['AI agents', 'Web3']
  },
  'account-abstraction-smart-wallets-guide': {
    title: 'Account Abstraction 2026: No More Seeds',
    excerpt: 'ERC-4337 and smart wallets guide for developers.',
    content: `<div class="intro-section"><h2>Account Abstraction 2026: No More Seeds</h2><p class="lead-paragraph">ERC-4337 and smart wallets guide for developers.</p></div>`,
    date: '2026-03-05',
    readTime: '10 min read',
    category: 'Web3 Development',
    author: 'Mussawar Hayat',
    keywords: ['Account Abstraction']
  },
  'real-world-asset-tokenization-rwa-guide': {
    title: 'RWA Tokenization: Blockchain Meets Finance',
    excerpt: 'Real-world asset tokenization developer and investor breakdown.',
    content: `<div class="intro-section"><h2>RWA Tokenization: Blockchain Meets Finance</h2><p class="lead-paragraph">Real-world asset tokenization developer and investor breakdown.</p></div>`,
    date: '2026-02-28',
    readTime: '12 min read',
    category: 'Blockchain & DeFi',
    author: 'Mussawar Hayat',
    keywords: ['RWA']
  },
  'modular-blockchains-l2-developer-guide': {
    title: 'Modular Blockchains & L2s: Dev Guide',
    excerpt: 'Modular architecture for the next billion users on-chain.',
    content: `<div class="intro-section"><h2>Modular Blockchains & L2s: Dev Guide</h2><p class="lead-paragraph">Modular architecture for the next billion users on-chain.</p></div>`,
    date: '2026-02-20',
    readTime: '13 min read',
    category: 'Blockchain',
    author: 'Mussawar Hayat',
    keywords: ['L2']
  },
  'deploying-multi-site-nextjs-vps-nginx': {
    title: 'Multi-Site Next.js on VPS with Nginx',
    excerpt: 'Multiple Next.js apps on one VPS with Nginx, PM2, and SSL.',
    content: `<div class="intro-section"><h2>Multi-Site Next.js on VPS with Nginx</h2><p class="lead-paragraph">Multiple Next.js apps on one VPS with Nginx, PM2, and SSL.</p></div>`,
    date: '2026-05-15',
    readTime: '9 min read',
    category: 'DevOps',
    author: 'Mussawar Hayat',
    keywords: ['VPS', 'Nginx']
  },
  'building-bitcoin-ordinals-marketplace': {
    title: 'Bitcoin Ordinals Marketplace Architecture',
    excerpt: 'How Ordwin indexes and tracks Ordinal inscriptions.',
    content: `<div class="intro-section"><h2>Bitcoin Ordinals Marketplace Architecture</h2><p class="lead-paragraph">How Ordwin indexes and tracks Ordinal inscriptions.</p></div>`,
    date: '2026-05-10',
    readTime: '11 min read',
    category: 'Web3',
    author: 'Mussawar Hayat',
    keywords: ['Bitcoin Ordinals']
  },
  'metamask-vs-walletconnect-dapp': {
    title: 'MetaMask vs WalletConnect for DApps',
    excerpt: 'Trade-offs integrating multiple wallets in production DApps.',
    content: `<div class="intro-section"><h2>MetaMask vs WalletConnect for DApps</h2><p class="lead-paragraph">Trade-offs integrating multiple wallets in production DApps.</p></div>`,
    date: '2026-05-05',
    readTime: '8 min read',
    category: 'Web3',
    author: 'Mussawar Hayat',
    keywords: ['MetaMask']
  },
  'spf-dkim-dmarc-multi-domain-vps': {
    title: 'SPF, DKIM & DMARC for Multi-Domain VPS',
    excerpt: 'DNS setup for transactional email across multiple domains.',
    content: `<div class="intro-section"><h2>SPF, DKIM & DMARC for Multi-Domain VPS</h2><p class="lead-paragraph">DNS setup for transactional email across multiple domains.</p></div>`,
    date: '2026-04-28',
    readTime: '7 min read',
    category: 'DevOps',
    author: 'Mussawar Hayat',
    keywords: ['SPF', 'DKIM']
  },
  'gdpr-compliant-web-apps-checklist': {
    title: 'GDPR-Compliant Web Apps Checklist',
    excerpt: 'Practical engineering checklist for EU client projects.',
    content: `<div class="intro-section"><h2>GDPR-Compliant Web Apps Checklist</h2><p class="lead-paragraph">Practical engineering checklist for EU client projects.</p></div>`,
    date: '2026-04-20',
    readTime: '10 min read',
    category: 'Full-Stack',
    author: 'Mussawar Hayat',
    keywords: ['GDPR']
  },
  'multi-chain-dex-interface-performance': {
    title: 'Multi-Chain DEX Interface Performance',
    excerpt: 'Real-time feeds and charts without melting the browser.',
    content: `<div class="intro-section"><h2>Multi-Chain DEX Interface Performance</h2><p class="lead-paragraph">Real-time feeds and charts without melting the browser.</p></div>`,
    date: '2026-04-15',
    readTime: '12 min read',
    category: 'Web3',
    author: 'Mussawar Hayat',
    keywords: ['DEX']
  },
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
    keywords: post.keywords.join(', '),
    authors: [{ name: post.author }],
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
    author: { '@type': 'Person', name: post.author, url: 'https://mussawarhayat.site' },
    publisher: {
      '@type': 'Organization',
      name: 'Mussawar Hayat',
      logo: { '@type': 'ImageObject', url: 'https://mussawarhayat.site/my-pic.jpeg', width: 192, height: 192 },
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
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: post.title, url: `/blog/${slug}` },
  ]
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <BlogPostingSchema post={post} slug={slug} />
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
