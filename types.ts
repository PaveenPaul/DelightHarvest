
export enum Category {
  COFFEE = 'Coffee',
  SPICES = 'Spices',
  BLENDS = 'Blends'
}

export type RoastOption = 'Medium Roast' | 'Dark Roast';
export type RatioOption = '70:30' | '80:20';

export interface Product {
  id: string;
  name: string;
  category: Category;
  description: string;
  image: string;
  hasRoastOptions?: boolean;
  hasRatioOptions?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  text: string;
}

export type GalleryMediaType = 'image' | 'video';
export interface GalleryItem {
  id: string;
  url: string;
  alt: string;
  type: GalleryMediaType;
}
