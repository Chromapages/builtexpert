import * as React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";

export interface PricingBlockProps {
  eyebrow?: string;
  title: string;
  description?: string;
  setupLabel?: string;
  setupValue: string;
  monthlyLabel?: string;
  monthlyValue: string;
  note?: string;
  inclusions?: string[];
  ctaLabel: string;
  ctaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

export function PricingBlock({
  eyebrow = "Investment",
  title,
  description,
  setupLabel = "Project builds",
  setupValue,
  monthlyLabel = "Ongoing growth",
  monthlyValue,
  note,
  inclusions = [],
  ctaLabel,
  ctaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
}: PricingBlockProps) {
  return (
    <section className="site-container section-py">
      <AnimateIn className="rounded-[2rem] border border-md3-outline-variant bg-white p-8 shadow-[0_24px_80px_rgba(16,24,40,0.08)] sm:p-10 lg:p-12">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.35em] text-md3-primary">
              {eyebrow}
            </p>
            <h2 className="max-w-2xl font-headline text-3xl font-light tracking-tight text-md3-on-surface sm:text-4xl">
              {title}
            </h2>
            {description && (
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-md3-on-surface-variant sm:text-lg">
                {description}
              </p>
            )}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                { label: setupLabel, value: setupValue },
                { label: monthlyLabel, value: monthlyValue },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-md3-outline-variant bg-md3-surface-container-lowest p-5"
                >
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-md3-on-surface-variant">
                    {item.label}
                  </p>
                  <p className="mt-3 font-headline text-3xl font-semibold tracking-tight text-md3-on-surface">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
            {note && (
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-md3-on-surface-variant">
                {note}
              </p>
            )}
          </div>

          <div className="rounded-[1.75rem] border border-md3-outline-variant bg-md3-surface-container-low p-6 sm:p-7">
            {inclusions.length > 0 && (
              <>
                <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-md3-primary">
                  Included
                </p>
                <ul className="mt-5 space-y-3">
                  {inclusions.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-md3-on-surface-variant">
                      <Check className="mt-0.5 size-4 shrink-0 text-md3-primary" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}

            <div className="mt-8 flex flex-col gap-3">
              <Link
                to={ctaHref}
                className="inline-flex items-center justify-center gap-2 rounded-none bg-md3-primary px-6 py-4 text-[11px] font-bold uppercase tracking-[0.28em] text-white transition-all hover:bg-[#1a1a1a]"
              >
                {ctaLabel}
                <ArrowRight className="size-4" aria-hidden />
              </Link>
              {secondaryCtaLabel && secondaryCtaHref && (
                <Link
                  to={secondaryCtaHref}
                  className="inline-flex items-center justify-center gap-2 rounded-none border border-md3-outline-variant px-6 py-4 text-[11px] font-bold uppercase tracking-[0.28em] text-md3-on-surface transition-all hover:border-md3-primary hover:text-md3-primary"
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
