import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  badge: string;
  badgeColor: string;
  badgeBg: string;
}

export interface StepItem {
  id: number;
  title: string;
  description: string;
}

export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  avatarBg: string;
  content: string;
}

export interface StatData {
  name: string;
  users: number;
  reservations: number;
}