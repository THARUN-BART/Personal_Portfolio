import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen } from 'lucide-react';
import { educationData, certificationsData } from '@/data';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16"
        >
          Education & Certifications
        </motion.h2>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700 p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <BookOpen size={20} />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">{educationData.degree}</h4>
                <p className="text-blue-300 mb-1">{educationData.institution}</p>
                <p className="text-slate-400 text-sm mb-3">{educationData.period}</p>
                <p className="text-green-400 font-semibold">CGPA: {educationData.cgpa}</p>
              </div>
              
              <div className="mt-4">
                <h5 className="text-lg font-semibold text-slate-300 mb-2">Relevant Coursework:</h5>
                <div className="flex flex-wrap gap-2">
                  {educationData.coursework.map((course, i) => (
                    <span key={i} className="bg-blue-500/10 border border-blue-500/30 text-blue-400 px-3 py-1 rounded-lg text-sm">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700 p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                <Award size={20} />
              </div>
              <h3 className="text-2xl font-bold">Certifications</h3>
            </div>
            
            <div className="space-y-4">
              {certificationsData.map((certification, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-slate-900/50 rounded-lg">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-slate-300 text-sm sm:text-base">{certification}</p>
                </div>
              ))}
            </div>

            {/* Languages */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-slate-300 mb-3">Languages</h4>
              <div className="flex gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-2">
                    <span className="text-white font-semibold">EN</span>
                  </div>
                  <span className="text-slate-400 text-sm">English</span>
                  <p className="text-blue-400 text-xs">Professional</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-2">
                    <span className="text-white font-semibold">TA</span>
                  </div>
                  <span className="text-slate-400 text-sm">Tamil</span>
                  <p className="text-green-400 text-xs">Native</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;