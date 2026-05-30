import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | Bayview Home Watch Services",
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-navy flex flex-col items-center justify-center px-6 text-center">
      {/* Decorative number */}
      <p
        aria-hidden="true"
        className="font-display font-black text-white/[0.04] select-none pointer-events-none"
        style={{ fontSize: "clamp(8rem, 25vw, 18rem)", lineHeight: 1 }}
      >
        404
      </p>

      {/* Content */}
      <div className="-mt-8 relative z-10">
        <p className="text-teal text-xs font-semibold tracking-[0.2em] uppercase mb-4">
          Page Not Found
        </p>
        <h1 className="font-display font-black text-white" style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}>
          Nothing to watch here.
        </h1>
        <p className="text-white/50 mt-4 max-w-md mx-auto leading-relaxed">
          This page doesn&apos;t exist — but your South Florida home still
          needs looking after. Let&apos;s get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
          <Link
            href="/"
            className="rounded-full bg-teal px-7 py-3 text-sm font-semibold text-navy hover:bg-teal/85 transition-colors duration-200"
          >
            Back to Home
          </Link>
          <Link
            href="/#contact"
            className="rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white/75 hover:border-white/50 hover:text-white transition-colors duration-200"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}
