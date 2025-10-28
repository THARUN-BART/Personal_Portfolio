"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, X } from 'lucide-react';
import { TerminalEntry, Commands } from '@/types';
import { useMobile } from '@/hooks/useMobile';

interface TerminalProps {
  isOpen: boolean;
  onClose: () => void;
  isMinimized: boolean;
  onMinimize: (minimized: boolean) => void;
}

const TerminalComponent: React.FC<TerminalProps> = ({
  isOpen,
  onClose,
  isMinimized,
}) => {
  const [terminalHistory, setTerminalHistory] = useState<TerminalEntry[]>([
    { type: 'system', content: 'BARTOS v1.0.0 - Type "help" for available commands' }
  ]);
  const [currentCommand, setCurrentCommand] = useState<string>('');
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const isMobile = useMobile();

  const commands: Commands = {
    help: (): TerminalEntry => ({
      type: 'output',
      content: `Available commands:
  about       - Display information about Tharun
  skills      - List technical skills and proficiency
  projects    - Show project portfolio
  experience  - Display work experience
  education   - Show educational background
  contact     - Get contact information
  resume      - Download resume
  github      - Show GitHub profile details
  linkedin    - Open LinkedIn profile
  leetcode    - Open LeetCode profile
  clear       - Clear terminal
  neofetch    - Display system information
  whoami      - Display current user
  ls          - List available sections
  cat [file]  - Display file contents (e.g., cat skills.txt)`
    }),

    about: (): TerminalEntry => ({
      type: 'output',
      content: `
╔════════════════════════════════════════════════════════════╗
║                    ABOUT THARUN P                          ║
╚════════════════════════════════════════════════════════════╝

Name: Tharun P
Role: Computer Science & Business Engineering Student
Location: Chennai, Tamil Nadu, India

I'm a passionate CS&BS student specializing in mobile app
development with Flutter and competitive programming.
Goal: Software Engineer at a top product-based company
`
    }),

    skills: (): TerminalEntry => ({
      type: 'output',
      content: `
┌─ TECHNICAL SKILLS ──────────────────────────────────────────┐
│ Programming: C++ (75%), Python (75%), Dart (75%), Java (75%)│
│              JS (60%)                                       │
│ Frameworks:  Flutter (70%), Firebase (75%), Git (85%)       │
│ DevOps:      Docker (70%), Azure VM (50%), Jenkins (50%)    │
│ Databases:   Firestore (75%), REST APIs (75%)               │
│ Scripting:   Linux Shell Scripting (70%)                    │
│ Tools:       GitHub (85%), VS Code, Postman, Figma          │
└─────────────────────────────────────────────────────────────┘
`
    }),

    projects: (): TerminalEntry => ({
      type: 'output',
      content: `
╔════════════════════════════════════════════════════════════╗
║                   PROJECT PORTFOLIO                        ║
╚════════════════════════════════════════════════════════════╝

[1] RIT Club Management App
    └─ Tech: Flutter, Firebase, Firestore
    └─ Manages 16 college clubs with real-time features

[2] Peer-to-Peer Matching App
    └─ Smart team formation based on skills
`
    }),

    experience: (): TerminalEntry => ({
      type: 'output',
      content: `
┌─ PROFESSIONAL EXPERIENCE ───────────────────────────────────┐
│ Flutter Developer Intern                                    │
│ Data Science Center, RIT (AUG 2025-JUL 2025)                │
│ • Developed Flutter apps with Firebase backend              │
│ • Improved app performance and UI/UX                        │
└─────────────────────────────────────────────────────────────┘
`
    }),

    education: (): TerminalEntry => ({
      type: 'output',
      content: `
╔════════════════════════════════════════════════════════════╗
║                       EDUCATION                            ║
╚════════════════════════════════════════════════════════════╝

B.Tech - Computer Science & Business Systems
Rajalakshmi Institute of Technology, Chennai
2024 - Present | CGPA: 8.44/10
`
    }),

    contact: (): TerminalEntry => ({
      type: 'output',
      content: `
╔════════════════════════════════════════════════════════════╗
║                   CONTACT INFORMATION                      ║
╚════════════════════════════════════════════════════════════╝

📧 Email: tharunpoogavanam@gmail.com
📱 Phone: +91-8778893660
📍 Location: Chennai, Tamil Nadu

GitHub: github.com/THARUN-BART
LinkedIn: linkedin.com/in/tharunbart8
LeetCode: leetcode.com/u/THARUN29112006
`
    }),

    // ✅ UPDATED RESUME COMMAND
    resume: (): TerminalEntry => {
      const resumeUrl = '/Tharun_P_Resume.pdf';

      // Trigger download
      const link = document.createElement('a');
      link.href = resumeUrl;
      link.download = 'Tharun_P_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      return {
        type: 'output',
        content: '📄 Downloading resume...'
      };
    },

    github: (): TerminalEntry => {
      window.open('https://github.com/THARUN-BART', '_blank');
      return {
        type: 'output',
        content: `
╔════════════════════════════════════════════════════════════╗
║                       GITHUB PROFILE                       ║
╚════════════════════════════════════════════════════════════╝

Username: THARUN-BART
Repositories: 25+
Highlights:
• Flutter Apps
• DSA Practice
• Data Science Projects

✓ Opening GitHub profile in a new tab...
`
      };
    },

    linkedin: (): TerminalEntry => {
      window.open('https://linkedin.com/in/tharunbart8', '_blank');
      return { type: 'output', content: '✓ Opening LinkedIn profile...' };
    },

    leetcode: (): TerminalEntry => {
      window.open('https://leetcode.com/u/THARUN29112006/', '_blank');
      return { type: 'output', content: '✓ Opening LeetCode profile...' };
    },

    clear: (): null => {
      setTerminalHistory([{ type: 'system', content: 'Terminal cleared. Type "help" for commands.' }]);
      return null;
    },

    neofetch: (): TerminalEntry => ({
      type: 'output',
      content: `
    THARUN@portfolio
    ────────────────
    OS: BARTOS v1.0
    Shell: bash 5.0
    Terminal: WebTerminal
    CPU: Problem Solver
    Memory: 100+ DSA Problems
    Uptime: Building Since 2023
`
    }),

    whoami: (): TerminalEntry => ({
      type: 'output',
      content: 'THARUN@portfolio - CS&BS Student | Flutter Developer | Problem Solver'
    }),

    ls: (): TerminalEntry => ({
      type: 'output',
      content: `about.txt  skills.txt  projects.txt  experience.txt  education.txt  contact.txt`
    }),

    cat: (args: string[] = []): TerminalEntry => {
      const fileMap: { [key: string]: string } = {
        'about.txt': 'about',
        'skills.txt': 'skills',
        'projects.txt': 'projects',
        'experience.txt': 'experience',
        'education.txt': 'education',
        'contact.txt': 'contact'
      };
      const file = args[0];
      if (file && fileMap[file] && commands[fileMap[file]]) {
        return commands[fileMap[file]]() as TerminalEntry;
      }
      return {
        type: 'error',
        content: `cat: ${file}: No such file or directory\nTry: ls (to list files)`
      };
    }
  };

  const handleCommand = (cmd: string): void => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const [command, ...args] = trimmedCmd.split(' ');
    setTerminalHistory(prev => [...prev, { type: 'command', content: `$ ${cmd}` }]);
    if (command === '') return;
    if (commands[command]) {
      const result = commands[command](args);
      if (result) setTerminalHistory(prev => [...prev, result]);
    } else {
      setTerminalHistory(prev => [...prev, {
        type: 'error',
        content: `Command not found: ${command}\nType 'help' for available commands`
      }]);
    }
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    if (currentCommand.trim()) {
      handleCommand(currentCommand);
      setCurrentCommand('');
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalHistory]);

  useEffect(() => {
    if (isOpen && inputRef.current) inputRef.current.focus();
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-slate-900 rounded-lg border border-slate-700 shadow-2xl overflow-hidden w-full max-w-2xl lg:max-w-4xl h-[400px] sm:h-[500px] lg:h-[600px]"
        >
          {/* Terminal Header */}
          <div className="bg-slate-800 border-b border-slate-700 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Terminal size={16} className="text-green-400" />
              <span className="font-mono text-sm">THARUN@portfolio:~$</span>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 hover:bg-red-500 rounded flex items-center justify-center transition-colors"
            >
              <X size={14} />
            </button>
          </div>

          {/* Terminal Content */}
          <div
            ref={terminalRef}
            className="h-[380px] lg:h-[480px] overflow-y-auto p-4 font-mono text-sm space-y-2"
          >
            {terminalHistory.map((entry, i) => (
              <div key={i} className={
                entry.type === 'command' ? 'text-green-400' :
                entry.type === 'error' ? 'text-red-400' :
                entry.type === 'system' ? 'text-blue-400' :
                'text-slate-300'
              }>
                <pre className="whitespace-pre-wrap break-words">{entry.content}</pre>
              </div>
            ))}
          </div>

          {/* Terminal Input */}
          <form onSubmit={handleSubmit} className="border-t border-slate-700 p-4">
            <div className="flex items-center gap-2">
              <span className="text-green-400 font-mono">$</span>
              <input
                ref={inputRef}
                type="text"
                value={currentCommand}
                onChange={(e) => setCurrentCommand(e.target.value)}
                className="flex-1 bg-transparent text-white font-mono outline-none text-sm"
                placeholder="Type 'help' for commands..."
                autoFocus
              />
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default TerminalComponent;
