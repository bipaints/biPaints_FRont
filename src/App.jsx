import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ImpactVision from './components/ImpactVision';
import FeatureCards from './components/FeatureCards';
import BusinessPortfolio from './components/BusinessPortfolio';
import CareerBanner from './components/CareerBanner';
import KitchenShowcase from './components/KitchenShowcase';
import SustainabilityBanner from './components/SustainabilityBanner';
import NewsInsights from './components/NewsInsights';
import Partners from './components/Partners';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import WhatWeDo from './pages/WhatWeDo';
import WhereWeAre from './pages/WhereWeAre';
import Achievements from './pages/Achievements';
import Sustainability from './pages/Sustainability';
import BiFoundation from './pages/BiFoundation';
import Businesses from './pages/Businesses';
import Paints from './pages/Paints';
import Investors from './pages/Investors';
import Newsroom from './pages/Newsroom';
import ECommerce from './pages/ECommerce';
import Careers from './pages/Careers';
import { useLanguage } from './context/LanguageContext';

// Simple path → page routes (no hash/legacy handling needed).
const PAGE_ROUTES = {
  '/bi-foundation': BiFoundation,
  '/products': Businesses,
  '/businesses': Businesses, // alias — homepage "View All Businesses" links here
  '/products/paints': Paints,
  '/investors': Investors,
  '/newsroom': Newsroom,
  '/ecommerce': ECommerce,
  '/careers': Careers,
};

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
    if (path === '/about/achievements') {
      return '/about/achievements';
    }
    if (path === '/sustainability') {
      return '/sustainability';
    }
    if (path === '/about' || window.location.hash === '#about') {
      return '/about';
    }
    if (path === '/what-we-do' || window.location.hash === '#what-we-do') {
      return '/what-we-do';
    }
    if (path === '/where-we-are' || window.location.hash === '#where-we-are') {
      return '/where-we-are';
    }
    return path;
  };

  const [currentRoute, setCurrentRoute] = useState(getInitialRoute);
  const { t } = useLanguage();

  useEffect(() => {
    // Sync route on popstate (browser back/forward button clicks)
    const handlePopState = () => {
      const path = window.location.pathname.toLowerCase().replace(/\/$/, '') || '/';
      if (path === '/about/achievements') {
        setCurrentRoute('/about/achievements');
      } else if (path === '/sustainability') {
        setCurrentRoute('/sustainability');
      } else if (path === '/about' || window.location.hash === '#about') {
        setCurrentRoute('/about');
      } else if (path === '/what-we-do' || window.location.hash === '#what-we-do') {
        setCurrentRoute('/what-we-do');
      } else if (path === '/where-we-are' || window.location.hash === '#where-we-are') {
        setCurrentRoute('/where-we-are');
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
      const normalizedHref = href.length > 1 ? href.toLowerCase().replace(/\/$/, '') : href;

      // Handle simple page routes (BI Foundation, Businesses, Investors, etc.)
      if (PAGE_ROUTES[normalizedHref]) {
        e.preventDefault();
        if (window.location.pathname !== normalizedHref) {
          window.history.pushState(null, '', normalizedHref);
        }
        setCurrentRoute(normalizedHref);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      // Handle About Achievements route
      else
      if (href === '/about/achievements' || href === '/about/achievements/') {
        e.preventDefault();
        if (window.location.pathname !== '/about/achievements') {
          window.history.pushState(null, '', '/about/achievements');
        }
        setCurrentRoute('/about/achievements');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      // Handle Sustainability route
      else if (href === '/sustainability' || href === '/sustainability/') {
        e.preventDefault();
        if (window.location.pathname !== '/sustainability') {
          window.history.pushState(null, '', '/sustainability');
        }
        setCurrentRoute('/sustainability');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      // Handle Where We Are route
      else if (href === '/where-we-are' || href === '/where-we-are/') {
        e.preventDefault();
        if (window.location.pathname !== '/where-we-are') {
          window.history.pushState(null, '', '/where-we-are');
        }
        setCurrentRoute('/where-we-are');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      // Handle What We Do route
      else if (href === '/what-we-do' || href === '/what-we-do/') {
        e.preventDefault();
        if (window.location.pathname !== '/what-we-do') {
          window.history.pushState(null, '', '/what-we-do');
        }
        setCurrentRoute('/what-we-do');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      // Handle About route
      else if (href === '/about' || href === '/about/') {
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
        if (currentRoute === '/about' || currentRoute === '/what-we-do' || currentRoute === '/where-we-are' || currentRoute === '/about/achievements' || currentRoute === '/sustainability' || PAGE_ROUTES[currentRoute]) {
          // If target element is on the current page (e.g. #global-footprint), scroll to it directly
          const localEl = document.getElementById(targetId);
          if (localEl) {
            e.preventDefault();
            scrollToTarget(targetId);
            return;
          }
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
  const isWhatWeDoPage = currentRoute === '/what-we-do';
  const isWhereWeArePage = currentRoute === '/where-we-are';
  const isAchievementsPage = currentRoute === '/about/achievements';
  const isSustainabilityPage = currentRoute === '/sustainability';
  const RoutePage = PAGE_ROUTES[currentRoute];
  const isHomePage =
    !RoutePage && !isAboutPage && !isWhatWeDoPage && !isWhereWeArePage && !isAchievementsPage && !isSustainabilityPage;

  // Homepage document title follows the selected language (other pages set their own)
  useEffect(() => {
    if (isHomePage) document.title = t('meta.siteTitle');
  }, [isHomePage, t]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0f1f3d]">
      {/* 1. Fixed Top Navigation Bar */}
      <Header currentRoute={currentRoute} />

      {/* Main Content Area */}
      <main className="flex-1">
        {RoutePage ? (
          /* Simple page routes (/bi-foundation, /products, /investors, ...) */
          <RoutePage />
        ) : isAchievementsPage ? (
          /* Achievements Page Flow (/about/achievements) */
          <Achievements />
        ) : isSustainabilityPage ? (
          /* Sustainability Page Flow (/sustainability) */
          <Sustainability />
        ) : isWhereWeArePage ? (
          /* Where We Are Page Flow (Recreated 1:1 matching bipaints.netlify.app/where-we-are) */
          <WhereWeAre />
        ) : isWhatWeDoPage ? (
          /* What We Do Page Flow (Recreated 1:1 matching bipaints.netlify.app/what-we-do) */
          <WhatWeDo />
        ) : isAboutPage ? (
          /* About Page Flow (Recreated 1:1 matching bipaints.netlify.app/about) */
          <AboutPage />
        ) : (
          /* Homepage Flow - Exactly matching biGroup upstream/main & bipaints.netlify.app */
          <>
            {/* 1. Hero Carousel */}
            <Hero />

            {/* 2. Impact & Vision */}
            <ImpactVision />

            {/* 3. Feature Cards Solutions */}
            <FeatureCards />

            {/* 4. Business Portfolio Grid */}
            <BusinessPortfolio />

            {/* 5. Career Banner */}
            <CareerBanner />

            {/* 6. Modular Kitchen Showcase */}
            <KitchenShowcase />

            {/* 7. Sustainability Banner */}
            <SustainabilityBanner />

            {/* 8. News & Insights */}
            <NewsInsights />

            {/* 9. Trusted Partners */}
            <Partners />
          </>
        )}
      </main>

      {/* Corporate Footer with Newsletter Subscription, Directory & Legal Bar */}
      <Footer />
    </div>
  );
}

export default App;

