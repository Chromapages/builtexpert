import { useState, useEffect } from "react";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { HeaderSection } from "@/components/ui/HeaderSection";
import {
  INDUSTRIAL,
  industrialMeshStyle,
  industrialDarkMeshStyle,
  industrialTextGradientStyle,
} from "@/lib/industrialStyle";
import { ShieldCheck, Zap, FileText } from "lucide-react";
import { OSSection } from "@/components/features/OSSection";
import type { OSSectionData } from "@/components/features/OSSection";
import { CTASection } from "@/components/ui/CTASection";
import { getOsSection, getServicesHero, getFeaturedTestimonials, getServicesByCategory, getSiteSettings } from "@/lib/sanity.client";

// ─── Default testimonials (fallback when Sanity is empty) ─────────────────────

const TESTIMONIALS_FALLBACK = [
  {
    quote:
      "Before BuiltExpert I was getting 2–3 calls a month from my site. Last month I got 19. That's insane.",
    name: "Marcus T.",
    role: "HVAC Contractor",
    location: "Moreno Valley, CA",
    result: "Significant monthly lead growth",
    rating: 5,
  },
  {
    quote:
      'We rank #1 in our city now for "electrician near me". Our schedule is full 3 weeks out.',
    name: "Dani R.",
    role: "Master Electrician",
    location: "Denver, CO",
    result: "#1 local map pack",
    rating: 5,
  },
  {
    quote:
      "They built our site in 5 weeks and we started getting calls from Google within the first month.",
    name: "Ray K.",
    role: "HVAC & Plumbing",
    location: "Ontario, CA",
    result: "Leads within first month",
    rating: 5,
  },
];

// ─── Default process steps (fallback) ─────────────────────────────────────────

const DEFAULT_PROCESS_STEPS = [
  { stepNumber: "01", label: "Audit", time: "Week 1" },
  { stepNumber: "02", label: "Strategy", time: "Week 1" },
  { stepNumber: "03", label: "Build", time: "Weeks 2–5" },
  { stepNumber: "04", label: "Launch", time: "Week 6" },
  { stepNumber: "05", label: "Optimize", time: "Ongoing" },
];

// ─── Category label map ────────────────────────────────────────────────────────

const CATEGORY_LABELS: Record<string, { label: string; categoryNum: string }> = {
  audit: { label: "Lead System Audit", categoryNum: "01" },
  websites: { label: "Contractor Websites", categoryNum: "02" },
  landingPages: { label: "Landing Pages", categoryNum: "03" },
  localSeo: { label: "Local SEO", categoryNum: "04" },
  growthSupport: { label: "Growth Support", categoryNum: "05" },
};

const CATEGORY_ALIASES: Record<string, keyof typeof CATEGORY_LABELS> = {
  audit: "audit",
  websites: "websites",
  landingPages: "landingPages",
  localSeo: "localSeo",
  growthSupport: "growthSupport",
  localVisibility: "localSeo",
  leadGen: "landingPages",
  automation: "growthSupport",
  ongoingSupport: "growthSupport",
};

// ─── Icon helper (maps service titles to Lucide icon names) ──────────────────

function Stars({ count = 5 }: { count?: number }) {
  return (
    <span className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          className="size-3.5 fill-yellow-400 text-yellow-400"
          aria-hidden
        />
      ))}
    </span>
  );
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getServiceHref(service: any) {
  const slug = service?.slug?.current || service?.slug || slugify(service?.title || "");
  return slug ? `/services/${slug}` : "/services";
}

// ─── Component ────────────────────────────────────────────────────────────────

export function Services() {
  const [osSection, setOsSection] = useState<OSSectionData | null>(null);
  const [hero, setHero] = useState<any>(null);
  const [siteData, setSiteData] = useState<any>(null);
  const [services, setServices] = useState<any[]>([]);
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAll() {
      try {
        const [heroData, servicesData, testimonialData, siteData] = await Promise.all([
          getServicesHero(),
          getServicesByCategory(),
          getFeaturedTestimonials(),
          getSiteSettings(),
        ]);
        setHero(heroData);
        setServices(servicesData || []);
        setTestimonials(testimonialData || []);
        setSiteData(siteData);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchAll();
  }, []);

  // Fetch OS section separately (existing pattern)
  useEffect(() => {
    async function fetchOsSection() {
      try {
        const data = await getOsSection();
        setOsSection(data);
      } catch (error) {
        console.error("Error fetching OS section:", error);
      }
    }
    fetchOsSection();
  }, []);

  // ── Group services by category ─────────────────────────────────────────────
  const categoryMap: Record<string, any[]> = {};
  for (const s of services) {
    const cat = CATEGORY_ALIASES[s.category] || "websites";
    if (!categoryMap[cat]) categoryMap[cat] = [];
    categoryMap[cat].push(s);
  }

  // ── Display testimonials (Sanity or fallback) ─────────────────────────────
  const displayTestimonials = testimonials.length > 0 ? testimonials : TESTIMONIALS_FALLBACK;

  // ── Hero fallback data ─────────────────────────────────────────────────────
  const heroBadge = hero?.badge || "Engineered Growth Systems";
  const heroLine1 = hero?.headlineLine1 || "Stop Losing Jobs To";
  const heroLine2 = hero?.headlineLine2 || "Contractors Who";
  const heroAccent = hero?.headlineAccent || "Outrank You.";
  const heroSub = hero?.subheadline || siteData?.tagline || "We build contractor websites, landing pages, and local SEO systems that send calls, estimates, and jobs to your CRM.";
  const heroCta1Label = hero?.ctaPrimaryLabel || "Book A Growth Call";
  const heroCta1Url = hero?.ctaPrimaryUrl || "/contact";
  const heroCta2Label = hero?.ctaSecondaryLabel || "Start The Audit";
  const heroCta2Url = hero?.ctaSecondaryUrl || "/audit";
  const heroRating = hero?.socialProofRating || "4.9";
  const heroRatingSrc = hero?.socialProofSource || "Google";
  const heroCount = hero?.socialProofCount || "Helping growth-minded contractors";
  const heroLeads = hero?.socialProofLeads || "High-intent lead growth";
  const heroPricingFrom = hero?.pricingFrom || "$5,000";
  const heroPricingMo = hero?.pricingMonthly || "$1,500/mo";
  const heroProcessSteps = hero?.processSteps?.length > 0 ? hero.processSteps : DEFAULT_PROCESS_STEPS;



  return (
    <>
      <SEO
        title="Contractor Web Design Services"
        description="Outcome-driven growth systems for contractors: audits, websites, landing pages, local SEO, and growth support. Build your digital foundation and start winning more jobs."
        canonicalPath="/services"
      />

      <div
        className="font-body tracking-tight antialiased [letter-spacing:-0.01em] [&_h1]:normal-case [&_h2]:normal-case [&_h3]:normal-case selection:bg-md3-primary-container selection:text-md3-on-primary-container"
      >
        <HeaderSection 
          badge={heroBadge}
          title={
            <>
              {heroLine1} <br />
              <span className="mt-1 block text-zinc-400">
                {heroLine2} <span className="font-bold text-md3-primary">{heroAccent}</span>
              </span>
            </>
          }
          description={heroSub}
          imageSrc="/images/services-hero.png"
          imageAlt="Industrial Contractor Technology"
        />

        <div className="pb-32 pt-24" style={industrialMeshStyle}>

        {/* ── Services Sections (Sanity-driven) ── */}
        <section className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12 2xl:px-16 3xl:max-w-screen-2xl 4xl:max-w-[1728px]">
          <div className="space-y-32">

            {/* Category 01 — Lead System Audit */}
            {(categoryMap["audit"] || []).length > 0 && (
              <div>
                <div className="mb-12">
                  <span className="mb-4 inline-block bg-teal-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-teal-700">
                    Category {CATEGORY_LABELS["audit"].categoryNum}
                  </span>
                  <h2 className="font-headline text-4xl font-bold tracking-tight text-[#1a1a1a]">
                    {CATEGORY_LABELS["audit"].label}
                  </h2>
                  <div className="mt-4 h-px w-24 bg-md3-primary" />
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                  {categoryMap["audit"].map((service: any) => (
                    <ServiceCard key={service._id || service.slug?.current} service={service} />
                  ))}
                </div>
              </div>
            )}

            {/* Category 02 — Contractor Websites */}
            {(categoryMap["websites"] || []).length > 0 && (
              <div>
                <div className="mb-12">
                  <span className="mb-4 inline-block bg-teal-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-teal-700">
                    Category {CATEGORY_LABELS["websites"].categoryNum}
                  </span>
                  <h2 className="font-headline text-4xl font-bold tracking-tight text-[#1a1a1a]">
                    {CATEGORY_LABELS["websites"].label}
                  </h2>
                  <div className="mt-4 h-px w-24 bg-md3-primary" />
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                  {categoryMap["websites"].map((service: any) => (
                    <ServiceCard key={service._id || service.slug?.current} service={service} />
                  ))}
                </div>
              </div>
            )}

            {/* Category 03 — Landing Pages */}
            {(categoryMap["landingPages"] || []).length > 0 && (
              <div>
                <div className="mb-12">
                  <span className="mb-4 inline-block bg-teal-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-teal-700">
                    Category {CATEGORY_LABELS["landingPages"].categoryNum}
                  </span>
                  <h2 className="font-headline text-4xl font-bold tracking-tight text-[#1a1a1a]">
                    {CATEGORY_LABELS["landingPages"].label}
                  </h2>
                  <div className="mt-4 h-px w-24 bg-md3-primary" />
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                  {categoryMap["landingPages"].map((service: any) => (
                    <ServiceCard key={service._id || service.slug?.current} service={service} />
                  ))}
                </div>
              </div>
            )}

            {/* Category 04 — Local SEO */}
            {(categoryMap["localSeo"] || []).length > 0 && (
              <div>
                <div className="mb-12">
                  <span className="mb-4 inline-block bg-teal-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-teal-700">
                    Category {CATEGORY_LABELS["localSeo"].categoryNum}
                  </span>
                  <h2 className="font-headline text-4xl font-bold tracking-tight text-[#1a1a1a]">
                    {CATEGORY_LABELS["localSeo"].label}
                  </h2>
                  <div className="mt-4 h-px w-24 bg-md3-primary" />
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  {categoryMap["localSeo"].map((service: any) => (
                    <ServiceCard key={service._id || service.slug?.current} service={service} />
                  ))}
                </div>
              </div>
            )}

            {/* Category 05 — Growth Support (dark industrial grid) */}
            {(categoryMap["growthSupport"] || []).length > 0 && (
              <div 
                className="relative overflow-hidden rounded-3xl p-12 lg:p-20"
                style={industrialDarkMeshStyle}
              >
                <div className="relative z-10 mb-16 max-w-2xl">
                  <span className="mb-4 inline-block bg-md3-primary/20 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-md3-primary-fixed border border-md3-primary/30">
                    Category {CATEGORY_LABELS["growthSupport"].categoryNum}
                  </span>
                  <h2 className="font-headline text-5xl font-bold tracking-tighter text-white md:text-6xl">
                    {CATEGORY_LABELS["growthSupport"].label}
                  </h2>
                  <p className="mt-6 text-lg font-light leading-relaxed text-white/50">
                    Precision-engineered upkeep to ensure your digital foundation never drifts from peak performance. 
                  </p>
                </div>

                <div className="relative z-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
                  {categoryMap["growthSupport"].map((service: any) => (
                    <OngoingSupportCard key={service._id || service.slug?.current} service={service} />
                  ))}
                </div>

                {/* Decorative element */}
                <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 opacity-[0.03] select-none">
                  <svg className="h-full w-full" viewBox="0 0 100 100" fill="none" stroke="white" strokeWidth="0.1">
                    <circle cx="100" cy="0" r="80" />
                    <circle cx="100" cy="0" r="60" />
                    <circle cx="100" cy="0" r="40" />
                  </svg>
                </div>
              </div>
            )}

          </div>
        </section>

        {/* ── Category 06 — BuiltExpert OS (Full-width breakout) ───────────── */}
        <section
          id="operating-system"
          className="mx-auto mt-32 max-w-[1440px] px-4 sm:px-8 lg:px-12 2xl:px-16 3xl:max-w-screen-2xl 4xl:max-w-[1728px]"
        >
          <OSSection data={osSection} variant="full" />
        </section>

        {/* ── HI-3 — Testimonials ── */}
        <section className="mx-auto mt-24 max-w-[1440px] px-4 sm:px-8 lg:px-12 2xl:px-16 3xl:max-w-screen-2xl 4xl:max-w-[1728px]">
          <div className="mb-10">
            <p
              className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-md3-primary"
            >
              Client results
            </p>
            <h2
              className="font-headline text-3xl font-light tracking-tight"
              style={{ color: INDUSTRIAL.charcoal }}
            >
              Real contractors. Real outcomes.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {displayTestimonials.map((t: any, i: number) => (
              <div
                key={t.name + i}
                className="flex flex-col gap-6 rounded-xl bg-white p-8 shadow-sm"
                style={{ borderWidth: "0.5px", borderColor: INDUSTRIAL.outline }}
              >
                <Stars count={t.rating || 5} />
                <blockquote
                  className="flex-1 text-base font-light leading-relaxed"
                  style={{ color: INDUSTRIAL.charcoal }}
                >
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {t.result && (
                  <div className="inline-flex w-fit items-center gap-2 rounded-full bg-md3-primary/8 px-3 py-1.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-md3-primary" />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-md3-primary">
                      {t.result}
                    </span>
                  </div>
                )}

                <div>
                  <p
                    className="font-semibold"
                    style={{ color: INDUSTRIAL.charcoal }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-sm font-light"
                    style={{ color: INDUSTRIAL.muted }}
                  >
                    {t.role}{t.location ? ` · ${t.location}` : ""}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <CTASection />
        </div>
      </div>
    </>
  );
}

// ─── Sub-components ────────────────────────────────────────────────────────────

function ServiceCard({ service }: { service: any }) {
  const bestFor = service.bestFor || [];
  return (
    <Link
      to={getServiceHref(service)}
      className="group flex h-full flex-col border border-zinc-200 bg-white p-8 [border-width:0.5px] transition-all hover:-translate-y-1 hover:border-md3-primary/35 hover:shadow-lg hover:shadow-md3-primary/5"
      aria-label={`View ${service.title} details`}
    >
      <h3 className="mb-4 font-headline text-xl font-bold text-[#1a1a1a] transition-colors group-hover:text-md3-primary">
        {service.title}
      </h3>
      {service.description && (
        <p className="mb-6 text-sm font-light leading-relaxed text-zinc-600">
          {service.description}
        </p>
      )}
      <div className="mt-auto space-y-4">
        {bestFor.length > 0 && (
          <>
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#1a1a1a]">Best for:</p>
            <ul className="space-y-2 text-xs font-light text-zinc-500">
              {bestFor.map((item: string, i: number) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </>
        )}
        <p className="inline-flex items-center gap-2 pt-2 text-[10px] font-bold uppercase tracking-[0.24em] text-md3-primary">
          View details
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" aria-hidden />
        </p>
      </div>
    </Link>
  );
}

function OngoingSupportCard({ service }: { service: any }) {
  const bestFor = service.bestFor || [];
  
  // Icon mapping
  const Icon = service.title.toLowerCase().includes("speed") ? Zap 
             : service.title.toLowerCase().includes("content") ? FileText 
             : ShieldCheck;

  return (
    <div 
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white/[0.03] p-8 transition-all hover:bg-white/[0.06] hover:shadow-2xl hover:shadow-black/50"
      style={{ border: "1px solid rgba(255,255,255,0.08)" }}
    >
      <div className="relative z-10">
        <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl bg-md3-primary/10 text-md3-primary transition-transform group-hover:scale-110 group-hover:rotate-3">
          <Icon className="size-7" strokeWidth={1.5} />
        </div>

        <h3 className="mb-4 font-headline text-2xl font-bold text-white tracking-tight">
          {service.title}
        </h3>
        
        {service.description && (
          <p className="mb-8 text-sm font-light leading-relaxed text-white/50">
            {service.description}
          </p>
        )}

        {bestFor.length > 0 && (
          <div className="space-y-4">
            <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">Best for:</p>
            <ul className="space-y-2 text-[11px] font-medium text-white/60">
              {bestFor.map((item: string, i: number) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-md3-primary/40" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="relative z-10 mt-12 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <Link
          to={getServiceHref(service)}
          className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.25em] text-white transition-all hover:text-md3-primary"
        >
          View Technical Scope
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1.5" />
        </Link>
      </div>

      {/* Subtle corner accent */}
      <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-md3-primary/5 blur-3xl transition-opacity group-hover:opacity-100 opacity-0" />
    </div>
  );
}
