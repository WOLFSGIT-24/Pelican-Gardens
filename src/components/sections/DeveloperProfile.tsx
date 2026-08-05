"use client";

import { motion } from "framer-motion";
import { fadeUp, slideLeft, slideRight } from "@/lib/motion";

export default function DeveloperProfile() {
  return (
    <section id="developer" className="w-full py-[var(--section-y)] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <motion.div {...fadeUp()} className="section-header">
          <span className="section-eyebrow">The Vision</span>
          <div className="divider-gold mx-auto mt-3 mb-4" />
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[var(--ink)] font-light">
            Why This Project Exists
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left — Developer Image */}
          <motion.div {...slideLeft(0.1)}>
            <div className="aspect-[4/3] sm:aspect-[3/2] rounded-[var(--radius-img)] overflow-hidden">
              <img
                src="/developer.png"
                alt="Pelican Gardens development vision"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Right — Developer Info */}
          <motion.div {...slideRight(0.1)}>
            <h3 className="font-heading text-xl sm:text-2xl md:text-3xl text-[var(--ink)] font-light mb-3 sm:mb-4">
              Space Without Compromise
            </h3>
            <p className="text-[var(--muted)] font-body text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
              Pelican Gardens was conceived with a singular question: what does a home look like when space is not a constraint?
            </p>
            <p className="text-[var(--muted)] font-body text-sm sm:text-base leading-relaxed mb-5 sm:mb-6">
              The answer is 4.81 acres, 133 residences, and a commitment that every room — not just the balcony — faces the lake. A dedicated Home Office in every unit acknowledges how modern families actually live and work.
            </p>

            {/* Key Facts */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              <div className="text-center p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[var(--brand-bg)]">
                <span className="block font-heading text-xl sm:text-2xl font-semibold text-[var(--ink)]">133</span>
                <span className="text-[10px] sm:text-xs font-body text-[var(--muted)]">Residences Only</span>
              </div>
              <div className="text-center p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[var(--brand-bg)]">
                <span className="block font-heading text-xl sm:text-2xl font-semibold text-[var(--ink)]">4.81</span>
                <span className="text-[10px] sm:text-xs font-body text-[var(--muted)]">Acres Total</span>
              </div>
              <div className="text-center p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[var(--brand-bg)]">
                <span className="block font-heading text-xl sm:text-2xl font-semibold text-[var(--ink)]">4</span>
                <span className="text-[10px] sm:text-xs font-body text-[var(--muted)]">Floor Plans</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
