import React from 'react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { Project, Experience, SocialLink } from './types';

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Work', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/MahalakshmiPFW',
    icon: <Github className="w-5 h-5" />,
    label: 'github.com/MahalakshmiPFW'
  },
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/mahalakshmimahadevan/',
    icon: <Linkedin className="w-5 h-5" />,
    label: 'linkedin.com/in/mahalakshmi'
  },
  {
    platform: 'Email',
    url: 'mailto:sanjumahalakshmi12@gmail.com',
    icon: <Mail className="w-5 h-5" />,
    label: 'sanjumahalakshmi12@gmail.com'
  },
  {
    platform: 'Location',
    url: '#',
    icon: <MapPin className="w-5 h-5" />,
    label: 'Fort Wayne, IN'
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 'edu-2',
    role: 'Master of Science in Computer Science',
    company: 'Purdue University Fort Wayne',
    location: 'IN, U.S.A',
    period: 'August 2024 – May 2026',
    description: [
      'Focused on full-stack development, frontend engineering, and software design.',
      'Coursework includes Algorithm Design, Software Project Management, HCI, and Heuristic Problem Solving.',
      'Actively building production-ready web applications and preparing for entry-level software engineering roles.'
    ],
    skills: ['Software Project Management', 'Full-Stack Development','Algorithms', 'HCI'],
    logo: '/assets/images/PurdueLogo.svg',
  },

  {
    id: '1',
    role: 'Full-Stack Software Engineering Intern',
    company: 'ForOurLastNames',
    location: 'Tulsa, OK, U.S.A',
    period: 'June 2025 – August 2025',
    description: [
      'Enhanced React and TypeScript components for user onboarding and legal pages, delivering 9 production features.',
      'Resolved 4 critical UI/UX and responsive layout issues across web and mobile interfaces.',
      'Led mobile app deployment for iOS and Android, defining deployment workflows and release processes.',
      'Implemented automated testing using Playwright, improving code quality and reducing manual QA effort.'
    ],
    skills: ['React', 'TypeScript', 'Playwright', 'Mobile Deployment'],
    logo: '/assets/images/FOLN Logo.png',
  },

  {
    id: '2',
    role: 'Process Automation & Procurement Intern',
    company: 'Schneider Electric',
    location: 'Dubai, U.A.E',
    period: 'June 2024 – July 2024',
    description: [
      'Built a prototype supplier scorecard application to replace inefficient spreadsheet-based workflows.',
      'Implemented backend logic using Python with a Tkinter-based interface and MySQL data storage.'
    ],
    skills: ['Python', 'Tkinter', 'MySQL', 'Automation'],
    logo: '/assets/images/SE Logo1.png',
  },

  {
    id: '3',
    role: 'IT Intern, Team Lead & Research Intern',
    company: 'BetaIT',
    location: 'Dubai, U.A.E',
    period: 'July 2022 – Aug. 2022 & July 2023 – Sept. 2023',
    description: [
      'Led infrastructure-related initiatives using Google Cloud load balancers and virtualization platforms.',
      'Conducted research on Odoo ERP adoption for digital transformation projects.'
    ],
    skills: ['Google Cloud', 'Linux', 'ERP Research'],
    logo: '/assets/images/BetaIT.jpeg',
  },

  {
    id: '4',
    role: 'Python Bootcamp Assistant',
    company: 'American University of Sharjah',
    location: 'Sharjah, U.A.E',
    period: 'March 2023',
    description: [
      'Assisted in delivering a 2-day Python Bootcamp organized under the Associate Dean of Business.',
      'Introduced Python fundamentals, NumPy, and Pandas to over 30 participants.'
    ],
    skills: ['Python', 'Teaching', 'NumPy', 'Pandas'],
    logo: '/assets/images/AUS Logo.png',
  },

  {
    id: 'edu-1',
    role: 'Bachelor of Science in Computer Engineering',
    company: 'American University of Sharjah',
    location: 'Sharjah, U.A.E',
    period: 'August 2020 – December 2023',
    description: [
      'Built a strong foundation in computer engineering, programming, and systems.',
      'Completed coursework spanning software development, hardware systems, and applied engineering concepts.'
    ],
    skills: ['Programming', 'Engineering Fundamentals', 'Problem Solving'],
    logo: '/assets/images/AUS Logo.png',
  },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'SyllabusSync',
    description: 'AI-powered web application that converts course syllabi (text and PDF) into organized calendar tasks using Google Gemini 2.0 Flash API. Features native PDF processing and automatic semester-aware date detection.',
    tags: ['Next.js 15', 'React 19', 'Gemini 2.0 API', 'TailwindCSS v4', 'Vercel'],
    image: '/assets/images/SyllabusSync.png',
    demoLink: 'https://syllabus-to-calendar-app.vercel.app',
    repoLink: 'https://github.com/MahalakshmiPFW/Syllabus-to-Calendar-App',
    featured: true,
    status: 'Completed',
    year: '2025'
  },
  {
    id: '2',
    title: 'Gesture2Globe',
    description: 'Real-time ASL sign language recognition using MediaPipe to capture landmarks via webcam. Recognizes 30-40 common signs and converts them to English text with TTS output.',
    tags: ['Python', 'MediaPipe', 'OpenCV', 'Deep Learning'],
    image: '',
    featured: true,
    status: 'Completed',
    year: '2024-Present'
  },
  {
    id: '3',
    title: 'Pokémon Explorer',
    description: 'A React Native learning project exploring mobile development concepts using Expo.',
    tags: ['React Native', 'Expo', 'Mobile'],
    image: null,
    featured: false,
    status: 'Learning',
    year: '2024'
  },
  {
    id: '4',
    title: 'MastodonHub',
    description: 'Full-stack web application for campus club and event engagement. Achieved 95%+ backend test coverage with Cypress and built features like Contact Support with EmailJS.',
    tags: ['React', 'Django', 'SQLite', 'Cypress'],
    image: '/assets/images/MastodonHub.png',
    featured: false,
    status: 'Completed',
    year: '2025'
  },
  {
    id: '5',
    title: 'CampusMart',
    description: 'Peer-to-peer responsive ecommerce platform using the MERN stack for secure buying and selling of used items.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Vercel'],
    image: '/assets/images/CampusMart-logo.png',
    featured: false,
    status: 'Completed',
    year: '2024'
  },
];

export const SKILLS = [
  "React", "Next.js", "TypeScript", "Tailwind CSS", 
  "Python", "Java", "Git/Github", "Node.js", "PostgreSQL", 
  "MongoDB", "Express.js", "Cypress", "Playwright", "Jest", 
  "Figma", "Webflow", "UI/UX Design","React Native"
];
