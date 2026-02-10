import type { Metadata } from "next";
import { Geist, Geist_Mono, Orbitron } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Mussawar Hayat - Web3 Developer | Blockchain & React Expert",
    template: "%s | Mussawar Hayat - Web3 Developer"
  },
  description: "Expert Web3 Developer & Full Stack Engineer with 5+ years building decentralized applications. Specialized in React, Next.js, TypeScript, Solidity, smart contracts, and blockchain development. Available for freelance Web3 projects.",
  keywords: "Web3 developer, blockchain developer, React developer, Next.js developer, TypeScript, Solidity, smart contracts, DApp development, decentralized applications, DeFi development, NFT development, cryptocurrency, full stack developer, Mussawar Hayat, freelance Web3 developer, blockchain engineer, Ethereum developer, Web3 expert",
  authors: [{ name: "Mussawar Hayat" }],
  creator: "Mussawar Hayat",
  publisher: "Mussawar Hayat",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.mussawarhayat.site'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.mussawarhayat.site',
    title: 'Mussawar Hayat - Expert Web3 Developer | Blockchain & React Specialist',
    description: 'Professional Web3 Developer with 5+ years experience building decentralized applications. Expert in React, Next.js, TypeScript, Solidity, and smart contracts. Available for Web3 projects.',
    siteName: 'Mussawar Hayat - Web3 Developer Portfolio',
    images: [
      {
        url: '/logo-optimized.png',
        width: 300,
        height: 110,
        alt: 'Mussawar Hayat - Web3 Developer Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mussawar Hayat - Web3 Developer | Blockchain Expert',
    description: 'Expert Web3 Developer building decentralized applications with React, Next.js, TypeScript, and Solidity. 5+ years experience in blockchain development.',
    images: ['/logo-optimized.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <link rel="icon" type="image/png" href="/logo.png" />
        <link rel="shortcut icon" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Mussawar Hayat",
              "jobTitle": "Web3 Developer",
              "description": "Expert Web3 Developer with 5+ years experience building decentralized applications, smart contracts, and blockchain solutions.",
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
        className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} antialiased`}
      >
        <div className="skip-link">
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded">
            Skip to main content
          </a>
        </div>
        {children}
      </body>
    </html>
  );
}
