"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CAL_LINK } from "@/lib/cal-config";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function FinalCTA() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative py-32 px-6 md:px-12 overflow-hidden bg-bg noise-overlay">
      {/* Gold gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(200,169,110,0.1) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(200,169,110,0.3), transparent)",
          }}
        />
      </div>

      <div className="section-content max-w-4xl mx-auto text-center">
        <motion.div
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: shouldReduceMotion ? 0 : 0.15 },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col items-center gap-7"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-medium tracking-widest uppercase"
          >
            One call changes everything
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="font-serif italic text-foreground leading-tight"
            style={{ fontSize: "clamp(36px, 6vw, 72px)" }}
          >
            Your business deserves
            <br />
            <span className="text-gold-gradient">a system that works.</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="text-muted text-lg max-w-xl">
            Book your free strategy call today and get a custom action plan —
            at no cost, no commitment.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col items-center gap-3">
            <button
              data-cal-namespace="30min"
              data-cal-link={CAL_LINK}
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
              className="inline-flex items-center gap-2 bg-primary text-bg font-bold px-10 py-5 rounded-full text-sm uppercase tracking-wider hover:bg-primaryLight transition-all duration-200 shadow-2xl shadow-primary/30 hover:scale-[1.02] hover:shadow-primary/40 cursor-pointer"
            >
              Book My Free Call Now →
            </button>
            <p className="text-muted text-xs tracking-wide">
              ⚡ Limited slots available each month
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
