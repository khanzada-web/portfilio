import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 301 redirects for deleted pages
  async redirects() {
    return [
      { source: '/web3-development', destination: '/services', permanent: true },
      { source: '/defi-development', destination: '/services', permanent: true },
      { source: '/nft-marketplace-development', destination: '/services', permanent: true },
      { source: '/smart-contract-development', destination: '/services', permanent: true },
    ];
  },

  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
        ],
      },
    ];
  },
  
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.mussawarhayat.site',
        port: '',
        pathname: '/**',
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
