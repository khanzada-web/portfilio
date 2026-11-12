import { FiTerminal } from 'react-icons/fi';
import { Stagger, StaggerItem } from '../motion/Stagger';
import { SectionGlow } from '../ui/SectionGlow';
import { SectionHeading } from '../ui/SectionHeading';

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
      className="font-orbitron relative overflow-hidden border-t border-white/10 bg-ink py-28 text-white"
      aria-labelledby="faq-heading"
    >
      <SectionGlow className="left-1/2 top-1/3 h-[500px] w-[600px] -translate-x-1/2" />

      <div className="container relative z-10 mx-auto max-w-3xl px-6">
        <SectionHeading
          id="faq-heading"
          align="responsive"
          eyebrow="FAQ.sys"
          icon={<FiTerminal aria-hidden="true" />}
          title={[{ text: 'Frequently Asked Questions' }]}
          description="Common questions about working with Mussawar Hayat as a full-stack and Web3 developer."
        />

        <Stagger step={0.06} className="space-y-4">
          {items.map((item) => (
            <StaggerItem key={item.question}>
              <details className="card group overflow-hidden open:border-neon/40">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-white/[0.02] focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-neon">
                  <h3 className="pr-4 text-sm font-bold tracking-wide text-white md:text-base">{item.question}</h3>
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-neon/20 bg-neon/10 font-mono text-lg text-neon transition-transform duration-300 group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <div className="border-t border-white/10 bg-black/20 px-6 pb-6 pt-2">
                  <p className="animate-fade-up font-sans text-sm leading-relaxed text-white/80 md:text-base">{item.answer}</p>
                </div>
              </details>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
