import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Shield,
  FileCheck,
  ChevronRight,
  Sparkles,
  ClipboardCheck,
  Zap,
  Cpu,
  TrendingUp,
  Award,
  Lock,
  MessageCircle,
  Bell,
  Link,
  Copy,
  Info,
  UserPlus,
  Coins,
  ArrowRight
} from "lucide-react";

interface ServiceContentProps {
  onOpenConsultation: () => void;
  activeService: string;
}

export const ServiceContent: React.FC<ServiceContentProps> = ({
  onOpenConsultation,
  activeService
}) => {
  // Member affiliate-specific state
  const [memberTab, setMemberTab] = useState<"registrasi" | "ambil-link" | "notifikasi">("registrasi");
  const [isRegistered, setIsRegistered] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [whatsapp, setWhatsapp] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showSuccessBounce, setShowSuccessBounce] = useState<boolean>(false);
  const [copiedStatus, setCopiedStatus] = useState<string>("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !whatsapp.trim() || !address.trim()) {
      alert("Harap lengkapi seluruh formulir registrasi!");
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsRegistered(true);
      setMemberTab("ambil-link");
      setShowSuccessBounce(true);
      setTimeout(() => setShowSuccessBounce(false), 4000);
    }, 1500);
  };

  const handleCopyLink = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedStatus(key);
    setTimeout(() => setCopiedStatus(""), 2000);
  };

  const notificationLog = [
    {
      id: 1,
      time: "Baru Saja",
      title: "Pendaftaran Affiliate Berhasil",
      desc: `Selamat ${name || "Mitra"}, akun Anda telah aktif! Bonus official merchandise Cozy Foam Shoe Cleaner sedang dipersiapkan untuk dikirim ke alamat Anda.`,
      isNew: true,
      type: "success"
    },
    {
      id: 2,
      time: "2 jam yang lalu",
      title: "Komisi Closing Cair! Rp 200.000",
      desc: "Link affiliate Jasa Website Anda digunakan oleh 'Budi Santoso' dan statusnya telah Closing Paid.",
      isNew: false,
      type: "commission"
    },
    {
      id: 3,
      time: "1 hari yang lalu",
      title: "Komisi Closing Cair! Rp 100.000",
      desc: "Link affiliate Jasa Konten Sosmed Anda digunakan oleh 'Rara Bakery' dan statusnya telah Closing Paid.",
      isNew: false,
      type: "commission"
    },
    {
      id: 4,
      time: "2 hari yang lalu",
      title: "Pengiriman Merchandise Cozy Shoes Care",
      desc: "Paket Cozy Foam Shoe Cleaner 100ml sedang dikemas oleh tim ekspedisi Cozy Shoes Care Pekalongan.",
      isNew: false,
      type: "shipping"
    }
  ];

  switch (activeService) {
    case "legalitas":
      return (
        <section id="legalitas" className="py-20 bg-slate-50/50 border-t border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Description Column */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] font-extrabold text-teal-800 bg-teal-50 px-2.5 py-1 rounded-md uppercase tracking-wider border border-teal-100/50">
                Legalitas Bisnis
              </span>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-slate-900 leading-tight">
                Lindungi Aset Usaha Anda Dengan <br />
                <span className="text-teal-700 italic font-serif font-extrabold">Legalitas Hukum Resmi & Sah</span>
              </h2>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                Jangan tunda pertumbuhan bisnis Anda karena urusan hukum yang rumit. Tim konsultan Sketsa Group membantu memproses pembuatan badan usaha (PT, CV, Yayasan, PMA), Hak Kekayaan Intelektual (HAKI), NIB, hingga lisensi sektoral khusus secara cepat dan tanpa birokrasi berbelit.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-2.5">
                  <FileCheck className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-xs md:text-sm text-slate-800">Pendirian PT / CV</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Sudah termasuk Akta Notaris, SK Kemenkumham, & NPWP.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Shield className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-xs md:text-sm text-slate-800">HAKI & Merek Dagang</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Proteksi nama brand usaha Anda secara hukum nasional.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={onOpenConsultation}
                  className="px-6 py-3 bg-teal-800 hover:bg-teal-900 text-white rounded-xl font-bold text-xs md:text-sm shadow-md flex items-center gap-1.5 cursor-pointer hover:scale-[1.01] active:scale-[0.99] transition-all duration-200"
                >
                  <span>Konsultasikan Legalitas Usaha</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Status Block Column */}
            <div className="lg:col-span-6">
              <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-xl space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2">
                    <ClipboardCheck className="w-5 h-5 text-teal-700" />
                    <span className="font-bold text-sm text-slate-800 font-serif">
                      Status Berkas Legalitas
                    </span>
                  </div>
                  <span className="text-[10px] font-extrabold bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full border border-emerald-100/50">
                    ACTIVE
                  </span>
                </div>
                
                <div className="space-y-4">
                  <div className="p-3 bg-slate-50 rounded-xl flex items-center justify-between text-xs">
                    <span className="text-slate-600 font-medium">1. Verifikasi Nama Perusahaan</span>
                    <span className="text-emerald-600 font-bold">✓ Approved</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl flex items-center justify-between text-xs">
                    <span className="text-slate-600 font-medium">2. Pembuatan Akta Pendirian Notaris</span>
                    <span className="text-emerald-600 font-bold">✓ Selesai</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl flex items-center justify-between text-xs">
                    <span className="text-slate-600 font-medium">3. Penerbitan SK Kemenkumham</span>
                    <span className="text-emerald-600 font-bold">✓ Terbit</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl flex items-center justify-between text-xs">
                    <span className="text-slate-600 font-medium">4. Pendaftaran NIB & OSS RBA</span>
                    <span className="text-emerald-600 font-bold">✓ Sinkron</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      );

    case "sertifikasi":
      return (
        <section id="sertifikasi" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Status Block Column */}
            <div className="lg:col-span-6 order-last lg:order-first">
              <div className="bg-[#031d1a] p-6 md:p-8 rounded-3xl border border-emerald-950 text-white shadow-xl space-y-6">
                <div className="flex items-center gap-2 text-emerald-300 border-b border-emerald-950/60 pb-3">
                  <Award className="w-5 h-5" />
                  <span className="font-bold text-xs tracking-wider uppercase">
                    Sertifikasi Standar Internasional
                  </span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-[#021815] p-4 rounded-xl border border-emerald-950/60 text-center">
                    <h4 className="font-bold text-base text-white">ISO 9001:2015</h4>
                    <p className="text-[10px] text-teal-200/50 mt-1">Sistem Manajemen Mutu</p>
                  </div>
                  <div className="bg-[#021815] p-4 rounded-xl border border-emerald-950/60 text-center">
                    <h4 className="font-bold text-base text-white">ISO 27001:2018</h4>
                    <p className="text-[10px] text-teal-200/50 mt-1">Keamanan Informasi Digital</p>
                  </div>
                  <div className="bg-[#021815] p-4 rounded-xl border border-emerald-950/60 text-center col-span-1 sm:col-span-2">
                    <h4 className="font-bold text-base text-white">ISO 14001:2015</h4>
                    <p className="text-[10px] text-teal-200/50 mt-1">Sistem Manajemen Lingkungan</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Copy Column */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] font-extrabold text-teal-800 bg-teal-50 px-2.5 py-1 rounded-md uppercase tracking-wider border border-teal-100/50">
                Sertifikasi ISO
              </span>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-slate-900 leading-tight">
                Tembus Pasar Global & Tender BUMN <br />
                Dengan <span className="text-teal-700 italic font-serif font-extrabold">Sertifikasi ISO Terakreditasi</span>
              </h2>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                Miliki keunggulan kompetitif yang membedakan korporasi Anda dari kompetitor biasa. Sketsa Group memandu konsultasi, penyusunan dokumen kebijakan manajemen, pelatihan staf internal, audit simulasi, hingga sertifikasi final oleh lembaga akreditasi resmi KAN (Komite Akreditasi Nasional) atau internasional.
              </p>
              
              <div className="pt-4">
                <button
                  onClick={onOpenConsultation}
                  className="px-6 py-3 bg-teal-800 hover:bg-teal-900 text-white rounded-xl font-bold text-xs md:text-sm shadow-md flex items-center gap-1.5 cursor-pointer hover:scale-[1.01] active:scale-[0.99] transition-all duration-200"
                >
                  <span>Konsultasikan Sertifikasi ISO</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </section>
      );

    case "marketing":
      return (
        <section id="marketing" className="py-20 bg-slate-50/50 border-t border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Copy Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-50 px-2.5 py-1 rounded-md uppercase tracking-wider border border-teal-100/50">
                  Data Driven Marketing
                </span>
                <span className="bg-red-500 text-white text-[8px] font-extrabold px-1.5 py-0.5 rounded-sm animate-pulse tracking-widest uppercase">
                  BARU
                </span>
              </div>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-slate-900 leading-tight">
                Hentikan Bakar Modal Iklan! <br />
                Mulai Gunakan <span className="text-teal-700 italic font-serif font-extrabold">Sistem Omnichannel Analytics</span>
              </h2>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                Mengambil keputusan pemasaran hanya berdasarkan "feeling" adalah kesalahan fatal. Kami membangun infrastruktur pelacakan data komprehensif yang mengintegrasikan Meta Pixel, Google Analytics 4, TikTok Events API, dan CRM WhatsApp secara akurat. Dapatkan laporan performa ROAS (Return on Ad Spend) murni setiap hari.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-2.5">
                  <TrendingUp className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-xs md:text-sm text-slate-800">Advanced Analytics Tracking</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Catat setiap klik, tambah keranjang belanja, hingga checkout sukses tanpa meleset.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Cpu className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-xs md:text-sm text-slate-800">Facebook & TikTok CAPI</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Lolos dari pembatasan browser iOS 14+ dengan teknologi pelacakan sisi Server (Conversion API).
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={onOpenConsultation}
                  className="px-6 py-3 bg-teal-800 hover:bg-teal-900 text-white rounded-xl font-bold text-xs md:text-sm shadow-md flex items-center gap-1.5 cursor-pointer hover:scale-[1.01] active:scale-[0.99] transition-all duration-200"
                >
                  <span>Setup Tracker Bisnis Saya</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Live Performance Monitor Column */}
            <div className="lg:col-span-6">
              <div className="bg-[#031d1a] p-6 md:p-8 rounded-3xl border border-emerald-950 text-white shadow-xl space-y-4">
                <div className="flex items-center justify-between border-b border-emerald-950/60 pb-3">
                  <span className="text-xs font-bold text-emerald-300 uppercase tracking-widest flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full animate-ping" /> Live Performance Monitor
                  </span>
                  <span className="text-[10px] font-mono text-teal-200/50">ROAS Target: 4.5x</span>
                </div>
                
                <div className="space-y-3 pt-2">
                  <div className="bg-[#021815] p-3 rounded-xl border border-emerald-950/60 flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400">Total Pengeluaran Iklan:</span>
                    <span className="text-white">Rp 12.450.000</span>
                  </div>
                  <div className="bg-[#021815] p-3 rounded-xl border border-emerald-950/60 flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400">Total Pembelian Sukses (CV):</span>
                    <span className="text-emerald-400 font-bold">186 Transaksi</span>
                  </div>
                  <div className="bg-[#021815] p-3 rounded-xl border border-emerald-950/60 flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400">Nilai Pendapatan Iklan:</span>
                    <span className="text-emerald-400 font-extrabold">Rp 64.890.000</span>
                  </div>
                  <div className="bg-[#021815] p-3.5 rounded-xl border border-emerald-950/60 flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400 font-bold">Aktual ROAS (Kembali Modal):</span>
                    <span className="text-yellow-400 font-extrabold text-sm">5.21x (Profit Hebat)</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      );

    case "sosmed":
      return (
        <section id="sosmed" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column (Instagram Mockup Layout) */}
            <div className="lg:col-span-6 order-last lg:order-first">
              <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-xl space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="font-bold text-xs text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-teal-700" /> Kreator Feed Instagram
                  </span>
                  <span className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">
                    GRID AESTHETIC
                  </span>
                </div>
                
                <div className="grid grid-cols-3 gap-2 aspect-square max-w-[280px] mx-auto">
                  <div className="bg-gradient-to-tr from-teal-800 to-teal-950 rounded-lg flex items-center justify-center p-2 text-center">
                    <span className="text-[8px] text-white font-bold leading-tight">Desain Feed Premium</span>
                  </div>
                  <div className="bg-slate-100 rounded-lg overflow-hidden border border-slate-100 shadow-sm">
                    <img
                      src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=120&q=80"
                      alt="Product item"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="bg-slate-100 rounded-lg overflow-hidden border border-slate-100 shadow-sm">
                    <img
                      src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=120&q=80"
                      alt="Product item"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="bg-[#042823] rounded-lg flex items-center justify-center p-2 text-center">
                    <span className="text-[8px] text-emerald-300 font-bold">Copywriting Memikat</span>
                  </div>
                  <div className="bg-gradient-to-tr from-teal-900 to-emerald-800 rounded-lg flex items-center justify-center p-2 text-center">
                    <span className="text-[8px] text-white font-bold">Jadwal Posting Terencana</span>
                  </div>
                  <div className="bg-slate-100 rounded-lg overflow-hidden border border-slate-100 shadow-sm">
                    <img
                      src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=120&q=80"
                      alt="Product item"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Copy Column */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] font-extrabold text-teal-800 bg-teal-50 px-2.5 py-1 rounded-md uppercase tracking-wider border border-teal-100/50">
                Konten & Sosmed
              </span>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-slate-900 leading-tight">
                Dominasi Media Sosial Dengan <br />
                <span className="text-teal-700 italic font-serif font-extrabold">Desain Feed & Reels Bernilai Jual</span>
              </h2>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                Sosial media adalah etalase digital utama bagi generasi masa kini. Jika visual feed Anda terlihat murahan, calon pembeli tidak akan melirik produk Anda. Sketsa Group memproduksi konten kreatif (Instagram feed, TikTok Reels, YouTube Shorts) yang memadukan estetika desain modern dan teknik storytelling interaktif agar mendatangkan interaksi organik.
              </p>
              
              <div className="pt-4">
                <button
                  onClick={onOpenConsultation}
                  className="px-6 py-3 bg-teal-800 hover:bg-teal-900 text-white rounded-xl font-bold text-xs md:text-sm shadow-md flex items-center gap-1.5 cursor-pointer hover:scale-[1.01] active:scale-[0.99] transition-all duration-200"
                >
                  <span>Kelola Sosmed Saya</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </section>
      );

    case "member":
      return (
        <section id="member-area" className="py-24 bg-gradient-to-b from-slate-50 to-slate-100/50 border-t border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Copy Panel */}
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.8, type: "spring", stiffness: 50, damping: 14 }}
                className="lg:col-span-5 space-y-6"
              >
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-50 border border-teal-100 px-2.5 py-1.5 rounded-md uppercase tracking-wider">
                  Program Kemitraan Resmi
                </span>
                <h2 className="font-serif font-bold text-3xl sm:text-4xl text-slate-900 leading-tight">
                  Gabung Menjadi <br />
                  <span className="text-teal-700 italic font-serif font-extrabold">Affiliate Sketsa Group</span>
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Ubah relasi dan jaringan bisnis Anda menjadi mesin penghasil uang pasif yang melimpah. Rekomendasikan layanan digital profesional kami kepada siapa saja yang membutuhkannya, dan dapatkan komisi instan langsung cair ke rekening Anda setiap kali terjadi kesepakatan penjualan!
                </p>

                <div className="space-y-4">
                  {/* Item 1 */}
                  <div className="bg-white p-4 rounded-2xl border border-slate-200/60 shadow-sm flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 flex-shrink-0">
                      <UserPlus className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs md:text-sm text-slate-800">Sekali Registrasi 99 Ribu</h4>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                        Registrasi lifetime hanya Rp 99.000 dan Anda berhak mendapatkan <strong className="text-slate-800">Official Merchandise Cozy Foam Shoe Cleaner 100ml</strong> (senilai Rp 85.000) gratis dikirim ke alamat Anda!
                      </p>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="bg-white p-4 rounded-2xl border border-slate-200/60 shadow-sm flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 flex-shrink-0">
                      <Coins className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs md:text-sm text-slate-800">Komisi Fantastis Per Closing</h4>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                        Dapatkan komisi bersih senilai <span className="font-bold text-teal-700">Rp 200.000</span> untuk setiap closing Jasa Website, dan <span className="font-bold text-teal-700">Rp 100.000</span> untuk closing Jasa Konten Sosmed!
                      </p>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="bg-white p-4 rounded-2xl border border-slate-200/60 shadow-sm flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 flex-shrink-0">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs md:text-sm text-slate-800">Full Support & Marketing Kit</h4>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                        Disediakan materi copywriting siap copy-paste, banner promosi resolusi tinggi, mentoring eksklusif, serta sistem tracking referral otomatis yang super transparan.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Cozy Shoes care product row */}
                <div className="p-4 bg-orange-50/50 rounded-2xl border border-orange-200/40 flex items-center gap-4">
                  <img
                    src="/assets/cozy_shoes_care_product_1783880498060-DFxzcF2r.jpg"
                    alt="Cozy Foam Shoe Cleaner"
                    referrerPolicy="no-referrer"
                    className="w-16 h-16 object-cover rounded-xl border border-orange-200 shadow-sm"
                  />
                  <div>
                    <span className="text-[9px] font-black uppercase text-orange-700 bg-orange-100 px-2 py-0.5 rounded-full tracking-wider">
                      Bonus Merchandise
                    </span>
                    <h4 className="font-bold text-xs text-slate-800 mt-1">Cozy Foam Shoe Cleaner (100ml)</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                      Formula natural oil, antibacterial, praktis digunakan tanpa air. Sesuai screenshot Cozy Shoes Care!
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Right Interactive Box Column */}
              <motion.div
                initial={{ opacity: 0, x: 60, rotateY: -12 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.8, type: "spring", stiffness: 50, damping: 14 }}
                style={{ transformStyle: "preserve-3d", perspective: 1200 }}
                className="lg:col-span-7"
              >
                <div id="login-box-container" className="bg-slate-900 text-slate-100 rounded-3xl overflow-hidden shadow-2xl border border-slate-800/80">
                  {/* Browser top-bar */}
                  <div className="bg-[#121113] border-b border-zinc-800/50 flex items-center px-4 py-3 justify-between">
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500 tracking-tight flex items-center gap-1">
                      <Lock className="w-3 h-3 text-emerald-500 inline" />
                      affiliate.sketsagroup.id/dashboard/
                    </span>
                    <div className="w-6" />
                  </div>

                  {/* Tab Navigation header */}
                  <div className="bg-slate-950 border-b border-slate-800/60 px-4 py-2 flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-teal-800 text-white flex items-center justify-center font-bold text-sm">
                        S
                      </div>
                      <span className="text-xs font-bold text-white uppercase tracking-wider">
                        Affiliate Portal
                      </span>
                    </div>

                    <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800/80">
                      <button
                        onClick={() => setMemberTab("registrasi")}
                        className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all flex items-center gap-1 cursor-pointer ${
                          memberTab === "registrasi"
                            ? "bg-teal-800 text-white shadow-md shadow-teal-900/10"
                            : "text-slate-400 hover:text-white"
                        }`}
                      >
                        <UserPlus className="w-3.5 h-3.5" />
                        <span>Menu Registrasi</span>
                      </button>
                      <button
                        onClick={() => setMemberTab("ambil-link")}
                        className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all flex items-center gap-1 cursor-pointer ${
                          memberTab === "ambil-link"
                            ? "bg-teal-800 text-white shadow-md shadow-teal-900/10"
                            : "text-slate-400 hover:text-white"
                        }`}
                      >
                        <Link className="w-3.5 h-3.5" />
                        <span>Ambil Link Affiliate</span>
                      </button>
                      <button
                        onClick={() => setMemberTab("notifikasi")}
                        className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all flex items-center gap-1 relative cursor-pointer ${
                          memberTab === "notifikasi"
                            ? "bg-teal-800 text-white shadow-md shadow-teal-900/10"
                            : "text-slate-400 hover:text-white"
                        }`}
                      >
                        <Bell className="w-3.5 h-3.5" />
                        <span>Menu Notifikasi</span>
                        <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-orange-500 animate-ping" />
                      </button>
                    </div>
                  </div>

                  {/* Form & Tab Display Area */}
                  <div className="p-6 md:p-8 min-h-[350px] bg-slate-900">
                    
                    {/* Floating notification bounce */}
                    <AnimatePresence>
                      {showSuccessBounce && (
                        <motion.div
                          initial={{ opacity: 0, y: -20, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -20, scale: 0.95 }}
                          className="mb-6 p-4 bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 rounded-2xl flex items-start gap-3 shadow-lg"
                        >
                          <FileCheck className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-bold text-xs">Registrasi & Pembayaran Rp 99.000 Sukses!</h4>
                            <p className="text-[11px] text-slate-300 mt-1">
                              Selamat datang {name || "Mitra"}! Akun Anda aktif seketika. Merchandise Cozy Foam Shoe Cleaner 100ml sedang kami kemas.
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {memberTab === "registrasi" && (
                      <div className="space-y-6">
                        {isRegistered ? (
                          <div className="text-center py-10 bg-slate-950/45 rounded-3xl border border-slate-800/80 p-6 space-y-4">
                            <div className="w-14 h-14 rounded-full bg-emerald-900/40 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/20">
                              <FileCheck className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-serif font-bold text-white">Anda Telah Terdaftar Aktif!</h3>
                            <p className="text-xs text-slate-400 max-w-sm mx-auto leading-relaxed">
                              Halo <strong>{name || "Mitra Sketsa"}</strong>, Anda telah terdaftar dalam sistem affiliate lifetime. Silakan beralih ke tab <strong>Ambil Link Affiliate</strong> untuk mulai mempromosikan layanan dan raih komisi Anda!
                            </p>
                            
                            <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 text-left text-xs text-slate-300 max-w-md mx-auto space-y-1.5 font-mono">
                              <p><span className="text-slate-500">NAMA MITRA:</span> {name || "Mochammad Chino"}</p>
                              <p><span className="text-slate-500">WHATSAPP:</span> {whatsapp || "0816-24-6868"}</p>
                              <p><span className="text-slate-500">PENGIRIMAN:</span> Cozy Foam Cleaner dikirim ke {address || "Alamat Terdaftar"}</p>
                            </div>
                            <button
                              onClick={() => setMemberTab("ambil-link")}
                              className="px-5 py-2.5 bg-teal-800 hover:bg-teal-900 text-white rounded-xl font-bold text-xs uppercase tracking-widest transition-all cursor-pointer"
                            >
                              Mulai Ambil Link Promosi →
                            </button>
                          </div>
                        ) : (
                          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                            {/* Product Frame */}
                            <div className="md:col-span-5 space-y-4 bg-slate-950/40 p-4 rounded-2xl border border-slate-800/50 flex flex-col justify-between">
                              <div className="space-y-2">
                                <div className="aspect-square rounded-xl overflow-hidden bg-white border border-slate-800">
                                  <img
                                    src="/assets/cozy_shoes_care_product_1783880498060-DFxzcF2r.jpg"
                                    alt="Cozy Shoes Care Product"
                                    referrerPolicy="no-referrer"
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <div className="text-center">
                                  <h5 className="font-bold text-[11px] text-white">Cozy Foam Shoe Cleaner</h5>
                                  <span className="text-[9px] text-orange-400 font-bold">Official Merchandise Included</span>
                                </div>
                              </div>
                              <div className="text-[10px] text-slate-400 space-y-1.5 leading-relaxed border-t border-slate-800 pt-3 font-medium">
                                <p className="flex items-center gap-1.5 text-slate-300 font-bold">
                                  <FileCheck className="w-3.5 h-3.5 text-emerald-400" /> Natural Oil Formula
                                </p>
                                <p className="flex items-center gap-1.5 text-slate-300">
                                  <FileCheck className="w-3.5 h-3.5 text-emerald-400" /> Antibacterial Action
                                </p>
                                <p className="flex items-center gap-1.5 text-slate-300">
                                  <FileCheck className="w-3.5 h-3.5 text-emerald-400" /> Praktis Tanpa Air (100ml)
                                </p>
                              </div>
                            </div>

                            {/* Forms Frame */}
                            <div className="md:col-span-7 space-y-4">
                              <div>
                                <h4 className="font-bold text-sm text-white">Formulir Registrasi Kemitraan</h4>
                                <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                                  Registrasi sekali sebesar Rp 99.000 untuk lisensi seumur hidup
                                </p>
                              </div>
                              <form onSubmit={handleRegister} className="space-y-3.5">
                                <div>
                                  <label className="block text-[10px] font-bold uppercase text-slate-400 tracking-wider mb-1 font-sans">
                                    Nama Lengkap Anda *
                                  </label>
                                  <input
                                    type="text"
                                    required
                                    placeholder="Contoh: Mochammad Chino"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full text-xs bg-slate-950 border border-slate-800 focus:border-teal-700 focus:ring-1 focus:ring-teal-700 rounded-lg px-3 py-2 text-white placeholder-slate-600 focus:outline-none transition-all"
                                  />
                                </div>
                                <div>
                                  <label className="block text-[10px] font-bold uppercase text-slate-400 tracking-wider mb-1 font-sans">
                                    No. WhatsApp Aktif *
                                  </label>
                                  <input
                                    type="tel"
                                    required
                                    placeholder="Contoh: 0816-24-6868"
                                    value={whatsapp}
                                    onChange={(e) => setWhatsapp(e.target.value)}
                                    className="w-full text-xs bg-slate-950 border border-slate-800 focus:border-teal-700 focus:ring-1 focus:ring-teal-700 rounded-lg px-3 py-2 text-white placeholder-slate-600 focus:outline-none transition-all"
                                  />
                                </div>
                                <div>
                                  <label className="block text-[10px] font-bold uppercase text-slate-400 tracking-wider mb-1 font-sans">
                                    Alamat Pengiriman Merchandise *
                                  </label>
                                  <textarea
                                    required
                                    rows={2}
                                    placeholder="Alamat lengkap untuk pengiriman Cozy Foam Shoe Cleaner gratis..."
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    className="w-full text-xs bg-slate-950 border border-slate-800 focus:border-teal-700 focus:ring-1 focus:ring-teal-700 rounded-lg px-3 py-2 text-white placeholder-slate-600 focus:outline-none transition-all resize-none font-sans"
                                  />
                                </div>
                                <button
                                  type="submit"
                                  disabled={isLoading}
                                  className="w-full py-2.5 bg-orange-600 hover:bg-orange-700 disabled:bg-orange-600/40 text-white rounded-xl font-bold text-xs uppercase tracking-widest shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                                >
                                  {isLoading ? (
                                    <span>Memproses Transaksi...</span>
                                  ) : (
                                    <>
                                      <UserPlus className="w-4 h-4" />
                                      <span>Daftar & Bayar Rp 99.000</span>
                                    </>
                                  )}
                                </button>
                              </form>
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {memberTab === "ambil-link" && (
                      <div className="space-y-6">
                        {!isRegistered ? (
                          <div className="text-center py-10 bg-slate-950/45 rounded-3xl border border-slate-800/80 p-6 space-y-4">
                            <div className="w-12 h-12 rounded-full bg-red-900/30 text-red-400 flex items-center justify-center mx-auto border border-red-500/10">
                              <Lock className="w-6 h-6" />
                            </div>
                            <h3 className="text-sm font-bold text-white">Menu Terkunci!</h3>
                            <p className="text-xs text-slate-400 max-w-xs mx-auto leading-relaxed">
                              Anda harus terdaftar sebagai affiliate aktif terlebih dahulu di <strong>Menu Registrasi</strong> untuk dapat menjana dan menyalin link promosi unik Anda.
                            </p>
                            <button
                              onClick={() => setMemberTab("registrasi")}
                              className="px-4 py-2 bg-teal-800 hover:bg-teal-900 text-white rounded-lg text-xs font-bold uppercase tracking-wider cursor-pointer"
                            >
                              Buka Form Registrasi
                            </button>
                          </div>
                        ) : (
                          <div className="space-y-6 animate-fade-in">
                            <div>
                              <h3 className="font-bold text-sm text-white">Link Referral Promosi Anda</h3>
                              <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                                Gunakan tautan di bawah ini untuk berpromosi. Sistem mencatat kunjungan dan prospek otomatis.
                              </p>
                            </div>

                            <div className="space-y-4">
                              {/* Link 1 */}
                              <div className="bg-slate-950/50 p-4 rounded-2xl border border-slate-800/80 space-y-3">
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-2">
                                    <span className="w-2.5 h-2.5 rounded-full bg-teal-500 animate-pulse" />
                                    <span className="text-[11px] font-bold text-white">Promosi Jasa Pembuatan Website</span>
                                  </div>
                                  <span className="text-[9px] font-bold text-teal-400 uppercase tracking-widest font-mono">
                                    KOMISI: RP 200.000 / Closing
                                  </span>
                                </div>
                                <div className="flex gap-2">
                                  <input
                                    type="text"
                                    readOnly
                                    value={`https://sketsagroup.id/ref?id=AFF992&service=website&user=${encodeURIComponent(name || "Mitra")}`}
                                    className="flex-1 bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 text-[11px] text-slate-300 font-mono focus:outline-none"
                                  />
                                  <button
                                    onClick={() =>
                                      handleCopyLink(
                                        `https://sketsagroup.id/ref?id=AFF992&service=website&user=${encodeURIComponent(name || "Mitra")}`,
                                        "website"
                                      )
                                    }
                                    className="px-3.5 bg-teal-800 hover:bg-teal-900 text-white rounded-lg text-xs font-bold flex items-center justify-center gap-1 cursor-pointer"
                                  >
                                    {copiedStatus === "website" ? (
                                      <FileCheck className="w-4 h-4 text-emerald-400" />
                                    ) : (
                                      <Copy className="w-4 h-4" />
                                    )}
                                    <span>{copiedStatus === "website" ? "Disalin!" : "Copy"}</span>
                                  </button>
                                </div>
                              </div>

                              {/* Link 2 */}
                              <div className="bg-slate-950/50 p-4 rounded-2xl border border-slate-800/80 space-y-3">
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-2">
                                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                                    <span className="text-[11px] font-bold text-white">Promosi Jasa Kelola Sosial Media</span>
                                  </div>
                                  <span className="text-[9px] font-bold text-emerald-400 uppercase tracking-widest font-mono">
                                    KOMISI: RP 100.000 / Closing
                                  </span>
                                </div>
                                <div className="flex gap-2">
                                  <input
                                    type="text"
                                    readOnly
                                    value={`https://sketsagroup.id/ref?id=AFF992&service=sosmed&user=${encodeURIComponent(name || "Mitra")}`}
                                    className="flex-1 bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 text-[11px] text-slate-300 font-mono focus:outline-none"
                                  />
                                  <button
                                    onClick={() =>
                                      handleCopyLink(
                                        `https://sketsagroup.id/ref?id=AFF992&service=sosmed&user=${encodeURIComponent(name || "Mitra")}`,
                                        "sosmed"
                                      )
                                    }
                                    className="px-3.5 bg-teal-800 hover:bg-teal-900 text-white rounded-lg text-xs font-bold flex items-center justify-center gap-1 cursor-pointer"
                                  >
                                    {copiedStatus === "sosmed" ? (
                                      <FileCheck className="w-4 h-4 text-emerald-400" />
                                    ) : (
                                      <Copy className="w-4 h-4" />
                                    )}
                                    <span>{copiedStatus === "sosmed" ? "Disalin!" : "Copy"}</span>
                                  </button>
                                </div>
                              </div>
                            </div>

                            <div className="p-3.5 bg-slate-950/30 rounded-xl border border-slate-800 text-[10px] text-slate-500 leading-relaxed flex items-center gap-2.5 font-medium">
                              <Info className="w-4 h-4 text-slate-400 flex-shrink-0" />
                              <span>
                                Sebarkan tautan di atas melalui Instagram Bio, chat WhatsApp, atau halaman web Anda. Setiap pengunjung yang mendaftar dari link tersebut akan dikunci sebagai prospek Anda selama 30 hari.
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {memberTab === "notifikasi" && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-bold text-sm text-white">Log Notifikasi Sistem</h3>
                          <button className="text-[10px] text-teal-400 font-bold uppercase hover:underline cursor-pointer">
                            Hapus Semua
                          </button>
                        </div>
                        
                        <div className="space-y-3">
                          {(isRegistered ? notificationLog : notificationLog.slice(1)).map((notif) => (
                            <div
                              key={notif.id}
                              className={`p-4 rounded-2xl border flex items-start gap-3 transition-all duration-300 ${
                                notif.isNew
                                  ? "bg-slate-950 border-teal-500/30 shadow-md shadow-teal-500/5"
                                  : "bg-slate-950/40 border-slate-800/80 text-slate-300"
                              }`}
                            >
                              {notif.type === "success" && (
                                <div className="w-8 h-8 rounded-lg bg-emerald-950 text-emerald-400 flex items-center justify-center flex-shrink-0 border border-emerald-500/20">
                                  <FileCheck className="w-4 h-4" />
                                </div>
                              )}
                              {notif.type === "commission" && (
                                <div className="w-8 h-8 rounded-lg bg-yellow-950 text-yellow-400 flex items-center justify-center flex-shrink-0 border border-yellow-500/20 font-mono font-bold text-xs">
                                  💰
                                </div>
                              )}
                              {notif.type === "shipping" && (
                                <div className="w-8 h-8 rounded-lg bg-orange-950 text-orange-400 flex items-center justify-center flex-shrink-0 border border-orange-500/20">
                                  <UserPlus className="w-4 h-4" />
                                </div>
                              )}

                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between gap-2">
                                  <h4 className="font-bold text-xs text-white truncate">{notif.title}</h4>
                                  <span className="text-[9px] font-mono text-slate-500 whitespace-nowrap">{notif.time}</span>
                                </div>
                                <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                                  {notif.desc}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                  </div>

                  {/* Browser Footer panel */}
                  <div className="bg-[#121113] border-t border-zinc-800/50 p-4 flex items-center justify-between text-[10px] text-zinc-500">
                    <span>
                      Mitra Status:{" "}
                      {isRegistered ? (
                        <span className="text-emerald-400 font-bold">● Aktif (Lisensi Lifetime)</span>
                      ) : (
                        <span className="text-orange-400 font-bold">● Belum Registrasi</span>
                      )}
                    </span>
                    <span>Sketsa Group Affiliate Network © 2026</span>
                  </div>

                </div>
              </motion.div>

            </div>
          </div>
        </section>
      );

    default:
      return null;
  }
};
export default ServiceContent;
