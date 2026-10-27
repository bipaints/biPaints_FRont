import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustMetrics from './components/TrustMetrics';
import ImpactVision from './components/ImpactVision';
import FeatureCards from './components/FeatureCards';
import BusinessPortfolio from './components/BusinessPortfolio';
import KitchenShowcase from './components/KitchenShowcase';
import SustainabilityBanner from './components/SustainabilityBanner';
import Partners from './components/Partners';
import NewsInsights from './components/NewsInsights';
import CareerBanner from './components/CareerBanner';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';

/**
 * BI Paints & Group Main Application
 * 
 * Supports seamless lightweight routing between:
 * - Homepage ('/' or default)
 * - About Page ('/about' or '#about')
 * 
 * Features:
 * - Direct URL loading (e.g. visiting /about renders About page directly)
 * - History pushState and popstate event support (browser Back & Forward)
 * - Smooth scroll-to-top on route change
 * - Preserves all existing homepage sections without breaking dependencies
 */
function App() {
  // Normalize current pathname and detect route
  const getInitialRoute = () => {
    if (typeof window === 'undefined') return '/';
    const path = window.location.pathname.toLowerCase().replace(/\/$/, '') || '/';
    if (path === '/about' || window.location.hash === '#about') {
      return '/about';
    }
    return path;
  };

  const [currentRoute, setCurrentRoute] = useState(getInitialRoute);

  useEffect(() => {
    // Sync route on popstate (browser back/forward button clicks)
    const handlePopState = () => {
      const path = window.location.pathname.toLowerCase().replace(/\/$/, '') || '/';
      if (path === '/about' || window.location.hash === '#about') {
        setCurrentRoute('/about');
      } else {
        setCurrentRoute(path);
      }
    };

    // Helper function for offset smooth scrolling without navbar occlusion
    const scrollToTarget = (targetId) => {
      if (!targetId) return;
      const el = document.getElementById(targetId);
      if (!el) return;
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 70;
      const targetPadding = 10;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      const targetScrollTop = Math.max(0, elementPosition - headerHeight - targetPadding);

      window.scrollTo({
        top: targetScrollTop,
        behavior: 'smooth',
      });
    };

    // Global click listener to intercept internal client-side navigation
    const handleDocumentClick = (e) => {
      const anchor = e.target.closest('a');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (!href) return;

      // Handle About route
      if (href === '/about' || href === '/about/') {
        e.preventDefault();
        if (window.location.pathname !== '/about') {
          window.history.pushState(null, '', '/about');
        }
        setCurrentRoute('/about');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } 
      // Handle About sub-section anchors (e.g. /about#who-we-are, /about#journey)
      else if (href.startsWith('/about#')) {
        e.preventDefault();
        const targetId = href.split('#')[1];
        if (currentRoute !== '/about') {
          window.history.pushState(null, '', '/about');
          setCurrentRoute('/about');
          setTimeout(() => {
            scrollToTarget(targetId);
          }, 150);
        } else {
          scrollToTarget(targetId);
        }
      }
      // Handle Home route
      else if (href === '/') {
        e.preventDefault();
        if (window.location.pathname !== '/') {
          window.history.pushState(null, '', '/');
        }
        setCurrentRoute('/');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      // Handle internal section anchors (#about, #businesses, #kitchens, #sustainability, #investors, #news, #foundation, #ecommerce, #careers, #contact)
      else if (href.startsWith('#')) {
        const targetId = href.slice(1);
        if (currentRoute === '/about') {
          e.preventDefault();
          if (window.location.pathname !== '/') {
            window.history.pushState(null, '', '/');
          }
          setCurrentRoute('/');
          setTimeout(() => {
            scrollToTarget(targetId);
          }, 150);
        } else {
          e.preventDefault();
          scrollToTarget(targetId);
        }
      }
    };

    // Scroll to target section if initial URL has hash
    if (window.location.hash) {
      const hashId = window.location.hash.slice(1);
      setTimeout(() => {
        scrollToTarget(hashId);
      }, 150);
    } else if (window.location.pathname === '/contact') {
      setTimeout(() => {
        scrollToTarget('contact');
      }, 150);
    }

    window.addEventListener('popstate', handlePopState);
    document.addEventListener('click', handleDocumentClick);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [currentRoute]);

  const isAboutPage = currentRoute === '/about';

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0f1f3d]">
      {/* 1. Fixed Top Navigation Bar */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1">
        {isAboutPage ? (
          /* About Page Flow (Recreated 1:1 matching bipaints.netlify.app/about) */
          <AboutPage />
        ) : (
          /* Homepage Flow */
          <>
            {/* 2. Hero Section: Functional high-res photo carousel with dual CTAs */}
            <Hero />


            {/* 4. Company Vision & Reach: "Creating Excellence" with skyline illustration */}
            <ImpactVision />
            
            {/* 3. Trust & Credibility Metrics: Key operational statistics */}
            <TrustMetrics />

            {/* 5. Solutions Feature Cards: 3 core service pillars */}
            <FeatureCards />

            {/* 6. Multi-Industry Portfolio: 6 core verticals with image hover cards */}
            <BusinessPortfolio />

            {/* 7. Signature Living Showcase: BI Modular Kitchens & Interiors */}
            <KitchenShowcase />

            {/* 8. Sustainability Commitment: Ocean gradient & environmental certifications */}
            <SustainabilityBanner />

            {/* 9. Institutional Validation: Trusted enterprise client logos */}
            <Partners />

            {/* 10. News & Case Studies: Recent engineering & coating milestones */}
            <NewsInsights />

            {/* 11. Career Banner: Team culture & hiring invitations */}
            <CareerBanner />
          </>
        )}
      </main>

      {/* Corporate Footer with Newsletter Subscription, Directory & Legal Bar */}
      <Footer />
    </div>
  );
}

export default App;
