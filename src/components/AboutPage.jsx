import React, { useEffect } from 'react';
import AboutHero from './about/AboutHero';
import AboutCompany from './about/AboutCompany';
import AboutChairman from './about/AboutChairman';
import AboutJourney from './about/AboutJourney';
import AboutValues from './about/AboutValues';
import AboutSustainability from './about/AboutSustainability';

/**
 * AboutPage Component
 * 1:1 Accurate React & Tailwind CSS recreation of https://bipaints.netlify.app/about
 * 
 * Flow & Structure:
 * 1. Hero: "About BI Group" with factory floor team banner (/about-hero-2.jpg)
 * 2. Who We Are: Group narrative, rotated photo collage, floating badge & 4 animated stats
 * 3. Chairman's Message: Bhikam Jain's quote and portrait (/about-chairman.jpg)
 * 4. Our Journey: Split building showcase (/about-journey-building.jpg) & 2012–2026 timeline
 * 5. Vision, Mission & Values: 3 distinct cards with custom icon badges
 * 6. Commitment to Sustainability: Green future features with eco-factory imagery (/about-eco-factory.jpg)
 */
function AboutPage() {
  useEffect(() => {
    // Set matching page title
    document.title = 'About BI Group – Engineering Solutions Built To Last';
    // Scroll to top on page mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-white text-[#0f1f3d]">
      {/* 1. Hero Banner */}
      <AboutHero />

      {/* 2. Who We Are & 4 Statistics Cards */}
      <AboutCompany />

      {/* 3. Chairman Bhikam Jain's Message */}
      <AboutChairman />

      {/* 4. Our Journey & 2012–2026 Timeline Teaser */}
      <AboutJourney />

      {/* 5. Vision, Mission & Values 3-Pillar Cards */}
      <AboutValues />

      {/* 6. Commitment to Sustainability */}
      <AboutSustainability />
    </div>
  );
}

export default AboutPage;
export {
  AboutHero,
  AboutCompany,
  AboutChairman,
  AboutJourney,
  AboutValues,
  AboutSustainability,
};
