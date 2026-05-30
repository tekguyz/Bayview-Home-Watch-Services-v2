"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import { CheckCircle, Phone, ShieldCheck } from "lucide-react";
import { Container } from "@/components/atoms/Container";
import { SectionLabel } from "@/components/atoms/SectionLabel";
import { SITE, TRUST_SIGNALS } from "@/constants";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="about" className="bg-cream py-[clamp(4.5rem,9vw,7rem)]">
      <Container>
        <div
          ref={ref}
          className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20"
        >
          {/* Left — Image composition */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            {/* Main image container */}
            <div className="relative aspect-[4/3] sm:aspect-[4/5] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
                alt="South Florida coastal home — watched over by Bayview"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                referrerPolicy="no-referrer"
              />
              {/* Teal frame accent */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-teal/10" />
            </div>

            {/* Floating trust badge — 30% on image, 70% hanging down on mobile, cleanly offset on desktop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.55, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[70%] md:left-auto md:right-[-20px] md:bottom-[-20px] md:translate-x-0 md:translate-y-0 z-10 flex items-center gap-2.5 rounded-2xl bg-white px-4 py-2.5 md:px-5 md:py-4 shadow-xl ring-1 ring-black/5"
            >
              <div className="flex h-9 w-9 md:h-12 md:w-12 flex-shrink-0 items-center justify-center rounded-xl bg-teal/10">
                <ShieldCheck className="text-teal-dark w-4.5 h-4.5 md:w-6 md:h-6" strokeWidth={1.75} />
              </div>
              <div className="min-w-0 flex flex-col justify-center text-left">
                <p className="font-display text-xs md:text-sm font-bold text-ink whitespace-nowrap leading-none">
                  Licensed &amp; Insured
                </p>
                <p className="mt-1 md:mt-1.5 text-[10px] md:text-xs text-ink/65 whitespace-nowrap leading-none">
                  Broward County, Florida
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Copy */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <SectionLabel>About Us</SectionLabel>

            <h2 className="mt-4 font-display text-section-title font-black text-ink">
              A Local Eye on Your Home
            </h2>

            <div className="mt-6 space-y-5">
              <p className="text-body-lg text-ink/70 leading-relaxed">
                Bayview Home Watch Services is a South Florida-based,
                woman-owned business built on one simple idea: your home
                deserves real attention while you&apos;re away. Not a quick
                drive-by. Not a neighbor with good intentions and a spare key.
              </p>
              <p className="text-body-lg text-ink/70 leading-relaxed">
                We know South Florida homes — the humidity, the storms, the
                pipes that decide to leak in August, the AC that picks the
                hottest week of the year to quit. We know what to look for,
                and we actually show up.
              </p>
              <p className="text-body-lg text-ink/70 leading-relaxed">
                Every visit includes photo documentation sent directly to you.
                Because peace of mind isn&apos;t just a phrase — it&apos;s
                something you should be able to see.
              </p>
            </div>

            {/* Trust signals grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2"
            >
              {TRUST_SIGNALS.map((signal, i) => (
                <motion.div
                  key={signal}
                  initial={{ opacity: 0, x: -12 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.45 + i * 0.07 }}
                  className="flex items-center gap-2.5"
                >
                  <CheckCircle
                    className="flex-shrink-0 text-teal-dark"
                    size={18}
                    strokeWidth={2}
                  />
                  <span className="text-sm font-medium text-ink">{signal}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Contact CTA */}
            <div className="mt-10 border-t border-ink/10 pt-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-ink/40">
                Call or text anytime
              </p>
              <a
                href={SITE.phoneHref}
                className="mt-2 inline-flex items-center gap-3 text-ink transition-colors hover:text-teal-dark"
              >
                <Phone className="text-teal-dark" size={22} strokeWidth={1.75} />
                <span className="font-display text-2xl font-bold">
                  {SITE.phone}
                </span>
              </a>

              {/* Brand quote */}
              <blockquote className="mt-8 border-l-4 border-teal pl-5">
                <p className="font-script text-xl italic text-ink/55 leading-relaxed">
                  &ldquo;All clear. You&apos;re good. Go enjoy life.&rdquo;
                </p>
              </blockquote>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}