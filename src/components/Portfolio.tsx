import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  FolderOpen,
  X,
  Trophy,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Shield,
  Award
} from "lucide-react";
import { jx } from "../data";

interface PortfolioProps {
  activeService: string;
}

export const Portfolio: React.FC<PortfolioProps> = ({ activeService }) => {
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  // Clear modal selection when service changes
  useEffect(() => {
    setSelectedProject(null);
  }, [activeService]);

  const isMember = activeService === "member";
  const filteredProjects = isMember
    ? []
    : jx.filter((proj) => proj.service === activeService);

  const headerInfo = (() => {
    switch (activeService) {
      case "legalitas":
        return {
          label: "Riwayat Pengesahan Kami",
          title: "Badan Usaha Resmi Mitra Kami",
          highlight: "Sudah Legal Beroperasi",
          sub: "Eksplorasi beberapa perseroan terbatas (PT) dan persekutuan komanditer (CV) yang akta pendirian dan NIB-nya kami legalkan secara sah dalam 5 hari kerja."
        };
      case "sertifikasi":
        return {
          label: "Bukti Kelulusan Audit",
          title: "Sertifikasi ISO Klien Korporat",
          highlight: "Lolos Audit 100%",
          sub: "Eksplorasi daftar korporasi nasional dan lembaga pemerintahan yang berhasil kami bimbing mendapatkan sertifikat kepatuhan standar internasional resmi."
        };
      case "marketing":
        return {
          label: "Bukti Setup Konversi",
          title: "Dasbor Sukses Integrasi CAPI",
          highlight: "Presisi Pelacakan 98%",
          sub: "Eksplorasi draf hasil audit akurasi piksel periklanan Facebook/TikTok server-side yang melipatgandakan kecerdasan kecocokan audiens kampanye."
        };
      case "sosmed":
        return {
          label: "Hasil Karya Konten",
          title: "Desain Feed Instagram Estetis",
          highlight: "Meningkatkan Interaksi 10x",
          sub: "Eksplorasi portofolio pengelolaan visual media sosial bisnis klien kami yang sukses memancarkan kredibilitas merek premium."
        };
      case "member":
        return {
          label: "Testimoni & Leaderboard",
          title: "Rekor Komisi Mitra Teratas",
          highlight: "Penghasilan Melimpah Nyata",
          sub: "Inspirasi pencapaian komisi bulanan para agen pemasaran afiliasi resmi Sketsa Group yang berhasil mempromosikan layanan kami."
        };
      default:
        return {
          label: "Galeri Karya Kami",
          title: "Portofolio Website Klien",
          highlight: "Sudah Menghasilkan Omset",
          sub: "Eksplorasi mahakarya digital kami dari berbagai sektor industri. Setiap website didesain eksklusif tanpa template pasaran."
        };
    }
  })();

  const leaderboard = [
    {
      name: "Bapak Surya Atmaja",
      location: "Bandung, Jabar",
      sales: "34 Closing (25 Web, 9 Konten)",
      earnings: "Rp 5.900.000",
      badge: "Super Seller"
    },
    {
      name: "Ibu Indah Lestari",
      location: "Surabaya, Jatim",
      sales: "21 Closing (15 Web, 6 Konten)",
      earnings: "Rp 3.600.000",
      badge: "Gold Affiliate"
    },
    {
      name: "dr. Adrian Pratama",
      location: "Jakarta Selatan",
      sales: "15 Closing (10 Web, 5 Konten)",
      earnings: "Rp 2.500.000",
      badge: "Rising Star"
    }
  ];

  return (
    <section id="portfolio-section" className="py-24 bg-white relative">
      <div id="portfolio-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div id="portfolio-header" className="text-center max-w-3xl mx-auto mb-16">
          <span
            id="portfolio-label"
            className="text-xs font-extrabold text-teal-800 tracking-widest uppercase bg-teal-50 border border-teal-100/50 px-3.5 py-1.5 rounded-full"
          >
            {headerInfo.label}
          </span>
          <h2 id="portfolio-heading" className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-slate-900 mt-5 tracking-tight leading-tight">
            {headerInfo.title} <br />
            Yang <span className="text-teal-700 italic font-serif font-extrabold">{headerInfo.highlight}</span>
          </h2>
          <p id="portfolio-subtitle" className="text-slate-500 text-sm sm:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            {headerInfo.sub}
          </p>
        </div>

        {isMember ? (
          /* Member Affiliate View: Special System Card + Leaderboard */
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="bg-slate-50/50 rounded-3xl border border-slate-100/80 p-6 md:p-8 hover:shadow-xl transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Visual Frame */}
                <a
                  href="#member-area"
                  className="lg:col-span-5 relative rounded-2xl overflow-hidden aspect-video bg-slate-200 border border-slate-100 shadow-sm group block transition-all duration-300 hover:scale-[1.02]"
                >
                  <img
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
                    alt="Sketsa Group Affiliate"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-teal-800 text-white text-[9px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm z-20">
                    Official Program
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none" />
                </a>

                {/* Description Frame */}
                <div className="lg:col-span-7 space-y-4">
                  <span className="text-[10px] font-extrabold text-teal-800 bg-teal-50 px-2.5 py-1 rounded-md uppercase tracking-wider border border-teal-100/50">
                    Sistem Member & Affiliate Sketsa Group
                  </span>
                  <h3 className="font-serif font-bold text-xl md:text-2xl text-slate-900 leading-tight">
                    Affiliate Sketsa Group — Portal Kemitraan & Registrasi
                  </h3>
                  <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
                    Sistem aplikasi web keanggotaan (member area) khusus mitra affiliate Sketsa Group. Registrasi sekali 99 ribu langsung mendapatkan official merchandise Cozy Shoes Care (Cozy Foam Shoe Cleaner 100ml) dan hak memasarkan jasa berkomisi tinggi: Rp 200.000 untuk jasa website dan Rp 100.000 untuk jasa konten sosmed.
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {["Affiliate System", "Registration & Payment", "Cozy Shoes Care", "Commission Engine", "WhatsApp Integration"].map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-bold text-slate-400 bg-white border border-slate-100 px-2 py-0.5 rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                    <a
                      href="#member-area"
                      className="w-full sm:w-auto px-6 py-3 bg-teal-800 hover:bg-teal-900 text-white rounded-xl font-bold text-xs md:text-sm shadow-md flex items-center justify-center gap-1.5 cursor-pointer transition-all hover:scale-[1.01]"
                    >
                      <span>Buka Aplikasi Member Area</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <span className="text-slate-400 text-xs hidden sm:inline">•</span>
                    <span className="text-slate-400 text-xs font-medium">Kemitraan Resmi Sketsa Group</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Leaderboard Table Block */}
            <div className="bg-[#031d1a] text-white p-6 md:p-8 rounded-3xl border border-emerald-950/50 shadow-xl">
              <h3 className="font-serif font-bold text-lg md:text-xl text-emerald-300 mb-6 flex items-center gap-2">
                <Trophy className="w-5 h-5" />
                <span>Papan Peringkat Penjualan Bulan Ini</span>
              </h3>
              <div className="space-y-4">
                {leaderboard.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-[#021815] rounded-2xl border border-emerald-950/40 gap-4"
                  >
                    <div className="flex items-center gap-4">
                      <span className="w-7 h-7 rounded-full bg-teal-800 text-white font-bold text-xs flex items-center justify-center font-mono">
                        #{idx + 1}
                      </span>
                      <div>
                        <div className="font-bold text-sm text-white flex items-center gap-2">
                          {item.name}
                          <span className="text-[8px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-1.5 rounded-full font-bold uppercase">
                            {item.badge}
                          </span>
                        </div>
                        <span className="text-[11px] text-teal-200/50 mt-0.5 block">
                          {item.location}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-6 sm:text-right font-mono text-xs text-slate-300">
                      <div>
                        <span className="text-[9px] text-slate-500 block">VOLUME CLOSING</span>
                        <span className="font-bold mt-0.5 block">{item.sales}</span>
                      </div>
                      <div>
                        <span className="text-[9px] text-slate-500 block">TOTAL KOMISI</span>
                        <span className="font-bold text-emerald-400 mt-0.5 block">{item.earnings}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Info Row */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-teal-50 text-teal-800 flex items-center justify-center font-bold text-lg flex-shrink-0 mt-0.5">
                  💡
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800">Komisi Dibayarkan Setiap Hari Jumat</h4>
                  <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                    Sistem payout otomatis mentransfer komisi terakumulasi Anda ke rekening bank terdaftar tanpa potongan admin sepeser pun.
                  </p>
                </div>
              </div>
              <a
                href="#login-box-container"
                className="px-5 py-2.5 bg-teal-800 hover:bg-teal-900 text-white rounded-xl font-bold text-xs shadow-md shadow-teal-900/10 whitespace-nowrap cursor-pointer transition-all hover:scale-[1.02]"
              >
                Daftar Menjadi Mitra
              </a>
            </div>

          </div>
        ) : (
          /* General View: Portfolio Grid list */
          <>
            {filteredProjects.length === 0 ? (
              <div className="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                <FolderOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <h4 className="text-sm font-bold text-slate-600">Portofolio Sedang Dimutakhirkan</h4>
                <p className="text-xs text-slate-400 mt-1">
                  Beberapa rincian proyek klien terbaru sedang dalam pengesahan NDA privasi klien.
                </p>
              </div>
            ) : (
              <div id="portfolio-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 [perspective:1200px] [transform-style:preserve-3d]">
                {filteredProjects.map((proj, idx) => (
                  <motion.div
                    key={proj.id}
                    id={`portfolio-card-${proj.id}`}
                    onClick={() => setSelectedProject(proj)}
                    initial={{ opacity: 0, y: 60, rotateX: 10, rotateY: -6 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
                    whileHover={{
                      y: -10,
                      rotateX: -3,
                      rotateY: 3,
                      boxShadow: "0 25px 50px -12px rgba(13, 148, 136, 0.16)",
                      borderColor: "rgba(13, 148, 136, 0.25)"
                    }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.7, delay: idx * 0.05, type: "spring", stiffness: 60, damping: 15 }}
                    style={{ transformStyle: "preserve-3d" }}
                    className="group bg-slate-50/50 rounded-2xl overflow-hidden border border-slate-100/80 hover:shadow-2xl transition-all duration-300 flex flex-col h-full cursor-pointer relative"
                  >
                    {/* Project Image Panel */}
                    <div
                      id={`image-frame-${proj.id}`}
                      className="relative aspect-video w-full overflow-hidden bg-slate-200"
                      style={{ transform: "translateZ(20px)" }}
                    >
                      <img
                        id={`portfolio-img-${proj.id}`}
                        src={proj.image}
                        alt={proj.title}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-teal-950/80 via-teal-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 z-20">
                        <span className="text-white text-xs font-extrabold tracking-widest uppercase bg-emerald-500/85 px-3 py-1 rounded-full">
                          Lihat Detail Proyek
                        </span>
                      </div>
                    </div>

                    {/* Project Info Card Body */}
                    <div
                      id={`portfolio-card-body-${proj.id}`}
                      className="p-6 flex-1 flex flex-col justify-between"
                      style={{ transform: "translateZ(30px)" }}
                    >
                      <div className="space-y-4">
                        <span
                          id={`portfolio-card-cat-${proj.id}`}
                          className="text-[10px] font-extrabold text-teal-800 bg-teal-50/80 border border-teal-100 px-2.5 py-1 rounded-md uppercase tracking-wider"
                        >
                          {proj.category.replace("-", " ")}
                        </span>
                        <h3
                          id={`portfolio-card-title-${proj.id}`}
                          className="font-serif font-bold text-base md:text-lg text-slate-800 mt-4 group-hover:text-teal-800 transition-colors leading-snug"
                        >
                          {proj.title}
                        </h3>
                        <p
                          id={`portfolio-card-desc-${proj.id}`}
                          className="text-xs text-slate-500 leading-relaxed mt-2 line-clamp-3"
                        >
                          {proj.description}
                        </p>
                      </div>

                      <div
                        id={`portfolio-card-footer-${proj.id}`}
                        className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5"
                      >
                        {proj.techStack.map((tech) => (
                          <span
                            key={tech}
                            id={`tech-badge-${proj.id}-${tech}`}
                            className="text-[9px] font-bold text-slate-400 bg-white border border-slate-100 px-2 py-0.5 rounded-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </>
        )}

        {/* Portfolio Detail Modal Frame */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              id="project-modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                id="project-modal-container"
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="bg-white text-slate-800 rounded-3xl max-w-4xl w-full shadow-2xl overflow-hidden border border-slate-100 max-h-[90vh] flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div id="modal-header" className="p-6 border-b border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-extrabold text-teal-800 bg-teal-50 px-2.5 py-1 rounded-md uppercase tracking-wider border border-teal-100/50">
                      Detail Proyek • {selectedProject.category.replace("-", " ")}
                    </span>
                    <h3 className="font-serif font-bold text-xl md:text-2xl text-slate-900 mt-2 leading-tight">
                      {selectedProject.title}
                    </h3>
                  </div>
                  <button
                    id="close-modal-btn"
                    onClick={() => setSelectedProject(null)}
                    className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-full transition-all cursor-pointer flex-shrink-0"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Modal Scroll Body */}
                <div id="modal-body" className="p-6 md:p-8 overflow-y-auto space-y-8 flex-1">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Visual left column */}
                    <div className="lg:col-span-7 space-y-4">
                      <div className="rounded-2xl overflow-hidden shadow border border-slate-150 aspect-video">
                        <img
                          src={selectedProject.image}
                          alt={selectedProject.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Project Information right column */}
                    <div className="lg:col-span-5 space-y-6">
                      <div className="space-y-4">
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest font-sans">
                          Ringkasan Proyek
                        </h4>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          {selectedProject.description}
                        </p>
                      </div>

                      <div className="h-px bg-slate-100" />

                      <div className="grid grid-cols-2 gap-4 text-xs">
                        <div>
                          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
                            NAMA KLIEN:
                          </span>
                          <span className="font-bold text-slate-800 mt-0.5 block">
                            {selectedProject.clientName}
                          </span>
                        </div>
                        <div>
                          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
                            LAYANAN:
                          </span>
                          <span className="font-bold text-teal-800 uppercase mt-0.5 block">
                            {selectedProject.service}
                          </span>
                        </div>
                      </div>

                      <div className="h-px bg-slate-100" />

                      {/* Tech Stack */}
                      <div className="space-y-3">
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
                          TEKNOLOGI & STANDARD:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {selectedProject.techStack.map((tech: string) => (
                            <span
                              key={tech}
                              className="text-[10px] font-bold text-slate-500 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-md"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4">
                        <a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full px-6 py-3.5 bg-teal-800 hover:bg-teal-900 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-teal-800/10 transition-all cursor-pointer hover:scale-[1.01]"
                        >
                          <span>Kunjungi Link Portofolio</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>

                    </div>

                  </div>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
export default Portfolio;
