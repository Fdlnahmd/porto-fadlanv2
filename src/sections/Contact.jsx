import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Mail, MapPin, Send, CheckCircle, AlertCircle, RefreshCw } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Live input validations
  const validateForm = () => {
    const tempErrors = {};
    if (!formData.name.trim()) {
      tempErrors.name = 'Nama lengkap wajib diisi';
    }
    
    if (!formData.email.trim()) {
      tempErrors.email = 'Email wajib diisi';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Format email tidak valid';
    }
    
    if (!formData.message.trim()) {
      tempErrors.message = 'Pesan wajib diisi';
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = 'Pesan minimal terdiri dari 10 karakter';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear specific error as user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: 'ae8b9891-3542-47bf-ae76-d6504f862096', // Web3Forms Access Key
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Pesan Baru Portofolio dari ${formData.name}`,
          from_name: 'Portofolio Fadlan'
        })
      });

      const resData = await response.json();

      if (resData.success) {
        setShowSuccessModal(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitError(resData.message || 'Gagal mengirim pesan. Silakan coba lagi.');
      }
    } catch {
      setSubmitError('Koneksi internet bermasalah. Silakan coba beberapa saat lagi.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto relative">
      {/* Background blur circle */}
      <div className="absolute top-[40%] right-[-10%] w-[300px] h-[300px] bg-accent-teal/5 blur-[80px] rounded-full pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-accent-indigo uppercase tracking-wider mb-3"
        >
          <MessageSquare size={12} />
          <span>Hubungi Saya</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-3xl sm:text-4xl font-extrabold text-white"
        >
          Mari Diskusikan Proyek Anda
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '60px' }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-1 bg-gradient-to-r from-accent-indigo to-accent-teal mx-auto mt-4 rounded-full"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Side: Contact Information Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 glassmorphism p-8 rounded-2xl border border-white/5 flex flex-col justify-between"
        >
          <div>
            <h3 className="font-display text-xl font-bold text-white mb-3">Informasi Kontak</h3>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-8">
              Punya ide menarik atau tawaran kerja sama? Silakan kirim pesan Anda, saya akan merespons pesan Anda secepat mungkin.
            </p>

            {/* Info Items */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-accent-indigo group-hover:bg-accent-indigo group-hover:text-white transition-all duration-300">
                  <Mail size={16} />
                </div>
                <div>
                  <span className="text-[10px] text-gray-500 uppercase tracking-wider block font-bold">Email</span>
                  <a href="mailto:fdlnchmd@gmail.com" className="text-xs sm:text-sm text-white hover:text-accent-indigo transition-colors">
                    fdlnchmd@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-accent-teal group-hover:bg-accent-teal group-hover:text-white transition-all duration-300">
                  <MapPin size={16} />
                </div>
                <div>
                  <span className="text-[10px] text-gray-500 uppercase tracking-wider block font-bold">Lokasi</span>
                  <span className="text-xs sm:text-sm text-white">
                    Jakarta Barat,<br />DKI Jakarta
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Social media footer inside info card */}
          <div className="border-t border-white/5 pt-8 mt-8 text-center sm:text-left">
            <span className="text-[10px] uppercase font-bold text-accent-indigo tracking-widest block mb-4">WHATSAPP</span>
            <a
              href="https://wa.me/qr/YZK2FNGZSIUHF1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-400 hover:text-white transition-colors"
            >
              (+62) 815-8435-0420
            </a>
          </div>
        </motion.div>

        {/* Right Side: Contact Form glassmorphism */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 glassmorphism p-8 rounded-2xl border border-white/5"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Name Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
                Nama Lengkap
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Masukkan nama Anda..."
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-sm text-white placeholder-gray-600 focus:outline-none transition-all duration-300 ${
                  errors.name 
                    ? 'border-red-500/50 focus:border-red-500/80 bg-red-500/5' 
                    : 'border-white/5 hover:border-white/10 focus:border-accent-indigo/40'
                }`}
              />
              {errors.name && (
                <span className="text-[11px] text-red-400 flex items-center gap-1 font-medium">
                  <AlertCircle size={10} />
                  {errors.name}
                </span>
              )}
            </div>

            {/* Email Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
                Alamat Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Contoh: nama@domain.com"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-sm text-white placeholder-gray-600 focus:outline-none transition-all duration-300 ${
                  errors.email 
                    ? 'border-red-500/50 focus:border-red-500/80 bg-red-500/5' 
                    : 'border-white/5 hover:border-white/10 focus:border-accent-indigo/40'
                }`}
              />
              {errors.email && (
                <span className="text-[11px] text-red-400 flex items-center gap-1 font-medium">
                  <AlertCircle size={10} />
                  {errors.email}
                </span>
              )}
            </div>

            {/* Message Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
                Pesan
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tulis detail proyek atau pertanyaan Anda di sini..."
                value={formData.message}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-sm text-white placeholder-gray-600 focus:outline-none transition-all duration-300 resize-none ${
                  errors.message 
                    ? 'border-red-500/50 focus:border-red-500/80 bg-red-500/5' 
                    : 'border-white/5 hover:border-white/10 focus:border-accent-indigo/40'
                }`}
              />
              {errors.message && (
                <span className="text-[11px] text-red-400 flex items-center gap-1 font-medium">
                  <AlertCircle size={10} />
                  {errors.message}
                </span>
              )}
            </div>

            {/* Submission Error Alert */}
            {submitError && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex items-center gap-2 font-medium">
                <AlertCircle size={14} />
                <span>{submitError}</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3.5 rounded-xl text-sm font-semibold text-white tracking-wide flex items-center justify-center gap-2 group transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer ${
                isSubmitting 
                  ? 'bg-accent-indigo/60 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-accent-indigo to-accent-violet hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]'
              }`}
            >
              {isSubmitting ? (
                <>
                  <RefreshCw size={16} className="animate-spin" />
                  <span>Mengirim Pesan...</span>
                </>
              ) : (
                <>
                  <Send size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  <span>Kirim Pesan</span>
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>

      {/* Success Animated Modal Popup */}
      <AnimatePresence>
        {showSuccessModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-dark-bg/80 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="max-w-md w-full glassmorphism p-8 rounded-2xl border border-accent-indigo/25 text-center shadow-2xl relative"
            >
              <div className="w-16 h-16 rounded-full bg-accent-teal/15 flex items-center justify-center mx-auto text-accent-teal mb-6 animate-[pulse_1.5s_infinite]">
                <CheckCircle size={32} />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-2">Pesan Terkirim!</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Terima kasih telah menghubungi saya. Pesan Anda telah berhasil dikirim ke email saya. Saya akan segera merespons Anda secepat mungkin!
              </p>
              <button
                onClick={() => setShowSuccessModal(false)}
                className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-sm transition-all duration-300 cursor-pointer"
              >
                Tutup Jendela
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
