import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/app/components/layout/Header'
import { Footer } from '@/app/components/layout/Footer'
import { BreadcrumbSchema } from '@/app/components/seo/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of service for hiring Mussawar Hayat for freelance full-stack and Web3 development projects.',
  keywords: ['terms of service', 'freelance developer terms', 'Mussawar Hayat terms', 'developer contract terms'],
  alternates: {
    canonical: '/terms',
  },
  openGraph: {
    title: 'Terms of Service | Mussawar Hayat',
    description: 'Terms of service for hiring Mussawar Hayat for freelance full-stack and Web3 development projects.',
    url: 'https://mussawarhayat.site/terms',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Terms of Service | Mussawar Hayat',
    description: 'Terms of service for freelance full-stack and Web3 development projects.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const breadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'Terms', url: '/terms' },
]

export default function TermsPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <div className="min-h-screen bg-[#060B16] font-orbitron">
        <Header />
        <main id="main-content" role="main" className="pt-32 pb-20">
          <div className="max-w-3xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight uppercase">
              Terms of <span className="text-[#39FF14]">Service</span>
            </h1>
            <p className="text-white/40 text-sm mb-12 uppercase tracking-widest">
              Last updated: July 2026
            </p>

            <div className="space-y-10 text-white/70 font-sans leading-relaxed">
              <section>
                <h2 className="text-xl font-bold text-[#39FF14] mb-4 uppercase tracking-wider">1. Services</h2>
                <p className="text-sm">
                  Mussawar Hayat provides freelance full-stack development services including web applications,
                  mobile apps, backend APIs, DevOps infrastructure, and Web3/blockchain integration. All services
                  are delivered remotely on a project or contract basis.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#39FF14] mb-4 uppercase tracking-wider">2. Engagements &amp; Payment</h2>
                <p className="text-sm">
                  Project scope, deliverables, timeline, and pricing are agreed in writing before work begins.
                  A deposit may be required for new projects. Final payment is due upon delivery of agreed
                  milestones. All invoices are in USD unless otherwise specified.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#39FF14] mb-4 uppercase tracking-wider">3. Revisions</h2>
                <p className="text-sm">
                  Each project includes a defined number of revision rounds as specified in the project agreement.
                  Additional revisions beyond the agreed scope are billed at an hourly rate.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#39FF14] mb-4 uppercase tracking-wider">4. Intellectual Property</h2>
                <p className="text-sm">
                  Upon full payment, ownership of custom code, designs, and deliverables transfers to the client.
                  Mussawar Hayat retains the right to showcase completed work in portfolio and case studies unless
                  an NDA is in place.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#39FF14] mb-4 uppercase tracking-wider">5. Confidentiality</h2>
                <p className="text-sm">
                  All client information, project details, and proprietary data are kept confidential. A mutual
                  NDA can be signed upon request before project discussions begin.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#39FF14] mb-4 uppercase tracking-wider">6. Liability</h2>
                <p className="text-sm">
                  Mussawar Hayat is not liable for indirect, incidental, or consequential damages arising from
                  the use of delivered software. Liability is limited to the total project fees paid.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#39FF14] mb-4 uppercase tracking-wider">7. Contact</h2>
                <p className="text-sm">
                  Questions about these terms? Email{' '}
                  <a href="mailto:zada38843@gmail.com" className="text-[#39FF14] hover:underline">
                    zada38843@gmail.com
                  </a>
                  .
                </p>
              </section>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 text-center">
              <Link href="/privacy" className="text-[#39FF14] hover:underline text-sm font-orbitron uppercase tracking-widest">
                View Privacy Policy →
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
