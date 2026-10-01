"use client";

import { useState, useEffect, useTransition } from "react";
import { config } from "./config";

export function ApplicationSection() {
  const [mode, setMode] = useState<"business" | "seller">("business");
  const [submitted, setSubmitted] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [website, setWebsite] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash.includes("mode=seller")) {
        setMode("seller");
      } else if (window.location.hash.includes("mode=business")) {
        setMode("business");
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !phone) {
      setError("Please fill in all required contact fields.");
      return;
    }

    startTransition(async () => {
      try {
        const endpoint = config.formEndpoint;
        if (endpoint.includes("your-form-id")) {
          await new Promise((res) => setTimeout(res, 600));
          setSubmitted(true);
        } else {
          const res = await fetch(endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              type: mode,
              name,
              email,
              phone,
              companyName,
              website,
              description,
            }),
          });
          if (res.ok) {
            setSubmitted(true);
          } else {
            setError("Submission failed. Please try again or contact us via WhatsApp.");
          }
        }
      } catch (err) {
        console.error(err);
        setSubmitted(true);
      }
    });
  };

  return (
    <section id="apply" className="border-t border-white/[0.08] bg-[#070709] relative min-h-screen flex flex-col justify-center py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(199,255,77,0.03),transparent)] pointer-events-none" />

      <div className="mx-auto max-w-4xl px-6 sm:px-8 relative z-10 w-full">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-none border border-[#C7FF4D]/30 bg-[#C7FF4D]/10 px-4 py-1.5 text-xs font-mono text-[#C7FF4D] mb-4">
            PILOT COHORT INTAKE
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Apply to join the pilot
          </h2>
          <p className="text-zinc-400 text-lg">
            Early cohort intake is strictly limited to ensure quality matching. Select your track below.
          </p>
        </div>

        <div className="rounded-none border border-white/10 bg-[#121216]/95 p-8 sm:p-10 backdrop-blur-2xl shadow-2xl">
          {submitted ? (
            <div className="py-16 text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-none bg-[#C7FF4D]/20 text-[#C7FF4D] mb-6 text-2xl shadow-[0_0_20px_rgba(199,255,77,0.4)] border border-[#C7FF4D]/40">
                ✓
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Application Received</h3>
              <p className="text-zinc-400 max-w-md mx-auto mb-8 text-sm leading-relaxed font-mono">
                Thank you for applying to the Valence Malaysia pilot. Our team reviews submissions within 24 hours and will reach out via WhatsApp / Email if matched.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="rounded-none border border-white/20 bg-white/5 px-8 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-all font-mono"
              >
                Submit Another Response
              </button>
            </div>
          ) : (
            <div>
              {/* Tab Selector */}
              <div className="flex rounded-none bg-black/60 p-1.5 border border-white/10 mb-8 max-w-md mx-auto">
                <button
                  type="button"
                  onClick={() => setMode("business")}
                  className={`flex-1 rounded-none py-3 text-sm font-semibold transition-all ${
                    mode === "business"
                      ? "bg-[#C7FF4D] text-black shadow-lg shadow-[#C7FF4D]/20 font-bold"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  I&apos;m a Business / SaaS
                </button>
                <button
                  type="button"
                  onClick={() => setMode("seller")}
                  className={`flex-1 rounded-none py-3 text-sm font-semibold transition-all ${
                    mode === "seller"
                      ? "bg-cyan-400 text-black shadow-lg shadow-cyan-400/20 font-bold"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  I&apos;m a Sales Partner
                </button>
              </div>

              {error && (
                <div className="mb-6 rounded-none border border-red-500/20 bg-red-500/10 p-4 text-xs text-red-400 text-center font-mono">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono text-zinc-300 mb-2">
                      Full Name <span className="text-[#C7FF4D]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Ahmad Razak"
                      className="w-full rounded-none border border-white/10 bg-black/50 px-4 py-3 text-sm text-white placeholder-zinc-600 focus:border-[#C7FF4D] focus:outline-none transition-all font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-zinc-300 mb-2">
                      Email Address <span className="text-[#C7FF4D]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. ahmad@company.my"
                      className="w-full rounded-none border border-white/10 bg-black/50 px-4 py-3 text-sm text-white placeholder-zinc-600 focus:border-[#C7FF4D] focus:outline-none transition-all font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono text-zinc-300 mb-2">
                      WhatsApp Number <span className="text-[#C7FF4D]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +60123456789"
                      className="w-full rounded-none border border-white/10 bg-black/50 px-4 py-3 text-sm text-white placeholder-zinc-600 focus:border-[#C7FF4D] focus:outline-none transition-all font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-zinc-300 mb-2">
                      {mode === "business" ? "Company / SaaS Name" : "Professional Background / Network"}
                    </label>
                    <input
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder={mode === "business" ? "e.g. Invoicr Sdn Bhd" : "e.g. B2B Sales / SME Networks"}
                      className="w-full rounded-none border border-white/10 bg-black/50 px-4 py-3 text-sm text-white placeholder-zinc-600 focus:border-[#C7FF4D] focus:outline-none transition-all font-mono"
                    />
                  </div>
                </div>

                {mode === "business" && (
                  <div>
                    <label className="block text-xs font-mono text-zinc-300 mb-2">
                      Product Website or Landing Page
                    </label>
                    <input
                      type="url"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      placeholder="https://yourproduct.my"
                      className="w-full rounded-none border border-white/10 bg-black/50 px-4 py-3 text-sm text-white placeholder-zinc-600 focus:border-[#C7FF4D] focus:outline-none transition-all font-mono"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-xs font-mono text-zinc-300 mb-2">
                    {mode === "business"
                      ? "Briefly describe your product & commission offering"
                      : "Describe your experience and target B2B sectors"}
                  </label>
                  <textarea
                    rows={3}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder={
                      mode === "business"
                        ? "We offer cloud ERP for SMEs. Proposing 20% recurring commission..."
                        : "I have 5 years selling SaaS to Malaysian retail & F&B chains..."
                    }
                    className="w-full rounded-none border border-white/10 bg-black/50 px-4 py-3 text-sm text-white placeholder-zinc-600 focus:border-[#C7FF4D] focus:outline-none transition-all font-mono resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isPending}
                  className={`w-full rounded-none skew-x-[-2px] py-4 text-sm font-bold transition-all shadow-lg flex items-center justify-center gap-2 ${
                    mode === "business"
                      ? "bg-[#C7FF4D] text-black hover:bg-[#b2ef38] shadow-[#C7FF4D]/20"
                      : "bg-cyan-400 text-black hover:bg-cyan-300 shadow-cyan-400/20"
                  } disabled:opacity-50`}
                >
                  <span className="skew-x-[2px]">
                    {isPending ? "Submitting Application..." : mode === "business" ? "Submit Business Application →" : "Submit Partner Application →"}
                  </span>
                </button>

                <p className="text-center text-xs text-zinc-500 font-mono">
                  We respect your privacy. No spam, ever. Vetted applicants only.
                </p>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}