import type { Metadata } from "next";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";

import About from "./components/sections/About";
import { Contact } from "./components/sections/Contact";
import { FAQ } from "./components/sections/FAQ";
import { Hero } from "./components/sections/Hero";
import Portfolio from "./components/sections/Portfolio";
import { Process } from "./components/sections/Process";
import { Services } from "./components/sections/Services";
import { Testimonials } from "./components/sections/Testimonials";
import { FAQSchema } from "./components/seo/FAQSchema";

export const metadata: Metadata = {
  title: "Hire Next.js 16 Full-Stack & Web3 Developer 2026 | Mussawar Hayat",
  description:
    "Hire Mussawar Hayat, Next.js 16 full-stack and Web3 developer for production SaaS, React TypeScript apps, Solidity DApps, Core Web Vitals optimization, and enterprise-grade websites. Available for remote projects worldwide.",
  keywords: [
    "hire Next.js 16 developer 2026",
    "Next.js developer for hire",
    "hire full-stack Web3 developer",
    "Next.js 16 App Router expert",
    "Solidity smart contract developer hire",
    "Next.js Core Web Vitals specialist",
    "freelance Next.js SaaS developer",
    "TypeScript full-stack developer 2026",
    "hire Web3 developer Pakistan",
    "remote Next.js developer",
    "Mussawar Hayat Next.js expert",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Hire Next.js 16 Full-Stack & Web3 Developer 2026 | Mussawar Hayat",
    description:
      "Mussawar Hayat is a full-stack developer specializing in Next.js 16, React Server Components, TypeScript, Node.js, and Web3. Available for high-performance remote freelance projects worldwide.",
    url: "https://mussawarhayat.site",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire Next.js 16 Full-Stack & Web3 Developer 2026 | Mussawar Hayat",
    description:
      "Next.js 16 full-stack & Web3 developer building production SaaS, DeFi, and high-performance apps. Hire Mussawar Hayat today.",
  },
};

const FAQ_ITEMS = [
  { question: "What technologies does Mussawar Hayat work with?", answer: "Mussawar Hayat specializes in React, Next.js, Node.js, and TypeScript for full-stack web development. For mobile apps he uses React Native and Flutter. For Web3 and blockchain projects he works with Solidity, Ethers.js, Hardhat, Ethereum, Polygon, and Bitcoin Ordinals. He also handles DevOps including Nginx, PM2, GitHub Actions, Docker, and VPS deployment." },
  { question: "Does Mussawar Hayat work with international clients?", answer: "Yes. Mussawar Hayat works remotely with clients worldwide, including North America and Europe, and is set up for async communication across EST, PST, and CET time zones. GDPR-compliant infrastructure is available where needed." },
  { question: "What is Mussawar Hayat's development process?", answer: "Projects start with logic discovery and requirements analysis, then architecture design, iterative implementation with TypeScript and modern frameworks, testing and security review, and production deployment with CI/CD, SSL, and monitoring. One engineer owns the work end-to-end from frontend to infrastructure." },
  { question: "Do you build both the frontend and backend?", answer: "Yes. Mussawar Hayat handles full-stack development end-to-end — React/Next.js frontends, Node.js backends, databases, and deployment/DevOps — so clients do not need to coordinate multiple specialists." },
  { question: "Can you add blockchain or Web3 features to an existing app?", answer: "Yes. He integrates wallet connections, smart contracts, DeFi and NFT functionality, and Bitcoin Ordinals into existing web and mobile applications using Solidity and Ethers.js." },
  { question: "How do pricing and engagement models work?", answer: "Typical options are fixed-price for clearly scoped projects, hourly for evolving or consulting work, and monthly retainers for continuous product development. Exact ranges depend on scope — share your project details and you will get a clear proposal. Response is usually within 24 hours." },
  { question: "How can I hire Mussawar Hayat for a project?", answer: "Contact him through the contact form on https://mussawarhayat.site/contact, or via LinkedIn (https://www.linkedin.com/in/mussawar-hayat-187768233) or email (reply@mussawarhayat.site). Engagement models range from short-term consulting to full long-term project development." },
  { question: "Can you build a production Next.js SaaS from scratch?", answer: "Yes. Typical SaaS work includes Next.js App Router, TypeScript, Prisma and PostgreSQL, authentication, Stripe billing, admin dashboards, and CI/CD to a VPS or managed host. One engineer owns frontend, API, data, and deployment." },
  { question: "Do you audit or harden existing Next.js and Web3 codebases?", answer: "Yes. Common reviews cover Server Actions auth, Prisma connection pooling, wallet connection flows, smart-contract integration safety, Core Web Vitals, and production Docker or Nginx deployments." },
] as const;

export default function Home() {
  return (
    <>
      <FAQSchema faqs={FAQ_ITEMS} />
      <div className="min-h-screen bg-ink font-sans">
        <Header />
        <main id="main-content" role="main">
          <Hero />
          <About />
          <Services />
          <Portfolio />
          <Process />
          <Testimonials />
          <FAQ items={FAQ_ITEMS} />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
