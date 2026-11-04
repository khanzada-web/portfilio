import { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/app/components/layout/Header'
import { Footer } from '@/app/components/layout/Footer'
import { Contact } from '@/app/components/sections/Contact'
import { BreadcrumbSchema } from '@/app/components/seo/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'Contact to Hire Best Next.js 16 Full-Stack Web3 Developer 2026 | Mussawar Hayat',
  description:
    'Contact Mussawar Hayat to hire the best Next.js 16 full-stack Web3 developer for high-performance SaaS, React apps, Solidity smart contracts, and DApps. Fast replies for North America and Europe remote projects.',
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
    title: 'Contact \u2014 Hire Full-Stack Developer',
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
    title: 'Contact \u2014 Hire Full-Stack Developer',
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
        <Contact />

      
      </main>

      <Footer />
    </div>
    </>
  )
}
