import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ExternalLink, FolderGit2, Play, ArrowUpRight } from 'lucide-react';

import folio6 from '../assets/folio-6.webp';
import folio7 from '../assets/folio-7.webp';
import folio5 from '../assets/folio-5.webp';
import folio1 from '../assets/folio-1.webp';
import folio3 from '../assets/folio-3.webp';
import folio4 from '../assets/folio-4.webp';
import folio2 from '../assets/folio-2.webp';
import folio8 from '../assets/folio-8.webp';

const projects = [
  {
    id: 2,
    title: 'Acentra Service : Landing Page Service AC Depok',
    desc: 'Landing page modern untuk Acentra Service Depok. Dilengkapi kalkulator estimasi biaya interaktif, auto-formatting pesan WhatsApp, custom SSR prerender untuk optimasi SEO, serta penanganan performa tinggi.',
    image: folio8,
    category: 'freelance',
    tags: ['React (TypeScript)', 'Tailwind CSS v4', 'Framer Motion', 'SSR Prerender', 'Docker', 'Nginx', 'Cloudflare Tunnel'],
    demoLink: 'https://acentraservice.com'
  },
  {
    id: 1,
    title: 'Premium Office Booking',
    desc: 'Platform terintegrasi untuk pemesanan dan penyewaan ruang kantor, ruang pertemuan, dan coworking space premium di gedung pencakar langit ikonik Wisma 46 Kota BNI Jakarta.',
    image: folio6,
    category: 'fullstack',
    tags: ['React.js (Vite)', 'Laravel 11 API', 'MySQL', 'Docker', 'Grafana', 'GitHub Actions', 'Midtrans Payment Gateway', 'AI Integration (Llama + Groq)'],
    demoLink: 'https://w46space.nexvol.xyz/'
  },
  {
    id: 3,
    title: 'Car Service - Landing Page',
    desc: 'Landing page modern untuk bisnis jasa service mobil profesional AutoPro. Dirancang dengan desain responsive mobile-first, form booking terintegrasi WhatsApp, FAQ interaktif, dan visualisasi detail layanan.',
    image: folio7,
    category: 'frontend',
    tags: ['React.js (Vite)', 'Tailwind CSS v4', 'Cloudflare Tunnel', 'Docker', 'Nginx'],
    demoLink: 'https://autopro.nexvol.xyz/'
  },
  {
    id: 4,
    title: 'Restaurant Franchise Platform',
    desc: 'Platform web kuliner premium bertema Hainanese Kampung Chicken Rice autentik. Menyajikan navigasi menu berstruktur, portal kemitraan waralaba, serta antarmuka pelanggan yang modern.',
    image: folio5,
    category: 'fullstack',
    tags: ['PHP Native OOP', 'MySQL 8.0', 'Docker', 'Bootstrap 5', 'GitHub Actions'],
    demoLink: 'https://fiverestaurant.nexvol.xyz/'
  },
  {
    id: 5,
    title: 'Nunggu Sunset — Luna Maya Google Challenge',
    desc: 'Konten Instagram Reel berdurasi pendek yang dibuat untuk program Google Challenge. Menampilkan Luna Maya dalam sesi kreatif bertema nunggu sunset yang diproduksi di Media Indonesia.',
    image: folio1,
    category: 'media',
    tags: ['Instagram Reel', 'Kamera', 'Editing', 'Media Indonesia'],
    demoLink: 'https://www.instagram.com/reel/Cv9EfbQsBPj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
  },
  {
    id: 6,
    title: 'Executive Forum — Kesehatan & Kemiskinan',
    desc: 'Produksi live streaming acara Executive Forum Media Indonesia bertema "Kesehatan dan Kemiskinan PR Kita Bersama". Bertanggung jawab atas teknis kamera, audio, dan pengelolaan siaran langsung di YouTube.',
    image: folio3,
    category: 'media',
    tags: ['YouTube Live', 'Streaming', 'Kamera', 'Media Indonesia'],
    demoLink: 'https://www.youtube.com/live/gf3mtQdEpZk?si=UJJZ43e0K3q3RlHS'
  },
  {
    id: 7,
    title: 'Nunggu Sunset — Reuni Sherina & Sadam',
    desc: 'Produksi video konten YouTube Media Indonesia: episode reuni persahabatan Sherina dan Sadam. Bertanggung jawab atas pengambilan gambar, lighting tungsten, dan pengeditan akhir.',
    image: folio4,
    category: 'media',
    tags: ['YouTube', 'Video Production', 'Kamera', 'CapCut'],
    demoLink: 'https://youtu.be/VRLh5n1AC9U?si=g-ZmKfPgDBsj8OY3'
  },
  {
    id: 8,
    title: 'TrackInMI — Program Wawancara Media Indonesia',
    desc: 'Program wawancara eksklusif Media Indonesia di mana saya berperan sebagai pewawancara. Menggali kisah inspiratif dari narasumber terpilih dalam format Instagram Reel.',
    image: folio2,
    category: 'media',
    tags: ['Instagram Reel', 'Pewawancara', 'TrackInMI', 'Media Indonesia'],
    demoLink: 'https://www.instagram.com/reel/C0q7j01sq4P/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
  }
];


const categories = [
  { id: 'all', name: 'Semua Proyek' },
  { id: 'fullstack', name: 'Fullstack Web' },
  { id: 'frontend', name: 'Frontend Web' },
  { id: 'freelance', name: 'Freelance / Klien' },
  { id: 'media', name: 'Media & Konten' }
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter logic
  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="mb-16 flex flex-col md:flex-row md:items-center gap-4 justify-between border-b border-white/5 pb-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-[2px] bg-accent-indigo rounded-full hidden sm:block" />
          <div>
            <span className="font-mono text-xs text-accent-indigo uppercase tracking-widest block mb-1">
              Portofolio
            </span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="font-display text-2xl sm:text-3xl font-extrabold text-white"
            >
              Karya Terbaik Yang Saya Bangun
            </motion.h2>
          </div>
        </div>
        <span className="hidden md:block font-display text-6xl font-extrabold text-white/[0.02] select-none leading-none">
          WORKS
        </span>
      </div>

      {/* Controls Container */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 w-full">
        {/* Category Selector Buttons */}
        <div className="flex flex-wrap gap-2 justify-center md:justify-start w-full md:w-auto">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 border cursor-pointer ${
                  isActive 
                    ? 'border-accent-indigo/20 text-white' 
                    : 'border-white/5 text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeProjCat"
                    className="absolute inset-0 bg-white/5 rounded-xl -z-10"
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  />
                )}
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Live Search Input */}
        <div className="relative w-full md:w-[300px]">
          <input
            type="text"
            placeholder="Cari proyek atau stack..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl glassmorphism border border-white/5 hover:border-white/10 focus:border-accent-indigo/40 focus:outline-none text-sm text-white placeholder-gray-500 transition-all duration-300 shadow-inner"
          />
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      {/* Projects Grid Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className={`glassmorphism rounded-2xl overflow-hidden border glow-card hover:border-white/10 transition-all duration-300 flex flex-col h-full group ${
                project.id === 2
                  ? 'md:col-span-2 border-accent-indigo/20 shadow-[0_0_30px_rgba(99,102,241,0.08)]'
                  : 'border-white/5'
              }`}
            >
              {/* Card Header (Thumbnail Image or Glowing CSS backdrop) */}
              <div className={`relative w-full overflow-hidden bg-slate-900 flex items-center justify-center ${
                project.id === 2
                  ? 'h-[200px] sm:h-[280px] md:h-[340px]'
                  : 'aspect-[16/9]'
              }`}>
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  // Abstract sleek tech gradient for projects without image
                  <div className={`w-full h-full bg-gradient-to-tr ${
                    project.id === 3 
                      ? 'from-blue-900/40 via-purple-900/30 to-indigo-900/40' 
                      : 'from-teal-900/30 via-slate-900 to-emerald-950/40'
                  } flex flex-col items-center justify-center p-6 text-center select-none relative`}>
                    {/* Glowing circles in backend */}
                    <div className="absolute w-24 h-24 rounded-full bg-accent-indigo/10 blur-[30px] top-[20%] left-[20%]" />
                    <div className="absolute w-20 h-20 rounded-full bg-accent-teal/10 blur-[35px] bottom-[20%] right-[20%]" />
                    
                    <span className="font-display text-lg font-bold text-white/50 tracking-wider mb-2 uppercase">
                      UI PREVIEW
                    </span>
                    <span className="text-xs text-gray-500 max-w-[200px]">
                      Statis & Interactive Interface Concept
                    </span>
                  </div>
                )}
                
                {/* Category tag bubble overlay */}
                <span className="absolute top-4 left-4 px-2.5 py-1 rounded-md bg-dark-bg/80 border border-white/5 backdrop-blur-md text-[10px] uppercase font-bold text-accent-teal tracking-wider">
                  {project.category}
                </span>
                {/* Klien Nyata badge for freelance projects */}
                {project.category === 'freelance' && (
                  <span className="absolute top-4 right-4 px-2.5 py-1 rounded-md bg-emerald-500/20 border border-emerald-500/30 backdrop-blur-md text-[10px] uppercase font-bold text-emerald-400 tracking-wider">
                    Klien Nyata
                  </span>
                )}
                {/* Featured badge for Acentra Service */}
                {project.id === 2 && (
                  <span className="absolute top-4 right-4 px-2.5 py-1 rounded-md bg-accent-indigo/20 border border-accent-indigo/30 backdrop-blur-md text-[10px] uppercase font-bold text-accent-indigo tracking-wider">
                    ★ Featured
                  </span>
                )}
              </div>

              {/* Card Content body */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-2 leading-tight group-hover:text-accent-indigo transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">
                    {project.desc}
                  </p>
                </div>

                <div>
                  {/* Skill Badge Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded bg-white/5 border border-white/5 text-[10px] text-gray-300 font-semibold uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions Links */}
                  {/* Action Button */}
                  <div className="pt-4 border-t border-white/5">
                    {project.dashboardLink ? (
                      <div className="flex flex-col sm:flex-row gap-3">
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn flex-1 flex items-center justify-between px-4 py-3 rounded-xl bg-white/5 hover:bg-gradient-to-r hover:from-accent-indigo/20 hover:to-accent-teal/10 border border-white/5 hover:border-accent-indigo/30 transition-all duration-300"
                        >
                          <div className="flex items-center gap-2">
                            <ExternalLink size={14} className="text-accent-indigo" />
                            <span className="text-xs font-semibold text-gray-300 group-hover/btn:text-white transition-colors duration-200">
                              Kunjungi Website
                            </span>
                          </div>
                          <ArrowUpRight
                            size={14}
                            className="text-gray-500 group-hover/btn:text-accent-teal group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all duration-200"
                          />
                        </a>
                        <a
                          href={project.dashboardLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn flex-1 flex items-center justify-between px-4 py-3 rounded-xl bg-white/5 hover:bg-gradient-to-r hover:from-accent-indigo/20 hover:to-accent-teal/10 border border-white/5 hover:border-accent-indigo/30 transition-all duration-300"
                        >
                          <div className="flex items-center gap-2">
                            <ExternalLink size={14} className="text-accent-teal" />
                            <span className="text-xs font-semibold text-gray-300 group-hover/btn:text-white transition-colors duration-200">
                              Dashboard Admin
                            </span>
                          </div>
                          <ArrowUpRight
                            size={14}
                            className="text-gray-500 group-hover/btn:text-accent-teal group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all duration-200"
                          />
                        </a>
                      </div>
                    ) : (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn w-full flex items-center justify-between px-4 py-3 rounded-xl bg-white/5 hover:bg-gradient-to-r hover:from-accent-indigo/20 hover:to-accent-teal/10 border border-white/5 hover:border-accent-indigo/30 transition-all duration-300"
                      >
                        <div className="flex items-center gap-2">
                          {project.category === 'media'
                            ? <Play size={14} className="text-accent-teal" />
                            : <ExternalLink size={14} className="text-accent-indigo" />
                          }
                          <span className="text-xs font-semibold text-gray-300 group-hover/btn:text-white transition-colors duration-200">
                            {project.category === 'media' ? 'Tonton Konten' : 'Kunjungi Proyek'}
                          </span>
                        </div>
                        <ArrowUpRight
                          size={14}
                          className="text-gray-500 group-hover/btn:text-accent-teal group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all duration-200"
                        />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Empty Search Result fallback */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="col-span-1 md:col-span-2 text-center py-16 glassmorphism rounded-2xl border border-white/5"
          >
            <FolderGit2 size={40} className="mx-auto text-gray-600 mb-4" />
            <h3 className="font-display text-lg font-bold text-white mb-1">Proyek tidak ditemukan</h3>
            <p className="text-gray-500 text-sm">Cobalah mencari kata kunci atau teknologi yang lain.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
