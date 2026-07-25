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
  weight: ["700", "900"],   // headings only; remove others unless proven needed
  display: "swap",
});

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  // ── Titles ──────────────────────────────────────────────────────────────────
  title: {
    default: "Mussawar Hayat | Full-Stack Developer — React, Next.js, Node.js & Web3",
    template: "%s | Mussawar Hayat",
  },

  // ── Description (written for humans, not bots) ───────────────────────────
  description:
    "Full-stack developer with 3+ years building high-performance web & mobile apps using " +
    "React, Next.js, Node.js & TypeScript — plus Web3/blockchain integration (Solidity, DeFi, NFTs). " +
    "Available for freelance work worldwide.",

  // ── Keywords (low Google weight, but fine to keep concise) ───────────────
  keywords: [
    "full-stack developer",
    "React developer",
    "Next.js developer",
    "Node.js developer",
    "TypeScript developer",
    "React Native developer",
    "Flutter developer",
    "Web3 developer",
    "blockchain developer",
    "Solidity",
    "DeFi",
    "NFT development",
    "DevOps",
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
    title: "Mussawar Hayat | Full-Stack Developer",
    description:
      "Building fast, scalable web & mobile apps with React, Next.js, Node.js & TypeScript. " +
      "Blockchain/Web3 integration available. 3+ years experience, open for freelance work worldwide.",
    siteName: "Mussawar Hayat — Full-Stack Developer Portfolio",
    images: [
      {
        // ✅ Must be 1200×630 for proper social previews (Twitter, LinkedIn, Facebook)
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mussawar Hayat — Full-Stack Developer Portfolio",
      },
    ],
  },

  // ── Twitter / X Card ─────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Mussawar Hayat | Full-Stack Developer",
    description:
      "Full-stack developer building web, mobile & Web3 apps with React, Next.js, Node.js & Solidity. " +
      "Available for freelance projects worldwide.",
    images: ["/og-image.png"],
    creator: "@Mussawar_Hayat",
  },

  // ── Google Search Console verification ───────────────────────────────────
  // TODO: Replace with your actual code from Search Console → Settings → Ownership
  // verification: {
  //   google: "your-actual-code-here",
  // },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#2563eb" },
    { media: "(prefers-color-scheme: dark)",  color: "#1d4ed8" },
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
        
        {/* Favicons */}
        <link rel="icon"             type="image/png" href="/logo.png" />
        <link rel="shortcut icon"                     href="/logo.png" />
        <link rel="apple-touch-icon"                  href="/logo.png" />
        <link rel="manifest"                          href="/site.webmanifest" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Mussawar Hayat",
              "jobTitle": "Full-Stack Developer",
              "description": "Freelance full-stack developer building web and mobile applications with React, Next.js, Node.js, and TypeScript, with additional expertise in Web3 and blockchain integration.",
              "url": "https://www.mussawarhayat.site",
              "image": "https://www.mussawarhayat.site/my-pic.jpeg",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Attock",
                "addressCountry": "PK"
              },
              "sameAs": [
                "https://twitter.com/Mussawar_Hayat",
                "https://www.linkedin.com/in/mussawar-hayat-187768233",
                "https://github.com/khanzada-web"
              ],
              "knowsAbout": [
                "Full-Stack Development",
                "React",
                "Next.js",
                "Node.js",
                "TypeScript",
                "React Native",
                "Flutter",
                "Web3 Development",
                "Blockchain",
                "Solidity",
                "DevOps",
                "GDPR Compliance"
              ],
              "areaServed": [
                { "@type": "Country", "name": "United States" },
                { "@type": "Country", "name": "Canada" },
                { "@type": "Country", "name": "Germany" },
                { "@type": "Country", "name": "Worldwide" }
              ],
              "availableLanguage": "English"
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