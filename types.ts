import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  tag: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface PricingItem {
  id: string;
  service: string;
  price: string;
  includes: string;
}

export interface StepItem {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}
