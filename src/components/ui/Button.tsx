import * as React from "react";
import { motion, HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";
import { useMagnetic } from "@/hooks/useMagnetic";

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: "primary" | "secondary" | "accent" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  isMagnetic?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", isMagnetic = true, children, ...props }, ref) => {
    const { ref: magneticRef, x, y } = useMagnetic(0.2); // Low strength for industrial precision.
    
    // Combine magnetic ref with forwarded ref
    const combinedRef = (node: HTMLButtonElement | null) => {
      if (typeof ref === "function") ref(node);
      else if (ref) ref.current = node;
      if (isMagnetic) {
        // @ts-ignore
        magneticRef.current = node;
      }
    };

    return (
      <motion.button
        ref={combinedRef}
        style={isMagnetic ? { x, y } : {}}
        variants={{
          hover: { scale: 1.02 },
          tap: { scale: 0.98 },
        }}
        whileHover="hover"
        whileTap="tap"
        className={cn(
          "group relative inline-flex items-center justify-center rounded-none font-headline font-bold uppercase tracking-wider transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-md3-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 overflow-hidden",
          {
            "bg-md3-primary text-white hover:bg-[#1a1a1a]": variant === "primary",
            "border border-zinc-200 text-zinc-900 hover:bg-zinc-50": variant === "secondary",
            "bg-zinc-900 text-white hover:bg-black": variant === "accent",
            "text-zinc-600 hover:text-zinc-900": variant === "ghost",
            "border border-white/20 text-white hover:bg-white/10": variant === "outline",
            "h-10 px-5 text-[10px]": size === "sm",
            "h-12 px-8 text-[11px]": size === "md",
            "h-14 px-10 text-xs": size === "lg",
          },
          className
        )}
        {...props}
      >
        {/* Tactical Border Glow on Hover */}
        <span className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
           <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
           <span className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
        </span>

        <span className="relative z-10 flex items-center gap-2">
          {children as React.ReactNode}
        </span>
      </motion.button>
    );
  }
);
Button.displayName = "Button";

export { Button };
