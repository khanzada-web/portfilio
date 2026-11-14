import Image from 'next/image';
import Link from 'next/link';
import { FiMail, FiMapPin, FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi';
import { BackToTop } from '../motion/BackToTop';
import { Stagger, StaggerItem } from '../motion/Stagger';

const QUICK_LINKS = [
  [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Process', href: '/#process' },
    { label: 'Testimonials', href: '/#testimonials' },
  ],
  [
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Services', href: '/services' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
    { label: 'FAQ', href: '/#faq' },
  ],
] as const;

const SOCIAL_LINKS = [
  { icon: <FiTwitter />, href: 'https://twitter.com/Mussawar_Hayat', label: 'Twitter' },
  { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/mussawar-hayat-187768233', label: 'LinkedIn' },
  { icon: <FiGithub />, href: 'https://github.com/khanzada-web', label: 'GitHub' },
] as const;

const CONTACT_INFO = [
  { icon: FiMail, value: 'reply@mussawarhayat.site', href: 'mailto:reply@mussawarhayat.site' },
  { icon: FiMapPin, value: 'Mehria Town, Attock, PK', href: null },
] as const;

const LEGAL_LINK = 'link-underline font-orbitron text-[10px] uppercase tracking-widest text-white/60 transition-colors hover:text-neon';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-neon/10 bg-night py-16 text-white/65">
      <div className="relative z-10 w-full px-4 sm:px-8">
        <Stagger step={0.1} className="grid grid-cols-1 gap-12 sm:gap-16 md:grid-cols-2 lg:grid-cols-3">
          <StaggerItem className="md:col-span-2 lg:col-span-1">
            <Link href="/" aria-label="Mussawar Hayat — go to homepage" className="mb-6 flex items-center">
              <Image
                src="/logo.webp"
                alt="Mussawar Hayat logo — full-stack and Web3 developer"
                width={200}
                height={80}
                className="mr-4 h-10 w-auto brightness-0 invert sm:h-12"
              />
              <span className="font-orbitron text-xl font-bold tracking-tighter text-white sm:text-2xl">Mussawar Hayat</span>
            </Link>

            <p className="mb-8 max-w-md font-sans text-sm leading-relaxed text-white/65">
              Mussawar Hayat is a full-stack developer specializing in Next.js, React, and Web3, based in Pakistan, available for
              remote freelance work with clients in North America and Europe.
            </p>

            <address className="space-y-4 not-italic">
              {CONTACT_INFO.map(({ icon: Icon, value, href }) => (
                <div key={value} className="group flex items-center space-x-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded border border-white/10 transition-colors group-hover:border-neon/50 group-hover:text-neon">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </div>
                  {href ? (
                    <a href={href} className="link-underline font-orbitron text-xs tracking-wide transition-colors group-hover:text-white sm:text-sm">
                      {value}
                    </a>
                  ) : (
                    <span className="font-orbitron text-xs tracking-wide sm:text-sm">{value}</span>
                  )}
                </div>
              ))}
            </address>
          </StaggerItem>

          <StaggerItem>
            <h2 className="mb-8 flex items-center font-orbitron text-sm font-bold uppercase tracking-[0.2em] text-white">
              <span className="mr-3 h-2 w-2 rounded-full bg-neon shadow-[0_0_8px_#39FF14]" aria-hidden="true" />
              Quick Links
            </h2>

            <div className="grid grid-cols-2 gap-4">
              {QUICK_LINKS.map((column, i) => (
                <ul key={i} className="space-y-4">
                  {column.map(({ label, href }) => (
                    <li key={label}>
                      <Link
                        href={href}
                        className="link-underline font-orbitron text-xs uppercase tracking-widest text-white/65 transition-colors hover:text-neon"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </StaggerItem>

          <StaggerItem>
            <h2 className="mb-8 font-orbitron text-sm font-bold uppercase tracking-[0.2em] text-white">Connect With Me</h2>

            <div className="mb-8 flex space-x-4">
              {SOCIAL_LINKS.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label} profile of Mussawar Hayat`}
                  className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white shadow-xl transition-[translate,border-color,color,background-color] duration-300 hover:-translate-y-1 hover:border-neon hover:bg-neon/5 hover:text-neon"
                >
                  <span aria-hidden="true">{icon}</span>
                </a>
              ))}
            </div>

            <p className="border-l-2 border-neon/30 pl-4 font-sans text-xs leading-relaxed text-white/60">
              Building production web, mobile, and Web3 applications for startups and teams worldwide.
            </p>
          </StaggerItem>
        </Stagger>

        <div className="mt-16 border-t border-white/5 pt-8">
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
            <p className="font-orbitron text-[10px] uppercase tracking-widest text-white/60">
              © {currentYear} <span className="text-white/80">Mussawar Hayat</span>. All rights reserved.
            </p>

            <nav aria-label="Legal links" className="flex space-x-8">
              <Link href="/terms" className={LEGAL_LINK}>
                Terms of Service
              </Link>
              <Link href="/privacy" className={LEGAL_LINK}>
                Privacy Policy
              </Link>
            </nav>
          </div>
        </div>
      </div>

      <BackToTop />
    </footer>
  );
}
