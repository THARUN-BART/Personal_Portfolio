import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900/50 border-t border-slate-700 py-6 sm:py-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-slate-400 mb-2 text-sm sm:text-base">
          © 2025 Tharun P. Built with React & Framer Motion
        </p>
        <p className="text-slate-500 text-xs sm:text-sm">
          Made with ❤️ in Chennai | Open to opportunities
        </p>
      </div>
    </footer>
  );
};

export default Footer;