/**
 * Investors.jsx — /investors
 *
 * Skeleton page — linked from the navigation, full content to be built later.
 * Text lives in src/locales (skeleton.pages.investors).
 */

import React from 'react';
import UnderDevelopment from '../components/UnderDevelopment';
import { useLanguage } from '../context/LanguageContext';

export default function Investors() {
  const { t } = useLanguage();
  const page = t('skeleton.pages.investors');

  return (
    <UnderDevelopment
      pageTitle={page.pageTitle}
      eyebrow={page.eyebrow}
      title={page.title}
      description={page.description}
      sections={page.sections}
    />
  );
}
