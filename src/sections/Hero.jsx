import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Code, Sparkles, MessageSquare } from 'lucide-react';

const roles = ['Fullstack Developer | DevOps Enthusiast', 'NOC Staff', 'Social Media Staff'];

const TERMINAL_LINES = [
  { text: '$ docker compose up -d', type: 'cmd', delay: 400 },
  { text: '  ✓ backend     running', type: 'success', delay: 1000 },
  { text: '  ✓ frontend    running', type: 'success', delay: 1500 },
  { text: '  ✓ database    running', type: 'success', delay: 2000 },
  { text: '  ✓ grafana    running', type: 'success', delay: 2500 },
  { text: '', type: 'empty', delay: 3000 },
  { text: '$ git push origin main', type: 'cmd', delay: 3100 },
  { text: '  → GitHub Actions: triggered', type: 'info', delay: 3700 },
  { text: '  ✓ CI/CD: Deploy success ✨', type: 'success', delay: 4500 },
  { text: '', type: 'empty', delay: 5100 },
  { text: '  ● Grafana: Monitoring active', type: 'monitor', delay: 5500 },
];

const TECH_BADGES = [
  { label: 'Laravel', color: 'from-red-500/20 to-rose-500/10 border-red-500/20 text-red-400', pos: '-top-4 left-8' },
  { label: 'Docker', color: 'from-blue-500/20 to-cyan-500/10 border-blue-500/20 text-blue-400', pos: '-top-4 right-8' },
  { label: 'React.js', color: 'from-cyan-500/20 to-teal-500/10 border-cyan-500/20 text-cyan-400', pos: '-bottom-4 left-8' },
  { label: 'Grafana', color: 'from-orange-500/20 to-amber-500/10 border-orange-500/20 text-orange-400', pos: '-bottom-4 right-8' },
];

const lineColor = {
  cmd: 'text-accent-indigo',
  success: 'text-accent-teal',
  info: 'text-yellow-400',
  monitor: 'text-purple-400',
  empty: '',
};

const TerminalCard = () => {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (visibleCount >= TERMINAL_LINES.length) return;
    const next = TERMINAL_LINES[visibleCount];
    const t = setTimeout(() => setVisibleCount(v => v + 1), next.delay);
    return () => clearTimeout(t);
  }, [visibleCount]);

  // Loop: reset after all done
  useEffect(() => {
    if (visibleCount < TERMINAL_LINES.length) return;
    const t = setTimeout(() => setVisibleCount(0), 3000);
    return () => clearTimeout(t);
  }, [visibleCount]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.5 }}
      className="relative w-full max-w-sm mx-auto lg:mx-0"
    >
      {/* Floating tech badges */}
      {TECH_BADGES.map((b, i) => (
        <motion.span
          key={b.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: [0, -4, 0] }}
          transition={{ duration: 3, delay: 1.5 + i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
          className={`absolute z-20 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase border bg-gradient-to-r ${b.color} backdrop-blur-sm ${b.pos}`}
        >
          {b.label}
        </motion.span>
      ))}

      {/* Terminal window */}
      <div className="glassmorphism rounded-2xl border border-white/10 overflow-hidden shadow-[0_0_40px_rgba(99,102,241,0.15)]">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.03] border-b border-white/5">
          <div className="w-3 h-3 rounded-full bg-red-500/70" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <div className="w-3 h-3 rounded-full bg-green-500/70" />
          <span className="ml-2 text-[11px] text-gray-500 font-mono">fadlan@server: ~/projects</span>
        </div>

        {/* Terminal body */}
        <div className="p-5 font-mono text-xs space-y-1 min-h-[200px]">
          <AnimatePresence>
            {TERMINAL_LINES.slice(0, visibleCount).map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className={`${lineColor[line.type] || 'text-gray-400'} leading-relaxed`}
              >
                {line.text || '\u00A0'}
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Blinking cursor */}
          {visibleCount < TERMINAL_LINES.length && (
            <span className="inline-block w-2 h-3.5 bg-accent-indigo animate-[blink_1s_step-start_infinite]" />
          )}
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

          {/* Intro badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="px-4 py-1.5 rounded-full glassmorphism text-xs font-semibold text-accent-indigo tracking-wider uppercase flex items-center gap-2 mb-6"
          >
            <Sparkles size={12} className="animate-pulse" />
            <span>Hello, I'm</span>
          </motion.div>

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
            className="text-gray-400 text-sm sm:text-base leading-relaxed mb-10 max-w-xl"
          >
            Fresh graduate SMK Rekayasa Perangkat Lunak (RPL) di SMK Telkom Shandy Putra Jakarta yang memiliki minat tinggi dalam coding, problem solving, dan pengembangan web dinamis maupun statis. Saat ini sedang menempuh pendidikan S1 Sistem Informasi di Universitas Esa Unggul.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 items-center lg:items-start w-full sm:w-auto"
          >
            <button
              onClick={() => handleScrollToSection('#projects')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-accent-indigo to-accent-violet hover:shadow-[0_0_25px_rgba(99,102,241,0.4)] text-white font-medium flex items-center justify-center gap-2 group transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Code size={18} />
              <span>View Projects</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <a
              href="https://drive.google.com/uc?export=download&id=1JH3Om1sj4DK-4650DsKIGOlXu8LR59jk"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl glassmorphism hover:bg-white/5 hover:border-white/10 text-white font-medium flex items-center justify-center gap-2 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <MessageSquare size={18} className="text-accent-teal" />
              <span>Download CV</span>
            </a>
          </motion.div>
        </div>

        {/* RIGHT: Terminal card */}
        <div className="hidden lg:flex justify-center lg:justify-end pt-8">
          <TerminalCard />
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
