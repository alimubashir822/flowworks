import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import SEO from "@/components/seo";
import { getSEOCombination, SERVICES, STATES, CITIES } from "@/lib/location-data";
import { INDUSTRIES_DATA } from "@/lib/industry-data";
import { parsePSEOSlug, getRelationsForPSEOSlug, TECHNOLOGIES } from "@/lib/programmatic-seo";
import RelatedServices from "@/components/RelatedServices";
import RelatedIndustries from "@/components/RelatedIndustries";
import RelatedResources from "@/components/RelatedResources";
import { MapPin, Globe, Rocket, HelpCircle, ChevronRight, Cpu } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

// Generate static params for all combinations
export async function generateStaticParams() {
  const params: { slug: string }[] = [];
  
  // 1. Legacy routes: Combine services with states
  SERVICES.forEach((service) => {
    Object.keys(STATES).forEach((stateKey) => {
      params.push({ slug: `${service.slug}-services-${stateKey}` });
    });
  });

  // 2. Legacy routes: Combine services with cities
  SERVICES.forEach((service) => {
    Object.keys(CITIES).forEach((cityKey) => {
      params.push({ slug: `${service.slug}-${cityKey}` });
    });
  });

  // 3. New PSEO Locations: [service-slug]-in-[city]
  const locationServices = ["ai-automation-services", "ai-agent-development", "software-development"];
  locationServices.forEach((serviceSlug) => {
    Object.keys(CITIES).forEach((cityKey) => {
      params.push({ slug: `${serviceSlug}-in-${cityKey}` });
    });
  });

  // 4. New PSEO Industries: [service-slug]-for-[industry]
  const industryServices = ["ai-automation", "ai-agents"];
  industryServices.forEach((serviceSlug) => {
    INDUSTRIES_DATA.forEach((ind) => {
      params.push({ slug: `${serviceSlug}-for-${ind.slug}` });
    });
  });

  // 5. New PSEO Technologies
  Object.keys(TECHNOLOGIES).forEach((techKey) => {
    params.push({ slug: techKey });
  });

  return params;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  
  // Filter out normal static pages
  const staticPages = ["about", "case-study", "blog", "contact"];
  if (staticPages.includes(slug)) return {};

  const pseoData = parsePSEOSlug(slug);
  if (pseoData) {
    return {
      title: pseoData.metaTitle,
      description: pseoData.metaDesc,
      alternates: {
        canonical: `https://flowworks.ai/${slug}`
      },
      openGraph: {
        title: pseoData.metaTitle,
        description: pseoData.metaDesc,
        url: `https://flowworks.ai/${slug}`,
        type: "website"
      },
      twitter: {
        card: "summary_large_image",
        title: pseoData.metaTitle,
        description: pseoData.metaDesc
      }
    };
  }

  // Fallback to legacy combinations
  const { service, location } = getSEOCombination(slug);
  if (!service || !location) {
    return {
      title: "Not Found",
    };
  }

  const locationName = location.parentState 
    ? `${location.name}, ${location.code}` 
    : location.name;

  return {
    title: `Best ${service.name} in ${locationName} | FlowWorks AI`,
    description: `FlowWorks AI provides premium ${service.name.toLowerCase()} for businesses across ${locationName}. Accelerate your workflows today.`,
    alternates: {
      canonical: `https://flowworks.ai/${slug}`
    }
  };
}

export default async function ProgrammaticSEOPage({ params }: Props) {
  const { slug } = await params;

  // Filter out static routes to let Next.js handle them elsewhere
  const staticPages = ["about", "case-study", "blog", "contact"];
  if (staticPages.includes(slug)) {
    notFound();
  }

  // 1. Try to parse as new Programmatic SEO page
  const pseoData = parsePSEOSlug(slug);

  if (pseoData) {
    const relations = getRelationsForPSEOSlug(slug);

    return (
      <>
        {/* Dynamic Schema Injection */}
        <SEO type="Breadcrumb" breadcrumbs={pseoData.breadcrumbs} />
        <SEO type="FAQ" faqs={pseoData.faqs} />
        {pseoData.schemaType === "LocalBusiness" && (
          <SEO 
            type="LocalBusiness"
            name={pseoData.schemaDetails.name}
            city={pseoData.schemaDetails.address.addressLocality}
            state={pseoData.schemaDetails.address.addressRegion}
          />
        )}
        {pseoData.schemaType === "Service" && (
          <SEO 
            type="Service"
            serviceName={pseoData.title}
            description={pseoData.metaDesc}
          />
        )}
        {pseoData.schemaType === "SoftwareApplication" && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                ...pseoData.schemaDetails
              })
            }}
          />
        )}

        <Navbar />

        <main className="min-h-screen bg-dark-grid pt-32 pb-24 text-white relative overflow-hidden">
          {/* Glow Effects */}
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#8B5CF6]/5 rounded-full blur-[160px] pointer-events-none" />
          <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#00D2FF]/5 rounded-full blur-[160px] pointer-events-none" />

          <div className="max-w-6xl mx-auto px-6 relative z-10">
            {/* Breadcrumbs Navigation */}
            <nav className="flex items-center gap-2 text-xs font-mono text-gray-500 mb-6">
              {pseoData.breadcrumbs.map((crumb, idx) => (
                <React.Fragment key={idx}>
                  {idx > 0 && <ChevronRight className="w-3 h-3 text-gray-600" />}
                  {idx === pseoData.breadcrumbs.length - 1 ? (
                    <span className="text-[#00D2FF] truncate max-w-[200px]">{crumb.name}</span>
                  ) : (
                    <Link href={crumb.item.replace("https://flowworks.ai", "")} className="hover:text-white transition-colors">
                      {crumb.name}
                    </Link>
                  )}
                </React.Fragment>
              ))}
            </nav>

            <div className="space-y-10 max-w-4xl mx-auto">
              {/* Left content block */}
              <div className="space-y-10">
                <div className="space-y-4">
                  {/* Category tag */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/5 bg-white/5 text-xs font-mono tracking-wider text-[#00D2FF] uppercase">
                    {pseoData.type === "location" && <MapPin className="w-3.5 h-3.5" />}
                    {pseoData.type === "industry" && <Globe className="w-3.5 h-3.5" />}
                    {pseoData.type === "technology" && <Cpu className="w-3.5 h-3.5" />}
                    <span>{pseoData.type} Specification</span>
                  </div>

                  <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight uppercase bg-gradient-to-r from-white via-white to-gray-500 bg-clip-text text-transparent">
                    {pseoData.headerTitle}
                  </h1>

                  <p className="text-lg text-gray-300 leading-relaxed pt-2">
                    {pseoData.intro}
                  </p>
                </div>

                {/* Unique Statistics metrics */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="glass-panel p-6 rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.01] to-[#8B5CF6]/[0.02] flex flex-col justify-center">
                    <span className="text-3xl sm:text-4xl font-extrabold text-[#00D2FF] font-display">
                      {pseoData.primaryStat.value}
                    </span>
                    <span className="text-[10px] text-gray-400 mt-2 font-mono uppercase tracking-wider leading-snug">
                      {pseoData.primaryStat.label}
                    </span>
                  </div>
                  <div className="glass-panel p-6 rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.01] to-[#8B5CF6]/[0.02] flex flex-col justify-center">
                    <span className="text-3xl sm:text-4xl font-extrabold text-[#8B5CF6] font-display">
                      {pseoData.secondaryStat.value}
                    </span>
                    <span className="text-[10px] text-gray-400 mt-2 font-mono uppercase tracking-wider leading-snug">
                      {pseoData.secondaryStat.label}
                    </span>
                  </div>
                </div>

                {/* Action-oriented bullet highlights */}
                <div className="p-8 rounded-2xl bg-white/5 border border-white/5 space-y-6">
                  <h3 className="font-display text-xl font-bold text-white flex items-center gap-2 uppercase tracking-wide">
                    <Rocket className="w-5 h-5 text-[#00D2FF]" />
                    {pseoData.highlightsTitle}
                  </h3>
                  <div className="space-y-4">
                    {pseoData.highlights.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-sm text-gray-300 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] mt-2 shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specifications Detail cards */}
                <div className="space-y-6">
                  <h3 className="font-display text-xl font-bold text-white uppercase tracking-wide">
                    Target Implementation Specifications
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {pseoData.features.map((feat, idx) => (
                      <div key={idx} className="glass-panel p-6 rounded-xl border border-white/5 flex gap-4 items-start">
                        <div className="p-2.5 bg-white/5 border border-white/5 rounded-lg shrink-0">
                          <Cpu className="w-5 h-5 text-gray-400" />
                        </div>
                        <div className="space-y-1">
                          <h4 className="font-bold text-white text-sm uppercase">{feat.title}</h4>
                          <p className="text-gray-400 text-xs leading-relaxed">{feat.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Relational graph links */}
                <div className="space-y-8 pt-6 border-t border-white/5">
                  {relations.services && relations.services.length > 0 && (
                    <RelatedServices relatedSlugs={relations.services} activeSlug={slug} />
                  )}
                  {relations.industries && relations.industries.length > 0 && (
                    <RelatedIndustries relatedSlugs={relations.industries} activeSlug={slug} />
                  )}
                  {relations.resources && relations.resources.length > 0 && (
                    <RelatedResources resources={relations.resources} />
                  )}
                </div>

                {/* FAQ section */}
                <div className="space-y-6 pt-6 border-t border-white/5">
                  <h3 className="font-display text-xl font-bold text-white flex items-center gap-2 uppercase tracking-wide">
                    <HelpCircle className="w-5 h-5 text-[#00D2FF]" />
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-4">
                    {pseoData.faqs.map((faq, idx) => (
                      <div key={idx} className="glass-panel p-5 rounded-xl border border-white/5">
                        <h4 className="font-semibold text-white text-sm mb-2">{faq.question}</h4>
                        <p className="text-gray-400 text-xs leading-relaxed">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-16">
              <CTASection />
            </div>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  // 2. Fallback: Parse as legacy combination page
  const { service, location } = getSEOCombination(slug);

  if (!service || !location) {
    notFound();
  }

  const locationName = location.parentState 
    ? `${location.name}, ${location.code}` 
    : location.name;

  const titleText = `Premium ${service.name} in ${locationName}`;

  const faqs = [
    {
      question: `Why choose FlowWorks AI for ${service.name} in ${locationName}?`,
      answer: `FlowWorks AI combines top-tier technical engineering with local market expertise. We understand the specific business challenges in ${locationName} and build tailored systems to optimize workflow throughput.`,
    },
    {
      question: `Are you able to integrate with local systems in ${locationName}?`,
      answer: `Yes. We offer fully remote and hybrid deployment models, facilitating seamless custom configurations with your existing legacy systems and databases anywhere in ${location.name}.`,
    },
  ];

  const breadcrumbs = [
    { name: "Home", item: "https://flowworks.ai" },
    { name: "Services", item: `https://flowworks.ai/services/${service.slug}` },
    { name: locationName, item: `https://flowworks.ai/${slug}` },
  ];

  return (
    <>
      <SEO
        type={location.type === "city" ? "LocalBusiness" : "Service"}
        name="FlowWorks AI"
        city={location.type === "city" ? location.name : undefined}
        state={location.type === "city" ? location.parentState : location.name}
        description={`Premium ${service.name.toLowerCase()} in ${locationName}`}
      />
      <SEO type="FAQ" faqs={faqs} />
      <SEO type="Breadcrumb" breadcrumbs={breadcrumbs} />

      <Navbar />

      <main className="min-h-screen bg-dark-grid pt-32 pb-24 text-white relative">
        {/* Glow Effects */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#8B5CF6]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#00D2FF]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-2 text-xs font-mono text-[#00D2FF] mb-4 bg-white/5 border border-white/5 px-3 py-1.5 rounded-full w-max">
            <MapPin className="w-3.5 h-3.5" />
            <span>Serving: {locationName}</span>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                  {titleText}
                </h1>
                <p className="text-lg text-gray-300 leading-relaxed pt-2">
                  {location.intro}
                </p>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/5 space-y-6">
                <h3 className="font-display text-xl font-bold text-white flex items-center gap-2">
                  <Globe className="w-5 h-5 text-[#00D2FF]" />
                  Local Industry Solutions
                </h3>
                <p className="text-sm text-gray-400">
                  We specialize in tailoring custom solutions for major industries across {locationName}:
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {location.industries.map((ind, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-mono text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
                      <span>{ind}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-display text-xl font-bold text-white flex items-center gap-2">
                  <Rocket className="w-5 h-5 text-[#8B5CF6]" />
                  Our Regional Implementation Model
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Whether you are situated near {location.landmarks.join(" or ")} or elsewhere in the region, FlowWorks AI integrates secure data hubs, API nodes, and autonomous systems to maximize ROI. We design and deliver custom software frameworks configured for local network scales.
                </p>
              </div>

              <div className="space-y-4 pt-4">
                <h3 className="font-display text-xl font-bold text-white flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-[#00D2FF]" />
                  Regional FAQs
                </h3>
                <div className="space-y-4">
                  {faqs.map((faq, idx) => (
                    <div key={idx} className="glass-panel p-5 rounded-xl border border-white/5">
                      <h4 className="font-semibold text-white text-sm mb-2">{faq.question}</h4>
                      <p className="text-gray-400 text-xs leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <CTASection />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
