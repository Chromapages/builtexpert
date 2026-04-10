import React, { useState, useEffect, useCallback } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Check,
  Flame,
  Home,
  Plug,
  Thermometer,
  Wrench,
  X,
  Zap,
  ChevronLeft,
  ChevronRight,
  Star
} from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { HeaderSection } from "@/components/ui/HeaderSection";
import { CTASection } from "@/components/ui/CTASection";
import {
  INDUSTRIAL,
  industrialMeshStyle,
  industrialTextGradientStyle,
} from "@/lib/industrialStyle";
import { motion, AnimatePresence } from "motion/react";

// ─── Data ────────────────────────────────────────────────────────────────────

const INDUSTRY_ICONS: Record<string, LucideIcon> = {
  electricians: Zap,
  "hvac-contractors": Thermometer,
  "ev-charger-installers": Plug,
  "heat-pump-contractors": Flame,
  "panel-upgrade-specialists": Wrench,
  "home-performance-contractors": Home,
};

const SCHEMATICS: Record<string, string> = {
  "ev-charger-installers": "/assets/schematics/ev-charger.png",
  "heat-pump-contractors": "/assets/schematics/heat-pump.png",
  "panel-upgrade-specialists": "/assets/schematics/smart-panel.png",
  "home-performance-contractors": "/assets/schematics/home-efficiency.png",
};

function IndustryIcon({
  id,
  className,
}: {
  id: string;
  className?: string;
}) {
  const Icon = INDUSTRY_ICONS[id] ?? Zap;
  return <Icon className={className} strokeWidth={1.75} aria-hidden />;
}

interface Industry {
  readonly id: string;
  readonly tier: "primary" | "secondary";
  readonly name: string;
  readonly tagline: string;
  readonly description: string;
  readonly problems: readonly string[];
  readonly whatWeImprove: readonly string[];
  readonly stat: { value: string; label: string };
  readonly testimonial?: { quote: string; name: string; trade: string; location: string; result: string };
  readonly ctaLabel: string;
  readonly ctaHref: string;
}

const INDUSTRIES: Industry[] = [
  // ── Primary ──────────────────────────────────────────────────────────────
  {
    id: "hvac-contractors",
    tier: "primary",
    name: "HVAC Contractors",
    tagline: "Win emergency calls and high-margin system replacements.",
    description:
      "HVAC businesses live on two kinds of work: fast-response emergency repairs and high-ticket system replacements. Your website needs to convert both. We build HVAC systems that show up when it's 100° outside, load fast on mobile, and send estimates to your dispatch team automatically.",
    problems: [
      "Losing emergency repair calls to competitors who rank above them locally",
      "Landing page doesn't clearly show financing options for system replacements",
      "Seasonal traffic spikes with no dedicated seasonal campaign landing pages",
      "Site speed below 70 on mobile — Google penalizes it in local rankings",
      "No way to book online — leads drop off when they can't immediately schedule",
    ],
    whatWeImprove: [
      "Emergency service pages optimized for near-me searches",
      "Financing-forward design — highlight monthly payment options upfront",
      "Seasonal landing pages for summer cooling and winter heating campaigns",
      "Core Web Vitals optimization — 90+ Lighthouse score on mobile",
      "Online booking and instant quote flows integrated into the site",
    ],
    stat: { value: "90+", label: "Lighthouse performance score" },
    testimonial: {
      quote: "Losing emergency calls to a competitor with a worse service was embarrassing. Three months after launch my Google Maps rank went from page 2 to #1 for AC repair in my city.",
      name: "Marcus T.",
      trade: "HVAC Contractor",
      location: "Phoenix, AZ",
      result: "#1 Google Maps rank in 90 days",
    },
    ctaLabel: "View HVAC Lead Systems",
    ctaHref: "/who-we-help/hvac-contractors",
  },
  {
    id: "electricians",
    tier: "primary",
    name: "Electricians",
    tagline: "Turn website traffic into estimate requests.",
    description:
      "We help electrical contractors build the web presence that matches the quality of their work. That means stronger service pages, better local SEO, clearer trust signals, and mobile-first conversion paths built specifically for residential and commercial electrical work.",
    problems: [
      "Your site looks like it was built in 2014 — and it's costing you jobs every day",
      "Google Maps shows you exist, but your website kills the lead before they call",
      "A site full of copy-paste fluff that says nothing about what you actually do",
      "Leads go to an inbox nobody's checking — or straight to your spam folder",
      "Zero visibility for high-margin services like whole-home rewires and smart panel installs",
    ],
    whatWeImprove: [
      "Service-specific landing pages for each high-value job type",
      "Google Business Profile sync and local SEO optimization",
      "Mobile-first layout built for the customer who searches from their phone",
      "Lead capture connected to ServiceTitan, Housecall Pro, or your CRM",
      "Trust section with licenses, reviews, and before/after project photos",
    ],
    stat: { value: "Significant", label: "increase in monthly leads" },
    testimonial: {
      quote: "I went from 4 calls a month to 19. My site now closes customers before I even pick up the phone.",
      name: "Chris V.",
      trade: "Master Electrician",
      location: "Denver, CO",
      result: "19 calls/month in 90 days",
    },
    ctaLabel: "View Electrician Systems",
    ctaHref: "/who-we-help/electricians",
  },
  // ── Secondary ─────────────────────────────────────────────────────────────
  {
    id: "ev-charger-installers",
    tier: "secondary",
    name: "EV Charger Installers",
    tagline: "Capture the fastest-growing residential electrical market.",
    description:
      "EV charger installation is growing fast — and most of the search demand is going to businesses with dedicated pages. We build purpose-built EV installation pages that rank for the right keywords, explain the process clearly, and convert curious EV owners into booked jobs.",
    problems: [
      "No dedicated EV charger service page — search traffic goes elsewhere",
      "Homeowners don't understand the process — the site doesn't explain it",
      "No clear pricing range or incentive/rebate information",
      "Zero local SEO for 'EV charger installer [city]' long-tail searches",
    ],
    whatWeImprove: [
      "Dedicated EV installation service page with FAQ and process breakdown",
      "Incentive and federal rebate callouts to increase conversion urgency",
      "Local SEO targeting city-level EV installation keywords",
      "Trust signals: certifications, charger brands supported, and case studies",
    ],
    stat: { value: "Top Rank", label: "for high-value EV keywords" },
    ctaLabel: "Talk to Us About EV Installation Sites",
    ctaHref: "/who-we-help/ev-charger-installers",
  },
  {
    id: "heat-pump-contractors",
    tier: "secondary",
    name: "Heat Pump Contractors",
    tagline: "Win the homeowners switching from gas — before your competitor does.",
    description:
      "Heat pump adoption is accelerating. Contractors who get visible now will own the market for the next decade. We build sites that educate homeowners on the switch, highlight utility rebates and incentives, and move them confidently toward booking a system quote.",
    problems: [
      "Competing with large HVAC companies who dominate the generic 'heat pump' keywords",
      "Homeowners need education before buying — site doesn't provide it",
      "No rebate or utility incentive content — huge missed conversion opportunity",
      "Not positioned as the electrification specialist in their service area",
    ],
    whatWeImprove: [
      "Heat pump comparison content — gas vs. electric, cost savings calculators",
      "Rebate and utility incentive landing pages by state and utility",
      "Positioning as the local electrification specialist (not just HVAC)",
      "Case study pages showing real heat pump installs and savings outcomes",
    ],
    stat: { value: "High ROI", label: "with rebate-focused content" },
    ctaLabel: "Talk to Us About Heat Pump Sites",
    ctaHref: "/who-we-help/heat-pump-contractors",
  },
  {
    id: "panel-upgrade-specialists",
    tier: "secondary",
    name: "Panel Upgrade Specialists",
    tagline: "Own the highest-margin residential electrical service online.",
    description:
      "Panel upgrades are high-ticket, high-trust jobs. Homeowners need to feel confident before calling. We build panel upgrade pages that explain the process, address common fears, show credentials, and convert searches into booked estimates at a much higher rate.",
    problems: [
      "Panel upgrade isn't called out as a standalone service — buried under general electrical",
      "No trust signals for such a high-dollar, high-stakes job (licenses, insurance, photos)",
      "Competing for broad 'electrician' keywords instead of owning the 'panel upgrade' niche",
      "No clear timeline or process — homeowners don't know what to expect",
    ],
    whatWeImprove: [
      "Dedicated 200A and 400A panel upgrade service pages",
      "Credential callouts — licenses, permits pulled, bonding, insurance",
      "Step-by-step process section with realistic timelines and what to expect",
      "Local SEO targeting 'panel upgrade [city]' searches",
    ],
    stat: { value: "Optimized", label: "for high-ticket electrical work" },
    ctaLabel: "Talk to Us About Panel Upgrade Sites",
    ctaHref: "/who-we-help/panel-upgrade-specialists",
  },
  {
    id: "home-performance-contractors",
    tier: "secondary",
    name: "Home Performance & Insulation",
    tagline: "Help homeowners understand energy efficiency before they call anyone else.",
    description:
      "Home performance contractors — insulation, air sealing, energy audits — serve an audience that researches heavily before buying. We build content-led sites that rank for education keywords, build trust through audit results, and convert readers into booked consultations.",
    problems: [
      "Services are complex — homeowners don't understand what they're buying",
      "No content strategy: missing blog, FAQ, or educational landing pages",
      "Weak local SEO — no service-area or city-specific landing pages",
      "Leads drop off because there's no clear next step ('get an assessment' is too vague)",
    ],
    whatWeImprove: [
      "Educational service pages explaining energy audits, blower door tests, and ROI",
      "City and program-specific landing pages (utility rebate programs)",
      "Content hub: blog posts targeting 'how to reduce energy bills' and related keywords",
      "Clear conversion path: free assessment → booking flow → CRM integration",
    ],
    stat: { value: "Accelerated", label: "lead velocity after content rebuild" },
    ctaLabel: "Talk to Us About Home Performance Sites",
    ctaHref: "/who-we-help/home-performance-contractors",
  },
];

const PRIMARY = INDUSTRIES.filter((i) => i.tier === "primary");
const SECONDARY = INDUSTRIES.filter((i) => i.tier === "secondary");

// ─── Sub-components ───────────────────────────────────────────────────────────

function ProblemList({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: INDUSTRIAL.muted }}>
          <X className="mt-0.5 size-4 shrink-0 text-red-400" strokeWidth={2.5} aria-hidden />
          {item}
        </li>
      ))}
    </ul>
  );
}

function ImproveList({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: INDUSTRIAL.charcoal }}>
          <Check className="mt-0.5 size-4 shrink-0 text-md3-primary" strokeWidth={2.5} aria-hidden />
          {item}
        </li>
      ))}
    </ul>
  );
}

function PrimaryCard({ industry, flip }: { industry: Industry; flip: boolean }) {
  return (
    <section id={industry.id} className="py-20 lg:py-28" style={{ borderBottomWidth: "0.5px", borderColor: INDUSTRIAL.outline }}>
      <div className="mx-auto max-w-[1728px] px-6 lg:px-8">
        <div className={`grid items-start gap-12 lg:grid-cols-2 lg:gap-20 ${flip ? "lg:grid-flow-dense" : ""}`}>

          {/* Left: Identity + description + CTA */}
          <div className={flip ? "lg:col-start-2" : ""}>
            <div className="mb-5 flex items-center gap-3">
              <IndustryIcon
                id={industry.id}
                className="size-9 shrink-0 text-md3-primary"
              />
              <span className="rounded-full bg-md3-secondary-container px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-md3-on-secondary-container">
                Primary Audience
              </span>
            </div>

            <h2 className="mb-3 font-headline text-4xl font-bold tracking-tighter lg:text-5xl" style={{ color: INDUSTRIAL.charcoal }}>
              {industry.name}
            </h2>
            <p className="mb-5 font-headline text-lg font-light text-md3-primary">
              {industry.tagline}
            </p>
            <p className="mb-8 max-w-lg text-base leading-relaxed" style={{ color: INDUSTRIAL.muted }}>
              {industry.description}
            </p>

            {/* Stat badge */}
            <div className="mb-6 inline-flex items-center gap-4 rounded-xl bg-md3-surface-container-low px-5 py-4" style={{ borderWidth: "0.5px", borderColor: INDUSTRIAL.outline }}>
              <div>
                <p className="font-headline text-3xl font-bold tracking-tight text-md3-primary">{industry.stat.value}</p>
                <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: INDUSTRIAL.muted }}>{industry.stat.label}</p>
              </div>
            </div>

            {/* Industry-matched testimonial */}
            {industry.testimonial && (
              <div className="mb-8 rounded-xl bg-md3-primary/5 p-5" style={{ borderWidth: "0.5px", borderColor: "rgba(0,101,101,0.12)" }}>
                <div className="mb-2 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-3 fill-yellow-400 text-yellow-400" aria-hidden />
                  ))}
                </div>
                <p className="mb-3 text-sm font-light leading-relaxed" style={{ color: INDUSTRIAL.charcoal }}>
                  &ldquo;{industry.testimonial.quote}&rdquo;
                </p>
                <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: INDUSTRIAL.muted }}>
                  {industry.testimonial.name} · {industry.testimonial.trade} · {industry.testimonial.location} · {industry.testimonial.result}
                </p>
              </div>
            )}

            <div className="mb-6 flex flex-col gap-3 sm:flex-row">
              <Link
                to={industry.ctaHref}
                className="rounded-none bg-md3-primary px-7 py-3.5 text-center text-[11px] font-bold uppercase tracking-[0.25em] text-md3-on-primary shadow-md transition-all hover:bg-[#1a1a1a]"
              >
                {industry.ctaLabel}
              </Link>
              <Link
                to="/contact?ref=audit"
                className="inline-flex items-center justify-center gap-2 border px-7 py-3.5 text-center text-[11px] font-bold uppercase tracking-[0.25em] transition-all hover:bg-[#1a1a1a] hover:text-white"
                style={{ borderColor: INDUSTRIAL.outline, color: INDUSTRIAL.charcoal, borderWidth: "0.5px" }}
              >
                Start The Audit
                <ArrowRight className="size-4 shrink-0" aria-hidden />
              </Link>
            </div>

            {/* What happens next */}
            <p className="text-[10px] font-light" style={{ color: INDUSTRIAL.muted }}>
              → You request an audit &nbsp;→ We review your site &amp; local market &nbsp;→ Video breakdown delivered in 48 hours
            </p>
          </div>

          {/* Right: Problems vs. What we improve */}
          <div className={`space-y-8 ${flip ? "lg:col-start-1 lg:row-start-1" : ""}`}>
            <div className="rounded-xl p-7 lg:p-8" style={{ background: "#fff9f9", borderWidth: "0.5px", borderColor: "#fde8e8" }}>
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.25em] text-red-500">Common Problems</p>
              <ProblemList items={industry.problems} />
            </div>
            <div className="rounded-xl bg-md3-surface-container-low p-7 lg:p-8" style={{ borderWidth: "0.5px", borderColor: INDUSTRIAL.outline }}>
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.25em] text-md3-primary">What BuiltExpert Helps Improve</p>
              <ImproveList items={industry.whatWeImprove} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function SecondaryCard({ industry, isCarousel = false }: { industry: Industry; isCarousel?: boolean }) {
  const schematicUrl = SCHEMATICS[industry.id];
  
  return (
    <article 
      id={industry.id} 
      className={`group relative flex flex-col overflow-hidden rounded-2xl bg-white transition-all hover:shadow-2xl hover:shadow-black/5 ${isCarousel ? "lg:flex-row min-h-[600px]" : "lg:flex-row"}`} 
      style={{ borderWidth: "0.5px", borderColor: INDUSTRIAL.outline }}
    >
      {/* Left: Technical Schematic Visual */}
      <div className={`relative flex min-h-[300px] w-full items-center justify-center overflow-hidden ${isCarousel ? "lg:w-[40%]" : "lg:w-[33%]"}`}>
        <div 
          className="absolute inset-0 z-0 opacity-[0.07]" 
          style={{ 
            backgroundImage: `radial-gradient(${INDUSTRIAL.charcoal} 0.5px, transparent 0.5px)`,
            backgroundSize: "16px 16px"
          }} 
        />
        <img 
          src={schematicUrl} 
          alt={`${industry.name} Technical Schematic`}
          className="relative z-10 w-full h-full object-cover mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
        />
        {/* Overlay Label */}
        <div className="absolute left-6 top-6 z-20">
          <span className="rounded-full bg-md3-primary/10 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-md3-primary backdrop-blur-sm border border-md3-primary/10">
            Tech Spec Rev. 2026
          </span>
        </div>
      </div>

      {/* Right: Content Area */}
      <div className={`flex flex-1 flex-col p-8 lg:p-14 ${isCarousel ? "lg:p-20 justify-center" : "lg:p-12"}`}>
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-md3-primary/5 text-md3-primary">
            <IndustryIcon id={industry.id} className="size-6" />
          </div>
          <div>
            <h3 className={`font-headline font-bold tracking-tight ${isCarousel ? "text-4xl" : "text-3xl"}`} style={{ color: INDUSTRIAL.charcoal }}>
              {industry.name}
            </h3>
            <p className="text-[10px] font-bold uppercase tracking-widest text-md3-primary">{industry.tagline}</p>
          </div>
        </div>

        <p className={`mb-10 font-light leading-relaxed text-zinc-500 ${isCarousel ? "text-lg text-pretty" : "text-base"}`}>
          {industry.description}
        </p>

        <div className={`mb-10 grid gap-16 ${isCarousel ? "lg:gap-24 sm:grid-cols-2" : "sm:grid-cols-2"}`}>
          <div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-widest text-red-400">Common Problems</p>
            <ProblemList items={industry.problems} />
          </div>
          <div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-widest text-md3-primary">What We Improve</p>
            <ImproveList items={industry.whatWeImprove} />
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-6 pt-10 sm:flex-row" style={{ borderTop: `0.5px solid ${INDUSTRIAL.outline}` }}>
          <div className="flex items-center gap-3">
            <span className="font-headline text-3xl font-bold tracking-tighter text-md3-primary">{industry.stat.value}</span>
            <span className="text-[10px] font-bold uppercase leading-tight tracking-widest" style={{ color: INDUSTRIAL.muted }}>{industry.stat.label}</span>
          </div>
          
          <Link
            to={industry.ctaHref}
            className="ml-auto w-full rounded-none bg-md3-primary px-10 py-4 text-center text-[11px] font-bold uppercase tracking-[0.3em] text-md3-on-primary shadow-lg transition-all hover:bg-[#1a1a1a] hover:-translate-y-0.5 sm:w-auto"
          >
            {industry.ctaLabel}
          </Link>
        </div>
      </div>
    </article>
  );
}

function SecondaryExpansionCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = React.useRef<number | null>(null);

  const next = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % SECONDARY.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + SECONDARY.length) % SECONDARY.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    
    const timer = setInterval(() => {
      next();
    }, 4000);
    
    return () => clearInterval(timer);
  }, [next, isPaused]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setIsPaused(true);
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    const startX = touchStartX.current;
    const endX = event.changedTouches[0]?.clientX ?? null;
    touchStartX.current = null;

    if (startX === null || endX === null) {
      setIsPaused(false);
      return;
    }

    const delta = endX - startX;
    if (Math.abs(delta) > 50) {
      if (delta < 0) {
        next();
      } else {
        prev();
      }
    }

    setIsPaused(false);
  };

  return (
    <div 
      className="group relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={() => setIsPaused(false)}
    >
      {/* Navigation Arrows - Outside Card */}
      <button
        onClick={prev}
        className="absolute -left-2 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-800 opacity-100 shadow-xl transition-all duration-300 hover:scale-110 hover:border-md3-primary hover:bg-md3-primary hover:text-white active:scale-95 sm:-left-6 md:opacity-0 md:group-hover:opacity-100 lg:-left-16"
        aria-label="Previous Industry"
      >
        <ChevronLeft className="size-5" />
      </button>

      <button
        onClick={next}
        className="absolute -right-2 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-800 opacity-100 shadow-xl transition-all duration-300 hover:scale-110 hover:border-md3-primary hover:bg-md3-primary hover:text-white active:scale-95 sm:-right-6 md:opacity-0 md:group-hover:opacity-100 lg:-right-16"
        aria-label="Next Industry"
      >
        <ChevronRight className="size-5" />
      </button>

      <div className="relative min-h-[600px] overflow-hidden rounded-2xl">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.3 }
            }}
            className="w-full"
          >
            <SecondaryCard industry={SECONDARY[currentIndex]} isCarousel />
          </motion.div>
        </AnimatePresence>
      </div>


      {/* Technical Navigation UI - Simplified */}
      <div className="mt-12 flex flex-col items-center justify-between gap-8 border-t border-zinc-100 pt-8 sm:flex-row">
        <div className="flex items-center gap-6">
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-zinc-400">
            TRD // {String(currentIndex + 1).padStart(2, '0')} / {String(SECONDARY.length).padStart(2, '0')}
          </span>
          <div className="hidden h-px w-24 bg-zinc-100 sm:block" />
          <p className="hidden text-xs font-bold uppercase tracking-widest text-md3-primary sm:block">
            {SECONDARY[currentIndex].name} Specification
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
            {isPaused ? "Paused" : "Auto-rotating"}
          </span>
          <div className="flex gap-1.5 px-4">
            {SECONDARY.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`h-1 cursor-pointer transition-all ${idx === currentIndex ? "w-8 bg-md3-primary" : "w-4 bg-zinc-200 hover:bg-zinc-300"}`}
                aria-label={`Go to industry ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>

  );
}

export function WhoWeHelp() {
  return (
    <>
      <SEO
        title="Who We Help"
        description="BuiltExpert specializes in websites and lead systems for electricians, HVAC contractors, EV charger installers, heat pump contractors, panel upgrade specialists, and home performance companies."
        canonicalPath="/who-we-help" 
      />
      <div className="font-body tracking-tight antialiased [letter-spacing:-0.01em] [&_h1]:normal-case [&_h2]:normal-case [&_h3]:normal-case selection:bg-md3-primary-container selection:text-md3-on-primary-container">
        <HeaderSection 
          badge="Who We Help"
          title={
            <>
              We Know <br />
              <span className="font-bold text-md3-primary">Your Trade.</span>
            </>
          }
          description="We don't work with every business. We work with growth-minded HVAC contractors and specialty trades who need a system that actually generates calls."
          imageSrc="/images/who-we-help-hero.png"
          imageAlt="Industrial Trade Workspace"
        />

        <div style={industrialMeshStyle}>
        {/* ── Fit check strip ──────────────────────────────────────────────── */}
        <section className="bg-md3-surface-container-low py-10" style={{ borderBottomWidth: "0.5px", borderColor: INDUSTRIAL.outline }}>
          <div className="mx-auto max-w-[1728px] px-6 lg:px-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
              <p className="flex shrink-0 items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em]" style={{ color: INDUSTRIAL.muted }}>
                <span>You&apos;re in the right place if you are a</span>
                <ArrowRight className="size-3.5 shrink-0" aria-hidden />
              </p>

              {/* Marquee Carousel */}
              <div className="relative flex-1 overflow-hidden" style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}>
                <motion.div 
                  className="flex w-max items-center gap-3 pr-3"
                  animate={{ x: [0, -1450] }} // Approximated loop - will be smooth with duplication
                  transition={{ 
                    duration: 35, 
                    repeat: Infinity, 
                    ease: "linear",
                    repeatType: "loop"
                  }}
                >
                  {[
                     "HVAC Company",
                     "AC & Heating Contractor",
                     "Residential Electrician",
                     "Commercial Electrician",
                     "EV Charger Installer",
                     "Heat Pump Contractor",
                     "Home Energy Auditor",
                     "Insulation Contractor",
                     "Roofing Contractor",
                     "Plumbing Company",
                    // Duplicate for seamless loop
                    "Residential Electrician",
                    "Commercial Electrician",
                    "HVAC Company",
                    "AC & Heating Contractor",
                    "EV Charger Installer",
                    "Heat Pump Contractor",
                    "Home Energy Auditor",
                    "Insulation Contractor",
                    "Roofing Contractor",
                    "Plumbing Company"
                  ].map((label, idx) => (
                    <span
                      key={`${label}-${idx}`}
                      className="whitespace-nowrap rounded-lg bg-white px-5 py-2 text-[10px] font-bold uppercase tracking-widest shadow-sm"
                      style={{ color: INDUSTRIAL.charcoal, borderWidth: "0.5px", borderColor: INDUSTRIAL.outline }}
                    >
                      {label}
                    </span>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </section>


        {/* ── Primary Industries ───────────────────────────────────────────── */}
        <div>
          <div className="mx-auto max-w-[1728px] px-6 pt-16 lg:px-8">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-md3-primary">
              Primary Specializations
            </p>
            <h2 className="font-headline text-4xl font-bold tracking-tighter lg:text-5xl" style={{ color: INDUSTRIAL.charcoal }}>
              Where we go deepest
            </h2>
          </div>
          {PRIMARY.map((industry, i) => (
            <PrimaryCard key={industry.id} industry={industry} flip={i % 2 === 1} />
          ))}
        </div>

        <section className="py-20 lg:py-28" style={{ borderTopWidth: "0.5px", borderColor: INDUSTRIAL.outline }}>
          <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
            <div className="mb-14">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-md3-primary">
                Expansion Markets
              </p>
              <h2 className="mb-4 font-headline text-4xl font-bold tracking-tighter lg:text-5xl" style={{ color: INDUSTRIAL.charcoal }}>
                Electrification &amp; specialty trades
              </h2>
              <p className="max-w-xl text-sm leading-relaxed" style={{ color: INDUSTRIAL.muted }}>
                These markets are growing fast. Contractors who establish web authority now
                will own local search when the full adoption wave hits.
              </p>
            </div>

            <SecondaryExpansionCarousel />
          </div>
        </section>

        <CTASection />

        {/* ── Positioning statement ────────────────────────────────────────── */}
        <section className="border-t border-zinc-100 py-16 lg:py-20" style={{ background: INDUSTRIAL.charcoal }}>
          <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-3">
              {[
                {
                  title: "Specialized, not broad",
                  body: "We don't build sites for coffee shops, doctors, or e-commerce brands. Everything we've built — our frameworks, our SEO playbooks, our copy templates — is for home service contractors. That depth of focus is why our results are better.",
                },
                {
                  title: "Your business model, understood",
                  body: "Seasonal demand. Dispatch logistics. Local search. High-ticket jobs that require trust before the first call. We know how contractor businesses work, which means we build lead systems — not just pretty websites.",
                },
                {
                  title: "Fast to navigate, built to convert",
                  body: "Every page we build is mobile-first, fast-loading, and structured to turn a search into a call. We track what happens after launch and adjust. The goal is always booked jobs, not traffic vanity metrics.",
                },
              ].map(({ title, body }) => (
                <div key={title}>
                  <h3 className="mb-3 font-headline text-xl font-bold tracking-tight text-white">{title}</h3>
                  <p className="text-sm leading-relaxed text-white/60">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        </div>
      </div>
    </>
  );
}
