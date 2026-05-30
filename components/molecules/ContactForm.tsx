"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "motion/react";
import { CheckCircle, Loader2, AlertTriangle } from "lucide-react";
import { CONTACT_FORM_OPTIONS, SITE } from "@/constants";
import { contactSchema, type ContactFormData } from "@/lib/validations";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [submittedName, setSubmittedName] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      duration: "",
      message: "",
      referral: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const resData = await response.json();

      if (response.ok && resData.success) {
        setSubmittedName(data.name);
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  const handleRetry = () => {
    setStatus("idle");
  };

  const inputStyle =
    "w-full bg-white border border-cream-dark focus:border-teal focus:ring-2 focus:ring-teal/20 rounded-xl px-4 py-3 outline-none text-ink placeholder:text-ink-soft/40 transition-all font-body text-base md:text-sm duration-200 select-all appearance-none min-h-[44px]";

  const labelStyle = "block text-xs font-semibold uppercase tracking-wider text-ink mb-1.5 font-body select-none";

  return (
    <>
      {/* Screen reader announcements for form state changes */}
      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {status === "success" && "Your message was sent successfully. We'll be in touch within 24 hours."}
        {status === "error" && "There was a problem sending your message. Please try again or call us directly."}
        {status === "loading" && "Sending your message..."}
      </div>

      {status === "success" ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col items-center text-center p-6 sm:p-10 select-none"
        >
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-teal-light text-teal-dark mb-6">
            <CheckCircle className="w-10 h-10 stroke-[2.5px]" />
          </div>
          
          <h3 className="font-display font-bold text-ink text-2xl sm:text-3xl tracking-tight leading-none">
            We&apos;ll be in touch soon!
          </h3>
          
          <p className="text-ink-soft text-body-lg mt-4 max-w-md font-body leading-relaxed">
            Thank you, <strong className="text-ink font-semibold">{submittedName}</strong>. We typically respond within 24 hours. In the meantime, feel free to call us directly.
          </p>
          
          <div className="mt-8 pt-6 border-t border-cream-dark w-full">
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center gap-2 text-teal-dark hover:text-teal font-display font-extrabold text-xl sm:text-2xl transition-all"
            >
              {SITE.phone}
            </a>
            <p className="text-ink-soft text-xs mt-1 font-body font-semibold tracking-wider uppercase">
              Direct Office Line
            </p>
          </div>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Honeypot — hidden from real users, filled by bots */}
          <input
            type="text"
            {...register("website")}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="absolute opacity-0 h-0 w-0 overflow-hidden pointer-events-none"
            style={{ position: "absolute", left: "-9999px", top: "-9999px" }}
          />
          
          {/* 2-Column Grid on sm+ (Row 1): Name and Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelStyle}>
            Full Name <span className="text-coral">*</span>
          </label>
          <input
            id="name"
            type="text"
            placeholder="Jane Smith"
            {...register("name")}
            className={inputStyle}
            aria-invalid={errors.name ? "true" : "false"}
          />
          {errors.name && (
            <p className="text-coral text-xs mt-1.5 font-body font-semibold leading-none">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className={labelStyle}>
            Email Address <span className="text-coral">*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="jane@example.com"
            {...register("email")}
            className={inputStyle}
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email && (
            <p className="text-coral text-xs mt-1.5 font-body font-semibold leading-none">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      {/* 2-Column Grid on sm+ (Row 2): Phone and Service */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className={labelStyle}>
            Phone Number <span className="text-coral">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="(954) 555-0123"
            {...register("phone")}
            className={inputStyle}
            aria-invalid={errors.phone ? "true" : "false"}
          />
          {errors.phone && (
            <p className="text-coral text-xs mt-1.5 font-body font-semibold leading-none">
              {errors.phone.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="service" className={labelStyle}>
            Service Interested In <span className="text-coral">*</span>
          </label>
          <div className="relative">
            <select
              id="service"
              {...register("service")}
              className={`${inputStyle} pr-10`}
              aria-invalid={errors.service ? "true" : "false"}
              defaultValue=""
            >
              <option value="" disabled>Select a service...</option>
              {CONTACT_FORM_OPTIONS.services.map((svc) => (
                <option key={svc} value={svc}>
                  {svc}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-ink-soft/60">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>
          {errors.service && (
            <p className="text-coral text-xs mt-1.5 font-body font-semibold leading-none">
              {errors.service.message}
            </p>
          )}
        </div>
      </div>

      {/* Away Duration (full width) */}
      <div>
        <label htmlFor="duration" className={labelStyle}>
          How long will you be away? <span className="text-coral">*</span>
        </label>
        <div className="relative">
          <select
            id="duration"
            {...register("duration")}
            className={`${inputStyle} pr-10`}
            aria-invalid={errors.duration ? "true" : "false"}
            defaultValue=""
          >
            <option value="" disabled>Select duration...</option>
            {CONTACT_FORM_OPTIONS.duration.map((dur) => (
              <option key={dur} value={dur}>
                {dur}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-ink-soft/60">
            <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </div>
        </div>
        {errors.duration && (
          <p className="text-coral text-xs mt-1.5 font-body font-semibold leading-none">
            {errors.duration.message}
          </p>
        )}
      </div>

      {/* Tell us about your home (optional, full width) */}
      <div>
        <label htmlFor="message" className={labelStyle}>
          Tell us about your home <span className="text-ink-soft/60 font-medium lowercase italic">(optional)</span>
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Share any details about your home, neighborhood, or specific concerns."
          {...register("message")}
          className={inputStyle}
        />
      </div>

      {/* How did you hear about us? (optional, full width) */}
      <div>
        <label htmlFor="referral" className={labelStyle}>
          How did you hear about us? <span className="text-ink-soft/60 font-medium lowercase italic">(optional)</span>
        </label>
        <div className="relative">
          <select
            id="referral"
            {...register("referral")}
            className={`${inputStyle} pr-10`}
            defaultValue=""
          >
            <option value="" disabled>Select option...</option>
            {CONTACT_FORM_OPTIONS.referral.map((ref) => (
              <option key={ref} value={ref}>
                {ref}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-ink-soft/60">
            <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Inline Error Banner */}
      {status === "error" && (
        <div className="flex items-start gap-3 bg-coral/10 border border-coral/30 rounded-xl p-4 text-coral select-none">
          <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="text-sm font-semibold font-body leading-tight">
              Failed to send inquiry.
            </p>
            <p className="text-xs mt-1 font-body leading-relaxed text-ink/80">
              Something went wrong. Please check your network connection and try again, or call us directly.
            </p>
            <button
              type="button"
              onClick={handleRetry}
              className="text-xs font-bold underline mt-2 hover:text-coral transition-colors cursor-pointer block"
            >
              Back to Form &rarr;
            </button>
          </div>
        </div>
      )}

      {/* Responds within 24 hours divider */}
      <div className="flex items-center gap-3 text-ink/40 text-xs my-2 select-none">
        <div className="h-px flex-1 bg-ink/10" />
        <span className="flex-shrink-0 font-medium tracking-wide">
          We typically respond within 24 hours
        </span>
        <div className="h-px flex-1 bg-ink/10" />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-teal text-navy hover:bg-teal/95 disabled:bg-teal-light/40 disabled:text-navy/55 disabled:cursor-not-allowed font-bold rounded-full py-4 min-h-[48px] text-center cursor-pointer transition-all duration-200 shadow-md flex items-center justify-center gap-2 text-base"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Sending...</span>
          </>
        ) : (
          <span>Send My Inquiry</span>
        )}
      </button>

    </form>
      )}
    </>
  );
}
