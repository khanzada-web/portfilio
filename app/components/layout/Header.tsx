'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import logo from '../logo.png';

// ─── Data ─────────────────────────────────────────────────────────────────────

interface NavItem {
  label: string;
  href:  string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home',         href: '/#home'        },
  { label: 'About',        href: '/#about'       },
  { label: 'Services',     href: '/services'     },
  { label: 'Portfolio',    href: '/#portfolio'   },
  { label: 'Process',      href: '/#process'     },
  { label: 'Testimonials', href: '/#testimonials'},
  { label: 'Blog',         href: '/blog'         },
];

const CONTACT_HREF = '/#contact';

// ─── Active link helper ───────────────────────────────────────────────────────
// ✅ FIX: Hash links (/#about, /#portfolio etc.) ALL start with "/#"
//    The old code returned `pathname === '/'` for every single one of them,
//    making ALL tabs active at the same time on the homepage.
//
//    Correct approach:
//    - Hash links → NEVER active (we can't know which section is in view
//      from pathname alone — that needs IntersectionObserver)
//    - Real page routes (/services, /blog) → active when pathname matches

const isActive = (href: string, pathname: string): boolean => {
  if (href.includes('#')) return false;              // hash anchors: never active
  if (href === '/') return pathname === '/';         // exact root match only
  return pathname === href || pathname.startsWith(href + '/');
};

// ─── Component ────────────────────────────────────────────────────────────────

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled,   setScrolled]   = useState(false);
  const pathname = usePathname();

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#060B16]/95 backdrop-blur-xl border-b border-[#39FF14]/20 py-4'
          : 'bg-transparent py-7'
      }`}
    >
      <div className="w-full px-4 sm:px-8">
        <div className="flex items-center justify-between">

          {/* ── Logo ── */}
          <Link
            href="/"
            className="flex items-center group font-orbitron font-bold transition-all duration-300"
            aria-label="Mussawar Hayat — go to homepage"
          >
            <Image
              src={logo}
              alt=""
              width={200}
              height={75}
              className="h-12 sm:h-14 w-auto brightness-0 invert transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(57,255,20,0.5)]"
              priority
            />
            <span className="hidden sm:inline ml-3 text-white tracking-tighter text-xl group-hover:text-[#39FF14] transition-colors duration-300">
              Mussawar Hayat
            </span>
          </Link>

          {/* ── Desktop Navigation ── */}
          <nav aria-label="Main navigation" className="hidden lg:flex items-center space-x-7">
            {NAV_ITEMS.map(({ label, href }) => {
              const active = isActive(href, pathname);
              return (
                <Link
                  key={label}
                  href={href}
                  aria-current={active ? 'page' : undefined}
                  className={`font-orbitron text-[11px] uppercase tracking-widest transition-all duration-300 relative group py-2 ${
                    active ? 'text-[#39FF14]' : 'text-white/60 hover:text-[#39FF14]'
                  }`}
                >
                  {label}
                  {/* Underline — always visible on active page routes, appears on hover for hash links */}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-[#39FF14] shadow-[0_0_8px_#39FF14] transition-all duration-300 ${
                      active ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                    aria-hidden="true"
                  />
                </Link>
              );
            })}

            <Link
              href={CONTACT_HREF}
              className="font-orbitron text-[11px] uppercase tracking-widest border border-[#39FF14] text-[#39FF14] px-6 py-3 font-bold hover:bg-[#39FF14] hover:text-black hover:shadow-[0_0_15px_rgba(57,255,20,0.4)] transition-all duration-300 ml-4"
            >
              Contact
            </Link>
          </nav>

          {/* ── Mobile Toggle ── */}
          <button
            className="lg:hidden text-[#39FF14] p-2"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            <div className="w-6 h-6 flex flex-col justify-between items-end" aria-hidden="true">
              <span className={`h-[2px] bg-current transition-all duration-300 ${isMenuOpen ? 'w-6 rotate-45 translate-y-2.5' : 'w-6'}`} />
              <span className={`h-[2px] bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0 w-6' : 'w-4'}`} />
              <span className={`h-[2px] bg-current transition-all duration-300 ${isMenuOpen ? 'w-6 -rotate-45 -translate-y-2.5' : 'w-5'}`} />
            </div>
          </button>
        </div>

        {/* ── Mobile Menu ── */}
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden bg-[#060B16] border-t border-[#39FF14]/10 ${
            isMenuOpen ? 'max-h-screen py-10 opacity-100 mt-4' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <nav aria-label="Mobile navigation" className="flex flex-col space-y-6 px-4 text-center">
            {NAV_ITEMS.map(({ label, href }) => {
              const active = isActive(href, pathname);
              return (
                <Link
                  key={label}
                  href={href}
                  aria-current={active ? 'page' : undefined}
                  onClick={closeMenu}
                  className={`font-orbitron text-[13px] uppercase tracking-[0.25em] transition-colors duration-300 ${
                    active ? 'text-[#39FF14]' : 'text-white/70 hover:text-[#39FF14]'
                  }`}
                >
                  {label}
                </Link>
              );
            })}

            <Link
              href={CONTACT_HREF}
              onClick={closeMenu}
              className="font-orbitron text-[12px] uppercase tracking-[0.2em] border border-[#39FF14] text-[#39FF14] py-4 font-bold mt-4 hover:bg-[#39FF14] hover:text-black transition-all duration-300"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}