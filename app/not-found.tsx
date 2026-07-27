import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/app/components/layout/Header'
import { Footer } from '@/app/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for does not exist. Explore Mussawar Hayat\'s portfolio, services, or blog instead.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#060B16] font-orbitron">
      <Header />
      <main id="main-content" role="main" className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="inline-block border border-[#39FF14] px-4 py-1 mb-6 text-xs tracking-[0.3em] uppercase opacity-80">
            Error_404
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase leading-none mb-8">
            Page <span className="text-[#39FF14]">Not Found</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed font-sans mb-12">
            The page you are looking for has been moved, renamed, or never existed.
            Let&apos;s get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#39FF14] text-black font-bold font-orbitron text-sm uppercase tracking-[0.2em] rounded-xl transition-all duration-300"
            >
              Go Home
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-3 px-8 py-4 border border-white/10 hover:border-[#39FF14]/30 text-white/70 hover:text-white font-orbitron text-sm uppercase tracking-[0.2em] rounded-xl transition-all duration-300"
            >
              View Services
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-3 px-8 py-4 border border-white/10 hover:border-[#39FF14]/30 text-white/70 hover:text-white font-orbitron text-sm uppercase tracking-[0.2em] rounded-xl transition-all duration-300"
            >
              Read the Blog
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
