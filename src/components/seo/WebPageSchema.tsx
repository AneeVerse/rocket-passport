'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

interface WebPageSchemaProps {
  title?: string;
  description?: string;
  image?: string;
}

const WebPageSchema: React.FC<WebPageSchemaProps> = ({ 
  title, 
  description, 
  image 
}) => {
  const pathname = usePathname();
  
  // Generate dynamic title and description based on pathname
  const getPageInfo = () => {
    const baseUrl = 'https://rocket-pass.vercel.app';
    const currentUrl = `${baseUrl}${pathname}`;
    
    let pageTitle = title;
    let pageDescription = description;
    
    if (!pageTitle || !pageDescription) {
      switch (pathname) {
        case '/':
          pageTitle = 'Rocket Pass - Professional Visa Services & Immigration Consultancy';
          pageDescription = 'Expert visa processing, passport services, and immigration guidance for study abroad, work visas, tourist visas, and business visas worldwide.';
          break;
        case '/blog':
          pageTitle = 'Blog - Visa Tips & Immigration Guides | Rocket Pass';
          pageDescription = 'Latest visa tips, immigration guides, and travel advice from our expert consultants at Rocket Pass.';
          break;
        default:
          if (pathname.startsWith('/blog/')) {
            pageTitle = title || 'Blog Post | Rocket Pass';
            pageDescription = description || 'Read our latest insights on visa processing and immigration services.';
          } else {
            pageTitle = title || 'Rocket Pass - Visa Services';
            pageDescription = description || 'Professional visa and immigration services.';
          }
      }
    }
    
    return { pageTitle, pageDescription, currentUrl };
  };

  const { pageTitle, pageDescription, currentUrl } = getPageInfo();
  
  // Generate breadcrumbs based on pathname
  const generateBreadcrumbs = () => {
    const pathSegments = pathname.split('/').filter(segment => segment !== '');
    const breadcrumbs = [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://rocket-pass.vercel.app"
      }
    ];
    
    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const name = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
      breadcrumbs.push({
        "@type": "ListItem",
        "position": index + 2,
        "name": name,
        "item": `https://rocket-pass.vercel.app${currentPath}`
      });
    });
    
    return breadcrumbs;
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": pageTitle,
    "description": pageDescription,
    "url": currentUrl,
    "isPartOf": {
      "@type": "WebSite",
      "name": "Rocket Pass",
      "url": "https://rocket-pass.vercel.app"
    },
    "about": {
      "@type": "Organization",
      "name": "Rocket Pass"
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": image || "https://rocket-pass.vercel.app/images/nav-logo.png",
      "width": 1200,
      "height": 800
    },
    "mainContentOfPage": {
      "@type": "WebPageElement",
      "cssSelector": "article, section"
    },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", "h2", "h3"]
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": generateBreadcrumbs()
    },
    "datePublished": new Date().toISOString(),
    "dateModified": new Date().toISOString(),
    "inLanguage": "en-US",
    "significantLinks": [
      "https://rocket-pass.vercel.app/blog",
      "https://rocket-pass.vercel.app/#services",
      "https://rocket-pass.vercel.app/#about"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
    />
  );
};

export default WebPageSchema;