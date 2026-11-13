export interface Project {
  id: string;
  number?: string;
  title: string;
  category: string;
  image: string;
  tag: string;
  description: string;
  year?: string;
  featured?: boolean;
  link?: string;
  techStack: string[];
  architectureHighlights: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  score: string;
  location: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  badge?: string;
  description?: string;
  iconType: 'code' | 'cloud' | 'award' | 'zap' | 'cpu';
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  author: string;
  image: string;
  excerpt: string;
  readTime: string;
  content: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar?: string;
  rating: number;
  content: string;
}

export interface FAQItem {
  id: string;
  number: string;
  question: string;
  answer: string;
}

export interface Award {
  id: string;
  title: string;
  achievement: string;
  year: string;
  iconType: 'flower' | 'ring' | 'lightning' | 'petals' | 'code' | 'award';
}

export interface CareerItem {
  id: string;
  company: string;
  period: string;
  image: string;
  role: string;
  description: string;
}

