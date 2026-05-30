"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { motion } from "motion/react";
import { Container } from "@/components/atoms/Container";
import { SectionLabel } from "@/components/atoms/SectionLabel";
import { SITE } from "@/constants";

export function HeroSection() {
  const handlePrimaryClick = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSecondaryClick = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  const animProps = (delay: number, customY = 12) => ({
    initial: { opacity: 0, y: customY },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.6,
      delay,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  });

  return (
    <section className="relative min-h-screen md:min-h-[100svh] flex flex-col justify-center overflow-x-hidden pt-20 pb-12 md:pt-28 md:pb-16 bg-navy">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 select-none pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2070&q=80"
          alt="Luxury South Florida waterfront home with pool"
          fill
          sizes="100vw"
          priority
          quality={90}
          className="object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Mobile Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/55 via-navy/85 to-navy/98 md:hidden" />
        {/* Desktop Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/94 via-navy/80 to-navy/20 hidden md:block" />
      </div>

      {/* Hero Content Grid */}
      <Container className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
        <div className="max-w-2xl w-full">
          {/* Section Label */}
          <motion.div {...animProps(0.05)}>
            <SectionLabel className="mb-4 bg-white/10 text-teal border-teal/30 hover:bg-white/20 transition-all text-[10px] sm:text-xs tracking-wider md:tracking-widest px-3 py-0.5 sm:px-3.5 sm:py-1">
              South Florida&apos;s Trusted Home Watch
            </SectionLabel>
          </motion.div>

          {/* Headline containing serif, script and clean sans-serif segments */}
          <h1 className="font-display font-black text-white text-hero flex flex-col gap-0 leading-tight">
            <motion.span {...animProps(0.12)} className="block">
              Someone&apos;s Gotta
            </motion.span>
            <motion.span {...animProps(0.18)} className="block">
              Make Sure Your
            </motion.span>
            
            {/* Paradise element wrapped in a script look */}
            <motion.div
              {...animProps(0.26, 16)}
              className="font-script text-hero-script text-teal block leading-none select-none my-0.5"
            >
              Paradise
            </motion.div>
            
            <motion.span {...animProps(0.34)} className="block font-bold">
              Doesn&apos;t Turn Into a Project.
            </motion.span>
          </h1>

          {/* Subheadline description copy */}
          <motion.p
            {...animProps(0.42)}
            className="text-body-lg text-white/80 mt-3.5 max-w-xl font-body leading-relaxed"
          >
            While you&apos;re soaking up sunshine somewhere north, we&apos;re keeping a close eye on your{" "}
            South Florida home. Professional home watch — so you can actually relax.
          </motion.p>

          {/* CTA Row actions */}
          <motion.div
            {...animProps(0.5)}
            className="flex flex-col gap-2.5 sm:flex-row sm:gap-4 mt-6 flex-wrap justify-center md:justify-start"
          >
            <button
              onClick={handlePrimaryClick}
              className="bg-teal text-navy hover:bg-teal/90 px-7 py-3.5 rounded-full font-bold text-[1rem] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-lg shadow-navy/30"
            >
              Get a Free Consultation
            </button>
            <button
              onClick={handleSecondaryClick}
              className="border-2 border-white/80 text-white hover:bg-white/10 px-7 py-[12px] rounded-full font-semibold text-[1rem] transition-all duration-200 cursor-pointer"
            >
              See What We Do &rarr;
            </button>
          </motion.div>

          {/* Trust strip indicators */}
          <motion.div
            {...animProps(0.58)}
            className="flex flex-col gap-2.5 mt-7 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2 pt-4.5 border-t border-white/10"
          >
            {[
              "Licensed & Insured",
              "Broward County Local",
              "24/7 Emergency Response",
            ].map((signal) => (
              <div key={signal} className="flex items-center gap-2">
                <div className="w-4.5 h-4.5 rounded-full bg-teal/20 flex items-center justify-center flex-shrink-0">
                  <Check size={10} className="text-teal" strokeWidth={3} />
                </div>
                <span className="text-white/75 text-xs sm:text-sm font-medium">
                  {signal}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>

      {/* Scroll cue at the bottom of the hero section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="hidden md:flex flex-col items-center gap-1.5 absolute bottom-4 left-1/2 -translate-x-1/2 select-none pointer-events-none"
        aria-hidden="true"
      >
        <span className="text-white/30 text-[9px] tracking-[0.2em] uppercase font-medium">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
        />
      </motion.div>
    </section>
  );
}