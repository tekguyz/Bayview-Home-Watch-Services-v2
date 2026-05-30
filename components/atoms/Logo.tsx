"use client";

import React from "react";

interface LogoProps {
  variant?: "light" | "dark"; // light = for dark backgrounds, dark = for light backgrounds
  className?: string;
  showWordmark?: boolean; // default true
  size?: "sm" | "md" | "lg"; // sm=32, md=40, lg=52 icon size
}

export function Logo({
  variant = "light",
  className = "",
  showWordmark = true,
  size = "md",
}: LogoProps) {
  // Map size to container pixels
  const iconSize = size === "sm" ? 32 : size === "md" ? 40 : 52;
  const wordmarkGap = size === "sm" ? "gap-2" : size === "md" ? "gap-2.5" : "gap-3";

  // Brand colors
  const brandNavy = "#1B2B50";
  const brandTeal = "#00ADAC";
  const brandCream = "#F5F0E8";

  const isLight = variant === "light";
  const lineColor = isLight ? "#FFFFFF" : brandNavy;
  const wordmarkMainColor = isLight ? "text-white" : "text-[#1B2B50]";
  const wordmarkSubColor = isLight ? "text-teal" : "text-teal-dark";

  return (
    <div className={`flex items-center ${wordmarkGap} select-none ${className}`}>
      {/* Icon Mark */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 hover:scale-105"
        aria-hidden="true"
      >
        {/* Background rounded square */}
        <rect
          width="44"
          height="44"
          rx="10"
          fill={isLight ? brandNavy : brandCream}
        />

        {/* House Outline */}
        <path
          d="M12 22 L22 13 L32 22 V31 H12 Z"
          stroke={lineColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Eye Eyelids (Subtle elegant line curves) */}
        <path
          d="M17 24.5 Q22 21 27 24.5"
          stroke={isLight ? "#FFFFFF" : brandNavy}
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M17 24.5 Q22 28 27 24.5"
          stroke={isLight ? "#FFFFFF" : brandNavy}
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Eye Pupil */}
        <circle cx="22" cy="24.5" r="2.2" fill={brandTeal} />

        {/* Wave Curves Below House */}
        <path
          d="M11 34 Q16.5 32 22 34 T33 34"
          stroke={brandTeal}
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M11 37 Q16.5 35 22 37 T33 37"
          stroke={brandTeal}
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      {/* Wordmark (beside the icon) */}
      {showWordmark && (
        <div className="flex flex-col select-none leading-none">
          <span
            className={`font-display font-extrabold ${wordmarkMainColor} tracking-tight`}
            style={{
              fontSize: size === "sm" ? "15px" : size === "md" ? "18px" : "22px",
              lineHeight: 1,
            }}
          >
            BAYVIEW
          </span>
          <span
            className={`font-body font-semibold ${wordmarkSubColor} uppercase tracking-[0.2em]`}
            style={{
              fontSize: size === "sm" ? "6.5px" : size === "md" ? "8px" : "9.5px",
              marginTop: size === "sm" ? "2px" : "4px",
              lineHeight: 1,
            }}
          >
            HOME WATCH SERVICES
          </span>
        </div>
      )}
    </div>
  );
}
