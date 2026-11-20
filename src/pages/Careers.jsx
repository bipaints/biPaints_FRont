/**
 * Careers.jsx — /careers
 *
 * 1:1 recreation of https://bipaints.netlify.app/careers
 *
 * Sections (top → bottom):
 *  1. Hero           – career-hero.jpg + left-side gradient + heading + CTA text
 *  2. Life at BI     – 3 icon cards (Grow, Belong, Impact)
 *  3. Open Jobs      – filter dropdown + 3 job listing rows
 *  4. Why BI Group   – 3 icon cards (Diverse roles, Recognition, Culture)
 *
 * Design tokens reused from src/index.css
 * Animation helpers reused from src/lib/motion.js
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUp,
  Users,
  Zap,
  Briefcase,
  Award,
  Heart,
  ArrowRight,
  ChevronDown,
} from 'lucide-react';
import {
  fadeUp,
  cardUp,
  staggerContainer,
  viewportOnce,
  EASE_OUT,
} from '../lib/motion';
import { useLanguage } from '../context/LanguageContext';

// ─────────────────────────────────────────────────────────
// SECTION 1 — HERO
// ─────────────────────────────────────────────────────────
function CareersHero() {
  const { t } = useLanguage();

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ paddingTop: 'var(--header-height)' }}
    >
      <div className="relative w-full" style={{ height: 580 }}>
        {/* Background image */}
        <img
          src="/career-hero.jpg"
          alt={t('careers.heroImageAlt')}
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />

        {/* Left-to-right gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(6,31,64,0.96) 0%, rgba(42,55,70,0.78) 14.4%, rgba(220,223,227,0.34) 100%)',
          }}
        />

        {/* Content — left-aligned, bottom of hero */}
        <div
          className="relative h-full flex flex-col justify-end items-start px-6 sm:px-10 lg:pl-35"
          style={{ gap: 20, paddingTop: 60, paddingBottom: 58 }}
        >
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.1 }}
            className="font-inter uppercase m-0"
            style={{
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: '2px',
              color: '#c8963e',
            }}
          >
            {t('careers.heroEyebrow')}
          </motion.p>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.3 }}
            className="m-0"
            style={{
              fontWeight: 700,
              fontSize: 36,
              lineHeight: 1.08,
              color: '#ffffff',
              maxWidth: 700,
            }}
          >
            {t('careers.heroHeading')}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.6 }}
            className="m-0"
            style={{
              fontSize: 15,
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.85)',
              maxWidth: 590,
            }}
          >
            {t('careers.heroDesc')}
          </motion.p>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────
// SECTION 2 — LIFE AT BI GROUP  (3 icon cards)
// ─────────────────────────────────────────────────────────
function LifeAtBi() {
  const { t } = useLanguage();

  const cards = [
    {
      icon: ArrowUp,
      title: t('careers.lifeCard1Title'),
      desc: t('careers.lifeCard1Desc'),
    },
    {
      icon: Users,
      title: t('careers.lifeCard2Title'),
      desc: t('careers.lifeCard2Desc'),
    },
    {
      icon: Zap,
      title: t('careers.lifeCard3Title'),
      desc: t('careers.lifeCard3Desc'),
    },
  ];

  return (
    <section className="bg-white" style={{ paddingTop: 80, paddingBottom: 80 }}>
      <div
        className="flex flex-col items-center px-6 sm:px-10 lg:px-35"
        style={{ gap: 48 }}
      >
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="flex flex-col items-center text-center"
          style={{ gap: 12, maxWidth: 800 }}
        >
          <p
            className="font-inter uppercase m-0"
            style={{
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: '3px',
              color: '#c8963e',
            }}
          >
            {t('careers.lifeEyebrow')}
          </p>
          <h2
            className="m-0"
            style={{ fontWeight: 700, fontSize: 34, color: '#0f1f3d' }}
          >
            {t('careers.lifeHeading')}
          </h2>
          <p className="m-0" style={{ fontSize: 15, lineHeight: 1.65, color: '#6b7280' }}>
            {t('careers.lifeDesc')}
          </p>
        </motion.div>

        {/* 3-col card grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.12)}
          className="grid grid-cols-1 md:grid-cols-3 w-full"
          style={{ gap: 32 }}
        >
          {cards.map((card) => (
            <motion.div
              key={card.title}
              variants={cardUp}
              className="flex flex-col items-start bg-white"
              style={{
                gap: 20,
                padding: 32,
                borderRadius: 8,
                border: '1px solid #e5e7eb',
              }}
            >
              <span
                className="flex items-center justify-center shrink-0"
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 8,
                  background: '#edf4f7',
                }}
              >
                <card.icon
                  size={23}
                  strokeWidth={1.75}
                  className="text-[#1a5276]"
                />
              </span>
              <h3
                className="m-0"
                style={{ fontWeight: 700, fontSize: 22, color: '#0f1f3d' }}
              >
                {card.title}
              </h3>
              <p
                className="m-0"
                style={{ fontSize: 13, lineHeight: 1.6, color: '#6b7280' }}
              >
                {card.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────
// SECTION 3 — OPEN OPPORTUNITIES  (filter + job cards)
// ─────────────────────────────────────────────────────────
const JOBS = [
  { titleKey: 'job1Title', unitKey: 'job1Unit', locKey: 'job1Location', typeKey: 'job1Type', filterUnit: 'Paints & Coatings' },
  { titleKey: 'job2Title', unitKey: 'job2Unit', locKey: 'job2Location', typeKey: 'job2Type', filterUnit: 'Engineering Services' },
  { titleKey: 'job3Title', unitKey: 'job3Unit', locKey: 'job3Location', typeKey: 'job3Type', filterUnit: 'Group Operations' },
];

function OpenOpportunities() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('All businesses');

  const filterOptions = [
    { value: 'All businesses', label: t('careers.filterAll') },
    { value: 'Paints & Coatings', label: t('careers.filterPaints') },
    { value: 'Engineering Services', label: t('careers.filterEngineering') },
    { value: 'Group Operations', label: t('careers.filterOperations') },
  ];

  const visibleJobs =
    filter === 'All businesses'
      ? JOBS
      : JOBS.filter((j) => j.filterUnit === filter);

  return (
    <section
      style={{ background: '#f6f7f8', paddingTop: 80, paddingBottom: 80 }}
    >
      <div
        className="flex flex-col items-start px-6 sm:px-10 lg:px-35"
        style={{ gap: 32 }}
      >
        {/* Header row */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between w-full"
          style={{ gap: 20 }}
        >
          <div className="flex flex-col items-start" style={{ gap: 12 }}>
            <p
              className="font-inter uppercase m-0"
              style={{
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: '3px',
                color: '#c8963e',
              }}
            >
              {t('careers.jobsEyebrow')}
            </p>
            <h2
              className="m-0"
              style={{ fontWeight: 700, fontSize: 34, color: '#0f1f3d' }}
            >
              {t('careers.jobsHeading')}
            </h2>
          </div>

          {/* Filter dropdown */}
          <div className="relative shrink-0">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              aria-label={t('careers.filterLabel')}
              className="appearance-none bg-white outline-none cursor-pointer"
              style={{
                border: '1px solid #e5e7eb',
                borderRadius: 8,
                padding: '12px 40px 12px 18px',
                fontSize: 13,
                color: '#20252b',
              }}
            >
              {filterOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <ChevronDown
              size={14}
              className="pointer-events-none absolute text-[#6b7280]"
              style={{ right: 16, top: '50%', transform: 'translateY(-50%)' }}
            />
          </div>
        </motion.div>

        {/* Job listing cards */}
        <div className="flex flex-col items-start w-full" style={{ gap: 12 }}>
          {visibleJobs.map((job) => (
            <motion.div
              key={job.titleKey}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full bg-white"
              style={{
                gap: 20,
                padding: '24px 28px',
                borderRadius: 8,
                border: '1px solid #e5e7eb',
              }}
            >
              {/* Left — title + unit */}
              <div
                className="flex flex-col items-start"
                style={{ gap: 8 }}
              >
                <h3
                  className="m-0"
                  style={{ fontWeight: 700, fontSize: 20, color: '#0f1f3d' }}
                >
                  {t(`careers.${job.titleKey}`)}
                </h3>
                <span style={{ fontSize: 13, color: '#c8963e' }}>
                  {t(`careers.${job.unitKey}`)}
                </span>
              </div>

              {/* Right — location, type, CTA */}
              <div
                className="flex flex-wrap items-center"
                style={{ gap: 24 }}
              >
                <span style={{ fontSize: 13, color: '#6b7280' }}>
                  {t(`careers.${job.locKey}`)}
                </span>
                <span style={{ fontSize: 13, color: '#6b7280' }}>
                  {t(`careers.${job.typeKey}`)}
                </span>
                <a
                  href="/contact"
                  className="group inline-flex items-center shrink-0"
                  style={{
                    gap: 6,
                    padding: '10px 20px',
                    borderRadius: 999,
                    border: '1px solid #1a5276',
                  }}
                >
                  <span
                    style={{ fontWeight: 600, fontSize: 13, color: '#1a5276' }}
                  >
                    {t('careers.viewRole')}
                  </span>
                  <ArrowRight
                    size={14}
                    className="text-[#1a5276] transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer line */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="w-full text-center m-0"
          style={{ fontSize: 14, color: '#6b7280' }}
        >
          {t('careers.jobsFooter')}
        </motion.p>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────
// SECTION 4 — WHY BI GROUP  (3 icon cards)
// ─────────────────────────────────────────────────────────
function WhyBiGroup() {
  const { t } = useLanguage();

  const cards = [
    {
      icon: Briefcase,
      title: t('careers.whyCard1Title'),
      desc: t('careers.whyCard1Desc'),
    },
    {
      icon: Award,
      title: t('careers.whyCard2Title'),
      desc: t('careers.whyCard2Desc'),
    },
    {
      icon: Heart,
      title: t('careers.whyCard3Title'),
      desc: t('careers.whyCard3Desc'),
    },
  ];

  return (
    <section className="bg-white" style={{ paddingTop: 80, paddingBottom: 80 }}>
      <div
        className="flex flex-col items-center px-6 sm:px-10 lg:px-35"
        style={{ gap: 48 }}
      >
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="flex flex-col items-center text-center"
          style={{ gap: 12, maxWidth: 800 }}
        >
          <p
            className="font-inter uppercase m-0"
            style={{
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: '3px',
              color: '#c8963e',
            }}
          >
            {t('careers.whyEyebrow')}
          </p>
          <h2
            className="m-0"
            style={{ fontWeight: 700, fontSize: 34, color: '#0f1f3d' }}
          >
            {t('careers.whyHeading')}
          </h2>
          <p className="m-0" style={{ fontSize: 15, lineHeight: 1.65, color: '#6b7280' }}>
            {t('careers.whyDesc')}
          </p>
        </motion.div>

        {/* 3-col card grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.12)}
          className="grid grid-cols-1 md:grid-cols-3 w-full"
          style={{ gap: 32 }}
        >
          {cards.map((card) => (
            <motion.div
              key={card.title}
              variants={cardUp}
              className="flex flex-col items-start bg-white"
              style={{
                gap: 20,
                padding: 32,
                borderRadius: 8,
                border: '1px solid #e5e7eb',
              }}
            >
              <span
                className="flex items-center justify-center shrink-0"
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 8,
                  background: '#edf4f7',
                }}
              >
                <card.icon
                  size={23}
                  strokeWidth={1.75}
                  className="text-[#1a5276]"
                />
              </span>
              <h3
                className="m-0"
                style={{ fontWeight: 700, fontSize: 22, color: '#0f1f3d' }}
              >
                {card.title}
              </h3>
              <p
                className="m-0"
                style={{ fontSize: 13, lineHeight: 1.6, color: '#6b7280' }}
              >
                {card.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────
// PAGE EXPORT — Route: /careers
// ─────────────────────────────────────────────────────────
export default function Careers() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = t('careers.pageTitle');
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [t]);

  return (
    <div className="w-full bg-white text-[#0f1f3d]">
      <CareersHero />
      <LifeAtBi />
      <OpenOpportunities />
      <WhyBiGroup />
    </div>
  );
}
