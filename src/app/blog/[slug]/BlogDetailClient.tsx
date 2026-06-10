'use client';

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { ArrowRight, Clock, Calendar, ChevronRight, Share2, Link as LinkIcon, Check, Mail, CheckCircle2 } from "lucide-react";
import { BlogPost } from "@/lib/blog-data";
import { motion } from "framer-motion";

interface BlogDetailClientProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

export default function BlogDetailClient({ post, relatedPosts }: BlogDetailClientProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const [shareUrl, setShareUrl] = useState("");
  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setShareUrl(window.location.href);
    }
  }, []);

  // Parse headings and format content body dynamically
  const { formattedContent, headings } = useMemo(() => {
    const list: { text: string; id: string }[] = [];
    
    const getHeadingId = (text: string) => {
      return text
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-");
    };

    // Parse H2 elements
    let html = post.content;
    const h2Regex = /<h2>(.*?)<\/h2>/g;
    
    html = html.replace(h2Regex, (match, p1) => {
      const id = getHeadingId(p1);
      list.push({ text: p1, id });
      return `<h2 id="${id}" class="scroll-mt-32 font-display text-2xl md:text-3xl font-bold text-white uppercase mt-10 mb-4 border-b border-white/5 pb-2">${p1}</h2>`;
    });

    // Formatting standard classes for rich text rendering
    const styledHtml = html
      .replace(/<p>/g, '<p class="text-gray-300 leading-relaxed text-sm sm:text-base mb-6 font-sans">')
      .replace(/<ul>/g, '<ul class="list-disc pl-6 space-y-2 mb-6 text-gray-300 font-sans">')
      .replace(/<ol>/g, '<ol class="list-decimal pl-6 space-y-2 mb-6 text-gray-300 font-sans">')
      .replace(/<li>/g, '<li class="text-sm sm:text-base">')
      .replace(/<strong>/g, '<strong class="text-[#00D2FF] font-semibold">');

    return {
      formattedContent: styledHtml,
      headings: list,
    };
  }, [post.content]);

  // Scrollspy logic to track active heading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) {
          setActiveId(visibleEntry.target.id);
        }
      },
      { rootMargin: "0px 0px -60% 0px" } // Trigger when heading is in top 40% of viewport
    );

    headings.forEach((heading) => {
      const el = document.getElementById(heading.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribeStatus("loading");
    setTimeout(() => {
      setSubscribeStatus("success");
      setEmail("");
    }, 1200);
  };

  // Encoded texts for sharing
  const shareText = encodeURIComponent(`Check out this article: ${post.title}`);
  const encodedUrl = encodeURIComponent(shareUrl);

  return (
    <div className="max-w-[1400px] mx-auto px-6 space-y-12">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-[10px] font-mono text-gray-500 uppercase tracking-wider">
        <Link href="/" className="hover:text-[#00D2FF] transition-colors cursor-none">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link href="/blog" className="hover:text-[#00D2FF] transition-colors cursor-none">
          Blog
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-gray-400 truncate max-w-[200px] sm:max-w-xs">{post.title}</span>
      </nav>

      {/* Main Container Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column (Article Core) */}
        <article className="lg:col-span-8 space-y-8">
          {/* Header metadata */}
          <div className="space-y-4">
            <span className="px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-[#00D2FF] uppercase tracking-wider">
              {post.category}
            </span>
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight uppercase">
              {post.title}
            </h1>
            
            {/* Meta details */}
            <div className="flex flex-wrap gap-4 items-center text-xs font-mono text-gray-500 pt-4 border-t border-white/5">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#8B5CF6]" /> {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#00D2FF]" /> {post.readTime}
              </span>
              <span className="h-4 w-[1px] bg-white/10 hidden sm:block" />
              <div className="flex items-center gap-2">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-6 h-6 rounded-full object-cover border border-white/10"
                />
                <span className="text-gray-400">{post.author.name} — {post.author.role}</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="aspect-[16/9] rounded-2xl overflow-hidden relative border border-white/5 shadow-2xl">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
          </div>

          {/* Render parsed HTML */}
          <div
            className="prose prose-invert max-w-none text-gray-300 leading-relaxed text-sm sm:text-base pt-4 space-y-6"
            dangerouslySetInnerHTML={{ __html: formattedContent }}
          />

          {/* Share Tools (Mobile) */}
          <div className="lg:hidden p-5 glass-panel rounded-2xl border border-white/5 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-gray-400 uppercase">
              <Share2 className="w-4 h-4 text-[#00D2FF]" />
              <span>Share this insight</span>
            </div>
            <div className="flex gap-2">
              <a
                href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${shareText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 border border-white/10 rounded-xl text-gray-400 hover:text-[#00D2FF] hover:border-[#00D2FF]/40 transition-all cursor-none"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 border border-white/10 rounded-xl text-gray-400 hover:text-[#00D2FF] hover:border-[#00D2FF]/40 transition-all cursor-none"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 border border-white/10 rounded-xl text-gray-400 hover:text-[#00D2FF] hover:border-[#00D2FF]/40 transition-all cursor-none"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                </svg>
              </a>
              <button
                onClick={handleCopyLink}
                className="p-3 bg-white/5 border border-white/10 rounded-xl text-gray-400 hover:text-[#00D2FF] hover:border-[#00D2FF]/40 transition-all cursor-none flex items-center justify-center gap-1.5"
              >
                {copied ? <Check className="w-4 h-4 text-[#00D2FF]" /> : <LinkIcon className="w-4 h-4" />}
                <span className="text-[10px] font-mono uppercase">{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>
          </div>
        </article>

        {/* Right Column (Sidebar) */}
        <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-28 lg:self-start">
          {/* Table of Contents */}
          {headings.length > 0 && (
            <div className="glass-panel p-6 rounded-2xl border border-white/5 space-y-4">
              <h3 className="font-mono text-[10px] uppercase text-gray-500 tracking-widest font-semibold border-b border-white/5 pb-2">
                On This Page
              </h3>
              <nav className="space-y-3">
                {headings.map((heading) => (
                  <a
                    key={heading.id}
                    href={`#${heading.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(heading.id)?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={`block text-xs font-mono transition-all leading-snug cursor-none ${
                      activeId === heading.id
                        ? "text-[#00D2FF] pl-2 border-l border-[#00D2FF]"
                        : "text-gray-400 hover:text-white pl-0 border-l border-transparent"
                    }`}
                  >
                    {heading.text}
                  </a>
                ))}
              </nav>
            </div>
          )}

          {/* Social Share (Desktop) */}
          <div className="glass-panel p-6 rounded-2xl border border-white/5 space-y-4 hidden lg:block">
            <h3 className="font-mono text-[10px] uppercase text-gray-500 tracking-widest font-semibold border-b border-white/5 pb-2">
              Share Article
            </h3>
            <div className="grid grid-cols-4 gap-2">
              <a
                href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${shareText}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Share on X"
                className="p-3 bg-white/5 border border-white/10 rounded-xl text-gray-400 hover:text-[#00D2FF] hover:border-[#00D2FF]/40 transition-all flex justify-center cursor-none"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Share on LinkedIn"
                className="p-3 bg-white/5 border border-white/10 rounded-xl text-gray-400 hover:text-[#00D2FF] hover:border-[#00D2FF]/40 transition-all flex justify-center cursor-none"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Share on Facebook"
                className="p-3 bg-white/5 border border-white/10 rounded-xl text-gray-400 hover:text-[#00D2FF] hover:border-[#00D2FF]/40 transition-all flex justify-center cursor-none"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                </svg>
              </a>
              <button
                onClick={handleCopyLink}
                title="Copy Link"
                className="p-3 bg-white/5 border border-white/10 rounded-xl text-gray-400 hover:text-[#00D2FF] hover:border-[#00D2FF]/40 transition-all flex justify-center cursor-none"
              >
                {copied ? <Check className="w-4 h-4 text-[#00D2FF]" /> : <LinkIcon className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Sidebar Newsletter Capture */}
          <div className="glass-panel p-6 rounded-2xl border border-white/5 space-y-4">
            <h3 className="font-mono text-[10px] uppercase text-gray-500 tracking-widest font-semibold border-b border-white/5 pb-2">
              Weekly Insight
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Get corporate automation strategies and technical blueprints directly in your email inbox.
            </p>
            {subscribeStatus === "success" ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-4 bg-[#00D2FF]/10 border border-[#00D2FF]/20 rounded-xl flex items-center gap-2 text-[#00D2FF] text-xs font-mono uppercase"
              >
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>Subscribed!</span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2.5 bg-black/40 border border-white/10 hover:border-white/20 focus:border-[#00D2FF] focus:ring-1 focus:ring-[#00D2FF] rounded-xl text-xs outline-none transition-all placeholder-gray-500 cursor-none"
                />
                <button
                  type="submit"
                  disabled={subscribeStatus === "loading"}
                  className="w-full py-2.5 bg-gradient-to-r from-[#00D2FF] to-[#8B5CF6] text-black font-bold rounded-xl text-xs transition-all shadow-md shadow-[#00D2FF]/10 cursor-none disabled:opacity-50"
                >
                  {subscribeStatus === "loading" ? "Joining..." : "Subscribe"}
                </button>
              </form>
            )}
          </div>
        </aside>
      </div>

      {/* Conversion Bottom CTA */}
      <section className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/5 overflow-hidden relative mt-16">
        <div className="absolute -right-24 -bottom-24 w-80 h-80 bg-[#00D2FF]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -left-24 -top-24 w-80 h-80 bg-[#8B5CF6]/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-3xl mx-auto text-center space-y-6 relative">
          <h2 className="font-display text-2xl sm:text-4xl font-bold uppercase text-white leading-tight">
            Ready to Automate Your Operations?
          </h2>
          <p className="text-sm text-gray-400 max-w-xl mx-auto">
            We architect and deploy custom virtual workers, integration pipelines, and custom software tailored to your specific protocols.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/"
              className="px-8 py-4 bg-gradient-to-r from-[#00D2FF] to-[#8B5CF6] hover:from-[#00c0eb] hover:to-[#7c4ee4] rounded-xl text-black font-semibold shadow-lg shadow-[#00D2FF]/25 transition-all cursor-none"
            >
              Schedule Discovery Call
            </Link>
            <Link
              href="/"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white font-semibold transition-all cursor-none"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Related Articles Grid */}
      {relatedPosts.length > 0 && (
        <section className="space-y-6 pt-12 border-t border-white/5">
          <div className="flex items-center gap-2">
            <span className="h-[1px] w-8 bg-[#8B5CF6]" />
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#8B5CF6]">Related Insights</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPosts.map((post) => (
              <article
                key={post.slug}
                className="glass-panel p-5 rounded-2xl border border-white/5 flex flex-col justify-between glass-panel-hover group"
              >
                <div className="space-y-4">
                  {/* Image */}
                  <div className="aspect-[16/10] rounded-xl overflow-hidden relative border border-white/5">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-black/80 border border-[#00D2FF]/20 text-[10px] font-mono text-[#00D2FF] uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>

                  {/* Meta */}
                  <div className="flex justify-between items-center text-[10px] font-mono text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#8B5CF6]" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#00D2FF]" /> {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-base sm:text-lg font-bold text-white group-hover:text-[#00D2FF] transition-colors leading-snug uppercase">
                    {post.title}
                  </h3>
                </div>

                {/* Footer Link */}
                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-7 h-7 rounded-full object-cover border border-white/10"
                    />
                    <span className="text-[10px] font-mono text-gray-400">{post.author.name}</span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 text-[#00D2FF] font-mono text-[9px] uppercase tracking-wider rounded-lg transition-all cursor-none"
                  >
                    Read <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
