"use client";

import React, { useState } from "react";
import { TrendingDown, Sparkles, ShieldCheck } from "lucide-react";

export default function RoiCalculator() {
  const [tickets, setTickets] = useState<number>(10000);
  const [costPerTicket, setCostPerTicket] = useState<number>(15);
  const [resolutionRate, setResolutionRate] = useState<number>(85);

  // Constants
  const aiCostPerTicket = 1.5; // Success fee for AI resolution
  const platformFee = 500; // Platform fee

  // Calculations
  const currentMonthlyCost = tickets * costPerTicket;
  
  // AI resolved cost (tickets * resolutionRate% * $1.50)
  const aiResolvedCost = tickets * (resolutionRate / 100) * aiCostPerTicket;
  
  // Escalated cost (tickets * (1 - resolutionRate%) * costPerTicket)
  const escalatedCost = tickets * (1 - resolutionRate / 100) * costPerTicket;
  
  const totalAiMonthlyCost = aiResolvedCost + escalatedCost + platformFee;
  const netMonthlySavings = Math.max(0, currentMonthlyCost - totalAiMonthlyCost);
  const annualSavings = netMonthlySavings * 12;

  // Format currency
  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <div className="glass-panel p-8 rounded-2xl border border-white/5 space-y-8 bg-black/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
      <div className="space-y-2">
        <h3 className="font-display text-2xl font-bold text-white flex items-center gap-2">
          <TrendingDown className="w-6 h-6 text-[#00D2FF]" />
          Calculate Your Support ROI
        </h3>
        <p className="text-xs text-gray-400">
          Adjust the sliders below to estimate savings by shifting human support queues to autonomous agents.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
        {/* Sliders Block */}
        <div className="space-y-6">
          {/* Slider 1: Tickets */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-gray-400">Monthly Support Tickets</span>
              <span className="text-white font-semibold">{tickets.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="1000"
              max="50000"
              step="1000"
              value={tickets}
              onChange={(e) => setTickets(Number(e.target.value))}
              className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#00D2FF] outline-none"
            />
            <div className="flex justify-between text-[10px] text-gray-600 font-mono">
              <span>1k</span>
              <span>25k</span>
              <span>50k</span>
            </div>
          </div>

          {/* Slider 2: Average Cost per Ticket */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-gray-400">Average Cost Per Ticket</span>
              <span className="text-white font-semibold">{formatCurrency(costPerTicket)}</span>
            </div>
            <input
              type="range"
              min="5"
              max="50"
              step="1"
              value={costPerTicket}
              onChange={(e) => setCostPerTicket(Number(e.target.value))}
              className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#8B5CF6] outline-none"
            />
            <div className="flex justify-between text-[10px] text-gray-600 font-mono">
              <span>$5</span>
              <span>$25</span>
              <span>$50</span>
            </div>
          </div>

          {/* Slider 3: AI Resolution Rate */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-gray-400">Target AI Resolution Rate</span>
              <span className="text-white font-semibold">{resolutionRate}%</span>
            </div>
            <input
              type="range"
              min="50"
              max="95"
              step="5"
              value={resolutionRate}
              onChange={(e) => setResolutionRate(Number(e.target.value))}
              className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-green-400 outline-none"
            />
            <div className="flex justify-between text-[10px] text-gray-600 font-mono">
              <span>50%</span>
              <span>75%</span>
              <span>95%</span>
            </div>
          </div>
        </div>

        {/* Results Block */}
        <div className="glass-panel p-6 rounded-xl border border-white/5 bg-white/[0.02] flex flex-col justify-between space-y-6 glow-blue">
          <div className="space-y-4">
            <div className="flex justify-between items-center text-xs font-mono border-b border-white/5 pb-3">
              <span className="text-gray-500">Current Cost</span>
              <span className="text-gray-400 line-through">{formatCurrency(currentMonthlyCost)}/mo</span>
            </div>
            <div className="flex justify-between items-center text-xs font-mono border-b border-white/5 pb-3">
              <span className="text-gray-500">AI Support Cost</span>
              <span className="text-green-400 font-semibold">{formatCurrency(totalAiMonthlyCost)}/mo</span>
            </div>
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-gray-500">Net Monthly Savings</span>
              <span className="text-[#00D2FF] font-semibold">{formatCurrency(netMonthlySavings)}/mo</span>
            </div>
          </div>

          {/* Annual Savings Block */}
          <div className="bg-gradient-to-br from-[#00D2FF]/10 to-[#8B5CF6]/10 p-5 rounded-lg border border-[#00D2FF]/20 text-center space-y-1">
            <span className="block text-[10px] uppercase tracking-wider font-mono text-[#00D2FF]">
              Estimated Annual Savings
            </span>
            <span className="block text-3xl font-display font-extrabold text-white tracking-tight">
              {formatCurrency(annualSavings)}
            </span>
          </div>

          {/* Guarantee / Verification */}
          <div className="flex gap-2 items-center text-[10px] text-gray-500 font-mono justify-center">
            <ShieldCheck className="w-3.5 h-3.5 text-green-400 shrink-0" />
            <span>Success fee only applies to fully resolved queries</span>
          </div>
        </div>
      </div>
    </div>
  );
}
