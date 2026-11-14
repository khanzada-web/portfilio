import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import { Magnetic } from '../motion/Magnetic';
import { Reveal } from '../motion/Reveal';
import { SectionGlow } from '../ui/SectionGlow';
import { EditorialHeadline } from '../ui/EditorialHeadline';
import { ProcessTimeline } from './ProcessTimeline';

export function Process() {
  return (
    <section id="process" className="font-orbitron relative overflow-clip bg-ink px-[var(--page-pad)] py-28 text-white md:py-40">
      <SectionGlow className="bottom-1/4 left-1/3 h-[500px] w-[600px]" />

      <div className="relative z-10">
        <EditorialHeadline
          index="05"
          eyebrow="Process"
          aside="6 steps · idea to production"
          solid="Development"
          accent="Pipeline"
        >
          <p>
            A systematic engineering approach to transforming complex business logic into high-performance digital products.
          </p>
        </EditorialHeadline>

        <div className="mt-16 md:mt-24">
          <ProcessTimeline />
        </div>

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
