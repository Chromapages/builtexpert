/**
 * BuiltExpert — Sanity Seed Script
 *
 * Creates all Service, PricingTier, and AuditOffer documents in Sanity.
 *
 * SETUP:
 *   1. Add SANITY_WRITE_TOKEN to your .env file.
 *      Get one from: https://www.sanity.io/manage → your project → API → Tokens
 *      Required permissions: Editor (write)
 *   2. Run: npx ts-node --esm scripts/seed-sanity.ts
 *      OR:   npx tsx scripts/seed-sanity.ts
 *
 * WARNING: This will create new documents each time it runs.
 *          Do not run twice unless you want duplicates.
 */

import { createClient } from "@sanity/client";
import * as dotenv from "dotenv";

dotenv.config();

const client = createClient({
  projectId: "z5yntv5o",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
});

// ─── TYPES ─────────────────────────────────────────────────────────────────

interface PricingTierDoc {
  _type: "pricingTier";
  name: string;
  billingCycle: "one-time" | "monthly";
  tierType: "fixed" | "range";
  price?: number;
  minPrice?: number;
  maxPrice?: number;
  unitLabel: string;
  tagline: string;
  includes: string[];
  notIncluded: string[];
  forWho: string;
  timeline: string;
  order: number;
}

interface ServiceDoc {
  _type: "service";
  title: string;
  slug: { _type: "slug"; current: string };
  ladderPosition: "entry" | "core" | "continuity";
  description: string;
  promise: string;
  deliverables: string[];
  outcomes: string[];
  audienceFit: string[];
  icon: string;
  benefits: string[];
  order: number;
  category: "audit" | "websites" | "landingPages" | "localSeo" | "growthSupport";
  categoryOrder: number;
  cardOrder: number;
  bestFor: string[];
  visualStyle: "default" | "darkTeal";
}

// ─── PRICING TIERS ─────────────────────────────────────────────────────────

const pricingTiers: PricingTierDoc[] = [
  // ── Lead System Audit ──────────────────────────────────────────────────
  {
    _type: "pricingTier",
    name: "Lead System Audit",
    billingCycle: "one-time",
    tierType: "fixed",
    price: 497,
    unitLabel: "/audit",
    tagline: "Know before you spend.",
    includes: [
      "Website structure and first-impression review",
      "Messaging and value proposition review",
      "CTA and conversion flow review",
      "Local SEO baseline review",
      "Trust and credibility signal review",
      "Lead flow and friction review",
      "Prioritized findings report",
      "Practical next-step recommendations",
      "Recommendation on whether BuiltExpert should implement the fixes",
    ],
    notIncluded: [
      "Implementation of any fixes",
      "Full strategy workshops or consulting sessions",
      "Ad management or media buying",
      "Repeated revision rounds",
    ],
    forWho: "Contractors who know something is broken but aren't sure what.",
    timeline: "3–5 business days",
    order: 1,
  },

  // ── Contractor Websites ────────────────────────────────────────────────
  {
    _type: "pricingTier",
    name: "Starter",
    billingCycle: "one-time",
    tierType: "fixed",
    price: 4200,
    unitLabel: "/project",
    tagline: "Credible. Fast. Done.",
    includes: [
      "Up to 7 pages",
      "Core service presentation and page structure",
      "Contact and lead flow setup",
      "Mobile-first implementation",
      "Baseline SEO structure",
      "Launch QA",
    ],
    notIncluded: [
      "Copywriting (provided by client)",
      "Advanced third-party integrations",
      "Ongoing SEO management",
      "Ad management",
      "Photography or video production",
    ],
    forWho: "Smaller contractors and owner-operators who need a credible web presence fast.",
    timeline: "3–4 weeks",
    order: 1,
  },
  {
    _type: "pricingTier",
    name: "Growth",
    billingCycle: "one-time",
    tierType: "fixed",
    price: 6800,
    unitLabel: "/project",
    tagline: "Built to win bids.",
    includes: [
      "Up to 12+ pages",
      "Expanded page structure and service architecture",
      "Conversion-focused messaging and copy guidance",
      "Deeper trust and proof structure",
      "Stronger local SEO foundation",
      "Strategic build planning",
      "Mobile-first implementation",
      "Launch QA",
    ],
    notIncluded: [
      "Ongoing SEO management",
      "Paid ad campaigns",
      "Unlimited revisions beyond scope",
      "Photography or video production",
    ],
    forWho: "Contractors actively improving lead generation with multiple services and markets.",
    timeline: "4–6 weeks",
    order: 2,
  },
  {
    _type: "pricingTier",
    name: "Authority",
    billingCycle: "one-time",
    tierType: "range",
    minPrice: 10500,
    unitLabel: "/project",
    tagline: "Own your market online.",
    includes: [
      "Broader sitemap and page architecture",
      "Multi-location or multi-service structure",
      "Advanced service area strategy",
      "Deeper integration and conversion flow support",
      "Complex content architecture",
      "Full project planning engagement",
      "Mobile-first implementation",
      "Launch QA",
    ],
    notIncluded: [
      "Paid media management",
      "Large-scale content production",
      "Photography or video production",
    ],
    forWho: "Established contractors and multi-location businesses ready to dominate their market.",
    timeline: "6–8 weeks",
    order: 3,
  },

  // ── Landing Pages ──────────────────────────────────────────────────────
  {
    _type: "pricingTier",
    name: "Single Page",
    billingCycle: "one-time",
    tierType: "fixed",
    price: 1500,
    unitLabel: "/page",
    tagline: "One page. One job.",
    includes: [
      "Focused single-page structure",
      "Message-to-offer alignment",
      "Conversion-focused CTA setup",
      "Trust and proof placement",
      "Form or booking integration",
      "Tracking setup",
      "Launch QA",
    ],
    notIncluded: [
      "Full website rebuild",
      "Ongoing SEO management",
      "Ad creation or management",
    ],
    forWho: "Contractors running ads or promoting a specific service, offer, or seasonal push.",
    timeline: "5–7 business days",
    order: 1,
  },
  {
    _type: "pricingTier",
    name: "Sprint",
    billingCycle: "one-time",
    tierType: "fixed",
    price: 3200,
    unitLabel: "/project",
    tagline: "Launch-ready in days.",
    includes: [
      "3–5 focused landing pages",
      "Campaign-aligned messaging per page",
      "CTA and offer structure per page",
      "Form or booking integration",
      "Tracking setup",
      "Launch QA",
    ],
    notIncluded: [
      "Full website build",
      "Ongoing optimization or split-testing beyond scope",
      "Ad creation or management",
    ],
    forWho: "Contractors running multi-service campaigns, ad clusters, or seasonal pushes.",
    timeline: "7–12 business days",
    order: 2,
  },

  // ── Local SEO ──────────────────────────────────────────────────────────
  {
    _type: "pricingTier",
    name: "Starter",
    billingCycle: "monthly",
    tierType: "fixed",
    price: 875,
    unitLabel: "/mo",
    tagline: "Show up. Get called.",
    includes: [
      "Local SEO baseline setup",
      "On-page local optimization",
      "Service and location page recommendations",
      "Core local SEO fixes",
      "Basic monthly reporting",
    ],
    notIncluded: [
      "Content writing beyond scope",
      "National SEO",
      "Paid ad management",
      "Guaranteed rankings timeline",
    ],
    forWho: "Smaller contractors in lower-competition local markets.",
    timeline: "Ongoing monthly",
    order: 1,
  },
  {
    _type: "pricingTier",
    name: "Growth",
    billingCycle: "monthly",
    tierType: "fixed",
    price: 1400,
    unitLabel: "/mo",
    tagline: "Rank higher. Book more.",
    includes: [
      "Deeper on-page local optimization",
      "Stronger service area content guidance",
      "Competitive local search strategy",
      "Google Business Profile alignment",
      "Recurring reporting and next-step recommendations",
    ],
    notIncluded: [
      "Paid ad management",
      "High-volume content writing beyond scope",
      "National SEO",
    ],
    forWho: "Contractors in competitive local markets actively building inbound lead flow.",
    timeline: "Ongoing monthly",
    order: 2,
  },
  {
    _type: "pricingTier",
    name: "Competitive",
    billingCycle: "monthly",
    tierType: "range",
    minPrice: 2500,
    unitLabel: "/mo",
    tagline: "Dominate every zip code.",
    includes: [
      "Multi-location or aggressive local visibility strategy",
      "High-output service area content guidance",
      "Advanced local authority building",
      "Comprehensive monthly reporting and strategy",
    ],
    notIncluded: [
      "Paid media management",
      "CRM or automation setup",
    ],
    forWho: "Multi-location contractors or businesses in high-competition cities.",
    timeline: "Ongoing monthly",
    order: 3,
  },

  // ── Growth Support ─────────────────────────────────────────────────────
  {
    _type: "pricingTier",
    name: "Support",
    billingCycle: "monthly",
    tierType: "fixed",
    price: 750,
    unitLabel: "/mo",
    tagline: "Maintained. Never stale.",
    includes: [
      "Website updates and copy revisions",
      "Basic CTA and conversion tweaks",
      "Monthly performance review and recommendations",
    ],
    notIncluded: [
      "New full page builds",
      "Major site redesign work",
      "SEO management",
      "Landing page builds",
    ],
    forWho: "Clients who need regular updates and light optimization without active expansion.",
    timeline: "Monthly recurring",
    order: 1,
  },
  {
    _type: "pricingTier",
    name: "Growth",
    billingCycle: "monthly",
    tierType: "fixed",
    price: 1500,
    unitLabel: "/mo",
    tagline: "Always improving. Always on.",
    includes: [
      "Website updates and improvements",
      "New landing pages as needed",
      "CTA and conversion improvements",
      "SEO improvements",
      "Content updates",
      "Monthly performance review and recommendations",
    ],
    notIncluded: [
      "Major site rebuilds",
      "Unlimited work outside agreed scope",
    ],
    forWho: "Clients actively running campaigns who want monthly iteration on their lead system.",
    timeline: "Monthly recurring",
    order: 2,
  },
  {
    _type: "pricingTier",
    name: "Expansion",
    billingCycle: "monthly",
    tierType: "range",
    minPrice: 3000,
    unitLabel: "/mo",
    tagline: "Your growth. On retainer.",
    includes: [
      "Expanded website updates and improvements",
      "Multiple landing pages per month",
      "Conversion optimization",
      "Local SEO improvements",
      "Content execution",
      "Dedicated monthly strategy session",
    ],
    notIncluded: [
      "Paid media management",
      "Unlimited scope — deliverables are agreed monthly",
    ],
    forWho: "Larger contractors or multi-location businesses needing high-output monthly growth work.",
    timeline: "Monthly recurring",
    order: 3,
  },
];

// ─── SERVICES ──────────────────────────────────────────────────────────────

const services: ServiceDoc[] = [
  {
    _type: "service",
    title: "Lead System Audit",
    slug: { _type: "slug", current: "lead-system-audit" },
    ladderPosition: "entry",
    description:
      "A focused diagnostic review of your website, messaging, local visibility, and lead flow — so you know exactly what's holding back your growth before you spend a dollar on fixes.",
    promise: "Find exactly where your leads are leaking — fixed in 5 days.",
    deliverables: [
      "Website structure and first-impression review",
      "Messaging and value proposition review",
      "CTA and conversion flow review",
      "Local SEO baseline review",
      "Trust and credibility signal review",
      "Lead flow and friction review",
      "Prioritized findings report",
      "Practical next-step recommendations",
    ],
    outcomes: [
      "Clear picture of what's actually broken in your lead system",
      "Prioritized list of what to fix first — ranked by impact",
      "No more guessing why leads aren't coming in",
      "A confident, informed starting point for your next growth investment",
    ],
    audienceFit: [
      "Electrical contractors",
      "HVAC companies",
      "Plumbing businesses",
      "Roofing contractors",
      "General contractors",
      "Specialty trade businesses",
    ],
    icon: "Search",
    benefits: [
      "Know before you spend",
      "No more guessing",
      "Delivered in 3–5 days",
      "Built for contractors",
    ],
    order: 1,
    category: "audit",
    categoryOrder: 1,
    cardOrder: 1,
    bestFor: [
      "Contractors stuck on a growth plateau",
      "Businesses burned by generic agencies",
      "Anyone who wants a clear, low-risk starting point",
    ],
    visualStyle: "darkTeal",
  },
  {
    _type: "service",
    title: "Contractor Websites",
    slug: { _type: "slug", current: "contractor-websites" },
    ladderPosition: "core",
    description:
      "High-conversion websites built specifically for contractors — designed to build credibility, communicate your services clearly, and turn more visitors into qualified leads.",
    promise: "A conversion-built site that turns visitors into booked estimates.",
    deliverables: [
      "Messaging and page structure strategy",
      "Full website build",
      "Clear service presentation",
      "Lead-focused CTA structure",
      "Mobile-first implementation",
      "Baseline SEO foundations",
      "Contact and conversion flow setup",
      "Launch QA",
    ],
    outcomes: [
      "More qualified inquiries from your website",
      "Stronger first impression with every potential client",
      "A site that supports SEO, ads, and referrals equally",
      "No more embarrassment about sending someone to your website",
    ],
    audienceFit: [
      "Roofing contractors",
      "HVAC companies",
      "Plumbing businesses",
      "Electricians",
      "General contractors",
      "Landscaping companies",
    ],
    icon: "Globe",
    benefits: [
      "Contractor-specific build",
      "Mobile-first by default",
      "Lead-focused architecture",
      "Structured for future growth",
    ],
    order: 2,
    category: "websites",
    categoryOrder: 2,
    cardOrder: 1,
    bestFor: [
      "Contractors with outdated or weak websites",
      "Businesses getting traffic but poor conversion",
      "Owners ready to invest in a real online presence",
    ],
    visualStyle: "default",
  },
  {
    _type: "service",
    title: "Landing Pages",
    slug: { _type: "slug", current: "landing-pages" },
    ladderPosition: "core",
    description:
      "Focused, high-conversion pages for specific services, campaigns, and paid traffic — built to match your offer and convert visitors into booked jobs.",
    promise: "One page, one offer, built to convert one type of job.",
    deliverables: [
      "Focused page structure",
      "Message-to-offer alignment",
      "Conversion-focused CTA setup",
      "Trust and proof placement",
      "Form or booking integration",
      "Tracking setup",
      "Launch QA",
    ],
    outcomes: [
      "Better conversion from paid traffic",
      "Dedicated page for every major service push",
      "Faster results vs. waiting for a full site rebuild",
      "Higher ROI on your ad spend",
    ],
    audienceFit: [
      "Contractors running Google or Meta ads",
      "Businesses with seasonal promotions",
      "Service-area expansion campaigns",
    ],
    icon: "Layout",
    benefits: [
      "Fast turnaround",
      "Campaign-ready",
      "Ad traffic friendly",
      "Conversion-focused",
    ],
    order: 3,
    category: "landingPages",
    categoryOrder: 3,
    cardOrder: 1,
    bestFor: [
      "Contractors running or planning ads",
      "Businesses promoting a specific service",
      "Seasonal or service-area campaigns",
    ],
    visualStyle: "default",
  },
  {
    _type: "service",
    title: "Local SEO",
    slug: { _type: "slug", current: "local-seo" },
    ladderPosition: "core",
    description:
      "Monthly local SEO work to improve your search visibility, strengthen service-area relevance, and capture more high-intent traffic from buyers already searching for what you do.",
    promise: "Get found by local homeowners searching for your trade right now.",
    deliverables: [
      "Local SEO baseline setup and audit",
      "On-page local optimization",
      "Service and location page recommendations",
      "Google Business Profile alignment",
      "Internal linking and content recommendations",
      "Ongoing improvement path",
      "Monthly reporting",
    ],
    outcomes: [
      "More visibility in local search results",
      "Stronger presence in the service areas that matter most",
      "Sustainable inbound lead channel that compounds over time",
      "Less reliance on paid traffic alone",
    ],
    audienceFit: [
      "Contractors in competitive local markets",
      "Multi-location service businesses",
      "Businesses building long-term inbound lead flow",
    ],
    icon: "MapPin",
    benefits: [
      "Contractor-niche focused",
      "Local-market expertise",
      "Monthly accountability",
      "Results that compound",
    ],
    order: 4,
    category: "localSeo",
    categoryOrder: 4,
    cardOrder: 1,
    bestFor: [
      "Contractors who rely on local market visibility",
      "Businesses with weak map and local search presence",
      "Owners building a sustainable inbound channel",
    ],
    visualStyle: "default",
  },
  {
    _type: "service",
    title: "Growth Support",
    slug: { _type: "slug", current: "growth-support" },
    ladderPosition: "continuity",
    description:
      "A monthly growth relationship that keeps your website, pages, and lead system improving after the initial build — so you never let momentum stall.",
    promise: "Monthly improvements that compound into more leads every quarter.",
    deliverables: [
      "Website updates and improvements",
      "New landing pages as needed",
      "CTA and conversion improvements",
      "SEO improvements",
      "Content updates",
      "Monthly performance review and next-step recommendations",
    ],
    outcomes: [
      "A lead system that gets stronger every month",
      "Faster response to market changes and seasonal shifts",
      "No more stalling after launch",
      "A growth partner who knows your business",
    ],
    audienceFit: [
      "Existing BuiltExpert clients",
      "Contractors with active campaigns needing iteration",
      "Businesses wanting a long-term growth partner",
    ],
    icon: "TrendingUp",
    benefits: [
      "Ongoing iteration",
      "Accountable monthly delivery",
      "Compounding lead flow",
      "No post-launch stall",
    ],
    order: 5,
    category: "growthSupport",
    categoryOrder: 5,
    cardOrder: 1,
    bestFor: [
      "Clients who want ongoing help after their project",
      "Businesses running active campaigns",
      "Contractors who don't want their site to stagnate",
    ],
    visualStyle: "default",
  },
];

// ─── AUDIT OFFER ───────────────────────────────────────────────────────────

const auditOffer = {
  _type: "auditOffer",
  isActive: true,
  isDiagnosticWedge: true,
  ladderContext:
    "Most contractors don't know if the real issue is their website, their messaging, their local visibility, or their conversion flow. The Lead System Audit creates clarity — so you invest in the right fix, not just the most obvious one.",
  headline: "Find Out What's Actually Killing Your Lead Flow",
  subheadline:
    "A full diagnostic review of your website, messaging, local SEO, and conversion flow — with a prioritized action plan — before you commit to a bigger investment.",
  auditPrice: 497,
  auditPriceRush: 750,
  auditPriceFull: 797,
  turnaround: "3–5 business days",
  turnaroundRush: "24–48 hours",
  auditAreas: [
    {
      num: "01",
      title: "Website Review",
      desc: "We evaluate your current site's structure, design, and overall first impression. Does it build trust? Does it communicate your services clearly? Would a potential client stick around — or leave immediately?",
      checks: [
        "Clear service communication",
        "Trust and credibility signals",
        "Mobile performance and layout",
        "Load speed and stability",
        "Design vs. conversion balance",
      ],
    },
    {
      num: "02",
      title: "Messaging Review",
      desc: "We look at how you describe what you do, who you do it for, and why someone should choose you over a competitor. Weak messaging is one of the most common reasons contractors lose leads they should be winning.",
      checks: [
        "Headline clarity and specificity",
        "Service page copy quality",
        "Value proposition strength",
        "Differentiators and proof",
        "Call-to-action language",
      ],
    },
    {
      num: "03",
      title: "CTA & Conversion Review",
      desc: "We identify whether your site is guiding visitors toward action — or letting them drift off without contacting you. Every page should have a clear, compelling next step.",
      checks: [
        "Primary CTA clarity and placement",
        "Form usability and friction",
        "Phone and contact accessibility",
        "Mobile CTA performance",
        "Offer clarity on key pages",
      ],
    },
    {
      num: "04",
      title: "Local SEO Baseline",
      desc: "We review your current local search presence — how well you show up for service-area searches, and whether your site is laying the right foundation for local visibility.",
      checks: [
        "Local keyword relevance",
        "Service area page structure",
        "On-page local signals",
        "Google Business Profile alignment",
        "Map pack visibility baseline",
      ],
    },
    {
      num: "05",
      title: "Trust & Credibility",
      desc: "Contractors live and die by trust. We evaluate how well your site builds credibility — through proof, reviews, credentials, portfolio, and guarantees.",
      checks: [
        "Reviews and testimonials presence",
        "Certifications and credentials",
        "Portfolio or past work display",
        "Guarantees and policies",
        "Team and owner presence",
      ],
    },
    {
      num: "06",
      title: "Lead Flow & Friction",
      desc: "We trace the path a potential customer takes from landing on your site to reaching out — and identify every point of unnecessary friction that costs you inquiries.",
      checks: [
        "Contact flow usability",
        "Booking or inquiry integration",
        "Response time signals",
        "Follow-up trigger setup",
        "Key abandonment points",
      ],
    },
  ],
  forList: [
    "Contractors who know growth is stuck but aren't sure why",
    "Businesses with an outdated site or unclear lead flow",
    "Owners burned by generic agencies who want a real starting point",
    "Anyone investing in ads, referrals, or SEO and not seeing results",
  ],
  notForList: [
    "People looking for free consulting disguised as an audit",
    "Prospects without a real business or serious growth intent",
    "Buyers who only want the cheapest possible option",
  ],
  howItWorksSteps: [
    {
      n: "1",
      title: "Book and Pay",
      description:
        "Click Start The Audit, complete the brief intake form, and pay. No sales call required. No back-and-forth. We get to work as soon as you submit.",
    },
    {
      n: "2",
      title: "We Do The Work",
      description:
        "Our team reviews your website, messaging, local SEO baseline, conversion flow, and credibility signals across six areas. We don't ask you for endless input — we evaluate what's already there.",
    },
    {
      n: "3",
      title: "You Get Clarity",
      description:
        "Within 3–5 business days, you receive a prioritized report with specific findings and practical recommendations — including whether BuiltExpert is the right fit to implement the fixes.",
    },
  ],
  trustStats: [
    { label: "Turnaround", value: "3–5 Days" },
    { label: "Audit Price", value: "$497" },
    { label: "Areas Reviewed", value: "6" },
    { label: "Deliverable", value: "Full Report" },
  ],
  faq: [
    {
      question: "Is this just a sales pitch in disguise?",
      answer:
        "No. You pay $497, we do the work, you get a real report. The report includes a recommendation on whether BuiltExpert should implement the fixes — but that is a separate conversation, not an automatic upsell.",
    },
    {
      question: "I already have a website. Can I still get an audit?",
      answer:
        "Yes — and that is exactly what we are reviewing. Most of our audit clients have an existing site. You don't need to be starting from scratch.",
    },
    {
      question: "How is this different from a free consultation?",
      answer:
        "A free consultation is a sales call. This is actual work — a full review across six areas of your lead system, delivered as a written report with prioritized findings and practical next steps.",
    },
    {
      question: "What do I get at the end?",
      answer:
        "A prioritized findings report covering your website, messaging, CTAs, local SEO baseline, trust signals, and lead flow. We flag what is most damaging, what is worth fixing first, and what the best next step looks like.",
    },
    {
      question: "How long does it take?",
      answer:
        "Standard turnaround is 3–5 business days. If you need it faster, a rush option is available at $750 with 24–48 hour delivery.",
    },
    {
      question: "Do I need to already be a BuiltExpert client?",
      answer:
        "No. The audit is available to any contractor. You don't need to have worked with us before — it is designed to be a low-risk first step.",
    },
    {
      question: "What happens after the audit?",
      answer:
        "You get the report. If BuiltExpert is the right fit to implement any of the fixes, we will tell you clearly and walk you through what that looks like. There is no pressure — the audit stands on its own.",
    },
  ],
};

// ─── SEED FUNCTION ──────────────────────────────────────────────────────────

async function seed() {
  console.log("🚀 Starting BuiltExpert Sanity seed...\n");

  if (!process.env.SANITY_WRITE_TOKEN) {
    console.error(
      "❌ SANITY_WRITE_TOKEN is not set in .env. Aborting.\n" +
        "   Get a token at: https://www.sanity.io/manage → your project → API → Tokens\n" +
        "   Required: Editor permissions (write)"
    );
    process.exit(1);
  }

  // 1. Create pricing tiers and collect their IDs
  console.log("── Creating Pricing Tiers ─────────────────────────────────");
  const tierIdMap: Record<string, string> = {};

  for (const tier of pricingTiers) {
    const result = await client.create(tier);
    const key = `${tier.name}__${tier.billingCycle}__${tier.price ?? tier.minPrice ?? "custom"}`;
    tierIdMap[key] = result._id;
    const priceStr =
      tier.tierType === "fixed"
        ? `$${tier.price}${tier.unitLabel}`
        : `$${tier.minPrice}+${tier.unitLabel}`;
    console.log(`  ✅ ${tier.name} (${priceStr}) → ${result._id}`);
  }

  // 2. Map tier IDs to services by name convention
  //    Key format: "TierName__billingCycle__price"
  const websiteTierRefs = [
    tierIdMap["Starter__one-time__4200"],
    tierIdMap["Growth__one-time__6800"],
    tierIdMap["Authority__one-time__10500"],
  ]
    .filter(Boolean)
    .map((id) => ({ _type: "reference", _ref: id }));

  const landingTierRefs = [
    tierIdMap["Single Page__one-time__1500"],
    tierIdMap["Sprint__one-time__3200"],
  ]
    .filter(Boolean)
    .map((id) => ({ _type: "reference", _ref: id }));

  const seoTierRefs = [
    tierIdMap["Starter__monthly__875"],
    tierIdMap["Growth__monthly__1400"],
    tierIdMap["Competitive__monthly__2500"],
  ]
    .filter(Boolean)
    .map((id) => ({ _type: "reference", _ref: id }));

  const supportTierRefs = [
    tierIdMap["Support__monthly__750"],
    tierIdMap["Growth__monthly__1500"],
    tierIdMap["Expansion__monthly__3000"],
  ]
    .filter(Boolean)
    .map((id) => ({ _type: "reference", _ref: id }));

  const auditTierRefs = [tierIdMap["Lead System Audit__one-time__497"]]
    .filter(Boolean)
    .map((id) => ({ _type: "reference", _ref: id }));

  const tierRefsByCategory: Record<string, { _type: string; _ref: string }[]> = {
    audit: auditTierRefs,
    websites: websiteTierRefs,
    landingPages: landingTierRefs,
    localSeo: seoTierRefs,
    growthSupport: supportTierRefs,
  };

  // 3. Create services
  console.log("\n── Creating Services ──────────────────────────────────────");
  for (const svc of services) {
    const doc = {
      ...svc,
      pricingTiers: tierRefsByCategory[svc.category] ?? [],
    };
    const result = await client.create(doc);
    console.log(`  ✅ ${svc.title} → ${result._id}`);
  }

  // 4. Create audit offer
  console.log("\n── Creating Audit Offer ───────────────────────────────────");
  const auditResult = await client.create(auditOffer);
  console.log(`  ✅ Audit Offer → ${auditResult._id}`);

  console.log("\n✅ Seed complete. All documents created in Sanity.\n");
}

seed().catch((err) => {
  console.error("❌ Seed failed:", err.message);
  process.exit(1);
});
