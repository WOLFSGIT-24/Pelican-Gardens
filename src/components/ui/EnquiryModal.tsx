"use client";

import { useState } from "react";
import { useModalStore } from "@/store/enquiryStore";
import Modal from "@/components/ui/Modal";
import { submitToSheet } from "@/lib/submitToSheet";

export default function EnquiryModal() {
  const { isOpen, closeModal } = useModalStore();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    setLoading(true);
    try {
      await submitToSheet({ name, phone, email });
      setSubmitted(true);
      setName("");
      setPhone("");
      setEmail("");
    } catch (err) {
      console.error("Form submission failed:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    closeModal();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="Schedule a Private Visit">
      {submitted ? (
        <div className="text-center py-6">
          <p className="text-2xl mb-2">✓</p>
          <h3 className="font-heading text-lg text-[var(--ink)] mb-2">
            Thank You!
          </h3>
          <p className="text-sm text-[var(--muted)] font-body">
            Our team will reach out to you shortly.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-4 text-sm text-[var(--accent)] font-body underline underline-offset-2"
          >
            Submit another enquiry
          </button>
        </div>
      ) : (
        <>
          <p className="text-sm font-body text-[var(--muted)] mb-5">
            Our team will arrange a convenient time for you to visit Pelican Gardens in Jakkur. No obligation.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Name */}
            <div>
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
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
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="input-premium flex-1"
                aria-label="Mobile Number"
              />
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="input-premium"
                aria-label="Email Address"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="btn-gold px-8 py-3.5 mt-2 w-full text-sm disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Submitting..." : "Reserve Your Visit"}
            </button>
          </form>

          <p className="text-[10px] text-[var(--muted)]/50 font-body text-center mt-4">
            We respect your privacy. No spam, ever.
          </p>
        </>
      )}
    </Modal>
  );
}
