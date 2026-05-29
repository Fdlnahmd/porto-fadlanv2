import { useState, useEffect } from 'react';



// Import Components
import Navbar from './components/Navbar';
import Aurora from './components/Aurora';
import Footer from './components/Footer';

// Import Sections
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Monitor scroll for custom progress bar
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg text-gray-100 antialiased selection:bg-accent-indigo/30 selection:text-white font-sans overflow-x-hidden relative">
      
      {/* Top scroll progress bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-accent-indigo via-accent-violet to-accent-teal z-50 transition-all duration-100 ease-out shadow-[0_0_8px_rgba(99,102,241,0.5)]"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Atmospheric Aurora background glow */}
      <Aurora />

      {/* Floating Dock Navbar */}
      <Navbar />

      {/* Main content grid */}
      <main className="w-full relative z-10 pt-16">
        
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Skills Section */}
        <Skills />

        {/* Projects Section */}
        <Projects />

        {/* Experience Section */}
        <Experience />

        {/* Contact Section */}
        <Contact />

      </main>

      {/* Interactive Footer */}
      <Footer />
      
    </div>
  );
}

export default App;
