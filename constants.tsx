
import { Product, Category, Testimonial, GalleryItem } from './types';

export const BUSINESS_PHONE = "+911234567890"; // Example WhatsApp number
export const BUSINESS_EMAIL = "hello@delightcoffee.com";

export const PRODUCTS: Product[] = [
  {
    id: 'arabica-aa',
    name: 'Arabica "AA" Grade Beans',
    category: Category.COFFEE,
    description: 'Rich aroma, smooth flavour — perfect for a clean, elegant cup.',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=800&auto=format&fit=crop',
    hasRoastOptions: true
  },
  {
    id: 'arabica-peaberry',
    name: 'Arabica "Peaberry" Beans',
    category: Category.COFFEE,
    description: 'Naturally bold and vibrant, known for their intense flavour profile.',
    image: 'https://images.unsplash.com/photo-1580915411954-282cb1b0d780?q=80&w=800&auto=format&fit=crop',
    hasRoastOptions: true
  },
  {
    id: 'robusta-bulk',
    name: 'Robusta "Bulk" Beans',
    category: Category.COFFEE,
    description: 'Strong, full-bodied beans ideal for a powerful, earthy brew.',
    image: 'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?q=80&w=800&auto=format&fit=crop',
    hasRoastOptions: true
  },
  {
    id: 'signature-blends',
    name: 'Signature Blends (Arabica + Robusta)',
    category: Category.BLENDS,
    description: 'Balanced blends crafted for versatility and depth.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop',
    hasRoastOptions: true,
    hasRatioOptions: true
  },
  {
    id: 'black-pepper',
    name: 'Whole Black Pepper',
    category: Category.SPICES,
    description: 'Single-estate, aromatic and freshly packed.',
    image: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'cloves',
    name: 'Premium Whole Cloves',
    category: Category.SPICES,
    description: 'Intensely aromatic and warm, these hand-selected cloves add depth to any dish.',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'cardamom',
    name: 'Green Cardamom Pods',
    category: Category.SPICES,
    description: 'The "Queen of Spices", our green cardamom is handpicked for its vibrant color and floral aroma.',
    image: 'https://images.unsplash.com/photo-1599332159048-8426084476a8?q=80&w=800&auto=format&fit=crop'
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
  { id: 'g1', url: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=800', alt: 'Fresh coffee cherries' },
  { id: 'g2', url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800', alt: 'Coffee brewing' },
  { id: 'g3', url: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=800', alt: 'Roasted beans' },
  { id: 'g4', url: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=800', alt: 'Coffee grind' },
  { id: 'g5', url: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?q=80&w=800', alt: 'Whole pepper' },
  { id: 'g6', url: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800', alt: 'Packaging aesthetics' },
];
