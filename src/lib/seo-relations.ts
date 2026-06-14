export interface RelatedResource {
  slug: string;
  name: string;
  href: string;
}

export interface RelationMap {
  services: string[];
  industries: string[];
  caseStudies: string[]; // matches cs.number like '01', '02', etc.
  blogPosts: string[];
  resources: RelatedResource[];
}

export const RELATION_CLUSTERS: Record<string, RelationMap> = {
  "ai-agents-and-ops": {
    services: [
      "ai-employees-as-a-service",
      "ai-customer-support-agents",
      "ai-sales-agents",
      "ai-voice-agents",
      "ai-appointment-setting",
      "ai-chatbot-development"
    ],
    industries: [
      "healthcare",
      "dental-clinics",
      "hospitals",
      "medical-practices",
      "recruiting-agencies",
      "staffing-companies",
      "ecommerce",
      "travel-tourism",
      "hospitality",
      "hotels",
      "restaurants",
      "plumbing",
      "hvac",
      "home-services",
      "education"
    ],
    caseStudies: ["01", "02", "04"],
    blogPosts: ["ai-agents-replacing-admin-tasks"],
    resources: [
      { slug: "pricing-guide", name: "AI Agent Pricing Guide", href: "/contact#pricing" },
      { slug: "ai-compliance-audit", name: "AI Telephony & HIPAA Compliance Audit", href: "/contact#compliance" },
      { slug: "roi-calculator", name: "Interactive AI ROI Calculator", href: "/services/ai-employees-as-a-service#roi-calculator-section" }
    ]
  },
  "custom-software-and-data": {
    services: [
      "custom-ai-solutions",
      "crm-automation",
      "workflow-automation",
      "business-process-automation",
      "website-design-and-development",
      "app-design-and-development",
      "ai-consulting"
    ],
    industries: [
      "real-estate",
      "construction",
      "law-firms",
      "accounting-firms",
      "financial-services",
      "insurance",
      "banking",
      "consulting-firms",
      "manufacturing",
      "logistics",
      "transportation",
      "automotive",
      "franchises",
      "saas-companies",
      "technology-companies",
      "startups",
      "energy-companies",
      "agriculture",
      "nonprofits",
      "government-contractors"
    ],
    caseStudies: ["01", "03", "04"],
    blogPosts: ["custom-software-vs-off-the-shelf-saas"],
    resources: [
      { slug: "pricing-guide", name: "Enterprise Custom Development Pricing", href: "/contact" },
      { slug: "integration-blueprint", name: "FlowWorks Cloud Integration Blueprint", href: "/contact" },
      { slug: "roi-calculator", name: "Interactive Software ROI Calculator", href: "/services/custom-ai-solutions#roi-calculator-section" }
    ]
  },
  "marketing-and-seo": {
    services: [
      "seo-services",
      "ai-lead-generation-automation",
      "website-design-and-development"
    ],
    industries: [
      "real-estate",
      "ecommerce",
      "retail",
      "marketing-agencies",
      "franchises",
      "startups",
      "law-firms",
      "beauty-salons",
      "spas",
      "wellness-businesses"
    ],
    caseStudies: ["01", "02", "03"],
    blogPosts: ["step-by-step-programmatic-seo"],
    resources: [
      { slug: "seo-ranking-checklist", name: "Generative Engine Optimization (GEO) Checklist", href: "/contact" },
      { slug: "pricing-guide", name: "Programmatic SEO Pricing Scale", href: "/contact" }
    ]
  }
};

export function getRelationsForSlug(slug: string): RelationMap {
  for (const cluster of Object.values(RELATION_CLUSTERS)) {
    if (
      cluster.services.includes(slug) ||
      cluster.industries.includes(slug) ||
      cluster.caseStudies.includes(slug) ||
      cluster.blogPosts.includes(slug)
    ) {
      return cluster;
    }
  }
  return RELATION_CLUSTERS["ai-agents-and-ops"];
}
