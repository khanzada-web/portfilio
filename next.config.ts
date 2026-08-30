import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Production Docker / VPS: minimal runtime tree via next build
  output: "standalone",

  // Security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
          },
          {
            key: "Cross-Origin-Resource-Policy",
            value: "same-origin",
          },
        ],
      },
    ];
  },

  // Image optimization: WebP only until Next.js re-enables AVIF after the
  // August 2026 libheif / sharp advisory (patched Next disables AVIF decode).
  images: {
    formats: ["image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mussawarhayat.site",
        port: "",
        pathname: "/**",
      },
    ],
  },

  // Compression
  compress: true,

  // Performance optimizations
  poweredByHeader: false,

  // Experimental features for better performance
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
