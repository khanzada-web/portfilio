interface Review {
  author: string
  datePublished: string
  reviewBody: string
  reviewRating: {
    ratingValue: string
    bestRating: string
    worstRating: string
  }
}

interface ReviewSchemaProps {
  itemReviewed: {
    name: string
    type: 'Service' | 'Person' | 'Organization'
  }
  reviews: Review[]
}

export function ReviewSchema({ itemReviewed, reviews }: ReviewSchemaProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": itemReviewed.type,
    "name": itemReviewed.name,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": reviews.length.toString(),
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "datePublished": review.datePublished,
      "reviewBody": review.reviewBody,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.reviewRating.ratingValue,
        "bestRating": review.reviewRating.bestRating,
        "worstRating": review.reviewRating.worstRating
      }
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
