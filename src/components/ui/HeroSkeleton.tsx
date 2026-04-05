import * as React from "react";
import { Skeleton } from "./Skeleton";

export function HeroSkeleton() {
  return (
    <div className="relative min-h-[90vh] w-full overflow-hidden bg-[#0a0b0b]">
      {/* Background Image Placeholder */}
      <Skeleton className="absolute inset-0 h-full w-full rounded-none" />
      
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="site-container relative flex h-full min-h-[90vh] flex-col justify-end pb-20 pt-40">
        <div className="max-w-4xl space-y-6">
          {/* Badge */}
          <Skeleton className="h-6 w-32 rounded-full" />
          
          {/* Headline (Multiple Lines) */}
          <div className="space-y-4">
            <Skeleton className="h-16 w-3/4 md:h-20" />
            <Skeleton className="h-16 w-1/2 md:h-20" />
          </div>
          
          {/* Subheadline */}
          <div className="max-w-2xl space-y-2">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-5/6" />
          </div>

          {/* Buttons/CTA area */}
          <div className="flex flex-wrap gap-4 pt-6">
            <Skeleton className="h-14 w-48 rounded-none" />
            <Skeleton className="h-14 w-40 rounded-none bg-white/10" />
          </div>
        </div>

        {/* Stats area */}
        <div className="mt-20 grid grid-cols-2 gap-8 border-t border-white/10 pt-10 md:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="space-y-2">
              <Skeleton className="h-10 w-24" />
              <Skeleton className="h-4 w-32" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
