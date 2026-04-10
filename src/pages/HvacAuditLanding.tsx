import * as React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, X, ChevronDown, Shield, FileText, Video, ListChecks, Clock } from "lucide-react";
import { SEO } from "@/components/SEO";
import { INDUSTRIAL } from "@/lib/industrialStyle";
import { cn } from "@/lib/utils";

const AUDIT_FORM_URL = "/audit";

const AUDIT_PRICE = "$297";
const AUDIT_PRICE_RUSH = "$397";
const AUDIT_PRICE_FULL = "$447";
const TURNAROUND = "3 business days";

// ─── FAQ data ─────────────────────────────────────────────────────────────────
const FAQ = [
  {
    q: "What exactly does the audit cover?",
    a: "Four areas: your website's conversion performance, your local search and Google Maps visibility, your lead capture and form flow, and your follow-up and dispatch integration. We review your actual site, your actual local rankings, and your actual competitor landscape — not a generic checklist.",
  },
  {
    q: "Is implementation included?",
    a: "No. This is a diagnostic audit, not a delivery project. You'll receive specific findings and a priority action plan, but execution — rebuilding your site, running ads, fixing your CRM flow — is a separate engagement. We'll flag that clearly in the deliverable so there's no confusion.",
  },
  {
    q: "How long does it take to receive my audit?",
    a: `${TURNAROUND} after you complete your intake form. The intake takes about 5 minutes. If there's ever a delay, we'll contact you immediately.`,
  },
  {
    q: "What if I'm not satisfied?",
    a: "If we determine the audit isn't a fit after you complete your intake, we'll refund you in full. One round of minor revisions is included if specific findings seem off-base. Additional revisions beyond that are billed at $75/hour. We want the audit to actually give you something to act on.",
  },
  {
    q: "How is this different from an automated SEO audit tool?",
    a: "Automated tools generate generic scores based on crawling. This audit is done manually by an HVAC-specialized team. We open your actual site on desktop and mobile, search for your business in your actual service areas, review your lead form by hand, and evaluate your follow-up flow. You get specific findings about your specific business — not a template report.",
  },
  {
    q: "What happens after the audit?",
    a: "You receive your PDF report, Loom walkthrough, and action plan and decide what to do next. If the findings point to a need for a new site, a local SEO campaign, or a full lead system build, we're happy to discuss that as a separate project. There's no pitch baked into the audit. It stands alone.",
  },
];

// ─── Included areas ───────────────────────────────────────────────────────────
const AUDIT_AREAS = [
  {
    num: "01",
    title: "Website Performance",
    desc: "We evaluate your site's ability to convert local traffic — load speed, mobile experience, messaging clarity, CTAs, trust signals, and whether the site pre-qualifies the right jobs.",
    checks: ["Page speed & Core Web Vitals", "Mobile UX review", "Headline & CTA clarity", "Trust and credibility signals", "Lead form friction analysis"],
  },
  {
    num: "02",
    title: "Local Search & Google Maps",
    desc: "We analyze how you show up when someone in your area searches for HVAC — including your Google Business Profile, Map Pack rankings, citation consistency, and competitor gaps.",
    checks: ["Google Business Profile audit", "Map Pack ranking analysis", "Local citation review", "Competitor gap analysis", "Review velocity assessment"],
  },
  {
    num: "03",
    title: "Lead Capture & Conversion",
    desc: "We identify where leads are dropping off — forms that don't convert, offers that don't land, and calls that don't happen because the path to contact was unclear.",
    checks: ["Lead form & CTA review", "Landing page alignment", "Offer clarity & specificity", "Pricing visibility audit", "Phone & call-to-action placement"],
  },
  {
    num: "04",
    title: "Follow-Up & Lead Flow",
    desc: "We look at what happens after a lead comes in — whether follow-up is fast enough, whether leads reach dispatch, and where jobs are being lost after first contact.",
    checks: ["Response time gaps", "CRM & dispatch integration", "Missed call handling", "ServiceTitan / Housecall Pro flow", "Lead nurture evaluation"],
  },
];

// ─── Who it's for / not for ───────────────────────────────────────────────────
const FOR_LIST = [
  "You have an existing HVAC website",
  "You're not getting enough qualified calls from Google",
  "You suspect your site or lead flow could be performing better",
  "You want an outside expert perspective before investing in a bigger project",
  "You operate in a competitive local market",
  "You're ready to act on what you find",
];

const NOT_FOR_LIST = [
  "You don't have a website yet",
  "You're looking for free consulting",
  "You expect implementation inside the audit",
  "You're not open to changing anything based on findings",
  "You need enterprise-level custom consulting",
];

// ─── Component ────────────────────────────────────────────────────────────────
export function HvacAuditLanding() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  return (
    <>
      <SEO
        title="HVAC Lead System Audit"
        description="Get a personalized HVAC Lead System Audit from BuiltExpert. We review your website, local visibility, lead capture, and follow-up to uncover what's costing you leads and booked jobs. Delivered in 3 business days."
        canonicalPath="/hvac-lead-system-audit"
        ogType="business.business"
      />

      <div className="font-body antialiased" style={{ backgroundColor: "#fafaf9" }}>

        {/* ── Hero ── */}
        <section className="relative overflow-hidden bg-[#0f1010] py-20 sm:py-28 lg:py-36">
          {/* Subtle mesh */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
              {Array.from({ length: 10 }).map((_, i) => (
                <line key={i} x1={i * 11} y1="0" x2={i * 11} y2="100" stroke="white" strokeWidth="0.2" />
              ))}
              {Array.from({ length: 10 }).map((_, i) => (
                <line key={i} x1="0" y1={i * 11} x2="100" y2={i * 11} stroke="white" strokeWidth="0.2" />
              ))}
            </svg>
          </div>

          <div className="relative mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
            <div className="max-w-3xl">
              {/* Badge */}
              <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-md3-primary/30 bg-md3-primary/10 px-4 py-2">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-md3-primary" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-md3-primary">
                  Founder Pricing · Current Rate
                </span>
              </div>

              {/* Headline — Loss Aversion (PLFS: 14) */}
              <h1 className="mb-6 font-headline text-4xl font-light leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Your HVAC Website Is Losing You{" "}
                <span className="font-bold text-md3-primary">Jobs Every Week.</span>
              </h1>

              <p className="mb-10 max-w-2xl text-lg font-light leading-relaxed text-zinc-300">
                Get a complete audit of your website, local search ranking, lead capture, and follow-up system —
                delivered in <strong className="font-semibold text-white">3 business days</strong> with a
                personalized Loom walkthrough and priority action plan.
              </p>

              {/* Specificity strip — Credibility (PLFS: 13) */}
              <div className="mb-10 flex flex-wrap gap-x-6 gap-y-3 text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                <span className="flex items-center gap-2">
                  <Clock className="size-3.5 text-md3-primary" aria-hidden />
                  3 Business Days
                </span>
                <span className="opacity-30">·</span>
                <span className="flex items-center gap-2">
                  <FileText className="size-3.5 text-md3-primary" aria-hidden />
                  PDF Report + Loom
                </span>
                <span className="opacity-30">·</span>
                <span className="flex items-center gap-2">
                  <ListChecks className="size-3.5 text-md3-primary" aria-hidden />
                  4 Areas Reviewed
                </span>
              </div>

              {/* CTAs */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  to={AUDIT_FORM_URL}
                  className="inline-flex items-center justify-center gap-2 bg-md3-primary px-8 py-4 text-[11px] font-bold uppercase tracking-[0.25em] text-white transition-all hover:bg-[#004f4f] sm:px-10 sm:py-5"
                  aria-label="Get My HVAC Audit for $297"
                >
                  Get My Audit — {AUDIT_PRICE}
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
                <a
                  href="#whats-included"
                  className="text-center text-sm font-medium text-zinc-400 transition-colors hover:text-white"
                >
                  See what&apos;s included ↓
                </a>
              </div>

              {/* Pricing anchor — Anchoring (PLFS: 13) */}
              <p className="mt-6 text-xs font-light text-zinc-500">
                Starting at <span className="font-semibold text-white">{AUDIT_PRICE}</span> · Rush at {AUDIT_PRICE_RUSH} ·{" "}
                Audit + Strategy Call available
              </p>
            </div>
          </div>
        </section>

        {/* ── Trust Strip ── */}
        <section className="border-b border-[#e5e7eb] bg-white py-8 [border-bottom-width:0.5px]">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm font-light text-zinc-500">
                Built for HVAC businesses competing for high-intent local leads in competitive US markets
              </p>
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                {[
                  { stat: "3 Days", label: "Delivery Time" },
                  { stat: "4 Areas", label: "Reviewed" },
                  { stat: "$297", label: "Founder Price" },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <span className="block font-headline text-xl font-black" style={{ color: INDUSTRIAL.charcoal }}>
                      {item.stat}
                    </span>
                    <span className="block text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Problem — dark bg for contrast ── */}
        <section className="bg-[#0f1010] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
            <div className="mb-12">
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-md3-primary">
                The Problem
              </p>
              <h2 className="font-headline text-3xl font-light tracking-tight text-white sm:text-4xl">
                Sound Familiar?
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Your site gets visitors. But the phone doesn't ring.",
                "Your competitor ranks above you on Google Maps — and you don't know why.",
                "Leads come in, but they're not converting into booked jobs.",
                "More than half your work still comes from referrals you can't control.",
                "You've spent money on marketing and have no clear picture of what it did.",
                "You know something's off — but you don't know what to fix first.",
              ].map((pain, i) => (
                <div
                  key={i}
                  className="rounded-none border border-zinc-800 bg-zinc-900/60 px-6 py-5"
                >
                  <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-600">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm font-light leading-relaxed text-zinc-300">{pain}</p>
                </div>
              ))}
            </div>

            <p className="mt-10 text-sm font-light text-zinc-400">
              These are the exact gaps the{" "}
              <strong className="font-semibold text-white">HVAC Lead System Audit</strong> is built to find.
            </p>
          </div>
        </section>

        {/* ── Solution ── */}
        <section className="border-b border-[#e5e7eb] bg-white py-16 sm:py-20 [border-bottom-width:0.5px]">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
            <div className="grid items-center gap-12 lg:grid-cols-[3fr_2fr]">
              <div>
                <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-md3-primary">
                  The Audit
                </p>
                <h2
                  className="mb-6 font-headline text-3xl font-light tracking-tight sm:text-4xl"
                  style={{ color: INDUSTRIAL.charcoal }}
                >
                  A Full Diagnostic of Your HVAC Lead System — Delivered in 3 Days
                </h2>
                <p className="mb-8 text-base font-light leading-relaxed" style={{ color: INDUSTRIAL.muted }}>
                  The HVAC Lead System Audit is a fixed-scope review of every part of your online lead system — from
                  how you show up in local search to whether leads are converting into booked jobs. It&apos;s not
                  consulting. It&apos;s not vague strategy. It&apos;s a specific diagnosis of what&apos;s broken and
                  what to fix first.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Diagnostic, Not Implementation", "Fixed Scope", "3-Day Turnaround", "HVAC-Specific"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#e5e7eb] bg-zinc-50 px-4 py-1.5 text-xs font-semibold text-zinc-700 [border-width:0.5px]"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Value comparison — Anchoring */}
              <div
                className="rounded-none border bg-zinc-50 p-8"
                style={{ borderColor: INDUSTRIAL.outline, borderWidth: "0.5px" }}
              >
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-md3-primary">
                  Return on Audit
                </p>
                <p className="mb-6 font-headline text-4xl font-black" style={{ color: INDUSTRIAL.charcoal }}>
                  {AUDIT_PRICE}
                </p>
                <p className="mb-6 text-sm font-light leading-relaxed" style={{ color: INDUSTRIAL.muted }}>
                  A single HVAC system replacement typically generates{" "}
                  <strong className="font-semibold" style={{ color: INDUSTRIAL.charcoal }}>$3,000–$8,000</strong> in
                  revenue. This audit costs less than 10% of one job — and shows you exactly why you&apos;re not
                  booking more of them.
                </p>
                <div className="border-t border-[#e5e7eb] pt-6 [border-top-width:0.5px]">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                    One-time diagnostic · Specialized for trades
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── What's Included ── */}
        <section id="whats-included" className="py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
            <div className="mb-12">
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-md3-primary">
                Scope
              </p>
              <h2
                className="font-headline text-3xl font-light tracking-tight sm:text-4xl"
                style={{ color: INDUSTRIAL.charcoal }}
              >
                What We Review
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {AUDIT_AREAS.map((area) => (
                <div
                  key={area.num}
                  className="border bg-white p-8"
                  style={{ borderColor: INDUSTRIAL.outline, borderWidth: "0.5px" }}
                >
                  <div className="mb-6 flex items-start justify-between">
                    <span
                      className="font-headline text-3xl font-light"
                      style={{ color: INDUSTRIAL.outline }}
                    >
                      {area.num}
                    </span>
                    <div className="h-1.5 w-8 rounded-full bg-md3-primary" />
                  </div>
                  <h3
                    className="mb-3 font-headline text-xl font-semibold tracking-tight"
                    style={{ color: INDUSTRIAL.charcoal }}
                  >
                    {area.title}
                  </h3>
                  <p className="mb-6 text-sm font-light leading-relaxed" style={{ color: INDUSTRIAL.muted }}>
                    {area.desc}
                  </p>
                  <ul className="space-y-2">
                    {area.checks.map((c) => (
                      <li key={c} className="flex items-center gap-2.5 text-xs font-medium text-zinc-600">
                        <Check className="size-3.5 shrink-0 text-md3-primary" aria-hidden />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Deliverables ── */}
        <section className="border-y border-[#e5e7eb] bg-white py-16 sm:py-20 [border-width:0.5px]">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
            <div className="mb-12">
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-md3-primary">
                Deliverables
              </p>
              <h2
                className="font-headline text-3xl font-light tracking-tight sm:text-4xl"
                style={{ color: INDUSTRIAL.charcoal }}
              >
                What You&apos;ll Receive
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              {[
                {
                  icon: FileText,
                  title: "Branded PDF Audit Report",
                  desc: "A structured written report covering findings across all four audit areas with specific observations for your business.",
                  tag: "Delivered within 3 business days",
                },
                {
                  icon: Video,
                  title: "Personalized Loom Walkthrough",
                  desc: "A recorded screen-by-screen walkthrough of your actual site, rankings, and lead flow — not a generic explainer.",
                  tag: "Delivered with the report",
                },
                {
                  icon: ListChecks,
                  title: "Priority Action Plan",
                  desc: "A clear, ranked list of what to fix first, second, and third — so you don't waste time on the wrong things.",
                  tag: "Included in the report",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="border bg-zinc-50 p-8"
                  style={{ borderColor: INDUSTRIAL.outline, borderWidth: "0.5px" }}
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center bg-md3-primary/10">
                    <item.icon className="size-5 text-md3-primary" aria-hidden />
                  </div>
                  <h3
                    className="mb-3 font-headline text-lg font-semibold"
                    style={{ color: INDUSTRIAL.charcoal }}
                  >
                    {item.title}
                  </h3>
                  <p className="mb-6 text-sm font-light leading-relaxed" style={{ color: INDUSTRIAL.muted }}>
                    {item.desc}
                  </p>
                  <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-md3-primary">
                    <Clock className="size-3" aria-hidden />
                    {item.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Outcomes ── */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
            <div className="grid items-start gap-16 lg:grid-cols-[2fr_3fr]">
              <div>
                <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-md3-primary">
                  Outcomes
                </p>
                <h2
                  className="font-headline text-3xl font-light tracking-tight sm:text-4xl"
                  style={{ color: INDUSTRIAL.charcoal }}
                >
                  After This Audit, You&apos;ll Know Exactly:
                </h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Which part of your lead system is the weakest link right now",
                  "Why your competitors rank above you — and what it would take to change that",
                  "Whether your website is helping or hurting your conversions",
                  "What's causing leads to go cold before they book",
                  "The 3 highest-impact changes you should make first",
                  "Whether you have a traffic problem, a conversion problem, or a follow-up problem",
                ].map((outcome, i) => (
                  <div
                    key={i}
                    className="flex gap-4 border bg-white p-5"
                    style={{ borderColor: INDUSTRIAL.outline, borderWidth: "0.5px" }}
                  >
                    <Check className="mt-0.5 size-4 shrink-0 text-md3-primary" aria-hidden />
                    <p className="text-sm font-light leading-relaxed" style={{ color: INDUSTRIAL.charcoal }}>
                      {outcome}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Who It's For / Not For — Qualification Paradox (PLFS: 12) ── */}
        <section className="border-y border-[#e5e7eb] bg-white py-16 sm:py-20 [border-width:0.5px]">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
            <div className="mb-12">
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-md3-primary">
                Fit
              </p>
              <h2
                className="font-headline text-3xl font-light tracking-tight sm:text-4xl"
                style={{ color: INDUSTRIAL.charcoal }}
              >
                Is This Audit Right for You?
              </h2>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* For */}
              <div
                className="border bg-zinc-50 p-8"
                style={{ borderColor: INDUSTRIAL.outline, borderWidth: "0.5px" }}
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-md3-primary/10">
                    <Check className="size-4 text-md3-primary" aria-hidden />
                  </div>
                  <h3 className="font-headline text-lg font-semibold" style={{ color: INDUSTRIAL.charcoal }}>
                    This is for you if:
                  </h3>
                </div>
                <ul className="space-y-3.5">
                  {FOR_LIST.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm font-light" style={{ color: INDUSTRIAL.charcoal }}>
                      <Check className="mt-0.5 size-4 shrink-0 text-md3-primary" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Not for */}
              <div
                className="border p-8"
                style={{ borderColor: INDUSTRIAL.outline, borderWidth: "0.5px" }}
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100">
                    <X className="size-4 text-zinc-400" aria-hidden />
                  </div>
                  <h3 className="font-headline text-lg font-semibold" style={{ color: INDUSTRIAL.charcoal }}>
                    This is NOT for you if:
                  </h3>
                </div>
                <ul className="space-y-3.5">
                  {NOT_FOR_LIST.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm font-light text-zinc-400">
                      <X className="mt-0.5 size-4 shrink-0 text-zinc-300" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-8 text-xs font-light text-zinc-400">
                  This audit is a <strong className="font-semibold text-zinc-500">diagnostic tool</strong>.
                  Recommendations are specific and actionable, but execution is a separate engagement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Why BuiltExpert — dark 2-col ── */}
        <section className="overflow-hidden border-b border-[#e5e7eb] [border-width:0.5px]">
          <div className="mx-auto max-w-[1440px]">
            <div className="grid lg:grid-cols-[5fr_7fr]">

              {/* Left: dark pull-quote */}
              <div
                className="flex flex-col justify-between px-8 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20"
                style={{ backgroundColor: "#0f1010" }}
              >
                <span className="mb-10 block text-[10px] font-bold uppercase tracking-[0.3em] text-md3-primary">
                  Why BuiltExpert
                </span>
                <div>
                  <p className="font-headline text-4xl font-light leading-[1.05] tracking-tight text-white sm:text-5xl">
                    Built for HVAC.<br />
                    <span className="font-bold text-md3-primary">Not for everyone.</span>
                  </p>
                  <div className="mt-8 h-px w-16 bg-zinc-700" />
                  <p className="mt-8 max-w-xs text-sm font-light leading-relaxed text-zinc-400">
                    HVAC businesses face a specific set of challenges — seasonal demand, high-intent emergency searches,
                    and a review-driven trust economy. We know what a high-performing HVAC lead system looks like
                    because we&apos;ve built and audited dozens of them.
                  </p>
                </div>
                <div className="mt-12 grid grid-cols-2 gap-6 border-t border-zinc-800 pt-8">
                  <div>
                    <span className="font-headline text-3xl font-black text-white">HVAC</span>
                    <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-500">Specialized</p>
                  </div>
                  <div>
                    <span className="font-headline text-3xl font-black text-white">3 Days</span>
                    <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-500">Avg. Delivery</p>
                  </div>
                </div>
              </div>

              {/* Right: two message blocks */}
              <div className="divide-y divide-[#e5e7eb] bg-white [divide-width:0.5px]">
                <div className="px-8 py-10 sm:px-12 sm:py-14 lg:px-16 lg:py-16">
                  <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.3em] text-md3-primary">
                    HVAC-Specific
                  </span>
                  <h3
                    className="mb-5 font-headline text-2xl font-light tracking-tight"
                    style={{ color: INDUSTRIAL.charcoal }}
                  >
                    Not a Generic Audit Tool
                  </h3>
                  <p className="text-base font-light leading-relaxed" style={{ color: INDUSTRIAL.muted }}>
                    Most digital audits are plug-and-play checklists that could apply to any industry. This one is
                    designed around the exact platforms, buyer behaviors, and competitive dynamics of HVAC businesses.
                    We reference your actual service areas, your actual competitors, and the actual job types you&apos;re
                    trying to book.
                  </p>
                </div>
                <div className="px-8 py-10 sm:px-12 sm:py-14 lg:px-16 lg:py-16">
                  <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.3em] text-md3-primary">
                    No Strings
                  </span>
                  <h3
                    className="mb-5 font-headline text-2xl font-light tracking-tight"
                    style={{ color: INDUSTRIAL.charcoal }}
                  >
                    The Audit Stands Alone
                  </h3>
                  <p className="text-base font-light leading-relaxed" style={{ color: INDUSTRIAL.muted }}>
                    We don&apos;t lock you into anything. If your findings point to a need for a new site or a full
                    lead system build, we&apos;re happy to have that conversation — but there&apos;s no pitch baked
                    into this offer. You pay {AUDIT_PRICE}, you get clarity, and you decide what comes next.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Pricing — Single SKU (no paradox of choice) ── */}
        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
            <div className="mb-12 text-center">
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-md3-primary">
                Pricing
              </p>
              <h2
                className="font-headline text-3xl font-light tracking-tight sm:text-4xl"
                style={{ color: INDUSTRIAL.charcoal }}
              >
                One Clear Price. No Surprises.
              </h2>
            </div>

            <div className="mx-auto max-w-3xl">
              {/* Badge */}
              <div className="mb-8 flex justify-center">
                <div className="inline-flex items-center gap-2 bg-md3-primary/10 px-3 py-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-md3-primary" />
                  <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-md3-primary">
                    Founder Pricing · Introductory Rate
                  </span>
                </div>
              </div>

              {/* Three-tier pricing */}
              <div className="grid gap-6 sm:grid-cols-3">
                {/* Tier 1: Standard */}
                <div
                  className="border bg-white p-8"
                  style={{ borderColor: INDUSTRIAL.outline, borderWidth: "0.5px" }}
                >
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">Standard</p>
                  <div className="mb-4 flex items-baseline gap-2">
                    <span className="font-headline text-4xl font-black" style={{ color: INDUSTRIAL.charcoal }}>
                      {AUDIT_PRICE}
                    </span>
                    <span className="text-sm font-light text-zinc-400">one-time</span>
                  </div>
                  <p className="mb-6 text-xs font-light text-zinc-400">{TURNAROUND} turnaround</p>
                  <ul className="mb-8 space-y-2.5 border-t border-[#e5e7eb] pt-6 [border-width:0.5px]">
                    {[
                      "Branded PDF audit report",
                      "Personalized Loom walkthrough",
                      "Priority action plan",
                      "4-area review",
                      "HVAC-specific analysis",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-xs font-light" style={{ color: INDUSTRIAL.charcoal }}>
                        <Check className="size-3.5 shrink-0 text-md3-primary" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={AUDIT_FORM_URL}
                    className="flex w-full items-center justify-center gap-2 border border-md3-primary bg-white py-3.5 text-[10px] font-bold uppercase tracking-[0.25em] text-md3-primary transition-all hover:bg-md3-primary/5 sm:py-4"
                    aria-label={`Get standard audit for ${AUDIT_PRICE}`}
                  >
                    Get My Audit — {AUDIT_PRICE}
                  </Link>
                </div>

                {/* Tier 2: Rush — featured */}
                <div
                  className="relative overflow-hidden border bg-white p-8"
                  style={{ borderColor: "#006565", borderWidth: "1px" }}
                >
                  {/* Recommended badge */}
                  <div className="absolute top-0 left-0 right-0 bg-md3-primary py-1.5 text-center">
                    <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-white">Most Popular</span>
                  </div>
                  <div className="pt-8">
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-md3-primary">Rush</p>
                    <div className="mb-4 flex items-baseline gap-2">
                      <span className="font-headline text-4xl font-black" style={{ color: INDUSTRIAL.charcoal }}>
                        {AUDIT_PRICE_RUSH}
                      </span>
                      <span className="text-sm font-light text-zinc-400">one-time</span>
                    </div>
                    <p className="mb-6 text-xs font-light text-zinc-400">3 business days turnaround</p>
                    <ul className="mb-8 space-y-2.5 border-t border-[#e5e7eb] pt-6 [border-width:0.5px]">
                      {[
                        "Branded PDF audit report",
                        "Personalized Loom walkthrough",
                        "Priority action plan",
                        "4-area review",
                        "HVAC-specific analysis",
                        "Priority rush queue",
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-2.5 text-xs font-light" style={{ color: INDUSTRIAL.charcoal }}>
                          <Check className="size-3.5 shrink-0 text-md3-primary" aria-hidden />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={AUDIT_FORM_URL}
                      className="flex w-full items-center justify-center gap-2 bg-md3-primary py-3.5 text-[10px] font-bold uppercase tracking-[0.25em] text-white transition-all hover:bg-[#004f4f] sm:py-4"
                      aria-label={`Get rush audit for ${AUDIT_PRICE_RUSH}`}
                    >
                      Get My Audit — {AUDIT_PRICE_RUSH}
                      <ArrowRight className="size-3.5" aria-hidden />
                    </Link>
                  </div>
                </div>

                {/* Tier 3: +Strategy Call */}
                <div
                  className="border bg-white p-8"
                  style={{ borderColor: INDUSTRIAL.outline, borderWidth: "0.5px" }}
                >
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">+ Strategy Call</p>
                  <div className="mb-4 flex items-baseline gap-2">
                    <span className="font-headline text-4xl font-black" style={{ color: INDUSTRIAL.charcoal }}>
                      {AUDIT_PRICE_FULL}
                    </span>
                    <span className="text-sm font-light text-zinc-400">one-time</span>
                  </div>
                  <p className="mb-6 text-xs font-light text-zinc-400">{TURNAROUND} + 30-min call</p>
                  <ul className="mb-8 space-y-2.5 border-t border-[#e5e7eb] pt-6 [border-width:0.5px]">
                    {[
                      "Branded PDF audit report",
                      "Personalized Loom walkthrough",
                      "Priority action plan",
                      "4-area review",
                      "HVAC-specific analysis",
                      "30-min strategy call",
                      "Follow-up call notes",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-xs font-light" style={{ color: INDUSTRIAL.charcoal }}>
                        <Check className="size-3.5 shrink-0 text-md3-primary" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={AUDIT_FORM_URL}
                    className="flex w-full items-center justify-center gap-2 border border-md3-primary bg-white py-3.5 text-[10px] font-bold uppercase tracking-[0.25em] text-md3-primary transition-all hover:bg-md3-primary/5 sm:py-4"
                    aria-label={`Get audit with strategy call for ${AUDIT_PRICE_FULL}`}
                  >
                    Get My Audit — {AUDIT_PRICE_FULL}
                  </Link>
                </div>
              </div>

              {/* Risk Reversal (PLFS: 11) */}
              <div className="mt-8 flex items-start justify-center gap-3">
                <Shield className="mt-0.5 size-4 shrink-0 text-zinc-400" aria-hidden />
                <p className="text-xs font-light text-zinc-400">
                  If we determine the audit isn&apos;t the right fit for your situation after you complete intake,
                  we&apos;ll refund you in full. One round of minor revisions included. Additional revisions billed at $75/hr.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── How It Works ── */}
        <section className="border-y border-[#e5e7eb] bg-zinc-50 py-16 sm:py-20 [border-width:0.5px]">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
            <div className="mb-12 text-center">
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-md3-primary">
                Process
              </p>
              <h2
                className="font-headline text-3xl font-light tracking-tight sm:text-4xl"
                style={{ color: INDUSTRIAL.charcoal }}
              >
                Simple. Three Steps.
              </h2>
            </div>

            <div className="grid gap-0 sm:grid-cols-3">
              {[
                {
                  n: "01",
                  t: "Purchase",
                  d: "Click the button, complete checkout. Your intake form link arrives immediately via email. The intake takes about 5 minutes.",
                },
                {
                  n: "02",
                  t: "We Review",
                  d: "We spend 90+ minutes reviewing your site, local rankings, lead forms, and follow-up flow by hand. HVAC-specific. Not automated.",
                },
                {
                  n: "03",
                  t: "You Receive",
                  d: `Your branded PDF report, personalized Loom walkthrough, and priority action plan arrive within ${TURNAROUND} of your intake submission.`,
                },
              ].map((step, i) => (
                <div
                  key={step.n}
                  className={cn(
                    "border bg-white px-8 py-10",
                    i < 2 ? "border-r-0" : "",
                    "[border-width:0.5px]"
                  )}
                  style={{ borderColor: INDUSTRIAL.outline }}
                >
                  <span
                    className="mb-6 block font-headline text-5xl font-light"
                    style={{ color: INDUSTRIAL.outline }}
                  >
                    {step.n}
                  </span>
                  <h3 className="mb-3 font-headline text-xl font-semibold" style={{ color: INDUSTRIAL.charcoal }}>
                    {step.t}
                  </h3>
                  <p className="text-sm font-light leading-relaxed" style={{ color: INDUSTRIAL.muted }}>
                    {step.d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-8">
            <div className="mb-12 text-center">
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-md3-primary">
                FAQ
              </p>
              <h2
                className="font-headline text-3xl font-light tracking-tight sm:text-4xl"
                style={{ color: INDUSTRIAL.charcoal }}
              >
                Questions Answered Upfront
              </h2>
            </div>

            <div className="space-y-3">
              {FAQ.map((item, i) => {
                const open = openFaq === i;
                return (
                  <div
                    key={i}
                    className="border bg-white [border-width:0.5px]"
                    style={{ borderColor: INDUSTRIAL.outline }}
                  >
                    <button
                      type="button"
                      className="flex w-full cursor-pointer items-start justify-between gap-4 px-6 py-5 text-left"
                      onClick={() => setOpenFaq(open ? null : i)}
                      aria-expanded={open}
                    >
                      <span className="font-semibold text-sm sm:text-base leading-snug" style={{ color: INDUSTRIAL.charcoal }}>
                        {item.q}
                      </span>
                      <ChevronDown
                        className={cn("mt-0.5 size-4 shrink-0 text-zinc-400 transition-transform duration-200", open && "rotate-180")}
                        aria-hidden
                      />
                    </button>
                    {open && (
                      <p className="px-6 pb-6 text-sm font-light leading-relaxed" style={{ color: INDUSTRIAL.muted }}>
                        {item.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Final CTA — Loss Framing (PLFS: 14) ── */}
        <section
          className="py-20 sm:py-28 lg:py-32"
          style={{ backgroundColor: "#0f1010" }}
        >
          <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-6 font-headline text-3xl font-light leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
                Every week you wait, your competitor is getting the{" "}
                <span className="font-bold text-md3-primary">calls that should be yours.</span>
              </h2>
              <p className="mb-10 text-lg font-light leading-relaxed text-zinc-400">
                The audit takes 5 minutes of your time. The results arrive in {TURNAROUND}. You&apos;ll know exactly
                what&apos;s costing you jobs — and what to fix first.
              </p>

              <Link
                to={AUDIT_FORM_URL}
                className="mb-6 inline-flex items-center gap-2 bg-md3-primary px-10 py-5 text-[11px] font-bold uppercase tracking-[0.25em] text-white transition-all hover:bg-[#004f4f]"
                aria-label={`Get HVAC Lead System Audit for ${AUDIT_PRICE}`}
              >
                Get My Audit — {AUDIT_PRICE}
                <ArrowRight className="size-4" aria-hidden />
              </Link>

              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">
                <span>{AUDIT_PRICE} standard · {AUDIT_PRICE_RUSH} rush · {AUDIT_PRICE_FULL} + call</span>
                <span className="opacity-40">·</span>
                <span>PDF + Loom + Action Plan</span>
              </div>
            </div>
          </div>
        </section>


      </div>
    </>
  );
}
