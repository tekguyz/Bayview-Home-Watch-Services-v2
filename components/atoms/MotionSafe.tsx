"use client";

import React, { useState, useEffect } from "react";
import { useReducedMotion } from "motion/react";

/**
 * Wraps children and disables Framer Motion animations globally
 * when the user has enabled "Reduce Motion" in their OS accessibility settings.
 *
 * Usage: Wrap your <main> in app/page.tsx with <MotionSafe>.
 */
export function MotionSafe({ children }: { children: React.ReactNode }) {
  const shouldReduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  if (mounted && shouldReduce) {
    // Inject a global style that disables all animations and transitions
    return (
      <>
        <style>{`
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        `}</style>
        {children}
      </>
    );
  }

  return <>{children}</>;
}
