import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout, Wrench, Palette } from 'lucide-react';

const categories = [
  { id: 'frontend', name: 'Web Dev', icon: <Layout size={16} /> },
  { id: 'tools', name: 'Jaringan NOC', icon: <Wrench size={16} /> },
  { id: 'design', name: 'Media & Desain', icon: <Palette size={16} /> }
];

const skillsData = {
  frontend: {
    tiers: [
      {
        label: 'Daily Driver',
        color: 'text-emerald-400',
        dotColor: 'bg-emerald-400',
        borderColor: 'border-emerald-400/20',
        bgColor: 'bg-emerald-400/5',
        skills: ['Laravel', 'PHP (Native & OOP)', 'MySQL', 'React.js', 'Tailwind CSS', 'HTML & CSS']
      },
      {
        label: 'Confident',
        color: 'text-blue-400',
        dotColor: 'bg-blue-400',
        borderColor: 'border-blue-400/20',
        bgColor: 'bg-blue-400/5',
        skills: ['JavaScript', 'Docker', 'Git', 'Bootstrap', 'Linux (Ubuntu VPS)']
      },
      {
        label: 'Familiar',
        color: 'text-amber-400',
        dotColor: 'bg-amber-400',
        borderColor: 'border-amber-400/20',
        bgColor: 'bg-amber-400/5',
        skills: ['CI/CD GitHub Actions', 'Nginx', 'Cloudflare', 'Grafana']
      }
    ],
    note: 'Tech stack utama yang digunakan dalam proyek yang di bangun.'
  },
  tools: {
    tiers: [
      {
        label: 'Tools',
        color: 'text-cyan-400',
        dotColor: 'bg-cyan-400',
        borderColor: 'border-cyan-400/20',
        bgColor: 'bg-cyan-400/5',
        skills: ['Polestar', 'SD-WAN vManage', 'UniFi', 'PuTTY', 'Winbox']
      },
      {
        label: 'Fokus Utama',
        color: 'text-violet-400',
        dotColor: 'bg-violet-400',
        borderColor: 'border-violet-400/20',
        bgColor: 'bg-violet-400/5',
        skills: ['Troubleshooting & First Handling', 'Helpdesk / Ticketing', 'Network Monitoring']
      }
    ],
    note: 'Digunakan selama magang NOC di PT Mitra Teknologi Andalan Utama — monitoring jaringan SD-WAN dan penanganan trouble ticket.'
  },
  design: {
    tiers: [
      {
        label: 'Tools',
        color: 'text-pink-400',
        dotColor: 'bg-pink-400',
        borderColor: 'border-pink-400/20',
        bgColor: 'bg-pink-400/5',
        skills: ['Canva', 'CapCut']
      },
      {
        label: 'Skill & Peran',
        color: 'text-orange-400',
        dotColor: 'bg-orange-400',
        borderColor: 'border-orange-400/20',
        bgColor: 'bg-orange-400/5',
        skills: ['Kamera & Lighting', 'Video Streaming', 'Reporting / Jurnalis']
      }
    ],
    note: 'Diterapkan selama magang di Media Indonesia (Media & Kreatif) sebagai Social Media Support dan reporter lapangan.'
  }
};

const softSkills = [
  'Komunikasi', 'Team Work', 'Teliti',
  'Mudah Beradaptasi', 'Loyalitas', 'Manajemen Waktu', 'Bertanggung Jawab'
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState('frontend');
  const currentData = skillsData[activeTab];

  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="inline-flex px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-accent-indigo uppercase tracking-widest mb-3"
        >
          <span>Keahlian &amp; Stack</span>
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

      {/* Skills Tier Grid */}
      <div className="glassmorphism p-8 rounded-2xl border border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[20%] h-[100px] bg-accent-indigo/5 blur-[50px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[25%] h-[100px] bg-accent-teal/5 blur-[60px] pointer-events-none" />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col gap-7"
          >
            {currentData.tiers.map((tier, tierIndex) => (
              <div key={tier.label}>
                {/* Tier Label */}
                <div className="flex items-center gap-2 mb-3">
                  <span className={`w-2 h-2 rounded-full ${tier.dotColor} flex-shrink-0`} />
                  <span className={`text-xs font-bold uppercase tracking-widest ${tier.color}`}>
                    {tier.label}
                  </span>
                  <div className="flex-1 h-px bg-white/5" />
                </div>

                {/* Skill Tags */}
                <div className="flex flex-wrap gap-2">
                  {tier.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2, delay: tierIndex * 0.05 + skillIndex * 0.03 }}
                      className={`px-3.5 py-1.5 rounded-lg text-sm font-medium text-gray-200 border ${tier.borderColor} ${tier.bgColor} hover:brightness-110 transition-all duration-200 cursor-default`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}

            {/* Context note */}
            {currentData.note && (
              <p className="text-xs text-gray-500 italic border-t border-white/5 pt-4 mt-1">
                {currentData.note}
              </p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Soft Skills Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="glassmorphism p-8 rounded-2xl border border-white/5 relative overflow-hidden mt-6"
      >
        <div className="absolute top-0 right-0 w-[30%] h-[100px] bg-accent-teal/5 blur-[50px] pointer-events-none" />
        <h3 className="font-display text-sm font-bold text-white mb-4 uppercase tracking-widest">Soft Skills</h3>
        <div className="flex flex-wrap gap-2.5">
          {softSkills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-2 rounded-xl bg-white/5 border border-white/5 text-xs text-gray-300 font-medium hover:border-accent-indigo/30 hover:bg-gradient-to-r hover:from-accent-indigo/10 hover:to-accent-teal/5 transition-all duration-300 cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
