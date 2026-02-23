"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { CAL_LINK } from "@/lib/cal-config";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Results", href: "#testimonials" },
  { label: "Book a Call", href: "#booking" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-md bg-bg/80 border-b border-border-color"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <span className="font-serif italic text-foreground text-xl leading-none">
              Wild Thoughts
            </span>
            <span className="hidden sm:inline-flex items-center px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium tracking-wide">
              360° Consulting
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.slice(0, 3).map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-muted hover:text-foreground text-sm transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              data-cal-namespace="30min"
              data-cal-link={CAL_LINK}
              data-cal-config='{"layout":"month_view"}'
              className="bg-primary text-bg font-bold px-5 py-2.5 rounded-full text-sm uppercase tracking-wider hover:bg-primaryLight transition-colors duration-200 cursor-pointer"
            >
              Book Free Call
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden bg-surface border-b border-border-color"
            >
              <nav className="flex flex-col p-6 gap-5">
                {navLinks.map((link) =>
                  link.href === "#booking" ? (
                    <button
                      key={link.href}
                      data-cal-namespace="30min"
                      data-cal-link={CAL_LINK}
                      data-cal-config='{"layout":"month_view"}'
                      onClick={() => setMobileOpen(false)}
                      className="text-foreground hover:text-primary text-base transition-colors text-left cursor-pointer"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                      className="text-foreground hover:text-primary text-base transition-colors"
                    >
                      {link.label}
                    </a>
                  )
                )}
                <button
                  data-cal-namespace="30min"
                  data-cal-link={CAL_LINK}
                  data-cal-config='{"layout":"month_view"}'
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 inline-flex justify-center bg-primary text-bg font-bold px-6 py-3 rounded-full text-sm uppercase tracking-wider hover:bg-primaryLight transition-colors cursor-pointer"
                >
                  Book Free Call
                </button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
