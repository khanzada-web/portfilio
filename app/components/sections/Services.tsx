import Link from 'next/link';
import {
  FiMonitor, FiSmartphone, FiActivity, FiShield,
  FiZap, FiLayers, FiServer, FiTerminal, FiShoppingCart, FiArrowUpRight,
} from 'react-icons/fi';
import { Magnetic } from '../motion/Magnetic';
import { Reveal } from '../motion/Reveal';
import { EditorialHeadline } from '../ui/EditorialHeadline';
import { SectionGlow } from '../ui/SectionGlow';
import { ServiceGrid, type ServiceItem } from './ServiceGrid';

const SERVICES: ServiceItem[] = [
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
];

/**
 * Services in the editorial system: shared headline with the intro, a hairline 3×3 grid
 * (titles decode on hover, corner brackets lock on), then the closing CTA.
 */
export function Services() {
  return (
    <section id="services" className="font-orbitron relative overflow-clip bg-ink px-[var(--page-pad)] py-28 text-white md:py-40">
      <SectionGlow className="right-0 top-1/3 h-[520px] w-[760px]" />

      <div className="relative z-10">
        <EditorialHeadline
          index="03"
          eyebrow="Services"
          aside="9 disciplines · one engineer"
          solid="Full-Stack"
          accent="Engineering Services"
        >
          <p>
            From initial product architecture to cloud deployments and smart contracts, I deliver scalable, production-grade
            applications engineered for performance, security, and growth.
          </p>
        </EditorialHeadline>

        <div className="mt-16 md:mt-24">
          <ServiceGrid items={SERVICES} />
        </div>

        <Reveal className="mt-20 flex flex-col items-start justify-between gap-8 border-t border-white/10 pt-10 md:flex-row md:items-center">
          <p className="max-w-md font-sans text-base leading-relaxed text-white/70">
            Need something outside this list? Most projects mix several of these.
          </p>
          <Magnetic>
            <Link href="/services" className="btn-neon group/cta h-14 gap-3 rounded-full pl-7 pr-2 text-sm normal-case tracking-wide">
              Explore custom requirements
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-neon transition-transform duration-300 group-hover/cta:rotate-45">
                <FiArrowUpRight className="h-5 w-5" aria-hidden="true" />
              </span>
            </Link>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  );
}
