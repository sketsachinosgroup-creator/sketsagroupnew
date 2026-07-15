import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { Sparkles, TrendingUp, Play } from "lucide-react";
import { Bt } from "../data";

interface HeroProps {
  onOpenConsultation: () => void;
  activeService: string;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, activeService }) => {
  const scrollToWalkthrough = () => {
    const walkthroughSection = document.getElementById("walkthrough-section");
    if (walkthroughSection) {
      const topOffset = walkthroughSection.getBoundingClientRect().top + window.scrollY - 85;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const xVal = e.clientX / innerWidth - 0.5;
      const yVal = e.clientY / innerHeight - 0.5;
      mouseX.set(xVal);
      mouseY.set(yVal);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Parallax transformations
  const transX1 = useTransform(smoothX, (v) => v * 40);
  const transY1 = useTransform(smoothY, (v) => v * 40);

  const transX2 = useTransform(smoothX, (v) => v * -70);
  const transY2 = useTransform(smoothY, (v) => v * -70);

  const rotX1 = useTransform(smoothY, (v) => v * 15);
  const rotY1 = useTransform(smoothX, (v) => v * -15);

  const transX3 = useTransform(smoothX, (v) => v * 110);
  const transY3 = useTransform(smoothY, (v) => v * 110);

  const rotX2 = useTransform(smoothY, (v) => v * -25);
  const rotY2 = useTransform(smoothX, (v) => v * 25);

  const spotlightLeft = useTransform(smoothX, (v) => `${(v + 0.5) * 100}%`);
  const spotlightTop = useTransform(smoothY, (v) => `${(v + 0.5) * 100}%`);

  const rotX3 = useTransform(smoothY, (v) => v * -8);
  const rotY3 = useTransform(smoothX, (v) => v * 8);

  const isMember = activeService === "member";
  const heroData = isMember
    ? {
        badge: "Portal Mitra & Affiliate",
        heroTitle: "Akses Portal Mitra &",
        heroHighlight: "Affiliate Sejoli Premium",
        heroSub: "Jika Anda telah terdaftar sebagai affiliate resmi Sketsa Group, gunakan panel di bawah untuk login ke sistem, melacak total penjualan komisi Anda, mengunduh materi pemasaran eksklusif, serta mengklaim bonus penawaran lisensi Sejoli Anda secara aman.",
        heroStats: [
          { value: "35%", label: "Komisi Penjualan" },
          { value: "Real-time", label: "Notifikasi WA" },
          { value: "Free", label: "Swipe Copywriting" },
          { value: "Exclusive", label: "Mentoring Group" }
        ]
      }
    : Bt[activeService];

  return (
    <section
      id="hero"
      className="relative bg-gradient-to-b from-teal-50/50 via-white to-white pt-10 pb-16 overflow-hidden [perspective:1200px]"
    >
      {/* Ambient background glow */}
      <motion.div
        id="ambient-glow-1"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-teal-100/30 rounded-full blur-[120px] pointer-events-none -z-10"
      />

      {/* Interactive mouse spotlight */}
      <motion.div
        id="interactive-mouse-spotlight"
        style={{ left: spotlightLeft, top: spotlightTop }}
        className="absolute -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-emerald-300/15 rounded-full blur-[110px] pointer-events-none -z-10 hidden lg:block"
      />

      {/* Parallax Grid lines */}
      <motion.div
        id="parallax-grid-lines"
        style={{ x: transX1, y: transY1 }}
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(13,148,136,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(13,148,136,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none -z-20"
      />

      {/* Parallax Interactive Illustrations (Desktop Only) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 hidden lg:block">
        {/* Floating gradient sphere */}
        <motion.div
          style={{ x: transX1, y: transY1 }}
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[18%] left-[8%] w-24 h-24 rounded-full bg-gradient-to-tr from-teal-600 via-emerald-400 to-amber-200 opacity-65 shadow-[inset_-10px_-10px_30px_rgba(0,0,0,0.2),0_20px_40px_rgba(13,148,136,0.25)] blur-[1px]"
        />

        {/* Code mock card */}
        <motion.div
          style={{ x: transX2, y: transY2, rotateX: rotX1, rotateY: rotY1 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { duration: 0.8 },
            scale: { duration: 0.8 },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-[45%] right-[6%] w-56 p-4 rounded-2xl bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.8)] [transform-style:preserve-3d]"
        >
          <div className="flex gap-1.5 mb-3" style={{ transform: "translateZ(15px)" }}>
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
          </div>
          <div className="space-y-2" style={{ transform: "translateZ(25px)" }}>
            <div className="h-2 w-2/3 bg-teal-800/20 rounded" />
            <div className="h-2 w-full bg-teal-800/10 rounded" />
            <div className="h-2 w-1/2 bg-teal-800/10 rounded" />
          </div>
          <div
            className="absolute -bottom-3 -left-3 bg-emerald-500 text-white font-mono text-[9px] font-extrabold px-2.5 py-1 rounded-lg shadow-md"
            style={{ transform: "translateZ(40px)" }}
          >
            99.9% Up
          </div>
        </motion.div>

        {/* ID Official Gold Badge */}
        <motion.div
          style={{ x: transX3, y: transY3, rotateX: rotX2, rotateY: rotY2 }}
          animate={{ y: [0, -12, 0], rotate: [0, 4, 0] }}
          transition={{
            y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 11, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute bottom-[20%] left-[10%] w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-300 via-amber-500 to-yellow-600 border border-amber-200/50 flex flex-col items-center justify-center shadow-[0_20px_40px_rgba(245,158,11,0.2),inset_0_4px_10px_rgba(255,255,255,0.4)] [transform-style:preserve-3d]"
        >
          <div className="text-white font-extrabold font-serif text-[18px] leading-none mb-0.5" style={{ transform: "translateZ(20px)" }}>
            ID
          </div>
          <div className="text-[7px] text-amber-100 font-extrabold tracking-widest uppercase" style={{ transform: "translateZ(15px)" }}>
            Official
          </div>
          <div
            className="absolute -top-2.5 -right-2.5 w-6 h-6 rounded-full bg-teal-800 flex items-center justify-center text-white text-[9px] font-bold shadow"
            style={{ transform: "translateZ(30px)" }}
          >
            ✓
          </div>
        </motion.div>

        {/* Concentric rotating circles */}
        <motion.div
          style={{ x: transX2, y: transY1 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[12%] right-[15%] w-28 h-28 opacity-45 text-teal-800/20"
        >
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" strokeDasharray="6 4" />
            <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1" />
            <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
          </svg>
        </motion.div>

        {/* Live Conversion Pill */}
        <motion.div
          style={{ x: transX1, y: transY3 }}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[48%] left-[16%] px-3 py-1.5 rounded-full bg-slate-900 text-white border border-slate-800 shadow-[0_15px_30px_rgba(0,0,0,0.15)] flex items-center gap-1.5"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-[10px] font-mono font-bold tracking-tight text-slate-300">Conversion +140%</span>
        </motion.div>
      </div>

      {/* Main Hero Container */}
      <motion.div
        id="hero-inner-container"
        style={{ rotateX: rotX3, rotateY: rotY3, transformStyle: "preserve-3d" }}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 transition-transform duration-300 ease-out"
      >
        {/* Top Badge */}
        <motion.div
          id="hero-badge-wrapper"
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
          style={{ transform: "translateZ(35px)" }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-[10px] md:text-xs font-extrabold text-teal-800 tracking-widest uppercase mb-8 shadow-sm cursor-default"
        >
          <Sparkles id="hero-badge-sparkle" className="w-3.5 h-3.5 text-teal-600 animate-pulse" />
          <span>{heroData.badge}</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          id="hero-heading"
          initial={{ opacity: 0, y: 40, rotateX: 12 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 50, damping: 14 }}
          style={{ transform: "translateZ(65px)", transformStyle: "preserve-3d" }}
          className="font-serif font-extrabold text-[32px] sm:text-[44px] md:text-[52px] lg:text-[60px] leading-[1.15] text-slate-900 tracking-tight max-w-4xl mx-auto"
        >
          {heroData.heroTitle} <br />
          <span className="relative inline-block text-teal-800 font-serif italic">
            {heroData.heroHighlight}
            <svg
              id="title-underline-svg"
              className="absolute left-0 bottom-1 w-full h-1.5 md:h-2 text-teal-200/60 -z-10"
              fill="currentColor"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <path d="M0,10 Q50,0 100,10 L100,10 L0,10 Z" />
            </svg>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          id="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, type: "spring", stiffness: 60 }}
          style={{ transform: "translateZ(30px)" }}
          className="text-sm sm:text-base md:text-lg text-slate-600 font-normal max-w-3xl mx-auto mt-8 leading-relaxed px-2 md:px-0"
        >
          {heroData.heroSub}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          id="hero-actions"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, type: "spring", stiffness: 60 }}
          style={{ transform: "translateZ(50px)" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          {isMember ? (
            <a
              href="#login-box-container"
              className="w-full sm:w-auto px-8 py-4 bg-teal-800 hover:bg-teal-950 text-white rounded-2xl font-bold text-sm md:text-base flex items-center justify-center gap-2.5 shadow-xl shadow-teal-900/10 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              <TrendingUp id="cta-trend-icon" className="w-5 h-5 text-emerald-300" />
              <span>Masuk ke Dashboard Sejoli</span>
            </a>
          ) : (
            <button
              id="hero-cta-primary"
              onClick={onOpenConsultation}
              className="w-full sm:w-auto px-8 py-4 bg-teal-800 hover:bg-teal-950 text-white rounded-2xl font-bold text-sm md:text-base flex items-center justify-center gap-2.5 shadow-xl shadow-teal-900/10 hover:shadow-teal-900/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              <TrendingUp id="cta-trend-icon" className="w-5 h-5 text-emerald-300" />
              <span>Konsultasi Gratis Sekarang</span>
            </button>
          )}

          {!isMember && (
            <button
              id="hero-cta-secondary"
              onClick={scrollToWalkthrough}
              className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-800 border-2 border-slate-200 hover:border-slate-300 rounded-2xl font-bold text-sm md:text-base flex items-center justify-center gap-2.5 shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              <Play id="cta-play-icon" className="w-4 h-4 text-teal-700 fill-teal-700/20" />
              <span>Lihat Simulasi Sistem & Alur</span>
            </button>
          )}
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          id="hero-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, type: "spring", stiffness: 60 }}
          style={{ transform: "translateZ(20px)" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-16 pt-8 border-t border-slate-100 [transform-style:preserve-3d]"
        >
          {heroData.heroStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              id={`stat-${i + 1}`}
              whileHover={{
                scale: 1.05,
                rotateX: -4,
                rotateY: 4,
                z: 10,
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                borderColor: "rgba(13, 148, 136, 0.2)",
                boxShadow: "0 15px 30px -10px rgba(13, 148, 136, 0.12)"
              }}
              transition={{ type: "spring", stiffness: 150, damping: 10 }}
              style={{ transformStyle: "preserve-3d" }}
              className="text-center p-3 rounded-2xl border border-transparent transition-all duration-200 cursor-pointer"
            >
              <div
                id={`stat-val-${i + 1}`}
                className="text-2xl md:text-3xl font-extrabold text-teal-800 font-serif"
                style={{ transform: "translateZ(15px)" }}
              >
                {stat.value}
              </div>
              <div
                id={`stat-lbl-${i + 1}`}
                className="text-[11px] font-bold text-slate-400 tracking-wider uppercase mt-1"
                style={{ transform: "translateZ(10px)" }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
export default Hero;
