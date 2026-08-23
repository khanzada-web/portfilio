'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiArrowUp, FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi';

const QUICK_LINKS_COL_1 = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Process', href: '/#process' },
  { label: 'Testimonials', href: '/#testimonials' },
];

const QUICK_LINKS_COL_2 = [
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Services', href: '/services' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
  { label: 'FAQ', href: '/#faq' },
];

const SOCIAL_LINKS = [
  { icon: <FiTwitter />, href: 'https://twitter.com/Mussawar_Hayat', label: 'Twitter' },
  {
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/in/mussawar-hayat-187768233',
    label: 'LinkedIn',
  },
  { icon: <FiGithub />, href: 'https://github.com/khanzada-web', label: 'GitHub' },
] as const;

const CONTACT_INFO = [
  { icon: FiMail, value: 'zada38843@gmail.com', href: 'mailto:zada38843@gmail.com' },
  { icon: FiPhone, value: '+92 335 8328468', href: 'tel:+923358328468' },
  { icon: FiMapPin, value: 'Mehria Town, Attock, PK', href: null },
] as const;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#060B16] text-white/60 py-16 relative overflow-hidden border-t border-[#39FF14]/10">
      <div className="w-full px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2 lg:col-span-1"
          >
            <Link href="/" aria-label="Mussawar Hayat — go to homepage" className="flex items-center mb-6">
              <Image
                src="/logo.webp"
                alt="Mussawar Hayat logo — full-stack and Web3 developer"
                width={200}
                height={80}
                className="h-10 sm:h-12 w-auto brightness-0 invert mr-4"
              />
              <span className="text-xl sm:text-2xl font-bold text-white font-orbitron tracking-tighter">
                Mussawar Hayat
              </span>
            </Link>

            <p className="text-white/50 mb-8 leading-relaxed font-sans text-sm max-w-md">
              Mussawar Hayat is a full-stack developer specializing in Next.js, React, and Web3, based
              in Pakistan, available for remote freelance work with clients in North America and Europe.
            </p>

            <address className="not-italic space-y-4">
              {CONTACT_INFO.map(({ icon: Icon, value, href }) => (
                <div key={value} className="flex items-center space-x-3 group">
                  <div className="w-8 h-8 rounded border border-white/10 flex items-center justify-center group-hover:border-[#39FF14]/50 group-hover:text-[#39FF14] transition-all shrink-0">
                    <Icon className="w-4 h-4" aria-hidden="true" />
                  </div>
                  {href ? (
                    <a
                      href={href}
                      className="text-xs sm:text-sm font-orbitron tracking-wide group-hover:text-white transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="text-xs sm:text-sm font-orbitron tracking-wide">{value}</span>
                  )}
                </div>
              ))}
            </address>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-white text-sm font-bold mb-8 font-orbitron uppercase tracking-[0.2em] flex items-center">
              <span className="w-2 h-2 bg-[#39FF14] rounded-full mr-3 shadow-[0_0_8px_#39FF14]" aria-hidden="true" />
              Quick Links
            </h2>

            <div className="grid grid-cols-2 gap-4">
              <ul className="space-y-4">
                {QUICK_LINKS_COL_1.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-white/40 hover:text-[#39FF14] transition-colors text-xs uppercase tracking-widest font-orbitron"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-4">
                {QUICK_LINKS_COL_2.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-white/40 hover:text-[#39FF14] transition-colors text-xs uppercase tracking-widest font-orbitron"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-white text-sm font-bold mb-8 font-orbitron uppercase tracking-[0.2em]">
              Connect With Me
            </h2>

            <div className="flex space-x-4 mb-8">
              {SOCIAL_LINKS.map(({ icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label} profile of Mussawar Hayat`}
                  className="w-12 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-white hover:border-[#39FF14] hover:text-[#39FF14] transition-all duration-300 shadow-xl"
                  whileHover={{ y: -5, backgroundColor: 'rgba(57,255,20,0.05)' }}
                >
                  <span aria-hidden="true">{icon}</span>
                </motion.a>
              ))}
            </div>

            <p className="text-white/40 text-xs font-sans leading-relaxed border-l-2 border-[#39FF14]/30 pl-4">
              Building production web, mobile, and Web3 applications for startups and teams worldwide.
            </p>
          </motion.div>
        </div>

        <div className="border-t border-white/5 mt-16 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <p className="text-white/30 text-[10px] uppercase tracking-widest font-orbitron">
              © {currentYear} <span className="text-white/60">Mussawar Hayat</span>. All rights reserved.
            </p>

            <nav aria-label="Legal links" className="flex space-x-8">
              <Link
                href="/terms"
                className="text-white/30 hover:text-[#39FF14] text-[10px] uppercase tracking-widest transition-colors font-orbitron"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy"
                className="text-white/30 hover:text-[#39FF14] text-[10px] uppercase tracking-widest transition-colors font-orbitron"
              >
                Privacy Policy
              </Link>
            </nav>
          </div>
        </div>
      </div>

      <Link
        href="/#home"
        aria-label="Scroll back to top"
        className="fixed bottom-8 right-8 w-12 h-12 bg-[#39FF14] text-black rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(57,255,20,0.3)] hover:shadow-[0_0_30px_rgba(57,255,20,0.5)] hover:scale-110 active:scale-90 transition-all z-50"
      >
        <FiArrowUp className="w-5 h-5 stroke-[3]" aria-hidden="true" />
      </Link>
    </footer>
  );
}
