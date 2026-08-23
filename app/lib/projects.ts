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
      'The client needed a cross-continental education and business metaverse with immersive 3D spaces and on-chain identity, without splitting the product across multiple agencies.\n\nCoordinating education hubs, marketplace logic, and wallet-based identity across regions required one coherent architecture that a single engineering owner could ship and maintain. Fragmented vendor stacks had already made iteration slow and identity inconsistent.',
    architecture:
      'React frontends with Three.js power the 3D hubs. Web3 wallet and identity layers sit beside modular services for education content and marketplace features.\n\nRegional content and identity flows were designed so configuration—not separate codebases—handles multi-region differences. Deployment and ownership stayed under one engineering model rather than a multi-vendor hand-off.',
    results:
      'Delivered a unified multi-region metaverse platform with immersive 3D hubs, on-chain identity, and modular education and marketplace services.\n\nThe client gained a single product surface and a maintainable stack instead of disconnected regional builds.',
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
      'Bitcoin Ordinals trading required low-latency indexing of inscriptions and a trustworthy listing UX on a chain that does not share Ethereum-style indexers.\n\nExisting tools either lagged behind the chain or forced EVM mental models onto UTXO ownership. Sellers and buyers needed listings bound to real outpoints, not approximate address balances.',
    architecture:
      'Next.js and TypeScript power the marketplace UI. A dedicated sync API tracks inscriptions, ownership transfers, and listings using Bitcoin-native data paths.\n\nPSBT-oriented listing flows and reorg-aware indexing keep ownership accurate. The system avoids treating inscriptions like ERC-721 transfer events.',
    results:
      'Shipped a production Ordinals marketplace with dedicated inscription indexing, ownership tracking, and listing flows built for Bitcoin-native performance.\n\nListings stay tied to current outpoints so the UI reflects chain reality rather than stale EVM-style assumptions.',
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
      'University students needed a clearer, mobile-friendly way to view and plan class schedules. Static PDFs were hard to scan on phones and slow to update when rooms or slots changed.\n\nThe goal was a lightweight interface that loads quickly and presents hierarchy students can parse in seconds.',
    architecture:
      'React SPA deployed on Vercel with responsive layouts and real-time-oriented UI patterns for timetable browsing.\n\nEmphasis on fast first paint, readable hierarchy on small screens, and simple navigation between days and sections without heavy client state.',
    results:
      'Replaced static PDF schedules with a responsive, mobile-first timetable interface that students can browse and plan around in real time.\n\nThe product reduced friction for checking the next class and comparing sections on mobile devices.',
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
      'The product needed staking and yield flows users could verify on-chain, with clear distribution logic and a usable web interface for pool interaction and monitoring.\n\nOpaque reward math and fragile frontends were common failure modes in comparable products.',
    architecture:
      'Solidity contracts implement staking and yield distribution. Ethers.js connects the frontend to contract state and transactions. A Node-assisted backend supports operational workflows around the pools.\n\nUI surfaces balances, APR-oriented stats, and transaction status so users are not left guessing after a confirmation.',
    results:
      'Launched staking and yield contracts with a clear on-chain distribution model and a usable web interface for pool interaction and monitoring.\n\nOperators and users share the same source of truth: contract events and readable dashboard state.',
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
      'A creative brand needed a high-end web presence that matched the quality of collaborative art and wildlife storytelling.\n\nMotion had to feel intentional—not decorative noise that hurt performance or accessibility on mid-range devices.',
    architecture:
      'Next.js with Tailwind and Framer Motion for motion-rich, design-led pages and responsive marketing layouts.\n\nPerformance budgets guided animation choices so the site stayed usable on mobile while preserving the brand visual language.',
    results:
      'Delivered a design-led marketing site with motion-rich layouts that reflect the brand collaborative art and wildlife narrative across devices.\n\nThe client received a maintainable frontend base rather than a static design export.',
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
      'DaMeta1 required an on-chain economic layer for governance and marketplace settlement tied to the broader ecosystem.\n\nSplitting contract ownership from frontend ownership would have slowed iteration and created integration gaps between token flows and product UX.',
    architecture:
      'ERC-20 Solidity contracts on Ethereum with Web3.js integration for governance and marketplace transaction flows.\n\nContracts were wired into existing DaMeta1 frontends so token actions surface in the same product experience users already use.',
    results:
      'Implemented the ERC-20 economic layer that powers DaMeta1 governance and marketplace settlement, integrated with the broader ecosystem frontends.\n\nGovernance and market actions share consistent identity and transaction feedback.',
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
      'Needed a mobile-first showcase that demonstrated advanced frontend animation and modular component patterns without sacrificing performance on real phones.\n\nMany animation demos look polished on desktop and fail under mobile CPU and network constraints.',
    architecture:
      'React SPA with modular components and animation-focused UI, deployed on Netlify for fast global delivery.\n\nComponents were structured so animation hooks stay isolated from data-fetching concerns for easier reuse in client projects.',
    results:
      'Shipped a polished mobile-first demo site that highlights animation quality and modular architecture for high-end web product work.\n\nThe showcase became a reference for motion and component boundaries in subsequent client builds.',
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
      'A Web3 gaming product needed NFT-based asset ownership and community governance without forcing players through opaque wallet flows.\n\nOwnership had to be on-chain while day-to-day play remained approachable for users new to crypto UX.',
    architecture:
      'Vue.js frontend, IPFS for asset storage, and smart contracts for ownership and governance logic.\n\nWallet interactions were scoped to moments that truly require signatures; read-only state powers most of the session.',
    results:
      'Delivered a playable Web3 gaming layer with on-chain ownership and governance hooks suitable for community-driven game economies.\n\nPlayers can verify assets while the product retains a game-first interface.',
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
      'Pro traders needed a multi-chain DEX UI with reliable charting and fast data indexing rather than laggy generic interfaces.\n\nMain-thread overload from unthrottled websocket updates was a primary risk for multi-pair views.',
    architecture:
      'React frontend with GraphQL data layer and PostgreSQL-backed indexing for high-frequency market and pool data.\n\nSubscription lifecycle, update coalescing, and chart rendering strategy were treated as first-class design constraints.',
    results:
      'Built a multi-chain DEX interface with charting and indexing suited to professional trading workflows.\n\nThe UI remains responsive under concurrent pair subscriptions when feeds are managed correctly.',
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
      'News aggregation needed a path to verifiable content and community incentives without a fragile, single-server stack.\n\nThe product required caching and containerised services so traffic spikes would not take down the entire surface.',
    architecture:
      'Next.js application with Redis for caching and Dockerised services for reliable deployment and scaling.\n\nVerification and incentive flows sit beside a conventional reading experience so readers are not forced through blockchain UX for every view.',
    results:
      'Shipped a blockchain-oriented news aggregator prototype with tokenized verification incentives and a production-ready containerised stack.\n\nOperators can scale read traffic independently of write-side verification workloads.',
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
      'Launchpads needed a reliable way to verify whitelist signatures and allocations across chains without exposing private keys or relying on manual spreadsheets.\n\nErrors at launch time are costly; verification had to be deterministic and auditable.',
    architecture:
      'React frontend with Ethers.js for signature verification and an Express backend for secure allocation checks.\n\nSensitive signing material stays server-side; the client only presents proofs and status.',
    results:
      'Delivered a cross-chain whitelist verification utility used for secure allocation checks at launch time.\n\nTeams reduced manual list handling and clearer failure messages when a wallet was not allocated.',
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
      'Needed a production-ready NFT marketplace frontend that handled wallet connection, live listings, and transaction states without UX dead-ends.\n\nPending, confirmed, and failed states often leave users unsure whether a bid or listing succeeded.',
    architecture:
      'Next.js UI with Ethers.js and Web3 API integration for wallet flows, listing display, and transaction feedback.\n\nComponents are structured to attach to existing contracts or indexers without rewriting the entire shell.',
    results:
      'Built a complete marketplace frontend pattern that can be wired to existing contracts or indexers for live trading.\n\nTeams reuse the connection and listing UX instead of starting from a blank design system.',
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
      'Users needed a single view of portfolio, yield, and pool stats instead of jumping between explorers and protocol UIs.\n\nScattered data sources made it hard to answer simple questions about exposure and rewards.',
    architecture:
      'React dashboard consuming live on-chain and API data via Web3.js, focused on clear portfolio and yield presentation.\n\nLayouts prioritise readable numbers and status over decorative charts that obscure risk.',
    results:
      'Delivered a real-time DeFi analytics UI pattern for portfolio overview, yield tracking, and liquidity pool monitoring.\n\nThe pattern is reusable as a starting point for protocol-specific dashboards.',
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
      'Exchange UIs often lag or feel cluttered. The goal was a clean, high-performance interface for order books, charts, and multi-pair trading.\n\nUncontrolled re-renders on every tick were the main technical risk.',
    architecture:
      'Next.js + TypeScript frontend with real-time API integration for order books and charts, prioritising responsiveness and clarity.\n\nUpdate coalescing and clear loading states keep the trade view usable under load.',
    results:
      'Built a high-performance exchange UI pattern with order book, charts, and multi-pair support ready for backend pairing.\n\nThe shell is suitable for attaching venue-specific APIs without redesigning core trading surfaces.',
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
      'Token launches needed a conversion-focused site that clearly explained tokenomics and guided users through whitelist and presale without confusion.\n\nAmbiguous steps and missing transaction feedback caused drop-off and support load.',
    architecture:
      'React + Tailwind marketing and presale UI with Web3 API hooks for whitelist and contract interaction.\n\nCopy and UI states walk users through eligibility, contribution, and confirmation in order.',
    results:
      'Delivered a conversion-oriented ICO/presale website pattern with tokenomics, whitelist, and contract integration points.\n\nLaunch teams can swap branding and contract addresses while keeping the funnel structure.',
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
      'Many apps needed consistent multi-wallet support without re-implementing connection and chain-switching logic each time.\n\nDuplicated connector code led to inconsistent error handling across products.',
    architecture:
      'Reusable wallet connection layer supporting MetaMask, WalletConnect, and Coinbase Wallet with multi-chain awareness.\n\nSession reconnect, chain switch/add, and account change events are handled in one place for consumers.',
    results:
      'Created a plug-and-play multi-chain wallet integration pattern that can be dropped into new or existing dApps.\n\nProduct teams spend less time on connector edge cases and more on domain features.',
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
      'A DeFi product needed a reliable backend for staking, swaps, rate feeds, and yield distribution that could scale with many concurrent wallet connections.\n\nNaive per-request designs would not hold under peak launch traffic.',
    architecture:
      'Node.js / Express API layer with integrations for rate feeds, wallet-oriented flows, and automated yield distribution logic.\n\nEndpoints are structured for idempotent operations where retries are expected from clients.',
    results:
      'Built a backend engine capable of supporting staking, swap, and yield workflows under high concurrent wallet load.\n\nOperational monitoring focuses on rate-feed health and failed distribution jobs.',
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
      'Ordinals marketplaces need continuous indexing of inscriptions and transfers; standard EVM-style indexers do not apply.\n\nStale ownership data breaks trust in listings and trades.',
    architecture:
      'Node.js REST API focused on Bitcoin-native sync of inscriptions, ownership transfers, and listing events.\n\nIngestion is checkpointed so reorgs and restarts do not silently corrupt marketplace state.',
    results:
      'Delivered a real-time Ordinals sync API used to keep marketplace listings and ownership accurate at chain speed.\n\nThe marketplace UI can rely on a single ownership source instead of ad-hoc explorer scraping.',
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
      'SaaS and product backends needed solid auth with refresh rotation, sessions, and RBAC without reinventing the pattern each time.\n\nWeak token handling and missing role checks were recurring audit findings on greenfield APIs.',
    architecture:
      'Node.js authentication layer with JWT, refresh token rotation, session handling, and role-based access control over MongoDB or PostgreSQL.\n\nProtected routes assume untrusted clients and enforce authorization after authentication.',
    results:
      'Implemented a reusable auth and protected-API pattern suitable for production SaaS and product backends.\n\nNew services inherit rotation and RBAC instead of shipping with long-lived static tokens.',
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
      'E-commerce products needed a solid API for catalogue, cart, orders, payments, and inventory without a monolithic CMS.\n\nTight coupling between storefront and data layer made iteration slow.',
    architecture:
      'Node.js / Express REST API backed by PostgreSQL for products, cart, orders, payment hooks, and inventory.\n\nBoundaries keep payment provider details behind service modules so gateways can change without rewriting routes.',
    results:
      'Built a scalable e-commerce backend pattern ready for storefront and admin frontends.\n\nCatalogue and order flows are API-first and testable independently of UI.',
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
      'Multiple production sites needed reliable hosting on a single VPS with clean reverse proxying and zero-downtime deploys.\n\nAd-hoc process management had caused outages when one site deploy affected others.',
    architecture:
      'Ubuntu VPS with Nginx reverse proxy, PM2 process management, and deploy workflows designed for multiple concurrent sites.\n\nSymlink or reload strategies keep traffic flowing while new builds come online.',
    results:
      'Set up and maintained multi-site production infrastructure with Nginx, PM2, and zero-downtime deploy practices.\n\nSites share hardware without sharing failure domains in the process layer.',
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
      'Teams needed automated test, build, and deploy pipelines instead of manual releases that risked environment drift.\n\nMissing notifications meant failed deploys went unnoticed.',
    architecture:
      'GitHub Actions workflows with secrets, matrix builds, Docker where needed, and Slack notifications on deploy.\n\nEnvironments are isolated so staging credentials never bleed into production jobs.',
    results:
      'Delivered automated CI/CD pipelines that test, build, and deploy with clear notifications and environment isolation.\n\nRelease quality improved through consistent gates rather than ad-hoc scripts.',
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
      'Transactional and domain email needed proper DNS and authentication so messages landed in inboxes instead of spam.\n\nMissing SPF/DKIM/DMARC alignment was the common root cause of silent delivery failures.',
    architecture:
      'WHM/cPanel or equivalent with correct SPF, DKIM, DMARC, SSL, and DNS records for deliverability.\n\nEach sending domain is configured independently when multiple brands share infrastructure.',
    results:
      'Configured production email infrastructure with authentication and SSL for reliable inbox delivery.\n\nOperators can monitor DMARC reports and tighten policy after legitimate traffic is clean.',
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
      'Production VPS instances needed HTTPS, firewalling, and SSH hardening to reduce common attack surface.\n\nPassword SSH and open ports were frequent findings on newly provisioned hosts.',
    architecture:
      'Certbot for HTTPS and auto-renewal, UFW firewall rules, fail2ban, and SSH key-only authentication.\n\nBaseline rules default to deny and open only required service ports.',
    results:
      'Hardened production servers with HTTPS, firewall, fail2ban, and secure SSH practices.\n\nCertificate renewal is automated so HTTPS does not silently expire.',
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
