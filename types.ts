export interface Product {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  price: number;
  category: Category;
  images: string[];
  dimensions: string;
  stock: number;
  reserved: number; // Items currently in carts
  sold: number;     // Items successfully purchased
  rating: number;
  reviews: number;
  isNew?: boolean;
  isBestSeller?: boolean;
}

export enum Category {
  SOFAS = 'Sofas',
  BEDS = 'Beds',
  DINING = 'Dining',
  WARDROBES = 'Wardrobes',
  TABLES = 'Coffee Tables',
  DECOR = 'Decor',
  OFFICE = 'Office',
}

export interface CartItem extends Product {
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  savedAddresses: Address[];
}

export interface Address {
  id: string;
  fullName: string;
  street: string;
  building: string;
  unit: string;
  emirate: 'Dubai' | 'Abu Dhabi' | 'Sharjah' | 'Ajman' | 'Ras Al Khaimah' | 'Fujairah' | 'Umm Al Quwain';
  area: string;
  phone: string;
  makani?: string;
}

export interface Order {
  id: string;
  date: string;
  status: 'Processing' | 'Shipped' | 'Out for Delivery' | 'Delivered';
  total: number;
  items: CartItem[];
  shippingAddress: Address;
}

export type ViewState = 
  | 'HOME' 
  | 'CATALOG' 
  | 'PRODUCT_DETAIL' 
  | 'CART' 
  | 'CHECKOUT' 
  | 'CONFIRMATION' 
  | 'TRACKING' 
  | 'ABOUT' 
  | 'CONTACT' 
  | 'ADMIN'
  | 'WISHLIST';