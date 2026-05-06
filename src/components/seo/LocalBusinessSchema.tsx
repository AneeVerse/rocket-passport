import React from 'react';

const LocalBusinessSchema: React.FC = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Rocket Pass",
    "description": "Professional visa services, passport assistance, and immigration consultancy for study abroad, work visas, tourist visas, and business visas worldwide.",
    "url": "https://rocket-pass.vercel.app",
    "telephone": "+91-378-78187",
    "email": "info@rocketpass.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "We Work, Reheja Platinum Road, off Andheri - Kurla Road, Sag Baug, Marol, Andheri East",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "postalCode": "400059",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "19.1136",
      "longitude": "72.8697"
    },
    "openingHoursSpecification": [
      {
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
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "15:00"
      }
    ],
    "priceRange": "₹₹",
    "paymentAccepted": [
      "Cash",
      "Credit Card",
      "UPI",
      "Bank Transfer",
      "Online Payment"
    ],
    "currenciesAccepted": "INR",
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "19.1136",
        "longitude": "72.8697"
      },
      "geoRadius": "50000"
    },
    "serviceArea": {
      "@type": "AdministrativeArea",
      "name": "Mumbai Metropolitan Region"
    },
    "hasMap": "https://maps.google.com/?q=WeWork+Reheja+Platinum+Andheri+East+Mumbai",
    "logo": {
      "@type": "ImageObject",
      "url": "https://rocket-pass.vercel.app/images/nav-logo.png"
    },
    "image": [
      "https://rocket-pass.vercel.app/images/nav-logo.png",
      "https://rocket-pass.vercel.app/images/footer-logo.png"
    ],
    "sameAs": [
      "https://www.instagram.com/rocketpass/",
      "https://www.linkedin.com/company/rocketpass",
      "https://www.youtube.com/@RocketPass"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "50"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  );
};

export default LocalBusinessSchema;