import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <div className="min-h-screen text-slate-800 dark:text-zinc-200 flex items-center justify-center p-6 antialiased bg-dark-bg relative overflow-hidden">
      
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,rgba(59,130,246,0.04),transparent_80%)] dark:bg-[radial-gradient(circle_800px_at_50%_50%,rgba(59,130,246,0.08),transparent_80%)] pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full text-center glassmorphism p-8 sm:p-10 rounded-2xl relative overflow-hidden border border-slate-900/10 dark:border-white/5 bg-white/45 dark:bg-[#13131a]/65 backdrop-blur-[12px] shadow-[0_8px_32px_0_rgba(15,23,42,0.04)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] z-10"
      >
        {/* Subtle glow accents */}
        <div className="absolute -top-12 -left-12 w-24 h-24 rounded-full bg-accent-indigo/10 blur-xl pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-24 h-24 rounded-full bg-accent-teal/10 blur-xl pointer-events-none" />
        
        {/* Big 404 title */}
        <h1 className="text-7xl sm:text-8xl font-black font-display bg-gradient-to-r from-accent-indigo via-accent-violet to-accent-teal bg-clip-text text-transparent tracking-tight mb-4 select-none">
          404
        </h1>
        
        <h2 className="text-xl font-bold font-display text-slate-900 dark:text-white mb-2">
          Halaman Tidak Ditemukan
        </h2>
        <p className="text-slate-600 dark:text-zinc-400 text-sm leading-relaxed mb-8">
          Sepertinya halaman yang Anda cari telah dipindahkan, dihapus, atau alamat URL yang dimasukkan salah.
        </p>
        
        {/* CTA Button */}
        <a 
          href="/"
          className="inline-flex w-full py-3.5 px-6 rounded-xl bg-accent-indigo hover:bg-accent-indigo/90 shadow-[0_4px_12px_rgba(59,130,246,0.15)] dark:shadow-[0_0_20px_rgba(59,130,246,0.25)] text-white font-medium text-sm items-center justify-center gap-2 transition-all duration-300 transform hover:-translate-y-0.5"
        >
          <ArrowLeft size={16} />
          <span>Kembali ke Beranda</span>
        </a>
      </motion.div>
    </div>
  );
};

export default NotFound;
