"use client";

import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import MultiStepLeadForm from "./MultiStepLeadForm";

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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 z-[999999] overflow-y-auto">
      <div className="glass-panel p-6 sm:p-8 rounded-3xl max-w-2xl w-full border border-white/10 glow-purple relative animate-in fade-in zoom-in duration-300 my-8">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors cursor-none z-[9999999] bg-white/5 p-2 rounded-full border border-white/10"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="text-center space-y-3 mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-[#00D2FF] bg-[#00D2FF]/10 px-3 py-1 rounded-full border border-[#00D2FF]/20 w-max mx-auto block">
            Limited Time Opportunity
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white uppercase">
            Schedule Your AI Operations Audit
          </h2>
          <p className="text-xs text-gray-400 max-w-md mx-auto leading-relaxed">
            Before you go, fill out our interactive multi-step audit to outline your systems and discover high-value automation potential.
          </p>
        </div>

        <div className="relative z-10">
          <MultiStepLeadForm />
        </div>
      </div>
    </div>
  );
}
