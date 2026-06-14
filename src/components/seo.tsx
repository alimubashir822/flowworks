import React from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface BreadcrumbItem {
  name: string;
  item: string;
}

interface TeamMember {
  name: string;
  role: string;
  desc: string;
}

interface ReviewItem {
  authorName: string;
  reviewBody: string;
  itemReviewedName: string;
  ratingValue: number;
}

interface SEOProps {
  type?: "Organization" | "LocalBusiness" | "Service" | "FAQ" | "Breadcrumb" | "Article" | "WebSite" | "Person" | "Review";
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
  articleTitle?: string;
  articleImage?: string;
  datePublished?: string;
  authorName?: string;
  
  // Extended fields for complete schema integration
  teamMembers?: TeamMember[];
  review?: ReviewItem;
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
  articleTitle,
  articleImage,
  datePublished,
  authorName,
  teamMembers = [],
  review,
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
        "https://twitter.com/flowworks_ai",
        "https://www.linkedin.com/company/flowworks-ai"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-800-555-0199",
        "contactType": "customer service",
        "areaServed": "US",
        "availableLanguage": "en"
      }
    };
  } else if (type === "LocalBusiness") {
    // If city/state is provided and url is not root, this is programmatic landing page LocalBusiness
    if (city && state && city !== "San Francisco") {
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
    } else {
      // General Corporate headquarters LocalBusiness
      schema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": name,
        "url": url,
        "image": logo,
        "telephone": "+1-800-555-0199",
        "email": "hello@flowworks.ai",
        "priceRange": "$$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "100 Pine Street",
          "addressLocality": "San Francisco",
          "addressRegion": "CA",
          "postalCode": "94111",
          "addressCountry": "US"
        },
        "openingHoursSpecification": {
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
        "sameAs": [
          "https://twitter.com/flowworks_ai",
          "https://www.linkedin.com/company/flowworks-ai"
        ]
      };
    }
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
  } else if (type === "Article" && articleTitle) {
    schema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": articleTitle,
      "image": articleImage,
      "datePublished": datePublished,
      "description": description,
      "author": {
        "@type": "Person",
        "name": authorName || "FlowWorks AI Team"
      },
      "publisher": {
        "@type": "Organization",
        "name": "FlowWorks AI",
        "logo": {
          "@type": "ImageObject",
          "url": logo
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": url
      }
    };
  } else if (type === "WebSite") {
    schema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": name,
      "url": url,
      "potentialAction": {
        "@type": "SearchAction",
        "target": `${url}/blog?search={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    };
  } else if (type === "Person" && teamMembers.length > 0) {
    schema = {
      "@context": "https://schema.org",
      "@graph": teamMembers.map((member) => ({
        "@type": "Person",
        "name": member.name,
        "jobTitle": member.role,
        "description": member.desc,
        "worksFor": {
          "@type": "Organization",
          "name": "FlowWorks AI",
          "url": "https://flowworks.ai"
        }
      }))
    };
  } else if (type === "Review" && review) {
    schema = {
      "@context": "https://schema.org",
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.authorName
      },
      "reviewBody": review.reviewBody,
      "itemReviewed": {
        "@type": "Service",
        "name": review.itemReviewedName,
        "provider": {
          "@type": "Organization",
          "name": "FlowWorks AI",
          "url": "https://flowworks.ai"
        }
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.ratingValue.toString(),
        "bestRating": "5"
      }
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
