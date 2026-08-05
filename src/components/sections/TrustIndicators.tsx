"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerChild } from "@/lib/motion";
import { Building2, Home, Layers, Maximize2, Eye, TreePine } from "lucide-react";

const trustItems = [
  { icon: TreePine, label: "Acres", value: "4.81" },
  { icon: Home, label: "Residences", value: "133" },
  { icon: Layers, label: "Floors", value: "19" },
  { icon: Building2, label: "Wings", value: "4" },
  { icon: Maximize2, label: "Sq.Ft. Each", value: "~4,450" },
  { icon: Eye, label: "Lake Views", value: "Every Room" },
];

export default function TrustIndicators() {
  return (
    <section className="w-full py-6 sm:py-8 md:py-12 bg-white border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8"
        >
          {trustItems.map((item, idx) => (
            <motion.div
              key={idx}
              variants={staggerChild}
              className="flex flex-col items-center text-center gap-1.5 sm:gap-2 py-2 sm:py-4"
            >
              <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--accent)] mb-0.5 sm:mb-1" strokeWidth={1.5} />
              <span className="font-heading text-lg sm:text-xl md:text-2xl font-semibold text-[var(--ink)]">
                {item.value}
              </span>
              <span className="text-[10px] sm:text-xs font-body text-[var(--muted)] tracking-wide">
                {item.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
