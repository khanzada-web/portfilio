import { Metadata } from 'next'
import { Header } from '@/app/components/layout/Header'
import { Footer } from '@/app/components/layout/Footer'
import { Contact } from '@/app/components/sections/Contact'
import { BreadcrumbSchema } from '@/app/components/seo/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'Contact — Hire Full-Stack Developer',
  description: 'Contact Mussawar Hayat to hire a full-stack developer for React, Next.js, Node.js, TypeScript, Web3, Solidity and DevOps projects. Available for freelance work worldwide.',
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
        {/* Hero Section */}
        <div className="pt-32 pb-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white font-orbitron mb-8 leading-tight tracking-tight">
              <span className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
                Get in Touch
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your digital presence? Let's discuss how we can bring your Web3, 
              AI, or full-stack development project to life. Available for freelance projects worldwide.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <Contact />
      </main>

      <Footer />
    </div>
    </>
  )
}
