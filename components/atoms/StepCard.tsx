"use client";

import React from "react";
import * as Lucide from "lucide-react";

interface StepCardProps {
  step: string;
  title: string;
  body: string;
  iconName: string;
}

export function StepCard({ step, title, body, iconName }: StepCardProps) {
  // Dynamically resolve the icon from Lucide
  const IconComponent = (Lucide as any)[iconName] || Lucide.HelpCircle;

  return (
    <div
      className="relative overflow-hidden rounded-2xl bg-navy-light/60 border border-white/10 p-8 hover:border-teal/40 transition duration-300 flex-1 flex flex-col select-none group"
    >
      {/* Decorative large Step Number watermarked at top right */}
      <div className="absolute top-4 right-4 font-display font-black text-6xl md:text-7xl leading-none text-teal/10 pointer-events-none select-none group-hover:scale-110 group-hover:text-teal/15 transition-all duration-300">
        {step}
      </div>

      {/* Icon Area */}
      <div className="bg-teal/15 rounded-xl p-3 w-fit text-teal shrink-0 mb-6 group-hover:bg-teal/20 transition-colors">
        <IconComponent className="w-6 h-6 stroke-[2.5px]" />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-end">
        <h3 className="font-display font-bold text-inverse text-xl leading-tight">
          {title}
        </h3>
        <p className="text-inverse/70 text-sm leading-relaxed mt-3 font-body">
          {body}
        </p>
      </div>
    </div>
  );
}
