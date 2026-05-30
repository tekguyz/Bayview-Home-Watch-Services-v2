import React from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export function SectionWrapper({ id, className, children }: SectionWrapperProps) {
  return (
    <section id={id} className={cn("py-[clamp(4.5rem,9vw,7rem)]", className)}>
      {children}
    </section>
  );
}
