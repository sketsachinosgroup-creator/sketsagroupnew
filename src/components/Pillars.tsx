import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Gauge,
  Heart,
  Lock,
  MessageSquare,
  TrendingUp,
  Shield,
  FileText,
  CheckCircle2,
  Sparkles,
  Globe,
  Server,
  Check,
  Activity,
  ChevronRight,
  HelpCircle,
  PenTool,
  Map
} from "lucide-react";
import { Bt } from "../data";

interface PillarsProps {
  activeService: string;
}

export const Pillars: React.FC<PillarsProps> = ({ activeService }) => {
  const [copyStyle, setCopyStyle] = useState("before");
  const [isSecure, setIsSecure] = useState(true);

  const isMember = activeService === "member";

  const renderIcon = (iconName: string) => {
    const iconClass = "w-6 h-6 text-emerald-300";
    switch (iconName) {
      case "Gauge":
        return <Gauge className={iconClass} />;
      case "Heart":
        return <Heart className={iconClass} />;
      case "Lock":
        return <Lock className={iconClass} />;
      case "MessageSquare":
        return <MessageSquare className={iconClass} />;
      case "TrendingUp":
        return <TrendingUp className={iconClass} />;
      case "Shield":
        return <Shield className={iconClass} />;
      case "FileText":
        return <FileText className={iconClass} />;
      case "CheckCircle2":
        return <CheckCircle2 className={iconClass} />;
      case "Sparkles":
        return <Sparkles className={iconClass} />;
      case "Globe":
        return <Globe className={iconClass} />;
      case "Server":
        return <Server className={iconClass} />;
      case "Check":
        return <Check className={iconClass} />;
      case "Activity":
        return <Activity className={iconClass} />;
      default:
        return <HelpCircle className={iconClass} />;
    }
  };

  const pillarsData = isMember
    ? {
        pillarsLabel: "Pilar Sukses Mitra",
        pillarsTitle: "Keuntungan Bergabung Sebagai",
        pillarsHighlight: "Mitra Resmi Sketsa Group",
        pillarsSub: "Kami menyediakan infrastruktur jualan siap pakai lengkap dengan lisensi software, materi copywriting viral, dan sistem komisi transparan.",
        pillarsItems: [
          {
            title: "Komisi Penjualan Instant 35%",
            description: "Setiap terjadi closing dari link affiliate khusus Anda, komisi senilai 35% dari paket penawaran langsung terkunci dan tercatat di dashboard keuangan Sejoli.",
            iconName: "TrendingUp",
            extraType: "speed",
            badgeText: "Payout",
            badgeVal: "Instant H+1"
          },
          {
            title: "Pemicu Lead Closing via WA",
            description: "Pembeli tidak perlu bingung mengisi form transfer bank yang rumit. Sistem kami mengarahkan mereka langsung ke WhatsApp CS untuk follow-up closing kilat.",
            iconName: "MessageSquare",
            extraType: "flow"
          },
          {
            title: "Katalog Penjualan & Swipe File",
            description: "Dapatkan ratusan template poster digital, naskah copywriting siap sebar di WA group, dan video review produk beresolusi tinggi untuk melipatgandakan jangkauan.",
            iconName: "FileText",
            extraType: "copy"
          }
        ]
      }
    : Bt[activeService];

  return (
    <section id="website-service" className="py-24 bg-white relative">
      <div id="pillars-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div id="pillars-section-header" className="text-center max-w-3xl mx-auto mb-16">
          <span
            id="pillars-label"
            className="text-xs font-extrabold text-teal-800 tracking-widest uppercase bg-teal-50 border border-teal-100/50 px-3.5 py-1.5 rounded-full"
          >
            {pillarsData.pillarsLabel}
          </span>
          <h2 id="pillars-heading" className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-slate-900 mt-5 tracking-tight leading-tight">
            {pillarsData.pillarsTitle} <br />
            <span className="text-teal-700 italic font-serif font-extrabold">{pillarsData.pillarsHighlight}</span>
          </h2>
          <p id="pillars-subtitle" className="text-slate-500 text-sm sm:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            {pillarsData.pillarsSub}
          </p>
        </div>

        {/* Pillars Grid */}
        <div id="pillars-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 [perspective:1200px] [transform-style:preserve-3d]">
          {pillarsData.pillarsItems.map((item, idx) => {
            const isSpanTwo = !isMember && idx === 3;
            return (
              <motion.div
                key={item.title}
                id={`pillar-card-${idx + 1}`}
                initial={{ opacity: 0, y: 70, rotateX: 12, rotateY: -8, z: -40 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0, z: 0 }}
                whileHover={{
                  y: -12,
                  rotateX: -4,
                  rotateY: 4,
                  z: 15,
                  boxShadow: "0 25px 50px -12px rgba(13, 148, 136, 0.16)",
                  borderColor: "rgba(13, 148, 136, 0.3)"
                }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.8, type: "spring", stiffness: 50, damping: 14 }}
                style={{ transformStyle: "preserve-3d" }}
                className={`bg-slate-50/50 rounded-2xl p-6 md:p-8 border border-slate-100/80 flex flex-col justify-between group transition-all duration-300 relative ${
                  isSpanTwo ? "md:col-span-1 lg:col-span-2" : ""
                }`}
              >
                <div style={{ transform: "translateZ(20px)" }}>
                  <div className="w-11 h-11 rounded-xl bg-teal-800 text-white flex items-center justify-center shadow-lg shadow-teal-800/15 mb-6 group-hover:scale-105 transition-transform duration-300">
                    {renderIcon(item.iconName)}
                  </div>
                  <h3 className="font-serif font-bold text-base md:text-lg text-slate-800 mb-2">
                    {idx + 1}. {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-500 leading-relaxed">{item.description}</p>
                </div>

                {/* Extra Interactive Cards types */}
                <div style={{ transform: "translateZ(30px)" }}>
                  {item.extraType === "speed" && (
                    <div className="mt-8 pt-6 border-t border-slate-200/50 flex items-center justify-between">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        {item.badgeText || "Simulasi Sistem"}
                      </span>
                      <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-800 font-extrabold text-[11px] px-2.5 py-1 rounded-full border border-emerald-100">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        {item.badgeVal || "Aktif"}
                      </div>
                    </div>
                  )}

                  {item.extraType === "copy" && (
                    <div className="mt-6 p-3 bg-white rounded-xl border border-slate-100">
                      <div className="flex justify-between items-center bg-slate-100 p-1 rounded-lg text-[10px] mb-2 font-bold">
                        <button
                          onClick={() => setCopyStyle("before")}
                          className={`flex-1 py-1 rounded transition-all cursor-pointer ${
                            copyStyle === "before" ? "bg-white text-red-600 shadow" : "text-slate-400"
                          }`}
                        >
                          Cara Biasa
                        </button>
                        <button
                          onClick={() => setCopyStyle("after")}
                          className={`flex-1 py-1 rounded transition-all cursor-pointer ${
                            copyStyle === "after" ? "bg-teal-800 text-white shadow" : "text-slate-400"
                          }`}
                        >
                          Sketsa Copy
                        </button>
                      </div>
                      <p className="text-[11px] leading-relaxed italic text-slate-600">
                        {copyStyle === "before"
                          ? "« Kami melayani kebutuhan usaha Anda dengan profesional. Silakan hubungi kami untuk informasi lebih lanjut. »"
                          : "« Jangan Biarkan Masalah Administrasi Menyandera Progres Bisnis Anda! Tim Sketsa Group Memangkas Birokrasi dalam 5 Hari Kerja. »"}
                      </p>
                    </div>
                  )}

                  {item.extraType === "secure" && (
                    <div className="mt-8 flex items-center justify-between py-1 px-3 bg-white rounded-xl border border-slate-100">
                      <span className="text-[10px] font-bold text-slate-400 font-sans font-bold">Status Keamanan</span>
                      <button
                        onClick={() => setIsSecure(!isSecure)}
                        className={`flex items-center gap-1.5 text-[10px] font-extrabold px-2.5 py-1 rounded-full border transition-all cursor-pointer ${
                          isSecure ? "bg-emerald-50 text-emerald-700 border-emerald-100" : "bg-red-50 text-red-700 border-red-100"
                        }`}
                      >
                        {isSecure ? (
                          <>
                            <Lock className="w-3 h-3 text-emerald-600" />
                            <span>Enkripsi SSL Aktif</span>
                          </>
                        ) : (
                          <>
                            <Lock className="w-3 h-3 text-red-500" />
                            <span>Celah Keamanan Terbuka</span>
                          </>
                        )}
                      </button>
                    </div>
                  )}

                  {item.extraType === "flow" && (
                    <div className="mt-8 grid grid-cols-3 gap-2.5">
                      <div className="p-2.5 bg-white rounded-xl border border-slate-100 text-center flex flex-col items-center">
                        <MessageSquare className="w-4 h-4 text-teal-800 mb-1" />
                        <span className="text-[9px] font-bold text-slate-700 block">1. Konsultasi</span>
                        <span className="text-[8px] text-slate-400">Kirim Data</span>
                      </div>
                      <div className="p-2.5 bg-white rounded-xl border border-slate-100 text-center flex flex-col items-center relative">
                        <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 text-teal-800">
                          <ChevronRight className="w-2.5 h-2.5" />
                        </div>
                        <PenTool className="w-4 h-4 text-emerald-500 mb-1" />
                        <span className="text-[9px] font-bold text-slate-700 block font-sans">2. Notif WA</span>
                        <span className="text-[8px] text-slate-400">Pemberitahuan</span>
                        <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 text-teal-800">
                          <ChevronRight className="w-2.5 h-2.5" />
                        </div>
                      </div>
                      <div className="p-2.5 bg-white rounded-xl border border-slate-100 text-center flex flex-col items-center">
                        <Map className="w-4 h-4 text-amber-500 mb-1" />
                        <span className="text-[9px] font-bold text-slate-700 block font-sans font-bold">3. Sertifikat</span>
                        <span className="text-[8px] text-slate-400">Pengesahan</span>
                      </div>
                    </div>
                  )}

                  {item.extraType === "seo" && (
                    <div className="mt-8 flex items-center gap-3">
                      <div className="flex-1 bg-white p-2 rounded-xl border border-slate-100 flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[9px] font-extrabold text-slate-600 font-sans">Terindeks Google</span>
                      </div>
                      <div className="flex-1 bg-white p-2 rounded-xl border border-slate-100 flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                        <span className="text-[9px] font-extrabold text-slate-600 font-sans font-bold">Piksel Server OK</span>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Pillars;
