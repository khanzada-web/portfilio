import { FiTerminal } from 'react-icons/fi';
import { Reveal } from '../motion/Reveal';
import { SectionGlow } from '../ui/SectionGlow';
import { SectionHeading } from '../ui/SectionHeading';
import { TestimonialCarousel } from './TestimonialCarousel';

export function Testimonials() {
  return (
    <section id="testimonials" className="font-orbitron relative overflow-hidden bg-ink py-28 text-white">
      <SectionGlow />

      <div className="container relative z-10 mx-auto max-w-5xl px-6">
        <SectionHeading
          align="center"
          eyebrow="Social_Proof_Protocol"
          icon={<FiTerminal aria-hidden="true" />}
          title={[{ text: 'Client' }, { text: 'Reviews', accent: true }]}
          titleClassName="uppercase"
        />

        <Reveal variant="scaleIn">
          <TestimonialCarousel />
        </Reveal>
      </div>
    </section>
  );
}
