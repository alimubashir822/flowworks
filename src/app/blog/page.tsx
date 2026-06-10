'use client';

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BLOG_POSTS, BlogPost } from "@/lib/blog-data";
import { ArrowRight, Clock, Calendar, Search, SlidersHorizontal, Mail, CheckCircle2 } from "lucide-react";

export default function BlogListingPage() {
  // Client States
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState<"latest" | "popular">("latest");
  const [visibleCount, setVisibleCount] = useState(5);
  
  // Newsletter state
  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  // Get dynamic categories list
  const categories = useMemo(() => {
    const cats = Array.from(new Set(BLOG_POSTS.map((post) => post.category)));
    return ["All", ...cats];
  }, []);

  // Handle newsletter subscription simulation
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribeStatus("loading");
    setTimeout(() => {
      setSubscribeStatus("success");
      setEmail("");
    }, 1200);
  };

  // Find Featured Post (marked as featured, or the newest one)
  const featuredPost = useMemo(() => {
    const featured = BLOG_POSTS.find((p) => p.featured);
    if (featured) return featured;
    // Fallback to latest
    return [...BLOG_POSTS].sort(
      (a, b) => new Date(b.dateIso).getTime() - new Date(a.dateIso).getTime()
    )[0];
  }, []);

  // Filter & Sort Logic
  const filteredAndSortedPosts = useMemo(() => {
    let result = [...BLOG_POSTS];

    // 1. Exclude featured post from listing grid IF we are in the default view
    // Default view = No search filter, Selected category = 'All', Sort = 'latest'
    const isDefaultView = searchQuery.trim() === "" && selectedCategory === "All" && sortBy === "latest";
    if (isDefaultView && featuredPost) {
      result = result.filter((post) => post.slug !== featuredPost.slug);
    }

    // 2. Filter by Category
    if (selectedCategory !== "All") {
      result = result.filter((post) => post.category === selectedCategory);
    }

    // 3. Filter by Search Query
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.tags.some((tag) => tag.toLowerCase().includes(query)) ||
          post.category.toLowerCase().includes(query)
      );
    }

    // 4. Sort
    if (sortBy === "latest") {
      result.sort((a, b) => new Date(b.dateIso).getTime() - new Date(a.dateIso).getTime());
    } else if (sortBy === "popular") {
      result.sort((a, b) => b.views - a.views);
    }

    return result;
  }, [searchQuery, selectedCategory, sortBy, featuredPost]);

  // Is Featured section visible?
  const showFeaturedSection = useMemo(() => {
    return searchQuery.trim() === "" && selectedCategory === "All" && sortBy === "latest" && featuredPost;
  }, [searchQuery, selectedCategory, sortBy, featuredPost]);

  // Paginated Posts
  const paginatedPosts = useMemo(() => {
    return filteredAndSortedPosts.slice(0, visibleCount);
  }, [filteredAndSortedPosts, visibleCount]);

  const hasMore = filteredAndSortedPosts.length > visibleCount;

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-dark-grid pt-32 pb-24 text-white">
        {/* Glow circles */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00D2FF]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8B5CF6]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 space-y-16">
          
          {/* Header & Bio */}
          <div className="max-w-4xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#00D2FF]">
              FlowWorks Thinking
            </span>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-white leading-none">
              Insights on <span className="gradient-text">Automation</span> & Scale
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl">
              Pragmatic articles covering autonomous AI Agents, custom enterprise software engineering, and programmatic SEO systems.
            </p>
          </div>

          {/* Search & Filtering Controls */}
          <div className="glass-panel p-6 rounded-2xl border border-white/5 space-y-6">
            <div className="flex flex-col lg:flex-row gap-4 justify-between items-stretch lg:items-center">
              
              {/* Search Bar */}
              <div className="relative flex-1 max-w-xl">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search articles, tags, or topics..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setVisibleCount(5); // Reset pagination on search
                  }}
                  className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 hover:border-[#00D2FF]/30 focus:border-[#00D2FF] focus:ring-1 focus:ring-[#00D2FF] rounded-xl text-sm text-white placeholder-gray-500 outline-none transition-all cursor-none"
                />
              </div>

              {/* Sorting & Advanced Indicators */}
              <div className="flex items-center gap-4 self-end lg:self-auto">
                <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
                  <SlidersHorizontal className="w-3.5 h-3.5 text-[#00D2FF]" />
                  <span>Sort By:</span>
                </div>
                <div className="flex gap-2">
                  {(["latest", "popular"] as const).map((option) => (
                    <button
                      key={option}
                      onClick={() => {
                        setSortBy(option);
                        setVisibleCount(5); // Reset pagination
                      }}
                      className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold uppercase tracking-wider transition-all border cursor-none ${
                        sortBy === option
                          ? "bg-gradient-to-r from-[#00D2FF] to-[#8B5CF6] text-black border-transparent shadow-md shadow-[#00D2FF]/20"
                          : "bg-white/5 border-white/10 text-gray-400 hover:text-white hover:border-[#00D2FF]/30"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setVisibleCount(5); // Reset pagination
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all border cursor-none ${
                    selectedCategory === category
                      ? "bg-[#00D2FF]/10 text-[#00D2FF] border-[#00D2FF]/40 shadow-[0_0_15px_rgba(0,210,255,0.1)]"
                      : "bg-white/5 border-white/10 text-gray-400 hover:text-white hover:border-[#00D2FF]/30"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Article - Shown only on default filter view */}
          {showFeaturedSection && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-2">
                <span className="h-[1px] w-8 bg-[#00D2FF]" />
                <span className="text-xs font-mono uppercase tracking-wider text-[#00D2FF]">Featured Insight</span>
              </div>
              <Link href={`/blog/${featuredPost.slug}`} className="block group cursor-none">
                <article className="glass-panel p-6 lg:p-8 rounded-3xl border border-white/5 glass-panel-hover overflow-hidden relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Ambient backlighting on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00D2FF]/0 via-[#8B5CF6]/0 to-[#00D2FF]/0 group-hover:from-[#00D2FF]/2 group-hover:to-[#8B5CF6]/2 transition-all duration-500 pointer-events-none" />

                  {/* Image container */}
                  <div className="lg:col-span-7 aspect-[16/10] lg:aspect-[16/9] w-full rounded-2xl overflow-hidden relative border border-white/5">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                    <span className="absolute top-4 left-4 px-3 py-1.5 rounded-xl bg-black/75 border border-[#00D2FF]/30 text-xs font-mono text-[#00D2FF] uppercase tracking-wider">
                      {featuredPost.category}
                    </span>
                  </div>

                  {/* Post details */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
                    <div className="space-y-4">
                      {/* Meta */}
                      <div className="flex items-center gap-4 text-xs font-mono text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-[#8B5CF6]" /> {featuredPost.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-[#00D2FF]" /> {featuredPost.readTime}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white group-hover:text-[#00D2FF] transition-colors leading-tight uppercase">
                        {featuredPost.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {featuredPost.excerpt}
                      </p>
                    </div>

                    {/* Author block & Button */}
                    <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          src={featuredPost.author.avatar}
                          alt={featuredPost.author.name}
                          className="w-10 h-10 rounded-full object-cover border border-white/10"
                        />
                        <div>
                          <p className="text-sm font-semibold text-white">{featuredPost.author.name}</p>
                          <p className="text-[10px] font-mono text-gray-500">{featuredPost.author.role}</p>
                        </div>
                      </div>
                      
                      <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#00D2FF] to-[#8B5CF6] text-black font-semibold rounded-xl text-xs transition-all shadow-md shadow-[#00D2FF]/10 group-hover:shadow-[#00D2FF]/30">
                        Read Article <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>

                  </div>

                </article>
              </Link>
            </motion.div>
          )}

          {/* Articles Section */}
          <div className="space-y-8">
            {showFeaturedSection && (
              <div className="flex items-center gap-2">
                <span className="h-[1px] w-8 bg-[#8B5CF6]" />
                <span className="text-xs font-mono uppercase tracking-wider text-[#8B5CF6]">All Insights</span>
              </div>
            )}

            {filteredAndSortedPosts.length === 0 ? (
              <div className="glass-panel p-12 text-center rounded-2xl border border-white/5 space-y-4">
                <p className="text-gray-400 text-lg">No articles found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                    setSortBy("latest");
                  }}
                  className="px-6 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-xs text-white font-mono uppercase tracking-wider transition-all cursor-none"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence mode="popLayout">
                  {paginatedPosts.map((post, index) => (
                    <motion.article
                      key={post.slug}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
                      layout
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
                        <h3 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-[#00D2FF] transition-colors leading-snug uppercase">
                          {post.title}
                        </h3>
                        
                        {/* Excerpt */}
                        <p className="text-xs text-gray-400 leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>

                      {/* Card Footer */}
                      <div className="pt-5 mt-5 border-t border-white/5 flex items-center justify-between">
                        {/* Author */}
                        <div className="flex items-center gap-2">
                          <img
                            src={post.author.avatar}
                            alt={post.author.name}
                            className="w-8 h-8 rounded-full object-cover border border-white/10"
                          />
                          <div>
                            <p className="text-xs font-semibold text-white">{post.author.name}</p>
                            <p className="text-[8px] font-mono text-gray-500">{post.author.role}</p>
                          </div>
                        </div>

                        {/* Link */}
                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white/5 hover:bg-white/10 border border-white/10 group-hover:border-[#00D2FF]/40 text-[#00D2FF] font-mono text-[10px] uppercase tracking-wider rounded-xl transition-all cursor-none"
                        >
                          Read <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                      </div>
                    </motion.article>
                  ))}
                </AnimatePresence>
              </div>
            )}

            {/* Load More Button */}
            {hasMore && (
              <div className="flex justify-center pt-8">
                <button
                  onClick={() => setVisibleCount((prev) => prev + 3)}
                  className="px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#00D2FF]/40 rounded-xl text-xs font-mono uppercase tracking-widest font-semibold transition-all cursor-none"
                >
                  Load More Articles
                </button>
              </div>
            )}
          </div>

          {/* Newsletter Subscription Card CTA */}
          <section className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/5 overflow-hidden relative">
            {/* Background glowing rings */}
            <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-[#8B5CF6]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -left-12 -top-12 w-64 h-64 bg-[#00D2FF]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-3xl mx-auto text-center space-y-8 relative">
              <div className="space-y-4">
                <div className="inline-flex p-3 rounded-2xl bg-white/5 border border-white/10">
                  <Mail className="w-6 h-6 text-[#00D2FF]" />
                </div>
                <h2 className="font-display text-2xl sm:text-4xl font-bold uppercase text-white leading-none">
                  Stay Ahead of the <span className="gradient-text">Automation</span> Curve
                </h2>
                <p className="text-sm text-gray-400 max-w-xl mx-auto">
                  Subscribe to our monthly briefing. Get technical blueprints, operational strategy guides, and code templates delivered directly to your inbox.
                </p>
              </div>

              {subscribeStatus === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 bg-[#00D2FF]/10 border border-[#00D2FF]/30 rounded-2xl max-w-md mx-auto flex items-center justify-center gap-3 text-[#00D2FF]"
                >
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span className="font-mono text-sm font-semibold uppercase tracking-wider">
                    Subscription active. Welcome to the loop!
                  </span>
                </motion.div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your professional email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 px-5 py-3.5 bg-black/40 border border-white/10 hover:border-white/20 focus:border-[#00D2FF] focus:ring-1 focus:ring-[#00D2FF] rounded-xl text-sm outline-none transition-all placeholder-gray-500 cursor-none"
                  />
                  <button
                    type="submit"
                    disabled={subscribeStatus === "loading"}
                    className="px-6 py-3.5 bg-gradient-to-r from-[#00D2FF] to-[#8B5CF6] hover:from-[#00c0eb] hover:to-[#7c4ee4] text-black font-bold rounded-xl text-sm shadow-lg shadow-[#00D2FF]/20 hover:shadow-[#00D2FF]/40 transition-all cursor-none disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {subscribeStatus === "loading" ? "Joining..." : "Join Newsletter"}
                  </button>
                </form>
              )}

              <p className="text-[10px] font-mono text-gray-600">
                Zero spam. Unsubscribe at any time. Your data is protected by corporate governance protocols.
              </p>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}
