import * as React from "react";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { trackEvent } from "@/components/Analytics";

interface HomeHeroProps {
  headline: React.ReactNode;
  subheadline: string;
  stats: { label: string; value: string }[];
  bgImage: string;
  videoUrl?: string;
}

export function HomeHero({
  headline,
  subheadline,
  stats,
  bgImage,
  videoUrl,
}: HomeHeroProps) {
  return (
    <section className="relative -mt-24 flex min-h-[95vh] items-center justify-center overflow-hidden pt-24">

      {/* ── Background ── */}
      {!videoUrl ? (
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgImage})`, filter: "brightness(0.65) contrast(1.1)" }}
        />
      ) : (
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 z-0 h-full w-full object-cover brightness-[0.6] contrast-[1.1]"
          style={{
            willChange: "transform",
            animation: "heroVideoFadeIn 1.2s ease-out forwards",
          }}
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      )}

      {/* ── Inward edge masking gradient ── */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: [
            "linear-gradient(to bottom, #09090b 0%, transparent 22%)",
            "linear-gradient(to top,    #09090b 0%, transparent 28%)",
            "linear-gradient(to right,  #09090b 0%, transparent 22%)",
            "linear-gradient(to left,   #09090b 0%, transparent 22%)",
          ].join(", "),
        }}
      />

      {/* ── Left-side text legibility scrim ── */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(9,9,11,0.85) 0%, rgba(9,9,11,0.4) 50%, transparent 100%)",
          backdropFilter: "blur(1.5px)",
        }}
      />

      {/* ── Content — left aligned ── */}
      <div className="relative z-20 site-container py-24 sm:py-28 lg:py-36">
        <div className="max-w-2xl">
          <span className="mb-6 inline-block rounded-full bg-md3-secondary-container px-3 py-1 text-[10px] font-bold uppercase tracking-[0.3em] text-md3-on-secondary-container shadow-sm">
            For HVAC Contractors
          </span>

          <h1
            className="mb-8 font-headline text-4xl font-light leading-[1.02] tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ textShadow: "0 4px 12px rgba(0,0,0,0.5)" }}
          >
            {headline}
          </h1>
          <p className="mb-10 max-w-lg text-base font-light leading-relaxed text-zinc-300 sm:text-lg">
            {subheadline}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Link
              to="/audit"
              onClick={() =>
                trackEvent("click_cta", { location: "home_hero", label: "Start The Audit" })
              }
              className="rounded-none bg-md3-primary px-6 py-4 sm:px-10 sm:py-5 text-center text-[12px] font-bold uppercase tracking-[0.3em] text-md3-on-primary shadow-xl transition-all hover:bg-[#1a1a1a] hover:shadow-2xl"
            >
              Start The Audit
            </Link>
            <Link
              to="/contact"
              className="rounded-none border border-white/30 bg-white/5 px-6 py-4 sm:px-10 sm:py-5 text-center text-[12px] font-bold uppercase tracking-[0.3em] text-white backdrop-blur-md [border-width:0.5px] transition-all hover:bg-white hover:text-zinc-950"
            >
              Book A Growth Call
            </Link>
          </div>

          {/* Social proof strip */}
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">
            <div
              className="flex items-center gap-2"
              role="img"
              aria-label="4.9 out of 5 stars on Google"
            >
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="size-3.5 fill-yellow-500 text-yellow-500" aria-hidden />
              ))}
              <span className="text-zinc-300" aria-hidden>
                4.9 on Google
              </span>
            </div>
            <span className="opacity-20 hidden sm:block">|</span>
            {stats.map((stat, i) => (
              <React.Fragment key={stat.label}>
                <span className="text-zinc-300">
                  {stat.value} {stat.label}
                </span>
                {i < stats.length - 1 && (
                  <span className="opacity-20 hidden sm:block mx-1">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
