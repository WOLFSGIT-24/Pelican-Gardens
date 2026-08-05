"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerChild } from "@/lib/motion";
import {
  Home,
  Waves,
  TreePine,
  Building,
  Car,
  ShieldCheck,
  Zap,
  Droplets,
  ArrowUpDown,
  Dumbbell,
  Flower2,
  Baby,
} from "lucide-react";

const amenityItems = [
  { icon: Home, label: "Dedicated Home Office" },
  { icon: Waves, label: "Lake-Facing Orientation" },
  { icon: TreePine, label: "Landscaped Grounds" },
  { icon: Building, label: "Grand Arrival Lobby" },
  { icon: Car, label: "Covered Parking" },
  { icon: ShieldCheck, label: "Round-the-Clock Security" },
  { icon: Zap, label: "Full Power Backup" },
  { icon: Droplets, label: "Water Management Systems" },
  { icon: ArrowUpDown, label: "High-Speed Elevators" },
  { icon: Dumbbell, label: "Fitness Centre" },
  { icon: Flower2, label: "Open Green Corridors" },
  { icon: Baby, label: "Children\u2019s Play Zone" },
];

export default function Amenities() {
  return (
    <section id="amenities" className="w-full py-[var(--section-y)] bg-[var(--brand-bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <motion.div {...fadeUp()} className="section-header">
          <span className="section-eyebrow">Living Well</span>
          <div className="divider-gold mx-auto mt-3 mb-4" />
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[var(--ink)] font-light">
            Considered, Not Cluttered
          </h2>
          <p className="mt-3 text-[var(--muted)] font-body text-sm sm:text-base max-w-lg mx-auto">
            No filler amenities. Everything here serves a purpose — from the Home Office built into every residence to the 4.81 acres of thoughtfully planned space around you.
          </p>
        </motion.div>

        {/* Amenities Visual Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5"
        >
          {amenityItems.map((item, idx) => (
            <motion.div
              key={idx}
              variants={staggerChild}
              className="card-brand p-4 sm:p-5 md:p-6 flex flex-col items-center text-center gap-2 sm:gap-3 group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[var(--brand-alt)] flex items-center justify-center group-hover:bg-[var(--accent)]/10 transition-colors">
                <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--accent)]" strokeWidth={1.5} />
              </div>
              <span className="text-[11px] sm:text-xs md:text-sm font-body font-medium text-[var(--ink)] leading-tight">
                {item.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
