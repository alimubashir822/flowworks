import React from "react";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/seo";
import { BLOG_POSTS } from "@/lib/blog-data";
import BlogDetailClient from "./BlogDetailClient";

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
    openGraph: {
      title: `${post.title} | FlowWorks AI Blog`,
      description: post.excerpt,
      url: `https://flowworks.ai/blog/${post.slug}`,
      type: "article",
      publishedTime: post.dateIso,
      authors: [post.author.name],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | FlowWorks AI Blog`,
      description: post.excerpt,
      images: [post.image],
    },
    alternates: {
      canonical: `https://flowworks.ai/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Compute Related Posts: up to 3 posts in same category or recent posts, excluding current post
  const relatedPosts = BLOG_POSTS.filter(
    (p) => p.category === post.category && p.slug !== post.slug
  ).slice(0, 3);

  if (relatedPosts.length < 3) {
    const additionalPosts = BLOG_POSTS.filter(
      (p) => p.category !== post.category && p.slug !== post.slug
    ).slice(0, 3 - relatedPosts.length);
    relatedPosts.push(...additionalPosts);
  }

  return (
    <>
      {/* Dynamic SEO Schemas */}
      <SEO
        type="Breadcrumb"
        breadcrumbs={[
          { name: "Home", item: "https://flowworks.ai" },
          { name: "Blog", item: "https://flowworks.ai/blog" },
          { name: post.title, item: `https://flowworks.ai/blog/${post.slug}` },
        ]}
      />
      <SEO
        type="Article"
        articleTitle={post.title}
        articleImage={post.image}
        datePublished={post.dateIso}
        description={post.excerpt}
        url={`https://flowworks.ai/blog/${post.slug}`}
        authorName={post.author.name}
      />
      {post.faqs && post.faqs.length > 0 && (
        <SEO type="FAQ" faqs={post.faqs} />
      )}

      <Navbar />

      <main className="min-h-screen bg-dark-grid pt-32 pb-24 text-white">
        {/* Ambient glows */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#8B5CF6]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#00D2FF]/5 rounded-full blur-[120px] pointer-events-none" />

        <BlogDetailClient post={post} relatedPosts={relatedPosts} />
      </main>

      <Footer />
    </>
  );
}
