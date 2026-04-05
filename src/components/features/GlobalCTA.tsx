import * as React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { industrialMeshStyle, industrialTextGradientStyle } from "@/lib/industrialStyle";
import { trackEvent } from "@/components/Analytics";

export function GlobalCTA() {
  return (
    <section className="site-container py-20 lg:py-32">
      <AnimateIn className="relative overflow-hidden rounded-[2.5rem] border border-md3-outline-variant bg-white p-8 text-center shadow-[0_24px_80px_rgba(16,24,40,0.06)] sm:p-12 lg:p-20">
        {/* Subtle mesh background inside the card */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={industrialMeshStyle} 
        />
        
        <div className="relative z-10 mx-auto max-w-4xl">
          <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.4em] text-md3-primary">
            The Growth Authority
          </p>
          <h2 className="font-headline text-4xl font-light leading-[1.1] tracking-tighter text-md3-on-surface sm:text-5xl lg:text-7xl">
            Stop losing high-margin jobs to{" "}
            <span style={industrialTextGradientStyle}>lesser competitors.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-md3-on-surface-variant sm:text-xl">
            Most contractor websites are passive brochures. We build systems that hunt. Start with a paid audit to see where your lead path is broken.
          </p>
          
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/audit"
              onClick={() => trackEvent("click_cta", { location: "global_cta", label: "Start The Audit" })}
              className="group inline-flex items-center justify-center gap-3 bg-md3-primary px-10 py-5 text-[12px] font-bold uppercase tracking-[0.3em] text-white transition-all hover:bg-[#1a1a1a] hover:px-11 active:scale-[0.98]"
            >
              Start The Audit
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          
          <p className="mt-8 text-[10px] font-medium uppercase tracking-[0.2em] text-md3-on-surface-variant/60">
            Trusted by 50+ contractors
          </p>
        </div>
      </AnimateIn>
    </section>
  );
}
