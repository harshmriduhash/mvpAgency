import { Metadata } from "next";

const defaultUrl = process.env.VERCEL_URL
  ? `https://www.nextmvp.tech/tools`
  : "http://localhost:3000/tools"

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Free Startup Tools | NextMVP",
  description:
    "Get free tools to power your ideas and startups.",
  keywords:
    "MVP Development, Startup MVP, Product Launch, MVP Features, MVP Solutions, SAAS MVP, MVP for Startups, Tech Startups, Minimum Viable Product, MVP Growth, Product Development, MVP Strategy, MVP Roadmap, Scaling MVP, MVP Tools, MVP Launch, Digital Transformation, Disruptive Technologies, MVP Features, Product Innovation, MVP Design, Startup Innovation, Growth Hacking, MVP Building, Tech Ecosystem, MVP Optimization, User Acquisition, MVP Testing, Business Scaling, Product Iteration, Lean Startup, SaaS Solutions, Startup Ecosystem, Tech Pioneers, Building MVPs, Startup Success, Business Solutions.",
  openGraph: {
    images: [
      {
        url: "https://www.nextmvp.tech/logo-icon.png",
        width: 1200,
        height: 630,
        alt: "Free Startup Tools | NextMVP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Startup Tools | NextMVP",
    description:
      "Get free tools to power your ideas and startups.",
    images: [
      {
        url: "https://www.nextmvp.tech/logo-icon.png",
        width: 1200,
        height: 630,
        alt: "Free Startup Tools| NextMVP",
      },
    ],
  },
};

export default function ToolsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      {children}
    </main>
  );
};