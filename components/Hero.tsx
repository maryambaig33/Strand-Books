import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden bg-strand-dark text-white">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-80 scale-105"
        style={{ backgroundImage: 'url("https://picsum.photos/1600/900?grayscale")' }}
      ></div>

      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <div className="inline-block border-2 border-strand-red px-3 py-1 mb-4 text-xs font-bold tracking-[0.2em] uppercase bg-black/50 backdrop-blur-sm">
          Since 1927
        </div>
        <h2 className="text-5xl lg:text-7xl font-serif font-black mb-6 leading-tight">
          18 Miles of Books
        </h2>
        <p className="text-lg lg:text-xl font-light mb-8 max-w-2xl mx-auto text-gray-200">
          New, used, rare, and out-of-print books. Experience the legendary independent bookstore in the heart of New York City.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-strand-red hover:bg-red-700 text-white px-8 py-4 font-bold tracking-wide uppercase transition duration-300">
            Shop New Arrivals
          </button>
          <button className="bg-white text-strand-dark hover:bg-gray-200 px-8 py-4 font-bold tracking-wide uppercase transition duration-300">
            Browse Rare Room
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;