import React from "react";
import { motion } from "framer-motion";
import ScrollRevealImage from "./ScrollRevealImage";
import { cardUp, fadeUp, staggerContainer, viewportOnce } from "../lib/motion";
import { useLanguage } from "../context/LanguageContext";

// News text lives in src/locales (home.news.items), paired by index
const NEWS = [
  {
    image: "/news-electromech.jpg",
  },
  {
    image: "/news-amns.jpg",
  },
  {
    image: "/news-adani.jpg",
  },
];

// Figma: section-news-insights, node 4101:196
export default function NewsInsights() {
  const { t } = useLanguage();
  const news = NEWS.map((item, i) => ({ ...item, ...t("home.news.items")[i] }));
  return (
    <section id="news" className="bg-white" style={{ paddingTop: 80, paddingBottom: 80 }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.15)}
        className="flex flex-col items-center px-6 sm:px-10 lg:px-35"
        style={{ gap: 40 }}
      >
        <motion.div variants={fadeUp} className="flex flex-col items-center text-center" style={{ gap: 8 }}>
          <p className="font-inter uppercase" style={{ fontWeight: 700, fontSize: 13, letterSpacing: "3px", color: "#c8963e" }}>
            {t("home.news.eyebrow")}
          </p>
          <h2 style={{ fontSize: 32, fontWeight: 700, fontFamily: "var(--font-serif)" }}>{t("home.news.heading")}</h2>
        </motion.div>

        <motion.div variants={staggerContainer(0.1)} className="grid grid-cols-1 md:grid-cols-3 w-full" style={{ gap: 32 }}>
          {news.map((item) => (
            <motion.div key={item.image} variants={cardUp} className="flex flex-col items-start" style={{ gap: 12 }}>
              <div className="relative w-full overflow-hidden" style={{ height: 300, borderRadius: 8 }}>
                <ScrollRevealImage>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </ScrollRevealImage>
              </div>
              <p style={{ fontSize: 12, color: "#c8963e" }}>{item.date}</p>
              <h3 style={{ fontSize: 18, fontWeight: 700, fontFamily: "var(--font-serif)" }}>{item.title}</h3>
              <p style={{ fontSize: 13, lineHeight: "20px", color: "#787878" }}>{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
