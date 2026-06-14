import React from "react";
import type { Metadata } from "next";
import IndustriesClient from "./IndustriesClient";

export const metadata: Metadata = {
  title: "Industry Specific AI Automation Solutions & Case Studies",
  description: "Discover how FlowWorks deploys premium AI automation, custom software systems, and SEO growth across 40+ major industries including Healthcare, Real Estate, Law, Financial Services, and Tech.",
  alternates: {
    canonical: "/industries",
  },
};

export default function IndustriesPage() {
  return <IndustriesClient />;
}
