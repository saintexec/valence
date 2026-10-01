import Link from "next/link";
import { config } from "./config";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-[#0B0B0D]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-8">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-mono text-lg font-bold tracking-tight text-white">
              {config.platformName}
            </span>
          </Link>
          <span className="rounded-full bg-[#C7FF4D]/10 px-2.5 py-0.5 font-mono text-[11px] font-medium text-[#C7FF4D] border border-[#C7FF4D]/20">
            PILOT
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 font-sans text-sm text-zinc-400">
          <a href="#how-it-works" className="transition-colors hover:text-white">
            How it works
          </a>
          <a href="#paths" className="transition-colors hover:text-white">
            For Business & Sellers
          </a>
          <a href="#trust" className="transition-colors hover:text-white">
            Trust & Rules
          </a>
          <a href="#faq" className="transition-colors hover:text-white">
            FAQ
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#apply"
            className="rounded-full bg-[#C7FF4D] px-4 py-2 font-sans text-xs font-semibold text-black transition-all hover:bg-[#b2ef38] hover:shadow-[0_0_20px_rgba(199,255,77,0.2)]"
          >
            Join the pilot
          </a>
        </div>
      </div>
    </header>
  );
}
