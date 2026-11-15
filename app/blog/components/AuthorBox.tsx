import Image from 'next/image'
import Link from 'next/link'
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { PERSON } from '@/app/lib/site'

const LINKS = [
  { href: PERSON.profiles.github, label: 'GitHub', icon: FiGithub },
  { href: PERSON.profiles.linkedin, label: 'LinkedIn', icon: FiLinkedin },
  { href: PERSON.profiles.x, label: 'X (Twitter)', icon: FiTwitter },
] as const

/** "Who wrote this" block under every post: name, role, what they build, where to verify them. */
export function AuthorBox() {
  return (
    <section aria-labelledby="author-heading" className="mt-16 rounded-xl border border-white/10 bg-panel/40 p-6 md:p-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
        <Image
          src="/my-pic.jpeg"
          alt={`Portrait of ${PERSON.name}`}
          width={96}
          height={96}
          className="h-20 w-20 shrink-0 rounded-full object-cover ring-2 ring-neon/40 md:h-24 md:w-24"
        />
        <div className="min-w-0">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-white/55">Written by</p>
          <h2 id="author-heading" className="mt-1 text-xl font-bold text-white">
            {PERSON.name}
          </h2>
          <p className="mt-1 text-sm font-semibold text-neon">{PERSON.role}</p>
          <p className="mt-3 max-w-xl font-sans text-sm leading-relaxed text-white/70 md:text-base">
            I build production SaaS platforms, dashboards and smart-contract front ends with Next.js,
            TypeScript, PostgreSQL and Solidity, working remotely with teams in North America and Europe.
            The guides here come from problems I&apos;ve solved on client and personal projects.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
            {LINKS.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer me"
                className="inline-flex min-h-6 items-center gap-2 text-white/75 transition-colors hover:text-neon"
              >
                <Icon aria-hidden="true" />
                {label}
              </a>
            ))}
            <Link href="/about" className="inline-flex min-h-6 items-center text-neon underline underline-offset-4">
              Full profile
            </Link>
            <Link href="/portfolio" className="inline-flex min-h-6 items-center text-neon underline underline-offset-4">
              Case studies
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
