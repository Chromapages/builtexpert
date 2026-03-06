import * as React from "react";
import { Link } from "react-router-dom";
import { CheckIcon } from "@heroicons/react/24/outline";
import { Section } from "@/components/ui/Section";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const PACKAGES = [
  {
    name: "Web Launch",
    price: "$$$",
    term: "3 months",
    features: [
      "Strategy session and locked scope definition",
      "Information architecture and user flow documentation",
      "Visual direction and component system planning",
      "Tracking plan (GA4 configuration)",
      "Launch plan (staging environment, QA checklist)",
    ],
  },
  {
    name: "Web Growth",
    price: "$$$$",
    term: "3 months",
    features: [
      "Everything in Web Launch",
      "Iterative refinements based on performance data",
      "Post-launch support and updates",
      "Performance monitoring and optimization loop",
      "Conversion event validation and funnel improvements",
    ],
  },
  {
    name: "Web Scale",
    price: "$$$$$",
    term: "4 months",
    features: [
      "Everything in Web Growth",
      "Advanced CMS integration (Sanity.io)",
      "Continuous Conversion Rate Optimization (CRO)",
      "A/B testing and multivariate experiments",
      "Dedicated growth strategy sessions",
    ],
  },
  {
    name: "App MVP",
    price: "$$$$$",
    term: "6 months",
    features: [
      "Full-stack web application development",
      "User authentication and authorization",
      "Database architecture and API integration",
      "Scalable cloud infrastructure setup",
      "Comprehensive QA and security testing",
    ],
  },
];

const PROCESS_STEPS = [
  {
    id: "01",
    name: "Strategy",
    description:
      "Define scope, goals, KPIs, information architecture, and tracking plan.",
  },
  {
    id: "02",
    name: "Design",
    description:
      "Review visual direction, component designs, and user flows in staged check-ins.",
  },
  {
    id: "03",
    name: "Build",
    description:
      "Development in managed queue, client reviews staging environment.",
  },
  {
    id: "04",
    name: "QA",
    description:
      "Complete launch checklist (performance, accessibility, tracking validation).",
  },
  {
    id: "05",
    name: "Launch",
    description:
      "Deploy to production with rollback plan ready and handoff documentation.",
  },
];

const VALUE_PROPS = [
  {
    id: "1",
    title: "Trust at first glance",
    description: "Premium design signals credibility instantly.",
  },
  {
    id: "2",
    title: "More customers",
    description: "Conversion-focused UX turns visitors into leads.",
  },
  {
    id: "3",
    title: "Less chaos",
    description: "Clear processes and transparent communication.",
  },
  {
    id: "4",
    title: "Speed + reliability",
    description: "Fast-loading sites that perform flawlessly.",
  },
  {
    id: "5",
    title: "A partner",
    description: "Ongoing support aligned with your business goals.",
  },
];

export function Services() {
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-32 pb-16">
        <div className="max-w-3xl">
          <AnimateIn>
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-indigo-900 mb-6">
              Service Architecture
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed">
              We deliver fast, modern websites and web apps designed to convert
              visitors into customers through a subscription-based service model
              combining upfront strategic investment with ongoing execution.
            </p>
          </AnimateIn>
        </div>
      </Section>

      {/* Packages Grid */}
      <Section background="white">
        <AnimateIn
          stagger
          staggerChildren={0.1}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {PACKAGES.map((pkg) => (
            <Card
              key={pkg.name}
              variant="default"
              className="flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-neutral-600">Starting at {pkg.price}</p>
                </div>
                <Badge variant="indigo">{pkg.term} min term</Badge>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-teal-600 mr-3 shrink-0 mt-0.5" />
                    <span className="text-neutral-600 leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="mt-auto">
                <Button variant="primary" className="w-full">
                  Book A Call
                </Button>
              </Link>
            </Card>
          ))}
        </AnimateIn>
      </Section>

      {/* How It Works */}
      <Section>
        <AnimateIn className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
            How It Works
          </h2>
        </AnimateIn>
        <AnimateIn className="relative">
          <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-neutral-200" />
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {PROCESS_STEPS.map((step) => (
              <div key={step.id} className="relative z-10">
                <div className="flex items-center md:block">
                  <div className="h-12 w-12 rounded-full bg-indigo-900 text-white flex items-center justify-center font-bold text-lg shrink-0 md:mb-6">
                    {step.id}
                  </div>
                  <div className="ml-6 md:ml-0">
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                      {step.name}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimateIn>
      </Section>

      {/* What Clients Actually Buy */}
      <Section background="white">
        <AnimateIn className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
            What Clients Actually Buy
          </h2>
        </AnimateIn>
        <AnimateIn
          stagger
          staggerChildren={0.1}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {VALUE_PROPS.map((prop) => (
            <div key={prop.id} className="flex items-start space-x-6">
              <span className="text-6xl font-black text-neutral-200 leading-none">
                {prop.id}
              </span>
              <div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  {prop.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {prop.description}
                </p>
              </div>
            </div>
          ))}
        </AnimateIn>
      </Section>
    </>
  );
}
