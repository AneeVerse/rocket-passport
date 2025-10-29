'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  customBreadcrumbs?: BreadcrumbItem[];
}

const BreadcrumbSchema: React.FC<BreadcrumbSchemaProps> = ({ customBreadcrumbs }) => {
  const pathname = usePathname();
  
  const generateBreadcrumbs = () => {
    if (customBreadcrumbs) {
      return customBreadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.url
      }));
    }
    
    const pathSegments = pathname.split('/').filter(segment => segment !== '');
    const breadcrumbs = [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://rocket-pass.vercel.app"
      }
    ];
    
    // Custom names for specific routes
    const routeNames: { [key: string]: string } = {
      'blog': 'Blog',
      'studio': 'Studio',
      'services': 'Services',
      'about': 'About Us',
      'contact': 'Contact',
      'visa-services': 'Visa Services',
      'passport-services': 'Passport Services',
      'immigration-consultancy': 'Immigration Consultancy'
    };
    
    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const name = routeNames[segment] || segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
      breadcrumbs.push({
        "@type": "ListItem",
        "position": index + 2,
        "name": name,
        "item": `https://rocket-pass.vercel.app${currentPath}`
      });
    });
    
    return breadcrumbs;
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": generateBreadcrumbs()
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
    />
  );
};

export default BreadcrumbSchema;