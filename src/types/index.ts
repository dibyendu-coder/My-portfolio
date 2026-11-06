export type ThemeMode = 'dark' | 'neon' | 'pastel';

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  isMlhWinner?: boolean;
  isTodoPlaceholder?: boolean;
  todoNote?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  iconName: string;
  badgeColor: string;
  skillsCovered: string[];
  verificationUrl?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location?: string;
  description: string[];
  badge?: string;
  highlight?: boolean;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    icon?: string;
    superpower?: boolean;
  }[];
}

