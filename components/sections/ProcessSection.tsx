"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CAL_LINK } from "@/lib/cal-config";

const steps = [
  {
    number: "01",
    title: "ASSESS",
    description:
      "We deep-dive into your systems, people, and performance. No assumptions — just rigorous discovery.",
  },
  {
    number: "02",
    title: "STRATEGIZE",
    description:
      "We design a custom roadmap — not a generic report. Every recommendation is grounded in your specific context.",
  },
  {
    number: "03",
    title: "IMPLEMENT",
    description:
      "We deploy practical solutions with your team, not just for them. Change that sticks comes from working alongside people.",
  },
  {
    number: "04",
    title: "MONITOR",
    description:
      "KPIs, KRAs, KRIs, and Happiness Index tracking in real time. You see what's working and what needs adjustment.",
  },
  {
    number: "05",
    title: "SCALE",
    description:
      "Structured expansion when the foundation is solid. We ensure growth is sustainable, not just fast.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ProcessSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="process" className="py-24 px-6 md:px-12 lg:px-24 bg-bg">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-16"
        >
          <h2
            className="font-serif italic text-foreground leading-tight mb-4"
            style={{ fontSize: "clamp(32px, 5vw, 60px)" }}
          >
            From first call to
            <br />
            <span className="text-primary">full transformation.</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            A clear, structured process so you always know what&apos;s
            happening and why.
          </p>
        </motion.div>

        {/* Steps — horizontal on desktop, vertical on mobile */}
        <motion.div
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: shouldReduceMotion ? 0 : 0.12 },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="relative"
        >
          {/* Desktop connector line */}
          <div
            className="hidden md:block absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-color to-transparent"
            aria-hidden="true"
          />

          <div className="grid md:grid-cols-5 gap-8 md:gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                variants={fadeUp}
                className="flex flex-col items-center md:items-start text-center md:text-left group"
              >
                {/* Number bubble */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-full border-2 border-border-color bg-surface flex items-center justify-center group-hover:border-primary/50 transition-colors duration-300">
                    <span className="font-serif italic text-primary text-2xl leading-none">
                      {step.number}
                    </span>
                  </div>
                  {/* Mobile connector */}
                  {i < steps.length - 1 && (
                    <div className="md:hidden absolute left-1/2 -translate-x-1/2 top-full w-px h-8 bg-border-color mt-0" />
                  )}
                </div>

                <h3 className="text-foreground font-semibold text-sm tracking-widest uppercase mb-2">
                  {step.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mt-16"
        >
          <button
            data-cal-namespace="30min"
            data-cal-link={CAL_LINK}
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            className="inline-flex items-center gap-2 bg-primary text-bg font-bold px-9 py-4 rounded-full text-sm uppercase tracking-wider hover:bg-primaryLight transition-colors duration-200 cursor-pointer"
          >
            Start Your Transformation →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
