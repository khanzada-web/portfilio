import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== "production";

/**
 * Static Content-Security-Policy. A nonce-based policy would be stricter, but it forces
 * every page to render dynamically (no static HTML / CDN cache), so inline scripts are
 * allowed and everything else is locked to this origin plus Google Tag Manager/Analytics.
 * If a tag added inside GTM loads from a new domain, add that domain here.
 */
const GOOGLE = "https://www.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://*.g.doubleclick.net";
const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} https://www.googletagmanager.com`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  `connect-src 'self' ${GOOGLE}${isDev ? " ws: wss:" : ""}`,
  "frame-src https://www.googletagmanager.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  ...(isDev ? [] : ["upgrade-insecure-requests"]),
].join("; ");

const nextConfig: NextConfig = {
  // Production Docker / VPS: minimal runtime tree via next build.
  // Disabled on Vercel: Next 16.3 + Vercel adapter skips next-server.js.nft.json,
  // which standalone output requires (vercel/next.js#96646).
  output: process.env.VERCEL ? undefined : "standalone",

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Content-Security-Policy", value: contentSecurityPolicy },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
        ],
      },
    ];
  },

  images: {
    formats: ["image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "mussawarhayat.site", port: "", pathname: "/**" },
      { protocol: "https", hostname: "images.unsplash.com", port: "", pathname: "/**" },
    ],
  },

  compress: true,
  poweredByHeader: false,

  experimental: {
    optimizePackageImports: ["framer-motion", "react-icons/fi"],
  },
};

export default nextConfig;
