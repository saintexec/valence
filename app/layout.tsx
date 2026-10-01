import type { Metadata } from "next";
import { Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";

const displayFont = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const bodyFont = Geist_Mono({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Valence — Malaysia-First Commission-Based B2B Matchmaking",
  description:
    "Connects Malaysian SaaS, automation, and B2B businesses with independent sales partners. Commission only after a real customer pays.",
  openGraph: {
    title: "Valence",
    description: "Malaysia-first pilot for commission-based sales partners.",
    url: "https://valence.my",
    siteName: "Valence",
    locale: "en_MY",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#070709] text-zinc-100 selection:bg-[#C7FF4D] selection:text-black">
        {children}
      </body>
    </html>
  );
}
