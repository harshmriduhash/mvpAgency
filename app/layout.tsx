import "./globals.css";
import { Metadata } from "next";
import Head from "next/head";
import LocalFont from "next/font/local";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "./providers";

export const calSans = LocalFont({
  src: "../fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

const defaultUrl = process.env.VERCEL_URL
  ? `https://www.nextmvp.tech`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "NextMVP | Build your next MVP in weeks, not months.",
  description:
    "NextMVP specializes in rapidly developing Minimum Viable Products (MVPs) for startups, offering services such as web app development, landing pages, feedback tools, SEO optimization, and more, with a typical delivery timeline of 2-4 weeks.",
  keywords:
    "MVP Development, Startup MVP, Product Launch, MVP Features, MVP Solutions, SAAS MVP, MVP for Startups, Tech Startups, Minimum Viable Product, MVP Growth, Product Development, MVP Strategy, MVP Roadmap, Scaling MVP, MVP Tools, MVP Launch, Digital Transformation, Disruptive Technologies, MVP Features, Product Innovation, MVP Design, Startup Innovation, Growth Hacking, MVP Building, Tech Ecosystem, MVP Optimization, User Acquisition, MVP Testing, Business Scaling, Product Iteration, Lean Startup, SaaS Solutions, Startup Ecosystem, Tech Pioneers, Building MVPs, Startup Success, Business Solutions.",
  openGraph: {
    images: [
      {
        url: `${defaultUrl}/landing.png`,
        width: 1200,
        height: 630,
        alt: "NextMVP | Build your next MVP in weeks not months.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NextMVP | Build your next MVP in weeks, not months.",
    description:
      "NextMVP specializes in rapidly developing Minimum Viable Products (MVPs) for startups, offering services such as web app development, landing pages, feedback tools, SEO optimization, and more, with a typical delivery timeline of 2-4 weeks.",
    images: [
      {
        url: `${defaultUrl}/landing.png`,
        width: 1200,
        height: 630,
        alt: "NextMVP | Build your next MVP in weeks not months.",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${calSans.variable} font-calsans`}>
      <head>
        {/* Google Tag Manager */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-KSNB469D2S"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-KSNB469D2S');
            `,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className={calSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <main className="bg-[#FAFAFA] dark:bg-background text-foreground flex flex-col justify-center items-center w-full pt-13">
              <div className="w-full">{children}</div>
            </main>
          </TooltipProvider>
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}