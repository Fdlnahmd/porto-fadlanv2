
import { ArrowUp, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative w-full py-12 px-6 border-t border-white/5 bg-dark-bg mt-24">
      {/* Background radial accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[150px] bg-accent-indigo/5 blur-[80px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="font-display text-lg font-bold text-white tracking-tight">
          Fadlan<span className="text-accent-indigo">.</span>
          </div>
          <p className="text-gray-500 text-xs mt-1">
            Web Developer & NOC — Jakarta Barat.
          </p>
        </div>

        {/* Social Link circles */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Fdlnahmd"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-accent-indigo hover:bg-accent-indigo/10 transition-all duration-300 shadow-sm"
            aria-label="GitHub Profile"
          >
            <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/fadlan-achmad-frizal-7a548526a/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-accent-indigo hover:bg-accent-indigo/10 transition-all duration-300 shadow-sm"
            aria-label="LinkedIn Profile"
          >
            <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/fdlnahmd"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-accent-indigo hover:bg-accent-indigo/10 transition-all duration-300 shadow-sm"
            aria-label="Instagram Profile"
          >
            <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
          <a
            href="mailto:fdlnchmd@gmail.com"
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-accent-indigo hover:bg-accent-indigo/10 transition-all duration-300 shadow-sm"
            aria-label="Send Email"
          >
            <Mail size={18} />
          </a>
        </div>


        {/* Scroll to Top */}
        <button
          onClick={handleScrollToTop}
          className="w-10 h-10 rounded-lg bg-white/5 hover:bg-accent-indigo border border-white/5 hover:border-accent-indigo text-gray-400 hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm cursor-pointer group"
          aria-label="Back to top"
        >
          <ArrowUp size={18} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
        </button>
      </div>

      <div className="max-w-6xl mx-auto text-center border-t border-white/5 pt-6 mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        <div>
          &copy; {currentYear} Fadlan Achmad Frizal. All rights reserved.
        </div>
        <div className="flex gap-4">
          <span className="hover:text-white transition-colors duration-200">Build with React &amp; Tailwind</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
