import type { Metadata } from "next";
import { Geist, Geist_Mono, Orbitron } from "next/font/google";
import "./globals.css";

// ─── Fonts ────────────────────────────────────────────────────────────────────
// display:"swap" prevents invisible text while fonts load (improves CLS / LCP)

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
  weight: ["700", "900"],   // headings only; remove others unless proven needed
  display: "swap",
});

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  // ── Titles ──────────────────────────────────────────────────────────────────
  title: {
    default: "Mussawar Hayat — Web3 & Blockchain Developer",
    template: "%s | Mussawar Hayat",
  },

  // ── Description (written for humans, not bots) ───────────────────────────
  description:
    "I build fast, secure Web3 apps — DApps, DeFi platforms, and smart contracts. " +
    "3+ years with React, Next.js, TypeScript & Solidity. Open to freelance work worldwide.",

  // ── Keywords (low Google weight, but fine to keep concise) ───────────────
  keywords: [
    "Web3 developer",
    "blockchain developer",
    "React developer",
    "Next.js developer",
    "Solidity",
    "smart contracts",
    "DApp development",
    "DeFi",
    "NFT development",
    "Ethereum developer",
    "Mussawar Hayat",
  ],

  // ── Authorship ───────────────────────────────────────────────────────────
  authors: [{ name: "Mussawar Hayat", url: "https://www.mussawarhayat.site" }],
  creator: "Mussawar Hayat",
  publisher: "Mussawar Hayat",

  // ── Canonical & base URL ─────────────────────────────────────────────────
  metadataBase: new URL("https://www.mussawarhayat.site"),
  alternates: {
    canonical: "/",
  },

  // ── Robots ───────────────────────────────────────────────────────────────
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

  // ── Theme colour (Next.js way — removes need for manual <meta> tags) ─────
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#2563eb" },
    { media: "(prefers-color-scheme: dark)",  color: "#1d4ed8" },
  ],

  // ── Format detection ─────────────────────────────────────────────────────
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // ── Google AdSense verification ──────────────────────────────────────────
  verification: {
    google: 'ca-pub-9383132900869188',
  },

  // ── Open Graph ───────────────────────────────────────────────────────────
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.mussawarhayat.site",
    title: "Mussawar Hayat — Web3 & Blockchain Developer",
    description:
      "I build fast, secure Web3 apps — DApps, DeFi platforms, and smart contracts. " +
      "3+ years with React, Next.js, TypeScript & Solidity.",
    siteName: "Mussawar Hayat — Web3 Developer Portfolio",
    images: [
      {
        // ✅ Must be 1200×630 for proper social previews (Twitter, LinkedIn, Facebook)
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mussawar Hayat — Web3 Developer Portfolio",
      },
    ],
  },

  // ── Twitter / X Card ─────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Mussawar Hayat — Web3 & Blockchain Developer",
    description:
      "Building DApps, DeFi platforms, and smart contracts with React, Next.js & Solidity. " +
      "3+ years experience. Open to freelance.",
    images: ["/og-image.png"],
    // creator: "@your_twitter_handle", // ← add when you have a Twitter handle
  },

  // ── Google Search Console verification ───────────────────────────────────
  // TODO: Replace with your actual code from Search Console → Settings → Ownership
  // verification: {
  //   google: "your-actual-code-here",
  // },
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
        
        {/* Favicons */}
        <link rel="icon"             type="image/png" href="/logo.png" />
        <link rel="shortcut icon"                     href="/logo.png" />
        <link rel="apple-touch-icon"                  href="/logo.png" />
        <link rel="manifest"                          href="/site.webmanifest" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Mussawar Hayat",
              "jobTitle": "Web3 Developer",
              "description": "Expert Web3 Developer with 3+ years experience building decentralized applications, smart contracts, and blockchain solutions.",
              "url": "https://www.mussawarhayat.site",
              "image": "https://www.mussawarhayat.site/logo.png",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "PK",
                "addressRegion": "Punjab",
                "addressLocality": "Lahore"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "31.5204",
                "longitude": "74.3587"
              },
              "sameAs": [
                "https://github.com/mussawarhayat",
                "https://linkedin.com/in/mussawarhayat",
                "https://twitter.com/mussawarhayat"
              ],
              "knowsAbout": [
                "Web3 Development",
                "Blockchain",
                "React",
                "Next.js",
                "TypeScript",
                "Solidity",
                "Smart Contracts",
                "DeFi",
                "NFT Development"
              ],
              "offers": {
                "@type": "Service",
                "serviceType": "Web3 Development Services",
                "description": "Full-stack Web3 development including smart contracts, DApps, and blockchain solutions",
                "areaServed": "Worldwide",
                "availableChannel": {
                  "@type": "ServiceChannel",
                  "serviceUrl": "https://www.mussawarhayat.site",
                  "servicePhone": "+92-300-0000000"
                }
              }
            })
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
        {/* Accessibility: lets keyboard users skip straight to page content */}
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
        
        {/* Vercel Speed Insights - uncomment after installing @vercel/speed-insights */}
        {/* <SpeedInsights /> */}
      </body>
    </html>
  );
}