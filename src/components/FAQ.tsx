import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HelpCircle, ChevronDown, Sparkles } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onToggle, index }) => {
  return (
    <div className="border-b border-slate-100 py-4 last:border-0">
      <button
        id={`faq-btn-${index}`}
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left py-2 font-serif font-bold text-slate-800 text-sm sm:text-base hover:text-teal-800 transition-colors cursor-pointer"
      >
        <span className="pr-4">{question}</span>
        <ChevronDown
          className={`w-4 h-4 text-teal-700 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed pr-6 pt-2 pb-3">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Berapa lama proses pembuatan website di Sketsa Group?",
      answer: "Untuk Landing Page / Sales Funnel biasanya selesai dalam 5-7 hari kerja, sedangkan Company Profile Profesional memerlukan waktu 7-10 hari kerja. Seluruh pengerjaan dilakukan kustom tanpa menggunakan template pasaran demi performa loading tercepat."
    },
    {
      question: "Apakah biaya pembuatan website sudah termasuk domain dan hosting?",
      answer: "Ya, betul sekali! Semua paket website kami sudah bersifat all-in, gratis domain kustom (.com atau .id) selama 1 tahun penuh, Premium NVMe Cloud SSD Hosting berkecepatan tinggi, integrasi pixel tracking, SSL Certificate aman, serta panduan pengelolaan lengkap via video tutorial."
    },
    {
      question: "Bagaimana cara kerja pengecekan nama Kemenkumham untuk legalitas?",
      answer: "Tim notaris ahli kami melakukan skrining mendalam ke database AHU Online Direktorat Jenderal Administrasi Hukum Umum Kemenkumham RI terlebih dahulu untuk memastikan usulan nama PT / CV Anda masih tersedia, aman dari gugatan sengketa hak cipta, dan 100% legal untuk diajukan pengesahannya."
    },
    {
      question: "Apakah ada jaminan kelulusan audit sertifikasi ISO?",
      answer: "Ya, kami memberikan garansi kelulusan audit 100%. Tim Lead Auditor kami membimbing korporasi Anda menyusun Dokumen SOP, Manual Mutu Terpadu, melatih kesiapan staf operasional internal, mendampingi audit simulasi, hingga sertifikat ISO resmi diterbitkan oleh badan sertifikasi nasional yang terakreditasi KAN."
    },
    {
      question: "Bagaimana sistem bagi hasil komisi program kemitraan affiliate Sejoli?",
      answer: "Kemitraan Sejoli memiliki sistem pembagian komisi instan sebesar 35%. Anda mendapatkan komisi bersih Rp 200.000 untuk setiap closing Jasa Website, dan Rp 100.000 untuk Jasa Konten Sosmed. Seluruh akumulasi komisi Anda dicatat real-time dan ditransfer otomatis ke rekening bank Anda setiap hari Jumat."
    },
    {
      question: "Apakah saya benar-benar mendapatkan bonus merchandise Cozy Foam Shoe Cleaner?",
      answer: "Ya! Dengan registrasi kemitraan lifetime sebesar Rp 99.000, Anda berhak mendapatkan bonus merchandise resmi Cozy Foam Shoe Cleaner 100ml senilai Rp 85.000. Paket dikirimkan gratis langsung ke alamat pengiriman Anda secara aman."
    }
  ];

  return (
    <section id="faq-section" className="py-24 bg-slate-50/60 relative border-t border-slate-150">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold text-teal-800 tracking-widest uppercase bg-teal-50 border border-teal-100/50 px-3.5 py-1.5 rounded-full">
            Tanya Jawab Layanan
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-slate-900 mt-5 tracking-tight leading-tight">
            Pertanyaan Yang <span className="text-teal-700 italic font-serif font-extrabold">Sering Diajukan</span>
          </h2>
          <p className="text-slate-500 text-sm mt-4 max-w-2xl mx-auto leading-relaxed">
            Temukan jawaban langsung untuk keraguan Anda mengenai estimasi waktu, prosedur legal, kepatuhan audit standar ISO, hingga transparansi bagi komisi affiliate.
          </p>
        </div>

        {/* Accordion List wrapper */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-xl">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              index={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
