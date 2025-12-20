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
    default: "Mussawar Hayat - Web3 Developer",
    template: "%s | Mussawar Hayat"
  },
  description: "Full Stack Web3 Developer building decentralized applications with 5+ years experience. Specialized in React, Next.js, TypeScript, and blockchain development.",
  keywords: "Web3 developer, blockchain development, React, Next.js, TypeScript, smart contracts, DApp development, decentralized applications, full stack developer, Mussawar Hayat, cryptocurrency, DeFi, NFT",
  authors: [{ name: "Mussawar Hayat" }],
  creator: "Mussawar Hayat",
  publisher: "Mussawar Hayat",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://mussawar-hayat.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mussawar-hayat.com',
    title: 'Mussawar Hayat - Web3 Developer',
    description: 'Full Stack Web3 Developer building decentralized applications with 5+ years experience. Specialized in React, Next.js, TypeScript, and blockchain development.',
    siteName: 'Mussawar Hayat Portfolio',
    images: [
      {
        url: '/logo.png',
        width: 300,
        height: 110,
        alt: 'Mussawar Hayat Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mussawar Hayat - Web3 Developer',
    description: 'Full Stack Web3 Developer building decentralized applications with 5+ years experience. Specialized in React, Next.js, TypeScript, and blockchain development.',
    images: ['/logo.png'],
  },
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
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
