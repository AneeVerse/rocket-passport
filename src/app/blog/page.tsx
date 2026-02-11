import { Metadata } from 'next'
import BlogClient from './BlogClient'

export const metadata: Metadata = {
  title: 'Blog - Visa Tips & Immigration Guides | Rocket Pass',
  description: 'Latest visa tips, immigration guides, and travel advice from our expert consultants at Rocket Pass.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Blog - Visa Tips & Immigration Guides | Rocket Pass',
    description: 'Latest visa tips, immigration guides, and travel advice from our expert consultants.',
    url: 'https://rocket-pass.vercel.app/blog',
    type: 'website',
  }
}

export default function BlogPage() {
  return <BlogClient />
}