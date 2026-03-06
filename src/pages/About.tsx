import * as React from "react";
import { Link } from "react-router-dom";
import {
  CheckCircleIcon,
  XCircleIcon,
  EyeIcon,
  BoltIcon,
  ChartBarIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { Section } from "@/components/ui/Section";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const VALUES = [
  {
    name: "Clarity First",
    description:
      "Every design decision should reduce confusion and increase understanding.",
    icon: EyeIcon,
  },
  {
    name: "Performance-Conscious",
    description:
      "Design choices must not compromise page speed or accessibility.",
    icon: BoltIcon,
  },
  {
    name: "Conversion-Focused",
    description: "UX drives business outcomes, not just aesthetics.",
    icon: ChartBarIcon,
  },
  {
    name: "Partnership-Ready",
    description: "Ongoing support aligned with your long-term business goals.",
    icon: UsersIcon,
  },
];

const BEST_FIT = [
  "Growth-focused business owners",
  "Value transparency and clear communication",
  "Willing to invest in quality and ROI",
  "Prefer long-term partnerships",
  "Understand the importance of performance",
];

const NOT_A_FIT = [
  "Cheapest-bid shoppers prioritizing price",
  "Expect template-only delivery with no strategy",
  "No bandwidth for approvals or collaboration",
  "One-and-done mindset with zero post-launch investment",
  "Require 24/7 support or enterprise SLAs",
];

export function About() {
  return (
    <>
      {/* Hero / Story Section */}
      <Section className="pt-32 pb-16">
        <div className="max-w-3xl">
          <AnimateIn>
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-indigo-900 mb-6">
              Why Chromapages Exists
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed mb-8">
              Most websites look fine but don't perform. They suffer from slow
              mobile speeds, confused visitors, wasted ad spend, and no ongoing
              support or optimization.
            </p>
            <p className="text-xl font-medium text-indigo-900 leading-relaxed border-l-4 border-teal-600 pl-6 py-2">
              Clarity wins. Premium design without performance is theater. We
              build scalable, profitable digital experiences that deliver
              premium design, performance, conversion focus, and ongoing
              support.
            </p>
          </AnimateIn>
        </div>
      </Section>

      {/* Operator Profile */}
      <Section background="white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <AnimateIn>
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-elevated">
              <img
                src="https://picsum.photos/seed/ericblack/800/800"
                alt="Eric Black"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Eric Black
            </h2>
            <p className="text-lg font-medium text-teal-600 mb-6 uppercase tracking-wider">
              Solo Operator • Full-Stack Developer • Designer
            </p>
            <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
              <p>
                I founded Chromapages because I saw a gap in the market.
                Traditional agencies are slow, expensive, and often disappear
                after launch. Freelancers are affordable but inconsistent.
              </p>
              <p>
                I offer a different model: a scalable, profitable solo digital
                studio that delivers premium design, performance, conversion
                focus, and ongoing support through a transparent subscription
                model.
              </p>
              <p>
                When you work with Chromapages, you work directly with me. No
                account managers, no junior developers. Just expert execution
                and a true partnership.
              </p>
            </div>
          </AnimateIn>
        </div>
      </Section>

      {/* Values Section */}
      <Section>
        <AnimateIn className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
            Our Principles
          </h2>
        </AnimateIn>
        <AnimateIn
          stagger
          staggerChildren={0.1}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {VALUES.map((value) => (
            <Card
              key={value.name}
              variant="default"
              className="text-center flex flex-col items-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-900/10 text-indigo-900 mb-6">
                <value.icon className="h-8 w-8" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-4">
                {value.name}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {value.description}
              </p>
            </Card>
          ))}
        </AnimateIn>
      </Section>

      {/* Ideal Client Section */}
      <Section background="white">
        <AnimateIn className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
            Who We Work With
          </h2>
        </AnimateIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <AnimateIn>
            <Card
              variant="bordered"
              className="h-full border-emerald-200 bg-emerald-50/30"
            >
              <h3 className="text-2xl font-bold text-neutral-900 mb-8 flex items-center">
                <CheckCircleIcon className="h-8 w-8 text-emerald-500 mr-3" />
                Best Fit
              </h3>
              <ul className="space-y-6">
                {BEST_FIT.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-emerald-500 mr-3 shrink-0 mt-0.5" />
                    <span className="text-lg text-neutral-700">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <Card
              variant="bordered"
              className="h-full border-red-200 bg-red-50/30"
            >
              <h3 className="text-2xl font-bold text-neutral-900 mb-8 flex items-center">
                <XCircleIcon className="h-8 w-8 text-red-500 mr-3" />
                Not A Fit
              </h3>
              <ul className="space-y-6">
                {NOT_A_FIT.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <XCircleIcon className="h-6 w-6 text-red-500 mr-3 shrink-0 mt-0.5" />
                    <span className="text-lg text-neutral-700">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </AnimateIn>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="dark" className="text-center py-32">
        <AnimateIn>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sound like a fit?
          </h2>
          <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
            Let's discuss your goals and see how we can help you achieve them.
          </p>
          <Link to="/contact">
            <Button
              variant="primary"
              size="lg"
              className="bg-white text-indigo-900 hover:bg-neutral-100"
            >
              Book A Discovery Call
            </Button>
          </Link>
        </AnimateIn>
      </Section>
    </>
  );
}
