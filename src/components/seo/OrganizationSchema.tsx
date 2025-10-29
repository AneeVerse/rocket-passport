import React from 'react';

const OrganizationSchema: React.FC = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Rocket Pass",
    "alternateName": "Rocket Pass Visa Services",
    "description": "Professional visa services, passport assistance, and immigration consultancy for study abroad, work visas, tourist visas, and business visas worldwide.",
    "url": "https://rocket-pass.vercel.app",
    "logo": {
      "@type": "ImageObject",
      "url": "https://rocket-pass.vercel.app/images/nav-logo.png",
      "width": 200,
      "height": 60
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Office No. 03, Plot No. 45, near HP Petrol Pump, Seawoods West, Sector 44",
      "addressLocality": "Seawoods, Navi Mumbai",
      "addressRegion": "Maharashtra",
      "postalCode": "400706",
      "addressCountry": "IN"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-91527-55529",
        "contactType": "customer service",
        "availableLanguage": ["English", "Hindi"],
        "areaServed": "IN"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/rocketpass/",
      "https://www.linkedin.com/company/rocketpass",
      "https://www.youtube.com/@RocketPass"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Visa and Immigration Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Study Abroad Visa Services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Work Visa Assistance"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Tourist Visa Processing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Business Visa Services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Passport Services"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    },
    "foundingDate": "2020",
    "numberOfEmployees": "25-50",
    "slogan": "Your Gateway to Global Opportunities"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
};

export default OrganizationSchema;