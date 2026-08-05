"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerChild } from "@/lib/motion";
import { useModalStore } from "@/store/enquiryStore";
import { MapPin, Building2, TreePine, Waves, Navigation } from "lucide-react";

const locationPoints = [
  { icon: Waves, label: "Jakkur Lake", detail: "Uninterrupted lakefront proximity" },
  { icon: MapPin, label: "Jakkur, North Bangalore", detail: "Established residential corridor" },
  { icon: TreePine, label: "4.81 Acres", detail: "Low-density, expansive grounds" },
  { icon: Building2, label: "19 Floors", detail: "Elevated views across the neighbourhood" },
  { icon: Navigation, label: "North Bangalore Growth Belt", detail: "Well-connected arterial access" },
];

export default function LocationAdvantages() {
  const { openModal } = useModalStore();

  return (
    <section id="location" className="w-full py-[var(--section-y)] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <motion.div {...fadeUp()} className="section-header">
          <span className="section-eyebrow">Location</span>
          <div className="divider-gold mx-auto mt-3 mb-4" />
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[var(--ink)] font-light">
            The Quiet Side of Bangalore
          </h2>
          <p className="mt-3 text-[var(--muted)] font-body text-sm sm:text-base max-w-lg mx-auto">
            Jakkur offers something rare in Bangalore — a lakeside address in a city that never stops growing. Pelican Gardens sits at the centre of it.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left — Project Exterior */}
          <motion.div {...fadeUp(0.1)}>
            <div className="aspect-[4/3] rounded-[var(--radius-img)] overflow-hidden lg:sticky lg:top-24">
              <img
                src="/exterior.png"
                alt="Pelican Gardens exterior — Jakkur, Bangalore"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Right — Location Points */}
          <div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="grid grid-cols-1 gap-3 sm:gap-4"
            >
              {locationPoints.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={staggerChild}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-[var(--brand-bg)] border border-[var(--border)] hover:border-[var(--accent)]/30 transition-colors"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center shadow-sm flex-shrink-0">
                    <item.icon className="w-4 h-4 text-[var(--accent)]" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-body font-medium text-[var(--ink)]">{item.label}</p>
                    <p className="text-xs font-body text-[var(--muted)]">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Additional Info */}
            <motion.div {...fadeUp(0.2)} className="mt-5 sm:mt-6 p-4 sm:p-5 rounded-2xl bg-[var(--brand-bg)] border border-[var(--border)]">
              <p className="text-sm font-body text-[var(--muted)] leading-relaxed">
                North Bangalore has quietly become the city&apos;s most sought-after residential belt. Jakkur, with its lake and established neighbourhoods, offers what new developments cannot — a sense of place.
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div {...fadeUp(0.3)} className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3">
              <button
                onClick={openModal}
                className="btn-gold px-6 sm:px-7 py-3 sm:py-3.5 text-sm min-h-[48px]"
              >
                Get Location Details
              </button>
              <button
                onClick={openModal}
                className="btn-outline px-6 sm:px-7 py-3 sm:py-3.5 text-sm min-h-[48px]"
              >
                Schedule a Visit
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
