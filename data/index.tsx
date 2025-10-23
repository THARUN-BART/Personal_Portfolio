import { SkillCategory, Project, SocialLink, Experience, ContactInfo } from '@/types';
import React from 'react';
import { 
  Github, 
  Code, 
  Download, 
  Mail, 
  Zap, 
  Coffee,
  Target,
  Wrench,
  Globe,
  Smartphone,
  Flame,
  GitBranch,
  Server,
  Rocket,
  RefreshCw,
  Container,
  Cloud,
  Settings,
  Link,
  Database,
  FileCode,
  MapPin,
  Phone,
  Award,
  Briefcase,
  Terminal
} from 'lucide-react';
import { 
  SiLinkedin, 
  SiPython, 
  SiCplusplus, 
  SiDart, 
  SiJavascript,
  SiFlutter,
  SiFirebase,
  SiGithub,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiDocker,
  SiJenkins,
  SiLinux,
  SiMongodb,
  SiSupabase
} from 'react-icons/si';

export const skillsData: SkillCategory[] = [
  {
    category: "Programming Languages",
    items: [
      { name: "C++", level: 85, icon: <SiCplusplus size={20} /> },
      { name: "Python", level: 80, icon: <SiPython size={20} /> },
      { name: "JavaScript", level: 75, icon: <SiJavascript size={20} /> },
      { name: "Dart", level: 75, icon: <SiDart size={20} /> },
      { name: "Java", level: 75, icon: <Coffee size={20} /> },
      { name: "C", level: 70, icon: <Wrench size={20} /> },
      { name: "HTML/CSS", level: 70, icon: <Globe size={20} /> }
    ]
  },
  {
    category: "Frameworks & Tools",
    items: [
      { name: "Flutter", level: 80, icon: <SiFlutter size={20} /> },
      { name: "Firebase", level: 75, icon: <SiFirebase size={20} /> },
      { name: "MongoDB", level: 70, icon: <SiMongodb size={20} /> },
      { name: "Supabase", level: 65, icon: <SiSupabase size={20} /> },
      { name: "Git/GitHub", level: 85, icon: <SiGithub size={20} /> },
      { name: "Node.js", level: 70, icon: <SiNodedotjs size={20} /> },
      { name: "Express.js", level: 65, icon: <SiExpress size={20} /> },
      { name: "Nest.js", level: 60, icon: <SiNestjs size={20} /> }
    ]
  },
  {
    category: "DevOps & Cloud",
    items: [
      { name: "Docker", level: 70, icon: <SiDocker size={20} /> },
      { name: "Azure VM", level: 70, icon: <Cloud size={20} /> },
      { name: "Linux Shell", level: 75, icon: <SiLinux size={20} /> },
      { name: "Jenkins", level: 50, icon: <SiJenkins size={20} /> },
      { name: "REST APIs", level: 75, icon: <Link size={20} /> },
      { name: "Firestore", level: 75, icon: <Database size={20} /> }
    ]
  }
];

export const projectsData: Project[] = [
  {
    title: "RIT Club Management App",
    description: "Developing a comprehensive club management application for college operations involving 16 clubs with advanced attendance tracking and On-Duty (OD) logic implementation. Features student functionality to follow clubs and join events, club head dashboard for publishing and managing events, automated restriction system, and real-time attendance tracking.",
    tech: ["Flutter", "Firebase", "Firestore", "REST APIs", "Real-time DB"],
    github: "https://github.com/THARUN-BART/RIT-Club.git",
    featured: false,
    metrics: ["16 Clubs", "Planned: 500+ Users", "Real-time Sync", "Automated OD System"],
    status: "Planning Phase"
  },
  {
    title: "Peer-to-Peer Matching App (Mache)",
    description: "Building a peer-to-peer matching application that helps students form the right teams based on availability, skills, and interests. Planning to integrate real-time collaboration features and design a smart matching algorithm to connect people with complementary skills.",
    tech: ["Flutter", "Firebase", "Real-time DB", "Matching Algorithm"],
    github: "https://github.com/THARUN-BART/Matche.git",
    featured: false,
    metrics: ["Smart Matching", "Real-time Chat", "Team Formation"],
    status: "Planning Phase"
  },
];

export const experienceData: Experience[] = [
  {
    role: "Flutter Developer Intern",
    company: "Data Science Center, RIT",
    period: "JUN 2025 - JULY 2025",
    responsibilities: [
      "Contributed to the development of Flutter-based applications supporting research and data-driven solutions",
      "Collaborated with Senior Developers and peers to integrate Firebase backend and APIs into apps",
      "Improved app performance and implemented UI/UX enhancements for smoother user interaction",
    ]
  }
];

export const educationData = {
  degree: "Bachelor of Technology - Computer Science and Business Systems",
  institution: "Rajalakshmi Institute of Technology, Chennai",
  period: "September 2024 – Present",
  cgpa: "8.44/10",
  coursework: [
    "Programming in C",
    "Python for Data Science", 
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Database Management Systems"
  ]
};

export const certificationsData = [
  "160 Days of Problem Solving - GeeksforGeeks",
  "Python (Basic) Certificate – HackerRank",
  "REST API creation (Backend development) – Let's Upgrade"
];

export const socialLinks: SocialLink[] = [
  { icon: <Github size={18} />, url: 'https://github.com/THARUN-BART' },
  { icon: <SiLinkedin size={18} />, url: 'https://linkedin.com/in/tharunbart8' },
  { icon: <Code size={18} />, url: 'https://leetcode.com/u/THARUN29112006/' },
  { icon: <Mail size={18} />, url: 'mailto:tharunpoogavanam@gmail.com', download: false }
];

export const aboutCards = [
  {
    icon: <Target size={24} />,
    title: "Professional Summary",
    content: "Motivated CS&BS student with strong foundation in programming and software development. Strengthening DSA skills in C++ while developing real-world applications with Flutter and Firebase."
  },
  {
    icon: <Briefcase size={24} />,
    title: "Career Objective", 
    content: "Seeking an internship to apply and enhance programming and app development skills, while gaining hands-on experience in real-world projects at a top product-based company."
  },
  {
    icon: <Rocket size={24} />,
    title: "Current Focus",
    content: "Building scalable mobile applications, solving algorithmic challenges on LeetCode, and exploring DevOps technologies like Docker and Azure."
  }
];

export const statsData = [
  { label: "LeetCode Problems", value: "100+", icon: <FileCode size={24} /> },
  { label: "Projects", value: "3+", icon: <Rocket size={24} /> },
  { label: "Certifications", value: "3", icon: <Award size={24} /> }
];

export const contactInfo: ContactInfo[] = [
  { icon: <Mail size={20} />, label: "Email", value: "tharunpoogavanam@gmail.com" },
  { icon: <Phone size={20} />, label: "Phone", value: "+91-8778893660" },
  { icon: <MapPin size={20} />, label: "Location", value: "Chennai, Tamil Nadu, India" }
];