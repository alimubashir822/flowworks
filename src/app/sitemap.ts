import { MetadataRoute } from "next";
import { SERVICES, STATES, CITIES } from "../lib/location-data";
import { BLOG_POSTS } from "../lib/blog-data";
import { INDUSTRIES_DATA } from "../lib/industry-data";
import { TECHNOLOGIES } from "../lib/programmatic-seo";


export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://flowworks.ai";
  
  // Core routes
  const coreRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/case-study`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/industries`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ];



  // Blog article routes
  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Service routes
  const serviceRoutes = SERVICES.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // Programmatic SEO state routes
  const stateRoutes: MetadataRoute.Sitemap = [];
  SERVICES.forEach((service) => {
    Object.keys(STATES).forEach((stateKey) => {
      stateRoutes.push({
        url: `${baseUrl}/${service.slug}-services-${stateKey}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.7,
      });
    });
  });

  // Programmatic SEO city routes
  const cityRoutes: MetadataRoute.Sitemap = [];
  SERVICES.forEach((service) => {
    Object.keys(CITIES).forEach((cityKey) => {
      cityRoutes.push({
        url: `${baseUrl}/${service.slug}-${cityKey}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.7,
      });
    });
  });

  // PSEO Location routes
  const pseoLocationRoutes: MetadataRoute.Sitemap = [];
  const locationServices = ["ai-automation-services", "ai-agent-development", "software-development"];
  locationServices.forEach((serviceSlug) => {
    Object.keys(CITIES).forEach((cityKey) => {
      pseoLocationRoutes.push({
        url: `${baseUrl}/${serviceSlug}-in-${cityKey}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.8,
      });
    });
  });

  // PSEO Industry routes
  const pseoIndustryRoutes: MetadataRoute.Sitemap = [];
  const industryServices = ["ai-automation", "ai-agents"];
  industryServices.forEach((serviceSlug) => {
    INDUSTRIES_DATA.forEach((ind) => {
      pseoIndustryRoutes.push({
        url: `${baseUrl}/${serviceSlug}-for-${ind.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.8,
      });
    });
  });

  // PSEO Technology routes
  const pseoTechRoutes: MetadataRoute.Sitemap = Object.keys(TECHNOLOGIES).map((techKey) => ({
    url: `${baseUrl}/${techKey}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    ...coreRoutes,
    ...blogRoutes,
    ...serviceRoutes,
    ...stateRoutes,
    ...cityRoutes,
    ...pseoLocationRoutes,
    ...pseoIndustryRoutes,
    ...pseoTechRoutes
  ];
}

