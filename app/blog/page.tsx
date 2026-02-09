import { Metadata } from 'next'
import { Header } from '@/app/components/layout/Header'
import { Footer } from '@/app/components/layout/Footer'
import { BreadcrumbSchema } from '@/app/components/seo/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'Web3 Development Blog | Blockchain Insights | Mussawar Hayat',
  description: 'Expert insights on Web3 development, blockchain technology, smart contracts, DeFi, and NFT development. Stay updated with the latest trends in decentralized applications.',
  keywords: 'Web3 blog, blockchain blog, smart contract tutorial, DeFi guide, NFT development, React Web3, Next.js blockchain, Solidity tips, Web3 development insights, blockchain technology trends, decentralized applications guide',
  openGraph: {
    title: 'Web3 Development Blog | Blockchain Insights',
    description: 'Expert insights on Web3 development, blockchain technology, smart contracts, and decentralized applications.',
    url: 'https://www.mussawarhayat.site/blog',
    type: 'website',
    images: [
      {
        url: 'https://www.mussawarhayat.site/logo.png',
        width: 300,
        height: 110,
        alt: 'Web3 Development Blog - Mussawar Hayat',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web3 Development Blog | Blockchain Insights',
    description: 'Expert insights on Web3 development, blockchain technology, smart contracts, and decentralized applications.',
    images: ['https://www.mussawarhayat.site/logo.png'],
  },
  alternates: {
    canonical: '/blog',
  },
}

const breadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'Blog', url: '/blog' }
]

const blogPosts = [
  {
    title: 'Building Scalable DeFi Protocols: Best Practices 2025',
    excerpt: 'Learn the latest best practices for building secure and scalable DeFi protocols in 2025, including security considerations and optimization techniques.',
    slug: 'building-scalable-defi-protocols-2025',
    date: '2025-01-08',
    readTime: '8 min read',
    category: 'DeFi Development'
  },
  {
    title: 'Smart Contract Security: Common Vulnerabilities and Solutions',
    excerpt: 'A comprehensive guide to identifying and preventing common smart contract vulnerabilities, including reentrancy attacks and overflow bugs.',
    slug: 'smart-contract-security-vulnerabilities',
    date: '2025-01-05',
    readTime: '12 min read',
    category: 'Security'
  },
  {
    title: 'Next.js 15 + Web3: Building Modern DApps',
    excerpt: 'How to leverage Next.js 15 features for building modern decentralized applications with improved performance and developer experience.',
    slug: 'nextjs-15-web3-modern-dapps',
    date: '2025-01-02',
    readTime: '6 min read',
    category: 'Web3 Development'
  },
  {
    title: 'NFT Marketplace Development: Complete Guide',
    excerpt: 'Step-by-step guide to building a full-featured NFT marketplace with smart contracts, frontend integration, and IPFS storage.',
    slug: 'nft-marketplace-development-guide',
    date: '2024-12-28',
    readTime: '15 min read',
    category: 'NFT Development'
  },
  {
    title: 'Layer 2 Solutions: Choosing the Right Scaling Solution',
    excerpt: 'Compare different Layer 2 solutions including Optimistic Rollups, ZK-Rollups, and sidechains to choose the best for your project.',
    slug: 'layer-2-solutions-comparison',
    date: '2024-12-25',
    readTime: '10 min read',
    category: 'Blockchain'
  },
  {
    title: 'Web3.js vs Ethers.js: Which Library to Choose in 2025',
    excerpt: 'Comprehensive comparison of Web3.js and Ethers.js libraries for blockchain interaction, including performance and feature analysis.',
    slug: 'web3js-vs-ethersjs-comparison',
    date: '2024-12-20',
    readTime: '7 min read',
    category: 'Tools & Libraries'
  }
]

export default function BlogPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      
      <div className="min-h-screen bg-white font-sans">
        <Header />
        <main role="main" id="main-content" className="pt-20">
          <div className="max-w-6xl mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Web3 Development Blog
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Expert insights, tutorials, and best practices for Web3 development, 
                blockchain technology, and decentralized applications.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                    </div>
                    
                    <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                      <a 
                        href={`/blog/${post.slug}`}
                        className="hover:text-blue-600 transition-colors"
                      >
                        {post.title}
                      </a>
                    </h2>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <time dateTime={post.date} className="text-sm text-gray-500">
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </time>
                      
                      <a 
                        href={`/blog/${post.slug}`}
                        className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center"
                      >
                        Read more
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-16 text-center">
              <div className="bg-gray-50 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Stay Updated with Web3 Trends
                </h2>
                <p className="text-gray-600 mb-6">
                  Get the latest insights on Web3 development, blockchain technology, and decentralized applications delivered to your inbox.
                </p>
                <a 
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Subscribe to Newsletter
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
