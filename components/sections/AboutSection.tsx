"use client";

import { motion, useReducedMotion } from "framer-motion";

const credentialStats = [
  {
    icon: "🌍",
    label: "India & International Markets",
    description: "Experience across Indian and global business environments",
  },
  {
    icon: "🔄",
    label: "360° Under One Roof",
    description: "Strategy, HR, sales, finance, and operations - all connected",
  },
  {
    icon: "⚙️",
    label: "Systems-First Approach",
    description: "We build frameworks that outlast any single consultant",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AboutSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: photo placeholder */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="relative rounded-2xl overflow-hidden border border-border-color bg-bg aspect-[4/5]">
              {/* Placeholder for real photo/image */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8">
                <div
                  className="w-32 h-32 rounded-full border-2 border-primary/40"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(200,169,110,0.15) 0%, transparent 70%)",
                  }}
                />
                <div className="text-center">
                  <p className="text-muted text-sm">
                    {/* TODO: Replace with founder/team photo */}
                   
                  </p>
                </div>
              </div>
              {/* Gold accent bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            </div>

            {/* Floating stat card */}
            <div className="mt-4 p-5 rounded-xl border border-primary/20 bg-primary/5 flex items-center gap-4">
              <div className="text-2xl">🏆</div>
              <div>
                <p className="text-foreground font-semibold text-sm">
                  Perinthalmanna&apos;s Most Trusted Consultancy
                </p>
                <p className="text-muted text-xs mt-0.5">
                  Serving Kerala and beyond since our founding
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: copy */}
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
            className="flex flex-col gap-6"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-medium tracking-widest uppercase mb-4">
                About Wild Thoughts
              </span>
              <h2
                className="font-serif italic text-foreground leading-tight"
                style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
              >
                Global Experience.
                <br />
                <span className="text-primary">Local Insight.</span>
              </h2>
            </motion.div>

            <motion.p variants={fadeUp} className="text-foreground text-base leading-relaxed">
              Our consultants bring hands-on experience from markets across
              India and internationally - blending global best practices with
              the realities of local business culture, regulation, and
              opportunity.
            </motion.p>
            <motion.p variants={fadeUp} className="text-muted text-base leading-relaxed">
              We don&apos;t deliver reports. We sit alongside your team and
              build systems that actually get implemented. Our engagements are
              defined by outcomes, not hours billed.
            </motion.p>
            <motion.p variants={fadeUp} className="text-muted text-base leading-relaxed">
              Wild Thoughts was founded with a single conviction: that every
              business - regardless of size or sector - deserves access to the
              same caliber of strategic and operational expertise that large
              corporations take for granted.
            </motion.p>

            {/* Credential stats */}
            <motion.div
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.08 } },
              }}
              className="grid grid-cols-1 gap-4 mt-2"
            >
              {credentialStats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  className="flex items-center gap-4 p-4 rounded-xl border border-border-color bg-bg"
                >
                  <span className="text-2xl">{stat.icon}</span>
                  <div>
                    <p className="text-foreground font-semibold text-sm">
                      {stat.label}
                    </p>
                    <p className="text-muted text-xs mt-0.5">
                      {stat.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
