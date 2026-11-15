import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Orbitron } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { MotionProvider } from "./components/motion/MotionProvider";
import { SiteSchema } from "./components/seo/SiteSchema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  // Only small labels use the mono face; don't let it compete with the headline font.
  preload: false,
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
      "Next.js 16 full-stack & Web3 developer for high-performance SaaS, React, TypeScript, Solidity DApps, and Core Web Vitals. Remote freelance for North America and Europe startups.",
    siteName: "Mussawar Hayat",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire Next.js 16 Full-Stack & Web3 Developer | Mussawar Hayat",
    description:
      "Expert Next.js 16 full-stack and Web3 developer building high-performance SaaS, web, mobile, and blockchain apps. Available for remote freelance projects worldwide.",
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
    // suppressHydrationWarning: browser extensions (QuillBot, ColorZilla, …) inject attributes
    // into <html>/<body> before React loads. This only covers these two tags' own attributes.
    <html lang="en" dir="ltr" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <Script id="gtm-on-interaction" strategy="lazyOnload">
          {`
            (function() {
              var loaded = false;
              function loadGTM() {
                if (loaded) return;
                loaded = true;
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-P3GKJN4G');
              }
              ['click','scroll','keydown','touchstart'].forEach(function(ev) {
                document.addEventListener(ev, loadGTM, { capture: true, passive: true, once: true });
              });
            })();
          `}
        </Script>
        {/* favicon.ico and apple-icon.png live in app/ and are linked by Next.js automatically. */}
        <link rel="manifest" href="/site.webmanifest" />
        {/* Plain link (not metadata.alternates): pages that set their own canonical replace
            `alternates` wholesale, which used to drop the feed link from every page. */}
        <link rel="alternate" type="application/rss+xml" title="Mussawar Hayat — Blog" href="https://mussawarhayat.site/feed.xml" />
      </head>
      <body
        suppressHydrationWarning
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
        <SiteSchema />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
