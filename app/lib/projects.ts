export type ProjectCategory =
  | 'metaverse'
  | 'defi'
  | 'nft'
  | 'utility'
  | 'design'
  | 'gaming'
  | 'media'
  | 'backend'
  | 'devops';

export interface Project {
  slug: string;
  title: string;
  description: string;
  category: ProjectCategory;
  tech: readonly string[];
  link: string | null;
  github: string | null;
  flagship: boolean;
  problem?: string;
  architecture?: string;
  results?: string;
}

export const PROJECTS: Project[] = [
  {
    slug: 'dameta1-ecosystem',
    title: 'DaMeta1 Ecosystem',
    category: 'metaverse',
    description:
      'A global AI-driven Metaverse bridging education and business across 5 continents. Features immersive 3D hubs and decentralized infrastructure.',
    tech: ['React', 'Three.js', 'AI', 'Web3'],
    link: 'https://dameta1.com/',
    github: null,
    flagship: true,
    problem:
      'The client needed a cross-continental education and business metaverse with immersive 3D spaces and on-chain identity, without a multi-vendor stack. Coordinating education hubs, marketplace logic, and wallet-based identity across regions required a single coherent architecture.',
    architecture:
      'React frontends with Three.js for 3D hubs, Web3 wallet and identity layers, and modular services for education and marketplace features. Regional content and identity flows were designed so one engineering owner could ship and maintain the full stack.',
    results:
      'Delivered a unified multi-region metaverse platform with immersive 3D hubs, on-chain identity, and modular education and marketplace services under a single engineering ownership model.',
  },
  {
    slug: 'ordwin-market',
    title: 'Ordwin Market',
    category: 'nft',
    description:
      'High-performance Bitcoin NFT marketplace specialised in Ordinal inscriptions with a focus on speed and secure trading.',
    tech: ['Next.js', 'TypeScript', 'Bitcoin'],
    link: 'https://ordwin.fun',
    github: 'https://github.com/khanzada-web/ordwin',
    flagship: true,
    problem:
      'Bitcoin Ordinals trading required low-latency indexing of inscriptions and a trustworthy listing UX on a chain that does not share Ethereum-style indexers. Existing tools either lagged or forced EVM assumptions onto Bitcoin data.',
    architecture:
      'Next.js and TypeScript marketplace UI with a dedicated sync API for inscriptions, ownership transfers, and listings. Bitcoin-native data paths were used instead of EVM-style assumptions so listings and ownership stayed accurate at chain speed.',
    results:
      'Shipped a production Ordinals marketplace with dedicated inscription indexing, ownership tracking, and listing flows built for Bitcoin-native performance rather than EVM assumptions.',
  },
  {
    slug: 'fast-timetable',
    title: 'FAST Timetable',
    category: 'utility',
    description:
      'Dynamic scheduling platform for university ecosystems. Streamlining student time-management with a responsive, real-time UI.',
    tech: ['React', 'Vercel', 'UI/UX'],
    link: 'https://timetbl.vercel.app/',
    github: null,
    flagship: true,
    problem:
      'University students needed a clearer, mobile-friendly way to view and plan class schedules without dense static PDFs that were hard to scan on phones.',
    architecture:
      'React SPA deployed on Vercel with responsive layouts and real-time-oriented UI patterns for timetable browsing. Focus was on fast load and clear hierarchy for mobile-first use.',
    results:
      'Replaced static PDF schedules with a responsive, mobile-first timetable interface that students can browse and plan around in real time.',
  },
  {
    slug: 'soft-stake',
    title: 'Soft Stake',
    category: 'defi',
    description:
      'DeFi staking architecture with automated yield distribution and secure liquidity pool management for crypto assets.',
    tech: ['Solidity', 'Ethers.js', 'Node.js'],
    link: 'https://soft-stake.netlify.app',
    github: 'https://github.com/khanzada-web/soft-stake',
    flagship: true,
    problem:
      'The product needed staking and yield flows that users could trust, with clear on-chain distribution logic and a usable web interface for pool interaction and monitoring.',
    architecture:
      'Solidity contracts for staking and yield, Ethers.js integration on the frontend, and a Node-assisted backend for operational workflows around the pools.',
    results:
      'Launched staking and yield contracts with a clear on-chain distribution model and a usable web interface for pool interaction and monitoring.',
  },
  {
    slug: 'rippleroot',
    title: 'RippleRoot',
    category: 'design',
    description:
      'A premium design-centric platform showcasing collaborative art and wildlife-themed digital experiences for global clients.',
    tech: ['Next.js', 'Framer', 'Tailwind'],
    link: 'https://www.rippleroot.io/',
    github: null,
    flagship: true,
    problem:
      'A creative brand needed a high-end web presence that matched the quality of collaborative art and wildlife storytelling, with motion that felt intentional rather than decorative.',
    architecture:
      'Next.js with Tailwind and Framer Motion for motion-rich, design-led pages and responsive marketing layouts that stay performant across devices.',
    results:
      'Delivered a design-led marketing site with motion-rich layouts that reflect the brand’s collaborative art and wildlife narrative across devices.',
  },
  {
    slug: 'dmu-utility-token',
    title: 'DMU Utility Token',
    category: 'defi',
    description:
      'The native economic layer for DaMeta1. An ERC-20 smart contract system powering governance and AI-driven marketplace transactions.',
    tech: ['Solidity', 'Web3.js', 'Ethereum'],
    link: 'https://dmu.dameta1.com/',
    github: null,
    flagship: true,
    problem:
      'DaMeta1 required an on-chain economic layer for governance and marketplace settlement tied to the broader ecosystem, without fragmenting ownership of contracts and frontends.',
    architecture:
      'ERC-20 Solidity contracts on Ethereum with Web3.js integration for governance and marketplace transaction flows, wired into the existing DaMeta1 frontends.',
    results:
      'Implemented the ERC-20 economic layer that powers DaMeta1 governance and marketplace settlement, integrated with the broader ecosystem frontends.',
  },
  {
    slug: 'codmob-hub',
    title: 'CodMob Hub',
    category: 'utility',
    description:
      'Mobile-first development showcase featuring advanced frontend animations and modular architecture for high-end web apps.',
    tech: ['React', 'Netlify', 'Animations'],
    link: 'https://codmob1.netlify.app/',
    github: null,
    flagship: false,
    problem:
      'Needed a mobile-first showcase that demonstrated advanced frontend animation and modular component patterns without sacrificing performance.',
    architecture:
      'React SPA with modular components and animation-focused UI, deployed on Netlify for fast global delivery.',
    results:
      'Shipped a polished mobile-first demo site that highlights animation quality and modular architecture for high-end web product work.',
  },
  {
    slug: 'debauchery',
    title: 'Debauchery',
    category: 'gaming',
    description:
      'Web3 gaming ecosystem with integrated NFT asset ownership and decentralized community governance protocols.',
    tech: ['Vue.js', 'IPFS', 'Smart Contracts'],
    link: 'https://debaucherykek.com',
    github: 'https://github.com/khanzada-web/debauchery',
    flagship: false,
    problem:
      'A Web3 gaming product needed NFT-based asset ownership and community governance without forcing players through complex wallet UX.',
    architecture:
      'Vue.js frontend, IPFS for asset storage, and smart contracts for ownership and governance logic.',
    results:
      'Delivered a playable Web3 gaming layer with on-chain ownership and governance hooks suitable for community-driven game economies.',
  },
  {
    slug: 'demotrionn-dex',
    title: 'Demotrionn DEX',
    category: 'defi',
    description:
      'Multi-chain DEX interface featuring advanced charting tools and high-frequency data indexing for pro traders.',
    tech: ['React', 'GraphQL', 'PostgreSQL'],
    link: 'https://demotrionn.netlify.app',
    github: 'https://github.com/khanzada-web/demotrionn',
    flagship: false,
    problem:
      'Pro traders needed a multi-chain DEX UI with reliable charting and fast data indexing rather than laggy generic interfaces.',
    architecture:
      'React frontend with GraphQL data layer and PostgreSQL-backed indexing for high-frequency market and pool data.',
    results:
      'Built a multi-chain DEX interface with charting and indexing suited to professional trading workflows.',
  },
  {
    slug: 'newspress',
    title: 'NewsPress',
    category: 'media',
    description:
      'Blockchain-verified news aggregator utilising tokenized incentives for content verification and community reporting.',
    tech: ['Next.js', 'Redis', 'Docker'],
    link: 'https://newspress.netlify.app',
    github: 'https://github.com/khanzada-web/newspress',
    flagship: false,
    problem:
      'News aggregation needed a path to verifiable content and community incentives without a fragile, single-server stack.',
    architecture:
      'Next.js application with Redis for caching and Dockerised services for reliable deployment and scaling.',
    results:
      'Shipped a blockchain-oriented news aggregator prototype with tokenized verification incentives and a production-ready containerised stack.',
  },
  {
    slug: 'whitelist-check',
    title: 'Whitelist Check',
    category: 'utility',
    description:
      'Cross-chain utility for managing NFT whitelist signatures and secure allocation verification for launchpads.',
    tech: ['React', 'Ethers.js', 'Express'],
    link: 'https://whitelistcheck.netlify.app',
    github: 'https://github.com/khanzada-web/whitelistcheck',
    flagship: false,
    problem:
      'Launchpads needed a reliable way to verify whitelist signatures and allocations across chains without exposing private keys or manual spreadsheets.',
    architecture:
      'React frontend with Ethers.js for signature verification and an Express backend for secure allocation checks.',
    results:
      'Delivered a cross-chain whitelist verification utility used for secure allocation checks at launch time.',
  },
  {
    slug: 'nft-marketplace-ui',
    title: 'NFT Marketplace UI',
    category: 'nft',
    description:
      'Full-featured NFT marketplace frontend with wallet connection, live listings, and smooth transaction flows.',
    tech: ['Next.js', 'Ethers.js', 'Web3 API', 'UI/UX'],
    link: null,
    github: null,
    flagship: false,
    problem:
      'Needed a production-ready NFT marketplace frontend that handled wallet connection, live listings, and transaction states without UX dead-ends.',
    architecture:
      'Next.js UI with Ethers.js and Web3 API integration for wallet flows, listing display, and transaction feedback.',
    results:
      'Built a complete marketplace frontend pattern that can be wired to existing contracts or indexers for live trading.',
  },
  {
    slug: 'defi-dashboard',
    title: 'DeFi Dashboard',
    category: 'defi',
    description:
      'Real-time DeFi analytics dashboard aggregating live on-chain data — portfolio overview, yield tracking, and liquidity pool stats.',
    tech: ['React', 'Web3.js', 'Live API', 'UI/UX'],
    link: null,
    github: null,
    flagship: false,
    problem:
      'Users needed a single view of portfolio, yield, and pool stats instead of jumping between explorers and protocol UIs.',
    architecture:
      'React dashboard consuming live on-chain and API data via Web3.js, focused on clear portfolio and yield presentation.',
    results:
      'Delivered a real-time DeFi analytics UI pattern for portfolio overview, yield tracking, and liquidity pool monitoring.',
  },
  {
    slug: 'crypto-exchange-ui',
    title: 'Crypto Exchange UI',
    category: 'defi',
    description:
      'High-performance crypto exchange interface with order book, real-time charts, and multi-pair trading support.',
    tech: ['Next.js', 'TypeScript', 'UI/UX', 'API Integration'],
    link: null,
    github: null,
    flagship: false,
    problem:
      'Exchange UIs often lag or feel cluttered; the goal was a clean, high-performance interface for order books, charts, and multi-pair trading.',
    architecture:
      'Next.js + TypeScript frontend with real-time API integration for order books and charts, prioritising responsiveness and clarity.',
    results:
      'Built a high-performance exchange UI pattern with order book, charts, and multi-pair support ready for backend pairing.',
  },
  {
    slug: 'token-ico-website',
    title: 'Token / ICO Website',
    category: 'defi',
    description:
      'Conversion-focused ICO launch platform with tokenomics section, whitelist flow, and presale smart contract integration.',
    tech: ['React', 'Tailwind', 'UI/UX', 'Web3 API'],
    link: null,
    github: null,
    flagship: false,
    problem:
      'Token launches needed a conversion-focused site that clearly explained tokenomics and guided users through whitelist and presale without confusion.',
    architecture:
      'React + Tailwind marketing and presale UI with Web3 API hooks for whitelist and contract interaction.',
    results:
      'Delivered a conversion-oriented ICO/presale website pattern with tokenomics, whitelist, and contract integration points.',
  },
  {
    slug: 'web3-wallet-integration',
    title: 'Web3 Wallet Integration',
    category: 'utility',
    description:
      'Plug-and-play multi-chain wallet integration layer supporting MetaMask, WalletConnect, and Coinbase Wallet.',
    tech: ['MetaMask', 'WalletConnect', 'Multi-chain', 'UI/UX'],
    link: null,
    github: null,
    flagship: false,
    problem:
      'Many apps needed consistent multi-wallet support without re-implementing connection and chain-switching logic each time.',
    architecture:
      'Reusable wallet connection layer supporting MetaMask, WalletConnect, and Coinbase Wallet with multi-chain awareness.',
    results:
      'Created a plug-and-play multi-chain wallet integration pattern that can be dropped into new or existing dApps.',
  },
  {
    slug: 'staking-swap-platform',
    title: 'Staking & Swap Platform',
    category: 'backend',
    description:
      'Backend engine powering a DeFi staking and swap protocol — supporting 200+ wallet connections, real-time rate feeds, and automated yield distribution.',
    tech: ['Node.js', 'Express', 'API Integration', '200+ Wallets'],
    link: null,
    github: null,
    flagship: false,
    problem:
      'A DeFi product needed a reliable backend for staking, swaps, rate feeds, and yield distribution that could scale with many concurrent wallet connections.',
    architecture:
      'Node.js / Express API layer with integrations for rate feeds, wallet-oriented flows, and automated yield distribution logic.',
    results:
      'Built a backend engine capable of supporting staking, swap, and yield workflows under high concurrent wallet load.',
  },
  {
    slug: 'bitcoin-ordinals-sync-api',
    title: 'Bitcoin Ordinals Sync API',
    category: 'backend',
    description:
      'Real-time blockchain sync API for a Bitcoin Ordinals marketplace — indexing inscriptions, ownership transfers, and listing events at chain speed.',
    tech: ['Node.js', 'Bitcoin', 'Real-time Sync', 'REST API'],
    link: null,
    github: null,
    flagship: false,
    problem:
      'Ordinals marketplaces need continuous indexing of inscriptions and transfers; standard EVM-style indexers do not apply.',
    architecture:
      'Node.js REST API focused on Bitcoin-native sync of inscriptions, ownership transfers, and listing events.',
    results:
      'Delivered a real-time Ordinals sync API used to keep marketplace listings and ownership accurate at chain speed.',
  },
  {
    slug: 'auth-protected-apis',
    title: 'Auth & Protected APIs',
    category: 'backend',
    description:
      'Full authentication system with JWT, refresh token rotation, session management, role-based access control, and protected API routes.',
    tech: ['Node.js', 'JWT', 'Sessions', 'MongoDB', 'PostgreSQL'],
    link: null,
    github: null,
    flagship: false,
    problem:
      'SaaS and product backends needed solid auth with refresh rotation, sessions, and RBAC without reinventing the pattern each time.',
    architecture:
      'Node.js authentication layer with JWT, refresh token rotation, session handling, and role-based access control over MongoDB or PostgreSQL.',
    results:
      'Implemented a reusable auth and protected-API pattern suitable for production SaaS and product backends.',
  },
  {
    slug: 'ecommerce-backend',
    title: 'E-Commerce Backend',
    category: 'backend',
    description:
      'Scalable e-commerce API with product catalogue, cart, orders, payment gateway hooks, and inventory management.',
    tech: ['Node.js', 'Express', 'PostgreSQL', 'REST API'],
    link: null,
    github: null,
    flagship: false,
    problem:
      'E-commerce products needed a solid API for catalogue, cart, orders, payments, and inventory without a monolithic CMS.',
    architecture:
      'Node.js / Express REST API backed by PostgreSQL for products, cart, orders, payment hooks, and inventory.',
    results:
      'Built a scalable e-commerce backend pattern ready for storefront and admin frontends.',
  },
  {
    slug: 'multi-site-vps-management',
    title: 'Multi-Site VPS Management',
    category: 'devops',
    description:
      'Full production infrastructure managing multiple live sites on a single VPS — Nginx reverse proxy, PM2 process management, and zero-downtime deploys.',
    tech: ['Nginx', 'PM2', 'Ubuntu', 'VPS'],
    link: null,
    github: null,
    flagship: false,
    problem:
      'Multiple production sites needed reliable hosting on a single VPS with clean reverse proxying and zero-downtime deploys.',
    architecture:
      'Ubuntu VPS with Nginx reverse proxy, PM2 process management, and deploy workflows designed for multiple concurrent sites.',
    results:
      'Set up and maintained multi-site production infrastructure with Nginx, PM2, and zero-downtime deploy practices.',
  },
  {
    slug: 'cicd-pipeline-setup',
    title: 'CI/CD Pipeline Setup',
    category: 'devops',
    description:
      'Automated GitHub Actions pipelines for test, build, and deploy — with environment secrets, matrix builds, and Slack deploy notifications.',
    tech: ['GitHub Actions', 'CI/CD', 'Auto Deploy', 'Docker'],
    link: null,
    github: null,
    flagship: false,
    problem:
      'Teams needed automated test, build, and deploy pipelines instead of manual releases that risked environment drift.',
    architecture:
      'GitHub Actions workflows with secrets, matrix builds, Docker where needed, and Slack notifications on deploy.',
    results:
      'Delivered automated CI/CD pipelines that test, build, and deploy with clear notifications and environment isolation.',
  },
  {
    slug: 'email-infrastructure',
    title: 'Email Infrastructure',
    category: 'devops',
    description:
      'Full email server setup including WHM/cPanel, DNS records, SPF, DKIM, DMARC, SSL — achieving inbox deliverability and spam compliance.',
    tech: ['WHM', 'DNS', 'SPF', 'DKIM', 'DMARC', 'SSL'],
    link: null,
    github: null,
    flagship: false,
    problem:
      'Transactional and domain email needed proper DNS and authentication so messages landed in inboxes instead of spam.',
    architecture:
      'WHM/cPanel or equivalent with correct SPF, DKIM, DMARC, SSL, and DNS records for deliverability.',
    results:
      'Configured production email infrastructure with authentication and SSL for reliable inbox delivery.',
  },
  {
    slug: 'ssl-security-hardening',
    title: 'SSL & Security Hardening',
    category: 'devops',
    description:
      'Server security hardening covering Certbot HTTPS, firewall rules (UFW), fail2ban, SSH key auth, and automated certificate renewal.',
    tech: ['Certbot', 'HTTPS', 'UFW', 'Fail2ban', 'SSH'],
    link: null,
    github: null,
    flagship: false,
    problem:
      'Production VPS instances needed HTTPS, firewalling, and SSH hardening to reduce common attack surface.',
    architecture:
      'Certbot for HTTPS and auto-renewal, UFW firewall rules, fail2ban, and SSH key-only authentication.',
    results:
      'Hardened production servers with HTTPS, firewall, fail2ban, and secure SSH practices.',
  },
];

export function getFlagshipProjects() {
  return PROJECTS.filter((p) => p.flagship);
}

export function getArchiveProjects() {
  return PROJECTS.filter((p) => !p.flagship);
}

export function getProjectBySlug(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getAllProjectSlugs() {
  return PROJECTS.map((p) => p.slug);
}
