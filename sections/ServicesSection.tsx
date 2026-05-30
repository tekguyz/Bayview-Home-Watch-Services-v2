"use client";

import React, { useState, useEffect } from "react";
import { Eye, Home, CloudLightning, Users, CalendarDays } from "lucide-react";
import { SERVICES } from "@/constants";
import { SectionWrapper } from "@/components/atoms/SectionWrapper";
import { Container } from "@/components/atoms/Container";
import { SectionLabel } from "@/components/atoms/SectionLabel";
import { ServiceCard } from "@/components/atoms/ServiceCard";

const CATEGORY_ICONS: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  Eye,
  Home,
  CloudLightning,
  Users,
  CalendarDays,
};

const getCategorySlug = (categoryName: string) => 
  categoryName.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState(() => {
    return SERVICES.length > 0 ? getCategorySlug(SERVICES[0].category) : "";
  });

  useEffect(() => {
    const handleScroll = () => {
      // 1. Immediate override if the user has reached the bottom floor of the page
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 160;

      if (isAtBottom && SERVICES.length > 0) {
        setActiveTab(getCategorySlug(SERVICES[SERVICES.length - 1].category));
        return;
      }

      // 2. Scan coordinates relative to where the sticky header pins (140px down)
      const focalLine = 140;
      
      for (const service of SERVICES) {
        const slug = getCategorySlug(service.category);
        const el = document.getElementById(`category-${slug}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= focalLine && rect.bottom > focalLine) {
            setActiveTab(slug);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Run once on load to establish current tab position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleTabClick = (categoryName: string) => {
    const slug = getCategorySlug(categoryName);
    setActiveTab(slug);
    const element = document.getElementById(`category-${slug}`);
    if (element) {
      const yOffset = -110;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleCtaClick = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <SectionWrapper id="services" className="bg-white">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
          <SectionLabel>What We Do</SectionLabel>
          <h2 className="font-display text-section-title font-black text-ink mt-4">
            Everything Your Home Needs While You&apos;re Gone
          </h2>
          <p className="text-body-lg text-ink-soft mt-4 font-body">
            From routine check-ins to hurricane prep, we handle whatever Florida throws at your property — and send you photo proof after every visit.
          </p>
        </div>

        {/* Category Navigation — Fixed Edge-to-Edge Scrolling Layout */}
        <div className="sticky top-[72px] z-30 -mx-[clamp(1.25rem,5vw,3rem)] py-3 bg-white/95 backdrop-blur-md border-b border-cream-dark mb-10">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide px-[clamp(1.25rem,5vw,3rem)] pb-1 flex-nowrap select-none items-center justify-start md:justify-center">
            {SERVICES.map((cat) => {
              const slug = getCategorySlug(cat.category);
              const isActive = activeTab === slug;
              const IconComponent = CATEGORY_ICONS[cat.icon];

              return (
                <button
                  key={cat.category}
                  onClick={() => handleTabClick(cat.category)}
                  className={`flex items-center gap-2 flex-shrink-0 whitespace-nowrap px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-sm cursor-pointer border ${
                    isActive
                      ? "bg-navy text-white border-navy"
                      : "bg-cream text-ink-soft hover:bg-cream-dark border-cream-dark/50 hover:text-ink"
                  }`}
                >
                  {IconComponent && <IconComponent size={16} />}
                  <span>{cat.category}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Service Categories (Vertical Flow) */}
        <div className="flex flex-col gap-12 mt-4">
          {SERVICES.map((category) => {
            const CategoryIcon = CATEGORY_ICONS[category.icon];

            return (
              <div
                key={category.category}
                id={`category-${getCategorySlug(category.category)}`}
                className="scroll-mt-32 border-t border-cream-dark pt-8 first:border-0 first:pt-0"
              >
                {/* Category Header */}
                <div className="w-full bg-cream rounded-2xl px-6 py-5 sm:px-8 flex items-center gap-4 transition-all hover:bg-cream-dark/70">
                  <div className="bg-teal-light rounded-xl p-2 md:p-2.5 text-teal-dark shrink-0 flex items-center justify-center">
                    {CategoryIcon && <CategoryIcon size={24} />}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-ink text-lg sm:text-xl leading-none">
                      {category.category}
                    </h3>
                  </div>
                  <p className="text-ink-soft text-sm font-body font-medium ml-auto hidden sm:block">
                    {category.description}
                  </p>
                </div>

                {/* Grid of service cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
                  {category.items.map((item, itemIndex) => {
                    return (
                      <ServiceCard
                        key={itemIndex}
                        name={item.name}
                        description={item.description}
                        icon={CategoryIcon && <CategoryIcon size={22} className="text-teal-dark" />}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 pt-4">
          <div className="bg-teal-light/35 rounded-3xl p-8 sm:p-12 text-center max-w-2xl mx-auto border border-teal-light shadow-sm">
            <h3 className="font-display font-bold text-ink text-2xl sm:text-3xl">
              Not sure which services you need?
            </h3>
            <p className="text-ink-soft mt-3 text-base sm:text-lg max-w-md mx-auto font-body leading-relaxed">
              Tell us about your home and we&apos;ll put together the right plan.
            </p>
            <button
              onClick={handleCtaClick}
              className="bg-teal text-navy font-bold rounded-full px-8 py-3.5 mt-6 inline-block hover:bg-teal/90 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer shadow-md text-sm sm:text-base border border-teal-dark/10"
            >
              Get a Free Consultation
            </button>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}