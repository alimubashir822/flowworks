export interface Message {
  sender: "customer" | "agent";
  text: string;
  time: string;
  isAction?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface CapabilityItem {
  title: string;
  description: string;
  icon: string;
}

export interface ComparisonItem {
  title: string;
  description: string;
}

export interface ServiceCopy {
  slug: string;
  seoTitle: string;
  seoDesc: string;
  heroHook: string;
  heroSubhead: string;
  bottlenecks: ComparisonItem[];
  breakthroughs: ComparisonItem[];
  capabilities: CapabilityItem[];
  widgetType: "chat" | "calculator";
  chatScript?: Message[];
  faqs: FAQItem[];
}

export const SERVICES_COPY_DATA: Record<string, ServiceCopy> = {
  "ai-employees-as-a-service": {
    slug: "ai-employees-as-a-service",
    seoTitle: "AI Employees as a Service | Scale Autonomous Operations",
    seoDesc: "Deploy fully managed virtual AI employees. Securely automate administrative operations, daily data tasks, and scheduling 24/7 without headcount friction.",
    heroHook: "Deploy Autonomous AI Employees. Scale Operations Without Headcount.",
    heroSubhead: "Integrate fully custom virtual employees that sync with Slack, Gmail, and databases. Securely automate administrative and business routines 24/7.",
    bottlenecks: [
      { title: "Linear Payroll Overhead", description: "Scaling operations traditionally requires adding headcount, leading to compound salary, benefit, and management overhead." },
      { title: "Onboarding and Training Lags", description: "Hiring human admins involves weeks of training before they achieve operational efficiency, slowing growth." },
      { title: "Human Errors & Down Time", description: "Manual data entry, scheduling syncs, and administrative pipelines are prone to fatigue, leading to costly clerical errors." }
    ],
    breakthroughs: [
      { title: "Marginal Workforce Scale", description: "Deploy virtual workers that scale immediately with computing capacity, costing a fraction of traditional salaries." },
      { title: "Instant Stack Native Integration", description: "AI employees connect to your databases, email grids, and API structures on day one, fully trained on your SOPs." },
      { title: "Flawless Execution 24/7", description: "Virtual employees execute transactional tasks with 100% precision, never fatiguing or requiring time off." }
    ],
    capabilities: [
      { title: "Administrative Automation", description: "Automate report generation, spreadsheet consolidation, and data transcription natively in your cloud environments.", icon: "Settings" },
      { title: "Operational Orchestration", description: "Sync workflows across Slack, email, databases, and third-party apps, checking logs and fixing issues automatically.", icon: "Zap" },
      { title: "Context-Aware Action", description: "AI workers read emails, evaluate attachments, extract metadata, and execute necessary backend transactions.", icon: "Database" },
      { title: "Corporate Alignment", description: "Keep systems synced and alert management when manual intervention is required, ensuring flawless risk bounds.", icon: "Award" }
    ],
    widgetType: "chat",
    chatScript: [
      { sender: "customer", text: "Hey, I need you to compile the sales reports from the CRM, compare it with Stripe invoices, and flag any discrepancies immediately.", time: "09:00" },
      { sender: "agent", text: "On it. I have fetched 142 Salesforce accounts and reconciled them with Stripe payouts. I detected two discrepancies where invoices were generated but payment failed: Account #8942 ($1,200) and Account #9021 ($450). I have logged these in the Audit Channel and drafted follow-up emails. Would you like me to send them?", time: "09:01", isAction: true },
      { sender: "customer", text: "Yes, please send them out. Also schedule our weekly recap meeting with the leadership team for Friday afternoon.", time: "09:02" },
      { sender: "agent", text: "The emails have been dispatched. I've also checked calendars and scheduled the leadership weekly recap for Friday, June 12th at 3:00 PM EST. Invites have been sent to all stakeholders.", time: "09:02", isAction: true },
      { sender: "customer", text: "Incredible, thanks for taking care of that.", time: "09:03" },
      { sender: "agent", text: "You are welcome! I'm monitoring the CRM for new payouts. Let me know if you need any other operational tasks executed.", time: "09:03" }
    ],
    faqs: [
      { question: "What exactly is an AI Employee as a Service?", answer: "An AI Employee is a custom-built, autonomous software agent trained on your company's Standard Operating Procedures (SOPs). It operates within your software stack (Slack, CRM, databases, etc.) to perform structured, repetitive administrative jobs without human management." },
      { question: "How does the AI employee access our internal systems securely?", answer: "We connect using limited-scope, encrypted API keys and private backend integrations. We strictly enforce Least Privilege Access (LPA), meaning the AI agent only reads and writes to resources explicitly required to complete its job, backed by SOC 2 compliance." },
      { question: "Can an AI employee handle unstructured data like PDF invoices or handwritten text?", answer: "Yes. Leveraging advanced OCR and LLM multimodal vision, our AI employees extract data from scanned PDFs, spreadsheets, handwritten notes, and image logs, converting them into structured database values." },
      { question: "How long does it take to train and onboard a virtual employee?", answer: "Standard administrative AI employees can be configured, trained on your data pipelines, and launched in staging within 2 to 3 weeks. Full custom systems integrating legacy databases may take 4 to 6 weeks." },
      { question: "What happens if the AI employee encounters an unfamiliar error?", answer: "The system is built with fail-safes. If a transaction falls outside its trained rules or high confidence thresholds, the AI pauses execution, generates an incident ticket with complete logs, and routes it to a human supervisor." }
    ]
  },
  "ai-customer-support-agents": {
    slug: "ai-customer-support-agents",
    seoTitle: "Autonomous AI Customer Support Agents | 24/7 CSAT Scale",
    seoDesc: "Automate up to 85% of customer support queries. Connect Zendesk, Notion, and custom APIs to resolve issues instantly with enterprise-grade security.",
    heroHook: "Resolve 85% of Support Tickets Instantly. Zero Staffing Friction.",
    heroSubhead: "Deploy autonomous, LLM-powered support agents across web, email, and SMS. Connect your knowledge bases and APIs to deliver empathetic, instant resolutions 24/7.",
    bottlenecks: [
      { title: "Escalating Support Overhead", description: "Adding Tier-1 agents to handle basic, repetitive queries spikes payroll, training, and operational costs." },
      { title: "Peak-Hour Queue Latency", description: "Peak seasons, global time-zone gaps, and backlog queues lead to hours-long response delays, dropping CSAT scores." },
      { title: "High Human Agent Burnout", description: "Answering the same password-reset or refund queries repeatedly causes employee turnover and constant hiring cycles." }
    ],
    breakthroughs: [
      { title: "Marginal Cost of Resolution", description: "Handle millions of concurrent conversations for a fraction of the cost, scaling support capacity infinitely." },
      { title: "Sub-Second Response Latency", description: "Resolve complex billing queries, shipment updates, and account issues in under 1.5 seconds, 24/7/365." },
      { title: "Consistent Empathy & Focus", description: "AI agents never fatigue, maintaining a flawless, brand-aligned voice and executing transactional changes on every call." }
    ],
    capabilities: [
      { title: "Omnichannel Continuity", description: "Deliver a seamless, unified experience across Web, Email, and SMS. Conversation context persists across channels, meaning customers never have to repeat themselves when moving from desktop live chat to mobile SMS.", icon: "Globe" },
      { title: "Deep Knowledge Integration", description: "Sync your entire operational stack in real time. Our agents securely query and update Notion, Zendesk, Salesforce, Jira, and custom REST APIs, allowing them to execute transactional workflows rather than just repeating static FAQs.", icon: "Database" },
      { title: "Context-Aware Escalation", description: "Eliminate customer frustration with warm human handoffs. When an issue requires manual judgment or empathy, the agent generates a structured summary of the chat and routes it instantly to your Tier-2 human team.", icon: "CornerDownRight" },
      { title: "Enterprise-Grade Security", description: "Engineered specifically for compliance-sensitive industries. Fully secure with SOC 2 Type II controls, HIPAA-ready data handling, and real-time PII masking to ensure sensitive customer profiles never leave your internal systems.", icon: "ShieldCheck" }
    ],
    widgetType: "chat",
    chatScript: [
      { sender: "customer", text: "Hey, I need to cancel my subscription or change it immediately. My card was charged twice this morning, and this is the third time your billing system has glitched. I'm extremely frustrated.", time: "15:04" },
      { sender: "agent", text: "I completely understand your frustration, and I'm on it. I see the duplicate charge of $149.00 on your account (ending in *4892) from 8:12 AM EST. I have already initiated a refund for the duplicate transaction, which will appear in your account in 2-3 business days. Would you like me to update your billing preference to prevent this, or assist with modifying your subscription level?", time: "15:04", isAction: true },
      { sender: "customer", text: "Thank you. Let's modify the subscription. I want to downgrade from the Enterprise Plan to the Team Plan starting next month. Can you do that without me having to fill out a form?", time: "15:05" },
      { sender: "agent", text: "Done. I have scheduled your downgrade to the Team Plan ($49/user/month) to take effect automatically on July 1st, 2026. Your current Enterprise access will remain active until then, and your next invoice will adjust to the new rate. You will receive a confirmation email with these details shortly. Is there anything else I can adjust for you today?", time: "15:05", isAction: true },
      { sender: "customer", text: "Wow, that was fast. No, that's all. Thanks for the quick help.", time: "15:06" },
      { sender: "agent", text: "You are very welcome! I'm glad I could resolve this for you quickly. Have a wonderful rest of your day!", time: "15:06" }
    ],
    faqs: [
      { question: "How do you guarantee the AI agent won't hallucinate or provide incorrect information?", answer: "We use a proprietary Retrieval-Augmented Generation (RAG) framework coupled with strict execution bounds. The AI agent only references verified sources in your knowledge bases and APIs. If a query falls outside its authorized knowledge scope, it bypasses generation entirely and initiates a warm handoff to a human agent, guaranteeing 100% factual alignment with your documentation." },
      { question: "We use custom legacy databases. How difficult is it to integrate your AI support agents?", answer: "Integration is seamless. While we offer out-of-the-box connectors for modern platforms like Zendesk, Salesforce, and HubSpot, we also provide a robust SDK and custom webhook integration. Our agents can securely interact with legacy SOAP or REST APIs to pull real-time account data or trigger backend workflows without requiring you to rebuild your legacy infrastructure." },
      { question: "What languages do the AI customer support agents support, and is the localization natural?", answer: "Our agents natively support over 95 languages, including Spanish, French, German, Mandarin, and Japanese. The translation is not a literal word-for-word translation; the LLM understands localized idioms, tone, and cultural nuances, delivering an empathetic and natural support experience tailored to each global demographic." },
      { question: "How long does it take to set up, test, and deploy a custom AI customer support agent?", answer: "For standard implementations utilizing existing knowledge bases (Notion, Zendesk, etc.), a fully functional agent can be trained and in staging within 5 to 7 business days. Custom integrations with proprietary APIs typically take 2 to 3 weeks. We mandate a rigorous automated testing phase to verify accuracy before routing live customer traffic." },
      { question: "How is this priced? Do you offer a subscription model or charge per ticket?", answer: "We offer a hybrid pricing model designed to align with your business value. Our plan includes a predictable monthly platform subscription that covers integration, security maintenance, and dashboard access, paired with a success-based cost per resolved ticket. You only pay for conversations that the AI agent successfully resolves without human intervention." }
    ]
  },
  "ai-sales-agents": {
    slug: "ai-sales-agents",
    seoTitle: "Autonomous AI Sales Agents | Scale Outbound Pipelines",
    seoDesc: "Deploy custom AI sales agents to prospect, score, and close B2B meetings. Hyper-personalized, multi-channel outreach campaigns on autopilot.",
    heroHook: "Book B2B Meetings on Autopilot. Deploy AI Sales Agents.",
    heroSubhead: "Prospect targets, compose hyper-personalized multi-channel copy, and nurture relationships across LinkedIn and email dynamically.",
    bottlenecks: [
      { title: "Generic Template Spamming", description: "BDRs blasting copy-paste templates leads to high domain block rates and single-digit conversion metrics." },
      { title: "High Research Latency", description: "Sales teams spending 15+ minutes researching each prospect's background before writing an email, limiting daily volume." },
      { title: "Inconsistent Prospect Follow-up", description: "Leads slipping through the cracks due to delayed follow-ups, resulting in missed meetings and wasted pipeline opportunity." }
    ],
    breakthroughs: [
      { title: "Individualized Personalization", description: "Generate deeply customized emails referencing prospect articles, company milestones, and pain points in milliseconds." },
      { title: "Infinite Prospecting Speed", description: "Scrape, verify, research, and outreach to hundreds of high-value accounts simultaneously without sacrificing quality." },
      { title: "Automated Active Nurturing", description: "AI agents monitor inboxes, respond to preliminary questions, counter objections, and drop calendar booking links." }
    ],
    capabilities: [
      { title: "Deep Profile Research", description: "Automatically read prospect profiles, recent publications, and company reports to extract authentic hooks.", icon: "SearchCode" },
      { title: "Context-Aware Objection Handling", description: "Respond to pricing inquiries, timing questions, and competitive objections using your sales playbook.", icon: "Sparkles" },
      { title: "Multi-Channel Sequence Scale", description: "Orchestrate automated sequences across email, LinkedIn connections, and SMS follow-ups.", icon: "Globe" },
      { title: "Clean Calendar Booking", description: "Integrate with Google Calendar, Outlook, and booking systems to schedule meetings without human BDR intervention.", icon: "Calendar" }
    ],
    widgetType: "chat",
    chatScript: [
      { sender: "customer", text: "I saw your outreach, but honestly, we don't have the budget for custom AI agents right now. Maybe in Q4.", time: "11:15" },
      { sender: "agent", text: "I completely understand—budget cycles are tight right now. Many B2B SaaS firms we work with, like Apex, initially felt the same. However, by deploying a pilot agent, they saw a 24-hour weekly reduction in lead research time within 14 days, effectively paying for the implementation. What if we structured a 30-day proof-of-concept pilot with success parameters before any enterprise commitments?", time: "11:16", isAction: true },
      { sender: "customer", text: "A pilot might work. Do you have a brochure or case study on that Apex implementation?", time: "11:17" },
      { sender: "agent", text: "Yes! I have sent the Apex Analytics case study PDF to your email. I've also included a breakdown of how we secure customer database connectors. Would you be open to a quick 10-minute technical review next Tuesday at 2 PM or Thursday at 10 AM EST?", time: "11:17", isAction: true },
      { sender: "customer", text: "Thursday at 10 AM works. Let's do it.", time: "11:18" },
      { sender: "agent", text: "Perfect. Calendar invite and details have been sent to your email. Looking forward to discussing the pilot parameters with you on Thursday!", time: "11:18", isAction: true }
    ],
    faqs: [
      { question: "How do AI Sales Agents research prospects?", answer: "The agents scan Google News, LinkedIn profiles, corporate blogs, and financial releases. They extract relevant achievements, job changes, or product launches to write a personalized introduction hook." },
      { question: "Will my email domain get blacklisted or marked as spam?", answer: "No. We implement domain spin-ups, strict volume limits per inbox, custom dkim/spf alignments, and write non-repetitive copy, keeping domain reputation pristine." },
      { question: "How does the AI handle negative responses or opt-outs?", answer: "If a prospect requests removal, the AI agent instantly flags the contact as 'Opt-Out' in your CRM and adds them to a global suppression list, ensuring compliance." },
      { question: "Can the sales agent book meetings directly in our reps' calendars?", answer: "Yes. Using calendar integrations (HubSpot, Calendly, Cal.com), the agent directly coordinates open slots, checks availability, and books meetings." },
      { question: "What CRM systems do your sales agents support?", answer: "We provide native bidirectional integrations with HubSpot, Salesforce, Pipedrive, Close, and custom REST API structures." }
    ]
  },
  "ai-voice-agents": {
    slug: "ai-voice-agents",
    seoTitle: "AI Voice Agents | Autonomous Call Center Automation",
    seoDesc: "Deploy ultra-low latency (<500ms) AI voice agents. Natural phone conversations for inbound reception and outbound follow-up calls.",
    heroHook: "Natural Conversations, Automated at Scale. Real-Time Voice.",
    heroSubhead: "Deploy voice agents that speak with natural inflection. Handle inbound reception, reservations, and customer notifications 24/7.",
    bottlenecks: [
      { title: "Abandoned Inbound Calls", description: "Understaffed call queues lead to long hold times and abandoned calls, losing prospective enterprise clients." },
      { title: "High Call Center Salaries", description: "Operating a 24/7 human call center requires shift scheduling, payroll scaling, and massive telecommunication overhead." },
      { title: "Varying Accent and Tone Quality", description: "Customer satisfaction drops when support reps lack consistency, clear brand tone, or technical training." }
    ],
    breakthroughs: [
      { title: "Sub-500ms Latency Responses", description: "Engage customers with instant, zero-lag voice interactions that feel entirely natural and human." },
      { title: "Infinite Concurrent Call Lines", description: "Answer thousands of inbound calls at the exact same moment, eliminating hold times and queue drops entirely." },
      { title: "Flawless Tone Consistency", description: "Maintain a professional, patient, and empathetic voice profile aligned with your company's guidelines, 24/7." }
    ],
    capabilities: [
      { title: "Inbound Call Routing", description: "Identify caller intent, resolve simple inquiries instantly, or route to human experts with warm summaries.", icon: "CornerDownRight" },
      { title: "Outbound Lead Outreach", description: "Trigger automated follow-ups to qualified digital inquiries, scheduling appointments while interest is high.", icon: "TrendingUp" },
      { title: "Bidirectional CRM Sync", description: "Transcribe calls, compile key takeaways, and update contact profiles in your CRM system in real-time.", icon: "Database" },
      { title: "Multi-Dialect Support", description: "Dynamically adapt voice accents, dialects, and languages based on country prefixes and customer response cues.", icon: "Globe" }
    ],
    widgetType: "chat",
    chatScript: [
      { sender: "customer", text: "[Call connected] Hello, I need to reschedule my consultation for tomorrow afternoon. Something came up.", time: "10:30" },
      { sender: "agent", text: "Hello! I can certainly help you reschedule. I see your current slot is tomorrow at 2:00 PM EST. I have openings tomorrow at 4:30 PM, or Friday at 11:00 AM and 1:30 PM EST. Do any of those work?", time: "10:30", isAction: true },
      { sender: "customer", text: "Friday at 1:30 PM works much better for me.", time: "10:31" },
      { sender: "agent", text: "All set! I have moved your consultation to Friday at 1:30 PM EST. You will receive an SMS and email confirmation with the updated video meeting link in a moment. Is there anything else I can coordinate?", time: "10:31", isAction: true },
      { sender: "customer", text: "Nope, that's perfect. Thank you so much.", time: "10:32" },
      { sender: "agent", text: "You're very welcome. Have a great day and we look forward to speaking with you on Friday!", time: "10:32" }
    ],
    faqs: [
      { question: "Do the voice agents sound like robotic text-to-speech systems?", answer: "No. We leverage next-generation neural speech synthesis. Our voice models incorporate realistic breathing pauses, natural intonations, and customizable accents." },
      { question: "How does the agent handle callers interrupting them mid-sentence?", answer: "Our system features real-time interruption detection. If a caller starts speaking, the agent immediately stops talking and listens, adapting to conversational flow." },
      { question: "What is the typical latency of a voice agent conversation?", answer: "We maintain a response latency of under 500 milliseconds. This mimics typical human response times, keeping the conversation fluid." },
      { question: "Is this compliant with US telephone regulation standards?", answer: "Yes. We strictly adhere to TCPA rules, FCC guidelines, and local outbound calling hours, incorporating automated consent checkups." },
      { question: "Can the AI voice agent transfer the call to a human agent?", answer: "Yes. When the caller asks for a supervisor or exhibits high frustration, the agent does a SIP transfer to your phone bank with a data payload summary." }
    ]
  },
  "ai-lead-generation-automation": {
    slug: "ai-lead-generation-automation",
    seoTitle: "AI Lead Gen Automation | Scaled Prospect Extraction",
    seoDesc: "Automate B2B prospecting. Connect directory scrapers, verify contacts, and write personalized outbound hooks using AI pipelines.",
    heroHook: "Scale B2B Prospecting. Automate Lead Generation.",
    heroSubhead: "Deploy autonomous engines that scrape directories, verify contact deliverability, and enrich customer profiles without manual labor.",
    bottlenecks: [
      { title: "Manual List Building", description: "BDRs spending hours copying contact info from directories and LinkedIn into Google Sheets is slow and costly." },
      { title: "Invalid Email Bounce Rates", description: "Outdated lists contain invalid email addresses, resulting in high bounce rates and domain reputation damage." },
      { title: "Stale Prospecting Data", description: "Scraped lists quickly become outdated as professionals change roles, leading to mismatched sales targets." }
    ],
    breakthroughs: [
      { title: "Real-Time Directory Scraping", description: "Scrape thousands of target companies and job titles daily based on real-time search signals and triggers." },
      { title: "Multi-Step Verification API", description: "Filter out catch-all emails, verify MX records, and check LinkedIn activity before saving records." },
      { title: "Enriched Context Insights", description: "Connect Apollo, Hunter, and custom endpoints to consolidate tech stacks, funding data, and hire signals." }
    ],
    capabilities: [
      { title: "Programmatic Scraping", description: "Automatically scrape local search directories, SaaS lists, and LinkedIn job postings for key decision-makers.", icon: "SearchCode" },
      { title: "Advanced Enrichment Layer", description: "Retrieve funding events, tech-stack footprints, and active hiring posts for deep prospect profiling.", icon: "Database" },
      { title: "SMTP Deliverability Verify", description: "Automatically validate email addresses using multi-layer handshake checks to protect domain reputation.", icon: "ShieldCheck" },
      { title: "Trigger-Based Workflows", description: "Trigger automated sales outreaches the moment a target company changes executive personnel or hires.", icon: "Zap" }
    ],
    widgetType: "calculator",
    faqs: [
      { question: "How does the lead generation automation obtain contact info?", answer: "The platform programmatically queries data providers, validates company registries, maps organizational charts, and checks email structures." },
      { question: "How do you ensure GDPR and CCPA compliance?", answer: "We only collect publicly available professional details. We do not extract personal consumer profiles, and we include automated opt-out options." },
      { question: "What data points are included in the prospect record?", answer: "Records include full name, corporate email, LinkedIn profile URL, phone line, company revenue, employee count, tech stack, and location details." },
      { question: "Can we filter prospects by specific tech stacks?", answer: "Yes. You can target companies using specific software solutions (e.g., Salesforce, Shopify, AWS, HubSpot) identified by script headers." },
      { question: "How does this integrate with CRM platforms?", answer: "We set up automated webhook relays that sync enriched lists directly into HubSpot, Salesforce, Pipedrive, or custom databases." }
    ]
  },
  "ai-appointment-setting": {
    slug: "ai-appointment-setting",
    seoTitle: "AI Appointment Setters | Automate Calendar Bookings",
    seoDesc: "Deploy AI appointment setters. Connect web chats, email replies, and calendar availability to book qualified B2B sales meetings 24/7.",
    heroHook: "Convert Leads to Booked Meetings. Deploy AI Appointment Setters.",
    heroSubhead: "Deploy conversational AI setters to qualify leads, coordinate calendar availability, and book appointments directly on autopilot.",
    bottlenecks: [
      { title: "Slow Inquiry Response", description: "Waiting hours to respond to a inbound lead drop reduces calendar booking conversion rates by over 300%." },
      { title: "Endless Schedule Email Loops", description: "Repetitive back-and-forth emails comparing schedule times results in prospect drop-offs and lost meetings." },
      { title: "Qualifying Unfit Accounts", description: "Sales reps spending valuable demo hours speaking with prospects who lack the budget, authority, or timeline requirements." }
    ],
    breakthroughs: [
      { title: "Sub-Second Lead Engagement", description: "Respond to inbound calendar requests immediately via web chat, SMS, or email, scheduling meetings instantly." },
      { title: "Frictionless Booking Coordinate", description: "Connect directly to team schedules to suggest optimized meeting slots, booking calendars in one interaction." },
      { title: "Automated Lead Qualification", description: "Pre-screen prospects based on budget and integration requirements before sharing calendar schedules." }
    ],
    capabilities: [
      { title: "Immediate Lead Capture", description: "Capture prospective leads via web chat, email responses, and ad page redirects, initiating booking flows.", icon: "Globe" },
      { title: "Flexible Schedule Match", description: "Connect with Cal.com, Calendly, or Outlook to suggest and coordinate times across multiple team calendars.", icon: "Calendar" },
      { title: "Interactive Qualification", description: "Verify target buyer profiles, company scale, and system readiness before booking high-value slots.", icon: "ShieldCheck" },
      { title: "Automated Lead Routing", description: "Assign meetings dynamically to sales reps based on region, product line, or account tier rules.", icon: "CornerDownRight" }
    ],
    widgetType: "chat",
    chatScript: [
      { sender: "customer", text: "Hi, I'd like to schedule a product demo for our engineering team. We have about 15 people.", time: "14:22" },
      { sender: "agent", text: "I'd be glad to arrange that! To ensure we tailor the demo, what software system does your team currently use to manage support tickets?", time: "14:22" },
      { sender: "customer", text: "We use Jira and Slack, and we are looking to integrate AI workflows.", time: "14:23" },
      { sender: "agent", text: "Perfect. We have specialized connectors for Jira and Slack that optimize ticket routing. I've fetched calendar availability for our integration architects. Would next Wednesday at 11 AM EST or Thursday at 3 PM EST work for your team?", time: "14:23", isAction: true },
      { sender: "customer", text: "Thursday at 3 PM EST works well.", time: "14:24" },
      { sender: "agent", text: "Confirmed! I've booked the Jira Integration Demo for Thursday, June 18th at 3:00 PM EST. The calendar invite and video link have been sent to your inbox. I'm looking forward to the call!", time: "14:24", isAction: true }
    ],
    faqs: [
      { question: "How does the AI coordinate schedules across multiple team members?", answer: "The system runs a round-robin check across your sales reps' integrated calendars, finding mutual availability while preventing double-bookings." },
      { question: "What qualification criteria can the AI setter verify?", answer: "It can qualify leads based on budget ranges, team headcount, current software stacks, implementation timelines, or geographic location." },
      { question: "Can the setter handle follow-ups if a prospect drops out mid-conversation?", answer: "Yes. If a prospect stops responding during the booking flow, the AI sends a polite reminder follow-up SMS or email 24 hours later." },
      { question: "Does this support external booking tools like Calendly?", answer: "Yes. We integrate with Calendly, Cal.com, HubSpot Meetings, Google Calendar, and Microsoft Outlook." },
      { question: "How does the system prevent spam or low-quality bookings?", answer: "The AI verifies email domains and reviews lead profiles against your target customer checklist before confirming calendar events." }
    ]
  },
  "ai-chatbot-development": {
    slug: "ai-chatbot-development",
    seoTitle: "Custom AI Chatbot Development | Enterprise Conversational AI",
    seoDesc: "Build bespoke conversational AI chatbots. Train models securely on internal databases, knowledge bases, and custom corporate guidelines.",
    heroHook: "Bespoke Conversational AI. Trained on Your Internal Data.",
    heroSubhead: "We design and develop intelligent conversational chatbots trained on your internal documentation, product guides, and corporate tone guidelines.",
    bottlenecks: [
      { title: "Generic Pre-Programmed Chatbots", description: "Legacy rule-based chat systems fail to resolve complex, unstructured customer queries, driving users away." },
      { title: "Internal Document Search Lags", description: "Employees spend hours searching through internal wikis, policy sheets, and PDFs to retrieve simple policy details." },
      { title: "Risk of Brand Hallucinations", description: "Using basic LLMs without guardrails can lead to inaccurate answers, causing legal risks and customer confusion." }
    ],
    breakthroughs: [
      { title: "Context-Aware RAG Pipelines", description: "Train chatbots on internal docs, Notion pages, and guidelines, providing accurate answers with page citations." },
      { title: "Dynamic Flow Adaptation", description: "Deliver natural, conversational responses that resolve complex multi-step queries instead of using rigid script trees." },
      { title: "Strict Guardrail Frameworks", description: "Implement strict content filters and execution parameters to ensure 100% brand-aligned, safe interactions." }
    ],
    capabilities: [
      { title: "Retrieval-Augmented Generation (RAG)", description: "Securely index vector databases containing your internal SOPs, product catalogs, and policy guides for accurate answers.", icon: "Database" },
      { title: "Custom Tone & Voice Alignment", description: "Design a unique chatbot persona that matches your brand guidelines, technical requirements, and target audience style.", icon: "Sparkles" },
      { title: "Contextual Citation Tracing", description: "Provide source citations and document links with every response, allowing users to verify information sources.", icon: "SearchCode" },
      { title: "Omnichannel Deployment API", description: "Deploy your custom chatbot seamlessly across Web wrappers, Slack channels, Microsoft Teams, and WhatsApp.", icon: "Globe" }
    ],
    widgetType: "chat",
    chatScript: [
      { sender: "customer", text: "Where can I find our updated expense policy for business travel? I have a client dinner next week.", time: "16:40" },
      { sender: "agent", text: "According to page 4 of the updated 2026 Employee Handbook, client dinners are reimbursable up to $75 per person. You will need to submit itemized receipts through Expensify within 14 days. Would you like a link to the reimbursement portal?", time: "16:40", isAction: true },
      { sender: "customer", text: "Yes, send that over. Also, is alcohol covered under that limit?", time: "16:41" },
      { sender: "agent", text: "Yes, reasonable alcohol purchases are covered as long as they remain within the $75 per person limit. However, separate alcohol-only receipts are not reimbursable. Here is the Expensify portal link: [expensify.flowworks.ai](https://flowworks.ai/mock-expensify)", time: "16:41", isAction: true },
      { sender: "customer", text: "Got it. Thanks!", time: "16:42" },
      { sender: "agent", text: "You're welcome! Let me know if you have any other questions about the expense policy.", time: "16:42" }
    ],
    faqs: [
      { question: "How do you train the chatbot on our proprietary documents?", answer: "We set up a secure Retrieval-Augmented Generation (RAG) pipeline. Documents are parsed, split, embedded, and stored in a secure vector database that the AI queries in real-time." },
      { question: "Is our data used to train public models like OpenAI?", answer: "No. We establish private API routing. All customer data and chat transcripts are excluded from public LLM training datasets." },
      { question: "Can the chatbot pull real-time database details like order statuses?", answer: "Yes. By connecting securely to your internal ERP or database APIs, the chatbot can query and display real-time order and account information." },
      { question: "What document formats does the system support?", answer: "We support PDF, DOCX, TXT, Markdown, Notion Pages, Zendesk Help Center links, Confluence Spaces, and SQL/NoSQL databases." },
      { question: "How do you test the chatbot for accuracy before launch?", answer: "We run automated validation tests against custom Q&A evaluation datasets, scoring responses on factual accuracy and brand alignment." }
    ]
  },
  "crm-automation": {
    slug: "crm-automation",
    seoTitle: "Enterprise CRM Automation | Sync HubSpot & Salesforce",
    seoDesc: "Automate lead routing, CRM data cleanup, and automated deal stage alerts. Connect HubSpot and Salesforce to custom REST API endpoints.",
    heroHook: "Connect Your Pipeline. Automate CRM Operations.",
    heroSubhead: "Optimize lead assignments, automate database cleanups, and trigger custom alerts. Keep sales pipelines operating at peak performance.",
    bottlenecks: [
      { title: "Manual Data Entry", description: "Reps spending up to 30% of their work week copying invoice details and email summaries into CRM profiles." },
      { title: "Outdated CRM Records", description: "Invalid emails, empty fields, and duplicate records lead to misrouted sales pipelines and poor forecasting." },
      { title: "Delayed Lead Handbacks", description: "A lack of real-time pipeline sync delays human sales outreach, losing prospective customers to competitors." }
    ],
    breakthroughs: [
      { title: "Automated Data Ingestion", description: "Parse inbox details, form submissions, and meeting transcripts to automatically enrich CRM contact records." },
      { title: "Programmatic Duplication Filter", description: "Run automated scripts to identify, merge, and clean duplicate entries and catch-all email domains." },
      { title: "Instant Event Triggers", description: "Sync CRM stages with slack updates, billing creation, and custom API actions the moment a contract is signed." }
    ],
    capabilities: [
      { title: "Bidirectional Sync Engine", description: "Build secure sync pipelines across HubSpot, Salesforce, Stripe, QuickBooks, and internal databases.", icon: "Database" },
      { title: "Automated Lead Routing", description: "Route leads instantly to sales reps based on region, target tier, or product interest rules.", icon: "CornerDownRight" },
      { title: "Data Enrichment Layer", description: "Integrate Apollo, ZoomInfo, and LinkedIn to enrich prospect fields automatically upon email submission.", icon: "SearchCode" },
      { title: "Custom Alert Webhooks", description: "Notify sales teams via Slack or SMS immediately when prospects visit pricing pages or open proposals.", icon: "Zap" }
    ],
    widgetType: "calculator",
    faqs: [
      { question: "What CRM systems do you automate?", answer: "We build custom automations and sync integrations for HubSpot, Salesforce, Pipedrive, Zoho CRM, Close, and custom CRM databases." },
      { question: "How do you handle duplicate data entries?", answer: "We implement custom logic rules that merge duplicate accounts based on email domains, phone match metrics, or tax registrations." },
      { question: "Can we automate invoicing directly from CRM status changes?", answer: "Yes. We configure pipelines that trigger QuickBooks, Stripe, or Xero invoice creation the moment a deal is moved to 'Closed-Won'." },
      { question: "How do you keep our data secure during transfer?", answer: "All data transfers use HTTPS encryption, OAuth 2.0 authentication, and secure webhook sign-offs." },
      { question: "Do you charge per user seat for CRM integration?", answer: "No. We build custom API automation pipelines for your company, meaning you pay for setup and maintenance without per-seat licenses." }
    ]
  },
  "workflow-automation": {
    slug: "workflow-automation",
    seoTitle: "Custom Workflow Automation | Connect APIs & Databases",
    seoDesc: "Automate company routines. Link custom databases with cloud APIs using Node.js scripts, Python workflows, and Make.com grids.",
    heroHook: "Eliminate Manual Tasks. Automate Operations Pipelines.",
    heroSubhead: "Connect legacy databases, cloud platforms, and internal APIs to run operations seamlessly without manual copy-pasting.",
    bottlenecks: [
      { title: "Fragmented SaaS Stacks", description: "Using disconnected cloud apps requires employees to copy-paste data across spreadsheets and platforms." },
      { title: "Delayed Document Processes", description: "Contracts, invoices, and reports waiting in queues for manual approval and data entry, slowing down business." },
      { title: "High Clerical Error Rates", description: "Manual data entry inevitably leads to typos, missing attachments, and incorrect transaction amounts." }
    ],
    breakthroughs: [
      { title: "Unified Operations Pipelines", description: "Connect all your software tools into a single, continuous automation flow that triggers actions instantly." },
      { title: "Automated Document Processing", description: "Extract data, generate invoices, draft PDFs, and file documents programmatically based on workflow events." },
      { title: "100% Error-Free Execution", description: "Run complex business operations with automated scripts that validate values, matching data formats perfectly." }
    ],
    capabilities: [
      { title: "Multi-App Integrations", description: "Connect systems across Shopify, Stripe, Slack, Gmail, and custom API endpoints using custom code pipelines.", icon: "Globe" },
      { title: "Automated File Management", description: "Organize folders, upload attachments, and index files automatically across Google Drive, Dropbox, and cloud storage.", icon: "Database" },
      { title: "Event-Driven Webhooks", description: "Configure webhooks to trigger instant system actions across email, CRM, and databases when events fire.", icon: "Zap" },
      { title: "Comprehensive Logs Dashboard", description: "Monitor automation health, log execution errors, and track data transfer statistics via a custom panel.", icon: "SearchCode" }
    ],
    widgetType: "calculator",
    faqs: [
      { question: "Do you use third-party tools like Zapier or custom code?", answer: "We use a hybrid approach. For simple cloud tasks, we use platforms like Make.com or Zapier. For complex enterprise tasks, we write custom Node.js/Python serverless scripts." },
      { question: "Can you connect older legacy databases to modern cloud apps?", answer: "Yes. We can bridge legacy SQL databases, local servers, or older SOAP APIs to modern cloud applications using custom secure connector layers." },
      { question: "What happens if an API endpoint goes down?", answer: "Our workflows feature automatic retries, queue buffers, error logs, and immediate alerts via Slack or SMS to prevent data loss." },
      { question: "How do you ensure data security during transfer?", answer: "We encrypt all data in transit using TLS 1.3, store API credentials in secure key vaults, and strictly follow SOC 2 guidelines." },
      { question: "Do we retain full ownership of the automation scripts?", answer: "Yes. Once built and deployed, you own the intellectual property and code assets, and can host them on your own cloud account." }
    ]
  },
  "business-process-automation": {
    slug: "business-process-automation",
    seoTitle: "BPA Solutions | Automate Enterprise Process Workflows",
    seoDesc: "Automate complex business operations. Streamline employee onboarding, invoice approvals, and logistics updates using custom BPA software.",
    heroHook: "Scale Your Enterprise. Automate Complex Operations.",
    heroSubhead: "We audit, redesign, and automate core operational processes, from employee onboarding to logistics updates.",
    bottlenecks: [
      { title: "Slow Administrative Processes", description: "Traditional contract routing and employee onboarding steps take days and require constant follow-up." },
      { title: "Disorganized Invoicing Log", description: "Invoices passing through multiple email loops for manual sign-off, delaying vendor payouts." },
      { title: "Manual Inventory Updates", description: "Warehouse staff manually checking stock logs and ordering supplies, causing delays and errors." }
    ],
    breakthroughs: [
      { title: "Instant Contract Routing", description: "Generate, route, track, and file contracts programmatically, reducing completion times from days to minutes." },
      { title: "Automated Invoice Auditing", description: "Use AI to audit invoice lines, match them with purchase orders, and flag deviations automatically." },
      { title: "Real-Time Log Updates", description: "Connect ERP systems with shipment tracking data to update inventory logs and customer portals instantly." }
    ],
    capabilities: [
      { title: "Onboarding Automation", description: "Generate credentials, distribute contracts, set up workspace permissions, and assign training modules programmatically.", icon: "Settings" },
      { title: "Approval Routing Engine", description: "Route expense claims, invoices, and purchase requests to managers, sending automatic reminders to prevent delays.", icon: "CornerDownRight" },
      { title: "Inventory Sync Integration", description: "Sync stock levels, alert suppliers when stock is low, and update shipping logs automatically across platforms.", icon: "Database" },
      { title: "Performance Reports Panel", description: "Track processing times, identify system bottlenecks, and monitor automation logs from a central dashboard.", icon: "SearchCode" }
    ],
    widgetType: "calculator",
    faqs: [
      { question: "What is the difference between BPA and simple task automation?", answer: "BPA integrates and automates complex multi-step processes (like full employee onboarding or supply chain logs) across a whole company, rather than just simple tasks." },
      { question: "How do we audit automated business steps?", answer: "Our systems generate detailed audit logs for every transaction, listing timestamps, processed fields, and approval steps." },
      { question: "Can the system process approvals through Slack or Microsoft Teams?", answer: "Yes. We configure interactive buttons in Slack or Teams so managers can approve invoices or requests with a single click." },
      { question: "Does this require replacing our existing software tools?", answer: "No. We build automation layers that sit on top of and connect your existing platforms (ERP, HRIS, CRM, Finance) using secure APIs." },
      { question: "What is the average ROI timeline for BPA deployment?", answer: "Most enterprises recover their setup costs within 3 to 6 months by reducing manual admin time and processing errors." }
    ]
  },
  "ai-consulting": {
    slug: "ai-consulting",
    seoTitle: "B2B AI Consulting & Strategy | FlowWorks AI",
    seoDesc: "Work with senior AI architects to design technical roadmaps, assess automation feasibility, and evaluate compliance parameters.",
    heroHook: "Design Your Strategy. Work with Expert AI Architects.",
    heroSubhead: "We partner with corporate teams to analyze operational structures, evaluate AI ROI potential, and draft technical integration blueprints.",
    bottlenecks: [
      { title: "Vague AI Implementations", description: "Firms deploying AI projects without clear business cases or integration blueprints, wasting time and budget." },
      { title: "Undetected Compliance Risks", description: "Launching AI models that inadvertently leak customer PII data or violate industry regulations." },
      { title: "Disorganized Software Integrations", description: "Using disconnected, off-the-shelf AI tools that fail to integrate cleanly with legacy enterprise databases." }
    ],
    breakthroughs: [
      { title: "Factual Feasibility Audits", description: "Assess internal workflows and database architecture to outline high-impact, achievable AI use cases." },
      { title: "Compliance-First Safeguards", description: "Design private routing models that meet SOC 2, HIPAA, and GDPR standards before writing any code." },
      { title: "Custom Integration Blueprints", description: "Draft step-by-step engineering blueprints that outline system dependencies, API paths, and deployment timelines." }
    ],
    capabilities: [
      { title: "Architecture Readiness Audit", description: "Analyze your database systems, API setups, and software stack to determine AI integration options.", icon: "Database" },
      { title: "Risk & Compliance Plan", description: "Evaluate data processing workflows to ensure compliance with HIPAA, GDPR, and SOC 2 security regulations.", icon: "ShieldCheck" },
      { title: "Operational ROI Projections", description: "Build custom financial models to estimate project costs, platform fees, and potential operational savings.", icon: "TrendingUp" },
      { title: "Technical Setup Blueprints", description: "Draft structured system diagrams, database models, and API paths to guide developers during building.", icon: "SearchCode" }
    ],
    widgetType: "calculator",
    faqs: [
      { question: "What does an AI Consulting engagement look like?", answer: "We begin with discovery sessions to review your workflows, followed by data structure audits, feasibility reports, and a final technical roadmap." },
      { question: "Do you sell third-party AI software or licenses?", answer: "No. We are independent technical architects. We design customized blueprints and build software tailored to your company's IP." },
      { question: "How do you evaluate AI feasibility for our workflows?", answer: "We analyze criteria like task frequency, data structure consistency, API access options, compliance requirements, and potential cost savings." },
      { question: "Can you help our internal development team build the solution?", answer: "Yes. We provide complete technical blueprints, system architecture models, and developer guides to support your team." },
      { question: "Do you sign Non-Disclosure Agreements (NDAs) before discovery?", answer: "Yes. We mandate mutual NDAs before reviewing any internal operational data or software stacks." }
    ]
  },
  "custom-ai-solutions": {
    slug: "custom-ai-solutions",
    seoTitle: "Custom AI Software Solutions | Vector Search & Fine-Tuning",
    seoDesc: "Engineer bespoke AI software. Custom LLM fine-tuning, vector database setup, and secure REST semantic search frameworks.",
    heroHook: "Bespoke AI Engineering. Custom Vector Search & Fine-Tuning.",
    heroSubhead: "We build tailored AI models, secure vector databases, and semantic search systems designed for your company's workflows.",
    bottlenecks: [
      { title: "Inaccurate Public LLMs", description: "Using basic LLMs without proprietary data leads to inaccurate, generic answers that fail to resolve company-specific queries." },
      { title: "Slow Search in Large Databases", description: "Traditional keyword search tools fail to find relevant resources in massive databases of unstructured documents." },
      { title: "Data Privacy Concerns", description: "Sending sensitive business data to public LLM servers poses privacy risks and violates security regulations." }
    ],
    breakthroughs: [
      { title: "Proprietary Model Fine-Tuning", description: "Fine-tune open-source models (like Llama-3) on your company's training data, achieving highly accurate results." },
      { title: "High-Speed Semantic Search", description: "Build vector database setups that parse thousands of complex documents in milliseconds based on search intent." },
      { title: "Private Cloud Deployments", description: "Deploy custom AI models in your secure cloud account (AWS, GCP, Azure), keeping data private and secure." }
    ],
    capabilities: [
      { title: "Bespoke Model Fine-Tuning", description: "Train open-source LLMs on your proprietary datasets, aligning tone, rules, and outcomes with your requirements.", icon: "Cpu" },
      { title: "Vector Search Implementation", description: "Index unstructured text files into vector databases (Pinecone, pgvector) to enable high-speed semantic search.", icon: "SearchCode" },
      { title: "Custom Processing Pipelines", description: "Build automated pipelines to clean, chunk, embed, and update document indices in real-time.", icon: "Database" },
      { title: "Secure Cloud Deployments", description: "Host your custom models on private secure servers with restricted API access, keeping your data protected.", icon: "ShieldCheck" }
    ],
    widgetType: "calculator",
    faqs: [
      { question: "When is model fine-tuning better than using standard RAG?", answer: "RAG is ideal for retrieving factual information from changing documents. Fine-tuning is better for teaching a model a custom tone, formatting output styles, or using specialized industry vocabulary." },
      { question: "Which open-source LLM models do you customize?", answer: "We primarily work with Meta's Llama series, Mistral AI models, and Google's Gemma models, choosing the best match for your task." },
      { question: "What vector databases do you support?", answer: "We support pgvector (PostgreSQL), Pinecone, Milvus, Qdrant, and Weaviate database structures." },
      { question: "How do you protect data security during training?", answer: "All training is done on private cloud servers. Your datasets are encrypted at rest and in transit, and are never shared with public APIs." },
      { question: "How long does it take to deploy a custom fine-tuned model?", answer: "A typical fine-tuning project, including database cleaning, training runs, and testing, takes 4 to 8 weeks." }
    ]
  },
  "website-design-and-development": {
    slug: "website-design-and-development",
    seoTitle: "Premium Next.js Web App Design & Development",
    seoDesc: "Design and build premium, highly interactive Next.js web applications. Custom glassmorphism styles, fluid animations, and speed optimization.",
    heroHook: "Interactive Web Interfaces. Premium Next.js App Development.",
    heroSubhead: "We design and build premium Next.js web applications featuring glassmorphic designs, fluid animations, and conversion-optimized layouts.",
    bottlenecks: [
      { title: "Generic Website Layouts", description: "Using basic page designs that fail to engage users, resulting in low conversion rates and poor brand impressions." },
      { title: "Slow Page Loading Speeds", description: "Websites bogged down by heavy code blocks, causing high bounce rates and hurting organic search rankings." },
      { title: "Rigid Content Editing Systems", description: "Marketing teams waiting on developers for minor copy changes due to rigid, hardcoded page structures." }
    ],
    breakthroughs: [
      { title: "Premium Dynamic Visuals", description: "Create premium web layouts with custom interactive components, smooth scroll animations, and glassmorphism elements." },
      { title: "95+ Core Web Vital Scores", description: "Optimize image assets, use static page generation, and write clean code to ensure fast page loading speeds." },
      { title: "Decoupled Headless CMS Options", description: "Connect headless content management systems (Sanity, Strapi), allowing marketing teams to edit copy without code changes." }
    ],
    capabilities: [
      { title: "Interactive Next.js Web Apps", description: "Build highly performant web applications using Next.js App Router, React Server Components, and clean styles.", icon: "Laptop" },
      { title: "Responsive Interface Styling", description: "Design beautiful layouts that adapt to any screen size, ensuring a premium experience on both mobile and desktop.", icon: "Globe" },
      { title: "Performance Optimizations", description: "Optimize code bundles, compress media files, and utilize CDN edge caching to achieve high Lighthouse speed scores.", icon: "Zap" },
      { title: "SEO-Ready Page Structures", description: "Implement correct header hierarchies, custom metadata tags, and JSON-LD schema blocks to boost search visibility.", icon: "SearchCode" }
    ],
    widgetType: "calculator",
    faqs: [
      { question: "Why do you build web applications using Next.js?", answer: "Next.js combines fast server-side rendering, static page generation, and optimized code delivery, ensuring high search rankings and smooth user experiences." },
      { question: "Do you use generic page builders or templates?", answer: "No. Every interface we build is designed from scratch in Figma and custom-coded, matching your brand identity and goals." },
      { question: "Can we connect the website to our internal tools and CRM?", answer: "Yes. We build secure API integrations that connect your site to HubSpot, Salesforce, Stripe, and custom backend systems." },
      { question: "What content management systems (CMS) do you support?", answer: "We support headless platforms like Sanity, Contentful, and Strapi, as well as classic databases and serverless CMS configurations." },
      { question: "How long does a custom web application project take?", answer: "A custom web application project, including design, coding, testing, and deployment, typically takes 4 to 8 weeks." }
    ]
  },
  "seo-services": {
    slug: "seo-services",
    seoTitle: "Technical & Programmatic SEO Services | FlowWorks AI",
    seoDesc: "Scale organic search traffic. Technical website audits, custom schema implementation, and programmatic landing page generation.",
    heroHook: "Scale Organic Search Traffic. Technical & Programmatic SEO.",
    heroSubhead: "Maximize organic outreach using custom programmatic architectures, structured metadata schemas, and speed optimization audits.",
    bottlenecks: [
      { title: "Slow Landing Page Scaling", description: "Manually designing and writing pages targeting individual markets is slow and limits keyword coverage." },
      { title: "Unstructured Search Meta Tags", description: "Missing JSON-LD schemas and incorrect title structures prevent search engines from index matching your pages." },
      { title: "Slow Page Speed Penalties", description: "Slow loading speeds lower keyword rankings and cause prospective customers to leave the site." }
    ],
    breakthroughs: [
      { title: "Programmatic Page Scale", description: "Build page generators that generate hundreds of custom, keyword-targeted pages based on data templates." },
      { title: "Structured Schema Integration", description: "Implement correct JSON-LD schema blocks that unlock rich search snippets, boosting click-through rates." },
      { title: "Fast Core Web Vital Speeds", description: "Audit server settings and clean up client code to achieve high mobile page speeds, improving search visibility." }
    ],
    capabilities: [
      { title: "Programmatic SEO Generators", description: "Build landing page systems that generate hundreds of optimized pages targeting local or industry keywords.", icon: "Globe" },
      { title: "JSON-LD Schema Implementation", description: "Embed structured Service, Product, and FAQ schemas to help search engines index your pages correctly.", icon: "SearchCode" },
      { title: "Page Speed Audits", description: "Optimize assets, clean up render-blocking code, and configure CDN caches to improve search engine crawling speeds.", icon: "Zap" },
      { title: "Bidirectional Internal Linking", description: "Automate internal link placement across pages, distributing page authority and improving indexing.", icon: "Database" }
    ],
    widgetType: "calculator",
    faqs: [
      { question: "What is Programmatic SEO?", answer: "Programmatic SEO uses database templates to generate hundreds of high-quality, targeted landing pages for specific keyword variations (like service-city or tool-integration variations)." },
      { question: "How do you prevent duplicate content flags on programmatic pages?", answer: "We customize each page by using location-specific details, custom case study metrics, and dynamic copy templates." },
      { question: "What schema types do you implement?", answer: "We implement structured Service, Product, LocalBusiness, FAQ, Breadcrumb, and Article schemas matching Schema.org guidelines." },
      { question: "Do you write blog content or focus on technical SEO?", answer: "We focus on technical site optimization, programmatic page setups, and search architecture rather than basic copywriting." },
      { question: "How long does it take to see organic traffic growth?", answer: "Technical and programmatic updates usually show search index indexing within 3 to 6 weeks, with steady traffic growth over the following months." }
    ]
  },
  "app-design-and-development": {
    slug: "app-design-and-development",
    seoTitle: "Premium React Native App Design & Development",
    seoDesc: "Build high-performance iOS and Android applications. Cross-platform React Native architectures, offline support, and native animations.",
    heroHook: "Custom Mobile Applications. React Native iOS & Android Dev.",
    heroSubhead: "We design and build premium mobile applications featuring cross-platform codebases, offline support, and fluid native animations.",
    bottlenecks: [
      { title: "Maintaining Two Codebases", description: "Building separate iOS and Android apps doubles development costs, timeline schedules, and software updates." },
      { title: "Lagging App Transitions", description: "Mobile apps built on basic web wrappers suffer from slow animations, lagging page transitions, and poor responsiveness." },
      { title: "Lack of Offline Functionality", description: "Apps that fail to work without a solid internet connection lose user engagement and suffer from poor review ratings." }
    ],
    breakthroughs: [
      { title: "Single Cross-Platform Codebase", description: "Use React Native to build for both iOS and Android from a single codebase, saving time and keeping apps updated." },
      { title: "Fluid Native Animations", description: "Write optimized code that utilizes native device hardware to deliver smooth animations and responsive page transitions." },
      { title: "Local Cache Database Sync", description: "Implement local storage caching (SQLite, WatermelonDB) to allow users to interact with the app offline." }
    ],
    capabilities: [
      { title: "Cross-Platform React Native Dev", description: "Build performant iOS and Android applications using a single, optimized codebase to streamline updates.", icon: "Smartphone" },
      { title: "Local Caching & Offline Support", description: "Deploy local database caching to ensure smooth app performance even without an active internet connection.", icon: "Database" },
      { title: "Native Feature Integrations", description: "Connect native features like push notifications, biometric logins, location services, and camera inputs.", icon: "Zap" },
      { title: "Secure Cloud API Handshakes", description: "Build encrypted API connections to connect your mobile app securely to payment gates and user databases.", icon: "ShieldCheck" }
    ],
    widgetType: "calculator",
    faqs: [
      { question: "Why do you build mobile applications using React Native?", answer: "React Native compiles code into native device components, giving you the performance of native apps with the speed of cross-platform updates." },
      { question: "Can the mobile app work without an internet connection?", answer: "Yes. We build local databases that store user actions and sync them with your servers when connection is restored." },
      { question: "How do you handle App Store and Play Store approvals?", answer: "We manage the entire submission process, including metadata setup, screenshots, review guidelines, and deployment approval." },
      { question: "What database systems do you use for mobile data?", answer: "For local databases, we use SQLite or WatermelonDB. For cloud databases, we build secure PostgreSQL or Firebase connections." },
      { question: "How long does a custom mobile application project take?", answer: "A custom mobile app project, from design to app store launch, typically takes 8 to 12 weeks." }
    ]
  }
};
