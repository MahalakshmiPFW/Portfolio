import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { SocialLink } from './types';

export const NAV_LINKS = [
  { name: 'Case Studies', href: '#work' },
  { name: 'Experience', href: '#experience' },
  { name: 'Toolkit', href: '#toolkit' },
  { name: 'Education', href: '#education' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'Email',
    url: 'mailto:mahalak@purdue.edu',
    icon: <Mail className="w-5 h-5" />,
    label: 'mahalak@purdue.edu',
  },
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/mahalakshmimahadevan/',
    icon: <Linkedin className="w-5 h-5" />,
    label: 'linkedin.com/in/mahalakshmimahadevan',
  },
  {
    platform: 'GitHub',
    url: 'https://github.com/MahalakshmiPFW',
    icon: <Github className="w-5 h-5" />,
    label: 'github.com/MahalakshmiPFW',
  },
];

export const RESUME_HREF = '/Resume.pdf';
