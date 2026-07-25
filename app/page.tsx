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
  title: "Mussawar Hayat | Full-Stack Developer — React, Next.js, Node.js & Web3",

  description:
    "Full-stack developer with 3+ years building high-performance web & mobile apps using " +
    "React, Next.js, Node.js & TypeScript — plus Web3/blockchain integration (Solidity, DeFi, NFTs). " +
    "Available for freelance work worldwide.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Mussawar Hayat | Full-Stack Developer",
    description:
      "Building fast, scalable web & mobile apps with React, Next.js, Node.js & TypeScript. " +
      "Blockchain/Web3 integration available. 3+ years experience, open for freelance work worldwide.",
    url: "https://www.mussawarhayat.site",
    type: "website",
    images: [
      {
        // ✅ 1200×630 is the required size for Twitter/LinkedIn/Facebook previews
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mussawar Hayat — Full-Stack Developer Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Mussawar Hayat | Full-Stack Developer",
    description:
      "Full-stack developer building web, mobile & Web3 apps with React, Next.js, Node.js & Solidity. " +
      "Available for freelance projects worldwide.",
    images: ["/og-image.png"],
  },
};

// ─── FAQ Data ─────────────────────────────────────────────────────────────────
// Extracted as a constant so FAQSchema receives typed, stable data

const FAQ_ITEMS = [
  {
    question: "Do you build both the frontend and backend?",
    answer:
      "Yes. I handle full-stack development end-to-end — React/Next.js frontends, Node.js backends, " +
      "databases, and deployment/DevOps — so you don't need to coordinate multiple specialists.",
  },
  {
    question: "Do you work with clients outside Pakistan?",
    answer:
      "Yes, I work remotely with clients worldwide and am set up for async communication across time zones.",
  },
  {
    question: "Can you add blockchain or Web3 features to an existing app?",
    answer:
      "Yes. I integrate wallet connections, smart contracts, and DeFi/NFT functionality into existing " +
      "web and mobile applications using Solidity and Ethers.js.",
  },
  {
    question: "What technologies do you specialise in?",
    answer:
      "My core stack is React, Next.js, Node.js, and TypeScript. For mobile, I use React Native and Flutter. " +
      "For Web3 projects, I work with Solidity, Ethers.js, Hardhat, Ethereum, Polygon, and other EVM-compatible chains. " +
      "I also handle DevOps, databases, and deployment.",
  },
  {
    question: "How can I hire you for a project?",
    answer:
      "You can contact me through the contact form on this website or reach out via " +
      "LinkedIn. I offer flexible engagement models from short-term consulting to " +
      "full long-term project development.",
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