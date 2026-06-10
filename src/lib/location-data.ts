export interface LocationInfo {
  name: string;
  code: string;
  slug: string;
  type: "state" | "city";
  parentState?: string;
  industries: string[];
  landmarks: string[];
  intro: string;
}

export const STATES: Record<string, LocationInfo> = {
  texas: {
    name: "Texas",
    code: "TX",
    slug: "texas",
    type: "state",
    industries: ["Energy", "Technology", "Healthcare", "Real Estate", "Logistics"],
    landmarks: ["Silicon Hills", "Space Center Houston", "The Alamo"],
    intro: "Texas enterprises are scaling faster than ever. From Austin's booming tech hub to Houston's enterprise giants, FlowWorks AI integrates premium AI Agents and custom software architectures to supercharge operation efficiency, streamline customer support, and automate high-scale data workflows.",
  },
  california: {
    name: "California",
    code: "CA",
    slug: "california",
    type: "state",
    industries: ["SaaS & Tech", "Entertainment & Media", "Agriculture", "Biotech", "E-commerce"],
    landmarks: ["Silicon Valley", "Golden Gate Bridge", "Hollywood"],
    intro: "As the world's innovation capital, California demands premium, forward-thinking software solutions. FlowWorks AI delivers high-performance custom applications, advanced LLM workflows, and next-generation mobile applications for modern startups and scaling enterprises across the Golden State.",
  },
  florida: {
    name: "Florida",
    code: "FL",
    slug: "florida",
    type: "state",
    industries: ["Tourism & Hospitality", "Real Estate & Construction", "Finance", "Healthcare"],
    landmarks: ["Miami Beach", "Space Coast", "Everglades"],
    intro: "Florida's business landscape is expanding rapidly. FlowWorks AI works with companies across the Sunshine State to build tailored workflow automations, custom e-commerce applications, and high-performance lead generation funnels.",
  },
  "new-york": {
    name: "New York",
    code: "NY",
    slug: "new-york",
    type: "state",
    industries: ["Finance & FinTech", "Real Estate", "Media & Advertising", "Retail"],
    landmarks: ["Wall Street", "Empire State Building", "Niagara Falls"],
    intro: "In the fast-paced markets of New York, efficiency is everything. FlowWorks AI designs custom enterprise architectures, real-time analytics platforms, and automated operations pipelines that keep NY firms ahead of the competition.",
  },
  illinois: {
    name: "Illinois",
    code: "IL",
    slug: "illinois",
    type: "state",
    industries: ["Manufacturing", "Logistics & Distribution", "Professional Services", "Healthcare"],
    landmarks: ["Magnificent Mile", "Willis Tower", "Navy Pier"],
    intro: "Illinois is a cornerstone of American logistics and manufacturing. FlowWorks AI empowers local logistics, supply chains, and industrial businesses with automated inventory pipelines, CRM sync systems, and intelligent custom reporting suites.",
  },
  georgia: {
    name: "Georgia",
    code: "GA",
    slug: "georgia",
    type: "state",
    industries: ["Fintech", "Logistics", "Entertainment", "Healthcare IT"],
    landmarks: ["Centennial Olympic Park", "Stone Mountain", "Georgia Aquarium"],
    intro: "Georgia has established itself as a massive engine for technology and logistics in the South. FlowWorks AI helps GA businesses automate payment gateways, orchestrate complex customer communication flows, and engineer custom web platforms.",
  },
  arizona: {
    name: "Arizona",
    code: "AZ",
    slug: "arizona",
    type: "state",
    industries: ["Semiconductors", "Defense & Aerospace", "Healthcare", "Real Estate"],
    landmarks: ["Grand Canyon", "Camelback Mountain", "Sonoran Desert"],
    intro: "Arizona's tech corridor is scaling rapidly. FlowWorks AI builds robust custom software, automated operations frameworks, and premium conversion funnels for companies leading the desert tech revolution.",
  },
  washington: {
    name: "Washington",
    code: "WA",
    slug: "washington",
    type: "state",
    industries: ["Cloud Computing", "Aerospace", "E-commerce", "Clean Tech"],
    landmarks: ["Space Needle", "Mount Rainier", "Puget Sound"],
    intro: "Washington is synonymous with cloud infrastructure and engineering scale. FlowWorks AI provides premium software development, custom API integrations, and robust database engines that keep WA enterprises operating at maximum capacity.",
  },
  "north-carolina": {
    name: "North Carolina",
    code: "NC",
    slug: "north-carolina",
    type: "state",
    industries: ["Biotech", "Banking", "Information Technology", "Furniture Manufacturing"],
    landmarks: ["Research Triangle Park", "Outer Banks", "Biltmore Estate"],
    intro: "North Carolina's Research Triangle is a hotbed of technical innovation. FlowWorks AI supports NC organizations with custom web applications, advanced data security protocols, and custom AI agent setups.",
  },
  virginia: {
    name: "Virginia",
    code: "VA",
    slug: "virginia",
    type: "state",
    industries: ["Defense & Government Contracting", "Data Centers", "Healthcare", "Professional Services"],
    landmarks: ["Arlington National Cemetery", "Shenandoah Valley", "Virginia Beach"],
    intro: "Virginia handles a massive share of global internet traffic and high-security defense workflows. FlowWorks AI offers high-performing, secure custom web systems and automated workflow pipelines engineered for ultimate dependability.",
  },
};

export const CITIES: Record<string, LocationInfo> = {
  houston: {
    name: "Houston",
    code: "TX",
    slug: "houston",
    type: "city",
    parentState: "Texas",
    industries: ["Energy & Utilities", "Healthcare & Medical Center", "Logistics & Maritime"],
    landmarks: ["Space Center Houston", "Museum District", "Buffalo Bayou"],
    intro: "Houston enterprises require rock-solid engineering. FlowWorks AI specializes in upgrading operations, building customized data dashboards, and integrating intelligent AI assistants for Houston's leading energy, logistics, and medical organizations.",
  },
  dallas: {
    name: "Dallas",
    code: "TX",
    slug: "dallas",
    type: "city",
    parentState: "Texas",
    industries: ["Financial Services", "Telecom", "Real Estate Development", "Defense"],
    landmarks: ["Reunion Tower", "Dealey Plaza", "Arts District"],
    intro: "Dallas businesses move fast. FlowWorks AI provides premium workflow automations, custom financial-grade database designs, and conversion-optimized local search systems to keep Dallas companies leading their respective industries.",
  },
  austin: {
    name: "Austin",
    code: "TX",
    slug: "austin",
    type: "city",
    parentState: "Texas",
    industries: ["Tech Startups", "SaaS & DevTools", "Creative Agencies", "E-commerce"],
    landmarks: ["Zilker Park", "Texas State Capitol", "Lady Bird Lake"],
    intro: "As the heart of Texas tech, Austin startups require premium aesthetic designs and cutting-edge software architectures. FlowWorks AI develops custom React systems, web integrations, and custom LLM workflows that help Austin innovators scale.",
  },
  "san-antonio": {
    name: "San Antonio",
    code: "TX",
    slug: "san-antonio",
    type: "city",
    parentState: "Texas",
    industries: ["Healthcare", "Military & Defense", "Tourism", "Cybersecurity"],
    landmarks: ["The River Walk", "The Alamo", "Tower of the Americas"],
    intro: "San Antonio's rich business heritage meets modern automation. FlowWorks AI engineers secure, compliant custom applications and customer journey automations tailored for San Antonio's defense, medical, and cyber businesses.",
  },
  "los-angeles": {
    name: "Los Angeles",
    code: "CA",
    slug: "los-angeles",
    type: "city",
    parentState: "California",
    industries: ["Entertainment & Streaming", "Fashion & Retail", "SaaS", "Real Estate"],
    landmarks: ["Griffith Observatory", "Santa Monica Pier", "Rodeo Drive"],
    intro: "Los Angeles demands visually stunning digital assets and smooth user experiences. FlowWorks AI builds premium, premium-tier web frameworks and customized AI chatbots to optimize consumer interactions and automate media production workflows.",
  },
  "san-diego": {
    name: "San Diego",
    code: "CA",
    slug: "san-diego",
    type: "city",
    parentState: "California",
    industries: ["Biotech", "Defense Contracting", "Tourism", "Clean Tech"],
    landmarks: ["Balboa Park", "Coronado Bridge", "La Jolla Cove"],
    intro: "San Diego's scientific and engineering landscape is built on absolute precision. FlowWorks AI designs custom data visualization dashboards, local search platforms, and high-performance Web apps.",
  },
  "san-francisco": {
    name: "San Francisco",
    code: "CA",
    slug: "san-francisco",
    type: "city",
    parentState: "California",
    industries: ["Generative AI", "Venture Capital", "FinTech", "SaaS Startups"],
    landmarks: ["Golden Gate Bridge", "Alcatraz Island", "Salesforce Tower"],
    intro: "San Francisco is the epicenter of the Generative AI revolution. FlowWorks AI partners with leading SF startups and VC portfolios to construct production-ready AI agents, autonomous workflow graphs, and high-fidelity custom systems.",
  },
  "san-jose": {
    name: "San Jose",
    code: "CA",
    slug: "san-jose",
    type: "city",
    parentState: "California",
    industries: ["Semiconductors", "Hardware & IT Systems", "Enterprise SaaS"],
    landmarks: ["Winchester Mystery House", "Tech Interactive", "Santana Row"],
    intro: "San Jose is the heartbeat of Silicon Valley hardware and enterprise SaaS. FlowWorks AI supports San Jose firms with cloud deployments, automated testing systems, and premium enterprise integrations.",
  },
  miami: {
    name: "Miami",
    code: "FL",
    slug: "miami",
    type: "city",
    parentState: "Florida",
    industries: ["Real Estate", "FinTech & Web3", "Hospitality", "International Trade"],
    landmarks: ["Wynwood Walls", "Brickell Avenue", "South Beach"],
    intro: "Miami has emerged as a massive global financial and tech hub. FlowWorks AI builds high-converting landing systems, premium client portals, and custom web applications to match the energy of the magic city.",
  },
  tampa: {
    name: "Tampa",
    code: "FL",
    slug: "tampa",
    type: "city",
    parentState: "Florida",
    industries: ["Healthcare Networks", "Financial Services", "Defense", "Maritime Operations"],
    landmarks: ["Ybor City", "Tampa Riverwalk", "Bayshore Boulevard"],
    intro: "Tampa's corporate presence is expanding fast. FlowWorks AI designs custom internal software, automated client onboarding pipelines, and localized marketing growth funnels for Tampa Bay businesses.",
  },
  orlando: {
    name: "Orlando",
    code: "FL",
    slug: "orlando",
    type: "city",
    parentState: "Florida",
    industries: ["Tourism & Hospitality", "Simulations & Training", "Real Estate", "Event Management"],
    landmarks: ["Lake Eola Park", "Dr. Phillips Center", "International Drive"],
    intro: "Orlando is a world leader in simulation technology and guest experiences. FlowWorks AI creates custom portal software, real-time database management systems, and conversational AI booking integrations.",
  },
  "new-york-city": {
    name: "New York City",
    code: "NY",
    slug: "new-york-city",
    type: "city",
    parentState: "New York",
    industries: ["Fintech & Trading", "Luxury Fashion", "Advertising", "Real Estate Brokerages"],
    landmarks: ["Central Park", "Times Square", "One World Trade Center"],
    intro: "New York City demands excellence and high-speed data delivery. FlowWorks AI engineers custom high-frequency data pipelines, ultra-fast React websites, and automated client portals tailored for NYC's elite corporate sectors.",
  },
  buffalo: {
    name: "Buffalo",
    code: "NY",
    slug: "buffalo",
    type: "city",
    parentState: "New York",
    industries: ["Advanced Manufacturing", "Healthcare Networks", "Education Services"],
    landmarks: ["Canalside", "Frank Lloyd Wright's Martin House", "Albright-Knox Art Gallery"],
    intro: "Buffalo's industrial and healthcare sectors are modernizing. FlowWorks AI helps Buffalo companies integrate CRM systems, deploy custom inventory track tools, and automate administrative overhead.",
  },
  phoenix: {
    name: "Phoenix",
    code: "AZ",
    slug: "phoenix",
    type: "city",
    parentState: "Arizona",
    industries: ["Real Estate Brokerages", "Healthcare Networks", "Logistics", "Fintech Startup Hubs"],
    landmarks: ["Desert Botanical Garden", "Camelback Mountain", "Papago Park"],
    intro: "Phoenix is one of the fastest-growing business regions in the US. FlowWorks AI engineers robust mobile apps, automated CRM pipelines, and local digital presence funnels that dominate the Valley of the Sun.",
  },
  scottsdale: {
    name: "Scottsdale",
    code: "AZ",
    slug: "scottsdale",
    type: "city",
    parentState: "Arizona",
    industries: ["Luxury Hospitality", "Real Estate Investment", "SaaS startups", "Healthcare Clinics"],
    landmarks: ["Old Town Scottsdale", "Taliesin West", "Scottsdale Waterfront"],
    intro: "Scottsdale's high-end market demands luxury-tier design aesthetics. FlowWorks AI builds premium custom software products, high-converting digital setups, and customized automated consulting systems.",
  },
};

export const SERVICES = [
  {
    slug: "ai-employees-as-a-service",
    name: "AI Employees as a Service",
    shortDesc: "Your Workforce, Reimagined. Fully managed virtual employees scaling your output.",
    fullDesc: "Deploy fully custom, autonomous AI employees that integrate with your email, Slack, databases, and internal tools. They work 24/7 without management overhead.",
    icon: "Users",
    useCases: [
      "Automated operations managers tracking project updates.",
      "Virtual administrative assistants managing daily data schedules.",
      "Executive schedulers managing complex corporate alignments."
    ]
  },
  {
    slug: "ai-customer-support-agents",
    name: "AI Customer Support Agents",
    shortDesc: "Support That Never Sleeps. Resolve customer inquiries instantly.",
    fullDesc: "Deploy high-performance, context-aware AI support agents that resolve tickets, process returns, and answer client queries around the clock.",
    icon: "MessageSquareText",
    useCases: [
      "Instant multi-lingual client support via Web Chat, WhatsApp, or SMS.",
      "Automatic syncing of resolution logs back to Zendesk, HubSpot, or Salesforce.",
      "Dynamic ticket escalation routing based on client sentiment analysis."
    ]
  },
  {
    slug: "ai-sales-agents",
    name: "AI Sales Agents",
    shortDesc: "Close More Deals, Automatically. Automate email outreaches and follow-ups.",
    fullDesc: "Inject AI sales agents into your pipeline to prospect targets, customize cold outreaches, score leads, and nurture relationships on autopilot.",
    icon: "TrendingUp",
    useCases: [
      "Hyper-personalized cold email generation at scale.",
      "Automated lead scoring based on target organization parameters.",
      "Nurturing prospects through multi-channel drip pipelines."
    ]
  },
  {
    slug: "ai-voice-agents",
    name: "AI Voice Agents",
    shortDesc: "Natural Conversations, Automated at Scale. Real-time natural phone conversations.",
    fullDesc: "Deploy voice agents that speak with natural inflection, handling inbound customer inquiries and outbound follow-up calls with latency under 500ms.",
    icon: "Mic",
    useCases: [
      "Inbound receptionist agents routing calls and answering FAQs.",
      "Outbound reservation follow-ups and service surveys.",
      "High-scale customer notification blasts with instant response logging."
    ]
  },
  {
    slug: "ai-lead-generation-automation",
    name: "AI Lead Generation Automation",
    shortDesc: "Find Your Perfect Customers on Autopilot. Automate prospecting workflows.",
    fullDesc: "Build automated engines that scrape search signals, filter qualified LinkedIn profiles, and draft personalized sequences to maximize conversion rates.",
    icon: "Target",
    useCases: [
      "Scraping local directories and directories for business contacts.",
      "Parsing company websites to identify key decision makers.",
      "Triggering automated enrichment pipelines through Apollo or Hunter."
    ]
  },
  {
    slug: "ai-appointment-setting",
    name: "AI Appointment Setting",
    shortDesc: "Book More Meetings, Automatically. Connect calendars and convert leads.",
    fullDesc: "Deploy AI appointment setters that chat with prospects, check calendar availability, resolve scheduling conflicts, and book sales meetings directly.",
    icon: "Calendar",
    useCases: [
      "Booking meetings dynamically through web chat conversions.",
      "Outbound scheduling agents handling calendar invites and follow-up reminders.",
      "Integrating with Calendly, Cal.com, or custom scheduling databases."
    ]
  },
  {
    slug: "ai-chatbot-development",
    name: "AI Chatbot Development",
    shortDesc: "Conversational AI Built for Your Brand. Train models on custom knowledge bases.",
    fullDesc: "We design and develop intelligent conversational chatbots trained on your internal documentation, product guides, and corporate tone guidelines.",
    icon: "Bot",
    useCases: [
      "Custom internal bots answering HR, payroll, and policy questions.",
      "Interactive product guides helping e-commerce users select items.",
      "On-page assistant bots answering pricing and feature questions."
    ]
  },
  {
    slug: "crm-automation",
    name: "CRM Automation",
    shortDesc: "Your CRM Works for You, Automatically. Sync data, clean lists, and trigger actions.",
    fullDesc: "Connect your HubSpot, Salesforce, or custom CRM to automate lead routing, deal stage progressions, data sanitization, and alert sequences.",
    icon: "Database",
    useCases: [
      "Auto-assigning leads to sales reps based on region or budget.",
      "Syncing offline payment processors with online CRM deal pipelines.",
      "Cleaning out duplicate records and invalid email entries weekly."
    ]
  },
  {
    slug: "workflow-automation",
    name: "Workflow Automation",
    shortDesc: "Streamline Every Process, Eliminate Every Bottleneck. Automate custom routines.",
    fullDesc: "Link legacy databases with modern cloud APIs using custom script architectures, Make.com, or Zapier grids for frictionless operation.",
    icon: "Zap",
    useCases: [
      "Creating invoices, syncing receipts, and updating QuickBooks on purchase.",
      "Syncing document management folders across Google Drive, Dropbox, and local servers.",
      "Triggering notifications across Slack, email, and mobile apps when triggers fire."
    ]
  },
  {
    slug: "business-process-automation",
    name: "Business Process Automation",
    shortDesc: "Automate the Work, Amplify the Impact. Optimize core company operations.",
    fullDesc: "We audit, redesign, and automate complex company operations, from employee onboarding cycles to high-scale supply chain logistics updates.",
    icon: "Settings",
    useCases: [
      "Automating contract generation, signatures, and filing sequences.",
      "Syncing inventory levels, shipping logs, and vendor alerts.",
      "Automating internal HR review logs and employee training tracks."
    ]
  },
  {
    slug: "ai-consulting",
    name: "AI Consulting",
    shortDesc: "Strategic AI Guidance for Real Business Impact. Expert architecture assessments.",
    fullDesc: "We align with executive teams to analyze operation structures, assess AI readiness, evaluate ROI potential, and draft engineering roadmaps.",
    icon: "FileSearch",
    useCases: [
      "Conducting comprehensive company audit workshops.",
      "Drafting feasibility studies for custom machine learning integrations.",
      "Building operational ROI projection frameworks for AI deployment."
    ]
  },
  {
    slug: "custom-ai-solutions",
    name: "Custom AI Solutions",
    shortDesc: "AI Built Precisely for Your Business. Bespoke models and integrations.",
    fullDesc: "For workflows requiring specialized systems, we engineer bespoke LLM fine-tunes, custom vector search layers, and custom data processing graphs.",
    icon: "Cpu",
    useCases: [
      "Fine-tuning open-source LLMs on specialized proprietary datasets.",
      "Implementing custom vector databases for high-speed semantic search.",
      "Building custom neural networks for specific object recognition tasks."
    ]
  },
  {
    slug: "website-design-and-development",
    name: "Website Design and Development",
    shortDesc: "Custom Premium Frontends. Award-winning, highly interactive web applications.",
    fullDesc: "We design and develop custom, premium Next.js frontends featuring glassmorphism elements, GSAP/Framer animations, and top-tier conversions.",
    icon: "Laptop",
    useCases: [
      "High-converting marketing interfaces for SaaS and software companies.",
      "Custom client portals and administrative web dashboards.",
      "Responsive, accessible web platforms configured for maximum speed."
    ]
  },
  {
    slug: "seo-services",
    name: "SEO Services",
    shortDesc: "Strategic Search Rankings. Technical site optimizations and page scaling.",
    fullDesc: "Maximize organic outreach using custom programmatic architectures, high-fidelity metadata schemas, and speed optimization audits.",
    icon: "SearchCode",
    useCases: [
      "Building programmatic page generators targeting hundreds of markets.",
      "Optimizing Core Web Vitals to achieve 95+ scores on Lighthouse.",
      "Implementing JSON-LD schema blocks that unlock rich Google snippets."
    ]
  },
  {
    slug: "app-design-and-development",
    name: "App Design and Development",
    shortDesc: "iOS and Android Applications. Cross-platform React Native architectures.",
    fullDesc: "High-performance React Native apps featuring offline support, native animations, hardware sensor integration, and push alerts.",
    icon: "Smartphone",
    useCases: [
      "E-commerce apps with fast checkouts and push notifications.",
      "Interactive customer portals syncing with custom cloud databases.",
      "Utility and productivity applications utilizing native hardware hooks."
    ]
  }
];

export function getSEOCombination(slug: string) {
  // Try to parse slug to match state, city or combo
  // Example slugs: 
  // 1. ai-automation-services-texas -> Service: ai-automation, State: texas
  // 2. ai-automation-houston -> Service: ai-automation, City: houston
  // 3. custom-software-development-texas -> Service: custom-software-development, State: texas
  // 4. mobile-app-development-phoenix -> Service: mobile-app-development, City: phoenix
  // 5. seo-services-miami -> Service: seo-services, City: miami
  
  let targetService = SERVICES.find(s => slug.startsWith(s.slug));
  let targetLocation: LocationInfo | null = null;

  // Search for state
  for (const [key, value] of Object.entries(STATES)) {
    if (slug.endsWith(`-${key}`)) {
      targetLocation = value;
      break;
    }
  }

  // Search for city if state not found
  if (!targetLocation) {
    for (const [key, value] of Object.entries(CITIES)) {
      if (slug.endsWith(`-${key}`)) {
        targetLocation = value;
        break;
      }
    }
  }

  // Fallback: search location by name substring in slug
  if (!targetLocation) {
    const keys = [...Object.keys(STATES), ...Object.keys(CITIES)];
    const matchingKey = keys.find(k => slug.includes(k));
    if (matchingKey) {
      targetLocation = STATES[matchingKey] || CITIES[matchingKey];
    }
  }

  // Fallback: search service by substring in slug
  if (!targetService) {
    targetService = SERVICES.find(s => slug.includes(s.slug)) || SERVICES[0];
  }

  return {
    service: targetService,
    location: targetLocation || STATES["texas"] // fallback to Texas state
  };
}
