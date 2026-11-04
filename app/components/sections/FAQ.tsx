'use client';

import { FiTerminal } from 'react-icons/fi';

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
      className="py-28 bg-[#030712] text-white font-orbitron relative overflow-hidden border-t border-white/10"
      aria-labelledby="faq-heading"
    >
      {/* Subtle Ambient Glow */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-[#39FF14]/10 blur-[160px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 max-w-3xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 border border-[#39FF14]/40 bg-[#39FF14]/5 px-3.5 py-1.5 rounded-md text-xs tracking-[0.25em] text-[#39FF14] uppercase">
            <FiTerminal className="animate-pulse" aria-hidden="true" />
            <span>FAQ.sys</span>
          </div>

          <h2 id="faq-heading" className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>

          <p className="text-white/70 font-sans text-sm md:text-base max-w-2xl leading-relaxed">
            Common questions about working with Mussawar Hayat as a full-stack and Web3 developer.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {items.map((item) => (
            <details
              key={item.question}
              className="group bg-[#0B132B]/60 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden open:border-[#39FF14]/40 transition-all duration-300 shadow-xl"
            >
              <summary className="cursor-pointer list-none px-6 py-5 flex items-center justify-between gap-4 text-left hover:bg-white/[0.02] transition-colors">
                <h3 className="text-sm md:text-base font-bold text-white tracking-wide pr-4">
                  {item.question}
                </h3>
                <span
                  className="w-8 h-8 rounded-lg bg-[#39FF14]/10 border border-[#39FF14]/20 text-[#39FF14] flex items-center justify-center text-lg shrink-0 group-open:rotate-45 transition-transform duration-300 font-mono"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <div className="px-6 pb-6 pt-2 border-t border-white/10 bg-black/20">
                <p className="text-white/75 font-sans text-sm md:text-base leading-relaxed">{item.answer}</p>
              </div>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
}