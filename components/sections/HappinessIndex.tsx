"use client";

import { motion, useReducedMotion } from "framer-motion";

const metrics = [
  {
    icon: "📊",
    title: "Real-Time Morale Tracking",
    description:
      "Know how your team feels before problems escalate into exits, conflict, or underperformance.",
  },
  {
    icon: "🔍",
    title: "Bottleneck Identification",
    description:
      "Surface hidden friction in roles, systems, and culture that quietly drain energy and output.",
  },
  {
    icon: "🤝",
    title: "Collaboration Enhancement",
    description:
      "Design workflows that build trust and reduce silos — so teams move faster and work better together.",
  },
  {
    icon: "📉",
    title: "Attrition Reduction",
    description:
      "Happy teams stay. Retained talent compounds results. We give you the data and the tools to retain your best people.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function HappinessIndex() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-surface-2 relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(200,169,110,0.06) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-medium tracking-widest uppercase mb-6">
            Proprietary Framework
          </span>
          <h2
            className="font-serif italic text-foreground leading-tight mb-4"
            style={{ fontSize: "clamp(32px, 5vw, 60px)" }}
          >
            Introducing the
            <br />
            <span className="text-primary">Happiness Index™</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            Our proprietary framework for building organizations that perform
            because their people thrive. Because performance isn&apos;t
            separate from culture — it&apos;s a product of it.
          </p>
        </motion.div>

        {/* 2×2 metric grid */}
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
          className="grid sm:grid-cols-2 gap-5 mb-14"
        >
          {metrics.map((metric) => (
            <motion.div
              key={metric.title}
              variants={fadeUp}
              className="p-6 rounded-2xl border border-border-color bg-surface group hover:border-primary/30 transition-colors duration-300"
            >
              <div className="text-3xl mb-4">{metric.icon}</div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-5 h-px bg-primary" />
                <h3 className="text-foreground font-semibold text-base">
                  {metric.title}
                </h3>
              </div>
              <p className="text-muted text-sm leading-relaxed">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Blockquote */}
        <motion.blockquote
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="border-l-2 border-primary pl-6 py-2 max-w-3xl mx-auto text-center"
        >
          <p className="text-foreground text-lg md:text-xl leading-relaxed italic mb-3">
            &ldquo;Because a high-performing organization is a happy one — and
            we have the framework to prove it.&rdquo;
          </p>
          <cite className="text-primary text-sm font-medium not-italic">
            — Wild Thoughts Consultancy
          </cite>
        </motion.blockquote>
      </div>
    </section>
  );
}
