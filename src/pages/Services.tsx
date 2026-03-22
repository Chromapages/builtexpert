import * as React from "react";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import {
  INDUSTRIAL,
  industrialMeshStyle,
  industrialTextGradientStyle,
} from "@/lib/industrialStyle";

// ─── Testimonials ─────────────────────────────────────────────────────────────

const TESTIMONIALS = [
  {
    quote:
      "Before BuiltExpert I was getting 2–3 calls a month from my site. Last month I got 19. That's insane.",
    name: "Marcus T.",
    trade: "HVAC Contractor",
    location: "Phoenix, AZ",
    result: "19 calls/month vs 2–3 before",
    rating: 5,
  },
  {
    quote:
      'We rank #1 in our city now for "electrician near me". Our schedule is full 3 weeks out.',
    name: "Dani R.",
    trade: "Master Electrician",
    location: "Denver, CO",
    result: "#1 local map pack",
    rating: 5,
  },
  {
    quote:
      "They built our site in 5 weeks and we started getting calls from Google within the first month.",
    name: "Ray K.",
    trade: "HVAC & Plumbing",
    location: "Austin, TX",
    result: "Leads within first month",
    rating: 5,
  },
];

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

// ─── Component ────────────────────────────────────────────────────────────────

export function Services() {
  return (
    <>
      <SEO
        title="Contractor Web Design Services"
        description="Outcome-driven systems for contractors: one-time Chromapages build and ongoing BuiltExpert growth retainers. Build starts at $5,000."
        canonical="/services"
      />

      <div
        className="pb-32 pt-24 font-body tracking-tight antialiased [letter-spacing:-0.01em] [&_h1]:normal-case [&_h2]:normal-case [&_h3]:normal-case selection:bg-md3-primary-container selection:text-md3-on-primary-container"
        style={industrialMeshStyle}
      >
        {/* ── Hero ── */}
        <section className="mx-auto mb-24 max-w-7xl px-8">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">

            {/* Left: headline + CTAs + social proof */}
            <div className="lg:col-span-7">
              <span className="mb-6 block text-[10px] font-bold uppercase tracking-[0.3em] text-md3-primary">
                Engineered Growth Systems
              </span>

              {/* QW-4 / HI-4 — Outcome-first headline */}
              <h1 className="mb-6 font-headline text-5xl font-light leading-[0.95] tracking-tighter md:text-7xl">
                <span className="block" style={industrialTextGradientStyle}>
                  Built for contractors.
                </span>
                <span className="mt-1 block">
                  Engineered to{" "}
                  <span className="font-bold text-md3-primary">generate leads.</span>
                </span>
              </h1>

              <p
                className="mb-10 max-w-xl text-xl font-light leading-relaxed"
                style={{ color: INDUSTRIAL.muted }}
              >
                We build websites that turn local searches into booked service
                calls. No templates. No fluff. Just more calls, more estimates,
                more revenue.
              </p>

              {/* QW-1 — Hero CTAs (previously missing entirely) */}
              <div className="mb-6 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-md3-primary px-8 py-4 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-md3-on-primary transition-colors hover:bg-[#1a1a1a]"
                >
                  Book A Free Growth Call
                  <ArrowRight className="size-4 shrink-0" aria-hidden />
                </Link>
                <Link
                  to="/contact?ref=audit"
                  className="inline-flex items-center justify-center gap-2 border-b py-4 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-[#1a1a1a] transition-colors hover:border-md3-primary hover:text-md3-primary [border-bottom-width:0.5px]"
                  style={{ borderBottomColor: INDUSTRIAL.outline }}
                >
                  Get A Free Website Audit
                  <ArrowRight className="size-4 shrink-0" aria-hidden />
                </Link>
              </div>

              {/* HI-1 — Social proof strip (previously absent above fold) */}
              <div
                className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-sm"
                style={{ color: INDUSTRIAL.muted }}
              >
                <span className="flex items-center gap-1.5">
                  <Stars />
                  <strong className="text-[#1a1a1a]">4.9</strong> on Google
                </span>
                <span aria-hidden="true">·</span>
                <span>47 contractors served</span>
                <span aria-hidden="true">·</span>
                <span>Avg 3.2× more leads in 90 days</span>
              </div>
            </div>

            {/* Right: HI-4 — Process + pricing card (replaces meaningless "0.4s Load Speed" stat) */}
            <div className="flex justify-end lg:col-span-5">
              <div
                className="w-full max-w-sm rounded-xl bg-white p-8 shadow-sm"
                style={{ borderWidth: "0.5px", borderColor: INDUSTRIAL.outline }}
              >
                <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-md3-primary">
                  How it works
                </p>
                <ol className="space-y-3">
                  {[
                    { n: "01", label: "Audit", time: "Week 1" },
                    { n: "02", label: "Strategy", time: "Week 1" },
                    { n: "03", label: "Build", time: "Weeks 2–5" },
                    { n: "04", label: "Launch", time: "Week 6" },
                    { n: "05", label: "Optimize", time: "Ongoing" },
                  ].map((step) => (
                    <li key={step.n} className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span
                          className="font-headline text-[10px] font-bold uppercase tracking-widest"
                          style={{ color: INDUSTRIAL.muted }}
                        >
                          {step.n}
                        </span>
                        <span
                          className="text-sm font-semibold"
                          style={{ color: INDUSTRIAL.charcoal }}
                        >
                          {step.label}
                        </span>
                      </div>
                      <span
                        className="text-[10px] uppercase tracking-wider"
                        style={{ color: INDUSTRIAL.muted }}
                      >
                        {step.time}
                      </span>
                    </li>
                  ))}
                </ol>
                <div
                  className="mt-6 pt-5"
                  style={{ borderTop: `0.5px solid ${INDUSTRIAL.outline}` }}
                >
                  <p
                    className="text-xs font-light"
                    style={{ color: INDUSTRIAL.muted }}
                  >
                    Builds from{" "}
                    <strong
                      className="font-headline text-lg font-bold"
                      style={{ color: INDUSTRIAL.charcoal }}
                    >
                      $5,000
                    </strong>
                    {" "}· Growth from{" "}
                    <strong className="font-semibold" style={{ color: INDUSTRIAL.charcoal }}>
                      $1,500/mo
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Services Sections ── */}
        <section className="mx-auto max-w-7xl px-8">
          <div className="space-y-32">
            {/* 1. Websites */}
            <div>
              <div className="mb-12">
                <span className="mb-4 inline-block bg-teal-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-teal-700">
                  Category 01
                </span>
                <h2 className="font-headline text-4xl font-bold tracking-tight text-[#1a1a1a]">
                  Websites & Service Pages
                </h2>
                <div className="mt-4 h-px w-24 bg-md3-primary" />
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {/* Contractor Website Design & Redesign */}
                <div className="flex flex-col border border-zinc-200 bg-white p-8 [border-width:0.5px]">
                  <h3 className="mb-4 font-headline text-xl font-bold text-[#1a1a1a]">
                    Website Design & Redesign
                  </h3>
                  <p className="mb-6 text-sm font-light leading-relaxed text-zinc-600">
                    Custom marketing websites built for electricians, HVAC companies, and electrification contractors. Focused on trust, clarity, mobile performance, and lead generation.
                  </p>
                  <div className="mt-auto space-y-4">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#1a1a1a]">Best for:</p>
                    <ul className="space-y-2 text-xs font-light text-zinc-500">
                      <li>• Outdated contractor websites</li>
                      <li>• Low-converting websites</li>
                      <li>• Repositioning for high-ticket jobs</li>
                    </ul>
                  </div>
                </div>

                {/* Service Page Strategy & Buildouts */}
                <div className="flex flex-col border border-zinc-200 bg-white p-8 [border-width:0.5px]">
                  <h3 className="mb-4 font-headline text-xl font-bold text-[#1a1a1a]">
                    Service Page Strategy & Buildouts
                  </h3>
                  <p className="mb-6 text-sm font-light leading-relaxed text-zinc-600">
                    High-converting service pages for the specific jobs you want more of (panel upgrades, EV charger installation, HVAC replacement).
                  </p>
                  <div className="mt-auto space-y-4">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#1a1a1a]">Best for:</p>
                    <ul className="space-y-2 text-xs font-light text-zinc-500">
                      <li>• Contractors with generic service pages</li>
                      <li>• Companies selling high-ticket services</li>
                      <li>• Businesses needing stronger page-level conversion</li>
                    </ul>
                  </div>
                </div>

                {/* Contractor Growth Landing Pages */}
                <div className="flex flex-col border border-zinc-200 bg-white p-8 [border-width:0.5px]">
                  <h3 className="mb-4 font-headline text-xl font-bold text-[#1a1a1a]">
                    Growth Landing Pages
                  </h3>
                  <p className="mb-6 text-sm font-light leading-relaxed text-zinc-600">
                    Campaign pages built for specific services, offers, and seasonal promotions like HVAC offers or financing.
                  </p>
                  <div className="mt-auto space-y-4">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#1a1a1a]">Best for:</p>
                    <ul className="space-y-2 text-xs font-light text-zinc-500">
                      <li>• Contractors running growth campaigns</li>
                      <li>• Promoting specific seasonal offers</li>
                      <li>• Companies needing dedicated conversion pages</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Local Visibility */}
            <div>
              <div className="mb-12">
                <span className="mb-4 inline-block bg-teal-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-teal-700">
                  Category 02
                </span>
                <h2 className="font-headline text-4xl font-bold tracking-tight text-[#1a1a1a]">
                  Local Visibility
                </h2>
                <div className="mt-4 h-px w-24 bg-md3-primary" />
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {/* Local SEO Foundations */}
                <div className="flex flex-col border border-zinc-200 bg-white p-8 [border-width:0.5px]">
                  <h3 className="mb-4 font-headline text-xl font-bold text-[#1a1a1a]">
                    Local SEO Foundations
                  </h3>
                  <p className="mb-6 text-sm font-light leading-relaxed text-zinc-600">
                    Core local SEO setup designed to improve visibility for contractor searches in target service areas via metadata, keywords, and schema.
                  </p>
                  <div className="mt-auto space-y-4">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#1a1a1a]">Best for:</p>
                    <ul className="space-y-2 text-xs font-light text-zinc-500">
                      <li>• Contractors with weak local rankings</li>
                      <li>• Businesses wanting more organic traffic</li>
                      <li>• Targeted city + service combinations</li>
                    </ul>
                  </div>
                </div>

                {/* Service-Area Landing Pages */}
                <div className="flex flex-col border border-zinc-200 bg-white p-8 [border-width:0.5px]">
                  <h3 className="mb-4 font-headline text-xl font-bold text-[#1a1a1a]">
                    Service-Area Landing Pages
                  </h3>
                  <p className="mb-6 text-sm font-light leading-relaxed text-zinc-600">
                    Dedicated city, market, and service-area pages designed to help contractors reach more local customers in nearby cities.
                  </p>
                  <div className="mt-auto space-y-4">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#1a1a1a]">Best for:</p>
                    <ul className="space-y-2 text-xs font-light text-zinc-500">
                      <li>• Businesses expanding into nearby cities</li>
                      <li>• Better geographic search coverage</li>
                      <li>• Targeting multiple service zones</li>
                    </ul>
                  </div>
                </div>

                {/* Google Business Profile Optimization */}
                <div className="flex flex-col border border-zinc-200 bg-white p-8 [border-width:0.5px]">
                  <h3 className="mb-4 font-headline text-xl font-bold text-[#1a1a1a]">
                    Google Business Profile (GBP)
                  </h3>
                  <p className="mb-6 text-sm font-light leading-relaxed text-zinc-600">
                    GBP support to improve local presence, trust, and visibility through category optimization, content, and review strategy.
                  </p>
                  <div className="mt-auto space-y-4">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#1a1a1a]">Best for:</p>
                    <ul className="space-y-2 text-xs font-light text-zinc-500">
                      <li>• Contractors with weak GBP setup</li>
                      <li>• Businesses relying on maps visibility</li>
                      <li>• Companies wanting stronger local trust</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Lead Generation */}
            <div>
              <div className="mb-12">
                <span className="mb-4 inline-block bg-teal-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-teal-700">
                  Category 03
                </span>
                <h2 className="font-headline text-4xl font-bold tracking-tight text-[#1a1a1a]">
                  Lead Generation & CRO
                </h2>
                <div className="mt-4 h-px w-24 bg-md3-primary" />
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {/* Lead Capture Systems */}
                <div className="flex flex-col border border-zinc-200 bg-white p-8 [border-width:0.5px]">
                  <h3 className="mb-4 font-headline text-xl font-bold text-[#1a1a1a]">
                    Lead Capture Systems
                  </h3>
                  <p className="mb-6 text-sm font-light leading-relaxed text-zinc-600">
                    Website conversion systems designed to increase estimate requests, booked calls, and inbound leads via forms and CTAs.
                  </p>
                  <div className="mt-auto space-y-4">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#1a1a1a]">Best for:</p>
                    <ul className="space-y-2 text-xs font-light text-zinc-500">
                      <li>• Websites with low lead conversion</li>
                      <li>• Contractors with weak call/form tracking</li>
                      <li>• Businesses wanting a better lead path</li>
                    </ul>
                  </div>
                </div>

                {/* Website Conversion Optimization */}
                <div className="flex flex-col border border-zinc-200 bg-white p-8 [border-width:0.5px]">
                  <h3 className="mb-4 font-headline text-xl font-bold text-[#1a1a1a]">
                    Website Conversion (CRO)
                  </h3>
                  <p className="mb-6 text-sm font-light leading-relaxed text-zinc-600">
                    Ongoing improvements to page structure, messaging, trust signals, and conversion paths to maximize performance.
                  </p>
                  <div className="mt-auto space-y-4">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#1a1a1a]">Best for:</p>
                    <ul className="space-y-2 text-xs font-light text-zinc-500">
                      <li>• Websites needing better performance</li>
                      <li>• Contractors wanting more leads from traffic</li>
                      <li>• Businesses refining their sales funnel</li>
                    </ul>
                  </div>
                </div>

                {/* Financing & Rebate Pages */}
                <div className="flex flex-col border border-zinc-200 bg-white p-8 [border-width:0.5px]">
                  <h3 className="mb-4 font-headline text-xl font-bold text-[#1a1a1a]">
                    Financing & Rebate Pages
                  </h3>
                  <p className="mb-6 text-sm font-light leading-relaxed text-zinc-600">
                    Specialized pages that explain financing options, promotions, and incentive-driven services (EV, HVAC rebates).
                  </p>
                  <div className="mt-auto space-y-4">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#1a1a1a]">Best for:</p>
                    <ul className="space-y-2 text-xs font-light text-zinc-500">
                      <li>• Contractors selling high-ticket installs</li>
                      <li>• Heat pump, EV, and panel upgrade sales</li>
                      <li>• Companies needing better sales support</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Automation & Analytics */}
            <div>
              <div className="mb-12">
                <span className="mb-4 inline-block bg-teal-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-teal-700">
                  Category 04
                </span>
                <h2 className="font-headline text-4xl font-bold tracking-tight text-[#1a1a1a]">
                  Automation & Analytics
                </h2>
                <div className="mt-4 h-px w-24 bg-md3-primary" />
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {/* Follow-Up Automation */}
                <div className="flex flex-col border border-zinc-200 bg-white p-8 [border-width:0.5px]">
                  <h3 className="mb-4 font-headline text-xl font-bold text-[#1a1a1a]">
                    Follow-Up Automation
                  </h3>
                  <p className="mb-6 text-sm font-light leading-relaxed text-zinc-600">
                    Simple systems like missed-call text-back and CRM workflows that help contractors respond faster and reduce missed opportunities.
                  </p>
                  <div className="mt-auto space-y-4">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#1a1a1a]">Best for:</p>
                    <ul className="space-y-2 text-xs font-light text-zinc-500">
                      <li>• Busy teams missing inbound leads</li>
                      <li>• Contractors with slow lead follow-up</li>
                      <li>• Businesses wanting operational efficiency</li>
                    </ul>
                  </div>
                </div>

                {/* Analytics & Tracking Setup */}
                <div className="flex flex-col border border-zinc-200 bg-white p-8 [border-width:0.5px]">
                  <h3 className="mb-4 font-headline text-xl font-bold text-[#1a1a1a]">
                    Analytics & Tracking Setup
                  </h3>
                  <p className="mb-6 text-sm font-light leading-relaxed text-zinc-600">
                    Basic performance tracking showing how your website and lead systems are performing (form, CTA, and source tracking).
                  </p>
                  <div className="mt-auto space-y-4">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#1a1a1a]">Best for:</p>
                    <ul className="space-y-2 text-xs font-light text-zinc-500">
                      <li>• Contractors wanting cleaner lead visibility</li>
                      <li>• Businesses investing in growth optimization</li>
                      <li>• Data-driven reporting on sales efforts</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. Ongoing Support */}
            <div className="rounded-xl bg-md3-primary p-12 text-white">
              <div className="mb-8">
                <span className="mb-4 inline-block bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                  Category 05
                </span>
                <h2 className="font-headline text-4xl font-bold tracking-tight text-white">
                  Growth Support & Maintenance
                </h2>
              </div>

              <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
                <div className="flex-1">
                  <h3 className="mb-4 font-headline text-2xl font-bold">
                    Website Maintenance & Growth Support
                  </h3>
                  <p className="mb-6 text-lg font-light leading-relaxed text-white/80">
                    Ongoing support to keep the website updated, optimized, and aligned with business goals as you add services or cities. No rebuilding required.
                  </p>
                  <div className="space-y-4">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/60">Best for:</p>
                    <ul className="grid grid-cols-1 gap-x-8 gap-y-2 text-sm font-light text-white/70 md:grid-cols-2">
                      <li>• Contractors who want a long-term partner</li>
                      <li>• Businesses adding new services/territories</li>
                      <li>• Teams wanting steady improvements monthly</li>
                      <li>• Companies avoiding the "redo my site" cycle</li>
                    </ul>
                  </div>
                </div>
                <div className="flex-none">
                  <Link
                    to="/contact?service=ongoing-support"
                    className="inline-flex items-center gap-2 bg-white px-8 py-4 text-center text-[11px] font-bold uppercase tracking-[0.3em] text-[#1a1a1a] transition-all hover:bg-teal-50"
                  >
                    Start Growth Plan
                    <ArrowRight className="size-4 shrink-0" aria-hidden />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── HI-3 — Testimonials (previously absent; highest-ROI content addition) ── */}
        <section className="mx-auto mt-24 max-w-7xl px-8">
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
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="flex flex-col gap-6 rounded-xl bg-white p-8 shadow-sm"
                style={{ borderWidth: "0.5px", borderColor: INDUSTRIAL.outline }}
              >
                <Stars count={t.rating} />
                <blockquote
                  className="flex-1 text-base font-light leading-relaxed"
                  style={{ color: INDUSTRIAL.charcoal }}
                >
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Result badge */}
                <div className="inline-flex w-fit items-center gap-2 rounded-full bg-md3-primary/8 px-3 py-1.5">
                  <div className="h-1.5 w-1.5 rounded-full bg-md3-primary" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-md3-primary">
                    {t.result}
                  </span>
                </div>

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
                    {t.trade} · {t.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="mx-auto mt-32 max-w-7xl px-8">
          <div
            className="relative overflow-hidden bg-white p-12 md:p-20"
            style={{ borderWidth: "0.5px", borderColor: INDUSTRIAL.outline }}
          >
            <div className="relative z-10 mx-auto max-w-3xl text-center md:text-left">
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-md3-primary">
                Join 47+ contractors
              </p>
              <h2
                className="mb-6 font-headline text-4xl font-light leading-tight tracking-tight md:text-5xl"
                style={{ color: INDUSTRIAL.charcoal }}
              >
                Ready to build your{" "}
                <span className="font-bold">digital growth engine?</span>
              </h2>
              <p
                className="mb-10 text-lg font-light leading-relaxed"
                style={{ color: INDUSTRIAL.muted }}
              >
                Stop losing leads to contractors with better websites. Your
                first step is a free audit — no obligation, no sales pressure.
              </p>

              {/* QW-5 — Single primary CTA + demoted secondary to /work (was two equal CTAs to same URL) */}
              <div className="flex flex-col justify-center gap-6 sm:flex-row md:justify-start">
                <Link
                  to="/contact"
                  className="bg-md3-primary px-10 py-5 text-center text-[11px] font-bold uppercase tracking-[0.3em] text-md3-on-primary transition-all hover:bg-[#1a1a1a]"
                >
                  Book A Free Growth Call
                </Link>
                <Link
                  to="/work"
                  className="inline-flex items-center justify-center gap-2 py-5 text-center text-[11px] font-bold uppercase tracking-[0.3em] transition-all hover:text-md3-primary"
                  style={{ color: INDUSTRIAL.muted }}
                >
                  View Our Work
                  <ArrowRight className="size-4 shrink-0" aria-hidden />
                </Link>
              </div>
            </div>

            {/* Decorative SVG */}
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
                <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.1" />
                <rect x="25" y="25" width="50" height="50" fill="none" stroke="currentColor" strokeWidth="0.1" />
              </svg>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
