import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Layout, Wrench, Palette } from 'lucide-react';

const categories = [
  { id: 'frontend', name: 'Web Dev', icon: <Layout size={16} /> },
  { id: 'tools', name: 'Jaringan NOC', icon: <Wrench size={16} /> },
  { id: 'design', name: 'Media & Desain', icon: <Palette size={16} /> }
];

const skillsData = {
  frontend: [
    { name: 'HTML & CSS', level: 95, color: 'from-orange-500 to-amber-500' },
    { name: 'JavaScript', level: 80, color: 'from-yellow-400 to-amber-500' },
    { name: 'React.js', level: 80, color: 'from-cyan-400 to-teal-500' },
    { name: 'PHP (Native & OOP)', level: 90, color: 'from-indigo-400 to-blue-500' },
    { name: 'Laravel', level: 90, color: 'from-red-500 to-rose-600' },
    { name: 'MySQL', level: 90, color: 'from-accent-teal to-accent-emerald' },
    { name: 'Tailwind CSS & Bootstrap', level: 85, color: 'from-purple-500 to-accent-violet' },
    { name: 'Docker & Git', level: 75, color: 'from-blue-500 to-indigo-600' }
  ],
  tools: [
    { name: 'Polestar', level: 60, color: 'from-accent-indigo to-accent-violet' },
    { name: 'SD-WAN VManage', level: 55, color: 'from-blue-500 to-indigo-600' },
    { name: 'Putty', level: 65, color: 'from-gray-500 to-gray-700' },
    { name: 'Unifi', level: 60, color: 'from-teal-400 to-accent-teal' },
    { name: 'Winbox', level: 55, color: 'from-accent-teal to-accent-emerald' },
    { name: 'Helpdesk / Ticketing', level: 85, color: 'from-green-500 to-emerald-600' }
  ],
  design: [
    { name: 'Canva', level: 75, color: 'from-accent-teal to-blue-400' },
    { name: 'CapCut', level: 70, color: 'from-gray-600 to-gray-800' },
    { name: 'Kamera & Lighting', level: 65, color: 'from-yellow-500 to-orange-500' },
    { name: 'Video Streaming', level: 65, color: 'from-red-500 to-pink-600' },
    { name: 'Reporter', level: 70, color: 'from-accent-violet to-pink-500' }
  ]
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-accent-indigo uppercase tracking-wider mb-3"
        >
          <Cpu size={12} />
          <span>Keahlian</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-3xl sm:text-4xl font-extrabold text-white"
        >
          Spesialisasi & Senjata Utama
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '60px' }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-1 bg-gradient-to-r from-accent-indigo to-accent-teal mx-auto mt-4 rounded-full"
        />
      </div>

      {/* Tabs Selector */}
      <div className="flex justify-center gap-2 mb-12 flex-wrap">
        {categories.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide flex items-center gap-2 transition-all duration-300 border cursor-pointer ${
                isActive 
                  ? 'border-accent-indigo/30 text-white' 
                  : 'border-white/5 text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeSkillTab"
                  className="absolute inset-0 bg-gradient-to-r from-accent-indigo/20 to-accent-violet/10 rounded-xl -z-10"
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                />
              )}
              {tab.icon}
              <span>{tab.name}</span>
            </button>
          );
        })}
      </div>

      {/* Skills Grid */}
      <div className="glassmorphism p-8 rounded-2xl border border-white/5 relative overflow-hidden">
        {/* Glow visual backdrops */}
        <div className="absolute top-0 right-0 w-[20%] h-[100px] bg-accent-indigo/5 blur-[50px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[25%] h-[100px] bg-accent-teal/5 blur-[60px] pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          <AnimatePresence mode="wait">
            {skillsData[activeTab].map((skill, index) => (
              <motion.div
                key={skill.name + activeTab} // forces recreation on tab switch for animation
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex flex-col gap-2"
              >
                {/* Name & Percentage Info */}
                <div className="flex justify-between items-center text-sm font-medium tracking-wide">
                  <span className="text-gray-200">{skill.name}</span>
                  <span className="text-gray-400">{skill.level}%</span>
                </div>

                {/* Progress bar container */}
                <div className="w-full h-3 rounded-full bg-white/5 border border-white/5 overflow-hidden p-0.5">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color} relative shadow-[0_0_10px_rgba(99,102,241,0.2)]`}
                  >
                    {/* Glowing point at the end of the bar */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#fff]" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Soft Skills & Achievements Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-8">
        {/* Soft Skills Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-7 lg:col-span-8 glassmorphism p-8 rounded-2xl border border-white/5 relative overflow-hidden flex flex-col justify-between"
        >
          <div className="absolute top-0 right-0 w-[30%] h-[100px] bg-accent-teal/5 blur-[50px] pointer-events-none" />
          <div>
            <h3 className="font-display text-base font-bold text-white mb-4">Kemampuan Personal (Soft Skills)</h3>
            <div className="flex flex-wrap gap-2.5">
              {[
                'Komunikasi', 'Team Work', 'Teliti',
                'Mudah Beradaptasi', 'Loyalitas', 'Manajemen Waktu', 'Bertanggung Jawab'
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-2 rounded-xl bg-white/5 border border-white/5 text-xs text-gray-300 font-medium hover:border-accent-indigo/30 hover:bg-gradient-to-r hover:from-accent-indigo/10 hover:to-accent-teal/5 transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Achievements / Other Skills Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:col-span-5 lg:col-span-4 glassmorphism p-8 rounded-2xl border border-white/5 relative overflow-hidden flex flex-col justify-between gap-6"
        >
          <div className="absolute top-0 right-0 w-[40%] h-[80px] bg-accent-violet/5 blur-[40px] pointer-events-none" />
          
          <div>
            <h3 className="font-display text-base font-bold text-white mb-3">Kemampuan Lainnya</h3>
            <ul className="space-y-2 text-xs text-gray-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-teal" />
                <span>Ms. Office (Word, Excel, PowerPoint)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-indigo" />
                <span>Penguasaan Media Sosial (YT, IG, TikTok)</span>
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t border-white/5">
            <h3 className="font-display text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Prestasi & Kegiatan</h3>
            <div className="text-xs text-white font-medium flex flex-col gap-1">
              <span>Peserta Seminar GHM Pengmas HiMTI</span>
              <span className="text-[10px] text-accent-indigo font-bold font-mono">Tahun 2023</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
