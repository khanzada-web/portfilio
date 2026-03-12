import { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { Header } from '@/app/components/layout/Header'
import { Footer } from '@/app/components/layout/Footer'
import { BreadcrumbSchema } from '@/app/components/seo/BreadcrumbSchema'
import { ArticleSchema } from '@/app/components/seo/ArticleSchema'
import { notFound } from 'next/navigation'

// ─── Types ────────────────────────────────────────────────────────────────────

interface BlogPost {
  title: string
  excerpt: string
  content: string
  date: string
  lastModified?: string
  readTime: string
  wordCount?: number
  category: string
  author: string
  authorUrl?: string
  keywords: string[]
  featuredImage?: string
  tableOfContents?: { id: string; label: string; level: number }[]
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const SITE_URL = 'https://www.mussawarhayat.site'
const AUTHOR_NAME = 'Mussawar Hayat'
const AUTHOR_URL = `${SITE_URL}/about`
const DEFAULT_OG_IMAGE = `${SITE_URL}/_next/static/media/logo.2deab1c7.png`

const blogPosts: Record<string, BlogPost> = {
  'ai-agents-blockchain-web3-2026': {
    title: 'AI Agents on Blockchain: The Biggest Web3 Trend of 2026',
    excerpt:
      "Autonomous AI agents are executing smart contracts, managing DeFi portfolios, and governing DAOs without human input. Here's what every Web3 developer needs to know right now.",
    content: `
      <div class="intro-section" id="intro">
        <h2>AI Agents Are Taking Over Web3</h2>
        <p class="lead-paragraph">The next phase of blockchain adoption isn't just about users transacting—it's about autonomous AI agents executing complex financial strategies, managing decentralized portfolios, and even governing DAOs. In 2026, AI agents are becoming first-class citizens in Web3 ecosystems, capable of sophisticated decision-making without human intervention.</p>

        <div class="key-highlights">
          <h4>🚀 Why AI Agents Matter in 2026:</h4>
          <ul>
            <li><strong>Autonomous Execution</strong> - AI agents can execute trades, manage portfolios, and govern protocols 24/7</li>
            <li><strong>Complex Strategy</strong> - Machine learning algorithms can implement sophisticated DeFi strategies humans can't execute manually</li>
            <li><strong>Scalable Intelligence</strong> - One AI agent can manage thousands of positions simultaneously</li>
            <li><strong>Trust-Minimized</strong> - On-chain verification ensures AI actions are transparent and auditable</li>
          </ul>
        </div>
      </div>

      <div class="technical-section" id="technical">
        <h2>🛠️ Building AI Agents for Blockchain</h2>
        <p>The technical stack for AI agents in Web3 combines machine learning frameworks with blockchain infrastructure. The key challenge is creating agents that can operate trustlessly while making complex financial decisions.</p>
        <div class="checklist-box">
          <h4>✅ AI Agent Architecture Components:</h4>
          <ul>
            <li><strong>Perception Layer</strong> - On-chain data feeds and market information</li>
            <li><strong>Reasoning Engine</strong> - ML models for strategy optimization</li>
            <li><strong>Execution Layer</strong> - Smart contract interactions and transaction signing</li>
            <li><strong>Feedback Loop</strong> - Performance monitoring and continuous learning</li>
          </ul>
        </div>
      </div>

      <div class="onpage-section" id="defi">
        <h3>💰 DeFi Portfolio Management</h3>
        <p>AI agents excel at portfolio management because they can process vast amounts of market data, identify arbitrage opportunities, and execute complex strategies like delta-neutral hedging or statistical arbitrage across multiple protocols.</p>
        <blockquote>
          "The best AI agents don't just copy human traders—they implement strategies that are mathematically optimal and impossible for humans to execute at scale."
        </blockquote>
      </div>

      <div class="content-strategy-section" id="governance">
        <h2>🎯 Governance and DAO Operations</h2>
        <p>AI agents are increasingly participating in DAO governance, analyzing proposals, voting on treasury allocations, and even drafting improvement proposals based on protocol performance data.</p>
        <div class="strategy-grid">
          <h4>🎯 AI Governance Applications:</h4>
          <ul>
            <li><strong>Proposal Analysis</strong> - ML models assess proposal impact and feasibility</li>
            <li><strong>Voting Optimization</strong> - Strategic voting based on correlated outcomes</li>
            <li><strong>Treasury Management</strong> - Automated yield optimization and risk management</li>
            <li><strong>Protocol Monitoring</strong> - Continuous health checks and anomaly detection</li>
          </ul>
        </div>
      </div>

      <div class="local-seo-section" id="security">
        <h3>🔒 Security and Trust in AI Agents</h3>
        <p>The biggest challenge with AI agents is ensuring they operate trustlessly. On-chain verification, multi-signature requirements, and circuit breakers are essential for safe AI deployment.</p>
        <div class="canadian-focus">
          <h4>🛡️ Trust-Minimized AI Design:</h4>
          <ul>
            <li>Zero-knowledge proofs for strategy verification</li>
            <li>On-chain limits and circuit breakers</li>
            <li>Multi-signature execution requirements</li>
            <li>Transparent model training data and algorithms</li>
          </ul>
        </div>
      </div>

      <div class="linkbuilding-section" id="future">
        <h2>🚀 The Future of AI in Web3</h2>
        <p>By 2026, AI agents will be managing billions in TVL across DeFi protocols, participating in complex governance decisions, and executing strategies that blend traditional finance with decentralized systems.</p>
        <div class="link-building-tactics">
          <h4>🌟 Emerging AI Agent Capabilities:</h4>
          <ul>
            <li><strong>Cross-Protocol Arbitrage</strong> - Simultaneous execution across multiple DEXs</li>
            <li><strong>Dynamic Liquidity Provision</strong> - ML-optimized LP strategies</li>
            <li><strong>Risk Management</strong> - Portfolio rebalancing and hedging algorithms</li>
            <li><strong>Yield Farming Optimization</strong> - Complex multi-protocol yield strategies</li>
          </ul>
        </div>
      </div>

      <div class="conclusion-section" id="getting-started">
        <h2>🎯 Getting Started with AI Agents</h2>
        <p>Start by building simple AI agents that can monitor on-chain data and execute basic strategies. Focus on transparency, security, and provable correctness from day one.</p>
        <div class="final-takeaway">
          <h4>💡 Key Takeaway:</h4>
          <p><em>AI agents represent the next evolution of Web3—not just tools for humans, but autonomous participants in decentralized systems. The developers who master AI agent design will define the future of decentralized finance and governance.</em></p>
        </div>
        <hr>
        <div class="cta-section" id="cta">
          <h4>🚀 Building AI Agents for Web3?</h4>
          <p>I specialize in developing autonomous AI agents for blockchain applications — from DeFi portfolio managers to DAO governance systems. Let's build the future of Web3 intelligence together.</p>
        </div>
      </div>
    `,
    date: '2026-03-10',
    lastModified: '2026-03-10',
    readTime: '11 min read',
    wordCount: 2200,
    category: 'Web3 & AI',
    author: AUTHOR_NAME,
    authorUrl: AUTHOR_URL,
    keywords: ['AI agents blockchain', 'Web3 AI', 'autonomous agents', 'DeFi AI', 'DAO governance AI', 'blockchain automation'],
    tableOfContents: [
      { id: 'intro', label: 'AI Agents Are Taking Over Web3', level: 2 },
      { id: 'technical', label: 'Building AI Agents for Blockchain', level: 2 },
      { id: 'defi', label: 'DeFi Portfolio Management', level: 3 },
      { id: 'governance', label: 'Governance and DAO Operations', level: 2 },
      { id: 'security', label: 'Security and Trust', level: 3 },
      { id: 'future', label: 'The Future of AI in Web3', level: 2 },
      { id: 'getting-started', label: 'Getting Started', level: 2 },
    ],
  },
  'account-abstraction-smart-wallets-guide': {
    title: 'Account Abstraction in 2026: The End of Seed Phrases',
    excerpt:
      "ERC-4337 and smart wallets are killing the biggest UX barrier in Web3. Here's a complete developer guide to building with Account Abstraction today.",
    content: `
      <div class="intro-section" id="intro">
        <h2>Account Abstraction: The UX Revolution Web3 Needed</h2>
        <p class="lead-paragraph">Seed phrases, gas estimation, transaction failures—these UX nightmares are finally being solved. Account Abstraction (ERC-4337) enables smart contract wallets that can pay their own gas fees, batch transactions, and provide seamless user experiences comparable to Web2 applications.</p>
        <div class="key-highlights">
          <h4>🚀 Why Account Abstraction Matters:</h4>
          <ul>
            <li><strong>Gasless Transactions</strong> - Users never worry about gas fees or network congestion</li>
            <li><strong>Batch Operations</strong> - Multiple actions in a single transaction</li>
            <li><strong>Recovery Options</strong> - Social recovery instead of seed phrases</li>
            <li><strong>Smart Features</strong> - Session keys, spending limits, and programmable wallets</li>
          </ul>
        </div>
      </div>
      <div class="technical-section" id="technical">
        <h2>🛠️ ERC-4337 Architecture Deep Dive</h2>
        <p>ERC-4337 introduces a new account model where user operations are processed through a global mempool and executed by bundlers, separating transaction validation from execution.</p>
        <div class="checklist-box">
          <h4>✅ ERC-4337 Components:</h4>
          <ul>
            <li><strong>UserOperations</strong> - Pseudo-transaction objects with signature validation</li>
            <li><strong>EntryPoint Contract</strong> - Global entry point for all account operations</li>
            <li><strong>Paymasters</strong> - Third-party gas payment and sponsorship</li>
            <li><strong>Bundlers</strong> - Off-chain actors that package UserOperations</li>
          </ul>
        </div>
      </div>
      <div class="onpage-section" id="paymasters">
        <h3>💰 Gas Abstraction and Paymasters</h3>
        <p>Paymasters enable sponsors to pay gas fees for users, creating gasless experiences. This is crucial for onboarding mainstream users who shouldn't need to manage native tokens for network fees.</p>
        <blockquote>"Gas abstraction isn't just about removing friction—it's about creating new economic models where protocols and dApps can compete on user experience rather than technical complexity."</blockquote>
      </div>
      <div class="content-strategy-section" id="smart-wallets">
        <h2>🎯 Building Smart Wallets</h2>
        <p>Modern smart wallets support features like session keys for dApps, spending limits for security, and programmable transaction logic that enables entirely new user experiences.</p>
        <div class="strategy-grid">
          <h4>🎯 Smart Wallet Features:</h4>
          <ul>
            <li><strong>Session Keys</strong> - Limited permission keys for specific dApps</li>
            <li><strong>Spending Limits</strong> - Daily/weekly limits for enhanced security</li>
            <li><strong>Social Recovery</strong> - Guardians help recover lost accounts</li>
            <li><strong>Multi-Signature</strong> - Require multiple approvals for high-value actions</li>
          </ul>
        </div>
      </div>
      <div class="local-seo-section" id="security">
        <h3>🔒 Security Considerations</h3>
        <p>While Account Abstraction improves UX, it also introduces new security considerations. Proper validation, rate limiting, and fraud prevention are essential for production deployments.</p>
        <div class="canadian-focus">
          <h4>🛡️ Security Best Practices:</h4>
          <ul>
            <li>Implement proper signature validation</li>
            <li>Use rate limiting to prevent abuse</li>
            <li>Include circuit breakers for emergencies</li>
            <li>Regular security audits and monitoring</li>
          </ul>
        </div>
      </div>
      <div class="conclusion-section" id="getting-started">
        <h2>🎯 Implementing Account Abstraction</h2>
        <p>Start with existing Account Abstraction infrastructure like Pimlico or Alchemy's bundler services. Focus on user experience improvements while maintaining security best practices.</p>
        <div class="final-takeaway">
          <h4>💡 Key Takeaway:</h4>
          <p><em>Account Abstraction isn't just a technical improvement—it's the foundation for mass Web3 adoption. The wallets and dApps that embrace this technology will lead the next wave of blockchain applications.</em></p>
        </div>
        <hr>
        <div class="cta-section" id="cta">
          <h4>🚀 Building Account Abstraction Solutions?</h4>
          <p>I develop smart wallets and Account Abstraction implementations — from ERC-4337 integrations to custom paymaster systems. Let's build the next generation of Web3 wallets.</p>
        </div>
      </div>
    `,
    date: '2026-03-05',
    lastModified: '2026-03-05',
    readTime: '10 min read',
    wordCount: 1900,
    category: 'Web3 Development',
    author: AUTHOR_NAME,
    authorUrl: AUTHOR_URL,
    keywords: ['account abstraction', 'ERC-4337', 'smart wallets', 'gasless transactions', 'Web3 UX', 'blockchain wallets'],
    tableOfContents: [
      { id: 'intro', label: 'The UX Revolution Web3 Needed', level: 2 },
      { id: 'technical', label: 'ERC-4337 Architecture Deep Dive', level: 2 },
      { id: 'paymasters', label: 'Gas Abstraction and Paymasters', level: 3 },
      { id: 'smart-wallets', label: 'Building Smart Wallets', level: 2 },
      { id: 'security', label: 'Security Considerations', level: 3 },
      { id: 'getting-started', label: 'Getting Started', level: 2 },
    ],
  },
  'real-world-asset-tokenization-rwa-guide': {
    title: 'RWA Tokenization: How Blockchain Is Eating Real-World Finance',
    excerpt:
      "Real-world asset tokenization crossed $24 billion in 2025 and is accelerating fast. Here's the full developer and investor breakdown of the biggest infrastructure shift in Web3.",
    content: `
      <div class="intro-section" id="intro">
        <h2>RWA Tokenization: The $900T Opportunity</h2>
        <p class="lead-paragraph">Real-world asset tokenization isn't just a trend—it's a fundamental restructuring of global finance. With over $24 billion tokenized in 2025 and projections for $900 trillion by 2030, RWAs represent the largest blockchain opportunity since Bitcoin.</p>
        <div class="key-highlights">
          <h4>🚀 Why RWA Tokenization Matters:</h4>
          <ul>
            <li><strong>$900T Addressable Market</strong> - Largest financial market in the world</li>
            <li><strong>Fractional Ownership</strong> - Democratize access to high-value assets</li>
            <li><strong>24/7 Liquidity</strong> - Global markets that never sleep</li>
            <li><strong>Regulatory Compliance</strong> - KYC/AML compliant by design</li>
          </ul>
        </div>
      </div>
      <div class="technical-section" id="technical">
        <h2>🛠️ RWA Tokenization Architecture</h2>
        <p>Successful RWA tokenization requires a robust technical stack combining traditional finance infrastructure with blockchain. ERC-3643 provides the regulatory compliance layer needed for institutional adoption.</p>
        <div class="checklist-box">
          <h4>✅ RWA Technical Stack:</h4>
          <ul>
            <li><strong>ERC-3643 Standard</strong> - Security token standard with compliance features</li>
            <li><strong>Chainlink Proof of Reserve</strong> - Real-time asset backing verification</li>
            <li><strong>On-Chain Governance</strong> - Tokenized voting rights and management</li>
            <li><strong>Legal Wrappers</strong> - SPVs and legal structures for asset ownership</li>
          </ul>
        </div>
      </div>
      <div class="onpage-section" id="market-segments">
        <h3>💰 RWA Market Segments</h3>
        <p>The RWA market spans multiple asset classes, each with different technical requirements and regulatory considerations. Real estate, private credit, and commodities are leading the charge.</p>
        <blockquote>"The beauty of RWA tokenization isn't just about creating new markets—it's about making existing markets more efficient, transparent, and accessible."</blockquote>
      </div>
      <div class="content-strategy-section" id="platforms">
        <h2>🎯 Building RWA Platforms</h2>
        <p>RWA platforms need to balance regulatory compliance with user experience. The key is creating infrastructure that institutions trust while providing retail investors with intuitive interfaces.</p>
        <div class="strategy-grid">
          <h4>🎯 RWA Platform Requirements:</h4>
          <ul>
            <li><strong>KYC/AML Integration</strong> - Institutional-grade compliance systems</li>
            <li><strong>Asset Custody</strong> - Secure, insured asset storage solutions</li>
            <li><strong>Secondary Markets</strong> - Liquid trading platforms for tokenized assets</li>
            <li><strong>Yield Distribution</strong> - Automated dividend and interest payments</li>
          </ul>
        </div>
      </div>
      <div class="conclusion-section" id="getting-started">
        <h2>🎯 Getting Started with RWA Tokenization</h2>
        <p>Begin by understanding the regulatory landscape in your jurisdiction. Focus on building compliant infrastructure that can scale to institutional volumes.</p>
        <div class="final-takeaway">
          <h4>💡 Key Takeaway:</h4>
          <p><em>RWA tokenization represents the convergence of traditional finance and blockchain technology. The developers and platforms that get this right will capture the largest market opportunity in Web3 history.</em></p>
        </div>
        <hr>
        <div class="cta-section" id="cta">
          <h4>🚀 Building RWA Tokenization Solutions?</h4>
          <p>I develop RWA tokenization platforms and infrastructure — from ERC-3643 implementations to institutional-grade custody systems.</p>
        </div>
      </div>
    `,
    date: '2026-02-28',
    lastModified: '2026-02-28',
    readTime: '12 min read',
    wordCount: 2400,
    category: 'Blockchain & DeFi',
    author: AUTHOR_NAME,
    authorUrl: AUTHOR_URL,
    keywords: ['RWA tokenization', 'real world assets', 'blockchain finance', 'ERC-3643', 'security tokens', 'tokenized assets'],
    tableOfContents: [
      { id: 'intro', label: 'The $900T Opportunity', level: 2 },
      { id: 'technical', label: 'RWA Tokenization Architecture', level: 2 },
      { id: 'market-segments', label: 'RWA Market Segments', level: 3 },
      { id: 'platforms', label: 'Building RWA Platforms', level: 2 },
      { id: 'getting-started', label: 'Getting Started', level: 2 },
    ],
  },
  'how-to-improve-seo-rankings-2024': {
    title: 'How to Improve SEO Rankings: Complete Guide 2024',
    excerpt: "Learn proven strategies to boost your website's search engine rankings and drive more organic traffic for Canadian businesses.",
    content: `
      <div class="intro-section" id="intro">
        <h2>Understanding SEO Rankings in 2024</h2>
        <p class="lead-paragraph">Search engine optimization has evolved significantly, with Google emphasizing user experience, mobile-friendliness, and high-quality content. For Canadian businesses, local SEO plays a crucial role in dominating regional search results.</p>
        <div class="key-highlights">
          <h4>🎯 Key Focus Areas for 2024:</h4>
          <ul>
            <li><strong>User Experience Signals</strong> - Core Web Vitals and page speed</li>
            <li><strong>Mobile-First Indexing</strong> - Responsive design is non-negotiable</li>
            <li><strong>Content Quality</strong> - E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)</li>
            <li><strong>Local SEO Dominance</strong> - Geographic targeting for Canadian markets</li>
          </ul>
        </div>
      </div>
      <div class="technical-section" id="technical">
        <h2>🛠️ Technical SEO Fundamentals</h2>
        <p>Start with the basics: ensure your site is mobile-responsive, loads quickly, and has proper schema markup. Core Web Vitals are now ranking factors that directly impact your position in search results.</p>
        <div class="checklist-box">
          <h4>✅ Technical SEO Checklist:</h4>
          <ul>
            <li>Page load speed under 3 seconds</li>
            <li>Mobile-responsive design</li>
            <li>SSL certificate (HTTPS)</li>
            <li>XML sitemap submission</li>
            <li>Schema markup implementation</li>
            <li>Core Web Vitals optimization</li>
          </ul>
        </div>
      </div>
      <div class="onpage-section" id="on-page">
        <h3>📝 On-Page Optimization</h3>
        <p>Optimize your title tags, meta descriptions, and heading structure. Use target keywords naturally in your content while maintaining readability.</p>
        <blockquote>"The best SEO strategy is to create content that users actually want to read and share. Focus on value, not just keywords."</blockquote>
      </div>
      <div class="content-strategy-section" id="content-strategy">
        <h2>📈 Content Strategy for Higher Rankings</h2>
        <p>Create comprehensive, authoritative content that answers user queries. Focus on long-tail keywords and semantic SEO to capture more search traffic.</p>
        <div class="strategy-grid">
          <h4>🎯 Content Pillars to Focus On:</h4>
          <ul>
            <li><strong>Long-form content</strong> (2,000+ words) for comprehensive coverage</li>
            <li><strong>Video content</strong> for increased engagement</li>
            <li><strong>Interactive elements</strong> like calculators and tools</li>
            <li><strong>Case studies</strong> and real-world examples</li>
          </ul>
        </div>
      </div>
      <div class="local-seo-section" id="local-seo">
        <h3>🍁 Local SEO for Canadian Businesses</h3>
        <p>Leverage Google My Business, local citations, and geo-targeted keywords to dominate local search results across Canadian cities.</p>
        <div class="canadian-focus">
          <h4>🇨🇦 Canadian-Specific Strategies:</h4>
          <ul>
            <li>Optimize for "near me" searches in major cities (Toronto, Vancouver, Montreal)</li>
            <li>Create location-specific landing pages</li>
            <li>Build local citations in Canadian directories</li>
            <li>Use Canadian spelling and terminology</li>
          </ul>
        </div>
      </div>
      <div class="linkbuilding-section" id="link-building">
        <h2>🔗 Link Building and Off-Page SEO</h2>
        <p>Build high-quality backlinks through content marketing, partnerships, and outreach. Focus on authoritative domains and natural link acquisition.</p>
        <div class="link-building-tactics">
          <h4>🎯 Effective Link Building Strategies:</h4>
          <ul>
            <li><strong>Content Marketing</strong> - Create link-worthy resources and infographics</li>
            <li><strong>Guest Posting</strong> - Contribute valuable content to authoritative sites</li>
            <li><strong>Broken Link Building</strong> - Find and replace broken links with your content</li>
            <li><strong>Local Partnerships</strong> - Collaborate with local businesses</li>
          </ul>
        </div>
      </div>
      <div class="conclusion-section" id="action-plan">
        <h2>🎯 Your Complete SEO Action Plan</h2>
        <p>SEO success requires consistent effort and continuous optimization. Track your progress, adapt to algorithm changes, and focus on delivering exceptional user experiences.</p>
        <div class="final-takeaway">
          <h4>💡 Key Takeaway:</h4>
          <p><em>SEO is a long-term investment that compounds over time. Start with a solid technical foundation, create exceptional content, and consistently build authoritative backlinks.</em></p>
        </div>
        <hr>
        <div class="cta-section" id="cta">
          <h4>🚀 Need Help with Your SEO Strategy?</h4>
          <p>Get expert SEO consulting and implementation services for your Canadian business.</p>
        </div>
      </div>
    `,
    date: '2024-12-01',
    lastModified: '2024-12-01',
    readTime: '11 min read',
    wordCount: 2100,
    category: 'SEO',
    author: AUTHOR_NAME,
    authorUrl: AUTHOR_URL,
    keywords: ['SEO rankings', 'search engine optimization', 'SEO strategy 2024', 'Canadian SEO', 'local SEO', 'technical SEO'],
    tableOfContents: [
      { id: 'intro', label: 'Understanding SEO Rankings', level: 2 },
      { id: 'technical', label: 'Technical SEO Fundamentals', level: 2 },
      { id: 'on-page', label: 'On-Page Optimization', level: 3 },
      { id: 'content-strategy', label: 'Content Strategy', level: 2 },
      { id: 'local-seo', label: 'Local SEO for Canada', level: 3 },
      { id: 'link-building', label: 'Link Building', level: 2 },
      { id: 'action-plan', label: 'Your SEO Action Plan', level: 2 },
    ],
  },
  'ai-business-automation-2025': {
    title: 'AI Business Automation: Transform Your Operations in 2025',
    excerpt:
      'Discover how AI automation can revolutionize Canadian businesses with practical implementation strategies, cost savings, and competitive advantages.',
    content: `
      <div class="intro-section" id="intro">
        <h2>The AI Revolution in Canadian Business Operations</h2>
        <p class="lead-paragraph">Artificial Intelligence is no longer a futuristic concept—it's a practical tool transforming Canadian businesses today. From automating repetitive tasks to providing intelligent insights, AI automation is becoming essential for maintaining competitive advantage.</p>
        <div class="key-highlights">
          <h4>🚀 Key Benefits of AI Automation:</h4>
          <ul>
            <li><strong>Cost Reduction</strong> - Reduce operational costs by 30–50%</li>
            <li><strong>Efficiency Gains</strong> - Automate 80% of repetitive tasks</li>
            <li><strong>24/7 Operations</strong> - AI systems work around the clock</li>
            <li><strong>Data-Driven Decisions</strong> - Real-time business insights</li>
          </ul>
        </div>
      </div>
      <div class="technical-section" id="tools">
        <h2>🤖 Top AI Automation Tools for Canadian Businesses</h2>
        <p>The right AI tools can transform your business operations without requiring extensive technical knowledge.</p>
        <div class="checklist-box">
          <h4>✅ Essential AI Automation Tools:</h4>
          <ul>
            <li><strong>Zapier AI</strong> - Workflow automation across 5,000+ apps</li>
            <li><strong>Microsoft Power Automate</strong> - Enterprise-grade automation</li>
            <li><strong>Make.com</strong> - Visual workflow builder with AI integration</li>
            <li><strong>UiPath</strong> - Robotic Process Automation (RPA)</li>
          </ul>
        </div>
      </div>
      <div class="content-strategy-section" id="implementation">
        <h2>📊 Implementation Strategy for Canadian Businesses</h2>
        <p>Successful AI automation requires careful planning. Start with high-impact, low-complexity automations and expand as confidence grows.</p>
        <div class="strategy-grid">
          <h4>🎯 Phased Implementation Approach:</h4>
          <ul>
            <li><strong>Phase 1</strong> - Automate administrative tasks (data entry, scheduling)</li>
            <li><strong>Phase 2</strong> - Implement customer service automation</li>
            <li><strong>Phase 3</strong> - Deploy predictive analytics</li>
            <li><strong>Phase 4</strong> - Integrate AI across entire operations</li>
            <li><strong>Phase 5</strong> - Optimize and scale</li>
          </ul>
        </div>
      </div>
      <div class="local-seo-section" id="compliance">
        <h3>🇨🇦 Canadian Compliance and Data Privacy</h3>
        <p>When implementing AI automation in Canada, compliance with PIPEDA and other privacy regulations is crucial.</p>
        <div class="canadian-focus">
          <h4>🍁 Canadian Compliance Considerations:</h4>
          <ul>
            <li>PIPEDA compliance for data handling</li>
            <li>Canadian data residency requirements</li>
            <li>Bilingual support for French-speaking regions</li>
            <li>Compliance with provincial privacy laws</li>
          </ul>
        </div>
      </div>
      <div class="conclusion-section" id="getting-started">
        <h2>🎯 Getting Started with AI Automation</h2>
        <p>Begin by identifying repetitive, time-consuming tasks that provide clear business value when automated.</p>
        <div class="final-takeaway">
          <h4>💡 Key Takeaway for Canadian Businesses:</h4>
          <p><em>AI automation is not just a technology upgrade—it's a fundamental business transformation. The businesses that embrace AI automation today will dominate their markets tomorrow.</em></p>
        </div>
        <hr>
        <div class="cta-section" id="cta">
          <h4>🚀 Ready to Transform Your Business with AI Automation?</h4>
          <p>Neural Code specializes in implementing AI automation solutions for Canadian businesses.</p>
        </div>
      </div>
    `,
    date: '2024-12-15',
    lastModified: '2024-12-15',
    readTime: '10 min read',
    wordCount: 1800,
    category: 'AI & Automation',
    author: 'Neural Code Team',
    keywords: ['AI automation', 'business automation', 'Canadian AI solutions', 'AI tools', 'automation ROI', 'AI implementation'],
    tableOfContents: [
      { id: 'intro', label: 'The AI Revolution', level: 2 },
      { id: 'tools', label: 'Top AI Automation Tools', level: 2 },
      { id: 'implementation', label: 'Implementation Strategy', level: 2 },
      { id: 'compliance', label: 'Canadian Compliance', level: 3 },
      { id: 'getting-started', label: 'Getting Started', level: 2 },
    ],
  },
}

// ─── Related Posts Logic ───────────────────────────────────────────────────────

function getRelatedPosts(currentSlug: string, currentPost: BlogPost, limit = 3) {
  return Object.entries(blogPosts)
    .filter(([slug]) => slug !== currentSlug)
    .map(([slug, post]) => {
      const sharedKeywords = post.keywords.filter((k) => currentPost.keywords.includes(k)).length
      const sameCategory = post.category === currentPost.category ? 2 : 0
      return { slug, post, score: sharedKeywords + sameCategory }
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ slug, post }) => ({ slug, post }))
}

// ─── generateStaticParams ─────────────────────────────────────────────────────

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }))
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts[slug]

  if (!post) return { title: 'Blog Post Not Found' }

  const canonicalUrl = `${SITE_URL}/blog/${slug}`
  const ogImage = post.featuredImage ?? DEFAULT_OG_IMAGE

  return {
    title: `${post.title} | ${AUTHOR_NAME}`,
    description: post.excerpt,
    keywords: post.keywords.join(', '),
    authors: [{ name: post.author, url: post.authorUrl }],
    creator: post.author,
    publisher: AUTHOR_NAME,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: canonicalUrl,
      siteName: `${AUTHOR_NAME} | Web3 & Tech Blog`,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.lastModified ?? post.date,
      authors: [post.authorUrl ?? AUTHOR_URL],
      section: post.category,
      tags: post.keywords,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
          type: 'image/png',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      creator: '@mussawarhayat',
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

// ─── JSON-LD Schema Builder ───────────────────────────────────────────────────

function buildJsonLd(slug: string, post: BlogPost) {
  const canonicalUrl = `${SITE_URL}/blog/${slug}`
  const ogImage = post.featuredImage ?? DEFAULT_OG_IMAGE

  return {
    '@context': 'https://schema.org',
    '@graph': [
      // BlogPosting schema
      {
        '@type': 'BlogPosting',
        '@id': `${canonicalUrl}#article`,
        headline: post.title,
        description: post.excerpt,
        datePublished: post.date,
        dateModified: post.lastModified ?? post.date,
        url: canonicalUrl,
        inLanguage: 'en-CA',
        author: {
          '@type': 'Person',
          '@id': `${SITE_URL}#author`,
          name: post.author,
          url: post.authorUrl ?? AUTHOR_URL,
        },
        publisher: {
          '@type': 'Person',
          '@id': `${SITE_URL}#author`,
          name: AUTHOR_NAME,
          url: SITE_URL,
          logo: {
            '@type': 'ImageObject',
            url: DEFAULT_OG_IMAGE,
          },
        },
        image: {
          '@type': 'ImageObject',
          url: ogImage,
          width: 1200,
          height: 630,
        },
        articleSection: post.category,
        keywords: post.keywords.join(', '),
        wordCount: post.wordCount,
        timeRequired: `PT${parseInt(post.readTime)}M`,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': canonicalUrl,
        },
      },
      // BreadcrumbList schema
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
          { '@type': 'ListItem', position: 3, name: post.title, item: canonicalUrl },
        ],
      },
      // WebSite schema for sitelinks search
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}#website`,
        url: SITE_URL,
        name: `${AUTHOR_NAME} | Web3 & Tech Blog`,
        inLanguage: 'en-CA',
      },
    ],
  }
}

// ─── Table of Contents Component ─────────────────────────────────────────────

function TableOfContents({ items }: { items: NonNullable<BlogPost['tableOfContents']> }) {
  return (
    <nav
      aria-label="Table of contents"
      className="mb-16 p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm"
    >
      <p className="text-xs font-orbitron uppercase tracking-[0.25em] text-[#39FF14]/70 mb-6">
        Table of Contents
      </p>
      <ol className="space-y-3" role="list">
        {items.map((item, idx) => (
          <li
            key={item.id}
            style={{ paddingLeft: item.level === 3 ? '1.25rem' : '0' }}
          >
            <a
              href={`#${item.id}`}
              className={`group flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-200 ${
                item.level === 3 ? 'text-sm' : 'text-base font-medium'
              }`}
            >
              <span className="text-[10px] font-orbitron text-[#39FF14]/50 group-hover:text-[#39FF14] transition-colors min-w-[1.5rem]">
                {String(idx + 1).padStart(2, '0')}
              </span>
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}

// ─── Related Posts Component ──────────────────────────────────────────────────

function RelatedPosts({
  posts,
}: {
  posts: { slug: string; post: BlogPost }[]
}) {
  if (!posts.length) return null

  return (
    <aside aria-label="Related articles" className="mt-24">
      <h2 className="text-2xl font-bold text-white font-orbitron uppercase tracking-[0.15em] mb-10">
        Related Articles
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map(({ slug, post }) => (
          <Link
            key={slug}
            href={`/blog/${slug}`}
            className="group block p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-[#39FF14]/30 hover:bg-white/[0.04] transition-all duration-300"
          >
            <span className="inline-block text-[10px] font-orbitron uppercase tracking-[0.2em] text-[#39FF14]/70 mb-3">
              {post.category}
            </span>
            <h3 className="text-sm font-semibold text-white leading-snug mb-3 group-hover:text-[#39FF14] transition-colors line-clamp-2">
              {post.title}
            </h3>
            <p className="text-xs text-white/50 line-clamp-2 leading-relaxed">{post.excerpt}</p>
            <div className="flex items-center gap-2 mt-4 text-[10px] font-orbitron uppercase tracking-widest text-white/30">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-CA', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </time>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
          </Link>
        ))}
      </div>
    </aside>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = blogPosts[slug]

  if (!post) return notFound()

  const relatedPosts = getRelatedPosts(slug, post)
  const jsonLd = buildJsonLd(slug, post)
  const canonicalUrl = `${SITE_URL}/blog/${slug}`

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: post.title, url: `/blog/${slug}` },
  ]

  return (
    <>
      {/* JSON-LD Structured Data */}
      <Script
        id="blog-post-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        strategy="beforeInteractive"
      />

      <BreadcrumbSchema items={breadcrumbs} />

      <div className="min-h-screen bg-gradient-to-br from-[#060B16] via-[#0a0f1f] to-[#060B16]">
        <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true" />

        {/* ── Main content ── */}
        <main role="main" id="main-content" className="relative z-10">

          {/* ── Hero ── */}
          <header className="pt-24 pb-16 px-6">
            <div className="max-w-4xl mx-auto text-center mt-20">

              {/* Category badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#39FF14]/10 border border-[#39FF14]/20 mb-8">
                <span className="w-2 h-2 bg-[#39FF14] rounded-full animate-pulse" aria-hidden="true" />
                <span className="text-xs font-orbitron text-[#39FF14] tracking-widest uppercase">
                  {post.category}
                </span>
              </div>

              {/* H1 — primary keyword-rich headline */}
              <h1 className="text-5xl md:text-7xl font-bold text-white font-orbitron mb-8 leading-tight tracking-tight">
                <span className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
                  {post.title}
                </span>
              </h1>

              {/* Post meta */}
              <div className="flex flex-wrap items-center justify-center gap-y-4 gap-x-8 mb-16">
                <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 px-8 py-3 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-sm shadow-2xl shadow-black/20">

                  {/* Published date — machine-readable */}
                  <div className="flex items-center gap-3 group">
                    <div className="p-1.5 rounded-md bg-white/5 border border-white/5 group-hover:border-[#39FF14]/30 transition-colors">
                      <svg className="w-3.5 h-3.5 text-[#39FF14]/70" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <time
                      dateTime={post.date}
                      className="text-[11px] font-orbitron font-medium uppercase tracking-[0.2em] text-white/50 group-hover:text-white transition-colors"
                    >
                      {new Date(post.date).toLocaleDateString('en-CA', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </div>

                  <div className="hidden md:block w-1 h-1 bg-white/10 rounded-full" aria-hidden="true" />

                  {/* Read time */}
                  <div className="flex items-center gap-3 group">
                    <div className="p-1.5 rounded-md bg-white/5 border border-white/5 group-hover:border-[#39FF14]/30 transition-colors">
                      <svg className="w-3.5 h-3.5 text-[#39FF14]/70" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-[11px] font-orbitron font-medium uppercase tracking-[0.2em] text-white/50 group-hover:text-white transition-colors">
                      {post.readTime}
                      {post.wordCount && (
                        <span className="sr-only"> ({post.wordCount.toLocaleString()} words)</span>
                      )}
                    </span>
                  </div>

                  <div className="hidden md:block w-1 h-1 bg-white/10 rounded-full" aria-hidden="true" />

                  {/* Author */}
                  <div className="flex items-center gap-3 group">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-[#39FF14]/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                      <div
                        className="relative w-7 h-7 rounded-full bg-gradient-to-br from-[#39FF14] to-[#1a7a0a] flex items-center justify-center border border-white/10 shadow-lg"
                        aria-hidden="true"
                      >
                        <span className="text-[9px] font-black text-[#060B16] font-orbitron tracking-tighter">
                          {post.author.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                        </span>
                      </div>
                    </div>
                    <span className="text-[11px] font-orbitron font-medium uppercase tracking-[0.2em] text-white/50 group-hover:text-white transition-colors">
                      {post.author}
                    </span>
                  </div>

                  {/* Word count (visible for credibility, hidden on small) */}
                  {post.wordCount && (
                    <>
                      <div className="hidden md:block w-1 h-1 bg-white/10 rounded-full" aria-hidden="true" />
                      <span className="hidden md:inline text-[11px] font-orbitron font-medium uppercase tracking-[0.2em] text-white/30">
                        {post.wordCount.toLocaleString()} words
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </header>

          {/* ── Article body ── */}
          <div className="pb-32">
            <div className="max-w-4xl mx-auto px-6">

              {/* Excerpt / description — helps click-through from snippets */}
              <p className="relative mb-12 p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm text-xl text-white/80 font-light leading-relaxed pl-12 italic border-l-4 border-l-[#39FF14]">
                {post.excerpt}
              </p>

              {/* Table of Contents */}
              {post.tableOfContents && post.tableOfContents.length > 0 && (
                <TableOfContents items={post.tableOfContents} />
              )}

              {/* Article — semantic landmark for crawlers */}
              <article
                itemScope
                itemType="https://schema.org/BlogPosting"
                aria-label={post.title}
                className="prose prose-xl max-w-none prose-invert
                  prose-headings:font-orbitron prose-headings:tracking-wider prose-headings:uppercase
                  prose-h2:text-[#39FF14] prose-h2:text-4xl prose-h2:mt-20 prose-h2:mb-12 prose-h2:font-bold prose-h2:border-b prose-h2:border-b-white/10 prose-h2:pb-6 prose-h2:leading-tight
                  prose-h3:text-white prose-h3:text-3xl prose-h3:mt-16 prose-h3:mb-10 prose-h3:font-semibold prose-h3:leading-tight
                  prose-h4:text-white/90 prose-h4:text-2xl prose-h4:mt-12 prose-h4:mb-8 prose-h4:font-medium prose-h4:leading-tight
                  prose-p:text-white/80 prose-p:leading-relaxed prose-p:font-sans prose-p:text-xl prose-p:mb-8 prose-p:tracking-wide prose-p:font-light
                  prose-strong:text-[#39FF14] prose-strong:font-bold
                  prose-em:text-white/70 prose-em:italic
                  prose-ul:text-white/80 prose-ul:space-y-6 prose-ul:mt-12 prose-ul:mb-12 prose-ul:list-disc prose-ul:pl-6
                  prose-ol:text-white/80 prose-ol:space-y-6 prose-ol:mt-12 prose-ol:mb-12
                  prose-li:text-white/80 prose-li:leading-relaxed prose-li:text-lg prose-li:marker:text-[#39FF14] prose-li:marker:font-bold
                  prose-blockquote:border-l-4 prose-blockquote:border-[#39FF14] prose-blockquote:bg-gradient-to-r prose-blockquote:from-white/8 prose-blockquote:to-transparent prose-blockquote:p-12 prose-blockquote:rounded-r-2xl prose-blockquote:my-16 prose-blockquote:shadow-xl
                  prose-blockquote:p:text-white/90 prose-blockquote:p:italic prose-blockquote:p:text-2xl prose-blockquote:p:font-light prose-blockquote:p:leading-relaxed
                  prose-code:text-[#39FF14] prose-code:bg-white/12 prose-code:px-4 prose-code:py-2 prose-code:rounded-lg prose-code:font-mono prose-code:text-sm prose-code:border prose-code:border-white/10
                  prose-pre:bg-gradient-to-br prose-pre:from-black/50 prose-pre:to-white/5 prose-pre:border prose-pre:border-white/20 prose-pre:rounded-2xl prose-pre:p-8 prose-pre:my-16 prose-pre:shadow-2xl
                  prose-hr:border-white/10 prose-hr:my-24 prose-hr:border-dashed
                  prose-a:text-[#39FF14] prose-a:no-underline prose-a:font-semibold hover:prose-a:text-white hover:prose-a:underline"

                /* Inline microdata for richer search snippets */
                data-article-date={post.date}
              >
                {/* Hidden microdata fields */}
                <meta itemProp="headline" content={post.title} />
                <meta itemProp="description" content={post.excerpt} />
                <meta itemProp="datePublished" content={post.date} />
                <meta itemProp="dateModified" content={post.lastModified ?? post.date} />
                <meta itemProp="author" content={post.author} />
                <meta itemProp="keywords" content={post.keywords.join(', ')} />

                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </article>

              {/* Keyword tags — internal link signal + UX */}
              {post.keywords.length > 0 && (
                <div className="mt-16 flex flex-wrap gap-3" aria-label="Article topics">
                  {post.keywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="px-3 py-1.5 text-xs font-orbitron uppercase tracking-widest text-white/50 border border-white/10 rounded-lg bg-white/[0.02] hover:border-[#39FF14]/30 hover:text-white/80 transition-colors cursor-default"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              )}

              {/* CTA */}
              <div className="mt-24 p-12 rounded-3xl bg-gradient-to-br from-[#39FF14]/5 to-[#39FF14]/2 border border-[#39FF14]/20 text-center">
                <h2 className="text-2xl font-bold text-white font-orbitron mb-4">
                  Ready to start your project?
                </h2>
                <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                  Let's discuss how we can transform your digital presence with cutting-edge solutions.
                </p>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#39FF14] hover:bg-[#39FF14]/90 text-[#060B16] font-bold font-orbitron text-sm uppercase tracking-[0.2em] rounded-xl transition-all duration-300 shadow-lg shadow-[#39FF14]/25 hover:shadow-xl hover:shadow-[#39FF14]/35"
                >
                  Get Started
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* Related posts */}
              <RelatedPosts posts={relatedPosts} />
            </div>
          </div>

          {/* ── Bottom nav ── */}
          <footer className="border-t border-white/10">
            <div className="max-w-4xl mx-auto px-6 py-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <Link
                  href="/blog"
                  className="group inline-flex items-center gap-3 px-6 py-3 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/5 hover:border-[#39FF14]/30 transition-all duration-300"
                  aria-label="Back to blog listing"
                >
                  <svg className="w-5 h-5 text-white/60 group-hover:text-[#39FF14] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  <span className="text-sm font-orbitron uppercase tracking-[0.2em] text-white/60 group-hover:text-white transition-colors">
                    Back to Blog
                  </span>
                </Link>

                <div className="flex items-center gap-6">
                  <span className="text-xs font-orbitron uppercase tracking-widest text-white/30">Share</span>
                  <div className="flex gap-3" role="list" aria-label="Share on social media">
                    <a
                      role="listitem"
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(canonicalUrl)}&title=${encodeURIComponent(post.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Share on LinkedIn"
                      className="group w-10 h-10 rounded-lg border border-white/10 bg-white/[0.02] hover:bg-[#39FF14] hover:border-[#39FF14] transition-all duration-300 flex items-center justify-center"
                    >
                      <span className="text-xs font-orbitron uppercase tracking-widest text-white/60 group-hover:text-[#060B16] transition-colors" aria-hidden="true">in</span>
                    </a>
                    <a
                      role="listitem"
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(canonicalUrl)}&text=${encodeURIComponent(post.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Share on X (Twitter)"
                      className="group w-10 h-10 rounded-lg border border-white/10 bg-white/[0.02] hover:bg-[#39FF14] hover:border-[#39FF14] transition-all duration-300 flex items-center justify-center"
                    >
                      <span className="text-xs font-orbitron uppercase tracking-widest text-white/60 group-hover:text-[#060B16] transition-colors" aria-hidden="true">𝕏</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </main>

        <Footer />
      </div>
    </>
  )
}