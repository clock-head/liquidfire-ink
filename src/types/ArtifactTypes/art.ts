import type { artifact } from './artifact';

export interface art extends artifact {
  id: string;
  slug: string;
  name?: string;
  title?: string;
  year: string;
  medium: string;
  aspectRatio?: string;
  price?: string;
  status?: 'available' | 'sold' | 'not for sale';
  image: string;
  alt: string;
  description: string;
  featured?: boolean;
}
