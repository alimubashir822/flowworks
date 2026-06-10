"use client";

import React, { useState, useEffect } from "react";
import { X, Sparkles, AlertCircle } from "lucide-react";

export default function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Check local storage so we don't spam the user
    const hasSeen = localStorage.getItem("flowworks-exit-popup");
    if (hasSeen) {
      setDismissed(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger if cursor goes above the viewport top boundary
      if (e.clientY < 20 && !dismissed) {
        setIsOpen(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [dismissed]);

  const handleClose = () => {
    setIsOpen(false);
    setDismissed(true);
    localStorage.setItem("flowworks-exit-popup", "true");
  };

  const handleAction = () => {
    handleClose();
    // Scroll to contact form or consult section
    const leadFormElement = document.getElementById("lead-form-section");
    if (leadFormElement) {
      leadFormElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 z-[999999]">
      <div className="glass-panel p-8 rounded-2xl max-w-md w-full border border-white/10 glow-purple relative animate-in fade-in zoom-in duration-300">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors cursor-none"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex gap-3 items-center text-[#00D2FF] mb-4">
          <Sparkles className="w-6 h-6 animate-pulse" />
          <span className="text-xs font-mono uppercase tracking-widest font-bold">Limited Offer</span>
        </div>

        <h3 className="font-display text-2xl font-bold text-white mb-3 leading-tight">
          Wait! Get a Free Custom AI Automation Audit
        </h3>
        
        <p className="text-sm text-gray-400 mb-6 leading-relaxed">
          Before you go, let our senior automation engineers map out three custom AI integrations that can save your business 20+ hours per week. Absolutely free.
        </p>

        <div className="bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 rounded-xl p-4 mb-6 flex gap-3">
          <AlertCircle className="w-5 h-5 text-[#8B5CF6] shrink-0 mt-0.5" />
          <p className="text-xs text-gray-300 leading-normal">
            We will provide a custom PDF flowchart and ROI analysis of your company's automation potential.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <button
            onClick={handleAction}
            className="w-full py-3 bg-gradient-to-r from-[#00D2FF] to-[#8B5CF6] hover:from-[#8B5CF6] hover:to-[#00D2FF] text-white font-bold rounded-lg text-sm transition-all shadow-lg hover:shadow-cyan-500/20 cursor-none text-center"
          >
            Claim Free Audit
          </button>
          <button
            onClick={handleClose}
            className="w-full py-2.5 text-xs text-gray-500 hover:text-gray-300 transition-colors cursor-none"
          >
            No thanks, I'll figure it out manually
          </button>
        </div>
      </div>
    </div>
  );
}
