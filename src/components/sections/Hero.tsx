"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, fadeIn } from "@/lib/motion";
import { useModalStore } from "@/store/enquiryStore";

export default function Hero() {
  const { openModal } = useModalStore();

  return (
    <section
      id="overview"
      className="relative w-full min-h-[85vh] sm:min-h-[90vh] md:min-h-screen flex items-end sm:items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero.png"
          alt="Pelican Gardens — Luxury 4 BHK residences in Jakkur, Bangalore"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/20 md:from-black/70 md:via-black/40 md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent sm:from-black/50 sm:via-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pb-28 sm:pb-24 pt-20 sm:py-24 md:py-32">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <motion.div {...fadeUp(0)} className="mb-3 sm:mb-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs font-body font-semibold text-white/90 tracking-wider uppercase">
              4 BHK • Jakkur, Bangalore
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            {...fadeUp(0.1)}
            className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-[1.15] sm:leading-[1.1] mb-3 sm:mb-5"
          >
            Wake Up to the Lake.{" "}
            <br className="hidden sm:block" />
            Every Single Day.
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            {...fadeUp(0.2)}
            className="text-sm sm:text-base md:text-lg text-white/70 font-body leading-relaxed mb-3 sm:mb-4 max-w-xl"
          >
            133 residences across 4.81 acres. Spacious 4 BHK homes with Home Offices — every room facing the lake.
          </motion.p>

          {/* Price/Config Teaser */}
          <motion.p
            {...fadeUp(0.25)}
            className="text-xs sm:text-sm text-[var(--accent-light)] font-body font-semibold tracking-wide uppercase mb-5 sm:mb-8"
          >
            ~4,450 sq.ft. • ₹10.2 Cr onwards
          </motion.p>

          {/* CTA Buttons */}
          <motion.div {...fadeUp(0.3)} className="flex flex-row gap-3">
            <button
              onClick={openModal}
              className="btn-gold px-5 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm min-h-[44px] sm:min-h-[48px]"
            >
              Schedule Visit
            </button>
            <a
              href="tel:+918404025050"
              className="btn-glass px-5 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm min-h-[44px] sm:min-h-[48px] text-center"
            >
              Request Price
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        {...fadeIn(0.6)}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/50 font-body tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
}
