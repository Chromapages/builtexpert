import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "indigo" | "teal" | "neutral" | "success";
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "indigo", ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold tracking-wide uppercase",
          {
            "bg-indigo-900/10 text-indigo-900": variant === "indigo",
            "bg-teal-600/10 text-teal-600": variant === "teal",
            "bg-neutral-600/10 text-neutral-600": variant === "neutral",
            "bg-emerald-500/10 text-emerald-600": variant === "success",
          },
          className,
        )}
        {...props}
      />
    );
  },
);
Badge.displayName = "Badge";

export { Badge };
