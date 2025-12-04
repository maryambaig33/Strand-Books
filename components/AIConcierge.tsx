import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, BookOpen } from 'lucide-react';
import { getBookRecommendation } from '../services/geminiService';
import { ChatMessage, Book } from '../types';

interface AIConciergeProps {
  allBooks: Book[];
}

const AIConcierge: React.FC<AIConciergeProps> = ({ allBooks }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hey there! Welcome to The Strand. Looking for something specific, or just browsing the stacks? I can help you find your next great read." }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!query.trim()) return;

    const userText = query;
    setQuery('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsLoading(true);

    // Prepare context
    const bookContext = allBooks.map(b => `${b.title} by ${b.author} (${b.category})`).join(', ');
    
    try {
      const responseText = await getBookRecommendation(userText, bookContext);
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "I'm having a little trouble hearing you over the hustle and bustle. Could you try again?", isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {/* Floating Action Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-40 bg-strand-dark text-white p-4 rounded-full shadow-2xl hover:bg-strand-red transition-all duration-300 group flex items-center space-x-2"
        >
          <Sparkles size={24} className="group-hover:animate-pulse" />
          <span className="font-bold pr-1">Ask a Bookseller</span>
        </button>
      )}

      {/* Chat Interface */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[90vw] sm:w-96 bg-white rounded-xl shadow-2xl flex flex-col border border-gray-200 overflow-hidden max-h-[600px] animate-in slide-in-from-bottom-5 duration-300">
          
          {/* Header */}
          <div className="bg-strand-red text-white p-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <BookOpen size={20} />
              <div>
                <h3 className="font-bold text-sm">Strand Concierge</h3>
                <p className="text-[10px] opacity-80">Powered by Gemini</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-red-800 p-1 rounded transition">
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-strand-cream h-80 sm:h-96">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-lg text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-strand-dark text-white rounded-br-none'
                      : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 p-3 rounded-lg rounded-bl-none shadow-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-gray-100 flex items-center space-x-2">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Suggest a book for a rainy day..."
              className="flex-1 bg-gray-100 border-none rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-strand-red outline-none"
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !query.trim()}
              className="p-2 bg-strand-red text-white rounded-full hover:bg-red-800 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AIConcierge;