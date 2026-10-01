export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "List or Join",
      subtitle: "Verified Onboarding",
      description:
        "Malaysian SaaS & B2B providers list their verified offerings. Independent sales partners browse curated products matching their exact network.",
    },
    {
      number: "02",
      title: "Connect & Convert",
      subtitle: "Matchmaking & Introductions",
      description:
        "Sellers introduce qualified leads via secure tracking links or direct warm intros. Zero cold spam, pure professional B2B relationship building.",
    },
    {
      number: "03",
      title: "Paid on Success",
      subtitle: "Performance Settlement",
      description:
        "When the customer successfully pays the business, commission is verified and disbursed per agreed terms. Pure pay-for-performance.",
    },
  ];

  return (
    <section id="how-it-works" className="border-t border-white/[0.08] bg-[#070709] relative overflow-hidden min-h-screen flex flex-col justify-center py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(199,255,77,0.04),rgba(255,255,77,0))] pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6 sm:px-8 relative z-10 w-full">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-none border border-[#C7FF4D]/30 bg-[#C7FF4D]/10 px-4 py-1.5 text-xs font-mono text-[#C7FF4D] mb-4">
            SIMPLE WORKFLOW
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
            How the pilot works
          </h2>
          <p className="text-zinc-400 text-lg">
            Designed for speed, absolute transparency, and mutual trust between Malaysian businesses and sales partners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="group rounded-none border border-white/10 bg-[#121216]/60 p-8 sm:p-10 backdrop-blur-xl relative flex flex-col justify-between transition-all duration-300 hover:border-[#C7FF4D]/50 hover:translate-y-[-4px] shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-3xl font-black text-[#C7FF4D]">
                    {step.number}
                  </span>
                  <span className="text-xs font-mono px-3 py-1 rounded-none border border-white/10 bg-white/5 text-zinc-300">
                    {step.subtitle}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#C7FF4D] transition-colors">
                  {step.title}
                </h3>
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>
              <div className="mt-10 pt-6 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-zinc-500">
                <span>Verified track</span>
                <span className="text-[#C7FF4D]">Step {step.number} / 03</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}