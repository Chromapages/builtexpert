import * as React from "react";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { industrialTextGradientStyle } from "@/lib/industrialStyle";
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
  videoUrl 
}: HomeHeroProps) {
  return (
    <section
      className="relative -mt-24 flex min-h-[95vh] items-center overflow-hidden bg-cover bg-center bg-no-repeat pt-24"
      style={!videoUrl ? { backgroundImage: `url(${bgImage})` } : {}}
    >
      {videoUrl && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 z-0 h-full w-full object-cover"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      )}
      <div className="absolute inset-0 z-0">
        {/* Premium industrial overlay: dark to transparent gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/60 to-zinc-900/30" />
        <div className="absolute inset-0 bg-zinc-950/20 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 site-container pb-16 sm:pb-20 lg:pb-32 pt-16 sm:pt-20 md:pt-24 lg:pt-32">
        <div className="grid items-center gap-8 sm:gap-12 lg:gap-16 lg:grid-cols-2">

          {/* Left: headline + CTAs */}
          <div className="z-10">
            {/* Badge is now properly padded within the hero container */}
            <span className="mb-6 inline-block rounded-full bg-md3-secondary-container px-3 py-1 text-[10px] font-bold uppercase tracking-[0.3em] text-md3-on-secondary-container">
              For Electricians & HVAC Contractors
            </span>

            <h1 className="mb-6 font-headline text-4xl font-light leading-[1.02] tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              {headline}
            </h1>
            <p className="mb-10 max-w-lg text-base font-light leading-relaxed text-zinc-300 sm:text-lg">
              {subheadline}
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link
                to="/audit"
                onClick={() => trackEvent("click_cta", { location: "home_hero", label: "Start The Audit" })}
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

            {/* Social proof strip simplified */}
            <div
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400"
            >
              <div className="flex items-center gap-2" role="img" aria-label="4.9 out of 5 stars on Google">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className="size-3.5 fill-yellow-500 text-yellow-500"
                    aria-hidden
                  />
                ))}
                <span className="text-zinc-300" aria-hidden>4.9 on Google</span>
              </div>
              <span className="opacity-20 hidden sm:block">|</span>
              {stats.map((stat, i) => (
                <React.Fragment key={stat.label}>
                  <span className="text-zinc-300">{stat.value} {stat.label}</span>
                  {i < stats.length - 1 && <span className="opacity-20 hidden sm:block mx-1">|</span>}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="hidden lg:block h-full" />
        </div>
      </div>
    </section>
  );
}
