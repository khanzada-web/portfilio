import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Orbitron } from "next/font/google";
import "./globals.css";

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
    default: "Mussawar Hayat | Full-Stack & Web3 Developer",
    template: "%s | Mussawar Hayat",
  },

  description:
    "Mussawar Hayat is a full-stack developer specializing in Next.js, React, and Web3, based in Pakistan, available for remote freelance work with clients in North America and Europe. 3+ years building production SaaS, DApps, and mobile apps.",

  authors: [{ name: "Mussawar Hayat", url: "https://mussawarhayat.site" }],
  creator: "Mussawar Hayat",
  publisher: "Mussawar Hayat",

  metadataBase: new URL("https://mussawarhayat.site"),
  alternates: {
    canonical: "/",
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
    title: "Hire Mussawar Hayat | Full-Stack & Web3 Developer",
    description:
      "Mussawar Hayat is a full-stack developer specializing in Next.js, React, TypeScript, Node.js and Web3. Available for remote freelance projects worldwide.",
    siteName: "Mussawar Hayat — Full-Stack Developer Portfolio",
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
    title: "Hire Mussawar Hayat | Full-Stack & Web3 Developer",
    description:
      "Full-stack developer building web, mobile & Web3 apps with React, Next.js, Node.js & Solidity. Available for freelance projects worldwide.",
    images: ["/my-pic.jpeg"],
    creator: "@Mussawar_Hayat",
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
      name: "Mussawar Hayat | Full-Stack & Web3 Developer",
      description:
        "Mussawar Hayat is a full-stack developer specializing in Next.js, React, and Web3, based in Pakistan, available for remote freelance work with clients in North America and Europe.",
      publisher: { "@id": "https://mussawarhayat.site/#person" },
      inLanguage: "en",
    },
    {
      "@type": "Person",
      "@id": "https://mussawarhayat.site/#person",
      name: "Mussawar Hayat",
      jobTitle: "Full-Stack Developer & Web3 Specialist",
      url: "https://mussawarhayat.site",
      image: "https://mussawarhayat.site/my-pic.jpeg",
      email: "zada38843@gmail.com",
      telephone: "+923358328468",
      description:
        "Mussawar Hayat is a full-stack developer specializing in Next.js, React, and Web3, based in Pakistan, available for remote freelance work with clients in North America and Europe. 3+ years building production SaaS, DApps, smart contracts, and mobile apps.",
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
        "Next.js",
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
      name: "Mussawar Hayat — Full-Stack & Web3 Development",
      url: "https://mussawarhayat.site",
      image: "https://mussawarhayat.site/my-pic.jpeg",
      description:
        "Freelance full-stack and Web3 development services: Next.js, React, TypeScript, Node.js, Solidity, mobile apps, DevOps, and SaaS platforms. Remote engagement for clients in North America, Europe, and worldwide.",
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
            name: "Full-Stack Web Architecture",
            description:
              "High-performance Next.js and React applications with SSR, ISR, TypeScript, and SEO-ready architecture.",
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
            name: "Web3 & Blockchain",
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
          suppressHydrationWarning
        />

        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-P3GKJN4G');`,
          }}
        />

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
