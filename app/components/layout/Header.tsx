'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { m, useMotionValueEvent, useScroll } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';
import { DURATION, EASE, HEADER_HIDE_AFTER } from '@/app/lib/motion';
import { ScrollProgress } from '../motion/ScrollProgress';

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Process', href: '/#process' },
  { label: 'Testimonials', href: '/#testimonials' },
  { label: 'Blog', href: '/blog' },
];

const CONTACT_HREF = '/contact';

/** Home-page sections that have their own nav item. */
const TRACKED_SECTIONS = NAV_ITEMS.filter((item) => item.href.startsWith('/#')).map((item) => item.href.slice(2));

function isActive(href: string, pathname: string, activeSection: string | null): boolean {
  if (href.startsWith('/#')) return pathname === '/' && activeSection === href.slice(2);
  if (href === '/') return pathname === '/' && activeSection === null;
  return pathname === href || pathname.startsWith(`${href}/`);
}

/** Tracks which home-page section is in the middle of the viewport. */
function useActiveSection(enabled: boolean): string | null {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) return;
    const visible = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }
        setActive(TRACKED_SECTIONS.find((id) => visible.has(id)) ?? null);
      },
      { rootMargin: '-45% 0px -45% 0px' },
    );
    for (const id of TRACKED_SECTIONS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [enabled]);

  return enabled ? active : null;
}

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const activeSection = useActiveSection(pathname === '/');
  const { scrollY } = useScroll();

  // Scroll-aware: solid after 20px, slides away on scroll down, returns on scroll up.
  useMotionValueEvent(scrollY, 'change', (y) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(y > 20);
    setHidden(y > previous && y > HEADER_HIDE_AFTER);
  });

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    if (!isMenuOpen) return;
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setIsMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [isMenuOpen]);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  return (
    <>
      <ScrollProgress />
      <m.header
        initial={false}
        animate={{ y: hidden && !isMenuOpen ? '-100%' : '0%' }}
        transition={{ duration: DURATION.fast, ease: EASE.out }}
        className={`fixed z-50 w-full py-5 transition-[background-color,border-color] duration-500 ${
          scrolled || isMenuOpen ? 'border-b border-neon/20 bg-night/95 backdrop-blur-xl' : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="w-full px-4 sm:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="group flex items-center font-orbitron font-bold" aria-label="Mussawar Hayat — go to homepage">
              <Image
                src="/logo.webp"
                alt="Mussawar Hayat logo — full-stack and Web3 developer"
                width={200}
                height={75}
                className="h-12 w-auto brightness-0 invert transition-[filter] duration-300 group-hover:drop-shadow-[0_0_8px_rgba(57,255,20,0.5)] sm:h-14"
                priority
              />
              <span className="ml-3 hidden text-xl tracking-tighter text-white transition-colors duration-300 group-hover:text-neon sm:inline lg:hidden xl:inline">
                Mussawar Hayat
              </span>
            </Link>

            <nav aria-label="Main navigation" className="hidden items-center space-x-7 lg:flex">
              {NAV_ITEMS.map(({ label, href }) => {
                const active = isActive(href, pathname, activeSection);
                return (
                  <Link
                    key={label}
                    href={href}
                    aria-current={active ? 'page' : undefined}
                    className={`group relative py-2 font-orbitron text-[11px] uppercase tracking-widest transition-colors duration-300 ${
                      active ? 'text-neon' : 'text-white/70 hover:text-neon'
                    }`}
                  >
                    {label}
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] w-full origin-left bg-neon shadow-[0_0_8px_#39FF14] transition-transform duration-300 ${
                        active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                      aria-hidden="true"
                    />
                  </Link>
                );
              })}

              <Link
                href={CONTACT_HREF}
                className="ml-4 border border-neon px-6 py-3 font-orbitron text-[11px] font-bold uppercase tracking-widest text-neon transition-[background-color,color,box-shadow] duration-300 hover:bg-neon hover:text-black hover:shadow-[0_0_15px_rgba(57,255,20,0.4)]"
              >
                Contact
              </Link>
            </nav>

            <button
              type="button"
              className="p-2 text-neon lg:hidden"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              <div className="flex h-6 w-6 flex-col items-end justify-between" aria-hidden="true">
                <span className={`h-[2px] w-6 bg-current transition-transform duration-300 ${isMenuOpen ? 'translate-y-[11px] rotate-45' : ''}`} />
                <span className={`h-[2px] w-6 origin-right bg-current transition-[scale,opacity] duration-300 ${isMenuOpen ? 'opacity-0' : 'scale-x-[0.67]'}`} />
                <span className={`h-[2px] w-6 bg-current transition-transform duration-300 ${isMenuOpen ? '-translate-y-[11px] -rotate-45' : 'origin-right scale-x-[0.83]'}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu: fades and slides (opacity/transform); no height animation */}
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className={`absolute inset-x-0 top-full border-t border-neon/10 bg-night py-10 transition-[opacity,translate,visibility] duration-300 lg:hidden ${
            isMenuOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0'
          }`}
        >
          <nav aria-label="Mobile navigation" className="flex flex-col space-y-6 px-4 text-center">
            {NAV_ITEMS.map(({ label, href }) => {
              const active = isActive(href, pathname, activeSection);
              return (
                <Link
                  key={label}
                  href={href}
                  aria-current={active ? 'page' : undefined}
                  onClick={closeMenu}
                  className={`py-1 font-orbitron text-[13px] uppercase tracking-[0.25em] transition-colors duration-300 ${
                    active ? 'text-neon' : 'text-white/75 hover:text-neon'
                  }`}
                >
                  {label}
                </Link>
              );
            })}

            <Link
              href={CONTACT_HREF}
              onClick={closeMenu}
              className="mt-4 border border-neon py-4 font-orbitron text-[12px] font-bold uppercase tracking-[0.2em] text-neon transition-colors duration-300 hover:bg-neon hover:text-black"
            >
              Contact
            </Link>
          </nav>
        </div>
      </m.header>
    </>
  );
}
