import * as React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "featured" | "bordered" | "editorial";
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-none p-6 md:p-8 transition-all duration-300 hover:border-ink/40",
          {
            "bg-surface border border-border": variant === "default",
            "bg-accent text-white border border-accent": variant === "featured",
            "bg-bg border border-border": variant === "bordered",
            "bg-transparent border-t border-border": variant === "editorial",
          },
          className,
        )}
        {...props}
      />
    );
  },
);
Card.displayName = "Card";

export { Card };
