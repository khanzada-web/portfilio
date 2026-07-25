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
    default: "Mussawar Hayat | Full-Stack Developer — React, Next.js, Node.js & Web3",
    template: "%s | Mussawar Hayat",
  },

  description:
    "Full-stack developer with 3+ years building high-performance web & mobile apps using " +
    "React, Next.js, Node.js & TypeScript — plus Web3/blockchain integration (Solidity, DeFi, NFTs). " +
    "Available for freelance work worldwide.",

  keywords: [
    "full-stack developer",
    "Next.js developer",
    "React developer",
    "TypeScript developer",
    "Node.js developer",
    "Web3 developer",
    "Solidity developer",
    "blockchain developer",
    "React Native developer",
    "DevOps",
    "Mussawar Hayat",
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
    google: 'ca-pub-9383132900869188',
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.mussawarhayat.site",
    title: "Mussawar Hayat | Full-Stack Developer",
    description:
      "Building fast, scalable web & mobile apps with React, Next.js, Node.js & TypeScript. " +
      "Blockchain/Web3 integration available. 3+ years experience, open for freelance work worldwide.",
    siteName: "Mussawar Hayat — Full-Stack Developer Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mussawar Hayat — Full-Stack Developer Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Mussawar Hayat | Full-Stack Developer",
    description:
      "Full-stack developer building web, mobile & Web3 apps with React, Next.js, Node.js & Solidity. " +
      "Available for freelance projects worldwide.",
    images: ["/og-image.png"],
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

        {/* Semantic SEO: Full Entity Graph (Person + WebSite + ProfessionalService) */}
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
                  "name": "Mussawar Hayat | Full-Stack Developer",
                  "description": "Full-stack developer specializing in Next.js, TypeScript, Node.js, React Native, and Web3. Production web, mobile, and blockchain applications.",
                  "publisher": { "@id": "https://www.mussawarhayat.site/#person" },
                  "inLanguage": "en"
                },
                {
                  "@type": "Person",
                  "@id": "https://www.mussawarhayat.site/#person",
                  "name": "Mussawar Hayat",
                  "url": "https://www.mussawarhayat.site",
                  "image": "https://www.mussawarhayat.site/my-pic.jpeg",
                  "jobTitle": "Full-Stack Developer & Web3 Specialist",
                  "description": "Pakistan-based full-stack developer with 3+ years experience building high-performance web, mobile, and blockchain applications using React, Next.js, TypeScript, Node.js, and Solidity.",
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
                    "https://www.linkedin.com/in/mussawar-hayat-187768233",
                    "https://twitter.com/Mussawar_Hayat"
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
                    "Server Actions"
                  ],
                  "worksFor": {
                    "@type": "Organization",
                    "name": "Independent"
                  },
                  "areaServed": [
                    { "@type": "Country", "name": "United States" },
                    { "@type": "Country", "name": "Canada" },
                    { "@type": "Country", "name": "United Kingdom" },
                    { "@type": "Country", "name": "Germany" },
                    { "@type": "Place", "name": "Worldwide" }
                  ],
                  "availableLanguage": ["English"]
                },
                {
                  "@type": "ProfessionalService",
                  "@id": "https://www.mussawarhayat.site/#service",
                  "name": "Mussawar Hayat Full-Stack & Web3 Development",
                  "url": "https://www.mussawarhayat.site/services",
                  "provider": { "@id": "https://www.mussawarhayat.site/#person" },
                  "areaServed": ["North America", "Europe", "Worldwide"],
                  "serviceType": [
                    "Full-Stack Web Development",
                    "Next.js Development",
                    "TypeScript Development",
                    "Web3 Development",
                    "Smart Contract Development",
                    "Mobile App Development",
                    "DevOps & VPS Management",
                    "SaaS Development"
                  ],
                  "description": "End-to-end full-stack development services including Next.js applications, TypeScript backends, React Native mobile apps, Solidity smart contracts, and production DevOps on VPS."
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
