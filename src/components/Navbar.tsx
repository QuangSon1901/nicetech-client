import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Updated service links with images and descriptions
const serviceLinks = [
  {
    title: "Website",
    links: [
      { 
        name: "Website", 
        href: "/dich-vu/website", 
        image: "/uploads/services/website.jpg",
        description: "Thiết kế website chuyên nghiệp, tối ưu trải nghiệm người dùng" 
      },
      { 
        name: "Khám phá mẫu", 
        href: "/dich-vu/kham-pha-mau", 
        image: "/uploads/services/templates.jpg",
        description: "Bộ sưu tập mẫu website đa dạng cho nhiều lĩnh vực" 
      },
      { 
        name: "Portfolios", 
        href: "/dich-vu/portfolios", 
        image: "/uploads/services/portfolio.jpg",
        description: "Thiết kế portfolio độc đáo, thu hút cho cá nhân và doanh nghiệp" 
      },
      { 
        name: "Blogs", 
        href: "/dich-vu/blogs", 
        image: "/uploads/services/blog.jpg",
        description: "Nền tảng blog chuyên nghiệp, tối ưu SEO và tương tác" 
      },
      { 
        name: "Doanh nghiệp", 
        href: "/dich-vu/doanh-nghiep", 
        image: "/uploads/services/business.jpg",
        description: "Giải pháp website toàn diện cho doanh nghiệp mọi quy mô" 
      },
    ]
  },
  {
    title: "Commerce",
    links: [
      { 
        name: "Ecommerce", 
        href: "/dich-vu/ecommerce", 
        image: "/uploads/services/ecommerce.jpg",
        description: "Nền tảng thương mại điện tử toàn diện, dễ quản lý" 
      },
      { 
        name: "Khám phá mẫu", 
        href: "/dich-vu/kham-pha-mau", 
        image: "/uploads/services/shop-templates.jpg",
        description: "Bộ sưu tập mẫu website bán hàng đa ngành nghề" 
      },
      { 
        name: "Bán hàng online", 
        href: "/dich-vu/ban-hang-online", 
        image: "/uploads/services/online-shop.jpg",
        description: "Giải pháp bán hàng trực tuyến linh hoạt, hiệu quả" 
      },
      { 
        name: "Ngành dịch vụ", 
        href: "/dich-vu/nganh-dich-vu", 
        image: "/uploads/services/services.jpg",
        description: "Website chuyên biệt cho các doanh nghiệp dịch vụ" 
      },
    ]
  },
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
            <a href="/gioi-thieu" className="text-gray-800 hover:text-black font-medium">Giới thiệu</a>

            {/* Services Dropdown */}
            <div className="relative" ref={navItemRef}>
              <button 
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                className="flex items-center text-gray-800 hover:text-black font-medium"
              >
                Dịch vụ <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`}/>
              </button>
            </div>
            
            <a href="/du-an" className="text-gray-800 hover:text-black font-medium">Dự án</a>
            <a href="/khach-hang" className="text-gray-800 hover:text-black font-medium">Khách hàng</a>
            <a href="/blog" className="text-gray-800 hover:text-black font-medium">Blog</a>
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

      {/* Services Mega Dropdown - Centered */}
      {servicesDropdownOpen && (
        <div 
          className="absolute left-0 right-0 w-full z-50 bg-white border-b border-gray-100 shadow-lg animate-fade-in"
          onMouseLeave={() => setServicesDropdownOpen(false)}
          ref={dropdownRef}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
            <div className="grid grid-cols-2 gap-8">
              {serviceLinks.map((group, index) => (
                <div key={index}>
                  <h4 className="font-bold text-sm uppercase text-gray-500 mb-4">{group.title}</h4>
                  <div className="grid grid-cols-2 gap-6">
                    {group.links.map((link, i) => (
                      <a 
                        href={link.href} 
                        key={i} 
                        className="flex group hover:bg-gray-50 p-3 rounded-sm transition-colors"
                      >
                        <div className="w-16 h-16 mr-4 bg-gray-100 overflow-hidden rounded-sm flex-shrink-0">
                          <img 
                            src={link.image} 
                            alt={link.name} 
                            className="w-full h-full object-cover transition-transform group-hover:scale-105"
                          />
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-800 group-hover:text-black">{link.name}</h5>
                          <p className="text-sm text-gray-600 mt-1 line-clamp-2">{link.description}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white absolute w-full border-b border-gray-100">
          <div className="px-4 py-4 space-y-4">
            <a href="#gioi-thieu" className="block py-2 text-gray-800 hover:text-black font-medium">Giới thiệu</a>
            
            {/* Mobile service dropdown */}
            <div className="py-2">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex items-center justify-between w-full text-gray-800 hover:text-black font-medium"
              >
                <span>Dịch vụ</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileMenuOpen ? 'rotate-180' : ''}`}/>
              </button>
              
              {mobileMenuOpen && (
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
            
            <a href="/du-an" className="block py-2 text-gray-800 hover:text-black font-medium">Dự án</a>
            <a href="/khach-hang" className="block py-2 text-gray-800 hover:text-black font-medium">Khách hàng</a>
            <a href="/blog" className="block py-2 text-gray-800 hover:text-black font-medium">Blog</a>
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