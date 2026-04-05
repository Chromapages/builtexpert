import * as React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { SEO } from "@/components/SEO";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { industrialMeshStyle, industrialTextGradientStyle } from "@/lib/industrialStyle";
import { PricingBlock } from "@/components/features/PricingBlock";
import { AuditOfferHighlight } from "@/components/features/AuditOfferHighlight";
import { FAQSection } from "@/components/features/FAQSection";
import { getTradeBySlug } from "@/lib/sanity.client";
import { NotFound } from "@/pages/NotFound";
import {
  getTradeDetailFallback,
  type TradeDetailContent,
} from "@/data/detailPages";

function resolveList(primary?: string[], fallback: string[] = []) {
  return primary && primary.length > 0 ? primary : fallback;
}

function resolveTradeDetail(slug?: string, tradeData?: any): TradeDetailContent | null {
  if (!slug) return null;
  const fallback = getTradeDetailFallback(slug);
  if (!fallback && !tradeData) return null;

  return {
    slug,
    title: tradeData?.title || fallback?.title || slug.replace(/-/g, " "),
    badge: fallback?.badge || "Trade Focus",
    summary: tradeData?.summary || fallback?.summary || "",
    intro: fallback?.intro || tradeData?.summary || "",
    painPoints: resolveList(tradeData?.painPoints, fallback?.painPoints || []),
    proofPoints: resolveList(tradeData?.proofPoints, fallback?.proofPoints || []),
    serviceAngles: resolveList(tradeData?.serviceAngles, fallback?.serviceAngles || []),
    audienceFit: resolveList(tradeData?.audienceFit, fallback?.audienceFit || []),
    pricing: fallback?.pricing || {
      setup: "From $4,200",
      monthly: "From $750/mo",
      note: "Built for trades that need a stronger digital system.",
      inclusions: ["Strategy", "Design", "Conversion setup"],
    },
    faq: fallback?.faq || [],
    ctaLabel: fallback?.ctaLabel || "Book A Call",
    ctaHref: fallback?.ctaHref || "/contact",
    secondaryCtaLabel: fallback?.secondaryCtaLabel || "See Services",
    secondaryCtaHref: fallback?.secondaryCtaHref || "/services",
  };
}

export function TradeDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [tradeData, setTradeData] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    let active = true;

    async function fetchData() {
      if (!slug) {
        setLoading(false);
        return;
      }

      try {
        const data = await getTradeBySlug(slug);
        if (active) setTradeData(data);
      } catch (error) {
        console.error("Error fetching trade detail:", error);
      } finally {
        if (active) setLoading(false);
      }
    }

    fetchData();

    return () => {
      active = false;
    };
  }, [slug]);

  const detail = React.useMemo(() => resolveTradeDetail(slug, tradeData), [slug, tradeData]);

  if (!loading && !detail) {
    return <NotFound />;
  }

  if (!detail) {
    return null;
  }

  return (
    <>
      <SEO
        title={detail.title}
        description={detail.summary}
        canonical={`/who-we-help/${detail.slug}`}
      />

      <div
        className="pb-24 pt-20 font-body tracking-tight antialiased selection:bg-md3-primary-container selection:text-md3-on-primary-container"
        style={industrialMeshStyle}
      >
        <span id="main-content" className="sr-only" aria-hidden="true" />

        <section className="site-container section-py">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <AnimateIn className="max-w-3xl">
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.35em] text-md3-primary">
                Who We Help / {detail.badge}
              </p>
              <h1 className="max-w-3xl font-headline text-5xl font-light leading-[0.96] tracking-tighter text-md3-on-surface sm:text-6xl lg:text-7xl">
                <span className="block" style={industrialTextGradientStyle}>
                  {detail.title}
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-md3-on-surface-variant sm:text-xl">
                {detail.summary}
              </p>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-md3-on-surface-variant">
                {detail.intro}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to={detail.ctaHref}
                  className="inline-flex items-center justify-center gap-2 bg-md3-primary px-8 py-4 text-[11px] font-bold uppercase tracking-[0.28em] text-white transition-all hover:bg-[#1a1a1a]"
                >
                  {detail.ctaLabel}
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
                <Link
                  to={detail.secondaryCtaHref}
                  className="inline-flex items-center justify-center gap-2 border border-md3-outline-variant bg-white px-8 py-4 text-[11px] font-bold uppercase tracking-[0.28em] text-md3-on-surface transition-all hover:border-md3-primary hover:text-md3-primary"
                >
                  {detail.secondaryCtaLabel}
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {detail.proofPoints.map((point) => (
                  <span
                    key={point}
                    className="inline-flex items-center gap-2 rounded-full border border-md3-outline-variant bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-md3-on-surface-variant"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-md3-primary" aria-hidden />
                    {point}
                  </span>
                ))}
              </div>
            </AnimateIn>

            <AnimateIn className="rounded-[2rem] border border-md3-outline-variant bg-white p-8 shadow-[0_24px_80px_rgba(16,24,40,0.08)]">
              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-md3-primary">
                Who This Fits
              </p>
              <ul className="mt-6 space-y-4">
                {detail.audienceFit.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-md3-on-surface-variant">
                    <Check className="mt-0.5 size-4 shrink-0 text-md3-primary" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-[1.5rem] border border-md3-outline-variant bg-md3-surface-container-low p-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-md3-primary">
                  Quick Snapshot
                </p>
                <p className="mt-3 font-headline text-2xl font-semibold tracking-tight text-md3-on-surface">
                  {detail.pricing.setup}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-md3-on-surface-variant">
                  {detail.pricing.note}
                </p>
              </div>
            </AnimateIn>
          </div>
        </section>

        <section className="site-container section-py">
          <AnimateIn>
            <div className="mb-8 flex items-end justify-between gap-6">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-md3-primary">
                  Trade pain points
                </p>
                <h2 className="mt-3 font-headline text-3xl font-light tracking-tight text-md3-on-surface sm:text-4xl">
                  What the page needs to solve for this trade
                </h2>
              </div>
            </div>
          </AnimateIn>

          <div className="grid gap-6 lg:grid-cols-2">
            <AnimateIn className="rounded-[1.75rem] border border-md3-outline-variant bg-white p-7">
              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-md3-primary">
                Pain points
              </p>
              <ul className="mt-6 space-y-4">
                {detail.painPoints.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-md3-on-surface-variant">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-md3-primary" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </AnimateIn>

            <AnimateIn className="rounded-[1.75rem] border border-md3-outline-variant bg-md3-surface-container-low p-7">
              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-md3-primary">
                Service angles
              </p>
              <ul className="mt-6 space-y-4">
                {detail.serviceAngles.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-md3-on-surface-variant">
                    <Check className="mt-0.5 size-4 shrink-0 text-md3-primary" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </AnimateIn>
          </div>
        </section>

        <PricingBlock
          title="Fit the offer to the trade, then let the system do the work"
          description="The structure changes by niche because the buyer changes by niche. This template keeps the message sharp and the next step obvious."
          setupValue={detail.pricing.setup}
          monthlyValue={detail.pricing.monthly}
          note={detail.pricing.note}
          inclusions={detail.pricing.inclusions}
          ctaLabel={detail.ctaLabel}
          ctaHref={detail.ctaHref}
          secondaryCtaLabel={detail.secondaryCtaLabel}
          secondaryCtaHref={detail.secondaryCtaHref}
        />

        <AuditOfferHighlight
          title="Not sure if this trade page is the right starting point?"
          description="Start with the audit and we will show you whether the issue is the page, the visibility, the follow-up, or the offer itself."
          bullets={[
            "Manual review of the current funnel and service path",
            "Clear priorities before you commit to a niche build",
            "Low-friction next step for a trade-specific strategy",
          ]}
        />

        <FAQSection
          title="Questions trade teams usually ask"
          description="A quick filter for the details that matter before the page is built."
          items={detail.faq}
        />

        <section className="site-container section-py">
          <AnimateIn className="rounded-[2rem] border border-md3-outline-variant bg-white p-8 text-center sm:p-10">
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-md3-primary">
              Next step
            </p>
            <h2 className="mt-4 font-headline text-3xl font-light tracking-tight text-md3-on-surface sm:text-4xl">
              Want this niche to feel more specific and more profitable?
            </h2>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to={detail.ctaHref}
                className="inline-flex items-center justify-center gap-2 bg-md3-primary px-8 py-4 text-[11px] font-bold uppercase tracking-[0.28em] text-white transition-all hover:bg-[#1a1a1a]"
              >
                {detail.ctaLabel}
                <ArrowRight className="size-4" aria-hidden />
              </Link>
              <Link
                to="/who-we-help"
                className="inline-flex items-center justify-center gap-2 border border-md3-outline-variant bg-white px-8 py-4 text-[11px] font-bold uppercase tracking-[0.28em] text-md3-on-surface transition-all hover:border-md3-primary hover:text-md3-primary"
              >
                Back To Who We Help
              </Link>
            </div>
          </AnimateIn>
        </section>
      </div>
    </>
  );
}
