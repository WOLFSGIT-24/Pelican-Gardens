"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";

export default function Disclaimer() {
  return (
    <section id="disclaimer" className="w-full py-10 md:py-14 bg-[var(--brand-alt)] border-t border-[var(--border)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div {...fadeIn()}>
          <h3 className="text-xs font-body font-bold text-[var(--muted)] tracking-wider uppercase mb-4">
            Disclaimer
          </h3>
          <div className="space-y-3 text-xs font-body text-[var(--muted)]/70 leading-relaxed">
            <p>
              This website is for informational purposes only and does not constitute a legal offering. All renderings, visuals and descriptions are artistic impressions and may differ from the final delivered product.
            </p>
            <p>
              The investment range of ₹10.2 Cr to ₹20.5 Cr is indicative and subject to change. The area of approximately 4,450 sq.ft. may vary by floor plan. Refer to the official agreement for exact specifications.
            </p>
            <p>
              The developer reserves the right to modify project specifications, amenities and design without prior notice. Lake view references are based on the current site orientation and surrounding conditions.
            </p>
            <p>
              By submitting your details, you consent to being contacted by the sales team via phone, email and messaging. Your information will not be shared with unrelated third parties.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
