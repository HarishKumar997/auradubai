import React, { useState, useEffect } from 'react';
import { ShoppingBag, Heart, User, Search, Menu, X, Star, ArrowRight, Instagram, Facebook, Twitter, MapPin, Phone, Mail, AlertCircle } from 'lucide-react';
import { Product, CartItem, Category } from '../types';
import { CURRENCY } from '../constants';

// --- Theme Colors ---
// Royal Sand: #E7D3B3
// Desert Gold: #C6A162
// Deep Espresso: #3A2E2A
// Oasis White: #FAF8F4

export const Button = ({ children, variant = 'primary', className = '', onClick, disabled }: any) => {
  const base = "px-6 py-3 transition-all duration-300 font-medium tracking-wide disabled:opacity-50 disabled:cursor-not-allowed";
  const variants = {
    primary: "bg-[#3A2E2A] text-white hover:bg-[#C6A162]",
    secondary: "border border-[#3A2E2A] text-[#3A2E2A] hover:bg-[#3A2E2A] hover:text-white",
    outline: "border border-white text-white hover:bg-white hover:text-[#3A2E2A]",
    ghost: "text-[#3A2E2A] hover:text-[#C6A162]"
  };
  
  return (
    <button onClick={onClick} disabled={disabled} className={`${base} ${variants[variant as keyof typeof variants]} ${className}`}>
      {children}
    </button>
  );
};

export const Header = ({ cartCount, onOpenCart, onNavigate, currentView }: any) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', view: 'HOME' },
    { name: 'Shop', view: 'CATALOG' },
    { name: 'About', view: 'ABOUT' },
    { name: 'Contact', view: 'CONTACT' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled || currentView !== 'HOME' ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div 
          onClick={() => onNavigate('HOME')}
          className={`font-serif text-2xl md:text-3xl font-bold tracking-widest cursor-pointer ${isScrolled || currentView !== 'HOME' ? 'text-[#3A2E2A]' : 'text-[#3A2E2A] md:text-white'}`}
        >
          AURA <span className="text-[#C6A162]">.</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => onNavigate(link.view)}
              className={`text-sm uppercase tracking-widest hover:text-[#C6A162] transition-colors ${isScrolled || currentView !== 'HOME' ? 'text-[#3A2E2A]' : 'text-white'}`}
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          <button onClick={() => onNavigate('CATALOG')} className={`hover:text-[#C6A162] ${isScrolled || currentView !== 'HOME' ? 'text-[#3A2E2A]' : 'text-white'}`}>
            <Search size={20} />
          </button>
          <button onClick={() => onNavigate('WISHLIST')} className={`hidden md:block hover:text-[#C6A162] ${isScrolled || currentView !== 'HOME' ? 'text-[#3A2E2A]' : 'text-white'}`}>
            <Heart size={20} />
          </button>
          <button onClick={() => onNavigate('ADMIN')} className={`hidden md:block hover:text-[#C6A162] ${isScrolled || currentView !== 'HOME' ? 'text-[#3A2E2A]' : 'text-white'}`}>
            <User size={20} />
          </button>
          <button onClick={onOpenCart} className={`relative hover:text-[#C6A162] ${isScrolled || currentView !== 'HOME' ? 'text-[#3A2E2A]' : 'text-white'}`}>
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#C6A162] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
          
          <button className="md:hidden text-[#3A2E2A]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
             {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg p-6 flex flex-col space-y-4 md:hidden">
          {navLinks.map((link) => (
             <button
             key={link.name}
             onClick={() => { onNavigate(link.view); setIsMobileMenuOpen(false); }}
             className="text-[#3A2E2A] text-lg font-medium"
           >
             {link.name}
           </button>
          ))}
        </div>
      )}
    </header>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-[#3A2E2A] text-[#E7D3B3] py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <h3 className="font-serif text-2xl font-bold mb-6 text-white">AURA LIVING</h3>
          <p className="text-sm opacity-80 leading-relaxed mb-6">
            Redefining luxury living in Dubai. We blend modern aesthetics with timeless Arabian elegance.
          </p>
          <div className="flex space-x-4">
            <Instagram size={20} className="hover:text-white cursor-pointer" />
            <Facebook size={20} className="hover:text-white cursor-pointer" />
            <Twitter size={20} className="hover:text-white cursor-pointer" />
          </div>
        </div>

        <div>
          <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Shop</h4>
          <ul className="space-y-3 text-sm opacity-80">
            <li className="hover:text-white cursor-pointer">New Arrivals</li>
            <li className="hover:text-white cursor-pointer">Best Sellers</li>
            <li className="hover:text-white cursor-pointer">Furniture</li>
            <li className="hover:text-white cursor-pointer">Decor</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Support</h4>
          <ul className="space-y-3 text-sm opacity-80">
            <li className="hover:text-white cursor-pointer">Track Order</li>
            <li className="hover:text-white cursor-pointer">Shipping & Delivery</li>
            <li className="hover:text-white cursor-pointer">Returns & Exchange</li>
            <li className="hover:text-white cursor-pointer">Contact Us</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Contact</h4>
          <ul className="space-y-4 text-sm opacity-80">
            <li className="flex items-start">
              <MapPin size={16} className="mr-3 mt-1 text-[#C6A162]" />
              <span>Unit 402, Design District,<br/>Dubai, UAE</span>
            </li>
            <li className="flex items-center">
              <Phone size={16} className="mr-3 text-[#C6A162]" />
              <span>+971 4 123 4567</span>
            </li>
            <li className="flex items-center">
              <Mail size={16} className="mr-3 text-[#C6A162]" />
              <span>concierge@auraliving.ae</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 mt-12 pt-8 text-center text-xs opacity-50">
        © 2024 Aura Living Dubai. All rights reserved.
      </div>
    </footer>
  );
};

export const ProductCard = ({ product, onViewProduct }: { product: Product, onViewProduct: (p: Product) => void }) => {
  const isOutOfStock = product.stock === 0;
  const isLowStock = product.stock > 0 && product.stock <= 5;

  return (
    <div className={`group relative bg-white cursor-pointer ${isOutOfStock ? 'opacity-75' : ''}`} onClick={() => onViewProduct(product)}>
      <div className="relative overflow-hidden bg-gray-100 aspect-[4/5] mb-4">
        <img 
          src={product.images[0]} 
          alt={product.name} 
          className={`w-full h-full object-cover transition-transform duration-700 ${isOutOfStock ? 'grayscale' : 'group-hover:scale-105'}`}
        />
        
        {/* Status Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {isOutOfStock && (
            <span className="bg-gray-800 text-white text-xs px-2 py-1 uppercase tracking-wider">Sold Out</span>
          )}
          {!isOutOfStock && product.isNew && (
            <span className="bg-[#3A2E2A] text-white text-xs px-2 py-1 uppercase tracking-wider">New</span>
          )}
          {!isOutOfStock && product.isBestSeller && (
            <span className="bg-[#C6A162] text-white text-xs px-2 py-1 uppercase tracking-wider">Best Seller</span>
          )}
        </div>

        {/* Low Stock Indicator */}
        {!isOutOfStock && isLowStock && (
          <div className="absolute bottom-4 right-4 bg-red-50 text-red-600 px-2 py-1 text-[10px] font-medium uppercase tracking-wider border border-red-100 flex items-center shadow-sm">
            <AlertCircle size={10} className="mr-1" /> Only {product.stock} left
          </div>
        )}
        
        {/* Hover Quick Action */}
        {!isOutOfStock && (
          <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
             <button className="w-full bg-white/90 backdrop-blur text-[#3A2E2A] py-3 text-sm font-medium hover:bg-[#3A2E2A] hover:text-white transition-colors">
               Quick View
             </button>
          </div>
        )}
      </div>

      <h3 className="font-serif text-lg text-[#3A2E2A] mb-1">{product.name}</h3>
      <div className="flex justify-between items-center">
        <span className="text-[#C6A162] font-medium">{CURRENCY} {product.price.toLocaleString()}</span>
        <div className="flex items-center text-xs text-gray-400">
          <Star size={12} className="text-[#C6A162] mr-1" fill="#C6A162" />
          {product.rating}
        </div>
      </div>
    </div>
  );
};

export const CartSidebar = ({ isOpen, onClose, cart, onRemove, onUpdateQty, onCheckout }: any) => {
  const total = cart.reduce((acc: number, item: CartItem) => acc + (item.price * item.quantity), 0);

  return (
    <div className={`fixed inset-0 z-[60] ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      
      {/* Panel */}
      <div className={`absolute top-0 right-0 h-full w-full md:w-[400px] bg-white shadow-2xl transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col`}>
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h2 className="font-serif text-xl text-[#3A2E2A]">Shopping Bag ({cart.reduce((a:number,b:any) => a+b.quantity,0)})</h2>
          <button onClick={onClose}><X size={24} className="text-gray-400 hover:text-red-500" /></button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cart.length === 0 ? (
            <div className="text-center text-gray-400 mt-20">
              <ShoppingBag size={48} className="mx-auto mb-4 opacity-20" />
              <p>Your bag is empty.</p>
            </div>
          ) : (
            cart.map((item: CartItem) => (
              <div key={item.id} className="flex gap-4 animate-fadeIn">
                <img src={item.images[0]} alt={item.name} className="w-20 h-24 object-cover bg-gray-50" />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium text-[#3A2E2A] text-sm">{item.name}</h3>
                    <button onClick={() => onRemove(item.id)} className="text-gray-300 hover:text-red-500"><X size={16} /></button>
                  </div>
                  <p className="text-[#C6A162] text-sm mt-1">{CURRENCY} {item.price.toLocaleString()}</p>
                  
                  <div className="flex items-center mt-3 border border-gray-200 w-max">
                    <button 
                      className="px-2 py-1 text-gray-500 hover:bg-gray-50"
                      onClick={() => onUpdateQty(item.id, item.quantity - 1)}
                    >-</button>
                    <span className="px-2 text-sm text-[#3A2E2A]">{item.quantity}</span>
                    <button 
                      className="px-2 py-1 text-gray-500 hover:bg-gray-50"
                      onClick={() => onUpdateQty(item.id, item.quantity + 1)}
                    >+</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 bg-[#FAF8F4] border-t border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-gray-500">Subtotal</span>
              <span className="font-serif text-xl text-[#3A2E2A]">{CURRENCY} {total.toLocaleString()}</span>
            </div>
            <p className="text-xs text-gray-400 mb-6">Shipping & taxes calculated at checkout.</p>
            <Button className="w-full" onClick={() => { onClose(); onCheckout(); }}>CHECKOUT</Button>
          </div>
        )}
      </div>
    </div>
  );
};