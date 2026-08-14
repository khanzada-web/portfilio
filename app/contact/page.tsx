import { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/app/components/layout/Header'
import { Footer } from '@/app/components/layout/Footer'
import { Contact } from '@/app/components/sections/Contact'
import { BreadcrumbSchema } from '@/app/components/seo/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'Contact — Hire Full-Stack Developer',
  description: 'Contact Mussawar Hayat to hire a full-stack developer for React, Next.js, Node.js, TypeScript, Web3, Solidity and DevOps projects.',
  keywords: [
    'contact Mussawar Hayat',
    'hire full-stack developer',
    'hire Next.js developer',
    'Web3 developer contact',
    'freelance React developer',
    'Solidity developer hire',
    'project consultation',
  ],
  openGraph: {
    title: 'Contact — Hire Full-Stack Developer',
    description: 'Get in touch to hire Mussawar Hayat for full-stack development, web & mobile apps, and Web3/blockchain projects.',
    url: 'https://mussawarhayat.site/contact',
    type: 'website',
    images: [
      {
        url: '/my-pic.jpeg',
        width: 1200,
        height: 630,
        alt: 'Contact Mussawar Hayat',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact — Hire Full-Stack Developer',
    description: 'Get in touch to hire for full-stack development, web & mobile apps, and Web3/blockchain projects.',
    images: ['/my-pic.jpeg'],
  },
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Contact', url: '/contact' },
      ]} />

      <div className="min-h-screen bg-gradient-to-br from-[#060B16] via-[#0a0f1f] to-[#060B16]">
        <Header />
      
      <main role="main" id="main-content" className="relative z-10">
        {/* Contact Section */}
        <Contact />

        {/* Cross-links */}
        <div className="pb-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-white/40 text-sm font-orbitron uppercase tracking-widest mb-6">
              Not sure what you need yet?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="px-8 py-4 border border-white/10 hover:border-[#39FF14]/30 text-white/70 hover:text-white font-orbitron text-sm uppercase tracking-[0.2em] rounded-xl transition-all duration-300"
              >
                Explore Services
              </Link>
              <Link
                href="/blog"
                className="px-8 py-4 border border-white/10 hover:border-[#39FF14]/30 text-white/70 hover:text-white font-orbitron text-sm uppercase tracking-[0.2em] rounded-xl transition-all duration-300"
              >
                Read the Blog
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
