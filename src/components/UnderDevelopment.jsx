/**
 * UnderDevelopment.jsx
 *
 * Reusable skeleton for pages that are linked from the navigation but not
 * built yet. Matches the BI Group visual language (navy hero + gold eyebrow,
 * light #f9fafb section, card borders) so no nav link lands on a blank page.
 *
 * Usage (pass already-translated text, see src/locales skeleton.pages.*):
 *   <UnderDevelopment
 *     pageTitle="Investors – BI Group"
 *     title="Investors"
 *     description="..."
 *     sections={['Financial Reports', 'Annual Reports']}
 *   />
 */

import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const GOLD = '#c8963e';
const INK = '#0f1f3d';
const BORDER = '1px solid rgba(13,25,48,0.1)';

export default function UnderDevelopment({ pageTitle, eyebrow, title, description, image, sections = [] }) {
  const { t } = useLanguage();

  useEffect(() => {
    if (pageTitle) document.title = pageTitle;
  }, [pageTitle]);

  return (
    <>
      {/* Hero */}
      <section
        className="relative w-full overflow-hidden flex flex-col justify-center"
        style={{ paddingTop: 'var(--header-height)', minHeight: 420, background: INK }}
      >
        {image && (
          <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover" />
        )}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(10,10,26,0.65) 0%, rgba(10,10,26,0.35) 55%, #0f1f3d 100%)',
          }}
        />
        <div
          className="relative flex flex-col items-start px-6 sm:px-10 lg:px-35"
          style={{ gap: 20, paddingTop: 48, paddingBottom: 48 }}
        >
          <p
            className="font-inter uppercase"
            style={{ fontWeight: 700, fontSize: 14, letterSpacing: '3px', color: GOLD }}
          >
            {eyebrow || t('common.biGroup')}
          </p>
          <h1
            className="text-[34px] sm:text-[48px]"
            style={{ fontWeight: 700, lineHeight: 1.2, color: '#ffffff', maxWidth: 800 }}
          >
            {title}
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: 'rgba(255,255,255,0.8)', maxWidth: 620 }}>
            {description || t('skeleton.defaultDescription')}
          </p>
        </div>
      </section>

      {/* Planned sections */}
      <section
        style={{ background: '#f9fafb', borderBottom: BORDER, paddingTop: 80, paddingBottom: 80 }}
      >
        <div className="flex flex-col items-center px-6 sm:px-10 lg:px-35" style={{ gap: 40 }}>
          <div className="flex flex-col items-center text-center" style={{ gap: 12, maxWidth: 640 }}>
            <h2 style={{ fontWeight: 700, fontSize: 30, color: INK }}>{t('skeleton.comingSoon')}</h2>
            <p style={{ fontSize: 16, color: '#6b7280' }}>
              {t('skeleton.comingSoonText')}
            </p>
          </div>

          {sections.length > 0 && (
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full"
              style={{ gap: 24 }}
            >
              {sections.map((label, i) => (
                <div
                  key={label}
                  className="flex flex-col items-start bg-white"
                  style={{ gap: 16, padding: 28, borderRadius: 12, border: BORDER }}
                >
                  <span style={{ fontWeight: 800, fontSize: 28, color: 'rgba(200,150,62,0.3)' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 style={{ fontWeight: 700, fontSize: 20, color: INK }}>{label}</h3>
                  <div className="w-full flex flex-col" style={{ gap: 8 }} aria-hidden="true">
                    <span className="block h-2.5 rounded bg-black/5 w-full" />
                    <span className="block h-2.5 rounded bg-black/5 w-4/5" />
                  </div>
                </div>
              ))}
            </div>
          )}

          <a
            href="/"
            className="inline-flex items-center hover:opacity-90"
            style={{ gap: 8, background: GOLD, padding: '12px 28px', borderRadius: 24 }}
          >
            <span className="font-inter" style={{ fontWeight: 700, fontSize: 14, color: '#ffffff' }}>
              {t('common.backToHome')}
            </span>
            <ArrowRight size={16} color="#ffffff" />
          </a>
        </div>
      </section>
    </>
  );
}
