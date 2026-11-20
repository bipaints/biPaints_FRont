import React from "react";
import { motion } from "framer-motion";
import ScrollRevealImage from "./ScrollRevealImage";
import { fadeUp, fadeUpSmall, staggerContainer, viewportOnce } from "../lib/motion";
import { useLanguage } from "../context/LanguageContext";

const PARTNERS = [
  { name: "Ministry of Defence", logo: "/client-ministry-of-defence.png" },
  { name: "AM/NS India", logo: "/client-amns-india.png" },
  { name: "ElectroMech", logo: "/client-electromech.png" },
  { name: "Lohr", logo: "/client-lohr.png" },
  { name: "Godrej", logo: "/client-godrej.png" },
  { name: "Marini", logo: "/client-marini.png" },
  { name: "Larsen & Toubro", logo: "/client-lt.png" },
];

export default function Partners() {
  const { t } = useLanguage();
  const partnerNames = t("home.partners.names");
  return (
    <section id="partners" className="font-inter bg-white" style={{ paddingTop: 120, paddingBottom: 80 }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.15)}
        className="flex flex-col items-center px-6 sm:px-10 lg:px-15"
      >
        {/* trusted-partners-heading (3028:225) */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col items-center text-center"
          style={{ gap: 12, paddingBottom: 20 }}
        >
          <p className="uppercase" style={{ fontWeight: 700, fontSize: 13, letterSpacing: "3px", color: "#c8963e", margin: 0 }}>
            {t("home.partners.eyebrow")}
          </p>
          <p style={{ fontFamily: "var(--font-pt-serif)", fontWeight: 700, fontSize: 32, color: "#0f1f3d", margin: 0 }}>
            {t("home.partners.heading")}
          </p>
          <p style={{ fontWeight: 400, fontSize: 14, color: "#20252b", margin: 0 }}>
            {t("home.partners.description")}
          </p>
        </motion.div>

        {/* logo-row (2958:230): gap-48, each 160x64 */}
        <motion.div variants={staggerContainer(0.08)} className="flex flex-wrap items-center justify-center pt-20" style={{ gap: 48 }}>
          {PARTNERS.map((p, i) => (
            <motion.div
              key={p.name}
              variants={fadeUpSmall}
              className="relative shrink-0 overflow-hidden"
              style={{ width: 160, height: 64 }}
            >
              <ScrollRevealImage>
                <img src={p.logo} alt={partnerNames[i]} className="absolute inset-0 w-full h-full object-contain" />
              </ScrollRevealImage>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
