import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  SparklesIcon,
  ChartBarIcon,
  BoltIcon,
  WrenchScrewdriverIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { AnimateIn } from "@/components/ui/AnimateIn";

const DIFFERENTIATORS = [
  {
    name: "Looks Premium",
    description:
      "Design quality signals credibility and builds trust at first glance.",
    icon: SparklesIcon,
  },
  {
    name: "Built To Convert",
    description: "UX drives business outcomes, not just aesthetics.",
    icon: ChartBarIcon,
  },
  {
    name: "Fast + Reliable",
    description: "Design choices must not compromise page speed.",
    icon: BoltIcon,
  },
  {
    name: "Ongoing Support",
    description: "Continuous improvement and optimization.",
    icon: WrenchScrewdriverIcon,
  },
];

const SERVICES = [
  {
    title: "Marketing Sites",
    description:
      "Convert visitors into qualified leads with high-performance landing pages.",
  },
  {
    title: "E-Commerce",
    description: "Increase checkout completion and average order value.",
  },
  {
    title: "Web Apps",
    description: "Build portals and tools that feel like premium products.",
  },
  {
    title: "Ongoing Support",
    description:
      "Continuous improvement and optimization through a subscription model.",
  },
];

const TESTIMONIALS = [
  {
    name: "Sarah Jenkins",
    title: "CMO",
    company: "Acme Financial",
    quote: "Chromapages completely transformed our digital presence. The new dashboard is not only beautiful but incredibly fast. Our user retention skyrocketed.",
  },
  {
    name: "Michael Chen",
    title: "Founder",
    company: "CloudSync",
    quote: "Working with Eric was a game-changer. He understands that design needs to drive business results. We saw an 85% increase in lead generation.",
  },
  {
    name: "Elena Rodriguez",
    title: "VP of Marketing",
    company: "Global Retail Co",
    quote: "The attention to detail and focus on performance is unmatched. Our e-commerce conversion rate improved by 23% within the first month of launch.",
  },
];

const QuoteIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
  </svg>
);

export function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <>
      {/* Hero Section */}
      <Section className="pt-32 pb-24 md:pt-48 md:pb-32">
        <div className="max-w-4xl">
          <AnimateIn>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-indigo-900 leading-[1.1]">
              Digital Design Elevated.
            </h1>
            <p className="mt-6 text-lg font-display text-neutral-600 max-w-2xl leading-relaxed">
              Modern websites and web apps that look premium, load fast, and
              drive conversions.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Book A Call
                </Button>
              </Link>
              <Link to="/work">
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  View Work
                </Button>
              </Link>
            </div>
          </AnimateIn>
        </div>
      </Section>

      {/* Differentiators Grid */}
      <Section background="white">
        <AnimateIn
          stagger
          staggerChildren={0.1}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {DIFFERENTIATORS.map((feature) => (
            <div key={feature.name} className="flex flex-col">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-900/5 text-indigo-900 mb-6">
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                {feature.name}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </AnimateIn>
      </Section>

      {/* The Problem We Solve */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-indigo-900 px-4 py-24 sm:px-6 lg:px-24 flex flex-col justify-center">
          <AnimateIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              The Problem We Solve
            </h2>
            <p className="text-lg text-indigo-100 leading-relaxed max-w-lg">
              Most websites look fine but don't perform. They suffer from slow
              mobile speeds, confused visitors, wasted ad spend, and no ongoing
              support or optimization.
            </p>
          </AnimateIn>
        </div>
        <div className="bg-off-white px-4 py-24 sm:px-6 lg:px-24 flex flex-col justify-center">
          <AnimateIn delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Our Belief
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed max-w-lg">
              Clarity wins. Premium design without performance is theater. We
              build scalable, profitable digital experiences that deliver
              premium design, performance, conversion focus, and ongoing
              support.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Services Overview */}
      <Section>
        <AnimateIn className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
            Services Overview
          </h2>
        </AnimateIn>
        <AnimateIn
          stagger
          staggerChildren={0.1}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {SERVICES.map((service) => (
            <Card
              key={service.title}
              variant="default"
              className="flex flex-col h-full"
            >
              <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
                {service.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed flex-grow">
                {service.description}
              </p>
              <div className="mt-8">
                <Link
                  to="/services"
                  className="text-indigo-900 font-medium hover:text-teal-600 transition-colors inline-flex items-center"
                >
                  Learn more
                  <svg
                    className="ml-2 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </Card>
          ))}
        </AnimateIn>
      </Section>

      {/* Testimonials */}
      <Section background="white">
        <AnimateIn className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
            What Our Clients Say
          </h2>
        </AnimateIn>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden px-4 py-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  variant="bordered"
                  className="flex flex-col relative p-8 md:p-12 text-center items-center"
                >
                  <QuoteIcon className="h-12 w-12 text-indigo-900/10 mb-6" />
                  <p className="text-xl md:text-2xl text-neutral-700 leading-relaxed italic mb-8 relative z-10">
                    "{TESTIMONIALS[currentTestimonial].quote}"
                  </p>
                  <div>
                    <p className="font-bold text-neutral-900 text-lg">{TESTIMONIALS[currentTestimonial].name}</p>
                    <p className="text-neutral-500">
                      {TESTIMONIALS[currentTestimonial].title}, <span className="text-indigo-900 font-medium">{TESTIMONIALS[currentTestimonial].company}</span>
                    </p>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full border border-neutral-200 text-neutral-500 hover:text-indigo-900 hover:border-indigo-900 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-900 focus:ring-offset-2"
              aria-label="Previous testimonial"
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </button>
            
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonial(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-900 focus:ring-offset-2 ${
                    idx === currentTestimonial ? "bg-indigo-900" : "bg-neutral-300 hover:bg-neutral-400"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full border border-neutral-200 text-neutral-500 hover:text-indigo-900 hover:border-indigo-900 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-900 focus:ring-offset-2"
              aria-label="Next testimonial"
            >
              <ChevronRightIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </Section>

      {/* CTA Banner */}
      <Section background="dark" className="text-center py-32">
        <AnimateIn>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-10">
            Ready to build something that actually works?
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
