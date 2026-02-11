import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import OrganizationSchema from "@/components/seo/OrganizationSchema";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";
import WebSiteSchema from "@/components/seo/WebSiteSchema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rocket-pass.vercel.app"),
  title: {
    default: "Rocket Pass - Visa Services & Immigration Consultancy",
    template: "%s | Rocket Pass"
  },
  description: "Expert visa processing, passport services, and immigration guidance for study abroad, work visas, tourist visas, and business visas worldwide.",
  keywords: ["visa services", "passport assistance", "immigration consultancy", "study abroad", "work visa", "tourist visa", "business visa", "tatkal passport", "PCC Mumbai"],
  authors: [{ name: "Rocket Pass Team" }],
  creator: "Rocket Pass",
  publisher: "Rocket Pass",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/images/nav-logo.png" },
      { url: "/favicon.ico" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Rocket Pass - Visa Services & Immigration Consultancy",
    description: "Professional visa services and immigration consultancy worldwide.",
    url: "https://rocket-pass.vercel.app",
    siteName: "Rocket Pass",
    images: [
      {
        url: "/images/nav-logo.png",
        width: 1200,
        height: 630,
        alt: "Rocket Pass Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rocket Pass - Visa Services & Immigration Consultancy",
    description: "Professional visa services and immigration consultancy worldwide.",
    images: ["/images/nav-logo.png"],
    creator: "@rocketpass",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-LKH7KT8FW6"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-LKH7KT8FW6');
            `,
          }}
        />
        <OrganizationSchema />
        <LocalBusinessSchema />
        <WebSiteSchema />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
