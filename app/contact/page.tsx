import { Metadata } from 'next'
import { Header } from '@/app/components/layout/Header'
import { Footer } from '@/app/components/layout/Footer'
import { Contact } from '@/app/components/sections/Contact'

export const metadata: Metadata = {
  title: 'Contact Mussawar Hayat | Get in Touch',
  description: 'Get in touch with Mussawar Hayat for full-stack development, web & mobile apps, and Web3/blockchain projects. Let\'s discuss your next project.',
  keywords: 'contact Mussawar Hayat, full-stack developer contact, React developer, Next.js developer, Web3 development, blockchain developer, project consultation',
  openGraph: {
    title: 'Contact Mussawar Hayat | Get in Touch',
    description: 'Get in touch with Mussawar Hayat for full-stack development, web & mobile apps, and Web3/blockchain projects.',
    url: 'https://www.mussawarhayat.site/contact',
    type: 'website',
    images: [
      {
        url: 'https://www.mussawarhayat.site/_next/static/media/logo.2deab1c7.png',
        width: 640,
        height: 640,
        alt: 'Contact Mussawar Hayat',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Mussawar Hayat | Get in Touch',
    description: 'Get in touch with Mussawar Hayat for full-stack development, web & mobile apps, and Web3/blockchain projects.',
    images: ['https://www.mussawarhayat.site/_next/static/media/logo.2deab1c7.png'],
  },
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactPage() {
  return (
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
              AI, or full-stack development project to life.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
