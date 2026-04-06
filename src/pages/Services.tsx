import { useState, useEffect } from "react";
import { ArrowRight, Star, ShieldCheck, Zap, FileText } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { SEO } from "@/components/SEO";
import { HeaderSection } from "@/components/ui/HeaderSection";
import {
  INDUSTRIAL,
  industrialMeshStyle,
  industrialDarkMeshStyle,
  industrialTextGradientStyle,
} from "@/lib/industrialStyle";
import { OSSection } from "@/components/features/OSSection";
import type { OSSectionData } from "@/components/features/OSSection";
import { CTASection } from "@/components/ui/CTASection";
import { getOsSection, getServicesHero, getFeaturedTestimonials, getServicesByCategory, getSiteSettings } from "@/lib/sanity.client";
import { CardSkeleton } from "@/components/ui/CardSkeleton";
import { Button } from "@/components/ui/Button";

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
  const navigate = useNavigate();
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

  // ── Identify Hero and Supporting Services ──────────────────────────────────
  const heroService = services.find(s => (s.category === 'websites' || s.title?.toLowerCase().includes("website")));
  const supportingServices = services.filter(s => s._id !== heroService?._id);
  
  // Sort supporting services by their designated category number for logical flow
  const sortedSupporting = [...supportingServices].sort((a, b) => {
    const catA = CATEGORY_LABELS[CATEGORY_ALIASES[a.category] || "websites"]?.categoryNum || "99";
    const catB = CATEGORY_LABELS[CATEGORY_ALIASES[b.category] || "websites"]?.categoryNum || "99";
    return parseInt(catA) - parseInt(catB);
  });

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

        {/* ── Services Bento Grid (FLFS-Optimized) ── */}
        <section className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12 2xl:px-16 3xl:max-w-screen-2xl 4xl:max-w-[1728px]">
          <div className="mb-20">
            <span className="mb-4 inline-block bg-teal-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-teal-700">
              Service Ecosystem
            </span>
            <h2 className="font-headline text-5xl font-bold tracking-tighter text-[#1a1a1a] md:text-6xl">
              Precision Engines for <span className="text-md3-primary">Contractor Growth.</span>
            </h2>
            <div className="mt-6 h-px w-32 bg-md3-primary" />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
             {loading ? (
                Array.from({ length: 5 }).map((_, i) => (
                  <div key={`skeleton-${i}`} className={i === 0 ? "lg:col-span-2 lg:row-span-2" : "col-span-1"}>
                    <CardSkeleton />
                  </div>
                ))
             ) : (
               <>
                {/* Hero Service: Contractor Websites */}
                {heroService && (
                  <div className="lg:col-span-2 lg:row-span-2">
                    <ServiceCard service={heroService} isHero={true} />
                  </div>
                )}

                {/* Supporting Services */}
                {sortedSupporting.map((service) => {
                  const isGrowthSupport = CATEGORY_ALIASES[service.category] === 'growthSupport';
                  return (
                    <div key={service._id} className="col-span-1">
                      {isGrowthSupport ? (
                        <OngoingSupportCard service={service} />
                      ) : (
                        <ServiceCard service={service} />
                      )}
                    </div>
                  );
                })}
               </>
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

function ServiceCard({ service, isHero = false }: { service: any; isHero?: boolean }) {
  const bestFor = service.bestFor || [];
  
  // Logic-based "Primary Outcome" if not in Sanity
  const outcome = service.outcome || (
    service.category === 'audit' ? "Immediate Lead Leak Detection" :
    service.category === 'websites' ? "High-Conversion Sales Asset" :
    service.category === 'localSeo' ? "Map Pack Domination" :
    service.category === 'landingPages' ? "Direct Social/Search Lead Capture" :
    "Operational Scalability"
  );

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="h-full"
    >
      <Link
        to={getServiceHref(service)}
        className={cn(
          "group relative flex h-full flex-col border border-zinc-200 bg-white p-8 [border-width:0.5px] transition-all duration-300 hover:border-md3-primary/35 hover:shadow-2xl hover:shadow-md3-primary/10 rounded-2xl overflow-hidden text-[#1a1a1a]",
          isHero && "bg-black border-zinc-800 text-white"
        )}
        aria-label={`View ${service.title} details`}
      >
        {/* Background Image for Hero Tile */}
        {isHero && (
          <div className="absolute inset-0 z-0 select-none pointer-events-none">
            <img 
              src="/images/contractor-hero-bg.png" 
              alt="" 
              className="h-full w-full object-cover opacity-[0.70] contrast-[1.2] transition-all duration-700 group-hover:scale-110 group-hover:opacity-[0.90]" 
              loading="lazy"
            />
            {/* Dark Cinematic Overlay */}
            <div className="absolute inset-0 bg-black/50 transition-opacity group-hover:opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            
            {/* Decorative Grid Line */}
            <div className="absolute bottom-0 right-0 h-32 w-32 opacity-[0.03]">
              <svg className="h-full w-full" viewBox="0 0 100 100" fill="none" stroke="#1a1a1a" strokeWidth="0.5">
                <path d="M0 100 L100 0 M0 80 L80 0 M20 100 L100 20" />
              </svg>
            </div>
          </div>
        )}

        <div className="relative z-10 flex flex-col h-full"> 
          <div className="mb-6 flex items-center justify-between gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-md3-primary/40 to-transparent" />
            <div className={cn(
              "shrink-0 rounded-full px-3 py-1.5 text-right transition-colors",
              isHero 
                ? "border border-white/20 bg-white/10 backdrop-blur-md" 
                : "border border-md3-primary/15 bg-md3-primary/6"
            )}>
              <span className={cn(
                "block text-[8px] font-bold uppercase tracking-[0.28em]",
                isHero ? "text-white/40" : "text-zinc-400"
              )}>
                Primary outcome
              </span>
              <span className={cn(
                "mt-1 block text-[10px] font-bold uppercase tracking-[0.2em]",
                isHero ? "text-teal-300" : "text-md3-primary"
              )}>
                {outcome}
              </span>
            </div>
          </div>

          <h3 className={cn(
            "mb-4 font-headline font-bold transition-colors tracking-tighter",
            isHero ? "text-4xl md:text-5xl text-white underline-offset-8" : "text-xl text-[#1a1a1a] group-hover:text-md3-primary"
          )}>
            {service.title}
          </h3>
          {service.description && (
            <p className={cn(
              "mb-6 font-light leading-relaxed",
              isHero ? "text-lg max-w-prose text-white/80" : "text-sm text-zinc-600"
            )}>
              {service.description}
            </p>
          )}
          
          <div className={cn(
            "mt-auto space-y-6",
            isHero && "grid grid-cols-1 md:grid-cols-2 gap-x-12 space-y-0"
          )}>
            {bestFor.length > 0 && (
              <div className="space-y-4">
                <p className={cn(
                  "text-[10px] font-bold uppercase tracking-widest",
                  isHero ? "text-white/40" : "text-[#1a1a1a]"
                )}>Best for:</p>
                <ul className={cn(
                  "space-y-3 font-light",
                  isHero ? "text-sm text-white/70" : "text-xs text-zinc-500"
                )}>
                  {bestFor.map((item: string, i: number) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className={cn(
                        "h-1.5 w-1.5 rounded-full",
                        isHero ? "bg-md3-primary/60" : "bg-md3-primary/30"
                      )} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className={cn(
              "flex flex-col justify-end",
              isHero ? "pt-0" : "pt-4"
            )}>
              <div className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.24em] text-md3-primary">
                <span className="relative">
                  <span className={cn(
                    "transition-colors duration-300",
                    isHero ? "group-hover:text-white" : "group-hover:text-[#1a1a1a]"
                  )}>View details</span>
                  <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-300 group-hover:scale-x-100" />
                </span>
                <span className={cn(
                  "inline-flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300",
                  isHero 
                    ? "border-white/20 bg-white/5 group-hover:border-md3-primary/40 group-hover:bg-md3-primary/20" 
                    : "border border-md3-primary/20 bg-md3-primary/6 group-hover:border-md3-primary/40 group-hover:bg-md3-primary/10"
                )}>
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden />
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}


function OngoingSupportCard({ service }: { service: any }) {
  const navigate = useNavigate();
  const bestFor = service.bestFor || [];
  
  // Icon mapping
  const Icon = service.title.toLowerCase().includes("speed") ? Zap 
             : service.title.toLowerCase().includes("content") ? FileText 
             : ShieldCheck;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="h-full"
    >
      <div 
        className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-white/[0.03] p-8 transition-all hover:bg-white/[0.06] hover:shadow-2xl hover:shadow-black/50"
        style={industrialDarkMeshStyle}
      >
        <div className="relative z-10">
          <div className="mb-8 flex items-center justify-between">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-md3-primary/10 text-md3-primary transition-transform group-hover:scale-110 group-hover:rotate-3">
              <Icon className="size-7" strokeWidth={1.5} />
            </div>
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-teal-400 opacity-60">
              System Continuity
            </span>
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
              <ul className="space-y-3 text-[11px] font-medium text-white/60">
                {bestFor.map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-md3-primary/40" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="relative z-10 mt-12 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <Button
            onClick={() => navigate(getServiceHref(service))}
            variant="accent"
            size="sm"
            className="w-full justify-between border border-white/10 bg-white/[0.03] text-white hover:border-md3-primary/40 hover:bg-md3-primary group-hover:bg-white/5"
          >
            <span className="text-[9px] tracking-[0.2em]">View Technical Scope</span>
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1.5" />
          </Button>
        </div>

        {/* Subtle corner accent */}
        <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-md3-primary/5 blur-3xl transition-opacity group-hover:opacity-100 opacity-0" />
      </div>
    </motion.div>
  );
}
