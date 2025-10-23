import React from "react";

export interface TerminalEntry {
  type: 'system' | 'command' | 'output' | 'error';
  content: string;
}

export interface CommandFunction {
  (args?: string[]): TerminalEntry | null;
}

export interface Commands {
  [key: string]: CommandFunction;
}

export interface SkillItem {
  name: string;
  level: number;
  icon: React.ReactNode; 
}

export interface SkillCategory {
  category: string;
  items: SkillItem[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  featured: boolean;
  metrics: string[];
  status: 'In Development' | 'Planning Phase' | 'Active';
}

export interface SocialLink {
  icon: React.ReactElement;
  url: string;
  download?: boolean;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export interface ContactInfo {
  icon: React.ReactElement | string;
  label: string;
  value: string;
}
