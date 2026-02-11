import { Metadata } from 'next'
import HomeClient from './HomeClient'

export const metadata: Metadata = {
  title: "Rocket Pass - Visa Services & Immigration Consultancy",
  description: "Expert visa processing, passport services, and immigration guidance for study abroad, work visas, tourist visas, and business visas worldwide.",
  alternates: {
    canonical: '/',
  },
}

export default function Home() {
  return <HomeClient />
}
