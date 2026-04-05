import { Variants, BezierDefinition } from "motion/react";

/**
 * BuiltExpert OS Animation Tokens
 * Design Philosophy: Industrial Precision, Tactical, Purpose-driven.
 */

export const DURATIONS = {
  instant: 0,
  fast: 0.15,
  normal: 0.3,
  emphasis: 0.6,
  long: 1.2,
};

export const EASINGS = {
  // Ultra-fluid, clean entry. Industrial standard. 
  industrial: [0.16, 1, 0.3, 1] as BezierDefinition,
  // Snappy, tactical interaction feedback.
  tactical: [0.4, 0, 0.2, 1] as BezierDefinition,
  // Standard ease-in-out for basic UI elements.
  standard: [0.65, 0, 0.35, 1] as BezierDefinition,
};

/**
 * Reusable variants for the "BuiltExpert OS" look.
 */
export const OS_VARIANTS: Record<string, Variants> = {
  // The 'scan' reveal mimics a high-precision sensor rendering content.
  scan: {
    hidden: { 
      opacity: 0, 
      clipPath: "inset(100% 0% 0% 0%)",
      filter: "blur(4px)"
    },
    visible: { 
      opacity: 1, 
      clipPath: "inset(0% 0% 0% 0%)",
      filter: "blur(0px)",
      transition: {
        duration: DURATIONS.emphasis,
        ease: EASINGS.industrial,
      }
    }
  },
  
  // Tactical blur-in focus. Good for background elements.
  blurIn: {
    hidden: { opacity: 0, filter: "blur(12px)", scale: 1.05 },
    visible: { 
      opacity: 1, 
      filter: "blur(0px)", 
      scale: 1,
      transition: {
        duration: DURATIONS.emphasis,
        ease: EASINGS.industrial,
      }
    }
  },

  // Slide-and-snap. Fast, high-performance feel.
  slideSnap: {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: DURATIONS.normal,
        ease: EASINGS.industrial,
      }
    }
  }
};
