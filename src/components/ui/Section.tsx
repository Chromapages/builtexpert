import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  containerClassName?: string;
  background?: "default" | "dark" | "white" | "surface";
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    {
      className,
      containerClassName,
      background = "default",
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <section
        ref={ref}
        className={cn(
          "py-16 md:py-24",
          {
            "bg-bg": background === "default",
            "bg-accent text-white": background === "dark",
            "bg-white": background === "white",
            "bg-surface": background === "surface",
          },
          className,
        )}
        {...props}
      >
        {/* site-container: the canonical layout class defined in index.css */}
        <div className={cn("site-container", containerClassName)}>
          {children}
        </div>
      </section>
    );
  },
);
Section.displayName = "Section";

export { Section };
