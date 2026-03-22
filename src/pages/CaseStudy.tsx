import * as React from "react";
import { useParams, Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Section } from "@/components/ui/Section";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Button } from "@/components/ui/Button";
import { Skeleton } from "@/components/ui/Skeleton";
import { CASE_STUDIES } from "@/data/caseStudies";

export function CaseStudy() {
  const { slug } = useParams();
  const [isLoading] = React.useState(false);
  const study = slug ? CASE_STUDIES[slug] : null;

  if (!study) {
    return (
      <Section className="min-h-[60vh] flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-display font-medium text-ink uppercase mb-4">Case Study Not Found</h2>
        <p className="text-muted mb-8">
          The project you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/work">
          <Button variant="primary">Back to Work</Button>
        </Link>
      </Section>
    );
  }

  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${study.client} Case Study: ${study.result}`,
    description: study.problem,
    image: `https://builtexpert.com${study.image}`,
    author: {
      "@type": "Person",
      name: "Eric Black",
    },
    publisher: {
      "@type": "Organization",
      name: "BuiltExpert",
      logo: {
        "@type": "ImageObject",
        url: "https://builtexpert.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://builtexpert.com/work/${study.slug}`,
    },
  };

  // Get next and previous projects
  const slugs = Object.keys(CASE_STUDIES);
  const currentIndex = slugs.indexOf(slug || "");
  const prevSlug = slugs[currentIndex - 1] || null;
  const nextSlug = slugs[currentIndex + 1] || null;
  const prevProject = prevSlug ? CASE_STUDIES[prevSlug] : null;
  const nextProject = nextSlug ? CASE_STUDIES[nextSlug] : null;

  if (isLoading) {
    return (
      <>
        <SEO title="Loading..." />
        <Section className="pt-32 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-7 space-y-6">
              <Skeleton className="h-4 w-24 rounded-none bg-border" />
              <Skeleton className="h-20 w-full rounded-none bg-border" />
              <Skeleton className="h-20 w-3/4 rounded-none bg-border" />
            </div>
            <div className="lg:col-span-4 lg:col-start-9 space-y-4">
              <Skeleton className="h-24 w-full rounded-none bg-border" />
              <Skeleton className="h-24 w-full rounded-none bg-border" />
              <Skeleton className="h-24 w-full rounded-none bg-border" />
            </div>
          </div>
        </Section>
        <div className="w-full aspect-[21/9] relative">
          <Skeleton className="w-full h-full rounded-none" />
        </div>
        <Section background="white">
          <div className="space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-3">
                <Skeleton className="h-8 w-24 rounded-none bg-border" />
              </div>
              <div className="lg:col-span-7 space-y-6">
                <Skeleton className="h-10 w-48 rounded-none bg-border" />
                <Skeleton className="h-32 w-full rounded-none bg-border" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Skeleton className="h-32 w-full rounded-none bg-border" />
              <Skeleton className="h-32 w-full rounded-none bg-border" />
              <Skeleton className="h-32 w-full rounded-none bg-border" />
            </div>
          </div>
        </Section>
      </>
    );
  }

  return (
    <>
      <SEO
        title={`${study.client} Case Study`}
        description={`How we helped ${study.client} achieve ${study.result} in their ${study.industry} project.`}
        canonical={`/work/${study.slug}`}
        schema={caseStudySchema}
      />

      <Section className="pt-32 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <AnimateIn className="lg:col-span-7">
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-muted mb-4">
              {study.category}
            </p>
            <h1 className="text-5xl md:text-7xl font-display font-light text-ink uppercase leading-none mb-6">
              {study.client}
            </h1>
            <p className="text-xl text-ink leading-relaxed mb-6 max-w-prose">
              {study.result}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted mb-2">
                  Industry
                </p>
                <p className="text-ink">{study.industry}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted mb-2">
                  Timeline
                </p>
                <p className="text-ink">{study.timeline}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted mb-2">
                  Services
                </p>
                <p className="text-ink">{study.services.join(", ")}</p>
              </div>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.1} className="lg:col-span-4 lg:col-start-9">
            <div className="border border-border bg-surface p-8 md:p-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-muted mb-6">
                Key Metrics
              </p>
              <div className="space-y-6">
                {study.stats.map((stat) => (
                  <div key={stat.label} className="border-b border-border pb-6 last:border-b-0 last:pb-0">
                    <p className="text-4xl font-display font-light text-ink leading-none mb-2">
                      {stat.value}
                    </p>
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </Section>

      <div className="w-full aspect-[21/9] max-h-[600px] relative overflow-hidden border-y border-border bg-surface">
        <img
          src={study.image}
          alt={study.client}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <Section background="white">
        <div className="space-y-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <AnimateIn className="lg:col-span-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-muted">
                The Challenge
              </p>
            </AnimateIn>
            <AnimateIn delay={0.1} className="lg:col-span-7 lg:col-start-5">
              <p className="text-lg text-muted leading-relaxed max-w-prose">
                {study.problem}
              </p>
            </AnimateIn>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <AnimateIn className="lg:col-span-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-muted">
                The Approach
              </p>
            </AnimateIn>
            <AnimateIn delay={0.1} className="lg:col-span-7 lg:col-start-5">
              <p className="text-lg text-muted leading-relaxed max-w-prose">
                {study.solution}
              </p>
            </AnimateIn>
          </div>

          <AnimateIn delay={0.2}>
            <div className="bg-ink text-white p-8 md:p-12">
              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/50 mb-8">
                Results
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {study.stats.map((stat) => (
                  <div key={stat.label} className="border-t border-white/20 pt-6">
                    <p className="text-5xl font-display font-light leading-none mb-3">
                      {stat.value}
                    </p>
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/60">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>

          <div className="border-t border-border pt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="text-left">
                {prevProject && (
                  <Link to={`/work/${prevProject.slug}`} className="group block">
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted mb-2">
                      Previous Project
                    </p>
                    <p className="text-2xl font-display font-medium text-ink uppercase group-hover:text-accent transition-colors">
                      {prevProject.client}
                    </p>
                  </Link>
                )}
              </div>

              <div className="text-center">
                <Link to="/contact">
                  <Button variant="primary" size="lg">
                    Start Your Project
                  </Button>
                </Link>
              </div>

              <div className="text-left md:text-right">
                {nextProject && (
                  <Link to={`/work/${nextProject.slug}`} className="group block">
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted mb-2">
                      Next Project
                    </p>
                    <p className="text-2xl font-display font-medium text-ink uppercase group-hover:text-accent transition-colors">
                      {nextProject.client}
                    </p>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
