"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const painPoints = [
  "No clear systems or SOPs",
  "HR chaos and high attrition",
  "Sales that depend on one person",
  "Finance that feels like guesswork",
  "Strategy that lives in your head, not on paper",
  "Burnt-out teams with no performance clarity",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ProblemSection() {
  const shouldReduceMotion = useReducedMotion();

  const handleClick = () => {
    const el = document.querySelector("#services");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-bg">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Pain points */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.1 } },
            }}
          >
            <motion.h2
              variants={fadeUp}
              className="font-serif italic text-foreground leading-tight mb-10"
              style={{ fontSize: "clamp(30px, 4vw, 52px)" }}
            >
              Most businesses plateau —
              <br />
              <span className="text-primary">not from lack of effort,</span>
              <br />
              but from lack of structure.
            </motion.h2>

            <motion.div
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.08 } },
              }}
              className="space-y-4"
            >
              {painPoints.map((point) => (
                <motion.div
                  key={point}
                  variants={fadeUp}
                  className="flex items-start gap-3 p-4 rounded-xl border border-border-color bg-surface group hover:border-primary/30 transition-colors duration-200"
                >
                  <span className="text-base mt-0.5 flex-shrink-0">❌</span>
                  <span className="text-foreground text-sm leading-relaxed">
                    {point}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Solution intro */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col gap-6"
          >
            <div className="w-16 h-px bg-primary mb-2" />
            <p className="text-foreground text-lg leading-relaxed">
              These aren&apos;t signs of a failing business. They&apos;re signs
              of a growing business that needs structure.
            </p>
            <p className="text-muted text-base leading-relaxed">
              Wild Thoughts exists to close that gap — with proven frameworks,
              people-first systems, and our proprietary{" "}
              <span className="text-primary font-medium">Happiness Index</span>{" "}
              that makes your organization both profitable and genuinely
              fulfilling.
            </p>
            <p className="text-muted text-base leading-relaxed">
              We don&apos;t just consult. We sit in the trenches with you,
              build the systems, train the people, and ensure the change
              actually sticks.
            </p>

            {/* Mini proof stats */}
            <div className="grid grid-cols-2 gap-4 mt-2">
              {[
                { value: "360°", label: "Full-spectrum consulting" },
                { value: "6", label: "Core practice domains" },
                { value: "50+", label: "Businesses restructured" },
                { value: "1", label: "Consulting partner for all of it" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-4 rounded-xl border border-border-color bg-surface"
                >
                  <div className="text-primary font-serif italic text-2xl leading-none mb-1">
                    {item.value}
                  </div>
                  <div className="text-muted text-xs leading-snug">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={handleClick}
              className="mt-2 inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all duration-200 group"
            >
              See How We Do It
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
