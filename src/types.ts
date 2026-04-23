

export interface Engine {
  id: string;
  title: string;
  description: string;
  stats?: string;
  iconName: 'TrendingUp' | 'CreditCard' | 'Clock' | 'Trophy';
}

export interface Product {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  imageUrl: string;
  reverse?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string[];
  imageUrl: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ContactInfo {
  address: string;
  email: string;
  phone: string;
  website: string;
  mapEmbedUrl: string;
}