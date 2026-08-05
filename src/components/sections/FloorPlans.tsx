"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerChild } from "@/lib/motion";
import { useModalStore } from "@/store/enquiryStore";
import { Lock } from "lucide-react";

const floorPlanTypes = [
  { config: "Type A", area: "~4,450 sq.ft.", price: "₹10.2 Cr onwards" },
  { config: "Type B", area: "~4,450 sq.ft.", price: "Price on Request" },
  { config: "Type C", area: "~4,450 sq.ft.", price: "Price on Request" },
  { config: "Type D", area: "~4,450 sq.ft.", price: "Up to ₹20.5 Cr" },
];

export default function FloorPlans() {
  const { openModal } = useModalStore();

  return (
    <section id="floor-plans" className="w-full py-[var(--section-y)] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <motion.div {...fadeUp()} className="section-header">
          <span className="section-eyebrow">Floor Plans</span>
          <div className="divider-gold mx-auto mt-3 mb-4" />
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[var(--ink)] font-light">
            Four Layouts. One Standard of Space.
          </h2>
          <p className="mt-3 text-[var(--muted)] font-body text-sm sm:text-base max-w-lg mx-auto">
            Every residence measures approximately 4,450 sq.ft. Choose from 4 distinct floor plans — each a 4 BHK with dedicated Home Office and lake-facing orientation.
          </p>
        </motion.div>

        {/* Floor Plan Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 md:gap-6"
        >
          {floorPlanTypes.map((plan, idx) => (
            <motion.div
              key={idx}
              variants={staggerChild}
              className="card-brand overflow-hidden group"
            >
              {/* Floor Plan Image — Blurred & Locked */}
              <div className="aspect-[3/4] relative overflow-hidden border-b border-[var(--border)]">
                <img
                  src="/imgi_72_floorplan-1bhk.webp"
                  alt="Floor plan locked"
                  className="w-full h-full object-contain blur-[6px] scale-105"
                  loading="lazy"
                />
                {/* Lock Overlay */}
                <div
                  className="absolute inset-0 bg-white/60 backdrop-blur-[2px] flex flex-col items-center justify-center gap-2 cursor-pointer"
                  onClick={openModal}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[var(--primary)]/90 flex items-center justify-center">
                    <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-white" strokeWidth={2} />
                  </div>
                  <span className="text-[10px] sm:text-xs font-body font-semibold text-[var(--ink)] text-center px-2">
                    Enquire to Unlock
                  </span>
                </div>
              </div>

              {/* Plan Details */}
              <div className="p-3 sm:p-5">
                <h3 className="font-heading text-base sm:text-lg font-semibold text-[var(--ink)] mb-0.5 sm:mb-1">
                  {plan.config}
                </h3>
                <p className="text-[10px] sm:text-xs font-body text-[var(--muted)] mb-0.5">4 BHK + Home Office</p>
                <p className="text-xs sm:text-sm font-body text-[var(--muted)] mb-0.5 sm:mb-1">{plan.area}</p>
                <p className="text-xs sm:text-sm font-body font-semibold text-[var(--accent)]">{plan.price}</p>
                <button
                  onClick={openModal}
                  className="mt-3 sm:mt-4 w-full btn-outline px-3 sm:px-4 py-2 sm:py-2.5 text-[10px] sm:text-xs min-h-[40px]"
                >
                  Unlock Floor Plan
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div {...fadeUp(0.3)} className="text-center mt-8 sm:mt-10">
          <button
            onClick={openModal}
            className="btn-gold px-6 sm:px-8 py-3 sm:py-3.5 text-sm min-h-[48px] w-full sm:w-auto"
          >
            Get Complete Floor Plan Brochure
          </button>
        </motion.div>
      </div>
    </section>
  );
}
