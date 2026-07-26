interface ArticleSchemaProps {
  title: string
  description: string
  url: string
  datePublished: string
  dateModified?: string
  author: string
  authorUrl?: string
  category: string
  keywords?: string[]
  featuredImage?: string
}

export function ArticleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  author,
  authorUrl,
  category,
  keywords = [],
  featuredImage
}: ArticleSchemaProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "url": url,
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "author": {
      "@type": "Person",
      "name": author,
      "url": authorUrl
    },
    "publisher": {
      "@type": "Organization",
      "name": "Mussawar Hayat",
      "logo": {
        "@type": "ImageObject",
        "url": "https://mussawarhayat.site/my-pic.jpeg",
        "width": 192,
        "height": 192
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "articleSection": category,
    "keywords": keywords.join(", "),
    ...(featuredImage && {
      "image": {
        "@type": "ImageObject",
        "url": featuredImage,
        "width": 1200,
        "height": 630
      }
    })
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
