import React from "react";
import type { Metadata } from "next";
import BlogListingClient from "./BlogListingClient";

export const metadata: Metadata = {
  title: "FlowWorks Thinking — AI Automation & Software Development Insights",
  description: "Read our technical blueprints, operational strategy guides, and code templates for building autonomous AI agents, enterprise automated workflows, and scaling custom software.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogListingPage() {
  return <BlogListingClient />;
}
