import type { Metadata } from "next";

// ── Layout ──────────────────────────────────────────────────────────────────
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";

// ── Sections ─────────────────────────────────────────────────────────────────
import { Hero }            from "./components/sections/Hero";
import About               from "./components/sections/About";
import { Services }        from "./components/sections/Services";
import { GlobalImpact }    from "./components/sections/GlobalImpact";
import { TechArchitecture } from "./components/sections/TechArchitecture";
import { SaasProjects }    from "./components/sections/SaasProjects";
import { Process }         from "./components/sections/Process";
import Portfolio           from "./components/sections/Portfolio";
import { PerformanceLab }  from "./components/sections/PerformanceLab";
import { Testimonials }    from "./components/sections/Testimonials";
import { Contact }         from "./components/sections/Contact";

// ── SEO ──────────────────────────────────────────────────────────────────────
import { FAQSchema } from "./components/seo/FAQSchema";

// ─── Page Metadata ────────────────────────────────────────────────────────────
// Note: base URL, robots, and themeColor are already set in layout.tsx.
// Only override what is page-specific here.

export const metadata: Metadata = {
  title: "Mussawar Hayat — Web3 & Blockchain Developer",

  description:
    "I build fast, secure Web3 apps — DApps, DeFi platforms, and smart contracts. " +
    "3+ years with React, Next.js, TypeScript & Solidity. Open to freelance work worldwide.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Mussawar Hayat — Web3 & Blockchain Developer",
    description:
      "Building DApps, DeFi platforms, and smart contracts with React, Next.js & Solidity. " +
      "3+ years experience. Available for freelance Web3 projects worldwide.",
    url: "https://www.mussawarhayat.site",
    type: "website",
    images: [
      {
        // ✅ 1200×630 is the required size for Twitter/LinkedIn/Facebook previews
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mussawar Hayat — Web3 Developer Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Mussawar Hayat — Web3 & Blockchain Developer",
    description:
      "Building DApps, DeFi platforms, and smart contracts with React, Next.js & Solidity. " +
      "3+ years experience. Open to freelance.",
    images: ["/og-image.png"],
  },
};

// ─── FAQ Data ─────────────────────────────────────────────────────────────────
// Extracted as a constant so FAQSchema receives typed, stable data

const FAQ_ITEMS = [
  {
    question: "What services do you offer as a Web3 developer?",
    answer:
      "I offer comprehensive Web3 development services including smart contract development, " +
      "DApp creation, DeFi platform development, NFT marketplace development, blockchain " +
      "integration, and technical consulting.",
  },
  {
    question: "What technologies do you specialise in?",
    answer:
      "I specialise in React, Next.js, TypeScript, Solidity, Web3.js/Ethers.js, " +
      "Hardhat/Truffle, and various blockchain frameworks including Ethereum, Polygon, " +
      "and other EVM-compatible chains.",
  },
  {
    question: "How can I hire you for a Web3 project?",
    answer:
      "You can contact me through the contact form on this website or reach out via " +
      "LinkedIn. I offer flexible engagement models from short-term consulting to " +
      "full long-term project development.",
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer:
      "Yes — I offer ongoing maintenance, smart contract audits, updates, and technical " +
      "support for all Web3 projects to keep them secure and up-to-date.",
  },
] as const;

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      {/* Structured data for FAQ rich results in Google Search */}
      <FAQSchema faqs={FAQ_ITEMS} />

      <div className="min-h-screen bg-white font-sans">
        <Header />

        <main id="main-content" role="main">
          <Hero />
          <About />
          <Services />
          <GlobalImpact />
          <TechArchitecture />
          <SaasProjects />
          <Process />
          <Portfolio />
          <PerformanceLab />
          <Testimonials />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}