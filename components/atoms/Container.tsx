import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

export function Container({ className, children }: ContainerProps) {
  return (
    <div className={cn("max-w-7xl mx-auto px-[clamp(1.25rem,5vw,3rem)] w-full", className)}>
      {children}
    </div>
  );
}
