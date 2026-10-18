import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Orbitron } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Hire Best Next.js 16 Full-Stack Web3 Developer 2026 | Mussawar Hayat",
    template: "%s | Mussawar Hayat",
  },

  description:
    "Hire the best Next.js 16 full-stack Web3 developer in 2026. Expert in React, TypeScript, Node.js, Solidity smart contracts, SaaS platforms, DApps, and production DevOps. Remote freelance available for North America and Europe startups.",

  authors: [{ name: "Mussawar Hayat", url: "https://mussawarhayat.site" }],
  creator: "Mussawar Hayat",
  publisher: "Mussawar Hayat",

  metadataBase: new URL("https://mussawarhayat.site"),
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": "https://mussawarhayat.site/feed.xml",
    },
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mussawarhayat.site",
    title: "Hire Best Next.js 16 Full-Stack Web3 Developer 2026 | Mussawar Hayat",
    description:
      "Top Next.js 16 full-stack and Web3 developer for hire. React, TypeScript, Node.js, Solidity, high-performance SaaS, DApps, and DevOps. Remote for North America and Europe.",
    siteName: "Mussawar Hayat — Best Next.js 16 Full-Stack & Web3 Developer",
    images: [
      {
        url: "/my-pic.jpeg",
        width: 1200,
        height: 630,
        alt: "Mussawar Hayat — Full-Stack & Web3 Developer portrait",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Hire Best Next.js 16 Web3 Developer 2026 | Mussawar Hayat",
    description:
      "Expert Next.js full-stack and Web3 developer building high-performance web, mobile & blockchain apps. Available for remote freelance projects.",
    images: ["/my-pic.jpeg"],
    creator: "@Mussawar_Hayat",
  },

  other: {
    "google-adsense-account": "ca-pub-9383132900869188",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#39FF14" },
    { media: "(prefers-color-scheme: dark)", color: "#060B16" },
  ],
};

const ENTITY_GRAPH = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://mussawarhayat.site/#website",
      url: "https://mussawarhayat.site",
      name: "Hire Best Next.js 16 Full-Stack Web3 Developer 2026 | Mussawar Hayat",
      description:
        "Best Next.js 16 full-stack and Web3 developer for hire in 2026. Remote freelance for clients in North America and Europe.",
      publisher: { "@id": "https://mussawarhayat.site/#person" },
      inLanguage: "en",
    },
    {
      "@type": "Person",
      "@id": "https://mussawarhayat.site/#person",
      name: "Mussawar Hayat",
      jobTitle: "Best Next.js 16 Full-Stack Developer & Web3 Specialist",
      url: "https://mussawarhayat.site",
      image: "https://mussawarhayat.site/my-pic.jpeg",
      email: "zada38843@gmail.com",
      telephone: "+923358328468",
      description:
        "Expert Next.js 16 full-stack and Web3 developer specializing in React, TypeScript, Node.js, Solidity smart contracts. Remote freelance for North America and Europe.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Mehria Town",
        addressLocality: "Attock",
        addressRegion: "Punjab",
        addressCountry: "PK",
      },
      sameAs: [
        "https://github.com/khanzada-web",
        "https://www.linkedin.com/in/mussawar-hayat-187768233",
        "https://twitter.com/Mussawar_Hayat",
        "https://x.com/Mussawar_Hayat",
      ],
      knowsAbout: [
        "Next.js 16",
        "React",
        "TypeScript",
        "Node.js",
        "Prisma",
        "PostgreSQL",
        "Solidity",
        "Web3",
        "Ethers.js",
        "Bitcoin Ordinals",
        "React Native",
        "Flutter",
        "DevOps",
        "Nginx",
        "PM2",
        "GitHub Actions",
        "Docker",
        "SaaS Development",
        "DeFi",
        "Smart Contracts",
        "Core Web Vitals",
      ],
      worksFor: { "@id": "https://mussawarhayat.site/#business" },
      areaServed: [
        { "@type": "Country", name: "United States" },
        { "@type": "Country", name: "Canada" },
        { "@type": "Country", name: "United Kingdom" },
        { "@type": "Country", name: "Germany" },
        { "@type": "Place", name: "Worldwide" },
      ],
      availableLanguage: ["English"],
    },
    {
      "@type": ["ProfessionalService", "LocalBusiness"],
      "@id": "https://mussawarhayat.site/#business",
      name: "Mussawar Hayat — Best Next.js 16 Full-Stack & Web3 Development",
      url: "https://mussawarhayat.site",
      image: "https://mussawarhayat.site/my-pic.jpeg",
      description:
        "Freelance expert Next.js 16 full-stack and Web3 services: React, TypeScript, Node.js, Solidity, mobile, DevOps, and high-performance SaaS. Remote worldwide.",
      email: "zada38843@gmail.com",
      telephone: "+923358328468",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Mehria Town",
        addressLocality: "Attock",
        addressRegion: "Punjab",
        addressCountry: "PK",
      },
      areaServed: [
        { "@type": "Place", name: "North America" },
        { "@type": "Place", name: "Europe" },
        { "@type": "Place", name: "Global Remote" },
      ],
      founder: { "@id": "https://mussawarhayat.site/#person" },
      employee: { "@id": "https://mussawarhayat.site/#person" },
      hasOfferCatalog: { "@id": "https://mussawarhayat.site/#services" },
    },
    {
      "@type": "OfferCatalog",
      "@id": "https://mussawarhayat.site/#services",
      name: "Full-Stack Engineering Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Next.js 16 Full-Stack Web Architecture",
            description:
              "High-performance Next.js 16 and React applications with SSR, ISR, TypeScript, Core Web Vitals optimization, and SEO-ready architecture.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mobile Solutions",
            description:
              "Cross-platform iOS and Android apps with React Native and Flutter.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web3 & Blockchain Development",
            description:
              "Smart contracts, DApps, wallet integration, DeFi, NFTs, and Bitcoin Ordinals with Solidity and Ethers.js.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "DevOps & Infrastructure",
            description:
              "Multi-site VPS, Nginx, PM2, GitHub Actions CI/CD, SSL, and email infrastructure (SPF, DKIM, DMARC).",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "E-Commerce & SaaS",
            description:
              "Production e-commerce and SaaS platforms with Stripe, catalogues, subscriptions, and admin panels.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9383132900869188"
          crossOrigin="anonymous"
        />

        <GoogleTagManager gtmId="GTM-P3GKJN4G" />

        <link rel="icon" type="image/webp" href="/logo.webp" />
        <link rel="icon" type="image/png" href="/logo-optimized.png" />
        <link rel="shortcut icon" href="/logo.webp" />
        <link rel="apple-touch-icon" href="/logo.webp" />
        <link rel="manifest" href="/site.webmanifest" />

        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ENTITY_GRAPH) }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} antialiased`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P3GKJN4G"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-blue-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-white"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
