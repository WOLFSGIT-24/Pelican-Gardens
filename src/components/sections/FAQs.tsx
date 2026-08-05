"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { ChevronDown } from "lucide-react";

const faqItems = [
  {
    question: "Where is Pelican Gardens located?",
    answer: "Jakkur, North Bangalore — an established residential corridor known for its proximity to Jakkur Lake and growing infrastructure."
  },
  {
    question: "What is the configuration?",
    answer: "All 133 residences are 4 BHK homes with a dedicated Home Office. There are no smaller units."
  },
  {
    question: "How large is each residence?",
    answer: "Every home measures approximately 4,450 sq.ft. — consistent across all 4 floor plan options."
  },
  {
    question: "What is the investment range?",
    answer: "Starting from ₹10.2 Cr and going up to ₹20.5 Cr, depending on the floor plan and floor level."
  },
  {
    question: "How many floor plan options are available?",
    answer: "Buyers can choose from 4 different floor plan layouts, each approximately 4,450 sq.ft. with the same 4 BHK + Home Office configuration."
  },
  {
    question: "Do all residences have lake views?",
    answer: "Yes. The project has been designed so that every room in every residence enjoys views towards the lake."
  },
  {
    question: "What is the total development area?",
    answer: "4.81 acres with 4 residential wings, each rising 19 floors. A total of 133 residences."
  },
  {
    question: "Does every home include a Home Office?",
    answer: "Yes. A dedicated Home Office is part of the standard layout in every residence — not an add-on or optional upgrade."
  },
  {
    question: "How can I schedule a site visit?",
    answer: "Fill the enquiry form on this page or call us directly. Our team will arrange a convenient time — no obligation, no pressure."
  },
  {
    question: "Why only 133 residences on 4.81 acres?",
    answer: "Low density is a deliberate choice. Fewer homes mean more space, privacy, and unobstructed views for every resident."
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faqs" className="w-full py-[var(--section-y)] bg-[var(--brand-bg)]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div {...fadeUp()} className="section-header">
          <span className="section-eyebrow">Questions</span>
          <div className="divider-gold mx-auto mt-3 mb-4" />
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[var(--ink)] font-light">
            What You Want to Know
          </h2>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div {...fadeUp(0.1)} className="flex flex-col gap-2 sm:gap-3">
          {faqItems.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-xl sm:rounded-2xl bg-white border border-[var(--border)] overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between gap-3 sm:gap-4 px-4 sm:px-6 py-3.5 sm:py-5 text-left min-h-[48px]"
                aria-expanded={openIndex === idx}
              >
                <span className="text-sm sm:text-base font-body font-medium text-[var(--ink)] leading-snug">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-4 h-4 sm:w-5 sm:h-5 text-[var(--muted)] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <div className="px-4 sm:px-6 pb-4 sm:pb-5 text-sm font-body text-[var(--muted)] leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
