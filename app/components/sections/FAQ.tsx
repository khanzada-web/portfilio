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
      className="py-24 bg-[#060B16] text-white font-orbitron border-t border-[#39FF14]/10"
      aria-labelledby="faq-heading"
    >
      <div className="container mx-auto px-6 max-w-3xl">
        <p className="text-[10px] uppercase tracking-[0.4em] text-[#39FF14] mb-4 font-bold">FAQ</p>
        <h2 id="faq-heading" className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-white/60 font-sans text-base mb-12 max-w-2xl">
          Common questions about working with Mussawar Hayat as a full-stack and Web3 developer.
        </p>

        <div className="space-y-4">
          {items.map((item) => (
            <details
              key={item.question}
              className="group border border-[#39FF14]/20 bg-[#0A1221] open:border-[#39FF14]/40"
            >
              <summary className="cursor-pointer list-none px-6 py-5 flex items-start justify-between gap-4 text-left">
                <h3 className="text-sm md:text-base font-bold text-white tracking-wide pr-4">
                  {item.question}
                </h3>
                <span
                  className="text-[#39FF14] text-xl leading-none shrink-0 group-open:rotate-45 transition-transform"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <div className="px-6 pb-6 pt-0">
                <p className="text-white/75 font-sans text-sm leading-relaxed">{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
