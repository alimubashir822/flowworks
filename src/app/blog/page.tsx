'use client';

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BLOG_POSTS } from "@/lib/blog-data";
import { ArrowRight, Clock, Calendar } from "lucide-react";

export default function BlogListingPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-dark-grid pt-32 pb-24 text-white">
        {/* Glow circles */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00D2FF]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8B5CF6]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 space-y-16">
          
          {/* Header */}
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#00D2FF]">
              FlowWorks Thinking
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold uppercase tracking-tight text-white leading-none">
              Latest Insights & Guides
            </h1>
            <p className="text-lg text-gray-400">
              Pragmatic articles covering AI Agents, custom software development, and programmatic SEO scaling.
            </p>
          </div>

          {/* Grid list */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.slug}
                className="glass-panel p-6 rounded-2xl border border-white/5 flex flex-col justify-between glass-panel-hover"
              >
                <div className="space-y-4">
                  {/* Image */}
                  <div className="aspect-[16/10] rounded-xl overflow-hidden relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>

                  {/* Meta */}
                  <div className="flex justify-between items-center text-[10px] font-mono text-gray-500">
                    <span className="px-2.5 py-1 rounded-full border border-[#00D2FF]/30 text-[#00D2FF] uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-[#00D2FF] transition-colors leading-snug">
                    {post.title}
                  </h3>
                  
                  {/* Excerpt */}
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs text-gray-500 font-mono">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> {post.date}
                  </span>
                  
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-[#00D2FF] hover:text-[#8B5CF6] transition-colors cursor-none"
                  >
                    Read More <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
