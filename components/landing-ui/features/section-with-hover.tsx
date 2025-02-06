import { cn } from "@/lib/utils";
import { Activity, Component, GalleryVerticalEnd, Network, SearchCheck, ShieldCheck, Users, Zap } from "lucide-react";

export function SectionWithHover() {
  const features = [
    {
      title: "Rapid Delivery",
      description:
        "Launch your MVP in just 2-4 weeks.",
      icon: <Zap />,
    },
    {
      title: "Complete Solution",
      description:
        "Web app, landing page, and feedback tools included. Everything you need to validate your idea in the market.",
      icon: <GalleryVerticalEnd />,
    },
    {
      title: "Cutting-Edge Tech",
      description:
        "We leverage the latest technologies to build fast, stable, and scalable products.",
      icon: <Network />,
    },
    {
      title: "User-Centric Design",
      description:
        "A seamless, engaging user experience that keeps users coming back and sharing with others.",
      icon: <Component />,
    },
    {
      title: "Security First",
      description:
        "State-of-the-art authentication and security features to protect your data and your users.",
      icon: <ShieldCheck />,
    },
    {
      title: "SEO-Optimized",
      description:
        "Built-in SEO to improve visibility and drive traffic to your product.",
      icon: <SearchCheck />,
    },
    {
      title: "Reliable Uptime",
      description: "Guaranteed 100% uptime for uninterrupted access to your MVP.",
      icon: <Activity />,
    },
    {
      title: "Proven Expertise",
      description: "With years of experience, we know how to get your idea to market quickly and effectively.",
      icon: <Users />,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 relative z-10 mt-4 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-4 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-[#2c5688]">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-[#2c5688] transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};