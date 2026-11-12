import Link from 'next/link';
import { FiArrowRight, FiTerminal } from 'react-icons/fi';
import { Magnetic } from '../motion/Magnetic';
import { Reveal } from '../motion/Reveal';
import { SectionGlow } from '../ui/SectionGlow';
import { SectionHeading } from '../ui/SectionHeading';
import { ProcessTimeline } from './ProcessTimeline';

export function Process() {
  return (
    <section id="process" className="font-orbitron relative overflow-hidden bg-ink py-28 text-white">
      <SectionGlow className="bottom-1/4 left-1/3 h-[500px] w-[600px]" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        <SectionHeading
          align="center"
          eyebrow="Execution_Protocol.v2"
          icon={<FiTerminal aria-hidden="true" />}
          title={[{ text: 'Development' }, { text: 'Pipeline', accent: true }]}
          description="A systematic engineering approach to transforming complex business logic into high-performance digital products."
        />

        <ProcessTimeline />

        <Reveal className="mt-20 text-center">
          <Magnetic>
            <Link href="#contact" className="btn-neon px-10 py-4 text-sm">
              <span>Initiate Project_Build</span>
              <FiArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  );
}
