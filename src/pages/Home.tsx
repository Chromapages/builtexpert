import * as React from "react";
import { ArrowRight, CornerDownRight, Star } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { SEO } from "@/components/SEO";
import {
  INDUSTRIAL,
  industrialMeshStyle,
  industrialTextGradientStyle,
} from "@/lib/industrialStyle";

const HERO_IMG = "/images/hero/hero-bg.webp";

const TRUST_NAMES = [
  "Apollo HVAC Services",
  "Premier Cooling Co.",
  "Volt Electric",
  "Delta Electrical Solutions",
  "Breezy Air Systems",
  "BrightWire HVAC",
  "Apollo HVAC Services",
  "Premier Cooling Co.",
  "Volt Electric",
  "Delta Electrical Solutions",
  "Breezy Air Systems",
  "BrightWire HVAC",
];

const WHO_CARDS: {
  title: string;
  body: string;
  src: string;
  alt: string;
  linkTo: string;
  cta: string;
}[] = [
  {
    title: "Electricians",
    body: "Residential service, panel upgrades, and EV charging infrastructure campaigns.",
    src: "/images/who/electrician.png",
    alt: "Electrician reviewing electrical panel",
    linkTo: "/services",
    cta: "See electrician packages",
  },
  {
    title: "HVAC Contractors",
    body: "Emergency repair leads and high-margin system replacement strategies.",
    src: "/images/who/hvac.png",
    alt: "HVAC technician installing a residential furnace",
    linkTo: "/services",
    cta: "See HVAC packages",
  },
  {
    title: "Electrification",
    body: "Heat pumps, battery storage, and smart home energy management systems.",
    src: "/images/who/electrification.png",
    alt: "Professional installing a home EV charger",
    linkTo: "/services",
    cta: "See electrification packages",
  },
];

// Testimonials — QW-4: moved before FAQ
const TESTIMONIALS = [
  {
    quote:
      "Before BuiltExpert, I was getting 2-3 calls a month from my site. Last month I got 19. That's insane.",
    name: "Marcus T.",
    trade: "HVAC Contractor",
    location: "Phoenix, AZ",
    rating: 5,
    resultHighlight: "19 calls/month vs. 2-3 before",
  },
  {
    quote:
      'We rank #1 in our city now for "electrician near me". Our schedule is full 3 weeks out.',
    name: "Dani R.",
    trade: "Master Electrician",
    location: "Denver, CO",
    rating: 5,
    resultHighlight: "#1 rank for local keyword",
  },
  {
    quote:
      "They built our site in 5 weeks and we started getting calls from Google within the first month. Total game changer.",
    name: "Ray K.",
    trade: "HVAC & Plumbing Co.",
    location: "Austin, TX",
    rating: 5,
    resultHighlight: "Leads within first month",
  },
];

const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "How long does a website redesign take?",
    a: "Our focused 'Chromapages' setup phase typically takes 4–5 weeks. We prioritize launching your new lead-generation engine quickly so we can move into the performance and growth phase as soon as possible.",
  },
  {
    q: "Will this work for my specific service area?",
    a: "Yes. Local SEO and landing pages are built around your service radius, neighborhoods, and the services you want to grow.",
  },
  {
    q: "Do you integrate with CRM software?",
    a: "We connect forms and booking flows to tools like ServiceTitan, Housecall Pro, and common CRMs so leads land where your team works.",
  },
  {
    q: "What does it cost?",
    a: "We have two phases: The Chromapages Build (a one-time setup starting at $5,000) and BuiltExpert Growth (optional monthly performance retainers starting at $1,500/mo). Most contractors see the best ROI by combining both.",
  },
  {
    q: "Why not just use Squarespace or Wix?",
    a: "Squarespace and Wix build websites. We build lead generation systems. The difference is that our sites are built mobile-first, SEO-optimized for your specific trade, and connected to your CRM so you never lose a lead.",
  },
];

const HOME_DESCRIPTION =
  "Websites and lead systems for electricians and HVAC contractors. High-performance lead generation from local search to booked calls.";

export function Home() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);
  const navigate = useNavigate();

  return (
    <>
      <SEO
        titleFull="BuiltExpert | Websites & Lead Systems for Contractors"
        description={HOME_DESCRIPTION}
      />

      <div
        id="home"
        className="font-body tracking-tight antialiased [letter-spacing:-0.01em] [&_h1]:normal-case [&_h2]:normal-case [&_h3]:normal-case [&_h4]:normal-case [&_h5]:normal-case selection:bg-md3-primary-container selection:text-md3-on-primary-container"
        style={industrialMeshStyle}
      >
        {/* ── Hero ── */}
        <section
          className="relative -mt-24 flex min-h-[80vh] items-center overflow-hidden bg-cover bg-center bg-no-repeat pt-24"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        >
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-white/75 backdrop-blur-[2px]" />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/92 to-transparent" />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-7xl px-8 pb-20 pt-0 lg:pb-32">
            <div className="grid items-center gap-16 lg:grid-cols-2">

              {/* Left: headline + CTAs */}
              <div className="z-10 pt-6 md:pt-8 lg:pt-10">
                {/* QW-5 — Audience-specific badge (was "Built for Industrial Growth") */}
                <span className="mb-6 inline-block rounded-full bg-md3-secondary-container px-3 py-1 text-[10px] font-bold uppercase tracking-[0.3em] text-md3-on-secondary-container">
                  For Electricians &amp; HVAC Contractors
                </span>

                <h1 className="mb-10 font-headline text-5xl font-light leading-[0.92] tracking-tighter lg:text-7xl">
                  <span className="block" style={industrialTextGradientStyle}>
                    Websites & Lead Systems for
                  </span>
                  <span className="mt-1 block">
                    <span className="font-bold text-md3-primary">
                      Electricians & HVAC
                    </span>
                    <span className="font-light" style={{ color: INDUSTRIAL.charcoal }}>
                      {" "}Contractors
                    </span>
                  </span>
                </h1>

                <p
                  className="mb-10 max-w-lg text-lg font-light leading-relaxed"
                  style={{ color: INDUSTRIAL.muted }}
                >
                  We don&apos;t just build websites. We engineer high-performance
                  lead generation engines that turn local searches into booked
                  service calls.
                </p>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link
                    to="/contact"
                    className="rounded-none bg-md3-primary px-8 py-4 text-center text-[11px] font-bold uppercase tracking-[0.25em] text-md3-on-primary shadow-md transition-all hover:bg-[#1a1a1a]"
                  >
                    Book A Growth Call
                  </Link>
                  {/* QW-2 — Secondary CTA → Services */}
                  <Link
                    to="/services"
                    className="border border-[#e5e7eb] bg-white/90 px-8 py-4 text-center text-[11px] font-bold uppercase tracking-[0.25em] text-[#1a1a1a] [border-width:0.5px] transition-all hover:bg-[#1a1a1a] hover:text-white"
                  >
                    Get A Free Website Audit
                  </Link>
                </div>

                {/* Social proof strip */}
                <div
                  className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-6 text-xs font-bold uppercase tracking-widest"
                  style={{ color: INDUSTRIAL.muted }}
                >
                  <div className="flex items-center gap-1.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="size-4 fill-yellow-400 text-yellow-400"
                        aria-hidden
                      />
                    ))}
                    <span className="font-medium">4.9</span>
                    <span>on Google</span>
                  </div>
                  <span className="hidden opacity-40 sm:block">·</span>
                  <span className="font-semibold normal-case tracking-normal">47 contractors served</span>
                  <span className="hidden opacity-40 sm:block">·</span>
                  <span className="font-semibold normal-case tracking-normal">Avg 3.2× more leads</span>
                </div>

                {/* HI-3 — Pricing anchor (resolves silent "how much?" objection) */}
                <p className="mt-3 text-xs font-light" style={{ color: INDUSTRIAL.muted }}>
                  Sites from{" "}
                  <Link
                    to="/pricing"
                    className="font-bold underline underline-offset-2 transition-colors hover:text-md3-primary"
                    style={{ color: INDUSTRIAL.charcoal }}
                  >
                    $5,000
                  </Link>
                  {" "}· Growth retainers from{" "}
                  <Link
                    to="/pricing"
                    className="font-bold underline underline-offset-2 transition-colors hover:text-md3-primary"
                    style={{ color: INDUSTRIAL.charcoal }}
                  >
                    $1,500/mo
                  </Link>
                </p>
              </div>

              {/* HI-1 — Hero right column: industrial dashboard mockup (was empty) */}
              <div className="hidden lg:flex lg:items-center lg:justify-end">
                <div className="w-full max-w-md space-y-3">
                  {/* Dashboard card */}
                  <div
                    className="rounded-xl bg-white p-6 shadow-sm"
                    style={{ borderWidth: "0.5px", borderColor: INDUSTRIAL.outline }}
                  >
                    <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.25em] text-md3-primary">
                      Client Dashboard — Last 30 Days
                    </p>
                    <div className="mb-5 grid grid-cols-2 gap-4">
                      <div>
                        <p
                          className="font-headline text-4xl font-light tracking-tighter"
                          style={{ color: INDUSTRIAL.charcoal }}
                        >
                          19
                        </p>
                        <p
                          className="mt-1 text-[10px] font-bold uppercase tracking-widest"
                          style={{ color: INDUSTRIAL.muted }}
                        >
                          Inbound Calls
                        </p>
                      </div>
                      <div>
                        <p className="font-headline text-4xl font-light tracking-tighter text-md3-primary">
                          #1
                        </p>
                        <p
                          className="mt-1 text-[10px] font-bold uppercase tracking-widest"
                          style={{ color: INDUSTRIAL.muted }}
                        >
                          Google Maps Rank
                        </p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {[
                        { kw: "electrician near me", pct: 94, pos: 1 },
                        { kw: "panel upgrade phoenix", pct: 83, pos: 2 },
                        { kw: "ev charger install", pct: 71, pos: 3 },
                      ].map((item) => (
                        <div key={item.kw}>
                          <div className="mb-1 flex items-center justify-between">
                            <span className="text-xs" style={{ color: INDUSTRIAL.muted }}>
                              {item.kw}
                            </span>
                            <span className="text-xs font-bold text-md3-primary">
                              #{item.pos}
                            </span>
                          </div>
                          <div className="h-1 w-full overflow-hidden rounded-full bg-md3-surface-container-highest">
                            <div
                              className="h-full bg-md3-primary transition-all"
                              style={{ width: `${item.pct}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Floating stat badge */}
                  <div
                    className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-sm"
                    style={{ borderWidth: "0.5px", borderColor: INDUSTRIAL.outline }}
                  >
                    <span className="font-headline text-2xl font-bold text-md3-primary">
                      3.2×
                    </span>
                    <span className="text-sm font-light leading-tight" style={{ color: INDUSTRIAL.muted }}>
                      avg more leads<br />in first 90 days
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Trust ticker ── */}
        <section className="overflow-hidden border-t border-[#e5e7eb] bg-white/60 py-12 backdrop-blur-sm [border-top-width:0.5px]">
          <div className="mx-auto max-w-7xl px-6">
            <p
              className="mb-8 text-center text-[10px] font-bold uppercase tracking-[0.3em] opacity-70"
              style={{ color: INDUSTRIAL.muted }}
            >
              Trusted by contractors across the US
            </p>
            <div className="relative flex overflow-hidden">
              <div className="animate-marquee flex shrink-0 gap-16 pr-16">
                {TRUST_NAMES.map((name, i) => (
                  <span
                    key={`${name}-${i}`}
                    className="shrink-0 text-sm font-semibold opacity-60"
                    style={{ color: INDUSTRIAL.muted }}
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Who We Help ── */}
        <section className="mx-auto max-w-7xl px-8 py-24" id="who-we-help">
          <div className="mb-16 max-w-2xl">
            <h2
              className="font-headline text-3xl font-light tracking-tight md:text-4xl"
              style={{ color: INDUSTRIAL.charcoal }}
            >
              Precision-Fit Solutions
            </h2>
            <div className="mb-4 mt-4 h-px w-24 bg-md3-primary" />
            <p className="text-lg font-light leading-relaxed" style={{ color: INDUSTRIAL.muted }}>
              We specialize in specific high-ticket trades where ROI is
              quantifiable and performance is mandatory.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {WHO_CARDS.map((card) => (
              // HI-4 — keyboard + ARIA support (was onClick-only div with role="article")
              <div
                key={card.title}
                role="link"
                tabIndex={0}
                aria-label={`${card.title} — ${card.cta}`}
                className="group relative aspect-[4/5] cursor-pointer overflow-hidden rounded-2xl border border-[#e5e7eb] bg-white shadow-sm [border-width:0.5px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-md3-primary focus-visible:ring-offset-2"
                onClick={() => navigate(card.linkTo)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    navigate(card.linkTo);
                  }
                }}
              >
                <img
                  alt={card.alt}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src={card.src}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/40 to-transparent" />
                <div className="absolute bottom-0 p-8">
                  <h3 className="mb-2 font-headline text-2xl font-bold text-white">
                    {card.title}
                  </h3>
                  <p className="text-sm text-zinc-300">{card.body}</p>
                  <p className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-md3-primary-fixed">
                    {card.cta}
                    <ArrowRight className="size-3.5 shrink-0" aria-hidden />
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Metrics ── */}
        <section className="border-y border-[#e5e7eb] bg-white/70 py-24 backdrop-blur-sm [border-width:0.5px]">
          <div className="mx-auto max-w-7xl px-8">
            <div className="grid items-center gap-20 lg:grid-cols-2">
              <div>
                <h2
                  className="mb-4 font-headline text-3xl font-light tracking-tight md:text-4xl"
                  style={{ color: INDUSTRIAL.charcoal }}
                >
                  Metrics That Actually Impact Your P&amp;L
                </h2>
                <div className="mb-8 h-px w-24 bg-md3-primary" />
                <p className="mb-12 text-lg font-light leading-relaxed" style={{ color: INDUSTRIAL.muted }}>
                  We don&apos;t focus on &quot;vanity metrics&quot; like
                  impressions. We build systems that drive cold, hard revenue.
                </p>
                <div className="space-y-8">
                  {[
                    {
                      icon: "receipt_long",
                      title: "Estimate Requests",
                      body: "Converting high-intent traffic into quote requests through frictionless forms.",
                    },
                    {
                      icon: "phone_callback",
                      title: "Booked Service Calls",
                      body: "Direct integration with ServiceTitan and Housecall Pro for instant booking.",
                    },
                    {
                      icon: "map",
                      title: "Local Visibility",
                      body: 'Dominating the "Google Map Pack" for your specific service radius.',
                    },
                  ].map((row) => (
                    <div key={row.title} className="flex gap-6">
                      <div className="h-fit rounded-xl bg-md3-primary-container p-3 text-md3-on-primary-container">
                        <span className="material-symbols-outlined">{row.icon}</span>
                      </div>
                      <div>
                        <h4 className="mb-1 text-xl font-semibold" style={{ color: INDUSTRIAL.charcoal }}>
                          {row.title}
                        </h4>
                        <p style={{ color: INDUSTRIAL.muted }}>{row.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { stat: "94%", label: "Mobile Score", caption: "avg Lighthouse score", shift: true },
                  { stat: "3.2×", label: "Lead Velocity", caption: "more leads in 90 days", shift: false },
                  { stat: "22%", label: "CPA Reduction", caption: "vs. previous spend", shift: true },
                  {
                    stat: "4.9",
                    label: "Avg Client Rating",
                    caption: "from 31 Google reviews",
                    shift: false,
                    showStar: true,
                  },
                ].map((cell) => (
                  <div
                    key={cell.label}
                    className={cn(
                      "space-y-2 rounded-2xl border border-[#e5e7eb] bg-white p-8 shadow-sm [border-width:0.5px]",
                      cell.shift && "translate-y-8",
                    )}
                  >
                    <div className="flex items-center gap-2 font-headline text-4xl font-light tracking-tighter text-md3-primary">
                      {"showStar" in cell && cell.showStar ? (
                        <Star
                          className="size-9 shrink-0 fill-amber-400 text-amber-400"
                          aria-hidden
                        />
                      ) : null}
                      <span>{cell.stat}</span>
                    </div>
                    <div className="text-sm font-bold uppercase tracking-wider" style={{ color: INDUSTRIAL.muted }}>
                      {cell.label}
                    </div>
                    <div className="text-xs" style={{ color: INDUSTRIAL.muted }}>
                      {cell.caption}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Services — QW-3: CTAs added to each card ── */}
        <section className="mx-auto max-w-7xl px-8 py-24">
          <div className="mb-16 text-center">
            <h2
              className="font-headline text-3xl font-light tracking-tight md:text-4xl"
              style={{ color: INDUSTRIAL.charcoal }}
            >
              The Growth Infrastructure
            </h2>
            <div className="mx-auto mt-4 h-px w-24 bg-md3-primary" />
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: "web",
                title: "Website Redesign",
                body: "Hard-coded for speed and optimized for conversion. No generic templates.",
                href: "/services",
              },
              {
                icon: "location_on",
                title: "Local SEO",
                body: "Dominate local search for 'Electrician near me' and specific neighborhood keywords.",
                href: "/services",
              },
              {
                icon: "article",
                title: "Service Pages",
                body: "Dedicated landers for every service you offer, from HVAC repair to EV installs.",
                href: "/services",
              },
              {
                icon: "flash_on",
                title: "Lead Capture",
                body: "Advanced CRM integrations and instant lead notifications for your sales team.",
                href: "/services",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group flex flex-col rounded-2xl border border-[#e5e7eb] bg-white p-8 transition-all [border-width:0.5px] hover:border-md3-primary/40"
              >
                <span className="material-symbols-outlined mb-6 block scale-125 text-md3-primary">
                  {item.icon}
                </span>
                <h3
                  className="mb-4 text-xl font-semibold transition-colors group-hover:text-md3-primary"
                  style={{ color: INDUSTRIAL.charcoal }}
                >
                  {item.title}
                </h3>
                <p className="mb-6 flex-1 text-sm font-light leading-relaxed" style={{ color: INDUSTRIAL.muted }}>
                  {item.body}
                </p>
                {/* QW-3 — CTA added (was dead-end card) */}
                <Link
                  to={item.href}
                  className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-md3-primary transition-colors hover:text-[#1a1a1a]"
                >
                  Learn More
                  <ArrowRight className="size-3.5" aria-hidden />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* ── Lead Magnet ── */}
        <section className="border-y border-[#e5e7eb] bg-md3-primary py-24 text-md3-on-primary [border-width:0.5px]">
          <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 font-headline text-4xl font-extrabold text-md3-on-primary">
                Free Website Growth Audit
              </h2>
              <p className="mb-8 text-lg text-md3-primary-fixed">
                We&apos;ll spend 20 minutes manually reviewing your site. No
                automated software — just an expert analysis of your leaks and
                opportunities.
              </p>
              <ul className="mb-10 space-y-4">
                {[
                  "Conversion Rate Leak Audit",
                  "Local Search Rankings Map",
                  "Competitor Gap Analysis",
                ].map((line) => (
                  <li key={line} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-md3-primary-fixed">check_circle</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact?ref=audit"
                className="inline-flex rounded-xl bg-white px-8 py-4 font-black text-md3-primary transition-all hover:bg-md3-primary-fixed-dim"
              >
                Claim Your Free Audit
              </Link>
            </div>
            <div className="relative">
              <div className="rounded-2xl bg-md3-on-primary-fixed-variant p-6 shadow-2xl">
                <div className="mb-6 flex items-center gap-2 border-b border-md3-primary-container pb-4">
                  <div className="h-3 w-3 rounded-full bg-md3-error" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>
                <div className="space-y-4">
                  <div className="h-4 w-3/4 rounded bg-md3-primary-container/30" />
                  <div className="h-4 w-1/2 rounded bg-md3-primary-container/30" />
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="flex h-20 flex-col items-center justify-center rounded-lg bg-md3-primary-container/20">
                      <span className="text-xs font-bold text-md3-primary-fixed">SEO Health</span>
                      <span className="font-headline text-2xl font-black text-white">42%</span>
                    </div>
                    <div className="flex h-20 flex-col items-center justify-center rounded-lg bg-md3-primary-container/20">
                      <span className="text-xs font-bold text-md3-primary-fixed">Leads/Mo</span>
                      <span className="font-headline text-2xl font-black text-white">8</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Process ── */}
        <section className="mx-auto max-w-7xl px-8 py-24">
          <div className="mb-20 text-center">
            <h2
              className="font-headline text-3xl font-light tracking-tight md:text-4xl"
              style={{ color: INDUSTRIAL.charcoal }}
            >
              The 5-Step Growth Roadmap
            </h2>
            <div className="mx-auto mt-4 h-px w-24 bg-md3-primary" />
          </div>
          <div className="relative grid gap-8 md:grid-cols-5">
            <div
              className="absolute left-0 top-8 -z-10 hidden h-px w-full md:block"
              style={{ backgroundColor: INDUSTRIAL.outline }}
            />
            {[
              { n: "1", t: "Audit", timeframe: "Week 1", d: "Deep dive into current performance.", deliverable: "47-point website scorecard" },
              { n: "2", t: "Strategy", timeframe: "Week 1", d: "Target keyword and lead mapping.", deliverable: "Custom growth roadmap" },
              { n: "3", t: "Build", timeframe: "Weeks 2–5", d: "High-speed system development.", deliverable: "Full site + integrations" },
              { n: "4", t: "Launch", timeframe: "Week 6", d: "Go-live and tracking deployment.", deliverable: "Live site + analytics" },
              { n: "5", t: "Optimize", timeframe: "Ongoing", d: "Monthly scaling and ROI tuning.", deliverable: "Monthly performance report" },
            ].map((step) => (
              <div key={step.n} className="space-y-3">
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-white font-headline text-xl font-light text-md3-primary shadow-md"
                  style={{ borderColor: INDUSTRIAL.outline }}
                >
                  {step.n}
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-md3-primary">{step.timeframe}</p>
                <h4 className="font-semibold" style={{ color: INDUSTRIAL.charcoal }}>{step.t}</h4>
                <p className="text-sm font-light" style={{ color: INDUSTRIAL.muted }}>{step.d}</p>
                <p className="flex items-start gap-1.5 text-xs opacity-70" style={{ color: INDUSTRIAL.muted }}>
                  <CornerDownRight className="mt-0.5 size-3.5 shrink-0 opacity-80" aria-hidden />
                  <span>{step.deliverable}</span>
                </p>
              </div>
            ))}
          </div>

          {/* HI-2 — Mid-page CTA (process section is highest-intent content; no CTA was conversion loss) */}
          <div className="mt-16 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/contact?ref=audit"
              className="bg-md3-primary px-8 py-4 text-[11px] font-bold uppercase tracking-[0.25em] text-md3-on-primary transition-colors hover:bg-[#1a1a1a]"
            >
              Start With A Free Audit
            </Link>
            <span className="text-sm font-light" style={{ color: INDUSTRIAL.muted }}>
              Free · No obligation · Response in 48h
            </span>
          </div>
        </section>

        {/* ── Testimonials — QW-4: moved BEFORE FAQ (was after, most visitors never saw it) ── */}
        <section className="border-t border-[#e5e7eb] bg-white/60 px-8 py-24 backdrop-blur-sm [border-top-width:0.5px]">
          <div className="mx-auto max-w-7xl">
            <h2
              className="mb-4 text-center font-headline text-3xl font-light tracking-tight md:text-4xl"
              style={{ color: INDUSTRIAL.charcoal }}
            >
              Real Results From Real Contractors
            </h2>
            <div className="mx-auto mb-6 h-px w-24 bg-md3-primary" />
            <p
              className="mb-16 text-center text-lg font-light"
              style={{ color: INDUSTRIAL.muted }}
            >
              Don&apos;t take our word for it.
            </p>
            <div className="grid gap-8 md:grid-cols-3">
              {TESTIMONIALS.map((t) => (
                <div
                  key={t.name}
                  className="flex flex-col gap-6 rounded-2xl border border-[#e5e7eb] bg-white p-8 shadow-sm [border-width:0.5px]"
                >
                  <div className="flex gap-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="size-4 fill-yellow-400 text-yellow-400"
                        aria-hidden
                      />
                    ))}
                  </div>
                  <blockquote className="flex-1 font-light leading-relaxed" style={{ color: INDUSTRIAL.charcoal }}>
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="rounded-lg bg-md3-secondary-container px-3 py-2 text-xs font-bold text-md3-on-secondary-container">
                    {t.resultHighlight}
                  </div>
                  <div>
                    <p className="font-bold" style={{ color: INDUSTRIAL.charcoal }}>{t.name}</p>
                    <p className="text-sm font-light" style={{ color: INDUSTRIAL.muted }}>
                      {t.trade} · {t.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="border-t border-[#e5e7eb] px-8 py-24 [border-top-width:0.5px]">
          <div className="mx-auto max-w-3xl">
            <h2
              className="mb-4 text-center font-headline text-3xl font-light tracking-tight"
              style={{ color: INDUSTRIAL.charcoal }}
            >
              Frequently Asked Questions
            </h2>
            <div className="mx-auto mb-12 h-px w-24 bg-md3-primary" />
            <div className="space-y-4">
              {FAQ_ITEMS.map((item, index) => {
                const open = openFaq === index;
                return (
                  <div
                    key={item.q}
                    className="rounded-xl border border-[#e5e7eb] bg-white p-6 shadow-sm [border-width:0.5px]"
                  >
                    <button
                      type="button"
                      className="flex w-full cursor-pointer items-center justify-between gap-4 text-left"
                      onClick={() => setOpenFaq(open ? null : index)}
                      aria-expanded={open}
                    >
                      <span className="font-semibold text-lg" style={{ color: INDUSTRIAL.charcoal }}>
                        {item.q}
                      </span>
                      <span
                        className={cn(
                          "material-symbols-outlined shrink-0 transition-transform",
                          open && "rotate-180",
                        )}
                        aria-hidden="true"
                      >
                        expand_more
                      </span>
                    </button>
                    {open && (
                      <p className="mt-4 font-light leading-relaxed" style={{ color: INDUSTRIAL.muted }}>
                        {item.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="px-8 pb-32 pt-8">
          <div
            className="relative mx-auto max-w-7xl overflow-hidden bg-white p-12 text-left md:p-20"
            style={{ borderWidth: "0.5px", borderColor: INDUSTRIAL.outline }}
          >
            <div className="relative z-10 max-w-2xl">
              <h2
                className="mb-8 font-headline text-4xl font-light leading-tight tracking-tight md:text-5xl"
                style={{ color: INDUSTRIAL.charcoal }}
              >
                Ready to dominate your{" "}
                <span className="font-bold">local market?</span>
              </h2>
              <p
                className="mb-12 max-w-xl text-lg font-light leading-relaxed"
                style={{ color: INDUSTRIAL.muted }}
              >
                Stop losing leads to competitors with better websites. Build
                your digital authority today.
              </p>
              <div className="flex flex-wrap gap-8">
                <Link
                  to="/contact"
                  className="bg-[#1a1a1a] px-10 py-5 text-[11px] font-bold uppercase tracking-[0.3em] text-white transition-all hover:bg-md3-primary"
                >
                  Schedule Your Growth Call
                </Link>
                <Link
                  to="/pricing"
                  className="border-b py-5 text-[11px] font-bold uppercase tracking-[0.3em] text-[#1a1a1a] [border-bottom-width:0.5px] transition-all hover:border-md3-primary hover:text-md3-primary"
                  style={{ borderBottomColor: INDUSTRIAL.outline }}
                >
                  View Pricing
                </Link>
              </div>
            </div>
            <div className="pointer-events-none absolute bottom-0 right-0 top-0 hidden w-1/2 select-none overflow-hidden opacity-[0.03] lg:block">
              <svg
                className="h-full w-full scale-150 text-[#1a1a1a]"
                viewBox="0 0 100 100"
                aria-hidden={true}
              >
                <path d="M0 0 L100 100 M100 0 L0 100 M50 0 V100 M0 50 H100" fill="none" stroke="currentColor" strokeWidth="0.1" />
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
