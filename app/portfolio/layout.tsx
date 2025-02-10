import { Metadata } from "next";
import { Header } from "@/components/landing-ui/header";
import { Footer } from "@/components/landing-ui/footer";
import { FadeIn } from "@/components/landing-ui/fade-in";

const defaultUrl = process.env.VERCEL_URL
  ? `https://www.nextmvp.tech/portfolio`
  : "http://localhost:3000/portfolio";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Portfolio | NextMVP",
  description:
    "PortfolioExplore our portfolio of past projects and discover inspiration for your own ideas.",
  keywords:
    "MVP Development, Startup MVP, Product Launch, MVP Features, MVP Solutions, SAAS MVP, MVP for Startups, Tech Startups, Minimum Viable Product, MVP Growth, Product Development, MVP Strategy, MVP Roadmap, Scaling MVP, MVP Tools, MVP Launch, Digital Transformation, Disruptive Technologies, MVP Features, Product Innovation, MVP Design, Startup Innovation, Growth Hacking, MVP Building, Tech Ecosystem, MVP Optimization, User Acquisition, MVP Testing, Business Scaling, Product Iteration, Lean Startup, SaaS Solutions, Startup Ecosystem, Tech Pioneers, Building MVPs, Startup Success, Business Solutions.",
  openGraph: {
    images: [
      {
        url: "https://www.nextmvp.tech/logo-icon.png",
        width: 1200,
        height: 630,
        alt: "PortfolioExplore our portfolio of past projects and discover inspiration for your own ideas.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | NextMVP",
    description:
      "PortfolioExplore our portfolio of past projects and discover inspiration for your own ideas.",
    images: [
      {
        url: "https://www.nextmvp.tech/logo-icon.png",
        width: 1200,
        height: 630,
        alt: "PortfolioExplore our portfolio of past projects and discover inspiration for your own ideas.",
      },
    ],
  },
};

export default function WorksLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <FadeIn>
        <Header />
        {children}
        <Footer />
      </FadeIn>
    </main>
  );
}
