'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiArrowUp, FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi';
import logo from '../logo.png';

// ─── Data ─────────────────────────────────────────────────────────────────────

const QUICK_LINKS_COL_1 = [
  { label: 'Home',         href: '/#home'        },
  { label: 'About',        href: '/#about'       },
  { label: 'Process',      href: '/#process'     },
  { label: 'Testimonials', href: '/#testimonials'},
];

const QUICK_LINKS_COL_2 = [
  { label: 'Portfolio', href: '/#portfolio'                              },
  { label: 'Services',  href: '/services'                               },
  { label: 'Blog',      href: '/blog'                                   },
  { label: 'Contact',   href: '/#contact'                               },
];

const SOCIAL_LINKS = [
  { icon: <FiTwitter />,  href: 'https://twitter.com/Mussawar_Hayat',                    label: 'Twitter'  },
  { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/mussawar-hayat-187768233',  label: 'LinkedIn' },
  { icon: <FiGithub />,   href: 'https://github.com/khanzada-web',                       label: 'GitHub'   },
] as const;

// ✅ Contact info as typed data — keeps JSX clean and makes updates easy
const CONTACT_INFO = [
  { icon: FiMail,   value: 'zada38843@gmail.com', href: 'mailto:zada38843@gmail.com' },
  { icon: FiPhone,  value: '+92 335 8328468',      href: 'tel:+923358328468'          },
  { icon: FiMapPin, value: 'Mehria Town, Attock, PK', href: null                     },
] as const;

// ─── Component ────────────────────────────────────────────────────────────────

export function Footer() {
  // ✅ currentYear computed once at module level — no re-render needed
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#060B16] text-white/60 py-16 relative overflow-hidden border-t border-[#39FF14]/10">
      <div className="w-full px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-16">

          {/* ── Brand & Contact ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2 lg:col-span-1"
          >
            <Link href="/" aria-label="Mussawar Hayat — go to homepage" className="flex items-center mb-6">
              <Image
                src={logo}
                alt="Mussawar Hayat logo"
                width={200}
                height={80}
                className="h-10 sm:h-12 w-auto brightness-0 invert mr-4"
              />
              <h2 className="text-xl sm:text-2xl font-bold text-white font-orbitron tracking-tighter">
                Mussawar Hayat
              </h2>
            </Link>

            <p className="text-white/50 mb-8 leading-relaxed font-orbitron text-xs sm:text-sm max-w-md">
              Full-stack developer building web & mobile applications with React, Next.js, Node.js & TypeScript —
              with Web3/blockchain integration expertise. 3+ years experience, available for freelance work worldwide.
            </p>

            {/* Contact info — clickable links */}
            <address className="not-italic space-y-4">
              {/* ✅ <address> is the correct HTML5 element for contact information */}
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
              {/* ✅ Previously contact items were <div> with cursor-pointer but no href —
                      email and phone are now real <a> links (mailto: / tel:) */}
            </address>
          </motion.div>

          {/* ── Quick Links ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white text-sm font-bold mb-8 font-orbitron uppercase tracking-[0.2em] flex items-center">
              <span className="w-2 h-2 bg-[#39FF14] rounded-full mr-3 shadow-[0_0_8px_#39FF14]" aria-hidden="true" />
              Quick Links
            </h3>

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

          {/* ── Connect ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white text-sm font-bold mb-8 font-orbitron uppercase tracking-[0.2em]">
              Connect With Me
            </h3>

            <div className="flex space-x-4 mb-8">
              {SOCIAL_LINKS.map(({ icon, href, label }) => (
                <motion.a
                  key={label}
                  // ✅ Key is the stable label string, not the array index
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  // ✅ All external links need rel="noopener noreferrer" (tabnapping prevention)
                  aria-label={`${label} profile`}
                  // ✅ aria-label so screen readers say "GitHub profile" not just the icon
                  className="w-12 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-white hover:border-[#39FF14] hover:text-[#39FF14] transition-all duration-300 shadow-xl"
                  whileHover={{ y: -5, backgroundColor: 'rgba(57,255,20,0.05)' }}
                >
                  <span aria-hidden="true">{icon}</span>
                </motion.a>
              ))}
            </div>

            <blockquote className="text-white/40 text-xs font-orbitron leading-relaxed italic border-l-2 border-[#39FF14]/30 pl-4">
              "Building the future of the decentralised web, one block at a time."
            </blockquote>
            {/* ✅ Changed <p> to <blockquote> — correct semantic element for a quoted phrase */}
          </motion.div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-white/5 mt-16 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <p className="text-white/30 text-[10px] uppercase tracking-widest font-orbitron">
              © {currentYear}{' '}
              <span className="text-white/60">Mussawar Hayat</span>. All rights reserved.
            </p>

            <nav aria-label="Legal links" className="flex space-x-8">
              {/* ✅ Changed <button> to <Link> — Terms and Privacy are pages, not actions.
                      Using <button> for navigation is a semantic error. */}
              <Link
                href="/terms"
                className="text-white/30 hover:text-[#39FF14] text-[10px] uppercase tracking-widest transition-colors font-orbitron"
              >
                Terms
              </Link>
              <Link
                href="/privacy"
                className="text-white/30 hover:text-[#39FF14] text-[10px] uppercase tracking-widest transition-colors font-orbitron"
              >
                Privacy
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* ── Scroll to top ── */}
      <Link
        href="#home"
        aria-label="Scroll back to top"
        className="fixed bottom-8 right-8 w-12 h-12 bg-[#39FF14] text-black rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(57,255,20,0.3)] hover:shadow-[0_0_30px_rgba(57,255,20,0.5)] hover:scale-110 active:scale-90 transition-all z-50"
      >
        <FiArrowUp className="w-5 h-5 stroke-[3]" aria-hidden="true" />
      </Link>
    </footer>
  );
}