export type artifact = {
  id: string;
  slug: string;
  name?: string;
  status?: 'available' | 'sold' | 'not for sale';
  image: string;
  alt: string;
  description: string;
};

export type dimensions = {
  height: number;
  width: number;
};
