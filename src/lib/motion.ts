/**
 * Shared Framer Motion presets
 * Import these in sections for consistent animation language.
 */
import type { Transition, Variants } from "framer-motion";

const ease = [0.4, 0, 0.2, 1] as [number, number, number, number];

/* ── Base transition ───────────────────────── */
export const baseTrans = (delay = 0, duration = 0.8): Transition => ({
  duration,
  delay,
  ease,
});

/* ── Fade up ─────────────────────────────── */
export const fadeUp = (delay = 0, distance = 28): object => ({
  initial: { opacity: 0, y: distance },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: baseTrans(delay),
});

/* ── Fade in ────────────────────────────── */
export const fadeIn = (delay = 0): object => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, amount: 0.2 },
  transition: baseTrans(delay),
});

/* ── Scale reveal (images) ───────────────── */
export const scaleReveal = (delay = 0): object => ({
  initial: { opacity: 0, scale: 1.04 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 1.0, delay, ease },
});

/* ── Stagger children variant ────────────── */
export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

export const staggerChild: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

/* ── Slide in from left ───────────────────── */
export const slideLeft = (delay = 0): object => ({
  initial: { opacity: 0, x: -32 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: baseTrans(delay),
});

/* ── Slide in from right ──────────────────── */
export const slideRight = (delay = 0): object => ({
  initial: { opacity: 0, x: 32 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: baseTrans(delay),
});

/* ── Accent bar draw ─────────────────────── */
export const drawBar = (delay = 0): object => ({
  initial: { scaleX: 0, opacity: 0 },
  whileInView: { scaleX: 1, opacity: 1 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.65, delay, ease },
  style: { transformOrigin: "left" },
});
