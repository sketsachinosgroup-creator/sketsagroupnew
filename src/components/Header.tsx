import React, { useState, useEffect } from "react";
import { MessageCircle, Menu, X, HelpCircle, LogIn } from "lucide-react";

interface HeaderProps {
  onOpenConsultation: () => void;
  activeSection: string;
  activeService: string;
  setActiveService: (service: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenConsultation,
  activeSection,
  activeService,
  setActiveService,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string, isPageSwitch: boolean) => {
    setMobileMenuOpen(false);
    if (isPageSwitch) {
      setActiveService(sectionId);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const topOffset = element.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: topOffset, behavior: "smooth" });
      }
    }
  };

  const navItems = [
    { name: "Beranda", id: "hero", isPageSwitch: false, icon: null },
    { name: "Jasa Website", id: "website", isPageSwitch: true, icon: null },
    { name: "Legalitas Bisnis", id: "legalitas", isPageSwitch: true, icon: null },
    { name: "Sertifikasi ISO", id: "sertifikasi", isPageSwitch: true, icon: null },
    { name: "Data Driven Marketing", id: "marketing", isPageSwitch: true, badge: "BARU", icon: null },
    { name: "Konten & Sosmed", id: "sosmed", isPageSwitch: true, icon: null },
    { name: "Portofolio", id: "portfolio-section", isPageSwitch: false, icon: null },
    { name: "Member Area", id: "member", isPageSwitch: true, icon: <LogIn className="w-3.5 h-3.5" /> },
    { name: "FAQ", id: "faq-section", isPageSwitch: false, icon: <HelpCircle className="w-3.5 h-3.5" /> },
  ];

  return (
    <>
      <header
        id="main-app-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-100"
            : "bg-white py-4"
        }`}
      >
        <div id="header-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div id="header-inner" className="flex items-center justify-between">
            {/* Logo */}
            <div
              id="header-logo-wrapper"
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => handleNavClick("website", true)}
            >
              <div
                id="brand-icon-circle"
                className="w-10 h-10 rounded-2xl bg-teal-800 text-white flex items-center justify-center font-bold text-xl shadow-md shadow-teal-800/20"
              >
                S
              </div>
              <div id="brand-text-wrapper" className="flex flex-col">
                <span
                  id="brand-name"
                  className="font-sans font-extrabold text-slate-800 text-[18px] leading-tight tracking-tight"
                >
                  Sketsa <span className="text-teal-700 font-semibold">Group</span>
                </span>
                <span
                  id="brand-subtext"
                  className="text-[9px] font-bold text-slate-400 tracking-widest uppercase"
                >
                  Creative Agency
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav id="desktop-navigation" className="hidden xl:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = item.isPageSwitch
                  ? activeService === item.id
                  : activeSection === item.id;
                return (
                  <button
                    key={item.name}
                    id={`nav-link-${item.id}`}
                    onClick={() => handleNavClick(item.id, item.isPageSwitch)}
                    className={`text-xs font-semibold px-3 py-2 rounded-lg transition-all duration-200 flex items-center gap-1.5 cursor-pointer hover:scale-[1.02] ${
                      isActive
                        ? "bg-teal-50 text-teal-800 font-bold border border-teal-100/50"
                        : "text-slate-600 hover:text-teal-700 hover:bg-slate-50"
                    }`}
                  >
                    {item.icon}
                    {item.name}
                    {item.badge && (
                      <span
                        id={`nav-badge-${item.id}`}
                        className="bg-red-500 text-white text-[8px] font-extrabold px-1 rounded-sm animate-pulse ml-0.5"
                      >
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Header CTA */}
            <div id="header-cta-wrapper" className="hidden lg:block">
              <button
                id="header-cta-btn"
                onClick={onOpenConsultation}
                className="border-2 border-teal-700/60 text-teal-800 font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-2 hover:bg-teal-50 hover:border-teal-700 transition-all duration-300 shadow-sm cursor-pointer"
              >
                <div
                  id="wa-icon-dot"
                  className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center"
                >
                  <MessageCircle id="header-wa-icon" className="w-3.5 h-3.5 fill-current" />
                </div>
                <span>Konsultasikan Secara Gratis Sekarang</span>
              </button>
            </div>

            {/* Mobile Menu Trigger */}
            <button
              id="mobile-menu-trigger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-slate-600 hover:text-teal-700 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X id="mobile-menu-x" className="w-6 h-6" />
              ) : (
                <Menu id="mobile-menu-hamburger" className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        <div
          id="mobile-menu-panel"
          className={`xl:hidden fixed inset-x-0 top-[64px] bg-white border-b border-slate-100 shadow-xl transition-all duration-300 transform origin-top ${
            mobileMenuOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
          }`}
        >
          <div id="mobile-menu-links" className="px-4 pt-3 pb-6 space-y-1 bg-white max-h-[calc(100vh-80px)] overflow-y-auto">
            {navItems.map((item) => {
              const isActive = item.isPageSwitch
                ? activeService === item.id
                : activeSection === item.id;
              return (
                <button
                  key={item.name}
                  id={`nav-link-mobile-${item.id}`}
                  onClick={() => handleNavClick(item.id, item.isPageSwitch)}
                  className={`w-full text-left text-sm font-semibold px-4 py-3 rounded-xl flex items-center gap-2 transition-all cursor-pointer ${
                    isActive
                      ? "bg-teal-50 text-teal-800 border-l-4 border-teal-700 font-bold"
                      : "text-slate-600 hover:text-teal-700 hover:bg-slate-50"
                  }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                  {item.badge && (
                    <span
                      id={`nav-badge-mobile-${item.id}`}
                      className="bg-red-500 text-white text-[9px] font-extrabold px-1.5 py-0.5 rounded ml-auto"
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
            <div id="mobile-menu-separator" className="pt-4 border-t border-slate-100">
              <button
                id="mobile-menu-cta-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 bg-teal-800 hover:bg-teal-900 text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
              >
                <MessageCircle id="mobile-cta-wa-icon" className="w-4 h-4 text-emerald-300 fill-current" />
                <span>Konsultasikan Gratis Sekarang</span>
              </button>
            </div>
          </div>
        </div>
      </header>
      <div id="header-spacer" className="h-[72px]" />
    </>
  );
};
