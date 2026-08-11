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

export interface ExperienceRecommendation {
  label: string;
  url: string;
}

export interface ExperiencePosition {
  role: string;
  dates: string;
  bullets: string[];
}

export interface ExperienceItem {
  logo: string;
  dates: string;
  org: string;
  role?: string;
  bullets?: string[];
  positions?: ExperiencePosition[];
  recommendations?: ExperienceRecommendation[];
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

export interface CertificationItem {
  name: string;
  issuer: string;
  url?: string;
  date?: string;
  logo?: string;
}

export interface CommunityItem {
  logo: string;
  logoBg?: string;
  icon: string;
  org: string;
  role: string;
  dates: string;
  blurb: string;
  hue: number;
  tilt: string;
}

export interface ProcessStep {
  icon: string;
  label: string;
  desc: string;
}

export type Theme = 'light' | 'dark';
