"use client";

import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[var(--primary)] text-white/80 pb-24 md:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 md:gap-16 mb-12">
          {/* Column 1: Project Info */}
          <div className="flex-1 max-w-sm">
            <img
              src="/image-removebg-preview.png"
              alt="Pelican Gardens"
              className="h-10 w-auto mb-4 brightness-0 invert opacity-90"
            />
            <p className="text-sm text-white/60 font-body leading-relaxed">
              133 lake-facing 4 BHK residences with Home Offices across 4.81 acres in Jakkur, Bangalore.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex-1">
            <h4 className="section-eyebrow text-white/50 mb-4">Explore</h4>
            <ul className="space-y-2.5">
              <li><a href="#overview" className="text-sm font-body text-white/70 hover:text-white transition-colors">Overview</a></li>
              <li><a href="#highlights" className="text-sm font-body text-white/70 hover:text-white transition-colors">Highlights</a></li>
              <li><a href="#amenities" className="text-sm font-body text-white/70 hover:text-white transition-colors">Amenities</a></li>
              <li><a href="#floor-plans" className="text-sm font-body text-white/70 hover:text-white transition-colors">Floor Plans</a></li>
              <li><a href="#location" className="text-sm font-body text-white/70 hover:text-white transition-colors">Location</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex-1">
            <h4 className="section-eyebrow text-white/50 mb-4">Reach Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-[var(--accent)]" />
                <span className="text-sm font-body text-white/70">Jakkur, North Bangalore, Karnataka</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[var(--accent)]" />
                <a href="tel:+918404025050" className="text-sm font-body text-white/70 hover:text-white transition-colors">+91 84040 25050</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[var(--accent)]" />
                <a href="mailto:preciousfortune11426@gmail.com" className="text-sm font-body text-white/70 hover:text-white transition-colors">preciousfortune11426@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col gap-4">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            <a href="/terms" className="text-xs font-body text-white/50 hover:text-white/80 transition-colors">
              Terms & Conditions
            </a>
            <span className="text-white/20 hidden sm:inline">|</span>
            <a href="/privacy" className="text-xs font-body text-white/50 hover:text-white/80 transition-colors">
              Privacy Policy
            </a>
            <span className="text-white/20 hidden sm:inline">|</span>
            <a href="/authorised-partner" className="text-xs font-body text-white/50 hover:text-white/80 transition-colors">
              Authorised Partner
            </a>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-xs text-white/40 font-body">
              &copy; {new Date().getFullYear()} Pelican Gardens. All rights reserved.
            </p>
            <p className="text-xs text-white/40 font-body">
              4 BHK + Home Office • Jakkur, Bangalore
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
