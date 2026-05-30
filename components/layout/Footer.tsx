import React from "react";
import { Phone, Mail, Facebook, Instagram, Linkedin, Globe } from "lucide-react";
import { SITE, NAV_LINKS, SERVICES } from "@/constants";
import { Container } from "@/components/atoms/Container";
import { Logo } from "@/components/atoms/Logo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white pt-16 pb-8 border-t border-white/5">
      <Container>
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Left Column (Brand + Contact) */}
          <div className="lg:col-span-5 flex flex-col items-start gap-6">
            {/* Brand Logo */}
            <Logo variant="light" size="lg" />

            {/* Tagline */}
            <p className="font-display italic text-lg md:text-xl text-white/90 leading-snug">
              &ldquo;{SITE.tagline}&rdquo;
            </p>

            {/* Service Area Blurb */}
            <p className="text-sm text-white/70 max-w-sm">
              Providing professional absentee home check-ins, weather readiness assessment, and custom residential watch across {SITE.address.county}, {SITE.address.state}.
            </p>

            {/* Contact Details */}
            <div className="flex flex-col gap-3 pt-2">
              <a
                href={SITE.phoneHref}
                className="flex items-center gap-3 text-sm text-white/80 hover:text-teal transition-colors group"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 group-hover:bg-teal/10 transition-colors">
                  <Phone className="w-4 h-4 text-teal" />
                </span>
                <span>{SITE.phone}</span>
              </a>
              <a
                href={SITE.emailHref}
                className="flex items-center gap-3 text-sm text-white/80 hover:text-teal transition-colors group"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 group-hover:bg-teal/10 transition-colors">
                  <Mail className="w-4 h-4 text-teal" />
                </span>
                <span className="break-all">{SITE.email}</span>
              </a>
            </div>

            {/* Social Row */}
            <div className="flex items-center gap-3 mt-2">
              <a
                href={SITE.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bayview Home Watch Services on Facebook"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 text-white/80 hover:text-teal hover:border-teal md:hover:scale-105 transition-all"
              >
                <Facebook className="w-4.5 h-4.5" />
              </a>
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 text-white/80 hover:text-teal hover:border-teal md:hover:scale-105 transition-all"
              >
                <Instagram className="w-4.5 h-4.5" />
              </a>
              <a
                href={SITE.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect on LinkedIn"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 text-white/80 hover:text-teal hover:border-teal md:hover:scale-105 transition-all"
              >
                <Linkedin className="w-4.5 h-4.5" />
              </a>
              <a
                href={SITE.social.google}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bayview Home Watch Services on Google"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 text-white/80 hover:text-teal hover:border-teal md:hover:scale-105 transition-all"
              >
                <Globe className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Right Column (Sub-directories) */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-8 md:pl-8">
            {/* Navigation Column */}
            <div>
              <h3 className="text-xs font-semibold tracking-widest uppercase text-teal mb-5">
                Explore
              </h3>
              <ul className="flex flex-col gap-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-white/70 hover:text-teal transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Column */}
            <div>
              <h3 className="text-xs font-semibold tracking-widest uppercase text-teal mb-5">
                Services
              </h3>
              <ul className="flex flex-col gap-3">
                {SERVICES.map((category) => {
                  const firstItem = category.items[0];
                  return (
                    <li key={category.category}>
                      <a
                        href="#services"
                        className="text-sm text-white/70 hover:text-teal transition-colors block"
                        title={`View services in ${category.category}`}
                      >
                        {firstItem.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        {/* Separator line */}
        <div className="h-[1px] w-full bg-white/10 my-10" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50 text-center md:text-left font-body">
            &copy; {currentYear} {SITE.legalName}. All rights reserved.
          </p>
          <p className="text-xs text-white/50 flex flex-wrap items-center justify-center gap-2 font-body font-medium">
            <span>Licensed &amp; Insured</span>
            <span className="text-white/20">&middot;</span>
            <span className="text-white/80 bg-white/5 px-2.5 py-1 rounded">Woman-Owned Business</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
