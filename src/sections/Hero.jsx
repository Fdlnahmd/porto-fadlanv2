import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Activity, MessageCircle, FileText } from 'lucide-react';
import grafanaDashboard from '../assets/grafana-dashboard.webp';

const roles = ['Fullstack Developer | DevOps Enthusiast', 'Freelance Web Developer', 'NOC Staff', 'Social Media Staff'];

const STAT_BADGES = [
  { label: '11 Containers', color: 'from-emerald-500/20 to-green-500/10 border-emerald-500/30 text-emerald-400', pos: '-top-3 left-4' },
  { label: '99.9% Uptime', color: 'from-blue-500/20 to-cyan-500/10 border-blue-500/30 text-blue-400', pos: '-top-3 right-4' },
  { label: 'CPU 4.5%', color: 'from-orange-500/20 to-amber-500/10 border-orange-500/30 text-orange-400', pos: '-bottom-3 left-4' },
  { label: '686 MiB RAM', color: 'from-violet-500/20 to-purple-500/10 border-violet-500/30 text-violet-400', pos: '-bottom-3 right-4' },
];

const GrafanaDashboardCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.5 }}
      className="relative w-full mx-auto lg:mx-0"
    >
      {/* Floating stat badges */}
      {STAT_BADGES.map((b, i) => (
        <motion.span
          key={b.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: [0, -4, 0] }}
          transition={{ duration: 3.5, delay: 1.2 + i * 0.4, repeat: Infinity, ease: 'easeInOut' }}
          className={`absolute z-20 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase border bg-gradient-to-r ${b.color} backdrop-blur-sm ${b.pos}`}
        >
          {b.label}
        </motion.span>
      ))}

      {/* Dashboard window */}
      <div className="glassmorphism rounded-2xl border border-white/10 overflow-hidden shadow-[0_0_40px_rgba(99,102,241,0.15)]">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.03] border-b border-white/5">
          <div className="w-3 h-3 rounded-full bg-red-500/70" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <div className="w-3 h-3 rounded-full bg-green-500/70" />
          <Activity size={10} className="ml-2 text-emerald-400" />
          <span className="text-[11px] text-gray-500 font-mono">grafana.nexvol.xyz — Container Monitoring</span>
        </div>

        {/* Dashboard screenshot */}
        <div className="relative">
          <img
            src={grafanaDashboard}
            alt="Grafana Dashboard nexvol.xyz — real container monitoring"
            className="w-full object-cover object-top"
          />
          {/* Subtle overlay gradient at bottom for a clean fade */}
          <div className="absolute bottom-0 inset-x-0 h-8 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
        </div>
      </div>
    </motion.div>
  );
};

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const spotlightRef = useRef(null);

  // Typewriter
  useEffect(() => {
    const currentRole = roles[roleIndex];
    if (!isDeleting && displayedText === currentRole) {
      const pause = setTimeout(() => setIsDeleting(true), 1800);
      return () => clearTimeout(pause);
    }
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentRole.slice(0, displayedText.length + 1));
      } else {
        if (displayedText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        } else {
          setDisplayedText(currentRole.slice(0, displayedText.length - 1));
        }
      }
    }, isDeleting ? 55 : 110);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  // Spotlight mouse tracking
  const handleMouseMove = (e) => {
    if (!spotlightRef.current) return;
    const rect = spotlightRef.current.getBoundingClientRect();
    spotlightRef.current.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    spotlightRef.current.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  const handleScrollToSection = (id) => {
    const el = document.querySelector(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={spotlightRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[90vh] md:min-h-[100vh] flex items-center px-6 py-20 overflow-hidden"
      style={{
        background: 'radial-gradient(circle 800px at var(--mouse-x, 50%) var(--mouse-y, 40%), rgba(99, 102, 241, 0.08), transparent 80%)'
      }}
    >
      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-24 h-24 rounded-full border border-white/5 bg-gradient-to-tr from-accent-indigo/5 to-accent-violet/5 animate-[bounce_8s_infinite] -z-10" />
      <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full border border-white/5 bg-gradient-to-tr from-accent-teal/5 to-accent-emerald/5 animate-[bounce_10s_infinite_2s] -z-10" />

      {/* 2-column layout */}
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">

        {/* LEFT: Text content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">

          {/* Status Badges */}
          <div className="flex flex-wrap gap-2.5 mb-6 justify-center lg:justify-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="px-3.5 py-1.5 rounded-full glassmorphism text-[10px] font-bold tracking-wider uppercase flex items-center gap-2 text-emerald-400 border border-emerald-500/20"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Open to Work</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="px-3.5 py-1.5 rounded-full glassmorphism text-[10px] font-bold tracking-wider uppercase flex items-center gap-2 text-cyan-400 border border-cyan-500/20"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>Freelance Available</span>
            </motion.div>
          </div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]"
          >
            Fadlan Achmad{' '}
            <span className="bg-gradient-to-r from-accent-indigo via-accent-violet to-accent-teal bg-clip-text text-transparent">
              Frizal
            </span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-10 sm:h-12 text-lg sm:text-2xl font-display font-medium text-gray-300 mb-6 flex items-center gap-1.5"
          >
            <span className="text-white border-r-2 border-accent-indigo pr-1 font-semibold text-glow-violet animate-[blink_1s_step-start_infinite]">
              {displayedText}
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-300 text-sm sm:text-base leading-relaxed mb-10 max-w-xl"
          >
            Lulusan SMK, Rekayasa Perangkat Lunak (RPL) di SMK Telkom Shandy Putra Jakarta yang memiliki minat tinggi dalam coding, problem solving, dan pengembangan web dinamis maupun statis. Saat ini sedang menempuh pendidikan S1 Sistem Informasi di Universitas Esa Unggul.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row flex-wrap gap-4 items-center lg:items-start w-full sm:w-auto justify-center lg:justify-start"
          >
            {/* Primary: View Projects */}
            <button
              onClick={() => handleScrollToSection('#projects')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-accent-indigo to-accent-violet hover:shadow-[0_0_25px_rgba(99,102,241,0.4)] text-white font-medium flex items-center justify-center gap-2 group transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer text-sm"
            >
              <Code size={16} />
              <span>Lihat Proyek</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            <a
              href="https://wa.me/6281584350420?text=Halo%20Fadlan%2C%20saya%20tertarik%20dengan%20jasa%20pembuatan%20website%20Anda.%20Bisa%20diskusi%20lebih%20lanjut%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 font-medium flex items-center justify-center gap-2 transition-all duration-300 transform hover:-translate-y-0.5 text-sm"
            >
              <MessageCircle size={16} />
              <span>Hubungi Jasa</span>
            </a>

            {/* Tertiary: Download CV */}
            <a
              href="https://drive.google.com/uc?export=download&id=1VBUBvgj0pc65mPP8qDx3Awo2GMyDtk0j"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-xl glassmorphism hover:bg-white/5 hover:border-white/10 text-gray-300 hover:text-white font-medium flex items-center justify-center gap-2 transition-all duration-300 transform hover:-translate-y-0.5 text-sm"
            >
              <FileText size={16} className="text-accent-teal" />
              <span>Download CV</span>
            </a>
          </motion.div>
        </div>

        {/* RIGHT: Grafana Dashboard — visible from md breakpoint */}
        <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
          <GrafanaDashboardCard />
        </div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1, delay: 1, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5 cursor-pointer"
        onClick={() => handleScrollToSection('#about')}
      >
        <span className="text-[10px] text-gray-500 uppercase tracking-widest">Scroll Down</span>
        <div className="w-5 h-8 rounded-full border border-gray-600 flex justify-center p-1.5">
          <div className="w-1 h-2 rounded-full bg-accent-indigo animate-[bounce_1.5s_infinite]" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
