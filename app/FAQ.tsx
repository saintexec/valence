"use client";

import { useState } from "react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is Valence?",
      answer: "Valence is a Malaysia-first pilot connecting verified B2B software, SaaS, and automation providers with experienced independent sales partners on a pure pay-for-performance commission basis.",
    },
    {
      question: "Is this a job or employment?",
      answer: "No. Sales partners operate independently on a commission-per-sale or recurring revenue share model. There is no base salary or employee relationship.",
    },
    {
      question: "Is this Multi-Level Marketing (MLM)?",
      answer: "Absolutely not. There are zero recruitment fees, no downline structures, and no buying inventory. You only earn when a real B2B customer successfully pays for a verified software or service.",
    },
    {
      question: "How are commissions verified and paid?",
      answer: "Businesses verify invoice settlement directly through Valence tracking. Once payment clears from the end customer, the agreed commission is disbursed securely to the sales partner.",
    },
    {
      question: "Who is eligible to apply during the pilot?",
      answer: "We carefully vet both sides. Businesses must have a working Malaysian SaaS or B2B product with paying customers. Sales partners must demonstrate prior B2B sales or established enterprise networks in Malaysia.",
    },
  ];

  return (
    <section id="faq" className="border-t border-white/[0.08] bg-[#070709] relative min-h-screen flex flex-col justify-center py-20">
      <div className="mx-auto max-w-4xl px-6 sm:px-8 w-full">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-none border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-mono text-amber-400 mb-4">
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Got Questions?
          </h2>
          <p className="text-zinc-400 text-lg">
            Everything you need to know about the Valence pilot program.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-none border border-white/10 bg-[#121216]/80 backdrop-blur-md transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 font-bold text-white hover:text-[#C7FF4D] transition-colors"
                >
                  <span className="text-base sm:text-lg">{faq.question}</span>
                  <span className="font-mono text-xl font-normal text-[#C7FF4D]">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm sm:text-base text-zinc-400 leading-relaxed border-t border-white/[0.06] pt-4 font-normal">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}