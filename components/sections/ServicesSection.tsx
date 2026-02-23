"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { serviceDomains } from "@/lib/services";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ServicesSection() {
  const [activeId, setActiveId] = useState(serviceDomains[0].id);
  const shouldReduceMotion = useReducedMotion();
  const activeService = serviceDomains.find((s) => s.id === activeId)!;

  const handleBooking = () => {
    const el = document.querySelector("#booking");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-24 px-6 md:px-12 lg:px-24 bg-surface">
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
            Every part of your business.
            <br />
            <span className="text-primary">One consulting partner.</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Six practice domains. Fully integrated. Delivered by one team that
            knows how it all connects.
          </p>
        </motion.div>

        {/* Tab layout */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-[300px_1fr] gap-4"
        >
          {/* Tab list */}
          <div className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
            {serviceDomains.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveId(service.id)}
                className={`flex-shrink-0 flex items-center gap-3 px-4 py-3.5 rounded-xl text-left transition-all duration-200 border ${
                  activeId === service.id
                    ? "bg-primary/10 border-primary/40 text-foreground"
                    : "bg-bg border-border-color text-muted hover:border-primary/20 hover:text-foreground"
                }`}
              >
                <span className="text-xl">{service.icon}</span>
                <span className="text-sm font-medium leading-tight">
                  {service.title}
                </span>
              </button>
            ))}
          </div>

          {/* Tab content */}
          <motion.div
            key={activeId}
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-bg border border-border-color rounded-2xl p-8"
          >
            <div className="text-4xl mb-4">{activeService.icon}</div>
            <h3 className="text-foreground font-semibold text-xl mb-3">
              {activeService.title}
            </h3>
            <p className="text-muted text-base leading-relaxed mb-6">
              {activeService.shortDescription}
            </p>

            <div className="space-y-3 mb-8">
              {activeService.details.map((detail) => (
                <div key={detail} className="flex items-start gap-3">
                  <ChevronRight
                    size={16}
                    className="text-primary flex-shrink-0 mt-0.5"
                  />
                  <span className="text-foreground text-sm">{detail}</span>
                </div>
              ))}
            </div>

            <button
              onClick={handleBooking}
              className="inline-flex items-center gap-2 bg-primary text-bg font-bold px-6 py-3 rounded-full text-xs uppercase tracking-wider hover:bg-primaryLight transition-colors duration-200"
            >
              Discuss This Domain →
            </button>
          </motion.div>
        </motion.div>

        {/* Mid-section CTA strip */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 p-8 rounded-2xl border border-primary/20 bg-primary/5 text-center"
        >
          <p className="text-foreground text-lg mb-4">
            Not sure which area to start with? We&apos;ll map it for you in a
            free call.
          </p>
          <button
            onClick={handleBooking}
            className="inline-flex items-center gap-2 bg-primary text-bg font-bold px-8 py-4 rounded-full text-sm uppercase tracking-wider hover:bg-primaryLight transition-colors duration-200"
          >
            Book Your Free Diagnostic Call →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
