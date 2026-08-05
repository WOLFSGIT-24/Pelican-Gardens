"use client";

import { useModalStore } from "@/store/enquiryStore";
import Modal from "@/components/ui/Modal";

export default function EnquiryModal() {
  const { isOpen, closeModal } = useModalStore();

  return (
    <Modal isOpen={isOpen} onClose={closeModal} title="Schedule a Private Visit">
      <p className="text-sm font-body text-[var(--muted)] mb-5">
        Our team will arrange a convenient time for you to visit Pelican Gardens in Jakkur. No obligation.
      </p>
      <form className="flex flex-col gap-5">
        {/* Name */}
        <div>
          <input
            type="text"
            placeholder="Full Name"
            className="input-premium"
            aria-label="Full Name"
          />
        </div>

        {/* Phone */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-[var(--muted)] font-body">+91</span>
          <input
            type="tel"
            placeholder="Mobile Number"
            className="input-premium flex-1"
            aria-label="Mobile Number"
          />
        </div>

        {/* Email (Optional) */}
        <div>
          <input
            type="email"
            placeholder="Email (Optional)"
            className="input-premium"
            aria-label="Email Address"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="btn-gold px-8 py-3.5 mt-2 w-full text-sm"
        >
          Reserve Your Visit
        </button>
      </form>

      <p className="text-[10px] text-[var(--muted)]/50 font-body text-center mt-4">
        We respect your privacy. No spam, ever.
      </p>
    </Modal>
  );
}
