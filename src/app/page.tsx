import type { Metadata } from 'next';
import Preloader from '@/components/Preloader';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import WeAreSection from '@/components/WeAreSection';
import ClientsMarquee from '@/components/ClientsMarquee';
import ServicesSection from '@/components/ServicesSection';
import SelectedWorks from '@/components/SelectedWorks';
import BlogSection from '@/components/BlogSection';
import Footer from '@/components/Footer';
import SEO from '@/components/seo';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: "FlowWorks — Premium AI Automation & Custom Software Development Agency",
  description: "FlowWorks builds custom AI agents, automated workflows, custom software, mobile apps, and programmatic SEO systems that scale businesses.",
  alternates: {
    canonical: "/",
  },
};

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
      <SEO type="LocalBusiness" />
      <SEO type="WebSite" />
      <SEO type="FAQ" faqs={faqs} />
      
      <Preloader />
      <Navbar />
      
      <main>
        <HeroSection />
        <WeAreSection />
        <ClientsMarquee />
        <ServicesSection />
        <SelectedWorks />
        
        <CTASection />

        <BlogSection />
      </main>
      <Footer />
    </>
  );
}
