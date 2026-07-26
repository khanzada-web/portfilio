interface ServiceSchemaProps {
  serviceName: string
  description: string
  provider: string
  areaServed?: string
  hasOfferCatalog?: {
    name: string
    itemListElement: Array<{
      typeOfGood: string
      name: string
      description: string
    }>
  }
}

export function ServiceSchema({ 
  serviceName, 
  description, 
  provider, 
  areaServed = "Worldwide",
  hasOfferCatalog 
}: ServiceSchemaProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": description,
    "provider": {
      "@type": "Person",
      "name": provider,
      "url": "https://www.mussawarhayat.site"
    },
    "areaServed": areaServed,
    "serviceType": "Professional Services",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "priceRange": "$$-$$$",
      "availability": "https://schema.org/InStock"
    },
    ...(hasOfferCatalog && { hasOfferCatalog })
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
