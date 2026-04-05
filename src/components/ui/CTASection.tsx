import React from "react";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import { INDUSTRIAL } from "@/lib/industrialStyle";
import { trackEvent, trackPhoneClick } from "@/components/Analytics";

const PHONE_DISPLAY = "(951)-295-9085";
const PHONE_HREF = "tel:+19512959085";

export function CTASection() {
  return (
    <section className="py-16" style={{ borderTopWidth: "0.5px", borderColor: INDUSTRIAL.outline }}>
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
        <div
          className="grid items-center gap-10 rounded-xl bg-white p-10 lg:grid-cols-2 lg:p-14"
          style={{ borderWidth: "0.5px", borderColor: INDUSTRIAL.outline }}
        >
          <div>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em]" style={{ color: INDUSTRIAL.muted }}>
              Not sure you're a fit?
            </p>
            <h2 className="mb-4 font-headline text-4xl font-bold tracking-tighter lg:text-5xl" style={{ color: INDUSTRIAL.charcoal }}>
              We&apos;ll tell you honestly in 30 minutes.
            </h2>
            <p className="text-base leading-relaxed" style={{ color: INDUSTRIAL.muted }}>
              Book a growth call. We'll look at your current site, your market,
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
              <p className="text-xs" style={{ color: INDUSTRIAL.muted }}>Growth-minded contractors · High-intent leads</p>
            </div>
            <a
              href={PHONE_HREF}
              onClick={() => {
                trackPhoneClick(PHONE_DISPLAY, "cta_section");
                trackEvent("click_cta", { location: "cta_section", label: "Call Now" });
              }}
              className="rounded-none bg-md3-primary px-8 py-4 text-center text-[11px] font-bold uppercase tracking-[0.25em] text-md3-on-primary shadow-md transition-all hover:bg-[#1a1a1a] lg:w-auto w-full"
            >
              Call Now
            </a>
            <Link
              to="/contact?ref=audit"
              onClick={() => trackEvent("click_cta", { location: "cta_section", label: "Start The Audit" })}
              className="border px-8 py-4 text-center text-[11px] font-bold uppercase tracking-[0.25em] transition-all hover:bg-[#1a1a1a] hover:text-white lg:w-auto w-full"
              style={{ borderColor: INDUSTRIAL.outline, color: INDUSTRIAL.charcoal, borderWidth: "0.5px" }}
            >
              Start The Audit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
