import type { Metadata } from 'next'
import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'
import { EditorialHeadline } from '@/app/components/ui/EditorialHeadline'
import { PageShell } from '@/app/components/ui/PageShell'

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for does not exist. Explore Mussawar Hayat\'s portfolio, services, or blog instead.',
  robots: {
    index: false,
    follow: true,
  },
}

const LINKS = [
  { href: '/services', label: 'View services' },
  { href: '/portfolio', label: 'See the work' },
  { href: '/blog', label: 'Read the blog' },
] as const

export default function NotFound() {
  return (
    <PageShell>
      <EditorialHeadline as="h1" index="/404" eyebrow="Error" aside="Page not found" solid="Page" accent="Not Found">
        <p>The page you are looking for has been moved, renamed, or never existed. Let&apos;s get you back on track.</p>
      </EditorialHeadline>

      <div className="mt-16 flex flex-col items-start gap-10 border-t border-white/10 pt-12 md:mt-24 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="btn-neon group/cta h-14 gap-3 rounded-full pl-7 pr-2 text-sm normal-case tracking-wide">
          Go home
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-neon transition-transform duration-300 group-hover/cta:rotate-45">
            <FiArrowUpRight className="h-5 w-5" aria-hidden="true" />
          </span>
        </Link>
        <ul className="flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-[0.2em]">
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="link-underline text-white/75 transition-colors hover:text-neon">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </PageShell>
  )
}
