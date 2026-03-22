import { useState } from "react";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Accordion } from "@/components/ui/Accordion";
import {
  INDUSTRIAL,
  industrialMeshStyle,
  industrialTextGradientStyle,
} from "@/lib/industrialStyle";

// ─── Prices ───────────────────────────────────────────────────────────────────

const MONTHLY = { visibility: 750, growth: 1497, expansion: 2497 };
const ANNUAL = { visibility: 675, growth: 1347, expansion: 2247 };

// ─── FAQ ──────────────────────────────────────────────────────────────────────

const FAQ_ITEMS = [
  {
    title: "Do I have to pay for a growth retainer after my site is built?",
    content:
      "No. The Chromapages build is a one-time investment. Once your site is live, you own it 100%. Many contractors choose to add a monthly retainer to keep climbing the rankings and increasing lead volume, but it is never required.",
  },
  {
    title: "What is the difference between Chromapages and BuiltExpert?",
    content:
      "Chromapages is our build and design division — we construct the foundation (your website and local authority assets). BuiltExpert is our growth division — we provide the ongoing fuel (SEO, content, and conversion optimisation) to make that foundation generate leads month after month.",
  },
  {
    title: "Is there a long-term contract for the monthly plans?",
    content:
      "Monthly retainers are month-to-month with 30 days' notice to cancel. The Launch & Grow Bundle runs for 12 months to cover the absorbed website build cost. We earn your business every month through results, not legal lock-ins.",
  },
  {
    title: "What is the Launch & Grow Bundle?",
    content:
      "It's our no-upfront-fee option. Instead of paying $7,500 for a website build plus $1,497/mo for growth support, you pay $1,997/mo for 12 months — the build cost is absorbed into the monthly fee. Total cost is $23,964, saving around $1,500 vs paying separately. After 12 months it rolls to the standard Growth retainer at $1,497/mo.",
  },
  {
    title: "How does annual pricing work?",
    content:
      "Committing to 12 months on any growth retainer earns you 10% off. Growth drops from $1,497/mo to $1,347/mo — saving $1,800 over the year. Expansion drops from $2,497/mo to $2,247/mo — saving $3,000. You can pay monthly or upfront annually; just let us know when we talk.",
  },
  {
    title: "What does 'service areas targeted' mean on the Expansion plan?",
    content:
      "Each service area is a city, suburb, or geographic zone we actively optimise for — dedicated landing pages, local keyword campaigns, Google Maps targeting. Growth covers up to 3 areas. Expansion covers up to 8, with a new area launched each month until you hit your target coverage.",
  },
  {
    title: "What is the Enterprise / Regional Dominance tier?",
    content:
      "For multi-location operators, regional HVAC companies, or franchise networks targeting more than 8 service areas. We build a custom strategy covering your full geographic footprint — dedicated account management, advanced reporting, and priority delivery. Pricing is based on scope.",
  },
  {
    title: "What if I already have a website?",
    content:
      "You don't need a Chromapages build to start a growth retainer. Many clients pair our monthly SEO and CRO work with their existing site. If your current site is holding performance back, we'll tell you honestly — and you decide whether to rebuild.",
  },
  {
    title: "Do I own the website if I cancel?",
    content:
      "Yes. The website we build is yours. All code, content, and domain assets transfer to you if you leave. We don't hold your digital infrastructure hostage.",
  },
  {
    title: "How is this different from a regular marketing agency?",
    content:
      "Most agencies sell you traffic. We build systems that convert traffic into booked jobs — website, SEO, lead capture, and conversion optimisation working together. We measure success in calls and jobs, not impressions and clicks.",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  const prices = isAnnual ? ANNUAL : MONTHLY;
  const fmt = (n: number) => n.toLocaleString();

  const annualSaving = (tier: keyof typeof MONTHLY) =>
    ((MONTHLY[tier] - ANNUAL[tier]) * 12).toLocaleString();
  const annualTotal = (tier: keyof typeof MONTHLY) =>
    (ANNUAL[tier] * 12).toLocaleString();

  return (
    <>
      <SEO
        title="Pricing"
        description="Contractor growth plans from $1,497/mo — website build included. No long-term contracts. Cancel anytime. Annual pricing available."
        canonical="/pricing"
      />

      <div
        className="pb-32 pt-24 font-body tracking-tight antialiased [letter-spacing:-0.01em]"
        style={industrialMeshStyle}
      >

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section className="mx-auto mb-24 max-w-7xl px-8">
          <div className="max-w-4xl">
            <span className="mb-6 block text-[10px] font-bold uppercase tracking-[0.3em] text-md3-primary">
              Contractor Growth Tiers
            </span>
            <h1 className="mb-10 font-headline text-6xl font-light leading-[1.08] tracking-tighter md:text-8xl md:leading-[1.06]">
              <span
                className="block overflow-visible pb-[0.12em]"
                style={industrialTextGradientStyle}
              >
                More calls. More jobs.
              </span>
              <span className="block font-bold text-md3-primary">
                Pick your tier.
              </span>
            </h1>
            <p
              className="mb-10 max-w-xl text-lg font-light leading-relaxed"
              style={{ color: INDUSTRIAL.muted }}
            >
              Every tier includes a new high-converting website and Google Maps
              optimisation — no separate setup fee. We measure success in booked
              jobs, not impressions.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <a
                href="#build-tiers"
                className="inline-flex items-center gap-2 bg-[#1a1a1a] px-8 py-4 text-[11px] font-bold uppercase tracking-[0.3em] text-white transition-all hover:bg-md3-primary"
              >
                See the tiers
                <ArrowDown className="size-4 shrink-0" aria-hidden />
              </a>
              <Link
                to="/contact"
                className="border-b py-4 text-[11px] font-bold uppercase tracking-[0.3em] text-[#1a1a1a] [border-bottom-width:0.5px] transition-all hover:border-md3-primary hover:text-md3-primary"
                style={{ borderColor: INDUSTRIAL.outline }}
              >
                Book a free 15-min audit
              </Link>
            </div>
          </div>
        </section>

        {/* ── Build & Setup Tiers ──────────────────────────────────────────── */}
        <section id="build-tiers" className="mx-auto mb-16 max-w-7xl px-8">
          <div className="mb-12">
            <span className="mb-4 inline-block bg-teal-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-teal-700">
              Phase 01 — One-Time
            </span>
            <h2 className="font-headline text-4xl font-bold tracking-tight text-[#1a1a1a]">
              Need a new site first? Start here.
            </h2>
            <p className="mt-4 max-w-2xl text-lg font-light text-zinc-600">
              A one-time investment to build your contractor authority online. No
              ongoing obligation — you own everything we build, and you can add
              growth support later or never.
            </p>
          </div>

          <div
            className="grid grid-cols-1 gap-px overflow-hidden bg-[#e5e7eb] lg:grid-cols-3"
            style={{ borderWidth: "0.5px", borderColor: INDUSTRIAL.outline }}
          >
            {/* Starter */}
            <div className="flex flex-col justify-between bg-white p-12">
              <div>
                <h3 className="mb-8 text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
                  Starter Plan
                </h3>
                <div className="mb-6">
                  <span className="text-5xl font-light tracking-tighter text-[#1a1a1a]">
                    $4,500
                  </span>
                  <p className="mt-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                    One-time
                  </p>
                </div>
                <ul className="mb-12 space-y-4 text-sm text-[#1a1a1a]">
                  {[
                    "Custom 5-Page Marketing Website",
                    "Lead Capture System & Form Setup",
                    "Mobile & Performance Optimization",
                    "Core Local SEO Foundations",
                    "Google Business Profile Setup",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="material-symbols-outlined mt-0.5 text-base text-md3-primary">
                        check
                      </span>
                      <span className="font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                to="/contact?plan=starter"
                className="block w-full border py-4 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-[#1a1a1a] transition-all hover:bg-[#1a1a1a] hover:text-white"
                style={{ borderWidth: "0.5px", borderColor: INDUSTRIAL.outline }}
              >
                Start Starter Plan
              </Link>
            </div>

            {/* Growth Build */}
            <div className="relative flex flex-col justify-between bg-zinc-50 p-12 lg:z-10 lg:scale-105 lg:shadow-xl">
              <div className="absolute right-0 top-0 p-8">
                <span className="bg-md3-primary px-3 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-white">
                  Recommended
                </span>
              </div>
              <div>
                <h3 className="mb-8 text-xs font-bold uppercase tracking-[0.2em] text-md3-primary">
                  Growth Plan
                </h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold tracking-tighter text-[#1a1a1a]">
                    $7,500
                  </span>
                  <p className="mt-2 text-[10px] font-bold uppercase tracking-widest text-md3-primary">
                    One-time
                  </p>
                </div>
                <ul className="mb-12 space-y-4 text-sm text-[#1a1a1a]">
                  {[
                    "Custom 10-Page Marketing Website",
                    "Advanced Conversion Setup (CRO)",
                    "3× Targeted Service Pages",
                    "3× Geographic Landing Pages",
                    "Full Lead Tracking & Analytics",
                    "GBP Strategy & Optimization",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="material-symbols-outlined mt-0.5 text-base text-md3-primary">
                        check
                      </span>
                      <span className="font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                to="/contact?plan=growth-build"
                className="block w-full bg-md3-primary py-4 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-[#1a1a1a]"
              >
                Start Growth Plan
              </Link>
            </div>

            {/* Authority */}
            <div className="flex flex-col justify-between bg-white p-12">
              <div>
                <h3 className="mb-8 text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
                  Authority Plan
                </h3>
                <div className="mb-6">
                  <span className="text-5xl font-light tracking-tighter text-[#1a1a1a]">
                    $12,000
                  </span>
                  <p className="mt-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                    One-time
                  </p>
                </div>
                <ul className="mb-12 space-y-4 text-sm text-[#1a1a1a]">
                  {[
                    "Full Content Architecture & Sitemap",
                    "Up to 20 Custom Marketing Pages",
                    "Advanced Lead Routing & Automation",
                    "Multi-City SEO Strategy",
                    "Financing & Rebate Page Systems",
                    "Dedicated Project Manager",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="material-symbols-outlined mt-0.5 text-base text-md3-primary">
                        check
                      </span>
                      <span className="font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                to="/contact?plan=authority"
                className="block w-full border py-4 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-[#1a1a1a] transition-all hover:bg-[#1a1a1a] hover:text-white"
                style={{ borderWidth: "0.5px", borderColor: INDUSTRIAL.outline }}
              >
                Start Authority Plan
              </Link>
            </div>
          </div>

          {/* Build section independent CTA */}
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link
              to="/contact?ref=build"
              className="inline-flex items-center gap-2 border border-[#1a1a1a] px-8 py-4 text-[11px] font-bold uppercase tracking-[0.3em] text-[#1a1a1a] transition-all hover:bg-[#1a1a1a] hover:text-white"
            >
              Talk to us about a build
            </Link>
            <a
              href="#growth-tiers"
              className="border-b py-4 text-[11px] font-bold uppercase tracking-[0.3em] text-zinc-500 [border-bottom-width:0.5px] transition-all hover:border-md3-primary hover:text-md3-primary"
              style={{ borderColor: INDUSTRIAL.outline }}
            >
              Already have a site? Jump to monthly plans ↓
            </a>
          </div>
        </section>

        {/* ── Launch & Grow Bundle ─────────────────────────────────────────── */}
        <section className="mx-auto mb-32 max-w-7xl px-8">
          <div
            className="overflow-hidden"
            style={{
              background: "#0a1f1f",
              borderWidth: "0.5px",
              borderColor: "#163030",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left: copy */}
              <div className="p-12 lg:p-16">
                <span
                  className="mb-4 inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-teal-400"
                  style={{ background: "rgba(13,148,136,0.15)" }}
                >
                  No upfront fee option
                </span>
                <h2 className="mb-4 font-headline text-3xl font-bold tracking-tight text-white lg:text-4xl">
                  Launch & Grow Bundle
                </h2>
                <p className="mb-8 max-w-md text-base font-light leading-relaxed text-zinc-400">
                  Can't write a $7,500 cheque today? We absorb the website build
                  into your monthly fee. Full Growth retainer from day one — no
                  upfront payment, 12-month term.
                </p>
                <ul className="mb-10 space-y-3 text-sm">
                  {[
                    "Website build included — no lump sum required",
                    "Full Growth retainer active from day one",
                    "12-month commitment · rolls to standard Growth after",
                    "Save ~$1,500 vs paying build + retainer separately",
                    "Full site ownership transfers on completion",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-zinc-300">
                      <span className="material-symbols-outlined mt-0.5 text-sm text-teal-400">
                        check
                      </span>
                      <span className="font-light">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact?plan=bundle"
                  className="inline-block bg-teal-600 px-8 py-4 text-[11px] font-bold uppercase tracking-[0.3em] text-white transition-all hover:bg-teal-500"
                >
                  Tell me more →
                </Link>
              </div>

              {/* Right: price breakdown */}
              <div
                className="flex flex-col justify-center p-12 lg:border-l lg:p-16"
                style={{ borderLeftWidth: "0.5px", borderColor: "#163030" }}
              >
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-teal-400">
                  Bundle price
                </p>
                <div className="mb-1 flex items-end gap-2">
                  <span className="font-headline text-6xl font-light tracking-tighter text-white">
                    $1,997
                  </span>
                  <span className="mb-2 text-lg text-zinc-500">/mo</span>
                </div>
                <p className="mb-8 text-sm font-light text-zinc-500">
                  for 12 months · $23,964 total
                </p>
                <div
                  className="space-y-3 border-t pt-6 text-sm"
                  style={{ borderColor: "#163030" }}
                >
                  <div className="flex justify-between text-zinc-500">
                    <span>Growth Build (à la carte)</span>
                    <span>$7,500</span>
                  </div>
                  <div className="flex justify-between text-zinc-500">
                    <span>Growth retainer × 12 months</span>
                    <span>$17,964</span>
                  </div>
                  <div
                    className="flex justify-between border-t pt-3"
                    style={{ borderColor: "#163030" }}
                  >
                    <span className="font-semibold text-zinc-300">À la carte total</span>
                    <span className="font-semibold text-zinc-300">$25,464</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold text-teal-400">Bundle saving</span>
                    <span className="font-bold text-teal-400">~$1,500</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Growth Retainer Tiers ────────────────────────────────────────── */}
        <section id="growth-tiers" className="mx-auto mb-16 max-w-7xl px-8">
          <div className="mb-10">
            <span className="mb-4 inline-block bg-teal-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-teal-700">
              Phase 02 — Monthly
            </span>
            <h2 className="font-headline text-4xl font-bold tracking-tight text-[#1a1a1a]">
              Ongoing growth support.
            </h2>
            {/* ROI framing */}
            <p className="mt-4 max-w-2xl text-lg font-light text-zinc-600">
              One extra HVAC install or electrical job per month covers the
              Growth retainer.{" "}
              <span className="font-medium text-[#1a1a1a]">
                We typically generate 8–25 additional leads in the first 90 days.
              </span>
            </p>
            <p className="mt-2 max-w-2xl text-sm font-light text-zinc-500">
              Works with your existing site or any Chromapages build. Month-to-month
              on all plans.
            </p>
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
            {/* Visibility */}
            <div className="flex flex-col justify-between bg-white p-12">
              <div>
                <h3 className="mb-8 text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
                  Visibility
                </h3>
                <div className="mb-2">
                  <span className="text-4xl font-light tracking-tighter text-[#1a1a1a]">
                    ${fmt(prices.visibility)}
                  </span>
                  <span className="ml-2 text-sm text-zinc-400">/ mo</span>
                </div>
                {isAnnual ? (
                  <p className="mb-5 text-[10px] font-bold uppercase tracking-widest text-teal-600">
                    ${annualTotal("visibility")}/yr · save ${annualSaving("visibility")}
                  </p>
                ) : (
                  <p className="mb-5 text-[10px] font-light uppercase tracking-widest text-zinc-400">
                    or ${ANNUAL.visibility}/mo billed annually
                  </p>
                )}
                <p className="mb-6 text-[11px] font-light text-zinc-500">
                  1 service area targeted
                </p>
                <ul className="mb-12 space-y-3 text-sm text-[#1a1a1a]">
                  {[
                    "Website Hosting & Security",
                    "Technical Maintenance",
                    "GBP Monthly Optimization",
                    "Quarterly SEO Health Check",
                    "Performance Email Reports",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="material-symbols-outlined mt-0.5 text-sm text-teal-600">
                        check
                      </span>
                      <span className="font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                to={`/contact?growth=visibility${isAnnual ? "&billing=annual" : ""}`}
                className="block w-full border py-3 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-[#1a1a1a] transition-all hover:bg-[#1a1a1a] hover:text-white"
                style={{ borderWidth: "0.5px", borderColor: INDUSTRIAL.outline }}
              >
                Start Visibility
              </Link>
            </div>

            {/* Growth Retainer */}
            <div className="relative flex flex-col justify-between bg-zinc-50 p-12 lg:z-10 lg:scale-105 lg:shadow-xl">
              <div className="absolute right-0 top-0 p-8">
                <span className="bg-md3-primary px-3 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-white">
                  Most Popular
                </span>
              </div>
              <div>
                <h3 className="mb-8 text-xs font-bold uppercase tracking-[0.2em] text-md3-primary">
                  Growth
                </h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold tracking-tighter text-[#1a1a1a]">
                    ${fmt(prices.growth)}
                  </span>
                  <span className="ml-2 text-sm text-zinc-400">/ mo</span>
                </div>
                {isAnnual ? (
                  <p className="mb-5 text-[10px] font-bold uppercase tracking-widest text-teal-600">
                    ${annualTotal("growth")}/yr · save ${annualSaving("growth")}
                  </p>
                ) : (
                  <p className="mb-5 text-[10px] font-light uppercase tracking-widest text-zinc-400">
                    or ${ANNUAL.growth}/mo billed annually
                  </p>
                )}
                <p className="mb-6 text-[11px] font-light text-zinc-500">
                  Up to 3 service areas targeted
                </p>
                <ul className="mb-12 space-y-3 text-sm text-[#1a1a1a]">
                  {[
                    "Everything in Visibility",
                    "Monthly Content Updates (1 page)",
                    "Ongoing Local SEO Campaign",
                    "Conversion Rate Optimization",
                    "Monthly Growth Strategy Call",
                    "Lead Source Tracking & Analytics",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="material-symbols-outlined mt-0.5 text-sm text-teal-600">
                        check
                      </span>
                      <span className="font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                to={`/contact?growth=growth${isAnnual ? "&billing=annual" : ""}`}
                className="block w-full bg-[#1a1a1a] py-3 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-md3-primary"
              >
                Start Growth Retainer
              </Link>
            </div>

            {/* Expansion */}
            <div className="flex flex-col justify-between bg-[#1a1a1a] p-12 text-white shadow-2xl">
              <div>
                <h3 className="mb-8 text-xs font-bold uppercase tracking-[0.2em] text-md3-primary">
                  Expansion
                </h3>
                <div className="mb-2">
                  <span className="text-4xl font-light tracking-tighter text-white">
                    ${fmt(prices.expansion)}
                  </span>
                  <span className="ml-2 text-sm text-zinc-500">/ mo</span>
                </div>
                {isAnnual ? (
                  <p className="mb-5 text-[10px] font-bold uppercase tracking-widest text-teal-400">
                    ${annualTotal("expansion")}/yr · save ${annualSaving("expansion")}
                  </p>
                ) : (
                  <p className="mb-5 text-[10px] font-light uppercase tracking-widest text-zinc-600">
                    or ${ANNUAL.expansion}/mo billed annually
                  </p>
                )}
                <p className="mb-6 text-[11px] font-light text-zinc-400">
                  Up to 8 service areas · new area added each month
                </p>
                <ul className="mb-12 space-y-3 text-sm">
                  {[
                    "Everything in Growth",
                    "Up to 8 Service Areas Targeted",
                    "New City / Area Launched Monthly",
                    "Advanced Automation Support",
                    "Lead Qualification Logic",
                    "Direct Support Channel",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="material-symbols-outlined mt-0.5 text-sm text-md3-primary">
                        check
                      </span>
                      <span className="font-light text-zinc-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                to={`/contact?growth=expansion${isAnnual ? "&billing=annual" : ""}`}
                className="block w-full bg-md3-primary py-4 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-white hover:text-[#1a1a1a]"
              >
                Start Expansion
              </Link>
            </div>
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
              Book a free 15-min audit
            </Link>
            <a
              href="#build-tiers"
              className="border-b py-4 text-[11px] font-bold uppercase tracking-[0.3em] text-zinc-500 [border-bottom-width:0.5px] transition-all hover:border-md3-primary hover:text-md3-primary"
              style={{ borderColor: INDUSTRIAL.outline }}
            >
              ↑ View build plans
            </a>
          </div>
        </section>

        {/* ── Trust bar ────────────────────────────────────────────────────── */}
        <section className="mx-auto mb-32 max-w-7xl px-8">
          <div
            className="flex flex-wrap items-center justify-center gap-8 bg-white px-8 py-6 text-center"
            style={{ borderWidth: "0.5px", borderColor: INDUSTRIAL.outline }}
          >
            {[
              { stat: "No setup fee", detail: "Website build is included" },
              { stat: "30-day out", detail: "Cancel any time" },
              { stat: "You own it", detail: "Assets transfer if you leave" },
              { stat: "15-min audit", detail: "Free, no obligation" },
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
        <section className="mx-auto mb-32 max-w-7xl px-8">
          <div className="mb-16">
            <h2
              className="mb-4 font-headline text-3xl font-light tracking-tight"
              style={{ color: INDUSTRIAL.charcoal }}
            >
              Comparing Growth Retainers
            </h2>
            <div className="h-px w-24 bg-md3-primary" />
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
                  <th className="w-[17%] py-8 text-center">Visibility</th>
                  <th className="w-[17%] py-8 text-center">Growth</th>
                  <th className="w-[17%] bg-[#1a1a1a] py-8 text-center text-white">
                    Expansion
                  </th>
                  <th className="w-[19%] py-8 text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  {
                    feature: "Monthly price",
                    v: "$750",
                    g: "$1,497",
                    e: "$2,497",
                    ent: "Custom",
                    eBold: true,
                    highlight: true,
                  },
                  {
                    feature: "Service areas targeted",
                    v: "1 area",
                    g: "Up to 3",
                    e: "Up to 8",
                    ent: "Unlimited",
                    eBold: true,
                  },
                  {
                    feature: "Hosting & Technical Maintenance",
                    v: "check",
                    g: "check",
                    e: "check",
                    ent: "check",
                  },
                  {
                    feature: "Google Business Profile",
                    v: "Monthly",
                    g: "Active Strategy",
                    e: "Multi-Location",
                    ent: "Multi-Location",
                    eBold: true,
                  },
                  {
                    feature: "Local SEO Keyword Campaign",
                    v: "—",
                    g: "50 Keywords",
                    e: "150+ Keywords",
                    ent: "Custom",
                    eBold: true,
                  },
                  {
                    feature: "Content Updates",
                    v: "On Request",
                    g: "1 Page / Mo",
                    e: "Unlimited",
                    ent: "Unlimited",
                    eBold: true,
                  },
                  {
                    feature: "Conversion Optimization",
                    v: "—",
                    g: "Monthly Testing",
                    e: "Advanced Funnels",
                    ent: "Advanced Funnels",
                    eBold: true,
                  },
                  {
                    feature: "Reporting & Strategy",
                    v: "Email Monthly",
                    g: "Strategy Call",
                    e: "Dedicated Channel",
                    ent: "Account Manager",
                    eBold: true,
                  },
                ].map((row) => (
                  <tr
                    key={row.feature}
                    style={{
                      borderBottomWidth: "0.5px",
                      borderColor: INDUSTRIAL.outline,
                      background: row.highlight ? INDUSTRIAL.surface : undefined,
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
          <Accordion items={FAQ_ITEMS} />
        </section>

        {/* ── Final CTA ────────────────────────────────────────────────────── */}
        <section className="mx-auto max-w-7xl px-8">
          <div
            className="relative overflow-hidden bg-white p-16 md:p-24"
            style={{ borderWidth: "0.5px", borderColor: INDUSTRIAL.outline }}
          >
            <div className="relative z-10 max-w-2xl">
              <h2
                className="mb-8 font-headline text-4xl font-light leading-tight tracking-tight md:text-6xl"
                style={{ color: INDUSTRIAL.charcoal }}
              >
                Not sure which tier?{" "}
                <span className="font-bold">Let's talk for 15 minutes.</span>
              </h2>
              <p
                className="mb-12 text-lg font-light leading-relaxed"
                style={{ color: INDUSTRIAL.muted }}
              >
                We'll look at your current presence, your competitors, and your
                goals. No sales pressure — just a clear picture of what it would
                take to grow your call volume.
              </p>
              <div className="flex flex-wrap gap-8">
                <Link
                  to="/contact"
                  className="bg-[#1a1a1a] px-10 py-5 text-[11px] font-bold uppercase tracking-[0.3em] text-white transition-all hover:bg-md3-primary"
                >
                  Book Free 15-Min Audit
                </Link>
                <Link
                  to="/work"
                  className="border-b border-[#e5e7eb] py-5 text-[11px] font-bold uppercase tracking-[0.3em] text-[#1a1a1a] [border-bottom-width:0.5px] transition-all hover:border-md3-primary hover:text-md3-primary"
                >
                  View Case Files
                </Link>
              </div>
            </div>
            <div className="pointer-events-none absolute bottom-0 right-0 top-0 hidden w-1/2 select-none overflow-hidden opacity-[0.03] lg:block">
              <svg
                className="h-full w-full scale-150 text-[#1a1a1a]"
                viewBox="0 0 100 100"
                aria-hidden={true}
              >
                <path
                  d="M0 0 L100 100 M100 0 L0 100 M50 0 V100 M0 50 H100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.1"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.1"
                />
                <rect
                  x="25"
                  y="25"
                  width="50"
                  height="50"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.1"
                />
              </svg>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
