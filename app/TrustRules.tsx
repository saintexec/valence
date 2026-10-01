export function TrustRules() {
  const pillars = [
    {
      title: "Real Sales Only",
      description:
        "Commissions are paid strictly upon verified customer purchase and invoice clearance. No paying for clicks or empty leads.",
    },
    {
      title: "Zero Joining Fees",
      description:
        "Completely free for sellers to join. We never charge subscription fees, starter kits, or mandatory product purchases.",
    },
    {
      title: "Clear Information",
      description:
        "Full transparency on product pricing, customer terms, and agreed commission percentages before any introduction.",
    },
    {
      title: "Anti-MLM Guarantee",
      description:
        "No downlines, no recruitment tiers, and no multi-level marketing structures. You earn purely from your own direct sales effort.",
    },
  ];

  return (
    <section id="trust" className="py-24 border-t border-white/[0.08] bg-[#0B0B0D]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-xs font-mono uppercase tracking-widest text-[#C7FF4D] mb-3">
            Core Principles
          </h2>
          <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Trust & Rules
          </h3>
          <p className="mt-4 text-zinc-400">
            We hold our pilot participants to high ethical standards to ensure long-term value and mutual respect.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-white/[0.08] bg-[#15151A]/60 p-6 backdrop-blur-sm"
            >
              <span className="font-mono text-xs text-[#C7FF4D] mb-3 block">
                0{idx + 1} // RULE
              </span>
              <h4 className="text-lg font-semibold text-white mb-2">
                {pillar.title}
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
