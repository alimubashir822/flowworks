import React from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface BreadcrumbItem {
  name: string;
  item: string;
}

interface SEOProps {
  type?: "Organization" | "LocalBusiness" | "Service" | "FAQ" | "Breadcrumb";
  name?: string;
  description?: string;
  url?: string;
  logo?: string;
  faqs?: FAQItem[];
  breadcrumbs?: BreadcrumbItem[];
  serviceName?: string;
  serviceProvider?: string;
  city?: string;
  state?: string;
}

export default function SEO({
  type = "Organization",
  name = "FlowWorks AI",
  description = "Premium AI Automation & Custom Software Development Agency",
  url = "https://flowworks.ai",
  logo = "https://flowworks.ai/logo.png",
  faqs = [],
  breadcrumbs = [],
  serviceName = "AI Automation Services",
  serviceProvider = "FlowWorks AI",
  city,
  state,
}: SEOProps) {
  let schema: any = null;

  if (type === "Organization") {
    schema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": name,
      "url": url,
      "logo": logo,
      "sameAs": [
        "https://twitter.com/neefox_ai",
        "https://www.linkedin.com/company/neefox-ai"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-800-555-0199",
        "contactType": "customer service",
        "areaServed": "US",
        "availableLanguage": "en"
      }
    };
  } else if (type === "LocalBusiness" && city && state) {
    schema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": `${name} - ${city}, ${state} AI Agency`,
      "url": `${url}/${city.toLowerCase().replace(/\s+/g, "-")}`,
      "image": logo,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": city,
        "addressRegion": state,
        "addressCountry": "US"
      },
      "telephone": "+1-800-555-0199",
      "priceRange": "$$$"
    };
  } else if (type === "Service") {
    schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": serviceName,
      "provider": {
        "@type": "Organization",
        "name": serviceProvider,
        "url": url
      },
      "description": description,
      "areaServed": {
        "@type": "Country",
        "name": "US"
      }
    };
  } else if (type === "FAQ" && faqs.length > 0) {
    schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
  } else if (type === "Breadcrumb" && breadcrumbs.length > 0) {
    schema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": crumb.name,
        "item": crumb.item
      }))
    };
  }

  if (!schema) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
