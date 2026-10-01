import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { HowItWorks } from "./HowItWorks";
import { TwoPaths } from "./TwoPaths";
import { TrustRules } from "./TrustRules";
import { ApplicationSection } from "./ApplicationSection";
import { FAQ } from "./FAQ";
import { Footer } from "./Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B0B0D] text-white selection:bg-[#C7FF4D] selection:text-black">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <TwoPaths />
        <TrustRules />
        <ApplicationSection />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
