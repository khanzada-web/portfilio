import { Reveal } from '../motion/Reveal';
import { SectionGlow } from '../ui/SectionGlow';
import { EditorialHeadline } from '../ui/EditorialHeadline';
import { TestimonialCarousel } from './TestimonialCarousel';

export function Testimonials() {
  return (
    <section id="testimonials" className="font-orbitron relative overflow-clip bg-ink px-[var(--page-pad)] py-28 text-white md:py-40">
      <SectionGlow />

      <div className="relative z-10">
        <EditorialHeadline
          index="06"
          eyebrow="Testimonials"
          aside="From founders and product leads"
          solid="Client"
          accent="Reviews"
        />

        <Reveal variant="scaleIn" className="mx-auto mt-16 max-w-5xl md:mt-24">
          <TestimonialCarousel />
        </Reveal>
      </div>
    </section>
  );
}
