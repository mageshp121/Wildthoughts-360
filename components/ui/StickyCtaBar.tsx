"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CAL_LINK } from "@/lib/cal-config";

export default function StickyCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
        >
          <button
            data-cal-namespace="30min"
            data-cal-link={CAL_LINK}
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            className="bg-primary text-bg font-bold px-8 py-4 rounded-full text-sm uppercase tracking-wider hover:bg-primaryLight transition-all duration-200 shadow-2xl shadow-primary/30 whitespace-nowrap cursor-pointer"
          >
            Book Free Strategy Call →
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
