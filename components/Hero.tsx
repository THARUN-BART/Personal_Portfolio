import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Download, ChevronRight } from 'lucide-react';
import { socialLinks, statsData } from '@/data';

interface HeroProps {
  onOpenTerminal: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenTerminal }) => {
  return (
    <section id="home" className="pt-24 pb-16 sm:pt-32 sm:pb-20 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-block bg-blue-500/10 border border-blue-500/30 rounded-full px-3 py-1 sm:px-4 sm:py-2 mb-4 sm:mb-6">
              <span className="text-blue-400 text-sm sm:text-base">👋 Welcome to my portfolio</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Tharun P
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-slate-300 mb-4 sm:mb-6">
              Computer Science & Business Engineering Student
            </h2>
            <p className="text-base sm:text-lg text-slate-400 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Passionate about building scalable mobile applications with Flutter and solving problems through Data Structures and Algorithms.
              Aspiring Software Engineer with expertise in C++, Python, and full-stack development.
              Aspiring DevOps Engineer with hands-on experience in Docker, Jenkins, and Azure virtual machines.

            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
              <a href="#projects" className="bg-blue-600 hover:bg-blue-700 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-colors flex items-center gap-2 text-sm sm:text-base">
                View Projects <ChevronRight size={16} />
              </a>
              <a href="#contact" className="border border-blue-500 hover:bg-blue-500/10 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-colors flex items-center gap-2 text-sm sm:text-base">
                <Download size={16} /> Contact Me
              </a>
              <button 
                onClick={onOpenTerminal}
                className="border border-slate-600 hover:bg-slate-800 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-colors flex items-center gap-2 text-sm sm:text-base"
              >
                <Terminal size={16} /> Try Terminal
              </button>
            </div>
            <div className="flex gap-3 sm:gap-4 mt-6 sm:mt-8 justify-center lg:justify-start">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  download={social.download}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700 p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-4 sm:mb-6">
                <div className="flex gap-1 sm:gap-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-slate-400 text-xs sm:text-sm ml-2 sm:ml-4">~/tharun/stats</span>
              </div>
              <div className="space-y-4 sm:space-y-6">
                {statsData.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex items-center justify-between p-3 sm:p-4 bg-slate-900/50 rounded-lg"
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="text-xl sm:text-2xl">{stat.icon}</span>
                      <span className="text-slate-300 text-sm sm:text-base">{stat.label}</span>
                    </div>
                    <span className="text-xl sm:text-2xl font-bold text-blue-400">{stat.value}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;