import React from 'react';
import { Book } from '../types';
import { Plus } from 'lucide-react';

interface BookCardProps {
  book: Book;
  onAddToCart: (book: Book) => void;
}

const BookCard: React.FC<BookCardProps> = ({ book, onAddToCart }) => {
  return (
    <div className="group relative w-44 lg:w-56 flex-shrink-0 cursor-pointer">
      <div className="relative aspect-[2/3] overflow-hidden rounded-sm shadow-md bg-gray-200 mb-3">
        {book.isStaffPick && (
          <div className="absolute top-2 left-0 bg-strand-red text-white text-[10px] font-bold px-2 py-1 uppercase shadow-sm z-10">
            Staff Pick
          </div>
        )}
        <img 
          src={book.coverUrl} 
          alt={book.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        
        {/* Quick Add Button */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart(book);
          }}
          className="absolute bottom-3 right-3 bg-white text-strand-dark p-2 rounded-full shadow-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-strand-red hover:text-white"
          aria-label="Add to cart"
        >
          <Plus size={18} />
        </button>
      </div>

      <div className="space-y-1">
        <h3 className="font-serif font-bold text-lg leading-tight line-clamp-2 group-hover:text-strand-red transition-colors">
          {book.title}
        </h3>
        <p className="text-sm text-gray-600 font-medium">{book.author}</p>
        <p className="text-sm font-bold mt-1">${book.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default BookCard;