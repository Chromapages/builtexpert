import * as React from "react";
import { ArrowDown, ArrowRight, CornerDownRight, Star, CheckCircle2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
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
    title: "HVAC Lead System Audit",
    body: "A manual diagnostic that shows you what is leaking leads, where the bottleneck lives, and what to fix first.",
    imgSrc: "/images/home/service-audit-new.webp",
    imgAlt: "Lead System Audit Preview",
    href: "/audit",
  },
  {
    icon: "web",
    title: "HVAC Lead Generation System",
    body: "A high-conversion site built to turn local traffic into calls, estimates, and booked work.",
    imgSrc: "/images/home/service-websites-new.webp",
    imgAlt: "BuiltExpert Lead Generation System Preview",
    href: "/services/hvac-lead-generation-system",
  },
  {
    icon: "article",
    title: "Landing Pages",
    body: "Focused campaign pages for one job, one audience, and one conversion goal.",
    imgSrc: "/images/home/service-landing-new.webp",
    imgAlt: "Service-Specific SEO Rankings Preview",
    href: "/services/landing-pages",
  },
  {
    icon: "location_on",
    title: "Local SEO",
    body: "We build the visibility to help the right customers find you in the right city at the right time.",
    imgSrc: "/images/home/service-local-seo-new.webp",
    imgAlt: "Local Map Pack #1 Ranking Preview",
    href: "/services/local-seo",
  },
  {
    icon: "flash_on",
    title: "Growth Support",
    body: "Ongoing optimization, tracking, and support so the system keeps getting better after launch.",
    imgSrc: "/images/home/service-growth-new.webp",
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
const TESTIMONIALS: any[] = [
  {
    name: "James M.",
    trade: "Owner, Apex HVAC",
    location: "Dallas, TX",
    rating: 5,
    resultHighlight: "+82% more booked calls",
    quote: "The audit was a turning point. We weren't just missing calls; we were invisible in our best service areas. The 47-point report showed us exactly why.",
  },
  {
    name: "Sarah L.",
    trade: "Ops Manager, Coastal Air",
    location: "Sarasota, FL",
    rating: 5,
    resultHighlight: "ServiceTitan Lead-Flow Sync",
    quote: "Finally, a team that understands how ServiceTitan works. Our leads now flow directly into our board, and the conversion rate on the new site is double our old one.",
  },
  {
    name: "Rick D.",
    trade: "Founder, Peak Performance",
    location: "Denver, CO",
    rating: 5,
    resultHighlight: "Booked 14 Days Out",
    quote: "BuiltExpert actually engineered a system for us. Within 3 weeks of launch, we were booked out 14 days. Best investment we've made this year.",
  },
];

const PROCESS_STEPS = [
  {
    n: "01",
    t: "Audit",
    timeframe: "Week 1",
    d: "A manual 47-point diagnostic of your digital presence. We score your site, local rankings, and competitor gaps to find where you're leaking leads.",
    deliverable: "47-point site scorecard",
    docCode: "AUD-47",
    tagline: "DIAGNOSTIC PHASE",
  },
  {
    n: "02",
    t: "Strategy",
    timeframe: "Week 1",
    d: "We map the exact high-intent jobs you want (HVAC, Electrical, Roofing), then build a custom keyword playbook to capture them exclusive to you.",
    deliverable: "Custom growth roadmap",
    docCode: "STRAT-01",
    tagline: "MARKET MAPPING",
  },
  {
    n: "03",
    t: "Build",
    timeframe: "Weeks 2-5",
    d: "Your high-conversion site, content funnels, and CRM integrations - engineered from the ground up for speed, trust, and conversion.",
    deliverable: "Full site + integrations",
    docCode: "PROD-X",
    tagline: "SYSTEM ENGINEERING",
  },
  {
    n: "04",
    t: "Launch",
    timeframe: "Week 6",
    d: "The switch is flipped. Call tracking, attribution analytics, and lead routing fire from day one. You start seeing which phone calls came from which ads.",
    deliverable: "Live system + tracking",
    docCode: "REL-01",
    tagline: "SYSTEM DEPLOYMENT",
  },
  {
    n: "05",
    t: "Optimize",
    timeframe: "Ongoing",
    d: "We don't just launch and leave. We adjust every month based on what's ringing, what's booking, and how to lower your cost-per-lead.",
    deliverable: "Monthly delta report",
    docCode: "OPT-MTH",
    tagline: "YIELD OPTIMIZATION",
  },
];

const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "How are you different from HomeAdvisor or Angie's List?",
    a: "Those platforms sell the same lead to 4 or 5 competitors in your area and start a race to the bottom on price. We build a proprietary lead system exclusive to you. Every call we generate belongs to you - we never resell it.",
  },
  {
    q: "What if I've been burned by a marketing agency before?",
    a: "It's the first thing most contractors tell us. Generic agencies lock you into 12-month contracts and deliver reports instead of results. We don't do long-term contracts. We earn your business every month through booked jobs, not impressions.",
  },
  {
    q: "How long before I start getting calls?",
    a: "The build takes 4-6 weeks. Most clients start seeing organic inbound within 60 days. If you need calls in week one, we can layer in local service ads to get the phone moving while the SEO builds.",
  },
  {
    q: "Do you work with ServiceTitan or Housecall Pro?",
    a: "Yes - both. Every lead, form fill, and missed call routes directly into your dispatch board. No manual data entry, no leads falling through the cracks.",
  },
  {
    q: "What does it cost?",
    a: "The audit is $297. HVAC Lead Generation Systems start at $4,200, landing pages are scoped per campaign, and ongoing growth support starts at $750/mo. See the full breakdown on our Pricing page.",
  },
];

const HOME_DESCRIPTION =
  "BuiltExpert: High-performance lead systems and conversion engines for HVAC contractors. Turn local search into booked calls with exclusive leads.";

export function Home() {
  const [homeData, setHomeData] = React.useState<any>(null);
  const [testimonials, setTestimonials] = React.useState<any[]>(TESTIMONIALS);
  const [faqItems, setFaqItems] = React.useState(FAQ_ITEMS.map((item) => ({ question: item.q, answer: item.a, category: "general" })));
  const [isLoading, setIsLoading] = React.useState(true);
  const [activeStep, setActiveStep] = React.useState(0);
  const navigate = useNavigate();
  const stepRefs = React.useRef<(HTMLDivElement | null)[]>([]);

  React.useEffect(() => {
    // Standard observer for highlighting the sticky left side
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-step-index"));
            setActiveStep(index);
          }
        });
      },
      { 
        threshold: 0.5, 
        rootMargin: "-20% 0% -40% 0%" // Highlighting as cards pass the middle
      }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

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
    "We build high-converting websites and local SEO systems for trades across the US. No shared leads, no fluff - just an iron-clad digital presence that gets the phone ringing.";

  const heroStats = homeData?.hero?.stats || [
    { label: "Contractors Served", value: "47" },
    { label: "Lead Velocity", value: "High" }
  ];

  const heroBgImage = homeData?.hero?.backgroundImage 
    ? urlFor(homeData.hero.backgroundImage).url() 
    : HERO_IMG;

  const heroVideoUrl = homeData?.hero?.videoUrl || "/assets/hero-vid.mp4";

  return (
    <>
      <SEO
        title="HVAC Lead Generation Systems | BuiltExpert"
        description="High-performance lead generation systems for HVAC contractors. Turn local search into booked calls with exclusive, trade-specific systems designed for high-intent results."
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
        <section className="site-container py-24 sm:py-32" id="who-we-help">
          <div className="mb-20 max-w-3xl">
            <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.3em] text-md3-primary">
              Targeted Expertise
            </span>
            <h2
              className="font-headline text-4xl font-light leading-[1.1] tracking-tight sm:text-5xl md:text-6xl"
              style={{ color: INDUSTRIAL.charcoal }}
            >
              Marketing Systems Built for <br className="hidden lg:block"/>
              <span className="font-bold text-md3-primary">Fast-Growing Trades.</span>
            </h2>
            <p className="mt-8 text-lg font-light leading-relaxed text-zinc-600">
              We don&apos;t work with generalists. We work with specialists who need a reliable, exclusive lead engine to scale their local market.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {WHO_CARDS.map((card) => (
              <div
                key={card.title}
                role="link"
                tabIndex={0}
                aria-label={`${card.title} - ${card.cta}`}
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
                    <span className="font-headline text-3xl font-black text-white">92%</span>
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
                    with contractors because a generalist can&apos;t out-market a specialist - and your
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
        {/* ── Services: Authority Layer Header ── */}
        <section className="site-container py-24 sm:py-32" id="services">
          <div className="mb-20 ml-auto max-w-3xl text-right">
            <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.3em] text-md3-primary">
              The Core System
            </span>
            <h2
              className="font-headline text-4xl font-light leading-[1.1] tracking-tight sm:text-5xl md:text-6xl"
              style={{ color: INDUSTRIAL.charcoal }}
            >
              The Engineered System <br className="hidden lg:block"/>
              <span className="font-bold text-md3-primary">Built for Revenue.</span>
            </h2>
            <p className="mt-8 text-lg font-light leading-relaxed text-zinc-600">
              We don&apos;t just build websites; we engineer conversion engines. Every component of our system is designed to turn cold traffic into high-intent estimates.
            </p>
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
          <div className="site-container">
            <div className="mx-auto mb-16 max-w-5xl text-center">
              <h2 className="mb-6 font-headline text-3xl font-light text-md3-on-primary sm:text-4xl md:text-5xl">
                Find Out Exactly Why Your Phone Isn&apos;t Ringing
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-md3-primary-fixed">
                We&apos;ll spend 20 minutes reviewing your site by hand - no automated tools.
                You&apos;ll get a plain-English breakdown of what&apos;s costing you jobs and what we&apos;d fix first.
              </p>
            </div>
            
            <div className="grid items-center gap-10 lg:gap-16 lg:grid-cols-2">
              <div>
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
                  to="/audit"
                  className="inline-flex rounded-none bg-white px-10 py-5 text-sm font-bold text-md3-primary transition-all hover:bg-md3-primary-fixed-dim"
                >
                  Start The $297 Audit
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
          </div>
        </section>

        {/* ── Process: Sticky Narrative Redesign ── */}
        <section 
          className="relative min-h-screen border-y border-[#e5e7eb] bg-zinc-50 py-24 sm:py-32 [border-width:0.5px]" 
          id="process"
        >
          {/* Section Header */}
          <div className="site-container mb-24 lg:mb-32">
            <div className="max-w-3xl">
              <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.3em] text-md3-primary">
                The Methodology
              </span>
              <h2
                className="font-headline text-4xl font-light leading-[1.1] tracking-tight sm:text-5xl md:text-6xl"
                style={{ color: INDUSTRIAL.charcoal }}
              >
                How We Go From &apos;Nobody&apos;s Calling&apos; to <br className="hidden lg:block"/>
                <span className="font-bold text-md3-primary">Booked 3 Weeks Out</span>
              </h2>
            </div>
          </div>

          <div className="site-container grid gap-12 lg:grid-cols-[5fr_7fr] lg:gap-24">
            
            {/* Left Column: Sticky Context (Desktop Only) */}
            <div className="hidden lg:block">
              <div className="sticky top-40">
                <div className="relative">
                  {/* Vertical Progress Line Background */}
                  <div className="absolute left-1.5 top-0 h-[400px] w-px bg-zinc-200" />
                  
                  {/* Animated Progress Line — tracks scroll progress through the cards */}
                  <div 
                    className="absolute left-1.5 top-0 w-px bg-md3-primary transition-all duration-700 ease-out" 
                    style={{ height: `${((activeStep + 1) / PROCESS_STEPS.length) * 400}px` }}
                  />

                  <div className="space-y-12 pl-12">
                    {PROCESS_STEPS.map((step, i) => (
                      <div 
                        key={step.n} 
                        className={cn(
                          "transition-all duration-500",
                          activeStep === i 
                            ? "translate-x-2 opacity-100" 
                            : "opacity-20 blur-[1px]"
                        )}
                      >
                        <span className="font-headline text-8xl font-black leading-none tracking-tighter" style={{ color: activeStep === i ? INDUSTRIAL.primary : '#e5e7eb' }}>
                          {step.n}
                        </span>
                        <div className="mt-2">
                          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Phase {step.n}</p>
                          <h4 className="font-headline text-2xl font-bold tracking-tight" style={{ color: INDUSTRIAL.charcoal }}>{step.t}</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Scrollable Detail Cards */}
            <div className="space-y-12 sm:space-y-24 lg:space-y-48">
              {PROCESS_STEPS.map((step, i) => (
                <div
                  key={step.n}
                  ref={(el) => { stepRefs.current[i] = el; }}
                  data-step-index={i}
                  className="group relative"
                >
                  {/* Mobile Mobile Step Number */}
                  <div className="mb-6 flex items-center gap-4 lg:hidden">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-md3-primary font-headline text-lg font-bold text-white">
                      {i + 1}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-md3-primary">
                      Phase {step.n}
                    </span>
                  </div>

                  {/* The Narrative Card */}
                  <div 
                    className="relative overflow-hidden rounded-3xl border border-[#e5e7eb] bg-white p-8 sm:p-12 shadow-sm transition-all [border-width:0.5px] group-hover:border-md3-primary/30 group-hover:shadow-xl group-hover:shadow-md3-primary/5"
                    style={{ ...industrialMeshStyle, backgroundImage: 'none' }} // Blueprint detail
                  >
                    {/* Industrial Blueprint Background (Subtle) */}
                    <div className="pointer-events-none absolute inset-0 opacity-[0.03] grayscale transition-opacity group-hover:opacity-[0.05]">
                      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                      </svg>
                    </div>

                    <div className="relative z-10">
                      <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
                        <span className="inline-flex rounded-full border border-md3-primary/20 bg-md3-primary/5 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-md3-primary">
                          {step.tagline}
                        </span>
                        <div className="flex items-center gap-2 font-mono text-[10px] font-bold text-zinc-400">
                          <span className="h-1.5 w-1.5 rounded-full bg-zinc-300" />
                          SPEC_{step.docCode}
                        </div>
                      </div>

                      <h3 className="mb-6 font-headline text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: INDUSTRIAL.charcoal }}>
                        {step.t}
                      </h3>
                      
                      <p className="mb-10 text-lg font-light leading-relaxed text-zinc-600">
                        {step.d}
                      </p>

                      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between border-t border-zinc-100 pt-8">
                        <div>
                          <p className="mb-1 text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-400">Critical Deliverable</p>
                          <div className="flex items-center gap-2">
                            <CornerDownRight className="size-4 text-md3-primary" />
                            <span className="text-sm font-semibold" style={{ color: INDUSTRIAL.charcoal }}>{step.deliverable}</span>
                          </div>
                        </div>
                        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400">
                          <span className="material-symbols-outlined text-[18px]">schedule</span>
                          {step.timeframe}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Condensed High-Impact Decision Module */}
          <div className="site-container mt-20 lg:mt-32">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative isolate overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900 px-8 py-12 text-center text-white sm:py-16 lg:py-20 shadow-2xl"
            >
              {/* Background Layers */}
              <div className="absolute inset-0 -z-30">
                <motion.img 
                  src="/images/cta-bg.png"
                  alt="Industrial Construction"
                  className="h-full w-full object-cover opacity-20 grayscale transition-all duration-700"
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-zinc-950/60" />
              </div>

              {/* Animated Blueprint Mesh Background */}
              <div className="absolute inset-0 -z-10 opacity-[0.08] grayscale">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="cta-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                      <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <motion.rect 
                    width="100%" height="150%" fill="url(#cta-grid)" 
                    animate={{ y: [0, -60] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  />
                </svg>
              </div>

              {/* Glassmorphic Overlays */}
              <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-md3-primary/10 blur-[120px] pointer-events-none" />
              <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-white/5 blur-[100px] pointer-events-none" />

              <div className="relative z-10 mx-auto max-w-3xl">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mb-6 inline-flex items-center gap-2 rounded-full border border-md3-primary/30 bg-md3-primary/10 px-5 py-1.5 text-[9px] font-black uppercase tracking-[0.3em] text-md3-primary-fixed shadow-inner"
                >
                  <span className="h-1 w-1 rounded-full bg-md3-primary animate-pulse" />
                  High-Intent Diagnostic
                </motion.div>

                <h3 className="mb-6 font-headline text-3xl font-black leading-[1.1] tracking-tighter text-zinc-100 sm:text-4xl md:text-5xl">
                  Ready to start <br className="hidden sm:block" />
                  <span className="bg-gradient-to-r from-md3-primary to-[#4FD1C5] bg-clip-text text-transparent">Phase 01?</span>
                </h3>
                
                <p className="mx-auto mb-10 max-w-lg text-base font-light leading-relaxed text-zinc-300 opacity-90">
                  Every week you wait, your competitor is getting calls that should be yours. 
                  Start the audit and we&apos;ll build your 47-point project blueprint within 48 hours.
                </p>

                <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <Link
                      to="/audit"
                      className="group relative inline-flex items-center gap-4 overflow-hidden rounded-full bg-white px-8 py-5 text-[10px] font-black uppercase tracking-[0.25em] text-zinc-900 shadow-2xl transition-all hover:bg-zinc-100"
                    >
                      <span className="relative z-10">Claim Your Audit</span>
                      <ArrowRight className="relative z-10 size-3.5 transition-transform group-hover:translate-x-1" />
                      
                      {/* Magnetic Inner Glow */}
                      <div className="absolute inset-0 -z-10 translate-y-full bg-zinc-100/50 blur-xl transition-transform group-hover:translate-y-0" />
                    </Link>
                  </motion.div>

                  <div className="text-left">
                    <p className="bg-gradient-to-r from-white to-white/50 bg-clip-text text-lg font-bold text-transparent">$297 One-Time</p>
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-400">3-Day Delivery | No Retainer</p>
                  </div>
                </div>

                <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 grayscale opacity-30">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="size-3.5 text-md3-primary" />
                    <span className="text-[9px] font-bold uppercase tracking-wider">Site Health Score</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="size-3.5 text-md3-primary" />
                    <span className="text-[9px] font-bold uppercase tracking-wider">Gap Analysis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="size-3.5 text-md3-primary" />
                    <span className="text-[9px] font-bold uppercase tracking-wider">48h Blueprint</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Testimonials: Authority Layer Redesign ── */}
        <section className="bg-zinc-50 py-24 sm:py-32 lg:py-40">
          <div className="site-container">
            <div className="mb-20 ml-auto max-w-3xl text-right">
              <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.3em] text-md3-primary">
                The Result Proof
              </span>
              <h2
                className="font-headline text-4xl font-light leading-[1.1] tracking-tight sm:text-5xl md:text-6xl"
                style={{ color: INDUSTRIAL.charcoal }}
              >
                Real Contractors.<br />
                <span className="font-bold text-md3-primary">Real Economic Growth.</span>
              </h2>
              <p className="mt-8 text-lg font-light leading-relaxed text-zinc-600">
                Our systems are engineered for one goal: booked jobs. These contractors stopped chasing leads and started owning their markets.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {isLoading && testimonials.length === 0 ? (
                Array.from({ length: 3 }).map((_, i) => <TestimonialSkeleton key={i} />)
              ) : (
                testimonials.slice(0, 3).map((t, idx) => (
                  <motion.div
                    key={t.name || idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="group relative flex flex-col items-start bg-white p-10 transition-all duration-300 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.04)]"
                  >
                    {/* Technical Ref Code */}
                    <div className="mb-8 flex w-full items-center justify-between border-b border-zinc-50 pb-4">
                      <span className="font-mono text-[9px] font-bold tracking-widest text-zinc-300 uppercase">REP_CODE: SPEC_CASE_{2024 + idx}</span>
                      <div className="flex gap-1">
                        {Array.from({ length: t.rating || 5 }).map((_, i) => (
                          <Star key={i} className="size-2.5 fill-md3-primary text-md3-primary" />
                        ))}
                      </div>
                    </div>

                    {/* Result-First Headline */}
                    <h3 className="mb-6 font-headline text-3xl font-black tracking-tighter text-zinc-900 group-hover:text-md3-primary transition-colors">
                      {t.resultHighlight || t.highlight || "Verified Growth"}
                    </h3>

                    <blockquote 
                      className="mb-8 flex-1 text-base font-light leading-relaxed text-zinc-600"
                    >
                      &ldquo;{t.quote || t.content}&rdquo;
                    </blockquote>

                    <div className="mt-auto w-full pt-8">
                      <div className="flex items-center gap-4">
                        {/* Placeholder Avatar if needed, or structured name */}
                        <div className="flex flex-col">
                          <p className="font-bold leading-tight text-zinc-900">{t.name}</p>
                          <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                            {t.trade || t.role} &middot; {t.location}
                          </p>
                        </div>
                      </div>
                      
                      {/* Industrial Detail */}
                      <div className="mt-6 flex items-center gap-2">
                        <div className="h-px flex-1 bg-zinc-100" />
                        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-md3-primary">Verified System Result</span>
                      </div>
                    </div>
                  </motion.div>
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
            {/* Background Layers */}
            <div className="absolute inset-0 -z-0">
              <motion.img 
                src="/images/final-cta-bg.png"
                alt="Architectural Studio"
                className="h-full w-full object-cover opacity-40 grayscale transition-all duration-700"
                initial={{ scale: 1.05 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
              />
              <div className="absolute inset-0 bg-white/30" />
            </div>

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
                  to="/audit"
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
            {/* Architectural Grid Details */}
            <div className="pointer-events-none absolute bottom-0 right-0 top-0 hidden w-1/2 select-none overflow-hidden opacity-[0.05] lg:block">
              <svg
                className="h-full w-full scale-150 text-md3-primary"
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
