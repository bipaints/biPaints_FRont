import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ScrollRevealImage from "./ScrollRevealImage";
import { passThroughVariants, TypingReveal } from "./TypingReveal";
import { fadeUp, hoverScaleButton, hoverTransition, staggerContainer, tapScaleButton, viewportOnce } from "../lib/motion";

// Figma: section.personalise-kitchen, node 3900:347
export default function KitchenShowcase() {
  return (
    <section id="kitchens" className="bg-white" style={{ paddingTop: 100, paddingBottom: 100 }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.15)}
        className="flex flex-col items-center px-6 sm:px-10 lg:pl-35"
        style={{ gap: 80 }}
      >
        <motion.div variants={fadeUp} className="flex flex-col items-center text-center w-full" style={{ gap: 12, maxWidth: 900 }}>
          <span className="font-inter uppercase" style={{ fontWeight: 700, fontSize: 13, letterSpacing: "3px", color: "#c8963e" }}>
            Our Kitchens
          </span>
          <motion.h2
            variants={passThroughVariants}
            style={{
              fontSize: 32,
              lineHeight: 1.2,
              letterSpacing: "1px",
              color: "#1b1b2f",
              fontWeight: 700,
              fontFamily: "var(--font-serif)",
            }}
          >
            <TypingReveal text="BI Modular Kitchens for Modern Living" split="word" charDelay={0.05} charDuration={0.4} baseDelay={0} />
          </motion.h2>
          <p style={{ fontSize: 15, lineHeight: 1.7, letterSpacing: "0.2px", color: "#6b7280" }}>
            Premium kitchen solutions designed for real homes - crafted with attention to detail and built to last.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center w-full" style={{ gap: 80 }}>
          <motion.div variants={fadeUp} className="flex flex-col items-start shrink-0 w-full" style={{ gap: 32, maxWidth: 400 }}>
            <div className="flex flex-col items-start" style={{ gap: 16 }}>
              <h3 style={{ fontSize: 36, lineHeight: 1.15, letterSpacing: "-1.5px", color: "#1b1b2f", fontFamily: "var(--font-serif)" }}>
                Personalise your kitchen
              </h3>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: "#6b7280" }}>Choose finishes, colours and details.</p>
            </div>

            <motion.div whileHover={{ ...hoverScaleButton, transition: hoverTransition }} whileTap={{ ...tapScaleButton, transition: hoverTransition }}>
              <a
                href="/products"
                className="group inline-flex items-center rounded-full cursor-pointer"
                style={{ gap: 10, padding: "12px 24px", border: "1.5px solid #1b1b2f" }}
              >
                <span style={{ fontWeight: 600, fontSize: 14, color: "#1b1b2f" }}>Customise now</span>
                <ArrowRight size={16} className="text-[#1b1b2f] transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeUp} className="relative w-full" style={{ maxWidth: 1100 }}>
            <div className="relative w-full overflow-hidden" style={{ aspectRatio: "1100 / 560", borderRadius: 32 }}>
              <ScrollRevealImage>
                <img
                  src="/kitchen-personalise.jpg"
                  alt="Personalise your kitchen"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </ScrollRevealImage>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
