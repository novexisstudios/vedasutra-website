
import React from 'react';
import { Objective, Program, Milestone } from './types';

export const COLORS = {
  primary: '#1A3A6B', // Deep Blue
  secondary: '#5C6370', // Gear Grey
  accent: '#D4900A', // Amber Gold
  dark: '#080C14', // Brand Darkest
  light: '#FDFDFD', // Off White
};

export const CORE_OBJECTIVES: Objective[] = [
  {
    title: "Centres of Excellence",
    description: "Establishing state-of-the-art centres for vocational education and industrial training hubs.",
    icon: (
      <svg className="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    title: "Industry Apprenticeships",
    description: "Collaborative programs with industry for real-time technology exposure and applied learning.",
    icon: (
      <svg className="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: "Research Modules",
    description: "Designing research-oriented skill modules in engineering, automation, and manufacturing sectors.",
    icon: (
      <svg className="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  }
];

export const PROGRAMS_LIST: Program[] = [
  {
    id: "shiva-01",
    title: "SHIVA Academy",
    category: "Industrial",
    description: "Skilled Hi-Tech Industrial & Vocational Academy - our model polytechnic framework.",
    features: ["Industrial Pedagogy", "Applied Research Modules", "Precision Engineering"]
  },
  {
    id: "sip-01",
    title: "Skill Innovation Parks",
    category: "Technology",
    description: "Regional hubs focused on robotics, renewable energy, and sustainable manufacturing.",
    features: ["Robotics & Automation", "Green Energy Tech", "Digital Twin Framework"]
  },
  {
    id: "eth-01",
    title: "Industrial Ethics",
    category: "Ethics",
    description: "Certification programs emphasizing workplace professionalism, safety, and discipline.",
    features: ["Professional Integrity", "Industrial Safety", "Leadership Ethics"]
  }
];

export const VISION_MILESTONES: Milestone[] = [
  { 
    year: "2025", 
    title: "SHIVA Academy Launch", 
    description: "Establishment of the flagship Skilled Hi-Tech Industrial & Vocational Academy model.", 
    status: "In Progress",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200"
  },
  { 
    year: "2028", 
    title: "Skill Innovation Parks", 
    description: "Creation of specialized parks focusing on robotics and renewable energy across core industrial zones.", 
    status: "Planned",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200"
  },
  { 
    year: "2031", 
    title: "Industry Integration", 
    description: "Developing scaled apprenticeship models in collaboration with MSMEs and corporate sectors.", 
    status: "Planned",
    imageUrl: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200"
  },
  { 
    year: "2035", 
    title: "Global Linkages", 
    description: "Building international networks for knowledge exchange and global certification standards.", 
    status: "Planned",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200"
  }
];
