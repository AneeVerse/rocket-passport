import { Metadata } from 'next'
import PPCMumbaiClient from './PPCMumbaiClient'

export const metadata: Metadata = {
  title: 'Police Clearance Certificate (PCC) Mumbai - Fast & Reliable Service',
  description: 'Get your Police Clearance Certificate in Mumbai quickly and hassle-free. Expert assistance for PCC applications with tatkal processing available.',
  alternates: {
    canonical: '/ppc-mumbai',
  },
  openGraph: {
    title: 'Police Clearance Certificate (PCC) Mumbai - Fast & Reliable Service',
    description: 'Get your Police Clearance Certificate in Mumbai quickly and hassle-free.',
    url: 'https://rocket-pass.vercel.app/ppc-mumbai',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Police Clearance Certificate (PCC) Mumbai - Fast & Reliable Service',
    description: 'Get your Police Clearance Certificate in Mumbai quickly and hassle-free.',
  }
}

export default function PPCMumbaiPage() {
  return <PPCMumbaiClient />
}