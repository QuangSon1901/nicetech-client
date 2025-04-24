
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

const footerLinks = [
  {
    title: "Website",
    links: [
      { name: "Website", href: "/dich-vu/website" },
      { name: "Khám phá mẫu", href: "/dich-vu/kham-pha-mau" },
      { name: "Portfolios", href: "/dich-vu/portfolios" },
      { name: "Blogs", href: "/dich-vu/blogs" },
      { name: "Doanh nghiệp", href: "/dich-vu/doanh-nghiep" },
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
  // {
  //   title: "Hạ tầng Hosting, VPS",
  //   links: [
  //     { name: "Tên miền", href: "#" },
  //     { name: "Hosting", href: "#" },
  //     { name: "VPS", href: "#" },
  //     { name: "Email doanh nghiệp", href: "#" },
  //     { name: "Dịch vụ sao lưu dữ liệu", href: "#" },
  //   ]
  // },
  {
    title: "Về chúng tôi",
    links: [
      { name: "Giới thiệu", href: "/gioi-thieu" },
      { name: "Dự án", href: "/du-an" },
      { name: "Khách hàng", href: "/khach-hang" },
      { name: "Blog", href: "/blog" },
      { name: "Liên hệ", href: "/lien-he" }
    ]
  }
];

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="section-container py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <a href="/" className="text-2xl font-bold mb-6 inline-block">
              <img className='h-8' src="/uploads/logos/header-logo.png" alt="NiceTech" />
            </a>
            <p className="text-gray-600 mb-6">
              Build a website, sell online, and engage with your audience.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/nicetechvietnam" className="text-gray-600 hover:text-black">
                <Facebook size={20} />
              </a>
              <a href="nicetechvn@gmail.com" className="text-gray-600 hover:text-black">
                <Mail size={20} />
              </a>
              <a href="https://zalo.me/0394062185" className="text-gray-600 hover:text-black">
                Zalo
              </a>
              <a href="https://www.youtube.com/@nicetechvn" className="text-gray-600 hover:text-black">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {footerLinks.map((group, index) => (
            <div key={index}>
              <h4 className="font-bold mb-4">{group.title}</h4>
              <ul className="space-y-2">
                {group.links.map((link, i) => (
                  <li key={i}>
                    <a href={link.href} className="text-gray-600 hover:text-black">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-200 mt-16 pt-8 flex flex-col md:flex-row justify-between">
          <div className="text-gray-500 mb-4 md:mb-0">
            © 2024 NiceTech. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-gray-800">Điều khoản sử dụng</a>
            <a href="#" className="text-gray-500 hover:text-gray-800">Chính sách bảo mật</a>
            <a href="#" className="text-gray-500 hover:text-gray-800">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
