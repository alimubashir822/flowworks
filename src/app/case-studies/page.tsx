import React from "react";
import type { Metadata } from "next";
import CaseStudiesClient from "./CaseStudiesClient";

export const metadata: Metadata = {
  title: "AI Integration & Automated Workflows Case Studies",
  description: "Explore our collection of real-world AI automation and custom software development case studies showing how we help companies save hundreds of hours.",
  alternates: {
    canonical: "/case-studies",
  },
};

export default function CaseStudiesPage() {
  return <CaseStudiesClient canonicalPath="/case-studies" />;
}
