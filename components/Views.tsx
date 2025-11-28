import React, { useState, useEffect } from 'react';
import { Button, ProductCard } from './UI';
import { Product, Category, Address, Order, CartItem, ViewState } from '../types';
import { CURRENCY, DELIVERY_PARTNERS } from '../constants';
import { ChevronRight, Filter, Minus, Plus, Share2, Star, Truck, CheckCircle, Package, MapPin, Clock, Heart, ShoppingBag, AlertTriangle } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

// --- HOME PAGE ---
export const Home = ({ onNavigate, onViewProduct, products }: any) => {
  return (
    <div className="animate-fadeIn w-full overflow-hidden">
      {/* Hero */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image with Zoom */}
        <div 
          className="absolute inset-0 bg-cover bg-center animate-slowZoom"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?w=2400&h=1600&fit=crop&q=80")' }} 
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
        
        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 text-white pt-20">
          <div className="animate-slideUp" style={{ animationDelay: '0.2s' }}>
            <p className="text-sm md:text-base tracking-[0.4em] uppercase mb-6 text-[#C6A162] font-medium drop-shadow-md">
              Aura Living Dubai
            </p>
          </div>
          
          <div className="animate-slideUp" style={{ animationDelay: '0.4s' }}>
            <h1 className="font-serif text-6xl md:text-8xl mb-8 leading-[0.9] drop-shadow-xl">
              Sanctuary of <br/>
              <span className="italic text-[#E7D3B3]">Modern Elegance</span>
            </h1>
          </div>
          
          <div className="animate-slideUp" style={{ animationDelay: '0.6s' }}>
            <p className="max-w-xl mx-auto text-lg md:text-xl text-white/90 mb-10 font-light leading-relaxed drop-shadow-md">
              Curated furniture collections inspired by the golden sands and architectural marvels of the Emirates.
            </p>
          </div>

          <div className="animate-slideUp flex flex-col md:flex-row gap-6" style={{ animationDelay: '0.8s' }}>
            <Button variant="primary" className="bg-[#E7D3B3] text-[#3A2E2A] hover:bg-white border-none min-w-[200px]" onClick={() => onNavigate('CATALOG')}>
              SHOP COLLECTION
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#3A2E2A] min-w-[200px]" onClick={() => onNavigate('ABOUT')}>
              OUR STORY
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/70 flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </section>

      {/* Intro / Philosophy Section */}
      <section className="py-24 bg-[#FAF8F4]">
        <div className="container mx-auto px-6 text-center max-w-4xl">
           <h2 className="font-serif text-3xl md:text-5xl text-[#3A2E2A] mb-8">Refined Living for the Modern Nomad</h2>
           <p className="text-gray-600 leading-loose text-lg mb-12">
             We blend the minimalist serenity of Scandinavian design with the warmth and grandeur of Arabian aesthetics. 
             Every piece tells a story of craftsmanship, luxury, and comfort.
           </p>
           <div className="grid grid-cols-3 gap-8 border-t border-gray-200 pt-12">
              <div>
                <h4 className="font-serif text-2xl text-[#C6A162] mb-2">Artisan</h4>
                <p className="text-sm text-gray-500 uppercase tracking-widest">Craftsmanship</p>
              </div>
              <div>
                <h4 className="font-serif text-2xl text-[#C6A162] mb-2">Organic</h4>
                <p className="text-sm text-gray-500 uppercase tracking-widest">Materials</p>
              </div>
              <div>
                <h4 className="font-serif text-2xl text-[#C6A162] mb-2">Dubai</h4>
                <p className="text-sm text-gray-500 uppercase tracking-widest">Design</p>
              </div>
           </div>
        </div>
      </section>

      {/* Featured Categories - Masonry Style */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-[#C6A162] uppercase tracking-widest text-sm font-medium">Collections</span>
              <h2 className="font-serif text-4xl mt-3 text-[#3A2E2A]">Curated Spaces</h2>
            </div>
            <button onClick={() => onNavigate('CATALOG')} className="hidden md:flex items-center text-[#3A2E2A] hover:text-[#C6A162] transition-colors uppercase text-sm tracking-widest font-medium group">
              View All Categories <ChevronRight size={16} className="ml-2 transition-transform group-hover:translate-x-1"/>
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 h-auto md:h-[600px]">
            {/* Item 1 - Large Left */}
            <div className="lg:col-span-6 relative group overflow-hidden cursor-pointer h-[400px] md:h-full" onClick={() => onNavigate('CATALOG')}>
              <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?w=1200&h=800&fit=crop&q=80" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Living" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                <span className="text-white/80 text-sm uppercase tracking-widest mb-2 block">01</span>
                <h3 className="text-white font-serif text-3xl md:text-5xl mb-4">Living Room</h3>
                <span className="inline-block border-b border-white text-white pb-1 text-sm tracking-widest opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">EXPLORE</span>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col gap-6 h-full">
              {/* Item 2 - Top Right */}
              <div className="flex-1 relative group overflow-hidden cursor-pointer min-h-[250px]" onClick={() => onNavigate('CATALOG')}>
                <img src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&h=800&fit=crop&q=80" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Bedroom" />
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                 <div className="absolute bottom-0 left-0 p-8 w-full">
                   <span className="text-white/80 text-sm uppercase tracking-widest mb-2 block">02</span>
                   <h3 className="text-white font-serif text-2xl md:text-3xl">Bedroom</h3>
                 </div>
              </div>
              
              <div className="flex-1 grid grid-cols-2 gap-6 min-h-[250px]">
                 {/* Item 3 */}
                 <div className="relative group overflow-hidden cursor-pointer" onClick={() => onNavigate('CATALOG')}>
                    <img src="https://images.unsplash.com/photo-1581539250439-c96689bb5168?w=800&h=800&fit=crop&q=80" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Dining" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                    <div className="absolute bottom-0 left-0 p-6">
                      <h3 className="text-white font-serif text-xl">Dining</h3>
                    </div>
                 </div>
                 {/* Item 4 */}
                 <div className="relative group overflow-hidden cursor-pointer" onClick={() => onNavigate('CATALOG')}>
                    <img src="https://images.unsplash.com/photo-1578301978018-3005759f48f7?w=800&h=800&fit=crop&q=80" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Decor" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                    <div className="absolute bottom-0 left-0 p-6">
                      <h3 className="text-white font-serif text-xl">Decor</h3>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers (State-aware) */}
      <section className="py-24 bg-[#FAF8F4]">
        <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
          <div>
             <span className="text-[#C6A162] uppercase tracking-widest text-sm font-medium">Favorites</span>
             <h2 className="font-serif text-4xl text-[#3A2E2A] mt-3">Trending Now</h2>
          </div>
          <div className="flex gap-2">
            <button className="w-10 h-10 border border-[#3A2E2A] flex items-center justify-center hover:bg-[#3A2E2A] hover:text-white transition-colors"><ChevronRight className="rotate-180" size={20}/></button>
             <button className="w-10 h-10 border border-[#3A2E2A] flex items-center justify-center hover:bg-[#3A2E2A] hover:text-white transition-colors"><ChevronRight size={20}/></button>
          </div>
        </div>
        
        <div className="container mx-auto px-6 overflow-x-auto pb-8 hide-scrollbar">
           <div className="flex space-x-8 w-max">
             {products.filter((p: Product) => p.isBestSeller || p.price > 4000).slice(0, 6).map((product: Product) => (
               <div key={product.id} className="w-[320px]">
                 <ProductCard product={product} onViewProduct={onViewProduct} />
               </div>
             ))}
           </div>
        </div>
      </section>
      
      {/* Moodboard */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Decorative Background Element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#FAF8F4]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
             <div className="relative">
               <div className="relative z-10">
                  <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?w=1200&h=800&fit=crop&q=80" alt="Interior" className="w-full shadow-2xl rounded-sm" />
               </div>
               {/* Floating overlap image */}
               <div className="absolute -bottom-16 -left-16 w-2/3 hidden md:block z-20 shadow-2xl border-8 border-white">
                  <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=800&fit=crop&q=80" alt="Detail" className="w-full rounded-sm" />
               </div>
             </div>
             <div className="md:pl-10">
               <span className="text-[#C6A162] uppercase tracking-widest text-sm font-medium mb-4 block">Design Philosophy</span>
               <h2 className="font-serif text-5xl mb-6 text-[#3A2E2A] leading-tight">Golden Hour <br/>Interiors</h2>
               <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                 "Our Palm Villa Collection is inspired by the magical hour when the Dubai sun dips below the horizon, casting a warm, golden glow over the city's architecture."
               </p>
               <p className="font-serif italic text-xl text-[#3A2E2A] mb-10 border-l-4 border-[#C6A162] pl-6">
                 Luxury is not just about price, it's about the feeling of coming home to a masterpiece.
               </p>
               <Button onClick={() => onNavigate('CATALOG')} className="px-10">SHOP THE LOOK</Button>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// --- CATALOG PAGE ---
export const Catalog = ({ onViewProduct, products }: any) => {
  const [filterCat, setFilterCat] = useState('All');
  const [sort, setSort] = useState('newest');
  
  const filtered = products
    .filter((p: Product) => filterCat === 'All' || p.category === filterCat)
    .sort((a: Product, b: Product) => {
       if (sort === 'price-low') return a.price - b.price;
       if (sort === 'price-high') return b.price - a.price;
       return 0;
    });

  return (
    <div className="pt-24 pb-20 container mx-auto px-6 animate-fadeIn">
      <div className="mb-12 text-center">
        <h1 className="font-serif text-4xl md:text-5xl text-[#3A2E2A] mb-4">The Collection</h1>
        <p className="text-gray-500">Curated pieces for the discerning home.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters */}
        <div className="w-full md:w-64 space-y-8 sticky top-24 h-fit">
          <div>
            <h3 className="font-medium text-[#3A2E2A] mb-4 uppercase tracking-wider text-sm flex items-center">
              <Filter size={14} className="mr-2"/> Category
            </h3>
            <ul className="space-y-2">
              {['All', ...Object.values(Category)].map(cat => (
                <li 
                  key={cat} 
                  className={`cursor-pointer text-sm transition-colors ${filterCat === cat ? 'text-[#C6A162] font-medium' : 'text-gray-500 hover:text-[#3A2E2A]'}`}
                  onClick={() => setFilterCat(cat)}
                >
                  {cat}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-[#3A2E2A] mb-4 uppercase tracking-wider text-sm">Sort By</h3>
             <select 
               className="w-full p-2 border border-gray-200 text-sm focus:outline-none focus:border-[#C6A162]"
               value={sort}
               onChange={(e) => setSort(e.target.value)}
             >
               <option value="newest">Newest Arrivals</option>
               <option value="price-low">Price: Low to High</option>
               <option value="price-high">Price: High to Low</option>
             </select>
          </div>
        </div>

        {/* Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {filtered.map((product: Product) => (
              <ProductCard key={product.id} product={product} onViewProduct={onViewProduct} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- PRODUCT DETAIL PAGE ---
export const ProductDetail = ({ product, onAddToCart, onNavigate, onViewProduct }: any) => {
  const [activeImg, setActiveImg] = useState(0);
  const [qty, setQty] = useState(1);
  const [adding, setAdding] = useState(false);

  useEffect(() => {
    setActiveImg(0);
    setQty(1);
    window.scrollTo(0, 0);
  }, [product]);

  const handleAdd = () => {
    if (qty > product.stock) return;
    setAdding(true);
    onAddToCart(product, qty);
    setTimeout(() => setAdding(false), 1000);
  };

  const isOutOfStock = product.stock === 0;

  // We need to access all products to find related ones, assuming passed in or we use mock for related logic simplification 
  // In a real app, related products would come from a prop or store. Here we will mock filter from the same category.
  // Ideally, 'products' should be passed here too, but for now we won't break the signature too much.

  return (
    <div className="pt-24 pb-20 container mx-auto px-6 animate-fadeIn">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-400 mb-8 flex items-center">
        <span className="cursor-pointer hover:text-[#3A2E2A]" onClick={() => onNavigate('HOME')}>Home</span>
        <ChevronRight size={14} className="mx-2" />
        <span className="cursor-pointer hover:text-[#3A2E2A]" onClick={() => onNavigate('CATALOG')}>Shop</span>
        <ChevronRight size={14} className="mx-2" />
        <span className="text-[#3A2E2A]">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
        {/* Images */}
        <div className="space-y-4">
          <div className={`aspect-square bg-gray-50 overflow-hidden relative group ${isOutOfStock ? 'opacity-75' : ''}`}>
            <img src={product.images[activeImg]} alt={product.name} className={`w-full h-full object-cover ${isOutOfStock ? 'grayscale' : ''}`} />
             {isOutOfStock && (
                <div className="absolute inset-0 flex items-center justify-center bg-white/50">
                   <div className="bg-[#3A2E2A] text-white px-6 py-2 uppercase tracking-widest font-bold">Sold Out</div>
                </div>
             )}
             <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md cursor-pointer hover:text-red-500 transition-colors">
               <Heart size={20} />
             </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
             {product.images.concat(product.images).slice(0, 4).map((img: string, idx: number) => (
               <div 
                key={idx} 
                className={`aspect-square cursor-pointer border-2 transition-colors ${idx === activeImg ? 'border-[#C6A162]' : 'border-transparent hover:border-gray-200'}`}
                onClick={() => setActiveImg(idx)}
               >
                 <img src={img} className={`w-full h-full object-cover ${isOutOfStock ? 'grayscale' : ''}`} alt="thumbnail" />
               </div>
             ))}
          </div>
        </div>

        {/* Info */}
        <div>
          <h1 className="font-serif text-4xl md:text-5xl text-[#3A2E2A] mb-4">{product.name}</h1>
          
          <div className="flex items-center space-x-4 mb-6">
            <span className="text-2xl text-[#C6A162] font-medium">{CURRENCY} {product.price.toLocaleString()}</span>
            <div className="h-4 w-[1px] bg-gray-300"></div>
            <div className="flex items-center text-sm text-gray-500">
               <Star size={14} className="text-[#C6A162] mr-1" fill="#C6A162" />
               {product.rating} ({product.reviews} reviews)
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed mb-8">
            {product.longDescription}
          </p>

          {/* Inventory Status */}
          <div className="mb-6">
            {isOutOfStock ? (
              <div className="flex items-center text-red-600 font-medium">
                <AlertTriangle size={18} className="mr-2" />
                Currently Out of Stock
              </div>
            ) : (
               <div className="space-y-2">
                 <div className="flex justify-between text-sm">
                   <span className="text-gray-500">Availability</span>
                   <span className={product.stock <= 5 ? "text-[#C6A162] font-bold" : "text-green-600"}>
                     {product.stock <= 5 ? `Hurry! Only ${product.stock} units left` : `In Stock (${product.stock} units)`}
                   </span>
                 </div>
                 {/* Progress bar for stock */}
                 {product.stock <= 10 && (
                   <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                     <div 
                       className="bg-[#C6A162] h-full" 
                       style={{ width: `${(product.stock / 10) * 100}%` }}
                     ></div>
                   </div>
                 )}
               </div>
            )}
          </div>

          <div className="border-t border-b border-gray-100 py-6 mb-8 space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-500">Dimensions</span>
              <span className="text-[#3A2E2A]">{product.dimensions}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">SKU</span>
              <span className="text-[#3A2E2A] uppercase">AURA-{product.id.padStart(4, '0')}</span>
            </div>
          </div>

          <div className="flex space-x-4 mb-8">
            <div className="flex items-center border border-gray-300">
              <button 
                className="px-4 py-3 hover:bg-gray-50 disabled:opacity-50" 
                onClick={() => setQty(Math.max(1, qty - 1))}
                disabled={isOutOfStock}
              ><Minus size={16}/></button>
              <span className="px-4 font-medium">{isOutOfStock ? 0 : qty}</span>
              <button 
                className="px-4 py-3 hover:bg-gray-50 disabled:opacity-50" 
                onClick={() => setQty(Math.min(product.stock, qty + 1))}
                disabled={isOutOfStock || qty >= product.stock}
              ><Plus size={16}/></button>
            </div>
            <Button 
              className={`flex-1 flex items-center justify-center space-x-2 transition-transform ${adding ? 'scale-95' : ''}`} 
              onClick={handleAdd}
              disabled={isOutOfStock}
            >
               {adding ? <span>ADDED TO BAG</span> : <span>{isOutOfStock ? 'OUT OF STOCK' : 'ADD TO BAG'}</span>}
            </Button>
          </div>
          
          <div className="flex items-center text-sm text-gray-500 space-x-6">
            <div className="flex items-center"><Truck size={16} className="mr-2"/> Free Delivery in Dubai</div>
            <div className="flex items-center"><CheckCircle size={16} className="mr-2"/> 5-Year Warranty</div>
            <div className="flex items-center cursor-pointer hover:text-[#3A2E2A]"><Share2 size={16} className="mr-2"/> Share</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- CHECKOUT PAGE ---
export const Checkout = ({ cart, onOrderPlaced, onNavigate }: any) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  
  // Dummy Form State
  const [form, setForm] = useState({
    firstName: '', lastName: '', street: '', emirate: 'Dubai', phone: '', email: ''
  });

  const subtotal = cart.reduce((acc: number, item: CartItem) => acc + (item.price * item.quantity), 0);
  const delivery = form.emirate === 'Dubai' ? 0 : 50;
  const total = subtotal + delivery;

  const handlePlaceOrder = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      onOrderPlaced({
        id: `ORD-${Math.floor(Math.random() * 10000)}`,
        date: new Date().toISOString(),
        status: 'Processing',
        total: total,
        items: cart,
        shippingAddress: { ...form, fullName: `${form.firstName} ${form.lastName}` }
      });
    }, 2000);
  };

  if (cart.length === 0) return (
     <div className="pt-32 pb-20 container mx-auto px-6 text-center">
        <h2 className="text-2xl font-serif text-[#3A2E2A] mb-4">Your bag is empty</h2>
        <Button onClick={() => onNavigate('CATALOG')}>START SHOPPING</Button>
     </div>
  );

  return (
    <div className="pt-24 pb-20 container mx-auto px-6 animate-fadeIn bg-gray-50 min-h-screen">
       <h1 className="font-serif text-3xl text-[#3A2E2A] mb-8 text-center">Checkout</h1>
       
       <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
         {/* Left Column: Form */}
         <div className="flex-1 bg-white p-8 shadow-sm rounded-sm">
           
           <div className="mb-8">
             <div className="flex items-center justify-between mb-6">
               <h2 className="font-serif text-xl text-[#3A2E2A]">1. Shipping Details</h2>
               {step > 1 && <button onClick={() => setStep(1)} className="text-sm underline text-gray-500">Edit</button>}
             </div>
             
             {step === 1 && (
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input placeholder="First Name" className="border p-3 rounded-sm w-full" value={form.firstName} onChange={e => setForm({...form, firstName: e.target.value})} />
                  <input placeholder="Last Name" className="border p-3 rounded-sm w-full" value={form.lastName} onChange={e => setForm({...form, lastName: e.target.value})} />
                  <input placeholder="Phone (+971)" className="border p-3 rounded-sm w-full md:col-span-2" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
                  <input placeholder="Street Address / Villa No." className="border p-3 rounded-sm w-full md:col-span-2" value={form.street} onChange={e => setForm({...form, street: e.target.value})} />
                  <select className="border p-3 rounded-sm w-full" value={form.emirate} onChange={e => setForm({...form, emirate: e.target.value})}>
                    <option value="Dubai">Dubai</option>
                    <option value="Abu Dhabi">Abu Dhabi</option>
                    <option value="Sharjah">Sharjah</option>
                    <option value="Ajman">Ajman</option>
                  </select>
                  <input placeholder="Makani Number (Optional)" className="border p-3 rounded-sm w-full" />
                  
                  <div className="md:col-span-2 mt-4">
                    <Button className="w-full" onClick={() => setStep(2)}>CONTINUE TO PAYMENT</Button>
                  </div>
               </div>
             )}
             {step > 1 && (
                <div className="text-gray-600 text-sm">
                  {form.firstName} {form.lastName}<br/>
                  {form.street}, {form.emirate}<br/>
                  {form.phone}
                </div>
             )}
           </div>

           <div className="opacity-100 transition-opacity">
              <h2 className={`font-serif text-xl text-[#3A2E2A] mb-6 ${step === 1 ? 'opacity-50' : 'opacity-100'}`}>2. Payment Method</h2>
              {step === 2 && (
                 <div className="space-y-4">
                    <div className="border border-[#C6A162] bg-[#FAF8F4] p-4 flex items-center justify-between cursor-pointer">
                       <span className="font-medium">Credit / Debit Card</span>
                       <div className="w-4 h-4 bg-[#3A2E2A] rounded-full"></div>
                    </div>
                    <div className="border border-gray-200 p-4 flex items-center justify-between cursor-pointer opacity-50">
                       <span className="font-medium">Cash on Delivery (COD)</span>
                    </div>
                    
                    <div className="bg-gray-100 p-4 rounded-sm mt-4 text-sm text-gray-500">
                      Dummy Card Entry: <br/>
                      <input placeholder="Card Number" className="w-full mt-2 p-2 border" disabled/>
                    </div>

                    <Button className="w-full mt-6" onClick={handlePlaceOrder} disabled={loading}>
                      {loading ? 'PROCESSING...' : `PAY ${CURRENCY} ${total.toLocaleString()}`}
                    </Button>
                 </div>
              )}
           </div>
         </div>

         {/* Right Column: Order Summary */}
         <div className="w-full lg:w-96 bg-white p-8 shadow-sm h-fit rounded-sm sticky top-24">
            <h3 className="font-serif text-xl mb-6">Order Summary</h3>
            <div className="space-y-4 mb-6 max-h-64 overflow-y-auto pr-2">
               {cart.map((item: CartItem) => (
                 <div key={item.id} className="flex justify-between text-sm">
                    <div className="flex gap-3">
                       <span className="text-gray-500">{item.quantity}x</span>
                       <span className="text-[#3A2E2A] line-clamp-1 w-32">{item.name}</span>
                    </div>
                    <span className="text-gray-700">{CURRENCY} {(item.price * item.quantity).toLocaleString()}</span>
                 </div>
               ))}
            </div>
            <div className="border-t border-gray-100 pt-4 space-y-2 text-sm">
               <div className="flex justify-between">
                 <span className="text-gray-500">Subtotal</span>
                 <span>{CURRENCY} {subtotal.toLocaleString()}</span>
               </div>
               <div className="flex justify-between">
                 <span className="text-gray-500">Shipping</span>
                 <span>{delivery === 0 ? 'FREE' : `${CURRENCY} ${delivery}`}</span>
               </div>
               <div className="flex justify-between font-medium text-lg text-[#3A2E2A] pt-4 border-t border-gray-100 mt-4">
                 <span>Total</span>
                 <span>{CURRENCY} {total.toLocaleString()}</span>
               </div>
            </div>
         </div>
       </div>
    </div>
  );
};

// --- CONFIRMATION & TRACKING ---
export const Confirmation = ({ order, onNavigate }: any) => {
  return (
    <div className="pt-32 pb-20 container mx-auto px-6 text-center max-w-2xl animate-fadeIn">
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle size={40} className="text-green-600" />
      </div>
      <h1 className="font-serif text-4xl text-[#3A2E2A] mb-2">Order Confirmed!</h1>
      <p className="text-gray-500 mb-8">Thank you for choosing Aura Living. Your order has been received.</p>
      
      <div className="bg-white p-8 border border-gray-100 text-left mb-8 shadow-sm">
        <p className="text-sm text-gray-500 uppercase tracking-widest mb-1">Order ID</p>
        <p className="text-xl font-medium mb-4">#{order.id}</p>
        <p className="text-sm text-gray-500 uppercase tracking-widest mb-1">Estimated Delivery</p>
        <p className="text-lg">Within 2-3 Days</p>
      </div>

      <div className="flex gap-4 justify-center">
        <Button variant="outline" className="border-[#3A2E2A] text-[#3A2E2A]" onClick={() => onNavigate('HOME')}>CONTINUE SHOPPING</Button>
        <Button onClick={() => onNavigate('TRACKING')}>TRACK ORDER</Button>
      </div>
    </div>
  );
};

export const Tracking = ({ order }: any) => {
  if (!order) return <div className="pt-32 text-center">No active order to track.</div>;

  return (
    <div className="pt-24 pb-20 container mx-auto px-6 max-w-4xl animate-fadeIn">
       <h1 className="font-serif text-3xl text-[#3A2E2A] mb-12 text-center">Track Your Order</h1>
       
       <div className="bg-white p-8 md:p-12 shadow-sm border border-gray-100 rounded-sm">
          <div className="flex justify-between items-center mb-12 flex-wrap gap-4">
            <div>
              <p className="text-sm text-gray-400">Order ID</p>
              <p className="font-medium text-lg">#{order.id}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Carrier</p>
              <p className="font-medium text-lg">Aura Premier Logistics</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Status</p>
              <p className="font-medium text-lg text-[#C6A162]">{order.status}</p>
            </div>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 md:left-0 md:top-8 md:w-full md:h-0.5"></div>
            
            <div className="flex flex-col md:flex-row justify-between relative gap-8 md:gap-0">
               {[
                 { title: 'Order Placed', icon: Package, date: 'Oct 24, 10:00 AM', active: true },
                 { title: 'Processing', icon: SettingsIcon, date: 'Oct 24, 02:00 PM', active: true },
                 { title: 'Shipped', icon: Truck, date: 'Pending', active: false },
                 { title: 'Delivered', icon: MapPin, date: 'Pending', active: false },
               ].map((step, idx) => (
                 <div key={idx} className="flex md:flex-col items-center relative z-10 pl-12 md:pl-0">
                    <div className={`absolute left-0 top-0 md:static w-9 h-9 rounded-full flex items-center justify-center border-2 ${step.active ? 'bg-[#3A2E2A] border-[#3A2E2A] text-white' : 'bg-white border-gray-300 text-gray-300'}`}>
                      <step.icon size={16} />
                    </div>
                    <div className="md:mt-4 md:text-center">
                      <p className={`font-medium ${step.active ? 'text-[#3A2E2A]' : 'text-gray-400'}`}>{step.title}</p>
                      <p className="text-xs text-gray-400 mt-1">{step.date}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>
       </div>
    </div>
  );
};

const SettingsIcon = (props: any) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.74v-.47a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
);

// --- ADMIN DASHBOARD ---
export const AdminDashboard = ({ products }: any) => {
  const data = [
    { name: 'Jan', sales: 4000 },
    { name: 'Feb', sales: 3000 },
    { name: 'Mar', sales: 2000 },
    { name: 'Apr', sales: 2780 },
    { name: 'May', sales: 1890 },
    { name: 'Jun', sales: 2390 },
    { name: 'Jul', sales: 3490 },
  ];

  return (
    <div className="pt-24 pb-20 container mx-auto px-6">
      <h1 className="text-3xl font-serif text-[#3A2E2A] mb-8">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <div className="bg-white p-6 shadow-sm border border-gray-100">
           <p className="text-gray-500 text-sm uppercase">Total Revenue</p>
           <p className="text-2xl font-bold mt-2">{CURRENCY} 124,500</p>
        </div>
        <div className="bg-white p-6 shadow-sm border border-gray-100">
           <p className="text-gray-500 text-sm uppercase">Orders Pending</p>
           <p className="text-2xl font-bold mt-2">14</p>
        </div>
        <div className="bg-white p-6 shadow-sm border border-gray-100">
           <p className="text-gray-500 text-sm uppercase">Total Customers</p>
           <p className="text-2xl font-bold mt-2">892</p>
        </div>
        <div className="bg-white p-6 shadow-sm border border-gray-100">
           <p className="text-gray-500 text-sm uppercase">Low Stock Items</p>
           <p className="text-2xl font-bold mt-2 text-red-500">
             {products.filter((p: any) => p.stock <= 5).length}
           </p>
        </div>
      </div>

      <div className="bg-white p-8 shadow-sm border border-gray-100 mb-8">
        <h3 className="text-lg font-medium mb-6">Revenue Analytics (2024)</h3>
        <div className="h-80 w-full">
           <ResponsiveContainer width="100%" height="100%">
             <BarChart data={data}>
               <XAxis dataKey="name" />
               <YAxis />
               <Tooltip />
               <Bar dataKey="sales" fill="#C6A162" />
             </BarChart>
           </ResponsiveContainer>
        </div>
      </div>
      
      <div className="bg-white p-8 shadow-sm border border-gray-100 mb-8">
        <h3 className="text-lg font-medium mb-6">Inventory Status</h3>
        <table className="w-full text-left">
           <thead>
             <tr className="border-b text-sm text-gray-500">
               <th className="pb-3">Product Name</th>
               <th className="pb-3">Stock</th>
               <th className="pb-3">Reserved (Carts)</th>
               <th className="pb-3 text-right">Sold</th>
             </tr>
           </thead>
           <tbody>
             {products.slice(0, 5).map((p: any) => (
               <tr key={p.id} className="border-b last:border-0 hover:bg-gray-50">
                 <td className="py-4 font-medium text-[#3A2E2A]">{p.name}</td>
                 <td className={`py-4 ${p.stock <= 5 ? 'text-red-500 font-bold' : ''}`}>{p.stock}</td>
                 <td className="py-4 text-blue-500">{p.reserved}</td>
                 <td className="py-4 text-right">{p.sold}</td>
               </tr>
             ))}
           </tbody>
        </table>
      </div>
    </div>
  );
};