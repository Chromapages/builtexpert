import * as React from "react";
import { motion, Variants, HTMLMotionProps, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

export interface AnimateInProps
  extends Omit<HTMLMotionProps<"div">, "children"> {
  children?: React.ReactNode;
  delay?: number;
  stagger?: boolean;
  staggerChildren?: number;
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

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function AnimateIn({
  children,
  className,
  delay = 0,
  stagger = false,
  staggerChildren = 0.1,
  ...props
}: AnimateInProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  if (stagger) {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        custom={{ staggerChildren, delay }}
        className={className}
        {...props}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return <motion.div variants={itemVariants}>{child}</motion.div>;
          }
          return child;
        })}
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
