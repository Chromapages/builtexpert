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
import { HeaderSection } from "@/components/ui/HeaderSection";
import { getCaseStudies } from "@/lib/sanity.client";
import {
  INDUSTRIAL,
  industrialMeshStyle,
  industrialDarkMeshStyle,
  industrialTextGradientStyle,
} from "@/lib/industrialStyle";

const CATEGORIES = [
  "All",
  "Websites",
  "Local SEO",
  "Lead Gen",
  "Automation",
];

const ALL_STUDIES = Object.values(CASE_STUDIES);

function normalizeCategory(study: any) {
  const serviceText = `${study?.serviceTypes || []} ${study?.trade || ""} ${study?.industry || ""}`.toLowerCase();
  if (serviceText.includes("seo") || serviceText.includes("map")) return "Local SEO";
  if (serviceText.includes("automation") || serviceText.includes("crm")) return "Automation";
  if (serviceText.includes("landing") || serviceText.includes("lead")) return "Lead Gen";
  return "Websites";
}

function normalizeStudy(study: any) {
  const firstResult = study?.results?.[0];
  const legacyCategoryMap: Record<string, string> = {
    "Web Apps": "Websites",
    "E-Commerce": "Lead Gen",
    "Marketing Sites": "Lead Gen",
    "Redesigns": "Websites",
  };
  return {
    id: study?._id || study?.slug,
    slug: study?.slug,
    client: study?.clientName || study?.client || "Project",
    category: legacyCategoryMap[study?.category] || study?.category || normalizeCategory(study),
    industry: study?.industry || study?.trade || "Contractor",
    result: study?.result || firstResult?.value || "Case study available",
    image: study?.image || study?.heroImage?.asset?.url || "/images/work-hero.png",
  };
}

export function Work() {
  const [filter, setFilter] = React.useState("All");
  const [studies, setStudies] = React.useState<any[]>([]);

  React.useEffect(() => {
    let active = true;

    async function fetchStudies() {
      try {
        const data = await getCaseStudies();
        if (active && data?.length > 0) {
          setStudies(data.map(normalizeStudy));
        }
      } catch (error) {
        console.error("Error fetching case studies:", error);
      }
    }

    fetchStudies();

    return () => {
      active = false;
    };
  }, []);

  const displayStudies = studies.length > 0 ? studies : ALL_STUDIES;
  const filteredStudies =
    filter === "All"
      ? displayStudies
      : displayStudies.filter((study) => study.category === filter);

  return (
    <>
      <SEO
        title="Our Work & Case Studies"
        description="Explore our portfolio of premium web design and development projects. We build high-converting websites for growth-focused businesses."
        canonical="/work"
      />
      <div className="font-body tracking-tight antialiased [letter-spacing:-0.01em] [&_h1]:normal-case [&_h2]:normal-case [&_h3]:normal-case selection:bg-md3-primary-container selection:text-md3-on-primary-container">
        
        <HeaderSection 
          badge="Portfolio"
          title={
            <>
              Work That <span className="font-bold text-md3-primary">Converts.</span>
            </>
          }
          description="Every site we build is engineered for one goal: results. View our portfolio of high-performance growth systems for contractors."
          imageSrc="/images/work-hero.png"
          imageAlt="Industrial Project Showcase"
        />

        {/* Filter & Grid */}
        <div className="pb-32 pt-16" style={industrialMeshStyle}>
          <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
            <AnimateIn className="mb-16 flex flex-wrap gap-x-8 gap-y-4 border-b border-black/10 pb-4">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  aria-pressed={filter === cat}
                  className={cn(
                    "pb-2 text-xs font-bold uppercase tracking-[0.2em] transition-all border-b-2 -mb-[17.5px]",
                    filter === cat
                      ? "border-md3-primary text-black"
                      : "border-transparent text-zinc-400 hover:text-black"
                  )}
                >
                  {cat}
                </button>
              ))}
            </AnimateIn>

            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
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
          </div>
        </div>
      </div>
    </>
  );
}
