"use client";

import React, { useRef, Fragment } from "react";
import { motion, useInView } from "motion/react";
import { MessageCircle, ShieldCheck, Heart } from "lucide-react";
import { Container } from "@/components/atoms/Container";
import { SectionLabel } from "@/components/atoms/SectionLabel";
import { SITE, HOW_IT_WORKS } from "@/constants";

const ICONS = { MessageCircle, ShieldCheck, Heart } as const;

function StepCard({
  step,
  title,
  body,
  icon,
  index,
}: {
  step: string;
  title: string;
  body: string;
  icon: string;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const Icon = ICONS[icon as keyof typeof ICONS];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.18, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-8 transition-all duration-300 hover:border-teal/40 hover:bg-white/[0.07] group"
    >
      {/* Decorative step number */}
      <span
        aria-hidden="true"
        className="absolute right-5 top-4 select-none font-display font-black leading-none text-white/[0.05] pointer-events-none"
        style={{ fontSize: "clamp(4rem, 8vw, 6rem)" }}
      >
        {step}
      </span>

      {/* Icon */}
      <div className="relative z-10 w-fit rounded-xl bg-teal/15 p-3.5">
        {Icon && <Icon className="text-teal" size={26} strokeWidth={1.75} />}
      </div>

      {/* Content */}
      <h3 className="relative z-10 mt-6 font-display text-xl font-bold text-white">{title}</h3>
      <p className="relative z-10 mt-3 text-sm leading-relaxed text-white/60">{body}</p>
    </motion.div>
  );
}

export function HowItWorksSection() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });

  return (
    <section id="how-it-works" className="bg-navy py-[clamp(4.5rem,9vw,7rem)]">
      <Container>
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-14 text-center"
        >
          <SectionLabel className="border-teal/50 bg-teal/10 text-teal">
            The Process
          </SectionLabel>
          <h2 className="mt-4 font-display text-section-title font-black text-white">
            Peace of Mind in Three Easy Steps
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-body-lg text-white/60">
            Getting started is simple. We handle everything else so you can
            actually enjoy being away.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 gap-6 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:gap-4">
          {HOW_IT_WORKS.map((item, i) => (
            <Fragment key={item.step}>
              <StepCard {...item} index={i} />
              {i < HOW_IT_WORKS.length - 1 && (
                <div
                  key={`connector-${i}`}
                  className="hidden lg:flex items-center justify-center self-center"
                  aria-hidden="true"
                >
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={headerInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 + i * 0.2, ease: "easeOut" }}
                    style={{ transformOrigin: "left" }}
                    className="w-10 h-px border-t-2 border-dashed border-white/20"
                  />
                </div>
              )}
            </Fragment>
          ))}
        </div>

        {/* Connecting arrows — desktop only, positioned between cards */}
        <div className="pointer-events-none absolute inset-0 hidden lg:block">
          {/* These are purely decorative, rendered via the grid gap */}
        </div>

        {/* Bottom CTA note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-14 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <p className="text-sm text-white/40">
            Have questions before you start?
          </p>
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center gap-2 rounded-full border border-teal/40 px-5 py-2 text-sm font-semibold text-teal transition-all duration-200 hover:border-teal hover:bg-teal/10"
          >
            Call {SITE.phone}
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
