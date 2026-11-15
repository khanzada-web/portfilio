import { PERSON, SITE_URL } from '../../lib/site';

/**
 * Site-wide entity graph: who runs the site (Person), what they sell (ProfessionalService)
 * and the site itself (WebSite). Other pages point at these nodes by `@id`.
 */
const graph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': PERSON.id,
      name: PERSON.name,
      url: SITE_URL,
      image: PERSON.image,
      jobTitle: PERSON.role,
      email: `mailto:${PERSON.email}`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: PERSON.locality,
        addressCountry: PERSON.country,
      },
      knowsAbout: PERSON.knowsAbout,
      sameAs: Object.values(PERSON.profiles),
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE_URL}/#service`,
      name: `${PERSON.name} — Full-Stack & Web3 Development`,
      url: SITE_URL,
      image: PERSON.image,
      email: PERSON.email,
      founder: { '@id': PERSON.id },
      address: {
        '@type': 'PostalAddress',
        addressLocality: PERSON.locality,
        addressCountry: PERSON.country,
      },
      areaServed: ['United States', 'Canada', 'United Kingdom', 'European Union'],
      serviceType: [
        'Next.js application development',
        'SaaS development',
        'Web3 / smart contract development',
        'Core Web Vitals optimization',
      ],
      sameAs: Object.values(PERSON.profiles),
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: PERSON.name,
      publisher: { '@id': PERSON.id },
      inLanguage: 'en',
    },
  ],
};

export function SiteSchema() {
  return (
    <script
      type="application/ld+json"
      // `<` escaped so no string in the data can close the script tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, '\u003c') }}
    />
  );
}
