/**
 * Achievements.jsx — /about/achievements
 *
 * 1:1 recreation of https://bipaints.netlify.app/about/achievements
 *
 * Sections (top → bottom):
 *  1. Hero  – full-screen bg image + dark overlay + animated stat counters
 *  2. Leadership  – 3 leader profile cards (Board of Directors)
 *  3. Certifications  – 4 certification cards on light-blue bg
 *  4. Trusted Industries  – 10 partner name tiles, 5-col grid
 *  5. Newsletter  – BI Insider subscribe form (matches Footer pattern)
 *
 * Design tokens (from src/index.css):
 *  Gold:        #c8963e
 *  Brand blue:  #1a5276  (--color-brand)
 *  Brand dark:  #124059  (--color-brand-dark)
 *  Ink dark:    #0f1f3d  (--color-ink-dark)
 *  Slate cool:  #6b7280  (--color-slate-cool)
 *  Section bg:  #f4f7fb  (certs + newsletter)
 *  Font serif:  PT Serif  (--font-serif)
 *  Font sans:   Public Sans (body default)
 */

import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

// All visible text lives in src/locales (achievements.*); list text is paired by index.
import { Award, CheckCircle, HardHat, Leaf } from 'lucide-react';

// ─────────────────────────────────────────────────────────
// ANIMATED COUNTER
// Counts up 0 → target with ease-out cubic, fires on scroll into view
// ─────────────────────────────────────────────────────────
function Counter({ target, suffix = '' }) {
  const spanRef = useRef(null);
  const [display, setDisplay] = useState(0);
  const fired = useRef(false);

  useEffect(() => {
    const el = spanRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !fired.current) {
          fired.current = true;
          obs.disconnect();
          const DURATION = 1800; // ms
          const start = performance.now();
          const tick = (now) => {
            const t = Math.min((now - start) / DURATION, 1);
            const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
            setDisplay(Math.round(eased * target));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return (
    <span ref={spanRef}>
      {display}
      {suffix}
    </span>
  );
}

// ─────────────────────────────────────────────────────────
// SECTION 1 — HERO + STATS
// Background: /about-hero-2.jpg + dark navy gradient
// Eyebrow "Milestones of Trust" | h1 "Our Achievements" | 4 stats
// ─────────────────────────────────────────────────────────
const STATS = [
  { target: 14,  suffix: '+' },
  { target: 500, suffix: '+' },
  { target: 1,   suffix: 'M+' },
  { target: 100, suffix: '%' },
];

function Hero() {
  const { t } = useLanguage();
  const stats = STATS.map((stat, i) => ({ ...stat, label: t('achievements.hero.stats')[i] }));
  return (
    <section
      className="relative w-full overflow-hidden flex flex-col"
      style={{ paddingTop: 72 /* fixed header height */ }}
    >
      {/* ── BG image ── */}
      <div className="absolute inset-0">
        <img
          src="/about-hero-2.jpg"
          alt={t('achievements.hero.imageAlt')}
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Dark navy gradient — matches rgba(10,27,63) reference */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(10,27,63,0.62) 0%, rgba(10,27,63,0.88) 100%)',
          }}
        />
      </div>

      {/* ── Heading block ── */}
      <div className="relative flex flex-col items-center text-center px-6 pt-16 pb-10">
        {/* Eyebrow */}
        <p
          className="m-0 uppercase font-semibold"
          style={{ fontSize: 12, letterSpacing: '3.5px', color: '#c8963e' }}
        >
          {t('achievements.hero.eyebrow')}
        </p>

        {/* H1 */}
        <h1
          className="font-serif font-bold text-white m-0 mt-4 leading-tight"
          style={{ fontSize: 'clamp(32px, 5vw, 52px)', lineHeight: 1.15 }}
        >
          {t('achievements.hero.title')}
        </h1>

        {/* Gold divider bar */}
        <span
          className="block mt-5"
          style={{ width: 48, height: 3, borderRadius: 2, background: '#c8963e' }}
        />
      </div>

      {/* ── Stats row ── */}
      <div
        className="relative grid grid-cols-2 lg:grid-cols-4"
        style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }}
      >
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className="flex flex-col items-center justify-center text-center py-10 px-5"
            style={{
              borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.12)' : 'none',
            }}
          >
            {/* Big animated number */}
            <span
              className="font-serif font-bold leading-none"
              style={{ fontSize: 'clamp(38px, 5vw, 58px)', color: '#c8963e' }}
            >
              <Counter target={stat.target} suffix={stat.suffix} />
            </span>

            {/* Label */}
            <span
              className="mt-2 uppercase font-semibold"
              style={{
                fontSize: 11,
                letterSpacing: '2.5px',
                color: 'rgba(255,255,255,0.75)',
              }}
            >
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────
// SHARED SECTION HEADER
// Gold eyebrow → serif title → gold underline bar
// ─────────────────────────────────────────────────────────
function SectionHead({ eyebrow, title }) {
  return (
    <div className="flex flex-col items-center text-center" style={{ gap: 12 }}>
      <p
        className="m-0 uppercase font-semibold"
        style={{ fontSize: 12, letterSpacing: '3px', color: '#c8963e' }}
      >
        {eyebrow}
      </p>
      <h2
        className="font-serif font-bold m-0"
        style={{
          fontSize: 'clamp(26px, 3.5vw, 36px)',
          color: '#0f1f3d',
          lineHeight: 1.2,
        }}
      >
        {title}
      </h2>
      <span
        style={{ width: 40, height: 3, borderRadius: 2, background: '#c8963e', display: 'block' }}
      />
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// SECTION 2 — OUR LEADERSHIP
// White bg | 3-col card grid | photo (4:3) + role badge + name + bio
// Images: /about-leader-0.jpg, /about-leader-1.jpg, /about-leader-2.jpg
// ─────────────────────────────────────────────────────────
const LEADERS = [
  {
    img:  '/about-leader-0.jpg',
  },
  {
    img:  '/about-leader-1.jpg',
  },
  {
    img:  '/about-leader-2.jpg',
  },
];

function Leadership() {
  const { t } = useLanguage();
  const leaders = LEADERS.map((ldr, i) => ({ ...ldr, ...t('achievements.leadership.leaders')[i] }));
  return (
    <section className="bg-white" style={{ paddingTop: 80, paddingBottom: 80 }}>
      <div
        className="mx-auto flex flex-col items-center"
        style={{ maxWidth: 1280, paddingLeft: 24, paddingRight: 24, gap: 48 }}
      >
        <SectionHead eyebrow={t('achievements.leadership.eyebrow')} title={t('achievements.leadership.title')} />

        {/* Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3" style={{ gap: 28 }}>
          {leaders.map((ldr) => (
            <div
              key={ldr.img}
              className="flex flex-col rounded-2xl overflow-hidden bg-white"
              style={{
                border: '1px solid rgba(15,31,61,0.07)',
                boxShadow: '0px 4px 20px rgba(15,31,61,0.08)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0px 12px 32px rgba(15,31,61,0.14)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0px 4px 20px rgba(15,31,61,0.08)';
              }}
            >
              {/* Photo — 4:3 aspect ratio */}
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <img
                  src={ldr.img}
                  alt={ldr.name}
                  className="w-full h-full object-cover object-top"
                  style={{ transition: 'transform 0.5s ease' }}
                />
                {/* Bottom scrim */}
                <div
                  className="absolute inset-x-0 bottom-0"
                  style={{
                    height: '25%',
                    background: 'linear-gradient(to top, rgba(15,31,61,0.25), transparent)',
                  }}
                />
              </div>

              {/* Text content */}
              <div className="flex flex-col p-6" style={{ gap: 8 }}>
                {/* Role badge */}
                <span
                  className="self-start font-bold uppercase"
                  style={{
                    fontSize: 10,
                    letterSpacing: '2px',
                    padding: '4px 12px',
                    borderRadius: 20,
                    background: '#f0f4fa',
                    color: '#1a5276',
                  }}
                >
                  {ldr.role}
                </span>

                {/* Name */}
                <h3
                  className="font-serif font-bold m-0"
                  style={{ fontSize: 20, color: '#0f1f3d', lineHeight: 1.3 }}
                >
                  {ldr.name}
                </h3>

                {/* Bio */}
                <p
                  className="m-0"
                  style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.65 }}
                >
                  {ldr.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────
// SECTION 3 — CERTIFICATIONS & QUALITY
// Bg: #f4f7fb | 4-col cards | colored top border + icon + title + desc
// ─────────────────────────────────────────────────────────
const CERTS = [
  {
    Icon:      Award,
    accent:    '#1a5276',
    iconBg:    '#ebf3fb',
    iconColor: '#1a5276',
  },
  {
    Icon:      CheckCircle,
    accent:    '#c8963e',
    iconBg:    '#fef9e7',
    iconColor: '#c8963e',
  },
  {
    Icon:      HardHat,
    accent:    '#d97706',
    iconBg:    '#fef3e2',
    iconColor: '#d97706',
  },
  {
    Icon:      Leaf,
    accent:    '#059669',
    iconBg:    '#ecfdf5',
    iconColor: '#059669',
  },
];

function Certifications() {
  const { t } = useLanguage();
  const certs = CERTS.map((cert, i) => ({ ...cert, ...t('achievements.certifications.items')[i] }));
  return (
    <section style={{ background: '#f4f7fb', paddingTop: 80, paddingBottom: 80 }}>
      <div
        className="mx-auto flex flex-col items-center"
        style={{ maxWidth: 1280, paddingLeft: 24, paddingRight: 24, gap: 48 }}
      >
        <SectionHead eyebrow={t('achievements.certifications.eyebrow')} title={t('achievements.certifications.title')} />

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: 20 }}>
          {certs.map(({ Icon, accent, iconBg, iconColor, title, subtitle, desc }) => (
            <div
              key={title}
              className="flex flex-col bg-white rounded-2xl"
              style={{
                padding: '24px 24px 28px',
                border: `1px solid rgba(15,31,61,0.07)`,
                borderTop: `3px solid ${accent}`,
                boxShadow: '0px 2px 12px rgba(15,31,61,0.06)',
                gap: 16,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0px 10px 28px rgba(15,31,61,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0px 2px 12px rgba(15,31,61,0.06)';
              }}
            >
              {/* Icon */}
              <span
                className="flex items-center justify-center shrink-0"
                style={{ width: 48, height: 48, borderRadius: 12, background: iconBg }}
              >
                <Icon size={24} color={iconColor} strokeWidth={2} />
              </span>

              {/* Title + subtitle */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <h3
                  className="font-serif font-bold m-0"
                  style={{ fontSize: 18, color: '#0f1f3d', lineHeight: 1.3 }}
                >
                  {title}
                </h3>
                <span
                  className="font-semibold uppercase"
                  style={{ fontSize: 10, letterSpacing: '2px', color: accent }}
                >
                  {subtitle}
                </span>
              </div>

              {/* Description */}
              <p
                className="m-0"
                style={{ fontSize: 13.5, color: '#6b7280', lineHeight: 1.7 }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────
// SECTION 4 — TRUSTED BY LEADING INDUSTRIES
// White bg | 5-col grid | text-only tiles with hover gold border
// ─────────────────────────────────────────────────────────

function TrustedIndustries() {
  const { t } = useLanguage();
  return (
    <section className="bg-white" style={{ paddingTop: 80, paddingBottom: 80 }}>
      <div
        className="mx-auto flex flex-col items-center"
        style={{ maxWidth: 1280, paddingLeft: 24, paddingRight: 24, gap: 48 }}
      >
        <SectionHead eyebrow={t('achievements.industries.eyebrow')} title={t('achievements.industries.title')} />

        <div
          className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
          style={{ gap: 16 }}
        >
          {t('achievements.industries.tiles').map((name) => (
            <div
              key={name}
              className="flex items-center justify-center bg-white rounded-xl"
              style={{
                padding: '20px 16px',
                minHeight: 90,
                border: '1px solid rgba(15,31,61,0.09)',
                boxShadow: '0px 2px 8px rgba(15,31,61,0.05)',
                transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
                textAlign: 'center',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(200,150,62,0.5)';
                e.currentTarget.style.boxShadow = '0px 6px 20px rgba(15,31,61,0.10)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(15,31,61,0.09)';
                e.currentTarget.style.boxShadow = '0px 2px 8px rgba(15,31,61,0.05)';
              }}
            >
              <span
                className="font-semibold"
                style={{ fontSize: 13, color: '#374151', lineHeight: 1.45 }}
              >
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────
// SECTION 5 — BI INSIDER NEWSLETTER
// Bg: #f4f7fb | Left: heading | Right: form (name, email, dropdown, consent, submit)
// Matches exact Footer newsletter design
// ─────────────────────────────────────────────────────────
const INDUSTRY_OPTS = [
  'Paints & Coatings',
  'Wellness',
  'Fashion & Lifestyle',
  'Modular Kitchens',
  'Other',
];



// ─────────────────────────────────────────────────────────
// PAGE EXPORT
// Route: /about/achievements  (handled in App.jsx)
// ─────────────────────────────────────────────────────────
export default function Achievements() {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  useEffect(() => {
    document.title = t('achievements.pageTitle');
  }, [t]);

  return (
    <div className="w-full bg-white text-[#0f1f3d]">
      <Hero />
      <Leadership />
      <Certifications />
      <TrustedIndustries />
    </div>
  );
}
