import type { NextConfig } from "next";

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
    optimizePackageImports: [
      "framer-motion",
      "react-icons",
      "react-icons/fa",
      "react-icons/si",
      "react-icons/md",
      "@react-three/fiber",
      "@react-three/drei",
      "three",
    ],
  },
};

export default nextConfig;
