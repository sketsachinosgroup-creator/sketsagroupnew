import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Sparkles,
  Zap,
  MessageSquare,
  Shield,
  Search,
  FileText,
  Calculator,
  ClipboardCheck,
  BookOpen,
  Map,
  Activity,
  TrendingUp,
  LayoutGrid,
  PenTool,
  DollarSign,
  LogIn
} from "lucide-react";

interface WalkthroughProps {
  activeService: string;
}

export const Walkthrough: React.FC<WalkthroughProps> = ({ activeService }) => {
  const [activeTab, setActiveTab] = useState("speed");

  useEffect(() => {
    const tabMapping: Record<string, string> = {
      website: "speed",
      legalitas: "cek-nama",
      sertifikasi: "iso-readiness",
      marketing: "capi-debugger",
      sosmed: "grid-planner",
      member: "member-earnings"
    };
    setActiveTab(tabMapping[activeService] || "speed");
  }, [activeService]);

  // PageSpeed simulator states
  const [isTestingSpeed, setIsTestingSpeed] = useState(false);
  const [speedProgress, setSpeedProgress] = useState(0);
  const [speedMetrics, setSpeedMetrics] = useState({
    performance: 99,
    accessibility: 100,
    bestPractices: 100,
    seo: 100,
    fcp: "0.4s",
    lcp: "0.8s",
    speedIndex: "0.9s"
  });

  const runSpeedTest = () => {
    setIsTestingSpeed(true);
    setSpeedProgress(0);
    setSpeedMetrics({
      performance: 0,
      accessibility: 0,
      bestPractices: 0,
      seo: 0,
      fcp: "Loading...",
      lcp: "Loading...",
      speedIndex: "Loading..."
    });

    const interval = setInterval(() => {
      setSpeedProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsTestingSpeed(false);
          setSpeedMetrics({
            performance: 99,
            accessibility: 100,
            bestPractices: 100,
            seo: 100,
            fcp: "0.4s",
            lcp: "0.8s",
            speedIndex: "0.9s"
          });
          return 100;
        }
        return prev + 5;
      });
    }, 60);
  };

  // WhatsApp checkout states
  const [buyerName, setBuyerName] = useState("Ahmad");
  const [chosenProduct, setChosenProduct] = useState("Cozy Foam Shoe Cleaner");
  const [checkoutStep, setCheckoutStep] = useState("form");

  // Live Firewall logs states
  const [isFirewallActive, setIsFirewallActive] = useState(true);
  const [blockedThreatsCount, setBlockedThreatsCount] = useState(1342);
  const [firewallLogs, setFirewallLogs] = useState([
    "[16:59:01] System - Firewall initialized successfully",
    "[16:59:12] Cloudflare - SSL/TLS Handshake verified for IP 114.122.31.9",
    "[16:59:15] WAF - Blocked potential SQL Injection at /wp-login.php from Russia (IP: 95.108.213.1)",
    "[16:59:22] Optimizer - Cached page served for visitor from Jakarta"
  ]);

  useEffect(() => {
    if (!isFirewallActive || activeService !== "website" || activeTab !== "security") return;

    const interval = setInterval(() => {
      const cities = ["Bandung", "Surabaya", "Medan", "Singapore", "Hong Kong", "China", "Ukraine"];
      const threats = [
        "Blocked Brute Force attack on administrator path",
        "Filtered Spam comments on blog posts",
        "Blocked DDoS flood request from botnet node",
        "Prevented Cross-Site Scripting (XSS) exploit"
      ];
      const isThreat = Math.random() > 0.4;
      const d = new Date();
      const timeStr = `[${d.getHours().toString().padStart(2, "0")}:${d.getMinutes().toString().padStart(2, "0")}:${d.getSeconds().toString().padStart(2, "0")}]`;

      if (isThreat) {
        const threat = threats[Math.floor(Math.random() * threats.length)];
        const city = cities[Math.floor(Math.random() * cities.length)];
        const newLog = `${timeStr} WAF - ${threat} from ${city}`;
        setFirewallLogs((prev) => [newLog, ...prev.slice(0, 4)]);
        setBlockedThreatsCount((prev) => prev + Math.floor(Math.random() * 2) + 1);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isFirewallActive, activeService, activeTab]);

  // Kemenkumham checker states
  const [proposedName, setProposedName] = useState("PT Sinergi Abadi");
  const [isScanningName, setIsScanningName] = useState(false);
  const [scanResult, setScanResult] = useState("idle");
  const [entityType, setEntityType] = useState("pt");
  const [scaleUsaha, setScaleUsaha] = useState("kecil");

  const runNameScan = (e: React.FormEvent) => {
    e.preventDefault();
    if (proposedName.trim()) {
      setIsScanningName(true);
      setScanResult("idle");
      setTimeout(() => {
        setIsScanningName(false);
        // Multiples of 3 simulate unavailable name for fun diversity
        if (proposedName.length % 3 === 0) {
          setScanResult("unavailable");
        } else {
          setScanResult("available");
        }
      }, 1500);
    }
  };

  // ISO check quiz states
  const [quiz1, setQuiz1] = useState(false);
  const [quiz2, setQuiz2] = useState(false);
  const [quiz3, setQuiz3] = useState(false);
  const [quiz4, setQuiz4] = useState(false);
  const [isoKlausulTab, setIsoKlausulTab] = useState("9001");
  const [isoRoadmapStep, setIsoRoadmapStep] = useState(0);

  const getIsoReadinessScore = () => {
    let score = 0;
    if (quiz1) score += 25;
    if (quiz2) score += 25;
    if (quiz3) score += 25;
    if (quiz4) score += 25;
    return score;
  };

  // Conversion API logs states
  const [isCapiStreamActive, setIsCapiStreamActive] = useState(true);
  const [capiLogs, setCapiLogs] = useState([
    "[17:15:00] GTM Client - PageView event triggered",
    "[17:15:01] CAPI Server - Sent duplicate-deduplicated PageView to Facebook (Match Score: 9.9)",
    "[17:15:10] GTM Client - ViewContent triggered for 'Cozy Shoe Brush'",
    "[17:15:11] CAPI Server - Sent ViewContent server-side (IP/User Agent hashed)"
  ]);

  useEffect(() => {
    if (!isCapiStreamActive || activeService !== "marketing" || activeTab !== "capi-debugger") return;

    const interval = setInterval(() => {
      const d = new Date();
      const timeStr = `[${d.getHours().toString().padStart(2, "0")}:${d.getMinutes().toString().padStart(2, "0")}:${d.getSeconds().toString().padStart(2, "0")}]`;
      const events = [
        "Client - ViewContent triggered for 'Cozy Shoe Cleaner'",
        "Server CAPI - Sent ViewContent server-side (Match Score: 9.2)",
        "Client - AddToCart triggered",
        "Server CAPI - Sent AddToCart server-side (Match Score: 9.5)",
        "Client - InitiateCheckout triggered",
        "Server CAPI - Sent InitiateCheckout server-side (Match Score: 9.7)",
        "Client - Purchase triggered (Order Value: Rp 149.000)",
        "Server CAPI - Sent Purchase server-side (Matched! Revenue recorded successfully)"
      ];
      const randomEvent = events[Math.floor(Math.random() * events.length)];
      setCapiLogs((prev) => [`${timeStr} ${randomEvent}`, ...prev.slice(0, 5)]);
    }, 3000);

    return () => clearInterval(interval);
  }, [isCapiStreamActive, activeService, activeTab]);

  // Marketing ROAS calculator states
  const [adBudget, setAdBudget] = useState(15000000);
  const [ctrPercent, setCtrPercent] = useState(1.5);
  const [cvrPercent, setCvrPercent] = useState(2);
  const [productPrice, setProductPrice] = useState(150000);

  const calculateRoasData = () => {
    const clicks = Math.round(adBudget / 2000); // Rp 2000 CPC average
    const purchases = Math.round(clicks * (cvrPercent / 100));
    const revenue = purchases * productPrice;
    const profit = revenue - adBudget;
    const roas = adBudget > 0 ? (revenue / adBudget).toFixed(2) : "0.00";
    return { clicks, purchases, revenue, profit, roas };
  };

  // Sosmed Planner states
  const [gridPalette, setGridPalette] = useState("warm");
  const [sosmedProductInput, setSosmedProductInput] = useState("Kopi Aren Susu Almond");
  const [sosmedHooks, setSosmedHooks] = useState<string[]>([]);
  const [isGeneratingHook, setIsGeneratingHook] = useState(false);
  const [followersCount, setFollowersCount] = useState(5000);
  const [avgLikes, setAvgLikes] = useState(250);
  const [avgComments, setAvgComments] = useState(15);

  const handleHookGeneration = (e: React.FormEvent) => {
    e.preventDefault();
    if (sosmedProductInput.trim()) {
      setIsGeneratingHook(true);
      setSosmedHooks([]);
      setTimeout(() => {
        setIsGeneratingHook(false);
        setSosmedHooks([
          `🔥 "Suka kopi susu aren tapi perut kembung? Ini rahasia barista kafe hits yang pakai Almond milk tanpa bikin begah!"`,
          `💡 "Jangan beli kopi aren sachetan biasa sebelum kamu tau efek buruk pemanis buatan ini. Coba racikan sehat kami!"`,
          `👉 "Definisi ngopi mewah tapi ramah kalori. Rating 9.8/10 dari para pecinta diet rendah gula. Mau coba?"`
        ]);
      }, 1200);
    }
  };

  const getEngagementRate = () => {
    if (followersCount <= 0) return "0.00";
    return (((avgLikes + avgComments) / followersCount) * 100).toFixed(2);
  };

  // Sejoli Member states
  const [memberEmail, setMemberEmail] = useState("mitra@sketsagroup.xyz");
  const [memberPassword, setMemberPassword] = useState("••••••••");
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authError, setAuthError] = useState("");

  const handleMemberLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAuthenticating(true);
    setAuthError("");
    setTimeout(() => {
      setIsAuthenticating(false);
      setIsLoggedIn(true);
    }, 1200);
  };

  const handleMemberLogout = () => {
    setIsLoggedIn(false);
    setMemberEmail("mitra@sketsagroup.xyz");
  };

  return (
    <section id="walkthrough-section" className="bg-[#031d1a] text-white py-20 relative overflow-hidden [perspective:1200px]">
      <div id="grid-pattern" className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div id="walkthrough-inner-glow" className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-emerald-900/20 rounded-full blur-[150px] pointer-events-none" />

      <div id="walkthrough-container" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <motion.div
          id="walkthrough-badge-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div id="badge-walkthrough" className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-xs font-bold text-emerald-300 tracking-wider uppercase mb-4">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>Simulasi & Bukti Kinerja Sistem</span>
          </div>
          <h2 id="walkthrough-heading" className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight max-w-3xl mx-auto leading-tight">
            {activeService === "website" && "Eksplorasi Fitur Keunggulan Website Kami"}
            {activeService === "legalitas" && "Peralatan Cek Legalitas & Simulasi Berkas"}
            {activeService === "sertifikasi" && "Sistem Kesiapan Kelayakan Sertifikasi ISO"}
            {activeService === "marketing" && "Dasbor Analisis Pelacakan Data Konversi"}
            {activeService === "sosmed" && "Perencana Visual & Copywriting Kreatif"}
            {activeService === "member" && "Dashboard Portal Affiliate & Sejoli Premium"}
          </h2>
          <p id="walkthrough-subtitle" className="text-xs sm:text-sm md:text-base text-teal-200/75 max-w-2xl mx-auto mt-4 leading-relaxed">
            {activeService === "website" && "Kami merancang infrastruktur digital super tangguh. Silakan klik tab interaktif di bawah untuk menguji performa secara langsung."}
            {activeService === "legalitas" && "Pastikan usulan nama perseroan Anda aman dari hak merek dagang lain dan kalkulasikan modal pendirian secara akurat."}
            {activeService === "sertifikasi" && "Uji kesiapan perusahaan Anda menghadapi audit formal dan periksa dokumen wajib standar internasional yang diperlukan."}
            {activeService === "marketing" && "Pantau akurasi pengiriman data konversi piksel server-side dan simulasikan perhitungan laba atas iklan (ROAS) Anda."}
            {activeService === "sosmed" && "Uji coba perencanaan grid layout estetis, generator headline copywriting persuasif, serta kalkulator rasio interaksi profil."}
            {activeService === "member" && "Panel login interaktif bagi agen mitra Sketsa Group untuk melacak rincian bonus komisi, tautan promosi, dan mentor khusus."}
          </p>
        </motion.div>

        {/* Workbench Screen Grid */}
        <motion.div
          id="walkthrough-workbench"
          initial={{ opacity: 0, y: 50, rotateX: 6 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, type: "spring", stiffness: 45, damping: 12 }}
          style={{ transformStyle: "preserve-3d" }}
          className="bg-[#042823] border border-emerald-950/50 rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0"
        >
          {/* Tabs Sidebar */}
          <div id="workbench-tabs" className="lg:col-span-4 bg-[#021815] p-6 md:p-8 flex flex-col justify-between border-r border-emerald-950/40">
            <div id="tabs-wrapper" className="space-y-3">
              <h3 id="tabs-sidebar-title" className="text-[10px] font-bold text-emerald-400 tracking-wider uppercase mb-5">
                Menu Alat Interaktif
              </h3>

              {/* Website Service Tabs */}
              {activeService === "website" && (
                <>
                  <button
                    onClick={() => setActiveTab("speed")}
                    className={`w-full text-left p-3.5 rounded-xl flex items-start gap-3 transition-all cursor-pointer ${
                      activeTab === "speed" ? "bg-teal-900/40 border border-teal-700/50 text-white" : "text-slate-400 hover:bg-[#03201d]/50"
                    }`}
                  >
                    <Zap className={`w-4.5 h-4.5 mt-0.5 ${activeTab === "speed" ? "text-emerald-400" : "text-slate-400"}`} />
                    <div>
                      <div className="font-bold text-xs sm:text-sm">1. Kecepatan Server</div>
                      <p className="text-[10px] text-teal-200/50 mt-0.5">Core Web Vitals 99/100</p>
                    </div>
                  </button>
                  <button
                    onClick={() => setActiveTab("checkout")}
                    className={`w-full text-left p-3.5 rounded-xl flex items-start gap-3 transition-all cursor-pointer ${
                      activeTab === "checkout" ? "bg-teal-900/40 border border-teal-700/50 text-white" : "text-slate-400 hover:bg-[#03201d]/50"
                    }`}
                  >
                    <MessageSquare className={`w-4.5 h-4.5 mt-0.5 ${activeTab === "checkout" ? "text-emerald-400" : "text-slate-400"}`} />
                    <div>
                      <div className="font-bold text-xs sm:text-sm">2. Integrasi Checkout WA</div>
                      <p className="text-[10px] text-teal-200/50 mt-0.5">Simulasi checkout ke WhatsApp CS</p>
                    </div>
                  </button>
                  <button
                    onClick={() => setActiveTab("security")}
                    className={`w-full text-left p-3.5 rounded-xl flex items-start gap-3 transition-all cursor-pointer ${
                      activeTab === "security" ? "bg-teal-900/40 border border-teal-700/50 text-white" : "text-slate-400 hover:bg-[#03201d]/50"
                    }`}
                  >
                    <Shield className={`w-4.5 h-4.5 mt-0.5 ${activeTab === "security" ? "text-emerald-400" : "text-slate-400"}`} />
                    <div>
                      <div className="font-bold text-xs sm:text-sm">3. Firewall & Anti-Hack</div>
                      <p className="text-[10px] text-teal-200/50 mt-0.5">WAF Shield Monitor Live</p>
                    </div>
                  </button>
                </>
              )}

              {/* Legalitas Service Tabs */}
              {activeService === "legalitas" && (
                <>
                  <button
                    onClick={() => setActiveTab("cek-nama")}
                    className={`w-full text-left p-3.5 rounded-xl flex items-start gap-3 transition-all cursor-pointer ${
                      activeTab === "cek-nama" ? "bg-teal-900/40 border border-teal-700/50 text-white" : "text-slate-400 hover:bg-[#03201d]/50"
                    }`}
                  >
                    <Search className={`w-4.5 h-4.5 mt-0.5 ${activeTab === "cek-nama" ? "text-emerald-400" : "text-slate-400"}`} />
                    <div>
                      <div className="font-bold text-xs sm:text-sm">1. Cek Nama Kemenkumham</div>
                      <p className="text-[10px] text-teal-200/50 mt-0.5">Screening instan nama PT/CV</p>
                    </div>
                  </button>
                  <button
                    onClick={() => setActiveTab("syarat-pendirian")}
                    className={`w-full text-left p-3.5 rounded-xl flex items-start gap-3 transition-all cursor-pointer ${
                      activeTab === "syarat-pendirian" ? "bg-teal-900/40 border border-teal-700/50 text-white" : "text-slate-400 hover:bg-[#03201d]/50"
                    }`}
                  >
                    <FileText className={`w-4.5 h-4.5 mt-0.5 ${activeTab === "syarat-pendirian" ? "text-emerald-400" : "text-slate-400"}`} />
                    <div>
                      <div className="font-bold text-xs sm:text-sm">2. Syarat Dokumen</div>
                      <p className="text-[10px] text-teal-200/50 mt-0.5">Persyaratan berkas pendirian</p>
                    </div>
                  </button>
                  <button
                    onClick={() => setActiveTab("biaya-proses")}
                    className={`w-full text-left p-3.5 rounded-xl flex items-start gap-3 transition-all cursor-pointer ${
                      activeTab === "biaya-proses" ? "bg-teal-900/40 border border-teal-700/50 text-white" : "text-slate-400 hover:bg-[#03201d]/50"
                    }`}
                  >
                    <Calculator className={`w-4.5 h-4.5 mt-0.5 ${activeTab === "biaya-proses" ? "text-emerald-400" : "text-slate-400"}`} />
                    <div>
                      <div className="font-bold text-xs sm:text-sm">3. Kalkulator Akta & SK</div>
                      <p className="text-[10px] text-teal-200/50 mt-0.5">Estimasi biaya flat transparan</p>
                    </div>
                  </button>
                </>
              )}

              {/* ISO Sertifikasi Tabs */}
              {activeService === "sertifikasi" && (
                <>
                  <button
                    onClick={() => setActiveTab("iso-readiness")}
                    className={`w-full text-left p-3.5 rounded-xl flex items-start gap-3 transition-all cursor-pointer ${
                      activeTab === "iso-readiness" ? "bg-teal-900/40 border border-teal-700/50 text-white" : "text-slate-400 hover:bg-[#03201d]/50"
                    }`}
                  >
                    <ClipboardCheck className={`w-4.5 h-4.5 mt-0.5 ${activeTab === "iso-readiness" ? "text-emerald-400" : "text-slate-400"}`} />
                    <div>
                      <div className="font-bold text-xs sm:text-sm">1. Kuis Kesiapan ISO</div>
                      <p className="text-[10px] text-teal-200/50 mt-0.5">Uji kesiapan audit internal</p>
                    </div>
                  </button>
                  <button
                    onClick={() => setActiveTab("iso-klausul")}
                    className={`w-full text-left p-3.5 rounded-xl flex items-start gap-3 transition-all cursor-pointer ${
                      activeTab === "iso-klausul" ? "bg-teal-900/40 border border-teal-700/50 text-white" : "text-slate-400 hover:bg-[#03201d]/50"
                    }`}
                  >
                    <BookOpen className={`w-4.5 h-4.5 mt-0.5 ${activeTab === "iso-klausul" ? "text-emerald-400" : "text-slate-400"}`} />
                    <div>
                      <div className="font-bold text-xs sm:text-sm">2. Direktori Dokumen Wajib</div>
                      <p className="text-[10px] text-teal-200/50 mt-0.5">Template standar mutu/keamanan</p>
                    </div>
                  </button>
                  <button
                    onClick={() => setActiveTab("audit-simulation")}
                    className={`w-full text-left p-3.5 rounded-xl flex items-start gap-3 transition-all cursor-pointer ${
                      activeTab === "audit-simulation" ? "bg-teal-900/40 border border-teal-700/50 text-white" : "text-slate-400 hover:bg-[#03201d]/50"
                    }`}
                  >
                    <Map className={`w-4.5 h-4.5 mt-0.5 ${activeTab === "audit-simulation" ? "text-emerald-400" : "text-slate-400"}`} />
                    <div>
                      <div className="font-bold text-xs sm:text-sm">3. Peta Jalan Audit</div>
                      <p className="text-[10px] text-teal-200/50 mt-0.5">5 langkah kelulusan 100%</p>
                    </div>
                  </button>
                </>
              )}

              {/* Marketing Tabs */}
              {activeService === "marketing" && (
                <>
                  <button
                    onClick={() => setActiveTab("capi-debugger")}
                    className={`w-full text-left p-3.5 rounded-xl flex items-start gap-3 transition-all cursor-pointer ${
                      activeTab === "capi-debugger" ? "bg-teal-900/40 border border-teal-700/50 text-white" : "text-slate-400 hover:bg-[#03201d]/50"
                    }`}
                  >
                    <Activity className={`w-4.5 h-4.5 mt-0.5 ${activeTab === "capi-debugger" ? "text-emerald-400" : "text-slate-400"}`} />
                    <div>
                      <div className="font-bold text-xs sm:text-sm">1. Server CAPI Live Stream</div>
                      <p className="text-[10px] text-teal-200/50 mt-0.5">Pelacakan sisi server Meta/TikTok</p>
                    </div>
                  </button>
                  <button
                    onClick={() => setActiveTab("roas-calculator")}
                    className={`w-full text-left p-3.5 rounded-xl flex items-start gap-3 transition-all cursor-pointer ${
                      activeTab === "roas-calculator" ? "bg-teal-900/40 border border-teal-700/50 text-white" : "text-slate-400 hover:bg-[#03201d]/50"
                    }`}
                  >
                    <Calculator className={`w-4.5 h-4.5 mt-0.5 ${activeTab === "roas-calculator" ? "text-emerald-400" : "text-slate-400"}`} />
                    <div>
                      <div className="font-bold text-xs sm:text-sm">2. Kalkulator Target ROAS</div>
                      <p className="text-[10px] text-teal-200/50 mt-0.5">Simulasi profit budget iklan</p>
                    </div>
                  </button>
                  <button
                    onClick={() => setActiveTab("pixel-checker")}
                    className={`w-full text-left p-3.5 rounded-xl flex items-start gap-3 transition-all cursor-pointer ${
                      activeTab === "pixel-checker" ? "bg-teal-900/40 border border-teal-700/50 text-white" : "text-slate-400 hover:bg-[#03201d]/50"
                    }`}
                  >
                    <TrendingUp className={`w-4.5 h-4.5 mt-0.5 ${activeTab === "pixel-checker" ? "text-emerald-400" : "text-slate-400"}`} />
                    <div>
                      <div className="font-bold text-xs sm:text-sm">3. Audit Akurasi Data</div>
                      <p className="text-[10px] text-teal-200/50 mt-0.5">Analisis loss cookie browser</p>
                    </div>
                  </button>
                </>
              )}

              {/* Sosmed Tabs */}
              {activeService === "sosmed" && (
                <>
                  <button
                    onClick={() => setActiveTab("grid-planner")}
                    className={`w-full text-left p-3.5 rounded-xl flex items-start gap-3 transition-all cursor-pointer ${
                      activeTab === "grid-planner" ? "bg-teal-900/40 border border-teal-700/50 text-white" : "text-slate-400 hover:bg-[#03201d]/50"
                    }`}
                  >
                    <LayoutGrid className={`w-4.5 h-4.5 mt-0.5 ${activeTab === "grid-planner" ? "text-emerald-400" : "text-slate-400"}`} />
                    <div>
                      <div className="font-bold text-xs sm:text-sm">1. Grid Planner Aesthetic</div>
                      <p className="text-[10px] text-teal-200/50 mt-0.5">Simulasi visual feed Instagram</p>
                    </div>
                  </button>
                  <button
                    onClick={() => setActiveTab("copywriting-hook")}
                    className={`w-full text-left p-3.5 rounded-xl flex items-start gap-3 transition-all cursor-pointer ${
                      activeTab === "copywriting-hook" ? "bg-teal-900/40 border border-teal-700/50 text-white" : "text-slate-400 hover:bg-[#03201d]/50"
                    }`}
                  >
                    <PenTool className={`w-4.5 h-4.5 mt-0.5 ${activeTab === "copywriting-hook" ? "text-emerald-400" : "text-slate-400"}`} />
                    <div>
                      <div className="font-bold text-xs sm:text-sm">2. Generator Headline Viral</div>
                      <p className="text-[10px] text-teal-200/50 mt-0.5">Mesin pemicu konversi kata</p>
                    </div>
                  </button>
                  <button
                    onClick={() => setActiveTab("engagement-calculator")}
                    className={`w-full text-left p-3.5 rounded-xl flex items-start gap-3 transition-all cursor-pointer ${
                      activeTab === "engagement-calculator" ? "bg-teal-900/40 border border-teal-700/50 text-white" : "text-slate-400 hover:bg-[#03201d]/50"
                    }`}
                  >
                    <TrendingUp className={`w-4.5 h-4.5 mt-0.5 ${activeTab === "engagement-calculator" ? "text-emerald-400" : "text-slate-400"}`} />
                    <div>
                      <div className="font-bold text-xs sm:text-sm">3. Kalkulator Engagement</div>
                      <p className="text-[10px] text-teal-200/50 mt-0.5">Analisis kesehatan akun sosmed</p>
                    </div>
                  </button>
                </>
              )}

              {/* Sejoli Member Tabs */}
              {activeService === "member" && (
                <>
                  <button
                    onClick={() => setActiveTab("member-earnings")}
                    className={`w-full text-left p-3.5 rounded-xl flex items-start gap-3 transition-all cursor-pointer ${
                      activeTab === "member-earnings" ? "bg-teal-900/40 border border-teal-700/50 text-white" : "text-slate-400 hover:bg-[#03201d]/50"
                    }`}
                  >
                    <DollarSign className={`w-4.5 h-4.5 mt-0.5 ${activeTab === "member-earnings" ? "text-emerald-400" : "text-slate-400"}`} />
                    <div>
                      <div className="font-bold text-xs sm:text-sm">1. Saldo & Komisi Mitra</div>
                      <p className="text-[10px] text-teal-200/50 mt-0.5">Total pendapatan afiliasi</p>
                    </div>
                  </button>
                  <button
                    onClick={() => setActiveTab("member-commissions")}
                    className={`w-full text-left p-3.5 rounded-xl flex items-start gap-3 transition-all cursor-pointer ${
                      activeTab === "member-commissions" ? "bg-teal-900/40 border border-teal-700/50 text-white" : "text-slate-400 hover:bg-[#03201d]/50"
                    }`}
                  >
                    <Activity className={`w-4.5 h-4.5 mt-0.5 ${activeTab === "member-commissions" ? "text-emerald-400" : "text-slate-400"}`} />
                    <div>
                      <div className="font-bold text-xs sm:text-sm">2. Riwayat Transaksi</div>
                      <p className="text-[10px] text-teal-200/50 mt-0.5">Leads closing real-time</p>
                    </div>
                  </button>
                  <button
                    onClick={() => setActiveTab("member-materials")}
                    className={`w-full text-left p-3.5 rounded-xl flex items-start gap-3 transition-all cursor-pointer ${
                      activeTab === "member-materials" ? "bg-teal-900/40 border border-teal-700/50 text-white" : "text-slate-400 hover:bg-[#03201d]/50"
                    }`}
                  >
                    <FileText className={`w-4.5 h-4.5 mt-0.5 ${activeTab === "member-materials" ? "text-emerald-400" : "text-slate-400"}`} />
                    <div>
                      <div className="font-bold text-xs sm:text-sm">3. Bahan Promosi / Swipe</div>
                      <p className="text-[10px] text-teal-200/50 mt-0.5">Banner & copy siap sebar</p>
                    </div>
                  </button>
                </>
              )}
            </div>

            {/* Sidebar Footer */}
            <div id="tab-sidebar-footer" className="mt-8 pt-6 border-t border-emerald-950/40 hidden lg:block text-slate-400">
              <div id="sidebar-award" className="flex items-center gap-2 text-emerald-300 text-xs font-semibold">
                <Map className="w-4 h-4" />
                <span>Teknologi Standar Dunia</span>
              </div>
              <p id="sidebar-footer-text" className="text-[11px] text-teal-200/50 mt-1">
                Seluruh solusi infrastruktur kami dirancang agar terukur, mudah digunakan oleh pengguna awam, dan aman dilindungi enkripsi.
              </p>
            </div>
          </div>

          {/* Workbench Simulated Device Screen */}
          <div id="workbench-screen" className="lg:col-span-8 p-6 md:p-8 bg-[#04211d] flex flex-col justify-between relative min-h-[440px]">
            {/* Browser Topbar URL bar style */}
            <div id="browser-topbar" className="flex items-center justify-between border-b border-emerald-950/40 pb-4 mb-6">
              <div id="browser-dots" className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
              <div id="browser-address" className="bg-[#021815] text-[10px] md:text-xs text-teal-300/60 px-4 py-1.5 rounded-lg border border-emerald-950/50 max-w-xs md:max-w-md truncate font-mono">
                {activeService === "website" && `https://sketsagroup.xyz/website-simulation/${activeTab}`}
                {activeService === "legalitas" && `https://sketsagroup.xyz/legalitas-hub/${activeTab}`}
                {activeService === "sertifikasi" && `https://sketsagroup.xyz/iso-compliance/${activeTab}`}
                {activeService === "marketing" && `https://sketsagroup.xyz/capi-tracker/${activeTab}`}
                {activeService === "sosmed" && `https://sketsagroup.xyz/social-planner/${activeTab}`}
                {activeService === "member" && `https://sejoli.sketsagroup.xyz/dashboard/${activeTab}`}
              </div>
              <div className="w-10" />
            </div>

            <div className="flex-1 flex flex-col justify-between">
              
              {/* WEBSITE SIMULATORS */}
              {activeService === "website" && activeTab === "speed" && (
                <div id="website-speed-view" className="space-y-6">
                  <div>
                    <h4 className="text-sm md:text-base font-bold text-white flex items-center gap-2 font-serif">
                      Google PageSpeed Insights Simulator
                      <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-500/30 font-sans">
                        Official Vitals
                      </span>
                    </h4>
                    <p className="text-xs text-teal-200/60 mt-1">Uji kecepatan server cloud kami. Semua kode dioptimasi hingga zero blocking time.</p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-4">
                    {Object.entries({
                      Performance: speedMetrics.performance,
                      Accessibility: speedMetrics.accessibility,
                      "Best Practices": speedMetrics.bestPractices,
                      SEO: speedMetrics.seo
                    }).map(([label, val]) => (
                      <div key={label} className="flex flex-col items-center p-3 bg-[#021815] rounded-xl border border-emerald-950/50">
                        <div className="relative w-14 h-14 flex items-center justify-center">
                          <svg className="w-full h-full transform -rotate-90 animate-pulse" viewBox="0 0 36 36">
                            <path className="text-emerald-950" strokeWidth="2.5" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                            <path className="text-emerald-400" strokeDasharray={`${val}, 100`} strokeWidth="3" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                          </svg>
                          <span className="absolute text-xs font-extrabold text-emerald-400 font-mono">{val || "---"}</span>
                        </div>
                        <span className="text-[10px] font-bold text-slate-300 mt-2">{label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between p-3.5 bg-[#021815] rounded-xl border border-emerald-950/40 gap-4">
                    <div className="grid grid-cols-3 gap-4 text-center w-full sm:w-auto text-[10px]">
                      <div>
                        <span className="text-slate-400 block uppercase font-sans">FCP</span>
                        <span className="text-xs font-extrabold text-emerald-400 font-mono mt-0.5 block">{speedMetrics.fcp}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block uppercase font-sans">LCP</span>
                        <span className="text-xs font-extrabold text-emerald-400 font-mono mt-0.5 block">{speedMetrics.lcp}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block uppercase font-sans">Index</span>
                        <span className="text-xs font-extrabold text-emerald-400 font-mono mt-0.5 block">{speedMetrics.speedIndex}</span>
                      </div>
                    </div>
                    <button
                      onClick={runSpeedTest}
                      disabled={isTestingSpeed}
                      className="w-full sm:w-auto px-4 py-2 bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-800 text-white font-bold text-xs rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                    >
                      {isTestingSpeed ? (
                        <span className="animate-pulse">Menguji ({speedProgress}%)</span>
                      ) : (
                        <>
                          <Zap className="w-3 h-3 fill-current" />
                          <span>Coba Uji Ulang</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}

              {activeService === "website" && activeTab === "checkout" && (
                <div id="website-checkout-view" className="space-y-4">
                  <div>
                    <h4 className="text-sm md:text-base font-bold text-white flex items-center gap-2 font-serif">Form Order Instan WhatsApp</h4>
                    <p className="text-xs text-teal-200/60 mt-0.5">Uji alur checkout otomatis ke admin WA + input list sales affiliate.</p>
                  </div>
                  <div className="bg-[#021815] p-4 rounded-xl border border-emerald-950/50">
                    {checkoutStep === "form" && (
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          setCheckoutStep("processing");
                          setTimeout(() => setCheckoutStep("completed"), 1500);
                        }}
                        className="space-y-3"
                      >
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="text-[10px] text-slate-400 block mb-1 font-sans font-bold">Nama Pemesan</label>
                            <input
                              type="text"
                              value={buyerName}
                              onChange={(e) => setBuyerName(e.target.value)}
                              className="w-full text-xs bg-[#04211d] border border-emerald-950 px-2 py-1.5 rounded text-white focus:outline-none"
                            />
                          </div>
                          <div>
                            <label className="text-[10px] text-slate-400 block mb-1 font-sans font-bold">Pilih Produk</label>
                            <select
                              value={chosenProduct}
                              onChange={(e) => setChosenProduct(e.target.value)}
                              className="w-full text-xs bg-[#04211d] border border-emerald-950 px-2 py-1.5 rounded text-white focus:outline-none"
                            >
                              <option value="Cozy Foam Shoe Cleaner">Cozy Foam Shoe Cleaner</option>
                              <option value="Premium Company Profile">Premium Company Profile</option>
                            </select>
                          </div>
                        </div>
                        <button
                          type="submit"
                          className="w-full py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider rounded transition-all cursor-pointer font-sans"
                        >
                          Simulasikan Kirim Checkout
                        </button>
                      </form>
                    )}

                    {checkoutStep === "processing" && (
                      <div className="text-center py-6 font-mono text-xs text-slate-300">
                        Menghubungkan ke API Gateway & Memaketkan Data WhatsApp...
                      </div>
                    )}

                    {checkoutStep === "completed" && (
                      <div className="space-y-2 text-xs">
                        <span className="text-emerald-400 font-bold block">✓ Checkout Sukses Terkirim!</span>
                        <div className="p-3 bg-[#04211d] border border-emerald-950 rounded font-mono text-[11px] text-teal-200/80 leading-relaxed">
                          <p>
                            <span className="text-emerald-500">[Ke WhatsApp CS]</span> "Halo, saya *{buyerName}* memesan *{chosenProduct}*. Mohon diinfokan nomor rekening..."
                          </p>
                          <p className="mt-1 text-slate-500">// Otomatis mencatat Leads baru di Dashboard Affiliate</p>
                        </div>
                        <button
                          onClick={() => setCheckoutStep("form")}
                          className="text-[10px] bg-slate-800 text-teal-300 px-3 py-1 rounded cursor-pointer font-bold"
                        >
                          Reset Form
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {activeService === "website" && activeTab === "security" && (
                <div id="website-security-view" className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm md:text-base font-bold text-white font-serif">Live Firewall Shield Log</h4>
                      <p className="text-xs text-teal-200/60 mt-0.5 font-sans">Simulasi pencegahan hacking dan bot spam otomatis.</p>
                    </div>
                    <span className="text-xs font-mono font-bold text-emerald-400">Threat Blocked: {blockedThreatsCount}</span>
                  </div>
                  <div className="bg-[#021815] p-4 rounded-xl border border-emerald-950/50 font-mono text-[11px] text-slate-400 space-y-1.5">
                    {firewallLogs.map((log, index) => (
                      <p key={index} className={log.includes("WAF - Blocked") ? "text-red-400 font-bold" : "text-slate-400"}>
                        {log}
                      </p>
                    ))}
                  </div>
                  <div className="flex justify-end">
                    <button
                      onClick={() => setIsFirewallActive(!isFirewallActive)}
                      className={`text-[10px] font-bold px-3 py-1.5 rounded uppercase cursor-pointer ${
                        isFirewallActive ? "bg-red-500 text-white" : "bg-emerald-500 text-white"
                      }`}
                    >
                      {isFirewallActive ? "Matikan Shield Log" : "Aktifkan Shield Log"}
                    </button>
                  </div>
                </div>
              )}

              {/* LEGALITAS SIMULATORS */}
              {activeService === "legalitas" && activeTab === "cek-nama" && (
                <div id="legalitas-cek-view" className="space-y-4">
                  <div>
                    <h4 className="text-sm md:text-base font-bold text-white font-serif flex items-center gap-2">
                      SABH Kemenkumham Name Checker
                      <span className="text-[9px] bg-teal-500/20 text-teal-300 px-2 py-0.5 rounded-full border border-teal-500/30 font-sans font-bold">
                        Database Nasional
                      </span>
                    </h4>
                    <p className="text-xs text-teal-200/60 mt-1">Cari ketersediaan nama PT / CV Anda secara instan di database pengesahan negara.</p>
                  </div>

                  <form onSubmit={runNameScan} className="flex gap-2 bg-[#021815] p-2 rounded-xl border border-emerald-950/60">
                    <input
                      type="text"
                      value={proposedName}
                      onChange={(e) => setProposedName(e.target.value)}
                      placeholder="Ketik usulan nama (Contoh: PT Sinergi Abadi)"
                      className="flex-1 bg-transparent px-3 py-2 text-xs text-white focus:outline-none"
                    />
                    <button
                      type="submit"
                      disabled={isScanningName}
                      className="bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-800 text-white px-4 py-2 rounded text-xs font-bold transition-all cursor-pointer"
                    >
                      {isScanningName ? "Memindai..." : "Pindai Database"}
                    </button>
                  </form>

                  <div className="bg-[#021815] p-4 rounded-xl border border-emerald-950/40 min-h-[100px] flex items-center justify-center">
                    {isScanningName && (
                      <div className="text-center font-mono text-xs text-teal-300 animate-pulse">
                        Menghubungkan ke server Direktorat Perdata AHU Online...
                      </div>
                    )}
                    {!isScanningName && scanResult === "idle" && (
                      <div className="text-xs text-slate-400 text-center">
                        Masukkan nama di atas lalu klik Pindai Database untuk verifikasi keunikan.
                      </div>
                    )}
                    {!isScanningName && scanResult === "available" && (
                      <div className="space-y-2 text-center w-full">
                        <div className="inline-block w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-400/30 flex items-center justify-center mx-auto text-sm font-bold">
                          ✓
                        </div>
                        <h5 className="text-xs font-bold text-white">NAMA TERSEDIA UNTUK DIPESAN!</h5>
                        <p className="text-[11px] text-teal-200/60 leading-relaxed max-w-md mx-auto">
                          Usulan nama <strong>"{proposedName}"</strong> tidak memiliki kemiripan 100% dengan perseroan terdaftar lain pada KBLI yang sama. Siap didaftarkan oleh Notaris kami.
                        </p>
                      </div>
                    )}
                    {!isScanningName && scanResult === "unavailable" && (
                      <div className="space-y-2 text-center w-full">
                        <div className="inline-block w-8 h-8 rounded-full bg-red-500/20 text-red-400 border border-red-400/30 flex items-center justify-center mx-auto text-sm font-bold">
                          ✗
                        </div>
                        <h5 className="text-xs font-bold text-red-300 font-sans">NAMA SUDAH DIGUNAKAN!</h5>
                        <p className="text-[11px] text-teal-200/60 leading-relaxed max-w-md mx-auto">
                          Mohon maaf, nama <strong>"{proposedName}"</strong> memiliki kesamaan fonetis atau persis dengan badan hukum terdaftar. Silakan coba kombinasi nama lain.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {activeService === "legalitas" && activeTab === "syarat-pendirian" && (
                <div id="legalitas-syarat-view" className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm md:text-base font-bold text-white font-serif">Daftar Dokumen Pendirian</h4>
                      <p className="text-xs text-teal-200/60 mt-0.5">Persiapan administrasi dokumen yang perlu Anda siapkan.</p>
                    </div>
                    <div className="flex gap-1.5">
                      <button
                        onClick={() => setEntityType("pt")}
                        className={`px-3 py-1 rounded text-[10px] font-bold cursor-pointer ${
                          entityType === "pt" ? "bg-teal-700 text-white" : "bg-[#021815] text-slate-400"
                        }`}
                      >
                        PT (Perseroan)
                      </button>
                      <button
                        onClick={() => setEntityType("cv")}
                        className={`px-3 py-1 rounded text-[10px] font-bold cursor-pointer ${
                          entityType === "cv" ? "bg-teal-700 text-white" : "bg-[#021815] text-slate-400"
                        }`}
                      >
                        CV (Kemitraan)
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="bg-[#021815] p-3 rounded-xl border border-emerald-950/40 text-xs">
                      <span className="text-emerald-400 font-bold block mb-1.5">1. Dokumen Wajib Pemilik (Format HP/Scan)</span>
                      <ul className="space-y-1 text-slate-300 list-disc pl-4 text-[11px]">
                        <li>Foto KTP seluruh pendiri (Minimal 2 orang)</li>
                        <li>Foto NPWP Pribadi seluruh pendiri</li>
                        <li>Alamat e-mail aktif dan No. HP pengurus</li>
                      </ul>
                    </div>
                    <div className="bg-[#021815] p-3 rounded-xl border border-emerald-950/40 text-xs">
                      <span className="text-emerald-400 font-bold block mb-1.5">2. Dokumen Rencana Usaha</span>
                      <ul className="space-y-1 text-slate-300 list-disc pl-4 text-[11px]">
                        <li>Usulan 3 pilihan nama badan usaha</li>
                        <li>Rencana bidang usaha sesuai Klasifikasi KBLI</li>
                        <li>Alamat domisili kantor (Bisa Virtual Office)</li>
                        <li>Porsi kepemilikan modal masing-masing pendiri</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-[11px] text-teal-200/50 leading-relaxed bg-[#021815] p-2.5 rounded border border-emerald-950/30">
                    * <strong>Catatan:</strong> Jika tidak memiliki alamat fisik di area zonasi komersial, Anda dapat menyewa <strong>Virtual Office</strong> legal melalui tim admin kami untuk memenuhi syarat pengesahan domisili NIB OSS.
                  </p>
                </div>
              )}

              {activeService === "legalitas" && activeTab === "biaya-proses" && (
                <div id="legalitas-biaya-view" className="space-y-4">
                  <div>
                    <h4 className="text-sm md:text-base font-bold text-white font-serif">Kalkulator Biaya Pendirian Badan Usaha</h4>
                    <p className="text-xs text-teal-200/60 mt-0.5">Penetapan biaya flat transparan sesuai skala modal kerja Anda.</p>
                  </div>

                  <div className="bg-[#021815] p-4 rounded-xl border border-emerald-950/50 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] text-slate-400 block mb-1 font-sans font-bold">Skala Usaha (Modal Disetor)</label>
                        <select
                          value={scaleUsaha}
                          onChange={(e) => setScaleUsaha(e.target.value)}
                          className="w-full text-xs bg-[#04211d] border border-emerald-950 p-2 rounded text-white focus:outline-none"
                        >
                          <option value="mikro">Mikro (Modal di bawah Rp 1 Milyar)</option>
                          <option value="kecil">Kecil (Modal Rp 1 - 5 Milyar)</option>
                          <option value="menengah">Menengah (Modal Rp 5 - 10 Milyar)</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-[10px] text-slate-400 block mb-1 font-sans font-bold">Jenis Layanan Pendirian</label>
                        <select
                          value={entityType}
                          onChange={(e) => setEntityType(e.target.value)}
                          className="w-full text-xs bg-[#04211d] border border-emerald-950 p-2 rounded text-white focus:outline-none"
                        >
                          <option value="pt">Pendirian PT Lengkap</option>
                          <option value="cv">Pendirian CV Lengkap</option>
                        </select>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-emerald-950 flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-400">Total Investasi Bersih (Flat):</span>
                      <span className="text-sm font-bold text-emerald-400">{entityType === "pt" ? "Rp 3.999.000" : "Rp 2.499.000"}</span>
                    </div>

                    <div className="text-[11px] text-teal-200/60 leading-relaxed grid grid-cols-3 gap-2">
                      <div className="bg-[#04211d] p-2 rounded text-center">
                        <span className="block text-[9px] text-slate-400">Lama Proses</span>
                        <span className="font-bold text-white block mt-0.5">5-7 Hari Kerja</span>
                      </div>
                      <div className="bg-[#04211d] p-2 rounded text-center">
                        <span className="block text-[9px] text-slate-400">Akte Notaris</span>
                        <span className="font-bold text-white block mt-0.5">Termasuk</span>
                      </div>
                      <div className="bg-[#04211d] p-2 rounded text-center">
                        <span className="block text-[9px] text-slate-400">Sertifikat NIB</span>
                        <span className="font-bold text-white block mt-0.5">Tercetak Sah</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SERTIFIKASI SIMULATORS */}
              {activeService === "sertifikasi" && activeTab === "iso-readiness" && (
                <div id="iso-kuis-view" className="space-y-4">
                  <div>
                    <h4 className="text-sm md:text-base font-bold text-white font-serif">Kuis Kelayakan & Kesiapan Audit ISO</h4>
                    <p className="text-xs text-teal-200/60 mt-0.5">Centang indikator di bawah untuk melihat skor kesiapan audit internal perusahaan Anda.</p>
                  </div>

                  <div className="bg-[#021815] p-4 rounded-xl border border-emerald-950/50 space-y-3">
                    <label className="flex items-start gap-3 text-xs text-slate-300 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={quiz1}
                        onChange={(e) => setQuiz1(e.target.checked)}
                        className="mt-0.5 cursor-pointer accent-teal-500"
                      />
                      <span>Apakah perusahaan Anda sudah memiliki SOP tertulis untuk alur kerja operasional utama?</span>
                    </label>
                    <label className="flex items-start gap-3 text-xs text-slate-300 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={quiz2}
                        onChange={(e) => setQuiz2(e.target.checked)}
                        className="mt-0.5 cursor-pointer accent-teal-500"
                      />
                      <span>Apakah ada Bagan Organisasi resmi beserta draf rincian wewenang tugas (Job Description) karyawan?</span>
                    </label>
                    <label className="flex items-start gap-3 text-xs text-slate-300 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={quiz3}
                        onChange={(e) => setQuiz3(e.target.checked)}
                        className="mt-0.5 cursor-pointer accent-teal-500"
                      />
                      <span>Apakah perusahaan Anda rutin mendokumentasikan keluhan pelanggan / audit kontrol mutu dasar?</span>
                    </label>
                    <label className="flex items-start gap-3 text-xs text-slate-300 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={quiz4}
                        onChange={(e) => setQuiz4(e.target.checked)}
                        className="mt-0.5 cursor-pointer accent-teal-500"
                      />
                      <span>Apakah jajaran direksi/pimpinan berkomitmen menetapkan kebijakan sasaran mutu jangka panjang?</span>
                    </label>

                    <div className="pt-3 border-t border-emerald-950 flex items-center justify-between text-xs">
                      <span className="text-slate-400 font-bold">Skor Kesiapan Audit:</span>
                      <span className={`font-mono font-bold text-sm ${getIsoReadinessScore() > 50 ? "text-emerald-400" : "text-yellow-400"}`}>
                        {getIsoReadinessScore()}% {getIsoReadinessScore() === 100 ? "(Sangat Siap!)" : "(Butuh Pendampingan)"}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {activeService === "sertifikasi" && activeTab === "iso-klausul" && (
                <div id="iso-klausul-view" className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm md:text-base font-bold text-white font-serif">Klausul & Daftar Dokumen Wajib</h4>
                      <p className="text-xs text-teal-200/60 mt-0.5 font-sans">Daftar dokumen wajib yang kami susun untuk kelulusan sertifikasi Anda.</p>
                    </div>
                    <div className="flex gap-1">
                      <button
                        onClick={() => setIsoKlausulTab("9001")}
                        className={`px-2 py-0.5 rounded text-[9px] font-bold cursor-pointer ${
                          isoKlausulTab === "9001" ? "bg-teal-700 text-white" : "bg-[#021815] text-slate-400"
                        }`}
                      >
                        ISO 9001
                      </button>
                      <button
                        onClick={() => setIsoKlausulTab("27001")}
                        className={`px-2 py-0.5 rounded text-[9px] font-bold cursor-pointer ${
                          isoKlausulTab === "27001" ? "bg-teal-700 text-white" : "bg-[#021815] text-slate-400"
                        }`}
                      >
                        ISO 27001
                      </button>
                    </div>
                  </div>

                  <div className="bg-[#021815] p-4 rounded-xl border border-emerald-950/50 space-y-2">
                    <span className="text-xs font-bold text-emerald-400 block mb-1">
                      {isoKlausulTab === "9001" ? "Standardisasi Mutu Manajemen (ISO 9001:2015)" : "Standardisasi Keamanan Data IT (ISO 27001:2022)"}
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-slate-300 font-mono">
                      {isoKlausulTab === "9001" ? (
                        <>
                          <p>✓ Manual Mutu Perusahaan (Clause 4.3)</p>
                          <p>✓ Prosedur Pengendalian Data (Clause 7.5)</p>
                          <p>✓ SOP Pengendalian Produk Cacat (Clause 8.7)</p>
                          <p>✓ Laporan Hasil Tinjauan Manajemen (Clause 9.3)</p>
                        </>
                      ) : (
                        <>
                          <p>✓ ISMS Scope & IT Security Policy (Clause 4.3)</p>
                          <p>✓ Risk Assessment & Risk Treatment Plan (Clause 6.1)</p>
                          <p>✓ Statement of Applicability - SOA (Clause 6.2)</p>
                          <p>✓ Incident Management Procedure (Control A.12)</p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {activeService === "sertifikasi" && activeTab === "audit-simulation" && (
                <div id="iso-roadmap-view" className="space-y-4">
                  <div>
                    <h4 className="text-sm md:text-base font-bold text-white font-serif">Peta Jalan 5 Langkah Sertifikasi ISO</h4>
                    <p className="text-xs text-teal-200/60 mt-0.5">Siklus pendampingan intensif dari Sketsa Group hingga sertifikat terbit.</p>
                  </div>

                  <div className="grid grid-cols-5 gap-2 text-center text-[10px]">
                    {["Gap Analysis", "SOP Drafting", "Internal Audit", "Audit Tahap 1", "Kelulusan Sah"].map((label, stepIdx) => (
                      <button
                        key={label}
                        onClick={() => setIsoRoadmapStep(stepIdx)}
                        className={`p-2 rounded border transition-all cursor-pointer ${
                          stepIdx === isoRoadmapStep ? "bg-emerald-500 border-emerald-400 text-white font-bold" : "bg-[#021815] border-emerald-950 text-slate-400"
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>

                  <div className="bg-[#021815] p-3 rounded-xl border border-emerald-950/40 text-xs">
                    {isoRoadmapStep === 0 && (
                      <p className="leading-relaxed">
                        <strong>Tahap 1: Gap Analysis</strong>
                        <br />
                        Konsultan kami berkunjung untuk menilai sejauh mana kesiapan operasional internal perusahaan Anda terhadap klausul baku ISO. Mencatat rincian yang wajib disempurnakan.
                      </p>
                    )}
                    {isoRoadmapStep === 1 && (
                      <p className="leading-relaxed">
                        <strong>Tahap 2: SOP Drafting & Pembenahan Sistem</strong>
                        <br />
                        Tim Sketsa Group menyusun buku saku draf Manual Mutu, draf SOP seluruh divisi, instruksi kerja, dan formulir pencatatan wajib agar siap saat audit.
                      </p>
                    )}
                    {isoRoadmapStep === 2 && (
                      <p className="leading-relaxed">
                        <strong>Tahap 3: Pelatihan & Simulasi Audit Internal</strong>
                        <br />
                        Karyawan kunci Anda kami bekali sertifikat pelatihan audit internal resmi, membimbing pelaksanaan simulasi audit internal pertama secara mandiri.
                      </p>
                    )}
                    {isoRoadmapStep === 3 && (
                      <p className="leading-relaxed">
                        <strong>Tahap 4: Audit Tahap 1 & 2 Eksternal</strong>
                        <br />
                        Mengawal langsung kedatangan Auditor Eksternal resmi dari Lembaga Akreditasi. Membimbing penutupan temuan ketidaksesuaian (NCR) secara instan gratis.
                      </p>
                    )}
                    {isoRoadmapStep === 4 && (
                      <p className="leading-relaxed">
                        <strong>Tahap 5: Penerbitan Sertifikat Sah</strong>
                        <br />
                        Sertifikat ISO fisik resmi terakreditasi KAN/IAS diterbitkan bagi korporasi Anda, berlaku 3 tahun, siap digunakan untuk mendaftar tender besar miliaran rupiah.
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* MARKETING SIMULATORS */}
              {activeService === "marketing" && activeTab === "capi-debugger" && (
                <div id="marketing-capi-view" className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm md:text-base font-bold text-white font-serif">Meta CAPI Live Stream Debugger</h4>
                      <p className="text-xs text-teal-200/60 mt-0.5 font-sans">Simulasi live log transmisi event piksel browser vs server-side CAPI.</p>
                    </div>
                    <span className="text-[10px] bg-teal-500/20 text-teal-300 border border-teal-500/30 px-2 py-0.5 rounded uppercase font-bold">
                      Server Gateway OK
                    </span>
                  </div>
                  <div className="bg-[#021815] p-4 rounded-xl border border-emerald-950/50 font-mono text-[11px] text-slate-400 space-y-1.5 min-h-[110px] max-h-[140px] overflow-y-auto">
                    {capiLogs.map((log, index) => (
                      <p key={index} className={log.includes("Match Score") ? "text-emerald-400" : log.includes("Matched!") ? "text-yellow-300 font-bold" : "text-slate-400"}>
                        {log}
                      </p>
                    ))}
                  </div>
                  <div className="flex justify-end">
                    <button
                      onClick={() => setIsCapiStreamActive(!isCapiStreamActive)}
                      className={`text-[10px] font-bold px-3 py-1.5 rounded uppercase cursor-pointer ${
                        isCapiStreamActive ? "bg-red-500 text-white" : "bg-emerald-500 text-white"
                      }`}
                    >
                      {isCapiStreamActive ? "Pause Server Stream" : "Start Server Stream"}
                    </button>
                  </div>
                </div>
              )}

              {activeService === "marketing" && activeTab === "roas-calculator" && (
                <div id="marketing-roas-view" className="space-y-4">
                  <div>
                    <h4 className="text-sm md:text-base font-bold text-white font-serif">Kalkulator Model ROAS Iklan</h4>
                    <p className="text-xs text-teal-200/60 mt-0.5">Masukkan budget dan rasio target untuk memproyeksikan laba bersih periklanan.</p>
                  </div>

                  <div className="bg-[#021815] p-4 rounded-xl border border-emerald-950/50 space-y-3">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-[10px] text-slate-300">
                      <div>
                        <label className="block mb-1 font-sans font-bold">Budget Iklan Bulanan</label>
                        <select
                          value={adBudget}
                          onChange={(e) => setAdBudget(Number(e.target.value))}
                          className="w-full bg-[#04211d] p-1.5 rounded border border-emerald-950 text-white"
                        >
                          <option value="5000000">Rp 5.000.000</option>
                          <option value="15000000">Rp 15.000.000</option>
                          <option value="50000000">Rp 50.000.000</option>
                        </select>
                      </div>
                      <div>
                        <label className="block mb-1 font-sans font-bold font-bold">Iklan di Klik (CTR %)</label>
                        <input
                          type="number"
                          step="0.1"
                          value={ctrPercent}
                          onChange={(e) => setCtrPercent(Number(e.target.value))}
                          className="w-full bg-[#04211d] p-1 rounded border border-emerald-950 text-white font-mono"
                        />
                      </div>
                      <div>
                        <label className="block mb-1 font-sans font-bold">Konversi Beli (CVR %)</label>
                        <input
                          type="number"
                          step="0.1"
                          value={cvrPercent}
                          onChange={(e) => setCvrPercent(Number(e.target.value))}
                          className="w-full bg-[#04211d] p-1 rounded border border-emerald-950 text-white font-mono"
                        />
                      </div>
                      <div>
                        <label className="block mb-1 font-sans font-bold">Harga Jual Produk</label>
                        <input
                          type="number"
                          step="1000"
                          value={productPrice}
                          onChange={(e) => setProductPrice(Number(e.target.value))}
                          className="w-full bg-[#04211d] p-1 rounded border border-emerald-950 text-white font-mono"
                        />
                      </div>
                    </div>

                    <div className="pt-2 border-t border-emerald-950 flex flex-wrap justify-between items-center text-xs font-mono gap-2">
                      <div>
                        <span className="text-slate-400">Total Closing:</span>
                        <span className="text-white font-bold ml-1">{calculateRoasData().purchases} Pcs</span>
                      </div>
                      <div>
                        <span className="text-slate-400 font-bold">Omset:</span>
                        <span className="text-emerald-400 font-bold ml-1">Rp {calculateRoasData().revenue.toLocaleString("id-ID")}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 font-bold">ROAS:</span>
                        <span className="text-yellow-400 font-extrabold text-sm ml-1">{calculateRoasData().roas}x</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeService === "marketing" && activeTab === "pixel-checker" && (
                <div id="marketing-checker-view" className="space-y-4">
                  <div>
                    <h4 className="text-sm md:text-base font-bold text-white font-serif">Audit Perbandingan Browser vs CAPI Server</h4>
                    <p className="text-xs text-teal-200/60 mt-0.5">Mengapa piksel standar di browser Chrome/Safari membuat Anda rugi.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                    <div className="bg-[#021815] p-3 rounded-xl border border-red-950/40 space-y-1.5">
                      <span className="text-red-400 font-bold block font-sans">1. Piksel Browser Biasa (Biasa Rugi)</span>
                      <p className="text-[11px] text-slate-300 leading-relaxed font-mono">
                        ✗ Data loss hingga 35-50% akibat Adblocker.
                        <br />
                        ✗ Cookie Safari otomatis dihapus setelah 1-7 hari.
                        <br />
                        ✗ Iklan boros karena algoritma membaca data yang meleset.
                      </p>
                    </div>
                    <div className="bg-[#021815] p-3 rounded-xl border border-emerald-950/40 space-y-1.5">
                      <span className="text-emerald-400 font-bold block font-sans">2. Server-Side CAPI (Sketsa Group)</span>
                      <p className="text-[11px] text-slate-300 leading-relaxed font-mono">
                        ✓ Akurasi pelacakan konversi 98% presisi.
                        <br />
                        ✓ Cookie server kokoh bertahan hingga 180 hari.
                        <br />
                        ✓ ROAS meningkat karena AI piksel menerima data utuh.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* SOSMED SIMULATORS */}
              {activeService === "sosmed" && activeTab === "grid-planner" && (
                <div id="sosmed-grid-view" className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm md:text-base font-bold text-white font-serif">Instagram Grid Palette Switcher</h4>
                      <p className="text-xs text-teal-200/60 mt-0.5 font-sans">Uji keserasian grid feed sebelum dipublish.</p>
                    </div>
                    <div className="flex gap-1.5">
                      <button
                        onClick={() => setGridPalette("warm")}
                        className={`px-2 py-1 rounded text-[9px] font-bold uppercase cursor-pointer ${
                          gridPalette === "warm" ? "bg-amber-600 text-white" : "bg-[#021815] text-slate-400"
                        }`}
                      >
                        Pastel Warm
                      </button>
                      <button
                        onClick={() => setGridPalette("bold")}
                        className={`px-2 py-1 rounded text-[9px] font-bold uppercase cursor-pointer ${
                          gridPalette === "bold" ? "bg-slate-700 text-white" : "bg-[#021815] text-slate-400"
                        }`}
                      >
                        Monochrome
                      </button>
                      <button
                        onClick={() => setGridPalette("corporate")}
                        className={`px-2 py-1 rounded text-[9px] font-bold uppercase cursor-pointer ${
                          gridPalette === "corporate" ? "bg-teal-700 text-white" : "bg-[#021815] text-slate-400"
                        }`}
                      >
                        Emerald
                      </button>
                    </div>
                  </div>

                  <div className="bg-[#021815] p-4 rounded-xl border border-emerald-950/50 flex justify-center items-center">
                    <div className="grid grid-cols-3 gap-2 w-full max-w-[240px]">
                      {[1, 2, 3, 4, 5, 6].map((idx) => (
                        <div
                          key={idx}
                          className={`aspect-square rounded flex items-center justify-center p-1.5 text-center text-[8px] font-bold leading-tight shadow-md transition-all ${
                            gridPalette === "warm"
                              ? "bg-gradient-to-tr from-amber-700 via-yellow-600 to-amber-800 text-amber-100"
                              : gridPalette === "bold"
                              ? "bg-gradient-to-tr from-slate-800 to-slate-900 text-white border border-slate-700"
                              : "bg-gradient-to-tr from-teal-800 to-emerald-900 text-emerald-200"
                          }`}
                        >
                          {idx === 1 && "Desain Headline"}
                          {idx === 2 && "Foto Produk"}
                          {idx === 3 && "Edukasi Tips"}
                          {idx === 4 && "Review Pembeli"}
                          {idx === 5 && "Reels Cover"}
                          {idx === 6 && "Promo Diskon"}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeService === "sosmed" && activeTab === "copywriting-hook" && (
                <div id="sosmed-hook-view" className="space-y-4">
                  <div>
                    <h4 className="text-sm md:text-base font-bold text-white font-serif">Viral Instagram Headline Generator</h4>
                    <p className="text-xs text-teal-200/60 mt-0.5">Rancang hook penulisan dalam 3 detik untuk memicu klik calon pembeli.</p>
                  </div>

                  <form onSubmit={handleHookGeneration} className="flex gap-2 bg-[#021815] p-2 rounded-xl border border-emerald-950/60">
                    <input
                      type="text"
                      value={sosmedProductInput}
                      onChange={(e) => setSosmedProductInput(e.target.value)}
                      placeholder="Contoh: Hijab Syar'i Silk"
                      className="flex-1 bg-transparent px-3 py-1.5 text-xs text-white focus:outline-none font-sans"
                    />
                    <button
                      type="submit"
                      disabled={isGeneratingHook}
                      className="bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-800 text-white px-3 py-1.5 rounded text-xs font-bold transition-all cursor-pointer"
                    >
                      {isGeneratingHook ? "Meriset..." : "Buat Hook"}
                    </button>
                  </form>

                  <div className="bg-[#021815] p-3 rounded-xl border border-emerald-950/40 min-h-[110px] flex items-center justify-center">
                    {isGeneratingHook && (
                      <div className="text-xs text-teal-300 font-mono animate-pulse">
                        Memindai database viral copywriting instagram...
                      </div>
                    )}
                    {!isGeneratingHook && sosmedHooks.length === 0 && (
                      <div className="text-xs text-slate-400 text-center">
                        Masukkan nama penawaran produk Anda di atas lalu klik Buat Hook.
                      </div>
                    )}
                    {!isGeneratingHook && sosmedHooks.length > 0 && (
                      <div className="space-y-2 text-left w-full text-xs">
                        {sosmedHooks.map((hook, idx) => (
                          <div key={idx} className="p-2 bg-[#04211d] rounded border border-emerald-950/60 font-medium text-emerald-100">
                            {hook}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {activeService === "sosmed" && activeTab === "engagement-calculator" && (
                <div id="sosmed-er-view" className="space-y-4">
                  <div>
                    <h4 className="text-sm md:text-base font-bold text-white font-serif">Kalkulator Tingkat Interaksi Profil (ER)</h4>
                    <p className="text-xs text-teal-200/60 mt-0.5">Menganalisis persentase interaksi organik audiens pengikut Anda.</p>
                  </div>

                  <div className="bg-[#021815] p-4 rounded-xl border border-emerald-950/50 space-y-3">
                    <div className="grid grid-cols-3 gap-3 text-[10px] text-slate-300 font-mono">
                      <div>
                        <label className="block mb-1 font-sans font-bold">Total Followers</label>
                        <input
                          type="number"
                          step="100"
                          value={followersCount}
                          onChange={(e) => setFollowersCount(Number(e.target.value))}
                          className="w-full bg-[#04211d] p-1.5 rounded border border-emerald-950 text-white"
                        />
                      </div>
                      <div>
                        <label className="block mb-1 font-sans font-bold">Rerata Likes / Post</label>
                        <input
                          type="number"
                          step="10"
                          value={avgLikes}
                          onChange={(e) => setAvgLikes(Number(e.target.value))}
                          className="w-full bg-[#04211d] p-1.5 rounded border border-emerald-950 text-white"
                        />
                      </div>
                      <div>
                        <label className="block mb-1 font-sans font-bold">Rerata Komen / Post</label>
                        <input
                          type="number"
                          step="1"
                          value={avgComments}
                          onChange={(e) => setAvgComments(Number(e.target.value))}
                          className="w-full bg-[#04211d] p-1.5 rounded border border-emerald-950 text-white"
                        />
                      </div>
                    </div>

                    <div className="pt-2 border-t border-emerald-950 flex justify-between items-center text-xs">
                      <span className="text-slate-400 font-bold">Rasio Engagement Rate (ER):</span>
                      <span className="text-emerald-400 font-extrabold font-mono text-sm">
                        {getEngagementRate()}% {Number(getEngagementRate()) > 4 ? "🔥 Hebat!" : "⚠️ Perlu Optimasi"}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* SEJOLI MEMBER WORKSPACES */}
              {activeService === "member" && (
                <div id="member-area-view" className="space-y-4">
                  {isLoggedIn ? (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between border-b border-emerald-950 pb-2">
                        <span className="text-xs font-bold text-emerald-400 font-mono">
                          Welcome, {memberEmail}
                        </span>
                        <button onClick={handleMemberLogout} className="text-[10px] text-red-400 hover:underline cursor-pointer">
                          Logout
                        </button>
                      </div>

                      {activeTab === "member-earnings" && (
                        <div className="grid grid-cols-3 gap-3 text-center text-xs">
                          <div className="bg-[#021815] p-3 rounded-xl border border-emerald-950">
                            <span className="text-[10px] text-slate-400 block font-sans">Total Komisi</span>
                            <span className="text-sm font-bold text-emerald-400 block mt-1 font-mono">Rp 12.450.000</span>
                          </div>
                          <div className="bg-[#021815] p-3 rounded-xl border border-emerald-950">
                            <span className="text-[10px] text-slate-400 block font-sans">Belum Dibayar</span>
                            <span className="text-sm font-bold text-yellow-400 block mt-1 font-mono">Rp 2.500.000</span>
                          </div>
                          <div className="bg-[#021815] p-3 rounded-xl border border-emerald-950">
                            <span className="text-[10px] text-slate-400 block font-sans">Total Referrals</span>
                            <span className="text-sm font-bold text-white block mt-1 font-mono">34 Leads</span>
                          </div>
                        </div>
                      )}

                      {activeTab === "member-commissions" && (
                        <div className="bg-[#021815] p-3 rounded-xl border border-emerald-950 font-mono text-[10px] space-y-1.5 text-slate-300">
                          <p className="border-b border-emerald-950/60 pb-1 text-slate-500 flex justify-between">
                            <span>PEMBELI</span>
                            <span>KOMISI</span>
                          </p>
                          <p className="flex justify-between">
                            <span>1. Ahmad (Cozy Foam)</span>
                            <span className="text-emerald-400 font-bold">Rp 874.000</span>
                          </p>
                          <p className="flex justify-between">
                            <span>2. Larasati (PT Sinergi)</span>
                            <span className="text-emerald-400 font-bold">Rp 1.399.000</span>
                          </p>
                          <p className="flex justify-between">
                            <span>3. dr. Adrian (CAPI Tracker)</span>
                            <span className="text-emerald-400 font-bold">Rp 699.000</span>
                          </p>
                        </div>
                      )}

                      {activeTab === "member-materials" && (
                        <div className="grid grid-cols-2 gap-2 text-[11px]">
                          <div className="bg-[#021815] p-2.5 rounded border border-emerald-950">
                            <span className="font-bold text-white block">Swipe Copywriting WA</span>
                            <p className="text-[10px] text-slate-400 mt-1 line-clamp-2">"Halo rekan pengusaha, apakah website jualan Anda lambat?..."</p>
                            <span className="text-[10px] text-teal-400 font-bold block mt-1 hover:underline cursor-pointer">Salin Swipe File</span>
                          </div>
                          <div className="bg-[#021815] p-2.5 rounded border border-emerald-950">
                            <span className="font-bold text-white block">Banner Promosi PNG</span>
                            <p className="text-[10px] text-slate-400 mt-1 line-clamp-2">Banner feed Instagram resolusi 1:1 siap posting.</p>
                            <span className="text-[10px] text-teal-400 font-bold block mt-1 hover:underline cursor-pointer">Unduh Banner.zip</span>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="space-y-4" id="login-box-container">
                      <div>
                        <h4 className="text-sm md:text-base font-bold text-white font-serif text-center">Dashboard Member Area Sejoli</h4>
                        <p className="text-xs text-teal-200/60 mt-0.5 text-center">Masukkan email lisensi affiliate Anda untuk login simulasi.</p>
                      </div>

                      <form onSubmit={handleMemberLogin} className="max-w-sm mx-auto space-y-3 bg-[#021815] p-5 rounded-xl border border-emerald-950">
                        <div>
                          <label className="text-[10px] text-slate-400 block mb-1 font-sans font-bold">Email Mitra</label>
                          <input
                            type="email"
                            required
                            value={memberEmail}
                            onChange={(e) => setMemberEmail(e.target.value)}
                            className="w-full text-xs bg-[#04211d] border border-emerald-950 p-2 rounded text-white focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] text-slate-400 block mb-1 font-sans font-bold">Password Lisensi</label>
                          <input
                            type="password"
                            required
                            value={memberPassword}
                            onChange={(e) => setMemberPassword(e.target.value)}
                            className="w-full text-xs bg-[#04211d] border border-emerald-950 p-2 rounded text-white focus:outline-none"
                          />
                        </div>
                        <button
                          type="submit"
                          disabled={isAuthenticating}
                          className="w-full py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold uppercase rounded transition-all cursor-pointer font-sans"
                        >
                          {isAuthenticating ? "Memproses Autentikasi..." : "Masuk ke Dashboard Sejoli"}
                        </button>
                      </form>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Simulated Device Screen Footer bar */}
            <div id="browser-footer" className="mt-6 pt-4 border-t border-emerald-950/40 flex items-center justify-between text-xs text-teal-200/50">
              <span>Sistem Enkripsi Cloud SSL Aktif</span>
              <div className="flex gap-2">
                <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 font-bold text-[9px] uppercase font-sans">
                  Firewall: 100% Ok
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Walkthrough;
