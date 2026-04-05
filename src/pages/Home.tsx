import * as React from "react";
import { ArrowDown, ArrowRight, CornerDownRight, Star } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { SEO } from "@/components/SEO";
import {
  INDUSTRIAL,
  industrialMeshStyle,
  industrialTextGradientStyle,
} from "@/lib/industrialStyle";
import { getFaqItems, getHomePage, getTestimonials, urlFor } from "@/lib/sanity.client";
import { PortableText } from "@portabletext/react";
import { FAQSection } from "@/components/features/FAQSection";
import { HomeHero } from "@/components/features/HomeHero";
import { HeroSkeleton } from "@/components/ui/HeroSkeleton";
import { CardSkeleton } from "@/components/ui/CardSkeleton";
import { TestimonialSkeleton } from "@/components/ui/TestimonialSkeleton";
import { Button } from "@/components/ui/Button";


const HERO_IMG = "/images/hero/hero-industrial.png";

// const TRUST_NAMES = [
//   "Apollo HVAC Services",
//   "Premier Cooling Co.",
//   "Volt Electric",
//   "Delta Electrical Solutions",
//   "Breezy Air Systems",
//   "BrightWire HVAC",
//   "Apollo HVAC Services",
//   "Premier Cooling Co.",
//   "Volt Electric",
//   "Delta Electrical Solutions",
//   "Breezy Air Systems",
//   "BrightWire HVAC",
// ];

const SYSTEM_SERVICES = [
  {
    icon: "search",
    title: "Lead System Audit",
    body: "A manual diagnostic that shows you what is leaking leads, where the bottleneck lives, and what to fix first.",
    imgSrc: "/images/home/service-web-design.png",
    imgAlt: "Lead System Audit Preview",
    href: "/audit",
  },
  {
    icon: "web",
    title: "Contractor Websites",
    body: "A high-conversion site built to turn local traffic into calls, estimates, and booked work.",
    imgSrc: "/images/home/service-web-design.png",
    imgAlt: "BuiltExpert Conversion Web Design Preview",
    href: "/services/contractor-websites",
  },
  {
    icon: "article",
    title: "Landing Pages",
    body: "Focused campaign pages for one job, one audience, and one conversion goal.",
    imgSrc: "/images/home/service-seo.png",
    imgAlt: "Service-Specific SEO Rankings Preview",
    href: "/services/landing-pages",
  },
  {
    icon: "location_on",
    title: "Local SEO",
    body: "We build the visibility to help the right customers find you in the right city at the right time.",
    imgSrc: "/images/home/service-local-maps.png",
    imgAlt: "Local Map Pack #1 Ranking Preview",
    href: "/services/local-seo",
  },
  {
    icon: "flash_on",
    title: "Growth Support",
    body: "Ongoing optimization, tracking, and support so the system keeps getting better after launch.",
    imgSrc: "/images/home/service-automation.png",
    imgAlt: "CRM Automation and Lead Management Preview",
    href: "/services/growth-support",
  },
];

const WHO_CARDS: {
  title: string;
  body: string;
  features: string[];
  linkTo: string;
  cta: string;
}[] = [
  {
    title: "Roofing",
    body: "Trust-heavy contractor marketing built for high-ticket replacements, storm work, and fast estimate requests.",
    features: [
      "Roof replacement funnels",
      "Storm lead routing",
      "Local SEO for city searches",
    ],
    linkTo: "/who-we-help/roofing-contractors",
    cta: "See roofing roadmap",
  },
  {
    title: "HVAC",
    body: "Precision lead flow for climate control professionals. We capture urgent repair intent and high-value replacement jobs during peak demand seasons.",
    features: [
      "Emergency repair pages",
      "Seasonal campaign sync",
      "Replacement quote paths",
    ],
    linkTo: "/who-we-help/hvac-contractors",
    cta: "See HVAC roadmap",
  },
  {
    title: "Plumbing",
    body: "Urgency-first marketing for service teams that need to win the call before a competitor answers it.",
    features: [
      "Emergency plumbing pages",
      "Drain and repair funnels",
      "Conversion-first lead routing",
    ],
    linkTo: "/who-we-help/plumbing-contractors",
    cta: "See plumbing roadmap",
  },
];

// Testimonials — QW-4: moved before FAQ
// Testimonials HIDDEN for launch v1 until real ones are added to Sanity
const TESTIMONIALS: any[] = [];

const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "How are you different from HomeAdvisor or Angie's List?",
    a: "Those platforms sell the same lead to 4 or 5 competitors in your area and start a race to the bottom on price. We build a proprietary lead system exclusive to you. Every call we generate belongs to you — we never resell it.",
  },
  {
    q: "What if I've been burned by a marketing agency before?",
    a: "It's the first thing most contractors tell us. Generic agencies lock you into 12-month contracts and deliver reports instead of results. We don't do long-term contracts. We earn your business every month through booked jobs, not impressions.",
  },
  {
    q: "How long before I start getting calls?",
    a: "The build takes 4–6 weeks. Most clients start seeing organic inbound within 60 days. If you need calls in week one, we can layer in local service ads to get the phone moving while the SEO builds.",
  },
  {
    q: "Do you work with ServiceTitan or Housecall Pro?",
    a: "Yes — both. Every lead, form fill, and missed call routes directly into your dispatch board. No manual data entry, no leads falling through the cracks.",
  },
  {
    q: "What does it cost?",
    a: "The audit is $497. Contractor websites start at $4,200, landing pages are scoped per campaign, and ongoing growth support starts at $750/mo. See the full breakdown on our Pricing page.",
  },
];

const HOME_DESCRIPTION =
  "BuiltExpert: High-performance websites and lead systems for electricians and HVAC contractors. Turn local search into booked calls with exclusive leads.";

export function Home() {
  const [homeData, setHomeData] = React.useState<any>(null);
  const [testimonials, setTestimonials] = React.useState<any[]>(TESTIMONIALS);
  const [faqItems, setFaqItems] = React.useState(FAQ_ITEMS.map((item) => ({ question: item.q, answer: item.a, category: "general" })));
  const [isLoading, setIsLoading] = React.useState(true);
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const [home, tests, faqs] = await Promise.all([getHomePage(), getTestimonials(), getFaqItems()]);
        if (home) setHomeData(home);
        if (tests && tests.length > 0) setTestimonials(tests);
        if (faqs && faqs.length > 0) {
          setFaqItems(faqs.map((item: any) => ({
            question: item.question,
            answer: item.answer,
            category: item.category || "general",
          })));
        }
      } catch (error) {
        console.error("Error fetching homepage data:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  const heroHeadline = homeData?.headline ? (
    <PortableText 
      value={homeData.headline} 
      components={{
        marks: {
          highlight: ({ children }) => <span className="font-bold text-md3-primary">{children}</span>,
          gradient: ({ children }) => <span className="block" style={industrialTextGradientStyle}>{children}</span>,
        },
        block: {
          normal: ({ children }) => <>{children}</>,
        }
      }} 
    />
  ) : (
    <>
      <span className="block" style={industrialTextGradientStyle}>
        Land More Jobs Without
      </span>
      <span className="mt-1 block">
        <span className="font-bold text-md3-primary">
          Wasting Money
        </span>
        <span className="font-light text-zinc-100">
          {" "}on Dead-End Leads
        </span>
      </span>
    </>
  );

  const heroSubheadline = homeData?.hero?.subheadline || 
    "We build high-converting websites and local SEO systems for trades across the US. No shared leads, no fluff — just an iron-clad digital presence that gets the phone ringing.";

  const heroStats = homeData?.hero?.stats || [
    { label: "Contractors Served", value: "47" },
    { label: "Lead Velocity", value: "High" }
  ];

  const heroBgImage = homeData?.hero?.backgroundImage 
    ? urlFor(homeData.hero.backgroundImage).url() 
    : HERO_IMG;

  const heroVideoUrl = homeData?.hero?.videoUrl;

  return (
    <>
      <SEO
        title="BUILT EXPERT"
        description="High-performance websites and lead systems for electricians and HVAC contractors. Turn local search into booked calls with exclusive leads."
        canonicalPath="/"
      />

      <div
        id="home"
        className="font-body tracking-tight antialiased [letter-spacing:-0.01em] [&_h1]:normal-case [&_h2]:normal-case [&_h3]:normal-case [&_h4]:normal-case [&_h5]:normal-case selection:bg-md3-primary-container selection:text-md3-on-primary-container"
        style={industrialMeshStyle}
      >
        <span id="main-content" className="sr-only" aria-hidden="true" />
        {/* ── Hero ── */}
        {isLoading && !homeData ? (
          <HeroSkeleton />
        ) : (
          <HomeHero 
            headline={heroHeadline}
            subheadline={heroSubheadline}
            stats={heroStats}
            bgImage={heroBgImage}
            videoUrl={heroVideoUrl}
          />
        )}

{/* <section id="trust-ticker" className="overflow-hidden border-t border-[#e5e7eb] bg-white/60 py-6 sm:py-8 backdrop-blur-sm [border-top-width:0.5px]">
          <div className="site-container">
            <div className="mb-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#71717a]">
              <span>Trusted By Fast-Growing Trades</span>
              <span className="opacity-20">|</span>
              <span className="flex items-center gap-2">
                Sites From <Link to="/pricing" className="text-[#1a1a1a] underline underline-offset-4 hover:text-md3-primary">$4,200</Link>
              </span>
              <span className="opacity-20">|</span>
              <span className="flex items-center gap-2">
                Growth From <Link to="/pricing" className="text-[#1a1a1a] underline underline-offset-4 hover:text-md3-primary">$750/mo</Link>
              </span>
            </div>
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
        </section> */}


        {/* ── Who We Help ── */}
        <section className="site-container py-16 sm:py-20 lg:py-24" id="who-we-help">
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {WHO_CARDS.map((card) => (
              <div
                key={card.title}
                role="link"
                tabIndex={0}
                aria-label={`${card.title} — ${card.cta}`}
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-white border border-[#e5e7eb] shadow-sm [border-width:0.5px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-md3-primary transition-all hover:shadow-md"
                onClick={() => navigate(card.linkTo)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    navigate(card.linkTo);
                  }
                }}
              >
                {/* Top Border Bar */}
                <div 
                  className="h-1.5 w-full" 
                  style={{ backgroundColor: INDUSTRIAL.primary || "#006A6A" }} 
                />
                
                <div className="p-8 flex flex-col h-full">
                  <h3 className="mb-4 font-headline text-3xl font-bold tracking-tight" style={{ color: INDUSTRIAL.charcoal }}>
                    {card.title}
                  </h3>

                  {/* Features List replaces the fake badges focus */}

                  <p className="mb-8 text-sm font-light leading-relaxed text-zinc-600">
                    {card.body}
                  </p>

                  {/* Bullet List */}
                  <ul className="mb-8 mt-auto space-y-3">
                    {card.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5 text-xs font-medium text-zinc-700">
                        <div 
                          className="h-1.5 w-1.5 rounded-full" 
                          style={{ backgroundColor: INDUSTRIAL.primary || "#006A6A" }}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-4 border-t border-[#e5e7eb] [border-top-width:0.5px]">
                    <p className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-md3-primary">
                      {card.cta}
                      <ArrowRight className="size-3.5 shrink-0" aria-hidden />
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Why BuiltExpert — unified 2-col positioning ── */}
        <section className="overflow-hidden border-b border-[#e5e7eb] [border-width:0.5px]">
          <div className="site-container px-0">
            <div className="grid lg:grid-cols-[5fr_7fr]">

              {/* Left: dark pull-quote column */}
              <div
                className="flex flex-col justify-between px-8 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20 xl:px-20"
                style={{ backgroundColor: "#0f1010" }}
              >
                <span className="mb-10 block text-[10px] font-bold uppercase tracking-[0.3em] text-md3-primary">
                  Why BuiltExpert
                </span>

                <div>
                  <p className="font-headline text-4xl font-light leading-[1.05] tracking-tight text-white sm:text-5xl xl:text-6xl">
                    Built exclusively<br />
                    for the trades.<br />
                    <span className="font-bold text-md3-primary">Zero exceptions.</span>
                  </p>
                  <div className="mt-8 h-px w-16 bg-zinc-700" />
                  <p className="mt-8 max-w-xs text-sm font-light leading-relaxed text-zinc-400">
                    We don&apos;t serve restaurants, law firms, or e-commerce brands. Every system we&apos;ve built exists for one type of client: contractors.
                  </p>
                </div>

                <div className="mt-12 grid grid-cols-2 gap-6 border-t border-zinc-800 pt-8">
                  <div>
                    <span className="font-headline text-3xl font-black text-white">47+</span>
                    <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-500">Active Contractors</p>
                  </div>
                  <div>
                    <span className="font-headline text-3xl font-black text-white">High</span>
                    <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-500">Avg. Call Growth</p>
                  </div>
                </div>
              </div>

              {/* Right: two stacked message blocks */}
              <div className="divide-y divide-[#e5e7eb] bg-white [divide-width:0.5px]">

                {/* Block 1: Contractor-only focus */}
                <div className="px-8 py-10 sm:px-12 sm:py-14 lg:px-16 lg:py-16 xl:px-20">
                  <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.3em] text-md3-primary">
                    Our Specialisation
                  </span>
                  <h3
                    className="mb-5 font-headline text-2xl font-light tracking-tight sm:text-3xl"
                    style={{ color: INDUSTRIAL.charcoal }}
                  >
                    We Only Work With Contractors
                  </h3>
                  <p className="text-base font-light leading-relaxed" style={{ color: INDUSTRIAL.muted }}>
                    Most agencies will build a site for anyone. We won&apos;t. We work exclusively
                    with contractors because a generalist can&apos;t out-market a specialist — and your
                    competitors deserve every disadvantage we can give them.
                  </p>
                </div>

                {/* Block 2: Metrics that matter */}
                <div className="px-8 py-10 sm:px-12 sm:py-14 lg:px-16 lg:py-16 xl:px-20">
                  <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.3em] text-md3-primary">
                    Our Metrics
                  </span>
                  <h3
                    className="mb-5 font-headline text-2xl font-light tracking-tight sm:text-3xl"
                    style={{ color: INDUSTRIAL.charcoal }}
                  >
                    We Track What Actually Pays Your Bills
                  </h3>
                  <p className="mb-8 text-base font-light leading-relaxed" style={{ color: INDUSTRIAL.muted }}>
                    Impressions don&apos;t pay invoices. We build systems around the three numbers
                    that matter to a contractor&apos;s bottom line.
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {["Estimate Requests", "Booked Service Calls", "Local Search Visibility"].map((metric) => (
                      <span
                        key={metric}
                        className="flex items-center gap-2 rounded-full border border-[#e5e7eb] bg-zinc-50 px-4 py-1.5 text-xs font-semibold text-zinc-700 [border-width:0.5px]"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-md3-primary" />
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Services ── */}
        <section className="site-container py-16 sm:py-20 lg:py-24">
          <div className="mb-16 text-center">
            <h2
              className="font-headline text-3xl font-light tracking-tight md:text-4xl"
              style={{ color: INDUSTRIAL.charcoal }}
            >
              The System We Build for You
            </h2>
            <div className="mx-auto mt-4 h-px w-24 bg-md3-primary" />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {isLoading && !homeData ? (
              Array.from({ length: 4 }).map((_, i) => <CardSkeleton key={i} />)
            ) : (
              SYSTEM_SERVICES.slice(0, 4).map((item) => (
                <div
                  key={item.title}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-[#e5e7eb] bg-white transition-all [border-width:0.5px] hover:border-md3-primary/40 hover:shadow-xl hover:shadow-md3-primary/5"
                >
                  {/* Image Header */}
                  <div className="relative aspect-[16/11] overflow-hidden bg-zinc-100">
                    <img
                      src={item.imgSrc}
                      alt={item.imgAlt}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>

                  <div className="flex flex-1 flex-col p-6 lg:p-8">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="material-symbols-outlined text-md3-primary">
                        {item.icon}
                      </span>
                      <h3
                        className="text-xl font-bold leading-tight transition-colors group-hover:text-md3-primary"
                        style={{ color: INDUSTRIAL.charcoal }}
                      >
                        {item.title}
                      </h3>
                    </div>
                    
                    <p className="mb-8 flex-1 text-sm font-light leading-relaxed text-zinc-600">
                      {item.body}
                    </p>

                    <Link
                      to={item.href}
                      className="inline-flex w-full items-center justify-between border border-[#e5e7eb] bg-white px-5 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-800 transition-all [border-width:0.5px] hover:bg-zinc-50 group-hover:border-md3-primary/30"
                    >
                      Explore Service
                      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>

          {!isLoading && (
            <div className="mt-12 flex justify-center">
              <Button 
                onClick={() => navigate("/services")}
                className="group w-full max-w-xs sm:w-auto"
                variant="primary"
                size="lg"
              >
                <span>View All Services</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          )}
        </section>


        {/* ── Lead Magnet ── */}
        <section className="border-y border-[#e5e7eb] bg-md3-primary py-16 sm:py-20 lg:py-24 text-md3-on-primary [border-width:0.5px]">
          <div className="site-container grid items-center gap-10 lg:gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-5 font-headline text-3xl font-light text-md3-on-primary sm:text-4xl sm:mb-6">
                Find Out Exactly Why Your Phone Isn&apos;t Ringing
              </h2>
              <p className="mb-8 text-lg text-md3-primary-fixed">
                We&apos;ll spend 20 minutes reviewing your site by hand — no automated tools.
                You&apos;ll get a plain-English breakdown of what&apos;s costing you jobs and what we&apos;d fix first.
              </p>
              <ul className="mb-10 space-y-4">
                {[
                  "Where You're Losing Calls Right Now",
                  "Why Your Competitor Is Ranking Above You",
                  "What Those Missed Jobs Are Costing You Per Month",
                ].map((line) => (
                  <li key={line} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-md3-primary-fixed">check_circle</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact?ref=audit"
                className="inline-flex rounded-none bg-white px-8 py-4 font-bold text-md3-primary transition-all hover:bg-md3-primary-fixed-dim"
              >
                Start The $497 Audit
              </Link>
            </div>
            <div className="relative max-w-full overflow-hidden">
              <div className="max-w-full overflow-hidden rounded-2xl bg-md3-on-primary-fixed-variant p-6 shadow-2xl">
                <div className="mb-6 flex items-center gap-2 border-b border-md3-primary-container pb-4">
                  <div className="h-3 w-3 rounded-full bg-md3-error" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>
                <div className="space-y-4">
                  <div className="h-4 w-3/4 rounded bg-md3-primary-container/30" />
                  <div className="h-4 w-1/2 rounded bg-md3-primary-container/30" />
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="flex h-20 flex-col items-center justify-center rounded-xl bg-md3-primary-container/20">
                      <span className="text-xs font-bold text-md3-primary-fixed">SEO Health</span>
                      <span className="font-headline text-2xl font-black text-white">42%</span>
                    </div>
                    <div className="flex h-20 flex-col items-center justify-center rounded-xl bg-md3-primary-container/20">
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
        <section className="site-container py-16 sm:py-20 lg:py-24">
          <div className="mb-20 text-center">
            <h2
              className="font-headline text-3xl font-light tracking-tight md:text-4xl"
              style={{ color: INDUSTRIAL.charcoal }}
            >
              How We Go From &apos;Nobody&apos;s Calling&apos; to &apos;Booked 3 Weeks Out&apos;
            </h2>
            <div className="mx-auto mt-4 h-px w-24 bg-md3-primary" />
          </div>
          <div className="relative grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
            <div className="absolute left-0 top-8 -z-10 hidden h-px w-full md:block bg-[#e5e7eb]" />
            {[
              { n: "1", t: "Audit", timeframe: "Week 1", d: "We score your site, local rankings, and competitor gaps against 47 checkpoints.", deliverable: "47-point site scorecard" },
              { n: "2", t: "Strategy", timeframe: "Week 1", d: "We map the exact jobs you want, then build the custom playbook to get them.", deliverable: "Custom growth roadmap" },
              { n: "3", t: "Build", timeframe: "Weeks 2–5", d: "Your new site, content pages, and CRM integrations — built from scratch.", deliverable: "Full site + integrations" },
              { n: "4", t: "Launch", timeframe: "Week 6", d: "Your site goes live. Call tracking and analytics fire from day one.", deliverable: "Live site + tracking" },
              { n: "5", t: "Optimize", timeframe: "Ongoing", d: "We adjust every month based on what's ringing, what's booking, and what's not.", deliverable: "Monthly results report" },
            ].map((step) => (
              <div key={step.n} className="space-y-3">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#e5e7eb] bg-white font-headline text-xl font-light text-md3-primary shadow-md">
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
              to="/audit"
              className="inline-flex items-center gap-2 rounded-none bg-md3-primary px-8 py-5 text-[11px] font-bold uppercase tracking-[0.25em] text-white transition-all hover:bg-[#1a1a1a]"
            >
              Start The Audit
              <ArrowRight className="size-4" />
            </Link>
            <span className="text-sm font-light" style={{ color: INDUSTRIAL.muted }}>
              $497 · No obligation · Response in 48h
            </span>
          </div>
        </section>

        {/* ── Testimonials — QW-4: moved BEFORE FAQ (was after, most visitors never saw it) ── */}
        <section className="border-t border-[#e5e7eb] bg-white/60 py-16 sm:py-20 lg:py-24 backdrop-blur-sm [border-top-width:0.5px]">
          <div className="site-container">
            <h2
              className="mb-4 text-center font-headline text-3xl font-light tracking-tight md:text-4xl"
              style={{ color: INDUSTRIAL.charcoal }}
            >
              Real Contractors. Real Numbers.
            </h2>
            <div className="mx-auto mb-6 h-px w-24 bg-md3-primary" />
            <p
              className="mb-16 text-center text-lg font-light"
              style={{ color: INDUSTRIAL.muted }}
            >
              These contractors stopped relying on referrals. Here&apos;s what happened next.
            </p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {isLoading && testimonials.length === 0 ? (
                Array.from({ length: 3 }).map((_, i) => <TestimonialSkeleton key={i} />)
              ) : (
                testimonials.slice(0, 3).map((t, idx) => (
                  <div
                    key={t.name || idx}
                    className="group flex flex-col gap-6 rounded-2xl border border-[#e5e7eb] bg-white p-8 shadow-sm transition-all [border-width:0.5px] hover:border-md3-primary/40 hover:shadow-xl hover:shadow-md3-primary/5"
                  >
                    <div className="flex gap-1.5">
                      {Array.from({ length: t.rating || 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="size-3.5 fill-yellow-400 text-yellow-400"
                          aria-hidden
                        />
                      ))}
                    </div>
                    <blockquote 
                      className="flex-1 text-[15px] font-light leading-relaxed italic" 
                      style={{ color: INDUSTRIAL.charcoal }}
                    >
                      &ldquo;{t.quote || t.content}&rdquo;
                    </blockquote>
                    <div className="inline-flex self-start rounded-full bg-md3-primary/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-md3-primary">
                      {t.resultHighlight || t.highlight}
                    </div>
                    <div className="mt-2 border-t border-[#e5e7eb] pt-6 [border-top-width:0.5px]">
                      <p className="font-bold leading-none mb-1" style={{ color: INDUSTRIAL.charcoal }}>{t.name}</p>
                      <p className="text-[13px] font-light leading-none" style={{ color: INDUSTRIAL.muted }}>
                        {t.trade || t.role} · {t.location}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <FAQSection 
          title="Frequently Asked Questions"
          items={faqItems}
        />

        {/* ── Final CTA ── */}
        <section className="site-container pb-20 sm:pb-28 lg:pb-32 pt-6 sm:pt-8">
          <div className="relative w-full overflow-hidden bg-white border border-[#e5e7eb] [border-width:0.5px] p-8 sm:p-10 md:p-16 lg:p-20 text-left">
            <div className="relative z-10 max-w-2xl">
              <h2
                className="mb-8 font-headline text-3xl sm:text-4xl font-light leading-tight tracking-tight md:text-5xl"
                style={{ color: INDUSTRIAL.charcoal }}
              >
                Your competitors are getting{" "}
                <span className="font-bold text-md3-primary">calls that should be yours.</span>
              </h2>
              <p
                className="mb-12 max-w-xl text-lg font-light leading-relaxed"
                style={{ color: INDUSTRIAL.muted }}
              >
                Every week you wait, your competitor is getting calls that should be yours.
                Start the audit and we&apos;ll show you exactly what&apos;s costing you jobs and how fast we can fix it.
              </p>
              <div className="flex flex-wrap gap-8">
                <Link
                  to="/contact"
                  className="rounded-none bg-[#1a1a1a] px-10 py-5 text-[11px] font-bold uppercase tracking-[0.3em] text-white transition-all hover:bg-md3-primary"
                >
                  Start The Audit
                </Link>
                <Link
                  to="/pricing"
                  className="rounded-none border-b border-[#e5e7eb] py-5 text-[11px] font-bold uppercase tracking-[0.3em] text-[#1a1a1a] [border-bottom-width:0.5px] transition-all hover:border-md3-primary hover:text-md3-primary"
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
