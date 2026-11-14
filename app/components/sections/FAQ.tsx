import { Stagger, StaggerItem } from '../motion/Stagger';
import { SectionGlow } from '../ui/SectionGlow';
import { EditorialHeadline } from '../ui/EditorialHeadline';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: readonly FAQItem[];
}

/**
 * Visible FAQ content required by Google for FAQ rich results.
 * Schema-only FAQs without matching on-page content are ignored / risk manual action.
 * @see https://developers.google.com/search/docs/appearance/structured-data/faqpage
 */
export function FAQ({ items }: FAQProps) {
  return (
    <section
      id="faq"
      className="font-orbitron relative overflow-clip border-t border-white/10 bg-ink px-[var(--page-pad)] py-28 text-white md:py-40"
      aria-labelledby="faq-heading"
    >
      <SectionGlow className="left-1/2 top-1/3 h-[500px] w-[600px] -translate-x-1/2" />

      <div className="relative z-10">
        <EditorialHeadline
          index="07"
          eyebrow="FAQ"
          id="faq-heading"
          solid="Frequently asked"
          accent="Questions"
        >
          <p>
            Common questions about working with Mussawar Hayat as a full-stack and Web3 developer.
          </p>
        </EditorialHeadline>

        {/* Numbered accordion on hairline rules */}
        <Stagger as="ol" step={0.06} className="mt-16 border-b border-white/10 md:mt-24 lg:ml-auto lg:max-w-4xl">
          {items.map((item, i) => (
            <StaggerItem as="li" key={item.question} className="border-t border-white/10">
              <details className="group">
                <summary className="grid cursor-pointer list-none grid-cols-[2.5rem_1fr_auto] items-center gap-4 py-6 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neon md:grid-cols-[3.5rem_1fr_auto] md:py-7">
                  <span className="font-mono text-xs text-white/55 transition-colors group-open:text-neon group-hover:text-neon">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-sm font-bold tracking-wide text-white md:text-lg">{item.question}</h3>
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 font-mono text-lg text-neon transition-[rotate,background-color,color,border-color] duration-300 group-open:rotate-45 group-open:border-neon group-open:bg-neon group-open:text-black"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <div className="pb-7 pl-[2.5rem] pr-12 md:pl-[3.5rem]">
                  <p className="animate-fade-up max-w-2xl font-sans text-sm leading-relaxed text-white/75 md:text-base">{item.answer}</p>
                </div>
              </details>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
