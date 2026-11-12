import type { ReactElement } from 'react';
import { FiCpu, FiLayers, FiShield, FiGlobe, FiServer, FiTerminal } from 'react-icons/fi';
import { Stagger, StaggerItem } from '../motion/Stagger';
import { SectionGlow } from '../ui/SectionGlow';
import { SectionHeading } from '../ui/SectionHeading';

interface Layer {
  title: string;
  icon: ReactElement;
  tech: readonly string[];
  description: string;
}

const LAYERS: Layer[] = [
  {
    title: 'Frontend Layer',
    icon: <FiGlobe />,
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    description:
      'Building high-performance, responsive interfaces with a focus on seamless Web3 user experience, SSR/ISR optimization, and speed.',
  },
  {
    title: 'Logic & API Layer',
    icon: <FiCpu />,
    tech: ['Node.js', 'Express', 'GraphQL', 'PostgreSQL', 'MongoDB'],
    description:
      'Robust server-side logic, REST & GraphQL APIs, secure JWT auth, and scalable database architectures designed for longevity.',
  },
  {
    title: 'Blockchain Layer',
    icon: <FiLayers />,
    tech: ['Solidity', 'Ethers.js', 'Hardhat', 'IPFS', 'Web3.js'],
    description:
      'Smart contract development, EVM protocols, and decentralized storage integration for trustless, transparent applications.',
  },
  {
    title: 'Security & QA',
    icon: <FiShield />,
    tech: ['Slither', 'Mythril', 'OpenZeppelin', 'JWT', 'SSL/TLS'],
    description:
      'Rigorous testing and auditing of smart contracts and APIs to ensure zero-vulnerability deployments and enterprise compliance.',
  },
  {
    title: 'DevOps Layer',
    icon: <FiServer />,
    tech: ['Nginx', 'PM2', 'GitHub Actions', 'Certbot', 'Docker', 'VPS'],
    description:
      'Production-grade CI/CD pipelines, multi-site VPS management, custom email infrastructure (SPF, DKIM, DMARC), and automated deployment workflows.',
  },
];

export function TechArchitecture() {
  return (
    <section id="architecture" className="font-orbitron relative overflow-hidden bg-ink py-28 text-white">
      <SectionGlow className="right-1/3 top-1/3 h-[500px] w-[600px]" />

      <div className="container relative z-10 mx-auto max-w-6xl px-6">
        <SectionHeading
          align="responsive"
          eyebrow="System Architecture"
          icon={<FiTerminal aria-hidden="true" />}
          title={[{ text: 'Full-Stack Development Workflow' }]}
          description="Integrated engineering layers—from frontend interfaces and server APIs through to blockchain protocols and production DevOps infrastructure."
        />

        {/* Layers slide in from alternating sides, like a stack being assembled */}
        <Stagger step={0.1} className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {LAYERS.map((layer, index) => (
            <StaggerItem
              key={layer.title}
              spotlight
              variant={index % 2 === 0 ? 'slideFromLeft' : 'slideFromRight'}
              className={`card spotlight group relative flex flex-col justify-between p-8 ${index === LAYERS.length - 1 ? 'md:col-span-2' : ''}`}
            >
              <div>
                <div className="mb-6 flex items-center justify-between">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-lg border border-neon/20 bg-neon/10 text-2xl text-neon transition-transform duration-300 group-hover:scale-110"
                    aria-hidden="true"
                  >
                    {layer.icon}
                  </div>
                  <div className="text-right" aria-hidden="true">
                    <span className="block text-[9px] font-semibold uppercase tracking-[0.2em] text-white/60">LAYER</span>
                    <span className="font-mono text-sm font-bold text-neon">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                </div>

                <h3 className="mb-3 text-xl font-bold tracking-wide text-white">{layer.title}</h3>
                <p className="mb-6 font-sans text-sm leading-relaxed text-white/75">{layer.description}</p>
              </div>

              <div>
                <div className="mb-6">
                  <p className="mb-2 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">Tech Stack</p>
                  <ul className="flex flex-wrap gap-1.5" aria-label={`${layer.title} Technologies`}>
                    {layer.tech.map((item) => (
                      <li key={item} className="tag font-sans">{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between border-t border-white/10 pt-4 font-mono" aria-hidden="true">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-neon shadow-[0_0_8px_#39FF14]" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-neon/80">Stable.Build</span>
                  </div>
                  <span className="text-[10px] uppercase text-white/50">Checksum_Verified</span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
