import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Sử dụng cấu trúc giống footer
const serviceLinks = [
  {
    title: "Website",
    links: [
      { name: "Website", href: "#" },
      { name: "Khám phá mẫu", href: "#" },
      { name: "Portfolios", href: "#" },
      { name: "Blogs", href: "#" },
      { name: "Doanh nghiệp", href: "#" },
    ]
  },
  {
    title: "Commerce",
    links: [
      { name: "Ecommerce", href: "#" },
      { name: "Khám phá mẫu", href: "#" },
      { name: "Bán hàng online", href: "#" },
      { name: "Ngành dịch vụ", href: "#" },
    ]
  },
  {
    title: "Hạ tầng Hosting, VPS",
    links: [
      { name: "Tên miền", href: "#" },
      { name: "Hosting", href: "#" },
      { name: "VPS", href: "#" },
      { name: "Email doanh nghiệp", href: "#" },
      { name: "Dịch vụ sao lưu dữ liệu", href: "#" },
    ]
  }
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navItemRef = useRef(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) && 
          navItemRef.current && !navItemRef.current.contains(event.target)) {
        setServicesDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

            {/* Services Dropdown */}
            <div className="relative" ref={navItemRef}>
              <button 
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                className="flex items-center text-gray-800 hover:text-black font-medium"
              >
                Dịch vụ <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`}/>
              </button>
              
              {servicesDropdownOpen && (
                <div 
                  className="absolute transform -translate-x-1/4 mt-5 w-[700px] bg-white border border-gray-100 shadow-lg rounded-sm z-50 py-8 animate-fade-up-short"
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                  ref={dropdownRef}
                >
                  <div className="grid grid-cols-3 gap-6 px-8">
                    {serviceLinks.map((group, index) => (
                      <div key={index}>
                        <h4 className="font-bold text-sm uppercase text-gray-500 mb-4">{group.title}</h4>
                        <ul className="space-y-3">
                          {group.links.map((link, i) => (
                            <li key={i}>
                              <a href={link.href} className="text-gray-800 hover:text-black flex justify-between items-center">
                                {link.name} 
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
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
            
            {/* Mobile service dropdown */}
            <div className="py-2">
              <button 
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className="flex items-center justify-between w-full text-gray-800 hover:text-black font-medium"
              >
                <span>Dịch vụ</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`}/>
              </button>
              
              {servicesDropdownOpen && (
                <div className="mt-2 pl-4 space-y-6 animate-fade-in">
                  {serviceLinks.map((group, index) => (
                    <div key={index} className="mt-2">
                      <p className="text-xs uppercase font-semibold text-gray-500 mb-2">{group.title}</p>
                      <ul className="space-y-2 pl-2">
                        {group.links.map((link, i) => (
                          <li key={i}>
                            <a href={link.href} className="block text-gray-800 hover:text-black">
                              {link.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
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