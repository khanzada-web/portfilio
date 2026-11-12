import { FiGlobe, FiDatabase, FiCpu, FiLock, FiActivity } from 'react-icons/fi';
import { CountUp } from '../motion/CountUp';
import { LoopWhenVisible } from '../motion/LoopWhenVisible';
import { Reveal } from '../motion/Reveal';
import { Stagger, StaggerItem } from '../motion/Stagger';
import { SectionGlow } from '../ui/SectionGlow';
import { SectionHeading } from '../ui/SectionHeading';

const STATS = [
  { value: 40, suffix: '+', label: 'Projects Deployed' },
  { value: 15, suffix: '+', label: 'Global Clients' },
] as const;

const NODES = [
  { icon: <FiLock />, label: 'Security', pos: 'top-0 left-1/2 -translate-x-1/2' },
  { icon: <FiCpu />, label: 'Compute', pos: 'bottom-8 right-2' },
  { icon: <FiGlobe />, label: 'Network', pos: 'bottom-8 left-2' },
] as const;

const TERMINAL_ROWS = [
  { label: 'System', value: 'OPERATIONAL' },
  { label: 'Uptime', value: '99.98%' },
  { label: 'Node_ID', value: 'PK_782X' },
  { label: 'Traffic', value: 'AES_256' },
] as const;

export function GlobalImpact() {
  return (
    <section id="global-impact" className="font-orbitron relative overflow-hidden bg-ink py-28 text-white">
      <SectionGlow className="left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2" />

      <div className="container relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="space-y-8">
            <SectionHeading
              className=""
              eyebrow="Global Infrastructure"
              icon={<FiActivity aria-hidden="true" />}
              title={[{ text: 'Scale Without' }, { text: 'Boundaries.', accent: true, breakBefore: true }]}
              description="From decentralized protocols to enterprise SaaS platforms, production systems are engineered and deployed across global edge networks—delivering ultra-low latency, high availability, and reliable performance worldwide."
            />

            <Stagger as="dl" className="grid grid-cols-2 gap-6 pt-4">
              {STATS.map(({ value, suffix, label }) => (
                <StaggerItem key={label} spotlight className="card spotlight group flex flex-col-reverse p-5">
                  <dt className="font-sans text-[11px] font-medium uppercase tracking-wider text-white/65">{label}</dt>
                  <dd className="mb-1 font-mono text-3xl font-extrabold text-white transition-colors group-hover:text-neon">
                    <CountUp to={value} />
                    {suffix}
                  </dd>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          {/* Orbit visual: slow CSS rotation (paused off-screen), nodes pop in, status panel slides in */}
          <div className="relative flex items-center justify-center py-6">
            <div className="relative flex aspect-square w-full max-w-[420px] items-center justify-center">
              <LoopWhenVisible className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-72 w-72 animate-orbit items-center justify-center rounded-full border border-white/10">
                  <div className="h-52 w-52 animate-orbit-reverse rounded-full border border-dashed border-neon/20" />
                </div>
              </LoopWhenVisible>

              <Reveal variant="scaleIn" className="absolute flex items-center justify-center rounded-2xl border border-neon/40 bg-panel/80 p-6 shadow-[0_0_35px_rgba(57,255,20,0.15)]">
                <FiDatabase className="text-3xl text-neon" aria-hidden="true" />
              </Reveal>

              <Stagger step={0.14} className="absolute inset-0">
                {NODES.map((node) => (
                  <StaggerItem key={node.label} variant="scaleIn" className={`group absolute ${node.pos} z-10 flex flex-col items-center gap-2`}>
                    <div className="flex h-13 w-13 items-center justify-center rounded-xl border border-white/15 bg-panel/90 p-3.5 text-neon shadow-lg transition-[border-color,box-shadow] duration-300 group-hover:border-neon group-hover:shadow-[0_0_25px_rgba(57,255,20,0.25)]">
                      <div className="text-xl transition-transform duration-300 group-hover:scale-110" aria-hidden="true">
                        {node.icon}
                      </div>
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/65 transition-colors group-hover:text-neon">
                      {node.label}
                    </span>
                  </StaggerItem>
                ))}
              </Stagger>

              <Reveal
                as="aside"
                variant="slideFromRight"
                delay={0.3}
                className="absolute -right-2 -top-2 z-20 min-w-[200px] space-y-2 rounded-xl border border-white/15 bg-black/80 p-4 font-mono text-xs shadow-2xl md:right-2 md:top-2"
              >
                <span className="sr-only">System status</span>
                {TERMINAL_ROWS.map(({ label, value }, i) => (
                  <div key={label} className={`flex items-center justify-between gap-6 ${i > 0 ? 'border-t border-white/10 pt-2' : ''}`}>
                    <span className="flex items-center gap-2">
                      {i === 0 && <span className="h-2 w-2 rounded-full bg-neon shadow-[0_0_8px_#39FF14]" aria-hidden="true" />}
                      <span className="text-[10px] uppercase text-white/65">{label}</span>
                    </span>
                    <span className={`text-[11px] font-bold ${i === 0 ? 'text-neon' : 'text-white/90'}`}>{value}</span>
                  </div>
                ))}
              </Reveal>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden="true" />
    </section>
  );
}
