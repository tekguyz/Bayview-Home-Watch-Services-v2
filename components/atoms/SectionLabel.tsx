import React from "react";
import { cn } from "@/lib/utils";

interface SectionLabelProps {
  className?: string;
  children: React.ReactNode;
}

export function SectionLabel({ className, children }: SectionLabelProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-teal/40 bg-teal-light/40 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-teal-dark",
        className
      )}
    >
      {children}
    </span>
  );
}
