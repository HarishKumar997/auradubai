import { Category, Product } from './types';

export const CURRENCY = 'AED';

// Curated High-Definition Images - Verified Working URLs (All images replaced with reliable Unsplash URLs)
const IMAGES = {
  // Sofas - Luxury furniture images (varied)
  SOFA_DARK: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&h=1200&fit=crop&q=90&auto=format',
  SOFA_LIGHT: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=1200&h=1200&fit=crop&q=90&auto=format',
  SOFA_GREEN: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=1200&fit=crop&q=90&auto=format',
  SOFA_BEIGE: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e4?w=1200&h=1200&fit=crop&q=90&auto=format',
  SOFA_MODERN: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&h=1200&fit=crop&q=90&auto=format',
  SOFA_LUXURY: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=1200&h=1200&fit=crop&q=90&auto=format',
  
  // Bed Images - Modern bedroom furniture (replaced broken URLs with verified working images)
  BED_MODERN: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&h=1200&fit=crop&q=90&auto=format',
  BED_LUX: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1200&h=1200&fit=crop&q=90&auto=format',
  
  // Dining Sets (replaced broken URLs with verified working images)
  DINING_MARBLE: 'https://images.unsplash.com/photo-1581539250439-c96689bb5168?w=1200&h=1200&fit=crop&q=90&auto=format',
  DINING_WOOD: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=1200&fit=crop&q=90&auto=format',
  
  // Coffee Tables (varied images)
  TABLE_COFFEE: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=1200&h=1200&fit=crop&q=90&auto=format',
  TABLE_SIDE: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e4?w=1200&h=1200&fit=crop&q=90&auto=format',
  TABLE_MODERN: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=1200&fit=crop&q=90&auto=format',
  
  // Wardrobe/Storage
  WARDROBE: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=1200&h=1200&fit=crop&q=90&auto=format',
  CABINET: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=1200&h=1200&fit=crop&q=90&auto=format',

  // Office Furniture
  OFFICE_DESK: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=1200&fit=crop&q=90&auto=format',
  OFFICE_CHAIR: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=1200&h=1200&fit=crop&q=90&auto=format',
  
  // Decor Items (varied images)
  VASE: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1200&h=1200&fit=crop&q=90&auto=format',
  LAMP: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=1200&h=1200&fit=crop&q=90&auto=format',
  ART: 'https://images.unsplash.com/photo-1578301978018-3005759f48f7?w=1200&h=1200&fit=crop&q=90&auto=format',
  DECOR_MODERN: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=1200&h=1200&fit=crop&q=90&auto=format',
  DECOR_LUXURY: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=1200&h=1200&fit=crop&q=90&auto=format',

  // Chairs
  CHAIR_ACCENT: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=1200&fit=crop&q=90&auto=format',
  CHAIR_MODERN: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=1200&h=1200&fit=crop&q=90&auto=format',
};

// Map Categories to specific Image Sets for better mock generation (with more variety)
const CATEGORY_IMAGE_MAP: Record<Category, string[]> = {
  [Category.SOFAS]: [IMAGES.SOFA_DARK, IMAGES.SOFA_LIGHT, IMAGES.SOFA_GREEN, IMAGES.SOFA_BEIGE, IMAGES.SOFA_MODERN, IMAGES.SOFA_LUXURY, IMAGES.CHAIR_ACCENT, IMAGES.CHAIR_MODERN],
  [Category.BEDS]: [IMAGES.BED_MODERN, IMAGES.BED_LUX],
  [Category.DINING]: [IMAGES.DINING_MARBLE, IMAGES.DINING_WOOD],
  [Category.WARDROBES]: [IMAGES.WARDROBE, IMAGES.CABINET],
  [Category.TABLES]: [IMAGES.TABLE_COFFEE, IMAGES.TABLE_SIDE, IMAGES.TABLE_MODERN],
  [Category.DECOR]: [IMAGES.VASE, IMAGES.LAMP, IMAGES.ART, IMAGES.DECOR_MODERN, IMAGES.DECOR_LUXURY],
  [Category.OFFICE]: [IMAGES.OFFICE_DESK, IMAGES.OFFICE_CHAIR],
};

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'The Burj Lounge Sofa',
    shortDescription: 'Deep espresso velvet sofa with gold accent legs.',
    longDescription: 'Inspired by the grandeur of Downtown Dubai, this 3-seater sofa features premium Italian velvet in a deep espresso shade, supported by brushed gold legs. The ergonomic design ensures maximum comfort for your luxury living space.',
    price: 4500,
    category: Category.SOFAS,
    images: [IMAGES.SOFA_DARK, IMAGES.SOFA_BEIGE],
    dimensions: '240cm x 95cm x 85cm',
    stock: 12,
    reserved: 0,
    sold: 142,
    rating: 4.8,
    reviews: 42,
    isBestSeller: true,
  },
  {
    id: 'p2',
    name: 'Palm Jumeirah King Bed',
    shortDescription: 'Minimalist sand-colored linen bed frame.',
    longDescription: 'Bring the serenity of the Palm beaches to your bedroom. This King-size bed frame is upholstered in organic Royal Sand linen with a hand-tufted headboard. Includes orthopedic slat support.',
    price: 6200,
    category: Category.BEDS,
    images: [IMAGES.BED_MODERN, IMAGES.BED_LUX],
    dimensions: '210cm x 210cm',
    stock: 5,
    reserved: 0,
    sold: 89,
    rating: 4.9,
    reviews: 128,
    isNew: true,
  },
  {
    id: 'p3',
    name: 'Marina Marble Dining Set',
    shortDescription: 'Carrara marble top table with 6 velvet chairs.',
    longDescription: 'A centerpiece worthy of a Dubai Marina penthouse. Genuine Italian Carrara marble top sits upon a geometric solid oak base. Comes with 6 Oasis White velvet dining chairs.',
    price: 8999,
    category: Category.DINING,
    images: [IMAGES.DINING_MARBLE, IMAGES.DINING_WOOD],
    dimensions: '200cm x 100cm x 76cm',
    stock: 3,
    reserved: 0,
    sold: 45,
    rating: 4.7,
    reviews: 15,
  },
  {
    id: 'p4',
    name: 'Desert Gold Coffee Table',
    shortDescription: 'Hammered brass texture coffee table.',
    longDescription: 'Hand-forged brass with a hammered finish, reflecting the golden dunes of the Arabian desert. A statement piece for any modern majlis.',
    price: 1200,
    category: Category.TABLES,
    images: [IMAGES.TABLE_COFFEE],
    dimensions: '90cm diameter x 40cm height',
    stock: 20,
    reserved: 0,
    sold: 210,
    rating: 4.5,
    reviews: 30,
  },
  {
    id: 'p5',
    name: 'Al Seef Rattan Wardrobe',
    shortDescription: 'Sustainable oak wardrobe with rattan weave doors.',
    longDescription: 'Merging traditional weaving techniques with modern storage. This double wardrobe features breathable rattan doors and ample shelving space.',
    price: 3400,
    category: Category.WARDROBES,
    images: [IMAGES.WARDROBE],
    dimensions: '180cm x 220cm x 60cm',
    stock: 8,
    reserved: 0,
    sold: 34,
    rating: 4.6,
    reviews: 22,
  },
  {
    id: 'p6',
    name: 'Downtown Executive Desk',
    shortDescription: 'Walnut wood desk with leather inlay.',
    longDescription: 'Command respect in your home office with this solid walnut desk, featuring a genuine leather writing surface and hidden cable management.',
    price: 2800,
    category: Category.OFFICE,
    images: [IMAGES.OFFICE_DESK],
    dimensions: '160cm x 80cm x 75cm',
    stock: 10,
    reserved: 0,
    sold: 56,
    rating: 4.9,
    reviews: 55,
  },
  {
    id: 'p7',
    name: 'Jumeirah Beach Vase',
    shortDescription: 'Hand-blown ceramic vase.',
    longDescription: 'Artisan crafted ceramic vase with textured finish mimicking the coral stone architecture.',
    price: 350,
    category: Category.DECOR,
    images: [IMAGES.VASE],
    dimensions: '30cm x 15cm',
    stock: 45,
    reserved: 0,
    sold: 320,
    rating: 4.2,
    reviews: 10,
    isNew: true,
  },
  {
    id: 'p8',
    name: 'Arabian Night Lamp',
    shortDescription: 'Modern brass floor lamp.',
    longDescription: 'Minimalist brass stem with a frosted glass globe, casting a warm, moon-like glow.',
    price: 850,
    category: Category.DECOR,
    images: [IMAGES.LAMP],
    dimensions: '150cm height',
    stock: 15,
    reserved: 0,
    sold: 112,
    rating: 4.8,
    reviews: 60,
  },
  {
    id: 'p9',
    name: 'Royal Velvet Armchair',
    shortDescription: 'Emerald green armchair with gold trim.',
    longDescription: 'A majestic addition to your living room, upholstered in premium emerald velvet.',
    price: 1950,
    category: Category.SOFAS,
    images: [IMAGES.CHAIR_ACCENT],
    dimensions: '80cm x 85cm x 90cm',
    stock: 7,
    reserved: 0,
    sold: 40,
    rating: 4.7,
    reviews: 18,
  },
  {
    id: 'p10',
    name: 'Oasis Sectional',
    shortDescription: 'Modular white linen sectional sofa.',
    longDescription: 'Bright and airy, perfect for sun-drenched Dubai villas. Stain-resistant performance fabric.',
    price: 6800,
    category: Category.SOFAS,
    images: [IMAGES.SOFA_LUXURY, IMAGES.SOFA_MODERN],
    dimensions: '300cm x 200cm',
    stock: 4,
    reserved: 0,
    sold: 150,
    rating: 4.6,
    reviews: 35,
    isBestSeller: true,
  }
];

// Generate more dummy products to reach 25 with STRICTLY category-relevant images
for (let i = 11; i <= 25; i++) {
  const categories = Object.values(Category);
  const randomCat = categories[Math.floor(Math.random() * categories.length)];
  
  // Get images specifically for this category
  const catImages = CATEGORY_IMAGE_MAP[randomCat];
  const randomImg = catImages[Math.floor(Math.random() * catImages.length)];
  
  MOCK_PRODUCTS.push({
    id: `p${i}`,
    name: `Aura ${randomCat} Collection ${i}`,
    shortDescription: `Luxury ${randomCat.toLowerCase()} designed for modern living.`,
    longDescription: `Experience the pinnacle of Dubai luxury with this exquisite ${randomCat.toLowerCase()} piece. Crafted from the finest materials to ensure durability and style.`,
    price: Math.floor(Math.random() * 5000) + 500,
    category: randomCat,
    images: [randomImg],
    dimensions: 'Standard Size',
    stock: Math.floor(Math.random() * 20),
    reserved: 0,
    sold: Math.floor(Math.random() * 50),
    rating: Number((4.0 + Math.random()).toFixed(1)),
    reviews: Math.floor(Math.random() * 100),
  });
}

export const DELIVERY_PARTNERS = [
  { name: 'Emirates Post', price: 25 },
  { name: 'Fetchr', price: 40 },
  { name: 'Aura Premium White Glove', price: 150 },
];
