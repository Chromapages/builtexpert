import * as React from "react";
import { Skeleton } from "./Skeleton";
import { Star } from "lucide-react";

export function TestimonialSkeleton() {
  return (
    <div className="flex flex-col gap-6 rounded-2xl border border-[#e5e7eb] bg-white p-8 shadow-sm transition-all [border-width:0.5px]">
      <div className="flex gap-1.5 opacity-20">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star key={i} className="size-3.5" />
        ))}
      </div>
      
      <div className="flex-1 space-y-3">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-4/6" />
      </div>

      <Skeleton className="h-8 w-32 rounded-full" />

      <div className="mt-2 border-t border-[#e5e7eb] pt-6 [border-top-width:0.5px]">
        <Skeleton className="mb-2 h-4 w-24" />
        <Skeleton className="h-3 w-40" />
      </div>
    </div>
  );
}
