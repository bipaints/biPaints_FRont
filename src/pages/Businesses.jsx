/**
 * Businesses.jsx — /products (also reachable at /businesses)
 *
 * Sections (top → bottom):
 *  A. Hero              – daylight office image + subtle navy overlay (cinematic) + heading + CTAs + business index
 *  B. Introduction      – editorial two-column intro with industry chips
 *  C. Business showcase – six image cards (3 / 2 / 1 columns)        (#business-verticals)
 *  D. Featured          – alternating image / text rows per business (#business-<slug>)
 *  E. Group vision      – light full-bleed image + minimal statement
 *  F. Closing CTA       – the only dark image section before the footer
 *
 * Tone: only the hero (top) and the closing CTA are dark; every section in between
 * stays light with natural, un-overlaid business photography.
 *
 * Branding: no logo overlays on images. BI Paints uses real company photography
 * whose buckets carry the genuine BI PAINTS packaging; the other five businesses
 * use unbranded, context-specific photography (third-party brand marks cropped out).
 *
 * The global <Header /> and <Footer /> are rendered by App.jsx.
 *
 * Design tokens follow src/index.css and the other pages (BiFoundation, Sustainability):
 *  Gold #c8963e · Ink #0f1f3d · Body #20252b · PT Serif headings · Public Sans body
 *  · Inter uppercase eyebrows · gold pill CTA (radius 24).
 *
 * Text lives in src/locales (businesses.*); items are paired by index with BUSINESSES.
 *
 * Images: /public/businesses/* — Unsplash photos (Unsplash License), illustrative
 * visuals of each industry, not photos of BI Group facilities or products. Exception:
 * the BI Paints images are company assets (about-mega-warehouse.jpg, about-story.png).
 */

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, ChevronDown, Cog, Cpu, Leaf, Paintbrush, Sofa, Sprout } from 'lucide-react';
import { TypingReveal, passThroughVariants } from '../components/TypingReveal';
import {
  EASE_OUT,
  cardUp,
  fadeUp,
  fadeUpSmall,
  hoverLiftCard,
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
const MUTED = '#555555';
const BORDER = '1px solid rgba(13,25,48,0.1)';
const GUTTER = 'px-6 sm:px-10 lg:px-35';

// ─────────────────────────────────────────────────────────
// BUSINESS CONFIG
// href:
//   - internal route (handled by App.jsx), e.g. '/products/paints'
//   - external URL  → set `external: true` (opens in a new tab safely)
//   - null          → PLACEHOLDER: no business page exists yet. The card then
//                     scrolls to its featured row on this page, and the featured
//                     CTA shows a "coming soon" label. Replace null with the real
//                     route / verified URL when the page is ready.
// ─────────────────────────────────────────────────────────
const BUSINESSES = [
  {
    slug: 'paints',
    icon: Paintbrush,
    href: '/products/paints',
    // Company photography — real BI PAINTS branded buckets (crops of
    // about-mega-warehouse.jpg and about-story.png, framed on the bucket fronts)
    cardImage: '/businesses/paints-card-bi-paints-buckets.jpg',
    featureImage: '/businesses/paints-feature-bi-paints-range.jpg',
  },
  {
    slug: 'modular',
    icon: Sofa,
    href: null, // TODO: BI Modular / Interiors page
    cardImage: '/businesses/modular-card-kitchen.jpg',
    featureImage: '/businesses/modular-feature-bright-living-room.jpg',
  },
  {
    slug: 'electronics',
    icon: Cpu,
    href: null, // TODO: BI Electronics page
    cardImage: '/businesses/electronics-card-gold-pcb.jpg',
    featureImage: '/businesses/electronics-feature-pcb-assembly.jpg',
  },
  {
    slug: 'agriculture',
    icon: Sprout,
    href: null, // TODO: BI Agriculture page
    cardImage: '/businesses/agriculture-card-greenhouse.jpg',
    featureImage: '/businesses/agriculture-feature-paddy-farm.jpg',
  },
  {
    slug: 'homeopathic',
    icon: Leaf,
    href: null, // TODO: BI Homeopathic page
    cardImage: '/businesses/homeopathic-card-globules.jpg',
    cardPosition: '68% center', // keep globules + remedy bottle in frame
    featureImage: '/businesses/homeopathic-feature-remedy-kit.jpg',
  },
  {
    slug: 'engineering',
    icon: Cog,
    href: null, // TODO: BI Engineering page
    cardImage: '/businesses/engineering-card-process-plant.jpg',
    featureImage: '/businesses/engineering-feature-automation-lab.jpg',
  },
];

const anchorId = (slug) => `business-${slug}`;

function useBusinesses() {
  const { t } = useLanguage();
  const items = t('businesses.items');
  return BUSINESSES.map((b, i) => ({
    ...b,
    ...items[i],
    number: String(i + 1).padStart(2, '0'),
  }));
}

// Props for a link to a business: internal route, external URL, or in-page fallback.
function businessLinkProps(business) {
  if (!business.href) return { href: `#${anchorId(business.slug)}` };
  if (business.external) return { href: business.href, target: '_blank', rel: 'noopener noreferrer' };
  return { href: business.href };
}

// Shared heading reveal (same as BiFoundation)
function RevealHeading({ as = 'h2', text, style, className }) {
  const Tag = motion[as];
  return (
    <Tag variants={passThroughVariants} style={style} className={className}>
      <TypingReveal text={text} split="word" charDelay={0.04} charDuration={0.4} baseDelay={0} />
    </Tag>
  );
}

function Eyebrow({ children, color = GOLD, className = '' }) {
  return (
    <p
      className={`font-inter uppercase m-0 ${className}`}
      style={{ fontWeight: 700, fontSize: 13, letterSpacing: '2px', color }}
    >
      {children}
    </p>
  );
}

function GoldButton({ children, icon: Icon = ArrowRight, ...linkProps }) {
  return (
    <motion.div
      className="inline-flex"
      whileHover={{ ...hoverScaleButton, transition: hoverTransition }}
      whileTap={{ ...tapScaleButton, transition: hoverTransition }}
    >
      <a
        {...linkProps}
        className="inline-flex items-center"
        style={{ gap: 10, background: GOLD, padding: '14px 32px', borderRadius: 24 }}
      >
        <span className="font-inter" style={{ fontWeight: 700, fontSize: 14, letterSpacing: '1px', color: '#ffffff' }}>
          {children}
        </span>
        <Icon size={16} color="#ffffff" />
      </a>
    </motion.div>
  );
}

function OutlineButton({ children, light = false, ...linkProps }) {
  const color = light ? '#ffffff' : '#1b1b2f';
  return (
    <motion.div
      className="inline-flex"
      whileHover={{ ...hoverScaleButton, transition: hoverTransition }}
      whileTap={{ ...tapScaleButton, transition: hoverTransition }}
    >
      <a
        {...linkProps}
        className="inline-flex items-center rounded-full"
        style={{
          gap: 10,
          padding: '13px 28px',
          border: `1.5px solid ${light ? 'rgba(255,255,255,0.7)' : '#1b1b2f'}`,
        }}
      >
        <span style={{ fontWeight: 600, fontSize: 15, color }}>{children}</span>
      </a>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────
// SECTION A — HERO
// ─────────────────────────────────────────────────────────
function BusinessesHero({ businesses }) {
  const { t } = useLanguage();
  return (
    <section
      className="relative w-full overflow-hidden flex flex-col"
      style={{ paddingTop: 'var(--header-height)', minHeight: '100vh' }}
    >
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: EASE_OUT }}
        className="absolute inset-0"
      >
        <img
          src="/businesses/businesses-hero-daylight-office.jpg"
          alt={t('businesses.hero.imageAlt')}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: '70% center' }}
          width={2000}
          height={1333}
          loading="eager"
          fetchPriority="high"
        />
      </motion.div>
      {/* Cinematic treatment — subtle ink-navy (#0f1f3d) wash: deeper behind the copy,
          lighter on the right so the photo stays clearly visible. Never fully black. */}
      <div
        className="absolute inset-0 lg:hidden"
        style={{ background: 'linear-gradient(180deg, rgba(15,31,61,0.72) 0%, rgba(15,31,61,0.62) 60%, rgba(15,31,61,0.78) 100%)' }}
      />
      <div
        className="absolute inset-0 hidden lg:block"
        style={{
          background:
            'linear-gradient(90deg, rgba(15,31,61,0.82) 0%, rgba(15,31,61,0.68) 38%, rgba(15,31,61,0.35) 68%, rgba(15,31,61,0.18) 100%)',
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0"
        style={{ height: 200, background: 'linear-gradient(180deg, rgba(15,31,61,0) 0%, rgba(15,31,61,0.55) 100%)' }}
      />

      {/* Copy */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer(0.15)}
        className={`relative flex-1 flex flex-col justify-center items-start ${GUTTER}`}
        style={{ gap: 24, paddingTop: 56, paddingBottom: 56 }}
      >
        <motion.div variants={fadeUpSmall} className="flex items-center" style={{ gap: 14 }}>
          <span style={{ width: 36, height: 2, background: GOLD }} />
          <Eyebrow>{t('businesses.hero.eyebrow')}</Eyebrow>
        </motion.div>

        <motion.h1
          variants={passThroughVariants}
          className="text-[42px] sm:text-[56px] lg:text-[68px] m-0"
          style={{ fontWeight: 700, lineHeight: 1.1, color: '#ffffff', maxWidth: 900, textShadow: '0 2px 24px rgba(15,31,61,0.35)' }}
        >
          <TypingReveal text={t('businesses.hero.title')} split="word" charDelay={0.06} charDuration={0.55} baseDelay={0.15} />
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="font-serif italic m-0 text-[20px] sm:text-[24px]"
          style={{ lineHeight: 1.4, color: GOLD, maxWidth: 720 }}
        >
          {t('businesses.hero.subtitle')}
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="m-0"
          style={{ fontSize: 17, lineHeight: 1.7, color: 'rgba(255,255,255,0.88)', maxWidth: 600 }}
        >
          {t('businesses.hero.description')}
        </motion.p>

        <motion.div variants={fadeUpSmall} className="flex flex-wrap items-center" style={{ gap: 16, marginTop: 8 }}>
          <GoldButton href="#business-verticals" icon={ChevronDown}>
            {t('businesses.hero.cta')}
          </GoldButton>
          <OutlineButton href="#contact" light>
            {t('businesses.hero.secondaryCta')}
          </OutlineButton>
        </motion.div>
      </motion.div>

      {/* Business index — quick links to each featured row */}
      <motion.nav
        aria-label={t('businesses.hero.indexLabel')}
        initial="hidden"
        animate="visible"
        variants={staggerContainer(0.06, 0.7)}
        className={`relative ${GUTTER}`}
        style={{ paddingBottom: 40 }}
      >
        <ul
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 m-0 p-0 list-none"
          style={{ borderTop: '1px solid rgba(255,255,255,0.22)' }}
        >
          {businesses.map((b) => (
            <motion.li key={b.slug} variants={fadeUpSmall}>
              <a
                href={`#${anchorId(b.slug)}`}
                className="group flex flex-col"
                style={{ gap: 6, paddingTop: 18, paddingBottom: 6, paddingRight: 12 }}
              >
                <span className="font-inter" style={{ fontWeight: 700, fontSize: 12, letterSpacing: '1px', color: GOLD }}>
                  {b.number}
                </span>
                <span
                  className="transition-colors duration-300 text-white/85 group-hover:text-white"
                  style={{ fontWeight: 600, fontSize: 14, lineHeight: 1.35 }}
                >
                  {b.name}
                </span>
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.nav>
    </section>
  );
}

// ─────────────────────────────────────────────────────────
// SECTION B — INTRODUCTION
// ─────────────────────────────────────────────────────────
function BusinessesIntro({ businesses }) {
  const { t } = useLanguage();
  return (
    <section className="bg-white" style={{ paddingTop: 96, paddingBottom: 72 }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.15)}
        className={`grid grid-cols-1 lg:grid-cols-12 items-start ${GUTTER}`}
        style={{ gap: 40 }}
      >
        <motion.div variants={fadeUp} className="lg:col-span-6 flex flex-col items-start" style={{ gap: 20 }}>
          <Eyebrow>{t('businesses.intro.eyebrow')}</Eyebrow>
          <div className="flex items-stretch" style={{ gap: 16 }}>
            <span className="shrink-0" style={{ width: 4, borderRadius: 2, background: GOLD }} />
            <RevealHeading
              text={t('businesses.intro.heading')}
              className="text-[30px] sm:text-[40px] m-0"
              style={{ fontWeight: 700, lineHeight: 1.2, color: INK }}
            />
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="lg:col-span-6 flex flex-col" style={{ gap: 28 }}>
          <p className="m-0" style={{ fontSize: 17, lineHeight: 1.8, color: BODY }}>
            {t('businesses.intro.description')}
          </p>
          <ul className="flex flex-wrap m-0 p-0 list-none" style={{ gap: 10 }}>
            {businesses.map(({ slug, icon: Icon, industry }) => (
              <li
                key={slug}
                className="inline-flex items-center"
                style={{
                  gap: 8,
                  padding: '8px 14px',
                  borderRadius: 999,
                  border: BORDER,
                  background: '#f9fafb',
                  fontSize: 13,
                  fontWeight: 600,
                  color: INK,
                }}
              >
                <Icon size={15} color={GOLD} strokeWidth={1.9} />
                {industry}
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────
// SECTION C — SIX BUSINESS SHOWCASE
// ─────────────────────────────────────────────────────────
function BusinessCard({ business }) {
  const { t } = useLanguage();
  const { icon: Icon } = business;
  return (
    <motion.div variants={cardUp} whileHover={hoverLiftCard} className="h-full">
      <a
        {...businessLinkProps(business)}
        aria-label={`${business.name} – ${t('businesses.grid.cta')}`}
        className="group flex flex-col h-full overflow-hidden bg-white"
        style={{ border: '1px solid #eaeaea', borderRadius: 12, boxShadow: '0px 4px 12px rgba(15,31,61,0.05)' }}
      >
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: '3 / 2' }}>
          <img
            src={business.cardImage}
            alt={business.cardAlt}
            width={1200}
            height={800}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            style={{ objectPosition: business.cardPosition || 'center' }}
          />
          <span
            className="absolute inline-flex items-center"
            style={{
              left: 16,
              bottom: 16,
              gap: 8,
              padding: '6px 12px',
              borderRadius: 999,
              background: 'rgba(255,255,255,0.92)',
              fontSize: 12,
              fontWeight: 600,
              color: INK,
            }}
          >
            <Icon size={14} color={GOLD} strokeWidth={2} />
            {business.industry}
          </span>
          <span
            className="absolute font-inter inline-flex items-center justify-center"
            style={{
              top: 14,
              right: 14,
              minWidth: 36,
              height: 30,
              borderRadius: 8,
              background: 'rgba(255,255,255,0.95)',
              boxShadow: '0 6px 18px rgba(15,31,61,0.14)',
              fontWeight: 800,
              fontSize: 13,
              letterSpacing: '1px',
              color: GOLD,
            }}
          >
            {business.number}
          </span>
        </div>

        <div className="flex flex-col flex-1 items-start" style={{ gap: 12, padding: '24px 24px 26px' }}>
          <h3 className="m-0" style={{ fontWeight: 700, fontSize: 22, lineHeight: 1.3, color: INK }}>
            {business.name}
          </h3>
          <p className="m-0 flex-1" style={{ fontSize: 14, lineHeight: 1.6, color: MUTED }}>
            {business.summary}
          </p>
          <span className="inline-flex items-center" style={{ gap: 8, marginTop: 6 }}>
            <span className="font-inter uppercase" style={{ fontWeight: 700, fontSize: 13, letterSpacing: '1px', color: GOLD }}>
              {t('businesses.grid.cta')}
            </span>
            <ArrowRight size={16} color={GOLD} className="transition-transform duration-300 group-hover:translate-x-1" />
          </span>
          <span
            aria-hidden="true"
            className="block h-0.5 w-10 transition-all duration-500 group-hover:w-full"
            style={{ background: GOLD, borderRadius: 2 }}
          />
        </div>
      </a>
    </motion.div>
  );
}

function BusinessShowcase({ businesses }) {
  const { t } = useLanguage();
  return (
    <section
      id="business-verticals"
      style={{ background: '#f9fafb', borderTop: BORDER, borderBottom: BORDER, paddingTop: 88, paddingBottom: 96 }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer(0.15)}
        className={`flex flex-col items-center ${GUTTER}`}
        style={{ gap: 48 }}
      >
        <motion.div variants={fadeUp} className="flex flex-col items-center text-center" style={{ gap: 12 }}>
          <Eyebrow>{t('businesses.grid.eyebrow')}</Eyebrow>
          <RevealHeading
            text={t('businesses.grid.heading')}
            className="text-[28px] sm:text-[36px] m-0"
            style={{ fontWeight: 700, lineHeight: 1.2, color: INK }}
          />
          <span style={{ width: 44, height: 3, borderRadius: 2, background: GOLD, display: 'block', marginTop: 4 }} />
        </motion.div>

        <motion.div
          variants={staggerContainer(0.08)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full"
          style={{ gap: 28 }}
        >
          {businesses.map((b) => (
            <BusinessCard key={b.slug} business={b} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────
// SECTION D — FEATURED BUSINESS EXPERIENCE
// ─────────────────────────────────────────────────────────
function FeaturedRow({ business, reverse }) {
  const { t } = useLanguage();
  const { icon: Icon } = business;
  return (
    <motion.article
      id={anchorId(business.slug)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer(0.15)}
      className={`flex flex-col items-center ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
      style={{ gap: 56 }}
    >
      {/* Image */}
      <motion.div variants={fadeUp} className="relative w-full lg:w-[55%] shrink-0">
        <div
          className="group relative overflow-hidden bg-white"
          style={{ aspectRatio: '4 / 3', borderRadius: 16, boxShadow: '0 24px 48px -24px rgba(15,31,61,0.28)' }}
        >
          <img
            src={business.featureImage}
            alt={business.featureAlt}
            width={1600}
            height={1200}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            style={{ objectPosition: business.featurePosition || 'center' }}
          />
        </div>
        {/* Gold accent frame offset behind the image */}
        <span
          aria-hidden="true"
          className="hidden lg:block absolute -z-10"
          style={{
            top: 24,
            bottom: -24,
            [reverse ? 'left' : 'right']: -24,
            [reverse ? 'right' : 'left']: 24,
            borderRadius: 16,
            border: `1.5px solid rgba(200,150,62,0.45)`,
          }}
        />
      </motion.div>

      {/* Text */}
      <motion.div variants={fadeUp} className="flex w-full lg:w-auto flex-1 flex-col items-start" style={{ gap: 20 }}>
        <div className="flex items-center" style={{ gap: 14 }}>
          <span style={{ fontWeight: 800, fontSize: 44, lineHeight: 1, color: 'rgba(200,150,62,0.3)' }}>
            {business.number}
          </span>
          <span
            className="inline-flex items-center justify-center"
            style={{ width: 40, height: 40, borderRadius: 999, background: 'rgba(200,150,62,0.1)' }}
          >
            <Icon size={20} color={GOLD} strokeWidth={1.8} />
          </span>
        </div>
        <Eyebrow>{business.industry}</Eyebrow>
        <h3 className="m-0 text-[28px] sm:text-[34px]" style={{ fontWeight: 700, lineHeight: 1.2, color: INK }}>
          {business.name}
        </h3>
        <p className="m-0" style={{ fontSize: 16, lineHeight: 1.8, color: BODY, maxWidth: 520 }}>
          {business.description}
        </p>
        <div style={{ marginTop: 8 }}>
          {business.href ? (
            <GoldButton {...businessLinkProps(business)} icon={business.external ? ArrowUpRight : ArrowRight}>
              {t('businesses.featured.cta')}
            </GoldButton>
          ) : (
            // Placeholder until the business page exists (see BUSINESSES config)
            <span
              className="inline-flex items-center font-inter"
              style={{
                padding: '13px 28px',
                borderRadius: 24,
                border: '1.5px dashed rgba(200,150,62,0.6)',
                fontWeight: 600,
                fontSize: 13,
                letterSpacing: '0.5px',
                color: '#8a6a2e',
              }}
            >
              {t('businesses.featured.comingSoon')}
            </span>
          )}
        </div>
      </motion.div>
    </motion.article>
  );
}

function FeaturedBusinesses({ businesses }) {
  const { t } = useLanguage();
  return (
    <section className="bg-white overflow-hidden" style={{ paddingTop: 96, paddingBottom: 112 }}>
      <div className={GUTTER}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.15)}
          className="flex flex-col items-start"
          style={{ gap: 12, marginBottom: 72 }}
        >
          <motion.div variants={fadeUpSmall}>
            <Eyebrow>{t('businesses.featured.eyebrow')}</Eyebrow>
          </motion.div>
          <div className="flex items-stretch" style={{ gap: 16 }}>
            <span className="shrink-0" style={{ width: 4, borderRadius: 2, background: GOLD }} />
            <RevealHeading
              text={t('businesses.featured.heading')}
              className="text-[28px] sm:text-[36px] m-0"
              style={{ fontWeight: 700, lineHeight: 1.2, color: INK }}
            />
          </div>
        </motion.div>

        <div className="relative isolate flex flex-col" style={{ gap: 112 }}>
          {businesses.map((b, i) => (
            <FeaturedRow key={b.slug} business={b} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────
// SECTION E — GROUP VISION
// ─────────────────────────────────────────────────────────
function GroupVision({ businesses }) {
  const { t } = useLanguage();
  return (
    <section className="relative overflow-hidden" style={{ paddingTop: 120, paddingBottom: 120 }}>
      <motion.div
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 1.4, ease: EASE_OUT }}
        className="absolute inset-0"
      >
        <img
          src="/businesses/businesses-vision-white-tower.jpg"
          alt={t('businesses.vision.imageAlt')}
          width={2000}
          height={1333}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: 'center 70%' }}
        />
      </motion.div>
      {/* Light cream wash (--color-cream #f5f3ee) — this section stays light */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, rgba(245,243,238,0.9) 0%, rgba(255,255,255,0.72) 50%, rgba(245,243,238,0.92) 100%)' }}
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.15)}
        className={`relative flex flex-col items-center text-center ${GUTTER}`}
        style={{ gap: 24 }}
      >
        <motion.div variants={fadeUpSmall}>
          <Eyebrow>{t('businesses.vision.eyebrow')}</Eyebrow>
        </motion.div>
        <RevealHeading
          text={t('businesses.vision.heading')}
          className="text-[30px] sm:text-[44px] m-0"
          style={{ fontWeight: 700, lineHeight: 1.2, color: INK, maxWidth: 860 }}
        />
        <motion.p
          variants={fadeUp}
          className="m-0"
          style={{ fontSize: 17, lineHeight: 1.7, color: BODY, maxWidth: 640 }}
        >
          {t('businesses.vision.description')}
        </motion.p>

        {/* Six businesses, one line */}
        <motion.ul
          variants={staggerContainer(0.08)}
          className="flex flex-wrap justify-center m-0 p-0 list-none"
          style={{ gap: '12px 10px', marginTop: 24, maxWidth: 1160 }}
        >
          {businesses.map(({ slug, icon: Icon, name }) => (
            <motion.li
              key={slug}
              variants={fadeUpSmall}
              className="inline-flex items-center"
              style={{
                gap: 8,
                padding: '10px 18px',
                borderRadius: 999,
                border: BORDER,
                background: 'rgba(255,255,255,0.9)',
                boxShadow: '0 4px 12px rgba(15,31,61,0.05)',
                color: INK,
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              <Icon size={16} color={GOLD} strokeWidth={1.9} />
              {name}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────
// SECTION F — FINAL CTA
// The only dark image section before the footer (see header comment)
// ─────────────────────────────────────────────────────────
function BusinessesClosingCta() {
  const { t } = useLanguage();
  return (
    <section className="relative overflow-hidden" style={{ paddingTop: 112, paddingBottom: 112 }}>
      <motion.div
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 1.4, ease: EASE_OUT }}
        className="absolute inset-0"
      >
        <img
          src="/businesses/businesses-cta-horizon.jpg"
          alt=""
          width={2000}
          height={1125}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: 'center 60%' }}
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
        className={`relative flex flex-col items-center text-center ${GUTTER}`}
        style={{ gap: 28 }}
      >
        <RevealHeading
          text={t('businesses.closing.heading')}
          className="text-[30px] sm:text-[40px] m-0"
          style={{ fontWeight: 700, lineHeight: 1.2, color: '#ffffff' }}
        />
        <motion.p
          variants={fadeUp}
          className="m-0"
          style={{ fontSize: 16, lineHeight: 1.6, color: 'rgba(255,255,255,0.8)', maxWidth: 640 }}
        >
          {t('businesses.closing.description')}
        </motion.p>
        <motion.div variants={fadeUpSmall} className="flex flex-wrap justify-center" style={{ gap: 16 }}>
          <GoldButton href="#business-verticals">{t('businesses.closing.cta')}</GoldButton>
          <OutlineButton href="#contact" light>
            {t('businesses.closing.secondaryCta')}
          </OutlineButton>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default function Businesses() {
  const { t } = useLanguage();
  const businesses = useBusinesses();

  useEffect(() => {
    document.title = t('businesses.pageTitle');
  }, [t]);

  return (
    <>
      <BusinessesHero businesses={businesses} />
      <BusinessesIntro businesses={businesses} />
      <BusinessShowcase businesses={businesses} />
      <FeaturedBusinesses businesses={businesses} />
      <GroupVision businesses={businesses} />
      <BusinessesClosingCta />
    </>
  );
}
