"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Droplets, Thermometer, Leaf, Bug, Package, Car, CheckCircle } from "lucide-react";
import { motion, useInView } from "motion/react";
import { PROBLEM_ITEMS } from "@/constants";
import { SectionWrapper } from "@/components/atoms/SectionWrapper";
import { Container } from "@/components/atoms/Container";
import { SectionLabel } from "@/components/atoms/SectionLabel";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Droplets,
  Thermometer,
  Leaf,
  Bug,
  Package,
  Car,
};

export function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const handleScrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <SectionWrapper id="problem" className="bg-cream">
      <Container>
        {/* Two-column Layout on lg+ */}
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (Content) */}
          <div className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left">
            <SectionLabel>Why It Matters</SectionLabel>
            
            <h2 className="font-display text-section-title font-black text-ink mt-4">
              What Happens When No One&apos;s Watching
            </h2>
            
            <p className="text-body-lg text-ink-soft mt-4 max-w-lg font-body">
              South Florida homes don&apos;t sit quietly while you&apos;re gone. Without regular eyes on your property, small issues quietly grow into expensive problems.
            </p>

            {/* Grid of 6 problem items (2 columns on sm+) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 w-full">
              {PROBLEM_ITEMS.map((item, index) => {
                const IconComponent = ICON_MAP[item.icon];
                return (
                  <div
                    key={index}
                    className="flex items-start gap-3.5 bg-white rounded-xl p-4 shadow-sm border border-cream-dark border-l-4 border-l-[oklch(62%_0.18_28/0.65)] hover:shadow-md transition-all duration-200 text-left"
                  >
                    <div className="bg-coral/10 rounded-full p-2 shrink-0 flex items-center justify-center">
                      {IconComponent ? (
                        <IconComponent className="w-5 h-5 text-coral" />
                      ) : (
                        <span className="w-5 h-5 block" />
                      )}
                    </div>
                    <span className="text-ink font-body font-medium text-sm leading-snug">
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column (Visual Stacked Cards) */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5]">
              {/* Main Image */}
              <div className="w-full h-full rounded-2xl overflow-hidden shadow-xl border border-cream-dark relative">
                <Image
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80"
                  alt="Beautiful Florida luxury home exterior with lawn and pool area"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating "Badge" Resolution Card */}
              <motion.div
                initial={{ opacity: 0, y: 12, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="absolute bottom-5 left-5 z-10 bg-white rounded-xl shadow-xl px-5 py-4 flex items-center gap-3 ring-1 ring-black/5"
              >
                <CheckCircle className="text-teal-dark flex-shrink-0" size={28} strokeWidth={1.75} />
                <div>
                  <p className="font-display font-bold text-ink text-base leading-tight">All Clear.</p>
                  <p className="text-ink/65 text-xs mt-0.5">Your home is exactly as you left it.</p>
                </div>
              </motion.div>
            </div>
          </div>

        </div>

        {/* Bridge Line at Bottom */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-ink-soft/10 w-full text-center">
          <p className="text-ink-soft text-body-lg font-body">
            That&apos;s where we come in.{" "}
            <a
              href="#services"
              onClick={handleScrollToServices}
              className="text-teal-dark font-semibold hover:underline underline-offset-4"
            >
              See everything we do &rarr;
            </a>
          </p>
        </div>
      </Container>
    </SectionWrapper>
  );
}
