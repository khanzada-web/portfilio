import { Metadata } from 'next'
import { FiArrowUpRight } from 'react-icons/fi'
import { Reveal } from '@/app/components/motion/Reveal'
import { Stagger, StaggerItem } from '@/app/components/motion/Stagger'
import { ContactForm } from '@/app/components/sections/ContactForm'
import { BreadcrumbSchema } from '@/app/components/seo/BreadcrumbSchema'
import { EditorialHeadline } from '@/app/components/ui/EditorialHeadline'
import { PageShell } from '@/app/components/ui/PageShell'
import { SectionLabel } from '@/app/components/ui/SectionLabel'
import { SHARE_IMAGE } from '@/app/lib/site'

export const metadata: Metadata = {
  title: 'Contact — Hire the Best Next.js 16 & Web3 Full-Stack Developer 2026',
  description:
    'Contact Mussawar Hayat to hire a top Next.js 16 full-stack and Web3 developer for SaaS, React, Solidity, and production apps. Replies within 24 hours. Remote for North America and Europe.',
  keywords: [
    'hire Next.js 16 developer contact',
    'contact Mussawar Hayat',
    'hire full-stack developer 2026',
    'hire Web3 developer',
    'freelance Next.js developer contact',
    'Solidity developer hire',
    'project consultation Next.js',
  ],
  openGraph: {
    images: SHARE_IMAGE,
    title: 'Contact — Hire the Best Next.js 16 & Web3 Full-Stack Developer 2026',
    description: 'Get in touch to hire Mussawar Hayat for full-stack development, web & mobile apps, and Web3/blockchain projects.',
    url: 'https://mussawarhayat.site/contact',
    type: 'website',
  },
  twitter: {
    images: SHARE_IMAGE,
    card: 'summary_large_image',
    title: 'Contact — Hire Next.js 16 Full-Stack Developer',
    description: 'Get in touch to hire for full-stack development, web & mobile apps, and Web3/blockchain projects.',
  },
  alternates: {
    canonical: '/contact',
  },
}

const LABEL = 'font-mono text-xs uppercase tracking-[0.3em] text-white/55'

const CHANNELS = [
  { label: 'Email', value: 'reply@mussawarhayat.site', href: 'mailto:reply@mussawarhayat.site', external: false },
  { label: 'LinkedIn', value: 'mussawar-hayat', href: 'https://www.linkedin.com/in/mussawar-hayat-187768233', external: true },
  { label: 'GitHub', value: 'khanzada-web', href: 'https://github.com/khanzada-web', external: true },
  { label: 'X / Twitter', value: '@Mussawar_Hayat', href: 'https://x.com/Mussawar_Hayat', external: true },
] as const

const FACTS = [
  { label: 'Response', value: 'Under 24 hours on business days' },
  { label: 'Location', value: 'Attock, Pakistan · Remote worldwide' },
  { label: 'Time zones', value: 'EST / PST / CET overlap' },
  { label: 'Engagement', value: 'Fixed-price, hourly, or retainer' },
] as const

const NEXT_STEPS = [
  { title: 'I reply within 24 hours', text: 'You get a clear answer on fit for your project, within 24 hours on business days.' },
  { title: 'A short call if useful', text: 'Mention your preferred time zone and I will schedule a short call to go through details.' },
  { title: 'A clear proposal', text: 'Timeline, scope, and the best engagement model — fixed-price, hourly, or retainer.' },
] as const

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Contact', url: '/contact' },
      ]} />

      <PageShell>
        <EditorialHeadline as="h1" index="/contact" eyebrow="Contact" aside="Available for new projects" solid="Let's talk about" accent="Your project">
          <p>
            Tell me what you are building. I will confirm fit, timeline, and the best engagement model (fixed-price, hourly, or
            retainer). Remote work for North America &amp; Europe clients. GDPR-compliant infrastructure available when needed.
          </p>
        </EditorialHeadline>

        <div className="mt-16 grid grid-cols-1 gap-14 md:mt-24 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className={LABEL}>
              <span className="text-neon">Direct</span> channels
            </p>
            <Stagger as="ul" className="mt-4 border-t border-white/10">
              {CHANNELS.map((c) => (
                <StaggerItem as="li" key={c.label} className="border-b border-white/10">
                  <a
                    href={c.href}
                    {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="group/ch flex items-center justify-between gap-4 py-5"
                  >
                    <span>
                      <span className={`block ${LABEL}`}>{c.label}</span>
                      <span className="mt-1.5 block break-all text-lg font-black tracking-tight text-white transition-colors group-hover/ch:text-neon md:text-xl">
                        {c.value}
                      </span>
                    </span>
                    <FiArrowUpRight className="shrink-0 text-xl text-white/40 transition-[rotate,color] duration-300 group-hover/ch:rotate-45 group-hover/ch:text-neon" aria-hidden="true" />
                  </a>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal>
              <dl className="mt-12 grid grid-cols-1 gap-x-8 sm:grid-cols-2 lg:grid-cols-1">
                {FACTS.map((f) => (
                  <div key={f.label} className="flex items-baseline justify-between gap-4 border-b border-white/10 py-3.5">
                    <dt className={LABEL}>{f.label}</dt>
                    <dd className="text-right font-sans text-sm text-white/85">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal className="lg:col-span-7">
            <div className="rounded-2xl border border-white/10 bg-panel/40 p-7 md:p-10">
              <div className="mb-8 flex items-center justify-between gap-4">
                <h2 className="text-xl font-black uppercase tracking-tight text-white md:text-2xl">
                  Send a <span className="text-neon">message</span>
                </h2>
                <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-white/60">
                  <span className="h-1.5 w-1.5 rounded-full bg-neon shadow-[0_0_8px_#39FF14]" aria-hidden="true" />
                  Replies within 24h
                </span>
              </div>
              <ContactForm />
            </div>
          </Reveal>
        </div>

        <section className="mt-24 md:mt-32">
          <SectionLabel index="Next">What happens next</SectionLabel>
          <Stagger as="ol" className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
            {NEXT_STEPS.map((step, i) => (
              <StaggerItem as="li" key={step.title} className="border-t-2 border-neon/60 pt-6">
                <span className="font-mono text-xs text-neon">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-3 text-lg font-black uppercase tracking-tight text-white">{step.title}</h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-white/65">{step.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </section>
      </PageShell>
    </>
  )
}
