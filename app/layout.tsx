import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Orbitron } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";

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
    default: "Hire Next.js 16 Full-Stack & Web3 Developer | Mussawar Hayat",
    template: "%s | Mussawar Hayat",
  },
  description:
    "Hire Mussawar Hayat, Next.js 16 full-stack & Web3 developer for production SaaS, React/TypeScript apps, Solidity DApps, and Core Web Vitals optimization. Remote freelance for North America & Europe.",
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
    title: "Hire Next.js 16 Full-Stack & Web3 Developer | Mussawar Hayat",
    description:
      "Top-rated Next.js 16 full-stack Web3 developer for high-performance SaaS, React, TypeScript, Solidity DApps, and Core Web Vitals. Remote freelance for North America and Europe startups.",
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
    title: "Hire Top Next.js 16 Full-Stack Web3 Developer 2026 | Mussawar Hayat",
    description:
      "Expert Next.js 16 full-stack and Web3 developer building high-performance SaaS, web, mobile, and blockchain apps. Available for remote freelance projects worldwide.",
    images: ["/my-pic.jpeg"],
    creator: "@Mussawar_Hayat",
  },
  verification: {
    google: "sbASvcj9B1fGob3o9CIA4dV9OHwje27VXmnM23IaWJ8",
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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9383132900869188"
          strategy="lazyOnload"
          crossOrigin="anonymous"
        />
        <GoogleTagManager gtmId="GTM-P3GKJN4G" />
        {process.env.NEXT_PUBLIC_CRM_TRACKING_SRC && (
          <script
            async
            src={process.env.NEXT_PUBLIC_CRM_TRACKING_SRC}
            data-site-key={process.env.NEXT_PUBLIC_CRM_TRACKING_KEY}
          />
        )}
        <link rel="icon" type="image/webp" href="/logo.webp" />
        <link rel="icon" type="image/png" href="/logo-optimized.png" />
        <link rel="shortcut icon" href="/logo.webp" />
        <link rel="apple-touch-icon" href="/logo.webp" />
        <link rel="manifest" href="/site.webmanifest" />
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
