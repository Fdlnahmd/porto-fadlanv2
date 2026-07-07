
import { motion } from 'framer-motion';
import { User, Award, CheckSquare, GraduationCap, Heart } from 'lucide-react';

const stats = [
  { icon: <Award className="text-accent-indigo" size={20} />, title: 'Universitas', value: 'Esa Unggul', desc: 'Jakarta, Sistem Informasi' },
  { icon: <CheckSquare className="text-accent-teal" size={20} />, title: 'Proyek Selesai', value: '6+ Proyek', desc: 'Web Dev & Media' },
  { icon: <GraduationCap className="text-accent-violet" size={20} />, title: 'Magang', value: '2x Internship', desc: 'NOC & Social Media Staff' },
  { icon: <Heart className="text-pink-500" size={20} />, title: 'Domisili', value: 'Jakarta Barat', desc: 'Kemanggisan, Palmerah' }
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-accent-teal uppercase tracking-wider mb-3"
        >
          <User size={12} />
          <span>Tentang Saya</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-3xl sm:text-4xl font-extrabold text-white"
        >
          Mengenal Diri Saya Lebih Dekat
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '60px' }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-1 bg-gradient-to-r from-accent-indigo to-accent-teal mx-auto mt-4 rounded-full"
        />
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Biography Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 glassmorphism p-8 rounded-2xl relative overflow-hidden group"
        >
          {/* Subtle glow border */}
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-accent-indigo to-accent-violet" />
          
          <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-4">
            Halo, saya Fadlan Achmad Frizal!
          </h3>
          
          <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
            <p>
              Saya adalah Lulusan <strong className="text-white">Rekayasa Perangkat Lunak (RPL)</strong> dari <a href="https://smktelkom-jkt.sch.id/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent-teal underline underline-offset-4 decoration-white/20 hover:decoration-accent-teal font-semibold transition-colors duration-200">SMK Telkom Shandy Putra Jakarta</a> dan saat ini sedang menempuh pendidikan S1 Sistem Informasi di <a href="https://www.esaunggul.ac.id/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent-indigo underline underline-offset-4 decoration-white/20 hover:decoration-accent-indigo font-semibold transition-colors duration-200">Universitas Esa Unggul</a>.
            </p>
            <p>
              Saya suka mencari tantangan baru dan memecahkan masalah untuk meningkatkan kemampuan diri. Memiliki minat mendalam pada <strong className="text-white">Problem Solving</strong>, coding, serta pembuatan website statis maupun dinamis. Saya selalu mencari peluang untuk berkembang menjadi tenaga profesional yang cerdas, yang terus mengasah soft skills maupun hard skills.
            </p>
            <p>
              Dengan bekal pengalaman magang sebagai <strong className="text-white">Network Operation Center (NOC) Staff</strong> di <a href="https://www.mtau.co.id/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent-teal underline underline-offset-4 decoration-white/20 hover:decoration-accent-teal font-semibold transition-colors duration-200">PT Mitra Teknologi Andalan Utama</a> dan <strong className="text-white">Media Social Support</strong> di <a href="https://mediaindonesia.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent-indigo underline underline-offset-4 decoration-white/20 hover:decoration-accent-indigo font-semibold transition-colors duration-200">Media Indonesia</a>, saya siap berkontribusi secara nyata di industri teknologi.
            </p>
          </div>

          {/* Quick info badges */}
          <div className="mt-8 flex flex-wrap gap-3">
            {['Web Developer', 'NOC Staff', 'Social Media'].map((item) => (
              <span key={item} className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/5 text-xs text-gray-300 font-medium">
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Key Stats Grid */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glassmorphism p-6 rounded-2xl flex flex-col justify-between hover:border-white/10 glow-card transition-all duration-300 transform hover:-translate-y-1 relative"
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-4">
                {stat.icon}
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-gray-500 font-bold block mb-1">
                  {stat.title}
                </span>
                <span className="font-display text-lg sm:text-xl font-bold text-white block mb-1">
                  {stat.value}
                </span>
                <span className="text-xs text-gray-400">
                  {stat.desc}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
