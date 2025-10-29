import React from 'react';

const WebSiteSchema: React.FC = () => {
  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Rocket Pass - Visa Services & Immigration Consultancy",
    "alternateName": "Rocket Pass",
    "description": "Professional visa services, passport assistance, and immigration consultancy for study abroad, work visas, tourist visas, and business visas worldwide.",
    "url": "https://rocket-pass.vercel.app",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://rocket-pass.vercel.app/blog?search={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Rocket Pass",
      "logo": {
        "@type": "ImageObject",
        "url": "https://rocket-pass.vercel.app/images/nav-logo.png"
      }
    },
    "inLanguage": "en-US",
    "copyrightYear": new Date().getFullYear(),
    "copyrightHolder": {
      "@type": "Organization",
      "name": "Rocket Pass"
    },
    "mainEntity": {
      "@type": "Organization",
      "name": "Rocket Pass"
    },
    "about": {
      "@type": "Thing",
      "name": "Visa Services and Immigration Consultancy",
      "description": "Comprehensive visa processing, passport services, and immigration guidance for individuals and businesses seeking to travel, study, work, or migrate internationally."
    },
    "keywords": [
      "visa services",
      "passport assistance",
      "immigration consultancy",
      "study abroad",
      "work visa",
      "tourist visa",
      "business visa",
      "visa processing",
      "immigration guidance"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
    />
  );
};

export default WebSiteSchema;