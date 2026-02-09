import { Metadata } from 'next'
import { Header } from '@/app/components/layout/Header'
import { Footer } from '@/app/components/layout/Footer'
import { BreadcrumbSchema } from '@/app/components/seo/BreadcrumbSchema'
import { ServiceSchema } from '@/app/components/seo/ServiceSchema'
import { FAQSchema } from '@/app/components/seo/FAQSchema'

export const metadata: Metadata = {
  title: 'Web3 Development Services | Expert Blockchain Developer | Mussawar Hayat',
  description: 'Professional Web3 development services including DApps, smart contracts, and blockchain solutions. 5+ years experience in React, Next.js, TypeScript, and Solidity. Available for freelance projects.',
  keywords: 'Web3 development, blockchain development, DApp development, smart contracts, Solidity developer, React Web3, Next.js Web3, TypeScript blockchain, decentralized applications, DeFi development, NFT development, Web3 freelancer, blockchain consultant, Ethereum developer, Web3 expert',
  openGraph: {
    title: 'Web3 Development Services | Expert Blockchain Developer',
    description: 'Professional Web3 development services including DApps, smart contracts, and blockchain solutions. 5+ years experience building decentralized applications.',
    url: 'https://www.mussawarhayat.site/web3-development',
    type: 'website',
    images: [
      {
        url: 'https://www.mussawarhayat.site/logo.png',
        width: 300,
        height: 110,
        alt: 'Web3 Development Services - Mussawar Hayat',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web3 Development Services | Expert Blockchain Developer',
    description: 'Professional Web3 development services including DApps, smart contracts, and blockchain solutions. 5+ years experience.',
    images: ['https://www.mussawarhayat.site/logo.png'],
  },
  alternates: {
    canonical: '/web3-development',
  },
}

const breadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/services' },
  { name: 'Web3 Development', url: '/web3-development' }
]

const faqs = [
  {
    question: 'What is Web3 development?',
    answer: 'Web3 development involves building decentralized applications (DApps) that run on blockchain networks. It includes smart contract development, blockchain integration, and creating user interfaces that interact with decentralized protocols.'
  },
  {
    question: 'What technologies do you use for Web3 development?',
    answer: 'I specialize in React, Next.js, TypeScript, Solidity, Web3.js/Ethers.js, Hardhat/Truffle, and various blockchain frameworks including Ethereum, Polygon, and other EVM-compatible chains.'
  },
  {
    question: 'How long does a Web3 project take?',
    answer: 'Project timelines vary based on complexity. Simple smart contracts can take 2-4 weeks, while full DApps typically range from 2-6 months. I provide detailed timelines during the initial consultation.'
  },
  {
    question: 'Do you provide ongoing support for Web3 projects?',
    answer: 'Yes, I offer ongoing maintenance, smart contract audits, updates, and technical support for all Web3 projects. This includes security monitoring and protocol upgrades.'
  }
]

const services = {
  name: 'Web3 Development Services Catalog',
  itemListElement: [
    {
      typeOfGood: 'Service',
      name: 'Smart Contract Development',
      description: 'Custom smart contracts for DeFi, NFTs, and blockchain applications'
    },
    {
      typeOfGood: 'Service',
      name: 'DApp Development',
      description: 'Full-stack decentralized applications with React and Web3 integration'
    },
    {
      typeOfGood: 'Service',
      name: 'Blockchain Integration',
      description: 'Integrate existing applications with blockchain networks and protocols'
    },
    {
      typeOfGood: 'Service',
      name: 'Web3 Consulting',
      description: 'Technical consulting and architecture design for Web3 projects'
    }
  ]
}

export default function Web3DevelopmentPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema 
        serviceName="Web3 Development Services"
        description="Expert Web3 development services including DApps, smart contracts, and blockchain solutions. 5+ years experience building decentralized applications with React, Next.js, TypeScript, and Solidity."
        provider="Mussawar Hayat"
        areaServed="Worldwide"
        hasOfferCatalog={services}
      />
      <FAQSchema faqs={faqs} />
      
      <div className="min-h-screen bg-white font-sans">
        <Header />
        <main role="main" id="main-content" className="pt-20">
          <div className="max-w-4xl mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Web3 Development Services
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8">
                Expert Web3 development services building the future of decentralized applications. 
                With 5+ years of experience in blockchain development, I create scalable, secure, 
                and innovative Web3 solutions.
              </p>

              <h2 className="text-3xl font-semibold text-gray-900 mt-12 mb-6">
                Web3 Development Services
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 my-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Smart Contract Development</h3>
                  <p>Custom smart contracts for DeFi protocols, NFT marketplaces, and blockchain applications using Solidity and Rust.</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">DApp Development</h3>
                  <p>Full-stack decentralized applications with React, Next.js, and Web3.js/Ethers.js integration.</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Blockchain Integration</h3>
                  <p>Integrate existing applications with Ethereum, Polygon, BSC, and other EVM-compatible chains.</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Web3 Consulting</h3>
                  <p>Technical architecture design, code audits, and strategic consulting for Web3 projects.</p>
                </div>
              </div>

              <h2 className="text-3xl font-semibold text-gray-900 mt-12 mb-6">
                Technologies & Expertise
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6 my-8">
                <div>
                  <h4 className="font-semibold mb-2">Frontend</h4>
                  <ul className="text-gray-600">
                    <li>React & Next.js</li>
                    <li>TypeScript</li>
                    <li>Web3.js & Ethers.js</li>
                    <li>Wagmi & RainbowKit</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Blockchain</h4>
                  <ul className="text-gray-600">
                    <li>Solidity & Rust</li>
                    <li>Hardhat & Foundry</li>
                    <li>Ethereum & EVM Chains</li>
                    <li>IPFS & Arweave</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Protocols</h4>
                  <ul className="text-gray-600">
                    <li>DeFi Protocols</li>
                    <li>NFT Standards (ERC-721/1155)</li>
                    <li>DAO Frameworks</li>
                    <li>Layer 2 Solutions</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-semibold text-gray-900 mt-12 mb-6">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-6">
                    <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
