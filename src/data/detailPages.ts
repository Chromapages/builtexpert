export interface FAQEntry {
  question: string;
  answer: string;
  category?: string;
}

export interface PricingDetails {
  setup: string;
  monthly: string;
  note: string;
  inclusions: string[];
}

export interface ServiceDetailContent {
  slug: string;
  title: string;
  badge: string;
  summary: string;
  intro: string;
  problemSolved: string;
  whoItsFor: string[];
  whoItsNotFor: string[];
  deliverables: string[];
  outcomes: string[];
  nicheFit: string[];
  pricing: PricingDetails;
  proofPoints: string[];
  faq: FAQEntry[];
  ctaLabel: string;
  ctaHref: string;
  whatHappensNext: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
}

export interface TradeDetailContent {
  slug: string;
  title: string;
  badge: string;
  summary: string;
  intro: string;
  painPoints: string[];
  proofPoints: string[];
  serviceAngles: string[];
  audienceFit: string[];
  problemSolved: string;
  whoItsNotFor: string[];
  whatHappensNext: string;
  pricing: PricingDetails;
  faq: FAQEntry[];
  ctaLabel: string;
  ctaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
}

const DEFAULT_PRICING: PricingDetails = {
  setup: "From $4,200",
  monthly: "From $750/mo",
  note: "Best for contractors who want a real sales system, not a brochure site.",
  inclusions: [
    "Strategy and structure tailored to the service line",
    "Conversion-focused design and copy",
    "Tracking, analytics, and follow-up alignment",
  ],
};

const SERVICE_FAQS: FAQEntry[] = [
  {
    question: "How long does a service page project take?",
    answer:
      "Most service builds take 2 to 4 weeks once the strategy is approved. Larger multi-page builds can run longer if we are migrating content or adding integrations.",
    category: "timeline",
  },
  {
    question: "Do you write the copy?",
    answer:
      "Yes. We write the page around the service, the buyer's intent, and the action we want them to take. If you already have strong technical details, we will fold them in.",
    category: "process",
  },
  {
    question: "Can this page support paid traffic too?",
    answer:
      "Absolutely. These pages are built to work for organic search and paid campaigns. The layout focuses on clarity, trust, and a single conversion path.",
    category: "performance",
  },
];

const TRADE_FAQS: FAQEntry[] = [
  {
    question: "Do you build pages for a single city or a whole region?",
    answer:
      "We can do both. Many trade pages start with one primary service area and then expand into related city and suburb pages as the strategy grows.",
    category: "service-area",
  },
  {
    question: "What if we already have testimonials and case studies?",
    answer:
      "Great. We can use them directly in the template so the page feels grounded in real work instead of generic promises.",
    category: "proof",
  },
  {
    question: "Can these pages be used as a niche hub?",
    answer:
      "Yes. They work well as a trade-specific hub page, a paid-traffic landing page, or the primary SEO page for that niche.",
    category: "strategy",
  },
];

export const SERVICE_DETAILS: Record<string, ServiceDetailContent> = {
  "hvac-lead-generation-system": {
    slug: "hvac-lead-generation-system",
    title: "HVAC Lead Generation System",
    badge: "Core Build",
    summary:
      "A high-conversion sales engine built to turn local HVAC traffic into calls, estimates, and booked replacement jobs.",
    intro:
      "This is your primary growth engine. We shape the structure around how HVAC customers actually hire: fast answers on emergency service, proof of replacement quality, and a conversion path that feels easy to trust.",
    problemSolved: "Generic contractor sites look like brochures. We build systems that solve the trust gap and the conversion bottleneck.",
    whoItsFor: [
      "Contractors with an outdated site that is costing them jobs",
      "Teams that need a stronger first impression before the call",
      "Businesses ready to turn the website into a sales asset",
    ],
    whoItsNotFor: [
      "Solopreneurs looking for a $500 Wix site",
      "Lowest-bidder projects where quality is a secondary concern",
      "Businesses without a clear service offering or service area",
    ],
    deliverables: [
      "Homepage, service pages, and trust sections tailored to your offer",
      "Conversion-focused CTA placement and lead capture flow",
      "Mobile-first layout, local proof, and fast-loading interactions",
      "Launch-ready SEO structure for future growth",
    ],
    outcomes: [
      "Clearer buyer trust in the first 10 seconds",
      "More qualified calls from the same traffic",
      "A site you can build future campaigns on",
    ],
    nicheFit: [
      "Ideal when your current site looks generic or dated",
      "Best for teams that want a stronger brand presence",
      "Works well when lead quality matters more than volume",
    ],
    pricing: DEFAULT_PRICING,
    proofPoints: [
      "Contractor-first structure, not a generic template",
      "Fast handoff from interest to booked conversation",
      "Designed around the buying behavior of trade customers",
    ],
    faq: SERVICE_FAQS,
    ctaLabel: "Book A Growth Call",
    ctaHref: "/contact",
    whatHappensNext: "15-min discovery call -> System Roadmap -> Core Build Kickoff.",
    secondaryCtaLabel: "See Pricing",
    secondaryCtaHref: "/pricing",
  },
  "landing-pages": {
    slug: "landing-pages",
    title: "Landing Pages Built For A Single Job To Do",
    badge: "Campaign Ready",
    summary:
      "Focused landing pages for paid traffic, seasonal offers, and high-intent service campaigns.",
    intro:
      "Landing pages work when the message is narrow. We cut out the noise, keep the page tight, and give paid traffic a clear next step that is easy to act on.",
    problemSolved: "Paid ads often point to generic homepages, wasting 50-70% of clicks. We fix the message-match and stop the ad-spend bleed.",
    whoItsFor: [
      "Contractors running Google Ads or local service ads",
      "Teams promoting seasonal or emergency offers",
      "Businesses that need a campaign page with a sharper conversion path",
    ],
    whoItsNotFor: [
      "Contractors without an active advertising budget",
      "Teams looking for a full website replacement",
      "Businesses with long, complex multi-step buying cycles",
    ],
    deliverables: [
      "Offer-first page structure with one conversion goal",
      "Above-the-fold value framing and proof blocks",
      "Form, phone, and tracking setup",
      "Optional thank-you flow for lead qualification",
    ],
    outcomes: [
      "Lower friction from ad click to inquiry",
      "Clearer match between the traffic source and the page",
      "Better performance on paid campaigns and outreach links",
    ],
    nicheFit: [
      "Best when you are promoting one job type or one seasonal offer",
      "Useful for direct response campaigns that need precision",
      "Ideal for lead-gen pages that should not compete with the main site",
    ],
    pricing: {
      ...DEFAULT_PRICING,
      note: "Best for focused campaigns, seasonal pushes, and paid traffic.",
    },
    proofPoints: [
      "Single-message page architecture",
      "Conversion design that reduces decision fatigue",
      "Aligned to the source campaign, not a generic homepage",
    ],
    faq: SERVICE_FAQS,
    ctaLabel: "Plan A Campaign",
    ctaHref: "/contact?service=landing-pages",
    whatHappensNext: "Strategy session -> Ad Group alignment -> Page launch in 10 days.",
    secondaryCtaLabel: "Audit My Funnel",
    secondaryCtaHref: "/audit",
  },
  "local-seo": {
    slug: "local-seo",
    title: "Local SEO That Wins Maps, Pages, and Calls",
    badge: "Visibility System",
    summary:
      "A local search strategy built to make the right service pages show up when the job is urgent.",
    intro:
      "Local SEO should do more than move a ranking. It should help the right customer find the right page, believe they found the right team, and contact you before the competitor does.",
    problemSolved: "You 'own' your home city but are invisible 10 miles away. We build authority in your actual service area, not just your office address.",
    whoItsFor: [
      "Contractors competing in crowded local search results",
      "Companies with service areas they want to expand",
      "Teams that need better visibility for high-value services",
    ],
    whoItsNotFor: [
      "National brands without local storefronts or specific city hubs",
      "Businesses looking for 'quick fix' overnight rankings",
      "Contractors who already dominate their entire 50-mile radius",
    ],
    deliverables: [
      "Keyword and service-area map built around real buying intent",
      "On-page optimization for service and location pages",
      "Internal linking and content guidance for expansion",
      "Tracking hooks for calls, form fills, and leads",
    ],
    outcomes: [
      "More discoverability in local search and map results",
      "Better alignment between search intent and page content",
      "A cleaner path for future city-page growth",
    ],
    nicheFit: [
      "Best for businesses that already have a good offer but weak visibility",
      "Useful when maps, service pages, and content are under-optimized",
      "Strong fit for contractors with multiple target cities",
    ],
    pricing: {
      ...DEFAULT_PRICING,
      note: "Best when the website already exists and visibility is the gap.",
    },
    proofPoints: [
      "Built around service intent, not vanity rankings",
      "Designed for contractor search behavior",
      "Supports map pack, service pages, and future expansion",
    ],
    faq: SERVICE_FAQS,
    ctaLabel: "Start With An Audit",
    ctaHref: "/audit",
    whatHappensNext: "Visibility gap analysis -> GBP optimization -> Targeted city page rollout.",
    secondaryCtaLabel: "View Services",
    secondaryCtaHref: "/services",
  },
  "lead-system-audit": {
    slug: "lead-system-audit",
    title: "HVAC Lead System Audit",
    badge: "Entry Offer",
    summary:
      "A diagnostic review of the site, funnel, and follow-up flow so you know what to fix first.",
    intro:
      "Before you rebuild anything, we identify the real bottleneck. Sometimes the site is the issue. Sometimes it is the follow-up. Often it is both. The audit makes that visible.",
    problemSolved: "You're spending on ads or SEO but can't tell which part of the chain is broken. We find the 'Lead Leaks' with a manual, 47-point diagnostic.",
    whoItsFor: [
      "Teams that want clarity before they invest in a rebuild",
      "Businesses that suspect the site is underperforming",
      "Contractors who need a practical first step",
    ],
    whoItsNotFor: [
      "People looking for a free automated SEO report",
      "Business owners who aren't ready to invest based on findings",
      "Teams without an existing digital presence to audit",
    ],
    deliverables: [
      "Manual review of the website and conversion flow",
      "Priority list of the highest-impact fixes",
      "Plain-English action plan you can implement",
      "Optional next-step roadmap for growth",
    ],
    outcomes: [
      "You know what is broken and what matters most",
      "The next investment becomes easier to justify",
      "You avoid spending on the wrong fix first",
    ],
    nicheFit: [
      "Best for teams who want low-risk clarity",
      "Useful before a redesign or retainer conversation",
      "Good fit when lead quality is inconsistent",
    ],
    pricing: {
      setup: "$297",
      monthly: "Not required",
      note: "A focused diagnostic, not a full build engagement.",
      inclusions: [
        "Manual review",
        "Action plan",
        "Priority recommendations",
      ],
    },
    proofPoints: [
      "Diagnostic first, implementation second",
      "Built to reveal the actual bottleneck",
      "Easy next step before a bigger decision",
    ],
    faq: SERVICE_FAQS,
    ctaLabel: "Start The Audit",
    ctaHref: "/audit",
    whatHappensNext: "Secure payment -> 48-hour manual teardown -> Video audit review call.",
    secondaryCtaLabel: "Book A Call",
    secondaryCtaHref: "/contact?ref=audit",
  },
  "growth-support": {
    slug: "growth-support",
    title: "Ongoing Growth Support For Teams That Want Momentum",
    badge: "Retainer",
    summary:
      "Ongoing support for contractors who want a website that keeps improving instead of going stale.",
    intro:
      "Launch is not the finish line. If you want the site to keep earning, we keep iterating on service pages, content, calls-to-action, and tracking so the system keeps compounding.",
    problemSolved: "Websites often die the day they launch. We solve the 'launch and forget' syndrome by continuously tuning your system for peak lead generation.",
    whoItsFor: [
      "Teams that already have a good base but want more volume",
      "Contractors planning content and service-area expansion",
      "Businesses that need regular optimization and reporting",
    ],
    whoItsNotFor: [
      "One-off project seekers who don't want a long-term partner",
      "Teams with zero leads who need a full foundational rebuild first",
      "Businesses that don't value data-driven iteration",
    ],
    deliverables: [
      "Monthly improvements to service and location pages",
      "Performance review and conversion tuning",
      "Content guidance for new opportunities",
      "Ongoing tracking and support",
    ],
    outcomes: [
      "A site that keeps improving month after month",
      "Clearer reporting on what is producing leads",
      "More room to grow without rebuilding from scratch",
    ],
    nicheFit: [
      "Best after launch, when the foundation is already in place",
      "Useful for teams that want a long-term partner",
      "Strong fit for contractors scaling into more markets",
    ],
    pricing: {
      setup: "Included in strategy",
      monthly: "From $750/mo",
      note: "Built for ongoing optimization, reporting, and support.",
      inclusions: [
        "Monthly optimization",
        "Tracking and reporting",
        "Content and conversion support",
      ],
    },
    proofPoints: [
      "Designed for steady compounding gains",
      "Keeps the site aligned with current goals",
      "Helps a strong launch keep producing",
    ],
    faq: SERVICE_FAQS,
    ctaLabel: "Talk About Growth",
    ctaHref: "/contact",
    whatHappensNext: "Performance baseline -> Content prioritization -> Monthly optimization cycles.",
    secondaryCtaLabel: "Compare Pricing",
    secondaryCtaHref: "/pricing",
  },
};

export const TRADE_DETAILS: Record<string, TradeDetailContent> = {
  electricians: {
    slug: "electricians",
    title: "Marketing For Electricians Who Want Better Calls",
    badge: "Trade Focus",
    summary:
      "BuiltExpert helps electricians win trust faster, rank for the right jobs, and turn local search into booked work.",
    intro:
      "Electrical customers usually have a real problem and very little patience. We build around that urgency with clearer service pages, stronger proof, and a route to the right estimate request.",
    painPoints: [
      "Generic sites that do not explain the work clearly",
      "Low trust when the job is high-value or safety-critical",
      "Missed opportunities on panel upgrades, rewires, and service calls",
    ],
    proofPoints: [
      "Designed for urgency and trust",
      "Built around service types that create margin",
      "Helpful for both residential and commercial electricians",
    ],
    serviceAngles: [
      "Service pages for panel upgrades, rewires, and troubleshooting",
      "Local SEO for high-intent electrician searches",
      "Call-focused routing and conversion design",
    ],
    audienceFit: [
      "Residential electricians",
      "Commercial electrical teams",
      "Panel upgrade specialists",
    ],
    problemSolved: "Urgent electrical needs often drop off because of slow response or unclear trust. We fix the trust-gap so they call you first.",
    whoItsNotFor: [
      "Industrial teams focusing solely on factory infrastructure",
      "Low-voltage-only contractors (data/telecom)",
    ],
    whatHappensNext: "Discovery call -> Local footprint audit -> Trade-specific build plan.",
    pricing: DEFAULT_PRICING,
    faq: TRADE_FAQS,
    ctaLabel: "See Electrician Strategy",
    ctaHref: "/services/contractor-websites",
    secondaryCtaLabel: "Start With An Audit",
    secondaryCtaHref: "/audit",
  },
  "hvac-contractors": {
    slug: "hvac-contractors",
    title: "HVAC Lead Generation Systems",
    badge: "Trade Focus",
    summary:
      "We help HVAC businesses win emergency repair calls, replacement leads, and seasonal demand with a better digital system.",
    intro:
      "HVAC buyers are often stressed, seasonal, and ready to move fast. The page has to answer the right question immediately and make the next step feel easy.",
    painPoints: [
      "Emergency calls going to whoever shows up first on the page",
      "Seasonal traffic spikes with no dedicated landing pages",
      "Poor service-area visibility for repairs and replacement work",
    ],
    proofPoints: [
      "Built for urgency, speed, and mobile use",
      "Clear separation between repair and replacement intent",
      "Designed to support dispatch and follow-up workflows",
    ],
    serviceAngles: [
      "HVAC repair and replacement pages",
      "Seasonal campaign landing pages",
      "Financing and trust messaging near the first scroll",
    ],
    audienceFit: [
      "Residential HVAC companies",
      "Emergency repair teams",
      "System replacement specialists",
    ],
    problemSolved: "HVAC leads are won or lost in seconds during peak season. We build the speed and clarity you need to own the local market.",
    whoItsNotFor: [
      "Commercial-only refrigeration teams",
      "Manufacturers without a residential service arm",
    ],
    whatHappensNext: "Growth call -> Seasonal strategy -> Funnel optimization.",
    pricing: DEFAULT_PRICING,
    faq: TRADE_FAQS,
    ctaLabel: "See HVAC Strategy",
    ctaHref: "/services/local-seo",
    secondaryCtaLabel: "Book A Growth Call",
    secondaryCtaHref: "/contact",
  },
  "roofing-contractors": {
    slug: "roofing-contractors",
    title: "Roofing Marketing That Makes Big Jobs Feel Safer",
    badge: "Trade Focus",
    summary:
      "Roofing sites need trust, proof, and a clear path to an estimate before a homeowner chooses anyone else.",
    intro:
      "Roofing leads are high-stakes. We build a digital presence that lowers uncertainty, shows proof of work, and creates a straightforward path to the estimate request.",
    painPoints: [
      "Homeowners do not know who to trust for a high-ticket roof project",
      "Weak proof and vague service pages lose the job before the call",
      "No clear differentiation between repair and replacement offers",
    ],
    proofPoints: [
      "Trust-led structure for high-ticket work",
      "Proof and process are visible early",
      "Strong fit for repair, replacement, and storm work",
    ],
    serviceAngles: [
      "Repair and replacement pages with clearer value framing",
      "Local SEO for city and storm-intent searches",
      "Quote-first conversion paths and proof sections",
    ],
    audienceFit: [
      "Residential roofing companies",
      "Storm restoration teams",
      "Replacement-focused contractors",
    ],
    problemSolved: "Roofing is a high-ticket, high-caution purchase. We move homeowners from 'maybe' to 'estimate request' by solving the trust barrier.",
    whoItsNotFor: [
      "Commercial-only flat roofers with no residential focus",
      "Suppliers or wholesalers",
    ],
    whatHappensNext: "Strategy session -> Trust-led build -> SEO footprint launch.",
    pricing: DEFAULT_PRICING,
    faq: TRADE_FAQS,
    ctaLabel: "See Roofing Strategy",
    ctaHref: "/services/contractor-websites",
    secondaryCtaLabel: "Start With An Audit",
    secondaryCtaHref: "/audit",
  },
  "plumbing-contractors": {
    slug: "plumbing-contractors",
    title: "Plumbing Marketing That Captures Urgent Demand",
    badge: "Trade Focus",
    summary:
      "We help plumbing teams convert emergency demand and high-value repair work with better pages and stronger trust signals.",
    intro:
      "Plumbing customers often need help fast. The site needs to show up, explain the next step, and make it easy to trust that the job will be handled well.",
    painPoints: [
      "Calls lost because the page does not match the urgency of the issue",
      "Hard to differentiate emergency work from larger project work",
      "Missing trust signals for the customer who is under pressure",
    ],
    proofPoints: [
      "Fast-moving lead paths for urgent situations",
      "Clear service hierarchy and call prioritization",
      "Flexible enough for repair, install, and replacement work",
    ],
    serviceAngles: [
      "Emergency plumbing and repair pages",
      "Local SEO for near-me and city intent",
      "Lead capture and dispatch-friendly routing",
    ],
    audienceFit: [
      "Residential plumbers",
      "Drain and emergency repair teams",
      "Install and replacement specialists",
    ],
    problemSolved: "Plumbing urgency creates a conversion opportunity. We make sure your site is the easiest path for a customer in a crisis.",
    whoItsNotFor: [
      "Municipal infrastructure contractors",
      "Fixture-only showroom retailers",
    ],
    whatHappensNext: "Consultation -> Efficiency review -> Lead-optimized build.",
    pricing: DEFAULT_PRICING,
    faq: TRADE_FAQS,
    ctaLabel: "See Plumbing Strategy",
    ctaHref: "/services/local-seo",
    secondaryCtaLabel: "Talk Through The Audit",
    secondaryCtaHref: "/contact?ref=audit",
  },
  "home-performance-contractors": {
    slug: "home-performance-contractors",
    title: "Home Performance Marketing For Educated Buyers",
    badge: "Trade Focus",
    summary:
      "Energy-focused contractors need a clearer educational story, stronger trust, and a path that makes the investment feel obvious.",
    intro:
      "Home performance buyers are usually researching before they call. The page has to answer questions, explain value, and show the outcome in plain language.",
    painPoints: [
      "Complex services are hard to explain quickly",
      "Educational buyers need more proof before they inquire",
      "Weak content structure leaves search demand on the table",
    ],
    proofPoints: [
      "Education-led structure built for comparison shoppers",
      "Better fit for audit, insulation, and efficiency work",
      "Supports content and city expansion later",
    ],
    serviceAngles: [
      "Educational pages for audits and energy upgrades",
      "Rebate and program-focused content",
      "Trust sections that help justify the investment",
    ],
    audienceFit: [
      "Home performance contractors",
      "Insulation and air-sealing teams",
      "Energy audit specialists",
    ],
    problemSolved: "Home performance is an education-heavy sale. We turn complex science into an obvious homeowner investment.",
    whoItsNotFor: [
      "Contractors who do not perform audits or efficiency checks",
      "New construction-only insulation teams",
    ],
    whatHappensNext: "Discovery call -> Audit Roadmap -> Education-first build.",
    pricing: DEFAULT_PRICING,
    faq: TRADE_FAQS,
    ctaLabel: "See Home Performance Strategy",
    ctaHref: "/services/landing-pages",
    secondaryCtaLabel: "Audit My Site",
    secondaryCtaHref: "/audit",
  },
  "ev-charger-installers": {
    slug: "ev-charger-installers",
    title: "EV Charger Installer Marketing That Explains The Value",
    badge: "Trade Focus",
    summary:
      "A clearer story for homeowners who need to understand the install, the timeline, and the payback before they call.",
    intro:
      "EV charger buyers want the right answer quickly. The page has to educate, reassure, and move them toward a qualified install request without adding friction.",
    painPoints: [
      "No dedicated EV installation page",
      "Buyers do not understand the scope or benefits",
      "Local search demand is under-used",
    ],
    proofPoints: [
      "Built for first-time EV buyers",
      "Strong fit for fast-growing residential work",
      "Clear path from education to estimate",
    ],
    serviceAngles: [
      "Dedicated EV charger service page",
      "Install process and compatibility FAQ",
      "Rebate and incentive callouts",
    ],
    audienceFit: [
      "Residential EV charger installers",
      "Electrical contractors expanding into EV work",
      "Teams targeting high-intent local installs",
    ],
    problemSolved: "EV buyers are searching for clarity before they buy. We make your team the local authority for residential charging.",
    whoItsNotFor: [
      "Commercial parking lot charger contractors",
      "B2B-only fleet management teams",
    ],
    whatHappensNext: "Growth call -> EV market analysis -> Conversion setup.",
    pricing: DEFAULT_PRICING,
    faq: TRADE_FAQS,
    ctaLabel: "See EV Strategy",
    ctaHref: "/services/landing-pages",
    secondaryCtaLabel: "Book A Call",
    secondaryCtaHref: "/contact",
  },
  "heat-pump-contractors": {
    slug: "heat-pump-contractors",
    title: "Heat Pump Marketing Built For Comparison Shoppers",
    badge: "Trade Focus",
    summary:
      "Heat pump buyers need clarity, confidence, and a practical explanation of the upgrade before they reach out.",
    intro:
      "Heat pump demand often starts with education. We build around the questions homeowners ask before they are ready to buy, then guide them to the next step.",
    painPoints: [
      "Homeowners are comparing options and need more context",
      "Rebates, incentives, and savings are easy to miss",
      "Competitors with better education capture the lead first",
    ],
    proofPoints: [
      "Education-led structure",
      "Good fit for higher-ticket replacement work",
      "Built to support rebates and efficiency messaging",
    ],
    serviceAngles: [
      "Comparison content for gas vs electric decisions",
      "Rebate and incentive pages",
      "Quote-ready service flow for high-ticket jobs",
    ],
    audienceFit: [
      "Heat pump installers",
      "HVAC teams moving into electrification",
      "Energy-focused residential contractors",
    ],
    problemSolved: "Heat pumps are a high-trust, high-rebate sale. We align your offer with the incentives and the efficiency narrative.",
    whoItsNotFor: [
      "Boiler-only service companies",
      "Retail-only appliance stores",
    ],
    whatHappensNext: "Discovery session -> Electrification strategy -> Launch.",
    pricing: DEFAULT_PRICING,
    faq: TRADE_FAQS,
    ctaLabel: "See Heat Pump Strategy",
    ctaHref: "/services/local-seo",
    secondaryCtaLabel: "Start With An Audit",
    secondaryCtaHref: "/audit",
  },
  "panel-upgrade-specialists": {
    slug: "panel-upgrade-specialists",
    title: "Panel Upgrade Marketing For High-Trust Jobs",
    badge: "Trade Focus",
    summary:
      "Panel upgrades are expensive, technical, and trust-sensitive. The page should lower friction before the estimate request.",
    intro:
      "This niche needs credentials, clarity, and a smoother explanation of the process. We make the service feel easier to understand and easier to buy.",
    painPoints: [
      "The page does not elevate panel upgrades as a premium service",
      "Homeowners need more reassurance before calling",
      "Competitors with clearer process pages win the lead",
    ],
    proofPoints: [
      "High-trust messaging",
      "Good fit for premium electrical work",
      "Supports conversion on a major-ticket service",
    ],
    serviceAngles: [
      "Dedicated 200A and 400A panel pages",
      "Permits, safety, and process explanation",
      "Conversion flow built around the estimate request",
    ],
    audienceFit: [
      "Panel upgrade specialists",
      "Residential electricians",
      "Teams targeting premium electrical work",
    ],
    problemSolved: "Major electrical upgrades need major trust. We position your panel services as the essential upgrade for a modern home.",
    whoItsNotFor: [
      "Handyman services without electrical licensing",
      "Commercial utility contractors",
    ],
    whatHappensNext: "Discovery call -> System Audit -> Premium Service Build.",
    pricing: DEFAULT_PRICING,
    faq: TRADE_FAQS,
    ctaLabel: "See Panel Strategy",
    ctaHref: "/services/contractor-websites",
    secondaryCtaLabel: "Book A Call",
    secondaryCtaHref: "/contact",
  },
};

export function getServiceDetailFallback(slug?: string) {
  if (!slug) return undefined;
  return SERVICE_DETAILS[slug];
}

export function getTradeDetailFallback(slug?: string) {
  if (!slug) return undefined;
  return TRADE_DETAILS[slug];
}
