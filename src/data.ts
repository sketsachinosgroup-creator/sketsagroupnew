import mbejajiPreview from "./assets/images/mbejaji_portfolio_preview_1784102642357.jpg";
import biruMotorPreview from "./assets/images/biru_motor_preview_1784103262238.jpg";
import { ServiceData, PortfolioItem, SocialProofItem } from "./types";

export const IMAGES = {
  memberLogin: "https://sketsagroup.xyz/assets/marfly_member_login_1783878548987-D4U-JyCd.jpg",
  ecommerceCatalog: "https://sketsagroup.xyz/assets/marfly_ecommerce_catalog_1783878709203-DNXY8xTh.jpg",
  landingPage: "https://sketsagroup.xyz/assets/marfly_landing_page_1783879278559-CiH7mRtD.jpg",
  toraniCompanyProfile: "https://sketsagroup.xyz/assets/toranihouse_company_profile_1783879705882-BSaTZBrD.jpg",
  alMazayaLandingPage: "https://sketsagroup.xyz/assets/al_mazaya_landing_page_1783880131410-BJQNj8DL.jpg",
  cozyShoesCare: "https://sketsagroup.xyz/assets/cozy_shoes_care_product_1783880498060-DFxzcF2r.jpg"
};

export const Bt: Record<string, ServiceData> = {
  website: {
    id: "website",
    name: "Jasa Website Premium",
    badge: "Layanan Website Premium",
    heroTitle: "Website Bukan Cuma Biar",
    heroHighlight: "Kelihatan Keren!",
    heroSub: "Banyak pemilik usaha membuang modal ratusan juta untuk iklan, namun calon pembeli langsung kabur karena website lambat, berantakan, dan mencurigakan. Kami hadir merancang sistem digitalisasi mandiri berkonversi tinggi yang bekerja otomatis 24/7.",
    heroStats: [
      { value: "150+", label: "Website Sukses" },
      { value: "10x", label: "ROI Rata-Rata" },
      { value: "<1.8s", label: "Kecepatan Loading" },
      { value: "24/7", label: "Otomatisasi Sistem" }
    ],
    pillarsLabel: "5 Pilar Keberhasilan Website",
    pillarsTitle: "Kenapa Website Buatan Kami",
    pillarsHighlight: "Jauh Lebih Berhasil",
    pillarsSub: "Mayoritas agensi hanya fokus pada estetika warna. Kami memadukan riset psikologi pembeli, infrastruktur server, dan copywriting untuk konversi maksimal.",
    pillarsItems: [
      {
        title: "Waktu Resonansi Di Bawah 2 Detik",
        description: "Pengunjung langsung kabur jika loading website lebih dari 3 detik. Server NVMe Cloud SSD lokal kami menjamin respons sekejap mata.",
        iconName: "Zap",
        badgeText: "Simulasi PageSpeed",
        badgeVal: "99/100 Hijau",
        extraType: "speed"
      },
      {
        title: "Psikologi Copywriting Premium",
        description: "Website tanpa copywriting persuasif layaknya toko sunyi tanpa pelayan. Kami menyusun struktur narasi penawaran emosional berkonversi tinggi.",
        iconName: "Heart",
        extraType: "copy"
      },
      {
        title: "Kepercayaan & Keamanan SSL",
        description: "Ikon gembok aman (HTTPS) dari SSL Premium memastikan data pengunjung aman terlindungi, menjauhkan peringatan 'Not Secure' dari Google.",
        iconName: "Lock",
        extraType: "lock"
      },
      {
        title: "Integrasi Checkout WA & Sejoli",
        description: "Pembeli menyelesaikan order otomatis terkirim langsung to WhatsApp admin. Mendukung penuh lisensi Sejoli Affiliate untuk melipatgandakan omset.",
        iconName: "MessageCircle",
        extraType: "flow"
      },
      {
        title: "On-Page SEO & Analytics Siap Pakai",
        description: "Dilengkapi tag Google Search Console, SEO meta data, dan Facebook Pixel agar tracking pengeluaran budget iklan Anda terukur 100%.",
        iconName: "TrendingUp",
        extraType: "seo"
      }
    ],
    pricingLabel: "Investasi Jasa Website",
    pricingTitle: "Paket Jasa Website Premium",
    pricingHighlight: "Harga Jujur & Transparan",
    pricingSub: "Pilih paket utama sesuai model skala bisnis Anda, atau gunakan kalkulator kustom interaktif untuk menambahkan fitur spesifik.",
    pricingPackages: [
      {
        id: "pkg-1",
        name: "Landing Page / Sales Funnel",
        price: "Rp 2.499.000",
        originalPrice: "Rp 4.000.000",
        description: "Sangat cocok untuk jualan produk tunggal, penawaran affiliate, pengumpulan leads (prospek), atau launching produk baru Anda agar terkonversi tinggi.",
        target: "UKM, Internet Marketer, & Affiliate Brand",
        popular: false,
        deliveryTime: "5 - 7 Hari Kerja",
        revisionCount: "3x Revisi Mayor",
        benefits: [
          "Desain 1 Halaman Responsif Premium",
          "Copywriting Penjualan Berkonversi Tinggi",
          "Formulir Pemesanan Terintegrasi WhatsApp",
          "Gratis Domain (.com / .id) 1 Tahun",
          "Premium Cloud Hosting 2GB NVMe",
          "Integrasi Facebook Pixel & Google Analytics",
          "Kecepatan Loading Super Cepat (Lighthouse >90)",
          "SSL Certificate (HTTPS) Aman 24/7",
          "Panduan Edit & Kelola Konten via Video"
        ]
      },
      {
        id: "pkg-2",
        name: "Company Profile Profesional",
        price: "Rp 3.999.000",
        originalPrice: "Rp 6.000.000",
        description: "Sangat cocok untuk UKM berkembang, Startup, Kantor Konsultan, Klinik, Instansi, atau Bisnis B2B yang ingin tampil kredibel & elegan di mata klien nasional.",
        target: "Perusahaan, UKM, Klinik, & Instansi",
        popular: true,
        deliveryTime: "7 - 10 Hari Kerja",
        revisionCount: "5x Revisi Mayor",
        benefits: [
          "Hingga 7 Halaman Struktur Utama (Home, About, Services, dll)",
          "Desain Visual Khusus Sesuai Corporate Brand Guideline",
          "Formulir Hubungi Kami & Integrasi Google Maps",
          "Blog / Berita untuk Optimasi Content Marketing",
          "Gratis Domain (.com / .co.id / .id) 1 Tahun",
          "Premium Cloud Hosting 5GB NVMe Super Cepat",
          "SEO On-Page Setup (Siap Ranking Google)",
          "Integrasi WhatsApp Chat Floating Widget",
          "E-mail Profesional Bisnis (info@nama-bisnis.com)",
          "Kecepatan Loading Maksimal & Anti-Hack Firewall",
          "Sesi Pelatihan Video Panduan Pengoperasian Lengkap"
        ]
      },
      {
        id: "pkg-3",
        name: "E-Commerce / Membership Sejoli",
        price: "Rp 5.999.000",
        originalPrice: "Rp 9.500.000",
        description: "Sangat cocok untuk Toko Online multi-produk modern atau sistem Keanggotaan Berbayar dengan kalkulator ongkos kirim otomatis dan integrasi gateway pembayaran.",
        target: "Brand Fashion, Kursus Online, & Distributor",
        popular: false,
        deliveryTime: "10 - 14 Hari Kerja",
        revisionCount: "Unlimited Revisi Minor",
        benefits: [
          "Struktur Toko Online Multi-Produk Modern",
          "Sistem Keanggotaan (Membership) Sejoli / WooCommerce",
          "Keranjang Belanja Interaktif & Dashboard Akun Pembeli",
          "Kalkulator Ongkir Otomatis (JNE, J&T, Sicepat, dll)",
          "WhatsApp Checkout Multi-Admin / CS",
          "Integrasi Payment Gateway (Midtrans/Xendit/Doku)",
          "Gratis Domain (.com / .id) 1 Tahun",
          "Premium Cloud Hosting 10GB NVMe Bandwidth Lega",
          "Sistem Kode Unik Pembayaran Otomatis",
          "Optimasi SEO On-Page Tingkat Lanjut",
          "Panduan Teknis Operasional Website Lengkap"
        ]
      }
    ],
    pricingAddons: [
      { id: "add-1", name: "Sistem Afiliasi Sejoli Premium", price: 1500000, description: "Plugin pendaftaran affiliate & skema komisi multi-tier", checked: false },
      { id: "add-2", name: "Integrasi Payment Gateway (Midtrans)", price: 850000, description: "Terima bayaran otomatis QRIS, Transfer Bank, Alfamart/Indomaret", checked: false },
      { id: "add-3", name: "Copywriting Premium 3000 Kata", price: 750000, description: "Riset market mendalam & copywriting persuasif oleh copywriter bersertifikasi", checked: false },
      { id: "add-4", name: "SEO Optimization Platinum", price: 1200000, description: "Riset kata kunci kompetitor, setting schema markup lengkap & backlink dasar", checked: false },
      { id: "add-5", name: "E-mail Bisnis Profesional (10 Akun)", price: 350000, description: "Email corporate dengan nama domain sendiri (sales@brandanda.com)", checked: false }
    ],
    faqItems: [
      { id: "faq-1", question: "Berapa lama proses pengerjaan website hingga online?", answer: "Proses pengerjaan berkisar antara 5 hingga 14 hari kerja tergantung pada paket yang Anda pilih dan seberapa cepat materi website (seperti logo, foto, teks profil) Anda serahkan ke tim kami. Kami selalu berkomitmen menyelesaikan tepat waktu tanpa mengurangi kualitas." },
      { id: "faq-2", question: "Apakah biaya di atas sudah termasuk Hosting dan Domain?", answer: "Ya, betul! Semua paket yang kami tawarkan sudah termasuk GRATIS Domain (.com / .id / .co.id) dan High-Speed Premium Cloud Hosting NVMe selama 1 tahun pertama. Untuk tahun kedua dan seterusnya, Anda hanya perlu membayar biaya perpanjangan domain & hosting yang sangat terjangkau." },
      { id: "faq-3", question: "Apakah websitenya nanti bisa saya edit sendiri?", answer: "Sangat bisa! Kami membangun website menggunakan sistem manajemen konten (CMS) modern yang dilengkapi dengan visual Drag & Drop Builder yang sangat user-friendly. Anda tidak memerlukan keahlian coding sama sekali untuk sekadar mengganti teks, menambah gambar produk, atau memposting artikel baru. Kami juga menyertakan video tutorial kelola website khusus untuk Anda." },
      { id: "faq-4", question: "Bagaimana jika ada kendala teknis setelah website selesai?", answer: "Kami memberikan garansi technical support gratis selama 1 tahun penuh jika terjadi kendala seperti website error, terserang virus/malware, atau tidak bisa diakses. Kami juga melakukan backup data berkala secara otomatis untuk memastikan keamanan data bisnis Anda." }
    ]
  },
  legalitas: {
    id: "legalitas",
    name: "Legalitas Bisnis",
    badge: "Layanan Pendirian Badan Usaha",
    heroTitle: "Bikin Bisnis Anda Legal,",
    heroHighlight: "Aman & Siap Tender!",
    heroSub: "Jangan tunda kredibilitas bisnis Anda hanya karena urusan hukum pendirian yang membingungkan. Kami bantu pengurusan PT, CV, Yayasan, pendaftaran Merek HAKI, NPWP Badan, hingga izin NIB OSS RBA secara tuntas, resmi, sah, tanpa ribet.",
    heroStats: [
      { value: "500+", label: "PT / CV Resmi Berdiri" },
      { value: "100%", label: "Legalitas Kemenkumham" },
      { value: "<7 Hari", label: "Durasi Pengurusan" },
      { value: "Rp 0", label: "Biaya Tersembunyi" }
    ],
    pillarsLabel: "5 Pilar Keunggulan Jasa Legalitas",
    pillarsTitle: "Alasan Menyerahkan Urusan",
    pillarsHighlight: "Legalitas Kepada Kami",
    pillarsSub: "Kami menjamin transparansi biaya 100%, pendampingan notaris senior berpengalaman, dan validitas keabsahan seluruh berkas Anda di database nasional.",
    pillarsItems: [
      {
        title: "Kelengkapan Berkas Terintegrasi",
        description: "Dapatkan seluruh paket dokumen langsung jadi: Akta Notaris, SK Kemenkumham, NPWP Badan, NIB, hingga akun sistem OSS terbaru.",
        iconName: "FileCheck",
        badgeText: "Status Verifikasi",
        badgeVal: "100% Sah Kemenkumham",
        extraType: "legal"
      },
      {
        title: "Tanpa Sengketa Nama Brand",
        description: "Kami melakukan screening mendalam di database Hak Kekayaan Intelektual (DJKI) sebelum mendaftarkan merek dagang Anda agar 100% aman.",
        iconName: "Shield",
        extraType: "lock"
      },
      {
        title: "Waktu Proses Super Cepat",
        description: "Sistem integrasi cepat kami memangkas jalur birokrasi, memungkinkan akta pendirian disahkan dalam waktu 3-7 hari kerja.",
        iconName: "Zap",
        extraType: "speed"
      },
      {
        title: "Koneksi Rekening Bank Bisnis",
        description: "Kami bantu memfasilitasi pembukaan rekening korporasi / giro perusahaan di bank nasional pilihan Anda tanpa perlu mengantre.",
        iconName: "Briefcase",
        extraType: "flow"
      },
      {
        title: "Konsultasi Pajak Pertama Gratis",
        description: "Bingung cara laporan pajak tahunan setelah mendirikan badan usaha? Nikmati sesi pendampingan akuntansi perpajakan perdana secara gratis.",
        iconName: "Award",
        extraType: "seo"
      }
    ],
    pricingLabel: "Investasi Jasa Legalitas",
    pricingTitle: "Biaya Pendirian Badan Usaha",
    pricingHighlight: "Harga Flat Tanpa Surcharge",
    pricingSub: "Pilih skema badan hukum yang paling ideal untuk model bisnis Anda saat ini. Semua paket sudah termasuk akta dan keputusan Kemenkumham.",
    pricingPackages: [
      {
        id: "pkg-1",
        name: "Paket Pendirian CV Lengkap",
        price: "Rp 2.499.000",
        originalPrice: "Rp 3.500.000",
        description: "Sangat pas untuk kemitraan usaha mikro, katering, agensi lokal, suplier, atau jasa konsultasi perorangan yang ingin menerbitkan faktur pajak.",
        target: "UKM, Start-up, Perorangan",
        popular: false,
        deliveryTime: "4 - 6 Hari Kerja",
        revisionCount: "Revisi Draf Akta Sepuasnya",
        benefits: [
          "Pengecekan & Pemesanan Nama CV Resmi",
          "Akta Notaris Pendirian Fisik & Digital",
          "SK Pengesahan Kemenkumham RI",
          "Pendaftaran NPWP Badan Usaha",
          "Penerbitan Surat Keterangan Fiskal",
          "Penerbitan Nomor Induk Berusaha (NIB)",
          "Hak Akses Portal OSS RBA Mandiri",
          "Gratis Konsultasi Pajak Awal 30 Menit"
        ]
      },
      {
        id: "pkg-2",
        name: "Paket Pendirian PT Lengkap",
        price: "Rp 3.999.000",
        originalPrice: "Rp 5.500.000",
        description: "Sangat direkomendasikan untuk bisnis skala menengah ke atas, kontraktor tender, distributor resmi, serta startup yang ingin menerima pendanaan modal.",
        target: "Perusahaan Menengah, Investor, Kontraktor",
        popular: true,
        deliveryTime: "5 - 7 Hari Kerja",
        revisionCount: "Revisi Draf Akta Sepuasnya",
        benefits: [
          "Pemesanan Nama PT Resmi Kemenkumham",
          "Akta Pendirian PT oleh Notaris Senior",
          "SK Kemenkumham RI Sah & Tercatat",
          "NPWP Badan Usaha & SKT Dirjen Pajak",
          "NIB (Nomor Induk Berusaha) Sesuai KBLI",
          "Keanggotaan BPJS Ketenagakerjaan Badan",
          "Fasilitasi Rekening Bank Bisnis Prioritas",
          "Draf Dokumen K3 & Kebijakan Dasar Perusahaan",
          "Gratis Konsultasi Perpajakan 1 Bulan"
        ]
      },
      {
        id: "pkg-3",
        name: "Pendaftaran Merek & HAKI Resmi",
        price: "Rp 1.999.000",
        originalPrice: "Rp 3.000.000",
        description: "Proteksi penuh atas aset merek, logo, slogan, tulisan, atau seni karya Anda di Direktorat Jenderal Kekayaan Intelektual agar nama tidak diserobot kompetitor.",
        target: "F&B Brand, Kreator Konten, Pemilik Produk",
        popular: false,
        deliveryTime: "3 Hari (Hingga Submit DJKI)",
        revisionCount: "Monitoring Laporan",
        benefits: [
          "Riset Penelusuran Merek Komprehensif",
          "Analisis Potensi Keberatan / Penolakan",
          "Penyusunan Formulir & Klasifikasi Kelas Barang",
          "Pembayaran PNBP Resmi Negara (1 Kelas)",
          "Submit Aplikasi via Portal DJKI Online",
          "Penerbitan Bukti Penerimaan Resmi HAKI",
          "Monitoring Masa Sanggah Pengumuman Merek",
          "Pengawalan Berkas Sampai Sertifikat Terbit"
        ]
      }
    ],
    pricingAddons: [
      { id: "add-1", name: "Virtual Office Premium (1 Tahun)", price: 2500000, description: "Alamat bisnis bergengsi di pusat kota Depok untuk syarat alamat PT/CV", checked: false },
      { id: "add-2", name: "Pendaftaran Akun e-Katalog LKPP", price: 1200000, description: "Penyusunan berkas administrasi agar produk Anda terdaftar di katalog tender pemerintah", checked: false },
      { id: "add-3", name: "Sertifikasi Standar Keamanan K3L", price: 1500000, description: "Penyusunan kelayakan standar kesehatan & keselamatan produk/lingkungan kerja", checked: false },
      { id: "add-4", name: "Surat Keterangan Domisili Usaha Kustom", price: 500000, description: "Penerbitan izin lokal khusus domisili kantor operasional usaha", checked: false }
    ],
    faqItems: [
      { id: "faq-1", question: "Apa perbedaan mendasar antara mendirikan PT dengan CV?", answer: "Perbedaan utamanya terletak pada pemisahan kekayaan. PT (Perseroan Terbatas) memiliki pemisahan harta pribadi dengan harta perusahaan, sehingga jika terjadi kerugian, tanggung jawab hanya sebatas modal yang disetorkan. Sedangkan pada CV, pertanggungjawaban hukum bisa mencapai harta pribadi sekutu pengurus." },
      { id: "faq-2", question: "Apakah nama PT/CV saya dijamin 100% unik dan tidak ditolak?", answer: "Sebelum membuat draf akta, tim legal kami akan melakukan pengecekan nama secara real-time di database resmi Kemenkumham SABH. Jika nama sudah digunakan pihak lain, kami akan memberikan rekomendasi kombinasi nama terbaik agar proses persetujuan berjalan 100% mulus." },
      { id: "faq-3", question: "Apakah proses pendirian mengharuskan saya datang ke kantor notaris?", answer: "Tidak perlu. Seluruh proses pengurusan dokumen legalitas dapat kami lakukan secara remote (jarak jauh). Tanda tangan berkas draf akta dapat dikirimkan secara fisik lewat kurir atau penandatanganan elektronik tersertifikasi." }
    ]
  },
  sertifikasi: {
    id: "sertifikasi",
    name: "Sertifikasi ISO",
    badge: "Layanan Sertifikasi ISO Resmi",
    heroTitle: "Raih Sertifikat ISO Resmi,",
    heroHighlight: "Menangkan Proyek Besar!",
    heroSub: "Tingkatkan nilai tawar korporasi Anda di tingkat nasional dan global. Sketsa Group memandu seluruh rangkaian konsultasi, gap analisis, audit kesiapan, pelatihan internal, hingga sertifikasi final ISO 9001, 27001, dan 14001 oleh lembaga akreditasi tepercaya.",
    heroStats: [
      { value: "250+", label: "Klien ISO Sukses" },
      { value: "100%", label: "Jaminan Kelulusan Audit" },
      { value: "~30 Hari", label: "Proses Tercepat" },
      { value: "KAN / IAS", label: "Terakreditasi Resmi" }
    ],
    pillarsLabel: "5 Pilar Keunggulan Jasa ISO",
    pillarsTitle: "Kenapa Ratusan Korporasi",
    pillarsHighlight: "Mempercayakan Sertifikasi",
    pillarsSub: "Kami memiliki tim konsultan senior bersertifikasi internasional (Lead Auditor) yang memahami standar audit ketat untuk kelulusan tercepat.",
    pillarsItems: [
      {
        title: "Bimbingan Dokumentasi Komprehensif",
        description: "Kami menyusun seluruh draf Manual Mutu, Prosedur Kerja (SOP), Instruksi Kerja, hingga formulir rekaman wajib tanpa membebani tim Anda.",
        iconName: "FileCheck",
        badgeText: "Kesiapan Dokumen",
        badgeVal: "100% Sesuai Klausul ISO",
        extraType: "iso"
      },
      {
        title: "Pelatihan Audit Internal Bersertifikat",
        description: "Tim Anda akan dilatih langsung mengenai tata cara pelaksanaan audit internal yang profesional dan menerima sertifikat pelatihan resmi.",
        iconName: "Award",
        extraType: "seo"
      },
      {
        title: "Garansi 100% Lulus Audit",
        description: "Jika ada temuan ketidaksesuaian (NCR) pada saat audit berlangsung, konsultan kami akan mendampingi penyusunan tindakan korektif secara gratis hingga sertifikat terbit.",
        iconName: "Shield",
        extraType: "lock"
      },
      {
        title: "Bypass Birokrasi Lembaga Sertifikasi",
        description: "Koneksi luas kami dengan berbagai badan sertifikasi nasional maupun asing mempercepat jadwal penjadwalan audit tahap 1 & 2.",
        iconName: "Zap",
        extraType: "speed"
      },
      {
        title: "Evaluasi Gap Kesiapan Awal (Gap Analysis)",
        description: "Menilai sejauh mana sistem manajemen yang saat ini berjalan di perusahaan Anda mendekati standar ISO agar tidak buang-buang biaya audit.",
        iconName: "TrendingUp",
        extraType: "flow"
      }
    ],
    pricingLabel: "Investasi Sertifikasi ISO",
    pricingTitle: "Biaya Sertifikasi Standar ISO",
    pricingHighlight: "Jaminan Kelulusan Mutlak",
    pricingSub: "Biaya penawaran di bawah sudah mencakup komitmen konsultasi pendampingan penuh hingga sertifikat ISO fisik diterbitkan dari badan sertifikasi resmi.",
    pricingPackages: [
      {
        id: "pkg-1",
        name: "Sertifikasi ISO 9001:2015 (Mutu)",
        price: "Rp 14.999.000",
        originalPrice: "Rp 20.000.000",
        description: "Sangat penting untuk meningkatkan sistem manajemen mutu operasional perusahaan, prasyarat wajib mendaftar sebagai vendor BUMN & tender swasta.",
        target: "Semua Sektor Industri, Pabrik, Distributor",
        popular: true,
        deliveryTime: "25 - 30 Hari Kerja",
        revisionCount: "Sesi Coaching Sepuasnya",
        benefits: [
          "Sesi Gap Analysis Kesiapan Mutu Awal",
          "Penyusunan Draf Kebijakan Mutu & Manual Mutu",
          "Penyusunan SOP & Alur Kerja di Seluruh Departemen",
          "Sesi Pelatihan Pemahaman Klausul ISO 9001",
          "Pendampingan Sesi Simulasi Audit Internal",
          "Pendampingan Audit Tahap 1 & Tahap 2 Badan Sertifikasi",
          "Sertifikat ISO Resmi Terakreditasi 1 Tahun",
          "Garansi Penutupan Temuan Audit (NCR) Gratis"
        ]
      },
      {
        id: "pkg-2",
        name: "Sertifikasi ISO 27001:2022 (IT)",
        price: "Rp 24.999.000",
        originalPrice: "Rp 35.000.000",
        description: "Sertifikasi keamanan informasi digital yang sangat vital bagi perusahaan teknologi, fintech, startup SaaS, kementerian, atau pengelola database rahasia.",
        target: "Perusahaan IT, Fintech, Healthcare, SaaS",
        popular: false,
        deliveryTime: "35 - 45 Hari Kerja",
        revisionCount: "Sesi Coaching Sepuasnya",
        benefits: [
          "Riset Penilaian Risiko Keamanan Informasi (Risk Assessment)",
          "Penyusunan SOA (Statement of Applicability) Keamanan",
          "Penyusunan Kontrol Kebijakan IT Security",
          "Coaching Kesiapan Staff Keamanan Server",
          "Audit Simulasi Kepatuhan Sistem IT",
          "Rekomendasi Penambalan Celah Keamanan (Vulnerability)",
          "Audit Tahap 1 & 2 ISO 27001 Terakreditasi",
          "Sertifikat ISO Keamanan Informasi Fisik & Digital"
        ]
      },
      {
        id: "pkg-3",
        name: "Sertifikasi ISO 14001 & 45001 (K3)",
        price: "Rp 19.999.000",
        originalPrice: "Rp 28.000.000",
        description: "Gabungan standar Manajemen Lingkungan (14001) dan Manajemen Keselamatan Kerja K3 (45001) yang wajib dimiliki kontraktor fisik dan manufaktur.",
        target: "Kontraktor, Manufaktur, Pertambangan, Energi",
        popular: false,
        deliveryTime: "30 - 40 Hari Kerja",
        revisionCount: "Sesi Coaching Sepuasnya",
        benefits: [
          "Analisis Dampak Lingkungan (AMDAL/UKL-UPL Review)",
          "Identifikasi Bahaya & Pengendalian Risiko K3 (HIRADC)",
          "Penyusunan Dokumen Kebijakan HSE & Tanggap Darurat",
          "Pelatihan Simulasi Evakuasi & Pertolongan Pertama",
          "Penyusunan Draf SOP Lingkungan & Keselamatan",
          "Sesi Audit Internal HSE Perusahaan",
          "Pendampingan Audit Eksternal ISO Resmi",
          "Sertifikat ISO 14001 / 45001 Terbit Sah"
        ]
      }
    ],
    pricingAddons: [
      { id: "add-1", name: "Sertifikat Pelatihan Audit Internal Tambahan (10 Pax)", price: 3500000, description: "Pemberian sertifikasi kompetensi auditor internal berlisensi untuk karyawan Anda", checked: false },
      { id: "add-2", name: "Penyusunan Prosedur Operasional Standar (SOP) Bisnis Komprehensif", price: 5000000, description: "Penulisan buku panduan SOP detail untuk seluruh unit bisnis perusahaan", checked: false },
      { id: "add-3", name: "Pre-Audit Kesiapan Independen", price: 3000000, description: "Audit tiruan menyeluruh untuk menguji kesiapan sebelum audit eksternal berbayar dilakukan", checked: false }
    ],
    faqItems: [
      { id: "faq-1", question: "Apakah sertifikat ISO yang terbit resmi terakreditasi KAN?", answer: "Ya, betul! Kami hanya bermitra dengan lembaga sertifikasi resmi yang memiliki akreditasi dari KAN (Komite Akreditasi Nasional) atau lembaga akreditasi asing berlisensi resmi seperti IAS, UKAS, atau ANAB yang diakui secara internasional." },
      { id: "faq-2", question: "Berapa lama masa berlaku sertifikat ISO setelah diterbitkan?", answer: "Sertifikat ISO berlaku selama 3 tahun sejak tanggal penerbitan. Namun, setiap tahun perusahaan wajib melakukan audit pengawasan (Surveillance Audit) untuk memastikan sistem manajemen standar tetap dijalankan dengan konsisten." },
      { id: "faq-3", question: "Bagaimana jika sistem manajemen perusahaan saat ini masih berantakan?", answer: "Jangan khawatir. Justru itu fungsi utama konsultan kami. Kami akan merapikan alur kerja perusahaan Anda dari nol, membantu menyederhanakan dokumentasi, dan membangun sistem yang mudah dipahami oleh staf Anda, bukan mempersulit operasional." }
    ]
  },
  marketing: {
    id: "marketing",
    name: "Data Driven Marketing",
    badge: "Layanan Conversion API & Tracking",
    heroTitle: "Hentikan Bakar Budget Iklan!",
    heroHighlight: "Lacak Data 100% Akurat",
    heroSub: "Menganalisis hasil iklan Facebook, Google, atau TikTok hanya dengan firasat adalah mimpi buruk. Kami membangun infrastruktur pelacakan Server-Side Conversion API (CAPI) yang meloloskan data transaksi Anda dari pemblokiran cookie browser iOS 14+ secara presisi.",
    heroStats: [
      { value: "Rp 50M+", label: "Ad Spend Dioptimasi" },
      { value: "+35%", label: "Efisiensi Biaya Iklan" },
      { value: "100%", label: "Akurasi Data Piksel" },
      { value: "Real-time", label: "Omnichannel Live Sync" }
    ],
    pillarsLabel: "5 Pilar Pelacakan Data Pemasaran",
    pillarsTitle: "Kenapa Setup Tracking",
    pillarsHighlight: "Mendongkrak Profit Iklan?",
    pillarsSub: "Dengan data konversi yang akurat, algoritma AI Meta Ads and Google Ads dapat melakukan optimasi audiens secara maksimal untuk mendatangkan pembeli potensial.",
    pillarsItems: [
      {
        title: "Bypass Cookie Block dengan CAPI",
        description: "Teknologi pelacakan sisi server mengirimkan data transaksi langsung dari server Anda ke Meta/TikTok, melewati batasan ad-blocker dan proteksi privasi Safari/Chrome.",
        iconName: "Share2",
        badgeText: "Akurasi Piksel",
        badgeVal: "Skor Event Match >9.2/10",
        extraType: "capi"
      },
      {
        title: "Integrasi GA4 & Google Looker Studio",
        description: "Ubah barisan angka rumit menjadi grafik visual interaktif. Dasbor omnichannel kami menyatukan metrik dari berbagai kanal iklan dalam satu layar.",
        iconName: "TrendingUp",
        extraType: "seo"
      },
      {
        title: "Tracking Nilai Belanja Pembeli Riil",
        description: "Lacak nilai belanja (Purchase Value) secara dinamis agar Anda tahu persis berapa nominal ROAS (Return on Ad Spend) murni iklan Anda hari ini.",
        iconName: "FileCheck",
        extraType: "speed"
      },
      {
        title: "Automated UTM Tags Setup",
        description: "Pastikan Anda tahu dari mana sumber klik pembeli berasal: apakah dari posting Reels organik, iklan TikTok, atau promosi di grup Telegram.",
        iconName: "Lock",
        extraType: "lock"
      },
      {
        title: "Custom CRM Order Sync",
        description: "Koneksikan data prospek landing page langsung ke database Google Sheets atau aplikasi WhatsApp auto-sender untuk follow-up tagihan otomatis.",
        iconName: "MessageCircle",
        extraType: "flow"
      }
    ],
    pricingLabel: "Investasi Setup Analytics",
    pricingTitle: "Biaya Jasa Tracking & CAPI",
    pricingHighlight: "Konversi Iklan Akurat 100%",
    pricingSub: "Dapatkan pondasi data periklanan yang kokoh untuk meningkatkan efisiensi biaya iklan Anda. Kami set up hingga sistem pelaporan teruji.",
    pricingPackages: [
      {
        id: "pkg-1",
        name: "Facebook / Meta Conversion API Setup",
        price: "Rp 1.999.000",
        originalPrice: "Rp 3.000.000",
        description: "Layanan integrasi Conversion API (CAPI) server-side untuk memastikan event Purchase, Lead, AddToCart terekam penuh di Ads Manager Anda.",
        target: "Sellers, Dropshippers, FB Advertisers",
        popular: true,
        deliveryTime: "3 - 5 Hari Kerja",
        revisionCount: "3x Uji Coba Pengiriman Event",
        benefits: [
          "Setup GTM (Google Tag Manager) Client-Side",
          "Setup GTM Server-Side via Cloudflare/Stape",
          "Integrasi Meta Pixel & Conversion API Duplikasi",
          "Sinkronisasi Kunci Enkripsi Browser (User Data)",
          "Setup Event Purchase, AddToCart, ViewContent, Lead",
          "Verifikasi Domain di Pengaturan Bisnis Facebook",
          "Uji Skor Kesesuaian Event (Event Match Quality)",
          "Garansi 1 Bulan Jika Terjadi Data Miss"
        ]
      },
      {
        id: "pkg-2",
        name: "Google Analytics 4 & Looker Studio",
        price: "Rp 3.499.000",
        originalPrice: "Rp 5.000.000",
        description: "Visualisasikan perjalanan pembeli Anda dan satukan laporan performa keuangan iklan dari Meta, Google, & TikTok Ads dalam satu dasbor Looker Studio.",
        target: "UKM Berkembang, Brand Owner, Agensi",
        popular: false,
        deliveryTime: "5 - 7 Hari Kerja",
        revisionCount: "5x Revisi Desain Dashboard",
        benefits: [
          "Setup Akun Google Analytics 4 (GA4) Profesional",
          "Koneksi Google Search Console & GA4",
          "Setup Custom Events & E-Commerce Purchase Tracking",
          "Penyusunan Dasbor Google Looker Studio Kustom",
          "Integrasi Pengambilan Data Meta Graph (Iklan Facebook)",
          "Integrasi Pengambilan Data Tiktok Ads Connector",
          "Metrik ROAS, CAC, CTR, & CPM Terkalkulasi Otomatis",
          "Sesi Training 1 Jam Cara Membaca Grafik Laporan"
        ]
      },
      {
        id: "pkg-3",
        name: "Full Funnel Tracking & CRM Sync",
        price: "Rp 5.999.000",
        originalPrice: "Rp 9.000.000",
        description: "Otomatisasi total alur data. Pelanggan isi form di web -> data masuk CRM -> notifikasi WA terkirim -> pixel mencatat komisi konversi secara real-time.",
        target: "E-commerce Premium, Kursus Sejoli, Sales Team",
        popular: false,
        deliveryTime: "7 - 10 Hari Kerja",
        revisionCount: "Unlimited Penyelarasan Alur",
        benefits: [
          "Seluruh Fitur Paket 1 & Paket 2 Termasuk",
          "Setup Server-Side Tracking Meta, Google, & TikTok API",
          "Koneksi Web Hook Formulir ke Google Sheets",
          "Integrasi WhatsApp API Gateway (Zenziva/Wali/Fonnte)",
          "Template Follow-up WA Otomatis untuk Tagihan Belum Bayar",
          "Setup Penjejakan UTM Source dari Seluruh Link Promo",
          "A/B Testing Tracking Setup untuk Landing Page",
          "Pendampingan Teknis Penuh Selama 2 Bulan"
        ]
      }
    ],
    pricingAddons: [
      { id: "add-1", name: "Sewa Hosting Server-Side Stape/Cloud Run (1 Tahun)", price: 1200000, description: "Infrastruktur server khusus untuk memproses Conversion API tanpa membebani website utama", checked: false },
      { id: "add-2", name: "Setup Google Consent Mode V2", price: 950000, description: "Standar regulasi terbaru Uni Eropa untuk pelacakan iklan Google Ads yang legal", checked: false },
      { id: "add-3", name: "Riset Pemetaan Audience Facebook/TikTok Ads", price: 750000, description: "Riset demografi & kata kunci target market kompetitor paling menghasilkan", checked: false }
    ],
    faqItems: [
      { id: "faq-1", question: "Mengapa pixel biasa di browser sudah tidak cukup akurat?", answer: "Sejak peluncuran iOS 14.5, Apple mengizinkan pengguna untuk memblokir pelacakan aplikasi. Selain itu, browser modern seperti Safari, Brave, dan ekstensi Ad-Blocker mematikan cookie pihak ketiga di browser. Ini membuat data penjualan yang masuk to Ads Manager Anda bisa meleset hingga 30-50%." },
      { id: "faq-2", question: "Apakah saya harus membayar biaya bulanan untuk server CAPI?", answer: "Server-side tracking membutuhkan server untuk memproses data. Anda bisa menggunakan server gratis (Google Cloud Sandbox) untuk trafik rendah, atau server premium (Stape.io / Google Cloud Run) seharga $10-20 per bulan jika trafik landing page Anda sudah mencapai puluhan ribu pengunjung per hari." },
      { id: "faq-3", question: "Apakah tim Sketsa Group membantu menjalankan iklan produk saya?", answer: "Fokus layanan ini adalah membangun infrastruktur tracking datanya (pemasangan pipa data). Kami tidak mengelola/menayangkan iklan harian Anda, tetapi kami memastikan data yang dikonsumsi oleh pengiklan (media buyer) Anda 100% akurat agar mereka bisa beriklan dengan optimal." }
    ]
  },
  sosmed: {
    id: "sosmed",
    name: "Konten & Sosmed",
    badge: "Layanan Manajemen Media Sosial",
    heroTitle: "Ubah Pengikut Media Sosial",
    heroHighlight: "Menjadi Pembeli Setia!",
    heroSub: "Instagram dan TikTok adalah etalase digital terdepan bisnis Anda. Jika konten feed Anda terlihat murahan dan monoton, calon pembeli akan langsung meragukan kualitas produk Anda. Kami rancang desain visual premium, video reels persuasif, dan caption interaktif secara konsisten.",
    heroStats: [
      { value: "5M+", label: "Total Reach Konten" },
      { value: "3.5x", label: "Kenaikan Engagement" },
      { value: "30", label: "Konten Siap Upload / Bln" },
      { value: "Full", label: "Admin Post & Manage" }
    ],
    pillarsLabel: "5 Pilar Manajemen Media Sosial",
    pillarsTitle: "Rahasia Konten Organik",
    pillarsHighlight: "Mendatangkan Pembeli",
    pillarsSub: "Kami menggabungkan estetika desain grid modern dengan teknik copywriting pemicu interaksi untuk membangun komunitas konsumen loyal.",
    pillarsItems: [
      {
        title: "Desain Grid Estetik & Konsisten",
        description: "Penyusunan tata letak warna feed Instagram yang senada sesuai filosofi corporate identity Anda agar terlihat mewah.",
        iconName: "Sparkles",
        badgeText: "Desain Konten",
        badgeVal: "Eksklusif Bukan Template",
        extraType: "grid"
      },
      {
        title: "Video Reels & TikTok Kreatif",
        description: "Pembuatan konsep video pendek (scripting, hook awal, editing transisi cepat) yang dirancang memicu algoritma FYP.",
        iconName: "Share2",
        extraType: "speed"
      },
      {
        title: "Riset Copywriting Headline Viral",
        description: "Menulis caption persuasif dan headline konten yang langsung memicu rasa ingin tahu (curiosity hook) pembaca dalam 3 detik.",
        iconName: "Heart",
        extraType: "copy"
      },
      {
        title: "Optimalisasi Hashtag & Keyword SEO",
        description: "Menggunakan kata kunci pencarian yang relevan di deskripsi postingan agar profil bisnis Anda mudah ditemukan di pencarian Instagram/TikTok.",
        iconName: "TrendingUp",
        extraType: "seo"
      },
      {
        title: "Admin Jadwal Posting & Interaksi",
        description: "Tim admin kami mengunggah konten tepat waktu pada jam interaksi tertinggi (prime time) dan membantu memantau balasan komentar dasar.",
        iconName: "Users",
        extraType: "flow"
      }
    ],
    pricingLabel: "Investasi Jasa Konten",
    pricingTitle: "Paket Pengelolaan Sosmed",
    pricingHighlight: "Kreativitas Tiada Batas",
    pricingSub: "Dapatkan kehadiran media sosial yang kredibel tanpa perlu menyewa fotografer, desainer grafis, video editor, dan copywriter secara terpisah.",
    pricingPackages: [
      {
        id: "pkg-1",
        name: "Starter Branding Pack (15 Post)",
        price: "Rp 2.199.000",
        originalPrice: "Rp 3.500.000",
        description: "Sangat pas untuk akun bisnis baru atau UKM lokal yang ingin membangun pondasi visual profesional agar terlihat kredibel sejak awal.",
        target: "UKM Lokal, Apotek, Klinik, Rumah Makan",
        popular: false,
        deliveryTime: "10 - 15 Hari Kerja (Posting Terjadwal)",
        revisionCount: "3x Revisi Konsep Desain",
        benefits: [
          "Riset Kompetitor & Penentuan Palet Warna Brand",
          "Penyusunan 15 Materi Konten Feed Instagram",
          "Riset Caption Interaktif & Riset Hashtag",
          "Setiap Desain Dirancang Khusus oleh Desainer Pro",
          "Maksimal 3 Konten Carousel Edukasi/Promosi",
          "Gratis Setup Highlight Cover Profil (Hingga 5 Buah)",
          "Admin Bantu Penjadwalan Upload Konten",
          "Laporan Evaluasi Performa Bulanan Singkat"
        ]
      },
      {
        id: "pkg-2",
        name: "Growth Engine Pack (30 Post + Reels)",
        price: "Rp 3.699.000",
        originalPrice: "Rp 5.800.000",
        description: "Pilihan terbaik untuk bisnis yang ingin mendominasi interaksi secara masif melalui kombinasi postingan visual edukasi dan video Reels/TikTok pendek.",
        target: "E-commerce, Brand Kecantikan, Klinik, B2B",
        popular: true,
        deliveryTime: "30 Hari Kelola Penuh",
        revisionCount: "5x Revisi Desain",
        benefits: [
          "Riset Tren Konten & Perencanaan Editorial Kalender",
          "30 Materi Konten (24 Feed Gambar & 6 Video Reels)",
          "Scripting Konsep Ide Video Reels/TikTok Disediakan",
          "Pengeditan Transisi Video Reels/TikTok Profesional",
          "Riset Copywriting Hook Headline Memikat",
          "Riset Kumpulan Hashtag Tertarget & Tag Lokasi",
          "Optimasi Profil Bio Instagram (SEO Friendly)",
          "Admin Bantu Balas Komentar Ringan Selama Jam Kerja",
          "Laporan Statistik Kenaikan Reach & Engagement Bulanan"
        ]
      },
      {
        id: "pkg-3",
        name: "Elite Brand Takeover (Video & Foto)",
        price: "Rp 6.199.000",
        originalPrice: "Rp 9.900.000",
        description: "Layanan korporasi komprehensif. Kami mengirimkan talent, fotografer, dan pengarah gaya langsung ke lokasi Anda untuk melakukan sesi produksi video orisinal.",
        target: "Kafe Estetik, Hotel, Brand Fashion, Skincare",
        popular: false,
        deliveryTime: "30 Hari Kelola Prioritas",
        revisionCount: "Revisi Desain Minor Tanpa Batas",
        benefits: [
          "Seluruh Layanan Paket Growth Engine Termasuk",
          "1 Sesi Photoshoot / Videoshoot Produk di Lokasi Klien",
          "Penyediaan 1 Talent / Model Kreator Konten Video",
          "Produksi 12 Video Reels/TikTok Beresolusi Tinggi",
          "Desain Feed Instagram Khusus Grid 3x3 Puzzle Mewah",
          "Manajemen Penuh Story Instagram Harian (2 Story/Hari)",
          "Setup Iklan Meta / TikTok Ads Pertama (Budget dari Klien)",
          "Prioritas Sesi Komunikasi Grup WhatsApp 24/7",
          "Laporan Analisis Tren & Kompetitor Tingkat Lanjut"
        ]
      }
    ],
    pricingAddons: [
      { id: "add-1", name: "Sesi Shoot Konten Tambahan di Lokasi", price: 1500000, description: "Kunjungan fotografer & videografer kami untuk mengambil aset foto/video mentah tambahan", checked: false },
      { id: "add-2", name: "Pembuatan Banner Toko Shopee/Lazada", price: 500000, description: "Dekorasi beranda toko online marketplace Anda agar senada dengan visual sosmed", checked: false },
      { id: "add-3", name: "Setup Kampanye Iklan Meta Ads", price: 999000, description: "Pengaturan teknis target iklan (targeting interest) agar mendatangkan leads instan", checked: false }
    ],
    faqItems: [
      { id: "faq-1", question: "Apakah materi foto dan video produk harus saya sediakan?", answer: "Untuk Paket Starter dan Growth, materi foto produk mentah disediakan oleh Anda (cukup foto HP beresolusi baik) yang nantinya akan tim desainer kami olah menjadi visual mewah. Untuk Paket Elite, tim videografer kami yang akan berkunjung ke lokasi Anda untuk mengambil stok video & foto profesional." },
      { id: "faq-2", question: "Bagaimana cara tim menyusun ide konten agar sesuai dengan bidang bisnis saya?", answer: "Sebelum mulai mendesain, kami akan memberikan lembar riset profil bisnis (brand questionnaire) dan menjadwalkan sesi diskusi awal. Kami akan meriset kompetitor sejenis dan membuatkan draf Kalender Konten (Content Plan) selama 1 bulan penuh untuk Anda setujui terlebih dahulu sebelum masuk proses desain." },
      { id: "faq-3", question: "Apakah dijamin postingan akun sosmed saya akan langsung viral?", answer: "Algoritma media sosial dipengaruhi banyak faktor eksternal. Kami tidak menjamin 'pasti viral instant' karena itu tidak realistis, tetapi kami menjamin peningkatan kualitas visual estetika brand Anda secara drastis, penyusunan copywriting pemicu interaksi, dan konsistensi posting yang merupakan fondasi utama akun yang sukses jangka panjang." }
    ]
  }
};

export const jx: PortfolioItem[] = [
  {
    id: "port-mbejaji-group",
    title: "Mbejaji Group Indonesia - Holding Company Website & Digital Ecosystem",
    description: "Website profil holding company terkemuka Mbejaji Group Indonesia. Menyajikan pengenalan lini bisnis fashion, properti, kesehatan, perjalanan ibadah, dan perdagangan dengan integrasi navigasi modern, interaksi super mulus, dan desain premium kelas dunia.",
    clientName: "Mbejaji Group Indonesia",
    image: mbejajiPreview,
    category: "company-profile",
    techStack: ["React", "Tailwind CSS", "Vite", "Motion", "Interaction Design", "Responsive Layout"],
    liveUrl: "https://ryfgroup.xyz/",
    service: "website"
  },
  {
    id: "port-biru-motor",
    title: "Biru Motor - Premium Used Showroom Landing Page & Catalog",
    description: "Website landing page modern dan interaktif untuk Biru Motor, showroom mobil bekas premium pilihan. Dirancang khusus untuk meningkatkan konversi dan kepercayaan pelanggan melalui fitur jaminan garansi 100% uang kembali, grid unit katalog terverifikasi, dan integrasi tombol aksi WhatsApp.",
    clientName: "Biru Motor Showroom",
    image: biruMotorPreview,
    category: "landing-page",
    techStack: ["React", "Tailwind CSS", "Vite", "Motion", "WhatsApp Integration", "Premium Dark Theme"],
    liveUrl: "https://birumotor.ai.studio/",
    service: "website"
  },
  {
    id: "port-torani-lp",
    title: "Al Mazaya Residence - Landing Page Penjualan Perumahan",
    description: "Landing page modern dan elegan untuk perumahan Al Mazaya Residence. Menampilkan visualisasi unit 3D, denah rumah, spesifikasi bangunan premium, lokasi strategis, fasilitas sekitar, serta integrasi tombol WhatsApp marketing untuk konversi penjualan instan.",
    clientName: "Al Mazaya Residence",
    image: IMAGES.alMazayaLandingPage,
    category: "landing-page",
    techStack: ["React", "Tailwind CSS", "Vite", "WhatsApp API", "Framer Motion"],
    liveUrl: "https://sketsagroup.buat.page/al-mazaya",
    service: "website"
  },
  {
    id: "port-torani-cp",
    title: "Torani House - Company Profile Developer Properti",
    description: "Website profil perusahaan pengembang properti terpercaya Torani House. Menyajikan sejarah developer, visi misi, daftar portofolio perumahan yang telah selesai dibangun, legalitas hukum sah, serta formulir kemitraan investasi.",
    clientName: "PT Torani House Developer",
    image: IMAGES.toraniCompanyProfile,
    category: "company-profile",
    techStack: ["TypeScript", "React", "Framer Motion", "SEO Optimization"],
    liveUrl: "https://toranihouse.id",
    service: "website"
  },
  {
    id: "port-marfly-lp",
    title: "Marfly.id - Landing Page Sales Funnel & Marketplace",
    description: "Sistem website e-commerce modern berkonsep streetwear yang memadukan landing page penjualan berkonversi tinggi dengan toko online marketplace interaktif, sistem check-out otomatis, dan pop-up rekrutmen mitra affiliate.",
    clientName: "Marfly Indonesia",
    image: IMAGES.landingPage,
    category: "landing-page",
    techStack: ["React", "Tailwind CSS", "Motion", "E-Commerce Checkout", "WhatsApp Automation"],
    liveUrl: "https://marfly.id",
    videoUrl: "https://youtu.be/U5-__zq6J3s?si=_bav6AtRq2uh_BDJ",
    service: "website"
  },
  {
    id: "port-marfly-cp",
    title: "Marfly.id - E-Commerce & Streetwear Product Catalog",
    description: "Website e-commerce streetwear premium dengan koleksi pakaian pria modern. Menampilkan grid produk interaktif, detail spesifikasi, sistem bag checkout, serta modul pop-up kemitraan affiliate terintegrasi langsung.",
    clientName: "Marfly Group",
    image: IMAGES.ecommerceCatalog,
    category: "ecommerce",
    techStack: ["React", "Tailwind CSS", "Vite", "Product Feed", "Interaction Design"],
    liveUrl: "https://marfly.id",
    service: "website"
  },
  {
    id: "port-marfly-member",
    title: "Marfly Member Area - Portal Affiliate & Reseller",
    description: "Sistem aplikasi web keanggotaan (member area) premium terintegrasi khusus untuk para reseller dan affiliate Marfly. Memungkinkan registrasi mandiri, pembagian link referral instan, pencatatan komisi otomatis, leaderboard penjualan, serta download media promosi terproteksi.",
    clientName: "Marfly Affiliate Network",
    image: IMAGES.memberLogin,
    category: "custom-app",
    techStack: ["Sejoli Engine", "WordPress Membership", "WooCommerce", "Payment Gateway"],
    liveUrl: "https://member.marfly.id/member-area/login/",
    service: "website"
  },
  {
    id: "port-1",
    title: "Cozy Foam Shoe Cleaner",
    description: "Landing page penjualan produk pembersih sepatu premium dengan formulir order interaktif terintegrasi WhatsApp checkout dan video demo produk berkonversi tinggi.",
    clientName: "Cozy Foam Indonesia",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    category: "landing-page",
    techStack: ["React", "Tailwind CSS", "Motion", "WhatsApp API"],
    liveUrl: "https://sketsagroup.xyz/portfolio/cozy-foam",
    service: "website"
  },
  {
    id: "port-2",
    title: "Mitra Hukum Legalindo",
    description: "Website company profile profesional untuk firma hukum nasional. Dilengkapi sistem penjadwalan konsultasi, direktori pengacara, dan blog hukum SEO-friendly.",
    clientName: "Mitra Hukum Corp",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
    category: "company-profile",
    techStack: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    liveUrl: "https://sketsagroup.xyz/portfolio/mitra-hukum",
    service: "website"
  },
  {
    id: "port-3",
    title: "Sejoli Premium Membership",
    description: "Platform kursus online dan manajemen affiliate mandiri menggunakan framework modern. Fitur komisi multi-tier, penarikan dana otomatis, dan materi video terproteksi.",
    clientName: "Sejoli Learning Center",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    category: "custom-app",
    techStack: ["Next.js", "Tailwind CSS", "PostgreSQL", "Sejoli Engine"],
    liveUrl: "https://sketsagroup.xyz/portfolio/sejoli-affiliate",
    service: "website"
  },
  {
    id: "port-4",
    title: "Pendirian PT Sinergi Abadi",
    description: "Proses legalitas kilat pendirian PT Sinergi Abadi, dari pengesahan nama Kemenkumham, akta notaris, pendaftaran NIB melalui OSS RBA, hingga pembukaan rekening bank usaha.",
    clientName: "PT Sinergi Abadi Jaya",
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
    category: "company-profile",
    techStack: ["Kemenkumham SK", "Akte Notaris", "NIB OSS", "NPWP Badan"],
    liveUrl: "https://sketsagroup.xyz/portfolio/sinergi-abadi",
    service: "legalitas"
  },
  {
    id: "port-5",
    title: "Pendaftaran Merek Kopi Kenangan Kita",
    description: "Proteksi penuh hak atas merek dagang Kopi Kenangan Kita dari penelusuran nama eksklusif hingga penerbitan sertifikat resmi HAKI/DJKI bebas sengketa di kemudian hari.",
    clientName: "CV Kenangan Kita Group",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
    category: "landing-page",
    techStack: ["DJKI Registrasi", "Sertifikat HAKI", "Brand Search Engine"],
    liveUrl: "https://sketsagroup.xyz/portfolio/kopi-kenangan-kita",
    service: "legalitas"
  },
  {
    id: "port-6",
    title: "Sertifikasi ISO 9001 PT Global Logistik",
    description: "Pendampingan penyusunan dokumen kebijakan manajemen mutu, pelatihan staf internal, dan simulasi audit hingga kelulusan sertifikat ISO 9001:2015 resmi dari KAN.",
    clientName: "PT Global Logistik Indonesia",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80",
    category: "company-profile",
    techStack: ["ISO 9001", "Audit Mutu", "KAN Certified", "SOP Drafting"],
    liveUrl: "https://sketsagroup.xyz/portfolio/global-logistik-iso",
    service: "sertifikasi"
  },
  {
    id: "port-7",
    title: "Sertifikasi ISO 27001 FinTech Amanah",
    description: "Implementasi standar ISMS keamanan informasi tingkat lanjut untuk perusahaan peer-to-peer lending nasional, menjamin keamanan data nasabah sesuai standar OJK.",
    clientName: "PT FinTech Amanah Bangsa",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    category: "custom-app",
    techStack: ["ISO 27001", "ISMS Control", "Pentest Audit", "IT Security"],
    liveUrl: "https://sketsagroup.xyz/portfolio/fintech-iso",
    service: "sertifikasi"
  },
  {
    id: "port-8",
    title: "Meta CAPI Integration - Hijab Queen",
    description: "Setup Facebook Conversion API server-side menggunakan Google Tag Manager dan AWS Cloud Run. Membantu akurasi data tracking hingga 98% and menurunkan CPA iklan 24%.",
    clientName: "Hijab Queen Fashion Store",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    category: "ecommerce",
    techStack: ["Meta CAPI", "GTM Server-Side", "AWS Cloud Run", "GA4"],
    liveUrl: "https://sketsagroup.xyz/portfolio/hijab-queen-capi",
    service: "marketing"
  },
  {
    id: "port-9",
    title: "Omnichannel Live Dashboard - Cozy Foam",
    description: "Pembuatan dasbor integrasi data Google Looker Studio yang menarik laporan penjualan dari Google Ads, Meta Ads, TikTok Ads, dan Shopify secara real-time.",
    clientName: "Cozy Foam Indonesia",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    category: "custom-app",
    techStack: ["Looker Studio", "BigQuery", "TikTok API", "Meta Graph API"],
    liveUrl: "https://sketsagroup.xyz/portfolio/cozy-foam-dashboard",
    service: "marketing"
  },
  {
    id: "port-10",
    title: "Instagram Branding & Reels - Sweet Berry",
    description: "Pengembangan visual grid Instagram estetik bertema pastel hangat dengan produksi 8 video Reels berkonsep resep viral, menaikkan pengikut hingga 12.000 dalam 30 hari.",
    clientName: "Sweet Berry Bakery",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    category: "ecommerce",
    techStack: ["Figma Design", "Canva Grid", "CapCut Video Pro", "Copywriting"],
    liveUrl: "https://sketsagroup.xyz/portfolio/sweet-berry",
    service: "sosmed"
  }
];

export const Sx: SocialProofItem[] = [
  { id: "sp-1", name: "Bapak Surya", city: "Semarang", action: "baru saja memesan website", product: "Landing Page Sketsa Sejoli Premium", timeAgo: "Baru saja" },
  { id: "sp-2", name: "Ibu Larasati", city: "Jakarta Selatan", action: "melakukan pemesanan legalitas", product: "Pendirian PT Lengkap + SK Kemenkumham", timeAgo: "2 menit yang lalu" },
  { id: "sp-3", name: "Mas Chino", city: "Yogyakarta", action: "berhasil klaim sertifikasi", product: "Pendampingan ISO 9001:2015 Mutu", timeAgo: "5 menit yang lalu" },
  { id: "sp-4", name: "dr. Adrian", city: "Surabaya", action: "setup server-side tracking", product: "Meta CAPI & GTM Server-Side", timeAgo: "12 menit yang lalu" },
  { id: "sp-5", name: "Bapak Hartono", city: "Medan", action: "memilih paket optimasi", product: "Manajemen Sosmed Growth Engine Pack", timeAgo: "15 menit yang lalu" }
];
