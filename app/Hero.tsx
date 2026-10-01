"use client";

import { config } from "./config";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 w-full min-h-screen flex flex-col justify-center">
      {/* Background Glow Mesh */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-none bg-gradient-to-tr from-[#C7FF4D]/10 via-cyan-500/5 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 relative z-10 w-full">
        <div className="mx-auto max-w-4xl text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 rounded-none border-l-2 border-r-2 border-[#C7FF4D] bg-white/[0.03] px-5 py-2 text-xs font-mono text-zinc-300 mb-8 backdrop-blur-md shadow-2xl">
            <svg className="h-3.5 w-3.5 text-[#C7FF4D] animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-[#C7FF4D] font-bold tracking-wider">MALAYSIA PILOT COHORT</span>
            <span className="text-zinc-600">|</span>
            <span className="text-zinc-400">{config.tagline}</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white mb-8 leading-[1.05]">
            Performance-Backed <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-[#C7FF4D]">
              B2B Matchmaking.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-2xl text-zinc-400 mb-12 max-w-2xl mx-auto font-normal leading-relaxed">
            We connect Malaysian SaaS, automation, and B2B service providers with elite independent sales partners. Pay commission <strong className="text-white font-semibold underline decoration-[#C7FF4D] decoration-2 underline-offset-4">only</strong> after a verified customer pays.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16">
            <a
              href="#apply"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("apply");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                  window.location.hash = "mode=business";
                  window.dispatchEvent(new HashChangeEvent("hashchange"));
                }
              }}
              className="w-full sm:w-auto rounded-none skew-x-[-4deg] bg-[#C7FF4D] px-9 py-4 text-sm font-bold text-black transition-all hover:bg-[#b2ef38] hover:shadow-[0_0_35px_rgba(199,255,77,0.35)] hover:translate-y-[-2px] text-center flex items-center justify-center gap-3"
            >
              <span className="skew-x-[4deg]">Apply as a Business</span>
              <span className="text-lg skew-x-[4deg]">→</span>
            </a>
            <a
              href="#apply"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("apply");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                  window.location.hash = "mode=seller";
                  window.dispatchEvent(new HashChangeEvent("hashchange"));
                }
              }}
              className="w-full sm:w-auto rounded-none skew-x-[-4deg] border border-white/20 bg-white/[0.03] px-9 py-4 text-sm font-semibold text-white transition-all hover:bg-white/[0.08] hover:border-white/40 hover:translate-y-[-2px] text-center backdrop-blur-md"
            >
              <span className="skew-x-[4deg]">Apply as a Sales Partner</span>
            </a>
          </div>

          {/* Interactive Flow Card */}
          <div className="mx-auto max-w-3xl rounded-none border border-white/10 bg-[#121216]/90 p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative">
            <div className="absolute -top-3 left-8 bg-[#1b1b22] px-4 py-1 border border-white/10 text-[11px] font-mono text-zinc-400 flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-[#C7FF4D]" />
              VERIFIED PIPELINE ARCHITECTURE
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
              <div className="flex flex-col items-start text-left p-4 rounded-none border border-white/[0.08] bg-white/[0.01] hover:border-[#C7FF4D]/40 transition-all">
                <div className="h-6 w-6 rounded-none bg-[#C7FF4D]/10 border border-[#C7FF4D]/30 flex items-center justify-center mb-3 text-[#C7FF4D]">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <span className="text-white font-bold text-sm">Business</span>
                <span className="text-[11px] text-zinc-400 mt-1 font-mono">SaaS & B2B</span>
              </div>

              <div className="flex flex-col items-start text-left p-4 rounded-none border border-white/[0.08] bg-white/[0.01] hover:border-cyan-400/40 transition-all">
                <div className="h-6 w-6 rounded-none bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center mb-3 text-cyan-400">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <span className="text-white font-bold text-sm">Partner</span>
                <span className="text-[11px] text-zinc-400 mt-1 font-mono">Vetted Reps</span>
              </div>

              <div className="flex flex-col items-start text-left p-4 rounded-none border border-white/[0.08] bg-white/[0.01] hover:border-amber-400/40 transition-all">
                <div className="h-6 w-6 rounded-none bg-amber-400/10 border border-amber-400/30 flex items-center justify-center mb-3 text-amber-400">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="text-white font-bold text-sm">Customer</span>
                <span className="text-[11px] text-zinc-400 mt-1 font-mono">Real Sale</span>
              </div>

              <div className="flex flex-col items-start text-left p-4 rounded-none border border-white/[0.08] bg-white/[0.01] hover:border-emerald-400/40 transition-all">
                <div className="h-6 w-6 rounded-none bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center mb-3 text-emerald-400">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-white font-bold text-sm">Payout</span>
                <span className="text-[11px] text-zinc-400 mt-1 font-mono">Performance %</span>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-zinc-400">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#C7FF4D]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
              Zero Upfront Fees
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#C7FF4D]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
              Strict Anti-MLM Policy
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#C7FF4D]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
              Performance-Backed Pilot
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}