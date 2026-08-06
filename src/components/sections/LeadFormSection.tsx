"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { slideLeft, slideRight } from "@/lib/motion";
import { submitToSheet } from "@/lib/submitToSheet";

interface LeadFormSectionProps {
  id: string;
}

export default function LeadFormSection({ id }: LeadFormSectionProps) {
  const isFirst = id === "lead-form-1";

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

  return (
    <section id={id} className="w-full py-[var(--section-y)] bg-[var(--primary)] relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-[var(--accent)] blur-[100px] sm:blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-48 sm:w-72 h-48 sm:h-72 rounded-full bg-[var(--accent)] blur-[80px] sm:blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* Left — Messaging */}
          <motion.div {...slideLeft()}>
            <span className="section-eyebrow text-[var(--accent-light)]">
              {isFirst ? "Limited Availability" : "Get in Touch"}
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-light mt-3 mb-3 sm:mb-4 leading-tight">
              {isFirst
                ? "Only 133 Residences. And They Won\u2019t Last."
                : "Speak with Our Team"}
            </h2>
            <p className="text-white/60 font-body text-sm sm:text-base leading-relaxed mb-5 sm:mb-6 max-w-md">
              {isFirst
                ? "4 BHK homes with dedicated Home Offices, starting at \u20B910.2 Cr. Spread across 4.81 acres in Jakkur with uninterrupted lake views from every room."
                : "Our consultants can walk you through floor plans, pricing and availability. No obligation \u2014 just a conversation about what Pelican Gardens could look like for you."}
            </p>
            {/* Trust micro-indicators */}
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-white/50 font-body">
                ✓ No Spam
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-white/50 font-body">
                ✓ Instant Callback
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-white/50 font-body">
                ✓ Complimentary Site Visit
              </span>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div {...slideRight()}>
            <div className="glass-card p-5 sm:p-6 md:p-8 lg:p-10">
              {submitted ? (
                <div className="text-center py-8">
                  <p className="text-2xl mb-2">✓</p>
                  <h3 className="font-heading text-lg sm:text-xl text-white mb-2">
                    Thank You!
                  </h3>
                  <p className="text-sm text-white/60 font-body">
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
                  <h3 className="font-heading text-lg sm:text-xl text-white mb-1.5 sm:mb-2">
                    {isFirst ? "Reserve a Private Presentation" : "Request a Callback"}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/40 font-body mb-5 sm:mb-6">
                    Takes less than 30 seconds.
                  </p>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
                    {/* Name */}
                    <div>
                      <input
                        type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full bg-transparent border-b border-white/20 py-3 text-white font-body text-sm outline-none placeholder:text-white/40 focus:border-[var(--accent)] transition-colors"
                        aria-label="Full Name"
                      />
                    </div>
                    {/* Phone */}
                    <div className="flex items-center gap-2">
                      <span className="text-white/40 text-sm font-body">+91</span>
                      <input
                        type="tel"
                        placeholder="Mobile Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        className="flex-1 bg-transparent border-b border-white/20 py-3 text-white font-body text-sm outline-none placeholder:text-white/40 focus:border-[var(--accent)] transition-colors"
                        aria-label="Mobile Number"
                      />
                    </div>
                    {/* Email (Optional) */}
                    <div>
                      <input
                        type="email"
                        placeholder="Email (Optional)"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-transparent border-b border-white/20 py-3 text-white font-body text-sm outline-none placeholder:text-white/40 focus:border-[var(--accent)] transition-colors"
                        aria-label="Email Address"
                      />
                    </div>
                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-gold px-8 py-3.5 mt-2 sm:mt-3 w-full text-sm min-h-[48px] disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading
                        ? "Submitting..."
                        : isFirst
                        ? "Schedule a Private Visit"
                        : "Request Callback"}
                    </button>
                  </form>
                  <p className="text-[10px] sm:text-xs text-white/30 font-body text-center mt-3 sm:mt-4">
                    We respect your privacy. No spam, ever.
                  </p>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
