import * as React from "react";
import { Skeleton } from "./Skeleton";
import { Card } from "./Card";

export function CardSkeleton() {
  return (
    <Card className="flex h-full flex-col overflow-hidden p-0">
      {/* Image Area */}
      <Skeleton className="aspect-[16/11] w-full rounded-none" />
      
      <div className="flex flex-1 flex-col p-6 lg:p-8">
        <div className="mb-4 flex items-center gap-3">
          {/* Icon */}
          <Skeleton className="size-6 rounded-md" />
          {/* Title */}
          <Skeleton className="h-6 w-1/2" />
        </div>
        
        {/* Body text lines */}
        <div className="mb-8 space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-4/6" />
        </div>

        {/* Button placeholder at bottom */}
        <Skeleton className="mt-auto h-12 w-full rounded-none" />
      </div>
    </Card>
  );
}
