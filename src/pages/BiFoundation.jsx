/**
 * BiFoundation.jsx — /bi-foundation
 *
 * 1:1 recreation of https://bipaints.netlify.app/bi-foundation
 *
 * Sections (top → bottom):
 *  1. Hero               – classroom image + navy gradient + heading + CTA
 *  2. Our Purpose        – text + image, two columns
 *  3. Where We Focus     – 4 numbered focus cards (#focus)
 *  4. Featured Initiative – image + text, two columns
 *  5. Closing CTA        – full-bleed image + navy gradient + centered text
 *
 * The global <Footer /> (rendered by App.jsx) follows this page.
 *
 * Images (all pre-existing in /public, identical to the reference):
 *  /bi-foundation-hero.jpg, /bi-foundation-purpose.jpg,
 *  /bi-foundation-featured.jpg, /bi-foundation-closing-cta.jpg
 */

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ChevronDown, Globe, Heart, Users } from 'lucide-react';
import { TypingReveal, passThroughVariants } from '../components/TypingReveal';
import {
  EASE_OUT,
  cardUp,
  fadeUp,
  fadeUpSmall,
  hoverScaleButton,
  hoverTransition,
  staggerContainer,
  tapScaleButton,
  viewportOnce,
} from '../lib/motion';
import { useLanguage } from '../context/LanguageContext';

const GOLD = '#c8963e';
const INK = '#0f1f3d';
const BODY = '#20252b';
const BORDER = '1px solid rgba(13,25,48,0.1)';

// Shared heading reveal used by every section heading
function RevealHeading({ as = 'h2', text, style }) {
  const Tag = motion[as];
  return (
    <Tag variants={passThroughVariants} style={style}>
      <TypingReveal text={text} split="word" charDelay={0.04} charDuration={0.4} baseDelay={0} />
    </Tag>
  );
}

// ─────────────────────────────────────────────────────────
// SECTION 1 — HERO
// ─────────────────────────────────────────────────────────
function FoundationHero() {
  const { t } = useLanguage();
  return (
    <section
      className="relative w-full overflow-hidden flex flex-col justify-center"
      style={{ paddingTop: 'var(--header-height)', height: 640 }}
    >
      <img
        src="/bi-foundation-hero.jpg"
        alt={t('foundation.hero.imageAlt')}
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(10,10,26,0.65) 0%, rgba(10,10,26,0.35) 55%, #0f1f3d 100%)',
        }}
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer(0.15)}
        className="relative flex flex-col items-start px-6 sm:px-10 lg:px-35"
        style={{ gap: 24 }}
      >
        <motion.p
          variants={fadeUpSmall}
          className="font-inter uppercase"
          style={{ fontWeight: 700, fontSize: 14, letterSpacing: '3px', color: GOLD }}
        >
          {t('foundation.hero.eyebrow')}
        </motion.p>

        <motion.h1
          variants={passThroughVariants}
          className="text-[34px] sm:text-[48px]"
          style={{ fontWeight: 700, lineHeight: 1.2, color: '#ffffff', maxWidth: 800 }}
        >
          <TypingReveal
            text={t('foundation.hero.title')}
            split="word"
            charDelay={0.05}
            charDuration={0.5}
            baseDelay={0.15}
          />
        </motion.h1>

        <motion.p
          variants={fadeUp}
          style={{ fontSize: 16, lineHeight: 1.6, color: 'rgba(255,255,255,0.8)', maxWidth: 620 }}
        >
          {t('foundation.hero.description')}
        </motion.p>

        <motion.div
          variants={fadeUpSmall}
          whileHover={{ ...hoverScaleButton, transition: hoverTransition }}
          whileTap={{ ...tapScaleButton, transition: hoverTransition }}
        >
          <a
            href="#focus"
            className="inline-flex items-center"
            style={{ background: GOLD, padding: '14px 32px', borderRadius: 24 }}
          >
            <span
              className="font-inter"
              style={{ fontWeight: 700, fontSize: 14, letterSpacing: '1px', color: '#ffffff' }}
            >
              {t('foundation.hero.cta')}
            </span>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{
          opacity: { duration: 0.6, delay: 0.8 },
          y: { duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: 0.8 },
        }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <ChevronDown size={20} color="#ffffff" />
      </motion.div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────
// SECTION 2 — OUR PURPOSE
// ─────────────────────────────────────────────────────────
function FoundationPurpose() {
  const { t } = useLanguage();
  return (
    <section className="bg-white" style={{ paddingTop: 80, paddingBottom: 80 }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.15)}
        className="flex flex-col lg:flex-row items-center px-6 sm:px-10 lg:px-35"
        style={{ gap: 64 }}
      >
        <motion.div variants={fadeUp} className="flex flex-1 flex-col items-start" style={{ gap: 24 }}>
          <div className="flex items-center" style={{ gap: 16 }}>
            <span style={{ width: 4, height: 40, borderRadius: 2, background: GOLD }} />
            <RevealHeading text={t('foundation.purpose.heading')} style={{ fontWeight: 700, fontSize: 34, color: INK }} />
          </div>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: BODY }}>
            {t('foundation.purpose.description')}
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="relative w-full lg:flex-1 overflow-hidden"
          style={{ height: 380, borderRadius: 16 }}
        >
          <img
            src="/bi-foundation-purpose.jpg"
            alt={t('foundation.purpose.imageAlt')}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────
// SECTION 3 — WHERE WE FOCUS
// ─────────────────────────────────────────────────────────
// Card text lives in src/locales (foundation.focus.items), paired by index
const FOCUS_AREAS = [
  { number: '01', icon: BookOpen },
  { number: '02', icon: Globe },
  { number: '03', icon: Users },
  { number: '04', icon: Heart },
];

function FoundationFocus() {
  const { t } = useLanguage();
  const focusAreas = FOCUS_AREAS.map((area, i) => ({ ...area, ...t('foundation.focus.items')[i] }));
  return (
    <section
      id="focus"
      style={{
        background: '#f9fafb',
        borderTop: BORDER,
        borderBottom: BORDER,
        paddingTop: 80,
        paddingBottom: 80,
      }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.15)}
        className="flex flex-col items-center px-6 sm:px-10 lg:px-35"
        style={{ gap: 48 }}
      >
        <motion.div
          variants={fadeUp}
          className="flex flex-col items-center text-center"
          style={{ gap: 12, maxWidth: 700 }}
        >
          <RevealHeading text={t('foundation.focus.heading')} style={{ fontWeight: 700, fontSize: 34, color: INK }} />
          <p style={{ fontSize: 16, color: '#6b7280' }}>
            {t('foundation.focus.description')}
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.1)}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full"
          style={{ gap: 32 }}
        >
          {focusAreas.map(({ number, icon: Icon, title, description }) => (
            <motion.div
              key={number}
              variants={cardUp}
              className="flex flex-col items-start bg-white"
              style={{
                gap: 24,
                padding: 32,
                borderRadius: 12,
                border: BORDER,
                boxShadow: '0px 8px 8px rgba(0,0,0,0.02)',
              }}
            >
              <div className="flex items-center justify-between w-full">
                <span style={{ fontWeight: 800, fontSize: 32, color: 'rgba(200,150,62,0.3)' }}>
                  {number}
                </span>
                <Icon size={24} className="text-[#c8963e]" strokeWidth={1.75} />
              </div>
              <div className="flex flex-col items-start" style={{ gap: 8 }}>
                <h3 style={{ fontWeight: 700, fontSize: 20, color: INK }}>{title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.5, color: BODY }}>{description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────
// SECTION 4 — FEATURED INITIATIVE
// ─────────────────────────────────────────────────────────
function FoundationFeatured() {
  const { t } = useLanguage();
  return (
    <section style={{ background: '#f9fafb', paddingTop: 80, paddingBottom: 80 }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.15)}
        className="flex flex-col-reverse lg:flex-row items-center px-6 sm:px-10 lg:px-35"
        style={{ gap: 64 }}
      >
        <motion.div
          variants={fadeUp}
          className="relative w-full lg:flex-1 overflow-hidden"
          style={{ height: 420, borderRadius: 16 }}
        >
          <img
            src="/bi-foundation-featured.jpg"
            alt={t('foundation.featured.imageAlt')}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>

        <motion.div variants={fadeUp} className="flex flex-1 flex-col items-start" style={{ gap: 24 }}>
          <p
            className="font-inter uppercase"
            style={{ fontWeight: 700, fontSize: 13, letterSpacing: '2px', color: GOLD }}
          >
            {t('foundation.featured.eyebrow')}
          </p>
          <RevealHeading
            text={t('foundation.featured.heading')}
            style={{ fontWeight: 700, fontSize: 32, color: INK }}
          />
          <p style={{ fontSize: 16, lineHeight: 1.8, color: BODY }}>
            {t('foundation.featured.description')}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────
// SECTION 5 — CLOSING CTA
// ─────────────────────────────────────────────────────────
function FoundationClosingCta() {
  const { t } = useLanguage();
  return (
    <section className="relative overflow-hidden" style={{ paddingTop: 100, paddingBottom: 100 }}>
      <motion.div
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 1.4, ease: EASE_OUT }}
        className="absolute inset-0"
      >
        <img
          src="/bi-foundation-closing-cta.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      </motion.div>
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, rgba(10,10,26,0.65) 0%, #0f1f3d 100%)' }}
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.15)}
        className="relative flex flex-col items-center text-center px-6 sm:px-10 lg:px-35"
        style={{ gap: 32 }}
      >
        <RevealHeading
          text={t('foundation.closing.heading')}
          style={{ fontWeight: 700, fontSize: 34, color: '#ffffff' }}
        />
        <motion.p
          variants={fadeUp}
          style={{ fontSize: 16, lineHeight: 1.6, color: 'rgba(255,255,255,0.8)', maxWidth: 640 }}
        >
          {t('foundation.closing.description')}
        </motion.p>
      </motion.div>
    </section>
  );
}

export default function BiFoundation() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = t('foundation.pageTitle');
  }, [t]);

  return (
    <>
      <FoundationHero />
      <FoundationPurpose />
      <FoundationFocus />
      <FoundationFeatured />
      <FoundationClosingCta />
    </>
  );
}
