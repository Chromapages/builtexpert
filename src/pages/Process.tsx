import * as React from "react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Section } from "@/components/ui/Section";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Button } from "@/components/ui/Button";

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

      <Section className="pt-32 pb-16">
        <div className="max-w-4xl">
          <AnimateIn>
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-muted mb-4">
              How We Work
            </p>
            <h1 className="text-5xl md:text-7xl font-display font-light text-ink mb-6 uppercase leading-none">
              Strategy First. Then Execution.
            </h1>
            <p className="text-lg md:text-xl text-muted leading-relaxed max-w-prose">
              Every project follows a five-phase workflow designed to reduce ambiguity,
              keep momentum high, and make launch decisions predictable.
            </p>
          </AnimateIn>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="border-t border-border">
          {PROCESS_PHASES.map((phase, index) => (
            <AnimateIn
              key={phase.id}
              delay={index * 0.05}
              className="border-b border-border py-12 md:py-16"
            >
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
                <div className="lg:col-span-2">
                  <p className="text-4xl md:text-5xl font-display font-light text-ink leading-none">
                    {phase.id}
                  </p>
                </div>
                <div className="lg:col-span-3">
                  <h2 className="text-2xl md:text-3xl font-display font-medium text-ink uppercase mb-2">
                    {phase.name}
                  </h2>
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted">
                    {phase.timeframe}
                  </p>
                </div>
                <div className="lg:col-span-7">
                  <p className="text-lg text-muted leading-relaxed max-w-prose mb-6">
                    {phase.description}
                  </p>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted mb-4">
                      Deliverables
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {phase.deliverables.map((item) => (
                        <li key={item} className="text-ink border-t border-border pt-3">
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
      </Section>

      <Section className="bg-accent text-white py-24">
        <AnimateIn className="max-w-4xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/50 mb-4">
            Post-Launch
          </p>
          <h2 className="text-4xl md:text-6xl font-display font-light uppercase leading-none mb-6 text-white">
            The Site Launches. The Work Doesn’t Stop.
          </h2>
          <p className="text-lg text-white/80 leading-relaxed max-w-prose mb-10">
            After launch, we stay involved through ongoing support, refinements,
            and performance-focused iteration so the site keeps improving instead of stalling.
          </p>
          <Link to="/contact">
            <Button variant="accent" size="lg" className="bg-ink text-white">
              Book A Call
            </Button>
          </Link>
        </AnimateIn>
      </Section>
    </>
  );
}
