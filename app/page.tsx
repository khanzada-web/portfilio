import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import About from './components/sections/About';
import Portfolio from './components/sections/Portfolio';
import { Services } from './components/sections/Services';
import { SaasProjects } from './components/sections/SaasProjects';
import { Process } from './components/sections/Process';
import { Testimonials } from './components/sections/Testimonials';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';
import { TechArchitecture } from './components/sections/TechArchitecture';
import { PerformanceLab } from './components/sections/PerformanceLab';
import { GlobalImpact } from './components/sections/GlobalImpact';
import { Metadata } from 'next';
import { FAQSchema } from './components/seo/FAQSchema';

export const metadata: Metadata = {
  title: 'Mussawar Hayat - Expert Web3 Developer | Blockchain & React Specialist',
  description: 'Professional Web3 Developer with 5+ years experience building decentralized applications. Expert in React, Next.js, TypeScript, Solidity, and smart contracts. Available for Web3 projects.',
  keywords: 'Web3 developer, blockchain developer, React developer, Next.js developer, TypeScript, Solidity, smart contracts, DApp development, decentralized applications, DeFi development, NFT development, cryptocurrency, full stack developer, Mussawar Hayat, freelance Web3 developer, blockchain engineer, Ethereum developer, Web3 expert',
  openGraph: {
    title: 'Mussawar Hayat - Expert Web3 Developer | Blockchain & React Specialist',
    description: 'Professional Web3 Developer with 5+ years experience building decentralized applications. Expert in React, Next.js, TypeScript, Solidity, and smart contracts.',
    url: 'https://www.mussawarhayat.site',
    type: 'website',
    images: [
      {
        url: 'https://www.mussawarhayat.site/logo.png',
        width: 300,
        height: 110,
        alt: 'Mussawar Hayat - Web3 Developer Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mussawar Hayat - Web3 Developer | Blockchain Expert',
    description: 'Expert Web3 Developer building decentralized applications with React, Next.js, TypeScript, and Solidity. 5+ years experience in blockchain development.',
    images: ['https://www.mussawarhayat.site/logo.png'],
  },
};

// Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Mussawar Hayat",
  "jobTitle": "Web3 Developer",
  "description": "Expert Web3 Developer with 5+ years experience building decentralized applications, smart contracts, and blockchain solutions.",
  "url": "https://www.mussawarhayat.site",
  "image": "https://www.mussawarhayat.site/my-pic.jpeg",
  "sameAs": [],
  "knowsAbout": [
    "Web3 Development",
    "Blockchain",
    "React",
    "Next.js",
    "TypeScript",
    "Solidity",
    "Smart Contracts",
    "DeFi",
    "NFT Development"
  ],
  "offers": {
    "@type": "Service",
    "serviceType": "Web3 Development Services",
    "description": "Full-stack Web3 development including smart contracts, DApps, and blockchain solutions"
  }
};

const faqs = [
  {
    question: 'What services do you offer as a Web3 developer?',
    answer: 'I offer comprehensive Web3 development services including smart contract development, DApp creation, DeFi platform development, NFT marketplace development, blockchain integration, and technical consulting.'
  },
  {
    question: 'What technologies do you specialize in?',
    answer: 'I specialize in React, Next.js, TypeScript, Solidity, Web3.js/Ethers.js, Hardhat/Truffle, and various blockchain frameworks including Ethereum, Polygon, and other EVM-compatible chains.'
  },
  {
    question: 'How can I hire you for a Web3 project?',
    answer: 'You can contact me through the contact form on this website or email me directly. I offer flexible engagement models from short-term consulting to long-term project development.'
  },
  {
    question: 'Do you provide ongoing support after project completion?',
    answer: 'Yes, I offer ongoing maintenance, smart contract audits, updates, and technical support for all Web3 projects to ensure they remain secure and up-to-date.'
  }
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <FAQSchema faqs={faqs} />
      <div className="min-h-screen bg-white font-sans">
        <Header />
        <main role="main" id="main-content">
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
