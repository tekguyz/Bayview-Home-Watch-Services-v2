"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { MapPin, Phone, Mail } from "lucide-react";
import { Container } from "@/components/atoms/Container";
import { SectionLabel } from "@/components/atoms/SectionLabel";
import { SITE, SERVICE_AREA } from "@/constants";

export function ServiceAreaSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="service-area" className="bg-white py-[clamp(4.5rem,9vw,7rem)]">
      <Container>
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-14 text-center"
        >
          <SectionLabel>Where We Work</SectionLabel>
          <h2 className="mt-4 font-display text-section-title font-black text-ink">
            {SERVICE_AREA.headline}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-body-lg text-ink/60">
            {SERVICE_AREA.subheadline}
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12">

          {/* Left — decorative map panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative flex min-h-[340px] flex-col items-center justify-center overflow-hidden rounded-3xl bg-navy p-10 text-center"
          >
            {/* Animated glow blobs — purely decorative */}
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.14, 0.08] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-12 -top-12 h-56 w-56 rounded-full bg-teal blur-3xl pointer-events-none"
              aria-hidden="true"
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.06, 0.11, 0.06] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute -bottom-10 -right-8 h-44 w-44 rounded-full bg-teal blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            {/* Inner border accent */}
            <div className="absolute inset-4 rounded-2xl border border-teal/20" />

            {/* Content */}
            <div className="relative z-10">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-teal/15">
                <MapPin className="text-teal" size={32} strokeWidth={1.75} />
              </div>
              <p className="mt-5 font-display text-4xl font-black text-white">
                Broward County
              </p>
              <p className="mt-2 text-lg text-white/60">South Florida</p>

              <div className="mt-8 flex items-center justify-center gap-2">
                <span className="h-px w-10 bg-teal/40" />
                <p className="font-script text-xl italic text-teal/80">
                  From the beach to the bay
                </p>
                <span className="h-px w-10 bg-teal/40" />
              </div>
            </div>
          </motion.div>

          {/* Right — city grid */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-display text-xl font-bold text-ink"
            >
              Communities We Serve
            </motion.p>

            <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
              {SERVICE_AREA.cities.map((city, i) => (
                <motion.div
                  key={city}
                  initial={{ opacity: 0, y: 14 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: 0.25 + i * 0.055,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className="flex items-center gap-2 rounded-xl bg-cream px-3.5 py-2.5 transition-colors duration-200 hover:bg-teal-light/50"
                >
                  <MapPin className="flex-shrink-0 text-teal-dark" size={13} strokeWidth={2} />
                  <span className="whitespace-nowrap text-sm font-medium text-ink/75">{city}</span>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="mt-5 text-sm italic text-ink/60"
            >
              Don&apos;t see your city? Reach out — we may still be able to help.
            </motion.p>
          </div>
        </div>

        {/* Full-width bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex flex-col items-center justify-between gap-6 rounded-3xl bg-teal-light/35 px-8 py-10 text-center sm:flex-row sm:text-left sm:px-10"
        >
          <div>
            <p className="font-display text-2xl font-bold text-ink">
              Heading back north for the season?
            </p>
            <p className="mt-1.5 text-ink/60">
              Let&apos;s get your home covered before you go.
            </p>
          </div>
          <div className="flex flex-shrink-0 flex-col gap-3 sm:flex-row">
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-teal px-6 py-3 text-sm font-semibold text-navy transition-all duration-200 hover:bg-teal/85"
            >
              <Phone size={16} strokeWidth={2} />
              Call Now
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-navy/25 px-6 py-3 text-sm font-semibold text-navy transition-all duration-200 hover:border-navy hover:bg-navy hover:text-white"
            >
              <Mail size={16} strokeWidth={2} />
              Send a Message
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
