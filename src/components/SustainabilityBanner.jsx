import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  fadeUp,
  fadeUpSmall,
  hoverScaleButton,
  hoverTransition,
  staggerContainer,
  tapScaleButton,
  viewportOnce,
} from "../lib/motion";

export default function SustainabilityBanner() {
  return (
    // Figma: bi-sustainability-banner, node 3900:462, px-140 py-64
    <section id="sustainability" className="relative overflow-hidden w-full flex flex-col justify-center px-6 sm:px-10 lg:px-35 py-16" style={{ minHeight: 560 }}>
      <img
        src="/sustainability-banner-2.jpg"
        alt="BI Group sustainability"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(90deg, rgba(11,45,91,0.8) 0%, rgba(11,45,91,0.7) 40%, rgba(11,45,91,0) 75%)",
        }}
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.12)}
        className="relative flex flex-col items-start"
        style={{ gap: 24, width: 640, maxWidth: "100%" }}
      >
        <div className="flex flex-col items-start w-full" style={{ gap: 20 }}>
          <motion.span
            variants={fadeUpSmall}
            className="font-inter uppercase w-full"
            style={{ fontWeight: 700, fontSize: 11, letterSpacing: "2px", color: "rgba(255,255,255,0.8)" }}
          >
            At BI Group, we are driven by a purpose to build and protect India&apos;s future
          </motion.span>

          <motion.div
            variants={fadeUp}
            className="w-full"
            style={{ fontFamily: "var(--font-pt-serif)", fontWeight: 700, fontSize: 28, letterSpacing: "-1.5px", color: "#ffffff" }}
          >
            <p style={{ lineHeight: 1.2, margin: 0 }}>Protecting Surfaces,</p>
            <p style={{ lineHeight: 1.2, margin: 0 }}>Preserving the Future</p>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="w-full"
            style={{ fontWeight: 400, fontSize: 13, lineHeight: 1.6, color: "rgba(255,255,255,0.85)" }}
          >
            Together with our partners and customers, we are committed to delivering
            world-class coatings and solutions that protect infrastructure, empower
            industries, and contribute to a sustainable tomorrow.
          </motion.p>
        </div>

        <motion.div
          variants={fadeUpSmall}
          whileHover={{ ...hoverScaleButton, transition: hoverTransition }}
          whileTap={{ ...tapScaleButton, transition: hoverTransition }}
        >
          <a
            href="/sustainability"
            className="group inline-flex items-center justify-center text-white hover:bg-white hover:text-ink-dark cursor-pointer"
            style={{
              gap: 10,
              border: "1px solid #ffffff",
              padding: "14px 28px",
              borderRadius: 999,
              transition: "all 0.25s ease-in-out",
            }}
          >
            <span style={{ fontWeight: 600, fontSize: 13 }}>Read more about Sustainability</span>
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
