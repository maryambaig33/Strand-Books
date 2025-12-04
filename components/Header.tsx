import React from 'react';
import { ShoppingBag, Search, Menu, User } from 'lucide-react';
import { ViewState } from '../types';

interface HeaderProps {
  cartCount: number;
  setView: (view: ViewState) => void;
}

const Header: React.FC<HeaderProps> = ({ cartCount, setView }) => {
  return (
    <header className="sticky top-0 z-50 bg-strand-red text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Mobile Menu */}
        <button className="lg:hidden p-2 hover:bg-red-800 rounded">
          <Menu size={24} />
        </button>

        {/* Logo */}
        <div 
          className="flex flex-col items-center cursor-pointer"
          onClick={() => setView(ViewState.HOME)}
        >
          <h1 className="text-2xl lg:text-3xl font-serif font-black tracking-tight uppercase">
            Strand
          </h1>
          <span className="text-[10px] tracking-widest uppercase opacity-90 hidden sm:block">
            Book Store
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-8 font-medium text-sm tracking-wide">
          <button onClick={() => setView(ViewState.SHOP)} className="hover:text-red-200 transition">BOOKS</button>
          <button onClick={() => setView(ViewState.RARE)} className="hover:text-red-200 transition">RARE & COLLECTIBLE</button>
          <button onClick={() => setView(ViewState.EVENTS)} className="hover:text-red-200 transition">EVENTS</button>
          <button className="hover:text-red-200 transition">MERCH</button>
          <button className="hover:text-red-200 transition">GIFTS</button>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-red-800 rounded-full transition hidden sm:block">
            <Search size={20} />
          </button>
          <button className="p-2 hover:bg-red-800 rounded-full transition hidden sm:block">
            <User size={20} />
          </button>
          <button className="p-2 hover:bg-red-800 rounded-full transition relative flex items-center">
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-white text-strand-red text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;