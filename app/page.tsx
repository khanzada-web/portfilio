import type { Metadata } from "next";

import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";

import { Hero } from "./components/sections/Hero";
import About from "./components/sections/About";
import { Services } from "./components/sections/Services";
import { GlobalImpact } from "./components/sections/GlobalImpact";
import { TechArchitecture } from "./components/sections/TechArchitecture";
import { SaasProjects } from "./components/sections/SaasProjects";
import { Process } from "./components/sections/Process";
import Portfolio from "./components/sections/Portfolio";
import { PerformanceLab } from "./components/sections/PerformanceLab";
import { Testimonials } from "./components/sections/Testimonials";
import { FAQ } from "./components/sections/FAQ";
import { Contact } from "./components/sections/Contact";

import { FAQSchema } from "./components/seo/FAQSchema";

export const metadata: Metadata = {
  title: "Hire Next.js 16 Full-Stack & Web3 Developer | Mussawar Hayat",
  description:
    "Hire Mussawar Hayat — expert Next.js 16 full-stack developer and Web3 specialist. Production SaaS platforms, DApps, Solidity smart contracts, React Native mobile apps. Remote freelance for North America & Europe clients. 3+ years shipping production systems.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Hire Mussawar Hayat | Full-Stack & Web3 Developer",
    description:
      "Mussawar Hayat is a full-stack developer specializing in Next.js, React, TypeScript, Node.js and Web3. Available for remote freelance projects worldwide.",
    url: "https://mussawarhayat.site",
    type: "website",
    images: [
      {
        url: "/my-pic.jpeg",
        width: 1200,
        height: 630,
        alt: "Mussawar Hayat — Full-Stack & Web3 Developer portrait",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire Mussawar Hayat | Full-Stack & Web3 Developer",
    description:
      "Full-stack developer building web, mobile & Web3 apps with React, Next.js, Node.js & Solidity. Available for freelance projects.",
    images: ["/my-pic.jpeg"],
  },
};

const FAQ_ITEMS = [
  {
    question: "What technologies does Mussawar Hayat work with?",
    answer:
      "Mussawar Hayat specializes in React, Next.js, Node.js, and TypeScript for full-stack web development. For mobile apps he uses React Native and Flutter. For Web3 and blockchain projects he works with Solidity, Ethers.js, Hardhat, Ethereum, Polygon, and Bitcoin Ordinals. He also handles DevOps including Nginx, PM2, GitHub Actions, Docker, and VPS deployment.",
  },
  {
    question: "Does Mussawar Hayat work with international clients?",
    answer:
      "Yes. Mussawar Hayat works remotely with clients worldwide, including North America and Europe, and is set up for async communication across EST, PST, and CET time zones. GDPR-compliant infrastructure is available where needed.",
  },
  {
    question: "What is Mussawar Hayat's development process?",
    answer:
      "Projects start with logic discovery and requirements analysis, then architecture design, iterative implementation with TypeScript and modern frameworks, testing and security review, and production deployment with CI/CD, SSL, and monitoring. One engineer owns the work end-to-end from frontend to infrastructure.",
  },
  {
    question: "Do you build both the frontend and backend?",
    answer:
      "Yes. Mussawar Hayat handles full-stack development end-to-end — React/Next.js frontends, Node.js backends, databases, and deployment/DevOps — so clients do not need to coordinate multiple specialists.",
  },
  {
    question: "Can you add blockchain or Web3 features to an existing app?",
    answer:
      "Yes. He integrates wallet connections, smart contracts, DeFi and NFT functionality, and Bitcoin Ordinals into existing web and mobile applications using Solidity and Ethers.js.",
  },
  {
    question: "How can I hire Mussawar Hayat for a project?",
    answer:
      "Contact him through the contact form on https://mussawarhayat.site/contact, or via LinkedIn (https://www.linkedin.com/in/mussawar-hayat-187768233) or email (zada38843@gmail.com). Engagement models range from short-term consulting to full long-term project development.",
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
          <FAQ items={FAQ_ITEMS} />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}
