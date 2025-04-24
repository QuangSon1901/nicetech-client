
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
            <img className='h-8' src="/uploads/logos/header-logo.png" alt="NiceTech" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#gioi-thieu" className="text-gray-800 hover:text-black font-medium">Giới thiệu</a>
            <a href="#" className="text-gray-800 hover:text-black font-medium">Dịch vụ</a>
            <a href="#du-an" className="text-gray-800 hover:text-black font-medium">Dự án</a>
            <a href="#khach-hang" className="text-gray-800 hover:text-black font-medium">Khách hàng</a>
            <a href="#blog" className="text-gray-800 hover:text-black font-medium">Blog</a>
            <Button className="bg-black text-white rounded-none hover:bg-gray-800">Liên hệ ngay</Button>
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
            <a href="#gioi-thieu" className="block py-2 text-gray-800 hover:text-black font-medium">Giới thiệu</a>
            <a href="#dich-vu" className="block py-2 text-gray-800 hover:text-black font-medium">Dịch vụ</a>
            <a href="#du-an" className="block py-2 text-gray-800 hover:text-black font-medium">Dự án</a>
            <a href="#khach-hang" className="block py-2 text-gray-800 hover:text-black font-medium">Khách hàng</a>
            <a href="#blog" className="block py-2 text-gray-800 hover:text-black font-medium">Blog</a>
            <div className="pt-2 flex flex-col space-y-4">
              <Button className="w-full justify-center bg-black text-white rounded-none hover:bg-gray-800">Liên hệ ngay</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
