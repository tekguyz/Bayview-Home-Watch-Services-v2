"use client";

import React from "react";
import { Phone, Mail, CheckCircle } from "lucide-react";
import { ContactForm } from "@/components/molecules/ContactForm";
import { SITE, CONTACT_TRUST_SIGNALS } from "@/constants";
import { SectionWrapper } from "@/components/atoms/SectionWrapper";
import { Container } from "@/components/atoms/Container";
import { SectionLabel } from "@/components/atoms/SectionLabel";

export function ContactSection() {
  const selectedTrustSignals = CONTACT_TRUST_SIGNALS;

  return (
    <SectionWrapper id="contact" className="bg-cream">
      <Container>
        {/* Split Layout: 1 lg column for copy/trust, 1 lg column for form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (Copy + Trust details) */}
          <div className="lg:col-span-5 flex flex-col items-center text-center lg:items-start lg:text-left">
            <SectionLabel>Get in Touch</SectionLabel>
            
            <h2 className="font-display text-section-title font-black text-ink mt-4">
              Let&apos;s Keep Your Home Protected
            </h2>
            
            <p className="text-body-lg text-ink-soft mt-4 font-body leading-relaxed max-w-lg">
              Tell us a little about your home and we&apos;ll reach out within 24 hours to talk through the right plan.
            </p>

            {/* Contact Details Block */}
            <div className="mt-8 space-y-4 w-full select-all">
              <a
                href={SITE.phoneHref}
                className="flex items-center gap-4 group justify-center lg:justify-start"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-teal-light text-teal-dark group-hover:scale-105 transition-transform duration-200">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="font-display font-extrabold text-ink text-lg sm:text-xl group-hover:text-teal-dark transition-colors">
                  {SITE.phone}
                </span>
              </a>

              <a
                href={SITE.emailHref}
                className="flex items-center gap-4 group justify-center lg:justify-start"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-teal-light text-teal-dark group-hover:scale-105 transition-transform duration-200">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-body text-ink text-sm sm:text-base group-hover:text-teal-dark transition-colors break-all">
                  {SITE.email}
                </span>
              </a>
            </div>

            {/* Trust Signals list (4 items, each with teal check circle) */}
            <div className="mt-8 space-y-3.5 w-full border-t border-cream-dark/60 pt-6">
              {selectedTrustSignals.map((signal) => (
                <div key={signal} className="flex items-center gap-3.5 justify-center lg:justify-start">
                  <CheckCircle className="w-5 h-5 text-teal-dark shrink-0" />
                  <span className="text-ink font-body font-semibold text-sm tracking-wide select-none">
                    {signal}
                  </span>
                </div>
              ))}
            </div>

            {/* Decorative Quote Block */}
            <blockquote className="mt-10 border-l-4 border-teal pl-5 italic font-display text-ink-soft text-lg text-left select-none max-w-sm">
              &ldquo;All clear. You&apos;re good. Go enjoy life.&rdquo;
            </blockquote>

          </div>

          {/* Right Column (Form Card) */}
          <div className="lg:col-span-7 w-full">
            <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10 border border-cream-dark/60">
              <div className="flex items-center gap-2 mb-6 text-sm text-ink/65">
                <div className="h-px flex-1 bg-ink/10" />
                <span className="flex-shrink-0">Typically responds within 24 hours</span>
                <div className="h-px flex-1 bg-ink/10" />
              </div>
              <ContactForm />
            </div>
          </div>

        </div>
      </Container>
    </SectionWrapper>
  );
}
