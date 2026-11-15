/** Facts about the site owner, shared by structured data, the share card and the blog author box. */
export const SITE_URL = 'https://mussawarhayat.site';

export const PERSON = {
  id: `${SITE_URL}/#person`,
  name: 'Mussawar Hayat',
  role: 'Next.js & Web3 Full-Stack Developer',
  email: 'reply@mussawarhayat.site',
  image: `${SITE_URL}/my-pic.jpeg`,
  locality: 'Attock',
  country: 'PK',
  /** Working-hours overlap offered to clients. */
  coverage: 'EST / CET overlap',
  profiles: {
    github: 'https://github.com/khanzada-web',
    linkedin: 'https://www.linkedin.com/in/mussawar-hayat-187768233',
    x: 'https://x.com/Mussawar_Hayat',
    twine: 'https://www.twine.net/user1128152',
  },
  knowsAbout: [
    'Next.js',
    'React',
    'TypeScript',
    'Node.js',
    'PostgreSQL',
    'Prisma',
    'Solidity',
    'Ethers.js',
    'Web3 wallet integration',
    'Core Web Vitals',
    'DevOps',
  ],
} as const;

/**
 * The generated 1200×630 card (app/opengraph-image.tsx). Pages that set their own
 * `openGraph`/`twitter` replace the inherited objects wholesale, so they list it explicitly.
 */
export const SHARE_IMAGE = [
  { url: '/opengraph-image', width: 1200, height: 630, alt: `${PERSON.name} — ${PERSON.role}` },
];
