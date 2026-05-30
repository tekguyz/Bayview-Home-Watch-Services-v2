"use client";

import React from "react";

interface ServiceCardProps {
  name: string;
  description: string;
  icon?: React.ReactNode;
}

export function ServiceCard({ name, description, icon }: ServiceCardProps) {
  return (
    <div
      className="relative bg-white rounded-2xl p-6 border border-cream-dark hover:border-teal/40 hover:shadow-lg transition-all duration-300 group overflow-hidden pl-7 cursor-default"
    >
      {/* Accent hover left bar that transitions in */}
      <span className="absolute top-0 left-0 w-1 h-full bg-teal scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100" />
      
      {/* Icon */}
      {icon && (
        <div className="bg-teal-light/50 rounded-xl p-2.5 w-fit text-teal-dark group-hover:scale-105 transition-transform duration-300">
          {icon}
        </div>
      )}
      
      {/* Title */}
      <h4 className="font-display font-bold text-ink text-lg mt-4">
        {name}
      </h4>
      
      {/* Description */}
      <p className="text-ink-soft text-sm leading-relaxed mt-2 font-body">
        {description}
      </p>
    </div>
  );
}
