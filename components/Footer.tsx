import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 text-center text-gray-500 text-sm relative z-10 border-t border-white/5 bg-black/40 backdrop-blur-sm">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          &copy; {new Date().getFullYear()} הסדנאות של אוריה. כל הזכויות שמורות.
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-morocco-orange transition-colors"><Instagram className="w-5 h-5" /></a>
          <a href="#" className="hover:text-morocco-orange transition-colors"><Facebook className="w-5 h-5" /></a>
        </div>
      </div>
    </footer>
  );
};