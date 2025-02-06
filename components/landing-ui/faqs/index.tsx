import { FaqAccordion } from "./faqs-accordion";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  icon?: string;
  iconPosition?: "left" | "right";
}

const defaultData: FAQItem[] = [
  {
    answer: "An MVP (Minimum Viable Product) is a simplified version of your product designed to validate your idea in the market quickly and affordably.",
    icon: "🤔",
    iconPosition: "right",
    id: 1,
    question: "What is an MVP, and why do I need one?",
  },
  {
    answer: "We deliver MVPs within 2-4 weeks, depending on the complexity and scope of the project.",
    icon: "🕛",
    iconPosition: "left",
    id: 2,
    question: "How long does it take to build an MVP?",
  },
  {
    answer: "Our package includes a web app, landing page, feedback tools, SEO optimization, authentication systems, and deployment services.",
    id: 3,
    question: "What’s included in the MVP package?",
  },
  {
    answer: "Absolutely! We can create a standout design tailored to your product.",
    icon: "🎨",
    iconPosition: "left",
    id: 4,
    question: "Can you help me if I don’t have a design yet?",
  },
  {
    answer: "Yes, we seamlessly integrate payment gateways, allowing you to securely process transactions within your MVP.",
    icon: "💳",
    iconPosition: "right",
    id: 5,
    question: "Do you support payment integrations in the MVP?",
  },
  {
    answer: "We specialize in internal tools, consumer-facing apps, marketplace platforms, and SaaS solutions.",
    id: 6,
    question: "What industries or types of products do you specialize in?",
  },
  {
    answer: "Yes, your idea is safe with us. We offer NDA agreements to protect your intellectual property and ensure confidentiality throughout the process.",
    id: 7,
    icon: "💡",
    iconPosition: "left",
    question: "Is my idea secure with you?",
  },
  {
    answer: "After launch, we provide guidance on managing your MVP and can offer additional services to enhance or scale your product.",
    id: 8,
    question: "What happens after my MVP is launched?",
  },
  {
    answer: "Yes, we offer 2 completely free revision rounds within 4 weeks after launch to accommodate updates and improvements based on user feedback or evolving needs. Additional changes beyond that period are available for a fee.",
    icon: "🔄",
    iconPosition: "right",
    id: 9,
    question: "Can I make changes to the MVP after it’s launched?",
  },
];

function Faqs() {
  return (
    <FaqAccordion 
      data={defaultData}
      className="container w-full"
      questionClassName="dark:bg-zinc-900 bg-white border border-zinc-200 dark:border-zinc-800"
      answerClassName="bg-gradient-to-b dark:from-white dark:to-gray-50 dark:text-black/80 from-[#303030] to-gray-950 text-white/90 border-[1px] border-black/30 dark:hover:text-black hover:text-white"
      heading="Frequently asked questions"
    />
  );
}

export { Faqs };