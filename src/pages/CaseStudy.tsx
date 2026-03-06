import * as React from "react";
import { useParams, Link } from "react-router-dom";
import { Section } from "@/components/ui/Section";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Button } from "@/components/ui/Button";

export function CaseStudy() {
  const { slug } = useParams();

  // Mock data based on slug
  const study = {
    client: "Acme Financial",
    industry: "Fintech",
    services: [
      "Web App Development",
      "UI/UX Design",
      "Performance Optimization",
    ],
    timeline: "4 Months",
    heroImage: "https://picsum.photos/seed/fintech/1920/1080",
    problem:
      "Acme Financial's legacy dashboard was slow, confusing, and causing a high volume of support tickets. Users struggled to find key features, leading to frustration and churn.",
    solution:
      "We completely redesigned the user interface with a focus on clarity and speed. We rebuilt the frontend using modern technologies, optimizing data loading and rendering performance. We also implemented a new design system to ensure consistency across the application.",
    results:
      "The new dashboard resulted in a significant improvement in user experience. Support tickets related to usability dropped by 30%, and user retention increased by 47%. The application now loads 3x faster, providing a seamless experience for all users.",
    stats: [
      { label: "User Retention", value: "+47%" },
      { label: "Support Tickets", value: "-30%" },
      { label: "Load Time", value: "3x Faster" },
    ],
  };

  return (
    <>
      {/* Hero Image */}
      <div className="w-full h-[50vh] md:h-[70vh] relative overflow-hidden">
        <img
          src={study.heroImage}
          alt={study.client}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white text-center px-4">
            {study.client}
          </h1>
        </div>
      </div>

      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <AnimateIn>
              <div>
                <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-2">
                  Client
                </h3>
                <p className="text-lg font-medium text-neutral-900">
                  {study.client}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-2">
                  Industry
                </h3>
                <p className="text-lg font-medium text-neutral-900">
                  {study.industry}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-2">
                  Services
                </h3>
                <ul className="space-y-1">
                  {study.services.map((service) => (
                    <li
                      key={service}
                      className="text-lg font-medium text-neutral-900"
                    >
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-2">
                  Timeline
                </h3>
                <p className="text-lg font-medium text-neutral-900">
                  {study.timeline}
                </p>
              </div>
            </AnimateIn>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-8 space-y-16">
            <AnimateIn>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                The Problem
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed">
                {study.problem}
              </p>
            </AnimateIn>

            <AnimateIn>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                The Solution
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed">
                {study.solution}
              </p>
            </AnimateIn>

            <AnimateIn>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                The Results
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-12">
                {study.results}
              </p>

              {/* Metrics Highlight Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-b border-neutral-200 py-12">
                {study.stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-4xl md:text-5xl font-black text-indigo-900 mb-2">
                      {stat.value}
                    </p>
                    <p className="text-sm font-semibold text-neutral-500 uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </Section>

      {/* Next Project Navigation */}
      <Section background="dark" className="text-center py-24">
        <AnimateIn>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to see more?
          </h2>
          <div className="flex justify-center gap-4">
            <Link to="/work">
              <Button
                variant="secondary"
                className="bg-transparent border-white text-white hover:bg-white/10"
              >
                Back to Work
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant="primary"
                className="bg-white text-indigo-900 hover:bg-neutral-100"
              >
                Start Your Project
              </Button>
            </Link>
          </div>
        </AnimateIn>
      </Section>
    </>
  );
}
