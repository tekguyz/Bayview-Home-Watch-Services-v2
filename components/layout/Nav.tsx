"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { NAV_LINKS, SITE } from "@/constants";
import { Container } from "@/components/atoms/Container";
import { Logo } from "@/components/atoms/Logo";

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (sheetOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [sheetOpen]);

  const handleCtaClick = () => {
    setSheetOpen(false);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-navy/95 backdrop-blur-xl shadow-sm py-3.5 border-b border-white/5"
            : "bg-transparent py-5 md:py-6"
        }`}
      >
        <Container className="flex items-center justify-between">
          {/* Logo Component */}
          <Logo variant="light" size="md" />

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  setSheetOpen(false);
                  document.getElementById(link.href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 relative
                  ${activeSection === link.href.replace("#", "")
                    ? "text-teal"
                    : "text-white/75 hover:text-white"
                  }
                  after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full
                  after:origin-left after:scale-x-0 after:rounded-full after:bg-teal
                  after:transition-transform after:duration-200
                  ${activeSection === link.href.replace("#", "") ? "after:scale-x-100" : "hover:after:scale-x-100"}
                `}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href={SITE.phoneHref}
              className="hidden xl:flex items-center gap-1.5 text-white/50 hover:text-white/80 text-xs font-medium transition-colors duration-200 tracking-wide"
            >
              <Phone size={13} strokeWidth={2} />
              {SITE.phone}
            </a>
            <button
              onClick={handleCtaClick}
              className="bg-teal text-navy font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-teal/90 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer shadow-sm"
            >
              Get a Free Consultation
            </button>
          </div>

          {/* Mobile Hamburguer Toggle */}
          <button
            onClick={() => setSheetOpen(true)}
            className="md:hidden text-white hover:text-teal transition-colors focus:outline-none p-1.5 cursor-pointer"
            aria-label="Open navigation menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </Container>
      </nav>

      {/* Mobile Menu Drawer Portal style (pure overlay + drawer panel) */}
      <div
        className={`fixed inset-0 z-[100] transition-all duration-300 ${
          sheetOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop overlay */}
        <div
          onClick={() => setSheetOpen(false)}
          className="absolute inset-0 bg-navy/80 backdrop-blur-md"
        />

        {/* Drawer Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-[80vw] max-w-[320px] bg-navy border-l border-white/5 shadow-2xl p-6 flex flex-col justify-between transition-transform duration-300 ease-out-back ${
            sheetOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div>
            {/* Header with Logo and Close Button */}
            <div className="flex items-center justify-between mb-8">
              <Logo variant="light" size="sm" />

              <button
                onClick={() => setSheetOpen(false)}
                className="text-white/80 hover:text-white transition-colors p-1"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Nav Links Stack */}
            <div className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    setSheetOpen(false);
                    document.getElementById(link.href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-base text-white/90 hover:text-teal font-medium py-4 border-b border-white/10 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Full Width CTA Button in Footer */}
          <div className="pb-4">
            <button
              onClick={handleCtaClick}
              className="w-full bg-teal text-navy font-semibold text-center py-3.5 rounded-full hover:bg-teal/90 transition-colors shadow-md block text-sm"
            >
              Get a Free Consultation
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
