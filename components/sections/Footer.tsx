"use client";

import { MapPin, Mail, Phone } from "lucide-react";
import { CAL_LINK } from "@/lib/cal-config";

const serviceLinks = [
  { label: "Strategy & Business Architecture", href: "#services" },
  { label: "Human Resources & OD", href: "#services" },
  { label: "Sales, Marketing & Brand", href: "#services" },
  { label: "Finance & Business Control", href: "#services" },
  { label: "Operations & Administration", href: "#services" },
  { label: "Entrepreneurship & Ventures", href: "#services" },
];

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Results", href: "#testimonials" },
  { label: "Book a Call", href: "#booking" },
];

export default function Footer() {
  const handleNav = (href: string) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-surface border-t border-border-color">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16">
        {/* Top: logo + tagline */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-serif italic text-foreground text-2xl">
              Wild Thoughts
            </span>
            <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium">
              360° Consulting
            </span>
          </div>
          <p className="text-muted text-sm max-w-md leading-relaxed">
            Transforming ideas into structured, scalable, and successful
            enterprises — through strategy, systems, people, and performance.
          </p>
        </div>

        {/* Grid: Services | Quick Links | Contact */}
        <div className="grid md:grid-cols-3 gap-10 mb-14">
          {/* Services */}
          <div>
            <h4 className="text-foreground font-semibold text-sm uppercase tracking-widest mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(link.href);
                    }}
                    className="text-muted hover:text-primary text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold text-sm uppercase tracking-widest mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) =>
                link.href === "#booking" ? (
                  <li key={link.label}>
                    <button
                      data-cal-namespace="30min"
                      data-cal-link={CAL_LINK}
                      data-cal-config='{"layout":"month_view"}'
                      className="text-muted hover:text-primary text-sm transition-colors duration-200 cursor-pointer"
                    >
                      {link.label}
                    </button>
                  </li>
                ) : (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNav(link.href);
                      }}
                      className="text-muted hover:text-primary text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-semibold text-sm uppercase tracking-widest mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted text-sm leading-relaxed">
                  Perinthalmanna, Kerala, India
                  {/* TODO: Add full address */}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-primary flex-shrink-0" />
                <a
                  href="mailto:hello@wildthoughts.in"
                  className="text-muted hover:text-primary text-sm transition-colors duration-200"
                >
                  {/* TODO: Replace with real email */}
                  hello@wildthoughts.in
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-primary flex-shrink-0" />
                <a
                  href="tel:+910000000000"
                  className="text-muted hover:text-primary text-sm transition-colors duration-200"
                >
                  {/* TODO: Replace with real phone */}
                  +91 00000 00000
                </a>
              </li>
            </ul>

            {/* CTA in footer */}
            <div className="mt-8">
              <button
                data-cal-namespace="30min"
                data-cal-link={CAL_LINK}
                data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
                className="inline-flex items-center bg-primary text-bg font-bold px-6 py-3 rounded-full text-xs uppercase tracking-wider hover:bg-primaryLight transition-colors duration-200 cursor-pointer"
              >
                Book Free Strategy Call
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border-color flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted text-xs">
            © {new Date().getFullYear()} Wild Thoughts Consultancy Services.
            All rights reserved.
          </p>
          <p className="text-muted text-xs">
            Perinthalmanna, Kerala, India
          </p>
        </div>
      </div>
    </footer>
  );
}
