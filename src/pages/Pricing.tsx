import * as React from "react";
import { Link } from "react-router-dom";
import { CheckIcon } from "@heroicons/react/24/outline";
import { Section } from "@/components/ui/Section";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";

const WEBSITE_PACKAGES = [
  {
    name: "Web Launch",
    price: "$2,500/mo",
    term: "3 months",
    popular: false,
    features: [
      "Strategy session and locked scope definition",
      "Information architecture and user flow documentation",
      "Visual direction and component system planning",
      "Tracking plan (GA4 configuration)",
      "Launch plan (staging environment, QA checklist)",
      "Responsive across breakpoints",
      "Core Web Vitals passing",
    ],
  },
  {
    name: "Web Growth",
    price: "$4,500/mo",
    term: "3 months",
    popular: true,
    features: [
      "Everything in Web Launch",
      "Iterative refinements based on performance data",
      "Post-launch support and updates",
      "Performance monitoring and optimization loop",
      "Conversion event validation and funnel improvements",
      "Monthly performance reports",
      "Priority support queue",
    ],
  },
  {
    name: "Web Scale",
    price: "$7,500/mo",
    term: "4 months",
    popular: false,
    features: [
      "Everything in Web Growth",
      "Advanced CMS integration (Sanity.io)",
      "Continuous Conversion Rate Optimization (CRO)",
      "A/B testing and multivariate experiments",
      "Dedicated growth strategy sessions",
      "Custom API integrations",
      "24/7 emergency support SLA",
    ],
  },
];

const SECONDARY_PACKAGES = [
  {
    category: "Web Apps",
    tiers: [{ name: "App MVP", price: "$10,000/mo", term: "6 months" }],
  },
  {
    category: "SEO",
    tiers: [
      { name: "Local Starter", price: "$1,500/mo", term: "3 months" },
      { name: "Growth", price: "$3,000/mo", term: "3 months" },
      { name: "Authority", price: "$5,000/mo", term: "3 months" },
    ],
  },
  {
    category: "Design-Only",
    tiers: [
      { name: "Lite", price: "$1,000/mo", term: "Rolling" },
      { name: "Growth", price: "$2,500/mo", term: "Rolling" },
      { name: "Studio", price: "$5,000/mo", term: "Rolling" },
    ],
  },
];

const FAQS = [
  {
    title: "What is the Investment Fee?",
    content:
      "The Investment Fee is a one-time upfront cost that covers the strategic foundation of your project. This includes discovery, scope definition, information architecture, visual direction, and tracking setup. It ensures we have a solid plan before any development begins.",
  },
  {
    title: "How does the Monthly Subscription work?",
    content:
      "The Monthly Subscription covers the ongoing execution of your project. This includes design, development, QA, launch, and post-launch support. It provides predictable costs and ensures your site is continuously optimized.",
  },
  {
    title: "What happens after the minimum term?",
    content:
      "After the minimum term, your subscription transitions to a rolling monthly agreement. You can cancel at any time with 30 days notice. We recommend continuing with a lower-tier maintenance plan to ensure your site remains secure and performant.",
  },
  {
    title: "Who owns the code and design assets?",
    content:
      "You do. Upon completion of the project and full payment of all fees, you own all intellectual property, including the code repository, design files (Figma), and content.",
  },
  {
    title: "Can I upgrade or downgrade my package?",
    content:
      "Yes, you can adjust your package tier at any time. Upgrades take effect immediately, while downgrades take effect at the start of the next billing cycle.",
  },
  {
    title: "What is your refund policy?",
    content:
      "The Investment Fee is non-refundable as it covers upfront strategic work. Monthly subscription fees are also non-refundable, but you can cancel your subscription at any time with 30 days notice.",
  },
];

export function Pricing() {
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-32 pb-16">
        <div className="max-w-3xl text-center mx-auto">
          <AnimateIn>
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-indigo-900 mb-6">
              Transparent Pricing
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed">
              Predictable costs for premium design, performance, and ongoing
              support. No hidden fees, no surprises.
            </p>
          </AnimateIn>
        </div>
      </Section>

      {/* Website Packages Grid */}
      <Section background="white">
        <AnimateIn
          stagger
          staggerChildren={0.1}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {WEBSITE_PACKAGES.map((pkg) => (
            <Card
              key={pkg.name}
              variant={pkg.popular ? "dark" : "default"}
              className={`flex flex-col h-full relative ${pkg.popular ? "border-2 border-teal-600" : ""}`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Badge
                    variant="teal"
                    className="bg-teal-600 text-white px-4 py-1 text-sm shadow-md"
                  >
                    Most Popular
                  </Badge>
                </div>
              )}
              <div className="mb-8 mt-4">
                <h3
                  className={`text-2xl font-bold mb-2 ${pkg.popular ? "text-white" : "text-neutral-900"}`}
                >
                  {pkg.name}
                </h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span
                    className={`text-4xl font-black ${pkg.popular ? "text-white" : "text-indigo-900"}`}
                  >
                    {pkg.price}
                  </span>
                </div>
                <Badge variant={pkg.popular ? "success" : "indigo"}>
                  {pkg.term} min term
                </Badge>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckIcon
                      className={`h-5 w-5 mr-3 shrink-0 mt-0.5 ${pkg.popular ? "text-teal-400" : "text-teal-600"}`}
                    />
                    <span
                      className={`leading-relaxed ${pkg.popular ? "text-indigo-100" : "text-neutral-600"}`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="mt-auto">
                <Button
                  variant={pkg.popular ? "accent" : "primary"}
                  className="w-full"
                >
                  Book A Call
                </Button>
              </Link>
            </Card>
          ))}
        </AnimateIn>
      </Section>

      {/* How Pricing Works */}
      <Section>
        <AnimateIn className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
            How Pricing Works
          </h2>
        </AnimateIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <AnimateIn>
            <div className="bg-white p-8 rounded-2xl shadow-subtle border border-neutral-200 h-full">
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">
                1. Investment Fee
              </h3>
              <p className="text-lg font-medium text-teal-600 mb-6 uppercase tracking-wider">
                One-Time Upfront
              </p>
              <p className="text-neutral-600 leading-relaxed">
                The strategic foundation of your project. This covers discovery,
                scope definition, information architecture, visual direction,
                and tracking setup. It ensures we have a solid plan before any
                development begins, minimizing risk and maximizing ROI.
              </p>
            </div>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <div className="bg-white p-8 rounded-2xl shadow-subtle border border-neutral-200 h-full">
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">
                2. Monthly Subscription
              </h3>
              <p className="text-lg font-medium text-teal-600 mb-6 uppercase tracking-wider">
                Ongoing Execution
              </p>
              <p className="text-neutral-600 leading-relaxed">
                The ongoing execution of your project. This covers design,
                development, QA, launch, and post-launch support. It provides
                predictable costs and ensures your site is continuously
                optimized based on real user data and performance metrics.
              </p>
            </div>
          </AnimateIn>
        </div>
      </Section>

      {/* Secondary Packages */}
      <Section background="white">
        <AnimateIn className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
            Specialized Services
          </h2>
        </AnimateIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {SECONDARY_PACKAGES.map((category) => (
            <AnimateIn key={category.category}>
              <h3 className="text-xl font-bold text-neutral-900 mb-6 border-b border-neutral-200 pb-4">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.tiers.map((tier) => (
                  <div
                    key={tier.name}
                    className="bg-off-white p-6 rounded-xl border border-neutral-200 flex flex-col justify-between"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold text-neutral-900">
                        {tier.name}
                      </h4>
                      <Badge variant="neutral">{tier.term}</Badge>
                    </div>
                    <p className="text-indigo-900 font-bold">{tier.price}</p>
                  </div>
                ))}
              </div>
            </AnimateIn>
          ))}
        </div>
      </Section>

      {/* FAQ Section */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <AnimateIn className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
              Frequently Asked Questions
            </h2>
          </AnimateIn>
          <AnimateIn>
            <Accordion items={FAQS} />
          </AnimateIn>
        </div>
      </Section>

      {/* CTA Banner */}
      <Section background="dark" className="text-center py-32">
        <AnimateIn>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-10">
            Ready to get started?
          </h2>
          <Link to="/contact">
            <Button
              variant="primary"
              size="lg"
              className="bg-white text-indigo-900 hover:bg-neutral-100"
            >
              Book A Call
            </Button>
          </Link>
        </AnimateIn>
      </Section>
    </>
  );
}
