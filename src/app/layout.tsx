import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FlowWorks — Premium AI Automation & Custom Software Development Agency",
  description: "FlowWorks builds custom AI agents, automated workflows, custom software, mobile apps, and programmatic SEO systems that scale businesses.",
  keywords: "AI Automation, AI Agents, Software Development, Web Design, Mobile Apps, SEO Services, FlowWorks, FlowWorks AI",
  openGraph: {
    title: "FlowWorks — Premium AI Automation & Custom Software Development",
    description: "Empower your business with custom AI agents and enterprise workflow automation.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="overflow-x-hidden">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}

