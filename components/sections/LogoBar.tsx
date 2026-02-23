"use client";

import { motion, useReducedMotion } from "framer-motion";

const industries = [
  "Retail",
  "Healthcare",
  "Education",
  "Manufacturing",
  "Hospitality",
  "Franchises",
  "Startups",
  "Distribution",
  "Professional Services",
  "Trading",
];

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "50+", label: "Businesses Transformed" },
  { value: "8+", label: "Industries Served" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function LogoBar() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-16 px-6 border-y border-border-color bg-surface">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center text-muted text-sm tracking-wide uppercase mb-8"
        >
          Trusted by businesses across retail, healthcare, education, hospitality & more
        </motion.p>

        {/* Marquee — industries */}
        <div className="relative overflow-hidden mb-12">
          <div
            className={`flex gap-4 ${
              shouldReduceMotion ? "" : "animate-marquee"
            } w-max`}
          >
            {[...industries, ...industries].map((industry, i) => (
              <span
                key={`${industry}-${i}`}
                className="flex-shrink-0 inline-flex items-center px-5 py-2 rounded-full border border-border-color bg-bg text-muted text-sm font-medium hover:border-primary/40 hover:text-foreground transition-colors duration-200"
              >
                {industry}
              </span>
            ))}
          </div>
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface to-transparent pointer-events-none z-10" />
        </div>

        {/* Stats row */}
        <motion.div
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-3 gap-8 md:gap-12"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.value}
              variants={fadeUp}
              className="text-center"
            >
              <div className="font-serif italic text-primary text-4xl md:text-5xl leading-none mb-2">
                {stat.value}
              </div>
              <div className="text-muted text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
