import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Star,
  Check,
  Lightbulb,
  HelpCircle,
  ChevronRight,
  Send,
  ArrowRight,
  Sparkles,
  MessageCircle,
  FileCheck,
  Shield,
  Zap,
  TrendingUp,
  Award,
  Lock,
  Briefcase
} from "lucide-react";
import { Bt } from "../data";

interface PricingProps {
  activeService: string;
  onOpenConsultation: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ activeService, onOpenConsultation }) => {
  const [packages, setPackages] = useState<any[]>([]);
  const [addons, setAddons] = useState<any[]>([]);
  const [selectedPlanId, setSelectedPlanId] = useState<string>("");

  useEffect(() => {
    const isMember = activeService === "member";
    const servicePackages = isMember
      ? [
          {
            id: "mem-1",
            name: "Free Affiliate Starter",
            target: "PEMULA / BELAJAR",
            price: "Rp 0",
            originalPrice: "",
            description: "Mulai pelajari dasar pemasaran afiliasi dan miliki link promosi personal Anda gratis.",
            deliveryTime: "Instan",
            revisionCount: "0",
            benefits: [
              "Komisi Penjualan Standard 35%",
              "Akses Dashboard Sejoli",
              "Materi Promosi Dasar",
              "Support Komunitas WA Group"
            ]
          },
          {
            id: "mem-2",
            name: "Pro Affiliate Member",
            target: "SERIUS MENCARI PROFIT",
            price: "Rp 499.000",
            originalPrice: "Rp 999.000",
            popular: true,
            description: "Maksimalkan penjualan dengan modul mentoring video eksklusif, bimbingan langsung, dan bonus tools pendukung.",
            deliveryTime: "1 Hari Kerja",
            revisionCount: "Unlimited",
            benefits: [
              "Komisi Penjualan Premium 35%",
              "Akses Seluruh Swipe File & Banner",
              "Mentoring Zoom 1-on-1 Mingguan",
              "Software Auto-WA Sender Gratis",
              "Akses Prioritas Grup VIP Admin"
            ]
          },
          {
            id: "mem-3",
            name: "Sejoli Whitelabel License",
            target: "DEVELOPER / PEMILIK BRAND",
            price: "Rp 1.499.000",
            originalPrice: "Rp 2.999.000",
            description: "Lisensi instalasi software Sejoli legal di domain Anda sendiri beserta panduan setup menyeluruh.",
            deliveryTime: "1-2 Hari Kerja",
            revisionCount: "3 Kali",
            benefits: [
              "Lisensi Plugin Sejoli Legal",
              "Jasa Setup di Hosting Mandiri",
              "Modul Integrasi WA Gateway RajaSMS",
              "Gratis Domain .com Selama 1 Tahun",
              "Dukungan Teknis Penuh 1 Bulan"
            ]
          }
        ]
      : Bt[activeService]?.pricingPackages || [];

    const serviceAddons = isMember
      ? [
          {
            id: "mem-add-1",
            name: "Upgrade Whitelabel Domain Kustom",
            price: 350000,
            description: "Gunakan nama domain sendiri (affiliate.bisnisanda.com) untuk portal Sejoli Anda",
            checked: false
          },
          {
            id: "mem-add-2",
            name: "Sesi Coaching Privat 2 Jam",
            price: 500000,
            description: "Bimbingan langsung lewat Google Meet menyusun strategi periklanan berkonversi tinggi",
            checked: false
          }
        ]
      : Bt[activeService]?.pricingAddons || [];

    setPackages(servicePackages);
    setAddons(serviceAddons);

    const popularPlan = servicePackages.find((p) => p.popular);
    setSelectedPlanId(popularPlan ? popularPlan.id : servicePackages[0]?.id || "");
  }, [activeService]);

  const toggleAddon = (id: string) => {
    setAddons((prev) =>
      prev.map((addon) =>
        addon.id === id ? { ...addon, checked: !addon.checked } : addon
      )
    );
  };

  const selectedPlan = packages.find((p) => p.id === selectedPlanId);
  const basePrice = selectedPlan ? Number(String(selectedPlan.price).replace(/[^0-9]/g, "")) || 0 : 0;
  const planName = selectedPlan ? selectedPlan.name : "Paket Pilihan";

  const addonsPrice = addons.filter((a) => a.checked).reduce((sum, a) => sum + a.price, 0);
  const totalPrice = basePrice + addonsPrice;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0
    }).format(val);
  };

  const sendOrderToWhatsApp = () => {
    const isMember = activeService === "member";
    const selectedAddonsList = addons
      .filter((a) => a.checked)
      .map((a) => `• ${a.name}`);
    const addonsText =
      selectedAddonsList.length > 0
        ? `Addon yang saya pilih:\n${selectedAddonsList.join("\n")}`
        : `Tanpa addon tambahan`;

    const message = `Halo Sketsa Group,
Saya telah menggunakan *Kalkulator Estimasi Biaya ${
      isMember ? "Kemitraan Sejoli" : Bt[activeService]?.name || ""
    }* di landing page Anda.

Berikut konfigurasi pilihan saya:
- *Paket Utama:* ${planName} (${formatCurrency(basePrice)})
${addonsText}
- *Estimasi Investasi:* *${formatCurrency(totalPrice)}*

Mohon dibantu penjelasan lebih lanjut mengenai proyek ini. Terima kasih!`;

    window.open(
      `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const requestConsultation = () => {
    const message = `Halo Sketsa Group,
Saya ingin mengklaim *Sesi Konsultasi & Audit Gratis* untuk layanan *${
      activeService === "member"
        ? "Kemitraan Sejoli"
        : Bt[activeService]?.name || "Layanan Sketsa Group"
    }*.
Mohon informasikan jadwal ketersediaan konsultasinya. Terima kasih!`;

    window.open(
      `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const requestNegotiation = () => {
    const message = `Halo Sketsa Group,
Saya sangat tertarik dengan layanan *${
      activeService === "member"
        ? "Kemitraan Sejoli"
        : Bt[activeService]?.name || "Layanan Sketsa Group"
    }* dan ingin mengajukan *Negosiasi Harga / Penawaran Budget Khusus*.
Apakah saya bisa mendiskusikan penyesuaian scope kerja atau skema pembayaran bertahap dengan tim Anda? Terima kasih!`;

    window.open(
      `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  // PAS Copywriting structures
  const COPYWRITING: Record<string, any> = {
    website: {
      headline: "Miliki Website Kelas Dunia yang Menjual Otomatis 24/7 Tanpa Lelah!",
      problem: "Banyak bisnis bakar uang beriklan jutaan per hari, tapi pembeli kabur karena website lambat, berantakan, dan mencurigakan.",
      agitate: "Jika dibiarkan, kompetitor Anda yang websitenya lebih cepat & profesional akan merebut seluruh calon pembeli Anda. Uang iklan Anda terbuang sia-sia!",
      solve: "Sketsa Group merancang sistem landing page premium berkecepatan tinggi dengan psikologi copywriting yang memicu nafsu beli seketika.",
      benefit: "Bayangkan perasaan bangga saat melihat website brand Anda terlihat setara dengan brand internasional, mendatangkan pembeli otomatis saat Anda tidur nyenyak.",
      scarcity: "PENTING: Kami hanya menerima maksimal 3 proyek website per minggu demi menjaga kualitas server & desain kustom. Sisa 1 slot tersisa untuk minggu ini! Daftar sekarang untuk mengunci harga promo dan bonus audit SEO senilai Rp 1.5 Juta."
    },
    legalitas: {
      headline: "Tidur Nyenyak Tanpa Takut Sengketa, Jadikan Bisnis Anda Sah & Kredibel!",
      problem: "Banyak UMKM terhambat menang tender besar atau disorot petugas hukum karena tidak memiliki akta PT/CV resmi dan izin operasional.",
      agitate: "Nama brand Anda bisa diserobot orang lain jika tidak didaftarkan ke HAKI sekarang. Saat omset Anda miliaran, Anda bisa dituntut ganti rugi ratusan juta!",
      solve: "Kami urus seluruh draf akta notaris, pendaftaran Kemenkumham, NPWP Badan, hingga izin OSS NIB secara legal, resmi, dan bebas sengketa.",
      benefit: "Miliki ketenangan pikiran yang mutlak. Nikmati prestise luar biasa saat mengirimkan proposal kerja sama atas nama PT Anda sendiri kepada korporasi besar.",
      scarcity: "PERINGATAN: Kebijakan nama PT unik Kemenkumham bersifat 'siapa cepat dia dapat'. Jika kompetitor mendaftarkan nama yang sama hari ini, Anda kehilangan hak nama brand Anda selamanya! Amankan slot pendirian Anda hari ini."
    },
    sertifikasi: {
      headline: "Raih Sertifikat ISO Resmi KAN untuk Memenangkan Tender Korporat & BUMN!",
      problem: "Perusahaan Anda terus-menerus kalah dalam tender bernilai miliaran hanya karena tidak memiliki sertifikasi sistem manajemen ISO.",
      agitate: "Masa depan korporasi terancam stagnan jika Anda terus melewatkan peluang proyek skala nasional. Kompetitor ber-ISO akan menyapu bersih pasar Anda.",
      solve: "Konsultan senior kami mendampingi penyusunan SOP, manual mutu, audit internal, hingga jaminan kelulusan audit sertifikasi eksternal 100%.",
      benefit: "Rasakan kebanggaan dan kehormatan ketika seluruh operasional perusahaan berjalan tertib dengan standar mutu tertinggi kelas dunia.",
      scarcity: "Masa pendampingan konsultasi ISO membutuhkan waktu intensif. Tim Lead Auditor kami hanya membuka slot untuk 2 korporasi baru bulan ini untuk memastikan kelulusan kilat. Hubungi kami hari ini untuk penawaran khusus!"
    },
    marketing: {
      headline: "Hentikan Tebak-Tebakan Data Iklan! Lacak ROAS Real-Time Secara Akurat 100%!",
      problem: "Algoritma iklan Meta/TikTok Anda buta karena pemblokiran cookie iOS 14. Anda merasa boncos karena data pembelian di dasbor meleset jauh dari rekening riil.",
      agitate: "Iklan yang buta data akan terus menampilkan promosi ke orang yang salah, menghabiskan anggaran jutaan rupiah Anda dalam hitungan jam tanpa hasil.",
      solve: "Kami membangun infrastruktur server-side tracking GTM & Conversion API yang memancarkan data pembelian langsung melewati blokir ad-blocker.",
      benefit: "Kendalikan bisnis Anda sepenuhnya dengan rasa percaya diri tinggi. Lihat grafik keuntungan yang naik stabil di dasbor interaktif setiap malam.",
      scarcity: "Bonus Spesifik: Dapatkan gratis instalasi server cloud sandbox kecepatan tinggi selama 30 hari pertama. Hanya untuk 5 pengiklan tercepat hari ini!"
    },
    sosmed: {
      headline: "Miliki Konten Sosmed Estetik & Persuasif yang Mengubah Followers Jadi Pembeli!",
      problem: "Feed Instagram Anda sepi seperti toko terbengkalai. Foto buram & postingan tidak konsisten membuat calon pembeli ragu untuk bertransaksi.",
      agitate: "Konsumen modern menilai kredibilitas dalam 3 detik pertama melihat profil sosmed Anda. Jika terlihat murahan, mereka akan lari ke kompetitor yang feed-nya rapi.",
      solve: "Kami sediakan tim kreatif lengkap (desainer grafis, video editor Reels, copywriter, admin posting) untuk mengelola akun Anda secara konsisten harian.",
      benefit: "Bebaskan waktu Anda dari pusing memikirkan ide postingan setiap hari. Fokuslah melayani membeludaknya pesanan yang masuk melalui DM & WhatsApp.",
      scarcity: "KUOTA TERBATAS: Desain premium kami dikerjakan manual oleh desainer senior, bukan template massal. Kami membatasi hanya mengelola maksimal 10 akun aktif. Saat ini sisa 2 kuota tersisa! Amankan slot Anda hari ini untuk mendapatkan bonus layout highlight cover eksklusif."
    },
    member: {
      headline: "Akses Mesin Penghasil Pendapatan Pasif Tanpa Batas Sebagai Premium Affiliate!",
      problem: "Banyak pemasar afiliasi gagal menghasilkan komisi karena tidak disediakan copywriting penawaran, tidak dibimbing mentor, dan sistem pelacakan meleset.",
      agitate: "Menghabiskan waktu menyebar link di media sosial secara acak hanya akan membuat akun Anda diblokir dan tidak menghasilkan komisi satu rupiah pun.",
      solve: "Sketsa Group menyediakan portal terintegrasi lengkap dengan swipe copy siap posting, pelacakan referral otomatis WA, dan merchandise gratis Cozy Shoes Care.",
      benefit: "Nikmati aliran komisi pasif yang cair otomatis tiap minggu langsung ke rekening bank Anda, memberikan stabilitas finansial tambahan.",
      scarcity: "PENTING: Bonus merchandise Cozy Foam Shoe Cleaner gratis senilai Rp 85.000 hanya tersedia untuk 50 pendaftar pertama minggu ini. Sisa kuota terbatas, amankan slot lisensi Sejoli Anda sekarang!"
    }
  };

  const isMember = activeService === "member";
  const pricingTitle = isMember ? "Tabel Paket Lisensi & Mentoring Mitra Sejoli" : Bt[activeService]?.pricingTitle || "Paket Jasa Premium";
  const pricingHighlight = isMember ? "Bergabung Sekarang & Mulai Profit" : Bt[activeService]?.pricingHighlight || "Investasi Terbaik";
  const pricingSub = isMember
    ? "Pilih tingkat lisensi kemitraan di bawah ini sesuai keseriusan Anda, lalu tambahkan sesi privat sesuai kebutuhan."
    : Bt[activeService]?.pricingSub || "Pilih paket yang sesuai kebutuhan.";

  const selectedCopy = COPYWRITING[activeService];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-slate-50 to-white relative">
      <div id="pricing-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div id="pricing-header" className="text-center max-w-3xl mx-auto mb-16">
          <span
            id="pricing-label"
            className="text-xs font-extrabold text-teal-800 tracking-widest uppercase bg-teal-50 border border-teal-100/50 px-3.5 py-1.5 rounded-full"
          >
            Investasi Bisnis Anda
          </span>
          <h2 id="pricing-heading" className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-slate-900 mt-5 tracking-tight leading-tight">
            {pricingTitle} <br />
            Dengan <span className="text-teal-700 italic font-serif font-extrabold">{pricingHighlight}</span>
          </h2>
          <p id="pricing-subtitle" className="text-slate-500 text-sm sm:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            {pricingSub}
          </p>
        </div>

        {/* Social Proof (only on sosmed) */}
        {activeService === "sosmed" && (
          <div className="mb-12 bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-teal-50 rounded-full blur-3xl pointer-events-none" />
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-amber-500 mb-2">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                  <span className="text-xs font-bold text-slate-800 ml-1">50+ Klien Puas</span>
                </div>
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-slate-900">
                  Mereka Yang Telah Melejit Bersama Jasa Konten Kami
                </h3>
                <p className="text-xs text-slate-500">
                  Lebih dari 50 pemilik brand, klinik, apotek, dan e-commerce menyerahkan konten harian mereka kepada kami dengan kepuasan 99%.
                </p>
              </div>
              <div className="flex -space-x-3 items-center">
                {[
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80",
                  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=80&q=80",
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80"
                ].map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt="client"
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm"
                  />
                ))}
                <div className="w-10 h-10 rounded-full bg-teal-800 text-white text-[10px] font-bold flex items-center justify-center border-2 border-white shadow-sm">
                  +50
                </div>
              </div>
            </div>

            {/* Micro Reviews */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100/60 relative">
                <p className="text-xs text-slate-600 leading-relaxed italic">
                  "Semenjak feed IG diurus Sketsa Group, akun kelihat elit & profesional banget. Pembeli ga ragu lagi transfer langsung. Closing harian naik drastis!"
                </p>
                <div className="mt-4 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-xs font-bold text-teal-800">
                    RB
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800">Ibu Rara</h4>
                    <span className="text-[10px] text-slate-400">Owner Rara Bakery (Growth Pack)</span>
                  </div>
                </div>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100/60 relative">
                <p className="text-xs text-slate-600 leading-relaxed italic">
                  "Video reels buatan tim Sketsa bener-bener kreatif. Ada yang FYP tembus 1.2M views! Nambah 8.000 followers organik dalam sebulan."
                </p>
                <div className="mt-4 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-xs font-bold text-teal-800">
                    DS
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800">Mas Doni</h4>
                    <span className="text-[10px] text-slate-400">Owner Streetwear Brand (Elite Pack)</span>
                  </div>
                </div>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100/60 relative">
                <p className="text-xs text-slate-600 leading-relaxed italic">
                  "Admin postingnya disiplin di jam prime-time dan selalu bantuin engagement. Kami sangat terbantu dibanding hire desainer sendiri."
                </p>
                <div className="mt-4 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-xs font-bold text-teal-800">
                    KC
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800">dr. Amanda</h4>
                    <span className="text-[10px] text-slate-400">Owner Klinik Cantik (Growth Pack)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Pricing Deck & Decoy Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-stretch">
          
          {/* Main packages deck */}
          <div id="pricing-deck" className="lg:col-span-8 xl:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch [perspective:1200px] [transform-style:preserve-3d]">
            {packages.map((pkg, idx) => {
              const isSelected = selectedPlanId === pkg.id;
              return (
                <motion.div
                  key={pkg.id}
                  id={`plan-card-${pkg.id}`}
                  onClick={() => setSelectedPlanId(pkg.id)}
                  initial={{ opacity: 0, y: 70, rotateX: 12, rotateY: idx === 0 ? -6 : idx === 2 ? 6 : 0, z: -30 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0, z: 0 }}
                  whileHover={{
                    y: -12,
                    rotateX: -4,
                    rotateY: idx === 0 ? -1 : idx === 2 ? 1 : 0,
                    z: 10,
                    boxShadow: isSelected
                      ? "0 30px 60px -15px rgba(13, 148, 136, 0.22)"
                      : "0 25px 50px -12px rgba(0, 0, 0, 0.12)",
                    borderColor: "rgba(13, 148, 136, 0.25)"
                  }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.8, type: "spring", stiffness: 50, damping: 14 }}
                  style={{ transformStyle: "preserve-3d" }}
                  className={`relative bg-white rounded-3xl p-6 flex flex-col justify-between border transition-all duration-300 cursor-pointer ${
                    isSelected ? "border-teal-700 ring-2 ring-teal-700/10 shadow-2xl" : "border-slate-100 shadow-md"
                  }`}
                >
                  {pkg.popular && (
                    <span
                      id={`popular-ribbon-${pkg.id}`}
                      className="absolute top-4 right-4 bg-teal-800 text-[9px] font-bold text-white px-2.5 py-1 rounded-full flex items-center gap-1"
                    >
                      <Star className="w-3 h-3 text-amber-300 animate-pulse fill-amber-300" /> TERPOPULER
                    </span>
                  )}

                  <div style={{ transform: "translateZ(20px)" }}>
                    <h3 id={`plan-name-${pkg.id}`} className="font-serif font-bold text-base md:text-lg text-slate-800 mt-2">
                      {pkg.name}
                    </h3>
                    <p id={`plan-target-${pkg.id}`} className="text-[9px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">
                      {pkg.target}
                    </p>

                    {activeService !== "legalitas" ? (
                      <div id={`plan-price-wrapper-${pkg.id}`} className="mt-4 flex items-baseline gap-1.5">
                        <span id={`plan-price-${pkg.id}`} className="text-xl md:text-2xl font-extrabold text-teal-800 font-serif">
                          {pkg.price}
                        </span>
                        {pkg.originalPrice && (
                          <span id={`plan-orig-price-${pkg.id}`} className="text-[10px] text-slate-400 line-through">
                            {pkg.originalPrice}
                          </span>
                        )}
                      </div>
                    ) : (
                      <div id={`plan-price-wrapper-${pkg.id}`} className="mt-4 flex flex-col">
                        <span className="text-[11px] font-extrabold text-teal-800 bg-teal-50 border border-teal-100/50 px-2.5 py-1.5 rounded-md inline-block uppercase tracking-wider w-max">
                          Hubungi Kami / Negotiable
                        </span>
                      </div>
                    )}

                    <p id={`plan-desc-${pkg.id}`} className="text-[11px] text-slate-500 mt-2.5 leading-relaxed">
                      {pkg.description}
                    </p>
                    <div className="h-px bg-slate-100 my-4" />

                    <div
                      id={`plan-meta-${pkg.id}`}
                      className="flex items-center justify-between text-[10px] text-slate-500 mb-4 bg-slate-50 p-2 rounded-lg"
                    >
                      <span>
                        Waktu: <strong className="text-slate-800">{pkg.deliveryTime}</strong>
                      </span>
                      <span>
                        Revisi: <strong className="text-slate-800">{pkg.revisionCount}</strong>
                      </span>
                    </div>

                    <ul id={`plan-benefits-${pkg.id}`} className="space-y-2">
                      {pkg.benefits.map((benefit: string, bIdx: number) => (
                        <li key={bIdx} className="flex items-start gap-1.5 text-[11px] text-slate-600 leading-tight">
                          <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6" style={{ transform: "translateZ(30px)" }}>
                    <button
                      id={`plan-select-btn-${pkg.id}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedPlanId(pkg.id);
                      }}
                      className={`w-full py-2.5 rounded-xl font-bold text-xs tracking-wide transition-all cursor-pointer ${
                        isSelected ? "bg-teal-800 hover:bg-teal-900 text-white shadow-lg" : "bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200"
                      }`}
                    >
                      {isSelected ? "✓ Terpilih" : "Pilih Paket Ini"}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Decoy Effect Panel */}
          <div className="lg:col-span-4 xl:col-span-3">
            <motion.div
              id="decoy-effect-panel"
              initial={{ opacity: 0, x: 40, rotateY: 10 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, type: "spring", stiffness: 60, damping: 14 }}
              className="bg-slate-900 text-white rounded-3xl p-6 h-full flex flex-col justify-between border border-slate-800 shadow-xl relative overflow-hidden [transform-style:preserve-3d]"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />
              <div>
                <div className="flex items-center gap-1.5 mb-4">
                  <Lightbulb className="w-4 h-4 text-emerald-400" />
                  <span className="text-[10px] font-extrabold text-emerald-400 tracking-wider uppercase">
                    Trik Cerdas Memilih
                  </span>
                </div>
                <h3 className="font-serif font-bold text-lg md:text-xl leading-tight">
                  Perbandingan Nilai <br />
                  <span className="text-teal-300">Asymmetric Decoy</span>
                </h3>
                <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">
                  Bandingkan efisiensi investasi riil Anda sebelum menentukan pilihan utama. Strategi ini membantu Anda meminimalkan pengeluaran & memaksimalkan ROI.
                </p>
                <div className="h-px bg-slate-800 my-4" />

                <div className="space-y-4">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-slate-300 font-semibold">Analisis Paket Terpilih:</span>
                    <span className="text-teal-300 font-bold font-mono">
                      {selectedPlan?.name.split(" ")[0] || "Pilihan"}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex justify-between text-[10px] text-slate-400">
                      <span>Kelengkapan Fitur & ROI</span>
                      <span className="font-bold text-emerald-400 font-mono">
                        {selectedPlanId === packages[0]?.id
                          ? "55% (Ekonomis)"
                          : selectedPlanId === packages[1]?.id
                          ? "98% (Sangat Optimal!)"
                          : "90% (Enterprise)"}
                      </span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        animate={{
                          width:
                            selectedPlanId === packages[0]?.id
                              ? "55%"
                              : selectedPlanId === packages[1]?.id
                              ? "98%"
                              : "90%"
                        }}
                        transition={{ type: "spring", stiffness: 80, damping: 15 }}
                        className={`h-full rounded-full ${
                          selectedPlanId === packages[0]?.id
                            ? "bg-amber-500"
                            : selectedPlanId === packages[1]?.id
                            ? "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]"
                            : "bg-teal-400"
                        }`}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex justify-between text-[10px] text-slate-400">
                      <span>Rasio Nilai Investasi per Rupiah</span>
                      <span className="font-bold text-teal-300 font-mono">
                        {selectedPlanId === packages[0]?.id
                          ? "65% (Terbatas)"
                          : selectedPlanId === packages[1]?.id
                          ? "96% (Maksimal)"
                          : "75% (Premium)"}
                      </span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        animate={{
                          width:
                            selectedPlanId === packages[0]?.id
                              ? "65%"
                              : selectedPlanId === packages[1]?.id
                              ? "96%"
                              : "75%"
                        }}
                        transition={{ type: "spring", stiffness: 80, damping: 15 }}
                        className={`h-full rounded-full ${
                          selectedPlanId === packages[1]?.id
                            ? "bg-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.5)]"
                            : "bg-slate-500"
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Workings / Explanations */}
              <div className="mt-5 p-3.5 rounded-2xl bg-teal-950/25 border border-teal-800/20">
                <div className="flex gap-2 items-start">
                  <HelpCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[11px] font-bold text-emerald-300">Bagaimana Cara Kerjanya?</h4>
                    <p className="text-[10px] text-slate-300 mt-1 leading-relaxed">
                      {activeService === "website" &&
                        "Paket Starter kami tawarkan sangat murah, namun dengan upgrade selisih harga kecil ke Paket Pro, Anda langsung menghemat biaya setup e-commerce, integrasi WA, & optimasi SEO yang bila dibeli satuan bisa mencapai Rp 4.5jt+!"}
                      {activeService === "legalitas" &&
                        "Paket PT sengaja kami beri margin diskon besar. Dengan menambah sedikit investasi dari CV, Anda memperoleh perlindungan hukum aset terbatas (terpisah dari harta pribadi) yang mutlak mengamankan masa depan finansial keluarga."}
                      {activeService === "sertifikasi" &&
                        "Sertifikasi ISO 9001 adalah fondasi. Memilih audit dengan jaminan non-NCR kelulusan KAN merupakan investasi tak terkalahkan karena sekali kelulusan gagal karena kesalahan sendiri, Anda harus bayar audit ulang penuh!"}
                      {activeService === "marketing" &&
                        "Sistem CAPI full-funnel di Paket CRM menyingkirkan biaya kebocoran data piksel sebesar 40%. Mengapa memilih tracking biasa jika setup server-side kami melipatgandakan ROI iklan Anda langsung?"}
                      {activeService === "sosmed" &&
                        "Paket Growth Engine memberikan 30 materi posting termasuk transisi Reels & Copywriting Hook seharga Paket Starter yang hanya 15 post. Paket Starter didesain sebagai umpan, jadilah cerdas memilih Paket Growth!"}
                      {activeService === "member" &&
                        "Lisensi Affiliate Pro menawarkan sistem mentoring mingguan 1-on-1 gratis. Ini menjamin kurva belajar bisnis Anda melesat instan dibanding meraba-raba sistem sendirian."}
                    </p>
                  </div>
                </div>
              </div>

              {/* Selected Benefit List */}
              <div className="mt-5 space-y-2 bg-slate-950/40 p-3 rounded-2xl border border-slate-800/60">
                <span className="text-[9px] font-extrabold text-slate-500 uppercase tracking-widest block mb-1">
                  Benefit Terseleksi:
                </span>
                <div className="flex items-center justify-between text-[10px]">
                  <span className="text-slate-300">Garansi Layanan Resmi:</span>
                  <span className="font-bold text-emerald-400">YA</span>
                </div>
                <div className="flex items-center justify-between text-[10px]">
                  <span className="text-slate-300">Prioritas Antrean Project:</span>
                  <span className="font-bold text-teal-300">
                    {selectedPlanId === packages[0]?.id ? "Normal" : "Prioritas Tinggi"}
                  </span>
                </div>
                <div className="flex items-center justify-between text-[10px]">
                  <span className="text-slate-300">Dukungan Konsultasi Lanjutan:</span>
                  <span className="font-bold text-emerald-400">
                    {selectedPlanId === packages[0]?.id ? "Terbatas" : "Full Support"}
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between gap-2">
                <div className="flex flex-col">
                  <span className="text-[9px] text-slate-400 uppercase tracking-wider">
                    {activeService === "legalitas" ? "Status Layanan" : "Estimasi Terpilih"}
                  </span>
                  <span className="text-sm font-extrabold text-emerald-400 font-mono">
                    {activeService === "legalitas" ? "Hubungi Notaris" : selectedPlan?.price || "Rp 0"}
                  </span>
                </div>
                <a
                  href="#interactive-calculator"
                  className="px-3.5 py-2 bg-teal-800 hover:bg-teal-700 text-white font-bold text-[10px] rounded-xl transition-all flex items-center gap-1 cursor-pointer"
                >
                  <span>Mulai Konfigurasi</span>
                  <ChevronRight className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Dynamic Interactive Calculator */}
        {addons.length > 0 && (
          <motion.div
            id="interactive-calculator"
            initial={{ opacity: 0, y: 50, rotateX: 6, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-[#042823] text-white rounded-3xl shadow-2xl p-6 md:p-10 border border-emerald-950/40 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Checklist of addons */}
            <div id="calculator-checklist" className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping" />
                  <span className="text-xs text-emerald-300 font-bold tracking-widest uppercase">
                    Smart Configurator
                  </span>
                </div>
                <h3 className="font-serif font-bold text-xl md:text-2xl">Butuh Layanan Tambahan?</h3>
                <p className="text-xs text-teal-200/60 mt-2 leading-relaxed">
                  Pilih opsi add-on di bawah ini. Kalkulator akan secara dinamis menyusun proposal harga untuk Anda secara instan.
                </p>
              </div>

              <div className="space-y-3">
                {addons.map((addon) => (
                  <div
                    key={addon.id}
                    id={`addon-${addon.id}`}
                    onClick={() => toggleAddon(addon.id)}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-4 ${
                      addon.checked
                        ? "bg-teal-900/30 border-emerald-500 shadow-md"
                        : "bg-[#031e1b] border-emerald-950 hover:bg-teal-950/40"
                    }`}
                  >
                    <div className="mt-1">
                      <input
                        id={`addon-checkbox-${addon.id}`}
                        type="checkbox"
                        checked={addon.checked}
                        onChange={() => {}}
                        className="w-4 h-4 rounded text-teal-700 bg-emerald-950 border-emerald-900 focus:ring-emerald-500 focus:ring-2 focus:ring-offset-emerald-950 accent-emerald-500 cursor-pointer"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <span className="text-xs font-bold text-white">{addon.name}</span>
                        {activeService !== "legalitas" && (
                          <span className="text-xs font-mono font-bold text-emerald-400">
                            +{formatCurrency(addon.price)}
                          </span>
                        )}
                      </div>
                      <p className="text-[10px] text-teal-200/50 mt-1">{addon.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Calculations and Output */}
            <div
              id="calculator-output"
              className="lg:col-span-5 bg-[#021815] border border-emerald-950 p-6 md:p-8 rounded-2xl flex flex-col justify-between h-full min-h-[380px]"
            >
              {activeService === "legalitas" ? (
                <div>
                  <h4 className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-6">
                    Pengajuan Penawaran Legalitas
                  </h4>
                  <div className="space-y-4 text-xs border-b border-[#032e1b] pb-6 text-slate-300 leading-relaxed">
                    <p>
                      Layanan pendirian CV, PT, atau pengurusan HAKI memiliki sifat kustom yang disesuaikan dengan domisili usaha, modal dasar, dan klasifikasi kelas bisnis Anda.
                    </p>
                    <p className="text-teal-300 font-medium">
                      Anda dapat memilih layanan utama dan tambahan di samping, lalu kirimkan rincian untuk didiskusikan langsung dengan tim notaris kami.
                    </p>
                    <div className="p-3.5 bg-[#031e1b] rounded-xl border border-emerald-950/60 mt-2">
                      <span className="text-[9px] font-bold text-emerald-400 uppercase block mb-1">
                        Pilihan Layanan Anda:
                      </span>
                      <span className="text-xs font-bold text-white block">{planName}</span>
                      {addons.filter((a) => a.checked).length > 0 && (
                        <div className="mt-2 pt-2 border-t border-emerald-950/40">
                          <span className="text-[9px] font-bold text-slate-400 uppercase block mb-1">
                            Layanan Tambahan:
                          </span>
                          <div className="space-y-1">
                            {addons
                              .filter((a) => a.checked)
                              .map((addon) => (
                                <div key={addon.id} className="text-[10px] text-teal-300 flex items-center gap-1.5">
                                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                                  <span className="truncate max-w-[200px]">{addon.name}</span>
                                </div>
                              ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <h4 className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-6">
                    Estimasi Rincian Investasi
                  </h4>
                  <div className="space-y-4 text-xs border-b border-emerald-950/80 pb-6">
                    <div className="flex items-center justify-between text-slate-300">
                      <span>Layanan Utama:</span>
                      <span className="font-semibold text-white">{planName}</span>
                    </div>
                    <div className="flex items-center justify-between text-teal-300 font-mono">
                      <span>Harga Dasar Paket:</span>
                      <span>{formatCurrency(basePrice)}</span>
                    </div>
                    {addons.filter((a) => a.checked).length > 0 && (
                      <div className="pt-2 border-t border-emerald-950/40">
                        <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block mb-2">
                          Tambahan Layanan:
                        </span>
                        <div className="space-y-2">
                          {addons
                            .filter((a) => a.checked)
                            .map((addon) => (
                              <div key={addon.id} className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
                                <span className="truncate max-w-[180px]">{addon.name}</span>
                                <span>+{formatCurrency(addon.price)}</span>
                              </div>
                            ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Total Summary Row & CTA */}
              <div className="mt-8">
                {activeService !== "legalitas" ? (
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs text-slate-400 font-bold">Total Nilai Investasi:</span>
                    <span className="text-xl md:text-2xl font-extrabold text-emerald-400 font-serif font-mono">
                      {formatCurrency(totalPrice)}
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs text-slate-400 font-bold">Estimasi Investasi:</span>
                    <span className="text-xs font-bold text-yellow-400 uppercase tracking-wider bg-yellow-950/40 border border-yellow-900/50 px-2.5 py-1 rounded">
                      Hubungi Kami / Negotiable
                    </span>
                  </div>
                )}

                <div className="flex items-start gap-2 bg-emerald-500/10 text-emerald-300 p-3 rounded-xl border border-emerald-500/20 text-[10px] leading-relaxed mb-6">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>
                    {isMember
                      ? "Akses penuh kelas panduan jualan beserta seluruh draf copywriting bonus Sketsa Group sudah otomatis gratis!"
                      : activeService === "legalitas"
                      ? "Garansi verifikasi nama perusahaan anti duplikasi dan bebas sengketa di Kemenkumham gratis!"
                      : "Sertifikat garansi bantuan, hosting super cepat lokal, dan setup domain bisnis resmi sudah otomatis gratis!"}
                  </span>
                </div>

                <button
                  onClick={sendOrderToWhatsApp}
                  className="w-full py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/10 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-teal-100" />
                  <span>{activeService === "legalitas" ? "Kirim Kebutuhan & Ajukan Nego" : "Kirim Pesanan Estimasi Jasa"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Copywriting PAS Details (Under Calculator) */}
        {selectedCopy && (
          <div className="mt-20 max-w-5xl mx-auto bg-[#021412] text-white rounded-3xl p-8 md:p-12 border border-teal-950 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-teal-900/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-emerald-900/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative space-y-8">
              <div className="border-b border-teal-950/40 pb-6">
                <span className="text-[10px] font-extrabold text-emerald-400 tracking-widest uppercase bg-emerald-950/50 border border-emerald-900/30 px-3 py-1 rounded-full">
                  Analisis Strategis & Solusi
                </span>
                <h3 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl text-white mt-4 leading-tight">
                  {selectedCopy.headline}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-red-400">
                    <span className="w-2 h-2 bg-red-500 rounded-full" />
                    <span className="text-[11px] font-extrabold tracking-wider uppercase font-mono">
                      Kondisi Saat Ini
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{selectedCopy.problem}</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-amber-400">
                    <span className="w-2 h-2 bg-amber-500 rounded-full animate-ping" />
                    <span className="text-[11px] font-extrabold tracking-wider uppercase font-mono">
                      Dampak Resiko
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{selectedCopy.agitate}</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full" />
                    <span className="text-[11px] font-extrabold tracking-wider uppercase font-mono">
                      Solusi Sketsa
                    </span>
                  </div>
                  <p className="text-xs text-emerald-200 leading-relaxed font-medium">{selectedCopy.solve}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-teal-950/40">
                <div className="bg-[#031c19] p-5 rounded-2xl border border-teal-950/50 space-y-2">
                  <h4 className="text-xs font-extrabold text-emerald-300 tracking-wider uppercase">
                    Hasil Akhir & Potensi Bisnis Anda
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{selectedCopy.benefit}</p>
                </div>

                <div className="bg-gradient-to-br from-amber-950/20 to-[#042823] p-5 rounded-2xl border border-amber-950/40 space-y-2">
                  <h4 className="text-xs font-extrabold text-amber-400 tracking-wider uppercase flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 animate-pulse text-amber-400" /> Informasi Penting & Slot Terbatas
                  </h4>
                  <p className="text-xs text-slate-200 leading-relaxed font-semibold">{selectedCopy.scarcity}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Custom Claims & Negotiations block */}
        <div id="pricing-claims-negotiation" className="mt-16 md:mt-24 max-w-5xl mx-auto [perspective:1200px]">
          <div className="text-center mb-10">
            <span className="text-[10px] font-extrabold text-teal-800 tracking-widest uppercase bg-teal-50 border border-teal-100/50 px-3 py-1 rounded-full">
              Kustomisasi & Kesepakatan
            </span>
            <h3 className="font-serif font-bold text-xl sm:text-2xl md:text-3xl text-slate-900 mt-3">
              Butuh Solusi Khusus atau Penyesuaian Budget?
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-2 max-w-2xl mx-auto leading-relaxed">
              Kami siap mendengarkan kebutuhan spesifik bisnis Anda. Klaim benefit cuma-cuma atau ajukan negosiasi harga terbaik Anda sekarang.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch [transform-style:preserve-3d]">
            
            {/* Consultation Claim */}
            <motion.div
              id="cta-claim-consultation-card"
              initial={{ opacity: 0, y: 50, rotateX: 6 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{
                y: -10,
                rotateX: -3,
                rotateY: -2,
                z: 15,
                boxShadow: "0 30px 60px -15px rgba(13, 148, 136, 0.18)",
                borderColor: "rgba(13, 148, 136, 0.3)"
              }}
              transition={{ duration: 0.7, type: "spring", stiffness: 60, damping: 12 }}
              style={{ transformStyle: "preserve-3d" }}
              className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-md relative overflow-hidden group cursor-pointer"
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-emerald-50 rounded-full blur-2xl group-hover:bg-emerald-100/40 transition-colors pointer-events-none" />
              
              <div style={{ transform: "translateZ(20px)" }}>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700">
                    <Sparkles className="w-6 h-6 animate-bounce" />
                  </div>
                  <span className="text-[9px] font-extrabold text-amber-600 bg-amber-50 border border-amber-100 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Gratis Senilai Rp 1.5jt
                  </span>
                </div>

                <h4 className="font-serif font-bold text-lg sm:text-xl text-slate-800 leading-snug">
                  Klaim Sesi Konsultasi & Audit Gratis
                </h4>
                <p className="text-xs text-slate-500 mt-3 leading-relaxed">
                  Dapatkan analisis eksklusif 1-on-1 dari tim ahli senior Sketsa Group. Kami akan memetakan potensi akselerasi, audit digital, dan blueprint solusi khusus untuk bisnis Anda.
                </p>

                <div className="mt-6 space-y-2 bg-slate-50 p-3 rounded-2xl border border-slate-100/80">
                  <div className="flex items-center gap-2 text-[11px] text-slate-600">
                    <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>Laporan Analisis Hambatan Bisnis</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-slate-600">
                    <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>Estimasi Timeline & Rekomendasi Fitur</span>
                  </div>
                </div>
              </div>

              <div className="mt-8" style={{ transform: "translateZ(30px)" }}>
                <button
                  id="btn-claim-consultation-action"
                  onClick={(e) => {
                    e.stopPropagation();
                    requestConsultation();
                  }}
                  className="w-full py-3.5 bg-teal-800 hover:bg-teal-900 text-white rounded-xl font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer hover:scale-[1.02]"
                >
                  <Award className="w-4 h-4" />
                  <span>Klaim Konsultasi Sekarang</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>

            {/* Price Negotiation */}
            <motion.div
              id="cta-negotiate-price-card"
              initial={{ opacity: 0, y: 50, rotateX: 6 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{
                y: -10,
                rotateX: -3,
                rotateY: 2,
                z: 15,
                boxShadow: "0 30px 60px -15px rgba(13, 148, 136, 0.18)",
                borderColor: "rgba(13, 148, 136, 0.3)"
              }}
              transition={{ duration: 0.7, type: "spring", stiffness: 60, damping: 12 }}
              style={{ transformStyle: "preserve-3d" }}
              className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-md relative overflow-hidden group cursor-pointer"
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-emerald-50 rounded-full blur-2xl group-hover:bg-emerald-100/40 transition-colors pointer-events-none" />
              
              <div style={{ transform: "translateZ(20px)" }}>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700">
                    <Briefcase className="w-6 h-6 animate-pulse" />
                  </div>
                  <span className="text-[9px] font-extrabold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Sistem Fleksibel
                  </span>
                </div>

                <h4 className="font-serif font-bold text-lg sm:text-xl text-slate-800 leading-snug">
                  Ajukan Negosiasi & Penawaran Budget
                </h4>
                <p className="text-xs text-slate-500 mt-3 leading-relaxed">
                  Punya alokasi budget terbatas atau ingin menyesuaikan fitur dengan skala bisnis Anda? Kami mendukung pertumbuhan UMKM & Startup melalui kustomisasi scope kerja yang transparan.
                </p>

                <div className="mt-6 space-y-2 bg-slate-50 p-3 rounded-2xl border border-slate-100/80">
                  <div className="flex items-center gap-2 text-[11px] text-slate-600">
                    <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>Penyesuaian Skala Prioritas Fitur</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-slate-600">
                    <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>Skema Pembayaran Bertahap (Termin)</span>
                  </div>
                </div>
              </div>

              <div className="mt-8" style={{ transform: "translateZ(30px)" }}>
                <button
                  id="btn-negotiate-price-action"
                  onClick={(e) => {
                    e.stopPropagation();
                    requestNegotiation();
                  }}
                  className="w-full py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer hover:scale-[1.02]"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-100" />
                  <span>Ajukan Negosiasi Harga</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};
export default Pricing;
