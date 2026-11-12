import Link from 'next/link';
import type { ReactElement } from 'react';
import {
  FiMonitor, FiSmartphone, FiActivity, FiShield,
  FiZap, FiLayers, FiServer, FiTerminal, FiShoppingCart, FiArrowRight,
} from 'react-icons/fi';
import { Magnetic } from '../motion/Magnetic';
import { Reveal } from '../motion/Reveal';
import { Stagger, StaggerItem } from '../motion/Stagger';
import { SectionGlow } from '../ui/SectionGlow';
import { SectionHeading } from '../ui/SectionHeading';

interface Service {
  id: string;
  icon: ReactElement;
  title: string;
  description: string;
  tags: readonly string[];
  category: string;
}

const SERVICES: Service[] = [
  {
    id: '01',
    icon: <FiMonitor />,
    title: 'Web Architecture',
    description:
      'High-performance Next.js and React applications optimized for speed, SEO, and global scalability. SSR, ISR, and edge-network ready.',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
    category: 'Frontend',
  },
  {
    id: '02',
    icon: <FiSmartphone />,
    title: 'Mobile Solutions',
    description:
      'Cross-platform mobile applications for iOS and Android with seamless native performance using React Native and Flutter.',
    tags: ['React Native', 'Flutter', 'iOS', 'Android'],
    category: 'Apps',
  },
  {
    id: '03',
    icon: <FiLayers />,
    title: 'Full-Stack Systems',
    description:
      'End-to-end product engineering — robust backend infrastructure, real-time data pipelines, and tightly integrated frontend layers.',
    tags: ['Node.js', 'TypeScript', 'GraphQL', 'PostgreSQL'],
    category: 'Architecture',
  },
  {
    id: '04',
    icon: <FiActivity />,
    title: 'UI/UX Engineering',
    description:
      'Immersive digital interfaces built with precision — focused on user psychology, conversion flow, and animation-driven experiences.',
    tags: ['Figma', 'Framer Motion', 'UI/UX', 'Design Systems'],
    category: 'Design',
  },
  {
    id: '05',
    icon: <FiShield />,
    title: 'Web3 & Blockchain',
    description:
      'Smart contract development, DApp architecture, and Web3 wallet integration — from ERC-20 tokens to multi-chain DeFi protocols.',
    tags: ['Solidity', 'Ethers.js', 'Hardhat', 'IPFS'],
    category: 'Web3',
  },
  {
    id: '06',
    icon: <FiZap />,
    title: 'Performance Ops',
    description:
      'Deep optimisation of existing products — Core Web Vitals, bundle splitting, caching strategies, and Lighthouse 100 audits.',
    tags: ['Lighthouse', 'Web Vitals', 'CDN', 'Caching'],
    category: 'Optimisation',
  },
  {
    id: '07',
    icon: <FiServer />,
    title: 'Backend & API Dev',
    description:
      'Scalable REST and GraphQL APIs with Node.js, Express, and PostgreSQL — including JWT auth, session handling, and protected route architecture.',
    tags: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    category: 'Backend',
  },
  {
    id: '08',
    icon: <FiTerminal />,
    title: 'DevOps & Infrastructure',
    description:
      'Multi-site VPS management, CI/CD pipelines via GitHub Actions, SSL via Certbot, and full email infrastructure with SPF, DKIM, and DMARC.',
    tags: ['Nginx', 'PM2', 'GitHub Actions', 'Docker'],
    category: 'DevOps',
  },
  {
    id: '09',
    icon: <FiShoppingCart />,
    title: 'E-Commerce & SaaS',
    description:
      'Production-grade e-commerce platforms and SaaS dashboards — product catalogues, payment gateways, subscription logic, and admin panels.',
    tags: ['Next.js', 'Stripe', 'Tailwind', 'SaaS'],
    category: 'Commerce',
  },
] as const;

export function Services() {
  return (
    <section id="services" className="font-orbitron relative overflow-hidden bg-ink py-28 text-white">
      <SectionGlow className="bottom-1/3 right-1/4 h-[400px] w-[600px]" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Capabilities & Expertise"
          icon={<FiTerminal aria-hidden="true" />}
          title={[{ text: 'Full-Stack Engineering Services' }]}
          description="From initial product architecture to cloud deployments and smart contracts, I deliver scalable, production-grade applications engineered for performance, security, and growth."
        />

        {/* Cards rise in sequence; hover lifts the card and follows the cursor with a glow */}
        <Stagger className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <StaggerItem
              as="article"
              key={service.id}
              spotlight
              className="card spotlight group flex min-h-[400px] flex-col justify-between p-8 hover:-translate-y-1"
            >
              <div>
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-neon shadow-[0_0_6px_#39FF14]" aria-hidden="true" />
                    <span className="font-mono text-xs font-bold text-neon">{service.id}</span>
                  </div>
                  <span className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
                    {service.category}
                  </span>
                </div>

                <div
                  className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-neon/20 bg-neon/10 text-2xl text-neon shadow-md transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110"
                  aria-hidden="true"
                >
                  {service.icon}
                </div>

                <h3 className="mb-3 text-xl font-bold uppercase tracking-wide text-white">{service.title}</h3>
                <p className="mb-6 font-sans text-sm leading-relaxed text-white/75">{service.description}</p>
              </div>

              <div>
                <ul className="mb-6 flex flex-wrap gap-1.5" aria-label="Technologies">
                  {service.tags.map((tag) => (
                    <li key={tag} className="tag font-mono">{tag}</li>
                  ))}
                </ul>

                <div className="border-t border-white/10 pt-4">
                  <Link
                    href="#contact"
                    aria-label={`Enquire about ${service.title}`}
                    className="group/link inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-neon transition-colors hover:text-white"
                  >
                    <span className="link-underline">Inquire Project</span>
                    <FiArrowRight className="transition-transform duration-300 group-hover/link:translate-x-1" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="text-center">
          <Magnetic>
            <Link href="/services" className="btn-neon px-10 py-4 text-sm">
              <span>Explore Custom Requirements</span>
              <FiArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  );
}
