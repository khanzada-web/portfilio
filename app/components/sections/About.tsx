'use client';

import { motion } from 'framer-motion';
import {
  FiCode, FiGlobe, FiZap, FiStar, FiLayers,
  FiSmartphone, FiDatabase, FiServer, FiClock, FiUsers,
} from 'react-icons/fi';
import Image from 'next/image';
import { AnimatedCounter } from '../ui/AnimatedCounter';

const SKILLS = [
  { name: 'React / Next.js', level: 95, icon: <FiCode /> },
  { name: 'App Dev (React Native / Flutter)', level: 90, icon: <FiSmartphone /> },
  { name: 'TypeScript / Node.js', level: 95, icon: <FiLayers /> },
  { name: 'UI/UX Architecture', level: 85, icon: <FiStar /> },
  { name: 'Web3 & Blockchain', level: 85, icon: <FiGlobe /> },
  { name: 'Product Engineering', level: 90, icon: <FiZap /> },
  { name: 'REST APIs & Databases', level: 90, icon: <FiDatabase /> },
  { name: 'DevOps / CI/CD / VPS', level: 85, icon: <FiServer /> },
] as const;

const ACHIEVEMENTS = [
  { number: 3, suffix: '+', label: 'Years Experience' },
  { number: 40, suffix: '+', label: 'Projects Delivered' },
  { number: 15, suffix: '+', label: 'Global Clients' },
  { number: null, suffix: '', label: 'Timezone Coverage', static: 'EST / CET' },
] as const;

const PROFILE_TAGS = [
  'Full-Stack & Mobile Specialist',
  'Scalable Systems Architect',
  'Global Remote / Pakistan',
] as const;

const ABOUT_CARDS = [
  {
    icon: <FiCode />,
    title: 'Full-Stack Engineering',
    text: 'Building high-performance, responsive web and mobile applications using modern frameworks like React, Next.js, Node.js, and TypeScript with an emphasis on maintainable architecture.',
  },
  {
    icon: <FiServer />,
    title: 'End-to-End Infrastructure',
    text: 'Managing the entire product lifecycle—from user interface down to backend databases, automated CI/CD pipelines, secure VPS deployment, and cloud infrastructure.',
  },
  {
    icon: <FiGlobe />,
    title: 'Web3 & Smart Contracts',
    text: 'Developing decentralized solutions including DeFi platforms, NFT marketplaces, and protocol integrations leveraging Solidity, Ethers.js, and secure EVM standards.',
  },
  {
    icon: <FiClock />,
    title: 'Seamless Global Collaboration',
    text: 'Operating smoothly across North American and European business hours with robust asynchronous communication, clear milestone tracking, and dependable delivery.',
  },
  {
    icon: <FiUsers />,
    title: 'Startup-Focused Partner',
    text: 'Ideal for early-stage teams and growing startups seeking a dedicated owner who can drive a product from concept to production independently.',
  },
] as const;

const VIEWPORT = { once: true, amount: 0.2 as const, margin: '0px 0px -40px 0px' };

const About = () => (
  <section
    id="about"
    className="py-28 bg-[#030712] relative overflow-hidden font-orbitron text-white"
  >
    {/* Subtle Ambient Background Gradients */}
    <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden="true">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#39FF14]/10 to-blue-600/10 blur-[150px] rounded-full" />
    </div>

    <div className="container mx-auto px-6 relative z-10 max-w-7xl">
      
      {/* Section Header */}
      <div className="mb-20">
        <div className="inline-flex items-center gap-2 border border-[#39FF14]/40 bg-[#39FF14]/5 px-3.5 py-1.5 mb-4 rounded-md text-xs tracking-[0.25em] text-[#39FF14] uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[#39FF14] animate-pulse" />
          Professional Profile
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
          Architecting Scalable Digital Products
        </h2>
        <p className="max-w-3xl text-sm md:text-base text-white/70 font-sans leading-relaxed">
          Mussawar Hayat is a versatile Full-Stack and Web3 Software Engineer with a track record of delivering robust web, mobile, and decentralized applications for international startups.
        </p>
      </div>

      {/* Narrative Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
        {ABOUT_CARDS.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.2), ease: 'easeOut' }}
            viewport={VIEWPORT}
            className="bg-[#0B132B]/60 backdrop-blur-md border border-white/10 p-7 rounded-xl hover:border-[#39FF14]/40 transition-all duration-300 group shadow-lg"
          >
            <div className="w-10 h-10 rounded-lg bg-[#39FF14]/10 border border-[#39FF14]/20 flex items-center justify-center text-[#39FF14] text-lg mb-5 group-hover:scale-105 transition-transform" aria-hidden="true">
              {card.icon}
            </div>
            <h3 className="text-base font-bold text-white mb-3 tracking-wide">{card.title}</h3>
            <p className="text-sm text-white/60 leading-relaxed font-sans">{card.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Detailed Layout: Profile Column & Core Competencies */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Photo & Credentials Card */}
        <div className="lg:col-span-4">
          <div className="relative bg-[#0B132B]/60 backdrop-blur-md border border-white/10 p-6 rounded-xl shadow-xl">
            <div className="relative w-full aspect-square mb-6 overflow-hidden rounded-lg border border-white/10">
              <Image
                src="/my-pic.jpeg"
                alt="Mussawar Hayat, Full-Stack and Web3 Software Engineer"
                fill
                sizes="(max-width: 1024px) 100vw, 30vw"
                className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-transparent to-transparent opacity-80" />
            </div>

            <h3 className="text-xl font-bold text-white mb-1">Mussawar Hayat</h3>
            <p className="text-xs tracking-wider text-[#39FF14] uppercase font-semibold mb-6">Full-Stack & Web3 Engineer</p>

            <ul className="space-y-3.5 text-xs text-white/80 font-sans border-t border-white/10 pt-5">
              {PROFILE_TAGS.map((tag) => (
                <li key={tag} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#39FF14] shrink-0" aria-hidden="true" />
                  <span>{tag}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: Skills & Key Metrics */}
        <div className="lg:col-span-8 space-y-12">
          
          {/* Core Competencies */}
          <div className="bg-[#0B132B]/40 backdrop-blur-md border border-white/10 p-8 rounded-xl shadow-xl">
            <h3 className="text-xs tracking-[0.3em] uppercase text-white/40 mb-8 font-semibold flex items-center gap-3">
              <span className="w-8 h-px bg-[#39FF14]" />
              Technical Competencies
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {SKILLS.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-black/30 border border-white/5 p-4 rounded-lg hover:border-[#39FF14]/30 transition-colors group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <span className="text-base text-[#39FF14] group-hover:scale-110 transition-transform" aria-hidden="true">
                        {skill.icon}
                      </span>
                      <h4 className="text-white font-semibold text-xs tracking-wide">{skill.name}</h4>
                    </div>
                    <span className="text-[11px] text-white/40 font-mono">{skill.level}%</span>
                  </div>
                  
                  <div
                    className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden"
                    role="progressbar"
                    aria-valuenow={skill.level}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={skill.name}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
                      viewport={VIEWPORT}
                      className="h-full bg-gradient-to-r from-[#39FF14]/60 to-[#39FF14] rounded-full shadow-[0_0_10px_rgba(57,255,20,0.3)]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievement Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-[#0B132B]/60 backdrop-blur-md border border-white/10 p-6 rounded-xl shadow-xl">
            {ACHIEVEMENTS.map((item) => (
              <div key={item.label} className="text-center md:text-left px-2">
                <div className="text-2xl md:text-3xl font-extrabold text-white mb-1 tracking-tight">
                  {'static' in item && item.static ? (
                    <span className="text-[#39FF14]">{item.static}</span>
                  ) : (
                    <>
                      <AnimatedCounter from={0} to={item.number as number} duration={1.2} />
                      <span className="text-[#39FF14]">{item.suffix}</span>
                    </>
                  )}
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/50">{item.label}</div>
              </div>
            ))}
          </div>

        </div>
      </div>

    </div>
  </section>
);

export default About;