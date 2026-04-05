import * as React from "react";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  company: string;
  rating?: number;
}

export function TestimonialCard({ quote, name, title, company, rating = 5 }: TestimonialCardProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="border border-border bg-bg p-8 h-full flex flex-col">
      {/* Stars */}
      <div className="flex gap-1 mb-6" aria-label={`${rating} star rating`}>
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="size-4 text-accent fill-accent" aria-hidden />
        ))}
      </div>

      {/* Quote */}
      <p className="text-lg font-sans italic text-ink mb-8 leading-relaxed flex-grow">
        "{quote}"
      </p>

      {/* Attribution */}
      <div className="flex items-center gap-4 mt-auto pt-6 border-t border-border">
        <div className="w-10 h-10 shrink-0 bg-ink flex items-center justify-center">
          <span className="text-[10px] font-bold text-white tracking-wider">{initials}</span>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-ink">{name}</p>
          <p className="text-xs uppercase tracking-widest text-muted">{title} — {company}</p>
        </div>
      </div>
    </div>
  );
}
