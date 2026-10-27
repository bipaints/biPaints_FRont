import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Search } from 'lucide-react';

/**
 * Header / Navbar Component
 * Clean, well-aligned navigation bar using standard React and Tailwind CSS.
 * 
 * Features:
 * - Click and hover dropdown menus for items with submenus (e.g. About Us)
 * - Clicking "About Us" in navbar opens the dropdown menu
 * - Clicking "Overview" inside the dropdown navigates to /about and renders the About page
 * - Click outside detection to auto-close dropdowns
 * - Responsive mobile menu drawer with collapsible submenus
 */
function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const navRef = useRef(null);

  // Add subtle shadow when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
 
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Navigation menu items
  const navItems = [
    {
      label: 'About Us',
      href: '#about',
      submenu: [
        { label: 'Overview', href: '/about' },
        { label: 'What We Do', href: '/about#who-we-are' },
        { label: 'Where We Are', href: '/about#states' },
        { label: 'Our Achievements', href: '/about#achievements' },
        { label: 'Our Journey', href: '/about#journey' },
      ],
    },
    {
      label: 'Businesses',
      href: '#businesses',
      submenu: [
        { label: 'BI Paints & Coatings', href: '#businesses' },
        { label: 'BI Modular Kitchen', href: '#kitchens' },
        { label: 'BI Electronics', href: '#businesses' },
        { label: 'BI Homeopathic', href: '#businesses' },
        { label: 'BI Agriculture', href: '#businesses' },
        { label: 'BI Engineering', href: '#businesses' },
      ],
    },
    { label: 'Sustainability', href: '#sustainability' },
    {
      label: 'Investors',
      href: '#investors',
      submenu: [
        { label: 'Financial Reports', href: '#investors' },
        { label: 'Annual Reports', href: '#investors' },
        { label: 'Investor Relations', href: '#investors' },
      ],
    },
    {
      label: 'Newsroom',
      href: '#news',
      submenu: [
        { label: 'Press Releases', href: '#news' },
        { label: 'Media Coverage', href: '#news' },
        { label: 'Events', href: '#news' },
      ],
    },
    { label: 'BI Foundation', href: '#foundation' },
    { label: 'E-Commerce', href: '#ecommerce' },
    { label: 'Careers', href: '#careers' },
  ];

  return (
   <header
  ref={navRef}
  className={`fixed top-0 left-0 right-0 z-50 bg-white relative transition-all duration-200 h-[70px] ${
    isScrolled
      ? "shadow-sm border-b border-gray-200"
      : "border-b border-gray-100"
  }`}
>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full absolute left-0 w-full">
        <div className="flex items-center justify-between h-full">
          
          {/* Left: Company Logo */}
          <a href="/" className="flex-shrink-0 flex items-center pr-2">
            <img
              src="/bi-logo.svg"
              alt="BI Group Logo"
              className="h-[30px] max-h-[30px] max-w-[calc(100vw-120px)] sm:max-w-none w-auto object-contain transition-all duration-200"
            />
          </a>

          {/* Center / Right: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 2xl:gap-1.5">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.submenu && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  onClick={() => {
                    setActiveDropdown(null);
                  }}
                  className="flex items-center gap-0.5 font-google-sans text-[11px] xl:text-[11.5px] 2xl:text-[12px] font-semibold uppercase tracking-wide text-[#0f1f3d] hover:text-[#c8963e] px-1.5 xl:px-2 py-1 rounded transition-colors duration-200 whitespace-nowrap cursor-pointer select-none"
                >
                  {item.label}
                  {item.submenu && (
                    <ChevronDown
                      size={10}
                      className={`transition-transform duration-200 ${
                        activeDropdown === item.label ? 'rotate-180 text-[#c8963e]' : ''
                      }`}
                    />
                  )}
                </a>

                {/* Dropdown Menu */}
                {item.submenu && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-1 z-50">
                    <div className="w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-1">
                      {item.submenu.map((sub) => {
                        const subLabel = typeof sub === 'string' ? sub : sub.label;
                        const subHref = typeof sub === 'string' ? item.href : sub.href;
                        return (
                          <a
                            key={subLabel}
                            href={subHref}
                            onClick={() => {
                              setActiveDropdown(null);
                            }}
                            className="block px-3 py-1 font-google-sans text-xs text-gray-700 hover:text-[#c8963e] hover:bg-amber-50/40 font-medium transition-colors cursor-pointer"
                          >
                            {subLabel}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Language Selector */}
            <button className="flex items-center gap-0.5 font-google-sans text-[11px] xl:text-[11.5px] 2xl:text-[12px] font-semibold uppercase text-[#0f1f3d] hover:text-[#c8963e] px-1.5 py-1 transition-colors duration-200 cursor-pointer">
              <span>Eng</span>
              <ChevronDown size={10} />
            </button>

            {/* Search Icon & Dropdown Input */}
            <div className="relative">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                aria-label="Toggle Search"
                className="text-[#0f1f3d] hover:text-[#c8963e] p-1.5 transition-colors duration-200 cursor-pointer flex items-center"
              >
                <Search size={15} />
              </button>

              {searchOpen && (
                <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 p-2 z-50">
                  <input
                    type="text"
                    placeholder="Search BI Group..."
                    className="w-full px-2.5 py-1.5 font-google-sans text-xs border border-gray-300 rounded focus:outline-none focus:border-[#c8963e]"
                    autoFocus
                  />
                </div>
              )}
            </div>

            {/* Contact Us Button */}
            <a
              href="#contact"
              className="font-google-sans text-[11px] xl:text-[11.5px] 2xl:text-[12px] font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-[#c8963e] text-[#0f1f3d] hover:bg-[#c8963e] hover:text-[#0f1f3d] transition-all duration-200 whitespace-nowrap cursor-pointer select-none ml-1"
            >
              Contact Us
            </a>
          </nav>

          {/* Mobile Right Controls: Search & Hamburger Button */}
          <div className="flex lg:hidden items-center gap-1">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Search"
              className="text-[#0f1f3d] p-1.5 hover:text-[#c8963e] transition-colors duration-200"
            >
              <Search size={18} />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              className="p-1.5 text-[#0f1f3d] hover:text-[#c8963e] transition-colors duration-200"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar Dropdown */}
      {searchOpen && (
        <div className="lg:hidden px-4 pb-2 bg-white border-b border-gray-100">
          <input
            type="text"
            placeholder="Search BI Group..."
            className="w-full px-3 py-1.5 text-xs border border-gray-300 rounded-md focus:outline-none focus:border-[#1a5276]"
            autoFocus
          />
        </div>
      )}

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-3 shadow-xl max-h-[calc(100vh-70px)] overflow-y-auto space-y-1">
          {navItems.map((item) => (
            <div key={item.label} className="border-b border-gray-100 pb-1">
              <div className="flex items-center justify-between">
                <a
                  href={item.href}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setActiveDropdown(null);
                  }}
                  className="block font-google-sans text-xs font-semibold uppercase tracking-wide text-[#0f1f3d] hover:text-[#c8963e] py-1 transition-colors duration-200 cursor-pointer flex-1"
                >
                  {item.label}
                </a>
                {item.submenu && (
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                    className="p-1 text-gray-500 hover:text-[#c8963e] transition-colors"
                    aria-label={`Toggle ${item.label} submenu`}
                  >
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        activeDropdown === item.label ? 'rotate-180 text-[#c8963e]' : ''
                      }`}
                    />
                  </button>
                )}
              </div>
              {item.submenu && activeDropdown === item.label && (
                <div className="pl-3 mt-0.5 space-y-0.5 pb-0.5">
                  {item.submenu.map((sub) => {
                    const subLabel = typeof sub === 'string' ? sub : sub.label;
                    const subHref = typeof sub === 'string' ? item.href : sub.href;
                    return (
                      <a
                        key={subLabel}
                        href={subHref}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setActiveDropdown(null);
                        }}
                        className="block font-google-sans text-[11px] text-gray-600 hover:text-[#c8963e] py-0.5 transition-colors duration-150 cursor-pointer"
                      >
                        {subLabel}
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          ))}

          {/* Mobile Language Button */}
          <div className="pt-1.5 flex items-center gap-2 font-google-sans text-xs font-semibold uppercase text-[#0f1f3d]">
            <span>Language:</span>
            <span className="text-[#c8963e]">English</span>
          </div>

          
        </div>
      )}
    </header>
  );
}

export default Header;
