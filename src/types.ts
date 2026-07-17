import React from 'react';

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
  label?: string;
}

export interface CaseStudyPrd {
  status: string;
  overview: string;
  goal: string;
  users: string;
  requirements: string[];
  metrics: string[];
  outOfScope: string;
}

export interface CaseStudyLink {
  label: string;
  url: string;
  icon: string;
}

export interface CaseStudy {
  title: string;
  year: string;
  tags: string[];
  problem: string;
  approach: string;
  outcome: string;
  prd?: CaseStudyPrd;
  externalLinks?: CaseStudyLink[];
}

export interface ExperienceItem {
  logo: string;
  dates: string;
  role: string;
  org: string;
  bullets: string[];
}

export interface ToolkitGroup {
  title: string;
  icon: string;
  hue: number;
  items: string[];
}

export interface EducationItem {
  logo: string;
  logoBg?: string;
  name: string;
  degreeLabel: string;
  gpa: string;
  location: string;
  dates: string;
  hue: number;
  tilt: string;
}

export interface ProcessStep {
  icon: string;
  label: string;
  desc: string;
}

export type Theme = 'light' | 'dark';
