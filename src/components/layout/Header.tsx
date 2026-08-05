"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { useModalStore } from "@/store/enquiryStore";

const navLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Highlights", href: "#highlights" },
  { label: "Amenities", href: "#amenities" },
  { label: "Floor Plans", href: "#floor-plans" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#lead-form-2" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openModal } = useModalStore();

  return (
    <>
      <header className="w-full sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between h-16 md:h-[72px]">
          {/* Logo / Project Name */}
          <a href="/" className="flex items-center gap-2" aria-label="Home">
            <img
              src="/image-removebg-preview.png"
              alt="Pelican Gardens"
              className="h-12 sm:h-14 md:h-14 w-auto"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-body font-medium text-[var(--muted)] hover:text-[var(--ink)] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+919999999999"
              className="inline-flex items-center gap-2 text-sm font-body font-medium text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
              aria-label="Call us"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">Call Now</span>
            </a>
            <button
              onClick={openModal}
              className="btn-gold px-5 py-2.5 text-sm"
            >
              Book Site Visit
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-[var(--brand-alt)] transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 z-40 bg-white/98 backdrop-blur-lg lg:hidden"
          >
            <nav className="flex flex-col p-6 gap-1" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 px-4 text-base font-body font-medium text-[var(--ink)] hover:bg-[var(--brand-alt)] rounded-xl transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-6 pt-6 border-t border-[var(--border)] flex flex-col gap-3">
                <a
                  href="tel:+919999999999"
                  className="btn-outline px-6 py-3 text-center"
                >
                  Call Now
                </a>
                <button
                  onClick={() => { openModal(); setMobileOpen(false); }}
                  className="btn-gold px-6 py-3"
                >
                  Book Site Visit
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
