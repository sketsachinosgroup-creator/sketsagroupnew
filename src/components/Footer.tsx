import React from "react";
import { Mail, Phone, MapPin, ExternalLink, ArrowUpRight } from "lucide-react";

interface FooterProps {
  setActiveService: (service: string) => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveService, onOpenConsultation }) => {
  const handleServiceClick = (serviceId: string) => {
    setActiveService(serviceId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const services = [
    { name: "Jasa Website Premium", id: "website" },
    { name: "Legalitas Bisnis & Notaris", id: "legalitas" },
    { name: "Sertifikasi ISO KAN", id: "sertifikasi" },
    { name: "Data Driven Marketing CAPI", id: "marketing" },
    { name: "Manajemen Sosmed & Konten", id: "sosmed" },
    { name: "Portal Affiliate Sejoli", id: "member" }
  ];

  const quickLinks = [
    { name: "Portofolio Karya", href: "#portfolio-section", isScroll: true },
    { name: "Pertanyaan FAQ", href: "#faq-section", isScroll: true },
    { name: "Mbejaji Group Website", href: "https://ryfgroup.xyz/", isScroll: false },
    { name: "Sketsa Group Website", href: "https://sketsagroup.xyz/", isScroll: false },
    { name: "Sesi Konsultasi Audit", href: "#", isAction: true }
  ];

  return (
    <footer id="app-footer" className="bg-[#021412] text-slate-300 border-t border-emerald-950/40">
      {/* Top Footer Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-emerald-950/60">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-teal-800 text-white flex items-center justify-center font-bold text-xl shadow-md">
                S
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-extrabold text-white text-lg leading-tight">
                  Sketsa <span className="text-teal-400 font-semibold">Group</span>
                </span>
                <span className="text-[10px] font-bold text-teal-400/80 tracking-widest uppercase">
                  Creative Agency
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Sketsa Group adalah agensi kreatif premium nasional yang fokus membimbing digitalisasi bisnis, penyusunan legalitas berbadan hukum resmi, serta sertifikasi ISO berstandar dunia guna melipatgandakan ROI penjualan Anda secara konsisten.
            </p>
            <div className="pt-2 text-[11px] text-teal-400/60 flex items-center gap-1.5 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Sistem Enkripsi SSL 256-bit Terproteksi</span>
            </div>
          </div>

          {/* Layanan Kami Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider">
              Layanan Utama
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {services.map((srv) => (
                <li key={srv.id}>
                  <button
                    onClick={() => handleServiceClick(srv.id)}
                    className="hover:text-teal-400 transition-colors cursor-pointer text-left flex items-center gap-1"
                  >
                    <span>{srv.name}</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-600 group-hover:text-teal-400" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Tautan Penting Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider">
              Tautan Cepat
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {link.isAction ? (
                    <button
                      onClick={onOpenConsultation}
                      className="hover:text-teal-400 transition-colors cursor-pointer text-left"
                    >
                      {link.name}
                    </button>
                  ) : link.isScroll ? (
                    <a
                      href={link.href}
                      className="hover:text-teal-400 transition-colors text-left block"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-teal-400 transition-colors flex items-center gap-1"
                    >
                      <span>{link.name}</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak & Alamat */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider">
              Kontak Kami
            </h4>
            <ul className="space-y-3.5 text-xs text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Gedung Sketsa Creative Space, Lt. 3, Jl. Pandanaran No. 102, Kota Semarang, Jawa Tengah 50134
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span>info@sketsagroup.xyz</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright block */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Sketsa Group. Hak Cipta Dilindungi Undang-Undang.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <a href="#" className="hover:text-slate-300">Ketentuan Layanan</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-300">Kebijakan Privasi</a>
            <span>•</span>
            <span className="text-slate-600 font-mono">Ver. 2.1.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
