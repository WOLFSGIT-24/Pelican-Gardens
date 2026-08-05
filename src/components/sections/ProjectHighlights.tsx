"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerChild } from "@/lib/motion";
import { MapPin, Maximize2, IndianRupee, Home, LayoutGrid, Eye } from "lucide-react";

const highlights = [
  { icon: MapPin, label: "Location", value: "Jakkur, Bangalore" },
  { icon: Maximize2, label: "Size", value: "~4,450 sq.ft." },
  { icon: IndianRupee, label: "Investment", value: "₹10.2 – ₹20.5 Cr" },
  { icon: Home, label: "Configuration", value: "4 BHK + Home Office" },
  { icon: LayoutGrid, label: "Layout Options", value: "4 Distinct Plans" },
  { icon: Eye, label: "Orientation", value: "Lake-Facing, Every Room" },
];

export default function ProjectHighlights() {
  return (
    <section id="highlights" className="w-full py-[var(--section-y)] bg-[var(--brand-bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <motion.div {...fadeUp()} className="section-header">
          <span className="section-eyebrow">The Essentials</span>
          <div className="divider-gold mx-auto mt-3 mb-4" />
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[var(--ink)] font-light">
            At a Glance
          </h2>
          <p className="mt-3 text-[var(--muted)] font-body text-sm sm:text-base max-w-lg mx-auto">
            133 residences. 4.81 acres. 19 floors across 4 wings. Every home oriented towards the lake.
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6"
        >
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              variants={staggerChild}
              className="card-brand p-4 sm:p-6 md:p-8 flex flex-col items-center text-center gap-2 sm:gap-3"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[var(--brand-alt)] flex items-center justify-center">
                <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--accent)]" strokeWidth={1.5} />
              </div>
              <span className="font-heading text-base sm:text-xl md:text-2xl font-semibold text-[var(--ink)] leading-tight">
                {item.value}
              </span>
              <span className="text-[10px] sm:text-xs font-body text-[var(--muted)] tracking-wide uppercase">
                {item.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
