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
  const base = "px-8 py-3.5 transition-all duration-300 font-medium tracking-wide disabled:opacity-50 disabled:cursor-not-allowed rounded-sm relative overflow-hidden group";
  const variants = {
    primary: "bg-[#3A2E2A] text-white hover:bg-[#C6A162] hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0",
    secondary: "border-2 border-[#3A2E2A] text-[#3A2E2A] hover:bg-[#3A2E2A] hover:text-white hover:shadow-md",
    outline: "border-2 border-white text-white hover:bg-white hover:text-[#3A2E2A] hover:shadow-lg backdrop-blur-sm",
    ghost: "text-[#3A2E2A] hover:text-[#C6A162] hover:bg-[#FAF8F4]"
  };
  
  return (
    <button 
      onClick={onClick} 
      disabled={disabled} 
      className={`${base} ${variants[variant as keyof typeof variants]} ${className}`}
    >
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && (
        <span className="absolute inset-0 bg-gradient-to-r from-[#C6A162] to-[#E7D3B3] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      )}
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
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled || currentView !== 'HOME' ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 lg:px-8 flex justify-between items-center max-w-7xl">
        {/* Logo */}
        <div 
          onClick={() => onNavigate('HOME')}
          className={`font-serif text-2xl md:text-3xl font-bold tracking-widest cursor-pointer transition-all duration-300 hover:scale-105 ${isScrolled || currentView !== 'HOME' ? 'text-[#3A2E2A]' : 'text-[#3A2E2A] md:text-white'}`}
        >
          AURA <span className="text-[#C6A162]">.</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-10">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => onNavigate(link.view)}
              className={`relative text-sm uppercase tracking-widest font-medium transition-all duration-300 group ${isScrolled || currentView !== 'HOME' ? 'text-[#3A2E2A]' : 'text-white'}`}
            >
              {link.name}
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-[#C6A162] transition-all duration-300 group-hover:w-full ${currentView === link.view ? 'w-full' : ''}`}></span>
            </button>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <button 
            onClick={() => onNavigate('CATALOG')} 
            className={`p-2 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110 ${isScrolled || currentView !== 'HOME' ? 'text-[#3A2E2A] hover:bg-gray-100' : 'text-white'}`}
            aria-label="Search"
          >
            <Search size={20} />
          </button>
          <button 
            onClick={() => onNavigate('WISHLIST')} 
            className={`hidden md:block p-2 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110 ${isScrolled || currentView !== 'HOME' ? 'text-[#3A2E2A] hover:bg-gray-100' : 'text-white'}`}
            aria-label="Wishlist"
          >
            <Heart size={20} />
          </button>
          <button 
            onClick={() => onNavigate('ADMIN')} 
            className={`hidden md:block p-2 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110 ${isScrolled || currentView !== 'HOME' ? 'text-[#3A2E2A] hover:bg-gray-100' : 'text-white'}`}
            aria-label="Account"
          >
            <User size={20} />
          </button>
          <button 
            onClick={onOpenCart} 
            className={`relative p-2 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110 ${isScrolled || currentView !== 'HOME' ? 'text-[#3A2E2A] hover:bg-gray-100' : 'text-white'}`}
            aria-label="Shopping Cart"
          >
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#C6A162] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                {cartCount > 9 ? '9+' : cartCount}
              </span>
            )}
          </button>
          
          <button 
            className={`md:hidden p-2 rounded-full transition-all duration-300 ${isScrolled || currentView !== 'HOME' ? 'text-[#3A2E2A]' : 'text-white'}`} 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
             {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`absolute top-full left-0 w-full bg-white/98 backdrop-blur-md shadow-xl transition-all duration-300 md:hidden ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <div className="p-6 flex flex-col space-y-2">
          {navLinks.map((link) => (
             <button
             key={link.name}
             onClick={() => { onNavigate(link.view); setIsMobileMenuOpen(false); }}
             className={`text-left text-[#3A2E2A] text-lg font-medium py-3 px-4 rounded-lg hover:bg-[#FAF8F4] transition-all duration-200 ${currentView === link.view ? 'bg-[#FAF8F4] text-[#C6A162]' : ''}`}
           >
             {link.name}
           </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-[#3A2E2A] text-[#E7D3B3] pt-16 pb-8">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-1">
            <h3 className="font-serif text-3xl font-bold mb-6 text-white">AURA <span className="text-[#C6A162]">.</span></h3>
            <p className="text-sm opacity-90 leading-relaxed mb-6 max-w-xs">
              Redefining luxury living in Dubai. We blend modern aesthetics with timeless Arabian elegance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-[#C6A162] transition-all duration-300 hover:scale-110" aria-label="Instagram">
                <Instagram size={18} className="text-white" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-[#C6A162] transition-all duration-300 hover:scale-110" aria-label="Facebook">
                <Facebook size={18} className="text-white" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-[#C6A162] transition-all duration-300 hover:scale-110" aria-label="Twitter">
                <Twitter size={18} className="text-white" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Shop</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-[#C6A162] transition-all duration-200 cursor-pointer block">New Arrivals</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-[#C6A162] transition-all duration-200 cursor-pointer block">Best Sellers</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-[#C6A162] transition-all duration-200 cursor-pointer block">Furniture</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-[#C6A162] transition-all duration-200 cursor-pointer block">Decor</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Support</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-[#C6A162] transition-all duration-200 cursor-pointer block">Track Order</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-[#C6A162] transition-all duration-200 cursor-pointer block">Shipping & Delivery</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-[#C6A162] transition-all duration-200 cursor-pointer block">Returns & Exchange</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-[#C6A162] transition-all duration-200 cursor-pointer block">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start group">
                <MapPin size={18} className="mr-3 mt-0.5 text-[#C6A162] flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="opacity-80 group-hover:opacity-100 transition-opacity">Unit 402, Design District,<br/>Dubai, UAE</span>
              </li>
              <li className="flex items-center group">
                <Phone size={18} className="mr-3 text-[#C6A162] flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="opacity-80 group-hover:opacity-100 transition-opacity">+971 4 123 4567</span>
              </li>
              <li className="flex items-center group">
                <Mail size={18} className="mr-3 text-[#C6A162] flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="opacity-80 group-hover:opacity-100 transition-opacity">concierge@auraliving.ae</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs opacity-60">
          <p>© 2024 Aura Living Dubai. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#C6A162] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#C6A162] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const ProductCard = ({ product, onViewProduct }: { product: Product, onViewProduct: (p: Product) => void }) => {
  const isOutOfStock = product.stock === 0;
  const isLowStock = product.stock > 0 && product.stock <= 5;

  return (
    <div 
      className={`group relative bg-white cursor-pointer rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${isOutOfStock ? 'opacity-75' : ''}`} 
      onClick={() => onViewProduct(product)}
    >
      <div className="relative overflow-hidden bg-gray-100 aspect-[4/5] mb-4 rounded-t-lg">
        {product.images && product.images.length > 0 ? (
          <img 
            src={product.images[0]} 
            alt={product.name} 
            className={`w-full h-full object-cover transition-all duration-700 ${isOutOfStock ? 'grayscale' : 'group-hover:scale-110 group-hover:brightness-105'}`}
            loading="lazy"
            style={{ minHeight: '100%', minWidth: '100%' }}
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&h=1200&fit=crop&q=90&auto=format';
            }}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
            <span className="text-gray-400 text-sm">No Image</span>
          </div>
        )}
        
        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Status Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
          {isOutOfStock && (
            <span className="bg-gray-900/90 text-white text-xs px-3 py-1.5 uppercase tracking-wider rounded-full backdrop-blur-sm shadow-lg">Sold Out</span>
          )}
          {!isOutOfStock && product.isNew && (
            <span className="bg-[#3A2E2A]/90 text-white text-xs px-3 py-1.5 uppercase tracking-wider rounded-full backdrop-blur-sm shadow-lg">New</span>
          )}
          {!isOutOfStock && product.isBestSeller && (
            <span className="bg-[#C6A162]/90 text-white text-xs px-3 py-1.5 uppercase tracking-wider rounded-full backdrop-blur-sm shadow-lg">Best Seller</span>
          )}
        </div>

        {/* Low Stock Indicator */}
        {!isOutOfStock && isLowStock && (
          <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm text-red-600 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full flex items-center shadow-lg border border-red-100 z-10">
            <AlertCircle size={12} className="mr-1.5" /> Only {product.stock} left
          </div>
        )}
        
        {/* Hover Quick Action */}
        {!isOutOfStock && (
          <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 z-20">
             <button 
               className="w-full bg-white/95 backdrop-blur-md text-[#3A2E2A] py-3 text-sm font-semibold uppercase tracking-wider hover:bg-[#3A2E2A] hover:text-white transition-all duration-300 rounded-lg shadow-lg"
               onClick={(e) => {
                 e.stopPropagation();
                 onViewProduct(product);
               }}
             >
               Quick View
             </button>
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-serif text-lg text-[#3A2E2A] mb-2 line-clamp-2 group-hover:text-[#C6A162] transition-colors duration-300">{product.name}</h3>
        <div className="flex justify-between items-center">
          <span className="text-[#C6A162] font-bold text-lg">{CURRENCY} {product.price.toLocaleString()}</span>
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <Star size={14} className="text-[#C6A162]" fill="#C6A162" />
            <span className="font-medium">{product.rating}</span>
            <span className="text-gray-400">({product.reviews})</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CartSidebar = ({ isOpen, onClose, cart, onRemove, onUpdateQty, onCheckout }: any) => {
  const total = cart.reduce((acc: number, item: CartItem) => acc + (item.price * item.quantity), 0);
  const itemCount = cart.reduce((a: number, b: any) => a + b.quantity, 0);

  return (
    <div className={`fixed inset-0 z-[60] ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      
      {/* Panel */}
      <div className={`absolute top-0 right-0 h-full w-full md:w-[450px] bg-white shadow-2xl transform transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col`}>
        {/* Header */}
        <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-[#FAF8F4] to-white flex justify-between items-center">
          <div>
            <h2 className="font-serif text-2xl text-[#3A2E2A] mb-1">Shopping Bag</h2>
            <p className="text-sm text-gray-500">{itemCount} {itemCount === 1 ? 'item' : 'items'}</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition-all duration-200 hover:scale-110"
            aria-label="Close cart"
          >
            <X size={24} className="text-gray-500 hover:text-red-500 transition-colors" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cart.length === 0 ? (
            <div className="text-center text-gray-400 mt-20">
              <div className="mb-6">
                <ShoppingBag size={64} className="mx-auto opacity-20" />
              </div>
              <p className="text-lg font-medium mb-2">Your bag is empty</p>
              <p className="text-sm opacity-75">Start adding items to your cart</p>
            </div>
          ) : (
            cart.map((item: CartItem) => (
              <div key={item.id} className="flex gap-4 p-4 rounded-lg hover:bg-gray-50 transition-all duration-200 group animate-fadeIn">
                <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                  <img 
                    src={item.images[0]} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium text-[#3A2E2A] text-sm line-clamp-2 pr-2">{item.name}</h3>
                    <button 
                      onClick={() => onRemove(item.id)} 
                      className="text-gray-300 hover:text-red-500 transition-colors p-1 hover:bg-red-50 rounded-full flex-shrink-0"
                      aria-label="Remove item"
                    >
                      <X size={16} />
                    </button>
                  </div>
                  <p className="text-[#C6A162] font-semibold text-sm mb-3">{CURRENCY} {item.price.toLocaleString()}</p>
                  
                  <div className="flex items-center border border-gray-200 rounded-lg w-max overflow-hidden">
                    <button 
                      className="px-3 py-1.5 text-gray-600 hover:bg-gray-100 transition-colors font-medium"
                      onClick={() => onUpdateQty(item.id, item.quantity - 1)}
                      aria-label="Decrease quantity"
                    >−</button>
                    <span className="px-4 text-sm text-[#3A2E2A] font-semibold min-w-[2rem] text-center">{item.quantity}</span>
                    <button 
                      className="px-3 py-1.5 text-gray-600 hover:bg-gray-100 transition-colors font-medium"
                      onClick={() => onUpdateQty(item.id, item.quantity + 1)}
                      aria-label="Increase quantity"
                    >+</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="p-6 bg-gradient-to-b from-[#FAF8F4] to-white border-t border-gray-200 shadow-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="text-base text-gray-600 font-medium">Subtotal</span>
              <span className="font-serif text-2xl text-[#3A2E2A] font-bold">{CURRENCY} {total.toLocaleString()}</span>
            </div>
            <p className="text-xs text-gray-500 mb-6">Shipping & taxes calculated at checkout.</p>
            <Button 
              className="w-full text-base py-4" 
              onClick={() => { onClose(); onCheckout(); }}
            >
              PROCEED TO CHECKOUT
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};