import { motion } from 'framer-motion';
import { Briefcase, Calendar, GraduationCap } from 'lucide-react';

const workExperience = [
  {
    id: 1,
    role: 'Network Operation Center (NOC) Staff',
    company: 'PT Mitra Teknologi Andalan Utama',
    link: 'https://www.mtau.co.id/',
    duration: 'Juli 2025 — Sekarang',
    bullets: [
      'Memantau kestabilan jaringan menggunakan Polestar, UniFi, dan Cisco vManage SD-WAN.',
      'Menangani kendala awal (first handling) pada laporan gangguan sistem yang masuk.',
      'Mendiagnosis & melakukan troubleshoot konfigurasi jaringan menggunakan PuTTY dan Winbox.',
      'Mengelola dokumentasi tiket gangguan (trouble ticket) dan laporan eskalasi email.',
      'Melayani aduan teknis pelanggan terkait laporan gangguan jaringan tertentu.',
      'Melaksanakan pemeliharaan berkala (preventive maintenance) pada jaringan SD-WAN.',
      'Memberikan dukungan teknis jarak jauh (remote support) untuk tim lapangan di lokasi.'
    ],
    accentColor: 'border-accent-teal/20 hover:border-accent-teal/35 shadow-[0_0_20px_rgba(20,184,166,0.02)]'
  },
  {
    id: 2,
    role: 'Media Social Support',
    company: 'Media Indonesia',
    link: 'https://mediaindonesia.com/',
    duration: 'Juli 2023 — Desember 2023',
    bullets: [
      'Membuat konten infografis informatif untuk media sosial resmi perusahaan.',
      'Mengelola publikasi berita harian di platform LinkedIn Media Indonesia.',
      'Mengoperasikan peralatan studio & editing video pada program "MICOM Update".',
      'Mengambil gambar (kamera) & meliput berita sebagai jurnalis program "TrackInMI".',
      'Menyiapkan instalasi teknis studio & mengoperasikan kamera program "Nunggu Sunset".',
      'Mengatur set-up peralatan teknis & penataan kamera pada event skala besar.',
      'Mengoordinasikan proses set-up, pengambilan gambar, & editing video trivia pendek.'
    ],
    accentColor: 'border-accent-indigo/20 hover:border-accent-indigo/35 shadow-[0_0_20px_rgba(99,102,241,0.02)]'
  }
];

const educationHistory = [
  {
    id: 1,
    role: 'Sistem Informasi',
    company: 'Universitas Esa Unggul',
    link: 'https://www.esaunggul.ac.id/',
    duration: 'September 2024 — Sekarang',
    desc: 'Sedang menempuh pendidikan S1 Sistem Informasi. Mempelajari pengembangan web, database, jaringan komputer, pemrograman berorientasi objek, serta analisis dan desain sistem informasi.',
    accentColor: 'border-accent-violet/20 hover:border-accent-violet/35 shadow-[0_0_20px_rgba(139,92,246,0.02)]'
  },
  {
    id: 2,
    role: 'Rekayasa Perangkat Lunak (RPL)',
    company: 'SMK Telkom Shandy Putra Jakarta',
    link: 'https://smktelkom-jkt.sch.id/',
    duration: 'Juni 2021 — Mei 2024',
    desc: 'Mulai belajar pengembangan web dan pemrograman. Mendalami HTML, CSS, JavaScript, PHP, basis data, dan rekayasa perangkat lunak yang menjadi fondasi karier di bidang Web Development.',
    accentColor: 'border-accent-teal/20 hover:border-accent-teal/35 shadow-[0_0_20px_rgba(20,184,166,0.02)]'
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 max-w-6xl mx-auto">
      {/* Work Experience Section */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <Briefcase className="text-accent-teal flex-shrink-0" size={20} />
          <h3 className="font-display text-base sm:text-lg font-bold text-white uppercase tracking-wider">
            Pengalaman Magang / Kerja
          </h3>
          <div className="flex-1 h-px bg-white/5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {workExperience.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glassmorphism p-6 sm:p-8 rounded-2xl border ${item.accentColor} transition-all duration-300 flex flex-col justify-between group`}
            >
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded bg-accent-teal/10 text-accent-teal text-[9px] uppercase font-bold tracking-wider mb-3">
                  Magang
                </span>
                <h4 className="font-display text-lg font-bold text-white mb-1 group-hover:text-accent-indigo transition-colors duration-200">
                  {item.role}
                </h4>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-gray-400 mb-4">
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-300 hover:text-accent-teal hover:underline underline-offset-4 decoration-accent-teal/30">
                    {item.company}
                  </a>
                  <span className="hidden xs:inline">•</span>
                  <span className="flex items-center gap-1">
                    <Calendar size={11} />
                    <span>{item.duration}</span>
                  </span>
                </div>
                <ul className="list-disc pl-4 space-y-1.5 text-gray-300 text-xs sm:text-sm">
                  {item.bullets.map((bullet, idx) => (
                    <li key={idx} className="leading-relaxed">{bullet}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Education History Section */}
      <div>
        <div className="flex items-center gap-3 mb-8">
          <GraduationCap className="text-accent-violet flex-shrink-0" size={20} />
          <h3 className="font-display text-base sm:text-lg font-bold text-white uppercase tracking-wider">
            Riwayat Pendidikan
          </h3>
          <div className="flex-1 h-px bg-white/5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationHistory.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glassmorphism p-6 sm:p-8 rounded-2xl border ${item.accentColor} transition-all duration-300 flex flex-col justify-between group`}
            >
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded bg-accent-violet/10 text-accent-violet text-[9px] uppercase font-bold tracking-wider mb-3">
                  Pendidikan
                </span>
                <h4 className="font-display text-base sm:text-lg font-bold text-white mb-1 group-hover:text-accent-indigo transition-colors duration-200">
                  {item.role}
                </h4>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-gray-400 mb-3">
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-300 hover:text-accent-violet hover:underline underline-offset-4 decoration-accent-violet/30">
                    {item.company}
                  </a>
                  <span className="hidden xs:inline">•</span>
                  <span className="flex items-center gap-1">
                    <Calendar size={11} />
                    <span>{item.duration}</span>
                  </span>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
