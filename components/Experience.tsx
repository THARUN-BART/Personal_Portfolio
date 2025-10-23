import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { experienceData } from '@/data';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 sm:py-20 px-4 sm:px-6 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16"
        >
          Professional Experience
        </motion.h2>
        
        {experienceData.length > 0 ? (
          <div className="max-w-4xl mx-auto space-y-8">
            {experienceData.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700 p-6 sm:p-8 hover:border-blue-500/50 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Briefcase size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-white">{exp.role}</h3>
                      <span className="text-blue-400 font-semibold text-sm sm:text-base mt-1 sm:mt-0">{exp.period}</span>
                    </div>
                    <p className="text-lg text-blue-300 mb-4">{exp.company}</p>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-300">
                          <span className="text-blue-400 mt-1.5">•</span>
                          <span className="text-sm sm:text-base">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700 p-8">
              <Briefcase size={48} className="mx-auto text-slate-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Seeking Opportunities</h3>
              <p className="text-slate-400 mb-4">
                Currently looking for internship opportunities to gain professional experience and contribute to real-world projects.
              </p>
              <p className="text-slate-500 text-sm">
                Open to Flutter development, backend, and software engineering roles.
              </p>
            </div>
          </motion.div>
        )}

        {/* Project Leadership Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-12"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-blue-400">
            Project Leadership
          </h3>
          <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700 p-6 sm:p-8">
            <div className="text-center">
              <h4 className="text-xl font-bold text-white mb-3">RIT Club Management System</h4>
              <p className="text-slate-300 mb-4">
                Leading the development of a comprehensive Flutter application to manage 16 college clubs with real-time features, 
                automated attendance tracking, and OD management system.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">Flutter</span>
                <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">Firebase</span>
                <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">Real-time DB</span>
                <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm">In Development</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;