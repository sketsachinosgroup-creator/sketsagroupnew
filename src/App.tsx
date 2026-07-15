import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Pillars } from "./components/Pillars";
import { Walkthrough } from "./components/Walkthrough";
import { ServiceContent } from "./components/ServiceContent";
import { Portfolio } from "./components/Portfolio";
import { Pricing } from "./components/Pricing";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { Sx } from "./data";
import { motion, AnimatePresence } from "motion/react";
import { X, MessageCircle, Send, Check } from "lucide-react";

export default function App() {
  const [activeService, setActiveService] = useState<string>("website");
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isConsultationOpen, setIsConsultationOpen] = useState<boolean>(false);

  // Consultation Form States
  const [fullName, setFullName] = useState<string>("");
  const [whatsappNum, setWhatsappNum] = useState<string>("");
  const [selectedService, setSelectedService] = useState<string>("website");
  const [userMessage, setUserMessage] = useState<string>("");
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);

  // Rotating Social Proof States
  const [currentSxIndex, setCurrentSxIndex] = useState<number>(0);
  const [showSxToast, setShowSxToast] = useState<boolean>(false);

  // Intersection Observer to detect scroll position and highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;

      // Check if scroll is at faq
      const faqEl = document.getElementById("faq-section");
      const portEl = document.getElementById("portfolio-section");
      const heroEl = document.getElementById("hero");

      if (faqEl && scrollPos >= faqEl.offsetTop) {
        setActiveSection("faq-section");
      } else if (portEl && scrollPos >= portEl.offsetTop) {
        setActiveSection("portfolio-section");
      } else if (heroEl && scrollPos >= heroEl.offsetTop) {
        setActiveSection("hero");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cycle through social proof toasts
  useEffect(() => {
    const initTimer = setTimeout(() => {
      setShowSxToast(true);
    }, 5000);

    const cycleInterval = setInterval(() => {
      setShowSxToast(false);
      setTimeout(() => {
        setCurrentSxIndex((prev) => (prev + 1) % Sx.length);
        setShowSxToast(true);
      }, 400); // fade out and fade in transition delay
    }, 12000); // Rotate every 12 seconds

    return () => {
      clearTimeout(initTimer);
      clearInterval(cycleInterval);
    };
  }, []);

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !whatsappNum.trim()) return;
    setIsFormSubmitted(true);
  };

  const handleConsultationClose = () => {
    setIsConsultationOpen(false);
    // Reset form states
    setTimeout(() => {
      setFullName("");
      setWhatsappNum("");
      setSelectedService("website");
      setUserMessage("");
      setIsFormSubmitted(false);
    }, 300);
  };

  const triggerDirectWhatsApp = () => {
    const serviceNameMap: Record<string, string> = {
      website: "Jasa Website Premium",
      legalitas: "Legalitas Bisnis & Notaris",
      sertifikasi: "Sertifikasi ISO KAN",
      marketing: "Data Driven Marketing CAPI",
      sosmed: "Manajemen Sosmed & Konten",
      member: "Kemitraan Sejoli Affiliate"
    };

    const message = `Halo Sketsa Group,
Saya ingin memesan Sesi Konsultasi & Audit Gratis untuk bisnis saya.

Berikut data diri saya:
- *Nama:* ${fullName}
- *No. WhatsApp:* ${whatsappNum}
- *Layanan Diminati:* ${serviceNameMap[selectedService] || selectedService}
- *Pesan Tambahan:* ${userMessage.trim() || "Saya ingin tahu info paket selengkapnya."}

Mohon bantuannya untuk menjadwalkan sesi konsultasi kami. Terima kasih!`;

    window.open(
      `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );

    handleConsultationClose();
  };

  const currentSx = Sx[currentSxIndex];

  return (
    <div id="app-root" className="min-h-screen bg-white font-sans text-slate-800 antialiased overflow-x-hidden selection:bg-teal-800 selection:text-white">
      {/* Premium Navigation Header */}
      <Header
        onOpenConsultation={() => setIsConsultationOpen(true)}
        activeSection={activeSection}
        activeService={activeService}
        setActiveService={setActiveService}
      />

      {/* Main Content Sections */}
      <main id="app-main">
        {/* Dynamic Hero Area */}
        <Hero
          onOpenConsultation={() => setIsConsultationOpen(true)}
          activeService={activeService}
        />

        {/* Dynamic Key Pillars Section */}
        <Pillars activeService={activeService} />

        {/* Dynamic Interactive Workbench Simulation */}
        <Walkthrough activeService={activeService} />

        {/* Dynamic Full Service Detail Content Column */}
        <ServiceContent
          onOpenConsultation={() => setIsConsultationOpen(true)}
          activeService={activeService}
        />

        {/* Dynamic Portfolio / Case Studies Showcase */}
        <Portfolio activeService={activeService} />

        {/* Dynamic Pricing Matrix & Decoy Configurator */}
        <Pricing
          activeService={activeService}
          onOpenConsultation={() => setIsConsultationOpen(true)}
        />

        {/* FAQ Accordion Section */}
        <FAQ />
      </main>

      {/* Multi-Column Corporate Footer */}
      <Footer
        setActiveService={setActiveService}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      {/* FLOATING CONSULTATION TRIGGER BUTTON (Desk & Mobile) */}
      <div id="floating-cta-trigger" className="fixed bottom-6 right-6 z-30">
        <motion.button
          onClick={() => setIsConsultationOpen(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-teal-800 hover:bg-teal-900 text-white rounded-full p-4 flex items-center justify-center shadow-2xl shadow-teal-800/40 cursor-pointer border border-teal-700/50"
          aria-label="Open consultation form"
        >
          <MessageCircle className="w-6 h-6 animate-pulse" />
        </motion.button>
      </div>

      {/* ACTIVE REAL-TIME SOCIAL PROOF NOTIFIER TOAST (Bottom-Left) */}
      <AnimatePresence>
        {showSxToast && currentSx && (
          <motion.div
            id="social-proof-toast"
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -50, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="fixed bottom-6 left-6 z-30 bg-slate-900/95 backdrop-blur-md text-white px-4 py-3.5 rounded-2xl border border-slate-800 shadow-2xl flex items-start gap-3 max-w-[320px]"
          >
            <div id="toast-icon" className="w-8 h-8 rounded-xl bg-teal-800 text-teal-200 flex items-center justify-center flex-shrink-0 font-extrabold text-sm border border-teal-700/40 font-serif">
              S
            </div>
            <div id="toast-text" className="text-xs">
              <div id="toast-user" className="font-bold text-teal-300">
                {currentSx.name} ({currentSx.city})
              </div>
              <p id="toast-action" className="text-slate-300 mt-0.5 leading-relaxed">
                {currentSx.action} <span className="text-white font-medium">"{currentSx.product}"</span>
              </p>
              <div id="toast-time" className="text-[10px] text-slate-500 font-mono mt-1 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                {currentSx.timeAgo}
              </div>
            </div>
            <button
              onClick={() => setShowSxToast(false)}
              className="text-slate-500 hover:text-slate-300 transition-colors p-0.5 cursor-pointer ml-1"
              aria-label="Close toast"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MASTER CONSULTATION & AUDIT MODAL DIALOG */}
      <AnimatePresence>
        {isConsultationOpen && (
          <motion.div
            id="consultation-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={handleConsultationClose}
          >
            <motion.div
              id="consultation-modal-container"
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="bg-white rounded-3xl max-w-lg w-full shadow-2xl overflow-hidden border border-slate-100 max-h-[95vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Title Header */}
              <div id="consultation-modal-header" className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-teal-800 text-white flex items-center justify-center font-bold">
                    S
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-slate-800 text-sm sm:text-base">
                      Audit & Konsultasi Gratis
                    </h3>
                    <p className="text-[10px] text-slate-400 font-sans tracking-wide uppercase font-bold">
                      Sketsa Group Creative Space
                    </p>
                  </div>
                </div>
                <button
                  id="close-consultation-btn"
                  onClick={handleConsultationClose}
                  className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-200/50 rounded-full transition-all cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal content body */}
              <div id="consultation-modal-body" className="p-6 md:p-8 overflow-y-auto flex-1">
                {!isFormSubmitted ? (
                  <form onSubmit={handleConsultationSubmit} className="space-y-4">
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Selesaikan formulir singkat di bawah untuk memperoleh sesi audit website, legalitas, atau setup Conversion API premium gratis langsung dari tim konsultan senior kami.
                    </p>

                    <div>
                      <label className="block text-[10px] font-extrabold text-slate-500 uppercase tracking-wider mb-1 font-sans">
                        Nama Lengkap Anda *
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Contoh: Mochammad Chino"
                        className="w-full text-xs bg-slate-50 border border-slate-200 focus:border-teal-700 focus:ring-1 focus:ring-teal-700 rounded-xl px-3.5 py-3 text-slate-800 focus:outline-none transition-all placeholder-slate-400 font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-extrabold text-slate-500 uppercase tracking-wider mb-1 font-sans">
                        No. WhatsApp Aktif *
                      </label>
                      <input
                        type="tel"
                        required
                        value={whatsappNum}
                        onChange={(e) => setWhatsappNum(e.target.value)}
                        placeholder="Contoh: 081234567890"
                        className="w-full text-xs bg-slate-50 border border-slate-200 focus:border-teal-700 focus:ring-1 focus:ring-teal-700 rounded-xl px-3.5 py-3 text-slate-800 focus:outline-none transition-all placeholder-slate-400 font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-extrabold text-slate-500 uppercase tracking-wider mb-1 font-sans">
                        Layanan Yang Diminati
                      </label>
                      <select
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="w-full text-xs bg-slate-50 border border-slate-200 focus:border-teal-700 focus:ring-1 focus:ring-teal-700 rounded-xl px-3.5 py-3 text-slate-800 focus:outline-none transition-all cursor-pointer font-medium"
                      >
                        <option value="website">Jasa Pembuatan Website Premium</option>
                        <option value="legalitas">Legalitas Badan Usaha & Notaris</option>
                        <option value="sertifikasi">Sertifikasi ISO Standar KAN</option>
                        <option value="marketing">Data Driven Marketing (CAPI/GTM)</option>
                        <option value="sosmed">Manajemen Media Sosial & Konten</option>
                        <option value="member">Kemitraan Sejoli Affiliate</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] font-extrabold text-slate-500 uppercase tracking-wider mb-1 font-sans">
                        Pesan atau Kendala Bisnis Anda (Opsional)
                      </label>
                      <textarea
                        rows={3}
                        value={userMessage}
                        onChange={(e) => setUserMessage(e.target.value)}
                        placeholder="Tuliskan tantangan digitalisasi atau target khusus bisnis Anda..."
                        className="w-full text-xs bg-slate-50 border border-slate-200 focus:border-teal-700 focus:ring-1 focus:ring-teal-700 rounded-xl px-3.5 py-3 text-slate-800 focus:outline-none transition-all resize-none font-sans"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 bg-teal-800 hover:bg-teal-900 text-white rounded-xl font-bold text-xs uppercase tracking-widest shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer font-sans"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Ajukan Konsultasi Audit</span>
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-8 space-y-5 animate-scale-up">
                    <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                      <Check className="w-8 h-8 stroke-[3]" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-slate-800 text-lg">Pendaftaran Konsultasi Sukses!</h4>
                      <p className="text-xs text-slate-500 mt-2 max-w-sm mx-auto leading-relaxed">
                        Data audit Anda telah dipaketkan dengan aman. Silakan klik tombol di bawah untuk langsung terhubung dengan WhatsApp konsultan ahli kami guna mengatur jadwal peninjauan.
                      </p>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-left text-[11px] font-mono text-slate-600 space-y-1">
                      <p><span className="text-slate-400">NAMA:</span> {fullName}</p>
                      <p><span className="text-slate-400">KONTAK WA:</span> {whatsappNum}</p>
                      <p><span className="text-slate-400">STATUS AUDIT:</span> <span className="text-emerald-600 font-bold">READY TO DEPLOY</span></p>
                    </div>

                    <button
                      onClick={triggerDirectWhatsApp}
                      className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-xs uppercase tracking-widest shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.01]"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Kirim data ke WhatsApp</span>
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
