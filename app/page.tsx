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

export const metadata: Metadata = {
  title: "Hire Mussawar Hayat | Full-Stack & Web3 Developer — React, Next.js, Solidity",

  description:
    "Hire a full-stack developer specialising in React, Next.js, TypeScript, Node.js and Web3. " +
    "3+ years building production SaaS, DApps, smart contracts and mobile apps. Available for freelance projects worldwide.",

  keywords: [
    "hire full-stack developer",
    "hire Next.js developer",
    "Web3 developer for hire",
    "freelance React developer",
    "Solidity developer",
    "hire blockchain developer",
    "Next.js freelancer",
    "full-stack developer Pakistan",
    "Mussawar Hayat",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Hire Mussawar Hayat | Full-Stack & Web3 Developer",
    description:
      "Full-stack developer specialising in React, Next.js, TypeScript, Node.js and Web3. " +
      "Available for freelance projects worldwide.",
    url: "https://www.mussawarhayat.site",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mussawar Hayat — Full-Stack & Web3 Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Hire Mussawar Hayat | Full-Stack & Web3 Developer",
    description:
      "Full-stack developer building web, mobile & Web3 apps with React, Next.js, Node.js & Solidity. Available for freelance projects.",
    images: ["/og-image.png"],
  },
};

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

export default function Home() {
  return (
    <>
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
