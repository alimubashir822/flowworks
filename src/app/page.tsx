import Preloader from '@/components/Preloader';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import WeAreSection from '@/components/WeAreSection';
import ClientsMarquee from '@/components/ClientsMarquee';
import ServicesSection from '@/components/ServicesSection';
import SelectedWorks from '@/components/SelectedWorks';
import ReelsSection from '@/components/ReelsSection';
import WorksGrid from '@/components/WorksGrid';
import BlogSection from '@/components/BlogSection';
import Footer from '@/components/Footer';
import ExitIntentPopup from '@/components/ExitIntentPopup';
import MultiStepLeadForm from '@/components/MultiStepLeadForm';
import SEO from '@/components/seo';

export default function Home() {
  const faqs = [
    {
      question: "What does FlowWorks AI do?",
      answer: "FlowWorks AI is a premium AI automation and custom software agency. We build autonomous AI agents, coordinate automated APIs, and develop custom cross-platform software.",
    },
    {
      question: "What is your primary tech stack?",
      answer: "We develop primarily using TypeScript, Next.js, React Native, Node.js, and advanced vector search/LLM databases (Pinecone, PGVector, OpenAI, Anthropic).",
    },
    {
      question: "How do I claim a free AI audit?",
      answer: "Simply scroll to our audit section, fill out the 3-step form, and our senior system architect will send you a tailored automation flowchart.",
    },
  ];

  return (
    <>
      <SEO type="Organization" />
      <SEO type="FAQ" faqs={faqs} />
      
      <Preloader />
      <Navbar />
      <ExitIntentPopup />
      
      <main>
        <HeroSection />
        <WeAreSection />
        <ClientsMarquee />
        <ServicesSection />
        <SelectedWorks />
        <ReelsSection />
        <WorksGrid />
        
        {/* Dynamic Multi-Step Lead Section */}
        <section id="lead-form-section" className="bg-dark-grid py-24 px-6 border-t border-white/5 relative">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#8B5CF6]/5 rounded-full blur-[130px] pointer-events-none" />
          <div className="max-w-4xl mx-auto text-center space-y-4 mb-12 relative z-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#00D2FF]">
              Get Started
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white uppercase">
              Schedule Your AI Operations Audit
            </h2>
            <p className="text-sm text-gray-400 max-w-xl mx-auto leading-relaxed">
              Fill out our interactive multi-step audit to outline your systems and discover high-value automation potential.
            </p>
          </div>
          <div className="relative z-10">
            <MultiStepLeadForm />
          </div>
        </section>


        <BlogSection />
      </main>
      <Footer />
    </>
  );
}
