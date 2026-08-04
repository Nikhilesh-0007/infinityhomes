export interface Property {
  id: string;
  slug: string;
  name: string;
  type: 'plot' | 'villa' | 'apartment' | 'farmland' | 'commercial';
  location: string;
  startingPrice: number;
  priceDisplay: string;
  areaDisplay: string;
  approval: 'HMDA' | 'DTCP' | 'RERA' | null;
  amenities: string[];
  images: string[];
  brochureUrl: string;
  featured: boolean;
  description: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTimeMinutes: number;
  coverImage: string;
  tags: string[];
  featured: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: 1 | 2 | 3 | 4 | 5;
  review: string;
  photo: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  page: 'home' | 'properties' | 'contact' | 'general';
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  photo: string;
  bio: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
}
