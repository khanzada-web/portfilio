import Link from 'next/link';
import type { ComponentType } from 'react';
import {
  FiShoppingCart, FiKey, FiHeart, FiPackage,
  FiBookOpen, FiTruck, FiCheckCircle, FiTerminal,
} from 'react-icons/fi';
import { Magnetic } from '../motion/Magnetic';
import { Reveal } from '../motion/Reveal';
import { Stagger, StaggerItem } from '../motion/Stagger';
import { SectionGlow } from '../ui/SectionGlow';
import { SectionHeading } from '../ui/SectionHeading';

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
    icon: FiShoppingCart,
    features: ['Real-time Analytics', 'Inventory Logic', 'Multi-store Sync'],
  },
  {
    id: 'hospitality', title: 'Hospitality Core',
    description: 'Automated booking and operations engine for premium hotel management.',
    icon: FiKey,
    features: ['Channel Manager', 'Revenue Logic', 'Guest Portal'],
  },
  {
    id: 'healthcare', title: 'Health Systems',
    description: 'Compliant pharmacy and clinic management with integrated EHR.',
    icon: FiHeart,
    features: ['Patient Records', 'Insurance Bridge', 'Auto-Inventory'],
  },
  {
    id: 'logistics', title: 'Logistics Fleet',
    description: 'Global supply chain tracking and fleet optimisation infrastructure.',
    icon: FiTruck,
    features: ['Route Optimisation', 'Live Tracking', 'Vendor API'],
  },
  {
    id: 'education', title: 'Academic LMS',
    description: 'Comprehensive learning management systems for institutions and schools.',
    icon: FiBookOpen,
    features: ['Fee Management', 'Parent Portal', 'Online Exams'],
  },
  {
    id: 'inventory', title: 'Smart Inventory',
    description: 'Warehouse automation with barcode scanning and supply forecasting.',
    icon: FiPackage,
    features: ['QR Integration', 'Stock Alerts', 'Forecasting'],
  },
] as const;

export function SaasProjects() {
  return (
    <section id="products" className="font-orbitron relative overflow-hidden bg-ink py-28 text-white">
      <SectionGlow className="left-1/2 top-1/4 h-[400px] w-[700px] -translate-x-1/2" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <SectionHeading
          align="center"
          eyebrow="Enterprise_Solutions.sys"
          title={[{ text: 'SaaS' }, { text: 'Products', accent: true }]}
          description="Ready-to-deploy enterprise software designed to scale. High-performance architectures tailored for specific industry verticals."
        />

        {/* Product modules scale up into place */}
        <Stagger className="mb-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SAAS_PROJECTS.map((project) => (
            <StaggerItem as="article" key={project.id} variant="scaleIn" spotlight className="card spotlight group flex h-full flex-col p-8 hover:-translate-y-1">
              <div className="mb-5 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-neon/20 bg-neon/10 text-neon transition-transform duration-300 group-hover:scale-110">
                  <project.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-base font-bold uppercase tracking-wider text-white">{project.title}</h3>
              </div>

              <p className="mb-6 flex-grow font-sans text-sm leading-relaxed text-white/75">{project.description}</p>

              <ul className="mb-8 space-y-2.5 border-t border-white/10 pt-5">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-center text-[10px] font-medium uppercase tracking-widest text-white/80">
                    <FiCheckCircle className="mr-3 shrink-0 text-neon" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <Link href="#contact" className="btn-neon px-4 py-3 text-[10px]" aria-label={`Get a quote for ${project.title}`}>
                  GET_QUOTE
                </Link>
                <Link href="#contact" className="btn-ghost px-4 py-3 text-[10px]" aria-label={`Request a demo of ${project.title}`}>
                  DEMO.exe
                </Link>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Custom build banner wipes up from its bottom edge */}
        <Reveal variant="clipUp" className="card relative overflow-hidden p-10 text-center shadow-2xl md:p-14">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(closest-side,rgb(57_255_20/0.06),transparent)]" aria-hidden="true" />

          <div className="relative z-10">
            <FiTerminal className="mx-auto mb-5 h-10 w-10 text-neon" aria-hidden="true" />
            <h3 className="mb-3 text-2xl font-bold uppercase tracking-tight text-white md:text-3xl">Need a Custom Architecture?</h3>
            <p className="mx-auto mb-8 max-w-xl font-sans text-sm leading-relaxed text-white/75 md:text-base">
              If your requirements fall outside these modules, I specialise in architecting bespoke digital ecosystems built to your
              exact specifications.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Magnetic className="justify-center">
                <Link href="#contact" className="btn-neon w-full px-8 py-4 text-xs sm:w-auto">
                  REQUEST CUSTOM BUILD
                </Link>
              </Magnetic>
              <Link href="#contact" className="btn-ghost px-8 py-4 text-xs">
                CONSULTATION_MODULE
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
