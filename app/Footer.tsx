export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#050507] relative min-h-[50vh] flex flex-col justify-between py-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-white/[0.06]">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-4 w-4 bg-[#C7FF4D] rounded-none rotate-45" />
              <span className="text-xl font-extrabold tracking-tight text-white font-mono">VALENCE</span>
            </div>
            <p className="text-zinc-400 text-sm max-w-sm leading-relaxed mb-6 font-mono">
              Malaysia-first pilot connecting verified B2B SaaS providers with elite independent sales partners on a performance-backed commission model.
            </p>
            <div className="text-xs font-mono text-zinc-500">
              Kuala Lumpur, Malaysia · Est. 2026
            </div>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-white mb-4 font-bold">
              Ecosystem
            </h4>
            <ul className="space-y-3 text-sm text-zinc-400 font-mono">
              <li>
                <a href="#tracks" className="hover:text-[#C7FF4D] transition-colors">For Businesses</a>
              </li>
              <li>
                <a href="#tracks" className="hover:text-[#C7FF4D] transition-colors">For Sales Partners</a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-[#C7FF4D] transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#C7FF4D] transition-colors">FAQ</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-white mb-4 font-bold">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-sm text-zinc-400 font-mono">
              <li>
                <a href="mailto:hello@valence.my" className="hover:text-[#C7FF4D] transition-colors">hello@valence.my</a>
              </li>
              <li>
                <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C7FF4D] transition-colors">WhatsApp Support</a>
              </li>
              <li>
                <span className="text-zinc-600">Strictly no cold solicitation</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <p>© 2026 Valence. All rights reserved. Malaysia Pilot.</p>
          <p className="text-zinc-400">Performance-based B2B matchmaking. No MLM. Real sales only.</p>
        </div>
      </div>
    </footer>
  );
}