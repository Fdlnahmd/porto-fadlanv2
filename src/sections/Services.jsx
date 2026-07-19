import { motion } from 'framer-motion';
import { Globe, Layers, Image, Server, MessageCircle, ChevronRight } from 'lucide-react';

const services = [
  {
    id: 1,
    icon: <Globe size={24} />,
    iconColor: 'text-cyan-400',
    iconBg: 'bg-cyan-400/10 border-cyan-400/20',
    title: 'Landing Page & Website Bisnis',
    desc: 'Website profesional yang responsif dan ter-deploy untuk UMKM, bisnis lokal, atau brand personal. Desain modern, SEO-ready, dan terintegrasi WhatsApp.',
    tags: ['React.js', 'Laravel', 'Tailwind CSS', 'Docker', 'Nginx'],
    waMessage: 'Halo Fadlan, saya tertarik dengan jasa Landing Page & Website Bisnis. Boleh minta info lebih lanjut?'
  },
  {
    id: 2,
    icon: <Layers size={24} />,
    iconColor: 'text-violet-400',
    iconBg: 'bg-violet-400/10 border-violet-400/20',
    title: 'Aplikasi Web Fullstack',
    desc: 'Sistem web kustom: sistem booking, kasir, e-commerce, portal anggota, atau dashboard admin. Dari database hingga UI, semua dikerjakan.',
    tags: ['Laravel', 'React.js', 'MySQL', 'REST API', 'Docker'],
    waMessage: 'Halo Fadlan, saya butuh jasa pembuatan Aplikasi Web Fullstack. Boleh kita diskusi lebih lanjut?'
  },
  {
    id: 3,
    icon: <Image size={24} />,
    iconColor: 'text-pink-400',
    iconBg: 'bg-pink-400/10 border-pink-400/20',
    title: 'Website Profil & Portofolio',
    desc: 'Website personal untuk profil profesional, portofolio developer, atau halaman event dan organisasi. Dibuat dengan desain yang berkesan.',
    tags: ['React.js', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    waMessage: 'Halo Fadlan, saya mau pesan Website Profil / Portofolio. Bisa ceritain prosesnya?'
  },
  {
    id: 4,
    icon: <Server size={24} />,
    iconColor: 'text-emerald-400',
    iconBg: 'bg-emerald-400/10 border-emerald-400/20',
    title: 'Setup & Deploy VPS / Docker',
    desc: 'Setup server dari nol: domain, SSL, Nginx, Docker Compose, Cloudflare Tunnel, sampai CI/CD. Cocok untuk developer atau pemilik bisnis yang butuh bantuan infra.',
    tags: ['Docker', 'Nginx', 'Cloudflare', 'Linux', 'CI/CD'],
    waMessage: 'Halo Fadlan, saya butuh bantuan Setup & Deploy VPS/Docker. Boleh minta info lebih lanjut?'
  }
];

const steps = [
  { num: '01', label: 'Konsultasi', desc: 'Ceritakan kebutuhan dan tujuan Anda' },
  { num: '02', label: 'Estimasi', desc: 'Saya kirim estimasi biaya & timeline' },
  { num: '03', label: 'Pengerjaan', desc: 'Progress update berkala via WhatsApp' },
  { num: '04', label: 'Serah Terima', desc: 'Revisi hingga puas, lalu live' },
];

const Services = () => {
  const waBase = 'https://wa.me/6281584350420?text=';

  return (
    <section id="services" className="py-24 px-6 max-w-6xl mx-auto">
      {/* Section Header — pure typography, no badge pill */}
      <div className="mb-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.4 }}
          className="text-accent-indigo text-sm font-semibold uppercase tracking-widest mb-2"
        >
          Layanan
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="font-display text-3xl sm:text-4xl font-extrabold text-white leading-tight"
        >
          Jasa yang Saya Tawarkan
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-400 text-sm sm:text-base mt-3 max-w-xl"
        >
          Terbuka untuk proyek freelance — dari landing page UMKM hingga sistem web kustom.
        </motion.p>
      </div>

      {/* Service Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
        {services.map((svc, i) => (
          <motion.div
            key={svc.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glassmorphism rounded-2xl p-6 sm:p-7 border border-white/5 hover:border-white/10 flex flex-col justify-between gap-5 group transition-all duration-300 hover:-translate-y-1"
          >
            {/* Icon + Title */}
            <div>
              <div className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-4 ${svc.iconBg} ${svc.iconColor}`}>
                {svc.icon}
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-accent-indigo transition-colors duration-300">
                {svc.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {svc.desc}
              </p>
            </div>

            {/* Tags + CTA */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-1.5">
                {svc.tags.map(tag => (
                  <span key={tag} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-[10px] text-gray-400 font-medium uppercase tracking-wide">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={`${waBase}${encodeURIComponent(svc.waMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors duration-200 group/btn"
              >
                <MessageCircle size={15} />
                <span>Chat via WhatsApp</span>
                <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform duration-200" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Work Process */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="glassmorphism rounded-2xl p-8 border border-white/5"
      >
        <h3 className="font-display text-base font-bold text-white mb-6 uppercase tracking-widest text-center">
          Alur Kerja Bersama Saya
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={step.num} className="flex flex-col items-center text-center gap-2">
              <span className="font-display text-3xl font-extrabold text-accent-indigo/30 leading-none">
                {step.num}
              </span>
              <span className="font-bold text-sm text-white">{step.label}</span>
              <span className="text-xs text-gray-500 leading-relaxed">{step.desc}</span>
              {i < steps.length - 1 && (
                <div className="hidden sm:block absolute" />
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
