
import { Product, Category, Testimonial, GalleryItem } from './types';

export const BUSINESS_PHONE = "+917676197913"; 
export const BUSINESS_EMAIL = "prathapgowda876@gmail.com";

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
    id: 'premium-white-pepper',
    name: 'Premium White Pepper',
    category: Category.SPICES,
    description: 'Milder and more delicate than black pepper, our hand-processed white pepper offers a subtle heat and earthy aroma, perfect for light-colored sauces and gourmet spice blends.',
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
    url: 'https://res.cloudinary.com/dpotv2nen/image/upload/v1768459664/parcel-pack_h0t5h0.jpg?q=80&w=800',
    alt: 'Fresh coffee Package',
    type: 'image'
  },
  {
    id: 'g2',
    url: 'https://res.cloudinary.com/dpotv2nen/image/upload/v1768457971/pumps_g7hnez.webp?q=80&w=800',
    alt: 'Coffee fruit on plant',
    type: 'image'
  },
  {
    id: 'g3',
    url: 'https://res.cloudinary.com/dpotv2nen/image/upload/v1768457976/harvesting_hlzvnt.webp?q=80&w=800',
    alt: 'harvesting coffee cherries',
    type: 'image'
  },
  {
    id: 'g4',
    url: 'https://res.cloudinary.com/dpotv2nen/image/upload/v1768451432/Signature_ipknfz.png?q=80&w=800',
    alt: 'Signature Blends coffee beans',
    type: 'image'
  },
  {
    id: 'g5',
    url: 'https://res.cloudinary.com/dpotv2nen/image/upload/v1768451437/blackpeppers_ia5bab.png?q=80&w=800',
    alt: 'Whole pepper',
    type: 'image'
  },
  {
    id: 'g6',
    url: 'https://res.cloudinary.com/dpotv2nen/image/upload/v1768457979/pepper-coffee-post_sfealg.png?q=80&w=800',
    alt: 'Packaging aesthetics',
    type: 'image'
  },
  {
    id: 'g7',
    url: 'https://res.cloudinary.com/dpotv2nen/video/upload/v1768453554/WhatsApp_Video_2026-01-14_at_8.39.52_PM_nwb7fg.mp4',
    alt: 'Harvest video',
    type: 'video'
  },
  {
    id: 'g8',
    url: 'https://res.cloudinary.com/dpotv2nen/image/upload/v1768457972/coffee-post_wougxl.png?q=80&w=800',
    alt: 'Packaging aesthetics',
    type: 'image'
  },
  {
    id: 'g9',
    url: 'https://res.cloudinary.com/dpotv2nen/image/upload/v1768457972/coffee-dry_trbn2v.webp?q=80&w=800',
    alt: 'Drying coffee beans',
    type: 'image'
  },
  {
    id: 'g10',
    url: 'https://res.cloudinary.com/dpotv2nen/image/upload/v1768451435/Bulk_h6eni3.png?q=80&w=800',
    alt: 'Roasted coffee beans',
    type: 'image'
  },
  {
    id: 'g11',
    url: 'https://res.cloudinary.com/dpotv2nen/image/upload/v1768457973/harvest-field_cpog7z.webp?q=80&w=800',
    alt: 'Harvest field',
    type: 'image'
  },
  {
    id: 'g12',
    url: 'https://res.cloudinary.com/dpotv2nen/video/upload/v1768459668/harvesting-place_edgw0k.mp4',
    alt: 'Harvesting video',
    type: 'video'
  },
  {
    id: 'g13',
    url: 'https://res.cloudinary.com/dpotv2nen/image/upload/v1768457972/pulps_collections_mly4o8.webp?q=80&w=800',
    alt: 'Coffee pulps collection',
    type: 'image'
  },
    {
    id: 'g14',
    url: 'https://res.cloudinary.com/dpotv2nen/image/upload/v1768451437/cardamoms_qmestx.png?q=80&w=800',
    alt: 'Cardamoms',
    type: 'image'
  },
    {
    id: 'g15',
    url: 'https://res.cloudinary.com/dpotv2nen/image/upload/v1768457971/red_pulps_ftqxxl.webp?q=80&w=800',
    alt: 'Red pulps',
    type: 'image'
  },
  {
    id: 'g16',
    url: 'https://res.cloudinary.com/dpotv2nen/image/upload/v1768460763/kopi-luwak_au8pna.webp?q=80&w=800',
    alt: 'Kopi Luwak coffee beans',
    type: 'image'
  },
];

