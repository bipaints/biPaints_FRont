import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Building2, PaintBucket, ShieldCheck } from "lucide-react";
import { cardUp, fadeUp, staggerContainer, viewportOnce } from "../lib/motion";
import { useLanguage } from "../context/LanguageContext";

// Card text lives in src/locales (home.features.cards), paired by index
const CARDS = [
  {
    icon: PaintBucket,
    href: "/products/paints",
  },
  {
    icon: ShieldCheck,
    href: "/contact",
  },
  {
    icon: Building2,
    href: "/about",
  },
];

// Figma: feature-cards-section, node 4128:220
export default function FeatureCards() {
  const { t } = useLanguage();
  const cards = CARDS.map((card, i) => ({ ...card, ...t("home.features.cards")[i] }));
  return (
    <section id="solutions" style={{ background: "#f5f5f5", paddingTop: 80, paddingBottom: 96 }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.15)}
        className="flex flex-col items-center px-6 sm:px-10 lg:px-30"
        style={{ gap: 48 }}
      >
        <motion.div variants={fadeUp} className="flex flex-col items-center text-center" style={{ gap: 12, maxWidth: 800 }}>
          <p className="font-inter uppercase" style={{ fontWeight: 700, fontSize: 14, letterSpacing: "1.5px", color: "#c8963e" }}>
            {t("home.features.eyebrow")}
          </p>
          <h2 style={{ fontSize: 32, lineHeight: 1.2, fontWeight: 700, fontFamily: "var(--font-serif)" }}>
            {t("home.features.heading")}
          </h2>
        </motion.div>

        <motion.div variants={staggerContainer(0.1)} className="grid grid-cols-1 md:grid-cols-3 w-full" style={{ gap: 32 }}>
          {cards.map(({ icon: Icon, title, description, linkText, href }) => (
            <motion.div
              key={href}
              variants={cardUp}
              className="flex flex-col justify-between bg-white"
              style={{ padding: 40, borderRadius: 8, boxShadow: "0px 12px 16px rgba(0,0,0,0.04)" }}
            >
              <div className="flex flex-col items-start" style={{ gap: 24 }}>
                <span
                  className="flex items-center justify-center shrink-0"
                  style={{ width: 48, height: 48, borderRadius: 6, background: "rgba(26,82,118,0.07)" }}
                >
                  <Icon size={24} className="text-brand" strokeWidth={1.75} />
                </span>
                <div className="flex flex-col items-start" style={{ gap: 12 }}>
                  <h3 style={{ fontSize: 22, fontWeight: 700, fontFamily: "var(--font-serif)" }}>{title}</h3>
                  <p style={{ fontSize: 13, lineHeight: 1.6, color: "#555" }}>{description}</p>
                </div>
              </div>

              <a href={href} className="group inline-flex items-center cursor-pointer" style={{ gap: 6, paddingTop: 24 }}>
                <span style={{ fontWeight: 600, fontSize: 14, color: "#1a5276" }}>{linkText}</span>
                <ArrowRight size={16} className="text-brand transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
