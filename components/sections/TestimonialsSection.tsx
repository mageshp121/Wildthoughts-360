"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PlayCircle, Star } from "lucide-react";
import VideoModal from "@/components/ui/VideoModal";
import {
  videoTestimonials,
  textTestimonials,
  type VideoTestimonial,
  type TextTestimonial,
} from "@/lib/testimonials";
import { CAL_LINK } from "@/lib/cal-config";

// ─── Video card ───────────────────────────────────────────────────────────────
function VideoCard({
  vt,
  onClick,
}: {
  vt: VideoTestimonial;
  onClick: () => void;
}) {
  return (
    <div
      className="flex-none w-[360px] cursor-pointer group/card rounded-2xl overflow-hidden border border-border-color bg-surface hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1 hover:border-primary/20 transition-all duration-300"
      onClick={onClick}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={vt.thumbnailUrl}
          alt={`${vt.clientName} testimonial`}
          className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center group-hover/card:bg-primary group-hover/card:border-primary transition-all duration-300">
            <PlayCircle size={26} className="text-white ml-0.5" />
          </div>
        </div>
        {/* Industry tag */}
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white text-xs font-medium">
            {vt.industry}
          </span>
        </div>
      </div>
      {/* Info */}
      <div className="p-5">
        <p className="text-foreground font-semibold text-sm">{vt.clientName}</p>
        <p className="text-muted text-xs mb-2.5">
          {vt.role}, {vt.company}
        </p>
        <p className="text-primary text-sm italic leading-relaxed line-clamp-2">
          &ldquo;{vt.shortQuote}&rdquo;
        </p>
      </div>
    </div>
  );
}

// ─── Text card ────────────────────────────────────────────────────────────────
function TextCard({ tt }: { tt: TextTestimonial }) {
  return (
    <div className="flex-none w-[320px] p-6 rounded-2xl border border-border-color bg-surface flex flex-col gap-3 hover:shadow-xl hover:shadow-primary/8 hover:-translate-y-0.5 hover:border-primary/15 transition-all duration-300">
      {/* Stars */}
      <div className="flex gap-0.5">
        {Array.from({ length: tt.rating }).map((_, i) => (
          <Star key={i} size={13} className="text-gold fill-gold" />
        ))}
      </div>
      {/* Quote */}
      <p className="text-foreground text-sm leading-relaxed flex-1 line-clamp-5">
        &ldquo;{tt.quote}&rdquo;
      </p>
      {/* Attribution */}
      <div className="pt-3 border-t border-border-color">
        <p className="text-foreground font-semibold text-sm">{tt.clientName}</p>
        <p className="text-muted text-xs mt-0.5">
          {tt.role}, {tt.company}
        </p>
        <p className="text-muted text-xs">{tt.industry}</p>
      </div>
    </div>
  );
}

// ─── Main section ─────────────────────────────────────────────────────────────
export default function TestimonialsSection() {
  const [modalVideo, setModalVideo] = useState<{
    url: string;
    title: string;
  } | null>(null);

  // 4 copies guarantees seamless loop on any screen width;
  // the -50% animation translates exactly 2 copies' worth
  const videoLoop = [
    ...videoTestimonials,
    ...videoTestimonials,
    ...videoTestimonials,
    ...videoTestimonials,
  ];

  const half = Math.ceil(textTestimonials.length / 2);
  const row1 = textTestimonials.slice(0, half);
  const row2 = textTestimonials.slice(half);
  const row1Loop = [...row1, ...row1, ...row1, ...row1];
  const row2Loop = [...row2, ...row2, ...row2, ...row2];

  return (
    <section id="testimonials" className="py-24 overflow-hidden bg-surface">
      {/* ── Heading ── */}
      <div className="px-6 md:px-12 max-w-6xl mx-auto text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium tracking-widest uppercase mb-5">
            Client Results
          </span>
          <h2
            className="font-serif italic text-foreground leading-tight mb-4"
            style={{ fontSize: "clamp(32px, 5vw, 60px)" }}
          >
            Businesses that chose to
            <br />
            <span className="text-gold-gradient">think differently.</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Real results. Real businesses. Real transformation.
          </p>
        </motion.div>
      </div>

      {/* ── Video testimonials — infinite horizontal scroll ── */}
      <div className="mb-20">
        <div className="relative">
          {/* Fade edges for polished "infinite" feel */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />
          {/* Hover to pause */}
          <div className="overflow-hidden group/videos">
            <div className="flex gap-5 w-max animate-marquee-slow group-hover/videos:[animation-play-state:paused] py-3 px-4">
              {videoLoop.map((vt, i) => (
                <VideoCard
                  key={i}
                  vt={vt}
                  onClick={() =>
                    setModalVideo({ url: vt.videoUrl, title: vt.clientName })
                  }
                />
              ))}
            </div>
          </div>
        </div>
        <p className="text-center text-muted text-xs mt-4 tracking-wide">
          Hover to pause · Click any card to watch
        </p>
      </div>

      {/* ── Divider ── */}
      <div className="flex items-center gap-4 mb-12 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="flex-1 h-px bg-border-color" />
        <span className="text-muted text-xs uppercase tracking-widest whitespace-nowrap">
          Written Reviews
        </span>
        <div className="flex-1 h-px bg-border-color" />
      </div>

      {/* ── Text testimonials — two rows scrolling in opposite directions ── */}
      <div className="space-y-5 mb-16">
        {/* Row 1 → scrolls left */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />
          <div className="overflow-hidden group/row1">
            <div className="flex gap-4 w-max animate-marquee group-hover/row1:[animation-play-state:paused] py-2 px-4">
              {row1Loop.map((tt, i) => (
                <TextCard key={i} tt={tt} />
              ))}
            </div>
          </div>
        </div>

        {/* Row 2 → scrolls right */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />
          <div className="overflow-hidden group/row2">
            <div className="flex gap-4 w-max animate-marquee-reverse group-hover/row2:[animation-play-state:paused] py-2 px-4">
              {row2Loop.map((tt, i) => (
                <TextCard key={i} tt={tt} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom CTA ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="text-center px-6 md:px-12"
      >
        <p className="text-foreground text-xl mb-6 font-serif italic">
          Ready to write your own success story?
        </p>
        <button
          data-cal-namespace="30min"
          data-cal-link={CAL_LINK}
          data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
          className="inline-flex items-center gap-2 bg-primary text-bg font-bold px-9 py-4 rounded-full text-sm uppercase tracking-wider hover:bg-primaryLight transition-colors duration-200 shadow-lg shadow-primary/20 cursor-pointer"
        >
          Book a Free Strategy Call →
        </button>
      </motion.div>

      {/* ── Modal ── */}
      <VideoModal
        isOpen={!!modalVideo}
        onClose={() => setModalVideo(null)}
        videoUrl={modalVideo?.url || ""}
        title={modalVideo?.title}
      />
    </section>
  );
}
