import React, { useState, useEffect } from 'react';
import { Header, Footer, CartSidebar } from './components/UI';
import { Home, Catalog, ProductDetail, Checkout, Confirmation, Tracking, AdminDashboard } from './components/Views';
import { Product, CartItem, Order, ViewState } from './types';
import { MOCK_PRODUCTS } from './constants';

const App = () => {
  // --- Global State ---
  // Initialize products from MOCK_PRODUCTS but keep them in state to track inventory changes
  const [products, setProducts] = useState<Product[]>(MOCK_PRODUCTS);
  const [view, setView] = useState<ViewState>('HOME');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [lastOrder, setLastOrder] = useState<Order | null>(null);
  const [showLoading, setShowLoading] = useState(true);

  // --- Initial Loader Animation ---
  useEffect(() => {
    setTimeout(() => setShowLoading(false), 2000);
  }, []);

  // --- Inventory & Cart Actions ---
  
  const addToCart = (product: Product, quantity: number) => {
    // Check if we have enough stock
    const currentProduct = products.find(p => p.id === product.id);
    if (!currentProduct || currentProduct.stock < quantity) {
      alert("Sorry, not enough stock available!");
      return;
    }

    // Update Inventory State: Decrease Stock, Increase Reserved
    setProducts(prevProducts => 
      prevProducts.map(p => 
        p.id === product.id 
          ? { ...p, stock: p.stock - quantity, reserved: p.reserved + quantity }
          : p
      )
    );

    // Update Cart State
    setCart(prevCart => {
      const existing = prevCart.find(item => item.id === product.id);
      if (existing) {
        return prevCart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item);
      }
      return [...prevCart, { ...product, quantity }];
    });
    
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    const itemToRemove = cart.find(item => item.id === id);
    if (!itemToRemove) return;

    // Return stock to inventory
    setProducts(prevProducts => 
      prevProducts.map(p => 
        p.id === id 
          ? { ...p, stock: p.stock + itemToRemove.quantity, reserved: p.reserved - itemToRemove.quantity }
          : p
      )
    );

    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateCartQty = (id: string, newQty: number) => {
    const item = cart.find(i => i.id === id);
    if (!item) return;

    if (newQty < 1) {
      removeFromCart(id);
      return;
    }

    const diff = newQty - item.quantity;
    
    // If increasing, check stock
    if (diff > 0) {
      const currentProduct = products.find(p => p.id === id);
      if (!currentProduct || currentProduct.stock < diff) {
        alert(`Only ${currentProduct?.stock} more items available.`);
        return;
      }
    }

    // Update Inventory based on diff
    // If diff is positive (added more), stock decreases. If negative (removed some), stock increases.
    setProducts(prevProducts => 
      prevProducts.map(p => 
        p.id === id 
          ? { ...p, stock: p.stock - diff, reserved: p.reserved + diff }
          : p
      )
    );

    setCart(prev => prev.map(item => item.id === id ? { ...item, quantity: newQty } : item));
  };

  const navigateTo = (newView: ViewState) => {
    window.scrollTo(0, 0);
    setView(newView);
  };

  const handleViewProduct = (product: Product) => {
    // Always get the latest state of the product from the products array
    const freshProduct = products.find(p => p.id === product.id) || product;
    setSelectedProduct(freshProduct);
    navigateTo('PRODUCT_DETAIL');
  };

  const handleOrderPlaced = (order: Order) => {
    // Finalize Inventory: Move Reserved -> Sold
    setProducts(prevProducts => 
      prevProducts.map(p => {
        const inOrder = order.items.find(item => item.id === p.id);
        if (inOrder) {
          return { 
            ...p, 
            reserved: p.reserved - inOrder.quantity, 
            sold: p.sold + inOrder.quantity 
          };
        }
        return p;
      })
    );

    setLastOrder(order);
    setCart([]);
    navigateTo('CONFIRMATION');
  };

  if (showLoading) {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center bg-[#FAF8F4] text-[#3A2E2A]">
        <div className="font-serif text-3xl font-bold tracking-widest animate-pulse">AURA</div>
        <div className="w-12 h-0.5 bg-[#C6A162] mt-4 animate-expand"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-[#3A2E2A] font-sans selection:bg-[#C6A162] selection:text-white">
      <Header 
        cartCount={cart.reduce((a, b) => a + b.quantity, 0)} 
        onOpenCart={() => setIsCartOpen(true)}
        onNavigate={navigateTo}
        currentView={view}
      />

      <main>
        {view === 'HOME' && (
          <Home 
            products={products}
            onNavigate={navigateTo} 
            onViewProduct={handleViewProduct} 
          />
        )}
        {view === 'CATALOG' && (
          <Catalog 
            products={products}
            onViewProduct={handleViewProduct} 
          />
        )}
        {view === 'PRODUCT_DETAIL' && selectedProduct && (
          <ProductDetail 
            product={products.find(p => p.id === selectedProduct.id) || selectedProduct} 
            onAddToCart={addToCart} 
            onNavigate={navigateTo}
            onViewProduct={handleViewProduct}
          />
        )}
        {view === 'CHECKOUT' && (
          <Checkout cart={cart} onOrderPlaced={handleOrderPlaced} onNavigate={navigateTo} />
        )}
        {view === 'CONFIRMATION' && <Confirmation order={lastOrder} onNavigate={navigateTo} />}
        {view === 'TRACKING' && <Tracking order={lastOrder} />}
        {view === 'ADMIN' && <AdminDashboard products={products} />}
        {view === 'CONTACT' && (
           <div className="pt-32 pb-20 container mx-auto px-6 text-center">
             <h1 className="font-serif text-4xl mb-6">Contact Concierge</h1>
             <p className="max-w-2xl mx-auto text-gray-500">
               Our team is available 24/7 to assist with your interior needs. <br/>
               Please email concierge@auraliving.ae
             </p>
           </div>
        )}
        {view === 'ABOUT' && (
           <div className="pt-32 pb-20 container mx-auto px-6">
             <div className="max-w-3xl mx-auto text-center">
               <h1 className="font-serif text-4xl mb-8">Our Story</h1>
               <p className="text-gray-600 leading-loose text-lg">
                 Born in the heart of Dubai, AURA LIVING represents the convergence of desert warmth and modern architectural precision. 
                 We believe furniture shouldn't just fill a space; it should define it.
               </p>
             </div>
           </div>
        )}
        {view === 'WISHLIST' && (
          <div className="pt-32 pb-20 container mx-auto px-6 text-center">
            <h1 className="font-serif text-3xl mb-4">Your Wishlist</h1>
            <p className="text-gray-400">Save your favorite pieces here.</p>
          </div>
        )}
      </main>

      <Footer />
      
      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cart={cart}
        onRemove={removeFromCart}
        onUpdateQty={updateCartQty}
        onCheckout={() => { setIsCartOpen(false); navigateTo('CHECKOUT'); }}
      />
    </div>
  );
};

export default App;