'use client';

import { motion } from 'framer-motion';
import {
  FiCode, FiGlobe, FiZap, FiStar, FiLayers,
  FiSmartphone, FiDatabase, FiServer, FiBriefcase, FiClock, FiUsers,
} from 'react-icons/fi';
import Image from 'next/image';
import { AnimatedCounter } from '../ui/AnimatedCounter';

// ─── Data ─────────────────────────────────────────────────────────────────────

const SKILLS = [
  { name: 'React / Next.js',              level: 100, icon: <FiCode />       },
  { name: 'App Development (RN/Flutter)', level: 100,  icon: <FiSmartphone /> },
  { name: 'TypeScript / Node.js',         level: 100, icon: <FiLayers />     },
  { name: 'UI/UX Architecture',           level: 100,  icon: <FiStar />       },
  { name: 'Web3 & Blockchain',            level: 100,  icon: <FiGlobe />      },
  { name: 'Product Engineering',          level: 100,  icon: <FiZap />        },
  { name: 'REST APIs & Databases',        level: 100,  icon: <FiDatabase />   },
  { name: 'DevOps / CI/CD / VPS',         level: 100,  icon: <FiServer />     },
] as const;

const ACHIEVEMENTS = [
  { number: 3,    suffix: '+', label: 'Years Experience'    },
  { number: 100,  suffix: '+', label: 'Digital Solutions'   },
  { number: 100,  suffix: '%', label: 'Client Satisfaction' },
  { number: null, suffix: '',  label: 'Global Delivery', static: '24/7' },
] as const;

const PROFILE_TAGS = [
  'Full-Stack & App Specialist',
  'Scalable Systems Architect',
  'Based in Pakistan / Global Remote',
] as const;

const ABOUT_CARDS = [
  {
    icon: <FiCode />,
    title: 'Full-Stack Development',
    text: 'I\'m a full-stack developer based in Pakistan, working with clients worldwide for 3+ years. My core focus is building fast, scalable web and mobile applications using React, Next.js, Node.js, and TypeScript.',
  },
  {
    icon: <FiServer />,
    title: 'End-to-End Infrastructure',
    text: 'I handle the full stack — from customer-facing frontends to backend APIs and databases. I also manage infrastructure that most developers outsource: CI/CD pipelines, VPS deployment, SSL, and email infrastructure. One person, end-to-end.',
  },
  {
    icon: <FiGlobe />,
    title: 'Web3 & Blockchain',
    text: 'Alongside general full-stack work, I\'ve built DeFi platforms, NFT marketplaces, and Bitcoin Ordinals tools using Solidity and Ethers.js. If your project needs blockchain, that\'s covered.',
  },
  {
    icon: <FiClock />,
    title: 'Remote & Global',
    text: 'I work remotely with clients across North America and Europe, overlapping EST, PST, and CET business hours. GDPR-compliant infrastructure available where needed.',
  },
  {
    icon: <FiUsers />,
    title: 'Built for Startups',
    text: 'I work best with startups and small teams who want one person to own a project end-to-end — not manage multiple specialists.',
  },
] as const;

// ─── Component ────────────────────────────────────────────────────────────────

const About = () => (
  <section
    id="about"
    className="py-32 bg-[#060B16] relative overflow-hidden font-orbitron text-[#39FF14]"
  >
    {/* Background glows */}
    <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#39FF14]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
    </div>

    <div className="container mx-auto px-6 relative z-10">

      {/* Section Header */}
      <div className="mb-24">
        <div className="inline-block border border-[#39FF14] px-4 py-1 mb-6 text-xs tracking-[0.3em] uppercase opacity-80">
          About
        </div>
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-12">
          Digital <span className="text-[#39FF14]">Architect</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
          {ABOUT_CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#0A1221] border border-[#39FF14]/15 p-6 hover:border-[#39FF14]/40 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xl text-[#39FF14] group-hover:scale-110 transition-transform" aria-hidden="true">
                  {card.icon}
                </span>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                  {card.title}
                </h3>
              </div>
              <p className="text-sm text-white/70 leading-relaxed font-sans">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

        {/* ── Profile Card ── */}
        <div className="lg:col-span-5">
          <div className="relative group">
            <div className="absolute -inset-1 bg-[#39FF14]/20 blur opacity-25 group-hover:opacity-50 transition duration-1000" />
            <div className="relative bg-[#0A1221] border border-[#39FF14]/30 p-8 rounded-sm">

              <div className="relative w-full aspect-square mb-8 overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 border border-[#39FF14]/20">
                <Image
                  src="/my-pic.jpeg"
                  alt="Mussawar Hayat — Full-Stack Developer"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1221] via-transparent to-transparent" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">Mussawar Hayat</h3>
              <p className="text-sm tracking-widest uppercase opacity-70 mb-6">
                Lead Software Engineer
              </p>

              <ul className="space-y-4 text-sm">
                {PROFILE_TAGS.map((tag) => (
                  <li
                    key={tag}
                    className="flex items-center gap-3 border-b border-[#39FF14]/10 pb-3 last:border-0"
                  >
                    <span className="w-1.5 h-1.5 bg-[#39FF14] rotate-45 shrink-0" aria-hidden="true" />
                    <span>{tag}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── Right Column ── */}
        <div className="lg:col-span-7 space-y-16">

          {/* Skills */}
          <div>
            <h3 className="text-sm tracking-[0.4em] uppercase opacity-50 mb-8 border-l-2 border-[#39FF14] pl-4">
              Core Competencies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {SKILLS.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-[#0A1221] border border-[#39FF14]/10 p-5 hover:border-[#39FF14]/50 transition-colors group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-xl opacity-80 group-hover:text-white group-hover:scale-110 transition-all"
                      aria-hidden="true"
                    >
                      {skill.icon}
                    </span>
                    <span className="text-[10px] opacity-40 uppercase tracking-widest">
                      {skill.level}%
                    </span>
                  </div>
                  <h4 className="text-white font-bold text-sm tracking-wide">{skill.name}</h4>
                  <div
                    className="mt-4 h-[2px] w-full bg-[#39FF14]/5"
                    role="progressbar"
                    aria-valuenow={skill.level}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={skill.name}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="h-full bg-[#39FF14] shadow-[0_0_10px_#39FF14]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievement Counters */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-[#39FF14]/10">
            {ACHIEVEMENTS.map((item) => (
              <div key={item.label} className="text-center md:text-left">
                <div className="text-3xl font-bold text-white mb-1">
                  {'static' in item && item.static ? (
                    item.static
                  ) : (
                    <AnimatedCounter from={0} to={item.number as number} duration={1} />
                  )}
                  <span className="text-[#39FF14]">{item.suffix}</span>
                </div>
                <div className="text-[9px] uppercase tracking-[0.2em] opacity-50">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  </section>
);

export default About;
