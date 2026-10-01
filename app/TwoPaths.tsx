"use client";

export function TwoPaths() {
  return (
    <section id="tracks" className="border-t border-white/[0.08] bg-[#070709] relative min-h-screen flex flex-col justify-center py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 w-full">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-none border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-mono text-cyan-400 mb-4">
            DUAL ECOSYSTEM
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
            Two distinct paths, one goal
          </h2>
          <p className="text-zinc-400 text-lg">
            Whether you are scaling a software product or monetizing your professional network, Valence provides the trusted bridge.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* For Businesses */}
          <div className="rounded-none border border-white/10 bg-[#121216]/80 p-8 sm:p-12 backdrop-blur-xl relative overflow-hidden group hover:border-[#C7FF4D]/50 transition-all duration-300 flex flex-col justify-between shadow-2xl">
            <div className="absolute top-0 right-0 h-40 w-40 bg-[#C7FF4D]/5 rounded-none blur-3xl pointer-events-none group-hover:bg-[#C7FF4D]/10 transition-all" />
            
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-2.5 w-2.5 bg-[#C7FF4D]" />
                <span className="text-xs font-mono uppercase tracking-widest text-[#C7FF4D] font-bold">For SaaS & B2B Providers</span>
              </div>

              <h3 className="text-3xl font-extrabold text-white mb-6 leading-tight">
                Scale customer acquisition without fixed ad burn.
              </h3>

              <p className="text-zinc-400 text-base mb-8 leading-relaxed">
                Stop guessing on expensive Meta or Google ads with uncertain ROI. Tap into a curated pool of seasoned Malaysian sales partners who only get paid when cash lands in your bank account.
              </p>

              <ul className="space-y-4 mb-10 text-sm text-zinc-300 font-mono">
                <li className="flex items-center gap-3">
                  <span className="text-[#C7FF4D] font-bold">→</span> Zero upfront ad spend or fixed retainer fees
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#C7FF4D] font-bold">→</span> You define your exact commission structure (%)
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#C7FF4D] font-bold">→</span> Full control over lead qualification and approval
                </li>
              </ul>
            </div>

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
              className="inline-flex items-center justify-center gap-2 rounded-none skew-x-[-4deg] bg-[#C7FF4D] px-8 py-4 text-sm font-bold text-black hover:bg-[#b2ef38] transition-all hover:translate-y-[-2px]"
            >
              <span className="skew-x-[4deg]">Join as Business →</span>
            </a>
          </div>

          {/* For Sales Partners */}
          <div className="rounded-none border border-white/10 bg-[#121216]/80 p-8 sm:p-12 backdrop-blur-xl relative overflow-hidden group hover:border-cyan-400/50 transition-all duration-300 flex flex-col justify-between shadow-2xl">
            <div className="absolute top-0 right-0 h-40 w-40 bg-cyan-500/5 rounded-none blur-3xl pointer-events-none group-hover:bg-cyan-500/10 transition-all" />
            
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-2.5 w-2.5 bg-cyan-400" />
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">For Independent Sales Partners</span>
              </div>

              <h3 className="text-3xl font-extrabold text-white mb-6 leading-tight">
                Monetize your B2B network with elite Malaysian SaaS.
              </h3>

              <p className="text-zinc-400 text-base mb-8 leading-relaxed">
                Have strong connections with business owners, operators, or enterprise leaders? Connect them with top-tier Malaysian software and automation products to earn recurring high-value commissions.
              </p>

              <ul className="space-y-4 mb-10 text-sm text-zinc-300 font-mono">
                <li className="flex items-center gap-3">
                  <span className="text-cyan-400 font-bold">→</span> Access vetted, high-converting local products
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-cyan-400 font-bold">→</span> Transparent tracking dashboard & payout records
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-cyan-400 font-bold">→</span> Zero MLM or recruiting schemes — real sales only
                </li>
              </ul>
            </div>

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
              className="inline-flex items-center justify-center gap-2 rounded-none skew-x-[-4deg] border border-white/25 bg-white/[0.03] px-8 py-4 text-sm font-semibold text-white hover:bg-white/[0.08] hover:border-white/40 transition-all hover:translate-y-[-2px]"
            >
              <span className="skew-x-[4deg]">Join as Sales Partner →</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}