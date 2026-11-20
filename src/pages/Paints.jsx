/**
 * Paints.jsx — /products/paints
 *
 * Skeleton page — linked from the navigation, full content to be built later.
 * Text lives in src/locales (skeleton.pages.paints).
 */

import React from 'react';
import UnderDevelopment from '../components/UnderDevelopment';
import { useLanguage } from '../context/LanguageContext';

export default function Paints() {
  const { t } = useLanguage();
  const page = t('skeleton.pages.paints');

  return (
    <UnderDevelopment
      pageTitle={page.pageTitle}
      eyebrow={page.eyebrow}
      title={page.title}
      description={page.description}
      sections={page.sections}
      image="/business-decorative.jpg"
    />
  );
}
