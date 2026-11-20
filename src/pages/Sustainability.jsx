/**
 * Sustainability.jsx — /sustainability
 *
 * 1:1 recreation of https://bipaints.netlify.app/sustainability
 *
 * Sections (top → bottom):
 *  1. Hero         – Full-screen wind turbines image + dark overlay + heading + CTA
 *  2. Core Pillars – 3 cards (People First, Planet Preservation, Product Responsibility)
 *  3. Long-Term Vision – Image + 2-paragraph text side by side
 *  4. ZED Certification – Badge image + text block
 *  5. Newsletter   – BI Insider subscribe form (matches Footer newsletter pattern)
 *
 * Design tokens (from src/index.css):
 *  Gold:         #c8963e    (--color-gold)
 *  Brand blue:   #1a5276    (--color-brand)
 *  Brand dark:   #124059    (--color-brand-dark)
 *  Ink dark:     #0f1f3d    (--color-ink-dark)
 *  Slate cool:   #6b7280    (--color-slate-cool)
 *  Section bg:   #f4f7fb
 *  Font serif:   PT Serif   (var(--font-serif) / font-serif)
 *  Font sans:    Public Sans (body default)
 *
 * Images (all pre-existing in /public):
 *  /sustainability-hero-bg.jpg          – Hero (wind turbines)
 *  /sustainability-pillar-people.jpg    – People First card
 *  /sustainability-pillar-planet.jpg    – Planet Preservation card
 *  /sustainability-pillar-product.jpg   – Product Responsibility card
 *  /sustainability-commitment.jpg       – Long-Term Vision (hands + seedling)
 *  /sustainability-zed-certificate.png  – ZED Certification badge
 */

import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

// All visible text lives in src/locales (sustainability.*); list text is paired by index.
import { CheckCircle, ChevronDown } from 'lucide-react';

// ─────────────────────────────────────────────────────────
// SECTION 1 — HERO
// Full-viewport image, dark overlay, LEFT-ALIGNED text + text CTA
// Matches the reference landing-page design exactly
// ─────────────────────────────────────────────────────────
function SustainabilityHero() {
  const { t } = useLanguage();
  return (
    <section
      className="relative w-full flex flex-col justify-end overflow-hidden"
      style={{ height: '100vh', minHeight: 600 }}
    >
      {/* Background image — wind turbines at sunset over green hills */}
      <img
        src="/sustainability-hero-bg.jpg"
        alt={t('sustainability.hero.imageAlt')}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: 'center 30%' }}
        loading="eager"
      />

      {/* Dark gradient overlay — heavier at bottom for text legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.25) 40%, rgba(0,0,0,0.65) 100%)',
        }}
      />

      {/* Content — left-aligned, positioned in lower portion */}
      <div
        className="relative flex flex-col items-start px-8 sm:px-12 lg:px-24"
        style={{ maxWidth: 820, width: '100%', paddingBottom: 'clamp(60px, 10vh, 120px)' }}
      >
        {/* Eyebrow badge — bordered pill */}
        <span
          className="inline-block uppercase font-bold"
          style={{
            fontSize: 11,
            letterSpacing: '2.5px',
            color: '#ffffff',
            padding: '8px 20px',
            border: '1.5px solid rgba(255,255,255,0.6)',
            borderRadius: 4,
            marginBottom: 28,
          }}
        >
          {t('sustainability.hero.badge')}
        </span>

        {/* Main heading */}
        <h1
          className="font-serif font-bold text-white m-0"
          style={{
            fontSize: 'clamp(32px, 5vw, 52px)',
            lineHeight: 1.15,
            marginBottom: 20,
          }}
        >
          {t('sustainability.hero.title')}
        </h1>

        {/* Description */}
        <p
          className="m-0"
          style={{
            fontSize: 'clamp(14px, 1.4vw, 16px)',
            lineHeight: 1.7,
            color: 'rgba(255,255,255,0.78)',
            maxWidth: 580,
            marginBottom: 28,
          }}
        >
          {t('sustainability.hero.description')}
        </p>

        {/* CTA — text link with down chevron */}
        <a
          href="#core-pillars"
          className="inline-flex items-center cursor-pointer group"
          style={{
            color: '#ffffff',
            fontWeight: 700,
            fontSize: 14,
            textDecoration: 'none',
            gap: 6,
          }}
        >
          {t('sustainability.hero.cta')}
          <ChevronDown
            size={16}
            className="transition-transform duration-300 group-hover:translate-y-0.5"
          />
        </a>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────
// SECTION 2 — CORE PILLARS
// White bg | 3-col card grid | image + heading + desc + bullet points
// ─────────────────────────────────────────────────────────
const PILLARS = [
  {
    img: '/sustainability-pillar-people.jpg',
    accentColor: '#1a5276',
    iconBg: '#ebf3fb',
  },
  {
    img: '/sustainability-pillar-planet.jpg',
    accentColor: '#059669',
    iconBg: '#ecfdf5',
  },
  {
    img: '/sustainability-pillar-product.jpg',
    accentColor: '#c8963e',
    iconBg: '#fef9e7',
  },
];

function CorePillars() {
  const { t } = useLanguage();
  const pillars = PILLARS.map((pillar, i) => ({ ...pillar, ...t('sustainability.pillars.items')[i] }));
  return (
    <section
      id="core-pillars"
      className="bg-white"
      style={{ paddingTop: 88, paddingBottom: 88 }}
    >
      <div
        className="mx-auto flex flex-col items-center"
        style={{ maxWidth: 1280, paddingLeft: 24, paddingRight: 24, gap: 56 }}
      >
        {/* Section heading */}
        <div className="flex flex-col items-center text-center" style={{ gap: 12 }}>
          <p
            className="m-0 uppercase font-semibold"
            style={{ fontSize: 12, letterSpacing: '3px', color: '#c8963e' }}
          >
            {t('sustainability.pillars.eyebrow')}
          </p>
          <h2
            className="font-serif font-bold m-0"
            style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', color: '#0f1f3d', lineHeight: 1.2 }}
          >
            {t('sustainability.pillars.heading')}
          </h2>
          <span
            style={{ width: 44, height: 3, borderRadius: 2, background: '#c8963e', display: 'block' }}
          />
        </div>

        {/* 3-column card grid */}
        <div
          className="w-full grid grid-cols-1 md:grid-cols-3"
          style={{ gap: 28 }}
        >
          {pillars.map((pillar) => (
            <div
              key={pillar.img}
              className="flex flex-col rounded-2xl overflow-hidden bg-white"
              style={{
                border: '1px solid rgba(15,31,61,0.07)',
                boxShadow: '0px 4px 20px rgba(15,31,61,0.08)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0px 12px 36px rgba(15,31,61,0.14)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0px 4px 20px rgba(15,31,61,0.08)';
              }}
            >
              {/* Card image — 16:9 aspect ratio */}
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/9' }}>
                <img
                  src={pillar.img}
                  alt={pillar.alt}
                  className="w-full h-full object-cover"
                  style={{ transition: 'transform 0.5s ease' }}
                />
                {/* Subtle bottom scrim */}
                <div
                  className="absolute inset-x-0 bottom-0"
                  style={{
                    height: '30%',
                    background: 'linear-gradient(to top, rgba(15,31,61,0.2), transparent)',
                  }}
                />
              </div>

              {/* Card content */}
              <div className="flex flex-col p-6" style={{ gap: 14 }}>
                {/* Card title with colored left-border accent */}
                <h3
                  className="font-serif font-bold m-0"
                  style={{
                    fontSize: 20,
                    color: '#0f1f3d',
                    lineHeight: 1.3,
                    borderLeft: `3px solid ${pillar.accentColor}`,
                    paddingLeft: 12,
                  }}
                >
                  {pillar.title}
                </h3>

                {/* Description */}
                <p
                  className="m-0"
                  style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.65 }}
                >
                  {pillar.description}
                </p>

                {/* Divider */}
                <div
                  style={{ height: 1, background: 'rgba(15,31,61,0.07)' }}
                />

                {/* Bullet points */}
                <ul className="m-0 p-0 flex flex-col" style={{ gap: 10, listStyle: 'none' }}>
                  {pillar.points.map((point) => (
                    <li key={point} className="flex items-start" style={{ gap: 10 }}>
                      <CheckCircle
                        size={16}
                        style={{ color: pillar.accentColor, flexShrink: 0, marginTop: 2 }}
                      />
                      <span style={{ fontSize: 13.5, color: '#374151', lineHeight: 1.5 }}>
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────
// SECTION 3 — LONG-TERM VISION
// Light blue bg | Left: image (hands + seedling) | Right: text
// ─────────────────────────────────────────────────────────
function LongTermVision() {
  const { t } = useLanguage();
  return (
    <section style={{ background: '#f4f7fb', paddingTop: 88, paddingBottom: 88 }}>
      <div
        className="mx-auto flex flex-col lg:flex-row items-center"
        style={{ maxWidth: 1280, paddingLeft: 24, paddingRight: 24, gap: 64 }}
      >
        {/* Left: image */}
        <div
          className="relative w-full lg:w-auto shrink-0 overflow-hidden rounded-2xl"
          style={{
            width: '100%',
            maxWidth: 520,
            aspectRatio: '5/4',
            boxShadow: '0px 8px 32px rgba(15,31,61,0.12)',
          }}
        >
          <img
            src="/sustainability-commitment.jpg"
            alt={t('sustainability.vision.imageAlt')}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: text content */}
        <div className="flex flex-col flex-1" style={{ gap: 24 }}>
          {/* Eyebrow */}
          <p
            className="m-0 uppercase font-semibold"
            style={{ fontSize: 12, letterSpacing: '3px', color: '#c8963e' }}
          >
            {t('sustainability.vision.eyebrow')}
          </p>

          {/* Heading */}
          <h2
            className="font-serif font-bold m-0"
            style={{ fontSize: 'clamp(24px, 3vw, 36px)', color: '#0f1f3d', lineHeight: 1.25 }}
          >
            {t('sustainability.vision.heading')}
          </h2>

          {/* Gold divider */}
          <span
            style={{ display: 'block', width: 44, height: 3, borderRadius: 2, background: '#c8963e' }}
          />

          {/* Paragraph 1 */}
          <p
            className="m-0"
            style={{ fontSize: 15, lineHeight: 1.75, color: '#4b5563' }}
          >
            {t('sustainability.vision.paragraph1')}
          </p>

          {/* Paragraph 2 */}
          <p
            className="m-0"
            style={{ fontSize: 15, lineHeight: 1.75, color: '#4b5563' }}
          >
            {t('sustainability.vision.paragraph2')}
          </p>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────
// SECTION 4 — ZED CERTIFICATION
// White bg | Left: text block | Right: ZED badge image
// ─────────────────────────────────────────────────────────
function ZedCertification() {
  const { t } = useLanguage();
  return (
    <section className="bg-white" style={{ paddingTop: 88, paddingBottom: 88 }}>
      <div
        className="mx-auto flex flex-col lg:flex-row items-center"
        style={{ maxWidth: 1280, paddingLeft: 24, paddingRight: 24, gap: 64 }}
      >
        {/* Left: text */}
        <div className="flex flex-col flex-1" style={{ gap: 24 }}>
          {/* Eyebrow */}
          <p
            className="m-0 uppercase font-semibold"
            style={{ fontSize: 12, letterSpacing: '3px', color: '#c8963e' }}
          >
            {t('sustainability.zed.eyebrow')}
          </p>

          {/* Main heading */}
          <h2
            className="font-serif font-bold m-0"
            style={{ fontSize: 'clamp(24px, 3vw, 36px)', color: '#0f1f3d', lineHeight: 1.25 }}
          >
            {t('sustainability.zed.heading')}
          </h2>

          {/* Gold divider */}
          <span
            style={{ display: 'block', width: 44, height: 3, borderRadius: 2, background: '#c8963e' }}
          />

          {/* Subheading */}
          <p
            className="font-semibold m-0"
            style={{ fontSize: 16, color: '#1a5276', lineHeight: 1.5 }}
          >
            {t('sustainability.zed.tagline')}
          </p>

          {/* Description */}
          <p
            className="m-0"
            style={{ fontSize: 15, lineHeight: 1.75, color: '#4b5563' }}
          >
            {t('sustainability.zed.description')}
          </p>

          {/* ZED highlight badges */}
          <div className="flex flex-wrap" style={{ gap: 12 }}>
            {t('sustainability.zed.badges').map(
              (badge) => (
                <span
                  key={badge}
                  className="font-semibold"
                  style={{
                    padding: '7px 16px',
                    borderRadius: 20,
                    background: '#ebf3fb',
                    color: '#1a5276',
                    fontSize: 12,
                    letterSpacing: '0.5px',
                  }}
                >
                  {badge}
                </span>
              )
            )}
          </div>
        </div>

        {/* Right: ZED certificate image */}
        <div
          className="relative w-full lg:w-auto shrink-0 overflow-hidden rounded-2xl flex items-center justify-center"
          style={{
            maxWidth: 420,
            width: '100%',
            background: '#f4f7fb',
            padding: 32,
            borderRadius: 20,
            boxShadow: '0px 4px 20px rgba(15,31,61,0.08)',
          }}
        >
          <img
            src="/sustainability-zed-certificate.png"
            alt={t('sustainability.zed.imageAlt')}
            className="w-full h-auto object-contain"
            style={{ maxHeight: 320 }}
          />
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────
// SECTION 5 — BI INSIDER NEWSLETTER
// Exactly matches the Footer newsletter section design
// Bg: #f4f7fb | Left: heading | Right: form
// ─────────────────────────────────────────────────────────
const COUNTRY_OPTIONS = [
  'India', 'United States', 'United Kingdom', 'UAE', 'Australia',
  'Canada', 'Singapore', 'Germany', 'France', 'Other',
];



// ─────────────────────────────────────────────────────────
// PAGE EXPORT
// Route: /sustainability  (registered in App.jsx)
// ─────────────────────────────────────────────────────────
export default function Sustainability() {
  const { t } = useLanguage();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Document title follows the selected language
  useEffect(() => {
    document.title = t('sustainability.pageTitle');
  }, [t]);

  return (
    <div className="w-full bg-white text-[#0f1f3d]">
      {/* 1. Hero — Wind turbines + dark overlay + heading + CTA */}
      <SustainabilityHero />

      {/* 2. Core Pillars — People First, Planet Preservation, Product Responsibility */}
      <CorePillars />

      {/* 3. Long-Term Vision — Seedling image + mission text */}
      <LongTermVision />

      {/* 4. ZED Certification — MSME badge + Zero Defect Zero Effect */}
      <ZedCertification />

      {/* 5. Newsletter — BI Insider subscribe form */}
     
    </div>
  );
}

