import React from 'react';

/**
 * AboutHero Component
 * Full-width hero section matching bipaints.netlify.app/about
 * 
 * Features:
 * - Height: 566px on desktop (responsive on tablet/mobile)
 * - Background Image: /about-hero-2.jpg with dark contrast overlay (rgba(0,0,0,0.15))
 * - Heading: "About BI Group" centered in PT Serif font (48px)
 */
function AboutHero() {
  return (
    <section className="font-inter pt-11 scroll-mt-14">
      <div className="relative w-full overflow-hidden h-[200px] sm:h-[250px] lg:h-[290px]">
        {/* Background Image Container */}
        <div className="absolute inset-0">
          <img
            src="/about-hero-2.jpg"
            alt="BI Group team on the factory floor"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          {/* Subtle dark overlay for optimal text contrast */}
          <div
            className="absolute inset-0"
            style={{ background: 'rgba(0, 0, 0, 0.15)' }}
          />
        </div>

        {/* Hero Title */}
        <h1
          className="relative h-full flex items-center justify-center text-center font-serif text-2xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-wide drop-shadow-sm px-4"
          style={{ lineHeight: 1.1 }}
        >
          About BI Group
        </h1>
      </div>
    </section>
  );
}

export default AboutHero;
