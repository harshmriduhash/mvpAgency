import React from "react";
import { Timeline } from "./timeline";

export function Showcase() {
  const data = [
    {
      title: "BuildersCabal",
      description: "A comprehensive directory that connects founders, operators, and innovators focused on building and scaling tech companies across Africa.",
      image: "/samples/builderscabal.png",
      href: "https://www.builderscabal.com",
      xhref: "https://x.com/builderscabal"
    },
    {
      title: "MyGadgetPadi",
      description: "A platform for repairing, trading in, and protecting your gadgets seamlessly.",
      image: "/samples/mygadgetpadi.png",
      href: "https://www.mygadgetpadi.com",
      xhref: "https://x.com/mygadgetpadi"
    },
    {
      title: "BCP Origins (Referral Program)",
      description: "An engaging referral program for an entrepreneurial community, designed to encourage growth and collaboration.",
      image: "/samples/originacademy.png",
      href: "https://originacademy.bcporigins.com/referral-program",
      xhref: "https://x.com/bcp_origins"
    },
    {
      title: "File Storage (Internal Tool)",
      description: "A versatile file storage application supporting multiple file types for streamlined management.",
      image: "/samples/file-storage.png",
      href: "#",
      xhref: "#"
    },
    {
      title: "Artivio",
      description: "A cutting-edge platform for generating AI-powered images and videos, enriched with community-driven features.",
      image: "/samples/artivio.png",
      href: "#",
      xhref: "#"
    },
    {
      title: "PriceWatcher",
      description: "A powerful web application that tracks real-time Amazon prices to help users save money effortlessly.",
      image: "/samples/pricewatcher.png",
      href: "https://pricewatcher.vercel.app",
      xhref: "#"
    },
  ];

  return (
    <div className="w-full bg-[#FAFAFA] dark:bg-background">
      <Timeline data={data} />
    </div>
  );
};