"use client";

import { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Shield, Clock, Globe, CheckCircle } from "lucide-react";
import FaqAccordion from "@/components/ui/FaqAccordion";
import { faqs } from "@/lib/faqs";
import Cal, { getCalApi } from "@calcom/embed-react";
import { CAL_LINK } from "@/lib/cal-config";

const whatToExpect = [
  "A full audit of your current challenges and bottlenecks",
  "Strategic recommendations you can act on immediately",
  "Insights from consultants with global + local market experience",
  "A custom growth roadmap if we're a fit",
];

const trustSignals = [
  { icon: Shield, label: "100% Confidential" },
  { icon: Clock, label: "30-minute strategy session" },
  { icon: Globe, label: "In-person (Perinthalmanna) or video call" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function CalEmbed() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "booking" });
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: {
          light: {
            "cal-brand": "#636B2F",
            "cal-brand-emphasis": "#3D4127",
            "cal-brand-text": "#FFFFFF",
            "cal-bg": "#FFFFFF",
            "cal-bg-muted": "#F4F6E8",
            "cal-border": "#C8D2A0",
            "cal-border-emphasis": "#BAC095",
            "cal-text": "#3D4127",
            "cal-text-muted": "#7D8455",
          },
          dark: {
            "cal-brand": "#BAC095",
            "cal-brand-emphasis": "#D4DE95",
            "cal-brand-text": "#3D4127",
            "cal-bg": "#3D4127",
            "cal-bg-muted": "#4A5030",
            "cal-border": "#636B2F",
            "cal-border-emphasis": "#7A8338",
            "cal-text": "#F4F6E8",
            "cal-text-muted": "#BAC095",
          },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <Cal
      namespace="booking"
      calLink={CAL_LINK}
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      config={{ layout: "month_view" }}
    />
  );
}

export default function BookingSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="booking" className="py-24 px-6 md:px-12 lg:px-24 bg-surface-2">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium tracking-widest uppercase mb-5">
            Free Strategy Call
          </span>
          <h2
            className="font-serif italic text-foreground leading-tight mb-4"
            style={{ fontSize: "clamp(32px, 5vw, 60px)" }}
          >
            Let&apos;s build the next phase
            <br />
            <span className="text-primary">of your business.</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Book a free 30-minute strategy call. No pitch, no pressure - just
            clarity.
          </p>
        </motion.div>

        {/* Content: What you'll get + Session details */}
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
          className="grid md:grid-cols-2 gap-6 mb-10"
        >
          {/* What you'll get */}
          <motion.div
            variants={fadeUp}
            className="bg-surface border border-border-color rounded-2xl p-7 flex flex-col gap-5"
          >
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center">
                <CheckCircle size={14} className="text-primary" />
              </span>
              <p className="text-foreground font-semibold text-sm uppercase tracking-widest">
                What you&apos;ll get
              </p>
            </div>
            <div className="space-y-3.5">
              {whatToExpect.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle size={11} className="text-primary" />
                  </span>
                  <span className="text-foreground text-sm leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Session details + Urgency */}
          <motion.div variants={fadeUp} className="flex flex-col gap-4">
            {/* Session details card */}
            <div className="bg-surface border border-border-color rounded-2xl p-7 flex-1">
              <div className="flex items-center gap-2.5 mb-5">
                <span className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Clock size={14} className="text-primary" />
                </span>
                <p className="text-foreground font-semibold text-sm uppercase tracking-widest">
                  Session details
                </p>
              </div>
              <div className="space-y-4">
                {trustSignals.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-xl bg-primary/8 border border-primary/15 flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-primary" />
                    </span>
                    <span className="text-foreground text-sm font-medium">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Urgency card */}
            <div className="rounded-2xl border border-primary/30 bg-primary/8 p-5 flex items-start gap-4">
              <span className="text-2xl leading-none mt-0.5">⚡</span>
              <div>
                <p className="text-primary text-sm font-semibold mb-1">
                  Limited slots available each month
                </p>
                <p className="text-muted text-xs leading-relaxed">
                  We keep our calendar selective to ensure every client gets
                  full attention. Book early.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Cal.com embed - full width */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="rounded-2xl overflow-hidden border border-border-color bg-surface shadow-lg shadow-primary/5 mb-16"
          style={{ minHeight: "580px" }}
        >
          <div className="pt-6">
            <CalEmbed />
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-muted text-sm uppercase tracking-widest mb-4 text-center">
            Common questions
          </p>
          <FaqAccordion faqs={faqs} />
        </motion.div>
      </div>
    </section>
  );
}
