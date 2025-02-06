"use client"

import { Zap } from "lucide-react"
import { PricingSection } from "./pricing-section"

const defaultTiers = [
  {
    name: "5 spots left",
    price: {
      monthly: 1999,
    },
    description: "Perfect for founders who need a fast, functional MVP to test and validate their idea quickly.",
    icon: (
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-500/30 to-gray-500/30 blur-2xl rounded-full" />
        <Zap className="w-7 h-7 relative z-10 text-[#2c5688] animate-[float_3s_ease-in-out_infinite]" />
      </div>
    ),
    features: [
      {
        name: "Design",
        description: "We’ll bring your design to life. No design yet? We’ll help you create one that stands out.",
        included: true,
      },
      {
        name: "Development",
        description: "We’ll build your web app, landing page, and integrate essential feedback tools to gather insights.",
        included: true,
      },
      {
        name: "Integrations",
        description: "Seamless setups for payments, authentication, databases, and analytics, so your MVP works smoothly.",
        included: true,
      },
      {
        name: "SEO",
        description: "We’ll optimize your MVP for search engines to help it get noticed and rank higher.",
        included: true,
      },
      {
        name: "Production",
        description: "Setup and deployment, ensuring your MVP is live and ready for users.",
        included: true,
      },
      /** 
      {
        name: "Scalability Built In",
        description: "Our MVPs are designed with growth in mind. As your business evolves, your MVP will be able to scale with it.",
        included: true,
      },
      {
        name: "Expert Consultation",
        description: "Need guidance on your MVP strategy? We offer free consultations to help you validate your idea and plan your next steps.",
        included: true,
      },
      */
    ],
  },
]

function Pricing() {
  return <PricingSection tiers={defaultTiers} />
}

export { Pricing }