import React from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string | null;
  demoLink?: string;
  repoLink?: string;
  featured: boolean;
  status?: 'Completed' | 'In Progress' | 'Learning';
  year: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
  logo?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
  label?: string;
}

export type Theme = 'light' | 'dark';
