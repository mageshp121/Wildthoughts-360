"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import { CAL_LINK } from "@/lib/cal-config";

const trustItems = [
  "No commitment required",
  "60-minute deep-dive session",
  "Custom action plan included",
];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: shouldReduceMotion
      ? { opacity: 0 }
      : { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const handleServices = () => {
    const el = document.querySelector("#services");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden noise-overlay">
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-bg" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(200,169,110,0.08) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(200,169,110,0.04) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-content w-full max-w-6xl mx-auto px-6 md:px-12 pt-32 pb-24 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center gap-7"
        >
          {/* Eyebrow */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-medium tracking-widest uppercase">
              360° Business Transformation
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={itemVariants}
            className="font-serif italic text-foreground leading-tight"
            style={{ fontSize: "clamp(40px, 7vw, 80px)" }}
          >
            Build a Business That&apos;s
            <br />
            <span className="text-gold-gradient">Structured, Scalable,</span>
            <br />
            and Genuinely Happy.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-muted text-lg md:text-xl leading-relaxed max-w-2xl"
          >
            Wild Thoughts partners with founders and enterprises across India to
            align strategy, systems, people, and performance - so your business
            grows without breaking.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 mt-2"
          >
            <button
              data-cal-namespace="30min"
              data-cal-link={CAL_LINK}
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
              className="inline-flex items-center gap-2 bg-primary text-bg font-bold px-9 py-4 rounded-full text-sm uppercase tracking-wider hover:bg-primaryLight transition-all duration-200 shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:scale-[1.02] cursor-pointer"
            >
              Book Your Free Strategy Call
              <ArrowRight size={16} />
            </button>
            <button
              onClick={handleServices}
              className="inline-flex items-center gap-2 border border-primary/50 text-primary px-9 py-4 rounded-full text-sm uppercase tracking-wider hover:bg-primary hover:text-bg hover:border-primary transition-all duration-200"
            >
              Explore Our Services
            </button>
          </motion.div>

          {/* Trust bar */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-2"
          >
            {trustItems.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-muted text-sm"
              >
                <CheckCircle
                  size={15}
                  className="text-primary flex-shrink-0"
                />
                <span>{item}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-primary/40 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
