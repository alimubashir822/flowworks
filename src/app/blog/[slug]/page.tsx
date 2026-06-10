import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/seo";
import { BLOG_POSTS } from "@/lib/blog-data";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | FlowWorks AI Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <SEO
        type="Breadcrumb"
        breadcrumbs={[
          { name: "Home", item: "https://flowworks.ai" },
          { name: "Blog", item: "https://flowworks.ai/blog" },
          { name: post.title, item: `https://flowworks.ai/blog/${post.slug}` },
        ]}
      />

      <Navbar />

      <main className="min-h-screen bg-dark-grid pt-32 pb-24 text-white">
        {/* Ambient glows */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#8B5CF6]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#00D2FF]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors cursor-none group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>
          </div>

          <article className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00D2FF] uppercase tracking-wider">
                {post.category}
              </span>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight uppercase">
                {post.title}
              </h1>
              <div className="flex gap-4 items-center text-xs font-mono text-gray-500 pt-2 border-t border-white/5">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" /> {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" /> {post.readTime}
                </span>
              </div>
            </div>

            {/* Image */}
            <div className="aspect-[16/9] rounded-2xl overflow-hidden relative border border-white/5">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Body */}
            <div 
              className="prose prose-invert max-w-none text-gray-300 space-y-6 leading-relaxed text-sm sm:text-base pt-4"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        </div>
      </main>

      <Footer />
    </>
  );
}
