import * as React from "react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Section } from "@/components/ui/Section";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Button } from "@/components/ui/Button";
import { HeaderSection } from "@/components/ui/HeaderSection";
import {
  INDUSTRIAL,
  industrialMeshStyle,
  industrialDarkMeshStyle,
} from "@/lib/industrialStyle";

const PROCESS_PHASES = [
  {
    id: "01",
    name: "Strategy",
    timeframe: "Week 1-2",
    description:
      "We define goals, scope, information architecture, user flows, and success metrics before design begins.",
    deliverables: [
      "Scope definition",
      "Information architecture",
      "User flow mapping",
      "Success metric alignment",
    ],
  },
  {
    id: "02",
    name: "Design",
    timeframe: "Week 2-3",
    description:
      "We turn the strategy into a visual system with layouts, hierarchy, and reusable interface patterns.",
    deliverables: [
      "Wireframes",
      "Visual direction",
      "Component system",
      "Responsive layouts",
    ],
  },
  {
    id: "03",
    name: "Build",
    timeframe: "Week 3-6",
    description:
      "We implement the approved direction in code with performance, responsiveness, and maintainability built in.",
    deliverables: [
      "Front-end implementation",
      "CMS or data integration",
      "Responsive QA",
      "Staging review",
    ],
  },
  {
    id: "04",
    name: "QA",
    timeframe: "Week 6-7",
    description:
      "We validate accessibility, performance, analytics, and edge-case behavior before launch.",
    deliverables: [
      "Accessibility review",
      "Performance checks",
      "Analytics validation",
      "Launch checklist",
    ],
  },
  {
    id: "05",
    name: "Launch",
    timeframe: "Week 7-8",
    description:
      "We deploy with a rollback plan, monitor the release, and hand over a stable production experience.",
    deliverables: [
      "Production deployment",
      "Rollback plan",
      "Post-launch monitoring",
      "Handoff guidance",
    ],
  },
] as const;

export function Process() {
  return (
    <>
      <SEO
        title="Our Process"
        description="See how BuiltExpert moves from strategy to launch with a structured, clarity-first workflow."
        canonical="/process"
      />

      <div className="font-body tracking-tight antialiased [letter-spacing:-0.01em] [&_h1]:normal-case [&_h2]:normal-case [&_h3]:normal-case selection:bg-md3-primary-container selection:text-md3-on-primary-container">
        <HeaderSection 
          badge="Strategy First"
          title={
            <>
              Built for <span className="font-bold text-md3-primary">Precision Execution.</span>
            </>
          }
          description="Every project follows a five-phase workflow designed to reduce ambiguity, keep momentum high, and make launch decisions predictable."
          imageSrc="/images/process-hero.png"
          imageAlt="Strategic Process"
        />

        {/* Process Phases */}
        <div className="pb-32 pt-24" style={industrialMeshStyle}>
          <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
            <div className="border-t border-black/10">
          {PROCESS_PHASES.map((phase, index) => (
            <AnimateIn
              key={phase.id}
              delay={index * 0.05}
              className="border-b border-border py-12 md:py-16"
            >
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
                <div className="lg:col-span-2">
                  <p className="font-headline text-5xl font-light leading-none text-md3-primary md:text-6xl">
                    {phase.id}
                  </p>
                </div>
                <div className="lg:col-span-3">
                  <h2 className="mb-2 font-headline text-2xl font-bold uppercase text-black md:text-3xl">
                    {phase.name}
                  </h2>
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-500">
                    {phase.timeframe}
                  </p>
                </div>
                <div className="lg:col-span-7">
                  <p className="mb-8 max-w-prose text-lg leading-relaxed text-zinc-600">
                    {phase.description}
                  </p>
                  <div className="rounded-lg border border-black/5 bg-white/50 p-6 backdrop-blur-sm">
                    <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.3em] text-md3-primary">
                      Phase Deliverables
                    </p>
                    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      {phase.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm font-medium text-black">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-md3-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>

        {/* High-Impact CTA */}
        <section className="relative overflow-hidden bg-zinc-950 py-24 text-white lg:py-32">
          {/* Subtle Industrial Texture Overlay */}
          <div className="absolute inset-0 z-0 opacity-20" style={industrialDarkMeshStyle} />
          
          <div className="relative z-10 mx-auto max-w-[1728px] px-6 lg:px-8">
            <div className="max-w-4xl">
              <AnimateIn>
                <span className="mb-6 inline-block rounded-full bg-md3-primary px-3 py-1 text-[10px] font-bold uppercase tracking-[0.3em] text-white">
                  Post-Launch
                </span>
                <h2 className="mb-8 font-headline text-4xl font-light uppercase leading-[0.95] tracking-tight text-white md:text-7xl">
                  The Site Launches. <br />
                  <span className="font-bold text-md3-primary">The Work Continues.</span>
                </h2>
                <p className="mb-12 max-w-2xl text-xl font-light leading-relaxed text-zinc-400">
                  We don't just "hand over" a site and disappear. We stay involved through 
                  ongoing support, performance refinements, and growth-focused iteration.
                </p>
                <Link to="/contact">
                  <button className="inline-flex items-center justify-center bg-md3-primary px-12 py-5 text-[11px] font-bold uppercase tracking-[0.3em] text-white transition-all hover:bg-white hover:text-black">
                    Book Your Strategy Call
                  </button>
                </Link>
              </AnimateIn>
            </div>
          </div>
        </section>
      </div>
    </div>
  </>
);
}
