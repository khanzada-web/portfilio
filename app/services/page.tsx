import { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/app/components/layout/Header'
import { Footer } from '@/app/components/layout/Footer'
import { BreadcrumbSchema } from '@/app/components/seo/BreadcrumbSchema'
import { FAQSchema } from '@/app/components/seo/FAQSchema'

export const metadata: Metadata = {
  title: 'Hire Next.js Full-Stack & Web3 Developer Services',
  description:
    'Hire a Next.js full-stack and Web3 developer for React, TypeScript, SaaS, Solidity smart contracts, DApps, React Native, and DevOps. Remote services for North America and Europe.',
  keywords: [
    'hire Next.js developer',
    'full-stack development services',
    'Web3 development services',
    'Solidity smart contract developer',
    'React SaaS developer',
    'freelance Next.js developer',
    'hire Web3 developer',
  ],
  openGraph: {
    title: 'Hire Next.js Full-Stack & Web3 Developer | Services',
    description:
      'Next.js, React, TypeScript, SaaS, Solidity, DApps, React Native, and DevOps. Hire Mussawar Hayat for remote full-stack work.',
    url: 'https://mussawarhayat.site/services',
    type: 'website',
    images: [
      {
        url: '/my-pic.jpeg',
        width: 1200,
        height: 630,
        alt: 'Mussawar Hayat — Full-Stack Developer Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hire Next.js Full-Stack & Web3 Developer | Mussawar Hayat',
    description:
      'Full-stack and Web3 development services — SaaS, DApps, APIs, and DevOps. Remote for North America and Europe.',
    images: ['/my-pic.jpeg'],
  },
  alternates: {
    canonical: '/services',
  },
}
