
import { Product, Category, Testimonial, GalleryItem } from './types';

export const BUSINESS_PHONE = "+917676197913"; 
export const BUSINESS_EMAIL = "hello@delightcoffee.com";

export const PRODUCTS: Product[] = [
  {
    id: 'arabica-aa',
    name: 'Arabica "AA" Grade Beans',
    category: Category.COFFEE,
    description: 'Rich aroma, smooth flavour — perfect for a clean, elegant cup.',
    image: 'https://res.cloudinary.com/dpotv2nen/image/upload/v1768451435/arabica-aa_q2e9lu.png?q=80&w=800&auto=format&fit=crop',
    hasRoastOptions: true
  },
  {
    id: 'arabica-peaberry',
    name: 'Arabica "Peaberry" Beans',
    category: Category.COFFEE,
    description: 'Naturally bold and vibrant, known for their intense flavour profile.',
    image: 'https://res.cloudinary.com/dpotv2nen/image/upload/v1768451434/Peaberry_ttuuw3.png?q=80&w=800&auto=format&fit=crop',
    hasRoastOptions: true
  },
  {
    id: 'robusta-bulk',
    name: 'Robusta "Bulk" Beans',
    category: Category.COFFEE,
    description: 'Strong, full-bodied beans ideal for a powerful, earthy brew.',
    image: 'https://res.cloudinary.com/dpotv2nen/image/upload/v1768451435/Bulk_h6eni3.png?q=80&w=800&auto=format&fit=crop',
    hasRoastOptions: true
  },
  {
    id: 'signature-blends',
    name: 'Signature Blends (Arabica + Robusta)',
    category: Category.BLENDS,
    description: 'Balanced blends crafted for versatility and depth.',
    image: 'https://res.cloudinary.com/dpotv2nen/image/upload/v1768451432/Signature_ipknfz.png?q=80&w=800&auto=format&fit=crop',
    hasRoastOptions: true,
    hasRatioOptions: true
  },
  {
    id: 'black-pepper',
    name: 'Whole Black Pepper',
    category: Category.SPICES,
    description: 'Single-estate, aromatic and freshly packed.',
    image: 'https://res.cloudinary.com/dpotv2nen/image/upload/v1768451437/blackpeppers_ia5bab.png?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'white-pepper',
    name: 'Premium Whole Cloves',
    category: Category.SPICES,
    description: 'Intensely aromatic and warm, these hand-selected cloves add depth to any dish.',
    image: 'https://res.cloudinary.com/dpotv2nen/image/upload/v1768451433/whiteppers_m9apnm.png?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'cardamom',
    name: 'Green Cardamom Pods',
    category: Category.SPICES,
    description: 'The "Queen of Spices", our green cardamom is handpicked for its vibrant color and floral aroma.',
    image: 'https://res.cloudinary.com/dpotv2nen/image/upload/v1768451437/cardamoms_qmestx.png?q=80&w=800&auto=format&fit=crop'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Anitha',
    city: 'Bengaluru',
    text: 'The aroma is incredible. Fresh roast makes a huge difference! Ordering via WhatsApp was so easy.'
  },
  {
    id: '2',
    name: 'Vikram',
    city: 'Mumbai',
    text: 'Best Peaberry I have had in a long time. The packaging is premium and the beans are very fresh.'
  },
  {
    id: '3',
    name: 'Rahul',
    city: 'Chennai',
    text: 'Great quality black pepper. You can tell it is single-estate. Authentic South Indian taste.'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    url: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=800',
    alt: 'Fresh coffee cherries',
    type: 'image'
  },
  {
    id: 'g2',
    url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800',
    alt: 'Coffee brewing',
    type: 'image'
  },
  {
    id: 'g3',
    url: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=800',
    alt: 'Roasted beans',
    type: 'image'
  },
  {
    id: 'g4',
    url: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=800',
    alt: 'Coffee grind',
    type: 'image'
  },
  {
    id: 'g5',
    url: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?q=80&w=800',
    alt: 'Whole pepper',
    type: 'image'
  },
  {
    id: 'g6',
    url: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800',
    alt: 'Packaging aesthetics',
    type: 'image'
  },
  {
    id: 'g7',
    url: 'https://res.cloudinary.com/dpotv2nen/video/upload/v1768453554/WhatsApp_Video_2026-01-14_at_8.39.52_PM_nwb7fg.mp4',
    alt: 'Harvest video',
    type: 'video'
  }
];

