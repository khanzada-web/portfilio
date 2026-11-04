'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  FaShoppingCart, FaBuilding, FaPills,
  FaBox, FaGraduationCap, FaTruck,
  FaCheckCircle, FaTerminal,
} from 'react-icons/fa';
import type { ComponentType } from 'react';

interface SaasProject {
  id:          string;
  title:       string;
  description: string;
  icon:        ComponentType<{ className?: string }>;
  features:    readonly string[];
}

const SAAS_PROJECTS: SaasProject[] = [
  {
    id: 'retail', title: 'Retail Intelligence',
    description: 'Advanced POS and inventory management for modern retail ecosystems.',
    icon: FaShoppingCart,
    features: ['Real-time Analytics', 'Inventory Logic', 'Multi-store Sync'],
  },
  {
    id: 'hospitality', title: 'Hospitality Core',
    description: 'Automated booking and operations engine for premium hotel management.',
    icon: FaBuilding,
    features: ['Channel Manager', 'Revenue Logic', 'Guest Portal'],
  },
  {
    id: 'healthcare', title: 'Health Systems',
    description: 'Compliant pharmacy and clinic management with integrated EHR.',
    icon: FaPills,
    features: ['Patient Records', 'Insurance Bridge', 'Auto-Inventory'],
  },
  {
    id: 'logistics', title: 'Logistics Fleet',
    description: 'Global supply chain tracking and fleet optimisation infrastructure.',
    icon: FaTruck,
    features: ['Route Optimisation', 'Live Tracking', 'Vendor API'],
  },
  {
    id: 'education', title: 'Academic LMS',
    description: 'Comprehensive learning management systems for institutions and schools.',
    icon: FaGraduationCap,
    features: ['Fee Management', 'Parent Portal', 'Online Exams'],
  },
  {
    id: 'inventory', title: 'Smart Inventory',
    description: 'Warehouse automation with barcode scanning and supply forecasting.',
    icon: FaBox,
    features: ['QR Integration', 'Stock Alerts', 'Forecasting'],
  },
] as const;

const VIEWPORT = { once: true, amount: 0.2 as const, margin: '0px 0px -40px 0px' };

export function SaasProjects() {
  return (
    <section id="products" className="py-28 bg-[#030712] font-orbitron text-white relative overflow-hidden">
      
      {/* Ambient Background Gradient */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#39FF14]/10 blur-[160px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 border border-[#39FF14]/40 bg-[#39FF14]/5 px-3.5 py-1.5 mb-4 rounded-md text-xs tracking-[0.25em] text-[#39FF14] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#39FF14] animate-pulse" />
            Enterprise_Solutions.sys
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            SaaS <span className="text-[#39FF14]">Products</span>
          </h2>
          <p className="text-sm md:text-base opacity-70 max-w-2xl mx-auto font-sans leading-relaxed">
            Ready-to-deploy enterprise software designed to scale. High-performance architectures
            tailored for specific industry verticals.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {SAAS_PROJECTS.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{
                duration: 0.4,
                delay: Math.min(index * 0.04, 0.2),
                ease: 'easeOut',
              }}
              className="group"
            >
              <div className="h-full bg-[#0B132B]/60 backdrop-blur-md border border-white/10 p-8 rounded-xl hover:border-[#39FF14]/40 transition-all duration-300 flex flex-col shadow-lg">

                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 bg-[#39FF14]/10 rounded-lg flex items-center justify-center text-[#39FF14] border border-[#39FF14]/20 group-hover:scale-105 transition-transform">
                    <project.icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-bold text-white uppercase tracking-wider">
                    {project.title}
                  </h3>
                </div>

                <p className="text-sm opacity-65 font-sans mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>

                <ul className="space-y-2.5 mb-8 border-t border-white/10 pt-5">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-[10px] tracking-widest uppercase opacity-80 font-medium"
                    >
                      <FaCheckCircle className="text-[#39FF14] mr-3 shrink-0" aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <Link
                    href="#contact"
                    className="py-3 px-4 bg-[#39FF14] text-black rounded-lg text-[10px] font-bold tracking-widest hover:bg-white hover:shadow-[0_0_15px_rgba(57,255,20,0.3)] transition-all text-center uppercase"
                    aria-label={`Get a quote for ${project.title}`}
                  >
                    GET_QUOTE
                  </Link>
                  <Link
                    href="#contact"
                    className="py-3 px-4 border border-white/15 bg-white/[0.02] rounded-lg text-white text-[10px] font-bold tracking-widest hover:border-[#39FF14]/40 hover:text-[#39FF14] transition-all text-center uppercase"
                    aria-label={`Request a demo of ${project.title}`}
                  >
                    DEMO.exe
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Custom Architecture Banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="relative overflow-hidden bg-[#0B132B]/60 backdrop-blur-md border border-white/10 p-10 md:p-14 rounded-xl text-center shadow-2xl"
        >
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[#39FF14]/5 blur-[100px] pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10">
            <FaTerminal className="w-10 h-10 mx-auto mb-5 text-[#39FF14]" aria-hidden="true" />
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 uppercase tracking-tight">
              Need a Custom Architecture?
            </h3>
            <p className="text-sm md:text-base opacity-75 mb-8 max-w-xl mx-auto font-sans leading-relaxed">
              If your requirements fall outside these modules, I specialise in architecting bespoke
              digital ecosystems built to your exact specifications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#contact"
                className="px-8 py-4 bg-[#39FF14] text-black rounded-lg font-bold uppercase text-xs tracking-widest hover:bg-white hover:shadow-[0_0_25px_rgba(57,255,20,0.4)] transition-all text-center"
              >
                REQUEST CUSTOM BUILD
              </Link>
              <Link
                href="#contact"
                className="px-8 py-4 border border-white/15 bg-white/[0.02] text-white rounded-lg font-bold uppercase text-xs tracking-widest hover:border-[#39FF14]/50 hover:text-[#39FF14] transition-all text-center"
              >
                CONSULTATION_MODULE
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}