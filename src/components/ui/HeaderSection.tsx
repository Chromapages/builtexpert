import React from "react";
import { INDUSTRIAL } from "@/lib/industrialStyle";

interface HeaderSectionProps {
  badge: string;
  title: React.ReactNode;
  description: React.ReactNode;
  imageSrc: string;
  imageAlt?: string;
}

export function HeaderSection({
  badge,
  title,
  description,
  imageSrc,
  imageAlt = "Industrial background",
}: HeaderSectionProps) {
  return (
    <section 
      className="relative overflow-hidden py-24 lg:py-32" 
      style={{ borderBottomWidth: "0.5px", borderColor: INDUSTRIAL.outline }}
    >
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src={imageSrc} 
          alt={imageAlt} 
          className="h-full w-full object-cover" 
        />
        {/* Deep Industrial Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-zinc-950/40" />
      </div>

      <div className="relative z-20 mx-auto max-w-[1728px] px-6 lg:px-8">
        <div className="max-w-4xl">
          <span className="mb-6 inline-block rounded-full bg-md3-primary px-3 py-1 text-[10px] font-bold uppercase tracking-[0.3em] text-white">
            {badge}
          </span>
          <h1 className="mb-10 font-headline text-5xl font-light leading-[0.95] tracking-tighter text-white md:text-7xl">
            {title}
          </h1>
          <p className="max-w-xl text-xl font-light leading-relaxed text-zinc-300">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
