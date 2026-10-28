import React, { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { passThroughVariants, TypingReveal } from "./TypingReveal";
import { EASE_OUT, hoverScaleButton, hoverTransition, tapScaleButton } from "../lib/motion";

const AUTOPLAY_MS = 6000;

const textGroupVariants = {
  hidden: {},
  visible: {},
  exit: { opacity: 0, transition: { duration: 0.5, ease: EASE_OUT } },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE_OUT, delay: 2.5 } },
};

const SLIDES = [
  {
    // Figma: hero-carousel-banner, node 3900:222 — slide-paints (default slide)
    title: "Transforming Spaces with Color",
    description:
      "A modern palette for architects, builders, and homeowners-crafted for performance, sustainability, and timeless beauty.",
    image: "/hero-slide-paints.jpg",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef(null);

  const next = useCallback(() => setIndex((i) => (i + 1) % SLIDES.length), []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length), []);

  useEffect(() => {
    if (paused || SLIDES.length < 2) return;
    timer.current = setInterval(next, AUTOPLAY_MS);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused, next]);

  const slide = SLIDES[index];

  return (
    <section
      id="home"
      className="font-inter select-none"
      style={{ paddingTop: "var(--header-height)" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Figma: hero-carousel-banner, node 2276:237 — height 578px */}
      <div className="relative w-full overflow-hidden" style={{ height: 578 }}>
        <AnimatePresence mode="sync">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: EASE_OUT }}
            className="absolute inset-0"
          >
            {slide.fit === "contain" && (
              <img
                src={slide.image}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl"
                style={{ opacity: 0.7 }}
              />
            )}
            <img
              src={slide.image}
              alt={slide.title}
              className={`absolute inset-0 w-full h-full ${slide.fit === "contain" ? "object-contain" : "object-cover"}`}
              style={slide.fit === "contain" ? { objectPosition: "right center" } : undefined}
            />
            {/* Figma gradient: linear-gradient(90deg, rgba(10,10,26,.32) 0%, rgba(10,10,26,.15) 50%, rgba(10,10,26,.28) 100%) */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, rgba(10,10,26,0.32) 0%, rgba(10,10,26,0.15) 50%, rgba(10,10,26,0.28) 100%)",
              }}
            />
          </motion.div>
        </AnimatePresence>

        {/* hero-text, node 4011:196: left-136, top calc(50% + 135px), width 760 */}
        <div
          className="absolute left-6 right-6 sm:left-10 sm:right-10 lg:right-auto lg:left-35 z-20"
          style={{ top: "calc(50% + 135px)", transform: "translateY(-50%)", width: 760, maxWidth: "100%" }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              variants={textGroupVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-col"
              style={{ gap: 20 }}
            >
              {/* hero-text: gap-16 */}
              <div className="flex flex-col" style={{ gap: 16 }}>
                {slide.eyebrow && (
                  <motion.p
                    variants={passThroughVariants}
                    className="uppercase"
                    style={{
                      fontWeight: 700,
                      fontSize: 14,
                      letterSpacing: "1.12px",
                      color: "rgba(255,255,255,0.8)",
                      lineHeight: "normal",
                    }}
                  >
                    <TypingReveal text={slide.eyebrow} split="letter" charDelay={0.03} charDuration={0.35} baseDelay={0} />
                  </motion.p>
                )}
                <motion.h1
                  variants={passThroughVariants}
                  style={{
                    fontSize: 32,
                    lineHeight: 1.3,
                    letterSpacing: "1px",
                    color: "#ffffff",
                    fontFamily: "var(--font-serif)",
                    fontWeight: 700,
                  }}
                >
                  <TypingReveal text={slide.title} split="letter" charDelay={0.018} charDuration={0.4} baseDelay={0.35} />
                </motion.h1>
                <motion.p
                  variants={passThroughVariants}
                  style={{
                    fontWeight: 400,
                    fontSize: 15,
                    lineHeight: 1.5,
                    color: "rgba(255,255,255,0.8)",
                  }}
                >
                  <TypingReveal text={slide.description} split="word" charDelay={0.06} charDuration={0.45} baseDelay={1.1} />
                </motion.p>
              </div>

              {slide.cta && slide.href && (
                <motion.div
                  variants={buttonVariants}
                  whileHover={{ ...hoverScaleButton, transition: hoverTransition }}
                  whileTap={{ ...tapScaleButton, transition: hoverTransition }}
                  className="w-fit"
                >
                  <a
                    href={slide.href}
                    className="group inline-flex items-center w-fit rounded-full bg-white"
                    style={{
                      gap: 12,
                      padding: "14px 18px",
                      boxShadow: "0px 10px 12px rgba(0,0,0,0.15)",
                    }}
                  >
                    <span style={{ fontWeight: 800, fontSize: 15, color: "#0a1628" }}>{slide.cta}</span>
                    <ArrowRight size={18} className="text-[#0a1628] transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Arrows */}
        {SLIDES.length >= 1 && (
          <>
            <button
              aria-label="Previous slide"
              onClick={prev}
              className="hidden sm:flex absolute left-5 top-1/2 -translate-y-1/2 items-center justify-center w-10 h-10 rounded-full bg-white/15 text-white hover:bg-white/30 backdrop-blur-sm z-30 cursor-pointer"
              style={{ transition: "background-color 0.2s ease-in-out" }}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              aria-label="Next slide"
              onClick={next}
              className="hidden sm:flex absolute right-5 top-1/2 -translate-y-1/2 items-center justify-center w-10 h-10 rounded-full bg-white/15 text-white hover:bg-white/30 backdrop-blur-sm z-30 cursor-pointer"
              style={{ transition: "background-color 0.2s ease-in-out" }}
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        {/* hero-dots, node 2276:247 — bottom-48, gap-8, active 24x8, inactive 8x8, rounded-4 */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center z-30" style={{ bottom: 48, gap: 8 }}>
          {SLIDES.map((s, i) => (
            <button
              key={s.title}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className="cursor-pointer"
              style={{
                height: 8,
                width: i === index ? 24 : 8,
                borderRadius: 4,
                background: i === index ? "#ffffff" : "rgba(255,255,255,0.4)",
                transition: "all 0.3s ease-in-out",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
