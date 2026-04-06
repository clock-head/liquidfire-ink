export type artwork = {
  id: string;
  slug: string;
  title: string;
  year: string;
  medium: string;
  aspectRatio?: string;
  price?: string;
  status?: 'available' | 'sold' | 'not for sale';
  image: string;
  alt: string;
  description: string;
  featured?: boolean;
};

export type dimensions = {
  height: number;
  width: number;
};
