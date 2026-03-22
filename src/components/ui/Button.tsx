import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-none font-sans font-medium uppercase tracking-widest transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
          {
            "bg-accent text-white hover:opacity-80":
              variant === "primary",
            "border border-ink text-ink hover:bg-ink/5":
              variant === "secondary",
            "bg-ink text-white hover:opacity-90": variant === "accent",
            "text-ink hover:bg-ink/5": variant === "ghost",
            "h-10 px-5 text-[10px]": size === "sm",
            "h-12 px-8 text-xs": size === "md",
            "h-14 px-10 text-sm": size === "lg",
          },
          className,
        )}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button };
