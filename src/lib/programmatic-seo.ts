import { CITIES, LocationInfo } from "./location-data";
import { INDUSTRIES_DATA, IndustryInfo } from "./industry-data";
import { RELATION_CLUSTERS, RelationMap } from "./seo-relations";



// Seedable deterministic random number generator to ensure static rendering is stable but content is unique per slug
export function getSeededRandom(seed: string) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = Math.imul(31, h) + seed.charCodeAt(i) | 0;
  }
  return function() {
    h = Math.imul(h ^ h >>> 16, 2246822507);
    h = Math.imul(h ^ h >>> 13, 3266489909);
    return ((h ^= h >>> 16) >>> 0) / 4294967296;
  };
}

export function pickWithSeed<T>(arr: T[], seedRandom: () => number): T {
  const idx = Math.floor(seedRandom() * arr.length);
  return arr[idx];
}

export interface PSEOContent {
  slug: string;
  type: "location" | "industry" | "technology";
  title: string;
  metaTitle: string;
  metaDesc: string;
  headerTitle: string;
  intro: string;
  primaryStat: { value: string; label: string };
  secondaryStat: { value: string; label: string };
  highlightsTitle: string;
  highlights: string[];
  features: { title: string; desc: string; icon?: string }[];
  faqs: { question: string; answer: string }[];
  breadcrumbs: { name: string; item: string }[];
  schemaType: "LocalBusiness" | "ProfessionalService" | "Service" | "SoftwareApplication";
  schemaDetails: Record<string, any>;
}

// Pre-defined Technology specifications
export interface TechnologyInfo {
  slug: string;
  name: string;
  shortDesc: string;
  technicalTitle: string;
  technicalPoints: string[];
  useCases: string[];
}

export const TECHNOLOGIES: Record<string, TechnologyInfo> = {
  "nextjs-development": {
    slug: "nextjs-development",
    name: "Next.js Development",
    shortDesc: "Enterprise-grade React Server Components and edge layouts optimized for sub-100ms LCP scores.",
    technicalTitle: "Modern Next.js Core Architecture",
    technicalPoints: [
      "React Server Components (RSC) to minimize client-side bundle sizes and secure API endpoints.",
      "Dynamic Routing and PPR (Partial Prerendering) for immediate layout paint times.",
      "Optimized Asset Pipeline utilizing Next.js Image caching and font preloading systems.",
      "Advanced edge middleware caching and route optimization hooks."
    ],
    useCases: [
      "High-speed marketing sites optimized for GEO and Google indexing.",
      "Complex React dashboards with secure server-action database interfaces.",
      "Dynamic e-commerce portals with instant server-rendered checkout grids."
    ]
  },
  "n8n-development": {
    slug: "n8n-development",
    name: "n8n Development",
    shortDesc: "Advanced fair-code visual automations connecting internal databases and APIs with secure self-hosted nodes.",
    technicalTitle: "Scalable n8n Node Pipelines",
    technicalPoints: [
      "Dynamic Webhook listening configurations with automatic retry protocols.",
      "Bespoke JavaScript/Python code injection nodes for complex data parsing.",
      "Secure credential stores integrating with HashiCorp Vault or environment parameters.",
      "Self-hosted Docker clusters executing high-volume operational workflows."
    ],
    useCases: [
      "Automated lead synchronization across multiple webhooks and CRM targets.",
      "Periodic database audit and cleaning routines executed overnight.",
      "Multi-channel notify alerts matching operations triggers in real time."
    ]
  },
  "openai-integration": {
    slug: "openai-integration",
    name: "OpenAI Integration",
    shortDesc: "Custom LLM integrations utilizing GPT-4o, function calling, and secure vector embeddings architectures.",
    technicalTitle: "State-of-the-Art OpenAI Orchestration",
    technicalPoints: [
      "Bespoke GPT-4o fine-tuning parameters to ensure alignment with corporate tone.",
      "Structured Outputs (JSON mode) ensuring programmatic database schema safety.",
      "Dynamic Tool Specifications (Function Calling) linking models directly to operational APIs.",
      "Semantic search vector indexing using text-embedding-3 metrics."
    ],
    useCases: [
      "Intelligent autonomous schedulers executing bookings automatically.",
      "Autonomous support agents answering ticketing systems with structured logs.",
      "High-speed documents parsing and categorizations for administrative pipelines."
    ]
  },
  "claude-integration": {
    slug: "claude-integration",
    name: "Claude Integration",
    shortDesc: "Advanced Claude 3.5 Sonnet orchestrations utilizing massive context windows and precise XML tags parsing.",
    technicalTitle: "High-Performance Anthropic Implementations",
    technicalPoints: [
      "Context-caching models minimizing API operational costs for massive documents.",
      "XML tag inputs structuring complex prompts to guarantee logical reasoning steps.",
      "Strict system instruction prompts for compliant advisory bots.",
      "Multi-modal prompt setups handling physical charts and blueprints documents."
    ],
    useCases: [
      "Automated legal and financial document review pipelines.",
      "Multi-page enterprise manual parsing and instant operational summaries.",
      "Cognitive customer assistants solving nuanced multi-step inquiries."
    ]
  }
};

export function parsePSEOSlug(slug: string): PSEOContent | null {
  const seedRandom = getSeededRandom(slug);

  // 1. Check for Technology slugs
  if (TECHNOLOGIES[slug]) {
    const tech = TECHNOLOGIES[slug];
    const techName = tech.name;

    const introOptions = [
      `We engineer custom high-speed systems leveraging ${techName} to achieve unmatched scalability, operations speed, and security.`,
      `Transform your digital stack with our professional ${techName} pipelines, designed specifically to reduce API latency and optimize output.`,
      `Deploy highly resilient, production-ready systems built on modern ${techName} standards. We customize every node and interface for maximum efficiency.`
    ];

    const intro = pickWithSeed(introOptions, seedRandom);
    const statsValue1 = pickWithSeed(["< 100ms", "99.9%", "4.8x", "< 500ms"], seedRandom);
    const statsLabel1 = statsValue1.includes("ms") ? "Average Server Latency" : statsValue1.includes("%") ? "System Uptime Guaranteed" : "Operations Speed Increase";
    
    const statsValue2 = pickWithSeed(["14 Days", "80%", "12 Hours", "3.2x"], seedRandom);
    const statsLabel2 = statsValue2.includes("Days") ? "Standard Deployment Time" : statsValue2.includes("%") ? "Reduction in Overheads" : statsValue2.includes("Hours") ? "Saved per Developer Weekly" : "Workflow Throughput Boost";

    const breadcrumbs = [
      { name: "Home", item: "https://flowworks.ai" },
      { name: "Technologies", item: "https://flowworks.ai/#technologies" },
      { name: techName, item: `https://flowworks.ai/${slug}` }
    ];

    const faqs = [
      {
        question: `Why choose FlowWorks for ${techName}?`,
        answer: `We specialize in core systems engineering. Instead of relying on rigid, pre-built frameworks, we write high-efficiency custom modules tailored to your API and database layers.`
      },
      {
        question: `How do you secure data handled by ${techName}?`,
        answer: `We implement enterprise-grade transit security, VPC networking isolation, and zero-retention storage nodes where required. All access credentials are encrypted at rest.`
      },
      {
        question: `What is the expected delivery timeline for a ${techName} project?`,
        answer: `Typical custom configurations deploy within ${statsValue2.includes("Days") ? statsValue2 : "14 to 30 days"}, including comprehensive staging checks, QA runs, and post-launch optimization.`
      }
    ];

    return {
      slug,
      type: "technology",
      title: `${techName} Services`,
      metaTitle: `Bespoke ${techName} Solutions & Integrations | FlowWorks AI`,
      metaDesc: `Optimize your technical infrastructure with professional ${techName}. We build secure, custom pipelines, custom web apps, and automated workflows.`,
      headerTitle: `Bespoke ${techName} Solutions`,
      intro,
      primaryStat: { value: statsValue1, label: statsLabel1 },
      secondaryStat: { value: statsValue2, label: statsLabel2 },
      highlightsTitle: "Architectural Advantages",
      highlights: tech.technicalPoints,
      features: tech.useCases.map((uc, index) => ({
        title: `Core Integration Pattern ${index + 1}`,
        desc: uc,
        icon: "Cpu"
      })),
      faqs,
      breadcrumbs,
      schemaType: "SoftwareApplication",
      schemaDetails: {
        applicationCategory: "BusinessApplication",
        operatingSystem: "Cloud-Based",
        name: techName,
        offers: {
          "@type": "Offer",
          "price": "Custom",
          "priceCurrency": "USD"
        }
      }
    };
  }

  // 2. Check for Location slugs (Format: [service-slug]-in-[city])
  const locationMatch = slug.match(/^(ai-automation-services|ai-agent-development|software-development)-in-([a-z-]+)$/);
  if (locationMatch) {
    const serviceSlug = locationMatch[1];
    const citySlug = locationMatch[2];
    const cityInfo = CITIES[citySlug];

    if (cityInfo) {
      const serviceName = serviceSlug === "ai-automation-services" 
        ? "AI Automation Services" 
        : serviceSlug === "ai-agent-development" 
        ? "AI Agent Development" 
        : "Software Development";

      const cityName = cityInfo.name;
      const stateName = cityInfo.parentState || "Texas";
      const fullLocationName = `${cityName}, ${cityInfo.code}`;

      const introOptions = [
        `FlowWorks AI delivers premium ${serviceName} in ${fullLocationName}, helping local enterprises streamline administrative overhead, upgrade software efficiency, and automate workflows.`,
        `Supercharge your operations with tailored ${serviceName} engineered for ${cityName} businesses. We connect custom API networks and deploy state-of-the-art AI tooling.`,
        `Establish operational dominance in ${cityName}, ${cityInfo.code} with high-fidelity ${serviceName.toLowerCase()} customized for your regional network capacity.`
      ];

      const intro = pickWithSeed(introOptions, seedRandom) + " " + cityInfo.intro;

      const statsValue1 = pickWithSeed(["280+ Hours", "96.4%", "12 Days", "42%"], seedRandom);
      const statsLabel1 = statsValue1.includes("Hours") ? "Saved Monthly per Client" : statsValue1.includes("%") ? "Task Automation Accuracy" : statsValue1.includes("Days") ? "Average Go-Live Timeline" : "Operational Cost Reduction";
      
      const statsValue2 = pickWithSeed(["$14K+", "24/7/365", "4.5x", "Zero"], seedRandom);
      const statsLabel2 = statsValue2.includes("$") ? "Saved in Monthly Admin Costs" : statsValue2.includes("24/7") ? "Operational Availability" : statsValue2.includes("x") ? "Increase in Lead Routing Speed" : "Manual System Latency";

      const breadcrumbs = [
        { name: "Home", item: "https://flowworks.ai" },
        { name: "Services", item: `https://flowworks.ai/services` },
        { name: `${cityName} ${serviceName}`, item: `https://flowworks.ai/${slug}` }
      ];

      const faqs = [
        {
          question: `Why choose FlowWorks AI for ${serviceName} in ${cityName}?`,
          answer: `We combine world-class systems engineering with dedicated local support. Whether your team is located near ${cityInfo.landmarks[0] || "the city center"} or elsewhere in ${stateName}, we deploy robust configurations tuned for your team.`
        },
        {
          question: `Can you integrate with other businesses in ${cityName}'s major sectors?`,
          answer: `Yes, our systems are built to sync with tools used in ${cityName}'s dominant industries, including ${cityInfo.industries.slice(0, 3).join(", ") || "technology and retail"} sectors.`
        },
        {
          question: `Do you provide hybrid or on-site deployments in ${fullLocationName}?`,
          answer: `We provide complete remote integration support globally, with optional on-site implementation workshops for qualified enterprise projects in the ${cityName} metro area.`
        }
      ];

      return {
        slug,
        type: "location",
        title: `${serviceName} in ${fullLocationName}`,
        metaTitle: `Premium ${serviceName} in ${fullLocationName} | FlowWorks AI`,
        metaDesc: `Accelerate your operations. FlowWorks AI provides custom ${serviceName.toLowerCase()} for businesses across ${cityName}, ${cityInfo.code}. Contact us today.`,
        headerTitle: `${serviceName} in ${cityName}`,
        intro,
        primaryStat: { value: statsValue1, label: statsLabel1 },
        secondaryStat: { value: statsValue2, label: statsLabel2 },
        highlightsTitle: "Serving the Regional Economy",
        highlights: [
          `Custom operational workflows engineered specifically for local ${cityInfo.industries.join(" and ")} firms.`,
          `Frictionless deployment modules compatible with teams located near ${cityInfo.landmarks.join(" or ")}.`,
          `Continuous maintenance checks and live status analytics tracking for ${cityName} entities.`
        ],
        features: cityInfo.industries.map((ind, idx) => ({
          title: `${ind} Systems`,
          desc: `Tailored automated routing, databases, and custom agents engineered to solve the specific bottlenecks of ${ind.toLowerCase()} operators in ${cityName}.`,
          icon: "Building"
        })),
        faqs,
        breadcrumbs,
        schemaType: "LocalBusiness",
        schemaDetails: {
          name: `FlowWorks AI - ${cityName} Branch`,
          address: {
            "@type": "PostalAddress",
            "addressLocality": cityName,
            "addressRegion": cityInfo.code,
            "addressCountry": "US"
          },
          telephone: "+1-800-555-0199",
          areaServed: {
            "@type": "City",
            "name": cityName
          }
        }
      };
    }
  }

  // 3. Check for Industry slugs (Format: [service-slug]-for-[industry])
  const industryMatch = slug.match(/^(ai-automation|ai-agents)-for-([a-z-]+)$/);
  if (industryMatch) {
    const serviceSlug = industryMatch[1];
    const industrySlug = industryMatch[2];
    const industryInfo = INDUSTRIES_DATA.find(ind => ind.slug === industrySlug);

    if (industryInfo) {
      const serviceName = serviceSlug === "ai-automation" ? "AI Automation" : "AI Agents";
      const indName = industryInfo.name;

      const introOptions = [
        `Deploy state-of-the-art ${serviceName} custom-built for ${indName} compliance, workflows, and database systems. We remove manual administrative blockers.`,
        `Tailored ${serviceName} for the ${indName} sector. Streamline scheduling, automate data intakes, and ensure complete data security with our secure nodes.`,
        `FlowWorks AI engineers highly reliable, performant ${serviceName.toLowerCase()} solutions to optimize operational throughput across the ${indName} industry.`
      ];

      const intro = pickWithSeed(introOptions, seedRandom) + " " + industryInfo.shortDesc;

      const statsValue1 = pickWithSeed(["38% saved", "99.2%", "10-14 days", "40% reduction"], seedRandom);
      const statsLabel1 = statsValue1.includes("saved") ? "Average Operational Costs Saved" : statsValue1.includes("%") ? "Data Processing Reliability" : statsValue1.includes("days") ? "Integration Setup Window" : "Administrative Errors Eliminated";

      const statsValue2 = pickWithSeed(["HIPAA Compliant", "SOC 2 Ready", "PCI-DSS Cryptography", "ISO-27001 Security"], seedRandom);
      const statsLabel2 = "Regulatory Compliance Level";

      const breadcrumbs = [
        { name: "Home", item: "https://flowworks.ai" },
        { name: "Industries", item: "https://flowworks.ai/industries" },
        { name: `${indName} ${serviceName}`, item: `https://flowworks.ai/${slug}` }
      ];

      const faqs = [
        {
          question: `How does FlowWorks address security in ${indName}?`,
          answer: `Security is our core priority. We integrate zero-retention parameters, AES-256 data node encryptions, and comply with standards such as ${statsValue2 === "HIPAA Compliant" ? "HIPAA" : "SOC 2 and standard security practices"}.`
        },
        {
          question: `What legacy tools in the ${indName} field can you integrate with?`,
          answer: `Our system features universal API hooks and custom code wrappers, allowing clean integrations with common ${indName} CRMs, cloud tools, and local databases.`
        },
        {
          question: `What are the typical use cases for ${serviceName} in this sector?`,
          answer: industryInfo.useCases.map(u => `${u.title}: ${u.desc}`).join(" ") || `Custom data mapping, automated customer interactions, and automatic report filing.`
        }
      ];

      return {
        slug,
        type: "industry",
        title: `${serviceName} for ${indName}`,
        metaTitle: `Professional ${serviceName} for ${indName} | FlowWorks AI`,
        metaDesc: `Streamline your ${indName.toLowerCase()} workflows. FlowWorks AI develops custom ${serviceName.toLowerCase()} systems to reduce admin bottlenecks and errors.`,
        headerTitle: `${serviceName} for ${indName}`,
        intro,
        primaryStat: { value: statsValue1, label: statsLabel1 },
        secondaryStat: { value: statsValue2, label: statsLabel2 },
        highlightsTitle: "Vertical Outcomes",
        highlights: [
          `Direct resolution of core challenges like: ${industryInfo.challenges.join(", ") || "manual processes"}.`,
          `Custom benefits package offering: ${industryInfo.benefits.join(", ") || "increased efficiency"}.`,
          `Configured workflow nodes matching standard ${indName} regulations.`
        ],
        features: industryInfo.useCases.map((uc) => ({
          title: uc.title,
          desc: uc.desc,
          icon: "Sparkles"
        })),
        faqs,
        breadcrumbs,
        schemaType: "Service",
        schemaDetails: {
          serviceType: `${serviceName} Integration`,
          provider: {
            "@type": "Organization",
            "name": "FlowWorks AI"
          },
          areaServed: "Worldwide"
        }
      };
    }
  }

  return null;
}

export function getRelationsForPSEOSlug(slug: string): RelationMap {
  if (slug === "nextjs-development") {
    return RELATION_CLUSTERS["custom-software-and-data"];
  }
  if (slug === "n8n-development" || slug === "openai-integration" || slug === "claude-integration") {
    return RELATION_CLUSTERS["ai-agents-and-ops"];
  }

  const industryMatch = slug.match(/^(ai-automation|ai-agents)-for-([a-z-]+)$/);
  if (industryMatch) {
    const industrySlug = industryMatch[2];
    for (const cluster of Object.values(RELATION_CLUSTERS)) {
      if (cluster.industries.includes(industrySlug)) {
        return cluster;
      }
    }
  }

  const locationMatch = slug.match(/^(ai-automation-services|ai-agent-development|software-development)-in-([a-z-]+)$/);
  if (locationMatch) {
    const serviceSlug = locationMatch[1];
    if (serviceSlug === "software-development") {
      return RELATION_CLUSTERS["custom-software-and-data"];
    }
  }

  return RELATION_CLUSTERS["ai-agents-and-ops"];
}


