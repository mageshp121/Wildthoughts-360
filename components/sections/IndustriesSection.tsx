"use client";

import { motion, useReducedMotion } from "framer-motion";

const industries = [
  { icon: "🛍", name: "Retail & Distribution" },
  { icon: "🏥", name: "Healthcare & Diagnostics" },
  { icon: "🎓", name: "Education & Training" },
  { icon: "🏭", name: "Manufacturing & Trading" },
  { icon: "🏨", name: "Hospitality & Lifestyle" },
  { icon: "🚀", name: "Startups & Emerging Enterprises" },
  { icon: "🔗", name: "Franchise & Multi-Unit Operations" },
  { icon: "💼", name: "Professional Services" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function IndustriesSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-bg">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-14"
        >
          <h2
            className="font-serif italic text-foreground leading-tight mb-4"
            style={{ fontSize: "clamp(30px, 4vw, 52px)" }}
          >
            We speak your{" "}
            <span className="text-primary">industry&apos;s language.</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            From retail to healthcare, startups to franchises — our frameworks
            adapt to your sector.
          </p>
        </motion.div>

        {/* Industry grid */}
        <motion.div
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: shouldReduceMotion ? 0 : 0.07 },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {industries.map((industry) => (
            <motion.div
              key={industry.name}
              variants={fadeUp}
              className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-border-color bg-surface hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 cursor-default group text-center"
            >
              <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                {industry.icon}
              </span>
              <span className="text-foreground text-sm font-medium leading-snug">
                {industry.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
