import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { HeaderSection } from "@/components/ui/HeaderSection";
import { Accordion } from "@/components/ui/Accordion";
import { CTASection } from "@/components/ui/CTASection";
import {
  industrialMeshStyle,
  industrialTextGradientStyle,
} from "@/lib/industrialStyle";
import { INDUSTRIAL } from "@/lib/industrialStyle";
import { ROICalculator } from "@/components/features/ROICalculator";
import { OSSection } from "@/components/features/OSSection";
import { getFaqItems, getPricingTiers, getOsSection } from "@/lib/sanity.client";
import type { OSSectionData } from "@/components/features/OSSection";
import { CardSkeleton } from "@/components/ui/CardSkeleton";

// ─── Prices (Fallback) ───────────────────────────────────────────────────────────

const FALLBACK_TIERS = [
  {
    name: "Support",
    monthlyPrice: 750,
    annualPrice: 675,
    tagline: "1 service area targeted",
    includes: [
      "Website Hosting & Security",
      "Technical Maintenance",
      "GBP Monthly Optimization",
      "Quarterly SEO Health Check",
      "Performance Email Reports",
    ],
  },
  {
    name: "Growth",
    monthlyPrice: 1500,
    annualPrice: 1350,
    tagline: "Up to 3 service areas targeted",
    includes: [
      "Everything in Support",
      "Monthly Content Updates (1 page)",
      "Ongoing Local SEO Campaign",
      "Conversion Rate Optimization",
      "Monthly Growth Strategy Call",
      "Lead Source Tracking & Analytics",
    ],
  },
  {
    name: "Expansion",
    monthlyPrice: 3000,
    annualPrice: 2700,
    tagline: "Up to 8 service areas targeted",
    includes: [
      "Everything in Growth",
      "New City Landing Page (1/mo)",
      "Dedicated Account Manager",
      "Custom Competitor Tracking",
      "Bi-Weekly Strategy Sync",
      "Priority Support Desk",
    ],
  },
];

// ─── FAQ ──────────────────────────────────────────────────────────────────────

const FAQ_ITEMS = [
  {
    title: "Why is the Lead System Audit a paid offer?",
    content:
      "Most free 'audits' are just automated reports that tell you what you already know. Our $297 audit is a manual, strategic deep-dive into your specific market and competitors. We find the technical blockers and messaging gaps that are actually costing you money. There is no credit-back gimmick; the value is in the diagnosis and the recommendations.",
    },
  {
    title: "Do I have to pay for a growth retainer after my site is built?",
    content:
      "No. Our high-performance website builds are a one-time investment. Once your site is live, you own it 100%. Many contractors choose to add a monthly retainer to keep climbing the rankings and increasing lead volume, but it is never required.",
  },
  {
    title: "What is BuiltExpert?",
    content:
      "BuiltExpert is the premier growth partner for trade contractors. We specialize in building high-performance digital infrastructure—from HVAC Lead Generation Systems to local SEO and conversion-focused landing pages—that turns searches into booked jobs. Everything we do is built for speed, conversion, and measurable ROI.",
  },
  {
    title: "Do I own the website if I cancel?",
    content:
      "Yes. The website we build is yours. All code, content, and domain assets transfer to you if you leave. We don't hold your digital infrastructure hostage.",
  },
  {
    title: "How is this different from a regular marketing agency?",
    content:
      "Most agencies sell you traffic. We build systems that convert traffic into booked jobs—website, SEO, lead capture, and conversion optimisation working together. We measure success in calls and jobs, not impressions and clicks.",
  },
];

const COMPARISON_ROWS = [
  {
    feature: "Monthly price",
    v: "$750",
    g: "$1,500",
    e: "$3,000+",
    ent: "Custom",
  },
  {
    feature: "Service areas targeted",
    v: "1 area",
    g: "Up to 3",
    e: "Up to 8",
    ent: "Unlimited",
  },
  {
    feature: "Hosting & Technical Maintenance",
    v: "Included",
    g: "Included",
    e: "Included",
    ent: "Included",
  },
  {
    feature: "Google Business Profile",
    v: "Monthly",
    g: "Active Strategy",
    e: "Multi-Location",
    ent: "Multi-Location",
  },
  {
    feature: "Local SEO Keyword Campaign",
    v: "Not included",
    g: "50 Keywords",
    e: "Comprehensive",
    ent: "Custom",
  },
  {
    feature: "Content Updates",
    v: "On Request",
    g: "1 Page / Mo",
    e: "Unlimited",
    ent: "Unlimited",
  },
  {
    feature: "Conversion Optimization",
    v: "Not included",
    g: "Monthly Testing",
    e: "Advanced Funnels",
    ent: "Advanced Funnels",
  },
  {
    feature: "Reporting & Strategy",
    v: "Email Monthly",
    g: "Strategy Call",
    e: "Dedicated Channel",
    ent: "Account Manager",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [tiers, setTiers] = useState<any[]>([]);
  const [osSection, setOsSection] = useState<OSSectionData | null>(null);
  const [faqItems, setFaqItems] = useState(FAQ_ITEMS);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const [tiersData, osData, faqsData] = await Promise.all([
          getPricingTiers(),
          getOsSection(),
          getFaqItems("pricing"),
        ]);

        if (tiersData && tiersData.length > 0) setTiers(tiersData);
        if (osData) setOsSection(osData);
        if (faqsData && faqsData.length > 0) {
          setFaqItems(
            faqsData.map((item: any) => ({
              title: item.question,
              content: item.answer,
            })),
          );
        }
      } catch (error) {
        console.error("Error fetching pricing page data:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  const fmt = (n: number) => n?.toLocaleString() || "0";

  // If no tiers loaded yet, show nothing or skeleton (optional)
  // For now, if tiers is empty, we don't render the cards to avoid layout shift
  
  const getPrice = (tier: any) => isAnnual ? tier.annualPrice : tier.monthlyPrice;
  const getAnnualSaving = (tier: any) =>
    ((tier.monthlyPrice - tier.annualPrice) * 12).toLocaleString();
  const getAnnualTotal = (tier: any) =>
    (tier.annualPrice * 12).toLocaleString();

  const activeTiers = tiers.length > 0 ? tiers : (isLoading ? [] : FALLBACK_TIERS);

  return (
    <>
      <SEO
        title="Pricing"
        description="Contractor growth plans from $750/mo — website build included. No long-term contracts. Cancel anytime. Annual pricing available."
        canonicalPath="/pricing"
      />

      <div className="font-body tracking-tight antialiased [letter-spacing:-0.01em] [&_h1]:normal-case [&_h2]:normal-case [&_h3]:normal-case selection:bg-md3-primary-container selection:text-md3-on-primary-container">
        
        <HeaderSection 
          badge="Pricing & Offers"
          title={
            <>
              Everything We Build. <br />
              <span className="font-bold text-md3-primary">
                What Each One Costs.
              </span>
            </>
          }
          description="No packages. No bundles. Just five ways we work with contractors—from a $297 diagnostic to full-scale growth support."
          imageSrc="/images/pricing-hero.png"
          imageAlt="Industrial Growth Metrics"
        />

        <div className="pb-32 pt-24" style={industrialMeshStyle}>

        {/* ── Build & Setup Tiers ──────────────────────────────────────────── */}
        <section id="audit-offer" className="mx-auto mb-24 max-w-[1440px] px-4 sm:px-8 lg:px-12 2xl:px-16 3xl:max-w-screen-2xl 4xl:max-w-[1728px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white border border-zinc-100 shadow-xl overflow-hidden">
            <div className="p-12">
              <span className="mb-4 inline-block bg-md3-primary/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-md3-primary border border-md3-primary/20 rounded-full">
                Entry Offer
              </span>
              <h2 className="font-headline text-4xl font-bold tracking-tight text-[#1a1a1a]">
                HVAC Lead System Audit
              </h2>
              <p className="mt-6 text-lg font-light text-zinc-600 leading-relaxed">
                Before you spend another dollar on ads or SEO, find out exactly where your system is broken. We manually audit your site, your local search rankings, and your conversion path.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  "Detailed Video Breakdown of your site and local SEO",
                  "Direct Competitor Comparison (who is winning and why)",
                  "Technical 'Lead Leak' Report showing lost opportunities",
                  "Prioritized Action Plan for your next 90 days",
                  "No credit-back gimmick — just a clear diagnosis and next step"
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined mt-0.5 text-base text-teal-600">check</span>
                    <span className="text-sm font-light text-zinc-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-zinc-50 p-12 flex flex-col justify-center items-center text-center lg:border-l border-zinc-100">
              <div className="mb-8">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">One-Time Investment</span>
                <div className="mt-2 flex items-baseline justify-center gap-1">
                  <span className="text-6xl font-bold tracking-tighter text-[#1a1a1a]">${isLoading && !tiers.length ? '...' : activeTiers[0]?.monthlyPrice ? activeTiers[0].monthlyPrice : '297'}</span>
                </div>
              </div>
              <div className="w-full space-y-4">
                <Link
                  to="/audit"
                  className="block w-full bg-[#1a1a1a] py-5 text-center text-[11px] font-bold uppercase tracking-[0.25em] text-white transition-all hover:bg-md3-primary"
                >
                  Start The Audit
                </Link>
                <Link
                  to="/checklist"
                  className="block text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400 hover:text-md3-primary transition-colors"
                >
                  Not sure yet? Get the checklist first →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Core Delivery Offers ────────────────────────────────────────── */}
        <section id="core-offers" className="mx-auto mb-32 max-w-[1440px] px-4 sm:px-8 lg:px-12 2xl:px-16 3xl:max-w-screen-2xl 4xl:max-w-[1728px]">
          <div className="mb-12">
            <span className="mb-4 inline-block bg-zinc-100 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">
              Core Delivery
            </span>
            <h2 className="font-headline text-4xl font-bold tracking-tight text-[#1a1a1a]">
              High-Performance Infrastructure.
            </h2>
          </div>

          <div
            className="grid grid-cols-1 gap-px overflow-hidden bg-[#e5e7eb] lg:grid-cols-3"
            style={{ borderWidth: "0.5px", borderColor: INDUSTRIAL.outline }}
          >
            {/* HVAC Lead Generation System */}
            <div className="flex flex-col justify-between bg-white p-12">
              <div>
                <h3 className="mb-8 text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
                  HVAC Lead Generation System
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-light tracking-tighter text-[#1a1a1a]">
                    $4,200 – $12k+
                  </span>
                </div>
                <p className="mb-8 text-sm font-light text-zinc-500 leading-relaxed">
                  The ultimate sales engine for your business. An elite, trade-specific system designed to rank locally and convert strangers into booked appointments on autopilot.
                </p>
                <ul className="mb-12 space-y-4 text-sm text-[#1a1a1a]">
                  {[
                    "Custom Design & Content Strategy",
                    "Trade-Specific Lead Capture Funnels",
                    "Technical Local SEO Foundations",
                    "Performance-Obsessed Mobile Build",
                    "Full CMS for Team/Project Management",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="material-symbols-outlined mt-0.5 text-base text-md3-primary">check</span>
                      <span className="font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                to="/services/hvac-lead-generation-system"
                className="block w-full border py-4 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-[#1a1a1a] transition-all hover:bg-[#1a1a1a] hover:text-white"
                style={{ borderWidth: "0.5px", borderColor: INDUSTRIAL.outline }}
              >
                Learn More
              </Link>
            </div>

            {/* Landing Pages */}
            <div className="relative flex flex-col justify-between bg-zinc-50 p-12 lg:z-10 lg:scale-105 lg:shadow-xl">
              <div>
                <h3 className="mb-8 text-xs font-bold uppercase tracking-[0.2em] text-md3-primary">
                  Landing Pages
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold tracking-tighter text-[#1a1a1a]">
                    $1,500 – $2,500
                  </span>
                </div>
                <p className="mb-8 text-sm font-light text-zinc-500 leading-relaxed">
                  High-converting 'Service + City' pages designed specifically for your paid ad campaigns (Google/Facebook).
                </p>
                <ul className="mb-12 space-y-4 text-sm text-[#1a1a1a]">
                  {[
                    "Ad-to-Checkout Optimized Flow",
                    "A/B Testing of Messaging & CTAs",
                    "Lightning Fast Page Speeds",
                    "Custom Dynamic Tracking Setup",
                    "Trade-Focused Copywriting",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="material-symbols-outlined mt-0.5 text-base text-md3-primary">check</span>
                      <span className="font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                to="/services/landing-pages"
                className="block w-full bg-md3-primary py-4 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-[#1a1a1a]"
              >
                Get Started
              </Link>
            </div>

            {/* Local SEO */}
            <div className="flex flex-col justify-between bg-white p-12">
              <div>
                <h3 className="mb-8 text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
                  Local SEO Setup
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-light tracking-tighter text-[#1a1a1a]">
                    $2,500+
                  </span>
                </div>
                <p className="mb-8 text-sm font-light text-zinc-500 leading-relaxed">
                  We claim, optimize, and signal your Google Business Profile to dominate the "Map Pack" in your target city.
                </p>
                <ul className="mb-12 space-y-4 text-sm text-[#1a1a1a]">
                  {[
                    "Full GBP Audit & Optimization",
                    "Local Keyword Research & Strategy",
                    "Citation Building & Cleanup",
                    "Review Automation System Setup",
                    "Technical Schema Markup",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="material-symbols-outlined mt-0.5 text-base text-md3-primary">check</span>
                      <span className="font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                to="/services/local-seo"
                className="block w-full border py-4 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-[#1a1a1a] transition-all hover:bg-[#1a1a1a] hover:text-white"
                style={{ borderWidth: "0.5px", borderColor: INDUSTRIAL.outline }}
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* ── Ongoing Growth Support ────────────────────────────────────────── */}
        <section id="growth-tiers" className="mx-auto mb-16 max-w-[1440px] px-4 sm:px-8 lg:px-12 2xl:px-16 3xl:max-w-screen-2xl 4xl:max-w-[1728px]">
          <div className="mb-10">
            <span className="mb-4 inline-block bg-teal-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-teal-700">
              Continuity — Monthly Retainer
            </span>
            <h2 className="font-headline text-4xl font-bold tracking-tight text-[#1a1a1a]">
              HVAC Growth Retainers.
            </h2>
            <p className="mt-4 max-w-2xl text-lg font-light text-zinc-600">
              One extra HVAC install or service call per month more than covers the 
              investment. We focus on rapid, measurable impact in your local service area using the BuiltExpert OS.
            </p>
            <p className="mt-2 max-w-2xl text-sm font-light text-zinc-500">
              Works with your existing system or any BuiltExpert build. Month-to-month on all plans.
            </p>
          </div>

          <div className="mb-16">
            <ROICalculator />
          </div>

          {/* Annual / Monthly toggle */}
          <div className="mb-10 flex items-center gap-4">
            <span
              className="text-sm font-medium transition-colors"
              style={{ color: !isAnnual ? INDUSTRIAL.charcoal : INDUSTRIAL.muted }}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual((v) => !v)}
              role="switch"
              aria-checked={isAnnual}
              aria-label="Toggle annual pricing"
              className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer items-center rounded-full transition-colors focus:outline-none"
              style={{ background: isAnnual ? "#0d9488" : INDUSTRIAL.outline }}
            >
              <span
                className="inline-block h-4 w-4 rounded-full bg-white shadow transition-transform"
                style={{
                  transform: isAnnual ? "translateX(1.375rem)" : "translateX(0.125rem)",
                }}
              />
            </button>
            <span
              className="flex items-center gap-2 text-sm font-medium transition-colors"
              style={{ color: isAnnual ? INDUSTRIAL.charcoal : INDUSTRIAL.muted }}
            >
              Annual
              <span className="rounded bg-teal-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.1em] text-teal-700">
                Save 10%
              </span>
            </span>
          </div>

          {/* Tier cards */}
          <div
            className="grid grid-cols-1 gap-px overflow-hidden bg-[#e5e7eb] lg:grid-cols-3"
            style={{ borderWidth: "0.5px", borderColor: INDUSTRIAL.outline }}
          >
            {isLoading && tiers.length === 0 ? (
               Array.from({ length: 3 }).map((_, i) => (
                 <div key={`skeleton-${i}`} className="bg-white p-12">
                   <CardSkeleton />
                 </div>
               ))
            ) : (
              activeTiers.map((tier, idx) => {
                const isGrowth = tier.name.toLowerCase() === "growth";
                const isExpansion = tier.name.toLowerCase() === "expansion";
                const currentPrice = isAnnual ? tier.annualPrice : tier.monthlyPrice;
                const slug = tier.name.toLowerCase().replace(/\s+/g, "-");

                return (
                  <div
                    key={tier._id || tier.name}
                    className={`flex flex-col justify-between p-12 ${
                      isGrowth
                        ? "relative bg-zinc-50 lg:z-10 lg:scale-105 lg:shadow-xl"
                        : isExpansion
                        ? "bg-[#1a1a1a] text-white shadow-2xl"
                        : "bg-white"
                    }`}
                  >
                    {isGrowth && (
                      <div className="absolute right-0 top-0 p-8">
                        <span className="bg-md3-primary px-3 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-white">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <div>
                      <h3
                        className={`mb-8 text-xs font-bold uppercase tracking-[0.2em] ${
                          isGrowth || isExpansion ? "text-md3-primary" : "text-zinc-400"
                        }`}
                      >
                        {tier.name}
                      </h3>
                      <div className="mb-2">
                        <span
                          className={`text-4xl tracking-tighter ${
                            isGrowth ? "font-bold text-[#1a1a1a]" : isExpansion ? "font-light text-white" : "font-light text-[#1a1a1a]"
                          }`}
                        >
                          ${fmt(currentPrice)}
                        </span>
                        <span
                          className={`ml-2 text-sm ${
                            isExpansion ? "text-zinc-500" : "text-zinc-400"
                          }`}
                        >
                          / mo
                        </span>
                      </div>

                      {isAnnual ? (
                        <p
                          className={`mb-5 text-[10px] font-bold uppercase tracking-widest ${
                            isExpansion ? "text-teal-400" : "text-teal-600"
                          }`}
                        >
                          ${getAnnualTotal(tier)}/yr · save ${getAnnualSaving(tier)}
                        </p>
                      ) : (
                        <p
                          className={`mb-5 text-[10px] font-light uppercase tracking-widest ${
                            isExpansion ? "text-zinc-600" : "text-zinc-400"
                          }`}
                        >
                          or ${tier.annualPrice}/mo billed annually
                        </p>
                      )}

                      <p
                        className={`mb-6 text-[11px] font-light ${
                          isExpansion ? "text-zinc-400" : "text-zinc-500"
                        }`}
                      >
                        {tier.tagline}
                      </p>

                      <ul className={`mb-12 space-y-3 text-sm ${isExpansion ? "text-zinc-300" : "text-[#1a1a1a]"}`}>
                        {tier.includes?.map((item: string) => (
                          <li key={item} className="flex items-start gap-2">
                            <span
                              className={`material-symbols-outlined mt-0.5 text-sm ${
                                isExpansion ? "text-md3-primary" : "text-teal-600"
                              }`}
                            >
                              check
                            </span>
                            <span className="font-light">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      to={`/contact?growth=${slug}${isAnnual ? "&billing=annual" : ""}`}
                      className={`block w-full py-3 text-center text-[10px] font-bold uppercase tracking-[0.2em] transition-all ${
                        isGrowth
                          ? "bg-[#1a1a1a] text-white hover:bg-md3-primary"
                          : isExpansion
                          ? "bg-md3-primary text-white hover:bg-white hover:text-[#1a1a1a]"
                          : "border text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white"
                      }`}
                      style={!isGrowth && !isExpansion ? { borderWidth: "0.5px", borderColor: INDUSTRIAL.outline } : {}}
                    >
                      Start {tier.name}
                    </Link>
                    <a
                      href="#compare-plans"
                      className={`mt-4 block text-center text-xs font-bold uppercase tracking-[0.2em] md:hidden ${
                        isExpansion ? "text-zinc-400 hover:text-white" : "text-zinc-500 hover:text-md3-primary"
                      }`}
                    >
                      See what's included →
                    </a>
                  </div>
                );
              })
            )}
          </div>

          {/* Enterprise / Regional Dominance */}
          <div style={{ borderWidth: "0.5px", borderTopWidth: 0, borderColor: INDUSTRIAL.outline }}>
            <div className="flex flex-col items-start justify-between gap-6 bg-white p-10 lg:flex-row lg:items-center">
              <div className="flex-1">
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
                    Enterprise / Regional Dominance
                  </span>
                  <span className="rounded bg-zinc-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.1em] text-zinc-500">
                    Custom
                  </span>
                </div>
                <p className="max-w-2xl text-sm font-light leading-relaxed text-zinc-500">
                  For multi-location operators, regional HVAC companies, and franchise networks
                  targeting more than 8 service areas. Custom strategy, dedicated account manager,
                  advanced reporting, and priority delivery. Pricing based on scope.
                </p>
              </div>
              <Link
                to="/contact?growth=enterprise"
                className="inline-block flex-shrink-0 border border-[#1a1a1a] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1a1a1a] transition-all hover:bg-[#1a1a1a] hover:text-white"
              >
                Talk to us →
              </Link>
            </div>
          </div>

          {/* Growth section footer CTA */}
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#1a1a1a] px-8 py-4 text-[11px] font-bold uppercase tracking-[0.3em] text-white transition-all hover:bg-md3-primary"
            >
              Customize Your Plan
            </Link>
            <Link
              to="/checklist"
              className="border-b py-4 text-[11px] font-bold uppercase tracking-[0.3em] text-zinc-500 [border-bottom-width:0.5px] transition-all hover:border-md3-primary hover:text-md3-primary"
              style={{ borderColor: INDUSTRIAL.outline }}
            >
              Free Checklist →
            </Link>
          </div>
        </section>

        {/* ── BuiltExpert OS Callout ───────────────────────────────────────── */}
        <section
          id="os-section"
          className="mx-auto mb-32 max-w-[1440px] px-4 sm:px-8 lg:px-12 2xl:px-16 3xl:max-w-screen-2xl 4xl:max-w-[1728px]"
        >
          <OSSection data={osSection} variant="pricing" />
        </section>

        {/* ── Trust bar ────────────────────────────────────────────────────── */}
        <section className="mx-auto mb-32 max-w-[1440px] px-4 sm:px-8 lg:px-12 2xl:px-16 3xl:max-w-screen-2xl 4xl:max-w-[1728px]">
          <div
            className="flex flex-wrap items-center justify-center gap-8 bg-white px-8 py-6 text-center"
            style={{ borderWidth: "0.5px", borderColor: INDUSTRIAL.outline }}
          >
            {[
              { stat: "No setup fee", detail: "Website build is included" },
              { stat: "30-day out", detail: "Cancel any time" },
              { stat: "You own it", detail: "Assets transfer if you leave" },
              { stat: "15-min audit", detail: "Paid diagnostic, no obligation" },
            ].map(({ stat, detail }) => (
              <div key={stat} className="px-4">
                <p
                  className="font-headline text-base font-bold tracking-tight"
                  style={{ color: INDUSTRIAL.charcoal }}
                >
                  {stat}
                </p>
                <p
                  className="mt-0.5 text-[11px] font-light"
                  style={{ color: INDUSTRIAL.muted }}
                >
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Comparison table ─────────────────────────────────────────────── */}
        <section id="compare-plans" className="mx-auto mb-32 max-w-[1440px] px-4 sm:px-8 lg:px-12 2xl:px-16 3xl:max-w-screen-2xl 4xl:max-w-[1728px]">
          <div className="mb-16">
            <h2
              className="mb-4 font-headline text-3xl font-light tracking-tight"
              style={{ color: INDUSTRIAL.charcoal }}
            >
              Comparing Growth Retainers
            </h2>
            <div className="h-px w-24 bg-md3-primary" />
          </div>

          <div className="mb-8 md:hidden">
            <Accordion
              items={[
                {
                  title: "Coverage & pricing",
                  content: (
                    <div className="space-y-4">
                      {COMPARISON_ROWS.slice(0, 2).map((row) => (
                        <div key={row.feature} className="rounded-xl border border-zinc-100 bg-white p-4">
                          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">{row.feature}</p>
                          <div className="grid grid-cols-2 gap-3 text-sm">
                            <div><span className="font-semibold">Support:</span> {row.v}</div>
                            <div><span className="font-semibold">Growth:</span> {row.g}</div>
                            <div><span className="font-semibold">Expansion:</span> {row.e}</div>
                            <div><span className="font-semibold">Enterprise:</span> {row.ent}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ),
                },
                {
                  title: "SEO & local visibility",
                  content: (
                    <div className="space-y-4">
                      {COMPARISON_ROWS.slice(2, 5).map((row) => (
                        <div key={row.feature} className="rounded-xl border border-zinc-100 bg-white p-4">
                          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">{row.feature}</p>
                          <div className="grid grid-cols-2 gap-3 text-sm">
                            <div><span className="font-semibold">Support:</span> {row.v}</div>
                            <div><span className="font-semibold">Growth:</span> {row.g}</div>
                            <div><span className="font-semibold">Expansion:</span> {row.e}</div>
                            <div><span className="font-semibold">Enterprise:</span> {row.ent}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ),
                },
                {
                  title: "Optimization & strategy",
                  content: (
                    <div className="space-y-4">
                      {COMPARISON_ROWS.slice(5).map((row) => (
                        <div key={row.feature} className="rounded-xl border border-zinc-100 bg-white p-4">
                          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">{row.feature}</p>
                          <div className="grid grid-cols-2 gap-3 text-sm">
                            <div><span className="font-semibold">Support:</span> {row.v}</div>
                            <div><span className="font-semibold">Growth:</span> {row.g}</div>
                            <div><span className="font-semibold">Expansion:</span> {row.e}</div>
                            <div><span className="font-semibold">Enterprise:</span> {row.ent}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ),
                },
              ]}
            />
          </div>

          <div className="hidden overflow-x-auto md:block">
            <table className="w-full border-collapse">
              <thead>
                <tr
                  className="text-left text-[10px] font-bold uppercase tracking-[0.2em]"
                  style={{
                    color: INDUSTRIAL.muted,
                    borderBottomWidth: "0.5px",
                    borderColor: INDUSTRIAL.outline,
                  }}
                >
                  <th className="w-[30%] py-8 font-semibold">Service Coverage</th>
                  {activeTiers.map((tier, idx) => (
                    <th
                      key={tier.name}
                      className={`w-[17%] py-8 text-center ${
                         tier.name.toLowerCase() === "expansion" ? "bg-[#1a1a1a] text-white" : ""
                      }`}
                    >
                      {tier.name}
                    </th>
                  ))}
                  <th className="w-[19%] py-8 text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  {
                    feature: "Monthly price",
                    v: `$${fmt(activeTiers[0]?.monthlyPrice || 0)}`,
                    g: `$${fmt(activeTiers[1]?.monthlyPrice || 0)}`,
                    e: `$${fmt(activeTiers[2]?.monthlyPrice || 0)}`,
                    ent: "Custom",
                    eBold: true,
                    highlight: true,
                  },
                  ...COMPARISON_ROWS.slice(1).map((row) => ({
                    ...row,
                    v: row.v === "Included" ? "check" : row.v === "Not included" ? "—" : row.v,
                    g: row.g === "Included" ? "check" : row.g === "Not included" ? "—" : row.g,
                    e: row.e === "Included" ? "check" : row.e === "Not included" ? "—" : row.e,
                    ent: row.ent === "Included" ? "check" : row.ent === "Not included" ? "—" : row.ent,
                    eBold: true,
                    highlight: false,
                  })),
                ].map((row: any) => (
                  <tr
                    key={row.feature}
                    style={{
                      borderBottomWidth: "0.5px",
                      borderColor: INDUSTRIAL.outline,
                      background: row.highlight ? "#f9fafb" : undefined,
                    }}
                  >
                    <td
                      className="py-5 font-medium"
                      style={{ color: row.highlight ? INDUSTRIAL.muted : INDUSTRIAL.charcoal }}
                    >
                      {row.feature}
                    </td>
                    {/* Visibility */}
                    <td className="py-5 text-center font-light" style={{ color: INDUSTRIAL.muted }}>
                      {row.v === "check" ? (
                        <span className="material-symbols-outlined text-lg text-teal-600">check</span>
                      ) : row.v === "—" ? (
                        <span>—</span>
                      ) : (
                        row.v
                      )}
                    </td>
                    {/* Growth */}
                    <td className="py-5 text-center" style={{ color: INDUSTRIAL.charcoal }}>
                      {row.g === "check" ? (
                        <span className="material-symbols-outlined text-lg text-teal-600">check</span>
                      ) : row.g === "—" ? (
                        <span style={{ color: INDUSTRIAL.muted }}>—</span>
                      ) : (
                        <span className="font-semibold">{row.g}</span>
                      )}
                    </td>
                    {/* Expansion */}
                    <td className="bg-[#1a1a1a]/5 py-5 text-center" style={{ color: INDUSTRIAL.charcoal }}>
                      {row.e === "check" ? (
                        <span className="material-symbols-outlined text-lg text-md3-primary">check</span>
                      ) : (
                        <span className={row.eBold ? "font-bold text-md3-primary" : "font-semibold"}>
                          {row.e}
                        </span>
                      )}
                    </td>
                    {/* Enterprise */}
                    <td className="py-5 text-center" style={{ color: INDUSTRIAL.muted }}>
                      {row.ent === "check" ? (
                        <span className="material-symbols-outlined text-lg text-teal-600">check</span>
                      ) : row.ent === "—" ? (
                        <span>—</span>
                      ) : (
                        <span className="font-medium">{row.ent}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

          {/* OS soft callout below table */}
          <p className="mt-8 text-sm text-zinc-500">
            Need the full machine?{" "}
            <Link
              to="/services"
              className="font-semibold text-md3-primary transition-colors hover:text-teal-600"
            >
              Learn about BuiltExpert OS →
            </Link>
          </p>

        {/* ── FAQ ──────────────────────────────────────────────────────────── */}
        <section className="mx-auto mb-32 max-w-4xl px-8">
          <div className="mb-16">
            <h2
              className="mb-4 font-headline text-3xl font-light tracking-tight"
              style={{ color: INDUSTRIAL.charcoal }}
            >
              Pricing & Process FAQ
            </h2>
            <div className="h-px w-24 bg-md3-primary" />
          </div>
          <Accordion items={faqItems} />
        </section>

        <CTASection />

        </div>
      </div>
    </>
  );
}
