import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/app/components/layout/Header'
import { Footer } from '@/app/components/layout/Footer'
import { BreadcrumbSchema } from '@/app/components/seo/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for mussawarhayat.site — how visitor data is collected, used, and protected.',
  keywords: ['privacy policy', 'data protection', 'GDPR', 'cookie policy', 'Mussawar Hayat privacy'],
  alternates: {
    canonical: '/privacy',
  },
  openGraph: {
    title: 'Privacy Policy | Mussawar Hayat',
    description: 'Privacy policy for mussawarhayat.site — how visitor data is collected, used, and protected.',
    url: 'https://mussawarhayat.site/privacy',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Privacy Policy | Mussawar Hayat',
    description: 'How visitor data is collected, used, and protected on mussawarhayat.site.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const breadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'Privacy', url: '/privacy' },
]

export default function PrivacyPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <div className="min-h-screen bg-[#060B16] font-orbitron">
        <Header />
        <main id="main-content" role="main" className="pt-32 pb-20">
          <div className="max-w-3xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight uppercase">
              Privacy <span className="text-[#39FF14]">Policy</span>
            </h1>
            <p className="text-white/40 text-sm mb-12 uppercase tracking-widest">
              Last updated: July 2026
            </p>

            <div className="space-y-10 text-white/70 font-sans leading-relaxed">
              <section>
                <h2 className="text-xl font-bold text-[#39FF14] mb-4 uppercase tracking-wider">1. Data We Collect</h2>
                <p className="text-sm">
                  This website collects minimal data necessary to function. This includes contact form submissions
                  (name, email, message), analytics data via Google Analytics (GA4), and standard server logs
                  (IP address, browser type, pages visited).
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#39FF14] mb-4 uppercase tracking-wider">2. How We Use Data</h2>
                <ul className="text-sm space-y-2 list-disc pl-6">
                  <li>Respond to project inquiries and provide quotes</li>
                  <li>Improve website performance and user experience</li>
                  <li>Analyze traffic patterns and content engagement</li>
                  <li>Send relevant updates if you opt in to email communication</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#39FF14] mb-4 uppercase tracking-wider">3. Google Analytics</h2>
                <p className="text-sm">
                  This site uses Google Analytics (GA4) to measure traffic. Google may use cookies to collect
                  anonymized usage data. You can opt out via Google's{' '}
                  <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-[#39FF14] hover:underline">
                    Analytics opt-out tool
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#39FF14] mb-4 uppercase tracking-wider">4. Cookies</h2>
                <p className="text-sm">
                  This site uses minimal cookies for analytics and functionality. No third-party advertising
                  cookies are set. Essential cookies are required for the contact form to function.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#39FF14] mb-4 uppercase tracking-wider">5. Third-Party Services</h2>
                <p className="text-sm">
                  Data may be processed by third-party services including Google Analytics, Vercel (hosting),
                  and email providers. Each service has its own privacy policy governing data handling.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#39FF14] mb-4 uppercase tracking-wider">6. Your Rights (GDPR)</h2>
                <p className="text-sm">
                  If you are in the EU or UK, you have the right to access, correct, or delete your personal data.
                  You can request data deletion at any time by emailing{' '}
                  <a href="mailto:zada38843@gmail.com" className="text-[#39FF14] hover:underline">
                    zada38843@gmail.com
                  </a>
                  . Requests are processed within 30 days.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#39FF14] mb-4 uppercase tracking-wider">7. Data Security</h2>
                <p className="text-sm">
                  All form submissions are transmitted over HTTPS. Server infrastructure uses SSL, firewall rules,
                  and access controls. No payment card data is stored on this site.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#39FF14] mb-4 uppercase tracking-wider">8. Contact</h2>
                <p className="text-sm">
                  Privacy questions? Email{' '}
                  <a href="mailto:zada38843@gmail.com" className="text-[#39FF14] hover:underline">
                    zada38843@gmail.com
                  </a>
                  .
                </p>
              </section>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 text-center">
              <Link href="/terms" className="text-[#39FF14] hover:underline text-sm font-orbitron uppercase tracking-widest">
                View Terms of Service →
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
