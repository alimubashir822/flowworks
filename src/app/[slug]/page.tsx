import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MultiStepLeadForm from "@/components/MultiStepLeadForm";
import SEO from "@/components/seo";
import { getSEOCombination, SERVICES, STATES, CITIES } from "@/lib/location-data";
import { MapPin, Globe, Rocket, HelpCircle, UserCheck } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

// Generate static params for the target combinations listed in user request
export async function generateStaticParams() {
  const params: { slug: string }[] = [];
  
  // Combine services with states
  SERVICES.forEach((service) => {
    Object.keys(STATES).forEach((stateKey) => {
      params.push({ slug: `${service.slug}-services-${stateKey}` });
    });
  });

  // Combine services with cities
  SERVICES.forEach((service) => {
    Object.keys(CITIES).forEach((cityKey) => {
      params.push({ slug: `${service.slug}-${cityKey}` });
    });
  });

  return params;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  
  // Filter out normal static pages
  const staticPages = ["about", "case-study", "blog", "contact"];
  if (staticPages.includes(slug)) return {};

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
  };
}

export default async function ProgrammaticSEOPage({ params }: Props) {
  const { slug } = await params;

  // Filter out static routes to let Next.js handle them elsewhere if needed
  const staticPages = ["about", "case-study", "blog", "contact"];
  if (staticPages.includes(slug)) {
    notFound();
  }

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
      {/* Schema Injection */}
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

      <main className="min-h-screen bg-dark-grid pt-32 pb-24 text-white">
        {/* Glow Effects */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#8B5CF6]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#00D2FF]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6">
          {/* Top Location Bar */}
          <div className="flex items-center gap-2 text-xs font-mono text-[#00D2FF] mb-4 bg-white/5 border border-white/5 px-3 py-1.5 rounded-full w-max">
            <MapPin className="w-3.5 h-3.5" />
            <span>Serving: {locationName}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                  {titleText}
                </h1>
                <p className="text-lg text-gray-300 leading-relaxed pt-2">
                  {location.intro}
                </p>
              </div>

              {/* Dynamic local industry grid */}
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

              {/* Specific landmarks & localized copy */}
              <div className="space-y-4">
                <h3 className="font-display text-xl font-bold text-white flex items-center gap-2">
                  <Rocket className="w-5 h-5 text-[#8B5CF6]" />
                  Our Regional Implementation Model
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Whether you are situated near {location.landmarks.join(" or ")} or elsewhere in the region, FlowWorks AI integrates secure data hubs, API nodes, and autonomous systems to maximize ROI. We design and deliver custom software frameworks configured for local network scales.
                </p>
              </div>

              {/* Local FAQ list */}
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

            {/* Right lead capture form */}
            <div id="lead-form-section" className="lg:col-span-5 lg:sticky lg:top-28">
              <MultiStepLeadForm />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
