import React, { Fragment, useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ChevronRight, ArrowRight, ExternalLink, Search } from "lucide-react";
import { EASE_OUT } from "../lib/motion";

const ABOUT_LINKS = [
  { label: "Overview", href: "/" },
  { label: "Group Profile", href: "/about" },
  { label: "Vision & Values", href: "/about" },
  { label: "History", href: "/about" },
  { label: "Awards", href: "/about" },
  { label: "Leadership", href: "/about" },
  { label: "Spotlight", href: "/about" },
  { label: "CSR", href: "/about" },
];

const ABOUT_MEGA_MENU = {
  links: [
    { label: "Overview", href: "/" },
    { label: "What We Do", href: "/about#who-we-are" },
    { label: "Where We Are", href: "/about#states" },
    { label: "Our Achievements", href: "/about#achievements" },
    { label: "Our Journey", href: "/about#journey" },
  ],
  primaryLink: { label: "About BiGroup", href: "/about" },
  secondaryLinks: [
    { label: "About BiGroup", href: "/about" },
    { label: "Media Centre", href: "/newsroom" },
    { label: "Financial & Annual Reports", href: "/investors" },
  ],
  feature: {
    title: "Where We Are",
    description:
      "From manufacturing hubs to distribution networks across India, BI Group's footprint spans the industries and regions that keep the country building, moving, and protected.",
    image: "/about-mega-warehouse.jpg",
    cta: { label: "Discover more", href: "/about#states" },
  },
  banner: {
    title: "Looking for paint and colour for your home?",
    cta: { label: "Go to the decorative website", href: "/products/paints" },
    image: "/about-mega-home-interior.jpg",
  },
};

const BUSINESS_LINKS = [
  { label: "HVAC Systems", href: "/products" },
  { label: "Electronics & Home Appliances", href: "/products" },
  { label: "Modular Kitchen", href: "/products" },
  { label: "Paints", href: "/products/paints" },
];

const BUSINESS_MEGA_COLUMNS = [
  [
    {
      category: "BI Paints & Color Coating",
      href: "/products/paints",
      links: ["Interior Paints", "Exterior Paints", "Industrial Coatings", "Wood Finishes", "Waterproofing Solutions"],
    },
    {
      category: "BI Painting Solution",
      href: "/products/paints",
      links: ["Residential Painting", "Commercial Projects", "Texture & Decorative"],
    },
  ],
  [
    {
      category: "BI Modular Kitchen",
      href: "/products",
      links: ["L-Shape Kitchen", "U-Shape Kitchen", "Island Kitchen", "Wardrobe Solutions", "Storage Systems"],
    },
    {
      category: "BI Air Conditioner",
      href: "/products",
      links: ["Split AC", "Window AC", "Commercial HVAC"],
    },
  ],
  [
    {
      category: "BI Agriculture",
      href: "/products",
      links: ["Crop Protection", "Seeds & Fertilizers", "Farm Equipment", "Agri Logistics"],
    },
    {
      category: "BI Homeopathy",
      href: "/products",
      links: ["Clinical Care", "Wellness Products", "Research & Development"],
    },
  ],
  [
    {
      category: "BI Clothes",
      href: "/products",
      links: ["Men's Wear", "Women's Wear", "Kids Collection", "Ethnic Wear"],
    },
    {
      category: "BI E-commerce",
      href: "/ecommerce",
      links: ["Online Marketplace", "B2B Portal", "Delivery Network"],
    },
  ],
  [
    {
      category: "BI Electronics",
      href: "/products",
      links: ["Home Appliances", "Smart Devices", "Audio & Visual"],
    },
    {
      category: "BI Engineering",
      href: "/products",
      links: ["Structural Fabrication", "Industrial Projects", "Infrastructure", "MEP Services"],
    },
  ],
];

const INVESTOR_LINKS = [
  { label: "Financial Reports", href: "/investors" },
  { label: "Annual Reports", href: "/investors" },
  { label: "Investor Relations", href: "/investors" },
];

const NEWSROOM_LINKS = [
  { label: "Press Releases", href: "/newsroom" },
  { label: "Media Coverage", href: "/newsroom" },
  { label: "Events", href: "/newsroom" },
];

const LANGUAGES = ["English"];

const NAV_TEXT_STYLE = {
  fontSize: 14,
  lineHeight: "16.8px",
  fontWeight: 700,
  transition: "color 0.2s ease-in-out",
};

const NAV_ITEMS = [
  { key: "about", label: "About Us", href: "/about", dropdown: ABOUT_LINKS },
  { key: "businesses", label: "Businesses", href: "/products", dropdown: null },
  { key: "sustainability", label: "Sustainability", href: "/sustainability", dropdown: null },
  { key: "investors", label: "Investors", href: "/investors", dropdown: INVESTOR_LINKS },
  { key: "newsroom", label: "Newsroom", href: "/newsroom", dropdown: NEWSROOM_LINKS },
  { key: "foundation", label: "BI Foundation", href: "/bi-foundation", dropdown: null },
  { key: "ecommerce", label: "E-Commerce", href: "/ecommerce", dropdown: null },
  { key: "careers", label: "Careers", href: "/careers", dropdown: null },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [langOpen, setLangOpen] = useState(false);
  const [lang, setLang] = useState(LANGUAGES[0]);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const closeTimer = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const open = (key) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(key);
  };
  const close = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 150);
  };
  const closeDropdown = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(null);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white"
      style={{
        boxShadow: scrolled ? "0px 2px 10px rgba(0,0,0,0.08)" : "0px 1px 0px rgba(0,0,0,0.06)",
        transition: "box-shadow 0.25s ease-in-out",
      }}
    >
      {/* Backdrop for Mega Menus */}
      <AnimatePresence>
        {(openDropdown === "about" || openDropdown === "businesses") && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE_OUT }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm"
            style={{ zIndex: -1 }}
            onClick={() => setOpenDropdown(null)}
          />
        )}
      </AnimatePresence>

      {/* ── Desktop ── */}
      <div className="hidden xl:flex items-center justify-between px-15 h-18 mx-auto w-full relative z-10 bg-white">
        <a href="/" className="shrink-0" onClick={closeDropdown}>
          <img
            src="/bi-logo.svg"
            alt="BI Group"
            style={{ height: 35, width: "auto", maxWidth: 1600 }}
          />
        </a>

        <nav className="flex items-center gap-5.75 2xl:gap-9.75">
          {NAV_ITEMS.map((item) => (
            <div
              key={item.key}
              className="relative"
              onMouseEnter={item.dropdown ? () => open(item.key) : undefined}
              onMouseLeave={item.dropdown ? close : undefined}
            >
              <a
                href={item.href}
                onClick={closeDropdown}
                className="flex items-center gap-1 uppercase whitespace-nowrap text-black hover:text-brand"
                style={NAV_TEXT_STYLE}
              >
                {item.label}
                {item.dropdown && (
                  <ChevronDown
                    size={13}
                    className={`transition-transform duration-300 ${openDropdown === item.key ? "rotate-180" : ""}`}
                  />
                )}
              </a>

              {/* Standard Dropdown (Investors, Newsroom) */}
              {item.dropdown && item.key !== "about" && item.key !== "businesses" && (
                <AnimatePresence>
                  {openDropdown === item.key && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.35, ease: EASE_OUT }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 rounded-2xl bg-white p-2 border border-black/5"
                      style={{ boxShadow: "0 24px 48px -12px rgba(15,31,61,0.2)" }}
                    >
                      {item.dropdown.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.href}
                          onClick={closeDropdown}
                          className="block px-4 py-2.5 rounded-xl text-small font-medium text-ink-dark/85 hover:bg-brand/5 hover:text-brand"
                          style={{ transition: "all 0.15s ease-out" }}
                        >
                          {sub.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}

          {/* "About Us" Mega-Menu */}
          <AnimatePresence>
            {openDropdown === "about" && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.98 }}
                transition={{ duration: 0.35, ease: EASE_OUT }}
                onMouseEnter={() => open("about")}
                onMouseLeave={close}
                className="absolute left-0 right-0 top-full bg-white border-t border-black/5 overflow-hidden"
                style={{ boxShadow: "0 24px 48px -12px rgba(15,31,61,0.15)" }}
              >
                <div className="grid grid-cols-[200px_820px_1fr]" style={{ gap: 56, padding: "40px 140px" }}>
                  <div className="flex flex-col items-start">
                    {ABOUT_MEGA_MENU.links.map((l) => (
                      <a
                        key={l.label}
                        href={l.href}
                        onClick={closeDropdown}
                        className="hover:text-brand text-gray-600"
                        style={{
                          fontSize: 16,
                          fontWeight: 500,
                          lineHeight: "42px",
                          letterSpacing: "-0.176px",
                          transition: "color 0.2s ease-in-out",
                        }}
                      >
                        {l.label}
                      </a>
                    ))}
                    <a
                      href={ABOUT_MEGA_MENU.primaryLink.href}
                      onClick={closeDropdown}
                      className="group inline-flex items-center hover:text-brand text-gray-800"
                      style={{ gap: 10, marginTop: 16 }}
                    >
                      <span
                        className="flex items-center justify-center shrink-0"
                        style={{ width: 17, height: 17, borderRadius: 2, background: "#05297c" }}
                      >
                        <ArrowRight size={13} className="text-white" />
                      </span>
                      <span style={{ fontSize: 14, fontWeight: 600, color: "rgba(0,0,0,0.75)", letterSpacing: "-0.176px" }}>
                        {ABOUT_MEGA_MENU.primaryLink.label}
                      </span>
                    </a>
                  </div>

                  <div className="flex flex-col justify-self-center">
                    {ABOUT_MEGA_MENU.secondaryLinks.map((l) => (
                      <a
                        key={l.label}
                        href={l.href}
                        onClick={closeDropdown}
                        className="group flex items-center hover:text-brand justify-between"
                        style={{ gap: 20, padding: "17px 0" }}
                      >
                        <span className="text-gray-800 uppercase text-lg" style={{ letterSpacing: "-0.176px" }}>
                          {l.label}
                        </span>
                        <ChevronRight
                          size={14}
                          className="shrink-0 text-black/40 transition-transform duration-200 group-hover:translate-x-1"
                        />
                      </a>
                    ))}
                  </div>

                  <div className="flex flex-col" style={{ gap: 16, maxWidth: 460, justifySelf: "end" }}>
                    <div className="relative w-full overflow-hidden" style={{ aspectRatio: "594 / 364", borderRadius: 12 }}>
                      <img
                        src={ABOUT_MEGA_MENU.feature.image}
                        alt={ABOUT_MEGA_MENU.feature.title}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <h3 style={{ fontWeight: 600, fontSize: 20, color: "rgba(0,0,0,0.75)", letterSpacing: "-0.176px" }}>
                      {ABOUT_MEGA_MENU.feature.title}
                    </h3>
                    <p style={{ fontSize: 14, lineHeight: "22px", color: "rgba(0,0,0,0.75)" }}>
                      {ABOUT_MEGA_MENU.feature.description}
                    </p>
                    <a
                      href={ABOUT_MEGA_MENU.feature.cta.href}
                      onClick={closeDropdown}
                      className="group inline-flex items-center w-fit hover:text-brand"
                      style={{ gap: 10 }}
                    >
                      <span
                        className="flex items-center justify-center shrink-0"
                        style={{ width: 17, height: 17, borderRadius: 2, background: "#05297c" }}
                      >
                        <ArrowRight size={13} className="text-white" />
                      </span>
                      <span style={{ fontSize: 14, fontWeight: 600, color: "rgba(0,0,0,0.75)", letterSpacing: "-0.176px" }}>
                        {ABOUT_MEGA_MENU.feature.cta.label}
                      </span>
                    </a>
                  </div>
                </div>

                <div style={{ gap: 56, padding: "40px 140px" }}>
                  <div className="flex items-center" style={{ gap: 20, background: "#05297c", padding: 10 }}>
                    <div className="relative shrink-0 overflow-hidden" style={{ width: 100, height: 62, borderRadius: 8 }}>
                      <img
                        src={ABOUT_MEGA_MENU.banner.image}
                        alt="Paint and colour for your home"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="flex flex-col" style={{ gap: 6 }}>
                      <p style={{ fontSize: 16, color: "#ffffff", margin: 0, letterSpacing: "-0.176px" }}>
                        {ABOUT_MEGA_MENU.banner.title}
                      </p>
                      <a
                        href={ABOUT_MEGA_MENU.banner.cta.href}
                        onClick={closeDropdown}
                        className="group inline-flex items-center w-fit"
                        style={{ gap: 8 }}
                      >
                        <span
                          className="flex items-center justify-center shrink-0 bg-white"
                          style={{ width: 20, height: 20, borderRadius: 4 }}
                        >
                          <ExternalLink size={11} className="text-[#05297c]" />
                        </span>
                        <span style={{ fontWeight: 600, fontSize: 14, color: "#ffffff" }}>
                          {ABOUT_MEGA_MENU.banner.cta.label}
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* "Businesses" Mega-Menu */}
          {/* <AnimatePresence>
            {openDropdown === "businesses" && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.98 }}
                transition={{ duration: 0.35, ease: EASE_OUT }}
                onMouseEnter={() => open("businesses")}
                onMouseLeave={close}
                className="absolute left-0 right-0 top-full bg-white border-t border-black/5 overflow-hidden"
                style={{ boxShadow: "0 24px 48px -12px rgba(15,31,61,0.15)" }}
              > */}
                {/* <div
                  className="grid grid-cols-5"
                  style={{
                    padding: "48px 140px",
                    columnGap: 56,
                    borderBottom: "1px solid rgba(0,0,0,0.06)",
                  }}
                > */}
                  {/* {BUSINESS_MEGA_COLUMNS.map((column, colIdx) => (
                    <Fragment key={colIdx}>
                      {column.map((group) => (
                        <Fragment key={group.category}>
                          <div className="flex flex-col" style={{ gap: 8, marginBottom: 28 }}>
                            <a
                              href={group.href}
                              onClick={closeDropdown}
                              className="font-bold hover:text-brand text-gray-800"
                              style={{
                                fontSize: 15,
                                color: "#0f1f3d",
                                borderBottom: "2px solid #c8963e",
                                paddingBottom: 6,
                                width: "fit-content",
                                transition: "color 0.2s ease-in-out",
                              }}
                            >
                              {group.category}
                            </a>
                            {group.links.map((label) => (
                              <a
                                key={label}
                                href={group.href}
                                onClick={closeDropdown}
                                className="hover:text-brand text-gray-600"
                                style={{
                                  fontSize: 13,
                                  lineHeight: "24px",
                                  transition: "color 0.15s ease-in-out",
                                }}
                              >
                                {label}
                              </a>
                            ))}
                          </div>
                        </Fragment>
                      ))}
                    </Fragment>
                  ))} */}
                {/* </div>
              </motion.div>
            )}
          </AnimatePresence> */}

          {/* Language Switcher */}
          <div className="relative" onMouseEnter={() => setLangOpen(true)} onMouseLeave={() => setLangOpen(false)}>
            <button className="flex items-center gap-1 uppercase whitespace-nowrap text-black hover:text-brand" style={NAV_TEXT_STYLE}>
              {lang === "English" ? "Eng" : lang}
              <ChevronDown size={13} className={`transition-transform duration-300 ${langOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: EASE_OUT }}
                  className="absolute top-full right-0 mt-4 w-32 rounded-2xl bg-white p-2 border border-black/5"
                  style={{ boxShadow: "0 24px 48px -12px rgba(15,31,61,0.2)" }}
                >
                  {LANGUAGES.map((l) => (
                    <button
                      key={l}
                      onClick={() => { setLang(l); setLangOpen(false); }}
                      className="block w-full text-left px-4 py-2.5 rounded-xl text-small font-medium text-ink-dark/85 hover:bg-brand/5 hover:text-brand"
                      style={{ transition: "all 0.15s ease-out" }}
                    >
                      {l}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Search Toggle */}
          <div className="relative flex items-center">
            <AnimatePresence>
              {searchOpen && (
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  exit={{ opacity: 0, scaleX: 0 }}
                  transition={{ duration: 0.3, ease: EASE_OUT }}
                  style={{ transformOrigin: "right", width: 180 }}
                  className="mr-2 overflow-hidden"
                >
                  <input
                    type="text"
                    placeholder="Search…"
                    autoFocus
                    className="w-full bg-cream rounded-full px-4 py-2 text-small text-ink-dark outline-none"
                  />
                </motion.div>
              )}
            </AnimatePresence>
            <button
              aria-label="Toggle search"
              onClick={() => setSearchOpen((v) => !v)}
              className="text-black hover:text-brand cursor-pointer"
              style={{ transition: "color 0.2s ease-in-out" }}
            >
              <Search size={18} />
            </button>
          </div>
        </nav>
      </div>

      {/* ── Mobile Header ── */}
      <div className="xl:hidden flex items-center justify-between px-6 h-16 relative z-10 bg-white">
        <a href="/" onClick={closeDropdown}>
          <img
            src="/bi-logo.svg"
            alt="BI Group"
            style={{ height: 30, width: "auto" }}
          />
        </a>
        <button
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
          className="p-2 relative text-ink-dark hover:text-brand cursor-pointer"
          style={{ transition: "color 0.25s ease-in-out" }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={mobileOpen ? "x" : "menu"}
              initial={{ opacity: 0, rotate: -45, scale: 0.9 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 45, scale: 0.9 }}
              transition={{ duration: 0.25, ease: EASE_OUT }}
              className="flex"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

      {/* ── Mobile Menu Panel ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: EASE_OUT }}
            className="xl:hidden bg-white border-t border-black/10 overflow-hidden"
          >
            <div className="px-4 py-3 space-y-0.5 max-h-[75vh] overflow-y-auto">
              {NAV_ITEMS.map((item) =>
                item.dropdown ? (
                  <div key={item.key}>
                    <button
                      onClick={() => setMobileExpanded((v) => (v === item.key ? null : item.key))}
                      className="flex items-center justify-between w-full px-4 py-3 text-small font-bold uppercase text-ink-dark hover:text-brand hover:bg-black/3 rounded"
                      style={{ transition: "all 0.22s ease-in-out" }}
                    >
                      {item.label}
                      <ChevronDown
                        size={15}
                        className={`transition-transform duration-300 ${mobileExpanded === item.key ? "rotate-180" : ""}`}
                      />
                    </button>
                    <AnimatePresence>
                      {mobileExpanded === item.key && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35, ease: EASE_OUT }}
                          className="ml-4 pl-4 border-l-2 border-brand overflow-hidden"
                        >
                          <div className="space-y-3 mb-2 py-1">
                            {item.dropdown.map((sub) => (
                              <a
                                key={sub.label}
                                href={sub.href}
                                onClick={() => setMobileOpen(false)}
                                className="block py-1 text-small text-slate hover:text-brand"
                              >
                                {sub.label}
                              </a>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a
                    key={item.key}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 text-small font-bold uppercase text-ink-dark hover:text-brand hover:bg-black/3 rounded"
                    style={{ transition: "all 0.22s ease-in-out" }}
                  >
                    {item.label}
                  </a>
                )
              )}

              <div className="flex items-center gap-2 px-4 pt-3">
                {LANGUAGES.map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className="px-3 py-1.5 rounded-full text-[13px] font-semibold"
                    style={{
                      background: lang === l ? "var(--color-brand)" : "var(--color-cream)",
                      color: lang === l ? "#fff" : "var(--color-ink-dark)",
                      transition: "all 0.2s ease-in-out",
                    }}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
