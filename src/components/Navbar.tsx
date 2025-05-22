
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-navy text-white py-4 px-6 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="font-serif text-xl md:text-2xl">
          Britain After Empire
        </Link>
        
        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          size="icon"
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="#introduction" className="hover:text-burgundy transition-colors">Introduction</a>
          <a href="#timeline" className="hover:text-burgundy transition-colors">Timeline</a>
          <a href="#connections" className="hover:text-burgundy transition-colors">BLM Links</a>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-navy p-4 flex flex-col space-y-4 md:hidden animate-fade-in">
            <a 
              href="#introduction" 
              className="hover:text-burgundy transition-colors py-2 border-b border-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Introduction
            </a>
            <a 
              href="#timeline" 
              className="hover:text-burgundy transition-colors py-2 border-b border-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Timeline
            </a>
            <a 
              href="#connections" 
              className="hover:text-burgundy transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              BLM Links
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
