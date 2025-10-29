import React from 'react';

const LocalBusinessSchema: React.FC = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Rocket Pass",
    "description": "Professional visa services, passport assistance, and immigration consultancy for study abroad, work visas, tourist visas, and business visas worldwide.",
    "url": "https://rocket-pass.vercel.app",
    "telephone": "+91-91527-55529",
    "email": "info@rocketpass.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Office No. 03, Plot No. 45, near HP Petrol Pump, Seawoods West, Sector 44",
      "addressLocality": "Seawoods, Navi Mumbai",
      "addressRegion": "Maharashtra",
      "postalCode": "400706",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "19.0330",
      "longitude": "73.0297"
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
        "latitude": "19.0330",
        "longitude": "73.0297"
      },
      "geoRadius": "50000"
    },
    "serviceArea": {
      "@type": "AdministrativeArea",
      "name": "Mumbai Metropolitan Region"
    },
    "hasMap": "https://maps.google.com/?q=Seawoods+West+Navi+Mumbai",
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
      "ratingValue": "4.8",
      "reviewCount": "150"
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