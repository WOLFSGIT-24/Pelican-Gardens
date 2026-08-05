"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerChild } from "@/lib/motion";
import { useModalStore } from "@/store/enquiryStore";
import { Sunrise, Briefcase, Maximize2, TreePine, Users, VolumeX, PanelsTopLeft, LayoutGrid } from "lucide-react";

const lifestyleFeatures = [
  { icon: Sunrise, label: "Morning light over the lake" },
  { icon: Briefcase, label: "A Home Office that inspires" },
  { icon: Maximize2, label: "~4,450 sq.ft. of breathing room" },
  { icon: TreePine, label: "4.81 acres of calm" },
  { icon: Users, label: "Space for the whole family" },
  { icon: VolumeX, label: "Quiet when you need it" },
  { icon: PanelsTopLeft, label: "Lake views from every room" },
  { icon: LayoutGrid, label: "4 layout options to suit you" },
];

export default function Lifestyle() {
  const { openModal } = useModalStore();

  return (
    <section id="lifestyle" className="w-full py-[var(--section-y)] bg-[var(--brand-alt)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <motion.div {...fadeUp()} className="section-header">
          <span className="section-eyebrow">The Life Here</span>
          <div className="divider-gold mx-auto mt-3 mb-4" />
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[var(--ink)] font-light">
            Imagine Your Mornings Here
          </h2>
          <p className="mt-3 text-[var(--muted)] font-body text-sm sm:text-base max-w-lg mx-auto">
            Coffee in hand. Lake in front. No rush. A home where work and life share the same peaceful address.
          </p>
        </motion.div>

        {/* Content Grid: Image + Features */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left — Image */}
          <motion.div {...fadeUp(0.1)}>
            <div className="aspect-[4/3] rounded-[var(--radius-img)] overflow-hidden relative">
              <img
                src="/lifestyle.png"
                alt="Pelican Gardens lifestyle — lake views and spacious living"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Right — Feature Grid */}
          <div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
            >
              {lifestyleFeatures.map((feature, idx) => (
                <motion.div
                  key={idx}
                  variants={staggerChild}
                  className="card-brand p-4 sm:p-5 flex items-center gap-3"
                >
                  <div className="w-9 h-9 rounded-full bg-[var(--brand-alt)] flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-4 h-4 text-[var(--accent)]" strokeWidth={1.5} />
                  </div>
                  <span className="text-sm font-body font-medium text-[var(--ink)]">
                    {feature.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div {...fadeUp(0.3)} className="mt-6 sm:mt-8">
              <button
                onClick={openModal}
                className="btn-gold px-6 sm:px-7 py-3 sm:py-3.5 text-sm min-h-[48px] w-full sm:w-auto"
              >
                Experience It in Person
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
