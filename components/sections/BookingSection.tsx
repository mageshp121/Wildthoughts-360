"use client";

import { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Shield, Clock, Globe, CheckCircle } from "lucide-react";
import FaqAccordion from "@/components/ui/FaqAccordion";
import { faqs } from "@/lib/faqs";
import Cal, { getCalApi } from "@calcom/embed-react";

const whatToExpect = [
  "A full audit of your current challenges and bottlenecks",
  "Strategic recommendations you can act on immediately",
  "Insights from consultants with global + local market experience",
  "A custom growth roadmap if we're a fit",
];

const trustSignals = [
  { icon: Shield, label: "100% Confidential" },
  { icon: Clock, label: "60-minute session" },
  { icon: Globe, label: "In-person (Perinthalmanna) or video call" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Cal.com username comes from env: NEXT_PUBLIC_CAL_LINK
// TODO: Set NEXT_PUBLIC_CAL_LINK to your actual Cal.com event link
const CAL_LINK =
  process.env.NEXT_PUBLIC_CAL_LINK || "wild-thoughts/strategy-call";

function CalEmbed() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "strategy-call" });
      cal("ui", {
        theme: "light",
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <Cal
      namespace="strategy-call"
      calLink={CAL_LINK}
      style={{ width: "100%", height: "100%", minHeight: "480px", overflow: "scroll" }}
      config={{ layout: "month_view", theme: "light" }}
    />
  );
}

export default function BookingSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="booking"
      className="py-24 px-6 md:px-12 lg:px-24 bg-surface-2"
    >
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
            style={{ fontSize: "clamp(32px, 5vw, 60px)" }}
          >
            Let&apos;s build the next phase
            <br />
            <span className="text-primary">of your business.</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Book a free 60-minute strategy call. No pitch, no pressure — just
            clarity.
          </p>
        </motion.div>

        {/* FAQ above the fold */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-12 max-w-3xl mx-auto"
        >
          <p className="text-muted text-sm uppercase tracking-widest mb-4 text-center">
            Common questions
          </p>
          <FaqAccordion faqs={faqs} />
        </motion.div>

        {/* Main booking layout */}
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
          className="grid md:grid-cols-2 gap-10 items-start"
        >
          {/* Left: copy */}
          <motion.div variants={fadeUp} className="flex flex-col gap-7">
            <div>
              <p className="text-muted text-xs uppercase tracking-widest mb-3">
                What you&apos;ll get
              </p>
              <div className="space-y-3">
                {whatToExpect.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle
                      size={16}
                      className="text-primary flex-shrink-0 mt-0.5"
                    />
                    <span className="text-foreground text-sm leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust signals */}
            <div className="border-t border-border-color pt-6">
              <p className="text-muted text-xs uppercase tracking-widest mb-4">
                Session details
              </p>
              <div className="space-y-3">
                {trustSignals.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3">
                    <Icon size={15} className="text-primary flex-shrink-0" />
                    <span className="text-muted text-sm">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Urgency */}
            <div className="p-4 rounded-xl border border-primary/20 bg-primary/5">
              <p className="text-primary text-sm font-medium">
                ⚡ Limited slots available each month
              </p>
              <p className="text-muted text-xs mt-1">
                We keep our calendar selective to ensure every client gets full
                attention. Book early.
              </p>
            </div>
          </motion.div>

          {/* Right: Cal.com embed */}
          <motion.div
            variants={fadeUp}
            className="rounded-2xl overflow-hidden border border-border-color bg-surface"
            style={{ minHeight: "520px" }}
          >
            <CalEmbed />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
