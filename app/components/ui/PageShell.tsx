import type { ReactNode } from 'react';
import { Footer } from '../layout/Footer';
import { Header } from '../layout/Header';
import { SectionGlow } from './SectionGlow';

/**
 * Shared skeleton for inner pages: header, ink background with the site's soft glow, a main
 * area padded with --page-pad (so edges line up with the header and home sections), footer.
 */
export function PageShell({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className="font-orbitron relative min-h-screen overflow-clip bg-ink text-white">
      <SectionGlow className="left-0 top-0 h-[560px] w-[860px]" />
      <Header />
      <main id="main-content" role="main" className={`relative z-10 px-[var(--page-pad)] pb-28 pt-32 md:pb-36 md:pt-40 ${className}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
