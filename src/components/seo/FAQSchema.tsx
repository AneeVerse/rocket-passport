import React from 'react';

interface FAQItem {
  question: string;
  answer: string | Array<{ _type: string; children?: Array<{ text: string }> }>;
}

interface FAQSchemaProps {
  faqData: FAQItem[];
  pageTitle?: string;
}

const FAQSchema: React.FC<FAQSchemaProps> = ({ faqData, pageTitle }) => {
  // Helper function to extract text from portable text or string
  const extractText = (content: string | Array<{ _type: string; children?: Array<{ text: string }> }>): string => {
    if (typeof content === 'string') {
      return content;
    }
    
    if (Array.isArray(content)) {
      return content
        .map(block => {
          if (block.children) {
            return block.children.map(child => child.text).join('');
          }
          return '';
        })
        .join(' ');
    }
    
    return '';
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": pageTitle ? `${pageTitle} - Frequently Asked Questions` : "Frequently Asked Questions - Rocket Pass",
    "description": "Common questions and answers about visa services, immigration processes, and passport assistance.",
    "url": "https://rocket-pass.vercel.app",
    "mainEntity": faqData.map((faq, index) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": extractText(faq.answer)
      },
      "position": index + 1
    })),
    "about": {
      "@type": "Organization",
      "name": "Rocket Pass"
    },
    "inLanguage": "en-US",
    "dateModified": new Date().toISOString()
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
};

export default FAQSchema;