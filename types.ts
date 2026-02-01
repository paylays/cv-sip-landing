import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ProductCategory {
  title: string;
  description: string;
  image: string;
  items: string[];
}

export interface DocumentItem {
  title: string;
  refNumber: string;
}

export interface Client {
  name: string;
  logo: string; // Placeholder url
}