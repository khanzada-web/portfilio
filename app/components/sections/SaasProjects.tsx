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
    <section id="products" className="py-32 bg-[#060B16] font-orbitron text-[#39FF14]">
      <div className="max-w-7xl mx-auto px-6 relative">

        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <div className="inline-block border border-[#39FF14] px-4 py-1.5 mb-6 text-[10px] tracking-[0.4em] uppercase opacity-70">
            Enterprise_Solutions.sys
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            SaaS <span className="text-[#39FF14]">Products</span>
          </h2>
          <p className="text-lg opacity-60 max-w-2xl mx-auto font-sans">
            Ready-to-deploy enterprise software designed to scale. High-performance architectures
            tailored for specific industry verticals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {SAAS_PROJECTS.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{
                duration: 0.35,
                delay: Math.min(index * 0.06, 0.3),
                ease: 'easeOut',
              }}
              className="group"
            >
              <div className="h-full bg-[#0A1221] border border-[#39FF14]/20 p-8 hover:border-[#39FF14] transition-colors duration-300 flex flex-col">

                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#39FF14]/10 rounded-sm flex items-center justify-center text-[#39FF14] border border-[#39FF14]/30">
                    <project.icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider">
                    {project.title}
                  </h3>
                </div>

                <p className="text-sm opacity-60 font-sans mb-6 leading-relaxed">
                  {project.description}
                </p>

                <ul className="space-y-3 mb-10 flex-grow">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-[10px] tracking-widest uppercase opacity-80"
                    >
                      <FaCheckCircle className="text-[#39FF14] mr-3 shrink-0" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-4">
                  <Link
                    href="#contact"
                    className="flex-1 px-6 py-4 bg-[#39FF14] text-black text-[10px] font-bold tracking-widest hover:bg-white transition-colors text-center"
                    aria-label={`Get a quote for ${project.title}`}
                  >
                    GET_QUOTE
                  </Link>
                  <Link
                    href="#contact"
                    className="flex-1 px-6 py-4 border border-[#39FF14]/30 text-white text-[10px] font-bold tracking-widest hover:bg-[#39FF14]/10 transition-colors text-center"
                    aria-label={`Request a demo of ${project.title}`}
                  >
                    DEMO.exe
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="relative overflow-hidden bg-[#0A1221] border border-[#39FF14]/30 p-12 text-center"
        >
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[#39FF14]/5 blur-[80px] pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10">
            <FaTerminal className="w-12 h-12 mx-auto mb-6 text-[#39FF14] opacity-50" aria-hidden="true" />
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 uppercase tracking-tighter">
              Need a Custom Architecture?
            </h3>
            <p className="text-lg opacity-60 mb-10 max-w-2xl mx-auto font-sans leading-relaxed">
              If your requirements fall outside these modules, I specialise in architecting bespoke
              digital ecosystems built to your exact specifications.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="#contact"
                className="px-6 py-3 sm:px-8 sm:py-4 md:px-12 md:py-6 bg-[#39FF14] text-black font-bold uppercase text-sm tracking-widest hover:bg-white transition-all shadow-[0_0_30px_rgba(57,255,20,0.1)] text-center"
              >
                REQUEST CUSTOM BUILD
              </Link>
              <Link
                href="#contact"
                className="px-6 py-3 sm:px-8 sm:py-4 md:px-12 md:py-6 border-2 border-[#39FF14] text-[#39FF14] font-bold uppercase text-sm tracking-widest hover:bg-[#39FF14]/10 transition-all text-center"
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
