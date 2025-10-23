import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, LinkedinIcon, Code, Download, ExternalLink, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { contactInfo, socialLinks } from '@/data';
import { EMAILJS_CONFIG, EmailTemplateParams } from '@/lib/emailjs';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Send email using EmailJS
      const templateParams: EmailTemplateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'tharunpoongavanam@gmail.com'
      };

      const result = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        EMAILJS_CONFIG.publicKey
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16"
        >
          Let's Connect
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {/* Left Side — Contact Info & Links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6"
          >
            {/* Contact Info */}
            <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700 p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Contact Info</h3>
              <div className="space-y-3 sm:space-y-4">
                {contactInfo.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      {typeof item.icon === 'string' ? (
                        <span className="text-lg">{item.icon}</span>
                      ) : (
                        item.icon
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-slate-400 text-xs sm:text-sm">{item.label}</p>
                      <p className="text-white text-sm sm:text-base truncate">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700 p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Quick Links</h3>
              <div className="space-y-2 sm:space-y-3">
                {socialLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    download={link.download}
                    target={link.download ? undefined : "_blank"}
                    rel={link.download ? undefined : "noopener noreferrer"}
                    className="flex items-center gap-2 sm:gap-3 text-slate-300 hover:text-blue-400 transition-colors text-sm sm:text-base"
                  >
                    {link.icon}
                    <span>{link.download ? 'Download Resume' : link.url.split('/').pop()}</span>
                    {!link.download && <ExternalLink size={12} />}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side — Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700 p-6 sm:p-8"
          >
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Send a Message</h3>
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 p-3 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-sm"
              >
                ✓ Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}
            
            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-sm"
              >
                ✗ Failed to send message. Please try again or contact me directly.
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div>
                <label className="block text-slate-300 mb-1 sm:mb-2 text-sm sm:text-base">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-slate-900 border border-slate-600 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-white focus:border-blue-500 focus:outline-none transition-colors text-sm sm:text-base"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-slate-300 mb-1 sm:mb-2 text-sm sm:text-base">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-slate-900 border border-slate-600 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-white focus:border-blue-500 focus:outline-none transition-colors text-sm sm:text-base"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-slate-300 mb-1 sm:mb-2 text-sm sm:text-base">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full bg-slate-900 border border-slate-600 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-white focus:border-blue-500 focus:outline-none transition-colors resize-none text-sm sm:text-base"
                  placeholder="What's on your mind?"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-2 sm:py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base flex items-center justify-center gap-2 ${
                  isSubmitting 
                    ? 'bg-slate-600 cursor-not-allowed' 
                    : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
