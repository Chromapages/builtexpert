import * as React from "react";
import { motion, HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";

export interface CardProps extends HTMLMotionProps<"div"> {
  variant?: "default" | "dark" | "bordered";
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={{ y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
        className={cn(
          "rounded-xl p-6 md:p-8 transition-shadow duration-300",
          {
            "bg-white shadow-card hover:shadow-elevated": variant === "default",
            "bg-indigo-900 text-white shadow-card hover:shadow-elevated":
              variant === "dark",
            "bg-off-white border border-neutral-200": variant === "bordered",
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
