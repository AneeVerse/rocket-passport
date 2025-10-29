import React from 'react';

interface BlogSchemaProps {
  title: string;
  description: string;
  slug: string;
  author?: {
    name: string;
    image?: string;
  };
  publishedAt: string;
  updatedAt?: string;
  mainImage?: string;
  estimatedReadingTime?: number;
  categories?: string[];
  tags?: string[];
  excerpt?: string;
}

const BlogSchema: React.FC<BlogSchemaProps> = ({
  title,
  description,
  slug,
  author,
  publishedAt,
  updatedAt,
  mainImage,
  estimatedReadingTime = 5,
  categories = [],
  tags = [],
  excerpt
}) => {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description || excerpt,
    "url": `https://rocket-pass.vercel.app/blog/${slug}`,
    "datePublished": publishedAt,
    "dateModified": updatedAt || publishedAt,
    "author": {
      "@type": "Person",
      "name": author?.name || "Rocket Pass Team",
      "url": "https://rocket-pass.vercel.app/about",
      ...(author?.image && {
        "image": {
          "@type": "ImageObject",
          "url": author.image
        }
      })
    },
    "publisher": {
      "@type": "Organization",
      "name": "Rocket Pass",
      "logo": {
        "@type": "ImageObject",
        "url": "https://rocket-pass.vercel.app/images/nav-logo.png",
        "width": 200,
        "height": 60
      },
      "url": "https://rocket-pass.vercel.app"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://rocket-pass.vercel.app/blog/${slug}`
    },
    ...(mainImage && {
      "image": {
        "@type": "ImageObject",
        "url": mainImage,
        "width": 1200,
        "height": 630
      }
    }),
    "articleSection": categories[0] || "Visa Services",
    "keywords": tags.length > 0 ? tags.join(", ") : "visa, immigration, passport, travel",
    "wordCount": estimatedReadingTime * 200, // Approximate word count
    "timeRequired": `PT${estimatedReadingTime}M`,
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "copyrightYear": new Date(publishedAt).getFullYear(),
    "copyrightHolder": {
      "@type": "Organization",
      "name": "Rocket Pass"
    },
    "license": "https://creativecommons.org/licenses/by/4.0/",
    "about": {
      "@type": "Thing",
      "name": "Visa and Immigration Services",
      "description": "Information and guidance about visa processing, immigration procedures, and travel documentation."
    },
    "mentions": [
      {
        "@type": "Organization",
        "name": "Rocket Pass"
      }
    ],
    "isPartOf": {
      "@type": "Blog",
      "name": "Rocket Pass Blog",
      "url": "https://rocket-pass.vercel.app/blog"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
    />
  );
};

export default BlogSchema;