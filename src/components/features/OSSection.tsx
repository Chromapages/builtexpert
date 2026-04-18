import { Link } from "react-router-dom";

export type OSSectionVariant = "pricing" | "full";

interface OSBullets {
  text: string;
}

export interface OSSectionData {
  headline?: string;
  subheadline?: string;
  description?: string;
  differentiatorBullets?: OSBullets[];
  problemItems?: OSBullets[];
  solutionItems?: OSBullets[];
  featureBullets?: OSBullets[];
  forWho?: OSBullets[];
  notForWho?: OSBullets[];
  ctaLabel?: string;
  ctaUrl?: string;
  secondaryCtaLabel?: string;
  secondaryCtaUrl?: string;
  pricingSetup?: string;
  pricingMonthly?: string;
  pricingNote?: string;
}

interface OSSectionProps {
  data?: OSSectionData | null;
  variant?: OSSectionVariant;
  id?: string;
}

// ─── Fallback data ─────────────────────────────────────────────────────────────

const FALLBACK: Required<OSSectionData> = {
  headline: "The whole system.",
  subheadline: "One partner. One number.",
  description:
    "Everything BuiltExpert does - lead capture, follow-up, pipeline visibility, and review generation - running as one connected system. No duct-tape. No coordinating five vendors. Just a clean, predictable booked-estimate machine that works while you work.",
  differentiatorBullets: [
    { text: "LeadOps gets you leads. OS gets you booked jobs." },
    { text: "LeadOps runs on its own. OS runs with a team behind it." },
    { text: "You see your numbers on one screen." },
    { text: "Review generation is built in, not bolted on." },
    { text: "Reactivation campaigns are part of the system." },
  ],
  problemItems: [
    { text: "Missed leads with no follow-up" },
    { text: "No follow-up system - leads go cold" },
    { text: "Dark pipeline - you don't know what's happening" },
    { text: "Review luck - happens randomly or not at all" },
  ],
  solutionItems: [
    { text: "Every lead captured - no entry point missed" },
    { text: "Automated follow-up within minutes" },
    { text: "Full visibility dashboard - you see everything" },
    { text: "Systematic review building - every job generates one" },
  ],
  featureBullets: [
    { text: "Lead capture across every entry point" },
    { text: "Automated follow-up sequences" },
    { text: "CRM setup and pipeline structure" },
    { text: "Quote request flow" },
    { text: "Reporting and pipeline visibility" },
    { text: "Automated review generation" },
    { text: "Reactivation campaigns for past customers" },
    { text: "Dedicated setup and ongoing partner support" },
  ],
  forWho: [
    {
      text:
        "Contractors done managing 3-4 vendors, want pipeline visibility, ready to hand off.",
    },
  ],
  notForWho: [
    {
      text:
        "Still figuring out fundamentals, need a website first, want to manage it themselves.",
    },
  ],
  ctaLabel: "Get Your OS Audit",
  ctaUrl: "/contact?plan=os",
  secondaryCtaLabel: "See pricing ->",
  secondaryCtaUrl: "/pricing#os-section",
  pricingSetup: "$4,997",
  pricingMonthly: "$5,997/mo",
  pricingNote: "Full system - everything listed above",
};

function resolve(data: OSSectionData | null | undefined): Required<OSSectionData> {
  if (!data) return FALLBACK;
  return {
    headline: data.headline ?? FALLBACK.headline,
    subheadline: data.subheadline ?? FALLBACK.subheadline,
    description: data.description ?? FALLBACK.description,
    differentiatorBullets: data.differentiatorBullets?.length
      ? data.differentiatorBullets
      : FALLBACK.differentiatorBullets,
    problemItems: data.problemItems?.length ? data.problemItems : FALLBACK.problemItems,
    solutionItems: data.solutionItems?.length ? data.solutionItems : FALLBACK.solutionItems,
    featureBullets: data.featureBullets?.length ? data.featureBullets : FALLBACK.featureBullets,
    forWho: data.forWho?.length ? data.forWho : FALLBACK.forWho,
    notForWho: data.notForWho?.length ? data.notForWho : FALLBACK.notForWho,
    ctaLabel: data.ctaLabel ?? FALLBACK.ctaLabel,
    ctaUrl: data.ctaUrl ?? FALLBACK.ctaUrl,
    secondaryCtaLabel: data.secondaryCtaLabel ?? FALLBACK.secondaryCtaLabel,
    secondaryCtaUrl: data.secondaryCtaUrl ?? FALLBACK.secondaryCtaUrl,
    pricingSetup: data.pricingSetup ?? FALLBACK.pricingSetup,
    pricingMonthly: data.pricingMonthly ?? FALLBACK.pricingMonthly,
    pricingNote: data.pricingNote ?? FALLBACK.pricingNote,
  };
}

// ─── Pricing variant (5-column grid) ─────────────────────────────────────────

function PricingVariant({ data }: { data: OSSectionData | null | undefined }) {
  const d = resolve(data);
  return (
    <div
      className="overflow-hidden"
      style={{ background: "#0a1f1f", borderWidth: "0.5px", borderColor: "#163030" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-5">
        {/* Left: copy + bullets */}
        <div className="p-12 lg:col-span-3 lg:p-16">
          <span
            className="mb-6 block text-[10px] font-bold uppercase tracking-[0.3em] text-teal-400"
            style={{ background: "rgba(13,148,136,0.15)" }}
          >
            BuiltExpert OS
          </span>
          <h2 className="mb-6 font-headline text-4xl font-bold leading-tight tracking-tight text-white lg:text-5xl">
            {d.headline}
            <br />
            <span className="text-teal-400">{d.subheadline}</span>
          </h2>
          <p className="mb-10 max-w-lg text-base font-light leading-relaxed text-zinc-400">
            {d.description}
          </p>
          <ul className="mb-12 space-y-4 text-sm">
            {d.differentiatorBullets.map((item) => (
              <li key={item.text} className="flex items-start gap-3 text-zinc-300">
                <span className="material-symbols-outlined mt-0.5 text-sm text-teal-400">
                  check
                </span>
                <span className="font-light">{item.text}</span>
              </li>
            ))}
          </ul>
          <Link
            to={d.ctaUrl}
            className="inline-block bg-teal-600 px-8 py-4 text-[11px] font-bold uppercase tracking-[0.3em] text-white transition-all hover:bg-teal-500"
          >
            {d.ctaLabel} -&gt;
          </Link>
          <p className="mt-6 max-w-sm text-sm font-light text-zinc-500">
            Not sure if OS is right for you? We'll look at your current setup, show you
            exactly what's missing, and tell you honestly.{" "}
            <span className="text-zinc-400">No pitch.</span>
          </p>
        </div>

        {/* Right: price + feature bullets */}
        <div
          className="flex flex-col justify-center p-12 lg:col-span-2 lg:border-l lg:p-16"
          style={{ borderLeftWidth: "0.5px", borderColor: "#163030" }}
        >
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-teal-400">
            BuiltExpert OS
          </p>
          <div className="mb-2 flex items-end gap-2">
            <span className="font-headline text-6xl font-light tracking-tighter text-white">
              {d.pricingSetup}
            </span>
          </div>
          <p className="mb-1 text-lg text-zinc-500">setup</p>
          <div className="mb-2 mt-4 flex items-end gap-2">
            <span className="font-headline text-6xl font-bold tracking-tighter text-teal-400">
              {d.pricingMonthly}
            </span>
          </div>
          <p className="mb-10 text-sm font-light text-zinc-500">{d.pricingNote}</p>
          <div
            className="space-y-3 border-t pt-6 text-sm"
            style={{ borderColor: "#163030" }}
          >
            {d.featureBullets.map((item) => (
              <div key={item.text} className="flex items-start gap-3 text-zinc-400">
                <span className="material-symbols-outlined mt-0.5 text-sm text-teal-400">
                  check
                </span>
                <span className="font-light">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Full variant (full-width breakout, Services page style) ──────────────────

function FullVariant({ data, id }: { data: OSSectionData | null | undefined; id?: string }) {
  const d = resolve(data);
  return (
    <div
      id={id}
      className="overflow-hidden"
      style={{ background: "#0a1f1f", borderWidth: "0.5px", borderColor: "#163030" }}
    >
      <div className="p-12 lg:p-16">
        {/* Badge + headline */}
        <div className="mb-8">
          <span
            className="mb-4 inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-teal-400"
            style={{ background: "rgba(13,148,136,0.15)" }}
          >
            BuiltExpert OS
          </span>
          <h2 className="font-headline text-4xl font-bold tracking-tight text-white lg:text-5xl">
            {d.headline}
          </h2>
          <p className="mt-4 max-w-2xl text-lg font-light leading-relaxed text-zinc-400">
            {d.description}
          </p>
        </div>

        {/* Problem → Solution 2-column */}
        <div
          className="mb-12 grid grid-cols-1 gap-px overflow-hidden lg:grid-cols-2"
          style={{ borderWidth: "0.5px", borderColor: "#163030" }}
        >
          {/* Problem */}
          <div className="bg-[#060f0f] p-8">
            <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-red-400/60">
              Without OS
            </p>
            <ul className="space-y-4 text-sm font-light text-zinc-400">
              {d.problemItems.map((item) => (
                <li key={item.text} className="flex items-start gap-3">
                  <span className="material-symbols-outlined mt-0.5 text-sm text-red-400/50">
                    close
                  </span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Solution */}
          <div className="bg-[#0a1a1a] p-8">
            <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-teal-400">
              With BuiltExpert OS
            </p>
            <ul className="space-y-4 text-sm font-light text-zinc-300">
              {d.solutionItems.map((item) => (
                <li key={item.text} className="flex items-start gap-3">
                  <span className="material-symbols-outlined mt-0.5 text-sm text-teal-400">
                    check
                  </span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 8 Feature bullets */}
        <div className="mb-12 grid grid-cols-1 gap-x-12 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
          {d.featureBullets.map((item) => (
            <div key={item.text} className="flex items-start gap-3 text-sm text-zinc-300">
              <span className="material-symbols-outlined mt-0.5 text-sm text-teal-400">
                check
              </span>
              <span className="font-light">{item.text}</span>
            </div>
          ))}
        </div>

        {/* Who it's for / not for */}
        <div
          className="mb-10 flex flex-col gap-6 rounded-lg p-6 sm:flex-row lg:gap-12"
          style={{ background: "rgba(13,148,136,0.08)", border: "0.5px solid #163030" }}
        >
          <div className="flex-1">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-teal-400">
              FOR
            </p>
            {d.forWho.map((item) => (
              <p key={item.text} className="text-sm font-light text-zinc-400">
                {item.text}
              </p>
            ))}
          </div>
          <div
            className="flex-none sm:w-px sm:self-stretch"
            style={{ background: "#163030" }}
          />
          <div className="flex-1">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">
              NOT FOR
            </p>
            {d.notForWho.map((item) => (
              <p key={item.text} className="text-sm font-light text-zinc-500">
                {item.text}
              </p>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-6">
          <Link
            to={d.ctaUrl}
            className="inline-block bg-teal-600 px-8 py-4 text-[11px] font-bold uppercase tracking-[0.3em] text-white transition-all hover:bg-teal-500"
          >
            {d.ctaLabel} -&gt;
          </Link>
          {d.secondaryCtaUrl && (
            <Link
              to={d.secondaryCtaUrl}
              className="border-b py-4 text-[11px] font-bold uppercase tracking-[0.3em] text-zinc-500 transition-all hover:border-teal-400 hover:text-teal-400"
              style={{ borderBottomWidth: "0.5px", borderColor: "#163030" }}
            >
              {d.secondaryCtaLabel}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Main export ───────────────────────────────────────────────────────────────

export function OSSection({ data, variant = "pricing", id }: OSSectionProps) {
  if (variant === "full") {
    return <FullVariant data={data} id={id} />;
  }
  return <PricingVariant data={data} />;
}
