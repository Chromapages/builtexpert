import * as React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { SEO } from "@/components/SEO";
import { Section } from "@/components/ui/Section";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CASE_STUDIES } from "@/data/caseStudies";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  "All",
  "Marketing Sites",
  "E-Commerce",
  "Web Apps",
  "Redesigns",
];

const ALL_STUDIES = Object.values(CASE_STUDIES);

export function Work() {
  const [filter, setFilter] = React.useState("All");

  const filteredStudies =
    filter === "All"
      ? ALL_STUDIES
      : ALL_STUDIES.filter((study) => study.category === filter);

  return (
    <>
      <SEO
        title="Our Work & Case Studies"
        description="Explore our portfolio of premium web design and development projects. We build high-converting websites for growth-focused businesses."
        canonical="/work"
      />
      {/* Hero Section */}
      <Section className="pt-32 pb-16">
        <div className="max-w-3xl">
          <AnimateIn>
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-muted mb-4">
              Portfolio
            </p>
            <h1 className="text-5xl md:text-7xl font-display font-light text-ink mb-6 uppercase leading-none">
              Work That Converts
            </h1>
            <p className="text-lg text-muted leading-relaxed max-w-prose">
              We build digital experiences that look premium, load fast, and
              drive measurable business outcomes.
            </p>
          </AnimateIn>
        </div>
      </Section>

      {/* Filter & Grid */}
      <Section background="white">
        <AnimateIn className="mb-12 flex flex-wrap gap-x-8 gap-y-4 border-b border-border pb-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              aria-pressed={filter === cat}
              className={cn(
                "pb-2 text-sm font-medium uppercase tracking-widest transition-colors border-b-2 -mb-[17px]",
                filter === cat
                  ? "border-ink text-ink"
                  : "border-transparent text-muted hover:text-ink"
              )}
            >
              {cat}
            </button>
          ))}
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <AnimatePresence mode="popLayout">
            {filteredStudies.map((study) => (
              <motion.div
                key={study.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  variant="default"
                  className="flex flex-col h-full overflow-hidden p-0 group"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.client}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-4">
                      <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-muted">
                        {study.category}
                      </p>
                      <Badge variant="teal">{study.industry}</Badge>
                    </div>
                    <h3 className="text-2xl font-display font-medium text-ink mb-2 uppercase">
                      {study.client}
                    </h3>
                    <p className="text-accent font-medium mb-8">
                      {study.result}
                    </p>
                    <Link to={`/work/${study.slug}`} className="mt-auto">
                      <Button variant="secondary" className="w-full">
                        View Case Study
                      </Button>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </Section>
    </>
  );
}
