export interface KeywordLink {
  keyword: string;
  url: string;
}

export const DEFAULT_KEYWORD_LINKS: KeywordLink[] = [
  { keyword: "AI Employees as a Service", url: "/services/ai-employees-as-a-service" },
  { keyword: "AI Employees", url: "/services/ai-employees-as-a-service" },
  { keyword: "AI Customer Support Agents", url: "/services/ai-customer-support-agents" },
  { keyword: "AI Customer Support", url: "/services/ai-customer-support-agents" },
  { keyword: "AI Sales Agents", url: "/services/ai-sales-agents" },
  { keyword: "AI Voice Agents", url: "/services/ai-voice-agents" },
  { keyword: "CRM Automation", url: "/services/crm-automation" },
  { keyword: "Workflow Automation", url: "/services/workflow-automation" },
  { keyword: "SEO Services", url: "/services/seo-services" },
  { keyword: "Programmatic SEO", url: "/blog/step-by-step-programmatic-seo" },
  { keyword: "Custom Software", url: "/blog/custom-software-vs-off-the-shelf-saas" },
  { keyword: "App Design and Development", url: "/services/app-design-and-development" },
  { keyword: "Website Design and Development", url: "/services/website-design-and-development" },
  { keyword: "Healthcare", url: "/industries" },
  { keyword: "Real Estate", url: "/industries" },
  { keyword: "Law Firms", url: "/industries" },
  { keyword: "E-commerce", url: "/industries" },
  { keyword: "Apex Analytics", url: "/case-studies" },
  { keyword: "Vertex Commerce", url: "/case-studies" },
  { keyword: "Lumina Capital", url: "/case-studies" },
  { keyword: "Echo Diagnostics", url: "/case-studies" }
];

export function injectContextualLinks(
  html: string,
  links: KeywordLink[] = DEFAULT_KEYWORD_LINKS
): string {
  if (!html) return html;

  // Split by tag boundaries to isolate plain text nodes (even indices) from tags (odd indices)
  const parts = html.split(/(<[^>]+>)/g);
  const replacedKeywords = new Set<string>();

  for (let i = 0; i < parts.length; i += 2) {
    let text = parts[i];
    if (!text) continue;

    for (const link of links) {
      if (replacedKeywords.has(link.keyword)) continue;

      const escapedKeyword = link.keyword.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
      const regex = new RegExp(`\\b(${escapedKeyword})\\b`, 'i');

      if (regex.test(text)) {
        text = text.replace(regex, `<a href="${link.url}" class="text-[#00D2FF] hover:underline font-semibold">$1</a>`);
        replacedKeywords.add(link.keyword);
        
        // If we replaced a general term like "AI Employees", also lock out "AI Employees as a Service" and vice versa
        if (link.keyword === "AI Employees" || link.keyword === "AI Employees as a Service") {
          replacedKeywords.add("AI Employees");
          replacedKeywords.add("AI Employees as a Service");
        }
        if (link.keyword === "AI Customer Support" || link.keyword === "AI Customer Support Agents") {
          replacedKeywords.add("AI Customer Support");
          replacedKeywords.add("AI Customer Support Agents");
        }
      }
    }
    parts[i] = text;
  }

  return parts.join("");
}
