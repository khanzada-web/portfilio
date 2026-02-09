import { Metadata } from 'next'
import { Header } from '@/app/components/layout/Header'
import { Footer } from '@/app/components/layout/Footer'
import { BreadcrumbSchema } from '@/app/components/seo/BreadcrumbSchema'
import { FAQSchema } from '@/app/components/seo/FAQSchema'

export const metadata: Metadata = {
  title: 'Web3 Development Services | Blockchain Solutions | Mussawar Hayat',
  description: 'Complete Web3 development services including smart contracts, DApps, DeFi platforms, NFT marketplaces, and blockchain consulting. Expert in React, Next.js, TypeScript, and Solidity.',
  keywords: 'Web3 services, blockchain development services, smart contract development, DApp development, DeFi development, NFT development, blockchain consulting, Solidity developer, React blockchain developer, Next.js Web3, Web3 freelancer, blockchain solutions, Ethereum development, Web3 expert services',
  openGraph: {
    title: 'Web3 Development Services | Blockchain Solutions',
    description: 'Complete Web3 development services including smart contracts, DApps, DeFi platforms, and blockchain consulting.',
    url: 'https://www.mussawarhayat.site/services',
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
    title: 'Web3 Development Services | Blockchain Solutions',
    description: 'Complete Web3 development services including smart contracts, DApps, DeFi platforms, and blockchain consulting.',
    images: ['https://www.mussawarhayat.site/logo.png'],
  },
  alternates: {
    canonical: '/services',
  },
}

const breadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/services' }
]

const faqs = [
  {
    question: 'What Web3 services do you offer?',
    answer: 'I offer comprehensive Web3 services including smart contract development, DApp development, DeFi platform creation, NFT marketplace development, blockchain integration, and technical consulting.'
  },
  {
    question: 'How do you ensure the security of smart contracts?',
    answer: 'I follow industry best practices including comprehensive testing, code audits, using established patterns, implementing access controls, and working with professional audit firms for large-scale projects.'
  },
  {
    question: 'Can you help with existing Web3 projects?',
    answer: 'Yes, I provide services for existing projects including code audits, optimization, feature additions, security improvements, and migration to newer technologies or protocols.'
  },
  {
    question: 'What blockchain networks do you work with?',
    answer: 'I work with Ethereum, Polygon, Binance Smart Chain, Avalanche, Arbitrum, Optimism, and other EVM-compatible chains. I also have experience with non-EVM chains when required.'
  }
]

const services = [
  {
    title: 'Smart Contract Development',
    description: 'Custom smart contracts for DeFi protocols, NFTs, tokenomics, and blockchain applications',
    features: ['ERC-20/721/1155 Tokens', 'DeFi Protocols', 'Governance Contracts', 'Staking Systems'],
    link: '/smart-contracts'
  },
  {
    title: 'DApp Development',
    description: 'Full-stack decentralized applications with modern Web3 integration',
    features: ['React & Next.js Frontend', 'Web3 Wallet Integration', 'IPFS Storage', 'Multi-chain Support'],
    link: '/web3-development'
  },
  {
    title: 'DeFi Platform Development',
    description: 'Complete DeFi solutions including exchanges, lending protocols, and yield farming',
    features: ['DEX Development', 'Lending Protocols', 'Yield Farming', 'Liquidity Management'],
    link: '/defi-development'
  },
  {
    title: 'NFT Marketplace Development',
    description: 'Custom NFT marketplaces with advanced features and multi-chain support',
    features: ['NFT Minting', 'Marketplace Features', 'Royalty Systems', 'Multi-chain Support'],
    link: '/nft-development'
  },
  {
    title: 'Blockchain Integration',
    description: 'Integrate blockchain technology into existing applications and systems',
    features: ['API Integration', 'Wallet Connections', 'Smart Contract Interaction', 'Data Oracles'],
    link: '/blockchain-development'
  },
  {
    title: 'Web3 Consulting',
    description: 'Strategic consulting and technical architecture for Web3 projects',
    features: ['Project Planning', 'Technical Architecture', 'Security Audits', 'Team Training'],
    link: '/consulting'
  }
]

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faqs={faqs} />
      
      <div className="min-h-screen bg-white font-sans">
        <Header />
        <main role="main" id="main-content" className="pt-20">
          <div className="max-w-6xl mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Web3 Development Services
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Expert blockchain development services building the future of decentralized applications. 
                From smart contracts to full-scale DApps, I deliver secure, scalable, and innovative Web3 solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {services.map((service, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href={service.link} 
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Learn more
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 rounded-lg p-8 mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose My Web3 Services?</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Technical Excellence</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 5+ years of blockchain development experience</li>
                    <li>• Expert in React, Next.js, TypeScript, and Solidity</li>
                    <li>• Security-first development approach</li>
                    <li>• Clean, maintainable, and well-documented code</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Business Focus</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Understanding of DeFi and crypto economics</li>
                    <li>• Experience with successful token launches</li>
                    <li>• Knowledge of regulatory considerations</li>
                    <li>• Focus on user adoption and scalability</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Start Your Web3 Project?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Let's discuss how I can help bring your blockchain vision to life
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
