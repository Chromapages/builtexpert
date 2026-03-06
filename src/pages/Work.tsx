import * as React from "react";
import { Link } from "react-router-dom";
import { Section } from "@/components/ui/Section";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const CATEGORIES = [
  "All",
  "Marketing Sites",
  "E-Commerce",
  "Web Apps",
  "Redesigns",
];

const CASE_STUDIES = [
  {
    id: "1",
    slug: "fintech-dashboard",
    client: "Acme Financial",
    category: "Web Apps",
    industry: "Fintech",
    result: "+47% user retention",
    image: "https://picsum.photos/seed/fintech/800/600",
  },
  {
    id: "2",
    slug: "ecommerce-replatform",
    client: "Global Retail Co",
    category: "E-Commerce",
    industry: "Retail",
    result: "+23% conversion rate",
    image: "https://picsum.photos/seed/retail/800/600",
  },
  {
    id: "3",
    slug: "saas-marketing-site",
    client: "CloudSync",
    category: "Marketing Sites",
    industry: "SaaS",
    result: "+85% lead generation",
    image: "https://picsum.photos/seed/saas/800/600",
  },
  {
    id: "4",
    slug: "healthcare-portal",
    client: "MediCare Plus",
    category: "Web Apps",
    industry: "Healthcare",
    result: "-30% support tickets",
    image: "https://picsum.photos/seed/health/800/600",
  },
  {
    id: "5",
    slug: "agency-redesign",
    client: "Creative Minds",
    category: "Redesigns",
    industry: "Agency",
    result: "+120% organic traffic",
    image: "https://picsum.photos/seed/agency/800/600",
  },
  {
    id: "6",
    slug: "local-service-site",
    client: "City Plumbers",
    category: "Marketing Sites",
    industry: "Local Services",
    result: "+50% booking rate",
    image: "https://picsum.photos/seed/plumbing/800/600",
  },
];

export function Work() {
  const [filter, setFilter] = React.useState("All");

  const filteredStudies =
    filter === "All"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((study) => study.category === filter);

  return (
    <>
      {/* Hero Section */}
      <Section className="pt-32 pb-16">
        <div className="max-w-3xl">
          <AnimateIn>
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-indigo-900 mb-6">
              Work That Converts
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed">
              We build digital experiences that look premium, load fast, and
              drive measurable business outcomes.
            </p>
          </AnimateIn>
        </div>
      </Section>

      {/* Filter & Grid */}
      <Section background="white">
        <AnimateIn className="mb-12 flex flex-wrap gap-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === cat
                  ? "bg-indigo-900 text-white"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </AnimateIn>

        <AnimateIn
          stagger
          staggerChildren={0.1}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredStudies.map((study) => (
            <Card
              key={study.id}
              variant="default"
              className="flex flex-col h-full overflow-hidden p-0 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.client}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-neutral-900">
                    {study.client}
                  </h3>
                  <Badge variant="teal">{study.industry}</Badge>
                </div>
                <p className="text-indigo-900 font-semibold mb-6 flex-grow">
                  {study.result}
                </p>
                <Link to={`/work/${study.slug}`} className="mt-auto">
                  <Button variant="secondary" className="w-full">
                    View Case Study
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </AnimateIn>
      </Section>
    </>
  );
}
