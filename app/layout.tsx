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

// Only load weights you actually use — each extra weight = extra network request
const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["700", "900"],
  display: "swap",
});

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: {
    default: "Mussawar Hayat | Full-Stack & Web3 Developer",
    template: "%s | Mussawar Hayat",
  },

  description:
    "Hire Mussawar Hayat — full-stack developer with 3+ years building high-performance web & mobile apps using React, Next.js, Node.js & TypeScript. Specialised Web3/blockchain integration (Solidity, DeFi, NFTs, Bitcoin Ordinals). Available for freelance projects worldwide.",

  keywords: [
    "hire full-stack developer",
    "hire Next.js developer",
    "freelance React developer",
    "Web3 developer for hire",
    "Solidity developer for hire",
    "blockchain developer freelance",
    "Next.js freelancer",
    "TypeScript full-stack developer",
    "React Native developer",
    "DevOps engineer for hire",
    "SaaS developer",
    "Mussawar Hayat",
    "full-stack developer Pakistan",
  ],

  authors: [{ name: "Mussawar Hayat", url: "https://www.mussawarhayat.site" }],
  creator: "Mussawar Hayat",
  publisher: "Mussawar Hayat",

  metadataBase: new URL("https://www.mussawarhayat.site"),
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

  verification: {
    // Note: Replace with actual Google Search Console verification token when available
    // google: 'your-google-site-verification-token',
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.mussawarhayat.site",
    title: "Hire Mussawar Hayat | Full-Stack & Web3 Developer",
    description:
      "Full-stack developer specialising in React, Next.js, TypeScript, Node.js and Web3. 3+ years experience. Available for freelance projects worldwide.",
    siteName: "Mussawar Hayat — Full-Stack Developer Portfolio",
    images: [
      {
        url: "/my-pic.jpeg",
        width: 1200,
        height: 630,
        alt: "Mussawar Hayat — Full-Stack & Web3 Developer",
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
    { media: "(prefers-color-scheme: dark)",  color: "#060B16" },
  ],
};

// ─── Root Layout ──────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        {/* Google AdSense Script */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9383132900869188"
          crossOrigin="anonymous"
        />

        {/* Google Analytics (GA4) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-BV823ZQ3HX"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BV823ZQ3HX');
            `,
          }}
        />

        {/* Favicons */}
        <link rel="icon"             type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon"             type="image/png" href="/logo.png" />
        <link rel="shortcut icon"                     href="/favicon.svg" />
        <link rel="apple-touch-icon"                  href="/my-pic.jpeg" />
        <link rel="manifest"                          href="/site.webmanifest" />

        {/* Semantic SEO: Entity Graph (Person + WebSite) */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://www.mussawarhayat.site/#website",
                  "url": "https://www.mussawarhayat.site",
                  "name": "Mussawar Hayat | Full-Stack & Web3 Developer",
                  "description": "Hire a full-stack developer specialising in Next.js, TypeScript, Node.js, React Native, and Web3. Production web, mobile, and blockchain applications.",
                  "publisher": { "@id": "https://www.mussawarhayat.site/#person" },
                  "inLanguage": "en",
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://www.mussawarhayat.site/blog?q={search_term_string}",
                    "query-input": "required name=search_term_string"
                  }
                },
                {
                  "@type": "Person",
                  "@id": "https://www.mussawarhayat.site/#person",
                  "name": "Mussawar Hayat",
                  "url": "https://www.mussawarhayat.site",
                  "image": "https://www.mussawarhayat.site/my-pic.jpeg",
                  "hasOccupation": {
                    "@type": "Occupation",
                    "name": "Full-Stack Developer & Web3 Specialist"
                  },
                  "description": "Pakistan-based full-stack developer with 3+ years experience building high-performance web, mobile, and blockchain applications using React, Next.js, TypeScript, Node.js, and Solidity. Available for freelance work worldwide.",
                  "email": "zada38843@gmail.com",
                  "telephone": "+923358328468",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Attock",
                    "addressRegion": "Punjab",
                    "addressCountry": "PK"
                  },
                  "sameAs": [
                    "https://github.com/khanzada-web",
                    "https://www.linkedin.com/in/mussawar-hayat",
                    "https://twitter.com/Mussawar_Hayat",
                    "https://x.com/Mussawar_Hayat"
                  ],
                  "knowsAbout": [
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
                    "GDPR Compliance",
                    "Full-Stack Development",
                    "Server Components",
                    "Server Actions",
                    "SaaS Development",
                    "DeFi",
                    "Smart Contracts"
                  ],
                  "worksFor": {
                    "@type": "Organization",
                    "name": "Independent / Freelance"
                  },
                  "areaServed": [
                    { "@type": "Country", "name": "United States" },
                    { "@type": "Country", "name": "Canada" },
                    { "@type": "Country", "name": "United Kingdom" },
                    { "@type": "Country", "name": "Germany" },
                    { "@type": "Place", "name": "Worldwide" }
                  ],
                  "availableLanguage": ["English"]
                }
              ]
            }, null, 2)
          }}
        />
      </head>

      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          ${orbitron.variable}
          antialiased
        `}
      >
        <a
          href="#main-content"
          className="
            sr-only focus:not-sr-only focus:absolute
            focus:top-4 focus:left-4 z-50
            bg-blue-600 text-white px-4 py-2 rounded
            focus:outline-none focus:ring-2 focus:ring-white
          "
        >
          Skip to main content
        </a>

        {children}
      </body>
    </html>
  );
}
