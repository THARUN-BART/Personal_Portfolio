import React from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

interface NavigationProps {
  onOpenTerminal: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onOpenTerminal }) => {
  return (
    <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-xl border-b border-slate-700/50 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-sm sm:text-base">
              TP
            </div>
            <span className="text-lg sm:text-xl font-bold">Tharun P</span>
          </motion.div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={onOpenTerminal}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-lg transition-colors text-sm"
            >
              <Terminal size={16} />
              <span>Terminal</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-slate-300 hover:text-white transition-colors relative group text-sm lg:text-base"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all"></span>
              </motion.a>
            ))}
          </div>

          {/* Desktop Terminal Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={onOpenTerminal}
            className="hidden md:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
          >
            <Terminal size={18} />
            <span>Terminal</span>
          </motion.button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;