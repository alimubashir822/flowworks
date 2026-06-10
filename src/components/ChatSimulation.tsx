"use client";

import React, { useState, useEffect, useRef } from "react";
import { MessageSquare, Bot, User, Sparkles, Check } from "lucide-react";

interface Message {
  sender: "customer" | "agent";
  text: string;
  time: string;
  isAction?: boolean;
}

const defaultScript: Message[] = [
  {
    sender: "customer",
    text: "Hey, I need to cancel my subscription or change it immediately. My card was charged twice this morning, and this is the third time your billing system has glitched. I'm extremely frustrated.",
    time: "15:04"
  },
  {
    sender: "agent",
    text: "I completely understand your frustration, and I'm on it. I see the duplicate charge of $149.00 on your account (ending in *4892) from 8:12 AM EST. I have already initiated a refund for the duplicate transaction, which will appear in your account in 2-3 business days. Would you like me to update your billing preference to prevent this, or assist with modifying your subscription level?",
    time: "15:04",
    isAction: true
  },
  {
    sender: "customer",
    text: "Thank you. Let's modify the subscription. I want to downgrade from the Enterprise Plan to the Team Plan starting next month. Can you do that without me having to fill out a form?",
    time: "15:05"
  },
  {
    sender: "agent",
    text: "Done. I have scheduled your downgrade to the Team Plan ($49/user/month) to take effect automatically on July 1st, 2026. Your current Enterprise access will remain active until then, and your next invoice will adjust to the new rate. You will receive a confirmation email with these details shortly. Is there anything else I can adjust for you today?",
    time: "15:05",
    isAction: true
  },
  {
    sender: "customer",
    text: "Wow, that was fast. No, that's all. Thanks for the quick help.",
    time: "15:06"
  },
  {
    sender: "agent",
    text: "You are very welcome! I'm glad I could resolve this for you quickly. Have a wonderful rest of your day!",
    time: "15:06"
  }
];

interface ChatSimulationProps {
  script?: Message[];
}

export default function ChatSimulation({ script }: ChatSimulationProps) {
  const activeScript = script && script.length > 0 ? script : defaultScript;
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentTurn, setCurrentTurn] = useState<number>(0);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [typingSender, setTypingSender] = useState<"customer" | "agent">("customer");
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Reset simulation whenever the script prop updates
  useEffect(() => {
    setMessages([]);
    setCurrentTurn(0);
    setIsTyping(false);
  }, [script]);

  useEffect(() => {
    // Scroll to bottom whenever messages list updates
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    if (currentTurn >= activeScript.length) {
      return;
    }

    const nextMsg = activeScript[currentTurn];
    
    // Set typing indicator before showing the message
    setIsTyping(true);
    setTypingSender(nextMsg.sender);

    // Dynamic delay: longer for longer sentences, shorter for small responses
    const typingTime = Math.min(Math.max(nextMsg.text.length * 15, 1200), 3200);

    const timer = setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [...prev, nextMsg]);
      setCurrentTurn((prev) => prev + 1);
    }, typingTime);

    return () => clearTimeout(timer);
  }, [currentTurn, activeScript]);

  const handleReset = () => {
    setMessages([]);
    setCurrentTurn(0);
    setIsTyping(false);
  };

  return (
    <div className="glass-panel rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black/40">
      {/* Simulation Header */}
      <div className="bg-[#0c0c0e] px-4 py-3 border-b border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <span className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="flex items-center gap-2 text-[11px] font-mono text-[#00D2FF] uppercase tracking-wider">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          AI Agent Status: Active | Connected to Stripe & CRM API
        </div>
        <div>
          {currentTurn >= activeScript.length && (
            <button
              onClick={handleReset}
              className="text-[10px] font-mono uppercase bg-white/5 border border-white/10 hover:border-[#00D2FF]/30 px-2 py-0.5 rounded transition-all text-gray-400 hover:text-white cursor-none"
            >
              Replay
            </button>
          )}
        </div>
      </div>

      {/* Message List area */}
      <div className="h-[420px] overflow-y-auto p-6 space-y-6 flex flex-col scrollbar-thin">
        {messages.length === 0 && !isTyping && (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-3">
            <MessageSquare className="w-8 h-8 text-white/20" />
            <p className="text-xs text-gray-500 font-mono">Simulation initializing...</p>
          </div>
        )}

        {messages.map((msg, index) => {
          const isCustomer = msg.sender === "customer";
          return (
            <div
              key={index}
              className={`flex gap-3 max-w-[85%] ${
                isCustomer ? "self-end flex-row-reverse" : "self-start"
              }`}
            >
              {/* Avatar */}
              <div
                className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center border ${
                  isCustomer
                    ? "bg-white/5 border-white/10 text-gray-300"
                    : "bg-[#00D2FF]/10 border-[#00D2FF]/20 text-[#00D2FF]"
                }`}
              >
                {isCustomer ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              {/* Bubble */}
              <div className="space-y-2">
                <div
                  className={`p-4 rounded-2xl text-sm leading-relaxed ${
                    isCustomer
                      ? "bg-white/5 border border-white/5 text-gray-200 rounded-tr-none"
                      : "bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 text-gray-100 rounded-tl-none shadow-[0_4px_20px_-5px_rgba(139,92,246,0.15)]"
                  }`}
                >
                  {msg.text}
                </div>

                {/* API Action feedback if the agent triggered an operation */}
                {msg.isAction && !isCustomer && (
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-500/10 border border-green-500/20 text-[11px] font-mono text-green-400 self-start animate-fade-in">
                    <Sparkles className="w-3 h-3 animate-spin" />
                    <span>Transaction Executed successfully</span>
                    <Check className="w-3.5 h-3.5" />
                  </div>
                )}

                <span
                  className={`block text-[10px] font-mono text-gray-600 ${
                    isCustomer ? "text-right" : "text-left"
                  }`}
                >
                  {msg.time}
                </span>
              </div>
            </div>
          );
        })}

        {/* Typing indicator */}
        {isTyping && (
          <div
            className={`flex gap-3 max-w-[85%] ${
              typingSender === "customer" ? "self-end flex-row-reverse" : "self-start"
            }`}
          >
            <div
              className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center border ${
                typingSender === "customer"
                  ? "bg-white/5 border-white/10 text-gray-300"
                  : "bg-[#00D2FF]/10 border-[#00D2FF]/20 text-[#00D2FF]"
              }`}
            >
              {typingSender === "customer" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
            </div>
            <div
              className={`p-4 rounded-2xl flex items-center justify-center gap-1 bg-white/5 border border-white/5 ${
                typingSender === "customer" ? "rounded-tr-none" : "rounded-tl-none"
              }`}
            >
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>
    </div>
  );
}
