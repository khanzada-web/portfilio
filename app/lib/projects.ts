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
      'The client needed a cross-continental education and business metaverse with immersive 3D spaces and on-chain identity, without a multi-vendor stack.',
    architecture:
      'React frontends with Three.js for 3D hubs, Web3 wallet and identity layers, and modular services for education and marketplace features across regions.',
    results:
      '[PLACEHOLDER: add quantified outcome — e.g. continents live, concurrent users, or uptime target once client permits public metrics.]',
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
      'Bitcoin Ordinals trading required low-latency indexing of inscriptions and a trustworthy listing UX on a chain that does not share Ethereum-style indexers.',
    architecture:
      'Next.js and TypeScript marketplace UI with a dedicated sync API for inscriptions, ownership transfers, and listings; Bitcoin-native data paths rather than EVM assumptions.',
    results:
      '[PLACEHOLDER: add volume, listings, or latency metrics when available for public case study.]',
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
      'University students needed a clearer, mobile-friendly way to view and plan class schedules without dense static PDFs.',
    architecture:
      'React SPA deployed on Vercel with responsive layouts and real-time-oriented UI patterns for timetable browsing.',
    results:
      '[PLACEHOLDER: add adoption or satisfaction metrics if the institution allows.]',
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
      'The product needed staking and yield flows that users could trust, with clear on-chain distribution logic and a usable web interface.',
    architecture:
      'Solidity contracts for staking and yield, Ethers.js integration, and a Node-assisted backend for operational workflows around the pools.',
    results:
      '[PLACEHOLDER: TVL, stakers, or audit status if public.]',
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
      'A creative brand needed a high-end web presence that matched the quality of collaborative art and wildlife storytelling.',
    architecture:
      'Next.js with Tailwind and Framer Motion for motion-rich, design-led pages and responsive marketing layouts.',
    results:
      '[PLACEHOLDER: engagement or conversion metrics if available.]',
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
      'DaMeta1 required an on-chain economic layer for governance and marketplace settlement tied to the broader ecosystem.',
    architecture:
      'ERC-20 Solidity contracts on Ethereum with Web3.js integration for governance and marketplace transaction flows.',
    results:
      '[PLACEHOLDER: supply, holders, or marketplace volume if public.]',
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
