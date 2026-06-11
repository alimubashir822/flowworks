export interface IndustryInfo {
  slug: string;
  name: string;
  category: 'Medical & Wellness' | 'Real Estate & Trades' | 'Professional Services' | 'Commerce & Logistics' | 'Tech & SaaS';
  iconName: string;
  shortDesc: string;
  challenges: string[];
  services: string[];
  benefits: string[];
  useCases: {
    title: string;
    desc: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const INDUSTRIES_DATA: IndustryInfo[] = [
  // MEDICAL & WELLNESS
  {
    slug: 'healthcare',
    name: 'Healthcare',
    category: 'Medical & Wellness',
    iconName: 'HeartPulse',
    shortDesc: 'HIPAA-compliant workflows for patient onboarding, scheduling, and documentation.',
    challenges: ['Manual data entry', 'Patient scheduling bottlenecks', 'Slow patient inquiries response'],
    services: ['AI Voice Agents', 'AI Chatbot Development', 'Workflow Automation', 'CRM Automation'],
    benefits: ['98% Booking Accuracy', 'Zero Administrative Abandonment', 'HIPAA Secure Encrypted Data'],
    useCases: [
      {
        title: 'Voice-based Patient Booking',
        desc: 'Custom voice agent handles incoming calls, verifies insurance, and hooks slots directly in Epic/Cerner CRMs.'
      }
    ],
    faqs: [
      {
        question: 'Are your AI agents HIPAA-compliant?',
        answer: 'Yes, we implement Zero Data Retention policies, private VPC endpoints, and strict transit encryption matching HIPAA standards.'
      }
    ]
  },
  {
    slug: 'dental-clinics',
    name: 'Dental Clinics',
    category: 'Medical & Wellness',
    iconName: 'Sparkles',
    shortDesc: 'Automate dental appointment confirmations, cleaning recalls, and patient follow-ups.',
    challenges: ['High patient no-shows', 'Unanswered emergency calls', 'Manual appointment reminders'],
    services: ['AI Voice Agents', 'AI Chatbot Development', 'CRM Automation'],
    benefits: ['35% Reduction in No-Shows', '24/7 Patient Emergency Intake', 'Automated Dental Recall Sync'],
    useCases: [
      {
        title: 'SMS & Voice Recall Campaigns',
        desc: 'Autonomous call agents reach out to past patients for their bi-annual cleanings, booking slots in Dentrix.'
      }
    ],
    faqs: []
  },
  {
    slug: 'hospitals',
    name: 'Hospitals',
    category: 'Medical & Wellness',
    iconName: 'Building2',
    shortDesc: 'Streamlining cross-departmental operations, staff shift planning, and emergency triage routing.',
    challenges: ['Triage routing delays', 'Complex shift rotations scheduling', 'Manual data synchronization across legacy systems'],
    services: ['Business Process Automation', 'Workflow Automation', 'AI Employees as a Service'],
    benefits: ['20% Reduction in Patient Intake Delay', 'Zero Staff Scheduling Conficts', 'Automated HL7 Compliance Checks'],
    useCases: [
      {
        title: 'Cross-Legacy Database Syncing',
        desc: 'Deploying autonomous AI Workers to monitor patient records and sync updates to regional clinic portals.'
      }
    ],
    faqs: []
  },
  {
    slug: 'medical-practices',
    name: 'Medical Practices',
    category: 'Medical & Wellness',
    iconName: 'Stethoscope',
    shortDesc: 'Automating doctor dictations, prescription refills approvals, and patient check-in portals.',
    challenges: ['Physician administrative burnout', 'Slow prescription refill processing', 'Legacy patient chart entries'],
    services: ['AI Consulting', 'Workflow Automation', 'CRM Automation'],
    benefits: ['8+ Hours Saved Weekly per Physician', 'Sub-second Refill Verification', 'Automated Patient Chart Synchronization'],
    useCases: [
      {
        title: 'Dictation-to-EMR Workflow Pipeline',
        desc: 'Doctors speak notes into an app, which uses LLM parsers to auto-fill patient record cards.'
      }
    ],
    faqs: []
  },
  {
    slug: 'fitness-centers',
    name: 'Fitness Centers',
    category: 'Medical & Wellness',
    iconName: 'Activity',
    shortDesc: 'Manage gym membership onboarding, personal training booking, and automated payments.',
    challenges: ['Membership churn', 'Manual personal training scheduling', 'Leads dropping out of sales funnel'],
    services: ['AI Lead Generation Automation', 'AI Chatbot Development', 'CRM Automation'],
    benefits: ['18% Member Retention Boost', 'Zero Overlaps in Training Sessions', 'Automated Past-Due Billing Reminders'],
    useCases: [
      {
        title: 'AI Gym Lead Reactivation',
        desc: 'Intelligent chat agents reach out to cold leads, offering free passes and booking orientation schedules.'
      }
    ],
    faqs: []
  },
  {
    slug: 'gyms',
    name: 'Gyms',
    category: 'Medical & Wellness',
    iconName: 'Dumbbell',
    shortDesc: 'Automated 24/7 guest check-in validation and membership billing synchronization.',
    challenges: ['Staffing check-in desk 24/7', 'Failed credit card reconciliations', 'Member inquiries backlogs'],
    services: ['AI Chatbot Development', 'Workflow Automation', 'CRM Automation'],
    benefits: ['100% Unmanned Night Operations', 'Instant Billing Correction Sequences', '90% Customer Support Desk Automation'],
    useCases: [
      {
        title: 'Guest Pass AI Onboarding',
        desc: 'Walk-in visitors scan a QR code, converse with an AI Agent, verify their email, and unlock gate access.'
      }
    ],
    faqs: []
  },
  {
    slug: 'wellness-businesses',
    name: 'Wellness Businesses',
    category: 'Medical & Wellness',
    iconName: 'Heart',
    shortDesc: 'Client appointment setting, session checklists, and automated satisfaction workflows.',
    challenges: ['Unorganized calendar blocks', 'High administrative booking workload', 'No structured feedback loops'],
    services: ['AI Appointment Setting', 'AI Chatbot Development', 'CRM Automation'],
    benefits: ['100% Automated Scheduling', '2.5x Increase in Review Generation', 'Automated Pre-Session Prep Alerts'],
    useCases: [
      {
        title: 'Auto-Post-Session Review Engine',
        desc: 'Triggers personalized survey chat links to clients post-massage or acupuncture, filtering negative feedback.'
      }
    ],
    faqs: []
  },
  {
    slug: 'beauty-salons',
    name: 'Beauty Salons',
    category: 'Medical & Wellness',
    iconName: 'Scissors',
    shortDesc: 'Direct stylist booking coordination, service pricing queries, and cancellation lists automation.',
    challenges: ['Double-booked stylists', 'Stylists answering phone during appointments', 'Late cancellations loss'],
    services: ['AI Voice Agents', 'AI Chatbot Development', 'AI Appointment Setting'],
    benefits: ['98% Booking Auto-Resolution', 'Zero Lost Appointments on Phone', 'Immediate Standby List Alerts'],
    useCases: [
      {
        title: 'AI-Managed Standby Rebooking',
        desc: 'If a client cancels, the AI agent instantly SMSs waitlisted clients, booking the open spot in seconds.'
      }
    ],
    faqs: []
  },
  {
    slug: 'spas',
    name: 'Spas',
    category: 'Medical & Wellness',
    iconName: 'Flower2',
    shortDesc: 'Automated package upsells, booking allocations, and gift card validation chat tools.',
    challenges: ['Low premium package upsell rate', 'Answering package availability queries', 'Manual booking schedules'],
    services: ['AI Chatbot Development', 'AI Sales Agents', 'AI Appointment Setting'],
    benefits: ['22% Increase in Premium Package Booking', 'Instant Availability Responses', 'Frictionless Booking Conversions'],
    useCases: [
      {
        title: 'AI Upselling Chat Agent',
        desc: 'While booking a massage, the AI agent offers customized add-ons like aromatherapy or hot stones.'
      }
    ],
    faqs: []
  },

  // REAL ESTATE & TRADES
  {
    slug: 'real-estate',
    name: 'Real Estate',
    category: 'Real Estate & Trades',
    iconName: 'Building',
    shortDesc: 'Programmatic SEO listing pages, lead scoring, and automated showing setup tools.',
    challenges: ['Lead response times too slow', 'Time wasted on unqualified buyer calls', 'Manual listing page creations'],
    services: ['AI Lead Generation Automation', 'AI Sales Agents', 'AI Appointment Setting', 'SEO Services'],
    benefits: ['Under 15 Second Lead Response', '100% Qualified Buyers Only', 'Rank #1 on Google Local Listings'],
    useCases: [
      {
        title: 'AI Lead Nurture & Showings Setup',
        desc: 'SMS sales agents converse with home buyers, verify pre-approvals, and schedule showings on Zillow/MLS.'
      }
    ],
    faqs: []
  },
  {
    slug: 'construction',
    name: 'Construction',
    category: 'Real Estate & Trades',
    iconName: 'HardHat',
    shortDesc: 'Automate material invoice logging, subcontractor follow-ups, and estimation schedules.',
    challenges: ['Material pricing lag in bids', 'Manual invoice routing delays', 'Subcontractor verification loops'],
    services: ['Workflow Automation', 'CRM Automation', 'Business Process Automation'],
    benefits: ['Zero Cost Estimate Lags', '4x Faster Invoice Reconciliations', 'Automated Compliance Logging'],
    useCases: [
      {
        title: 'Subcontractor Compliance Auditor',
        desc: 'AI workers audit sub-tier COIs and permit logs, sending reminder updates to contractors automatically.'
      }
    ],
    faqs: []
  },
  {
    slug: 'home-services',
    name: 'Home Services',
    category: 'Real Estate & Trades',
    iconName: 'Home',
    shortDesc: 'Lead generation routing, job ticket allocations, and automated booking dispatch.',
    challenges: ['Missed customer calls to competitors', 'Unorganized technician routes', 'Slow billing collections'],
    services: ['AI Voice Agents', 'AI Appointment Setting', 'CRM Automation'],
    benefits: ['100% Inbound Lead Capturing', 'Technician Dispatch Optimization', 'Instant Invoice-to-Payment Logging'],
    useCases: [
      {
        title: 'AI Dispatch & Job Confirmation',
        desc: 'Voice agent answers local homeowners, logs booking parameters, and creates dispatch cards in Jobber.'
      }
    ],
    faqs: []
  },
  {
    slug: 'roofing',
    name: 'Roofing',
    category: 'Real Estate & Trades',
    iconName: 'Grid',
    shortDesc: 'Drone-inspection logging automation, lead capture, and insurance claim paperwork sync.',
    challenges: ['Lead response time delays', 'Chasing client insurance claim signatures', 'Manual estimator appointments scheduling'],
    services: ['AI Lead Generation Automation', 'AI Appointment Setting', 'CRM Automation'],
    benefits: ['3x Appointment Bookings', 'Zero Estimate Follow-up Lags', 'Automated Insurance Claim Tracking'],
    useCases: [
      {
        title: 'AI Roof Intake Pipeline',
        desc: 'Captures storm-damage leads from social ads, checks local ZIP codes for coverage, and books inspections.'
      }
    ],
    faqs: []
  },
  {
    slug: 'plumbing',
    name: 'Plumbing',
    category: 'Real Estate & Trades',
    iconName: 'Pipette',
    shortDesc: 'Emergency diagnostic routing, dispatch triggers, and automated recall bookings.',
    challenges: ['Missed emergency call revenue', 'Technician schedule conflicts', 'Manual review collection tracking'],
    services: ['AI Voice Agents', 'AI Appointment Setting', 'CRM Automation'],
    benefits: ['40% Growth in Emergency Bookings', 'Frictionless Technician Routing', 'Automated Google Review Follow-up'],
    useCases: [
      {
        title: 'After-Hours Emergency Voice Dispatch',
        desc: 'Custom telephony voice agent answers plumbing emergencies at 3 AM, books job, and text-alerts dispatch.'
      }
    ],
    faqs: []
  },
  {
    slug: 'hvac',
    name: 'HVAC',
    category: 'Real Estate & Trades',
    iconName: 'Wind',
    shortDesc: 'Automated seasonal maintenance recall scheduling, diagnostic triage, and invoicing.',
    challenges: ['Manual maintenance contract outreach', 'Technicians overbooked in summer', 'Slow estimate processing times'],
    services: ['AI Lead Generation Automation', 'AI Appointment Setting', 'Workflow Automation'],
    benefits: ['45% More Service Contracts Renewed', 'Dynamic Technician Schedule Adjustments', 'Instant Estimate Follow-ups'],
    useCases: [
      {
        title: 'Seasonal Tune-up Booking Campaign',
        desc: 'AI SMS outreach engine alerts homeowners of air filter updates, automatically scheduling slots.'
      }
    ],
    faqs: []
  },
  {
    slug: 'electrical-services',
    name: 'Electrical Services',
    category: 'Real Estate & Trades',
    iconName: 'Zap',
    shortDesc: 'Diagnostic triage questions, commercial bids follow-up, and automated invoicing.',
    challenges: ['Wasted trips on simple breaker resets', 'Estimates not followed up on', 'Delayed billing reconciliations'],
    services: ['AI Chatbot Development', 'Workflow Automation', 'CRM Automation'],
    benefits: ['20% Reduction in Trivial Callouts', '15% Boost in Bid Win Rates', 'Sub-second Billing Allocations'],
    useCases: [
      {
        title: 'HVAC/Electrical Triage Helper',
        desc: 'Interactive chat agent guides homeowner through simple checks, booking visits if issues persist.'
      }
    ],
    faqs: []
  },

  // PROFESSIONAL SERVICES
  {
    slug: 'law-firms',
    name: 'Law Firms',
    category: 'Professional Services',
    iconName: 'Scale',
    shortDesc: 'Automated intake screening, case management updates, and localized SEO scaling.',
    challenges: ['Paralegal time wasted screening leads', 'Slow client documentation ingestion', 'Low local Google map listings rating'],
    services: ['AI Lead Generation Automation', 'Workflow Automation', 'SEO Services'],
    benefits: ['95% Intake Screening Auto-Resolution', 'Zero Manual Paperwork Reminders', 'Rank #1 for Regional Legal Searches'],
    useCases: [
      {
        title: 'Intelligent Client Screening',
        desc: 'Intake chat bot interviews case leads, cross-references with conflict-of-interest databases, and drafts contracts.'
      }
    ],
    faqs: []
  },
  {
    slug: 'accounting-firms',
    name: 'Accounting Firms',
    category: 'Professional Services',
    iconName: 'Calculator',
    shortDesc: 'Material parsing automation, client onboarding checklists, and tax doc reminders.',
    challenges: ['Chasing tax documents from clients', 'Manual data entry from PDFs into ledger systems', 'New client questionnaire backlogs'],
    services: ['Business Process Automation', 'Workflow Automation', 'CRM Automation'],
    benefits: ['90% Less Time Chasing Documents', '10x Faster Data Ingestion Pipelines', 'Frictionless Client Onboarding'],
    useCases: [
      {
        title: 'Tax Material Auto-Auditor',
        desc: 'AI agent screens uploaded tax PDFs, highlights missing signatures or forms, and messages clients.'
      }
    ],
    faqs: []
  },
  {
    slug: 'financial-services',
    name: 'Financial Services',
    category: 'Professional Services',
    iconName: 'Coins',
    shortDesc: 'Automated financial reconciliation pipelines, client ledger sync, and compliance checklists.',
    challenges: ['Strict compliance audit loops', 'Manual invoice mappings', 'Slow portfolio document updates'],
    services: ['Business Process Automation', 'AI Consulting', 'Workflow Automation'],
    benefits: ['100% Audit Readiness', 'Sub-second Invoice Mappings', 'Real-time Ledger Syncing'],
    useCases: [
      {
        title: 'Automated Reconciliation System',
        desc: 'Syncs Stripe receipts with QuickBooks, flag ledger deviations, and exports audit sheets.'
      }
    ],
    faqs: []
  },
  {
    slug: 'insurance',
    name: 'Insurance',
    category: 'Professional Services',
    iconName: 'ShieldCheck',
    shortDesc: 'Claim intake automation, policy eligibility checks, and lead nurture campaigns.',
    challenges: ['Claim processing bottlenecks', 'Unqualified quotes follow-ups', 'Chasing client policy signoffs'],
    services: ['AI Chatbot Development', 'AI Sales Agents', 'Workflow Automation'],
    benefits: ['70% Claims Pre-audited by AI', '3x Speed in Quotes Collections', 'Instant Policy Reminder Outreach'],
    useCases: [
      {
        title: 'Insurance Policy Claims Auditor',
        desc: 'Parses accident pictures and intake details, pre-grading eligibility status for human adjusters.'
      }
    ],
    faqs: []
  },
  {
    slug: 'banking',
    name: 'Banking',
    category: 'Professional Services',
    iconName: 'Landmark',
    shortDesc: 'Bank-grade compliance auditing, automated transaction logs, and customer support triage.',
    challenges: ['Compliance reporting overhead', 'Legacy customer database syncs', 'High support queue latency'],
    services: ['Custom AI Solutions', 'AI Employees as a Service', 'AI Chatbot Development'],
    benefits: ['Zero-Error Compliance Auditing', 'Secure Multi-VPC Data Pipelines', '85% Customer Ticket Auto-Resolutions'],
    useCases: [
      {
        title: 'Credit Risk Analysis Model',
        desc: 'Extracts client payroll statements and ledger patterns, running risk assessments in secure VPC.'
      }
    ],
    faqs: []
  },
  {
    slug: 'consulting-firms',
    name: 'Consulting Firms',
    category: 'Professional Services',
    iconName: 'Presentation',
    shortDesc: 'Research brief automation, client appointment setting, and CRM integration workflows.',
    challenges: ['Manual competitive research hours', 'Scheduling consultation blocks', 'Messy proposal pipeline syncs'],
    services: ['AI Consulting', 'AI Appointment Setting', 'Workflow Automation'],
    benefits: ['5x Speed in Market Data Extraction', 'Frictionless Calendar Alignments', 'Instant Proposal Sync to Hubspot'],
    useCases: [
      {
        title: 'AI-Generated Market Research Briefs',
        desc: 'Agent monitors target market feeds, compiles weekly briefing PDFs, and updates consultant dashboards.'
      }
    ],
    faqs: []
  },
  {
    slug: 'recruiting-agencies',
    name: 'Recruiting Agencies',
    category: 'Professional Services',
    iconName: 'UserCheck',
    shortDesc: 'Resume screening pipelines, automated screening calls, and interview setup.',
    challenges: ['Sifting through hundreds of bad resumes', 'Coordinate interviews across timezones', 'Outreach email backlog'],
    services: ['AI Lead Generation Automation', 'AI Appointment Setting', 'AI Employees as a Service'],
    benefits: ['90% Resume Screen Time Saved', 'Frictionless Interview Syncing', 'Personalized Mass Outreach Campaigns'],
    useCases: [
      {
        title: 'AI Resume Screen & Matcher',
        desc: 'Parses resumes for key experience parameters, scores match rankings, and text-invites top applicants.'
      }
    ],
    faqs: []
  },
  {
    slug: 'staffing-companies',
    name: 'Staffing Companies',
    category: 'Professional Services',
    iconName: 'Users',
    shortDesc: 'Shift openings dispatch automation, compliance screening, and SMS candidate alerts.',
    challenges: ['Filling temp shifts at 5 AM', 'Documenting compliance records manually', 'High candidate dropouts'],
    services: ['AI Voice Agents', 'Workflow Automation', 'CRM Automation'],
    benefits: ['100% Shifts Dispatch Automation', 'Real-time Compliance Syncing', 'SMS Candidate Follow-up Chains'],
    useCases: [
      {
        title: '5 AM Temp Shift SMS Dispatcher',
        desc: 'AI system detects open shifts, runs matchmaking, texts candidates, and logs responses automatically.'
      }
    ],
    faqs: []
  },

  // COMMERCE & LOGISTICS
  {
    slug: 'ecommerce',
    name: 'E-commerce',
    category: 'Commerce & Logistics',
    iconName: 'ShoppingCart',
    shortDesc: 'AI customer support agents, dynamic cart abandonments, and automated product catalog updates.',
    challenges: ['High support cost per ticket', 'Cart abandonment revenue losses', 'Slow SKU catalog entries'],
    services: ['AI Customer Support Agents', 'AI Lead Generation Automation', 'Workflow Automation'],
    benefits: ['85% Customer Ticket Resolution', '22% Cart Recovery Rate', 'SKU Catalog Ingestion in Seconds'],
    useCases: [
      {
        title: 'AI Product Recommender & Support',
        desc: 'Intelligent chatbot answers tracking queries, recommends matching items, and processes refund requests.'
      }
    ],
    faqs: []
  },
  {
    slug: 'retail',
    name: 'Retail',
    category: 'Commerce & Logistics',
    iconName: 'Store',
    shortDesc: 'Omnichannel inventory syncing, customer loyalty programs automation, and localized marketing.',
    challenges: ['Store inventory misalignment', 'Low retention in loyalty signups', 'Slow regional marketing scaling'],
    services: ['CRM Automation', 'AI Lead Generation Automation', 'SEO Services'],
    benefits: ['100% Real-time Inventory Sync', '3x Loyalty Member Registrations', 'Local Maps Listings Dominance'],
    useCases: [
      {
        title: 'Local Retail Stores Map Dominance',
        desc: 'Builds localized programmatic profile sheets matching Google local search for brick-and-mortar points.'
      }
    ],
    faqs: []
  },
  {
    slug: 'manufacturing',
    name: 'Manufacturing',
    category: 'Commerce & Logistics',
    iconName: 'Factory',
    shortDesc: 'Material supply catalog ingestion, workflow checks automation, and vendor invoicing pipelines.',
    challenges: ['Supplier invoice processing lag', 'Unorganized compliance reporting logs', 'Material allocation updates latency'],
    services: ['Business Process Automation', 'Workflow Automation', 'Custom AI Solutions'],
    benefits: ['Zero Material Ingestion Delay', '100% Compliant Ledger Sheets', 'Instant Purchase-to-Stock Logging'],
    useCases: [
      {
        title: 'Automated Supply Chain Bill of Lading Auditor',
        desc: 'AI agent reviews scanning records, cross-checks custom fees, and schedules cargo payouts.'
      }
    ],
    faqs: []
  },
  {
    slug: 'logistics',
    name: 'Logistics',
    category: 'Commerce & Logistics',
    iconName: 'Truck',
    shortDesc: 'Dispatch coordination automation, invoice processing, and SMS delivery tracking.',
    challenges: ['Manual cargo dispatch schedules', 'Slow bill validation cycles', 'Customer cargo inquiries backlog'],
    services: ['AI Voice Agents', 'Workflow Automation', 'CRM Automation'],
    benefits: ['10x Operations Dispatch Speedup', 'Zero Billing Reconciliations Lag', 'SMS Tracking Sync Auto-Update'],
    useCases: [
      {
        title: 'Cargo Invoicing OCR Pipeline',
        desc: 'AI Workers read PDF scans from cargo depots, extracting shipping data and booking ledgers.'
      }
    ],
    faqs: []
  },
  {
    slug: 'transportation',
    name: 'Transportation',
    category: 'Commerce & Logistics',
    iconName: 'Plane',
    shortDesc: 'Route coordination logs, passenger confirmation systems, and booking triage.',
    challenges: ['Driver availability tracking delays', 'Legacy passenger logs processing', 'Passenger inquiry queues'],
    services: ['AI Chatbot Development', 'AI Appointment Setting', 'Workflow Automation'],
    benefits: ['Real-time Driver Capacity Mapping', 'Automated Ticket Confirmation Logs', '90% Ticket Support Automation'],
    useCases: [
      {
        title: 'Transit Ticket Booking Assistant',
        desc: 'Converse-driven chatbot matches trip requests, verifies payments, and updates booking rosters.'
      }
    ],
    faqs: []
  },
  {
    slug: 'automotive',
    name: 'Automotive',
    category: 'Commerce & Logistics',
    iconName: 'Car',
    shortDesc: 'Service center booking coordinator, dealer lead routing, and warranty check campaigns.',
    challenges: ['High lead dropout in dealer portal', 'Unorganized service scheduling', 'Chasing client warranty signoffs'],
    services: ['AI Voice Agents', 'AI Lead Generation Automation', 'AI Appointment Setting'],
    benefits: ['30% More Appointments Booked', 'Lead Capture in Under 10 Seconds', 'Automated Warranty Reminder SMS'],
    useCases: [
      {
        title: 'Dealer Portal AI Sales Agent',
        desc: 'SMS and chat agents greet dealer visitors, estimate trade-in valuations, and schedule test drives.'
      }
    ],
    faqs: []
  },
  {
    slug: 'travel-tourism',
    name: 'Travel & Tourism',
    category: 'Commerce & Logistics',
    iconName: 'Compass',
    shortDesc: 'Itinerary booking automation, travel advisory alerts, and client intake.',
    challenges: ['Itinerary alignment delays', 'Customer support queues in cancellations', 'Manual quote creation'],
    services: ['AI Chatbot Development', 'AI Appointment Setting', 'Workflow Automation'],
    benefits: ['10x Booking Processing Velocity', '80% Customer Support Auto-Resolution', 'Dynamic Travel Quotes Generator'],
    useCases: [
      {
        title: 'Dynamic Travel Guide Builder',
        desc: 'Chatbot captures destination preferences, dynamically generating a trip guide and booking hotel blocks.'
      }
    ],
    faqs: []
  },
  {
    slug: 'hospitality',
    name: 'Hospitality',
    category: 'Commerce & Logistics',
    iconName: 'Bed',
    shortDesc: 'Booking confirmations, room service automation, and local area guide chat tools.',
    challenges: ['Check-in lobby queues', 'Room service ordering delays', 'High administrative booking workload'],
    services: ['AI Voice Agents', 'AI Chatbot Development', 'Workflow Automation'],
    benefits: ['Zero Lobby Onboarding Queue', 'Automated Room Service Ticketing', '24/7 Digital Concierge Availability'],
    useCases: [
      {
        title: 'AI Guest Concierge App',
        desc: 'Guests converse with an AI agent to order towels, book spa sessions, or ask for restaurant recommendations.'
      }
    ],
    faqs: []
  },
  {
    slug: 'hotels',
    name: 'Hotels',
    category: 'Commerce & Logistics',
    iconName: 'MapPin',
    shortDesc: '24/7 reservation booker, booking modifications, and guest review systems.',
    challenges: ['Missed phone bookings at night', 'Manual reservation updates', 'Slow feedback collection cycles'],
    services: ['AI Voice Agents', 'AI Appointment Setting', 'CRM Automation'],
    benefits: ['100% Inbound Reservations Captured', 'Immediate PMS Database Synchronization', '2x Guest Review Submissions'],
    useCases: [
      {
        title: 'Telephony Voice Booking Coordinator',
        desc: 'AI voice agent answers late-night calls, quotes pricing, verifies credit card, and books rooms.'
      }
    ],
    faqs: []
  },
  {
    slug: 'restaurants',
    name: 'Restaurants',
    category: 'Commerce & Logistics',
    iconName: 'Utensils',
    shortDesc: 'Reservation coordinator, menu inquiry bots, and automated delivery system integration.',
    challenges: ['Missed reservation bookings', 'Staff answering menu questions', 'Manual table layout mappings'],
    services: ['AI Voice Agents', 'AI Chatbot Development', 'AI Appointment Setting'],
    benefits: ['95% Reservation Auto-Resolution', 'Zero Staff Time on Menu Calls', 'Smooth Online Ordering Ingestion'],
    useCases: [
      {
        title: 'AI Hostess & Table Booking',
        desc: 'Voice agent handles reservation calls, checks OpenTable slots, and sends confirmations.'
      }
    ],
    faqs: []
  },
  {
    slug: 'franchises',
    name: 'Franchises',
    category: 'Commerce & Logistics',
    iconName: 'Layers',
    shortDesc: 'Multi-location operations dashboard, franchise compliance, and localized marketing arrays.',
    challenges: ['Data fragmentation across branches', 'Non-compliant local marketing setups', 'Slow local listings creation'],
    services: ['Custom AI Solutions', 'Workflow Automation', 'SEO Services'],
    benefits: ['Unified Real-time Branch Dashboard', '100% Compliant Marketing Assets', 'Dynamic Multi-location Local SEO'],
    useCases: [
      {
        title: 'Multi-Location Programmatic Local SEO',
        desc: 'Generates thousands of unique local listing pages for all franchise branches, ranking locally.'
      }
    ],
    faqs: []
  },

  // TECH & SAAS
  {
    slug: 'saas-companies',
    name: 'SaaS Companies',
    category: 'Tech & SaaS',
    iconName: 'Cpu',
    shortDesc: 'Product onboarding automation, product tour guides, and product usage data triggers.',
    challenges: ['High user trial dropouts', 'Slow support ticket queue response', 'Manual lead scoring for sales teams'],
    services: ['AI Employees as a Service', 'AI Lead Generation Automation', 'AI Chatbot Development'],
    benefits: ['32% Boost in Free-to-Paid Conversion', 'Instant Support Resolution Cycles', 'Sales-ready Leads CRM Auto-Sync'],
    useCases: [
      {
        title: 'Product Onboarding Trigger Engine',
        desc: 'AI monitors user usage metrics and sends custom emails or in-app triggers guiding them.'
      }
    ],
    faqs: []
  },
  {
    slug: 'technology-companies',
    name: 'Technology Companies',
    category: 'Tech & SaaS',
    iconName: 'Laptop',
    shortDesc: 'API document chatbot systems, software logs parser, and development workflows.',
    challenges: ['High support overhead on api guides', 'Sifting through server error logs', 'Messy project ticket triage'],
    services: ['AI Consulting', 'Custom AI Solutions', 'Workflow Automation'],
    benefits: ['80% Ticket Reduction on Doc Guides', 'Sub-second Error Pattern Matching', 'Automated Linear/Jira Syncing'],
    useCases: [
      {
        title: 'Log Auditor & Linear Sync',
        desc: 'AI system parses crash logs, extracts error blocks, and creates tickets for engineers.'
      }
    ],
    faqs: []
  },
  {
    slug: 'startups',
    name: 'Startups',
    category: 'Tech & SaaS',
    iconName: 'Rocket',
    shortDesc: 'MVP development pipelines, automated leads outreach, and rapid prototyping.',
    challenges: ['Limited engineering resources', 'Slow market testing iterations', 'No structured outbound pipeline'],
    services: ['App Design & Development', 'Website Design & Development', 'AI Lead Generation Automation'],
    benefits: ['MVP Built in Under 4 Weeks', 'Frictionless Scaling Operations', '10x Faster Outbound Testing Cycles'],
    useCases: [
      {
        title: 'Rapid MVP Development Cycle',
        desc: 'We map user experience blueprints, build Next.js/Node apps, and scale databases.'
      }
    ],
    faqs: []
  },
  {
    slug: 'marketing-agencies',
    name: 'Marketing Agencies',
    category: 'Tech & SaaS',
    iconName: 'TrendingUp',
    shortDesc: 'Report data compilation automation, ad performance tracking, and client intake.',
    challenges: ['Hours spent building weekly PDFs', 'Ad spend budget discrepancies', 'Manual client onboarding lists'],
    services: ['Workflow Automation', 'CRM Automation', 'Business Process Automation'],
    benefits: ['90% Time Saved on PDF Reporting', 'Real-time Budget Alert Sequences', 'Immediate Client Kickoff Tasks'],
    useCases: [
      {
        title: 'Automated Client Reporting Dashboard',
        desc: 'Scrapes Google Ads and Meta APIs, structures performance reports, and exports them to Slack.'
      }
    ],
    faqs: []
  },
  {
    slug: 'telecommunications',
    name: 'Telecommunications',
    category: 'Tech & SaaS',
    iconName: 'Radio',
    shortDesc: 'Tier-1 customer ticket support triage, network downtime alerts, and billing queries.',
    challenges: ['High support ticketing queues', 'Delayed network downtime alerts', 'Slow billing adjustments'],
    services: ['AI Customer Support Agents', 'AI Voice Agents', 'Workflow Automation'],
    benefits: ['80% Support Ticket Auto-Resolution', 'Instant Outage Broadcast Dispatch', 'Frictionless Billing Reconciliations'],
    useCases: [
      {
        title: 'Downtime Alert SMS Dispatcher',
        desc: 'Detects local cell tower disconnect events, sending out updates to regional user lists.'
      }
    ],
    faqs: []
  },
  {
    slug: 'energy-companies',
    name: 'Energy Companies',
    category: 'Tech & SaaS',
    iconName: 'ZapOff',
    shortDesc: 'Smart meter billing automation, customer usage analytics tracking, and support tickets triage.',
    challenges: ['Meter calibration discrepancies', 'Legacy customer analytics reporting', 'High billing inquiry queues'],
    services: ['Business Process Automation', 'Custom AI Solutions', 'Workflow Automation'],
    benefits: ['Zero Billing Discrepancy Errors', 'Real-time Analytics Dashboard Sync', '85% Customer Inquiries Auto-Resolution'],
    useCases: [
      {
        title: 'Grid Usage Anomaly System',
        desc: 'AI system parses local energy grids reports, flags line usage spikes, and alerts maintenance.'
      }
    ],
    faqs: []
  },
  {
    slug: 'agriculture',
    name: 'Agriculture',
    category: 'Tech & SaaS',
    iconName: 'Sprout',
    shortDesc: 'Smart-farm sensor metrics logging, logistics routing logs, and pricing sheet sync.',
    challenges: ['Sensory data silos', 'Unorganized crop logistics dispatcher', 'Fluctuating wholesale pricing syncs'],
    services: ['Custom AI Solutions', 'Workflow Automation', 'Business Process Automation'],
    benefits: ['Unified Smart-Farm Sensory Dashboard', 'Optimized Cargo Dispatch Schedules', 'Instant Wholesale Price Updates'],
    useCases: [
      {
        title: 'Sensory Log-to-Action Engine',
        desc: 'AI collects greenhouse moisture stats, adjusting water cycles and logging schedules.'
      }
    ],
    faqs: []
  },
  {
    slug: 'nonprofits',
    name: 'Nonprofits',
    category: 'Tech & SaaS',
    iconName: 'HeartHandshake',
    shortDesc: 'Donor outreach SMS automation, grant proposal parsing, and volunteer onboarding.',
    challenges: ['Limited administrative staff', 'Slow donor outreach updates', 'Messy volunteer paperwork logs'],
    services: ['AI Lead Generation Automation', 'Workflow Automation', 'Website Design & Development'],
    benefits: ['90% Volunteer Intake Automation', '3x Inbound Donation Campaign Outreach', 'Sub-second Grant Document Parsing'],
    useCases: [
      {
        title: 'AI Volunteer Intake Pipeline',
        desc: 'Chatbot interviews new volunteers, records credentials, and sets onboarding checklists.'
      }
    ],
    faqs: []
  },
  {
    slug: 'government-contractors',
    name: 'Government Contractors',
    category: 'Tech & SaaS',
    iconName: 'FileText',
    shortDesc: 'RFP tracking portals, document compliance audits, and secure workflow logs.',
    challenges: ['RFP document scanning bottleneck', 'Complex compliance audit compliance', 'Manual secure ledger logs entries'],
    services: ['Custom AI Solutions', 'AI Consulting', 'Workflow Automation'],
    benefits: ['5x Speed in RFP Screening', '100% FedRAMP/ITAR Compliant Auditing', 'Automated Secure Ledger Entries'],
    useCases: [
      {
        title: 'Secure Compliance RFP Auditor',
        desc: 'System parses federal RFPs, flags security check constraints, and generates drafts.'
      }
    ],
    faqs: []
  },
  {
    slug: 'education',
    name: 'Education',
    category: 'Medical & Wellness', // using existing or fallback to simplify categorizations
    iconName: 'GraduationCap',
    shortDesc: 'Student admissions intake automation, query triage chat tools, and course scheduling.',
    challenges: ['High admissions email backlog', 'Repetitive student queries', 'Messy class scheduling files'],
    services: ['AI Chatbot Development', 'Workflow Automation', 'CRM Automation'],
    benefits: ['80% Support Ticket Reduction', '24/7 Admissions Portal Help Desk', 'Zero Class Booking Conflicts'],
    useCases: [
      {
        title: 'Admissions Inquiry Assistant',
        desc: 'AI chatbot answers questions regarding tuition, deadlines, and courses, helping students register.'
      }
    ],
    faqs: []
  },
  {
    slug: 'universities',
    name: 'Universities',
    category: 'Professional Services',
    iconName: 'BookOpen',
    shortDesc: 'Alumni database sync automation, research paper categorization, and department scheduling.',
    challenges: ['Fragmented alumni tracking databases', 'Messy research libraries categorizations', 'Department operations bottlenecks'],
    services: ['Custom AI Solutions', 'Workflow Automation', 'Business Process Automation'],
    benefits: ['100% Alumni CRM Synchronization', 'Automated Metadata Ingestion for Research', 'Frictionless Class Scheduling Sync'],
    useCases: [
      {
        title: 'Alumni Outreach System',
        desc: 'AI monitors donation records, triggers thank-you cards, and synchronizes lists with HubSpot.'
      }
    ],
    faqs: []
  },
  {
    slug: 'online-learning',
    name: 'Online Learning',
    category: 'Tech & SaaS',
    iconName: 'Globe',
    shortDesc: 'Self-serve student onboarding, course progress triggers, and payment portal sync.',
    challenges: ['Student dropouts during trial courses', 'Slow student support response times', 'SKU-level billing errors'],
    services: ['AI Lead Generation Automation', 'AI Chatbot Development', 'Workflow Automation'],
    benefits: ['25% Retention Improvement', 'Instant Lesson Triage Support', 'Frictionless Checkout Integrations'],
    useCases: [
      {
        title: 'Trial Lesson Progress Trigger Engine',
        desc: 'AI tracks lesson drop-offs, SMSs custom review tips, and matches student scheduling requests.'
      }
    ],
    faqs: []
  }
];
