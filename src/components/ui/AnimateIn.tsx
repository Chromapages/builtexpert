import * as React from "react";
import { motion, Variants, HTMLMotionProps, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import { DURATIONS, EASINGS, OS_VARIANTS } from "@/lib/animation";

export type AnimationVariant = "slide" | "scan" | "blur" | "fade";

export interface AnimateInProps
  extends Omit<HTMLMotionProps<"div">, "children"> {
  children?: React.ReactNode;
  delay?: number;
  stagger?: boolean;
  staggerChildren?: number;
  variant?: AnimationVariant;
  viewMargin?: string;
  once?: boolean;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (custom: { staggerChildren: number; delay: number }) => ({
    opacity: 1,
    transition: {
      staggerChildren: custom.staggerChildren,
      delayChildren: custom.delay,
    },
  }),
};

const getVariants = (variant: AnimationVariant): Variants => {
  switch (variant) {
    case "scan":
      return OS_VARIANTS.scan;
    case "blur":
      return OS_VARIANTS.blurIn;
    case "fade":
      return {
        hidden: { opacity: 0 },
        visible: { 
          opacity: 1,
          transition: { duration: DURATIONS.normal, ease: EASINGS.standard }
        }
      };
    case "slide":
    default:
      return OS_VARIANTS.slideSnap;
  }
};

export function AnimateIn({
  children,
  className,
  delay = 0,
  stagger = false,
  staggerChildren = 0.1,
  variant = "slide",
  viewMargin = "-100px",
  once = true,
  ...props
}: AnimateInProps) {
  const shouldReduceMotion = useReducedMotion();
  const activeVariants = getVariants(variant);

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  if (stagger) {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: viewMargin }}
        custom={{ staggerChildren, delay }}
        className={className}
        {...props}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return <motion.div variants={activeVariants}>{child}</motion.div>;
          }
          return child;
        })}
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={activeVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: viewMargin }}
      transition={{ delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * Character/Word reveal utility for headlines.
 */
export function TextReveal({ 
  text, 
  className, 
  delay = 0,
  type = "word" 
}: { 
  text: string; 
  className?: string; 
  delay?: number;
  type?: "word" | "char";
}) {
  const items = type === "word" ? text.split(" ") : text.split("");
  
  return (
    <AnimateIn 
      stagger 
      staggerChildren={type === "word" ? 0.05 : 0.02} 
      delay={delay}
      variant="slide"
      className={cn("inline-block", className)}
    >
      {items.map((item, i) => (
        <span key={i} className="inline-block mr-[0.25em] whitespace-nowrap">
          {item}
        </span>
      ))}
    </AnimateIn>
  );
}
