"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Check, Sparkles, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Setup zod schema for validation
const leadSchema = z.object({
  service: z.string().min(1, "Please select a service"),
  budget: z.string().min(1, "Please choose a budget range"),
  timeline: z.string().min(1, "Please select your preferred timeline"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(2, "Company name is required"),
  notes: z.string().optional(),
});

type LeadFormData = z.infer<typeof leadSchema>;

export default function MultiStepLeadForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
    mode: "onChange",
    defaultValues: {
      service: "",
      budget: "",
      timeline: "",
      name: "",
      email: "",
      company: "",
      notes: "",
    },
  });

  const selectedService = watch("service");
  const selectedBudget = watch("budget");
  const selectedTimeline = watch("timeline");

  const servicesList = [
    { id: "ai-automation", label: "AI Automation & Workflows" },
    { id: "ai-agents", label: "AI Agent Development" },
    { id: "custom-software", label: "Custom Software & SaaS" },
    { id: "mobile-apps", label: "Mobile Applications" },
    { id: "web-dev", label: "Premium Web Development" },
    { id: "seo", label: "Programmatic SEO & Growth" },
  ];

  const budgets = [
    { id: "under-10k", label: "< $10,000" },
    { id: "10k-30k", label: "$10,000 - $30,000" },
    { id: "30k-100k", label: "$30,000 - $100,000" },
    { id: "above-100k", label: "$100,000+" },
  ];

  const timelines = [
    { id: "urgent", label: "Immediate (< 1 Month)" },
    { id: "normal", label: "1 to 3 Months" },
    { id: "flexible", label: "Flexible Schedule" },
  ];

  const nextStep = () => {
    if (step === 1 && !selectedService) return;
    if (step === 2 && (!selectedBudget || !selectedTimeline)) return;
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const onSubmit = (data: LeadFormData) => {
    console.log("Lead Form Submitted:", data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="glass-panel p-8 rounded-2xl border border-white/10 glow-blue text-center max-w-xl mx-auto my-8"
      >
        <div className="w-16 h-16 bg-[#00D2FF]/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Sparkles className="w-8 h-8 text-[#00D2FF] animate-pulse" />
        </div>
        <h3 className="font-display text-2xl font-bold mb-3 text-white">Request Received!</h3>
        <p className="text-gray-400 mb-6 text-sm leading-relaxed">
          Our senior AI automation architect is analyzing your project profile. We will contact you at <strong>{watch("email")}</strong> within 4 hours.
        </p>
        <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-left text-xs space-y-2 text-gray-300">
          <div className="flex justify-between">
            <span className="text-gray-500">Service:</span>
            <span className="font-medium text-white">{servicesList.find(s => s.id === selectedService)?.label}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Budget:</span>
            <span className="font-medium text-white">{budgets.find(b => b.id === selectedBudget)?.label}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Timeline:</span>
            <span className="font-medium text-[#00D2FF]">{timelines.find(t => t.id === selectedTimeline)?.label}</span>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="glass-panel p-6 sm:p-10 rounded-2xl border border-white/10 max-w-2xl mx-auto glow-purple relative overflow-hidden"
    >
      {/* Progress Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
        <div
          className="h-full bg-gradient-to-r from-[#00D2FF] to-[#8B5CF6] transition-all duration-300"
          style={{ width: `${(step / 3) * 100}%` }}
        />
      </div>

      <div className="flex justify-between items-center mb-8">
        <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">
          Step {step} of 3
        </span>
        <span className="text-xs font-mono text-[#00D2FF] uppercase tracking-widest">
          FlowWorks AI Audit
        </span>
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="space-y-6"
          >
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
                Select Your Core Objective
              </h3>
              <p className="text-sm text-gray-400">
                Which high-value automation or development channel do you wish to deploy?
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {servicesList.map((svc) => {
                const isSelected = selectedService === svc.id;
                return (
                  <button
                    key={svc.id}
                    type="button"
                    onClick={() => setValue("service", svc.id, { shouldValidate: true })}
                    className={`p-4 rounded-xl border text-left transition-all duration-200 cursor-none flex items-center justify-between group/btn ${
                      isSelected
                        ? "border-[#00D2FF] bg-[#00D2FF]/10 text-white"
                        : "border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-gray-300"
                    }`}
                  >
                    <span className="text-sm font-medium transition-transform duration-200 group-hover/btn:translate-x-1">{svc.label}</span>
                    {isSelected && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-5 h-5 bg-[#00D2FF]/20 rounded-full flex items-center justify-center border border-[#00D2FF]/30"
                      >
                        <Check className="w-3 h-3 text-[#00D2FF]" />
                      </motion.div>
                    )}
                  </button>
                );
              })}
            </div>
            {errors.service && (
              <span className="text-xs text-red-400">{errors.service.message}</span>
            )}

            <div className="pt-4 flex justify-end">
              <button
                type="button"
                disabled={!selectedService}
                onClick={nextStep}
                className="px-6 py-3 bg-white text-black hover:bg-[#00D2FF] hover:text-black font-semibold rounded-lg text-sm transition-all duration-200 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-none"
              >
                Continue <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                Project Parameters
              </h3>
              
              <div>
                <label className="text-xs text-gray-400 block mb-2 font-mono uppercase tracking-wider">
                  Investment Budget Range
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {budgets.map((b) => (
                    <button
                      key={b.id}
                      type="button"
                      onClick={() => setValue("budget", b.id, { shouldValidate: true })}
                      className={`p-3 rounded-lg border text-center text-xs transition-all duration-200 cursor-none ${
                        selectedBudget === b.id
                          ? "border-[#00D2FF] bg-[#00D2FF]/10 text-white font-semibold"
                          : "border-white/5 bg-white/5 text-gray-400 hover:border-white/15"
                      }`}
                    >
                      {b.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <label className="text-xs text-gray-400 block mb-2 font-mono uppercase tracking-wider">
                  Deployment Timeline
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {timelines.map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setValue("timeline", t.id, { shouldValidate: true })}
                      className={`p-3 rounded-lg border text-center text-xs transition-all duration-200 cursor-none ${
                        selectedTimeline === t.id
                          ? "border-[#8B5CF6] bg-[#8B5CF6]/10 text-white font-semibold"
                          : "border-white/5 bg-white/5 text-gray-400 hover:border-white/15"
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="px-5 py-2.5 border border-white/10 hover:bg-white/5 rounded-lg text-xs font-semibold transition-all cursor-none"
              >
                Back
              </button>
              <button
                type="button"
                disabled={!selectedBudget || !selectedTimeline}
                onClick={nextStep}
                className="px-6 py-3 bg-white text-black hover:bg-[#00D2FF] hover:text-black font-semibold rounded-lg text-sm transition-all flex items-center gap-2 cursor-none"
              >
                Next Step <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="space-y-4"
          >
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
              Secure Consult Details
            </h3>

            <div className="space-y-3">
              <div>
                <label className="text-xs text-gray-400 block mb-1">Your Full Name</label>
                <input
                  type="text"
                  {...register("name")}
                  data-cursor-hover="true"
                  placeholder="Jane Doe"
                  className="w-full bg-white/5 border border-white/10 focus:border-[#00D2FF] focus:bg-white/[0.07] rounded-lg px-4 py-2.5 text-sm outline-none text-white transition-all cursor-none"
                />
                {errors.name && <span className="text-xs text-red-400">{errors.name.message}</span>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-gray-400 block mb-1">Business Email</label>
                  <input
                    type="email"
                    {...register("email")}
                    data-cursor-hover="true"
                    placeholder="jane@company.com"
                    className="w-full bg-white/5 border border-white/10 focus:border-[#00D2FF] focus:bg-white/[0.07] rounded-lg px-4 py-2.5 text-sm outline-none text-white transition-all cursor-none"
                  />
                  {errors.email && (
                    <span className="text-xs text-red-400">{errors.email.message}</span>
                  )}
                </div>
                <div>
                  <label className="text-xs text-gray-400 block mb-1">Company / Organization</label>
                  <input
                    type="text"
                    {...register("company")}
                    data-cursor-hover="true"
                    placeholder="Acme Corp"
                    className="w-full bg-white/5 border border-white/10 focus:border-[#00D2FF] focus:bg-white/[0.07] rounded-lg px-4 py-2.5 text-sm outline-none text-white transition-all cursor-none"
                  />
                  {errors.company && (
                    <span className="text-xs text-red-400">{errors.company.message}</span>
                  )}
                </div>
              </div>

              <div>
                <label className="text-xs text-gray-400 block mb-1">Project Details / Goals (Optional)</label>
                <textarea
                  {...register("notes")}
                  rows={3}
                  data-cursor-hover="true"
                  placeholder="Tell us about the systems you'd like to integrate..."
                  className="w-full bg-white/5 border border-white/10 focus:border-[#00D2FF] focus:bg-white/[0.07] rounded-lg px-4 py-2.5 text-sm outline-none text-white transition-all cursor-none"
                />
              </div>
            </div>

            <div className="pt-4 flex justify-between items-center">
              <button
                type="button"
                onClick={prevStep}
                className="px-5 py-2.5 border border-white/10 hover:bg-white/5 rounded-lg text-xs font-semibold transition-all cursor-none"
              >
                Back
              </button>
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-[#00D2FF] to-[#8B5CF6] hover:from-[#8B5CF6] hover:to-[#00D2FF] text-white font-bold rounded-lg text-sm transition-all flex items-center gap-2 shadow-lg hover:shadow-cyan-500/20 cursor-none"
              >
                Submit Audit Request <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}
