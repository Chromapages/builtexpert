import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Check,
  Flame,
  Home,
  Plug,
  Star,
  Thermometer,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import {
  INDUSTRIAL,
  industrialMeshStyle,
  industrialTextGradientStyle,
} from "@/lib/industrialStyle";

// ─── Data ────────────────────────────────────────────────────────────────────

const INDUSTRY_ICONS: Record<string, LucideIcon> = {
  electricians: Zap,
  "hvac-contractors": Thermometer,
  "ev-charger-installers": Plug,
  "heat-pump-contractors": Flame,
  "panel-upgrade-specialists": Wrench,
  "home-performance-contractors": Home,
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
    id: "electricians",
    tier: "primary",
    name: "Electricians",
    tagline: "Turn website traffic into estimate requests.",
    description:
      "We help electrical contractors build the web presence that matches the quality of their work. That means stronger service pages, better local SEO, clearer trust signals, and mobile-first conversion paths built specifically for residential and commercial electrical work.",
    problems: [
      "Website hasn't been updated in years — loses trust on first scroll",
      "No-shows from Google Maps because the profile and site don't align",
      "Generic site copy that doesn't mention panel upgrades, EV charging, or service area",
      "Contact form goes to spam or an inbox no one checks",
      "Zero visibility for high-margin services like whole-home rewires and smart panel installs",
    ],
    whatWeImprove: [
      "Service-specific landing pages for each high-value job type",
      "Google Business Profile sync and local SEO optimization",
      "Mobile-first layout built for the customer who searches from their phone",
      "Lead capture connected to ServiceTitan, Housecall Pro, or your CRM",
      "Trust section with licenses, reviews, and before/after project photos",
    ],
    stat: { value: "3.2×", label: "avg increase in monthly leads" },
    testimonial: {
      quote: "I went from 4 calls a month to 19. My site now closes customers before I even pick up the phone.",
      name: "Chris V.",
      trade: "Master Electrician",
      location: "Denver, CO",
      result: "19 calls/month in 90 days",
    },
    ctaLabel: "View Electrician Website Solutions",
    ctaHref: "/services",
  },
  {
    id: "hvac-contractors",
    tier: "primary",
    name: "HVAC Contractors",
    tagline: "Win emergency calls and high-margin system replacements.",
    description:
      "HVAC businesses live on two kinds of work: fast-response emergency repairs and high-ticket system replacements. Your website needs to convert both. We build HVAC sites that show up when it's 100° outside, load fast on mobile, and send estimates to your dispatch team automatically.",
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
    stat: { value: "94%", label: "avg mobile Lighthouse score after launch" },
    testimonial: {
      quote: "Losing emergency calls to a competitor with a worse service was embarrassing. Three months after launch my Google Maps rank went from page 2 to #1 for AC repair in my city.",
      name: "Marcus T.",
      trade: "HVAC Contractor",
      location: "Phoenix, AZ",
      result: "#1 Google Maps rank in 90 days",
    },
    ctaLabel: "View HVAC Contractor Solutions",
    ctaHref: "/services",
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
    stat: { value: "+47%", label: "avg organic traffic on EV-focused pages" },
    ctaLabel: "Talk to Us About EV Installation Sites",
    ctaHref: "/contact?service=ev-charger",
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
    stat: { value: "22%", label: "avg conversion lift with rebate content" },
    ctaLabel: "Talk to Us About Heat Pump Sites",
    ctaHref: "/contact?service=heat-pump",
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
    stat: { value: "$8,400", label: "avg ticket on panel upgrade leads generated" },
    ctaLabel: "Talk to Us About Panel Upgrade Sites",
    ctaHref: "/contact?service=panel-upgrade",
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
    stat: { value: "2.8×", label: "avg lead velocity after content rebuild" },
    ctaLabel: "Talk to Us About Home Performance Sites",
    ctaHref: "/contact?service=home-performance",
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
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
                Get A Free Audit
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

function SecondaryCard({ industry }: { industry: Industry }) {
  return (
    <article id={industry.id} className="rounded-xl bg-white p-8 lg:p-10 flex flex-col" style={{ borderWidth: "0.5px", borderColor: INDUSTRIAL.outline }}>
      <div className="mb-4 flex items-center gap-3">
        <IndustryIcon
          id={industry.id}
          className="size-8 shrink-0 text-md3-primary"
        />
        <span className="rounded-full bg-zinc-100 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-500">
          Expansion
        </span>
      </div>

      <h3 className="mb-2 font-headline text-2xl font-bold tracking-tighter" style={{ color: INDUSTRIAL.charcoal }}>
        {industry.name}
      </h3>
      <p className="mb-4 text-sm font-semibold text-md3-primary">{industry.tagline}</p>
      <p className="mb-6 text-sm leading-relaxed" style={{ color: INDUSTRIAL.muted }}>
        {industry.description}
      </p>

      <div className="mb-6 space-y-6">
        <div>
          <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.25em] text-red-400">Common Problems</p>
          <ProblemList items={industry.problems} />
        </div>
        <div>
          <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.25em] text-md3-primary">What We Improve</p>
          <ImproveList items={industry.whatWeImprove} />
        </div>
      </div>

      {/* Stat */}
      <div className="mb-7 flex items-center gap-3 rounded-lg bg-md3-surface-container-low px-4 py-3">
        <span className="font-headline text-2xl font-bold tracking-tight text-md3-primary">{industry.stat.value}</span>
        <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: INDUSTRIAL.muted }}>{industry.stat.label}</span>
      </div>

      <div className="mt-auto">
        <Link
          to={industry.ctaHref}
          className="block w-full rounded-none bg-md3-primary py-3 text-center text-[11px] font-bold uppercase tracking-[0.25em] text-md3-on-primary transition-all hover:bg-[#1a1a1a]"
        >
          {industry.ctaLabel}
        </Link>
      </div>
    </article>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export function WhoWeHelp() {
  return (
    <>
      <SEO
        title="Who We Help"
        description="BuiltExpert specializes in websites and lead systems for electricians, HVAC contractors, EV charger installers, heat pump contractors, panel upgrade specialists, and home performance companies."
        canonical="/who-we-help"
      />

      <div
        className="font-body tracking-tight antialiased [letter-spacing:-0.01em] [&_h1]:normal-case [&_h2]:normal-case [&_h3]:normal-case selection:bg-md3-primary-container selection:text-md3-on-primary-container"
        style={industrialMeshStyle}
      >

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section className="py-20 lg:py-28" style={{ borderBottomWidth: "0.5px", borderColor: INDUSTRIAL.outline }}>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="mb-6 inline-block rounded-full bg-md3-secondary-container px-3 py-1 text-[10px] font-bold uppercase tracking-[0.3em] text-md3-on-secondary-container">
                Who We Help
              </span>
              <h1 className="mb-6 font-headline text-5xl font-light leading-[0.95] tracking-tighter lg:text-7xl">
                <span className="block" style={industrialTextGradientStyle}>
                  Built for contractors
                </span>
                <span className="mt-1 block font-bold text-md3-primary">
                  who are serious
                </span>
                <span className="block font-light" style={{ color: INDUSTRIAL.charcoal }}>
                  about growth.
                </span>
              </h1>
              <p className="mb-10 max-w-xl text-lg font-light leading-relaxed" style={{ color: INDUSTRIAL.muted }}>
                BuiltExpert is not a generalist web agency. We work exclusively with
                home service businesses in the electrical and HVAC trades — and the
                electrification market growing fast around them. Our systems, SEO
                strategies, and conversion frameworks are tuned for one outcome:
                turning website visitors into booked estimates.
              </p>

              {/* Quick-jump nav */}
              <div className="mb-8 flex flex-wrap gap-2">
                {INDUSTRIES.map((i) => (
                  <a
                    key={i.id}
                    href={`#${i.id}`}
                    className="rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-all hover:bg-md3-primary hover:text-md3-on-primary"
                    style={{
                      borderWidth: "0.5px",
                      borderColor: INDUSTRIAL.outline,
                      color: INDUSTRIAL.charcoal,
                      backgroundColor: "#fff",
                    }}
                  >
                    {i.name}
                  </a>
                ))}
              </div>

              {/* Hero CTA */}
              <div className="flex flex-wrap gap-5">
                <Link
                  to="/contact"
                  className="bg-[#1a1a1a] px-8 py-4 text-[11px] font-bold uppercase tracking-[0.3em] text-white transition-all hover:bg-md3-primary"
                >
                  Book A Free Growth Call
                </Link>
                <Link
                  to="/contact?ref=audit"
                  className="border-b py-4 text-[11px] font-bold uppercase tracking-[0.3em] text-[#1a1a1a] [border-bottom-width:0.5px] transition-all hover:border-md3-primary hover:text-md3-primary"
                  style={{ borderColor: INDUSTRIAL.outline }}
                >
                  Get A Free Audit →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Fit check strip ──────────────────────────────────────────────── */}
        <section className="bg-md3-surface-container-low py-10" style={{ borderBottomWidth: "0.5px", borderColor: INDUSTRIAL.outline }}>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-4">
              <p className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.25em]" style={{ color: INDUSTRIAL.muted }}>
                <span>You&apos;re in the right place if you are a</span>
                <ArrowRight className="size-3.5 shrink-0" aria-hidden />
              </p>
              {[
                "Residential Electrician",
                "Commercial Electrician",
                "HVAC Company",
                "AC & Heating Contractor",
                "EV Charger Installer",
                "Heat Pump Contractor",
                "Home Energy Auditor",
                "Insulation Contractor",
              ].map((label) => (
                <span
                  key={label}
                  className="rounded-full bg-white px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest"
                  style={{ color: INDUSTRIAL.charcoal, borderWidth: "0.5px", borderColor: INDUSTRIAL.outline }}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Primary Industries ───────────────────────────────────────────── */}
        <div>
          <div className="mx-auto max-w-7xl px-6 pt-16 lg:px-8">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-md3-primary">
              Primary Specializations
            </p>
            <h2 className="font-headline text-2xl font-bold tracking-tighter" style={{ color: INDUSTRIAL.charcoal }}>
              Where we go deepest
            </h2>
          </div>
          {PRIMARY.map((industry, i) => (
            <PrimaryCard key={industry.id} industry={industry} flip={i % 2 === 1} />
          ))}
        </div>

        {/* ── Secondary / expansion Industries ────────────────────────────── */}
        <section className="py-20 lg:py-28" style={{ borderTopWidth: "0.5px", borderColor: INDUSTRIAL.outline }}>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-14">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-md3-primary">
                Expansion Markets
              </p>
              <h2 className="mb-4 font-headline text-2xl font-bold tracking-tighter" style={{ color: INDUSTRIAL.charcoal }}>
                Electrification &amp; specialty trades
              </h2>
              <p className="max-w-xl text-sm leading-relaxed" style={{ color: INDUSTRIAL.muted }}>
                These markets are growing fast. Contractors who establish web authority now
                will own local search when the full adoption wave hits.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {SECONDARY.map((industry) => (
                <SecondaryCard key={industry.id} industry={industry} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Not sure you fit? ────────────────────────────────────────────── */}
        <section className="py-16" style={{ borderTopWidth: "0.5px", borderColor: INDUSTRIAL.outline }}>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div
              className="grid items-center gap-10 rounded-xl bg-white p-10 lg:grid-cols-2 lg:p-14"
              style={{ borderWidth: "0.5px", borderColor: INDUSTRIAL.outline }}
            >
              <div>
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em]" style={{ color: INDUSTRIAL.muted }}>
                  Not sure you're a fit?
                </p>
                <h2 className="mb-4 font-headline text-3xl font-bold tracking-tighter lg:text-4xl" style={{ color: INDUSTRIAL.charcoal }}>
                  We'll tell you honestly in 30 minutes.
                </h2>
                <p className="text-base leading-relaxed" style={{ color: INDUSTRIAL.muted }}>
                  Book a free growth call. We'll look at your current site, your market,
                  and your goals — and tell you exactly what it would take to win more
                  work online. No pressure. If we're not the right fit, we'll say so.
                </p>
              </div>
              <div className="flex flex-col gap-4 lg:items-end">
                <div className="text-right hidden lg:block">
                  <div className="mb-1 flex items-center justify-end gap-1.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="size-4 fill-yellow-400 text-yellow-400" aria-hidden />
                    ))}
                    <span className="text-xs font-bold" style={{ color: INDUSTRIAL.charcoal }}>4.9 on Google</span>
                  </div>
                  <p className="text-xs" style={{ color: INDUSTRIAL.muted }}>47 contractors served · Avg 3.2× more leads</p>
                </div>
                <Link
                  to="/contact"
                  className="rounded-none bg-md3-primary px-8 py-4 text-center text-[11px] font-bold uppercase tracking-[0.25em] text-md3-on-primary shadow-md transition-all hover:bg-[#1a1a1a] lg:w-auto w-full"
                >
                  Book A Free Growth Call
                </Link>
                <Link
                  to="/contact?ref=audit"
                  className="border px-8 py-4 text-center text-[11px] font-bold uppercase tracking-[0.25em] transition-all hover:bg-[#1a1a1a] hover:text-white lg:w-auto w-full"
                  style={{ borderColor: INDUSTRIAL.outline, color: INDUSTRIAL.charcoal, borderWidth: "0.5px" }}
                >
                  Get A Free Website Audit
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Positioning statement ────────────────────────────────────────── */}
        <section className="border-t border-zinc-100 py-16 lg:py-20" style={{ background: INDUSTRIAL.charcoal }}>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
    </>
  );
}
