import React from 'react';
import { Book } from '../types';
import BookCard from './BookCard';
import { ArrowRight } from 'lucide-react';

interface BookRowProps {
  title: string;
  books: Book[];
  onAddToCart: (book: Book) => void;
}

const BookRow: React.FC<BookRowProps> = ({ title, books, onAddToCart }) => {
  return (
    <section className="py-10 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-6">
          <h3 className="text-2xl lg:text-3xl font-serif font-bold text-strand-dark">
            {title}
          </h3>
          <button className="text-sm font-bold uppercase tracking-wider flex items-center hover:text-strand-red transition-colors">
            View All <ArrowRight size={16} className="ml-1" />
          </button>
        </div>
        
        <div className="flex overflow-x-auto space-x-6 pb-6 hide-scrollbar">
          {books.map((book) => (
            <BookCard key={book.id} book={book} onAddToCart={onAddToCart} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookRow;