"use client";

import { Phone } from "lucide-react";
import { useModalStore } from "@/store/enquiryStore";

export default function StickyMobileCTA() {
  const { openModal } = useModalStore();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-md border-t border-[var(--border)] px-3 sm:px-4 py-2.5 sm:py-3 safe-area-pb">
      <div className="flex items-center gap-2.5 sm:gap-3">
        {/* Call Button */}
        <a
          href="tel:+919999999999"
          className="flex-1 btn-outline px-3 sm:px-4 py-3 flex items-center justify-center gap-2 text-xs sm:text-sm min-h-[48px]"
          aria-label="Call Now"
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>

        {/* Primary CTA */}
        <button
          onClick={openModal}
          className="flex-1 btn-gold px-3 sm:px-4 py-3 text-xs sm:text-sm min-h-[48px]"
        >
          Book Site Visit
        </button>
      </div>
    </div>
  );
}
