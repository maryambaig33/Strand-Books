import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BookRow from './components/BookRow';
import Footer from './components/Footer';
import AIConcierge from './components/AIConcierge';
import { MOCK_BOOKS } from './constants';
import { Book, ViewState } from './types';

const App: React.FC = () => {
  const [cart, setCart] = useState<Book[]>([]);
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.HOME);

  const addToCart = (book: Book) => {
    setCart(prev => [...prev, book]);
    // Optional: Add a toast notification here
    console.log(`Added ${book.title} to cart`);
  };

  const staffPicks = MOCK_BOOKS.filter(b => b.isStaffPick);
  const fiction = MOCK_BOOKS.filter(b => b.category === 'Fiction');
  const nonFiction = MOCK_BOOKS.filter(b => b.category === 'Non-Fiction');

  return (
    <div className="min-h-screen flex flex-col font-sans bg-strand-cream">
      <Header cartCount={cart.length} setView={setCurrentView} />

      <main className="flex-grow">
        {currentView === ViewState.HOME && (
          <>
            <Hero />
            
            <div className="py-8 bg-white border-b border-gray-100">
               <div className="container mx-auto px-4 text-center">
                 <p className="text-2xl font-serif italic text-gray-600">
                   "A book is a dream that you hold in your hand."
                 </p>
                 <p className="text-sm mt-2 font-bold uppercase tracking-widest text-strand-red">— Neil Gaiman</p>
               </div>
            </div>

            <BookRow 
              title="Staff Picks" 
              books={staffPicks} 
              onAddToCart={addToCart} 
            />
            
            <BookRow 
              title="New Fiction" 
              books={fiction} 
              onAddToCart={addToCart} 
            />

            <BookRow 
              title="Thought Provoking Non-Fiction" 
              books={nonFiction} 
              onAddToCart={addToCart} 
            />
            
            {/* Visual Break / Promo Section */}
            <section className="py-16 bg-strand-dark text-white relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <h3 className="text-4xl font-serif font-bold mb-4">Sell Us Your Books</h3>
                        <p className="text-gray-300 mb-6 max-w-md">
                            We buy used books every day. No appointment necessary. Bring your hidden gems to our buying desk.
                        </p>
                        <button className="border border-white hover:bg-white hover:text-black px-6 py-3 uppercase text-sm font-bold tracking-widest transition">
                            Learn How
                        </button>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                         <div className="w-64 h-40 bg-gray-800 border-2 border-gray-700 flex items-center justify-center rotate-3 shadow-2xl">
                             <span className="font-serif text-2xl text-gray-500">Books Needed</span>
                         </div>
                    </div>
                </div>
            </section>
          </>
        )}

        {currentView === ViewState.SHOP && (
           <div className="container mx-auto px-4 py-12">
             <h2 className="text-4xl font-serif font-bold mb-8">All Books</h2>
             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
               {MOCK_BOOKS.map(book => (
                 <div key={book.id} className="flex justify-center">
                    {/* Reuse card logic but simplified wrapper */}
                     <div className="group relative w-full max-w-[200px] cursor-pointer">
                        <div className="relative aspect-[2/3] overflow-hidden rounded-sm shadow-md bg-gray-200 mb-3">
                          <img src={book.coverUrl} alt={book.title} className="w-full h-full object-cover" />
                        </div>
                        <h3 className="font-serif font-bold">{book.title}</h3>
                        <p className="text-sm text-gray-600">{book.author}</p>
                        <button 
                          onClick={() => addToCart(book)}
                          className="mt-2 text-xs font-bold uppercase text-strand-red hover:underline"
                        >
                          Add to Cart
                        </button>
                     </div>
                 </div>
               ))}
             </div>
           </div>
        )}

        {(currentView === ViewState.EVENTS || currentView === ViewState.RARE) && (
           <div className="flex flex-col items-center justify-center h-[50vh]">
             <h2 className="text-3xl font-serif font-bold mb-4">Coming Soon</h2>
             <p className="text-gray-500">We are currently dusting off the shelves in this section.</p>
             <button 
                onClick={() => setCurrentView(ViewState.HOME)}
                className="mt-6 text-strand-red underline"
             >
                Return Home
             </button>
           </div>
        )}

      </main>
      
      <Footer />
      <AIConcierge allBooks={MOCK_BOOKS} />
    </div>
  );
};

export default App;