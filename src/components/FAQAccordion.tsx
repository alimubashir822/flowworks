"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const defaultFaqs: FAQItem[] = [
  {
    question: "How do you guarantee the AI agent won't hallucinate or provide incorrect information?",
    answer: "We use a proprietary Retrieval-Augmented Generation (RAG) framework coupled with strict execution bounds. The AI agent only references verified sources in your knowledge bases and APIs. If a query falls outside its authorized knowledge scope, it bypasses generation entirely and initiates a warm handoff to a human agent, guaranteeing 100% factual alignment with your documentation."
  },
  {
    question: "We use custom legacy databases. How difficult is it to integrate your AI support agents?",
    answer: "Integration is seamless. While we offer out-of-the-box connectors for modern platforms like Zendesk, Salesforce, and HubSpot, we also provide a robust SDK and custom webhook integration. Our agents can securely interact with legacy SOAP or REST APIs to pull real-time account data or trigger backend workflows without requiring you to rebuild your legacy infrastructure."
  },
  {
    question: "What languages do the AI customer support agents support, and is the localization natural?",
    answer: "Our agents natively support over 95 languages, including Spanish, French, German, Mandarin, and Japanese. The translation is not a literal word-for-word translation; the LLM understands localized idioms, tone, and cultural nuances, delivering an empathetic and natural support experience tailored to each global demographic."
  },
  {
    question: "How long does it take to set up, test, and deploy a custom AI customer support agent?",
    answer: "For standard implementations utilizing existing knowledge bases (Notion, Zendesk, etc.), a fully functional agent can be trained and in staging within 5 to 7 business days. Custom integrations with proprietary APIs typically take 2 to 3 weeks. We mandate a rigorous automated testing phase to verify accuracy before routing live customer traffic."
  },
  {
    question: "How is this priced? Do you offer a subscription model or charge per ticket?",
    answer: "We offer a hybrid pricing model designed to align with your business value. Our plan includes a predictable monthly platform subscription that covers integration, security maintenance, and dashboard access, paired with a success-based cost per resolved ticket. You only pay for conversations that the AI agent successfully resolves without human intervention."
  }
];

interface FAQAccordionProps {
  faqs?: FAQItem[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const activeFaqs = faqs && faqs.length > 0 ? faqs : defaultFaqs;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      {activeFaqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="glass-panel rounded-xl border border-white/5 overflow-hidden transition-all bg-black/20"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left p-6 flex justify-between items-center gap-4 hover:bg-white/[0.02] transition-colors cursor-none group"
            >
              <span className="font-display font-medium text-white text-base sm:text-lg tracking-tight group-hover:text-[#00D2FF] transition-colors">
                {faq.question}
              </span>
              <div
                className={`w-6 h-6 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180 bg-[#00D2FF]/10 border-[#00D2FF]/20" : ""
                }`}
              >
                <ChevronDown className={`w-3.5 h-3.5 transition-colors ${isOpen ? "text-[#00D2FF]" : "text-gray-400"}`} />
              </div>
            </button>

            {/* Accordion Content wrapper */}
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen ? "max-h-[300px] border-t border-white/5 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-6 text-sm sm:text-base leading-relaxed text-gray-300 bg-white/[0.01]">
                {faq.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
