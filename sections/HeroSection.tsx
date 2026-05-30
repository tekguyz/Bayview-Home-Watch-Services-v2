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

  const animProps = (delay: number, customY = 18) => ({
    initial: { opacity: 0, y: customY },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.7,
      delay,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  });

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden pt-20 md:pt-24 bg-navy">
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
        <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-navy/80 to-navy/98 md:hidden" />
        {/* Desktop Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/94 via-navy/75 to-navy/15 hidden md:block" />
      </div>

      {/* Hero Content Grid */}
      <Container className="relative z-10 py-16 md:py-24 flex flex-col items-center md:items-start text-center md:text-left">
        <div className="max-w-2xl">
          {/* Section Label */}
          <motion.div {...animProps(0.1)}>
            <SectionLabel className="mb-6 bg-white/10 text-teal border-teal/30 hover:bg-white/20 transition-all">
              South Florida&apos;s Trusted Home Watch Service
            </SectionLabel>
          </motion.div>

          {/* Headline containing serif, script and clean sans-serif segments */}
          <h1 className="font-display font-black text-white text-hero flex flex-col gap-0.5 leading-tight">
            <motion.span {...animProps(0.2)} className="block">
              Someone&apos;s Gotta
            </motion.span>
            <motion.span {...animProps(0.25)} className="block">
              Make Sure Your
            </motion.span>
            
            {/* Paradise element wrapped in a script look */}
            <motion.div
              {...animProps(0.35, 24)}
              className="font-script text-hero-script text-teal block leading-none select-none"
            >
              Paradise
            </motion.div>
            
            <motion.span {...animProps(0.45)} className="block font-bold">
              Doesn&apos;t Turn Into a Project.
            </motion.span>
          </h1>

          {/* Subheadline description copy */}
          <motion.p
            {...animProps(0.55)}
            className="text-body-lg text-white/80 mt-6 max-w-xl font-body"
          >
            While you&apos;re soaking up sunshine somewhere north, we&apos;re keeping a close eye on your{" "}
            South Florida home. Professional home watch — so you can actually relax.
          </motion.p>

          {/* CTA Row actions */}
          <motion.div
            {...animProps(0.65)}
            className="flex flex-col gap-3 sm:flex-row sm:gap-4 mt-8 flex-wrap justify-center md:justify-start"
          >
            <button
              onClick={handlePrimaryClick}
              className="bg-teal text-navy hover:bg-teal/90 px-8 py-4 rounded-full font-bold text-[1.05rem] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-lg shadow-navy/30"
            >
              Get a Free Consultation
            </button>
            <button
              onClick={handleSecondaryClick}
              className="border-2 border-white/80 text-white hover:bg-white/10 px-8 py-[14px] rounded-full font-semibold text-[1.05rem] transition-all duration-200 cursor-pointer"
            >
              See What We Do &rarr;
            </button>
          </motion.div>

          {/* Trust strip indicators */}
          <motion.div
            {...animProps(0.75)}
            className="flex flex-col gap-3 mt-10 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-3 pt-6 border-t border-white/10"
          >
            {[
              "Licensed & Insured",
              "Broward County Local",
              "24/7 Emergency Response",
            ].map((signal) => (
              <div key={signal} className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-teal/30 flex items-center justify-center flex-shrink-0">
                  <Check size={11} className="text-teal" strokeWidth={3} />
                </div>
                <span className="text-white/75 text-sm font-medium">
                  {signal}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Scroll cue at the bottom of the hero */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="hidden md:flex flex-col items-center gap-2 mt-16 absolute bottom-8 left-1/2 -translate-x-1/2"
            aria-hidden="true"
          >
            <span className="text-white/30 text-[10px] tracking-[0.2em] uppercase font-medium">
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
