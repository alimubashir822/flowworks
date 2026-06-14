import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import ExitIntentPopup from "@/components/ExitIntentPopup";

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
  metadataBase: new URL("https://flowworks.ai"),
  title: {
    default: "FlowWorks — Premium AI Automation & Custom Software Development Agency",
    template: "%s | FlowWorks AI",
  },
  description: "FlowWorks builds custom AI agents, automated workflows, custom software, mobile apps, and programmatic SEO systems that scale businesses.",
  keywords: ["AI Automation", "AI Agents", "Software Development", "Web Design", "Mobile Apps", "SEO Services", "FlowWorks", "FlowWorks AI"],
  alternates: {
    canonical: "./",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "FlowWorks — Premium AI Automation & Custom Software Development Agency",
    description: "FlowWorks builds custom AI agents, automated workflows, custom software, mobile apps, and programmatic SEO systems that scale businesses.",
    url: "https://flowworks.ai",
    siteName: "FlowWorks AI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FlowWorks — Premium AI Automation & Custom Software Development Agency",
    description: "FlowWorks builds custom AI agents, automated workflows, custom software, mobile apps, and programmatic SEO systems that scale businesses.",
    creator: "@flowworks_ai",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="overflow-x-hidden">
        <CustomCursor />
        {children}
        <ExitIntentPopup />
      </body>
    </html>
  );
}

