import { useState, useRef, useEffect, useCallback } from "react";
import { useMotionValue, useSpring, useTransform } from "motion/react";

/**
 * useMagnetic Hook
 * Gives a subtle "pull" effect to elements when the mouse is nearby.
 * Perfect for buttons in high-end industrial interfaces.
 */
export function useMagnetic(strength = 0.3) {
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Use springs for that high-end inertial feel.
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;

      const { left, top, width, height } = el.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;

      // Only pull if within range (e.g., 100px)
      const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
      if (distance < 120) {
        x.set(deltaX * strength);
        y.set(deltaY * strength);
      } else {
        x.set(0);
        y.set(0);
      }
    },
    [x, y, strength]
  );

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  return { ref, x: springX, y: springY, reset: handleMouseLeave };
}
