
import { motion } from 'framer-motion';
import { Briefcase, Calendar, GraduationCap, Clock } from 'lucide-react';

const timelineData = [
  {
    id: 1,
    type: 'work',
    role: 'Network Operation Center (NOC) Staff',
    company: 'PT Mitra Teknologi Andalan Utama',
    duration: 'Juli 2025 — Sekarang',
    bullets: [
      'Melakukan Monitoring Network di Polestar, Unifi dan VManage SD-Wan',
      'Melakukan First Handling saat menerima laporan gangguan',
      'Melakukan Pengecekan dan Troubleshooting melalui Putty dan Winbox',
      'Membuat Tiket dan Email terkait laporan gangguan yang di terima',
      'Menjadi Helpdesk terkait aduan gangguan pada Network tertentu',
      'Melakukan Preventive Maintenance pada Network SD WAN',
      'Melakukan Support untuk Tim Lapangan saat Visit'
    ],
    icon: <Briefcase className="text-accent-teal" size={16} />
  },
  {
    id: 2,
    type: 'work',
    role: 'Media Social Support',
    company: 'Media Indonesia',
    duration: 'Juli 2023 — Desember 2023',
    bullets: [
      'Membuat Infografis untuk Media Sosial Media Indonesia',
      'Mengupload Berita di LinkedIn Media Indonesia',
      'Menjadi Crew Set Up dan Video Editor di Program MICOM Update',
      'Menjadi Cameraman dan Wartawan di Program TrackInMI',
      'Menjadi Crew Set Up dan Cameraman di Program Nunggu Sunset',
      'Menjadi Crew Set Up dan Cameraman di Festival Setara & Berdaya dan Executive Forum',
      'Menjadi Crew Set Up, Cameraman dan Video Editor di Short Video trivia 17 Agustus 2023'
    ],
    icon: <Briefcase className="text-accent-indigo" size={16} />
  },
  {
    id: 3,
    type: 'education',
    role: 'Sistem Informasi',
    company: 'Universitas Esa Unggul',
    duration: 'September 2024 — Sekarang',
    desc: 'Sedang menempuh pendidikan S1 Sistem Informasi. Mempelajari pengembangan web, database, jaringan komputer, pemrograman berorientasi objek, serta analisis dan desain sistem informasi.',
    icon: <GraduationCap className="text-accent-violet" size={16} />
  },
  {
    id: 4,
    type: 'education',
    role: 'Rekayasa Perangkat Lunak (RPL)',
    company: 'SMK Telkom Shandy Putra Jakarta',
    duration: 'Juni 2021 — Mei 2024',
    desc: 'Mulai belajar pengembangan web dan pemrograman. Mendalami HTML, CSS, JavaScript, PHP, basis data, dan rekayasa perangkat lunak yang menjadi fondasi karier di bidang Web Development.',
    icon: <GraduationCap className="text-accent-teal" size={16} />
  }
];



const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 max-w-4xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-accent-indigo uppercase tracking-wider mb-3"
        >
          <Clock size={12} />
          <span>Pengalaman & Riwayat</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-3xl sm:text-4xl font-extrabold text-white"
        >
          Perjalanan & Jejak Karier Saya
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '60px' }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-1 bg-gradient-to-r from-accent-indigo to-accent-teal mx-auto mt-4 rounded-full"
        />
      </div>

      {/* Vertical Timeline Structure */}
      <div className="relative border-l border-white/10 pl-6 sm:pl-8 ml-4 sm:ml-6 space-y-12">
        {/* Glow Line Indicator */}
        <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-gradient-to-b from-accent-indigo via-accent-teal to-transparent pointer-events-none" />

        {timelineData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="relative group"
          >
            {/* Timeline Dot Node Indicator */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-dark-bg border border-white/10 flex items-center justify-center group-hover:border-accent-indigo group-hover:scale-110 shadow-lg transition-all duration-300 z-10">
              {item.icon}
            </div>

            {/* Content card glassmorphism */}
            <div className="glassmorphism p-6 sm:p-8 rounded-2xl border border-white/5 hover:border-white/10 glow-card transition-all duration-300 relative overflow-hidden">
              {/* Type Badge (Work / Education) */}
              <span className={`absolute top-4 right-4 px-2.5 py-1 rounded text-[9px] uppercase font-bold tracking-wider ${
                item.type === 'work' 
                  ? 'bg-accent-teal/10 text-accent-teal' 
                  : 'bg-accent-violet/10 text-accent-violet'
              }`}>
                {item.type === 'work' ? 'Pekerjaan' : 'Pendidikan'}
              </span>

              {/* Title & Role Info */}
              <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-accent-indigo transition-colors duration-200">
                {item.role}
              </h3>
              
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400 mb-4">
                <span className="font-semibold text-gray-300">{item.company}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar size={12} />
                  <span>{item.duration}</span>
                </span>
              </div>

              {/* Description */}
              {item.bullets ? (
                <ul className="list-disc pl-4 space-y-1.5 text-gray-400 text-xs sm:text-sm">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
