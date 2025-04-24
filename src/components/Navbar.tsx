
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold">
            <span className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-black mr-2"></div>
              Squarespace
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#products" className="text-gray-800 hover:text-black font-medium">Products</a>
            <a href="#templates" className="text-gray-800 hover:text-black font-medium">Templates</a>
            <a href="#resources" className="text-gray-800 hover:text-black font-medium">Resources</a>
            <Button variant="ghost" className="font-medium">Log In</Button>
            <Button className="bg-black text-white rounded-none hover:bg-gray-800">Get Started</Button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-gray-600 hover:text-black"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white absolute w-full border-b border-gray-100">
          <div className="px-4 py-4 space-y-4">
            <a href="#products" className="block py-2 text-gray-800 hover:text-black font-medium">Products</a>
            <a href="#templates" className="block py-2 text-gray-800 hover:text-black font-medium">Templates</a>
            <a href="#resources" className="block py-2 text-gray-800 hover:text-black font-medium">Resources</a>
            <div className="pt-2 flex flex-col space-y-4">
              <Button variant="outline" className="w-full justify-center font-medium">Log In</Button>
              <Button className="w-full justify-center bg-black text-white rounded-none hover:bg-gray-800">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
