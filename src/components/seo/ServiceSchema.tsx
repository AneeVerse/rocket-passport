import React from 'react';

interface ServiceSchemaProps {
  serviceName: string;
  description: string;
  serviceType?: string;
  price?: {
    amount: number;
    currency: string;
  };
  duration?: string;
  availability?: string;
  areaServed?: string[];
  provider?: {
    name: string;
    url?: string;
  };
  category?: string;
  url?: string;
}

const ServiceSchema: React.FC<ServiceSchemaProps> = ({
  serviceName,
  description,
  serviceType = "Professional Service",
  price,
  duration,
  availability = "Mo-Fr 09:00-18:00",
  areaServed = ["India", "United States", "Canada", "United Kingdom", "Australia"],
  provider,
  category = "Visa Services",
  url
}) => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": description,
    "serviceType": serviceType,
    "category": category,
    "provider": {
      "@type": "Organization",
      "name": provider?.name || "Rocket Pass",
      "url": provider?.url || "https://rocket-pass.vercel.app",
      "logo": {
        "@type": "ImageObject",
        "url": "https://rocket-pass.vercel.app/images/nav-logo.png"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9876543210",
        "contactType": "customer service",
        "email": "info@rocketpass.com",
        "availableLanguage": ["English", "Hindi"]
      }
    },
    "areaServed": areaServed.map(area => ({
      "@type": "Country",
      "name": area
    })),
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": url || "https://rocket-pass.vercel.app",
      "serviceSmsNumber": "+91-9876543210",
      "servicePhone": "+91-9876543210"
    },
    "hoursAvailable": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday", 
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    ...(price && {
      "offers": {
        "@type": "Offer",
        "price": price.amount,
        "priceCurrency": price.currency,
        "availability": "https://schema.org/InStock",
        "validFrom": new Date().toISOString(),
        "priceValidUntil": new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString() // 1 year from now
      }
    }),
    ...(duration && {
      "serviceOutput": {
        "@type": "Thing",
        "name": `${serviceName} Completion`,
        "description": `Service completion within ${duration}`
      }
    }),
    "audience": {
      "@type": "Audience",
      "audienceType": "General Public",
      "geographicArea": areaServed
    },
    "brand": {
      "@type": "Brand",
      "name": "Rocket Pass"
    },
    "isRelatedTo": [
      {
        "@type": "Service",
        "name": "Visa Processing"
      },
      {
        "@type": "Service", 
        "name": "Immigration Consultancy"
      },
      {
        "@type": "Service",
        "name": "Passport Services"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Rocket Pass Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": serviceName
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
    />
  );
};

export default ServiceSchema;