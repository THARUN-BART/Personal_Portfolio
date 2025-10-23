import React from 'react';
import { motion } from 'framer-motion';

// Define the interface for aboutCards data
interface AboutCard {
  icon: string;
  title: string;
  content: string;
}

// aboutCards data directly in the component
const aboutCards: AboutCard[] = [
  {
    icon: "🎯",
    title: "Professional Summary",
    content: "Motivated CS&BS student with strong foundation in programming and software development. Strengthening DSA skills in C++ while developing real-world applications with Flutter and Firebase."
  },
  {
    icon: "💼",
    title: "Career Objective", 
    content: "Seeking an internship to apply and enhance programming and app development skills, while gaining hands-on experience in real-world projects at a top product-based company."
  },
  {
    icon: "🚀",
    title: "Current Focus",
    content: "Building scalable mobile applications, solving algorithmic challenges on LeetCode, and exploring DevOps technologies like Docker and Azure."
  }
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16"
        >
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {aboutCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700 p-6 sm:p-8 hover:border-blue-500/50 transition-colors"
            >
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{card.icon}</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{card.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm sm:text-base">{card.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;