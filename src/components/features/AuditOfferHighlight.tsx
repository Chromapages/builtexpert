import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";

export interface AuditOfferHighlightProps {
  eyebrow?: string;
  title: string;
  description: string;
  bullets?: string[];
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

export function AuditOfferHighlight({
  eyebrow = "Core Entry Offer",
  title,
  description,
  bullets = [],
  ctaLabel = "Start The Audit",
  ctaHref = "/audit",
  secondaryCtaLabel = "Book A Call",
  secondaryCtaHref = "/contact?ref=audit",
}: AuditOfferHighlightProps) {
  return (
    <section className="site-container section-py">
      <AnimateIn className="overflow-hidden rounded-[2rem] border border-md3-outline-variant bg-gradient-to-br from-md3-primary to-[#0b3f40] px-8 py-10 text-white shadow-[0_24px_80px_rgba(0,101,101,0.2)] sm:px-10 lg:px-12 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.35em] text-md3-primary-fixed">
              {eyebrow}
            </p>
            <h2 className="max-w-2xl font-headline text-3xl font-light tracking-tight text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-md3-primary-fixed sm:text-lg">
              {description}
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-white/15 bg-white/8 p-6 backdrop-blur-sm">
            {bullets.length > 0 && (
              <ul className="space-y-3">
                {bullets.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-white/90">
                    <ShieldCheck className="mt-0.5 size-4 shrink-0 text-md3-primary-fixed" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-8 flex flex-col gap-3">
              <Link
                to={ctaHref}
                className="inline-flex items-center justify-center gap-2 rounded-none bg-white px-6 py-4 text-[11px] font-bold uppercase tracking-[0.28em] text-md3-primary transition-all hover:bg-md3-primary-fixed hover:text-md3-on-primary-fixed"
              >
                {ctaLabel}
                <ArrowRight className="size-4" aria-hidden />
              </Link>
              {secondaryCtaLabel && (
                <Link
                  to={secondaryCtaHref}
                  className="inline-flex items-center justify-center rounded-none border border-white/20 px-6 py-4 text-[11px] font-bold uppercase tracking-[0.28em] text-white/90 transition-all hover:bg-white/10"
                >
                  {secondaryCtaLabel}
                </Link>
              )}
            </div>
          </div>
        </div>
      </AnimateIn>
    </section>
  );
}
