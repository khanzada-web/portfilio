import { FiZap, FiSearch, FiLayout, FiActivity, FiTerminal } from 'react-icons/fi';
import { CountUp } from '../motion/CountUp';
import { Reveal } from '../motion/Reveal';
import { Stagger, StaggerItem } from '../motion/Stagger';
import { SectionGlow } from '../ui/SectionGlow';
import { SectionHeading } from '../ui/SectionHeading';
import { ScoreRing } from './ScoreRing';

const METRICS = [
  { label: 'Performance', value: 100, icon: <FiZap /> },
  { label: 'Accessibility', value: 100, icon: <FiLayout /> },
  { label: 'Best Practices', value: 100, icon: <FiActivity /> },
  { label: 'SEO Score', value: 100, icon: <FiSearch /> },
] as const;

const BADGES = ['Server-Side Rendering (SSR) Active', 'Edge-Network Optimized', 'Lighthouse Certified'] as const;

export function PerformanceLab() {
  return (
    <section id="performance" className="font-orbitron relative overflow-hidden bg-ink py-28 text-white">
      <SectionGlow />

      <div className="container relative z-10 mx-auto max-w-5xl px-6">
        <SectionHeading
          align="responsive"
          eyebrow="Performance_Lab"
          icon={<FiTerminal aria-hidden="true" />}
          title={[{ text: 'Engineered for' }, { text: 'Velocity.', accent: true }]}
          description="Beyond clean code, I optimize for core web vitals. Builds ensure lightning-fast load times, seamless user accessibility, and absolute search engine dominance."
        />

        {/* Gauges draw their arc while the score counts up */}
        <Stagger step={0.12} className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {METRICS.map((metric) => (
            <StaggerItem
              key={metric.label}
              variant="scaleIn"
              spotlight
              className="card spotlight group flex flex-col items-center justify-between p-6 text-center hover:-translate-y-1"
            >
              <div
                className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-white/60 transition-colors group-hover:border-neon/30 group-hover:text-neon"
                aria-hidden="true"
              >
                {metric.icon}
              </div>

              <div
                className="relative mb-4 inline-flex items-center justify-center"
                role="meter"
                aria-label={metric.label}
                aria-valuenow={metric.value}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <ScoreRing value={metric.value} />
                <CountUp to={metric.value} className="absolute font-mono text-xl font-bold text-white" />
              </div>

              <div className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-neon">{metric.label}</div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal variant="fadeIn" className="mt-16 flex flex-wrap items-center justify-center gap-6 border-t border-white/10 pt-8">
          {BADGES.map((item, idx) => (
            <span key={item} className="flex items-center gap-6 font-mono text-[10px] uppercase tracking-widest text-white/65">
              {item}
              {idx < BADGES.length - 1 && <span className="h-1.5 w-1.5 rounded-full bg-neon shadow-[0_0_6px_#39FF14]" aria-hidden="true" />}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
