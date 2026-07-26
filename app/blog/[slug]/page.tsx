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
  'nextjs-16-stop-overusing-use-client-server-components': {
    title: "Stop Overusing 'use client' in Next.js 16",
    excerpt: 'The most common App Router mistake is marking entire trees with use client. Learn the production patterns for Server Components, children slots, and minimal client boundaries that keep your bundles small and your data secure.',
    content: `
      <div class="intro-section">
        <h2>The Default Is Already Correct</h2>
        <p class="lead-paragraph">In Next.js 16 every layout and page in the <code>app/</code> directory is a Server Component by default. That is the right default. Server Components render on the server, send zero JavaScript for their own logic, can talk to databases and secrets directly, and stream HTML to the browser. The moment you add <code>'use client'</code> higher than necessary, you forfeit those benefits for an entire subtree.</p>

        <div class="key-highlights">
          <h3>What You Will Learn</h3>
          <ul>
            <li>When <code>'use client'</code> is actually required</li>
            <li>The children-slot pattern that keeps Server Components inside Client Components</li>
            <li>How to wrap third-party interactive libraries without poisoning the tree</li>
            <li>Context providers that stay as deep as possible</li>
            <li>A practical decision checklist for every new component</li>
          </ul>
        </div>
      </div>

      <div class="technical-section">
        <h2>1. The Real Cost of an Unnecessary Client Boundary</h2>
        <p>Once a file is marked <code>'use client'</code>, every module it imports and every component it renders directly becomes part of the client bundle. That includes heavy libraries you only needed on the server, database helpers that should never ship, and pure presentational components that could have stayed server-only.</p>
        <p>The boundary is one-way. Server Components can import Client Components. Client Components cannot import Server Components. The only safe way to interleave them is to pass Server Components as <code>children</code> or as props from a parent Server Component.</p>
      </div>

      <div class="onpage-section">
        <h2>2. Decision Tree: Server or Client?</h2>
        <p>Ask these questions in order:</p>
        <ol>
          <li>Does the component need state, event handlers, or browser APIs (<code>window</code>, <code>localStorage</code>, <code>useEffect</code>)? → Client Component.</li>
          <li>Does it only fetch data, render static markup, or use secrets? → Server Component (leave the default).</li>
          <li>Does a third-party package require client features? → Create a thin Client wrapper; keep the rest of the tree server-side.</li>
        </ol>
        <p>Most leaves that need interactivity (buttons, forms, modals, theme toggles) are Client Components. Everything above them should stay Server Components.</p>
      </div>

      <div class="content-strategy-section">
        <h2>3. The Children-Slot Pattern (Production Standard)</h2>
        <p>This is the pattern official Next.js docs recommend and the one that appears in every well-structured App Router codebase.</p>

        <p>Create a Client Component that accepts <code>children</code>:</p>

        <div style="background:#0A1221;border:1px solid rgba(57,255,20,0.25);border-radius:12px;overflow:hidden;margin:2rem 0;box-shadow:0 8px 32px rgba(0,0,0,0.4);">
          <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 18px;background:rgba(0,0,0,0.45);border-bottom:1px solid rgba(255,255,255,0.08);">
            <span style="font-size:12px;color:#39FF14;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;letter-spacing:0.05em;">TypeScript</span>
            <span style="font-size:11px;color:rgba(255,255,255,0.35);font-family:ui-monospace,monospace;">components/modal.tsx</span>
          </div>
          <pre style="margin:0;padding:1.25rem 1.5rem;background:transparent;border:none;border-radius:0;"><code style="font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;font-size:14px;line-height:1.7;color:#e2e8f0;">'use client'

import { useState } from 'react'

export function Modal({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)

  return (
    &lt;&gt;
      &lt;button onClick={() =&gt; setOpen(true)}&gt;Open&lt;/button&gt;
      {open && (
        &lt;div role="dialog" className="modal"&gt;
          {children}
          &lt;button onClick={() =&gt; setOpen(false)}&gt;Close&lt;/button&gt;
        &lt;/div&gt;
      )}
    &lt;/&gt;
  )
}</code></pre>
        </div>

        <p>Then compose from a Server Component page:</p>

        <div style="background:#0A1221;border:1px solid rgba(57,255,20,0.25);border-radius:12px;overflow:hidden;margin:2rem 0;box-shadow:0 8px 32px rgba(0,0,0,0.4);">
          <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 18px;background:rgba(0,0,0,0.45);border-bottom:1px solid rgba(255,255,255,0.08);">
            <span style="font-size:12px;color:#39FF14;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;letter-spacing:0.05em;">TypeScript</span>
            <span style="font-size:11px;color:rgba(255,255,255,0.35);font-family:ui-monospace,monospace;">app/dashboard/page.tsx</span>
          </div>
          <pre style="margin:0;padding:1.25rem 1.5rem;background:transparent;border:none;border-radius:0;"><code style="font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;font-size:14px;line-height:1.7;color:#e2e8f0;">import { Modal } from '@/components/modal'
import { Cart } from '@/components/cart' // Server Component — fetches from DB

export default async function DashboardPage() {
  return (
    &lt;Modal&gt;
      &lt;Cart /&gt; {/* still rendered on the server */}
    &lt;/Modal&gt;
  )
}</code></pre>
        </div>

        <p><code>Cart</code> never becomes part of the client module graph. Its output is already rendered in the RSC payload and simply slotted into the Client Component.</p>
      </div>

      <div class="local-seo-section">
        <h2>4. Context Providers Belong Deep in the Tree</h2>
        <p>React context only works in Client Components. Wrap only the subtree that needs the context, not the entire document.</p>

        <div style="background:#0A1221;border:1px solid rgba(57,255,20,0.25);border-radius:12px;overflow:hidden;margin:2rem 0;box-shadow:0 8px 32px rgba(0,0,0,0.4);">
          <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 18px;background:rgba(0,0,0,0.45);border-bottom:1px solid rgba(255,255,255,0.08);">
            <span style="font-size:12px;color:#39FF14;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;letter-spacing:0.05em;">TypeScript</span>
            <span style="font-size:11px;color:rgba(255,255,255,0.35);font-family:ui-monospace,monospace;">app/theme-provider.tsx</span>
          </div>
          <pre style="margin:0;padding:1.25rem 1.5rem;background:transparent;border:none;border-radius:0;"><code style="font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;font-size:14px;line-height:1.7;color:#e2e8f0;">'use client'

import { createContext, useContext, useState } from 'react'

const ThemeContext = createContext&lt;{ theme: string; toggle: () =&gt; void } | null&gt;(null)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState('dark')
  return (
    &lt;ThemeContext.Provider value={{ theme, toggle: () =&gt; setTheme(t =&gt; t === 'dark' ? 'light' : 'dark') }}&gt;
      {children}
    &lt;/ThemeContext.Provider&gt;
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used inside ThemeProvider')
  return ctx
}</code></pre>
        </div>

        <p>In the root layout keep the provider around <code>{children}</code> only — never around <code>&lt;html&gt;</code> or <code>&lt;body&gt;</code> if you can avoid it. That leaves static shell pieces free for Next.js to optimise.</p>
      </div>

      <div class="linkbuilding-section">
        <h2>5. Third-Party Interactive Libraries</h2>
        <p>Many packages (carousels, rich text editors, charts) still ship without a <code>'use client'</code> directive. Importing them directly into a Server Component fails. The fix is a one-line re-export:</p>

        <div style="background:#0A1221;border:1px solid rgba(57,255,20,0.25);border-radius:12px;overflow:hidden;margin:2rem 0;box-shadow:0 8px 32px rgba(0,0,0,0.4);">
          <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 18px;background:rgba(0,0,0,0.45);border-bottom:1px solid rgba(255,255,255,0.08);">
            <span style="font-size:12px;color:#39FF14;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;letter-spacing:0.05em;">TypeScript</span>
            <span style="font-size:11px;color:rgba(255,255,255,0.35);font-family:ui-monospace,monospace;">components/carousel.tsx</span>
          </div>
          <pre style="margin:0;padding:1.25rem 1.5rem;background:transparent;border:none;border-radius:0;"><code style="font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;font-size:14px;line-height:1.7;color:#e2e8f0;">'use client'

export { Carousel } from 'acme-carousel'</code></pre>
        </div>

        <p>You can now safely use <code>&lt;Carousel /&gt;</code> from any Server Component. The rest of the page stays server-rendered.</p>
      </div>

      <div class="analytics-section">
        <h2>6. Common Mistakes That Still Appear in Production</h2>
        <ul>
          <li>Putting <code>'use client'</code> on a layout or page just to use one interactive child.</li>
          <li>Importing a Prisma client or secret-bearing module into a Client Component.</li>
          <li>Creating a new Client boundary for every small interactive element instead of one shared provider or shell.</li>
          <li>Passing non-serialisable props (functions, class instances, Dates without conversion) from Server to Client.</li>
          <li>Relying on middleware alone for auth while the interactive form itself lives in a Client Component that never re-checks the session.</li>
        </ul>
      </div>

      <div class="conclusion-section">
        <h2>Summary</h2>
        <p>Treat <code>'use client'</code> as a precision tool, not a default. Keep Server Components as high as possible, push Client Components to the leaves, and use the children-slot pattern to compose them. The result is smaller bundles, faster First Contentful Paint, secrets that stay on the server, and an architecture that survives future Next.js releases.</p>

        <div class="final-takeaway">
          <h3>Key Takeaway</h3>
          <p><em>Default to Server Components. Add <code>'use client'</code> only when the component truly needs the browser. Pass Server Components as children into Client shells. That single habit eliminates the majority of App Router performance and security regressions.</em></p>
        </div>

        <hr>

        <div class="cta-section">
          <h3>Need a production review of your App Router architecture?</h3>
          <p>I audit Next.js 16 codebases for unnecessary client boundaries, data-access patterns, and security posture. <a href="/contact" style="color: #39FF14;">Get in touch</a> if you want a focused pass on your Server/Client split.</p>
        </div>

        <div style="margin-top:4rem;padding-top:2.5rem;border-top:1px solid rgba(255,255,255,0.1);">
          <h3 style="margin-bottom:1.75rem;">Related Posts</h3>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1.25rem;">

            <a href="/blog/nextjs-july-2026-security-patch-server-actions" style="display:block;text-decoration:none;background:#0A1221;border:1px solid rgba(57,255,20,0.2);border-radius:12px;padding:1.5rem;transition:border-color 0.3s ease;">
              <span style="display:inline-block;font-size:11px;color:#39FF14;background:rgba(57,255,20,0.1);padding:4px 10px;border-radius:6px;margin-bottom:12px;letter-spacing:0.05em;">Security</span>
              <div style="font-size:16px;font-weight:600;color:#ffffff;line-height:1.4;margin-bottom:8px;">Next.js July 2026 Security Patch</div>
              <div style="font-size:13px;color:rgba(255,255,255,0.5);line-height:1.5;">Server Action hardening and the official patches.</div>
              <div style="font-size:12px;color:rgba(255,255,255,0.35);margin-top:12px;">12 min read</div>
            </a>

            <a href="/blog/nextjs-16-saas-tutorial-prisma-typescript-2026" style="display:block;text-decoration:none;background:#0A1221;border:1px solid rgba(57,255,20,0.2);border-radius:12px;padding:1.5rem;transition:border-color 0.3s ease;">
              <span style="display:inline-block;font-size:11px;color:#39FF14;background:rgba(57,255,20,0.1);padding:4px 10px;border-radius:6px;margin-bottom:12px;letter-spacing:0.05em;">Full-Stack</span>
              <div style="font-size:16px;font-weight:600;color:#ffffff;line-height:1.4;margin-bottom:8px;">Next.js 16 + Prisma SaaS Tutorial</div>
              <div style="font-size:13px;color:rgba(255,255,255,0.5);line-height:1.5;">App Router, Prisma, Auth.js, and Server Actions.</div>
              <div style="font-size:12px;color:rgba(255,255,255,0.35);margin-top:12px;">14 min read</div>
            </a>

            <a href="/blog/gdpr-compliant-web-apps-checklist" style="display:block;text-decoration:none;background:#0A1221;border:1px solid rgba(57,255,20,0.2);border-radius:12px;padding:1.5rem;transition:border-color 0.3s ease;">
              <span style="display:inline-block;font-size:11px;color:#39FF14;background:rgba(57,255,20,0.1);padding:4px 10px;border-radius:6px;margin-bottom:12px;letter-spacing:0.05em;">Full-Stack</span>
              <div style="font-size:16px;font-weight:600;color:#ffffff;line-height:1.4;margin-bottom:8px;">GDPR-Compliant Web Apps Checklist</div>
              <div style="font-size:13px;color:rgba(255,255,255,0.5);line-height:1.5;">Cookie consent, data rights, and secure storage.</div>
              <div style="font-size:12px;color:rgba(255,255,255,0.35);margin-top:12px;">10 min read</div>
            </a>

          </div>
        </div>
      </div>
    `,
    date: '2026-07-26',
    readTime: '13 min read',
    category: 'Full-Stack',
    author: 'Mussawar Hayat',
    keywords: ['Next.js 16', 'use client', 'Server Components', 'App Router', 'React Server Components', 'Next.js best practices', 'client boundary', 'hire Next.js developer', 'full-stack performance']
  },
  'nextjs-july-2026-security-patch-server-actions': {
    title: 'Next.js July 2026 Security Patch',
    excerpt: 'Complete guide to the July 2026 Next.js security release (CVE-2026-64641 and related issues). Patch steps, Server Action hardening, middleware protection, and production checklist for App Router apps.',
    content: `<div class="intro-section"><h2>Why This Matters Right Now</h2><p class="lead-paragraph">On 20 July 2026 Next.js published a coordinated security release that addresses multiple high-severity issues in the App Router and Server Actions. Patch first, then harden every Server Action.</p></div>`,
    date: '2026-07-26',
    readTime: '12 min read',
    category: 'Security',
    author: 'Mussawar Hayat',
    keywords: ['Next.js security', 'Server Actions security', 'CVE-2026-64641']
  },
  'nextjs-16-saas-tutorial-prisma-typescript-2026': {
    title: 'Next.js 16 + Prisma SaaS Tutorial',
    excerpt: 'Step-by-step guide to building a scalable SaaS with Next.js 16 App Router, Prisma, Auth.js, and Tailwind CSS.',
    content: `<div class="intro-section"><h2>Why This Stack Wins in 2026</h2><p class="lead-paragraph">Next.js 16 with the App Router, TypeScript, Prisma, and Tailwind CSS has become the default choice for serious full-stack SaaS products.</p></div>`,
    date: '2026-07-26',
    readTime: '14 min read',
    category: 'Full-Stack',
    author: 'Mussawar Hayat',
    keywords: ['Next.js 16', 'SaaS tutorial', 'Prisma']
  },
  'ai-agents-blockchain-web3-2026': {
    title: 'AI Agents on Blockchain: Web3 2026',
    excerpt: 'Autonomous AI agents are executing smart contracts, managing DeFi portfolios, and governing DAOs without human input.',
    content: `<div class="intro-section"><h2>The AI Agent Revolution</h2><p class="lead-paragraph">AI and blockchain are converging into autonomous digital agents.</p></div>`,
    date: '2026-03-10',
    readTime: '11 min read',
    category: 'Web3 & AI',
    author: 'Mussawar Hayat',
    keywords: ['AI agents', 'blockchain', 'Web3']
  },
  'account-abstraction-smart-wallets-guide': {
    title: 'Account Abstraction 2026: No More Seeds',
    excerpt: 'ERC-4337 and smart wallets are killing the biggest UX barrier in Web3.',
    content: `<div class="intro-section"><h2>The UX Revolution</h2><p class="lead-paragraph">Account Abstraction has matured into a production-ready solution.</p></div>`,
    date: '2026-03-05',
    readTime: '10 min read',
    category: 'Web3 Development',
    author: 'Mussawar Hayat',
    keywords: ['Account Abstraction', 'ERC-4337']
  },
  'real-world-asset-tokenization-rwa-guide': {
    title: 'RWA Tokenization: Blockchain Meets Finance',
    excerpt: 'Real-world asset tokenization crossed $24 billion in 2025 and is accelerating fast.',
    content: `<div class="intro-section"><h2>The $24 Billion Revolution</h2><p class="lead-paragraph">RWA tokenization is creating new financial markets.</p></div>`,
    date: '2026-02-28',
    readTime: '12 min read',
    category: 'Blockchain & DeFi',
    author: 'Mussawar Hayat',
    keywords: ['RWA', 'tokenization']
  },
  'modular-blockchains-l2-developer-guide': {
    title: 'Modular Blockchains & L2s: Dev Guide',
    excerpt: 'The monolithic blockchain era is over. Modular architecture is how the next billion users get on-chain.',
    content: `<div class="intro-section"><h2>The Modular Revolution</h2><p class="lead-paragraph">Modular architecture is how the next billion users get on-chain.</p></div>`,
    date: '2026-02-20',
    readTime: '13 min read',
    category: 'Blockchain',
    author: 'Mussawar Hayat',
    keywords: ['modular blockchains', 'L2']
  },
  'deploying-multi-site-nextjs-vps-nginx': {
    title: 'Multi-Site Next.js on VPS with Nginx',
    excerpt: 'Running multiple Next.js apps on one VPS with Nginx reverse proxy, PM2, and SSL.',
    content: `<div class="intro-section"><h2>One VPS, Multiple Next.js Apps</h2><p class="lead-paragraph">The exact production architecture for cost-efficient multi-site hosting.</p></div>`,
    date: '2026-05-15',
    readTime: '9 min read',
    category: 'DevOps',
    author: 'Mussawar Hayat',
    keywords: ['VPS', 'Nginx', 'PM2']
  },
  'building-bitcoin-ordinals-marketplace': {
    title: 'Bitcoin Ordinals Marketplace Architecture',
    excerpt: 'How I built Ordwin — a Bitcoin NFT marketplace for Ordinal inscriptions.',
    content: `<div class="intro-section"><h2>Building Ordwin</h2><p class="lead-paragraph">The core challenge was indexing inscriptions at chain speed.</p></div>`,
    date: '2026-05-10',
    readTime: '11 min read',
    category: 'Web3',
    author: 'Mussawar Hayat',
    keywords: ['Bitcoin Ordinals', 'NFT marketplace']
  },
  'metamask-vs-walletconnect-dapp': {
    title: 'MetaMask vs WalletConnect for DApps',
    excerpt: 'Both work. Both have edge cases. Here is what I learned integrating multiple wallets.',
    content: `<div class="intro-section"><h2>Wallet Integration</h2><p class="lead-paragraph">Trade-offs around UX, mobile support, and session management.</p></div>`,
    date: '2026-05-05',
    readTime: '8 min read',
    category: 'Web3',
    author: 'Mussawar Hayat',
    keywords: ['MetaMask', 'WalletConnect']
  },
  'spf-dkim-dmarc-multi-domain-vps': {
    title: 'SPF, DKIM & DMARC for Multi-Domain VPS',
    excerpt: 'Email deliverability is silent until it breaks. The exact DNS setup for multiple domains.',
    content: `<div class="intro-section"><h2>Email Deliverability</h2><p class="lead-paragraph">The exact DNS and server setup so transactional email lands in the inbox.</p></div>`,
    date: '2026-04-28',
    readTime: '7 min read',
    category: 'DevOps',
    author: 'Mussawar Hayat',
    keywords: ['SPF', 'DKIM', 'DMARC']
  },
  'gdpr-compliant-web-apps-checklist': {
    title: 'GDPR-Compliant Web Apps Checklist',
    excerpt: 'Cookie consent, secure data storage, data subject rights — a practical checklist for full-stack developers.',
    content: `<div class="intro-section"><h2>GDPR for Developers</h2><p class="lead-paragraph">A practical engineering checklist covering consent, data minimization, and technical safeguards.</p></div>`,
    date: '2026-04-20',
    readTime: '10 min read',
    category: 'Full-Stack',
    author: 'Mussawar Hayat',
    keywords: ['GDPR', 'privacy']
  },
  'multi-chain-dex-interface-performance': {
    title: 'Multi-Chain DEX Interface Performance',
    excerpt: 'Real-time price feeds, chart rendering, and websocket management without melting the browser.',
    content: `<div class="intro-section"><h2>Demotrionn DEX</h2><p class="lead-paragraph">How I built a high-performance multi-chain trading interface.</p></div>`,
    date: '2026-04-15',
    readTime: '12 min read',
    category: 'Web3',
    author: 'Mussawar Hayat',
    keywords: ['DEX', 'performance']
  },
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts[slug]

  if (!post) {
    return { title: 'Blog Post Not Found' }
  }

  const pageUrl = `https://mussawarhayat.site/blog/${slug}`

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords.join(', '),
    authors: [{ name: post.author }],
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: pageUrl,
      type: 'article',
      siteName: 'Mussawar Hayat',
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: 'https://mussawarhayat.site/my-pic.jpeg',
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
    author: {
      '@type': 'Person',
      name: post.author,
      url: 'https://mussawarhayat.site',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Mussawar Hayat',
      logo: {
        '@type': 'ImageObject',
        url: 'https://mussawarhayat.site/my-pic.jpeg',
        width: 192,
        height: 192,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': pageUrl,
    },
    keywords: post.keywords.join(', '),
    articleSection: post.category,
    inLanguage: 'en-US',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = blogPosts[slug]

  if (!post) {
    notFound()
  }

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
                <span className="text-xs font-orbitron text-[#39FF14] tracking-widest uppercase">
                  {post.category}
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter uppercase leading-none mb-8">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center justify-center gap-y-4 gap-x-8 mb-16">
                <div className="flex flex-wrap items-center justify-center gap-y-4 gap-x-8 px-8 py-3 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-sm shadow-2xl shadow-black/20">
                  <div className="flex items-center gap-3 group">
                    <div className="p-1.5 rounded-md bg-white/5 border border-white/5 group-hover:border-[#39FF14]/30 transition-colors">
                      <svg className="w-3.5 h-3.5 text-[#39FF14]/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <time dateTime={post.date} className="text-[11px] font-orbitron font-medium uppercase tracking-[0.2em] text-white/50 group-hover:text-white transition-colors">
                      {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </time>
                  </div>

                  <div className="hidden md:block w-1 h-1 bg-white/10 rounded-full" />

                  <div className="flex items-center gap-3 group">
                    <div className="p-1.5 rounded-md bg-white/5 border border-white/5 group-hover:border-[#39FF14]/30 transition-colors">
                      <svg className="w-3.5 h-3.5 text-[#39FF14]/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-[11px] font-orbitron font-medium uppercase tracking-[0.2em] text-white/50 group-hover:text-white transition-colors">
                      {post.readTime}
                    </span>
                  </div>

                  <div className="hidden md:block w-1 h-1 bg-white/10 rounded-full" />

                  <div className="flex items-center gap-3 group">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-[#39FF14]/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative w-7 h-7 rounded-full bg-gradient-to-br from-[#39FF14] to-[#1a7a0a] flex items-center justify-center border border-white/10 shadow-lg">
                        <span className="text-[9px] font-black text-[#060B16] font-orbitron tracking-tighter">MH</span>
                      </div>
                    </div>
                    <span className="text-[11px] font-orbitron font-medium uppercase tracking-[0.2em] text-white/50 group-hover:text-white transition-colors">
                      {post.author}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="relative mb-16 p-8 bg-[#0A1221] border border-[#39FF14]/20">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#39FF14] to-[#39FF14]/30" />
                <p className="text-xl text-white/80 font-light leading-relaxed pl-8 italic">
                  {post.excerpt}
                </p>
              </div>

              <article
                className="prose prose-xl max-w-none prose-invert
                  prose-headings:font-orbitron prose-headings:tracking-wider prose-headings:uppercase
                  prose-h2:text-[#39FF14] prose-h2:text-4xl prose-h2:mt-20 prose-h2:mb-12 prose-h2:font-bold prose-h2:border-b prose-h2:border-b-white/10 prose-h2:pb-6 prose-h2:leading-tight
                  prose-h3:text-white prose-h3:text-3xl prose-h3:mt-16 prose-h3:mb-10 prose-h3:font-semibold prose-h3:leading-tight
                  prose-h4:text-white/90 prose-h4:text-2xl prose-h4:mt-12 prose-h4:mb-8 prose-h4:font-medium prose-h4:leading-tight
                  prose-p:text-white/80 prose-p:leading-relaxed prose-p:font-sans prose-p:text-xl prose-p:mb-8 prose-p:tracking-wide prose-p:font-light
                  prose-strong:text-white prose-strong:font-bold prose-strong:text-[#39FF14]
                  prose-em:text-white/70 prose-em:italic
                  prose-ul:text-white/80 prose-ul:space-y-6 prose-ul:mt-12 prose-ul:mb-12 prose-ul:list-disc prose-ul:pl-6
                  prose-ol:text-white/80 prose-ol:space-y-6 prose-ol:mt-12 prose-ol:mb-12
                  prose-li:text-white/80 prose-li:leading-relaxed prose-li:text-lg prose-li:marker:text-[#39FF14] prose-li:marker:font-bold
                  prose-blockquote:border-l-4 prose-blockquote:border-[#39FF14] prose-blockquote:bg-gradient-to-r prose-blockquote:from-white/8 prose-blockquote:to-transparent prose-blockquote:p-12 prose-blockquote:rounded-r-2xl prose-blockquote:my-16 prose-blockquote:shadow-xl
                  prose-blockquote:p:text-white/90 prose-blockquote:p:italic prose-blockquote:p:text-2xl prose-blockquote:p:font-light prose-blockquote:p:leading-relaxed
                  prose-code:text-[#39FF14] prose-code:bg-white/12 prose-code:px-4 prose-code:py-2 prose-code:rounded-lg prose-code:font-mono prose-code:text-sm prose-code:border prose-code:border-white/10
                  prose-pre:bg-transparent prose-pre:border-0 prose-pre:p-0 prose-pre:m-0 prose-pre:shadow-none
                  prose-hr:border-white/10 prose-hr:my-24 prose-hr:border-dashed
                  prose-a:text-[#39FF14] prose-a:no-underline prose-a:font-medium prose-a:text-lg hover:prose-a:text-white hover:prose-a:underline transition-all prose-a:font-semibold
                  [&>*]:first-child:mt-0 [&>*]:last-child:mb-0"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              <div className="mt-24 p-8 md:p-12 bg-[#0A1221] border border-[#39FF14]/20 text-center">
                <h3 className="text-2xl font-bold text-white font-orbitron mb-4">
                  Ready to start your project?
                </h3>
                <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                  Let's discuss how we can transform your digital presence with cutting-edge solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-[#39FF14] hover:bg-[#39FF14]/90 text-[#060B16] font-bold font-orbitron text-sm uppercase tracking-[0.2em] rounded-xl transition-all duration-300 shadow-lg shadow-[#39FF14]/25 hover:shadow-xl hover:shadow-[#39FF14]/35"
                  >
                    Get Started
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-3 px-8 py-4 border border-white/10 hover:border-[#39FF14]/30 text-white/70 hover:text-white font-orbitron text-sm uppercase tracking-[0.2em] rounded-xl transition-all duration-300"
                  >
                    View Services
                  </Link>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 mt-24 pt-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <Link
                  href="/blog"
                  className="group inline-flex items-center gap-3 px-6 py-3 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/5 hover:border-[#39FF14]/30 transition-all duration-300"
                >
                  <svg className="w-5 h-5 text-white/60 group-hover:text-[#39FF14] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  <span className="text-sm font-orbitron uppercase tracking-[0.2em] text-white/60 group-hover:text-white transition-colors">
                    Back to Blog
                  </span>
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
