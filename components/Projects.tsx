import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';
import { projectsData } from '@/data';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16"
        >
          Projects
        </motion.h2>
        <div className="grid gap-6 sm:gap-8">
          {projectsData.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700 overflow-hidden hover:border-blue-500/50 transition-all group"
            >
              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    {project.featured && (
                      <span className="inline-block bg-blue-500/20 border border-blue-500/50 text-blue-400 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm mb-2 sm:mb-3">
                        ⭐ Featured Project
                      </span>
                    )}
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-xl sm:text-2xl font-bold">{project.title}</h3>
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                        project.status === 'In Development' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                        project.status === 'Planning Phase' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' :
                        'bg-green-500/20 text-green-400 border border-green-500/30'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-slate-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{project.description}</p>
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="bg-blue-500/10 border border-blue-500/30 text-blue-400 px-2 py-1 sm:px-3 sm:py-1 rounded-lg text-xs sm:text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3 sm:gap-6 mb-4 sm:mb-6 flex-wrap">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center gap-1 sm:gap-2">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-slate-300 text-sm sm:text-base">{metric}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-colors text-sm sm:text-base"
                  >
                    <Github size={16} />
                    {project.title.includes('DSA') ? 'View Profile' : 'View on GitHub'}
                    <ExternalLink size={14} />
                  </a>
                  {project.status === 'In Development' && (
                    <span className="inline-flex items-center gap-2 bg-yellow-600/20 border border-yellow-500/30 text-yellow-400 px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base">
                      <Code size={16} />
                      In Development
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8 sm:mt-12"
        >
          <p className="text-slate-400 mb-4 text-sm sm:text-base">
            Passionate about turning ideas into reality through code. Currently focusing on mobile app development and DSA.
          </p>
          <p className="text-slate-500 text-xs sm:text-sm">
            More projects coming soon! Always learning and building.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;